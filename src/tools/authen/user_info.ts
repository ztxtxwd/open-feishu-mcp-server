import z from 'zod'
import { Client, withUserAccessToken } from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../types'

const description: McpToolDescription = {
  shortDescription: '飞书-获取用户信息',
  bestFor: '获取当前登录用户信息',
  notRecommendedFor: '获取其他用户信息'
}

export const userInfo = {
  name: 'user_info',
  description: convertDescriptionToString(description),
  inputSchema: z.object(),
  outputSchema: z.object({
    name: z.string().optional().describe('用户名'),
    en_name: z.string().optional().describe('英文名'),
    avatar_url: z.string().optional().describe('头像URL'),
    avatar_thumb: z.string().optional().describe('头像缩略图URL'),
    avatar_middle: z.string().optional().describe('头像中等尺寸URL'),
    avatar_big: z.string().optional().describe('头像大尺寸URL'),
    email: z.string().optional().describe('邮箱'),
    mobile: z.string().optional().describe('电话'),
    user_id: z.string().optional().describe('用户ID'),
    open_id: z.string().optional().describe('用户Open ID'),
    union_id: z.string().optional().describe('用户Union ID'),
    tenant_key: z.string().optional().describe('租户Key'),
  }),
  customHandler: async (params: unknown, client: Client, userAccessToken: string) => {
    try {
      const response = await client.authen.v1.userInfo.get({}, withUserAccessToken(userAccessToken))

      if (response.code != 0) {
        return {
          isError: true,
          content: [
            {
              type: 'text',
              text: 'Failed to fetch user info: ' + response.msg,
            },
          ],
        }
      }

      return {
        content: [{ type: 'text', text: JSON.stringify(response.data) }],
        structuredContent: response.data,
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
