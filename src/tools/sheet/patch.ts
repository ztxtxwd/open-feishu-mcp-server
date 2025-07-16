import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../types'

const description: McpToolDescription = {
  shortDescription: '飞书-电子表格-修改电子表格属性',
  bestFor: '修改电子表格的标题等属性信息',
  notRecommendedFor: '修改多维表格或文档中普通表格的属性',
  returns: '修改后的电子表格信息',
  usageExample: 'sheet_patch({token: "spreadsheet_token", title: "新标题"})',
}

export const sheetPatch = {
  name: 'sheet_patch',
  description: convertDescriptionToString(description),
  inputSchema: {
    token: z.string().describe('电子表格的 token'),
    title: z.string().describe('新的电子表格标题。参数为空时，表格标题将显示为"未命名表格"或本地语言环境对应内容').optional(),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      const { token, title } = params

      const result = await client.sheets.v3.spreadsheet.patch(
        {
          path: {
            spreadsheet_token: token,
          },
          data: {
            title: title,
          },
        },
        lark.withUserAccessToken(userAccessToken),
      )

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result.data),
          },
        ],
      }
    } catch (error) {
      console.error('sheet_patch 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `sheet_patch 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}