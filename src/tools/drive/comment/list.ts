/**
 * 云文档评论列表获取工具
 */
import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const listCommentsDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-获取云文档所有评论-分页获取文档所有评论信息',
  bestFor: '查看云文档的所有批注和讨论内容',
  notRecommendedFor: '获取单个评论详情（请使用 get 工具）',
  promptExample: '获取这个文档的所有评论',
  usageExample: 'drive_comment_list({file_token: "xxx", file_type: "docx"})',
  returns: '评论列表，包含评论内容、作者、时间等信息'
};

const ListCommentsSchema = {
  file_token: z.string().describe('云文档的 token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件)，slides(幻灯片)'),
  is_whole: z.boolean().describe('是否获取全文评论').optional(),
  is_solved: z.boolean().describe('是否只获取已解决的评论').optional(),
  page_token: z.string().describe('分页标记').optional(),
  page_size: z.number().min(1).max(50).describe('分页大小，默认50').optional(),
};

interface CommentListParams {
  file_token: string;
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides';
  is_whole?: boolean;
  is_solved?: boolean;
  page_token?: string;
  page_size?: number;
}

export const driveCommentList = {
  name: 'drive_comment_list',
  description: convertDescriptionToString(listCommentsDescription),
  inputSchema: ListCommentsSchema,
  customHandler: async (params: CommentListParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      const response = await client.drive.v1.fileComment.list(
        {
          path: {
            file_token: params.file_token,
          },
          params: {
            file_type: params.file_type,
            is_whole: params.is_whole,
            is_solved: params.is_solved,
            page_token: params.page_token,
            page_size: params.page_size,
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
      console.error('获取评论列表失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `获取评论列表失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};