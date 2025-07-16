import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../types'

const description: McpToolDescription = {
  shortDescription: '飞书-电子表格-获取工作表',
  bestFor: '根据电子表格 token 获取表格中所有工作表及其属性信息，包括工作表 ID、标题、索引位置、是否被隐藏等',
  notRecommendedFor: '获取多维表格或文档中普通表格',
  returns: '表格中所有工作表及其属性信息',
}
export const sheetInfoGet = {
  name: 'sheet_info_get',
  description: convertDescriptionToString(description),
  inputSchema: {
    token: z.string().describe('电子表格的 token'),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      const result = await client.sheets.v3.spreadsheetSheet.query(
        {
          path: {
            spreadsheet_token: params.token,
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
      console.error('sheet_info_get 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `sheet_info_get 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}

export { sheetRangeRead } from './range'
export { sheetPatch } from './patch'