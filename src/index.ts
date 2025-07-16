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
import { z } from 'zod';
import { driveCommentBatch, driveCommentList,driveCommentPatch,driveCommentCreate,driveCommentGet } from './tools/drive/comment';
import { driveReplyList, driveReplyUpdate, driveReplyDelete } from './tools/drive/reply';
import { wikiNodeInfoGet } from './tools/wiki/space';
import { sheetRangeRead, sheetInfoGet,sheetPatch } from './tools/sheet';
import { suiteSearch } from './tools/suite';
import { userInfo } from './tools/authen/user_info';

import { GenTools } from './mcp-tool/tools/zh/gen-tools';

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
  // 统一回调，打包params和client、userAccessToken，传给customHandler
  async handler(params: any, customHandler: any) {
    return await customHandler(params, client, this.props.accessToken);
  }

  async init() {
    // Hello, world!
    // this.server.tool('add', 'Add two numbers the way only MCP can', { a: z.number(), b: z.number() }, async ({ a, b }) => ({
    //   content: [{ type: 'text', text: String(a + b) }],
    // }))

    // Use the upstream access token to facilitate tools
    
    this.server.tool(userInfo.name, userInfo.description, userInfo.inputSchema, async (params) => {
      return await userInfo.customHandler(params, client, this.props.accessToken);
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
    //     this.server.tool(tool.name, tool.description, tool.schema, (params: any) => {
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

    this.server.tool(blockTreeTool.name, blockTreeTool.description, blockTreeTool.inputSchema, async (params) => {
      return await this.handler(params, blockTreeTool.customHandler);
    });
    this.server.tool(
      docxV1BlockTypeSchemaGet.name,
      docxV1BlockTypeSchemaGet.description,
      docxV1BlockTypeSchemaGet.schema,
      async (params) => {
        return await docxV1BlockTypeSchemaGet.customHandler(params);
      },
    );
    this.server.tool(
      docxV1DocumentBlockChildrenCreateSimple.name,
      docxV1DocumentBlockChildrenCreateSimple.description,
      docxV1DocumentBlockChildrenCreateSimple.schema,
      async (params) => {
        return await docxV1DocumentBlockChildrenCreateSimple.customHandler(client, params, {
          userAccessToken: this.props.accessToken,
          tool: docxV1DocumentBlockChildrenCreateSimple,
        });
      },
    );

    this.server.tool(mediaUploadTool.name, mediaUploadTool.description, mediaUploadTool.schema, async (params) => {
      return await mediaUploadTool.customHandler(params, { userAccessToken: this.props.accessToken });
    });

    this.server.tool(docxBlockPatch.name, docxBlockPatch.description, docxBlockPatch.inputSchema, async (params) => {
      return await this.handler(params, docxBlockPatch.customHandler);
    });

    this.server.tool(docxV1DocumentTableCreate.name, docxV1DocumentTableCreate.description, docxV1DocumentTableCreate.schema, async (params) => {
      return await docxV1DocumentTableCreate.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxV1DocumentTableCreate });
    });

    this.server.tool(docxImageOrVideoOrFileCreate.name, docxImageOrVideoOrFileCreate.description, docxImageOrVideoOrFileCreate.schema, docxImageOrVideoOrFileCreate.customHandler);

    this.server.tool(docxMarkdownImport.name, docxMarkdownImport.description, docxMarkdownImport.schema, async (params) => {
      return await docxMarkdownImport.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxMarkdownImport });
    });

    this.server.tool(docxBlockBatchDelete.name, docxBlockBatchDelete.description, docxBlockBatchDelete.schema, async (params) => {
      return await docxBlockBatchDelete.customHandler(client, params, { userAccessToken: this.props.accessToken, tool: docxBlockBatchDelete });
    });

    this.server.tool(driveCommentList.name, driveCommentList.description, driveCommentList.inputSchema, async (params) => {
      return await driveCommentList.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveCommentBatch.name, driveCommentBatch.description, driveCommentBatch.inputSchema, async (params) => {
      return await driveCommentBatch.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveCommentPatch.name, driveCommentPatch.description, driveCommentPatch.inputSchema, async (params) => {
      return await driveCommentPatch.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveCommentCreate.name, driveCommentCreate.description, driveCommentCreate.inputSchema, async (params) => {
      return await driveCommentCreate.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveCommentGet.name, driveCommentGet.description, driveCommentGet.inputSchema, async (params) => {
      return await driveCommentGet.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveReplyList.name, driveReplyList.description, driveReplyList.inputSchema, async (params) => {
      return await driveReplyList.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveReplyUpdate.name, driveReplyUpdate.description, driveReplyUpdate.inputSchema, async (params) => {
      return await driveReplyUpdate.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(driveReplyDelete.name, driveReplyDelete.description, driveReplyDelete.inputSchema, async (params) => {
      return await driveReplyDelete.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(wikiNodeInfoGet.name, wikiNodeInfoGet.description, wikiNodeInfoGet.inputSchema, async (params) => {
      return await wikiNodeInfoGet.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(sheetRangeRead.name, sheetRangeRead.description, sheetRangeRead.inputSchema, async (params) => {
      return await sheetRangeRead.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(sheetInfoGet.name, sheetInfoGet.description, sheetInfoGet.inputSchema, async (params) => {
      return await sheetInfoGet.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(suiteSearch.name, suiteSearch.description, suiteSearch.inputSchema, async (params) => {
      return await suiteSearch.customHandler(params, client, this.props.accessToken);
    });

    this.server.tool(sheetPatch.name, sheetPatch.description, sheetPatch.inputSchema, async (params) => {
      return await sheetPatch.customHandler(params, client, this.props.accessToken);
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
