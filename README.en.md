# Model Context Protocol (MCP) Server + Feishu OAuth

[中文文档](README.md)

This is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that supports remote MCP connections, with Feishu OAuth built-in.

This project is modified from [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth), replacing GitHub OAuth with Feishu OAuth.

You can deploy it to your own Cloudflare account, and after you create your own Feishu OAuth client app, you'll have a fully functional remote MCP server. Users will be able to connect to your MCP server by signing in with their Feishu account.

The MCP server (powered by [Cloudflare Workers](https://developers.cloudflare.com/workers/)):

* Acts as OAuth _Server_ to your MCP clients
* Acts as OAuth _Client_ to your _real_ OAuth server (in this case, Feishu)

## Getting Started

Clone the repo directly & install dependencies: `npm install`.

### For Production

#### 1. Create Feishu Application

Create a new Feishu application on the [Feishu Open Platform](https://open.feishu.cn/):
1. Go to the [Feishu Open Platform](https://open.feishu.cn/) and log in
2. Click "Developer Console" and create a new application
3. In the application settings:
   - Go to "Permission & Scopes" and add the following permissions:
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
   - Note your App ID and App Secret

#### 2. Configure Wrangler Secrets

Set secrets via Wrangler:
```bash
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put COOKIE_ENCRYPTION_KEY # add any random string here e.g. openssl rand -hex 32
```

#### 3. Set up KV Namespace
- Create the KV namespace:
`wrangler kv:namespace create "OAUTH_KV"`
- Update the Wrangler file with the KV ID

#### 4. Deploy Server
Deploy the MCP server to make it available on your workers.dev domain:
`wrangler deploy`

After deployment, note your actual subdomain (it will be shown in the deployment logs).

#### 5. Configure Redirect URL

After deployment, go back to your Feishu application settings:
1. Go to "Security Settings"
2. Add the redirect URL: `https://feishu-mcp-server.<your-actual-subdomain>.workers.dev/callback`
   (Replace `<your-actual-subdomain>` with your actual subdomain obtained after deployment)

#### Test Deployment

Test the remote server using [Inspector](https://modelcontextprotocol.io/docs/tools/inspector):

```
npx @modelcontextprotocol/inspector@latest
```
Enter `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse` and hit connect. Once you go through the authentication flow, you'll see the Tools working.

You now have a remote MCP server deployed with Feishu OAuth authentication!

### Access Control

This MCP server uses Feishu OAuth for authentication. All authenticated Feishu users can access all tools.

You can use the "user_info" tool to get user information.

### Access the remote MCP server from Claude Desktop

Open Claude Desktop and navigate to Settings -> Developer -> Edit Config. This opens the configuration file that controls which MCP servers Claude can access.

Replace the content with the following configuration. Once you restart Claude Desktop, a browser window will open showing your Feishu OAuth login page. Complete the authentication flow to grant Claude access to your MCP server. After you grant access, the tools will become available for you to use.

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

### For Local Development

If you'd like to iterate and test your MCP server, you can do so in local development. This will require you to create another Feishu application or configure your existing one:
1. In your Feishu application settings:
   - Go to "Security Settings" and add the redirect URL: `http://localhost:8788/callback`
   - Make sure you have the following permissions:
     - "获取用户 ID" (auth:user.id:read)
     - "获取用户任务信息" (task:task:read)
     - "获取用户授权凭证" (offline_access)
     - "获取用户基本信息" (user_profile)
   - Note your App ID and App Secret
2. Create a `.dev.vars` file in your project root with:
```
FEISHU_APP_ID=your_development_feishu_app_id
FEISHU_APP_SECRET=your_development_feishu_app_secret
COOKIE_ENCRYPTION_KEY=any_random_string_here
```

#### Develop & Test
Run the server locally to make it available at `http://localhost:8788`
`wrangler dev`

To test the local server, enter `http://localhost:8788/sse` into Inspector and hit connect. Once you follow the prompts, you'll be able to "List Tools".

#### Using Claude and other MCP Clients

When using Claude to connect to your remote MCP server, you may see some error messages. This is because Claude Desktop doesn't yet support remote MCP servers, so it sometimes gets confused. To verify whether the MCP server is connected, hover over the 🔨 icon in the bottom right corner of Claude's interface. You should see your tools available there.

#### Using Cursor

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=feishu&config=eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0Ojg3ODgvc3NlIn0%3D)

Or use the configuration below:

```
{
  "mcpServers": {
    "feishu": {
      "url": "http://localhost:8788/sse"
    }
  }
}
```

## How does it work?

#### OAuth Provider
The OAuth Provider library serves as a complete OAuth 2.1 server implementation for Cloudflare Workers. It handles the complexities of the OAuth flow, including token issuance, validation, and management. In this project, it plays the dual role of:

- Authenticating MCP clients that connect to your server
- Managing the connection to Feishu's OAuth services
- Securely storing tokens and authentication state in KV storage

#### Durable MCP
Durable MCP extends the base MCP functionality with Cloudflare's Durable Objects, providing:
- Persistent state management for your MCP server
- Secure storage of authentication context between requests
- Access to authenticated user information via `this.props`
- Support for conditional tool availability based on user identity

#### MCP Remote
The MCP Remote library enables your server to expose tools that can be invoked by MCP clients like the Inspector. It:
- Defines the protocol for communication between clients and your server
- Provides a structured way to define tools
- Handles serialization and deserialization of requests and responses
- Maintains the Server-Sent Events (SSE) connection between clients and your server

#### Feishu MCP Tools

**Development Direction**: This project is gradually transitioning from using the official Feishu MCP library to implementing custom tools for better control and performance. We are phasing out the official library in favor of self-developed tools.

All tools use User Access Tokens for authentication, ensuring secure access to Feishu APIs. The custom tools provide enhanced functionality with better error handling and performance optimization. 