import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../../types'

const description: McpToolDescription = {
  shortDescription: '飞书-电子表格-向单个范围写入数据',
  bestFor: '向电子表格中单个指定范围写入数据',
  notRecommendedFor: '向多维表格或文档中普通表格写入数据',
  returns: '写入结果，包括写入的行数、列数、单元格总数等信息',
}
export const sheetRangeWrite = {
  name: 'sheet_range_write',
  description: convertDescriptionToString(description),
  inputSchema: {
    token: z.string().describe('电子表格的 token'),
    range: z.string().describe(`写入数据的范围。格式为 <sheetId>!<开始位置>:<结束位置>。其中：

sheetId 为工作表 ID，通过获取工作表 获取
<开始位置>:<结束位置> 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 A2:B2 表示该工作表第 2 行的 A 列到 B 列。range支持四种写法，详情参考电子表格概述
注意：range 所指定的范围需要大于等于写入的数据所占用的范围。

示例值："1QXD0s!A1:B2"`),
    values: z
      .array(z.array(z.any()))
      .describe(
        `写入的数据。二维数组，外层数组代表行，内层数组代表列。如要写入公式、超链接、email、@人等，可参考电子表格支持写入的数据类型。

使用限制：
- 单次写入数据不得超过 5000 行、100列
- 每个单元格不超过 50,000 字符，推荐每个单元格不超过 40,000 字符

示例值：[["Hello", 1], ["World", 1]]`,
      ),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      // 根据用户输入参数，调用飞书电子表格API向指定范围写入数据
      const { token, range, values } = params

      // 拼接URL
      const url = `https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/${encodeURIComponent(token)}/values`

      // 构建请求体
      const requestBody = {
        valueRange: {
          range,
          values,
        },
      }

      // 发起请求
      const response = await fetch(url, {
        method: 'PUT',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
        body: JSON.stringify(requestBody),
      })

      if (!response.ok) {
        throw new Error(`写入电子表格数据失败: ${await response.text()}`)
      }

      const result: { code: number; msg: string; data: any } = await response.json()

      if (result.code !== 0) {
        throw new Error(`写入电子表格数据失败: ${result.msg}`)
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result.data, null, 2),
          },
        ],
      }
    } catch (error) {
      console.error('sheet_range_write 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `sheet_range_write 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}
