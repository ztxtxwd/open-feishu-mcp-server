import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../types'

const description: McpToolDescription = {
  shortDescription: '飞书-获取用户信息',
  bestFor: '获取当前登录用户信息',
  notRecommendedFor: '获取其他用户信息',
  returns: '用户的用户名、邮箱、头像、电话、id',
}
export const userInfo = {
  name: 'user_info',
  description: convertDescriptionToString(description),
  inputSchema: {},
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      const response = await fetch('https://open.feishu.cn/open-apis/authen/v1/user_info', {
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          'Content-Type': 'application/json; charset=utf-8',
        },
      })

      if (!response.ok) {
        return {
          content: [
            {
              type: 'text',
              text: 'Failed to fetch user info: ' + (await response.text()),
            },
          ],
        }
      }

      const data = await response.json()
      return {
        content: [
          {
            type: 'text',
            text: JSON.stringify(data),
          },
        ],
      }
    } catch (error) {
      console.error('user_info 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `user_info 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}
