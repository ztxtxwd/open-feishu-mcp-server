/**
 * 获取评论回复列表工具
 */
import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { McpToolDescription, convertDescriptionToString } from '../../types'

const replyUpdateDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-更新回复信息-根据回复ID更新该条回复',
  bestFor: '更新某条回复',
  notRecommendedFor: '更新评论',
  promptExample: '更新这条回复',
  usageExample: 'drive_reply_update({file_token: "xxx", file_type: "docx", comment_id: "yyy"})',
}

// 定义回复内容元素的 schema
const ReplyElementSchema = z.object({
  type: z.enum(['text_run', 'docs_link', 'person']).describe('回复内容的元素类型'),
  text_run: z.object({ text: z.string().describe('添加普通文本') }).optional(),
  docs_link: z.object({ url: z.string().describe('添加云文档链接') }).optional(),
  person: z.object({ user_id: z.string().describe('添加用户的 user_id 以@用户') }).optional(),
})

const ReplyUpdateSchema = {
  file_token: z.string().describe('文档 Token'),
  file_type: z
    .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件夹)，slides(幻灯片)'),
  comment_id: z.string().describe('评论 ID'),
  reply_id: z.string().describe('回复 ID'),
  content: z.object({
    elements: z.array(ReplyElementSchema),
  }),
}

interface ReplyUpdateParams {
  file_token: string
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides'
  comment_id: string
  reply_id: string
  content: {
    elements: Array<any>
  }
}

export const driveReplyUpdate = {
  name: 'drive_reply_update',
  description: convertDescriptionToString(replyUpdateDescription),
  inputSchema: ReplyUpdateSchema,
  customHandler: async (params: ReplyUpdateParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        }
      }
      const response = await client.drive.v1.fileCommentReply.update(
        {
          path: {
            file_token: params.file_token,
            comment_id: params.comment_id,
            reply_id: params.reply_id,
          },
          params: {
            file_type: params.file_type,
          },
          data: {
            content: params.content,
          },
        },
        userAccessToken ? lark.withUserAccessToken(userAccessToken) : undefined,
      )

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response.data),
          },
        ],
      }
    } catch (error) {
      console.error('更新回复失败:', error)
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `更新回复失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      }
    }
  },
}
