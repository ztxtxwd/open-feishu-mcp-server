import { z } from 'zod';
export type momentsV1ToolName = 'moments.v1.post.get';
export const momentsV1PostGet = {
  project: 'moments',
  name: 'moments.v1.post.get',
  sdkName: 'moments.v1.post.get',
  path: '/open-apis/moments/v1/posts/:post_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-公司圈-帖子-查询帖子信息-通过 ID 查询帖子实体数据信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ post_id: z.string().describe('帖子的ID，可从发布帖子接口返回数据或发布帖子事件中获取') }),
  },
};
export const momentsV1Tools = [momentsV1PostGet];
