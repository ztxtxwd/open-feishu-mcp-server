import { z } from 'zod';
export type securityAndComplianceV1ToolName = 'security_and_compliance.v1.openapiLog.listData';
export const securityAndComplianceV1OpenapiLogListData = {
  project: 'security_and_compliance',
  name: 'security_and_compliance.v1.openapiLog.listData',
  sdkName: 'security_and_compliance.v1.openapiLog.listData',
  path: '/open-apis/security_and_compliance/v1/openapi_logs/list_data',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-安全合规-OpenAPI审计日志-获取OpenAPI审计日志数据-该接口用于获取OpenAPI审计日志数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      api_keys: z
        .array(z.string())
        .describe(
          '飞书开放平台定义的API，参考：',
        )
        .optional(),
      start_time: z.number().describe('以秒为单位的起始时间戳').optional(),
      end_time: z.number().describe('以秒为单位的终止时间戳').optional(),
      app_id: z
        .string()
        .describe(
          '调用OpenAPI的应用唯一标识，可以前往  > 应用详情页 > 凭证与基础信息中获取 app_id',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const securityAndComplianceV1Tools = [securityAndComplianceV1OpenapiLogListData];
