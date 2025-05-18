import { z } from 'zod';
export type passportV1ToolName = 'passport.v1.session.logout' | 'passport.v1.session.query';
export const passportV1SessionLogout = {
  project: 'passport',
  name: 'passport.v1.session.logout',
  sdkName: 'passport.v1.session.logout',
  path: '/open-apis/passport/v1/sessions/logout',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-登录态管理-退出登录-该接口用于退出用户的登录态',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      idp_credential_id: z.string().describe('idp 侧的唯一标识，logout_type = 2 时必填').optional(),
      logout_type: z
        .number()
        .describe(
          '登出的方式 Options:1(UserID UserID，使用开放平台的维度登出),2(IdpCredentialID IdpCredentialID，使用 idp 侧的唯一标识登出),3(SessionUUID Session 标识符，基于session uuid 登出)',
        ),
      terminal_type: z
        .array(z.number())
        .describe(
          '登出的客户端类型，默认全部登出。可选值：- 1：PC 端- 2：Web 端- 3：Android 端- 4：iOS 端- 5：服务端- 6：旧版小程序端- 8：其他移动端',
        )
        .optional(),
      user_id: z
        .string()
        .describe('开放平台的数据标识，用户 ID 类型与查询参数 user_id_type 一致，logout_type = 1 时必填')
        .optional(),
      logout_reason: z
        .number()
        .describe(
          '登出提示语，非必填，不传时默认提示：你已在其他客户端上退出了当前设备，请重新登录。可选值：- 34：您已修改登录密码，请重新登录- 35：您的登录态已失效，请重新登录- 36：您的密码已过期，请在登录页面通过忘记密码功能修改密码后重新登录',
        )
        .optional(),
      sid: z.string().describe('需要精确登出的 session 标识符，logout_type = 3 时必填').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const passportV1SessionQuery = {
  project: 'passport',
  name: 'passport.v1.session.query',
  sdkName: 'passport.v1.session.query',
  path: '/open-apis/passport/v1/sessions/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-登录态管理-批量获取脱敏的用户登录信息-该接口用于查询用户的登录信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ user_ids: z.array(z.string()).describe('用户 ID').optional() }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const passportV1Tools = [passportV1SessionLogout, passportV1SessionQuery];
