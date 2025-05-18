import { z } from 'zod';
export type acsV1ToolName =
  | 'acs.v1.accessRecord.list'
  | 'acs.v1.device.list'
  | 'acs.v1.ruleExternal.create'
  | 'acs.v1.ruleExternal.delete'
  | 'acs.v1.ruleExternal.deviceBind'
  | 'acs.v1.ruleExternal.get'
  | 'acs.v1.user.get'
  | 'acs.v1.user.list'
  | 'acs.v1.user.patch'
  | 'acs.v1.visitor.create'
  | 'acs.v1.visitor.delete';
export const acsV1AccessRecordList = {
  project: 'acs',
  name: 'acs.v1.accessRecord.list',
  sdkName: 'acs.v1.accessRecord.list',
  path: '/open-apis/acs/v1/access_records',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-智能门禁-门禁记录-获取门禁记录列表',
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
      from: z.number().describe('记录开始时间，单位秒'),
      to: z.number().describe('记录结束时间，单位秒，时间跨度不能超过30天'),
      device_id: z.string().describe('门禁设备 ID').optional(),
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const acsV1DeviceList = {
  project: 'acs',
  name: 'acs.v1.device.list',
  sdkName: 'acs.v1.device.list',
  path: '/open-apis/acs/v1/devices',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-智能门禁-门禁设备-获取门禁设备列表',
  accessTokens: ['tenant'],
  schema: {},
};
export const acsV1RuleExternalCreate = {
  project: 'acs',
  name: 'acs.v1.ruleExternal.create',
  sdkName: 'acs.v1.ruleExternal.create',
  path: '/open-apis/acs/v1/rule_external',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-智能门禁-权限组-创建或更新权限组-创建或更新权限组',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      rule: z
        .object({
          id: z.string().describe('权限组id').optional(),
          name: z.string().describe('权限组名称').optional(),
          devices: z
            .array(
              z.object({
                id: z.string().describe('设备id').optional(),
                name: z.string().describe('设备名称').optional(),
              }),
            )
            .describe('权限组包含的设备')
            .optional(),
          user_count: z.string().describe('权限组包含的员工个数').optional(),
          users: z
            .array(
              z.object({
                user_type: z
                  .number()
                  .describe('用户类型 Options:1(user 员工),2(department 部门),10(tenant 全体员工),11(guest 访客)'),
                user_id: z.string().describe('用户id').optional(),
                user_name: z.string().describe('用户名称').optional(),
                phone_num: z.string().describe('电话号码').optional(),
                department_id: z.string().describe('部门id').optional(),
              }),
            )
            .describe('权限组包含的员工列表')
            .optional(),
          visitor_count: z.string().describe('权限组包含的访客个数').optional(),
          visitors: z
            .array(
              z.object({
                user_type: z
                  .number()
                  .describe('用户类型 Options:1(user 员工),2(department 部门),10(tenant 全体员工),11(guest 访客)'),
                user_id: z.string().describe('用户id').optional(),
                user_name: z.string().describe('用户名称').optional(),
                phone_num: z.string().describe('电话号码').optional(),
                department_id: z.string().describe('部门id').optional(),
              }),
            )
            .describe('权限组包含的访客列表')
            .optional(),
          remind_face: z.boolean().describe('是否通知人员录入').optional(),
          opening_time: z
            .object({
              valid_day: z
                .object({
                  start_day: z.number().describe('权限开始时间'),
                  end_day: z.number().describe('权限结束时间'),
                })
                .describe('有效日期')
                .optional(),
              weekdays: z.array(z.number()).describe('有效星期').optional(),
              day_times: z
                .array(
                  z.object({ start_hhmm: z.number().describe('起始时间'), end_hhmm: z.number().describe('结束时间') }),
                )
                .describe('有效时间')
                .optional(),
            })
            .describe('开门时间段')
            .optional(),
          is_temp: z.boolean().describe('是否为临时权限组').optional(),
        })
        .describe('权限组信息'),
    }),
    params: z.object({
      rule_id: z.string().describe('权限组id-为空创建,不为空则更新').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1RuleExternalDelete = {
  project: 'acs',
  name: 'acs.v1.ruleExternal.delete',
  sdkName: 'acs.v1.ruleExternal.delete',
  path: '/open-apis/acs/v1/rule_external',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-智能门禁-权限组-删除权限组-删除权限组',
  accessTokens: ['user'],
  schema: {
    params: z.object({ rule_id: z.string().describe('权限组id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1RuleExternalDeviceBind = {
  project: 'acs',
  name: 'acs.v1.ruleExternal.deviceBind',
  sdkName: 'acs.v1.ruleExternal.deviceBind',
  path: '/open-apis/acs/v1/rule_external/device_bind',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-智能门禁-权限组-设备绑定权限组-设备绑定权限组',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      device_id: z.string().describe('设备id'),
      rule_ids: z.array(z.string()).describe('权限组id列表'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1RuleExternalGet = {
  project: 'acs',
  name: 'acs.v1.ruleExternal.get',
  sdkName: 'acs.v1.ruleExternal.get',
  path: '/open-apis/acs/v1/rule_external',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-智能门禁-权限组-获取权限组信息-获取权限组信息',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      device_id: z.string().describe('设备id').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1UserGet = {
  project: 'acs',
  name: 'acs.v1.user.get',
  sdkName: 'acs.v1.user.get',
  path: '/open-apis/acs/v1/users/:user_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-智能门禁-用户管理-获取单个用户信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional() }),
    path: z.object({ user_id: z.string().describe('用户 ID') }),
  },
};
export const acsV1UserList = {
  project: 'acs',
  name: 'acs.v1.user.list',
  sdkName: 'acs.v1.user.list',
  path: '/open-apis/acs/v1/users',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-智能门禁-用户管理-获取用户列表',
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
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const acsV1UserPatch = {
  project: 'acs',
  name: 'acs.v1.user.patch',
  sdkName: 'acs.v1.user.patch',
  path: '/open-apis/acs/v1/users/:user_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-智能门禁-用户管理-修改用户部分信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      feature: z
        .object({ card: z.number().describe('卡号').optional() })
        .describe('用户特征')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional() }),
    path: z.object({ user_id: z.string().describe('用户 ID') }),
  },
};
export const acsV1VisitorCreate = {
  project: 'acs',
  name: 'acs.v1.visitor.create',
  sdkName: 'acs.v1.visitor.create',
  path: '/open-apis/acs/v1/visitors',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-智能门禁-访客-添加访客-添加访客',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      user: z
        .object({
          user_type: z
            .number()
            .describe('用户类型 Options:1(user 员工),2(department 部门),10(tenant 全体员工),11(guest 访客)'),
          user_id: z.string().describe('用户id').optional(),
          user_name: z.string().describe('用户名称').optional(),
          phone_num: z.string().describe('电话号码').optional(),
          department_id: z.string().describe('部门id').optional(),
        })
        .describe('访客信息'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1VisitorDelete = {
  project: 'acs',
  name: 'acs.v1.visitor.delete',
  sdkName: 'acs.v1.visitor.delete',
  path: '/open-apis/acs/v1/visitors/:visitor_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-智能门禁-访客-删除访客-删除访客',
  accessTokens: ['user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ visitor_id: z.string().describe('访客id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const acsV1Tools = [
  acsV1AccessRecordList,
  acsV1DeviceList,
  acsV1RuleExternalCreate,
  acsV1RuleExternalDelete,
  acsV1RuleExternalDeviceBind,
  acsV1RuleExternalGet,
  acsV1UserGet,
  acsV1UserList,
  acsV1UserPatch,
  acsV1VisitorCreate,
  acsV1VisitorDelete,
];
