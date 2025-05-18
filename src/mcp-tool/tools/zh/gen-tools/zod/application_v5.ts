import { z } from 'zod';
export type applicationV5ToolName = 'application.v5.application.favourite' | 'application.v5.application.recommend';
export const applicationV5ApplicationFavourite = {
  project: 'application',
  name: 'application.v5.application.favourite',
  sdkName: 'application.v5.application.favourite',
  path: '/open-apis/application/v5/applications/favourite',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-工作台-我的常用-获取用户自定义常用的应用',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      language: z
        .enum(['zh_cn', 'en_us', 'ja_jp'])
        .describe('应用信息的语言版本 Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记,不填表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('单页需求最大个数（最大 100），不传默认10个').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const applicationV5ApplicationRecommend = {
  project: 'application',
  name: 'application.v5.application.recommend',
  sdkName: 'application.v5.application.recommend',
  path: '/open-apis/application/v5/applications/recommend',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-工作台-我的常用-获取管理员推荐的应用',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      language: z
        .enum(['zh_cn', 'en_us', 'ja_jp'])
        .describe('应用信息的语言版本 Options:zh_cn(Chinese 中文),en_us(English 英文),ja_jp(Japanese 日文)')
        .optional(),
      recommend_type: z
        .enum(['user_unremovable', 'user_removable'])
        .describe(
          '推荐应用类型，默认为用户不可移除的推荐应用列表 Options:user_unremovable(UserUnremovable 用户不可移除的推荐应用列表),user_removable(UserRemovable 用户可移除的推荐应用列表)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记,不填表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('单页需求最大个数（最大 100），不传默认10个').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const applicationV5Tools = [applicationV5ApplicationFavourite, applicationV5ApplicationRecommend];
