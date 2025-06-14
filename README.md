# 模型上下文协议 (MCP) 服务器 + 飞书 OAuth

[English Documentation](README.en.md)

这是一个支持远程连接的[模型上下文协议 (MCP)](https://modelcontextprotocol.io/introduction) 服务器，内置了飞书 OAuth 认证。

本项目修改自 [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth)，将 GitHub OAuth 替换为飞书 OAuth。

您可以将其部署到自己的 Cloudflare 账户，并在创建自己的飞书 OAuth 客户端应用后，拥有一个功能完整的远程 MCP 服务器。用户可以通过飞书账号登录连接到您的 MCP 服务器。

MCP 服务器（由 [Cloudflare Workers](https://developers.cloudflare.com/workers/) 提供支持）：

* 对您的 MCP 客户端充当 OAuth _服务器_
* 对您的_真实_ OAuth 服务器（在本例中为飞书）充当 OAuth _客户端_

## 开始使用

直接克隆仓库并安装依赖：`npm install`。

### 生产环境配置

#### 1. 创建飞书应用

在[飞书开放平台](https://open.feishu.cn/)创建一个新的飞书应用：
1. 访问[飞书开放平台](https://open.feishu.cn/)并登录
2. 点击"开发者后台"并创建一个新应用
3. 在应用设置中：
   - 进入"权限与功能"并添加以下权限：
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
   - 记下您的应用 ID 和应用密钥

#### 2. 配置 Wrangler 密钥

通过 Wrangler 设置密钥：
```bash
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put COOKIE_ENCRYPTION_KEY # 在此处添加任意随机字符串，例如 openssl rand -hex 32
```

#### 3. 设置 KV 命名空间
- 创建 KV 命名空间：
`wrangler kv:namespace create "OAUTH_KV"`
- 使用 KV ID 更新 Wrangler 文件

#### 4. 部署服务器
部署 MCP 服务器，使其在您的 workers.dev 域名上可用：
`wrangler deploy`

部署完成后，记下您的实际 subdomain（会在部署日志中显示）。

#### 5. 配置重定向 URL

部署完成后，回到飞书应用设置：
1. 进入"安全设置"
2. 添加重定向 URL：`https://feishu-mcp-server.<your-actual-subdomain>.workers.dev/callback`
   （将 `<your-actual-subdomain>` 替换为您在部署后获得的实际 subdomain）

#### 测试部署

使用 [Inspector](https://modelcontextprotocol.io/docs/tools/inspector) 测试远程服务器：

```
npx @modelcontextprotocol/inspector@latest
```
输入 `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse` 并点击连接。完成身份验证流程后，您将看到工具正常工作。

现在，您已经部署了一个带有飞书 OAuth 认证的远程 MCP 服务器！

### 访问控制

此 MCP 服务器使用飞书 OAuth 进行身份验证。所有经过身份验证的飞书用户都可以访问所有工具。

您可以使用 "user_info" 工具获取用户信息。

### 从 Claude Desktop 访问远程 MCP 服务器

打开 Claude Desktop 并导航到 Settings -> Developer -> Edit Config。这将打开控制 Claude 可以访问哪些 MCP 服务器的配置文件。

用以下配置替换内容。重启 Claude Desktop 后，将打开一个浏览器窗口，显示您的飞书 OAuth 登录页面。完成身份验证流程，授予 Claude 访问您的 MCP 服务器的权限。授予访问权限后，工具将可供您使用。

```
{
  "mcpServers": {
    "math": {
      "command": "npx",
      "args": [
        "mcp-remote",
        "https://my-mcp-server.<your-subdomain>.workers.dev/sse"
      ]
    }
  }
}
```

### 本地开发环境

如果您想迭代和测试您的 MCP 服务器，可以在本地开发环境中进行。这需要您创建另一个飞书应用或配置现有应用：
1. 在您的飞书应用设置中：
   - 进入"安全设置"并添加重定向 URL：`http://localhost:8788/callback`
   - 确保您拥有以下权限：
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
   - 记下您的应用 ID 和应用密钥
2. 在项目根目录创建一个 `.dev.vars` 文件，内容如下：
```
FEISHU_APP_ID=your_development_feishu_app_id
FEISHU_APP_SECRET=your_development_feishu_app_secret
COOKIE_ENCRYPTION_KEY=any_random_string_here
```

#### 开发和测试
在本地运行服务器，使其在 `http://localhost:8788` 可用
`wrangler dev`

要测试本地服务器，在 Inspector 中输入 `http://localhost:8788/sse` 并点击连接。按照提示操作后，您将能够"列出工具"。

#### 使用 Claude 和其他 MCP 客户端

当使用 Claude 连接到您的远程 MCP 服务器时，您可能会看到一些错误消息。这是因为 Claude Desktop 尚不完全支持远程 MCP 服务器，所以有时会出现混淆。要验证 MCP 服务器是否已连接，请将鼠标悬停在 Claude 界面右下角的 🔨 图标上。您应该会看到您的工具在那里可用。

#### 使用 Cursor 

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=feishu&config=eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0Ojg3ODgvc3NlIn0%3D)

或者使用下面的配置：

```
{
  "mcpServers": {
    "feishu": {
      "url": "http://localhost:8788/sse"
    }
  }
}
```

## 工作原理

#### OAuth Provider
OAuth Provider 库是 Cloudflare Workers 的完整 OAuth 2.1 服务器实现。它处理 OAuth 流程的复杂性，包括令牌颁发、验证和管理。在此项目中，它扮演双重角色：

- 对连接到您服务器的 MCP 客户端进行身份验证
- 管理与飞书 OAuth 服务的连接
- 在 KV 存储中安全地存储令牌和身份验证状态

#### Durable MCP
Durable MCP 通过 Cloudflare 的 Durable Objects 扩展了基本 MCP 功能，提供：
- MCP 服务器的持久状态管理
- 请求之间安全存储身份验证上下文
- 通过 `this.props` 访问已验证的用户信息
- 基于用户身份支持条件工具可用性

#### MCP Remote
MCP Remote 库使您的服务器能够公开可由 MCP 客户端（如 Inspector）调用的工具。它：
- 定义客户端和服务器之间通信的协议
- 提供定义工具的结构化方式
- 处理请求和响应的序列化和反序列化
- 维护客户端和服务器之间的服务器发送事件 (SSE) 连接

#### 飞书 MCP 工具

**发展方向**：本项目正在逐步从使用飞书官方 MCP 库过渡到实现自定义工具，以获得更好的控制和性能。我们正在淘汰官方库，转而使用自主开发的工具。

所有工具都使用用户访问令牌（User Access Token）进行身份验证，确保安全访问飞书 API。自定义工具提供了增强的功能，具有更好的错误处理和性能优化。
