import { z } from 'zod';
export type performanceV1ToolName =
  | 'performance.v1.reviewData.query'
  | 'performance.v1.semester.list'
  | 'performance.v1.stageTask.findByPage'
  | 'performance.v1.stageTask.findByUserList';
export const performanceV1ReviewDataQuery = {
  project: 'performance',
  name: 'performance.v1.reviewData.query',
  sdkName: 'performance.v1.reviewData.query',
  path: '/open-apis/performance/v1/review_datas/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-评估数据-获取绩效结果-获取被评估人在指定周期、指定项目中各个环节的评估结果信息，包含绩效所在的周期、项目、评估项、评估模版以及各环节评估数据等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      start_time: z
        .string()
        .describe(
          '周期开始时间最小值，毫秒时间戳，小于该时间开始的周期会被过滤掉**注意**：当填写了 `semester_id_list` 参数时，此参数无效',
        ),
      end_time: z
        .string()
        .describe(
          '周期结束时间最大值，毫秒时间戳，大于该时间结束的周期会被过滤掉**注意**：当填写了 `semester_id_list` 参数时，此参数无效',
        ),
      stage_types: z
        .array(
          z
            .enum(['leader_review', 'communication_and_open_result', 'view_result'])
            .describe(
              'Options:leader_review(终评环节),communication_and_open_result(结果沟通环节),view_result(查看绩效结果环节)',
            ),
        )
        .describe('环节类型，目前仅支持终评环节、结果沟通环节、查看绩效结果环节（不传默认包含所有的环节）'),
      stage_progress: z
        .array(
          z
            .number()
            .describe(
              'Options:0(未开始，任务的开始时间未到达),1(待完成，任务的开始时间到达而截止时间未到达，且任务未完成),2(已截止，任务的截止时间已到达，且任务未完成),3(已完成，任务已完成),4(已复议)',
            ),
        )
        .describe('环节状态，填写时按照指定状态获取绩效结果，不填查询所有状态的绩效结果')
        .optional(),
      semester_id_list: z
        .array(z.string())
        .describe(
          '评估周期 ID 列表，可通过接口获取',
        )
        .optional(),
      reviewee_user_id_list: z.array(z.string()).describe('被评估人 ID 列表，与入参 `user_id_type` 类型一致'),
      updated_later_than: z
        .string()
        .describe('环节更新时间最早时间，毫秒时间戳，可筛选出在此时间之后，有内容提交的环节数据')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const performanceV1SemesterList = {
  project: 'performance',
  name: 'performance.v1.semester.list',
  sdkName: 'performance.v1.semester.list',
  path: '/open-apis/performance/v1/semesters',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-后台配置-周期与项目-周期-获取周期列表-批量获取周期的基本信息，如周期的名称、类型等信息。支持根据时间段、周期年份、周期类型等过滤条件进行筛选',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      start_time: z.string().describe('周期开始时间最小值，毫秒时间戳，小于该时间开始的周期会被过滤掉').optional(),
      end_time: z.string().describe('周期结束时间最大值，毫秒时间戳，大于该时间结束的周期会被过滤掉').optional(),
      year: z.number().describe('周期年份，填写时按照周期年份筛选').optional(),
      type_group: z
        .enum(['Annual', 'Semi-annual', 'Quarter', 'Bimonth', 'Month', 'Non-standard'])
        .describe(
          '周期类型分组，填写时按照周期类型分组 Options:Annual(年),Semi-annual(SemiAnnual 半年),Quarter(季度),Bimonth(双月),Month(月),Non-standard(NonStandard 非标准周期)',
        )
        .optional(),
      type: z
        .enum([
          'Annual',
          'H1',
          'H2',
          'Q1',
          'Q2',
          'Q3',
          'Q4',
          'January-February',
          'March-April',
          'May-June',
          'July-August',
          'September-October',
          'November-December',
          'January',
          'February',
          'March',
          'April',
          'May',
          'June',
          'July',
          'August',
          'September',
          'October',
          'November',
          'December',
          'Custom',
        ])
        .describe(
          '周期类型，填写时按照周期类型筛选 Options:Annual(全年),H1(上半年),H2(下半年),Q1(第一季度),Q2(第二季度),Q3(第三季度),Q4(第四季度),January-February(January2February 1-2 双月),March-April(March2April 3-4 双月),May-June(May2June 5-6 双月),July-August(July2August 7-8 双月),September-October(September2October 9-10 双月),November-December(November2December 11-12 双月),January(1月份),February(2月份),March(3月份),April(4月份),May(5月份),June(6月份),July(7月份),August(8月份),September(9月份),October(10月份),November(11月份),December(12月份),Custom(自定义)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV1StageTaskFindByPage = {
  project: 'performance',
  name: 'performance.v1.stageTask.findByPage',
  sdkName: 'performance.v1.stageTask.findByPage',
  path: '/open-apis/performance/v1/stage_tasks/find_by_page',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-评估任务-获取周期任务（全部用户）-批量获取周期下所有用户的任务信息。支持传入任务分类、任务截止时间参数删选周期内任务数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe('周期 ID，可通过接口获取'),
      task_option_lists: z
        .array(z.number())
        .describe(
          '任务分类，填写则获取指定分类的任务**可选项有**：- `1`：待完成- `2`：已完成- `3`：已逾期（仅当租户设置不允许逾期提交时才有此分类）',
        )
        .optional(),
      after_time: z.string().describe('任务截止时间最小值，毫秒时间戳，填写则查询在此时间之后截止的任务').optional(),
      before_time: z.string().describe('任务截止时间最大值，毫秒时间戳，填写则查询在此时间之前截止的任务').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV1StageTaskFindByUserList = {
  project: 'performance',
  name: 'performance.v1.stageTask.findByUserList',
  sdkName: 'performance.v1.stageTask.findByUserList',
  path: '/open-apis/performance/v1/stage_tasks/find_by_user_list',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-评估任务-获取周期任务（指定用户）-根据用户 ID 批量获取指定周期的任务信息。支持传入任务分类、任务截止时间参数删选周期内任务数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe('周期 ID，可通过接口获取'),
      user_id_lists: z
        .array(z.string())
        .describe(
          '用户 ID 列表，与入参 `user_id_type` 类型一致。如果以用户身份访问（user_access_token）时，仅能填写本人用户 ID',
        ),
      task_option_lists: z
        .array(z.number())
        .describe(
          '任务分类，填写则获取指定分类的任务**可选项有**：- `1`：待完成- `2`：已完成- `3`：已逾期（仅当租户设置不允许逾期提交时才有此分类）',
        )
        .optional(),
      after_time: z.string().describe('任务截止时间最小值，毫秒时间戳，填写则查询在此时间之后截止的任务').optional(),
      before_time: z.string().describe('任务截止时间最大值，毫秒时间戳，填写则查询在此时间之前截止的任务').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const performanceV1Tools = [
  performanceV1ReviewDataQuery,
  performanceV1SemesterList,
  performanceV1StageTaskFindByPage,
  performanceV1StageTaskFindByUserList,
];
