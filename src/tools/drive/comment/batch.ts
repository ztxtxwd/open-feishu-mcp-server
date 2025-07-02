/**
 * 云文档批量获取评论工具
 */
import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { McpToolDescription, convertDescriptionToString } from '../../types'

const listCommentsDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-根据comment_ids批量获取云文档评论',
  bestFor: '批量获取云文档的所有批注和讨论内容',
  notRecommendedFor: '获取云文档所有评论详情',
  promptExample: '根据comment_ids批量获取云文档评论，comment_ids: ["comment_id1", "comment_id2", "comment_id3"]',
  returns: '评论列表，包含评论内容、作者、时间等信息',
}

const ListCommentsSchema = {
  file_token: z.string().describe('云文档的 token'),
  file_type: z
    .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件)，slides(幻灯片)'),
  comment_ids: z.array(z.string()).describe('评论ID列表'),
}

interface CommentListParams {
  file_token: string
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides'
  comment_ids: string[]
}

export const driveCommentBatch = {
  name: 'drive_comment_batch',
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

      let items = await client.drive.v1.fileComment.batchQuery({
        path: {
          file_token: params.file_token,
        },
        params: {
          file_type: params.file_type,
        },
        data: {
          comment_ids: params.comment_ids,
        },
      }, userAccessToken ? lark.withUserAccessToken(userAccessToken) : undefined)

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(items),
          },
        ],
      }
    } catch (error) {
      console.error('获取评论列表失败:', error)
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `获取评论列表失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      }
    }
  },
}
