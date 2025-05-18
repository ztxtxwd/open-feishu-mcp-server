import { z } from 'zod';
export type reportV1ToolName = 'report.v1.rule.query' | 'report.v1.ruleView.remove' | 'report.v1.task.query';
export const reportV1RuleQuery = {
  project: 'report',
  name: 'report.v1.rule.query',
  sdkName: 'report.v1.rule.query',
  path: '/open-apis/report/v1/rules/query',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-汇报-规则-查询规则-查询规则',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      rule_name: z.string().describe('规则名称'),
      include_deleted: z
        .number()
        .describe('是否包括已删除，默认未删除 Options:0(Exclude 不包括已删除),1(Include 包括已删除)')
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const reportV1RuleViewRemove = {
  project: 'report',
  name: 'report.v1.ruleView.remove',
  sdkName: 'report.v1.ruleView.remove',
  path: '/open-apis/report/v1/rules/:rule_id/views/remove',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-汇报-规则看板-移除规则看板-移除规则看板',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z
        .array(z.string())
        .describe('列表为空删除规则下全用户视图，列表不为空删除指定用户视图，大小限制200')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ rule_id: z.string().describe('汇报规则ID') }),
  },
};
export const reportV1TaskQuery = {
  project: 'report',
  name: 'report.v1.task.query',
  sdkName: 'report.v1.task.query',
  path: '/open-apis/report/v1/tasks/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-汇报-任务-查询任务-查询任务',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      commit_start_time: z.number().describe('提交开始时间时间戳'),
      commit_end_time: z.number().describe('提交结束时间时间戳'),
      rule_id: z.string().describe('汇报规则ID').optional(),
      user_id: z.string().describe('用户ID').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        ),
      page_size: z.number().describe('单次分页返回的条数'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const reportV1Tools = [reportV1RuleQuery, reportV1RuleViewRemove, reportV1TaskQuery];
