import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpAgent } from 'agents/mcp';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Client } from '@larksuiteoapi/node-sdk';
import { env } from 'cloudflare:workers';

import { FeishuHandler } from './feishu-handler';
import { Props, refreshUpstreamAuthToken } from './utils';
import { oapiHttpInstance } from './utils/http-instance';
import { RecallTool } from './mcp-tool/document-tool/recall';
import { blockTreeTool, docxBlockBatchDelete, docxBlockPatch, docxImageOrVideoOrFileCreate, docxMarkdownImport, docxV1BlockTypeSchemaGet, docxV1DocumentBlockChildrenCreateSimple, docxV1DocumentTableCreate } from './tools/document';
import { mediaUploadTool } from './tools/drive';

const client = new Client({
  appId: env.FEISHU_APP_ID,
  appSecret: env.FEISHU_APP_SECRET,
});
client.httpInstance = oapiHttpInstance;
export class MyMCP extends McpAgent<Props, Env> {
  server = new McpServer({
    name: 'Feishu OAuth Proxy Demo',
    version: '1.0.0',
  });

  async init() {
    // Hello, world!
    // this.server.tool('add', 'Add two numbers the way only MCP can', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
    //   content: [{ type: 'text', text: String(a + b) }],
    // }))

    // Use the upstream access token to facilitate tools
    this.server.tool('user_info', 'Get user info from Feishu', {}, async () => {
      const response = await fetch('https://open.feishu.cn/open-apis/authen/v1/user_info', {
        headers: {
          Authorization: `Bearer ${this.props.accessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      });

      if (!response.ok) {
        return {
          content: [
            {
              type: 'text',
              text: 'Failed to fetch user info: ' + (await response.text()),
            },
          ],
        };
      }

      const data = await response.json();
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data),
          },
        ],
      };
    });

    // for (const tool of BuiltinTools) {
    //   if (tool) {
    //     this.server.tool(caseTransf(tool.name, 'camel'), tool.description, tool.schema, (params: any) => {
    //       try {
    //         const handler = tool.customHandler || larkOapiHandler
    //         return handler(client, { ...params, useUAT: true }, { userAccessToken: this.props.accessToken, tool })
    //       } catch (error) {
    //         return {
    //           isError: true,
    //           content: [{ type: 'text' as const, text: `Error: ${JSON.stringify((error as Error)?.message)}` }],
    //         }
    //       }
    //     })
    //   }
    // }
    // const tool = GenTools.find((tool) => tool.name === 'drive.v1.fileComment.list')
    // for (const tool of [...GenTools]) {
    //   if (tool && (tool.name.startsWith('drive.v12.') || tool.name.startsWith('docx.v1.document'))) {
    //     this.server.tool(caseTransf(tool.name, 'camel'), tool.description, tool.schema, (params: any) => {
    //       try {
    //         const handler = tool.customHandler || larkOapiHandler
    //         return handler(client, { ...params, useUAT: true }, { userAccessToken: this.props.accessToken, tool })
    //       } catch (error) {
    //         return {
    //           isError: true,
    //           content: [{ type: 'text' as const, text: `Error: ${JSON.stringify((error as Error)?.message)}` }],
    //         }
    //       }
    //     })
    //   }
    // }
    this.server.tool(RecallTool.name, RecallTool.description, RecallTool.schema, (params) =>
      RecallTool.handler(params, { userAccessToken: this.props.accessToken, domain: 'https://open.feishu.cn' }),
    );

    // 新增：创建文本绘图文档小组件块工具
    // this.server.tool(docxAddonsMermaidCreate.name, docxAddonsMermaidCreate.description, docxAddonsMermaidCreate.schema, async (params) => {
    //   try {
    //     return await docxAddonsMermaidCreate.customHandler(client, params, {
    //       userAccessToken: this.props.accessToken,
    //       tool: docxAddonsMermaidCreate,
    //     })
    //   } catch (error) {
    //     console.error('文本绘图工具执行失败:', error)
    //     return {
    //       isError: true,
    //       content: [{ type: 'text', text: `创建文本绘图块失败: ${error instanceof Error ? error.message : '未知错误'}` }],
    //     }
    //   }
    // })

    this.server.tool(blockTreeTool.name, blockTreeTool.description, blockTreeTool.schema, async (params) => {
      try {
        return await blockTreeTool.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: blockTreeTool });
      } catch (error) {
        console.error('blockTreeTool 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `获取文档块树失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });
    this.server.tool(
      docxV1BlockTypeSchemaGet.name,
      docxV1BlockTypeSchemaGet.description,
      docxV1BlockTypeSchemaGet.schema,
      async (params) => {
        try {
          return await docxV1BlockTypeSchemaGet.customHandler(params);
        } catch (error) {
          console.error('docxV1BlockTypeSchemaGet 工具执行失败:', error);
          return {
            isError: true,
            content: [{ type: 'text', text: `获取块类型 schema 失败: ${error instanceof Error ? error.message : '未知错误'}` }],
          };
        }
      },
    );
    this.server.tool(
      docxV1DocumentBlockChildrenCreateSimple.name,
      docxV1DocumentBlockChildrenCreateSimple.description,
      docxV1DocumentBlockChildrenCreateSimple.schema,
      async (params) => {
        try {
          return await docxV1DocumentBlockChildrenCreateSimple.customHandler(client, params, {
            userAccessToken: this.props.accessToken,
            tool: docxV1DocumentBlockChildrenCreateSimple,
          });
        } catch (error) {
          console.error('docxV1DocumentBlockChildrenCreateSimple 工具执行失败:', error);
          return {
            isError: true,
            content: [{ type: 'text', text: `创建块失败: ${error instanceof Error ? error.message : '未知错误'}` }],
          };
        }
      },
    );

    this.server.tool(mediaUploadTool.name, mediaUploadTool.description, mediaUploadTool.schema, async (params) => {
      try {
        return await mediaUploadTool.customHandler(params, { userAccessToken: this.props.accessToken });
      } catch (error) {
        console.error('mediaUploadTool 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `mediaUploadTool 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });

    this.server.tool(docxBlockPatch.name, docxBlockPatch.description, docxBlockPatch.schema, async (params) => {
      try {
        return await docxBlockPatch.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxBlockPatch });
      } catch (error) {
        console.error('docxBlockPatch 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `docxBlockPatch 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });

    this.server.tool(docxV1DocumentTableCreate.name, docxV1DocumentTableCreate.description, docxV1DocumentTableCreate.schema, async (params) => {
      try {
        return await docxV1DocumentTableCreate.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxV1DocumentTableCreate });
      } catch (error) {
        console.error('docxV1DocumentTableCreate 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `docxV1DocumentTableCreate 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });

    this.server.tool(docxImageOrVideoOrFileCreate.name, docxImageOrVideoOrFileCreate.description, docxImageOrVideoOrFileCreate.schema, docxImageOrVideoOrFileCreate.customHandler);

    this.server.tool(docxMarkdownImport.name, docxMarkdownImport.description, docxMarkdownImport.schema, async (params) => {
      try {
        return await docxMarkdownImport.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxMarkdownImport });
      } catch (error) {
        console.error('docxMarkdownImport 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `docxMarkdownImport 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });

    this.server.tool(docxBlockBatchDelete.name, docxBlockBatchDelete.description, docxBlockBatchDelete.schema, async (params) => {
      try {
        return await docxBlockBatchDelete.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxBlockBatchDelete });
      } catch (error) {
        console.error('docxBlockBatchDelete 工具执行失败:', error);
        return {
          isError: true,
          content: [{ type: 'text', text: `docxBlockBatchDelete 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
        };
      }
    });
  }
}

export default new OAuthProvider({
  apiHandlers: {
    '/mcp': MyMCP.serve('/mcp'),
    '/sse': MyMCP.serveSSE('/sse'),
  },
  defaultHandler: FeishuHandler,
  authorizeEndpoint: '/authorize',
  tokenEndpoint: '/token',
  clientRegistrationEndpoint: '/register',
  tokenExchangeCallback: async (options) => {
    // console.log('tokenExchangeCallback', options)
    if (options.grantType === 'authorization_code') {
      return {
        accessTokenProps: options.props,
      };
    }
    if (options.grantType === 'refresh_token') {
      const [accessToken, refreshToken, expiresIn, errResponse] = await refreshUpstreamAuthToken({
        refreshToken: options.props.refreshToken,
        upstream_url: 'https://open.feishu.cn/open-apis/authen/v2/oauth/token',
        client_id: env.FEISHU_APP_ID,
        client_secret: env.FEISHU_APP_SECRET,
      });
      // console.log('refreshUpstreamAuthToken', refreshToken)
      if (!errResponse){
        return {
          newProps: {
            ...options.props,
            accessToken: accessToken,
            refreshToken: refreshToken,
          },
          accessTokenTTL: expiresIn,
        };
      }
    }
  },
});
