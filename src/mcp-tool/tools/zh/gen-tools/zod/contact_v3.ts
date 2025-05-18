import { z } from 'zod';
export type contactV3ToolName =
  | 'contact.v3.customAttr.list'
  | 'contact.v3.department.batch'
  | 'contact.v3.department.children'
  | 'contact.v3.department.create'
  | 'contact.v3.department.delete'
  | 'contact.v3.department.get'
  | 'contact.v3.department.list'
  | 'contact.v3.department.parent'
  | 'contact.v3.department.patch'
  | 'contact.v3.department.search'
  | 'contact.v3.department.unbindDepartmentChat'
  | 'contact.v3.department.update'
  | 'contact.v3.department.updateDepartmentId'
  | 'contact.v3.employeeTypeEnum.create'
  | 'contact.v3.employeeTypeEnum.delete'
  | 'contact.v3.employeeTypeEnum.list'
  | 'contact.v3.employeeTypeEnum.update'
  | 'contact.v3.functionalRole.create'
  | 'contact.v3.functionalRole.delete'
  | 'contact.v3.functionalRoleMember.batchCreate'
  | 'contact.v3.functionalRoleMember.batchDelete'
  | 'contact.v3.functionalRoleMember.get'
  | 'contact.v3.functionalRoleMember.list'
  | 'contact.v3.functionalRoleMember.scopes'
  | 'contact.v3.functionalRole.update'
  | 'contact.v3.group.create'
  | 'contact.v3.group.delete'
  | 'contact.v3.group.get'
  | 'contact.v3.group.memberBelong'
  | 'contact.v3.groupMember.add'
  | 'contact.v3.groupMember.batchAdd'
  | 'contact.v3.groupMember.batchRemove'
  | 'contact.v3.groupMember.remove'
  | 'contact.v3.groupMember.simplelist'
  | 'contact.v3.group.patch'
  | 'contact.v3.group.simplelist'
  | 'contact.v3.jobFamily.create'
  | 'contact.v3.jobFamily.delete'
  | 'contact.v3.jobFamily.get'
  | 'contact.v3.jobFamily.list'
  | 'contact.v3.jobFamily.update'
  | 'contact.v3.jobLevel.create'
  | 'contact.v3.jobLevel.delete'
  | 'contact.v3.jobLevel.get'
  | 'contact.v3.jobLevel.list'
  | 'contact.v3.jobLevel.update'
  | 'contact.v3.jobTitle.get'
  | 'contact.v3.jobTitle.list'
  | 'contact.v3.scope.list'
  | 'contact.v3.unit.bindDepartment'
  | 'contact.v3.unit.create'
  | 'contact.v3.unit.delete'
  | 'contact.v3.unit.get'
  | 'contact.v3.unit.list'
  | 'contact.v3.unit.listDepartment'
  | 'contact.v3.unit.patch'
  | 'contact.v3.unit.unbindDepartment'
  | 'contact.v3.user.batch'
  | 'contact.v3.user.batchGetId'
  | 'contact.v3.user.create'
  | 'contact.v3.user.delete'
  | 'contact.v3.user.findByDepartment'
  | 'contact.v3.user.get'
  | 'contact.v3.user.list'
  | 'contact.v3.user.patch'
  | 'contact.v3.user.resurrect'
  | 'contact.v3.user.update'
  | 'contact.v3.user.updateUserId'
  | 'contact.v3.workCity.get'
  | 'contact.v3.workCity.list';
export const contactV3CustomAttrList = {
  project: 'contact',
  name: 'contact.v3.customAttr.list',
  sdkName: 'contact.v3.customAttr.list',
  path: '/open-apis/contact/v3/custom_attrs',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-自定义用户字段-获取企业自定义用户字段-调用该接口查询当前企业内自定义用户字段的配置信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const contactV3DepartmentBatch = {
  project: 'contact',
  name: 'contact.v3.department.batch',
  sdkName: 'contact.v3.department.batch',
  path: '/open-apis/contact/v3/departments/batch',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-部门-批量获取部门信息-调用该接口获取一个或多个部门的信息，包括部门名称、ID、父部门、负责人、状态以及成员个数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      department_ids: z
        .array(z.string())
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询。**注意：**- 单次最大请求的 ID 数量为 50。- 如需一次查询多个部门，可将同一参数名多次传递，并且每次传递不同的部门 ID 进行查询。GET 请求示例：`https://{url}?department_ids={department_id1}&department_ids={department_id2}`。其中： - `department_ids` 是参数名，可以多次传递。 - `department_id1`和`department_id2`是不同的参数值',
        ),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentChildren = {
  project: 'contact',
  name: 'contact.v3.department.children',
  sdkName: 'contact.v3.department.children',
  path: '/open-apis/contact/v3/departments/:department_id/children',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-部门-获取子部门列表-调用该接口查询指定部门下的子部门列表，列表内包含部门的名称、ID、父部门、负责人以及状态等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      fetch_child: z
        .boolean()
        .describe(
          '是否递归获取子部门。取值为 true 时，接口会递归查询当前部门下所有层级的子部门信息。**可选值有：**- true：是- false（默认值）：否',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID。**说明：**- ID 类型需要与查询参数 department_id_type 的取值保持一致。- 当你在创建部门时，可从返回结果中获取到部门 ID 信息，你也可以调用接口，获取所需的部门 ID。- 根部门的部门 ID 为 0',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentCreate = {
  project: 'contact',
  name: 'contact.v3.department.create',
  sdkName: 'contact.v3.department.create',
  path: '/open-apis/contact/v3/departments',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-部门-创建部门-调用该接口在通讯录内创建一个部门',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('部门名称。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称重复'),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('部门的中文名').optional(),
          ja_jp: z.string().describe('部门的日文名').optional(),
          en_us: z.string().describe('部门的英文名').optional(),
        })
        .describe(
          '部门名称的国际化配置。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称的国际化配置重复。**默认值**：空',
        )
        .optional(),
      parent_department_id: z
        .string()
        .describe(
          '父部门的 ID，ID 类型与查询参数的 department_id_type 取值一致。部门 ID 获取方式：- 如果当前是在根部门下创建部门，则该参数值为 `0`。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        ),
      department_id: z
        .string()
        .describe(
          '自定义部门 ID。**注意**：- 不能以 `od-` 开头。- 不能设置为 `0`、`1`。**默认值**：空，表示由系统自动生成 ID',
        )
        .optional(),
      leader_user_id: z
        .string()
        .describe(
          '部门主管的用户 ID。ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见。**默认值**：空',
        )
        .optional(),
      order: z
        .string()
        .describe(
          '部门的排序，即部门在其同级部门的展示顺序。取值格式为 String 类型的非负整数，数值越小，排序越靠前。**注意**：order 值唯一，即传入的值不能与存量部门的 order 值重复。因此创建部门时，建议你规划好同级部门的排序，按顺序设置不同的 order 值。**默认值**：空，默认情况下新建的部门排在存量部门之后',
        )
        .optional(),
      unit_ids: z
        .array(z.string().describe('部门单位自定义ID'))
        .describe(
          '部门绑定的单位自定义 ID 列表，当前只支持绑定一个单位。- 了解单位信息参见。- 调用接口，可获取单位 ID。**默认值**：空',
        )
        .optional(),
      create_group_chat: z
        .boolean()
        .describe(
          '是否创建部门群。 **可选值有：**- true：创建- false（默认值）：不创建**说明**：创建部门群时，群名默认为部门名，群主默认为部门主负责人',
        )
        .optional(),
      leaders: z
        .array(
          z.object({
            leaderType: z.number().describe('负责人类型。 Options:1(main 主负责人),2(deputy 副负责人)'),
            leaderID: z
              .string()
              .describe(
                '负责人的用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见',
              ),
          }),
        )
        .describe(
          '部门负责人信息。**注意**：- 配置该参数时，必须指定一名主负责人。- 设置多名负责人时，仅支持将某一负责人设置为主负责人。- 如果同时设置了部门主管（leader_user_id），则此处设置的部门主负责人必须与部门主管为同一个人。**默认值**：空',
        )
        .optional(),
      group_chat_employee_types: z
        .array(z.number().describe('雇员类型'))
        .describe(
          '部门群的人员类型限制。人员类型的取值范围如下。该参数支持设置多个类型值，若有多个，用英文 `,` 分隔：- 1：正式员工- 2：实习生- 3：外包- 4：劳务- 5：顾问该参数支持传入自定义人员类型对应的编号。你可以调用接口获取相应编号（enum_value）。**默认值**：空',
        )
        .optional(),
      department_hrbps: z
        .array(z.string().describe('HRBP的ID'))
        .describe(
          '部门 HRBP 的用户 ID 列表。 ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见。**默认值**：空',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。**默认值**：open_department_id Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      client_token: z
        .string()
        .describe('用于幂等判断是否为同一请求，避免重复请求。字符串类型，需要你自行生成参数值。**默认值**：空')
        .optional(),
    }),
  },
};
export const contactV3DepartmentDelete = {
  project: 'contact',
  name: 'contact.v3.department.delete',
  sdkName: 'contact.v3.department.delete',
  path: '/open-apis/contact/v3/departments/:department_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-部门-删除部门-调用该接口从通讯录中删除指定的部门',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        )
        .optional(),
    }),
  },
};
export const contactV3DepartmentGet = {
  project: 'contact',
  name: 'contact.v3.department.get',
  sdkName: 'contact.v3.department.get',
  path: '/open-apis/contact/v3/departments/:department_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-部门-获取单个部门信息-调用该接口获取单个部门信息，包括部门名称、ID、父部门、负责人、状态以及成员个数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentList = {
  project: 'contact',
  name: 'contact.v3.department.list',
  sdkName: 'contact.v3.department.list',
  path: '/open-apis/contact/v3/departments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-通讯录-部门管理-获取部门信息列表-该接口用于获取当前部门子部门列表。',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      parent_department_id: z
        .string()
        .describe('父部门的ID，填上获取部门下所有子部门，此处填写的 ID 必须是 department_id_type 指定的 ID')
        .optional(),
      fetch_child: z.boolean().describe('是否递归获取子部门').optional(),
      page_token: z.string().optional(),
      page_size: z.number().optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentParent = {
  project: 'contact',
  name: 'contact.v3.department.parent',
  sdkName: 'contact.v3.department.parent',
  path: '/open-apis/contact/v3/departments/parent',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-部门-获取父部门信息-调用该接口递归获取指定部门的父部门信息，包括部门名称、ID、负责人以及状态等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。**默认值**：open_department_id Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '部门 ID。ID 类型需要与查询参数 department_id_type 的取值保持一致。当你在创建部门时，可从返回结果中获取到部门 ID 信息，你也可以调用接口，获取所需的部门 ID',
        ),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentPatch = {
  project: 'contact',
  name: 'contact.v3.department.patch',
  sdkName: 'contact.v3.department.patch',
  path: '/open-apis/contact/v3/departments/:department_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-通讯录-部门-修改部门部分信息-调用该接口更新指定部门的部分信息，包括名称、父部门、排序以及负责人等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe('部门名称。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称重复。**默认值**：空，表示不修改')
        .optional(),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('部门的中文名').optional(),
          ja_jp: z.string().describe('部门的日文名').optional(),
          en_us: z.string().describe('部门的英文名').optional(),
        })
        .describe(
          '部门名称的国际化配置。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称的国际化配置重复。**默认值**：空，表示不修改',
        )
        .optional(),
      parent_department_id: z
        .string()
        .describe(
          '父部门的 ID。部门 ID 获取方式：- 如果需要将部门的父部门设置为根部门，则该参数取值 `0`。- 你可以调用接口获取所需的部门 ID。**默认值**：空，表示不修改',
        )
        .optional(),
      leader_user_id: z
        .string()
        .describe(
          '部门主管的用户 ID。ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见。**注意**：部门主管（leader_user_id）和部门主负责人（leaderType 取值为 1 所对应的 leaderID）取值始终一致。因此：- 如果同时设置了部门主负责人（leaderType 取值为 1 所对应的 leaderID），则此处设置的部门主管必须与部门主负责人为同一个人。- 仅修改部门主管，会同步修改部门主负责人（leaderType 取值为 1 所对应的 leaderID）。**默认值**：空，表示不修改',
        )
        .optional(),
      order: z
        .string()
        .describe(
          '部门的排序，即部门在其同级部门的展示顺序。取值格式为 String 类型的非负整数，数值越小，排序越靠前。**注意**：order 值唯一，即传入的值不能与存量部门的 order 值重复。**默认值**：空，表示不修改',
        )
        .optional(),
      unit_ids: z
        .array(z.string().describe('部门单位自定义ID'))
        .describe(
          '部门绑定的单位自定义 ID 列表，当前只支持绑定一个单位。- 了解单位信息参见。- 调用接口，可获取单位 ID。**默认值**：空，表示不修改',
        )
        .optional(),
      create_group_chat: z
        .boolean()
        .describe(
          '是否创建部门群。 **可选值有：**- true：创建。- false：不创建。如果之前已创建了部门群，则即便设置为 false 群也会继续存在。**说明**：创建部门群时，群名默认为部门名，群主默认为部门主负责人。**默认值**：空，表示不修改',
        )
        .optional(),
      leaders: z
        .array(
          z.object({
            leaderType: z.number().describe('负责人类型。 Options:1(main 主负责人),2(deputy 副负责人)'),
            leaderID: z
              .string()
              .describe(
                '负责人的用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见',
              ),
          }),
        )
        .describe(
          '部门负责人信息。**注意**：- leaders 如果传空数组，则会把原有值清空。- 配置该参数时，必须指定一名主负责人。- 设置多名负责人时，仅支持将某一负责人设置为主负责人。- 部门主管（leader_user_id）和部门主负责人（leaderType 取值为 1 所对应的 leaderID）取值始终一致。因此： - 如果同时设置了部门主管（leader_user_id），则此处设置的部门主负责人必须与部门主管为同一个人。 - 仅修改部门主负责人，会同步修改部门主管（leader_user_id）',
        )
        .optional(),
      group_chat_employee_types: z
        .array(z.number().describe('雇员类型'))
        .describe(
          '部门群的人员类型限制。人员类型的取值范围如下。该参数支持设置多个类型值，若有多个，用英文 `,` 分隔：- 1：正式员工- 2：实习生- 3：外包- 4：劳务- 5：顾问该参数支持传入自定义人员类型对应的编号。你可以调用接口获取相应编号（enum_value）。**默认值**：空',
        )
        .optional(),
      department_hrbps: z
        .array(z.string().describe('HRBP的ID'))
        .describe(
          '部门 HRBP 的用户 ID 列表。 ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见。**注意**：department_hrbps 如果传空数组，则会把原有值清空',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        )
        .optional(),
    }),
  },
};
export const contactV3DepartmentSearch = {
  project: 'contact',
  name: 'contact.v3.department.search',
  sdkName: 'contact.v3.department.search',
  path: '/open-apis/contact/v3/departments/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-部门-搜索部门-调用该接口以用户身份通过部门名称关键词查询可见部门的信息，包括部门的 ID、父部门、负责人以及状态等',
  accessTokens: ['user'],
  schema: {
    data: z.object({ query: z.string().describe('搜索关键词，匹配字段为部门名称（不支持匹配部门国际化名称）') }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。**默认值**：open_department_id Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3DepartmentUnbindDepartmentChat = {
  project: 'contact',
  name: 'contact.v3.department.unbindDepartmentChat',
  sdkName: 'contact.v3.department.unbindDepartmentChat',
  path: '/open-apis/contact/v3/departments/unbind_department_chat',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-部门-部门群转为普通群-调用该接口将指定部门的部门群转为普通群',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        ),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。**默认值**：open_department_id Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
  },
};
export const contactV3DepartmentUpdate = {
  project: 'contact',
  name: 'contact.v3.department.update',
  sdkName: 'contact.v3.department.update',
  path: '/open-apis/contact/v3/departments/:department_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-通讯录-部门-更新部门所有信息-调用该接口更新指定部门的信息，包括名称、父部门以及负责人等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('部门名称。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称重复'),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('部门的中文名').optional(),
          ja_jp: z.string().describe('部门的日文名').optional(),
          en_us: z.string().describe('部门的英文名').optional(),
        })
        .describe('部门名称的国际化配置。**注意**：- 不可包含斜杠（`/`）。- 不能与存量部门名称的国际化配置重复')
        .optional(),
      parent_department_id: z
        .string()
        .describe(
          '父部门的 ID。部门 ID 获取方式：- 如果需要将部门的父部门设置为根部门，则该参数取值 `0`。- 你可以调用接口获取所需的部门 ID',
        ),
      leader_user_id: z
        .string()
        .describe(
          '部门主管的用户 ID。ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见。**注意**：部门主管（leader_user_id）和部门主负责人（leaderType 取值为 1 所对应的 leaderID）取值始终一致。因此：- 如果同时设置了部门主负责人（leaderType 取值为 1 所对应的 leaderID），则此处设置的部门主管必须与部门主负责人为同一个人。- 仅修改部门主管，会同步修改部门主负责人（leaderType 取值为 1 所对应的 leaderID）',
        )
        .optional(),
      order: z
        .string()
        .describe(
          '部门的排序，即部门在其同级部门的展示顺序。取值格式为 String 类型的非负整数，数值越小，排序越靠前。**注意**：- order 值唯一，即传入的值不能与存量部门的 order 值重复。- 不传值表示不修改部门原有的 order 值',
        )
        .optional(),
      unit_ids: z
        .array(z.string().describe('部门单位自定义ID'))
        .describe(
          '部门绑定的单位自定义 ID 列表，当前只支持绑定一个单位。- 了解单位信息参见。- 调用接口，可获取单位 ID',
        )
        .optional(),
      create_group_chat: z
        .boolean()
        .describe(
          '是否创建部门群。 **可选值有：**- true：创建。- false：不创建。**说明**：- 如果部门之前没有部门群，则取值为 true 会创建部门群，创建时，群名默认为部门名，群主默认为部门主负责人。- 如果部门之前已创建了部门群，则该参数无论是否传值均不会影响原有部门群',
        )
        .optional(),
      leaders: z
        .array(
          z.object({
            leaderType: z.number().describe('负责人类型。 Options:1(main 主负责人。),2(deputy 副负责人。)'),
            leaderID: z
              .string()
              .describe(
                '负责人的用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致。用户 ID 获取方式可参见',
              ),
          }),
        )
        .describe(
          '部门负责人信息。**注意**：- 配置该参数时，必须指定一名主负责人。- 设置多名负责人时，仅支持将某一负责人设置为主负责人。- 部门主管（leader_user_id）和部门主负责人（leaderType 取值为 1 所对应的 leaderID）取值始终一致。因此： - 如果同时设置了部门主管（leader_user_id），则此处设置的部门主负责人必须与部门主管为同一个人。 - 仅修改部门主负责人，会同步修改部门主管（leader_user_id）',
        )
        .optional(),
      group_chat_employee_types: z
        .array(z.number().describe('雇员类型'))
        .describe(
          '部门群的人员类型限制。人员类型的取值范围如下。该参数支持设置多个类型值，若有多个，用英文 `,` 分隔：- 1：正式员工- 2：实习生- 3：外包- 4：劳务- 5：顾问该参数支持传入自定义人员类型对应的编号。你可以调用接口获取相应编号（enum_value）。**说明**：如果部门之前已创建了部门群，则该参数不传值时，默认不会修改原有的部门群人员类型限制',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型需要与查询参数 department_id_type 的取值保持一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        )
        .optional(),
    }),
  },
};
export const contactV3DepartmentUpdateDepartmentId = {
  project: 'contact',
  name: 'contact.v3.department.updateDepartmentId',
  sdkName: 'contact.v3.department.updateDepartmentId',
  path: '/open-apis/contact/v3/departments/:department_id/update_department_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-通讯录-部门-更新部门 ID-调用该接口可以更新部门的自定义 ID，即 department_id',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      new_department_id: z
        .string()
        .describe(
          '新的自定义部门 ID，即部门的 department_id。**注意**：- 不能以 `od-` 开头。- 不能设置为 `0`。- 不能与其他未删除部门的 department_id 重复',
        ),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。**默认值**：open_department_id Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '需要更新自定义 ID 的部门 ID，该 ID 类型需要与查询参数 department_id_type 的取值一致。ID 获取方式说明：- 调用接口后，可从返回结果中获取到部门 ID 信息。- 部门 API 提供了多种获取其他部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        )
        .optional(),
    }),
  },
};
export const contactV3EmployeeTypeEnumCreate = {
  project: 'contact',
  name: 'contact.v3.employeeTypeEnum.create',
  sdkName: 'contact.v3.employeeTypeEnum.create',
  path: '/open-apis/contact/v3/employee_type_enums',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-人员类型-新增人员类型-调用该接口新增一个自定义的人员类型。人员类型是用户属性之一，用于灵活标记用户的身份类型',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      content: z.string().describe('人员类型的选项内容'),
      enum_type: z
        .number()
        .describe(
          '人员类型的选项类型。新增人员类型时固定取值为 `2` 即可。 Options:1(Defualt 内置类型，只读。新增人员类型时不支持选择该类型。),2(Custom 自定义。)',
        ),
      enum_status: z
        .number()
        .describe(
          '人员类型的选项激活状态。只有已激活的选项可以用于配置用户属性。 Options:1(Active 激活),2(Inactive 未激活)',
        ),
      i18n_content: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。例如：- zh_cn：中文- en_us：英文- ja_jp：日文').optional(),
            value: z
              .string()
              .describe('语言版本对应的内容。**数据校验规则：**长度范围：`1` 字符 ～ `100` 字符')
              .optional(),
          }),
        )
        .describe(
          '选项内容的国际化配置。**说明**：在飞书客户端查看用户人员类型时，系统会根据客户端语言环境，自动展示相匹配的选项语言。如果相应语言不在选项国际化配置当中，则会展示默认选项内容（即 content 字段）',
        )
        .optional(),
    }),
  },
};
export const contactV3EmployeeTypeEnumDelete = {
  project: 'contact',
  name: 'contact.v3.employeeTypeEnum.delete',
  sdkName: 'contact.v3.employeeTypeEnum.delete',
  path: '/open-apis/contact/v3/employee_type_enums/:enum_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-人员类型-删除人员类型-调用该接口删除指定的自定义人员类型',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      enum_id: z
        .string()
        .describe(
          '自定义人员类型的选项 ID。你可以在新建人员类型时从返回值中获取，你也可以调用接口，获取选项的 ID',
        )
        .optional(),
    }),
  },
};
export const contactV3EmployeeTypeEnumList = {
  project: 'contact',
  name: 'contact.v3.employeeTypeEnum.list',
  sdkName: 'contact.v3.employeeTypeEnum.list',
  path: '/open-apis/contact/v3/employee_type_enums',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-人员类型-查询人员类型-调用该接口查询当前租户下所有的人员类型信息，包括选项 ID、类型、编号以及内容等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求返回的条目数').optional(),
    }),
  },
};
export const contactV3EmployeeTypeEnumUpdate = {
  project: 'contact',
  name: 'contact.v3.employeeTypeEnum.update',
  sdkName: 'contact.v3.employeeTypeEnum.update',
  path: '/open-apis/contact/v3/employee_type_enums/:enum_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-通讯录-人员类型-更新人员类型-调用该接口更新指定的自定义人员类型信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      content: z.string().describe('选项内容'),
      enum_type: z
        .number()
        .describe(
          '选项类型。更新人员类型时固定取值为 `2` 即可。 Options:1(Defualt 内置类型。该类型仅用于查询结果当中，更新人员类型时不支持选择该类型。),2(Custom 自定义。)',
        ),
      enum_status: z
        .number()
        .describe('选项的激活状态。只有已激活的选项可以用于配置用户属性。 Options:1(Active 激活),2(Inactive 未激活)'),
      i18n_content: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。例如：- zh_cn：中文- en_us：英文- ja_jp：日文').optional(),
            value: z
              .string()
              .describe('语言版本对应的内容。**数据校验规则：**长度范围：`1` 字符 ～ `100` 字符')
              .optional(),
          }),
        )
        .describe(
          '选项内容的国际化配置。**说明**：- 在飞书客户端查看用户人员类型时，系统会根据客户端语言环境，自动展示相匹配的选项语言。如果相应语言不在选项国际化配置当中，则会展示默认选项内容（即 content 字段）。- 不传值表示不更新原有配置',
        )
        .optional(),
    }),
    path: z.object({
      enum_id: z
        .string()
        .describe(
          '自定义人员类型的选项 ID。你可以在新建人员类型时从返回值中获取，你也可以调用接口，获取选项的 ID',
        )
        .optional(),
    }),
  },
};
export const contactV3FunctionalRoleCreate = {
  project: 'contact',
  name: 'contact.v3.functionalRole.create',
  sdkName: 'contact.v3.functionalRole.create',
  path: '/open-apis/contact/v3/functional_roles',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-角色-创建角色-调用该接口创建一个角色',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ role_name: z.string().describe('角色名称。在同一租户下角色名称唯一，不能重复创建') }),
  },
};
export const contactV3FunctionalRoleDelete = {
  project: 'contact',
  name: 'contact.v3.functionalRole.delete',
  sdkName: 'contact.v3.functionalRole.delete',
  path: '/open-apis/contact/v3/functional_roles/:role_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-角色-删除角色-调用该接口删除指定角色',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在创建角色时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3FunctionalRoleMemberBatchCreate = {
  project: 'contact',
  name: 'contact.v3.functionalRoleMember.batchCreate',
  sdkName: 'contact.v3.functionalRoleMember.batchCreate',
  path: '/open-apis/contact/v3/functional_roles/:role_id/members/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-角色成员-批量添加角色成员-调用该接口在指定角色内添加一个或多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      members: z
        .array(z.string())
        .describe(
          '待添加为角色成员的用户 ID 列表，以 `["xxx", "yyy"]` 数组格式进行传值。ID 类型需要和查询参数 user_id_type 的取值保持一致',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3FunctionalRoleMemberBatchDelete = {
  project: 'contact',
  name: 'contact.v3.functionalRoleMember.batchDelete',
  sdkName: 'contact.v3.functionalRoleMember.batchDelete',
  path: '/open-apis/contact/v3/functional_roles/:role_id/members/batch_delete',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-通讯录-角色成员-删除角色下的成员-调用该接口在指定角色内删除一个或多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      members: z
        .array(z.string())
        .describe(
          '待删除角色成员的用户 ID 列表，以 `["xxx", "yyy"]` 数组格式进行传值。ID 类型需要和查询参数 user_id_type 的取值保持一致',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3FunctionalRoleMemberGet = {
  project: 'contact',
  name: 'contact.v3.functionalRoleMember.get',
  sdkName: 'contact.v3.functionalRoleMember.get',
  path: '/open-apis/contact/v3/functional_roles/:role_id/members/:member_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-角色成员-查询角色下某个成员的管理范围-调用本接口查询指定角色内的指定成员的管理范围',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
      member_id: z.string().describe('角色成员的用户 ID，ID 类型需要和查询参数 user_id_type 的取值保持一致'),
    }),
  },
};
export const contactV3FunctionalRoleMemberList = {
  project: 'contact',
  name: 'contact.v3.functionalRoleMember.list',
  sdkName: 'contact.v3.functionalRoleMember.list',
  path: '/open-apis/contact/v3/functional_roles/:role_id/members',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-角色成员-查询角色下的所有成员信息-调用本接口查询指定角色内的所有成员信息，包括成员的用户 ID、管理范围',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求返回的数据条目数').optional(),
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
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3FunctionalRoleMemberScopes = {
  project: 'contact',
  name: 'contact.v3.functionalRoleMember.scopes',
  sdkName: 'contact.v3.functionalRoleMember.scopes',
  path: '/open-apis/contact/v3/functional_roles/:role_id/members/scopes',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-通讯录-角色成员-批量设置角色成员管理范围-调用该接口为指定角色内的一个或多个角色成员设置管理范围。管理范围是指角色成员可以管理的部门范围',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      members: z
        .array(z.string())
        .describe(
          '角色成员的用户 ID 列表，以 `["xxx", "yyy"]` 数组格式进行传值。ID 类型需要和查询参数 user_id_type 的取值保持一致',
        ),
      departments: z
        .array(z.string())
        .describe(
          '设置角色成员可管理的部门范围（部门 ID 列表），以 `["xxx", "yyy"]` 数组格式进行传值。ID 类型需要和查询参数 department_id_type 的取值保持一致。部门 API 提供了多种获取部门 ID 的方式，如、、，你可以选择合适的 API 进行查询。**注意**：不支持为角色成员设置根部门（部门 ID 为 0）的管理范围',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3FunctionalRoleUpdate = {
  project: 'contact',
  name: 'contact.v3.functionalRole.update',
  sdkName: 'contact.v3.functionalRole.update',
  path: '/open-apis/contact/v3/functional_roles/:role_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-通讯录-角色-修改角色名称-调用本接口修改指定角色的角色名称',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ role_name: z.string().describe('角色名称。在同一租户下角色名称唯一，不能重复') }),
    path: z.object({
      role_id: z
        .string()
        .describe(
          '角色 ID。获取方式：- 在创建角色时，可从返回结果中获取。- 企业管理员可以在  > **组织架构** > **角色管理** 页面，在角色名称右侧获取角色 ID',
        ),
    }),
  },
};
export const contactV3GroupCreate = {
  project: 'contact',
  name: 'contact.v3.group.create',
  sdkName: 'contact.v3.group.create',
  path: '/open-apis/contact/v3/group',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-用户组-创建用户组-调用该接口创建一个用户组。用户组是飞书通讯录中基础实体之一，在用户组内可添加用户或部门资源。各类业务权限管控可以与用户组关联，从而实现高效便捷的成员权限管控',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe('用户组名字，长度不能超过 100 字符。**说明**：用户组名称企业内唯一，如重复设置则会创建失败'),
      description: z.string().describe('用户组描述，长度不能超过 500 字符。**默认值**：空').optional(),
      type: z
        .number()
        .describe(
          '用户组的类型。默认取值 `1`，表示普通用户组。 Options:1(Assign 普通用户组),2(Dynamic 暂不支持使用该值)',
        )
        .optional(),
      group_id: z
        .string()
        .describe(
          '自定义用户组 ID。**数据校验规则：**- 最大长度：64 字符- 校验规则：数字、大小写字母的组合，不能包含空格**默认值**：空，由系统生成一个默认 ID',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
    }),
  },
};
export const contactV3GroupDelete = {
  project: 'contact',
  name: 'contact.v3.group.delete',
  sdkName: 'contact.v3.group.delete',
  path: '/open-apis/contact/v3/group/:group_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-用户组-删除用户组-调用该接口删除指定用户组',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      group_id: z
        .string()
        .describe(
          '需删除的用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupGet = {
  project: 'contact',
  name: 'contact.v3.group.get',
  sdkName: 'contact.v3.group.get',
  path: '/open-apis/contact/v3/group/:group_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户组-查询指定用户组-调用该接口通过用户组 ID 查询指定用户组的基本信息，包括用户组名称、成员数量和类型等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupMemberBelong = {
  project: 'contact',
  name: 'contact.v3.group.memberBelong',
  sdkName: 'contact.v3.group.memberBelong',
  path: '/open-apis/contact/v3/group/member_belong',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-通讯录-用户组-查询用户所属用户组-调用该接口查询指定用户所属的用户组列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      member_id: z.string().describe('成员 ID。ID 类型与 member_id_type 取值保持一致'),
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id'])
        .describe(
          '成员 ID 类型。 Options:open_id(OpenID 标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。。),union_id(UnionID 标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。。),user_id(UserID 标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用（包括商店应用）中都保持一致。User ID 主要用于在不同的应用间打通用户数据。。)',
        )
        .optional(),
      group_type: z.number().describe('用户组类型。 Options:1(Assign 普通用户组),2(Dynamic 动态用户组)').optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const contactV3GroupMemberAdd = {
  project: 'contact',
  name: 'contact.v3.groupMember.add',
  sdkName: 'contact.v3.groupMember.add',
  path: '/open-apis/contact/v3/group/:group_id/member/add',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-用户组成员-添加用户组成员-调用该接口向指定的普通用户组内添加成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      member_type: z.literal('user').describe('用户组成员的类型，目前仅支持选择 user。 Options:user(用户类型。)'),
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id'])
        .describe(
          '当 `member_type` 取值为 `user`时，通过该参数设置用户 ID 类型。 Options:open_id(OpenID 标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。),union_id(UnionID 标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。),user_id(UserID 标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用中都保持一致。User ID 主要用于在不同的应用间打通用户数据。)',
        ),
      member_id: z
        .string()
        .describe(
          '添加的用户 ID，ID 类型与 member_id_type 的取值保持一致。不同类型的 ID 获取方式可参见：- - - ',
        ),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupMemberBatchAdd = {
  project: 'contact',
  name: 'contact.v3.groupMember.batchAdd',
  sdkName: 'contact.v3.groupMember.batchAdd',
  path: '/open-apis/contact/v3/group/:group_id/member/batch_add',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-用户组成员-批量添加用户组成员-调用该接口向指定的普通用户组内添加一个或多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            member_id: z
              .string()
              .describe(
                '添加的用户 ID，ID 类型与 member_id_type 的取值保持一致。不同类型的 ID 获取方式可参见：- - - ',
              ),
            member_type: z.string().describe('用户组成员的类型，目前仅支持选择 user，表示用户类型'),
            member_id_type: z
              .string()
              .describe(
                '当 `member_type` 取值为 `user`时，该参数必填，需通过该参数设置用户 ID 类型。包括：- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用中都保持一致。User ID 主要用于在不同的应用间打通用户数据',
              )
              .optional(),
          }),
        )
        .describe('待添加成员信息')
        .optional(),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupMemberBatchRemove = {
  project: 'contact',
  name: 'contact.v3.groupMember.batchRemove',
  sdkName: 'contact.v3.groupMember.batchRemove',
  path: '/open-apis/contact/v3/group/:group_id/member/batch_remove',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-用户组成员-批量移除用户组成员-调用该接口从指定普通用户组内移除一个或多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            member_id: z
              .string()
              .describe(
                '移除的用户 ID，ID 类型与 member_id_type 的取值保持一致。你可以调用接口，获取用户组内的成员 ID，并将需要移除的成员 ID 传入当前参数。注意仅支持移除用户类型的成员，且需要使用相同的用户 ID 类型，否则会报错',
              ),
            member_type: z.string().describe('用户组成员的类型，目前仅支持选择 user，表示用户类型'),
            member_id_type: z
              .string()
              .describe(
                '当 `member_type` 取值为 `user`时，该参数必填，需通过该参数设置用户 ID 类型，包括：- open_id：标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。- union_id：标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。- user_id：标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用中都保持一致。User ID 主要用于在不同的应用间打通用户数据',
              )
              .optional(),
          }),
        )
        .describe('待移除成员信息'),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupMemberRemove = {
  project: 'contact',
  name: 'contact.v3.groupMember.remove',
  sdkName: 'contact.v3.groupMember.remove',
  path: '/open-apis/contact/v3/group/:group_id/member/remove',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-用户组成员-移除用户组成员-调用该接口移除指定普通用户组内的某一成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      member_type: z.literal('user').describe('用户组成员的类型，目前仅支持选择 user。 Options:user(用户类型。)'),
      member_id: z
        .string()
        .describe(
          '移除的用户 ID，ID 类型与 member_id_type 的取值保持一致。你可以调用接口，获取用户组内的成员 ID，并将需要移除的成员 ID 传入当前参数。注意仅支持移除用户类型的成员，且需要使用相同的用户 ID 类型，否则会报错',
        ),
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id'])
        .describe(
          '当 `member_type` 取值为 `user`时，通过该参数设置用户 ID 类型。 Options:open_id(OpenID 标识一个用户在某个应用中的身份。同一个用户在不同应用中的 Open ID 不同。),union_id(UnionID 标识一个用户在某个应用开发商下的身份。同一用户在同一开发商下的应用中的 Union ID 是相同的，在不同开发商下的应用中的 Union ID 是不同的。通过 Union ID，应用开发商可以把同个用户在多个应用中的身份关联起来。),user_id(UserID 标识一个用户在某个租户内的身份。同一个用户在租户 A 和租户 B 内的 User ID 是不同的。在同一个租户内，一个用户的 User ID 在所有应用中都保持一致。User ID 主要用于在不同的应用间打通用户数据。)',
        ),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupMemberSimplelist = {
  project: 'contact',
  name: 'contact.v3.groupMember.simplelist',
  sdkName: 'contact.v3.groupMember.simplelist',
  path: '/open-apis/contact/v3/group/:group_id/member/simplelist',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户组成员-查询用户组成员列表-调用该接口查询指定用户组内的成员列表，列表内主要包括成员 ID 信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求返回的最大条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id', 'department_id'])
        .describe(
          '用户组成员 ID 类型。- 当 `member_type` 取值为 `user`时，该参数表示用户 ID 类型，包括 open_id、union_id、user_id。- 当 `member_type` 取值为 `department`时，该参数表示部门 ID 类型，包括 department_id、open_department_id。 Options:open_id(当 `member_type` 取值为 `user`时，表示用户的 open_id。当 `member_type` 取值为 `department`时，表示部门的 open_department_id。),union_id(当 `member_type` 取值为 `user`时，表示用户的 union_id。),user_id(当 `member_type` 取值为 `user`时，表示用户的 user_id。),department_id(当 `member_type` 取值为 `department`时，表示部门的 department_id。)',
        )
        .optional(),
      member_type: z
        .enum(['user', 'department'])
        .describe(
          '用户组成员类型。 Options:user(用户，表示仅查询用户组内的用户类型成员。),department(部门，表示仅查询用户组内的部门类型成员。)',
        )
        .optional(),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupPatch = {
  project: 'contact',
  name: 'contact.v3.group.patch',
  sdkName: 'contact.v3.group.patch',
  path: '/open-apis/contact/v3/group/:group_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-通讯录-用户组-更新用户组-调用该接口更新指定用户组的名称或描述',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe(
          '用户组名字，长度不能超过 100 字符。**说明**：用户组名称企业内唯一，如重复设置则会创建失败。**默认值**：空，表示不更新用户组名字',
        )
        .optional(),
      description: z
        .string()
        .describe('用户组描述，长度不能超过 500 字符。**默认值**：空，表示不更新用户组描述')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '用户组 ID。用户组 ID 可在创建用户组时从返回值中获取，你也可以调用接口，获取用户组的 ID',
        ),
    }),
  },
};
export const contactV3GroupSimplelist = {
  project: 'contact',
  name: 'contact.v3.group.simplelist',
  sdkName: 'contact.v3.group.simplelist',
  path: '/open-apis/contact/v3/group/simplelist',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户组-查询用户组列表-调用该接口查询当前租户下的用户组列表，列表内包含用户组的 ID、名字、成员数量和类型等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      type: z.number().describe('用户组类型。 Options:1(Assign 普通用户组),2(Dynamic 动态用户组)').optional(),
    }),
  },
};
export const contactV3JobFamilyCreate = {
  project: 'contact',
  name: 'contact.v3.jobFamily.create',
  sdkName: 'contact.v3.jobFamily.create',
  path: '/open-apis/contact/v3/job_families',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-序列-创建序列-调用该接口创建一个序列。序列是用户属性之一，用来定义用户的工作类型，例如产品、研发、运营等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('序列名称，租户内唯一。取值支持中、英文及符号'),
      description: z.string().describe('序列描述，描述序列详情信息。字符长度上限为 5,000。**默认值**：空').optional(),
      parent_job_family_id: z
        .string()
        .describe(
          '上级序列 ID。如果你需要为某一序列添加子序列，则需要传入该参数值。你可以调用接口，获取序列 ID。默认值：空，表示该序列没有上级序列',
        )
        .optional(),
      status: z.boolean().describe('是否启用序列。**可选值有**：- true：启用- false：禁用'),
      i18n_name: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。可选值有：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的值').optional(),
          }),
        )
        .describe('多语言序列名称')
        .optional(),
      i18n_description: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。可选值有：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的值').optional(),
          }),
        )
        .describe('多语言序列描述')
        .optional(),
    }),
  },
};
export const contactV3JobFamilyDelete = {
  project: 'contact',
  name: 'contact.v3.jobFamily.delete',
  sdkName: 'contact.v3.jobFamily.delete',
  path: '/open-apis/contact/v3/job_families/:job_family_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-序列-删除序列-调用该接口删除指定序列',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_family_id: z
        .string()
        .describe(
          '序列 ID。获取方式：- 时可以从返回结果中获取（job_family_id）。- 调用接口获取序列 ID',
        ),
    }),
  },
};
export const contactV3JobFamilyGet = {
  project: 'contact',
  name: 'contact.v3.jobFamily.get',
  sdkName: 'contact.v3.jobFamily.get',
  path: '/open-apis/contact/v3/job_families/:job_family_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-序列-获取单个序列信息-调用该接口获取指定序列的信息，包括序列的名称、描述、启用状态以及 ID 等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_family_id: z
        .string()
        .describe(
          '序列 ID。获取方式：- 时可以从返回结果中获取（job_family_id）。- 调用接口获取序列 ID',
        ),
    }),
  },
};
export const contactV3JobFamilyList = {
  project: 'contact',
  name: 'contact.v3.jobFamily.list',
  sdkName: 'contact.v3.jobFamily.list',
  path: '/open-apis/contact/v3/job_families',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-序列-获取租户序列列表-调用该接口获取当前租户下的序列信息，包含序列的名称、描述、启用状态以及 ID 等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      name: z
        .string()
        .describe(
          '序列名称。- 传入该字段时，可查询指定序列名称对应的序列信息（不支持模糊查询）。- 不传入该字段时，查询当前租户下所有序列的信息',
        )
        .optional(),
    }),
  },
};
export const contactV3JobFamilyUpdate = {
  project: 'contact',
  name: 'contact.v3.jobFamily.update',
  sdkName: 'contact.v3.jobFamily.update',
  path: '/open-apis/contact/v3/job_families/:job_family_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-通讯录-序列-更新序列-调用该接口更新指定序列的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('序列名称，租户内唯一。取值支持中、英文及符号。**默认值**：空，表示不更新').optional(),
      description: z
        .string()
        .describe('序列描述，描述序列详情信息。字符长度上限为 5,000。**默认值**：空，表示不更新')
        .optional(),
      parent_job_family_id: z
        .string()
        .describe(
          '上级序列 ID。你可以调用接口，获取序列 ID。**默认值**：空，表示不更新',
        )
        .optional(),
      status: z
        .boolean()
        .describe('是否启用序列。**可选值有**：- true：启用- false：禁用**默认值**：空，表示不更新')
        .optional(),
      i18n_name: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。可选值有：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的值').optional(),
          }),
        )
        .describe('多语言序列名称。**默认值**：空，表示不更新')
        .optional(),
      i18n_description: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。可选值有：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的值').optional(),
          }),
        )
        .describe('多语言序列描述。**默认值**：空，表示不更新')
        .optional(),
    }),
    path: z.object({
      job_family_id: z
        .string()
        .describe(
          '序列 ID。获取方式：- 时可以从返回结果中获取（job_family_id）。- 调用接口获取序列 ID',
        ),
    }),
  },
};
export const contactV3JobLevelCreate = {
  project: 'contact',
  name: 'contact.v3.jobLevel.create',
  sdkName: 'contact.v3.jobLevel.create',
  path: '/open-apis/contact/v3/job_levels',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-职级-创建职级-调用该接口创建一个职级。职级是用户属性之一，用于标识用户的职位级别，例如 P1、P2、P3、P4',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('职级名称。通用名称，如果未设置多语言名称，则默认展示该名称'),
      description: z
        .string()
        .describe('职级描述。字符长度上限 5,000。通用描述，如果未设置多语言描述，则默认展示该描述。**默认值**：空')
        .optional(),
      order: z
        .number()
        .describe(
          '职级排序。数值越小，排序越靠前。**默认值**：空。如果不传入该值，则默认职级排在列表最后位（即 order 取值为当前职级列表内的最大值）',
        )
        .optional(),
      status: z
        .boolean()
        .describe(
          '是否启用该职级。**可选值有**：- true：启用- false：不启用**说明**：只有启用了的职级可以设置为用户属性',
        ),
      i18n_name: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。例如：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的职级名称').optional(),
          }),
        )
        .describe('多语言职级名称。**默认值**：空，表示不设置多语言名称')
        .optional(),
      i18n_description: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。例如：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的职级描述').optional(),
          }),
        )
        .describe('多语言职级描述。**默认值**：空，表示不设置多语言描述')
        .optional(),
    }),
  },
};
export const contactV3JobLevelDelete = {
  project: 'contact',
  name: 'contact.v3.jobLevel.delete',
  sdkName: 'contact.v3.jobLevel.delete',
  path: '/open-apis/contact/v3/job_levels/:job_level_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-职级-删除职级-调用该接口删除指定的职级',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_level_id: z
        .string()
        .describe(
          '职级 ID。获取方式：- 创建职级时，可以从返回结果中获取职级 ID。- 调用接口，查找指定职级的 ID 信息',
        ),
    }),
  },
};
export const contactV3JobLevelGet = {
  project: 'contact',
  name: 'contact.v3.jobLevel.get',
  sdkName: 'contact.v3.jobLevel.get',
  path: '/open-apis/contact/v3/job_levels/:job_level_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-职级-获取单个职级信息-调用该接口获取指定职级的信息，包括职级名称、描述、排序、状态以及多语言等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_level_id: z
        .string()
        .describe(
          '职级 ID。获取方式：- 创建职级时，可以从返回结果中获取职级 ID。- 调用接口，查找指定职级的 ID 信息',
        ),
    }),
  },
};
export const contactV3JobLevelList = {
  project: 'contact',
  name: 'contact.v3.jobLevel.list',
  sdkName: 'contact.v3.jobLevel.list',
  path: '/open-apis/contact/v3/job_levels',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-职级-获取租户职级列表-调用该接口获取当前租户下的职级信息，包括职级名称、描述、排序、状态以及多语言等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      name: z
        .string()
        .describe(
          '职级名称。- 传入该字段时，可查询指定职级名称对应的职级信息（不支持模糊查询）。- 不传入该字段时，查询当前租户下所以职级的信息',
        )
        .optional(),
    }),
  },
};
export const contactV3JobLevelUpdate = {
  project: 'contact',
  name: 'contact.v3.jobLevel.update',
  sdkName: 'contact.v3.jobLevel.update',
  path: '/open-apis/contact/v3/job_levels/:job_level_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-通讯录-职级-更新职级-调用该接口更新指定职级的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe('职级的通用名称。如果未设置多语言名称，则默认展示该名称。**默认值**：空，表示不更新')
        .optional(),
      description: z
        .string()
        .describe('职级的通用描述。如果未设置多语言描述，则默认展示该描述。**默认值**：空，表示不更新')
        .optional(),
      order: z.number().describe('职级排序。数值越小，排序越靠前。**默认值**：空，表示不更新').optional(),
      status: z
        .boolean()
        .describe('是否启用该职级。**可选值有**：- true：启用- false：不启用**默认值**：空，表示不更新')
        .optional(),
      i18n_name: z
        .array(
          z.object({
            locale: z
              .string()
              .describe('语言版本。例如：- zh_cn：中文- en_us：英语- ja_jp：日语**默认值**：空，表示不更新')
              .optional(),
            value: z.string().describe('语言版本对应的职级名称。**默认值**：空，表示不更新').optional(),
          }),
        )
        .describe('多语言职级名称')
        .optional(),
      i18n_description: z
        .array(
          z.object({
            locale: z.string().describe('语言版本。例如：- zh_cn：中文- en_us：英语- ja_jp：日语').optional(),
            value: z.string().describe('语言版本对应的职级描述').optional(),
          }),
        )
        .describe('多语言职级描述')
        .optional(),
    }),
    path: z.object({
      job_level_id: z
        .string()
        .describe(
          '职级 ID。获取方式：- 创建职级时，可以从返回结果中获取职级 ID。- 调用接口，查找指定职级的 ID 信息',
        ),
    }),
  },
};
export const contactV3JobTitleGet = {
  project: 'contact',
  name: 'contact.v3.jobTitle.get',
  sdkName: 'contact.v3.jobTitle.get',
  path: '/open-apis/contact/v3/job_titles/:job_title_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-职务-获取单个职务信息-调用该接口获取指定职务的信息，包括职务的 ID、名称、多语言名称以及启用状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      job_title_id: z
        .string()
        .describe(
          '职务 ID。你可以调用接口获取职务 ID',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3JobTitleList = {
  project: 'contact',
  name: 'contact.v3.jobTitle.list',
  sdkName: 'contact.v3.jobTitle.list',
  path: '/open-apis/contact/v3/job_titles',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-职务-获取租户职务列表-调用该接口获取当前租户下的职务信息，包括职务的 ID、名称、多语言名称以及启用状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
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
export const contactV3ScopeList = {
  project: 'contact',
  name: 'contact.v3.scope.list',
  sdkName: 'contact.v3.scope.list',
  path: '/open-apis/contact/v3/scopes',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-权限范围-获取通讯录授权范围-调用该接口获取当前应用被授权可访问的通讯录范围，包括可访问的部门列表、用户列表和用户组列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z
        .number()
        .describe(
          '分页大小，用于设置一次调用的返回值列表长度。**注意**：分页查询时，返回的所有资源列表长度之和不会大于 page_size 值，列表内的资源返回顺序为：先返回 user_ids、然后返回 department_ids、最后返回 group_ids',
        )
        .optional(),
    }),
  },
};
export const contactV3UnitBindDepartment = {
  project: 'contact',
  name: 'contact.v3.unit.bindDepartment',
  sdkName: 'contact.v3.unit.bindDepartment',
  path: '/open-apis/contact/v3/unit/bind_department',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-单位-建立部门与单位的绑定关系-调用该接口建立部门与单位的绑定关系。一个部门同时只能绑定一个单位',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
      department_id: z
        .string()
        .describe(
          '单位关联的部门 ID，ID 类型与 department_id_type 的取值保持一致。部门 API 提供了多种获取部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        ),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
  },
};
export const contactV3UnitCreate = {
  project: 'contact',
  name: 'contact.v3.unit.create',
  sdkName: 'contact.v3.unit.create',
  path: '/open-apis/contact/v3/unit',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-单位-创建单位-调用该接口创建一个单位',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      unit_id: z
        .string()
        .describe(
          '自定义单位 ID，租户内唯一，创建后不可修改。**数据校验规则：** 1 ~ 64 个字符，仅支持字母、数字。**默认值**：空，若不传值则由系统自动生成一个默认 ID',
        )
        .optional(),
      name: z
        .string()
        .describe(
          '单位名字。**数据校验规则：** 1 ~ 100 个字符。**注意**：在租户内，传入的 name 和 unit_type 不允许同时重复。例如，已存在一个名字 `A`、类型 `A`的单位，此时再创建一个名字 `A`、类型 `A` 的单位将会创建失败',
        ),
      unit_type: z
        .string()
        .describe(
          '自定义单位类型，创建后不可修改。**数据校验规则：** 1 ~ 100 个字符。**注意**：在租户内，传入的 name 和 unit_type 不允许同时重复。例如，已存在一个名字 `A`、类型 `A`的单位，此时再创建一个名字 `A`、类型 `A` 的单位将会创建失败',
        ),
    }),
  },
};
export const contactV3UnitDelete = {
  project: 'contact',
  name: 'contact.v3.unit.delete',
  sdkName: 'contact.v3.unit.delete',
  path: '/open-apis/contact/v3/unit/:unit_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-通讯录-单位-删除单位-调用该接口删除指定单位',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
    }),
  },
};
export const contactV3UnitGet = {
  project: 'contact',
  name: 'contact.v3.unit.get',
  sdkName: 'contact.v3.unit.get',
  path: '/open-apis/contact/v3/unit/:unit_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-通讯录-单位-获取单位信息-调用该接口获取指定单位的信息，包括单位 ID、名字、类型',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
    }),
  },
};
export const contactV3UnitList = {
  project: 'contact',
  name: 'contact.v3.unit.list',
  sdkName: 'contact.v3.unit.list',
  path: '/open-apis/contact/v3/unit',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-单位-获取单位列表-调用该接口获取当前租户内的单位列表。列表内主要包含各单位的 ID、名字、类型信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const contactV3UnitListDepartment = {
  project: 'contact',
  name: 'contact.v3.unit.listDepartment',
  sdkName: 'contact.v3.unit.listDepartment',
  path: '/open-apis/contact/v3/unit/list_department',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-通讯录-单位-获取单位绑定的部门列表-调用该接口获取指定单位绑定的部门列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
    }),
  },
};
export const contactV3UnitPatch = {
  project: 'contact',
  name: 'contact.v3.unit.patch',
  sdkName: 'contact.v3.unit.patch',
  path: '/open-apis/contact/v3/unit/:unit_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-通讯录-单位-修改单位信息-调用该接口修改指定单位的名字',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe(
          '单位名字。**数据校验规则**： 1 ~ 100 个字符。**注意**：- 请求时该参数必填，请忽略 **必填** 列的 **否**。- 相同单位类型下，设置的单位名称不能重复',
        )
        .optional(),
    }),
    path: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
    }),
  },
};
export const contactV3UnitUnbindDepartment = {
  project: 'contact',
  name: 'contact.v3.unit.unbindDepartment',
  sdkName: 'contact.v3.unit.unbindDepartment',
  path: '/open-apis/contact/v3/unit/unbind_department',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-单位-解除部门与单位的绑定关系-调用该接口解除部门与单位的绑定关系',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      unit_id: z
        .string()
        .describe(
          '单位 ID。当你在创建单位时，可以在返回结果中获取单位 ID。你也可以调用接口，获取单位 ID',
        ),
      department_id: z
        .string()
        .describe(
          '待解除关联的部门 ID。ID 类型与 department_id_type 的取值保持一致。部门 API 提供了多种获取部门 ID 的方式，如、、，你可以选择合适的 API 进行查询',
        ),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
    }),
  },
};
export const contactV3UserBatch = {
  project: 'contact',
  name: 'contact.v3.user.batch',
  sdkName: 'contact.v3.user.batch',
  path: '/open-apis/contact/v3/users/batch',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户-批量获取用户信息-调用该接口获取通讯录内一个或多个用户的信息，包括用户 ID、名称、邮箱、手机号、状态以及所属部门等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_ids: z
        .array(z.string())
        .describe(
          '用户ID。ID 类型与查询参数 `user_id_type` 保持一致。如需一次查询多个用户ID，可多次传递同一参数名，并且每次传递不同的参数值。例如：`https://{url}?user_ids={user_id1}&user_ids={user_id2}`。**说明**：- 单次最大请求可设置的用户 ID 数量上限为 50。- 如上例子中的 `user_ids`是参数名，可以多次传递。`{user_id1}`和`{user_id2}`是每次传入的参数值',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3UserBatchGetId = {
  project: 'contact',
  name: 'contact.v3.user.batchGetId',
  sdkName: 'contact.v3.user.batchGetId',
  path: '/open-apis/contact/v3/users/batch_get_id',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-用户-通过手机号或邮箱获取用户 ID-调用该接口通过手机号或邮箱获取一个或多个用户的 ID （包括 user_id、open_id、union_id）与状态信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      emails: z
        .array(z.string())
        .describe(
          '要查询的用户邮箱，最多可传入 50 条。**注意**：- 不支持企业邮箱。- emails 与 mobiles 两个参数相互独立，即每个用户邮箱会返回对应的用户信息，每个手机号也会返回对应的用户信息。- 本接口返回的用户 ID 数量为 emails 数量与 mobiles 数量之和。**默认值**：空',
        )
        .optional(),
      mobiles: z
        .array(z.string())
        .describe(
          '要查询的用户手机号，最多可传入 50 条。**注意**：- 非中国大陆地区的手机号需要添加以 “+” 开头的国家或地区代码。- emails 与 mobiles 两个参数相互独立，即每个用户邮箱会返回对应的用户信息，每个手机号也会返回对应的用户信息。- 本接口返回的用户 ID 数量为 emails 数量与 mobiles 数量之和。**默认值**：空',
        )
        .optional(),
      include_resigned: z
        .boolean()
        .describe('查询结果是否包含离职员工的用户信息。**可选值有**：- true：包含- false：不包含')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const contactV3UserCreate = {
  project: 'contact',
  name: 'contact.v3.user.create',
  sdkName: 'contact.v3.user.create',
  path: '/open-apis/contact/v3/users',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-通讯录-用户-创建用户-调用该接口向通讯录创建一个用户（该动作可以理解为员工入职）。成功创建用户后，系统会以短信或邮件的形式向用户发送邀请，用户在同意邀请后方可访问企业或团队',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z
        .string()
        .describe(
          '自定义用户的 user_id。长度不能超过 64 字符。user_id 是用户在当前租户内的唯一标识，自定义时请确保唯一性。**默认值**：空，表示由系统随机生成一个 user_id',
        )
        .optional(),
      name: z.string().describe('用户名。长度不能超过 255 字符'),
      en_name: z.string().describe('英文名。长度不能超过 255 字符。**默认值**：空').optional(),
      nickname: z.string().describe('别名。长度不能超过 255 字符。**默认值**：空').optional(),
      email: z
        .string()
        .describe(
          '邮箱。**注意**：- 当设置非中国大陆的手机号时，必须同时设置邮箱。- 在当前租户下，邮箱不可重复。**默认值**：空',
        )
        .optional(),
      mobile: z
        .string()
        .describe(
          '手机号。**注意**：- 在当前租户下，手机号不可重复。- 未认证企业仅支持添加中国大陆手机号；通过飞书认证的企业允许添加海外手机号。- 国际电话区号的前缀中，必须包含加号 **+**。取值示例：- 中国大陆手机号：13011111111 或 +8613011111111- 非中国大陆手机号：+41446681800',
        ),
      mobile_visible: z
        .boolean()
        .describe(
          '手机号码是否对其他员工可见。**可选值有**：- true：可见。- false：不可见。不可见时，企业内的员工将无法查看该用户的手机号码。**默认值**：true',
        )
        .optional(),
      gender: z
        .number()
        .describe('性别。**默认值**：0 Options:0(unkown 保密),1(male 男),2(female 女),3(others 其他)')
        .optional(),
      avatar_key: z
        .string()
        .describe(
          '头像的文件 Key。你可以通过接口，上传并获取头像文件 Key。**默认值**：空',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '用户所属部门的 ID 列表。- 一个用户可属于多个部门，最多可设置 50 个部门。- 部门 ID 类型与查询参数 `department_id_type` 保持一致。- 你可以调用接口，通过部门名称关键词获取对应的部门 ID',
        ),
      leader_user_id: z
        .string()
        .describe(
          '用户的直接主管的用户 ID，ID 类型与查询参数 `user_id_type` 保持一致。用户 ID 获取方式可参见。**默认值**：空',
        )
        .optional(),
      city: z
        .string()
        .describe(
          '工作城市。字符长度上限为 100。**说明**：- 你可以调用接口获取当前租户内已有的工作城市名称。- 如果你传入的工作城市名称不存在，则系统会自动生成该工作城市。工作城市的枚举值数量上限为 10,000。**默认值**：空',
        )
        .optional(),
      country: z
        .string()
        .describe(
          '国家或地区 Code 缩写。具体写入格式参考 。**默认值**：空',
        )
        .optional(),
      work_station: z.string().describe('工位。字符长度上限为 255。**默认值**：空').optional(),
      join_time: z
        .number()
        .describe(
          '入职时间。秒级时间戳格式，表示从 1970 年 1 月 1 日开始所经过的秒数。如果不传入该参数，则默认填充当前请求时的时间',
        )
        .optional(),
      employee_no: z
        .string()
        .describe('工号。字符长度上限为 255。**注意**：同一租户下，用户工号不能重复。**默认值**：空')
        .optional(),
      employee_type: z
        .number()
        .describe(
          '员工类型。**可选值有**：- 1：正式员工- 2：实习生- 3：外包- 4：劳务- 5：顾问 该参数支持读取自定义的员工类型的 int 值。你可通过接口获取到该租户的自定义员工类型的编号值（enum_value）',
        ),
      orders: z
        .array(
          z.object({
            department_id: z
              .string()
              .describe(
                '排序信息对应的部门 ID。表示用户所在的、且需要排序的部门。**注意**：- 部门 ID 类型与查询参数 `department_id_type` 保持一致。- 该参数所传入的部门 ID 必须在用户所属的部门 ID 列表（department_ids 参数）内。- 如果不传值，系统默认会将 department_ids 参数内的部门 ID，依次传入 order 的 department_id 参数',
              )
              .optional(),
            user_order: z
              .number()
              .describe(
                '用户在其直属部门内的排序。数值越大，排序越靠前。**注意**：该参数为 int 类型，取值时不能超出 int 的最大值。**默认值**：0',
              )
              .optional(),
            department_order: z
              .number()
              .describe(
                '用户所属的多个部门之间的排序。数值越大，排序越靠前。**注意**：该参数为 int 类型，取值时不能超出 int 的最大值。**默认值**：0',
              )
              .optional(),
            is_primary_dept: z
              .boolean()
              .describe(
                '标识是否为用户的唯一主部门，主部门为用户所属部门中排序第一的部门（department_order 最大）。**可选值有**：- true：是- false：否**默认值**：如果当前的 department_id 是 department_ids 中传入的第一个数据，则默认值为 true，否则为 false',
              )
              .optional(),
          }),
        )
        .describe('用户排序信息列表。该参数用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序')
        .optional(),
      custom_attrs: z
        .array(
          z.object({
            type: z
              .string()
              .describe(
                '自定义字段类型。**可选值有**： - TEXT：文本- HREF：网页- ENUMERATION：枚举- PICTURE_ENUM：图片- GENERIC_USER：用户',
              )
              .optional(),
            id: z
              .string()
              .describe(
                '自定义字段 ID。你可以调用接口获取自定义字段对应的字段 ID。**说明**：如果设置了自定义字段类型参数（type），则该参数必填',
              )
              .optional(),
            value: z
              .object({
                text: z
                  .string()
                  .describe(
                    '- 自定义字段类型为 TEXT 时，该参数必填，用于定义字段值。- 自定义字段类型为 HREF 时，该参数必填，用于定义网页标题。长度不能超过 100 字符',
                  )
                  .optional(),
                url: z
                  .string()
                  .describe(
                    '自定义字段类型为 HREF 时，该参数必填，用于定义默认 URL。例如，手机端跳转小程序，PC端跳转网页。**注意**：请以 http:// 或 https:// 开头',
                  )
                  .optional(),
                pc_url: z
                  .string()
                  .describe(
                    '自定义字段类型为 HREF 时，该参数用于定义 PC 端 URL。**注意**：请以 http:// 或 https:// 开头',
                  )
                  .optional(),
                option_id: z
                  .string()
                  .describe(
                    '自定义字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数用于定义选项 ID。你可以调用接口获取自定义字段相应的选项 ID',
                  )
                  .optional(),
                generic_user: z
                  .object({
                    id: z
                      .string()
                      .describe(
                        '引用人员的用户 ID。- ID 类型与查询参数 `user_id_type` 保持一致。- 如何获取用户 ID 可参见',
                      ),
                    type: z.number().describe('用户类型。**可选值有**：1：用户**说明**：目前仅支持取值 1，表示用户'),
                  })
                  .describe('自定义字段类型为 GENERIC_USER 时，该参数用于定义引用人员')
                  .optional(),
              })
              .describe('自定义字段取值')
              .optional(),
          }),
        )
        .describe(
          '自定义字段。设置参数前建议你先了解。**默认值**：空。如果没有设置自定义字段，则无需传入值。**注意事项**：当企业管理员在管理后台配置了自定义字段，且开启了 **允许开放平台 API 调用** 功能后，该字段才会生效',
        )
        .optional(),
      enterprise_email: z
        .string()
        .describe(
          '企业邮箱。 **注意事项**：企业管理员在管理后台启用飞书邮箱服务后，才会生效该参数。如果设置企业邮箱失败，请联系企业管理员确认是否在管理后台启用了相应的企业邮箱域名。**默认值**：空',
        )
        .optional(),
      job_title: z
        .string()
        .describe(
          '职务名称。字符数量上限为 255。- 你可以调用接口获取相应的职务名称。- 如果传入的职务名称不存在，则系统会自动创建并使用该名称。职务枚举值数量上限为 10,000。**默认值**：空',
        )
        .optional(),
      geo: z.string().describe('数据驻留地。**注意事项**：需联系服务台技术支持开通使用。**默认值**：空').optional(),
      job_level_id: z
        .string()
        .describe(
          '职级 ID。你可以调用接口查询相应的职级 ID。**默认值**：空',
        )
        .optional(),
      job_family_id: z
        .string()
        .describe(
          '序列 ID。你可以调用接口查询相应的序列 ID。**默认值**：空',
        )
        .optional(),
      subscription_ids: z
        .array(z.string())
        .describe(
          '分配给用户的席位 ID 列表。**注意事项**：- 该字段需要应用已开通 **分配用户席位** 权限。- 如果你购买了席位，则创建用户时必须为用户分配席位 ID，否则用户将无法登录企业飞书。更多信息可参见。- 你可通过接口，获取到当前租户的可用席位 ID。**默认值**：空',
        )
        .optional(),
      dotted_line_leader_user_ids: z
        .array(z.string())
        .describe(
          '虚线上级的用户 ID 列表。- ID 类型与查询参数 `user_id_type` 保持一致。- 如何获取用户 ID 可参见。**默认值**：空',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      client_token: z
        .string()
        .describe(
          '用于幂等判断是否为同一请求，避免重复创建。请参考参数示例值，传入自定义的 client_token。**默认值**：空，表示不进行幂等判断',
        )
        .optional(),
    }),
  },
};
export const contactV3UserDelete = {
  project: 'contact',
  name: 'contact.v3.user.delete',
  sdkName: 'contact.v3.user.delete',
  path: '/open-apis/contact/v3/users/:user_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-通讯录-用户-删除用户-调用该接口从通讯录内删除一个指定用户（该动作可以理解为员工离职），删除时可通过请求参数将用户所有的群组、文档、日程和应用等数据转让至他人',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_chat_acceptor_user_id: z
        .string()
        .describe(
          '部门群接收者的用户 ID。被删除用户为部门群群主时，转让群主给指定接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定该参数时，如果被删除用户是部门群群主，则群主会默认转让给群内第一个入群的人',
        )
        .optional(),
      external_chat_acceptor_user_id: z
        .string()
        .describe(
          '外部群接收者的用户 ID。被删除用户为外部群群主时，转让群主给指定接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定该参数时，如果被删除用户是外部群群主，则群主会默认转让给群内与被删除用户在同一组织的第一个入群的人。如果组织内只有被删除用户在群里，则解散外部群',
        )
        .optional(),
      docs_acceptor_user_id: z
        .string()
        .describe(
          '文档接收者的用户 ID。用户被删除时，其拥有的文档转让给接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则将文档资源保留在该用户名下。- 文档转让后，只改变文档所有者，其他权限不受影响',
        )
        .optional(),
      calendar_acceptor_user_id: z
        .string()
        .describe(
          '日程接收者的用户 ID。用户被删除时，其拥有的日程转让给接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则直接删除日程资源',
        )
        .optional(),
      application_acceptor_user_id: z
        .string()
        .describe(
          '应用接受者的用户 ID。用户被删除时，其创建的应用转让给接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留应用在该用户名下，但该用户无法登录开发者后台进行应用管理。企业管理员可以在管理后台手动转移应用给其他人',
        )
        .optional(),
      minutes_acceptor_user_id: z
        .string()
        .describe(
          '妙记接收者的用户 ID。用户被删除时，其拥有的妙记资源转让给接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 如果不指定接收者，则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则将妙记保留在该用户名下。- 妙记转让后，只改变妙记所有者，不影响已分享的妙记链接',
        )
        .optional(),
      survey_acceptor_user_id: z
        .string()
        .describe(
          '飞书问卷接收者的用户 ID。用户被删除时，其拥有的飞书问卷资源转让给接收者。**注意**：- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则直接删除飞书问卷资源',
        )
        .optional(),
      email_acceptor: z
        .object({
          processing_type: z
            .enum(['1', '2', '3'])
            .describe('处理方式。 Options:1(Transfer 转移资源),2(Retain 保留资源),3(Delete 删除资源)'),
          acceptor_user_id: z
            .string()
            .describe(
              '邮件资源接收者的用户 ID。ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。**说明**：仅当 `processing_type` 取值为 `1` 时，需要设置该参数值',
            )
            .optional(),
        })
        .describe(
          '用户邮件资源的处理方式。该参数为可选参数，如果未传值，则默认将邮件资源转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留邮件资源在该用户名下',
        )
        .optional(),
      anycross_acceptor_user_id: z
        .string()
        .describe(
          '用户集成平台资源的接收者的用户 ID。**注意：**- ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见。- 不指定接收者则默认转让给被删除用户的直属上级。如果被删除用户无直属上级，则保留应用在该用户名下，但该用户无法登录飞书集成平台。企业管理员可以在管理后台手动转移应用给其他人',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      user_id: z
        .string()
        .describe(
          '用户 ID。ID 类型需要与查询参数中的 user_id_type 类型保持一致。用户 ID 获取方式可参见',
        ),
    }),
  },
};
export const contactV3UserFindByDepartment = {
  project: 'contact',
  name: 'contact.v3.user.findByDepartment',
  sdkName: 'contact.v3.user.findByDepartment',
  path: '/open-apis/contact/v3/users/find_by_department',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户-获取部门直属用户列表-调用该接口获取指定部门直属的用户信息列表。用户信息包括用户 ID、名称、邮箱、手机号以及状态等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '部门 ID，ID 类型与 department_id_type 的取值保持一致。**说明**：- 根部门的部门 ID 为 0。- 你可以调用接口，通过部门名称关键词获取对应的部门 ID',
        ),
      page_size: z.number().describe('分页大小，即本次请求所返回的用户信息列表内的最大条目数').optional(),
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
export const contactV3UserGet = {
  project: 'contact',
  name: 'contact.v3.user.get',
  sdkName: 'contact.v3.user.get',
  path: '/open-apis/contact/v3/users/:user_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-用户-获取单个用户信息-调用该接口获取通讯录中某一用户的信息，包括用户 ID、名称、邮箱、手机号、状态以及所属部门等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({ user_id: z.string().describe('用户ID。ID 类型与查询参数 `user_id_type` 保持一致') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3UserList = {
  project: 'contact',
  name: 'contact.v3.user.list',
  sdkName: 'contact.v3.user.list',
  path: '/open-apis/contact/v3/users',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-通讯录-用户管理-获取用户列表-基于部门ID获取部门下直属用户列表。',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      department_id: z.string().describe('填写该字段表示获取部门下所有用户，选填').optional(),
      page_token: z.string().optional(),
      page_size: z.number().optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3UserPatch = {
  project: 'contact',
  name: 'contact.v3.user.patch',
  sdkName: 'contact.v3.user.patch',
  path: '/open-apis/contact/v3/users/:user_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-通讯录-用户-修改用户部分信息-调用该接口更新通讯录中指定用户的信息，包括名称、邮箱、手机号、所属部门以及自定义字段等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('用户名。长度不能超过 255 字符').optional(),
      en_name: z.string().describe('英文名。长度不能超过 255 字符').optional(),
      nickname: z.string().describe('别名。长度不能超过 255 字符').optional(),
      email: z
        .string()
        .describe('邮箱。**注意**：- 当设置非中国大陆的手机号时，必须同时设置邮箱。- 在当前租户下，邮箱不可重复')
        .optional(),
      mobile: z
        .string()
        .describe(
          '手机号。**注意**：- 在当前租户下，手机号不可重复。- 未认证企业仅支持添加中国大陆手机号；通过飞书认证的企业允许添加海外手机号。- 国际电话区号的前缀中，必须包含加号 **+**。取值示例：- 中国大陆手机号：13011111111 或 +8613011111111- 非中国大陆手机号：+41446681800',
        )
        .optional(),
      mobile_visible: z
        .boolean()
        .describe(
          '手机号码是否可见。**可选值有**：- true：可见。- false：不可见。不可见时，企业内的员工将无法查看该用户的手机号码',
        )
        .optional(),
      gender: z.number().describe('性别。 Options:0(unkown 保密),1(male 男),2(female 女),3(others 其他)').optional(),
      avatar_key: z
        .string()
        .describe(
          '头像的文件 Key。你可以通过接口，上传并获取头像文件 Key',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '用户所属部门的 ID 列表。- 一个用户可属于多个部门。最多可归属 50 个部门。- 部门 ID 类型与查询参数 `department_id_type` 的取值保持一致。- 你可以调用接口，通过部门名称关键词获取对应的部门 ID',
        )
        .optional(),
      leader_user_id: z
        .string()
        .describe(
          '用户的直接主管的用户 ID，ID 类型与查询参数 `user_id_type` 的取值保持一致。用户 ID 获取方式可参见',
        )
        .optional(),
      city: z
        .string()
        .describe(
          '工作城市。字符长度上限为 100。- 调用获取当前租户内已有的工作城市列表。- 如果你传入的工作城市名称不存在，则系统会自动生成该工作城市。工作城市的枚举值数量上限为 10,000',
        )
        .optional(),
      country: z
        .string()
        .describe(
          '国家或地区 Code 缩写。具体写入格式参考 ',
        )
        .optional(),
      work_station: z.string().describe('工位。字符长度上限为 255').optional(),
      join_time: z.number().describe('入职时间。秒级时间戳格式，表示从 1970 年 1 月 1 日开始所经过的秒数').optional(),
      employee_no: z.string().describe('工号。字符长度上限为 255').optional(),
      employee_type: z
        .number()
        .describe(
          '员工类型。**可选值有**：- 1：正式员工- 2：实习生- 3：外包- 4：劳务- 5：顾问 该参数支持读取自定义的员工类型的 int 值。你可通过接口获取到该租户的自定义员工类型的编号值（enum_value）',
        )
        .optional(),
      orders: z
        .array(
          z.object({
            department_id: z
              .string()
              .describe(
                '排序信息对应的部门 ID。表示用户所在的、且需要排序的部门。**注意**：- 部门 ID 类型与查询参数 department_id_type 的取值保持一致。- 该参数所传入的部门 ID 必须在用户所属的部门 ID 列表（department_ids 参数）内',
              )
              .optional(),
            user_order: z
              .number()
              .describe(
                '用户在其直属部门内的排序，数值越大，排序越靠前。**注意**：该参数为 int 类型，取值时不能超出 int 的最大值',
              )
              .optional(),
            department_order: z
              .number()
              .describe(
                '用户所属的多个部门间的排序，数值越大，排序越靠前。**注意**：该参数为 int 类型，取值时不能超出 int 的最大值',
              )
              .optional(),
            is_primary_dept: z
              .boolean()
              .describe(
                '标识是否为用户的唯一主部门，主部门为用户所属部门中排序第一的部门（department_order 最大）。**可选值有**：- true：是- false：否',
              )
              .optional(),
          }),
        )
        .describe('用户排序信息。该参数用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序')
        .optional(),
      custom_attrs: z
        .array(
          z.object({
            type: z
              .string()
              .describe(
                '自定义字段类型。**可选值有**： - TEXT：文本- HREF：网页- ENUMERATION：枚举- PICTURE_ENUM：图片- GENERIC_USER：用户',
              )
              .optional(),
            id: z.string().describe('自定义字段 ID').optional(),
            value: z
              .object({
                text: z
                  .string()
                  .describe(
                    '- 字段类型为 TEXT 时，该参数定义字段值，必填。- 字段类型为 HREF 时，该参数定义网页标题，必填。长度不能超过 100 字符',
                  )
                  .optional(),
                url: z
                  .string()
                  .describe('字段类型为 HREF 时，该参数定义默认 URL。例如，手机端跳转小程序，PC端跳转网页')
                  .optional(),
                pc_url: z.string().describe('字段类型为 HREF 时，该参数定义 PC 端 URL').optional(),
                option_id: z
                  .string()
                  .describe('字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数定义选项 ID')
                  .optional(),
                generic_user: z
                  .object({
                    id: z
                      .string()
                      .describe(
                        '引用人员的用户 ID。- ID 类型与查询参数 `user_id_type` 的取值保持一致。- 如何获取用户 ID 可参见',
                      ),
                    type: z.number().describe('用户类型。**可选值有**：1：用户**说明**：目前仅支持取值 1，表示用户'),
                  })
                  .describe('字段类型为 GENERIC_USER 时，该参数定义引用人员')
                  .optional(),
              })
              .describe('自定义字段取值')
              .optional(),
          }),
        )
        .describe(
          '自定义字段。设置参数前建议你先了解。**注意事项**：当企业管理员在管理后台配置了自定义字段，且开启了 **允许开放平台 API 调用** 功能后，该字段才会生效',
        )
        .optional(),
      enterprise_email: z
        .string()
        .describe(
          '企业邮箱。 **注意事项**：企业管理员在管理后台启用飞书邮箱服务后，才会生效该参数。如果设置企业邮箱失败，请联系企业管理员确认是否在管理后台启用了相应的企业邮箱域名',
        )
        .optional(),
      job_title: z
        .string()
        .describe(
          '职务名称。字符数量上限为 255。- 你可以调用接口获取相应的租户名称。- 如果传入的职务名称不存在，则系统会自动创建并使用该名称。职务枚举值数量上限为 10,000',
        )
        .optional(),
      is_frozen: z.boolean().describe('是否是暂停状态的用户。**可选值有**：- true：是- false：否').optional(),
      job_level_id: z
        .string()
        .describe(
          '职级 ID。你可以调用接口查询相应的职级 ID',
        )
        .optional(),
      job_family_id: z
        .string()
        .describe(
          '序列 ID。你可以调用接口查询相应的序列 ID',
        )
        .optional(),
      subscription_ids: z
        .array(z.string())
        .describe(
          '分配给用户的席位 ID 列表。**注意事项**：- 该字段需开通 **分配用户席位** 权限。- 你可通过接口，获取到当前租户的可用席位 ID',
        )
        .optional(),
      dotted_line_leader_user_ids: z
        .array(z.string())
        .describe(
          '虚线上级的用户 ID 列表。- ID 类型与查询参数 `user_id_type` 的取值保持一致。- 如何获取用户 ID 可参见',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({ user_id: z.string().describe('用户 ID，ID 类型需要与查询参数中的 user_id_type 类型保持一致') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3UserResurrect = {
  project: 'contact',
  name: 'contact.v3.user.resurrect',
  sdkName: 'contact.v3.user.resurrect',
  path: '/open-apis/contact/v3/users/:user_id/resurrect',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-通讯录-用户-恢复已删除用户-该接口用于恢复已删除用户（已离职的成员）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      departments: z
        .array(
          z.object({
            department_id: z
              .string()
              .describe(
                '排序信息对应的部门 ID。表示用户所在的、且需要排序的部门。部门 ID 类型与查询参数 `department_id_type` 保持一致。了解不同类型的部门 ID 以及获取部门 ID 的方式，可参见 ',
              ),
            user_order: z.number().describe('用户在其直属部门内的排序。数值越大，排序越靠前').optional(),
            department_order: z.number().describe('用户所属的多个部门之间的排序。数值越大，排序越靠前').optional(),
          }),
        )
        .describe(
          '用户排序信息。用户可能存在多个部门中，且有不同的排序，该参数用于设置用户部门排序。**说明**：如果请求时不传入 departments 参数，则用户将恢复至根部门',
        )
        .optional(),
      subscription_ids: z
        .array(z.string())
        .describe(
          '如果用户正常状态时分配了席位，则可以通过该参数指定恢复后分配的席位 ID。**注意**：- 该字段需开通 **分配用户席位** 权限',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。)',
        )
        .optional(),
    }),
    path: z.object({
      user_id: z
        .string()
        .describe(
          '用户 ID。ID 类型需要与查询参数中的 user_id_type类型保持一致。用户 ID 获取方式可参见',
        ),
    }),
  },
};
export const contactV3UserUpdate = {
  project: 'contact',
  name: 'contact.v3.user.update',
  sdkName: 'contact.v3.user.update',
  path: '/open-apis/contact/v3/users/:user_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-历史版本（不推荐）-通讯录-用户管理-更新用户所有信息-该接口用于更新通讯录中用户的字段',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('用户名'),
      en_name: z.string().describe('英文名').optional(),
      nickname: z.string().describe('别名').optional(),
      email: z.string().describe('邮箱注意：1. 非中国大陆手机号成员必须同时添加邮箱2. 邮箱不可重复').optional(),
      mobile: z
        .string()
        .describe(
          '手机号注意：1. 在本企业内不可重复2. 未认证企业仅支持添加中国大陆手机号，通过飞书认证的企业允许添加海外手机号3. 国际电话区号前缀中必须包含加号 +4. 该 mobile 字段在海外版飞书非必填',
        ),
      mobile_visible: z
        .boolean()
        .describe(
          '手机号码可见性，true 为可见，false 为不可见，目前默认为 true。不可见时，组织员工将无法查看该员工的手机号码',
        )
        .optional(),
      gender: z.number().describe('性别 Options:0(unkown 保密),1(male 男),2(female 女)').optional(),
      avatar_key: z
        .string()
        .describe(
          '头像的文件Key，可通过“消息与群组/消息/图片信息”中的“上传图片”接口上传并获取头像文件 Key“上传图片”功能参见',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '用户所属部门的ID列表，一个用户可属于多个部门。ID值的类型与查询参数中的department_id_type 对应。不同 ID 的说明与department_id的获取方式参见 ',
        ),
      leader_user_id: z
        .string()
        .describe(
          '用户的直接主管的用户ID，ID值与查询参数中的user_id_type 对应。不同 ID 的说明参见 获取方式参见',
        )
        .optional(),
      city: z.string().describe('工作城市').optional(),
      country: z
        .string()
        .describe(
          '国家或地区Code缩写，具体写入格式请参考 ',
        )
        .optional(),
      work_station: z.string().describe('工位').optional(),
      join_time: z.number().describe('入职时间，时间戳格式，表示从1970年1月1日开始所经过的秒数').optional(),
      employee_no: z.string().describe('工号').optional(),
      employee_type: z
        .number()
        .describe(
          '员工类型，可选值有：- `1`：正式员工- `2`：实习生- `3`：外包- `4`：劳务- `5`：顾问 同时可读取到自定义员工类型的 int 值，可通过下方接口获取到该租户的自定义员工类型的名称，参见',
        ),
      orders: z
        .array(
          z.object({
            department_id: z
              .string()
              .describe(
                '排序信息对应的部门ID， ID值与查询参数中的department_id_type 对应。表示用户所在的、且需要排序的部门。不同 ID 的说明参见及获取方式参见 ',
              )
              .optional(),
            user_order: z.number().describe('用户在其直属部门内的排序，数值越大，排序越靠前').optional(),
            department_order: z.number().describe('用户所属的多个部门间的排序，数值越大，排序越靠前').optional(),
            is_primary_dept: z
              .boolean()
              .describe('标识用户的唯一主部门，主部门为用户所属部门中排序第一的部门(department_order最大)')
              .optional(),
          }),
        )
        .describe('用户排序信息。用于标记通讯录下组织架构的人员顺序，人员可能存在多个部门中，且有不同的排序')
        .optional(),
      custom_attrs: z
        .array(
          z.object({
            type: z
              .string()
              .describe(
                '自定义字段类型 - `TEXT`：文本- `HREF`：网页- `ENUMERATION`：枚举- `PICTURE_ENUM`：图片- `GENERIC_USER`：用户具体说明参见常见问题的',
              )
              .optional(),
            id: z.string().describe('自定义字段ID').optional(),
            value: z
              .object({
                text: z
                  .string()
                  .describe('字段类型为`TEXT`时该参数定义字段值，必填；字段类型为`HREF`时该参数定义网页标题，必填')
                  .optional(),
                url: z
                  .string()
                  .describe('字段类型为 HREF 时，该参数定义默认 URL，例如手机端跳转小程序，PC端跳转网页')
                  .optional(),
                pc_url: z.string().describe('字段类型为 HREF 时，该参数定义PC端 URL').optional(),
                option_id: z
                  .string()
                  .describe('字段类型为 ENUMERATION 或 PICTURE_ENUM 时，该参数定义选项值')
                  .optional(),
                generic_user: z
                  .object({
                    id: z
                      .string()
                      .describe(
                        '用户的user_id ，具体参见',
                      ),
                    type: z.number().describe('用户类型: 1：用户目前固定为1，表示用户类型'),
                  })
                  .describe('字段类型为 GENERIC_USER 时，该参数定义引用人员')
                  .optional(),
              })
              .describe('自定义字段取值')
              .optional(),
          }),
        )
        .describe(
          '自定义字段，请确保你的组织管理员已在管理后台/组织架构/成员字段管理/自定义字段管理/全局设置中开启了“允许开放平台 API 调用“，否则该字段不会生效/返回。更多详情参见',
        )
        .optional(),
      enterprise_email: z
        .string()
        .describe(
          '企业邮箱，请先确保已在管理后台启用飞书邮箱服务创建用户时，企业邮箱的使用方式参见',
        )
        .optional(),
      job_title: z.string().describe('职务').optional(),
      is_frozen: z.boolean().describe('是否暂停用户').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ user_id: z.string().describe('用户ID，需要与查询参数中的user_id_type类型保持一致') }),
  },
};
export const contactV3UserUpdateUserId = {
  project: 'contact',
  name: 'contact.v3.user.updateUserId',
  sdkName: 'contact.v3.user.updateUserId',
  path: '/open-apis/contact/v3/users/:user_id/update_user_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-通讯录-用户-更新用户 ID-调用该接口更新用户的 user_id',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ new_user_id: z.string().describe('自定义新的用户 user_id。长度不能超过 64 字符') }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ user_id: z.string().describe('用户 ID，ID 类型与查询参数 user_id_type 的取值保持一致') }),
  },
};
export const contactV3WorkCityGet = {
  project: 'contact',
  name: 'contact.v3.workCity.get',
  sdkName: 'contact.v3.workCity.get',
  path: '/open-apis/contact/v3/work_cities/:work_city_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-工作城市-获取单个工作城市信息-调用该接口获取指定工作城市的信息，包括工作城市的 ID、名称、多语言名称以及启用状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      work_city_id: z
        .string()
        .describe(
          '工作城市 ID。你可以调用接口，获取工作城市 ID',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const contactV3WorkCityList = {
  project: 'contact',
  name: 'contact.v3.workCity.list',
  sdkName: 'contact.v3.workCity.list',
  path: '/open-apis/contact/v3/work_cities',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-通讯录-工作城市-获取租户工作城市列表-调用该接口获取当前租户下所有工作城市信息，包括工作城市的 ID、名称、多语言名称以及启用状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于限制一次请求所返回的数据条目数').optional(),
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
export const contactV3Tools = [
  contactV3CustomAttrList,
  contactV3DepartmentBatch,
  contactV3DepartmentChildren,
  contactV3DepartmentCreate,
  contactV3DepartmentDelete,
  contactV3DepartmentGet,
  contactV3DepartmentList,
  contactV3DepartmentParent,
  contactV3DepartmentPatch,
  contactV3DepartmentSearch,
  contactV3DepartmentUnbindDepartmentChat,
  contactV3DepartmentUpdate,
  contactV3DepartmentUpdateDepartmentId,
  contactV3EmployeeTypeEnumCreate,
  contactV3EmployeeTypeEnumDelete,
  contactV3EmployeeTypeEnumList,
  contactV3EmployeeTypeEnumUpdate,
  contactV3FunctionalRoleCreate,
  contactV3FunctionalRoleDelete,
  contactV3FunctionalRoleMemberBatchCreate,
  contactV3FunctionalRoleMemberBatchDelete,
  contactV3FunctionalRoleMemberGet,
  contactV3FunctionalRoleMemberList,
  contactV3FunctionalRoleMemberScopes,
  contactV3FunctionalRoleUpdate,
  contactV3GroupCreate,
  contactV3GroupDelete,
  contactV3GroupGet,
  contactV3GroupMemberBelong,
  contactV3GroupMemberAdd,
  contactV3GroupMemberBatchAdd,
  contactV3GroupMemberBatchRemove,
  contactV3GroupMemberRemove,
  contactV3GroupMemberSimplelist,
  contactV3GroupPatch,
  contactV3GroupSimplelist,
  contactV3JobFamilyCreate,
  contactV3JobFamilyDelete,
  contactV3JobFamilyGet,
  contactV3JobFamilyList,
  contactV3JobFamilyUpdate,
  contactV3JobLevelCreate,
  contactV3JobLevelDelete,
  contactV3JobLevelGet,
  contactV3JobLevelList,
  contactV3JobLevelUpdate,
  contactV3JobTitleGet,
  contactV3JobTitleList,
  contactV3ScopeList,
  contactV3UnitBindDepartment,
  contactV3UnitCreate,
  contactV3UnitDelete,
  contactV3UnitGet,
  contactV3UnitList,
  contactV3UnitListDepartment,
  contactV3UnitPatch,
  contactV3UnitUnbindDepartment,
  contactV3UserBatch,
  contactV3UserBatchGetId,
  contactV3UserCreate,
  contactV3UserDelete,
  contactV3UserFindByDepartment,
  contactV3UserGet,
  contactV3UserList,
  contactV3UserPatch,
  contactV3UserResurrect,
  contactV3UserUpdate,
  contactV3UserUpdateUserId,
  contactV3WorkCityGet,
  contactV3WorkCityList,
];
