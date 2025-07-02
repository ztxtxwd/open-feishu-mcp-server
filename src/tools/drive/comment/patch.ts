/**
 * 云文档评论更新工具（解决/恢复）
 */
import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const patchCommentDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-解决/恢复评论-更新评论的解决状态',
  bestFor: '标记评论为已解决或恢复未解决状态',
  notRecommendedFor: '修改评论内容（评论内容创建后不可修改）',
  promptExample: '将这个评论标记为已解决',
  usageExample: 'drive_comment_patch({file_token: "xxx", file_type: "docx", comment_id: "yyy", is_solved: true})',
  returns: '更新后的评论信息'
};

const PatchCommentSchema = {
  file_token: z.string().describe('文档 token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(表格)，file(文件)，slides(幻灯片)'),
  comment_id: z.string().describe('评论ID'),
  is_solved: z.boolean().describe('评论解决标志：true-已解决，false-未解决'),
};

interface CommentPatchParams {
  file_token: string;
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides';
  comment_id: string;
  is_solved: boolean;
}

export const driveCommentPatch = {
  name: 'drive_comment_patch',
  description: convertDescriptionToString(patchCommentDescription),
  inputSchema: PatchCommentSchema,
  customHandler: async (params: CommentPatchParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      const response = await client.drive.v1.fileComment.patch(
        {
          path: {
            file_token: params.file_token,
            comment_id: params.comment_id,
          },
          params: {
            file_type: params.file_type,
          },
          data: {
            is_solved: params.is_solved,
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
      console.error('更新评论失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `更新评论失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};