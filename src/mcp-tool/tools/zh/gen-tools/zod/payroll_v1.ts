import { z } from 'zod';
export type payrollV1ToolName =
  | 'payroll.v1.acctItem.list'
  | 'payroll.v1.costAllocationPlan.list'
  | 'payroll.v1.costAllocationReport.list'
  | 'payroll.v1.datasourceRecord.query'
  | 'payroll.v1.datasourceRecord.save'
  | 'payroll.v1.datasource.list'
  | 'payroll.v1.paygroup.list'
  | 'payroll.v1.paymentActivityDetail.list'
  | 'payroll.v1.paymentActivity.archive'
  | 'payroll.v1.paymentActivity.list'
  | 'payroll.v1.paymentDetail.query';
export const payrollV1AcctItemList = {
  project: 'payroll',
  name: 'payroll.v1.acctItem.list',
  sdkName: 'payroll.v1.acctItem.list',
  path: '/open-apis/payroll/v1/acct_items',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-Payroll-算薪项-批量查询算薪项-批量查询算薪项',
  accessTokens: ['tenant', 'user'],
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
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1CostAllocationPlanList = {
  project: 'payroll',
  name: 'payroll.v1.costAllocationPlan.list',
  sdkName: 'payroll.v1.costAllocationPlan.list',
  path: '/open-apis/payroll/v1/cost_allocation_plans',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-成本分摊方案-批量查询成本分摊方案-根据期间分页批量查询成本分摊方案，仅返回期间内生效的方案列表',
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
      pay_period: z.string().describe('期间，生成成本分摊报表对应的年月。格式为 yyyy-MM'),
    }),
  },
};
export const payrollV1CostAllocationReportList = {
  project: 'payroll',
  name: 'payroll.v1.costAllocationReport.list',
  sdkName: 'payroll.v1.costAllocationReport.list',
  path: '/open-apis/payroll/v1/cost_allocation_reports',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-成本分摊报表-查询成本分摊报表汇总数据-根据算薪期间和成本分摊方案id获取成本分摊汇总数据。调用接口前，需在payroll 系统中打开「财务过账」开关，并且完成发布成本分摊报表',
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
      cost_allocation_plan_id: z
        .string()
        .describe(
          '成本分摊方案ID，通过获取',
        ),
      pay_period: z.string().describe('期间，成本分摊数据对应的年月，格式 为yyyy-MM'),
      report_type: z
        .number()
        .describe(
          '报表类型 Options:0(Default 默认，表示没有开通计提和实发功能时的报表类型，开通计提和实发之后，该类型报表将无法发布。),1(Accrued 计提),2(Paid 实发)',
        ),
    }),
  },
};
export const payrollV1DatasourceRecordQuery = {
  project: 'payroll',
  name: 'payroll.v1.datasourceRecord.query',
  sdkName: 'payroll.v1.datasourceRecord.query',
  path: '/open-apis/payroll/v1/datasource_records/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-Payroll-外部数据源记录-批量查询外部算薪数据记录-1. 支持通过payroll_period（必传）、employment_id（可选）这两个预置字段，批量查询指定数据源下的数据记录列表。2. 数据源配置信息可从或者 「飞书人事后台-设置-算薪数据设置-外部数据源配置」页面 获取',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      source_code: z.string().describe('数据源code'),
      selected_fields: z
        .array(z.string())
        .describe(
          '指定查询的数据源字段code。1. 如不传入此字段，默认返回所有数据源字段2. 如果传入，除了返回指定字段外，系统会默认返回emplyment_id、payroll_period字段的值',
        )
        .optional(),
      field_filters: z
        .array(
          z.object({
            field_code: z.string().describe('字段编码'),
            field_values: z.array(z.string()).describe('包含的字段值列表').optional(),
          }),
        )
        .describe(
          '查询条件列表，多个条件之间为And关系，只支持「employment_id」、「payroll_period」这两个预置字段的等值查询：1. payroll_period- 必传，最多传入2个。- 字段类型：field_type=4(日期) ， 格式“yyyy-mm”，示例：“2024-01”， 注意并非“yyyy-mm-dd”2. employment_id- 非必传，最多传入100个，field_type=3（文本类型）。- 该id为飞书人事中员工的基本信息id，可通过获取',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1DatasourceRecordSave = {
  project: 'payroll',
  name: 'payroll.v1.datasourceRecord.save',
  sdkName: 'payroll.v1.datasourceRecord.save',
  path: '/open-apis/payroll/v1/datasource_records/save',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-Payroll-外部数据源记录-创建 / 更新外部算薪数据-参照数据源配置字段格式，批量保存（创建或更新）数据记录。1. 记录的唯一标志通过业务主键判断（employment_id + payroll_period）2. 若不存在数据记录，则本次保存会插入1条记录。3. 若已存在数据记录，则本次保存会覆盖更新已有记录（只更新传入字段的值，未传入字段值不更新），如果传入的数据记录没有任何变化，则不更新。4. 若更新或者插入成功，会返回产生数据变更的记录条数',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      source_code: z
        .string()
        .describe(
          '数据源code。可从或者 「飞书人事后台-设置-算薪数据设置-外部数据源配置」页面 获取',
        ),
      records: z
        .array(
          z.object({
            active_status: z
              .number()
              .describe(
                '记录的启停用状态。说明：数据记录被停用后，依旧可以被API保存、查询，但无法被算薪使用。 Options:1(active 已启用),2(in_active 已停用)',
              ),
            field_values: z
              .array(
                z.object({
                  field_code: z
                    .string()
                    .describe(
                      '数据源字段编码，请确保字段存在且是启用的。可从「查询外部数据源设置」API 或者 「飞书人事后台-设置-算薪数据设置-外部数据源配置」页面 获取',
                    ),
                  value: z
                    .string()
                    .describe('字段值 通过string传输，不允许输入空字符串，请确保字段的值符合类型的约束。'),
                  field_type: z
                    .number()
                    .describe(
                      '1. 不需要传入此字段，这里只做文档说明用。2. 字段类型可从「查询外部数据源设置」的返回值中的datasources.fields. field_type中获取3. value的传值的格式需符合类型的约束：- field_type=1：金额。eg: "12.23"。目前仅支持人民币¥元，超过设置的精度会被四舍五入；- field_type=2：数值。eg: "12.23"。超过设置的精度会被四舍五入。- field_type=3：文本。 eg: "我是一段文本"。文本字符个数不允许超过500，一条记录的文本总的字符个数不允许超过3000.- field_type=4：日期。除系统预置的payroll_period字段外的所有自定义字段，日期格式均为“yyyy-mm-dd”，示例：“2024-01-01”。但payroll_period代表算薪期间，精确到月，格式“yyyy-mm”，示例：“2024-01”。- field_type=5：百分比。百分比 "10" 代表10%，最多保留两位小数，超过后四舍五入',
                    )
                    .optional(),
                }),
              )
              .describe(
                '记录的字段值列表。1. 每条记录必需传入系统预置字段“payroll_period”、“employment_id”。2. 其他自定义字段按照诉求传入，需保证写入的字段在配置中存在且启用。字段code不得重复传入，且字段的值需符合下面类型对应的约束。3. 关于“payroll_period”，“employment_id”两个预置字段值的说明： - payroll_period。代表算薪期间，精确到月，格式为“yyyy-mm” eg: "2024-01" - employment_id。该id为飞书人事中员工的基本信息id，可通过获取',
              ),
          }),
        )
        .describe('需保存的记录列表'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1DatasourceList = {
  project: 'payroll',
  name: 'payroll.v1.datasource.list',
  sdkName: 'payroll.v1.datasource.list',
  path: '/open-apis/payroll/v1/datasources',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-外部数据源设置-获取外部数据源配置信息-批量查询飞书人事后台：设置->算薪数据设置->外部数据源设置 中的数据源设置列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1PaygroupList = {
  project: 'payroll',
  name: 'payroll.v1.paygroup.list',
  sdkName: 'payroll.v1.paygroup.list',
  path: '/open-apis/payroll/v1/paygroups',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-薪资组-获取薪资组基本信息-- 薪资组是按薪酬管理的纬度创建的组，组内的员工由相同的HR处理薪酬相关工作，通过薪资组可实现对薪资组人员的管理和在薪酬计算发放等环节的人员权限范围控制- 本接口返回所有薪资组的基本信息，包括薪资组ID、薪资组名称、薪资组编码、薪资组状态等，不含薪资组下的员工信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，默认值100').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const payrollV1PaymentActivityDetailList = {
  project: 'payroll',
  name: 'payroll.v1.paymentActivityDetail.list',
  sdkName: 'payroll.v1.paymentActivityDetail.list',
  path: '/open-apis/payroll/v1/payment_activity_details',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-发薪明细-查询发薪活动明细列表-根据「发薪活动 ID 」和「分页参数」查询发薪活动明细列表和关联的算薪明细分段数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_index: z.number().describe('页码，第一页从 1 开始'),
      page_size: z.number().describe('每页大小，范围为：[1, 100]'),
      activity_id: z
        .string()
        .describe(
          '发薪活动 ID，调用接口后，可以从返回结果中获取到发薪活动 ID',
        ),
      include_segment_data: z
        .boolean()
        .describe(
          '是否需要查询算薪明细的分段信息，如果不传该参数或传 false ，那么只返回发薪活动明细数据；如果该参数传了 true，那么同时返回发薪明细对应的算薪明细分段数据',
        )
        .optional(),
      acct_item_ids: z
        .array(z.string())
        .describe(
          '算薪项 ID 列表，调用接口后，可以从返回结果中获取到算薪项 ID。1. 当前参数传空时，接口会返回发薪明细中所有的算薪项；2. 当前参数不为空时，接口只返回发薪明细中与 acct_item_ids 存在交集的算薪项',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1PaymentActivityArchive = {
  project: 'payroll',
  name: 'payroll.v1.paymentActivity.archive',
  sdkName: 'payroll.v1.paymentActivity.archive',
  path: '/open-apis/payroll/v1/payment_activitys/archive',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-Payroll-发薪活动-封存发薪活动-根据发薪活动ID对发薪活动进行封存。注意：仅当发薪活动状态为审批通过时，方可进行封存',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      activity_id: z
        .string()
        .describe(
          '发薪活动ID，可通过获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1PaymentActivityList = {
  project: 'payroll',
  name: 'payroll.v1.paymentActivity.list',
  sdkName: 'payroll.v1.paymentActivity.list',
  path: '/open-apis/payroll/v1/payment_activitys',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-Payroll-发薪活动-查询发薪活动列表-根据「发薪日起止范围」、「发薪活动状态」和「分页参数」查询发薪活动列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      pay_period_start_date: z
        .string()
        .describe('发薪日开始时间，格式：YYYY-MM-dd，[pay_period_start_date, pay_period_end_date] 是一个左闭右闭区间'),
      pay_period_end_date: z
        .string()
        .describe('发薪日结束时间，格式：YYYY-MM-dd，[pay_period_start_date, pay_period_end_date] 是一个左闭右闭区间'),
      page_size: z.number().describe('分页大小，传值范围为 [1, 100]'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      statuses: z
        .array(z.number())
        .describe(
          '发薪活动审批状态列表，其中：1. 100 - 待确认名单2. 150 - 待提交审批3. 200 - 审批中4. 300 - 审批被拒绝5. 350 - 审批被撤回6. 360 - 审批被撤销7. 375 - 审批通过8. 400 - 已封存',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1PaymentDetailQuery = {
  project: 'payroll',
  name: 'payroll.v1.paymentDetail.query',
  sdkName: 'payroll.v1.paymentDetail.query',
  path: '/open-apis/payroll/v1/payment_detail/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-Payroll-发薪明细-批量查询发薪明细-根据 __发薪活动 ID 列表__ 、__发薪日起止时间__ 和 __飞书人事雇佣 ID 列表__ 分页查询发薪明细列表和关联的算薪明细分段数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      page_index: z.number().describe('页码，第一页从 1 开始'),
      page_size: z.number().describe('每页大小，范围为：[1, 100]'),
      acct_item_ids: z
        .array(z.string())
        .describe(
          '算薪项 ID 列表，调用接口后，可以从返回结果中获取到算薪项 ID。1. 当前参数传空时，接口会返回发薪明细中所有的算薪项；2. 当前参数不为空时，接口只返回发薪明细中与 acct_item_ids 存在交集的算薪项',
        )
        .optional(),
      employee_ids: z
        .array(z.string())
        .describe(
          '员工的飞书人事雇佣 ID 列表，__该参数为必填__，调用接口后，可以从返回结果中获取到飞书人事雇佣 ID。注：调用接口时，查询入参 user_id_type 应为 people_corehr_id',
        ),
      pay_period_start_date: z
        .string()
        .describe('发薪日开始时间，格式：YYYY-MM-dd，[pay_period_start_date, pay_period_end_date] 是一个左闭右闭区间')
        .optional(),
      pay_period_end_date: z
        .string()
        .describe(
          '发薪日结束时间，格式：YYYY-MM-dd，[pay_period_start_date, pay_period_end_date] 是一个左闭右闭区间。1. pay_period_start_date 不得晚于 pay_period_end_date 。2. [pay_period_start_date, pay_period_end_date] 最大间隔为 12 个月',
        )
        .optional(),
      activity_ids: z
        .array(z.string())
        .describe(
          '发薪活动 ID 列表，调用接口后，可以从返回结果中获取到发薪活动 ID',
        )
        .optional(),
      include_segment_data: z
        .boolean()
        .describe(
          '是否需要查询算薪明细的分段信息，如果不传该参数或传 false ，那么只返回发薪活动明细数据；如果该参数传了 true，那么同时返回发薪明细对应的算薪明细分段数据',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const payrollV1Tools = [
  payrollV1AcctItemList,
  payrollV1CostAllocationPlanList,
  payrollV1CostAllocationReportList,
  payrollV1DatasourceRecordQuery,
  payrollV1DatasourceRecordSave,
  payrollV1DatasourceList,
  payrollV1PaygroupList,
  payrollV1PaymentActivityDetailList,
  payrollV1PaymentActivityArchive,
  payrollV1PaymentActivityList,
  payrollV1PaymentDetailQuery,
];
