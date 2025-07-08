import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../../types'

const description: McpToolDescription = {
  shortDescription: '飞书-知识库-根据wiki token查云文档的实际 token',
  bestFor: '如果 URL 链接中 token 前为 wiki，则该 token 为知识库的节点 token，使用此工具获取当前云文档的实际 token',
  notRecommendedFor: '获取节点内容',
  returns: '当前云文档的实际 token 和 云文档类型',
}
export const wikiNodeInfoGet = {
  name: 'wiki_node_info_get',
  description: convertDescriptionToString(description),
  inputSchema: {
    wiki_token: z.string().describe('知识库的节点 token'),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      const result = await client.wiki.v2.space.getNode(
        {
          params: {
            token: params.wiki_token,
            obj_type: 'wiki',
          },
        },
        lark.withUserAccessToken(userAccessToken),
      )
      const data = {
        type: result.data?.node?.obj_type,
        token: result.data?.node?.obj_token
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
      console.error('wiki_node_info_get 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `wiki_node_info_get 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}
