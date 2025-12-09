import OAuthProvider from '@cloudflare/workers-oauth-provider';
import { McpAgent } from 'agents/mcp';
import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { Client } from '@larksuiteoapi/node-sdk';
import { env } from 'cloudflare:workers';

import { FeishuHandler } from './feishu-handler';
import { Props, refreshUpstreamAuthToken } from './utils';
import { oapiHttpInstance } from './utils/http-instance';
import { RecallTool } from './mcp-tool/document-tool/recall';
import { blockTreeTool, docxBlockBatchDelete, docxBlockPatch, docxInsertImage, docxInsertFile, docxMarkdownImport, docxV1BlockTypeSchemaGet, docxV1DocumentBlockChildrenCreateSimple } from './tools/document';
import { mediaUploadTool } from './tools/drive';
import { z } from 'zod';
import { driveCommentBatch, driveCommentList,driveCommentPatch,driveCommentCreate,driveCommentGet } from './tools/drive/comment';
import { driveReplyList, driveReplyUpdate, driveReplyDelete } from './tools/drive/reply';
import { wikiNodeInfoGet } from './tools/wiki/space';
import { sheetRangeRead, sheetInfoGet,sheetPatch, sheetRangeWrite } from './tools/sheet';
import { suiteSearch } from './tools/suite';
import { userInfo } from './tools/authen/user_info';
import { docxMarkdownInsert } from './tools/document';

import { createHeading1Block } from 'feishu-tools';

import { GenTools } from './mcp-tool/tools/zh/gen-tools';
import { RequestHandlerExtra } from '@modelcontextprotocol/sdk/shared/protocol.js';
import { ServerNotification, ServerRequest } from '@modelcontextprotocol/sdk/types.js';

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
    const context = {
      client: client,
      getTenantAccessToken: async (): Promise<string> => {
        return "";
      },
      getUserAccessToken: async (): Promise<string> => {
        return this.props.accessToken as string;
      },
    }
    this.server.registerTool(createHeading1Block.name, {description:createHeading1Block.description||'', inputSchema:createHeading1Block.inputSchema}, async (args, extra: RequestHandlerExtra<ServerRequest, ServerNotification>) =>
      createHeading1Block.callback(context, args, extra));   
    
    
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
    if (options.grantType === 'authorization_code') {
      return {
        accessTokenProps: options.props,
        accessTokenTTL: options.props.expiresIn,
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
