[![MCP Badge](https://lobehub.com/badge/mcp/ztxtxwd-open-feishu-mcp-server)](https://lobehub.com/mcp/ztxtxwd-open-feishu-mcp-server)
# Feishu MCP Server

[中文文档](README.md)

This is a [Model Context Protocol (MCP)](https://modelcontextprotocol.io/introduction) server that supports remote connections with built-in Feishu OAuth authentication.

This project is modified from [cloudflare/ai/demos/remote-mcp-github-oauth](https://github.com/cloudflare/ai/tree/main/demos/remote-mcp-github-oauth), replacing GitHub OAuth with Feishu OAuth.

You can deploy it to your own Cloudflare account, and after creating your own Feishu OAuth client application, you'll have a fully functional remote MCP server. Users can connect to your MCP server by logging in with their Feishu account.

## 📋 Table of Contents

- [Comparison with Official Feishu MCP Server](#-comparison-with-official-feishu-mcp-server)
- [Features](#-features)
- [Quick Start](#-quick-start)
- [Deployment Methods](#-deployment-methods)
  - [Production Deployment](#production-deployment)
  - [Local Development Environment](#local-development-environment)
- [Client Integration](#-client-integration)
  - [Testing with Inspector](#testing-with-inspector)
  - [Using Cursor](#using-cursor)
  - [Using ChatWise](#using-chatwise)
- [Access Control](#-access-control)
- [Tool Development Roadmap](#-tool-development-roadmap)
- [Technical Architecture](#-technical-architecture)
- [Development Guide](#-development-guide)

## 🆚 Comparison with Official Feishu MCP Server

While Feishu officially released an MCP Server, this project has significant advantages in the following areas:

### 🎯 Zero-Configuration Experience
- **This Project**: Users need no manual configuration, uses `user_access_token` throughout with automatic refresh on expiration
- **Official Project**: Requires users to manually configure multiple parameters with complex setup

### 🚀 Ultimate Usability Optimization
- **This Project**: Deep optimization of tool size and structure, especially for complex features like document block creation and nested block creation tools, ensuring proper functionality in Cursor and other clients
- **Official Project**: Simple API-to-MCP tool conversion, with some tools being too large and having usability issues in practice

### 🌐 Cutting-Edge Infrastructure
- Supports deployment on Cloudflare Workers, enjoying the industry's most advanced edge computing infrastructure

## ✨ Features

- 🎯 **Zero-Configuration Experience**: No manual parameter configuration needed, automatic `user_access_token` management and refresh
- 🔐 **Feishu OAuth Authentication**: Secure user identity verification
- 🌐 **Remote MCP Server**: Supports multi-client connections
- 🚀 **Cloudflare Workers**: High-performance, globally distributed deployment with cutting-edge edge computing infrastructure
- 🛠️ **Deeply Optimized Toolset**: Specially optimized for document creation, nested blocks, and other complex tools ensuring proper functionality across various clients
- 🔧 **Local Development Support**: Convenient development and testing environment
- ⚡ **Ultimate Usability**: Significant improvement in practical usage experience and stability compared to the official MCP Server

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ and npm
- Cloudflare account
- Feishu Open Platform account

### Installation

```bash
# Clone repository
git clone <repository-url>
cd open-feishu-mcp-server

# Install dependencies
npm install
```

## 🚀 Deployment Methods

### Production Deployment

#### Step 1: Create Feishu Application

1. Visit [Feishu Open Platform](https://open.feishu.cn/) and log in
2. Click "Developer Console" and create a new application
3. Configure permissions in application settings:
   - Go to "Permissions & Features" and add the following permissions:
     - "Get User ID" (auth:user.id:read)
     - "Get User Task Information" (task:task:read)
     - "Get User Authorization Credentials" (offline_access)
     - "Get User Basic Information" (user_profile)
     
        ...
4. Note your **App ID** and **App Secret**

#### Step 2: Configure Cloudflare Environment

```bash
# Set necessary secrets
wrangler secret put FEISHU_APP_ID
wrangler secret put FEISHU_APP_SECRET
wrangler secret put COOKIE_ENCRYPTION_KEY  # Generate with: openssl rand -hex 32

# Create KV namespace
wrangler kv:namespace create "OAUTH_KV"
```

#### Step 3: Update Configuration File

Update the KV namespace configuration in `wrangler.toml` with the KV ID obtained from Step 2.

#### Step 4: Deploy Server

```bash
npm run deploy
```

After deployment, note your actual subdomain (displayed in deployment logs).

#### Step 5: Configure Redirect URL

Return to Feishu application settings:
1. Go to "Security Settings"
2. Add redirect URL: `https://feishu-mcp-server.<your-actual-subdomain>.workers.dev/callback`

### Local Development Environment

#### Configure Local Environment

1. **Configure Feishu Application**:
   - Add to "Security Settings" in Feishu app: `http://localhost:8788/callback`
   - Ensure required permissions (same as production environment)

2. **Create Environment Variables File**:
   Create `.dev.vars` file in project root:
   ```
   FEISHU_APP_ID=your_development_feishu_app_id
   FEISHU_APP_SECRET=your_development_feishu_app_secret
   COOKIE_ENCRYPTION_KEY=any_random_string_here
   ```

#### Start Local Server

```bash
npm run dev
```

Server will run at `http://localhost:8788`.

## 🔌 Client Integration

### Testing with Inspector

Test your server using the official MCP Inspector:

```bash
npx @modelcontextprotocol/inspector@latest
```

**Connection URLs**:
- Production: `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`
- Local: `http://localhost:8788/sse`

### Using Cursor

Quick setup with one-click install button:

[![Install MCP Server](https://cursor.com/deeplink/mcp-install-dark.svg)](https://cursor.com/install-mcp?name=feishu&config=eyJ1cmwiOiJodHRwOi8vbG9jYWxob3N0Ojg3ODgvc3NlIn0%3D)

Or manual configuration:

```json
{
  "mcpServers": {
    "feishu": {
      "url": "http://localhost:8788/sse"
    }
  }
}
```

### Using ChatWise

1. **Configuration Steps**:
   - Open ChatWise settings interface
   - Navigate to tools options
   - Add new command line input/output (stdio)
   - Command: `npx -y mcp-remote ${URL}`

2. **Connection URLs**:
   - Local: `http://localhost:8788/sse`
   - Production: `https://feishu-mcp-server.<your-subdomain>.workers.dev/sse`

3. **First Use**:
   - After saving configuration, Feishu OAuth login page will automatically open
   - Complete authorization to use Feishu-related features

## 🔐 Access Control

- **Authentication**: Uses Feishu OAuth for user identity verification
- **Permission Scope**: All authenticated Feishu users can access all tools

## 📋 Tool Development Roadmap

### 🚧 Currently in Development (Feishu Documents)
- **🔧 Development Assistant Tools**
  - ✅ Developer document content search and recall
- **📄 Document Basic Operations**
  - ✅ Document block tree structure retrieval
  - ✅ Get block type creation parameter schema
  - ✅ Create document blocks (supports various block types)
  - ✅ Update document block content
  - ✅ Batch delete document blocks
- **🔧 Document Advanced Features**
  - ✅ Table creation and operations
  - ✅ Image, video, file upload and insertion
  - ✅ Markdown import functionality
  - ✅ Media upload and management
  - ✅ Document search

### 🎯 Future Plans
- **📊 Spreadsheets (Sheets)**
  - 📋 Worksheet basic operations (create, delete, rename)
  - 📋 Cell data read/write
  - 📋 Formula calculation and application
  - 📋 Chart creation and editing
  - 📋 Data filtering and sorting
  - 📋 Collaboration and permission management

- **🗃️ Multi-dimensional Tables (Base/Bitable)**
  - 📋 Data table basic operations
  - 📋 Record CRUD operations
  - 📋 Field type management
  - 📋 View creation and configuration
  - 📋 Automation rule setup
  - 📋 Data import/export

  ...

**Legend**: ✅ Completed | 🔄 In Development | 📋 Planned

## 🛠️ Technical Architecture

### Architecture Components

#### OAuth Provider
Complete OAuth 2.1 server implementation that handles:
- MCP client authentication
- Feishu OAuth service connection management
- Secure token management in KV storage

#### Durable MCP
MCP extension based on Cloudflare Durable Objects:
- Persistent state management
- Authentication context storage
- User information access via `this.props`
- Conditional tool availability based on user identity

#### MCP Remote
Supports remote MCP client connections:
- Defines client-server communication protocol
- Provides structured tool definition approach
- Handles request/response serialization
- Maintains SSE connections

## 👨‍💻 Development Guide

### MCP Server (Powered by [Cloudflare Workers](https://developers.cloudflare.com/workers/))

This project implements dual OAuth roles:
* Acts as OAuth **Server** to MCP clients
* Acts as OAuth **Client** to Feishu OAuth service

### Tool Development

Current tools use user access tokens for authentication, ensuring:
- Secure Feishu API access
- User permission-based feature access
- Complete error handling and logging

---

**📝 Note**: Ensure all environment variables and Feishu application settings are properly configured before deployment. If you encounter issues, please check Feishu application permission configuration and redirect URL settings. 

## Star History

[![Star History Chart](https://api.star-history.com/svg?repos=ztxtxwd/open-feishu-mcp-server&type=Date)](https://star-history.com/#ztxtxwd/open-feishu-mcp-server&Date)
