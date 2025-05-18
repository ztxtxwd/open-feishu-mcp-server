import { z } from 'zod';
export type humanAuthenticationV1ToolName = 'human_authentication.v1.identity.create';
export const humanAuthenticationV1IdentityCreate = {
  project: 'human_authentication',
  name: 'human_authentication.v1.identity.create',
  sdkName: 'human_authentication.v1.identity.create',
  path: '/open-apis/human_authentication/v1/identities',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-实名认证-录入身份信息-该接口用于录入实名认证的身份信息，在唤起有源活体认证前，需要使用该接口进行实名认证',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      identity_name: z.string().describe('姓名'),
      identity_code: z.string().describe('身份证号'),
      mobile: z.string().describe('手机号').optional(),
    }),
    params: z.object({
      user_id: z
        .string()
        .describe(
          '用户的唯一标识（使用的ID类型见下一参数描述，不同ID类型的区别和获取，参考文档：）',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const humanAuthenticationV1Tools = [humanAuthenticationV1IdentityCreate];
