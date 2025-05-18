import { z } from 'zod';
export type performanceV2ToolName =
  | 'performance.v2.activity.query'
  | 'performance.v2.additionalInformation.import'
  | 'performance.v2.additionalInformation.query'
  | 'performance.v2.additionalInformationsBatch.delete'
  | 'performance.v2.indicator.query'
  | 'performance.v2.metricDetail.import'
  | 'performance.v2.metricDetail.query'
  | 'performance.v2.metricField.query'
  | 'performance.v2.metricLib.query'
  | 'performance.v2.metricTag.list'
  | 'performance.v2.metricTemplate.query'
  | 'performance.v2.question.query'
  | 'performance.v2.reviewData.query'
  | 'performance.v2.reviewTemplate.query'
  | 'performance.v2.reviewee.query'
  | 'performance.v2.userGroupUserRel.write';
export const performanceV2ActivityQuery = {
  project: 'performance',
  name: 'performance.v2.activity.query',
  sdkName: 'performance.v2.activity.query',
  path: '/open-apis/performance/v2/activity/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-后台配置-周期与项目-项目-获取项目列表-批量获取项目的配置信息，如项目名称、项目模式等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_ids: z
        .array(z.string())
        .describe(
          '评估周期 ID 列表，可通过获取**注意**：若填写了 `activity_ids` 参数时，此参数无效',
        )
        .optional(),
      activity_ids: z.array(z.string()).describe('项目 ID 列表').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const performanceV2AdditionalInformationImport = {
  project: 'performance',
  name: 'performance.v2.additionalInformation.import',
  sdkName: 'performance.v2.additionalInformation.import',
  path: '/open-apis/performance/v2/additional_informations/import',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-后台配置-周期与项目-补充信息-批量导入补充信息-批量导入被评估人的补充信息作为绩效评估的参考，如补充信息的事项、时间以及具体描述等。该接口支持创建和更新补充信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe(
          '评估周期 ID，可通过接口获取',
        ),
      additional_informations: z
        .array(
          z.object({
            item_id: z
              .string()
              .describe('补充信息 ID**注意**：若传入系统中已有的补充信息 ID 时，将更新对应的补充消息数据')
              .optional(),
            external_id: z
              .string()
              .describe(
                '外部系统补充信息 ID，用于系统间的数据映射。**注意**：若传入系统中已有的外部系统补充信息 ID 时，将更新对应的补充消息数据',
              )
              .optional(),
            reviewee_user_id: z
              .string()
              .describe(
                '被评估人 ID 列表，与入参 `user_id_type` 类型一致，可通过接口获取**注意**：若 `reviewee_user_id`、`item `、`time `、`detailed_description` 的参数组合在系统中已存在内容一致的补充消息时，将更新对应的补充消息数据',
              ),
            item: z
              .string()
              .describe(
                '事项**注意**：若 `reviewee_user_id`、`item `、`time `、`detailed_description` 的参数组合在系统中已存在内容一致的补充消息时，将更新对应的补充消息数据',
              ),
            time: z
              .string()
              .describe(
                '时间**说明**：文本内容，无格式校验**注意**：若 `reviewee_user_id`、`item `、`time `、`detailed_description` 的参数组合在系统中已存在内容一致的补充消息时，将更新对应的补充消息数据',
              ),
            detailed_description: z
              .string()
              .describe(
                '具体描述**注意**：若 `reviewee_user_id`、`item `、`time `、`detailed_description` 的参数组合在系统中已存在内容一致的补充消息时，将更新对应的补充消息数据',
              ),
          }),
        )
        .describe('补充信息列表')
        .optional(),
      import_record_name: z
        .string()
        .describe('补充信息导入记录名称，管理员可在补充信息管理的导入记录中查看。**默认值**："API导入"')
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 `client_token` 是否一致来判断是否为同一请求，同一请求多次调用将被拦截'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV2AdditionalInformationQuery = {
  project: 'performance',
  name: 'performance.v2.additionalInformation.query',
  sdkName: 'performance.v2.additionalInformation.query',
  path: '/open-apis/performance/v2/additional_informations/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-后台配置-周期与项目-补充信息-批量查询补充信息-批量查询被评估人的补充信息，如补充信息的事项、时间以及具体描述等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe(
          '评估周期 ID，可通过接口获取**注意**：若请求参数 `item_ids`、`external_ids`、`reviewee_user_ids` 均为空，返回 `semester_id` 参数指定周期的所有补充信息',
        ),
      item_ids: z
        .array(z.string())
        .describe(
          '补充信息 ID 列表，可通过接口获取**说明**：若提供多个筛选参数，按照 `item_ids` > `external_ids` > `reviewee_user_ids` 的优先级顺序，以第一个有值的筛选参数进行筛选',
        )
        .optional(),
      external_ids: z
        .array(z.string())
        .describe(
          '外部系统补充信息 ID 列表，该 ID 在通过接口导入时写入**说明**：若提供多个筛选参数，按照 `item_ids` > `external_ids` > `reviewee_user_ids` 的优先级顺序，以第一个有值的筛选参数进行筛选',
        )
        .optional(),
      reviewee_user_ids: z
        .array(z.string())
        .describe(
          '被评估人 ID 列表，与入参 `user_id_type` 类型一致，可通过接口获取**说明**：若提供多个筛选参数，按照 `item_ids` > `external_ids` > `reviewee_user_ids` 的优先级顺序，以第一个有值的筛选参数进行筛选',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2AdditionalInformationsBatchDelete = {
  project: 'performance',
  name: 'performance.v2.additionalInformationsBatch.delete',
  sdkName: 'performance.v2.additionalInformationsBatch.delete',
  path: '/open-apis/performance/v2/additional_informations/batch',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-后台配置-周期与项目-补充信息-批量删除补充信息-批量删除被评估人的补充信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe(
          '评估周期 ID，可通过接口获取',
        ),
      additional_informations: z
        .array(z.string().describe('飞书绩效的事项 ID'))
        .describe(
          '补充信息 ID 列表，可通过接口获取',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const performanceV2IndicatorQuery = {
  project: 'performance',
  name: 'performance.v2.indicator.query',
  sdkName: 'performance.v2.indicator.query',
  path: '/open-apis/performance/v2/indicators/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-后台配置-评估模板和评估题-获取评估项列表-批量获取评估项信息，如评估项名称、评估项类型、评估项等级配置等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      indicator_ids: z
        .array(z.string())
        .describe('评估项 ID 列表，填写时获取指定的评估项，不填时返回所有评估项')
        .optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2MetricDetailImport = {
  project: 'performance',
  name: 'performance.v2.metricDetail.import',
  sdkName: 'performance.v2.metricDetail.import',
  path: '/open-apis/performance/v2/metric_details/import',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-绩效-指标数据-录入被评估人关键指标数据-批量录入指定周期中被评估人的关键指标数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe('周期 ID，可通过接口获取'),
      import_record_name: z.string().describe('数据源录入人，在录入记录页面可以查看该记录名称').optional(),
      imported_metrics: z
        .array(
          z.object({
            reviewee_user_id: z.string().describe('被评估人 ID，与入参 `user_id_type` 类型一致'),
            metric_id: z
              .string()
              .describe(
                '指标 ID，可通过接口获取',
              ),
            fields: z
              .array(
                z.object({
                  field_id: z
                    .string()
                    .describe(
                      '指标字段 ID，可通过接口获取',
                    ),
                  field_value: z.string().describe('字段值').optional(),
                  field_value_person: z.string().describe('字段值，当字段为人员信息时必填').optional(),
                }),
              )
              .describe('指标字段信息'),
          }),
        )
        .describe('指标明细列表'),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV2MetricDetailQuery = {
  project: 'performance',
  name: 'performance.v2.metricDetail.query',
  sdkName: 'performance.v2.metricDetail.query',
  path: '/open-apis/performance/v2/metric_details/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-绩效-指标数据-获取被评估人关键指标结果-批量获取指定周期中被评估人的关键指标结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe(
          '周期 ID，1 次只允许查询 1 个周期，semester_id 可通过【】接口获得',
        ),
      reviewee_user_ids: z.array(z.string()).describe('被评估人 ID 列表，与入参 `user_id_type` 类型一致'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV2MetricFieldQuery = {
  project: 'performance',
  name: 'performance.v2.metricField.query',
  sdkName: 'performance.v2.metricField.query',
  path: '/open-apis/performance/v2/metric_fields/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-后台配置-指标-获取指标字段列表-批量获取指标的字段基础信息，如指标字段名称、指标字段类型等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      field_ids: z
        .array(z.string())
        .describe('指标的字段 ID 列表，填写时获取指定指标字段，不填时获取全部指标字段')
        .optional(),
    }),
  },
};
export const performanceV2MetricLibQuery = {
  project: 'performance',
  name: 'performance.v2.metricLib.query',
  sdkName: 'performance.v2.metricLib.query',
  path: '/open-apis/performance/v2/metric_libs/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-后台配置-指标-获取指标列表-获取指标库中的指标信息，如指标名称、指标类型、指标标签和指标字段等信息。可通过指标启用状态、指标类型、指标可用范围等筛选条件获取指定范围的指标信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      is_active: z.boolean().describe('指标启用状态，填写时根据指定启用状态进行筛选').optional(),
      tag_ids: z
        .array(z.string())
        .describe(
          '指标标签 ID 列表，可通过接口获取，填写时筛选拥有指定标签的指标',
        )
        .optional(),
      type_ids: z
        .array(z.string())
        .describe(
          '指标类型 ID 列表，可通过接口返回结果中的 `data.items.metrics.type_id` 获取，填写时根据指定的指标类型进行筛选',
        )
        .optional(),
      range_of_availability: z
        .enum(['admins_and_reviewees', 'only_admins'])
        .describe(
          '指标可用范围，填写时根据指定可用范围进行筛选 Options:admins_and_reviewees(允许管理员下发和被评估人选用),only_admins(仅允许管理员下发)',
        )
        .optional(),
      scoring_setting_type: z
        .enum(['score_manually', 'score_by_formula'])
        .describe(
          '指标评分类型，填写时根据指定评分类型进行筛选 Options:score_manually(手动评分),score_by_formula(公式评分)',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2MetricTagList = {
  project: 'performance',
  name: 'performance.v2.metricTag.list',
  sdkName: 'performance.v2.metricTag.list',
  path: '/open-apis/performance/v2/metric_tags',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-绩效-后台配置-指标-获取指标标签列表-批量获取指标的标签信息，如标签名称、创建时间等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小**默认值**：20').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      tag_ids: z
        .array(z.string())
        .describe('指标标签 ID 列表，传此参数时不进行分页，不传时分页返回所有数据')
        .optional(),
    }),
  },
};
export const performanceV2MetricTemplateQuery = {
  project: 'performance',
  name: 'performance.v2.metricTemplate.query',
  sdkName: 'performance.v2.metricTemplate.query',
  path: '/open-apis/performance/v2/metric_templates/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-绩效-后台配置-指标-获取指标模板列表-批量获取指标模板的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      metrics_template_ids: z.array(z.string()).describe('指标模板 ID 列表，填写时获取指定的指标模版').optional(),
      status: z
        .enum(['to_be_configured', 'to_be_activated', 'enabled', 'disabled'])
        .describe(
          '指标模版状态 Options:to_be_configured(待完成配置),to_be_activated(待启用),enabled(已启用),disabled(已停用)',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2QuestionQuery = {
  project: 'performance',
  name: 'performance.v2.question.query',
  sdkName: 'performance.v2.question.query',
  path: '/open-apis/performance/v2/questions/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-后台配置-评估模板和评估题-获取标签填写题配置-获取标签填写题配置信息，包括标签填写题名称、标签列表等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      tag_based_question_ids: z
        .array(z.string())
        .describe('标签填写题 ID 列表，获取指定标签填写题的配置数据。如果不传则返回所有')
        .optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2ReviewDataQuery = {
  project: 'performance',
  name: 'performance.v2.reviewData.query',
  sdkName: 'performance.v2.reviewData.query',
  path: '/open-apis/performance/v2/review_datas/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-评估数据-获取绩效详情数据-获取被评估人各环节的绩效评估详情（不包含校准环节），如环节评估数据、环节提交状态等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_ids: z
        .array(z.string())
        .describe(
          '评估周期 ID 列表，semester_id 可通过获得',
        ),
      reviewee_user_ids: z.array(z.string()).describe('被评估人 ID 列表，ID 类型与user_id_type 的取值一致'),
      stage_types: z
        .array(
          z
            .enum([
              'summarize_key_outputs',
              'review',
              'communication_and_open_result',
              'view_result',
              'reconsideration',
              'leader_review',
            ])
            .describe(
              'Options:summarize_key_outputs(工作总结环节),review(评估型环节),communication_and_open_result(结果沟通环节),view_result(绩效结果查看环节),reconsideration(结果复议环节),leader_review(终评环节（特指最终的绩效结果数据）)',
            ),
        )
        .describe(
          '环节类型，如果同时传了环节 ID 和环节类型，优先返回环节 ID 对应的绩效数据。stage_types 和 stage_ids 至少要传一个，不传默认不返回任何环节评估数据',
        )
        .optional(),
      review_stage_roles: z
        .array(
          z
            .enum([
              'reviewee',
              'invited_reviewer',
              'solid_line_leader',
              'dotted_line_leader',
              'secondary_solid_line_leader',
              'direct_project_leader',
              'custom_review_role',
              'metric_reviewer',
            ])
            .describe(
              'Options:reviewee(被评估人),invited_reviewer(360°评估人),solid_line_leader(实线上级),dotted_line_leader(虚线上级),secondary_solid_line_leader(第二实线上级),direct_project_leader(合作项目中的直属上级),custom_review_role(自定义评估角色),metric_reviewer(指标评价人)',
            ),
        )
        .describe(
          '评估型环节的执行人角色，当传入的环节类型中有评估型环节时，该参数才生效，返回指定执行人角色的评估型环节数据，不传默认包含所有的执行人角色',
        )
        .optional(),
      stage_ids: z
        .array(z.string())
        .describe(
          '环节 ID，如果同时传了环节 ID 和环节类型，优先返回环节 ID 对应的绩效数据。stage_types 和 stage_ids 至少要传一个，不传默认不返回任何环节评估数据。可在事件、获得，用于接收事件后按环节查询评估数据场景',
        )
        .optional(),
      need_leader_review_data_source: z
        .boolean()
        .describe(
          '当要获取的绩效数据的环节类型包含终评环节时，可指定是否需要返回绩效终评数据的具体环节来源。不传则默认不返回。 可选值有：- true: 返回绩效终评数据的具体环节来源- false: 不返回绩效终评数据的具体环节来源',
        )
        .optional(),
      updated_later_than: z
        .string()
        .describe(
          '可筛选出在此时间之后，有内容提交的环节数据，毫秒级时间戳。不传默认返回所有时间提交的环节数据，包括未提交的环节数据',
        )
        .optional(),
      stage_progresses: z
        .array(z.number())
        .describe(
          '环节状态，不传默认包含所有状态。各类型的环节分别有以下环节状态： 查看绩效结果环节状态 可选值有： - `0`：已开通，绩效结果已开通，未发起复议也无需确认结果 - `1`：待确认，绩效结果已开通但被评估人还未确认结果，确认的截止时间还未到达 - `2`：已截止，绩效结果已开通但被评估人还未确认结果，确认的截止时间已到达 - `3`：已确认，绩效结果已开通，被评估人已确认结果 - `4`：已复议，绩效结果已开通，且被评估人已发起复议 绩效结果复议环节状态 可选值有： - `1`：待完成，任务未完成 - `2`：已截止，任务的截止时间已到达，且任务未完成 - `3`：已完成，任务已完成 除上述类型外的其他环节类型状态 可选值有： - `0`：未开始，任务的开始时间未到达 - `1`：待完成，任务的开始时间到达而截止时间未到达，且任务未完成 - `2`：已截止，任务的截止时间已到达，且任务未完成 - `3`: 已完成，任务已完成',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV2ReviewTemplateQuery = {
  project: 'performance',
  name: 'performance.v2.reviewTemplate.query',
  sdkName: 'performance.v2.reviewTemplate.query',
  path: '/open-apis/performance/v2/review_templates/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-绩效-后台配置-评估模板和评估题-获取评估模板配置-获取评估模板配置信息，包括模版名称、执行角色、填写项类型等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      review_template_ids: z
        .array(z.string())
        .describe('评估模板 ID 列表，获取指定评估模板的配置数据。如果不传则返回所有')
        .optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2RevieweeQuery = {
  project: 'performance',
  name: 'performance.v2.reviewee.query',
  sdkName: 'performance.v2.reviewee.query',
  path: '/open-apis/performance/v2/reviewees/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-后台配置-周期与项目-员工信息-获取被评估人信息-获取绩效周期中被圈定到项目中的被评估人信息，包括未启动的项目',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      semester_id: z
        .string()
        .describe(
          '周期 ID，可通过接口获取',
        ),
      user_ids: z
        .array(z.string())
        .describe('用户 ID，与入参 `user_id_type` 类型一致，查询指定的被评估人信息')
        .optional(),
      activity_ids: z
        .array(z.string())
        .describe(
          '项目 ID 列表，可通过接口获取，查询指定的项目下的被评估人信息',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const performanceV2UserGroupUserRelWrite = {
  project: 'performance',
  name: 'performance.v2.userGroupUserRel.write',
  sdkName: 'performance.v2.userGroupUserRel.write',
  path: '/open-apis/performance/v2/user_group_user_rels/write',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-后台配置-周期与项目-人员组-更新人员组成员-更新指定人员组成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      group_id: z.string().describe('人员组 ID').optional(),
      scope_visible_setting: z
        .number()
        .describe('人员组可见性配置 Options:0(not_limit 无限制),1(backend_admin_not_visible 后台管理员不可见)')
        .optional(),
      user_ids: z.array(z.string()).describe('人员 ID 列表，ID 类型与查询参数 user_id_type 取值一致').optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const performanceV2Tools = [
  performanceV2ActivityQuery,
  performanceV2AdditionalInformationImport,
  performanceV2AdditionalInformationQuery,
  performanceV2AdditionalInformationsBatchDelete,
  performanceV2IndicatorQuery,
  performanceV2MetricDetailImport,
  performanceV2MetricDetailQuery,
  performanceV2MetricFieldQuery,
  performanceV2MetricLibQuery,
  performanceV2MetricTagList,
  performanceV2MetricTemplateQuery,
  performanceV2QuestionQuery,
  performanceV2ReviewDataQuery,
  performanceV2ReviewTemplateQuery,
  performanceV2RevieweeQuery,
  performanceV2UserGroupUserRelWrite,
];
