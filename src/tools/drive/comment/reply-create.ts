/**
 * 评论回复创建工具
 */
import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const createReplyDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-创建回复-在评论下创建回复',
  bestFor: '回复他人的评论，进行讨论',
  notRecommendedFor: '创建新的独立评论（请使用 create 工具）',
  promptExample: '回复这个评论说"已经按照建议修改"',
  usageExample: 'drive_comment_reply_create({file_token: "xxx", file_type: "docx", comment_id: "yyy", content: "回复内容"})',
  returns: '创建成功的回复信息'
};

// 定义回复内容元素的 schema
const ReplyElementSchema = z.object({
  type: z.enum(['text_run', 'docs_link', 'person']).describe('回复内容的元素类型'),
  text_run: z.object({ text: z.string().describe('回复普通文本') }).optional(),
  docs_link: z.object({ url: z.string().describe('回复云文档链接') }).optional(),
  person: z.object({ user_id: z.string().describe('添加用户的 user_id 以@用户') }).optional(),
});

const CreateReplySchema = {
  file_token: z.string().describe('文档 Token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(表格)，file(文件)，slides(幻灯片)'),
  comment_id: z.string().describe('评论ID'),
  content: z.string().describe('回复内容文本').optional(),
  reply_content: z.object({
    elements: z.array(ReplyElementSchema).describe('回复的内容')
  }).describe('富文本回复内容').optional(),
};

interface ReplyCreateParams {
  file_token: string;
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides';
  comment_id: string;
  content?: string;
  reply_content?: {
    elements: Array<any>
  };
}

export const driveCommentReplyCreate = {
  name: 'drive_comment_reply_create',
  description: convertDescriptionToString(createReplyDescription),
  inputSchema: CreateReplySchema,
  customHandler: async (params: ReplyCreateParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      // 构建请求数据
      let data: any = {};
      
      // 如果提供了简单文本内容，转换为富文本格式
      if (params.content && !params.reply_content) {
        data.content = {
          elements: [{
            type: 'text_run',
            text_run: { text: params.content }
          }]
        };
      } else if (params.reply_content) {
        data.content = params.reply_content;
      }

      // 注意：回复API路径可能需要调整，这里假设使用评论创建API的回复功能
      const response = await client.drive.v1.fileComment.create(
        {
          path: {
            file_token: params.file_token,
          },
          params: {
            file_type: params.file_type,
          },
          data: {
            reply_list: {
              replies: [{
                content: data.content,
                parent_id: params.comment_id, // 设置父评论ID
              }]
            }
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
      console.error('创建回复失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `创建回复失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};