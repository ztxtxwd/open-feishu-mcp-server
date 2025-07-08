import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../../types'

const description: McpToolDescription = {
  shortDescription: '飞书-电子表格-读取电子表格中单个指定范围的数据',
  bestFor: '读取电子表格中单个指定范围的数据',
  notRecommendedFor: '读取多维表格或文档中普通表格的数据',
  returns: '单个指定范围的数据',
}
export const sheetRangeRead = {
  name: 'sheet_range_read',
  description: convertDescriptionToString(description),
  inputSchema: {
    token: z.string().describe('电子表格的 token'),
    range: z.string().describe(`查询范围。格式为 <sheetId>!<开始位置>:<结束位置>。其中：

sheetId 为工作表 ID，通过获取工作表 获取
<开始位置>:<结束位置> 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 A2:B2 表示该工作表第 2 行的 A 列到 B 列。range支持四种写法，详情参考电子表格概述
注意：若使用 <sheetId>!<开始单元格>:<结束列> 和 <sheetId>!<开始列>:<结束列> 的写法时，仅支持获取 100 列数据。

示例值："Q7PlXT!A1:B2"`),
    valueRenderOption: z
      .enum(['ToString', 'Formula', 'FormattedValue', 'UnformattedValue'])
      .describe(
        `	
指定单元格数据的格式。可选值如下所示。当参数缺省时，默认不进行公式计算，返回公式本身，且单元格为数值格式。

ToString：返回纯文本的值（数值类型除外）
Formula：单元格中含有公式时，返回公式本身
FormattedValue：计算并格式化单元格
UnformattedValue：计算但不对单元格进行格式化`,
      )
      .optional(),
    dateTimeRenderOption: z
      .string()
      .describe(
        `指定数据类型为日期、时间、或时间日期的单元格数据的格式。

若不传值，默认返回浮点数值，整数部分为自 1899 年 12 月 30 日以来的天数；小数部分为该时间占 24 小时的份额。例如：若时间为 1900 年 1 月 1 日中午 12 点，则默认返回 2.5。其中，2 表示 1900 年 1 月 1 日为 1899 年12 月 30 日之后的 2 天；0.5 表示 12 点占 24 小时的二分之一，即 12/24=0.5。
可选值为 FormattedString，此时接口将计算并对日期、时间、或时间日期类型的数据格式化并返回格式化后的字符串，但不会对数字进行格式化。`,
      )
      .optional(),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      // 根据用户输入参数，调用飞书电子表格API获取指定范围的数据
      const { token, range, valueRenderOption, dateTimeRenderOption } = params

      // 构建请求参数
      const query: Record<string, string> = {}
      if (valueRenderOption) query.valueRenderOption = valueRenderOption
      if (dateTimeRenderOption) query.dateTimeRenderOption = dateTimeRenderOption

      // 构建查询字符串
      const queryString = Object.keys(query).length
        ? '?' +
          Object.entries(query)
            .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
            .join('&')
        : ''

      // 拼接URL
      const url = `https://open.feishu.cn/open-apis/sheets/v2/spreadsheets/${encodeURIComponent(token)}/values/${encodeURIComponent(range)}${queryString}`

      // 发起请求
      const response = await fetch(url, {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      })

      if (!response.ok) {
        throw new Error(`获取电子表格数据失败: ${await response.text()}`)
      }

      const result: { data: any } = await response.json()

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result.data),
          },
        ],
      }
    } catch (error) {
      console.error('sheet_range_read 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `sheet_range_read 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}
