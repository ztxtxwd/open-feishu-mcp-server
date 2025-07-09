import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../types'

const description: McpToolDescription = {
  shortDescription: '飞书-搜索云文档',
  bestFor: '根据搜索关键词（search_key）对当前用户可见的云文档进行搜索',
  notRecommendedFor: '',
  returns: '包含搜索关键词的文件列表',
}
export const suiteSearch = {
  name: 'suite_search',
  description: convertDescriptionToString(description),
  inputSchema: {
    search_key: z.string().describe('搜索关键词'),
    count: z.number().describe('指定搜索返回的文件数量。取值范围为 [0,50]。').optional().default(50),
    offset: z
      .number()
      .describe(
        '指定搜索的偏移量，该参数最小为 0，即不偏移。该参数的值与返回的文件数量之和不得大于或等于 200（即 offset + count < 200）。',
      )
      .optional().default(0),
    docs_types: z.array(z.enum(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file'])).describe('文件类型，支持以下枚举：doc：旧版文档;sheet：电子表格;slides：幻灯片;bitable：多维表格;mindnote：思维笔记;file：文件').optional().default(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file']),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      // 	POST https://open.feishu.cn/open-apis/suite/docs-api/search/object
      const result = await fetch('https://open.feishu.cn/open-apis/suite/docs-api/search/object', {
        method: 'POST',
        body: JSON.stringify({
          search_key: params.search_key,
          count: params.count,
          offset: params.offset,
          docs_types: params.docs_types
        }),
        headers: {
          'Authorization': `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json'
        }
      })
      const data = await result.json() as { data: any }
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(data.data),
          },
        ],
      }
    } catch (error) {
      console.error('suite_search 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `suite_search 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}
