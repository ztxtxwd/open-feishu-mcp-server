import { z } from 'zod';
export type compensationV1ToolName =
  | 'compensation.v1.archive.query'
  | 'compensation.v1.changeReason.list'
  | 'compensation.v1.indicator.list'
  | 'compensation.v1.itemCategory.list'
  | 'compensation.v1.item.list'
  | 'compensation.v1.plan.list';
export const compensationV1ArchiveQuery = {
  project: 'compensation',
  name: 'compensation.v1.archive.query',
  sdkName: 'compensation.v1.archive.query',
  path: '/open-apis/compensation/v1/archives/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资档案-批量查询员工薪资档案-批量查询员工薪资档案',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      user_id_list: z.array(z.string()).describe('用户ID列表，获取方式可参考查询参数中的「user_id_type」字段'),
      tid_list: z.array(z.string()).describe('档案Tid列表').optional(),
      effective_start_date: z.string().describe('生效开始时间').optional(),
      effective_end_date: z.string().describe('生效结束时间').optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const compensationV1ChangeReasonList = {
  project: 'compensation',
  name: 'compensation.v1.changeReason.list',
  sdkName: 'compensation.v1.changeReason.list',
  path: '/open-apis/compensation/v1/change_reasons',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-定调薪-批量查询定调薪原因-批量查询定调薪原因',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const compensationV1IndicatorList = {
  project: 'compensation',
  name: 'compensation.v1.indicator.list',
  sdkName: 'compensation.v1.indicator.list',
  path: '/open-apis/compensation/v1/indicators',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量查询薪资统计指标-批量查询薪资统计指标',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const compensationV1ItemCategoryList = {
  project: 'compensation',
  name: 'compensation.v1.itemCategory.list',
  sdkName: 'compensation.v1.itemCategory.list',
  path: '/open-apis/compensation/v1/item_categories',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量获取薪资项分类信息-批量获取薪资项分类信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
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
export const compensationV1ItemList = {
  project: 'compensation',
  name: 'compensation.v1.item.list',
  sdkName: 'compensation.v1.item.list',
  path: '/open-apis/compensation/v1/items',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资项/统计指标-批量查询薪资项-批量查询薪资项',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const compensationV1PlanList = {
  project: 'compensation',
  name: 'compensation.v1.plan.list',
  sdkName: 'compensation.v1.plan.list',
  path: '/open-apis/compensation/v1/plans',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础薪酬-薪资方案-批量查询薪资方案-- 此接口将返回全部薪资方案信息，包括薪资方案 ID、生效日期、薪资项/薪资统计指标等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const compensationV1Tools = [
  compensationV1ArchiveQuery,
  compensationV1ChangeReasonList,
  compensationV1IndicatorList,
  compensationV1ItemCategoryList,
  compensationV1ItemList,
  compensationV1PlanList,
];
