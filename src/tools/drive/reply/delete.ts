/**
 * 删除评论回复工具
 */
import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { McpToolDescription, convertDescriptionToString } from '../../types'

const replyDeleteDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-删除回复信息-根据回复ID删除该条回复',
  bestFor: '删除某条回复',
  notRecommendedFor: '删除评论',
  promptExample: '删除这条回复',
  usageExample: 'drive_reply_delete({file_token: "xxx", file_type: "docx", comment_id: "yyy", reply_id: "zzz"})',
}

const ReplyDeleteSchema = {
  file_token: z.string().describe('文档 Token'),
  file_type: z
    .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件夹)，slides(幻灯片)'),
  comment_id: z.string().describe('评论 ID'),
  reply_id: z.string().describe('回复 ID'),
}

interface ReplyDeleteParams {
  file_token: string
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides'
  comment_id: string,
  reply_id: string
}

export const driveReplyDelete = {
  name: 'drive_reply_delete',
  description: convertDescriptionToString(replyDeleteDescription),
  inputSchema: ReplyDeleteSchema,
  customHandler: async (params: ReplyDeleteParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        }
      }
      const response = await client.drive.v1.fileCommentReply.delete(
        {
          path: {
            file_token: params.file_token,
            comment_id: params.comment_id,
            reply_id: params.reply_id,
          },
          params: {
            file_type: params.file_type,
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
      console.error('删除回复失败:', error)
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `删除回复失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      }
    }
  },
}
