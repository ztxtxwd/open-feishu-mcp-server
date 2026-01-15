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
import { docxMarkdownInsert } from './tools/document';

import {
  registerTools,
  // authen
  getUserInfo,
  // docx
  createDocument,
  getDocument,
  getDocumentRawContent,
  convertContentToBlocks,
  // docx blocks
  listDocumentBlocks,
  createBlocks,
  deleteBlock,
  batchDeleteBlocks,
  buildTextBlock,
  buildHeading1Block,
  buildHeading2Block,
  buildHeading3Block,
  buildHeading4Block,
  buildHeading5Block,
  buildHeading6Block,
  buildHeading7Block,
  buildHeading8Block,
  buildHeading9Block,
  buildBulletBlock,
  buildOrderedBlock,
  buildQuoteBlock,
  buildEquationBlock,
  buildTodoBlock,
  buildCodeBlock,
  buildDividerBlock,
  buildCalloutBlock,
  searchFeishuCalloutEmoji,
  createFileBlock,
  createImageBlock,
  buildIframeBlock,
  buildChatCardBlock,
  buildGridBlock,
  buildMermaidBlock,
  buildGlossaryBlock,
  buildTimelineBlock,
  buildCatalogNavigationBlock,
  buildInformationCollectionBlock,
  buildCountdownBlock,
  // drive
  listFileComments,
  // sheets
  addSheet,
  copySheet,
  createSpreadsheet,
  deleteSheet,
  getSheet,
  getSpreadsheet,
  querySheets,
  updateSheetMetadata,
  updateSheetProtection,
  updateSheetViewSettings,
  updateSpreadsheet,
} from 'feishu-tools';

import { GenTools } from './mcp-tool/tools/zh/gen-tools';

const client = new Client({
  appId: env.FEISHU_APP_ID,
  appSecret: env.FEISHU_APP_SECRET,
  httpInstance: oapiHttpInstance,
});
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
    // Use the upstream access token to facilitate tools
    const context = {
      client: client,
      getUserAccessToken: () => this.props.accessToken as string,
    }

    // 批量注册所有 feishu-tools 工具
    const allTools = [
      // authen
      getUserInfo,
      // docx
      createDocument,
      getDocument,
      getDocumentRawContent,
      convertContentToBlocks,
      // docx blocks
      listDocumentBlocks,
      createBlocks,
      deleteBlock,
      batchDeleteBlocks,
      buildTextBlock,
      buildHeading1Block,
      buildHeading2Block,
      buildHeading3Block,
      buildHeading4Block,
      buildHeading5Block,
      buildHeading6Block,
      buildHeading7Block,
      buildHeading8Block,
      buildHeading9Block,
      buildBulletBlock,
      buildOrderedBlock,
      buildQuoteBlock,
      buildEquationBlock,
      buildTodoBlock,
      buildCodeBlock,
      buildDividerBlock,
      buildCalloutBlock,
      searchFeishuCalloutEmoji,
      createFileBlock,
      createImageBlock,
      buildIframeBlock,
      buildChatCardBlock,
      buildGridBlock,
      buildMermaidBlock,
      buildGlossaryBlock,
      buildTimelineBlock,
      buildCatalogNavigationBlock,
      buildInformationCollectionBlock,
      buildCountdownBlock,
      // drive
      listFileComments,
      // sheets
      addSheet,
      copySheet,
      createSpreadsheet,
      deleteSheet,
      getSheet,
      getSpreadsheet,
      querySheets,
      updateSheetMetadata,
      updateSheetProtection,
      updateSheetViewSettings,
      updateSpreadsheet,
    ];

    registerTools(this.server, allTools, context);
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
