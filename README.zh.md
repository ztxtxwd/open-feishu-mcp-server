# 模型上下文协议 (MCP) 服务器 + 飞书 OAuth

这是一个支持远程连接的[模型上下文协议 (MCP)](https://modelcontextprotocol.io/introduction) 服务器，内置了飞书 OAuth 认证。

本项目修改自 [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth)，将 GitHub OAuth 替换为飞书 OAuth，并集成了基于飞书官方 MCP 库（Feishu/Lark OpenAPI MCP）的工具。

您可以将其部署到自己的 Cloudflare 账户，并在创建自己的飞书 OAuth 客户端应用后，拥有一个功能完整的远程 MCP 服务器。用户可以通过飞书账号登录连接到您的 MCP 服务器。

您可以将此项目作为参考示例，了解如何使用 [`workers-oauth-provider` 库](https://github.com/cloudflare/workers-oauth-provider) 将其他 OAuth 提供商与部署到 Cloudflare 的 MCP 服务器集成。

MCP 服务器（由 [Cloudflare Workers](https://developers.cloudflare.com/workers/) 提供支持）：

* 对您的 MCP 客户端充当 OAuth _服务器_
* 对您的_真实_ OAuth 服务器（在本例中为飞书）充当 OAuth _客户端_

## 开始使用

直接克隆仓库并安装依赖：`npm install`。

### 生产环境配置

在[飞书开放平台](https://open.feishu.cn/)创建一个新的飞书应用：
1. 访问[飞书开放平台](https://open.feishu.cn/)并登录
2. 点击"开发者后台"并创建一个新应用
3. 在应用设置中：
   - 进入"安全设置"并添加重定向 URL：`https://mcp-feishu-oauth.<your-subdomain>.workers.dev/callback`
   - 进入"权限与功能"并添加以下权限：
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
   - 记下您的应用 ID 和应用密钥
4. 通过 Wrangler 设置密钥
```bash
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put COOKIE_ENCRYPTION_KEY # 在此处添加任意随机字符串，例如 openssl rand -hex 32
```

#### 设置 KV 命名空间
- 创建 KV 命名空间：
`wrangler kv:namespace create "OAUTH_KV"`
- 使用 KV ID 更新 Wrangler 文件

#### 部署和测试
部署 MCP 服务器，使其在您的 workers.dev 域名上可用
`wrangler deploy`

使用 [Inspector](https://modelcontextprotocol.io/docs/tools/inspector) 测试远程服务器：

```
npx @modelcontextprotocol/inspector@latest
```
输入 `https://mcp-feishu-oauth.<your-subdomain>.workers.dev/sse` 并点击连接。完成身份验证流程后，您将看到工具正常工作。

现在，您已经部署了一个带有飞书 OAuth 认证的远程 MCP 服务器！

### 访问控制

此 MCP 服务器使用飞书 OAuth 进行身份验证。所有经过身份验证的飞书用户都可以访问基本工具，如 "add" 和 "userInfoFeishu"。

"generateImage" 工具仅限于 `ALLOWED_USER_IDS` 配置中列出的特定飞书用户：

```typescript
// 添加有权访问图像生成的飞书用户 ID
const ALLOWED_USER_IDS = new Set([
  'ou_xxxxxxxxxxxxxxxx',
  'ou_yyyyyyyyyyyyyyyy'
]);
```

您可以使用 "userInfoFeishu" 工具获取用户的 ID，查看响应中的 `user_id` 字段。

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
        "https://mcp-feishu-oauth.<your-subdomain>.workers.dev/sse"
      ]
    }
  }
}
```

一旦工具（在 🔨 下）出现在界面中，您就可以要求 Claude 使用它们。例如："能否使用数学工具将 23 和 19 相加？"。Claude 应该会调用该工具并显示 MCP 服务器生成的结果。

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

#### 使用 Cursor 和其他 MCP 客户端

要将 Cursor 与您的 MCP 服务器连接，选择 `Type`："Command"，在 `Command` 字段中，将命令和参数字段合并为一个（例如 `npx mcp-remote https://<your-worker-name>.<your-subdomain>.workers.dev/sse`）。

请注意，虽然 Cursor 支持 HTTP+SSE 服务器，但它不支持身份验证，因此您仍需使用 `mcp-remote`（并使用 STDIO 服务器，而不是 HTTP 服务器）。

您可以通过打开客户端的配置文件，添加与 Claude 设置相同的 JSON，并重启 MCP 客户端，将 MCP 服务器连接到其他 MCP 客户端，如 Windsurf。

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
本项目集成了基于飞书官方 MCP 库的工具，包括：
- 文档操作：搜索、导入云文档
- 消息发送：批量发送消息、创建应用消息流卡片
- 任务管理：创建任务、评论、清单
- AI 能力：光学字符识别
- 飞书词典：获取词库列表、词条管理
- 服务台功能：工单消息发送

这些工具使用用户访问令牌（User Access Token）进行身份验证，确保安全访问飞书 API。
