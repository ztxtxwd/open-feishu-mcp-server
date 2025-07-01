/**
 * 云文档全文评论获取工具
 */
import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { McpToolDescription, convertDescriptionToString } from '../../types'

const listCommentsDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-获取云文档全文评论-获取文档全文评论信息',
  bestFor: '查看云文档指定评论的详情',
  notRecommendedFor: '获取云文档所有评论详情',
  promptExample: '获取这个文档的指定全文评论',
  returns: '评论详情，包含评论内容、作者、时间等信息',
}

const ListCommentsSchema = {
  file_token: z.string().describe('云文档的 token'),
  file_type: z.enum(['doc', 'docx', 'sheet', 'file'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件)'),
  comment_id: z.string().describe('评论ID'),
}

interface CommentListParams {
  file_token: string
  file_type: 'doc' | 'docx' | 'sheet' | 'file'
  comment_id: string
}

export const driveCommentGet = {
  name: 'drive_comment_get',
  description: convertDescriptionToString(listCommentsDescription),
  inputSchema: ListCommentsSchema,
  customHandler: async (params: CommentListParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        }
      }

      let response = await client.drive.v1.fileComment.get(
        {
          path: {
            file_token: params.file_token,
            comment_id: params.comment_id,
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
      console.error('获取评论详情失败:', error)
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `获取评论详情失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      }
    }
  },
}
