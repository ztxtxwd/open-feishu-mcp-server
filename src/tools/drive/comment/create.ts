/**
 * 云文档评论创建工具
 */
import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const createCommentDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-添加全文评论-在文档中添加一条全局评论',
  bestFor: '为云文档（文档、表格、幻灯片等）添加批注或反馈',
  notRecommendedFor: '添加局部评论（暂不支持）',
  promptExample: '在这个文档中添加一个评论说"需要补充更多细节"',
  usageExample: 'drive_comment_create({file_token: "xxx", file_type: "docx", content: "评论内容"})',
  returns: '创建成功的评论信息，包含评论ID'
};

// 定义回复内容元素的 schema
const ReplyElementSchema = z.object({
  type: z.enum(['text_run', 'docs_link', 'person']).describe('回复内容的元素类型'),
  text_run: z.object({ text: z.string().describe('添加普通文本') }).optional(),
  docs_link: z.object({ url: z.string().describe('添加云文档链接') }).optional(),
  person: z.object({ user_id: z.string().describe('添加用户的 user_id 以@用户') }).optional(),
});

// 定义输入参数 schema
const CreateCommentSchema = {
  file_token: z.string().describe('文档 Token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件)，slides(幻灯片)'),
  content: z.string().describe('评论内容文本').optional(),
  reply_list: z.object({
    replies: z.array(z.object({
      content: z.object({
        elements: z.array(ReplyElementSchema).describe('回复内容的元素列表')
      }).describe('回复内容')
    })).describe('回复列表')
  }).describe('评论里的回复列表（支持富文本）').optional(),
};

interface CommentCreateParams {
  file_token: string;
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides';
  content?: string;
  reply_list?: {
    replies: Array<{
      content: {
        elements: Array<any>
      }
    }>
  };
}

export const driveCommentCreate = {
  name: 'drive_comment_create',
  description: convertDescriptionToString(createCommentDescription),
  inputSchema: CreateCommentSchema,
  customHandler: async (params: CommentCreateParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      // 构建请求数据
      const data: any = {};
      
      // 如果提供了简单文本内容，转换为富文本格式
      if (params.content && !params.reply_list) {
        data.reply_list = {
          replies: [{
            content: {
              elements: [{
                type: 'text_run',
                text_run: { text: params.content }
              }]
            }
          }]
        };
      } else if (params.reply_list) {
        data.reply_list = params.reply_list;
      }

      const response = await client.drive.v1.fileComment.create(
        {
          path: {
            file_token: params.file_token,
          },
          params: {
            file_type: params.file_type,
          },
          data,
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
      console.error('创建评论失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `创建评论失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};