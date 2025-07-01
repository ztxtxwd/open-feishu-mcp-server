/**
 * 文档评论创建工具
 */
import { z } from 'zod';
import { McpToolDescription, convertDescriptionToString } from '../../types';

const createCommentDescription: McpToolDescription = {
  shortDescription: '在新版文档中创建评论',
  bestFor: '为文档内容添加批注或反馈',
  notRecommendedFor: '其他类型的评论（如任务、审批）',
  promptExample: '在文档的第一段添加评论',
  usageExample: 'docx_comment_create({document_id: "xxx", block_id: "yyy", content: {text: "评论内容"}})',
  returns: '创建成功的评论信息'
};

// 定义评论内容的简化 schema
const CommentContentSchema = z.object({
  text: z.string().describe('评论文本内容'),
});

// 定义输入参数 schema
const CreateCommentSchema = {
  document_id: z.string().describe('文档ID'),
  block_id: z.string().describe('要评论的块ID'),
  content: CommentContentSchema.describe('评论内容'),
  comment_type: z.enum(['whole_comment', 'local_comment'])
    .default('whole_comment')
    .describe('评论类型'),
};

export const docxCommentCreate = {
  name: 'docx_comment_create',
  description: convertDescriptionToString(createCommentDescription),
  inputSchema: CreateCommentSchema,
  customHandler: async (params: any, client?: any, userAccessToken?: string) => {
    try {
      // 这里是示例实现，实际需要调用飞书API
      // 由于评论API可能还未发布，这里只是模拟返回
      
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              success: true,
              message: '评论创建成功（示例）',
              comment_id: 'comment_' + Date.now(),
              document_id: params.document_id,
              block_id: params.block_id,
              content: params.content.text,
              comment_type: params.comment_type,
            }, null, 2),
          },
        ],
      };
    } catch (error) {
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