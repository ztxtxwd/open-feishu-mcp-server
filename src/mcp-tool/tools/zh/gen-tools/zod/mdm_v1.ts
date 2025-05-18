import { z } from 'zod';
export type mdmV1ToolName = 'mdm.v1.userAuthDataRelation.bind' | 'mdm.v1.userAuthDataRelation.unbind';
export const mdmV1UserAuthDataRelationBind = {
  project: 'mdm',
  name: 'mdm.v1.userAuthDataRelation.bind',
  sdkName: 'mdm.v1.userAuthDataRelation.bind',
  path: '/open-apis/mdm/v1/user_auth_data_relations/bind',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书主数据-数据维度-用户数据维度绑定-通过该接口，可为指定应用下的用户绑定一类数据维度，支持批量给多个用户同时增量授权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      root_dimension_type: z.string().describe('数据类型编码'),
      sub_dimension_types: z.array(z.string()).describe('数据编码列表'),
      authorized_user_ids: z.array(z.string()).describe('授权人的lark id'),
      uams_app_id: z.string().describe('uams系统中应用id'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const mdmV1UserAuthDataRelationUnbind = {
  project: 'mdm',
  name: 'mdm.v1.userAuthDataRelation.unbind',
  sdkName: 'mdm.v1.userAuthDataRelation.unbind',
  path: '/open-apis/mdm/v1/user_auth_data_relations/unbind',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书主数据-数据维度-用户数据维度解绑-通过该接口，可为指定应用下的指定用户解除一类数据维度',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      root_dimension_type: z.string().describe('数据类型编码'),
      sub_dimension_types: z.array(z.string()).describe('数据编码列表'),
      authorized_user_ids: z.array(z.string()).describe('授权人的lark id'),
      uams_app_id: z.string().describe('uams系统中应用id'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const mdmV1Tools = [mdmV1UserAuthDataRelationBind, mdmV1UserAuthDataRelationUnbind];
