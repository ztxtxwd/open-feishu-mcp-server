import { z } from 'zod';
export type adminV1ToolName =
  | 'admin.v1.adminDeptStat.list'
  | 'admin.v1.adminUserStat.list'
  | 'admin.v1.auditInfo.list'
  | 'admin.v1.badge.create'
  | 'admin.v1.badge.get'
  | 'admin.v1.badgeGrant.create'
  | 'admin.v1.badgeGrant.delete'
  | 'admin.v1.badgeGrant.get'
  | 'admin.v1.badgeGrant.list'
  | 'admin.v1.badgeGrant.update'
  | 'admin.v1.badge.list'
  | 'admin.v1.badge.update'
  | 'admin.v1.password.reset';
export const adminV1AdminDeptStatList = {
  project: 'admin',
  name: 'admin.v1.adminDeptStat.list',
  sdkName: 'admin.v1.adminDeptStat.list',
  path: '/open-apis/admin/v1/admin_dept_stats',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-管理后台-数据报表管理-获取部门维度的用户活跃和功能使用数据-该接口用于获取部门维度的用户活跃和功能使用数据，即IM（即时通讯）、日历、云文档、音视频会议、邮箱功能的使用数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe('部门ID类型 Options:department_id(部门的 ID),open_department_id(部门的 Open ID)'),
      start_date: z.string().describe('起始日期（包含），格式是YYYY-mm-dd'),
      end_date: z.string().describe('终止日期（包含），格式是YYYY-mm-dd，起止日期之间相差不能超过91天（包含91天）'),
      department_id: z.string().describe('部门的 ID，取决于department_id_type，仅支持根部门及其下前4级子部门'),
      contains_child_dept: z
        .boolean()
        .describe(
          '是否包含子部门，如果该值为false，则只查出本部门直属用户活跃和功能使用数据；如果该值为true，则查出该部门以及其子部门（子部门层级最多不超过根部门下的前4级）的用户活跃和功能使用数据',
        ),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      target_geo: z
        .string()
        .describe('需跨域访问的Geo数据，每个Geo仅包含本Geo数据，不传默认查本地数据，调用前需要先开通FG(cn、sg、jp、us)')
        .optional(),
      with_product_version: z
        .boolean()
        .describe('是否返回分产品版本数据（灰度功能，如需使用请联系 CMS 团队）')
        .optional(),
    }),
  },
};
export const adminV1AdminUserStatList = {
  project: 'admin',
  name: 'admin.v1.adminUserStat.list',
  sdkName: 'admin.v1.adminUserStat.list',
  path: '/open-apis/admin/v1/admin_user_stats',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-管理后台-数据报表管理-获取用户维度的用户活跃和功能使用数据-用于获取用户维度的用户活跃和功能使用数据，即IM（即时通讯）、日历、云文档、音视频会议、邮箱功能的使用数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe('部门ID类型 Options:department_id(部门的 ID),open_department_id(部门的 Open ID)')
        .optional(),
      start_date: z.string().describe('起始日期（包含），格式是YYYY-mm-dd'),
      end_date: z.string().describe('终止日期（包含），格式是YYYY-mm-dd。起止日期之间相差不能超过31天（包含31天）'),
      department_id: z.string().describe('部门的 ID，取决于department_id_type').optional(),
      user_id: z.string().describe('用户的open_id，user_id或者union_id，取决于user_id_type').optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      target_geo: z
        .string()
        .describe(
          '需跨域访问的Geo数据，每个Geo仅包含本Geo数据，不传默认查本地数据，调用前需要先开通FG（cn、us、sg、jp），每次只能查一个Geo数据',
        )
        .optional(),
    }),
  },
};
export const adminV1AuditInfoList = {
  project: 'admin',
  name: 'admin.v1.auditInfo.list',
  sdkName: 'admin.v1.auditInfo.list',
  path: '/open-apis/admin/v1/audit_infos',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-安全合规-行为审计日志-获取行为审计日志数据-用户行为日志搜索',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
      latest: z.number().describe('日志时间范围: 结束时间. 格式: 秒级时间戳. 默认值: 此刻').optional(),
      oldest: z.number().describe('日志时间范围: 起始时间. 格式: 秒级时间戳. 默认值: 30日前此刻').optional(),
      event_name: z.string().describe('事件名称').optional(),
      operator_type: z
        .enum(['user', 'bot'])
        .describe(
          '过滤操作者: 操作者类型. 与 operator_value 配合使用 Options:user(以user_id来识别用户),bot([已废弃] 以bot_id来识别用户)',
        )
        .optional(),
      operator_value: z.string().describe('过滤操作者: 操作者ID. 与 operator_type 配合使用').optional(),
      event_module: z.number().describe('过滤模块').optional(),
      page_token: z.string().describe('下一页分页的token').optional(),
      page_size: z.number().describe('分页参数').optional(),
      user_type: z
        .number()
        .describe(
          '过滤用户类型. 仅当 operator_type=user 时生效 Options:0(all 互联网上的任何人),1(normal_user 组织内成员),2(external_user 组织外成员)',
        )
        .optional(),
      object_type: z.number().describe('过滤操作对象: 操作对象类型. 与object_value配合使用').optional(),
      object_value: z.string().describe('过滤操作对象: 操作对象ID. 与object_type配合使用').optional(),
      ext_filter_object_by_ccm_token: z
        .string()
        .describe('增强过滤操作对象: 操作对象ID，支持云文档侧泛token过滤。会覆盖object_type和object_value查询条件')
        .optional(),
    }),
  },
};
export const adminV1BadgeCreate = {
  project: 'admin',
  name: 'admin.v1.badge.create',
  sdkName: 'admin.v1.badge.create',
  path: '/open-apis/admin/v1/badges',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-管理后台-企业勋章-勋章管理-创建勋章-使用该接口可以创建一枚完整的勋章信息，一个租户下最多可创建1000枚勋章',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('租户内唯一的勋章名称，最多30个字符'),
      explanation: z.string().describe('勋章的描述文案，最多100个字符').optional(),
      detail_image: z
        .string()
        .describe(
          '企业勋章的详情图Key。1.权限校验：非本租户上传的图片key，不能直接使用；2.时效校验：创建勋章，或者修改勋章图片key时，需使用1h内上传的图片key',
        ),
      show_image: z
        .string()
        .describe(
          '企业勋章的头像挂饰图Key。1.权限校验：非本租户上传的图片key，不能直接使用；2.时效校验：创建勋章，或者修改勋章图片key时，需使用1h内上传的图片key',
        ),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('中文文案').optional(),
          en_us: z.string().describe('英文文案').optional(),
          ja_jp: z.string().describe('日文文案').optional(),
        })
        .describe('勋章的多语言名称，同name字段限制，最多30个字符')
        .optional(),
      i18n_explanation: z
        .object({
          zh_cn: z.string().describe('中文文案').optional(),
          en_us: z.string().describe('英文文案').optional(),
          ja_jp: z.string().describe('日文文案').optional(),
        })
        .describe('勋章的多语言描述文案，同explanation字段限制，最多100个字符')
        .optional(),
    }),
  },
};
export const adminV1BadgeGet = {
  project: 'admin',
  name: 'admin.v1.badge.get',
  sdkName: 'admin.v1.badge.get',
  path: '/open-apis/admin/v1/badges/:badge_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-管理后台-企业勋章-勋章管理-获取勋章详情-可以通过该接口查询勋章的详情',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ badge_id: z.string().describe('勋章id') }),
  },
};
export const adminV1BadgeGrantCreate = {
  project: 'admin',
  name: 'admin.v1.badgeGrant.create',
  sdkName: 'admin.v1.badgeGrant.create',
  path: '/open-apis/admin/v1/badges/:badge_id/grants',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-管理后台-企业勋章-勋章授予名单-创建授予名单-通过该接口可以为特定勋章创建一份授予名单，一枚勋章下最多可创建1000份授予名单',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('勋章下唯一的授予事项，最多100个字符'),
      grant_type: z.number().describe('授予名单类型 Options:0(manual 手动选择有效期),1(join_time 匹配系统入职时间)'),
      time_zone: z
        .string()
        .describe('授予名单的生效时间对应的时区，用于检查RuleDetail的时间戳的取值是否规范，取值范围为TZ database name'),
      rule_detail: z
        .object({
          effective_time: z
            .string()
            .describe(
              '开始生效的时间戳。1.手动设置有效期类型勋章，配置有效期限需要配置该字段；2.时间戳必须是所在时区当天的零点时间戳，如时区为Asia/Shanghai时区时的1649606400',
            )
            .optional(),
          expiration_time: z
            .string()
            .describe(
              '结束生效的时间戳。1.手动设置有效期类型勋章，配置有效期限需要配置该字段；2.最大值：不得超过effective_time+100 年；3.非永久有效：时间戳必须是所在时区当天的23:59:59时间戳，如时区为Asia/Shanghai时区时的1649692799；4.永久有效：传值为0即可',
            )
            .optional(),
          anniversary: z.number().describe('入职周年日。根据入职时间发放类型勋章，需要配置该字段').optional(),
          effective_period: z
            .number()
            .describe(
              '有效期限。根据入职时间发放类型勋章，需要配置该字段。 Options:1(one_year 有效期为一年),2(permanent 永久有效)',
            )
            .optional(),
        })
        .describe('规则详情'),
      is_grant_all: z
        .boolean()
        .describe('是否授予给全员。1.为false时，需要关联1~500个用户群体。2.为true时，不可关联用户、用户组、部门'),
      user_ids: z
        .array(z.string())
        .describe('授予的用户ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
      department_ids: z
        .array(z.string())
        .describe('授予的部门ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
      group_ids: z
        .array(z.string())
        .describe('授予的用户组ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型。 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ badge_id: z.string().describe('勋章ID') }),
  },
};
export const adminV1BadgeGrantDelete = {
  project: 'admin',
  name: 'admin.v1.badgeGrant.delete',
  sdkName: 'admin.v1.badgeGrant.delete',
  path: '/open-apis/admin/v1/badges/:badge_id/grants/:grant_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-管理后台-企业勋章-勋章授予名单-删除授予名单-通过该接口可以删除特定授予名单的信息',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      badge_id: z.string().describe('企业勋章的唯一ID'),
      grant_id: z.string().describe('租户内授予名单的唯一标识，该值由系统随机生成'),
    }),
  },
};
export const adminV1BadgeGrantGet = {
  project: 'admin',
  name: 'admin.v1.badgeGrant.get',
  sdkName: 'admin.v1.badgeGrant.get',
  path: '/open-apis/admin/v1/badges/:badge_id/grants/:grant_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-管理后台-企业勋章-勋章授予名单-获取授予名单详情-通过该接口可以获取特定授予名单的信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型。 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      badge_id: z.string().describe('租户内勋章的唯一标识，该值由系统随机生成'),
      grant_id: z.string().describe('租户内授予名单的唯一标识，该值由系统随机生成'),
    }),
  },
};
export const adminV1BadgeGrantList = {
  project: 'admin',
  name: 'admin.v1.badgeGrant.list',
  sdkName: 'admin.v1.badgeGrant.list',
  path: '/open-apis/admin/v1/badges/:badge_id/grants',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-管理后台-企业勋章-勋章授予名单-获取授予名单列表-通过该接口可以获取特定勋章下的授予名单列表，授予名单的排列顺序按照创建时间倒序排列',
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
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型。 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      name: z.string().describe('授予名单名称，精确匹配').optional(),
    }),
    path: z.object({ badge_id: z.string().describe('企业勋章的唯一ID') }),
  },
};
export const adminV1BadgeGrantUpdate = {
  project: 'admin',
  name: 'admin.v1.badgeGrant.update',
  sdkName: 'admin.v1.badgeGrant.update',
  path: '/open-apis/admin/v1/badges/:badge_id/grants/:grant_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-管理后台-企业勋章-勋章授予名单-修改授予名单-通过该接口可以修改特定授予名单的相关信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('勋章下唯一的授予事项，最多100个字符'),
      grant_type: z.number().describe('授予名单类型 Options:0(manual 手动选择有效期),1(join_time 匹配系统入职时间)'),
      time_zone: z
        .string()
        .describe('授予名单的生效时间对应的时区，用于检查RuleDetail的时间戳的取值是否规范，取值范围为TZ database name'),
      rule_detail: z
        .object({
          effective_time: z
            .string()
            .describe(
              '开始生效的时间戳。1.手动设置有效期类型勋章，配置有效期限需要配置该字段；2.时间戳必须是所在时区当天的零点时间戳，如时区为Asia/Shanghai时区时的1649606400',
            )
            .optional(),
          expiration_time: z
            .string()
            .describe(
              '结束生效的时间戳。1.手动设置有效期类型勋章，配置有效期限需要配置该字段；2.最大值：不得超过effective_time+100 年；3.非永久有效：时间戳必须是所在时区当天的23:59:59时间戳，如时区为Asia/Shanghai时区时的1649692799；4.永久有效：传值为0即可',
            )
            .optional(),
          anniversary: z.number().describe('入职周年日。根据入职时间发放类型勋章，需要配置该字段').optional(),
          effective_period: z
            .number()
            .describe(
              '有效期限。根据入职时间发放类型勋章，需要配置该字段。 Options:1(one_year 有效期为一年),2(permanent 永久有效)',
            )
            .optional(),
        })
        .describe('规则详情'),
      is_grant_all: z
        .boolean()
        .describe('是否授予给全员。1.为false时，需要关联1~500个用户群体。2.为true时，不可关联用户、用户组、部门'),
      user_ids: z
        .array(z.string())
        .describe('授予的用户ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
      department_ids: z
        .array(z.string())
        .describe('授予的部门ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
      group_ids: z
        .array(z.string())
        .describe('授予的用户组ID列表，授予名单列表接口返回结果中不返回该字段，只在详情接口返回')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型。 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ badge_id: z.string().describe('勋章ID'), grant_id: z.string().describe('授予名单ID') }),
  },
};
export const adminV1BadgeList = {
  project: 'admin',
  name: 'admin.v1.badge.list',
  sdkName: 'admin.v1.badge.list',
  path: '/open-apis/admin/v1/badges',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-管理后台-企业勋章-勋章管理-获取勋章列表-可以通过该接口列出租户下所有的勋章，勋章的排列顺序是按照创建时间倒序排列',
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
      name: z.string().describe('租户内唯一的勋章名称，精确匹配').optional(),
    }),
  },
};
export const adminV1BadgeUpdate = {
  project: 'admin',
  name: 'admin.v1.badge.update',
  sdkName: 'admin.v1.badge.update',
  path: '/open-apis/admin/v1/badges/:badge_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-管理后台-企业勋章-勋章管理-修改勋章信息-通过该接口可以修改勋章的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('租户内唯一的勋章名称，最多30个字符'),
      explanation: z.string().describe('勋章的描述文案，最多100个字符').optional(),
      detail_image: z
        .string()
        .describe(
          '企业勋章的详情图Key。1.权限校验：非本租户上传的图片key，不能直接使用；2.时效校验：创建勋章，或者修改勋章图片key时，需使用1h内上传的图片key',
        ),
      show_image: z
        .string()
        .describe(
          '企业勋章的头像挂饰图Key。1.权限校验：非本租户上传的图片key，不能直接使用；2.时效校验：创建勋章，或者修改勋章图片key时，需使用1h内上传的图片key',
        ),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('中文文案').optional(),
          en_us: z.string().describe('英文文案').optional(),
          ja_jp: z.string().describe('日文文案').optional(),
        })
        .describe('勋章的多语言名称，同name字段限制，最多30个字符')
        .optional(),
      i18n_explanation: z
        .object({
          zh_cn: z.string().describe('中文文案').optional(),
          en_us: z.string().describe('英文文案').optional(),
          ja_jp: z.string().describe('日文文案').optional(),
        })
        .describe('勋章的多语言描述文案，同explanation字段限制，最多100个字符')
        .optional(),
    }),
    path: z.object({ badge_id: z.string().describe('勋章ID') }),
  },
};
export const adminV1PasswordReset = {
  project: 'admin',
  name: 'admin.v1.password.reset',
  sdkName: 'admin.v1.password.reset',
  path: '/open-apis/admin/v1/password/reset',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-管理后台-登录密码管理-重置用户的企业邮箱密码',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      password: z
        .object({ ent_email_password: z.string().describe('企业邮箱密码') })
        .describe('需要重置的密码参数，不少于8个字符，字母、数字和符号，至少三选二'),
      user_id: z.string().describe('待修改密码的用户ID，只针对邮箱登录凭证与企业邮箱(包括别名)相等的用户生效'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型') }),
  },
};
export const adminV1Tools = [
  adminV1AdminDeptStatList,
  adminV1AdminUserStatList,
  adminV1AuditInfoList,
  adminV1BadgeCreate,
  adminV1BadgeGet,
  adminV1BadgeGrantCreate,
  adminV1BadgeGrantDelete,
  adminV1BadgeGrantGet,
  adminV1BadgeGrantList,
  adminV1BadgeGrantUpdate,
  adminV1BadgeList,
  adminV1BadgeUpdate,
  adminV1PasswordReset,
];
