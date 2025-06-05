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
import { RecallTool } from './mcp-tool/document-tool/recall'

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
      if (tool && (tool.name.startsWith('drive.v12.')||tool.name.startsWith('docx.v1.document'))) {
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
    this.server.tool(
      RecallTool.name, 
      RecallTool.description, 
      RecallTool.schema, 
      (params) => RecallTool.handler(params, { userAccessToken: this.props.accessToken, domain: 'https://open.feishu.cn' })
    )
    
    // 新增：创建文本绘图文档小组件块工具
    this.server.tool(
      'createDrawingBlock',
      '在飞书文档中创建基于Mermaid语法的文本绘图文档小组件块',
      {
        document_id: z.string().describe('文档ID'),
        parent_block_id: z.string().describe('父级块ID (可选，默认为文档根)').optional(),
        index: z.number().describe('插入位置 (可选)').optional(),
        drawing_data: z.string().describe('Mermaid绘图数据'),
        theme: z.enum(['default', 'dark', 'forest', 'neutral']).describe('主题 (可选，默认default)').optional(),
      },
      async (params) => {
        // 固定值配置
        const BLOCK_TYPE = 40;                                      // AddOns 文档小组件类型
        const COMPONENT_TYPE_ID = 'blk_631fefbbae02400430b8f9f4';   // 文本绘图组件类型ID
        const REVISION_ID = -1;                                     // 使用最新版本
        const USER_ID_TYPE = 'open_id';                            // 固定使用open_id
        
        const theme = params.theme || 'default';
        const record = JSON.stringify({
          data: params.drawing_data,
          theme,
          view: 'chart',
        });

        console.log(record)

        const blockId = params.parent_block_id || params.document_id;
        const response = await fetch(`https://open.feishu.cn/open-apis/docx/v1/documents/${params.document_id}/blocks/${blockId}/children`, {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${this.props.accessToken}`,
            'Content-Type': 'application/json; charset=utf-8',
          },
          body: JSON.stringify({
            children: [{
              block_type: BLOCK_TYPE,
              add_ons: {
                component_type_id: COMPONENT_TYPE_ID,
                record,
              },
            }],
            index: params.index,
            revision_id: REVISION_ID,
            user_id_type: USER_ID_TYPE,
          }),
        });

        const result = await response.json();
        return {
          content: [{ type: 'text', text: `绘图块创建结果: ${JSON.stringify(result)}` }],
        };
      }
    )
    
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
