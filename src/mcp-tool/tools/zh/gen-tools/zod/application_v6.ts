import { z } from 'zod';
export type applicationV6ToolName =
  | 'application.v6.appBadge.set'
  | 'application.v6.appRecommendRule.list'
  | 'application.v6.applicationAppUsage.departmentOverview'
  | 'application.v6.applicationAppUsage.messagePushOverview'
  | 'application.v6.applicationAppUsage.overview'
  | 'application.v6.applicationAppVersion.contactsRangeSuggest'
  | 'application.v6.applicationAppVersion.get'
  | 'application.v6.applicationAppVersion.list'
  | 'application.v6.applicationAppVersion.patch'
  | 'application.v6.applicationCollaborators.get'
  | 'application.v6.applicationCollaborators.update'
  | 'application.v6.application.contactsRangeConfiguration'
  | 'application.v6.applicationContactsRange.patch'
  | 'application.v6.applicationFeedback.list'
  | 'application.v6.applicationFeedback.patch'
  | 'application.v6.application.get'
  | 'application.v6.application.list'
  | 'application.v6.applicationManagement.update'
  | 'application.v6.applicationOwner.update'
  | 'application.v6.application.patch'
  | 'application.v6.application.underauditlist'
  | 'application.v6.applicationVisibility.checkWhiteBlackList'
  | 'application.v6.applicationVisibility.patch'
  | 'application.v6.scope.apply'
  | 'application.v6.scope.list';
export const applicationV6AppBadgeSet = {
  project: 'application',
  name: 'application.v6.appBadge.set',
  sdkName: 'application.v6.appBadge.set',
  path: '/open-apis/application/v6/app_badge/set',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-应用信息-应用红点-更新应用红点-更新应用红点信息，用于工作台场景',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户ID'),
      version: z.string().describe('badge数据版本号'),
      extra: z.string().describe('badge extra 信息').optional(),
      pc: z
        .object({
          web_app: z.number().describe('h5能力的badge数量').optional(),
          gadget: z.number().describe('小程序能力的badge数量').optional(),
        })
        .describe('pc端badge数量')
        .optional(),
      mobile: z
        .object({
          web_app: z.number().describe('h5能力的badge数量').optional(),
          gadget: z.number().describe('小程序能力的badge数量').optional(),
        })
        .describe('移动端badge数量')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const applicationV6AppRecommendRuleList = {
  project: 'application',
  name: 'application.v6.appRecommendRule.list',
  sdkName: 'application.v6.appRecommendRule.list',
  path: '/open-apis/application/v6/app_recommend_rules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-工作台-我的常用-获取当前设置的推荐规则列表',
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
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const applicationV6ApplicationAppUsageDepartmentOverview = {
  project: 'application',
  name: 'application.v6.applicationAppUsage.departmentOverview',
  sdkName: 'application.v6.applicationAppUsage.departmentOverview',
  path: '/open-apis/application/v6/applications/:app_id/app_usage/department_overview',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-应用信息-应用使用情况-获取多部门应用使用概览-查看应用在某一天/某一周/某一个月的使用数据，可以根据部门做多层子部门的筛选',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      date: z
        .string()
        .describe(
          '查询日期，格式为yyyy-mm-dd，若cycle_type为1，date可以为任何自然日；若cycle_type为2，则输入的date必须为周一； 若cycle_type为3，则输入的date必须为每月1号',
        ),
      cycle_type: z
        .number()
        .describe(
          '活跃周期的统计类型 Options:1(Day 日活，指自然日，返回当前日期所在日的数据),2(Week 周活，指自然周，返回当前日期所在周的数据。若到查询时当周还没结束，则返回周一到当前日期的数值。例如在2021/7/15 查询2021/7/5 这一周的数据，则代表的是2021/7/5 ~ 2021/7/11。但若是在2021/7/8 查询2021/7/5 这一周的数据，则返回的是2021/7/5 ~ 2021/7/7 的数据),3(Month 月活，指自然月，返回当前日期所在月的数据。若不满一个月则返回当月1日到截止日期前的数据。例如在2021/8/15 查询 7月的数据，则代表2021/7/1~2021/7/31。 若在2021/8/15 查询8月的数据，则代表2021/8/1~2021/8/14的数据)',
        ),
      department_id: z
        .string()
        .describe(
          '查询的部门id，获取方法可参考- 若部门id为空，则返回当前租户的使用数据；若填写部门id，则返回当前部门的使用数据（包含子部门的用户） 以及多级子部门的使用数据。- 若路径参数中department_id_type为空或者为open_department_id，则此处应该填写部门的 open_department_id；若路径参数中department_id_type为department_id，则此处应该填写部门的 department_id。- 若不填写则返回整个租户的数据',
        )
        .optional(),
      recursion: z
        .number()
        .describe(
          '是否需要查询部门下多层子部门的数据。未设置或为0时，仅查询department_id对应的部门。设置为n时，查询department_id及其n级子部门的数据。仅在department_id参数传递时有效，最大值为4',
        )
        .optional(),
      page_size: z.number().describe('分页大小，取值范围 1~20').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '调用中使用的部门ID的类型 Options:department_id(DepartmentId 以自定义department_id来标识部门),open_department_id(OpenDepartmentId 以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ app_id: z.string().describe('目标应用 ID') }),
  },
};
export const applicationV6ApplicationAppUsageMessagePushOverview = {
  project: 'application',
  name: 'application.v6.applicationAppUsage.messagePushOverview',
  sdkName: 'application.v6.applicationAppUsage.messagePushOverview',
  path: '/open-apis/application/v6/applications/:app_id/app_usage/message_push_overview',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-应用信息-应用使用情况-获取消息推送概览-目标：查看应用在某一天/某一周/某一个月的机器人消息推送数据，可以根据部门做筛选',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      date: z
        .string()
        .describe(
          '查询日期，若cycle_type为week，则输入的date必须为周一； 若cycle_type为month，则输入的date必须为每月1号',
        ),
      cycle_type: z
        .number()
        .describe(
          '枚举值：day，week，month；week指自然周，返回当前日期所在周的数据；不满一周则从周一到当前日期算。month指自然月，返回当前日期所在月的数据。 Options:1(Day 日活，指自然日，返回当前日期所在日的数据),2(Week 周活，指自然周，返回当前日期所在周的数据。若到查询时当周还没结束，则返回周一到当前日期的数值。例如在2021/7/15 查询2021/7/5 这一周的数据，则代表的是2021/7/5 ~ 2021/7/11。但若是在2021/7/8 查询2021/7/5 这一周的数据，则返回的是2021/7/5 ~ 2021/7/7 的数据),3(Month 月活，指自然月，返回当前日期所在月的数据。若不满一个月则返回当月1日到截止日期前的数据。例如在2021/8/15 查询 7月的数据，则代表2021/7/1~2021/7/31。 若在2021/8/15 查询8月的数据，则代表2021/8/1~2021/8/14的数据)',
        ),
      department_id: z
        .string()
        .describe(
          '需要查询的部门id，获取方法可参考- 若部门id为空，则返回当前租户的使用数据；若填写部门id，则返回当前部门的使用数据（包含子部门的用户）； - 若路径参数中department_id_type为空或者为open_department_id，则此处应该填写部门的 open_department_id；若路径参数中department_id_type为department_id，则此处应该填写部门的 department_id。返回当前部门的使用数据； 若不填写，则返回当前租户的使用数据',
        )
        .optional(),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '调用中使用的部门ID的类型 Options:department_id(DepartmentId 以自定义department_id来标识部门),open_department_id(OpenDepartmentId 以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ app_id: z.string().describe('目标应用ID，支持自建应用') }),
  },
};
export const applicationV6ApplicationAppUsageOverview = {
  project: 'application',
  name: 'application.v6.applicationAppUsage.overview',
  sdkName: 'application.v6.applicationAppUsage.overview',
  path: '/open-apis/application/v6/applications/:app_id/app_usage/overview',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-应用信息-应用使用情况-获取应用使用概览-查看应用在某一天/某一周/某一个月的使用数据，可以查看租户整体对应用的使用情况，也可以分部门查看',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      date: z
        .string()
        .describe(
          '查询日期，格式为yyyy-mm-dd，若cycle_type为1，date可以为任何自然日；若cycle_type为2，则输入的date必须为周一； 若cycle_type为3，则输入的date必须为每月1号',
        ),
      cycle_type: z
        .number()
        .describe(
          '活跃周期的统计类型 Options:1(Day 日活，指自然日，返回当前日期所在日的数据),2(Week 周活，指自然周，返回当前日期所在周的数据。若到查询时当周还没结束，则返回周一到当前日期的数值。例如在2021/7/15 查询2021/7/5 这一周的数据，则代表的是2021/7/5 ~ 2021/7/11。但若是在2021/7/8 查询2021/7/5 这一周的数据，则返回的是2021/7/5 ~ 2021/7/7 的数据),3(Month 月活，指自然月，返回当前日期所在月的数据。若不满一个月则返回当月1日到截止日期前的数据。例如在2021/8/15 查询 7月的数据，则代表2021/7/1~2021/7/31。 若在2021/8/15 查询8月的数据，则代表2021/8/1~2021/8/14的数据)',
        ),
      department_id: z
        .string()
        .describe(
          '查询的部门id，获取方法可参考- 若部门id为空，则返回当前租户的使用数据；若填写部门id，则返回当前部门的使用数据（包含子部门的用户）； - 若路径参数中department_id_type为空或者为open_department_id，则此处应该填写部门的 open_department_id；若路径参数中department_id_type为department_id，则此处应该填写部门的 department_id',
        )
        .optional(),
      ability: z
        .enum(['app', 'mp', 'h5', 'bot'])
        .describe(
          '能力类型，按能力类型进行筛选，返回对应能力的活跃数据 Options:app(返回应用整体的数据，指标值包括：uv：活跃用户数，total_users：累计用户数，new_users：新增用户数，pv：在应用（小程序或网页）中访问的页面数，lifecycle：打开应用（小程序或网页）的次数),mp(返回小程序能力的数据，指标值包括：uv（小程序活跃用户数）、pv（用户在小程序中的访问页面数）、lifecycle（小程序的打开次数）),h5(返回网页能力的数据，指标值包括：uv（网页应用活跃用户数）、pv（用户在网页应用中的访问页面数）、lifecycle（网页应用的打开次数）),bot(返回机器人能力的数据，指标值包括：uv（机器人的活跃用户数）)',
        ),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '调用中使用的部门ID的类型 Options:department_id(DepartmentId 以自定义department_id来标识部门),open_department_id(OpenDepartmentId 以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ app_id: z.string().describe('目标应用 ID') }),
  },
};
export const applicationV6ApplicationAppVersionContactsRangeSuggest = {
  project: 'application',
  name: 'application.v6.applicationAppVersion.contactsRangeSuggest',
  sdkName: 'application.v6.applicationAppVersion.contactsRangeSuggest',
  path: '/open-apis/application/v6/applications/:app_id/app_versions/:version_id/contacts_range_suggest',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-应用信息-应用-获取应用版本中开发者申请的通讯录权限范围-该接口用于根据应用的 App ID 和版本 ID 获取企业自建应用某个版本的通讯录权限范围',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '返回值的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe(
          '应用的 AppID，可以在 > **凭证与基础信息**页查看。* 仅查询本应用信息时，可填应用自身App ID 或 `me`。* 当值为其他应用的App ID时，必须申请以下权限：<md-perm name="admin:app.info:readonly" desc="获取应用信息" support_app_types="custom" tags="">获取应用信息</md-perm>',
        ),
      version_id: z
        .string()
        .describe(
          '唯一标识应用版本的 ID，可以调用接口获取',
        ),
    }),
  },
};
export const applicationV6ApplicationAppVersionGet = {
  project: 'application',
  name: 'application.v6.applicationAppVersion.get',
  sdkName: 'application.v6.applicationAppVersion.get',
  path: '/open-apis/application/v6/applications/:app_id/app_versions/:version_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用-获取应用版本信息-根据应用 ID 和应用版本 ID 来获取同租户下的应用版本的信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      lang: z
        .enum(['zh_cn', 'en_us', 'ja_jp'])
        .describe('应用信息的语言版本 Options:zh_cn(中文),en_us(英文),ja_jp(日文)'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe(
          '应用的 app_id，需要查询其他应用版本信息时，必须申请权限，仅查询本应用版本信息时，可填入 "me" 或者应用自身 app_id',
        ),
      version_id: z.string().describe('唯一标识应用版本的 ID'),
    }),
  },
};
export const applicationV6ApplicationAppVersionList = {
  project: 'application',
  name: 'application.v6.applicationAppVersion.list',
  sdkName: 'application.v6.applicationAppVersion.list',
  path: '/open-apis/application/v6/applications/:app_id/app_versions',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用-获取应用版本列表-根据 app_id 获取对应应用版本列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      lang: z
        .enum(['zh_cn', 'en_us', 'ja_jp'])
        .describe('应用信息的语言版本 Options:zh_cn(中文),en_us(英文),ja_jp(日文)'),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      order: z.number().describe('0：按照时间倒序 1：按照时间正序').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe(
          '应用的 app_id，需要查询其他应用版本信息时，必须申请权限，仅查询本应用版本信息时，可填入 "me" 或者应用自身 app_id',
        ),
    }),
  },
};
export const applicationV6ApplicationAppVersionPatch = {
  project: 'application',
  name: 'application.v6.applicationAppVersion.patch',
  sdkName: 'application.v6.applicationAppVersion.patch',
  path: '/open-apis/application/v6/applications/:app_id/app_versions/:version_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-应用信息-应用管理-更新应用审核状态-通过接口来更新应用版本的审核结果：通过后应用可以直接上架；拒绝后则开发者可以看到拒绝理由，并在修改后再次申请发布',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      status: z
        .number()
        .describe(
          '版本状态 Options:0(unknown 未知状态),1(audited 审核通过),2(reject 审核拒绝),3(under_audit 审核中),4(unaudit 未提交审核)',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型'),
      operator_id: z.string().describe('操作者的 open_id'),
      reject_reason: z.string().describe('当修改版本状态为被驳回时，这一项必填').optional(),
    }),
    path: z.object({
      app_id: z.string().describe('应用 id'),
      version_id: z.string().describe('唯一标识应用版本的 ID'),
    }),
  },
};
export const applicationV6ApplicationCollaboratorsGet = {
  project: 'application',
  name: 'application.v6.applicationCollaborators.get',
  sdkName: 'application.v6.applicationCollaborators.get',
  path: '/open-apis/application/v6/applications/:app_id/collaborators',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-应用信息-应用-获取应用协作者列表-根据 app_id 获取应用（包括自建应用和商店应用）的协作者信息，包括应用的所有者、管理员、开发者、运营人员',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      app_id: z
        .string()
        .describe('应用 ID，获取方式参见 '),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const applicationV6ApplicationCollaboratorsUpdate = {
  project: 'application',
  name: 'application.v6.applicationCollaborators.update',
  sdkName: 'application.v6.applicationCollaborators.update',
  path: '/open-apis/application/v6/applications/:app_id/collaborators',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-应用信息-应用-更新应用协作者-某个应用（包括自建应用和商店应用）中添加/移除应用协作者，添加后协作者将会收到添加通知',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      adds: z
        .array(
          z.object({
            type: z
              .enum(['administrator', 'developer', 'operator'])
              .describe('人员类型 Options:administrator(管理员),developer(开发者),operator(运营)'),
            user_id: z.string().describe('用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
          }),
        )
        .describe('添加人员')
        .optional(),
      removes: z.array(z.string()).describe('移除人员').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      app_id: z
        .string()
        .describe('应用 ID，获取方式参见 '),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const applicationV6ApplicationContactsRangeConfiguration = {
  project: 'application',
  name: 'application.v6.application.contactsRangeConfiguration',
  sdkName: 'application.v6.application.contactsRangeConfiguration',
  path: '/open-apis/application/v6/applications/:app_id/contacts_range_configuration',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-应用信息-应用管理-获取应用通讯录权限范围配置-获取当前企业内某个自建应用线上实际生效的通讯录权限范围配置',
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
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '返回值的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe('应用的 app_id，可以在 > 凭证与基础信息页查看'),
    }),
  },
};
export const applicationV6ApplicationContactsRangePatch = {
  project: 'application',
  name: 'application.v6.applicationContactsRange.patch',
  sdkName: 'application.v6.applicationContactsRange.patch',
  path: '/open-apis/application/v6/applications/:app_id/contacts_range',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-应用信息-应用管理-更新应用通讯录权限范围配置-该接口用于更新当前企业内自建应用或已安装的商店应用的通讯录权限范围配置。更新后线上立即生效',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      contacts_range_type: z
        .enum(['equal_to_availability', 'some', 'all'])
        .describe(
          '更新范围方式 Options:equal_to_availability(与应用可用性始终保持一致),some(部分成员),all(全部成员范围)',
        ),
      add_visible_list: z
        .object({
          user_ids: z.array(z.string()).describe('成员id列表 id类型根据user_id_type参数指定').optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组列表').optional(),
        })
        .describe('通讯录权限范围新增列表仅contacts_range_type为some 时生效并进行增量更新')
        .optional(),
      del_visible_list: z
        .object({
          user_ids: z.array(z.string()).describe('成员id列表 id类型根据user_id_type参数指定').optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组列表').optional(),
        })
        .describe('从通讯录权限范围删除的列表仅contacts_range_type为some 时生效并进行增量更新')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '部门id类型 Options:open_department_id(以open_department_id标识部门),department_id(以department_id标识部门)',
        )
        .optional(),
    }),
    path: z.object({ app_id: z.string().describe('应用id') }),
  },
};
export const applicationV6ApplicationFeedbackList = {
  project: 'application',
  name: 'application.v6.applicationFeedback.list',
  sdkName: 'application.v6.applicationFeedback.list',
  path: '/open-apis/application/v6/applications/:app_id/feedbacks',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用反馈-获取应用反馈列表-查询应用的反馈数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      from_date: z.string().describe('查询的起始日期，格式为yyyy-mm-dd。不填则默认为当前日期减去180天').optional(),
      to_date: z
        .string()
        .describe('查询的结束日期，格式为yyyy-mm-dd。不填默认为当前日期。只能查询 180 天内的数据')
        .optional(),
      feedback_type: z
        .number()
        .describe('反馈类型，不填写则表示查询所有反馈类型。 Options:1(Fault 故障反馈),2(Advice 产品建议)')
        .optional(),
      status: z
        .number()
        .describe(
          '反馈处理状态，不填写则表示查询所有处理类型。 Options:0(Unmarked 反馈未处理),1(Marked 反馈已处理),2(Processing 反馈处理中),3(Closed 反馈已关闭)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('本次拉取反馈列表最大个数').optional(),
    }),
    path: z.object({ app_id: z.string().describe('目标应用 ID（本租户创建的所有应用）') }),
  },
};
export const applicationV6ApplicationFeedbackPatch = {
  project: 'application',
  name: 'application.v6.applicationFeedback.patch',
  sdkName: 'application.v6.applicationFeedback.patch',
  path: '/open-apis/application/v6/applications/:app_id/feedbacks/:feedback_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-应用信息-应用反馈-更新应用反馈-更新应用的反馈数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      status: z
        .number()
        .describe(
          '反馈处理状态 Options:0(Unmarked 反馈未处理),1(Marked 反馈已处理),2(Processing 反馈处理中),3(Closed 反馈已关闭)',
        ),
      operator_id: z.string().describe('反馈处理人员id，租户内用户的唯一标识， ID值与查询参数中的user_id_type 对应'),
    }),
    path: z.object({
      app_id: z.string().describe('目标应用 ID（本租户创建的所有应用）'),
      feedback_id: z.string().describe('应用反馈记录id'),
    }),
  },
};
export const applicationV6ApplicationGet = {
  project: 'application',
  name: 'application.v6.application.get',
  sdkName: 'application.v6.application.get',
  path: '/open-apis/application/v6/applications/:app_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用-获取应用信息-根据app_id获取应用的基础信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      lang: z
        .enum(['zh_cn', 'en_us', 'ja_jp'])
        .describe('指定获取应用在该语言下的信息 Options:zh_cn(中文),en_us(英文),ja_jp(日文)'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe(
          '应用的 app_id，需要查询其他应用信息时，必须申请权限，仅查询本应用信息时，可填入 "me" 或者应用自身 app_id',
        ),
    }),
  },
};
export const applicationV6ApplicationList = {
  project: 'application',
  name: 'application.v6.application.list',
  sdkName: 'application.v6.application.list',
  path: '/open-apis/application/v6/applications',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-应用信息-应用管理-获取企业安装的应用-该接口用于查询企业安装的应用列表，只能被企业自建应用调用',
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
      user_id_type: z.string().describe('用户ID类型').optional(),
      lang: z
        .string()
        .describe(
          '应用的图标、描述、帮助文档链接是按照应用的主语言返回；其他内容（如应用权限、应用分类）按照该参数设定返回对应的语言。可选值有： zh_cn：中文 en_us：英文 ja_jp：日文 如不填写，则按照应用的主语言返回',
        ),
      status: z
        .number()
        .describe(
          '不传入代表全部返回。传入则按照这种应用状态返回。应用状态可选值有：0：停用状态1：启用状态 2：未启用状态 Options:0(AvailabilityStopped 停用),1(AvailabilityActivated 启用),2(AvailabilityUnactivated 未启用)',
        )
        .optional(),
      payment_type: z
        .number()
        .describe(
          '不传入代表全部返回。传入则按照这种应用状态返回。 付费类型 可选值： 0：免费 1：付费 Options:0(Free 免费),1(Paid 付费)',
        )
        .optional(),
      owner_type: z
        .number()
        .describe(
          '不传入代表全部返回。传入则按照这种应用状态返回。所有者类型，可选值： 0：飞书科技 1：飞书合作伙伴 2：企业内成员 Options:0(FeishuTechnology 飞书科技),1(FeishuThirdParty 飞书合作伙伴),2(EnterpriseMember 企业内成员)',
        )
        .optional(),
    }),
  },
};
export const applicationV6ApplicationManagementUpdate = {
  project: 'application',
  name: 'application.v6.applicationManagement.update',
  sdkName: 'application.v6.applicationManagement.update',
  path: '/open-apis/application/v6/applications/:app_id/management',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-应用信息-应用管理-启停用应用-可停用或启用企业内已安装的自建应用与商店应用',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ enable: z.boolean().describe('启用/停用应用').optional() }),
    path: z.object({ app_id: z.string().describe('应用ID') }),
  },
};
export const applicationV6ApplicationOwnerUpdate = {
  project: 'application',
  name: 'application.v6.applicationOwner.update',
  sdkName: 'application.v6.applicationOwner.update',
  path: '/open-apis/application/v6/applications/:app_id/owner',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-应用信息-应用-转移应用所有者-将某个自建应用的所有者转移给另外一个人',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ owner_id: z.string().describe('新的拥有者用户ID，类型由查询参数中的user_id_type确定') }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      app_id: z
        .string()
        .describe('应用 ID，获取方式参见 '),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const applicationV6ApplicationPatch = {
  project: 'application',
  name: 'application.v6.application.patch',
  sdkName: 'application.v6.application.patch',
  path: '/open-apis/application/v6/applications/:app_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-应用信息-应用管理-更新应用分组信息-更新应用的分组信息（分组会影响应用在工作台中的分类情况，请谨慎更新）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      common_categories: z
        .array(z.string().describe('应用分类在一个国际化文案下的描述'))
        .describe('应用分类的国际化描述')
        .optional(),
    }),
    params: z.object({
      lang: z.enum(['zh_cn', 'en_us', 'ja_jp']).describe('指定返回的语言 Options:zh_cn(中文),en_us(英文),ja_jp(日文)'),
    }),
    path: z.object({ app_id: z.string().describe('应用的 id') }),
  },
};
export const applicationV6ApplicationUnderauditlist = {
  project: 'application',
  name: 'application.v6.application.underauditlist',
  sdkName: 'application.v6.application.underauditlist',
  path: '/open-apis/application/v6/applications/underauditlist',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用管理-查看待审核的应用列表-查看本企业下所有待审核的自建应用列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      lang: z.enum(['zh_cn', 'en_us', 'ja_jp']).describe('指定返回的语言 Options:zh_cn(中文),en_us(英文),ja_jp(日文)'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const applicationV6ApplicationVisibilityCheckWhiteBlackList = {
  project: 'application',
  name: 'application.v6.applicationVisibility.checkWhiteBlackList',
  sdkName: 'application.v6.applicationVisibility.checkWhiteBlackList',
  path: '/open-apis/application/v6/applications/:app_id/visibility/check_white_black_list',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-应用信息-应用管理-查询用户或部门是否在应用的可用或禁用名单-该接口用于查询用户、部门、用户组是否在应用的可用或禁用名单中',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z
        .array(z.string())
        .describe(
          '想要查询的用户id列表，按照user_id_type录入，最多录入100个。可以调用接口获取',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '想要查询的部门的 id 列表，最多录入100个。可以接口获取',
        )
        .optional(),
      group_ids: z
        .array(z.string())
        .describe(
          '想要查询的用户组id列表，最多录入100个。可以调用接口获取',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '部门ID类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      app_id: z
        .string()
        .describe(
          '应用的 AppID，可以在 > **凭证与基础信息**页查看。* 仅查询本应用信息时，可填应用自身AppID。* 当值为其他应用的App ID时，必须申请以下权限：<md-perm name="admin:app.info:readonly" desc="获取应用信息" support_app_types="custom" tags="">获取应用信息</md-perm>',
        ),
    }),
  },
};
export const applicationV6ApplicationVisibilityPatch = {
  project: 'application',
  name: 'application.v6.applicationVisibility.patch',
  sdkName: 'application.v6.applicationVisibility.patch',
  path: '/open-apis/application/v6/applications/:app_id/visibility',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-应用信息-应用管理-更新应用可用范围-调用该接口更新指定应用的可用范围，支持更新当前企业内自建应用的可用范围，或者已安装的商店应用的可用范围，包括可用人员与禁用人员。更新可用范围后对线上立即生效',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      add_visible_list: z
        .object({
          user_ids: z.array(z.string()).describe('成员id列表 id类型根据user_id_type参数指定').optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组id列表').optional(),
        })
        .describe(
          '添加可用人员列表，如果参数is_visible_to_all不设置且当前已经是全员可见，或者参数is_visible_to_all设置为true，则该参数不生效',
        )
        .optional(),
      del_visible_list: z
        .object({
          user_ids: z.array(z.string()).describe('成员id列表 id类型根据user_id_type参数指定').optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组id').optional(),
        })
        .describe(
          '删除可用人员列表，如果参数is_visible_to_all不设置且当前已经是全员可见，或者参数is_visible_to_all设置为true，则该参数不生效',
        )
        .optional(),
      add_invisible_list: z
        .object({
          user_ids: z
            .array(z.string())
            .describe(
              '成员id列表 id类型根据user_id_type参数指定相同的成员不能在30s内重复添加到禁用列表，否则会导致调用失败',
            )
            .optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组id列表').optional(),
        })
        .describe('添加禁用人员列表')
        .optional(),
      del_invisible_list: z
        .object({
          user_ids: z.array(z.string()).describe('成员id列表 id类型根据user_id_type参数指定').optional(),
          department_ids: z.array(z.string()).describe('部门id列表 id类型根据department_id_type参数指定').optional(),
          group_ids: z.array(z.string()).describe('用户组id列表').optional(),
        })
        .describe('删除禁用人员列表')
        .optional(),
      is_visible_to_all: z
        .boolean()
        .describe(
          '是否全员可见false：否true：是不设置：继续保持当前状态不改变如果参数不设置且当前已经是全员可见，或者设置为true，则add_visible_list/del_visible_list不生效',
        )
        .optional(),
    }),
    params: z.object({
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '部门id 类型 Options:open_department_id(以open_department_id标识部门),department_id(以department_id标识部门)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ app_id: z.string().describe('应用id') }),
  },
};
export const applicationV6ScopeApply = {
  project: 'application',
  name: 'application.v6.scope.apply',
  sdkName: 'application.v6.scope.apply',
  path: '/open-apis/application/v6/scopes/apply',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-应用信息-应用权限-向管理员申请授权-调用该接口以应用身份向租户管理员申请应用内需要审核的 API 权限',
  accessTokens: ['tenant'],
  schema: {},
};
export const applicationV6ScopeList = {
  project: 'application',
  name: 'application.v6.scope.list',
  sdkName: 'application.v6.scope.list',
  path: '/open-apis/application/v6/scopes',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-应用信息-应用权限-查询租户授权状态-调用该接口查询当前应用向租户申请授权的状态',
  accessTokens: ['tenant'],
  schema: {},
};
export const applicationV6Tools = [
  applicationV6AppBadgeSet,
  applicationV6AppRecommendRuleList,
  applicationV6ApplicationAppUsageDepartmentOverview,
  applicationV6ApplicationAppUsageMessagePushOverview,
  applicationV6ApplicationAppUsageOverview,
  applicationV6ApplicationAppVersionContactsRangeSuggest,
  applicationV6ApplicationAppVersionGet,
  applicationV6ApplicationAppVersionList,
  applicationV6ApplicationAppVersionPatch,
  applicationV6ApplicationCollaboratorsGet,
  applicationV6ApplicationCollaboratorsUpdate,
  applicationV6ApplicationContactsRangeConfiguration,
  applicationV6ApplicationContactsRangePatch,
  applicationV6ApplicationFeedbackList,
  applicationV6ApplicationFeedbackPatch,
  applicationV6ApplicationGet,
  applicationV6ApplicationList,
  applicationV6ApplicationManagementUpdate,
  applicationV6ApplicationOwnerUpdate,
  applicationV6ApplicationPatch,
  applicationV6ApplicationUnderauditlist,
  applicationV6ApplicationVisibilityCheckWhiteBlackList,
  applicationV6ApplicationVisibilityPatch,
  applicationV6ScopeApply,
  applicationV6ScopeList,
];
