import OAuthProvider from '@cloudflare/workers-oauth-provider'
import { McpAgent } from 'agents/mcp'
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js'
import { z } from 'zod'
import { FeishuHandler } from './feishu-handler'
import { Props, refreshUpstreamAuthToken } from './utils'
import { caseTransf } from './mcp-tool/utils/case-transf'
import { larkOapiHandler } from './mcp-tool/utils/handler'
import { getShouldUseUAT } from './mcp-tool/utils/get-should-use-uat'
import { TokenMode } from './mcp-tool/types'
import { docxBuiltinToolName, docxBuiltinTools } from './mcp-tool/tools/zh/builtin-tools/docx/builtin'
import { GenTools } from './mcp-tool/tools/zh/gen-tools'
import { Client } from '@larksuiteoapi/node-sdk'
import { env } from 'cloudflare:workers'
import { oapiHttpInstance } from './utils/http-instance'
import { BuiltinTools } from './mcp-tool/tools/zh/builtin-tools'

const ALLOWED_USER_IDS = new Set([
  // Add Feishu user IDs of users who should have access to the image generation tool
  // For example: 'ou_xxxx', 'ou_yyyy'
])
const client = new Client({
  appId: env.FEISHU_APP_ID,
  appSecret: env.FEISHU_APP_SECRET,
})
client.httpInstance = oapiHttpInstance
export class MyMCP extends McpAgent<Props, Env> {
  server = new McpServer({
    name: 'Feishu OAuth Proxy Demo',
    version: '1.0.0',
  })

  async init() {
    // Hello, world!
    this.server.tool('add', 'Add two numbers the way only MCP can', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
      content: [{ type: 'text', text: String(a + b) }],
    }))

    // Use the upstream access token to facilitate tools
    this.server.tool('userInfoFeishu', 'Get user info from Feishu', {}, async () => {
      const response = await fetch('https://open.feishu.cn/open-apis/authen/v1/user_info', {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      })

      if (!response.ok) {
        return {
          content: [
            {
              type: 'text',
              text: 'Failed to fetch user info: ' + (await response.text()),
            },
          ],
        }
      }

      const data = await response.json()
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data),
          },
        ],
      }
    })

    for (const tool of BuiltinTools) {
      if (tool) {
        this.server.tool(caseTransf(tool.name, 'camel'), tool.description, tool.schema, (params: any) => {
          try {
            const handler = tool.customHandler || larkOapiHandler
            return handler(client, { ...params, useUAT: true }, { userAccessToken: this.props.accessToken, tool })
          } catch (error) {
            return {
              isError: true,
              content: [{ type: 'text' as const, text: `Error: ${JSON.stringify((error as Error)?.message)}` }],
            }
          }
        })
      }
    }
    // const tool = GenTools.find((tool) => tool.name === 'drive.v1.fileComment.list')
    for (const tool of [...GenTools]) {
      if (tool && (tool.name == 'drive.v1.fileComment.list'||tool.name == 'docx.v1.documentBlock.list')) {
        this.server.tool(caseTransf(tool.name, 'camel'), tool.description, tool.schema, (params: any) => {
          try {
            const handler = tool.customHandler || larkOapiHandler
            return handler(client, { ...params, useUAT: true }, { userAccessToken: this.props.accessToken, tool })
          } catch (error) {
            return {
              isError: true,
              content: [{ type: 'text' as const, text: `Error: ${JSON.stringify((error as Error)?.message)}` }],
            }
          }
        })
      }
    }
  }
}

export default new OAuthProvider({
  apiRoute: '/sse',
  apiHandler: MyMCP.mount('/sse'),
  defaultHandler: FeishuHandler,
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
  tokenExchangeCallback: async (options) => {
    // console.log('tokenExchangeCallback', options)
    if (options.grantType === 'authorization_code') {
      return {
        accessTokenProps: options.props,
      }
    }
    if (options.grantType === 'refresh_token') {
      const [accessToken, refreshToken, expiresIn, errResponse] = await refreshUpstreamAuthToken({
        refreshToken: options.props.refreshToken,
        upstream_url: 'https://open.feishu.cn/open-apis/authen/v2/oauth/token',
        client_id: env.FEISHU_APP_ID,
        client_secret: env.FEISHU_APP_SECRET,
      })
      // console.log('refreshUpstreamAuthToken', refreshToken)
      if (errResponse) {
      } else {
        return {
          newProps: {
            ...options.props,
            accessToken: accessToken,
            refreshToken: refreshToken
          },
          accessTokenTTL: expiresIn,
        }
      }
    }
  },
})
