/**
 * 获取评论回复列表工具
 */
import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const listRepliesDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-获取回复信息-根据评论ID获取该条评论的所有回复',
  bestFor: '查看某条评论下的所有回复和讨论',
  notRecommendedFor: '获取所有评论（请使用 list 工具）',
  promptExample: '获取这条评论的所有回复',
  usageExample: 'drive_comment_reply_list({file_token: "xxx", file_type: "docx", comment_id: "yyy"})',
  returns: '回复列表，包含回复内容、回复人、时间等信息'
};

const ListRepliesSchema = {
  file_token: z.string().describe('文档 Token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件夹)，slides(幻灯片)'),
  comment_id: z.string().describe('评论 ID'),
  page_size: z.number().min(1).max(100).describe('分页大小').optional(),
  page_token: z.string().describe('分页标记').optional(),
};

interface ReplyListParams {
  file_token: string;
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides';
  comment_id: string;
  page_size?: number;
  page_token?: string;
}

export const driveCommentReplyList = {
  name: 'drive_comment_reply_list',
  description: convertDescriptionToString(listRepliesDescription),
  inputSchema: ListRepliesSchema,
  customHandler: async (params: ReplyListParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      const response = await client.drive.v1.fileCommentReply.list(
        {
          path: {
            file_token: params.file_token,
            comment_id: params.comment_id,
          },
          params: {
            file_type: params.file_type,
            page_size: params.page_size,
            page_token: params.page_token,
          },
        },
        userAccessToken ? lark.withUserAccessToken(userAccessToken) : undefined,
      );

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response.data || response, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('获取回复列表失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `获取回复列表失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};