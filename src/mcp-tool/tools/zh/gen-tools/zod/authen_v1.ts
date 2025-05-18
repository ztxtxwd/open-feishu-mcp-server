import { z } from 'zod';
export type authenV1ToolName = 'authen.v1.userInfo.get';
export const authenV1UserInfoGet = {
  project: 'authen',
  name: 'authen.v1.userInfo.get',
  sdkName: 'authen.v1.userInfo.get',
  path: '/open-apis/authen/v1/user_info',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-认证及授权-登录态管理-获取用户信息-通过 `user_access_token` 获取相关用户信息',
  accessTokens: ['user'],
  schema: {
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const authenV1Tools = [authenV1UserInfoGet];
