/**
 * 云文档评论列表获取工具
 */
import { any, z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { McpToolDescription, convertDescriptionToString } from '../../types'

const listCommentsDescription: McpToolDescription = {
  shortDescription: '飞书-云文档-评论-获取云文档所有评论-分页获取文档所有评论信息',
  bestFor: '查看云文档的所有批注和讨论内容',
  notRecommendedFor: '获取单个评论详情',
  promptExample: '获取这个文档的所有评论',
  returns: '评论列表，包含评论内容、作者、时间等信息',
}

const ListCommentsSchema = {
  file_token: z.string().describe('云文档的 token'),
  file_type: z
    .enum(['doc', 'docx', 'sheet', 'file', 'slides'])
    .describe('云文档类型：doc(旧版文档)，docx(新版文档)，sheet(电子表格)，file(文件)，slides(幻灯片)'),
  is_whole: z.boolean().describe('是否只获取全文评论').default(false),
  is_solved: z.boolean().describe('是否只获取已解决的评论').default(false),
}

interface CommentListParams {
  file_token: string
  file_type: 'doc' | 'docx' | 'sheet' | 'file' | 'slides'
  is_whole: boolean
  is_solved: boolean
  page_token?: string
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
        }
      }

      let data: { items: any[] } = {
        items:[]
      }
      for await (const item of await client.drive.v1.fileComment.listWithIterator(
        {
          path: {
            file_token: params.file_token,
          },
          params: {
            file_type: params.file_type,
            is_whole: params.is_whole,
            is_solved: params.is_solved,
          },
        },
        userAccessToken ? lark.withUserAccessToken(userAccessToken) : undefined,
      )) {
        if(item?.items){
          data.items = [...data.items, ...item.items]
        }
        
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(data),
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
