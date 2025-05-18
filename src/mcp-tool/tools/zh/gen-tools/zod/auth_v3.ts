import { z } from 'zod';
export type authV3ToolName =
  | 'auth.v3.auth.appAccessToken'
  | 'auth.v3.auth.appAccessTokenInternal'
  | 'auth.v3.auth.appTicketResend'
  | 'auth.v3.auth.tenantAccessToken'
  | 'auth.v3.auth.tenantAccessTokenInternal';
export const authV3AuthAppAccessToken = {
  project: 'auth',
  name: 'auth.v3.auth.appAccessToken',
  sdkName: 'auth.v3.auth.appAccessToken',
  path: '/open-apis/auth/v3/app_access_token',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-获取访问凭证-商店应用获取 app_access_token',
  accessTokens: undefined,
  schema: {
    data: z.object({
      app_id: z.string().describe('应用唯一标识，创建应用后获得'),
      app_secret: z.string().describe('应用秘钥，创建应用后获得'),
      app_ticket: z.string().describe('平台定时推送给应用的临时凭证，通过事件监听机制获得'),
    }),
  },
};
export const authV3AuthAppAccessTokenInternal = {
  project: 'auth',
  name: 'auth.v3.auth.appAccessTokenInternal',
  sdkName: 'auth.v3.auth.appAccessTokenInternal',
  path: '/open-apis/auth/v3/app_access_token/internal',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-获取访问凭证-自建应用获取 app_access_token',
  accessTokens: undefined,
  schema: {
    data: z.object({
      app_id: z.string().describe('应用唯一标识，创建应用后获得'),
      app_secret: z.string().describe('应用秘钥，创建应用后获得'),
    }),
  },
};
export const authV3AuthAppTicketResend = {
  project: 'auth',
  name: 'auth.v3.auth.appTicketResend',
  sdkName: 'auth.v3.auth.appTicketResend',
  path: '/open-apis/auth/v3/app_ticket/resend',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-获取访问凭证-重新获取 app_ticket',
  accessTokens: undefined,
  schema: {
    data: z.object({
      app_id: z.string().describe('应用唯一标识，创建应用后获得'),
      app_secret: z.string().describe('应用秘钥，创建应用后获得'),
    }),
  },
};
export const authV3AuthTenantAccessToken = {
  project: 'auth',
  name: 'auth.v3.auth.tenantAccessToken',
  sdkName: 'auth.v3.auth.tenantAccessToken',
  path: '/open-apis/auth/v3/tenant_access_token',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-获取访问凭证-商店应用获取 tenant_access_token',
  accessTokens: undefined,
  schema: {
    data: z.object({
      app_access_token: z.string().describe('应用唯一标识，创建应用'),
      tenant_key: z.string().describe('应用秘钥，创建应用后获得'),
    }),
  },
};
export const authV3AuthTenantAccessTokenInternal = {
  project: 'auth',
  name: 'auth.v3.auth.tenantAccessTokenInternal',
  sdkName: 'auth.v3.auth.tenantAccessTokenInternal',
  path: '/open-apis/auth/v3/tenant_access_token/internal',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-认证及授权-获取访问凭证-自建应用获取 tenant_access_token',
  accessTokens: undefined,
  schema: {
    data: z.object({
      app_id: z.string().describe('应用唯一标识，创建应用后获得'),
      app_secret: z.string().describe('应用秘钥，创建应用后获得'),
    }),
  },
};
export const authV3Tools = [
  authV3AuthAppAccessToken,
  authV3AuthAppAccessTokenInternal,
  authV3AuthAppTicketResend,
  authV3AuthTenantAccessToken,
  authV3AuthTenantAccessTokenInternal,
];
