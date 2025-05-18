import { z } from 'zod';
export type bitableV1ToolName =
  | 'bitable.v1.app.copy'
  | 'bitable.v1.app.create'
  | 'bitable.v1.appDashboard.copy'
  | 'bitable.v1.appDashboard.list'
  | 'bitable.v1.app.get'
  | 'bitable.v1.appRole.create'
  | 'bitable.v1.appRole.delete'
  | 'bitable.v1.appRole.list'
  | 'bitable.v1.appRoleMember.batchCreate'
  | 'bitable.v1.appRoleMember.batchDelete'
  | 'bitable.v1.appRoleMember.create'
  | 'bitable.v1.appRoleMember.delete'
  | 'bitable.v1.appRoleMember.list'
  | 'bitable.v1.appRole.update'
  | 'bitable.v1.appTable.batchCreate'
  | 'bitable.v1.appTable.batchDelete'
  | 'bitable.v1.appTable.create'
  | 'bitable.v1.appTable.delete'
  | 'bitable.v1.appTableField.create'
  | 'bitable.v1.appTableField.delete'
  | 'bitable.v1.appTableField.list'
  | 'bitable.v1.appTableField.update'
  | 'bitable.v1.appTableFormField.list'
  | 'bitable.v1.appTableFormField.patch'
  | 'bitable.v1.appTableForm.get'
  | 'bitable.v1.appTableForm.patch'
  | 'bitable.v1.appTable.list'
  | 'bitable.v1.appTable.patch'
  | 'bitable.v1.appTableRecord.batchCreate'
  | 'bitable.v1.appTableRecord.batchDelete'
  | 'bitable.v1.appTableRecord.batchGet'
  | 'bitable.v1.appTableRecord.batchUpdate'
  | 'bitable.v1.appTableRecord.create'
  | 'bitable.v1.appTableRecord.delete'
  | 'bitable.v1.appTableRecord.get'
  | 'bitable.v1.appTableRecord.list'
  | 'bitable.v1.appTableRecord.search'
  | 'bitable.v1.appTableRecord.update'
  | 'bitable.v1.appTableView.create'
  | 'bitable.v1.appTableView.delete'
  | 'bitable.v1.appTableView.get'
  | 'bitable.v1.appTableView.list'
  | 'bitable.v1.appTableView.patch'
  | 'bitable.v1.app.update'
  | 'bitable.v1.appWorkflow.list'
  | 'bitable.v1.appWorkflow.update';
export const bitableV1AppCopy = {
  project: 'bitable',
  name: 'bitable.v1.app.copy',
  sdkName: 'bitable.v1.app.copy',
  path: '/open-apis/bitable/v1/apps/:app_token/copy',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-多维表格-复制多维表格-复制一个多维表格，可以指定复制到某个有权限的文件夹下',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('多维表格 App 的名称').optional(),
      folder_token: z
        .string()
        .describe(
          '了解如何获取文件夹 Token，参考。**注意**：请确保调用身份拥有在该文件夹中的编辑权限。若应用使用的是 `tenant_access_token` 权限，此处仅可指定应用创建的文件夹。详情参考',
        )
        .optional(),
      without_content: z
        .boolean()
        .describe('是否复制多维表格中的内容，默认 false，即复制多维表格中的内容。可取值：* true：不复制* false：复制')
        .optional(),
      time_zone: z
        .string()
        .describe('文档时区，详情参考')
        .optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppCreate = {
  project: 'bitable',
  name: 'bitable.v1.app.create',
  sdkName: 'bitable.v1.app.create',
  path: '/open-apis/bitable/v1/apps',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-多维表格-创建多维表格-在指定文件夹中创建一个多维表格，包含一个空白的数据表',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('多维表格 App 名称。最长为 255 个字符').optional(),
      folder_token: z
        .string()
        .describe(
          '多维表格 App 归属文件夹。默认为空，表示多维表格将被创建在云空间根目录。了解如何获取文件夹 Token，参考。**注意**：请确保调用身份拥有在该文件夹中的编辑权限。若应用使用的是 `tenant_access_token` 权限，此处仅可指定应用创建的文件夹。详情参考',
        )
        .optional(),
      time_zone: z
        .string()
        .describe('文档时区，详情参考')
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppDashboardCopy = {
  project: 'bitable',
  name: 'bitable.v1.appDashboard.copy',
  sdkName: 'bitable.v1.appDashboard.copy',
  path: '/open-apis/bitable/v1/apps/:app_token/dashboards/:block_id/copy',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-多维表格-仪表盘-复制仪表盘-基于现有仪表盘复制出新的仪表盘',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ name: z.string().describe('新的仪表盘名称') }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      block_id: z
        .string()
        .describe(
          '多维表格仪表盘的唯一标识，以 blk 开头。获取方式：- 在多维表格的 URL 地址栏中，`block_id` 是下图中高亮部分：  - 通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppDashboardList = {
  project: 'bitable',
  name: 'bitable.v1.appDashboard.list',
  sdkName: 'bitable.v1.appDashboard.list',
  path: '/open-apis/bitable/v1/apps/:app_token/dashboards',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-仪表盘-列出仪表盘-获取多维表格中的所有仪表盘',
  accessTokens: ['tenant', 'user'],
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
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppGet = {
  project: 'bitable',
  name: 'bitable.v1.app.get',
  sdkName: 'bitable.v1.app.get',
  path: '/open-apis/bitable/v1/apps/:app_token',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-多维表格-多维表格-获取多维表格元数据-获取指定多维表格的元数据信息，包括多维表格名称、多维表格版本号、多维表格是否开启高级权限等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleCreate = {
  project: 'bitable',
  name: 'bitable.v1.appRole.create',
  sdkName: 'bitable.v1.appRole.create',
  path: '/open-apis/bitable/v1/apps/:app_token/roles',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-多维表格-自定义角色-新增自定义角色-新增多维表格高级权限中自定义的角色',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      role_name: z.string().describe('自定义角色名称'),
      table_roles: z
        .array(
          z.object({
            table_perm: z
              .number()
              .describe(
                '数据表权限。**提示**：**协作者可编辑自己的记录** 和 **可编辑指定字段** 是 **可编辑记录** 的特殊情况，可通过指定 `rec_rule` 或 `field_perm` 参数实现相同的效果。 Options:0(NoPerm 无权限),1(Read 仅可阅读),2(Edit 可编辑记录),4(Admin 可编辑字段和记录)',
              ),
            table_name: z.string().describe('数据表名称').optional(),
            table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
            rec_rule: z
              .object({
                conditions: z
                  .array(
                    z.object({
                      field_name: z
                        .string()
                        .describe('条件字段的名称。记录筛选条件是“创建人包含访问者本人”时，此参数值为 ""'),
                      operator: z
                        .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                        .describe(
                          '条件运算符 Options:is(等于),isNot(不等于),contains(包含),doesNotContain(不包含),isEmpty(为空),isNotEmpty(不为空)',
                        )
                        .optional(),
                      value: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可编辑或可阅读的记录'),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
                other_perm: z
                  .number()
                  .describe('其他记录权限，仅当 `table_perm` 为 2 时生效。 Options:0(NoPerm 禁止查看),1(Read 仅可阅读)')
                  .optional(),
              })
              .describe('记录筛选条件，当 `table_perm` 为 1 或 2 时生效。用于指定可编辑或可阅读的记录')
              .optional(),
            field_perm: z
              .record(z.any())
              .describe(
                '字段权限，仅在 `table_perm` 为 2 时生效。用于设置字段可编辑或可阅读。类型为 map，key 是字段名称，value 是字段权限。value 枚举值有：- `1`：可阅读- `2`：可编辑',
              )
              .optional(),
            allow_add_record: z
              .boolean()
              .describe('新增记录权限，仅当 `table_perm` 为 2 时生效。用于设置记录是否可以新增')
              .optional(),
            allow_delete_record: z
              .boolean()
              .describe('删除记录权限，仅当 `table_perm` 为 2 时生效。用于设置记录是否可以删除')
              .optional(),
          }),
        )
        .describe('针对数据表的权限设置'),
      block_roles: z
        .array(
          z.object({
            block_id: z
              .string()
              .describe(
                '多维表格仪表盘的唯一标识，以 blk 开头。获取方式：- 在多维表格的 URL 地址栏中，`block_id` 是下图中高亮部分：  - 通过接口获取',
              ),
            block_perm: z.number().describe('仪表盘的权限 Options:0(NoPerm 无权限),1(Read 可阅读)'),
          }),
        )
        .describe('针对仪表盘的权限设置')
        .optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleDelete = {
  project: 'bitable',
  name: 'bitable.v1.appRole.delete',
  sdkName: 'bitable.v1.appRole.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-多维表格-高级权限-自定义角色-删除自定义角色-删除多维表格高级权限中自定义的角色',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleList = {
  project: 'bitable',
  name: 'bitable.v1.appRole.list',
  sdkName: 'bitable.v1.appRole.list',
  path: '/open-apis/bitable/v1/apps/:app_token/roles',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-自定义角色-列出自定义角色-列出多维表格高级权限中用户自定义的角色',
  accessTokens: ['tenant', 'user'],
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
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleMemberBatchCreate = {
  project: 'bitable',
  name: 'bitable.v1.appRoleMember.batchCreate',
  sdkName: 'bitable.v1.appRoleMember.batchCreate',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-多维表格-高级权限-协作者-批量新增协作者-批量新增多维表格高级权限中自定义角色的协作者',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      member_list: z
        .array(
          z.object({
            type: z
              .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
              .describe(
                '协作者 ID 的类型 Options:open_id(OpenID 以 open_id 来识别协作者。获取方式参考。),union_id(UnionID 以 union_id 来识别协作者。获取方式参考),user_id(UserID 以 user_id 来识别协作者。获取方式参考),chat_id(ChatID 以 chat_id 来识别协作者。获取方式参考),department_id(DepartmentID 以 department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 department_id 方式参考),open_department_id(OpenDepartmentID 以 open_department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 open_department_id 方式参考)',
              )
              .optional(),
            id: z.string().describe('协作者的 ID，需与 type 的类型需一致。获取 ID 方式参考 type 参数描述'),
          }),
        )
        .describe('协作者列表'),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleMemberBatchDelete = {
  project: 'bitable',
  name: 'bitable.v1.appRoleMember.batchDelete',
  sdkName: 'bitable.v1.appRoleMember.batchDelete',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/batch_delete',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-多维表格-高级权限-协作者-批量删除协作者-删除多维表格高级权限中自定义角色的协作者',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      member_list: z
        .array(
          z.object({
            type: z
              .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
              .describe(
                '协作者 ID 类型 Options:open_id(OpenID 以 open_id 来识别协作者。获取方式参考),union_id(UnionID 以 union_id 来识别协作者。获取方式参考),user_id(UserID 以 user_id 来识别协作者。获取方式参考),chat_id(ChatID 以 chat_id 来识别协作者。获取方式参考),department_id(DepartmentID 以 department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 department_id 方式参考),open_department_id(OpenDepartmentID 以 open_department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 open_department_id 方式参考)',
              )
              .optional(),
            id: z.string().describe('协作者的 ID，需与 type 的类型需一致。获取 ID 方式参考 type 参数描述'),
          }),
        )
        .describe('协作者列表'),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleMemberCreate = {
  project: 'bitable',
  name: 'bitable.v1.appRoleMember.create',
  sdkName: 'bitable.v1.appRoleMember.create',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-多维表格-高级权限-协作者-新增协作者-新增多维表格高级权限中自定义角色的协作者',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      member_id: z
        .string()
        .describe(
          '高级权限中自定义角色协作者的 ID，需与查询参数中 member_id_type 的类型需一致。获取 ID 方式参考 member_id_type 参数描述',
        ),
    }),
    params: z.object({
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
        .describe(
          '协作者 ID 的类型 Options:open_id(OpenID 以 open_id 来识别协作者。获取方式参考),union_id(UnionID 以 union_id 来识别协作者。获取方式参考),user_id(UserID 以 user_id 来识别协作者。获取方式参考),chat_id(ChatID 以 chat_id 来识别协作者。获取方式参考),department_id(DepartmentID 以 department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 department_id 方式参考),open_department_id(OpenDepartmentID 以 open_department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 open_department_id 方式参考)',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleMemberDelete = {
  project: 'bitable',
  name: 'bitable.v1.appRoleMember.delete',
  sdkName: 'bitable.v1.appRoleMember.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members/:member_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-多维表格-高级权限-协作者-删除协作者-删除多维表格高级权限中自定义角色的协作者',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      member_id_type: z
        .enum(['open_id', 'union_id', 'user_id', 'chat_id', 'department_id', 'open_department_id'])
        .describe(
          '协作者 ID 的类型 Options:open_id(OpenID 以 open_id 来识别协作者。获取方式参考),union_id(UnionID 以 union_id 来识别协作者。获取方式参考),user_id(UserID 以 user_id 来识别协作者。获取方式参考),chat_id(ChatID 以 chat_id 来识别协作者。获取方式参考),department_id(DepartmentID 以 department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 department_id 方式参考),open_department_id(OpenDepartmentID 以 open_department_id 来识别协作者。调用前，请确保应用有部门的可见性，参考。获取 open_department_id 方式参考)',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        )
        .optional(),
      member_id: z
        .string()
        .describe(
          '高级权限中自定义角色协作者的 ID，需与查询参数中 member_id_type 的类型需一致。获取 ID 方式参考 member_id_type 参数描述',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleMemberList = {
  project: 'bitable',
  name: 'bitable.v1.appRoleMember.list',
  sdkName: 'bitable.v1.appRoleMember.list',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id/members',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-多维表格-高级权限-协作者-列出协作者-列出多维表格高级权限中自定义角色的协作者',
  accessTokens: ['tenant', 'user'],
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
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppRoleUpdate = {
  project: 'bitable',
  name: 'bitable.v1.appRole.update',
  sdkName: 'bitable.v1.appRole.update',
  path: '/open-apis/bitable/v1/apps/:app_token/roles/:role_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-云文档-多维表格-自定义角色-更新自定义角色-更新多维表格高级权限中自定义的角色',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      role_name: z.string().describe('自定义角色名称'),
      table_roles: z
        .array(
          z.object({
            table_perm: z
              .number()
              .describe(
                '数据表权限。**提示**：**协作者可编辑自己的记录** 和 **可编辑指定字段** 是 **可编辑记录** 的特殊情况，可通过指定 `rec_rule` 或 `field_perm` 参数实现相同的效果。 Options:0(NoPerm 无权限),1(Read 可阅读),2(Edit 可编辑记录),4(Admin 可编辑字段和记录)',
              ),
            table_name: z.string().describe('数据表名称').optional(),
            table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
            rec_rule: z
              .object({
                conditions: z
                  .array(
                    z.object({
                      field_name: z
                        .string()
                        .describe('条件字段的名称。记录筛选条件是“创建人包含访问者本人”时，此参数值为 ""'),
                      operator: z
                        .enum(['is', 'isNot', 'contains', 'doesNotContain', 'isEmpty', 'isNotEmpty'])
                        .describe(
                          '条件运算符 Options:is(等于),isNot(不等于),contains(包含),doesNotContain(不包含),isEmpty(为空),isNotEmpty(不为空)',
                        )
                        .optional(),
                      value: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可编辑或可阅读的记录'),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
                other_perm: z
                  .number()
                  .describe('其他记录权限，仅当 `table_perm` 为 2 时生效。 Options:0(NoPerm 禁止查看),1(Read 仅可阅读)')
                  .optional(),
              })
              .describe('记录筛选条件，当 `table_perm` 为 1 或 2 时生效。用于指定可编辑或可阅读的记录')
              .optional(),
            field_perm: z
              .record(z.any())
              .describe(
                '字段权限，仅在 `table_perm` 为 2 时生效。用于设置字段可编辑或可阅读。类型为 map，key 是字段名称，value 是字段权限。value 枚举值有：- `1`：可阅读- `2`：可编辑',
              )
              .optional(),
            allow_add_record: z
              .boolean()
              .describe('新增记录权限，仅当 `table_perm` 为 2 时生效。用于设置记录是否可以新增')
              .optional(),
            allow_delete_record: z
              .boolean()
              .describe('删除记录权限，仅当 `table_perm` 为 2 时生效。用于设置记录是否可以删除')
              .optional(),
          }),
        )
        .describe('针对数据表的权限设置'),
      block_roles: z
        .array(
          z.object({
            block_id: z
              .string()
              .describe(
                '多维表格仪表盘的唯一标识，以 blk 开头。获取方式：- 在多维表格的 URL 地址栏中，`block_id` 是下图中高亮部分：  - 通过接口获取',
              ),
            block_perm: z.number().describe('仪表盘的权限 Options:0(NoPerm 无权限),1(Read 可阅读)'),
          }),
        )
        .describe('针对仪表盘的权限设置')
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableBatchCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTable.batchCreate',
  sdkName: 'bitable.v1.appTable.batchCreate',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/batch_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-数据表-新增多个数据表-新增多个数据表，仅可指定数据表名称。最多支持新增 100 个数据表',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      tables: z
        .array(
          z.object({
            name: z
              .string()
              .describe(
                '数据表名称。**注意**：- 名称中的首尾空格将会被默认去除。- 数据表名称不可以包含 `/ \\ ? * : [ ]` 等特殊字符',
              )
              .optional(),
          }),
        )
        .describe('tables')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableBatchDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTable.batchDelete',
  sdkName: 'bitable.v1.appTable.batchDelete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-数据表-删除多个数据表-删除多个数据表。如果多维表格中只剩最后一张数据表，则不允许被删除',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      table_ids: z
        .array(z.string())
        .describe(
          '待删除的数据表的 ID。当前一次操作最多支持 50 个数据表。获取方式：- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`。- 也可通过接口获取 `table_id`。 ',
        )
        .optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTable.create',
  sdkName: 'bitable.v1.appTable.create',
  path: '/open-apis/bitable/v1/apps/:app_token/tables',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-数据表-新增一个数据表-新增一个数据表，默认仅包含索引字段，也可以指定更多字段。最多支持新增 100 个数据表',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      table: z
        .object({
          name: z
            .string()
            .describe(
              '数据表名称。该字段必填。**注意**：- 名称中的首尾空格将会被默认去除。- 数据表名称不可以包含 `/ \\ ? * : [ ]` 等特殊字符',
            )
            .optional(),
          default_view_name: z
            .string()
            .describe(
              '默认表格视图的名称，不填则默认为“表格视图 1”。注意：- 名称中的首尾空格将会被去除。- 名称中不允许包含 [ ] 两个字符',
            )
            .optional(),
          fields: z
            .array(
              z.object({
                field_name: z.string().describe('字段名称'),
                type: z
                  .number()
                  .describe(
                    '字段类型。不支持新增 19 查找引用字段类型。 Options:1(Text 文本),2(Number 数字),3(SingleSelect 单选),4(MultiSelect 多选),5(DateTime 日期),7(Checkbox 复选框),11(User 人员),13(PhoneNumber 电话号码),15(Url 超链接),17(Attachment 附件),18(Link 单向关联),20(Formula 公式),21(DuplexLink 双向关联),22(Location 地理位置),23(GroupChat 群组),1001(CreatedTime 创建时间),1002(ModifiedTime 最后更新时间),1003(CreatedUser 创建人),1004(ModifiedUser 修改人),1005(AutoSerial 自动编号)',
                  ),
                ui_type: z
                  .enum([
                    'Text',
                    'Barcode',
                    'Number',
                    'Progress',
                    'Currency',
                    'Rating',
                    'SingleSelect',
                    'MultiSelect',
                    'DateTime',
                    'Checkbox',
                    'User',
                    'GroupChat',
                    'Phone',
                    'Url',
                    'Attachment',
                    'SingleLink',
                    'Formula',
                    'DuplexLink',
                    'Location',
                    'CreatedTime',
                    'ModifiedTime',
                    'CreatedUser',
                    'ModifiedUser',
                    'AutoNumber',
                  ])
                  .describe(
                    '字段在界面上的展示类型，例如 Progress 进度字段是数字的一种展示形态 Options:Text(文本),Barcode(条码),Number(数字),Progress(进度),Currency(货币),Rating(评分),SingleSelect(单选),MultiSelect(多选),DateTime(日期),Checkbox(复选框),User(人员),GroupChat(群组),Phone(电话号码),Url(超链接),Attachment(附件),SingleLink(单向关联),Formula(公式),DuplexLink(双向关联),Location(地理位置),CreatedTime(创建时间),ModifiedTime(最后更新时间),CreatedUser(创建人),ModifiedUser(修改人),AutoNumber(自动编号)',
                  )
                  .optional(),
                property: z
                  .object({
                    options: z
                      .array(
                        z.object({
                          name: z.string().describe('选项名').optional(),
                          id: z.string().describe('选项 ID，创建时不可指定 ID').optional(),
                          color: z
                            .number()
                            .describe(
                              '选项颜色，详情参考',
                            )
                            .optional(),
                        }),
                      )
                      .describe('单选、多选字段的选项信息')
                      .optional(),
                    formatter: z
                      .string()
                      .describe(
                        '数字、公式字段的显示格式。详情参考',
                      )
                      .optional(),
                    date_formatter: z
                      .string()
                      .describe(
                        '日期、创建时间、最后更新时间字段的显示格式。详情参考',
                      )
                      .optional(),
                    auto_fill: z.boolean().describe('日期字段中新纪录自动填写创建时间').optional(),
                    multiple: z
                      .boolean()
                      .describe('人员字段中允许添加多个成员，单向关联、双向关联中允许添加多个记录')
                      .optional(),
                    table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
                    table_name: z.string().describe('单向关联、双向关联字段中关联的数据表的名字').optional(),
                    back_field_name: z
                      .string()
                      .describe('双向关联字段中关联的数据表中对应的双向关联字段的名字')
                      .optional(),
                    auto_serial: z
                      .object({
                        type: z
                          .enum(['custom', 'auto_increment_number'])
                          .describe(
                            '自动编号类型 Options:custom(自定义编号),auto_increment_number(AutoIncrementNumber 自增数字)',
                          ),
                        options: z
                          .array(
                            z.object({
                              type: z
                                .enum(['system_number', 'fixed_text', 'created_time'])
                                .describe(
                                  '自动编号的可选规则项类型 Options:system_number(SystemNumber 自增数字位,value范围1-9),fixed_text(FixedText 固定字符，最大长度：20),created_time(CreatedTime 创建时间，支持格式 "yyyyMMdd"、"yyyyMM"、"yyyy"、"MMdd"、"MM"、"dd")',
                                ),
                              value: z.string().describe('与自动编号的可选规则项类型相对应的取值'),
                            }),
                          )
                          .describe('自动编号规则列表')
                          .optional(),
                      })
                      .describe('自动编号类型')
                      .optional(),
                    location: z
                      .object({
                        input_type: z
                          .enum(['only_mobile', 'not_limit'])
                          .describe(
                            '地理位置输入限制 Options:only_mobile(OnlyMobile 只允许移动端上传),not_limit(NotLimit 无限制)',
                          ),
                      })
                      .describe('地理位置输入方式')
                      .optional(),
                    formula_expression: z.string().describe('公式字段的表达式').optional(),
                    allowed_edit_modes: z
                      .object({
                        manual: z.boolean().describe('是否允许手动录入').optional(),
                        scan: z.boolean().describe('是否允许移动端录入').optional(),
                      })
                      .describe('字段支持的编辑模式')
                      .optional(),
                    min: z.number().describe('进度、评分等字段的数据范围最小值').optional(),
                    max: z.number().describe('进度、评分等字段的数据范围最大值').optional(),
                    range_customize: z.boolean().describe('进度等字段是否支持自定义范围').optional(),
                    currency_code: z.string().describe('货币币种').optional(),
                    rating: z
                      .object({ symbol: z.string().describe('评分字段的符号展示').optional() })
                      .describe('评分字段的相关设置')
                      .optional(),
                  })
                  .describe('字段属性')
                  .optional(),
                description: z
                  .object({
                    disable_sync: z
                      .boolean()
                      .describe('是否禁止同步，如果为true，表示禁止同步该描述内容到表单的问题描述')
                      .optional(),
                    text: z.string().describe('字段描述内容，支持换行').optional(),
                  })
                  .describe('字段的描述')
                  .optional(),
              }),
            )
            .describe(
              '数据表的初始字段。了解如何填写字段，参考。**注意**：- 如果 `default_view_name` 字段和 `fields` 字段都不填写，将会创建一个仅包含索引字段的空数据表。- 如果指定了本字段，将会创建一个包含初始字段的数据表、且默认第一个字段为索引字段。- 索引字段仅支持以下类型： - 1：多行文本 - 2：数字 - 5：日期 - 13：电话号码 - 15：超链接 - 20：公式 - 22：地理位置',
            )
            .optional(),
        })
        .describe('数据表')
        .optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTable.delete',
  sdkName: 'bitable.v1.appTable.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-云文档-多维表格-数据表-删除一个数据表-删除一个数据表，如果多维表格中只剩最后一张数据表，则不允许被删除',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFieldCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTableField.create',
  sdkName: 'bitable.v1.appTableField.create',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-多维表格-字段-新增字段-在多维表格数据表中新增一个字段',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      field_name: z.string().describe('多维表格字段名称。名称中的首尾空格将会被去除'),
      type: z
        .number()
        .describe(
          '要新增的字段类型。不支持新增 19 查找引用字段类型。 Options:1(Text 文本),2(Number 数字),3(SingleSelect 单选),4(MultiSelect 多选),5(DateTime 日期),7(Checkbox 复选框),11(User 人员),13(PhoneNumber 电话号码),15(Url 超链接),17(Attachment 附件),18(Link 单项关联),20(Formula 公式（不支持设置公式表达式）),21(DuplexLink 双向关联),22(Location 地理位置),23(GroupChat 群组),1001(CreatedTime 创建时间),1002(ModifiedTime 最后更新时间),1003(CreatedUser 创建人),1004(ModifiedUser 修改人),1005(AutoSerial 自动编号)',
        ),
      property: z
        .object({
          options: z
            .array(
              z.object({
                name: z.string().describe('选项名称').optional(),
                id: z.string().describe('选项 ID，创建字段时不允许指定 ID').optional(),
                color: z
                  .number()
                  .describe(
                    '选项颜色，详情参考',
                  )
                  .optional(),
              }),
            )
            .describe('单选、多选字段的选项信息')
            .optional(),
          formatter: z
            .string()
            .describe(
              '数字和公式字段的显示格式。详情参考',
            )
            .optional(),
          date_formatter: z
            .string()
            .describe(
              '日期、创建时间、最后更新时间字段的显示格式。默认为 "yyyy/MM/dd"。枚举值如下所示：- "yyyy/MM/dd"：2021/1/30- "yyyy-MM-dd HH:mm"：2021/1/30 14:00- "MM-dd"：1月30日- "MM/dd/yyyy"：2021/1/30- "dd/MM/yyyy"：2021/1/30"',
            )
            .optional(),
          auto_fill: z.boolean().describe('对于新记录，是否自动填写创建时间。默认为 false').optional(),
          multiple: z
            .boolean()
            .describe('人员字段中是否允许添加多个成员，或单向关联、双向关联字段中是否允许添加多个记录。默认为 true')
            .optional(),
          table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
          back_field_name: z.string().describe('双向关联字段中，关联的数据表中对应的双向关联字段名称').optional(),
          auto_serial: z
            .object({
              type: z
                .enum(['custom', 'auto_increment_number'])
                .describe(
                  '自动编号类型 Options:custom(自定义编号),auto_increment_number(AutoIncrementNumber 自增数字)',
                ),
              options: z
                .array(
                  z.object({
                    type: z
                      .enum(['system_number', 'fixed_text', 'created_time'])
                      .describe(
                        '自动编号的可选规则项类型 Options:system_number(SystemNumber 自增数字的位数),fixed_text(FixedText 固定字符),created_time(CreatedTime 创建时间)',
                      ),
                    value: z
                      .string()
                      .describe(
                        '规则类型对应的值。- 若规则类型为 `"type": "system_number"`，value 为范围在 1-9 的整数，表示自增数字的位数- 若规则类型为 `"type": "fixed_text"`，value 为范围在 20 个字符以内的固定字符- 若规则类型为 `"type": "created_time"`，value 用于指定日期的格式。可选值如下所示： - "yyyyMMdd"：日期为 20220130 的格式 - "yyyyMM"：日期为 202201 的格式 - "yyyy"：日期为 2022 的格式 - "MMdd"：日期为 130 的格式，表示 1 月 30 日 - "MM"：日期为 1 的格式，表示月份 - "dd"：日期为 30 的格式',
                      ),
                  }),
                )
                .describe('自定义编号规则列表')
                .optional(),
            })
            .describe('自动编号类型')
            .optional(),
          location: z
            .object({
              input_type: z
                .enum(['only_mobile', 'not_limit'])
                .describe(
                  '地理位置输入限制 Options:only_mobile(OnlyMobile 仅允许移动端实时定位),not_limit(NotLimit 无限制，可输入任意地理位置)',
                ),
            })
            .describe('地理位置输入方式')
            .optional(),
          formula_expression: z
            .string()
            .describe(
              '公式字段的表达式。参考了解如何设置公式',
            )
            .optional(),
          allowed_edit_modes: z
            .object({
              manual: z.boolean().describe('是否允许手动录入。默认为 true').optional(),
              scan: z.boolean().describe('是否允许移动端录入。默认为 true').optional(),
            })
            .describe('条码展示类型字段支持的配置')
            .optional(),
          min: z
            .number()
            .describe(
              '进度和评分字段的数据范围最小值。不同字段类型中，该参数的必填属性和取值范围不同，详情参考',
            )
            .optional(),
          max: z
            .number()
            .describe(
              '进度和评分字段的数据范围最大值。不同字段类型中，该参数的必填属性和取值范围不同，详情参考',
            )
            .optional(),
          range_customize: z.boolean().describe('进度字段是否允许自定义进度条值，默认为 false').optional(),
          currency_code: z
            .string()
            .describe(
              '货币的具体类型，枚举值如下所示：- CNY：人民币，货币符号为 ¥- USD：美元，货币符号为 $- EUR：欧元，货币符号为 €- GBP：英镑，货币符号为 £- AED：阿联酋迪拉姆，货币符号为 dh- AUD：澳大利亚元，货币符号为 $- BRL：巴西雷亚尔，货币符号为 R$- CAD：加拿大元，货币符号为 $- CHF：瑞士法郎，货币符号为 CHF- HKD：港元，货币符号为 $- INR：印度卢比，货币符号为 ₹- IDR：印尼盾，货币符号为 Rp- JPY：日元，货币符号为 ¥- KRW：韩元，货币符号为 ₩- MOP：澳门元，货币符号为 MOP$- MXN：墨西哥比索，货币符号为 $- MYR：马来西亚令吉，货币符号为 RM- PHP：菲律宾比索，货币符号为 ₱- PLN：波兰兹罗提，货币符号为 zł- RUB：俄罗斯卢布，货币符号为 ₽- SGD：新加坡元，货币符号为 $- THB：泰国铢，货币符号为 ฿- TRY：土耳其里拉，货币符号为 ₺- TWD：新台币，货币符号为 NT$- VND：越南盾，货币符号为 ₫',
            )
            .optional(),
          rating: z
            .object({
              symbol: z
                .string()
                .describe(
                  '评分的图标，默认为 "star"。枚举值如下所示：- star：星星- heart：爱心- thumbsup：赞- fire：火- smile：笑脸- lightning：闪电- flower：花- number：数字',
                )
                .optional(),
            })
            .describe('评分字段的相关设置')
            .optional(),
          type: z
            .object({
              data_type: z
                .number()
                .describe(
                  '公式字段对应的数据类型 Options:1(Text 文本（默认值）、条码),2(Number 数字（默认值）、进度、货币、评分),3(SingleSelect 单选),4(MultiSelect 多选),5(DateTime 日期),7(Checkbox 复选框),11(User 人员),13(PhoneNumber 电话号码),15(Url 超链接),17(Attachment 附件),18(Link 单向关联),20(Formula 公式),21(DuplexLink 双向关联),22(Location 地理位置),23(GroupChat 群组),1001(CreatedTime 创建时间),1002(ModifiedTime 最后更新时间),1003(CreatedUser 创建人),1004(ModifiedUser 修改人),1005(AutoSerial 自动编号)',
                ),
              ui_property: z
                .object({
                  currency_code: z.string().describe('货币币种').optional(),
                  formatter: z.string().describe('数字、公式字段的显示格式').optional(),
                  range_customize: z.boolean().describe('进度等字段是否支持自定义范围').optional(),
                  min: z.number().describe('进度、评分等字段的数据范围最小值').optional(),
                  max: z.number().describe('进度、评分等字段的数据范围最大值').optional(),
                  date_formatter: z.string().describe('日期、创建时间、最后更新时间字段的显示格式').optional(),
                  rating: z
                    .object({ symbol: z.string().describe('评分字段的符号展示').optional() })
                    .describe('评分字段的相关设置')
                    .optional(),
                })
                .describe('公式数据属性信息')
                .optional(),
              ui_type: z
                .enum(['Number', 'Progress', 'Currency', 'Rating', 'DateTime'])
                .describe(
                  '公式字段在界面上的展示类型，例如进度字段是数字的一种展示形态。了解更多，参考。 Options:Number(数字),Progress(进度),Currency(货币),Rating(评分),DateTime(日期)',
                )
                .optional(),
            })
            .describe(
              '设置公式字段的数据类型**注意**：非所有多维表格都支持该能力。请参考接口返回的formula_type 判断，当 `formula_type` 等于 2 时，表示需要设置该字段',
            )
            .optional(),
        })
        .describe(
          '字段属性，了解如何填写字段，参考',
        )
        .optional(),
      description: z
        .object({
          disable_sync: z
            .boolean()
            .describe(
              '是否禁止同步该描述，只在新增、修改字段时生效。枚举值：- true：表示禁止同步该描述内容到表单的问题描述- false：允许同步该描述',
            )
            .optional(),
          text: z.string().describe('字段描述内容').optional(),
        })
        .describe('字段的描述')
        .optional(),
      ui_type: z
        .enum([
          'Text',
          'Email',
          'Barcode',
          'Number',
          'Progress',
          'Currency',
          'Rating',
          'SingleSelect',
          'MultiSelect',
          'DateTime',
          'Checkbox',
          'User',
          'GroupChat',
          'Phone',
          'Url',
          'Attachment',
          'SingleLink',
          'Formula',
          'DuplexLink',
          'Location',
          'CreatedTime',
          'ModifiedTime',
          'CreatedUser',
          'ModifiedUser',
          'AutoNumber',
        ])
        .describe(
          '字段在界面上的展示类型，例如进度字段是数字的一种展示形态。了解更多，参考。 Options:Text(文本),Email(邮箱地址),Barcode(条码),Number(数字),Progress(进度),Currency(货币),Rating(评分),SingleSelect(单选),MultiSelect(多选),DateTime(日期),Checkbox(复选框),User(人员),GroupChat(群组),Phone(电话号码),Url(超链接),Attachment(附件),SingleLink(单向关联),Formula(公式),DuplexLink(双向关联),Location(地理位置),CreatedTime(创建时间),ModifiedTime(最后更新时间),CreatedUser(创建人),ModifiedUser(修改人),AutoNumber(自动编号)',
        )
        .optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '格式为标准的 uuidv4，操作的唯一标识，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFieldDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTableField.delete',
  sdkName: 'bitable.v1.appTableField.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-多维表格-字段-删除字段-删除多维表格数据表中的一个字段',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      field_id: z.string().describe('多维表格中表单的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFieldList = {
  project: 'bitable',
  name: 'bitable.v1.appTableField.list',
  sdkName: 'bitable.v1.appTableField.list',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-字段-列出字段-获取多维表格数据表中的的所有字段',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
      text_field_as_array: z
        .boolean()
        .describe(
          '控制字段描述 `description` 数据的返回格式，默认为 false。true 表示 `description` 将以数组形式返回，如：```json{ "description": [ { "text": "字段的描述", "type": "text" } ]}```',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFieldUpdate = {
  project: 'bitable',
  name: 'bitable.v1.appTableField.update',
  sdkName: 'bitable.v1.appTableField.update',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/fields/:field_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-云文档-多维表格-字段-更新字段-在多维表格数据表中更新一个字段。更新字段时为全量更新，property 等字段会被完全覆盖',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      field_name: z.string().describe('多维表格字段名称。名称中的首尾空格将会被去除'),
      type: z
        .number()
        .describe(
          '要更新的字段的类型。不支持更新 19 查找引用字段类型。 Options:1(Text 文本),2(Number 数字),3(SingleSelect 单选),4(MultiSelect 多选),5(DateTime 日期),7(Checkbox 复选框),11(User 人员),13(PhoneNumber 电话号码),15(Url 超链接),17(Attachment 附件),18(Link 单项关联),20(Formula 公式（不支持设置公式表达式）),21(DuplexLink 双向关联),22(Location 地理位置),23(GroupChat 群组),1001(CreatedTime 创建时间),1002(ModifiedTime 最后更新时间),1003(CreatedUser 创建人),1004(ModifiedUser 修改人),1005(AutoSerial 自动编号)',
        ),
      property: z
        .object({
          options: z
            .array(
              z.object({
                name: z.string().describe('选项名称').optional(),
                id: z.string().describe('选项 ID').optional(),
                color: z
                  .number()
                  .describe(
                    '选项颜色，详情参考',
                  )
                  .optional(),
              }),
            )
            .describe('单选、多选字段的选项信息')
            .optional(),
          formatter: z
            .string()
            .describe(
              '数字、公式字段的显示格式。详情参考',
            )
            .optional(),
          date_formatter: z
            .string()
            .describe(
              '日期、创建时间、最后更新时间字段的显示格式。详情参考',
            )
            .optional(),
          auto_fill: z.boolean().describe('日期字段中新纪录自动填写创建时间').optional(),
          multiple: z.boolean().describe('人员字段中允许添加多个成员，单向关联、双向关联中允许添加多个记录').optional(),
          table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
          table_name: z.string().describe('单向关联、双向关联字段中关联的数据表的名称').optional(),
          back_field_name: z.string().describe('双向关联字段中，关联的数据表中对应的双向关联字段名称').optional(),
          auto_serial: z
            .object({
              type: z
                .enum(['custom', 'auto_increment_number'])
                .describe(
                  '自动编号类型 Options:custom(自定义编号),auto_increment_number(AutoIncrementNumber 自增数字)',
                ),
              options: z
                .array(
                  z.object({
                    type: z
                      .enum(['system_number', 'fixed_text', 'created_time'])
                      .describe(
                        '自动编号的可选规则项类型 Options:system_number(SystemNumber 自增数字位，value 范围为 1-9),fixed_text(FixedText 固定字符，最大长度：20),created_time(CreatedTime 创建时间，支持格式 "yyyyMMdd"、"yyyyMM"、"yyyy"、"MMdd"、"MM"、"dd")',
                      ),
                    value: z.string().describe('与自动编号的可选规则项类型相对应的取值'),
                  }),
                )
                .describe('自动编号规则列表')
                .optional(),
            })
            .describe('自动编号类型')
            .optional(),
          location: z
            .object({
              input_type: z
                .enum(['only_mobile', 'not_limit'])
                .describe(
                  '地理位置输入限制 Options:only_mobile(OnlyMobile 只允许移动端上传),not_limit(NotLimit 无限制)',
                ),
            })
            .describe('地理位置输入方式')
            .optional(),
          formula_expression: z.string().describe('公式字段的表达式').optional(),
          allowed_edit_modes: z
            .object({
              manual: z.boolean().describe('是否允许手动录入').optional(),
              scan: z.boolean().describe('是否允许移动端录入').optional(),
            })
            .describe('字段支持的编辑模式')
            .optional(),
          min: z.number().describe('进度、评分等字段的数据范围最小值').optional(),
          max: z.number().describe('进度、评分等字段的数据范围最大值').optional(),
          range_customize: z.boolean().describe('进度等字段是否支持自定义范围').optional(),
          currency_code: z.string().describe('货币币种').optional(),
          rating: z
            .object({ symbol: z.string().describe('评分字段的符号展示').optional() })
            .describe('评分字段的相关设置')
            .optional(),
          type: z
            .object({
              data_type: z
                .number()
                .describe(
                  '公式字段对应的数据类型 Options:1(Text 多行文本（默认值）、条码),2(Number 数字（默认值）、进度、货币、评分),3(SingleSelect 单选),4(MultiSelect 多选),5(DateTime 日期),7(Checkbox 复选框),11(User 人员),13(PhoneNumber 电话号码),15(Url 超链接),17(Attachment 附件),18(Link 单向关联),20(Formula 公式),21(DuplexLink 双向关联),22(Location 地理位置),23(GroupChat 群组),1001(CreatedTime 创建时间),1002(ModifiedTime 最后更新时间),1003(CreatedUser 创建人),1004(ModifiedUser 修改人),1005(AutoSerial 自动编号)',
                ),
              ui_property: z
                .object({
                  currency_code: z.string().describe('货币币种').optional(),
                  formatter: z.string().describe('数字、公式字段的显示格式').optional(),
                  range_customize: z.boolean().describe('进度等字段是否支持自定义范围').optional(),
                  min: z.number().describe('进度、评分等字段的数据范围最小值').optional(),
                  max: z.number().describe('进度、评分等字段的数据范围最大值').optional(),
                  date_formatter: z.string().describe('日期、创建时间、最后更新时间字段的显示格式').optional(),
                  rating: z
                    .object({ symbol: z.string().describe('评分字段的符号展示').optional() })
                    .describe('评分字段的相关设置')
                    .optional(),
                })
                .describe('公式数据属性')
                .optional(),
              ui_type: z
                .enum(['Number', 'Progress', 'Currency', 'Rating', 'DateTime'])
                .describe(
                  '公式字段在界面上的展示类型，例如进度字段是数字的一种展示形态 Options:Number(数字),Progress(进度),Currency(货币),Rating(评分),DateTime(日期)',
                )
                .optional(),
            })
            .describe(
              '设置公式字段的数据类型**注意**：非所有多维表格都支持该能力。请参考接口返回的formula_type 判断，当 `formula_type` 等于 2 时，表示需要设置该字段',
            )
            .optional(),
        })
        .describe(
          '字段属性，了解如何填写字段，参考',
        )
        .optional(),
      description: z
        .object({
          disable_sync: z
            .boolean()
            .describe(
              '是否禁止同步该描述，只在新增、修改字段时生效。枚举值：- true：表示禁止同步该描述内容到表单的问题描述- false：允许同步该描述',
            )
            .optional(),
          text: z.string().describe('字段描述内容').optional(),
        })
        .describe('字段的描述')
        .optional(),
      ui_type: z
        .enum([
          'Text',
          'Email',
          'Barcode',
          'Number',
          'Progress',
          'Currency',
          'Rating',
          'SingleSelect',
          'MultiSelect',
          'DateTime',
          'Checkbox',
          'User',
          'GroupChat',
          'Phone',
          'Url',
          'Attachment',
          'SingleLink',
          'Formula',
          'DuplexLink',
          'Location',
          'CreatedTime',
          'ModifiedTime',
          'CreatedUser',
          'ModifiedUser',
          'AutoNumber',
        ])
        .describe(
          '字段在界面上的展示类型，例如进度字段是数字的一种展示形态 Options:Text(文本),Email(邮箱地址),Barcode(条码),Number(数字),Progress(进度),Currency(货币),Rating(评分),SingleSelect(单选),MultiSelect(多选),DateTime(日期),Checkbox(复选框),User(人员),GroupChat(群组),Phone(电话号码),Url(超链接),Attachment(附件),SingleLink(单向关联),Formula(公式),DuplexLink(双向关联),Location(地理位置),CreatedTime(创建时间),ModifiedTime(最后更新时间),CreatedUser(创建人),ModifiedUser(修改人),AutoNumber(自动编号)',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      field_id: z.string().describe('多维表格中表单的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFormFieldList = {
  project: 'bitable',
  name: 'bitable.v1.appTableFormField.list',
  sdkName: 'bitable.v1.appTableFormField.list',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-表单-列出表单问题-列出表单中的所有问题项',
  accessTokens: ['tenant', 'user'],
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
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      form_id: z
        .string()
        .describe(
          '多维表格中表单的唯一标识。表单也是视图的一种，其获取方式与获取 `view_id` 相同：- 在多维表格的 URL 地址栏中，`form_id` 是下图中高亮部分： - 通过接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `form_id`',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFormFieldPatch = {
  project: 'bitable',
  name: 'bitable.v1.appTableFormField.patch',
  sdkName: 'bitable.v1.appTableFormField.patch',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id/fields/:field_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-多维表格-表单-更新表单问题-更新表单中的问题项',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      pre_field_id: z
        .string()
        .describe(
          '要更新的表单问题的前一个表单问题的 `field_id`，用于更新当前表单问题的位置。若该字段为空字符串，则表示将该表单问题的顺序排至首个位置',
        )
        .optional(),
      title: z.string().describe('表单问题').optional(),
      description: z.string().describe('问题描述').optional(),
      required: z.boolean().describe('该问题是否必填。可选值：- true：必填- false：非必填').optional(),
      visible: z
        .boolean()
        .describe('该问题是否可见。当值为 false 时，不允许更新其他字段。可选值：- true：可见- false：不可见')
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      form_id: z
        .string()
        .describe(
          '多维表格中表单的唯一标识。表单也是视图的一种，其获取方式与获取 `view_id` 相同：- 在多维表格的 URL 地址栏中，`form_id` 是下图中高亮部分： - 通过接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `form_id`',
        ),
      field_id: z.string().describe('多维表格中表单的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFormGet = {
  project: 'bitable',
  name: 'bitable.v1.appTableForm.get',
  sdkName: 'bitable.v1.appTableForm.get',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-表单-获取表单元数据-获取表单的所有元数据，包括表单名称、描述、是否共享等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      form_id: z
        .string()
        .describe(
          '多维表格中表单的唯一标识。表单也是视图的一种，其获取方式与获取 `view_id` 相同：- 在多维表格的 URL 地址栏中，`form_id` 是下图中高亮部分： - 通过接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `form_id`',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableFormPatch = {
  project: 'bitable',
  name: 'bitable.v1.appTableForm.patch',
  sdkName: 'bitable.v1.appTableForm.patch',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/forms/:form_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-云文档-多维表格-表单-更新表单元数据-更新表单视图中的元数据，包括表单名称、描述、是否共享等',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('表单名称').optional(),
      description: z.string().describe('表单描述').optional(),
      shared: z
        .boolean()
        .describe('是否开启表单分享，使表单支持填写。可选值：- true：支持填写- false：不支持填写')
        .optional(),
      shared_limit: z
        .enum(['off', 'tenant_editable', 'anyone_editable'])
        .describe(
          '分享表单范围限制。当 shared 参数为 true 时支持传入该字段 Options:off(仅邀请的人可填写),tenant_editable(TenantEditable 组织内获得链接的人可填写),anyone_editable(AnyoneEditable 互联网上获得链接的人可填写)',
        )
        .optional(),
      submit_limit_once: z
        .boolean()
        .describe('是否将填写次数限制为一次。可选值：- true：设置表单仅支持填写一次- false：不限制表单填写次数')
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      form_id: z
        .string()
        .describe(
          '多维表格中表单的唯一标识。表单也是视图的一种，其获取方式与获取 `view_id` 相同：- 在多维表格的 URL 地址栏中，`form_id` 是下图中高亮部分： - 通过接口获取。暂时无法获取到嵌入到云文档中的多维表格的 `form_id`',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableList = {
  project: 'bitable',
  name: 'bitable.v1.appTable.list',
  sdkName: 'bitable.v1.appTable.list',
  path: '/open-apis/bitable/v1/apps/:app_token/tables',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-数据表-列出数据表-列出多维表格中的所有数据表，包括其 ID、版本号和名称',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTablePatch = {
  project: 'bitable',
  name: 'bitable.v1.appTable.patch',
  sdkName: 'bitable.v1.appTable.patch',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-多维表格-数据表-更新数据表-更新数据表的名称',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z
        .string()
        .describe(
          '数据表的新名称。**注意**：- 名称中的首尾空格将会被去除。- 数据表名称不可以包含 `/ \\ ? * : [ ]` 等特殊字符。- 如果名称为空或和旧名称相同，接口仍然会返回成功，但是名称不会被更改',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordBatchCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.batchCreate',
  sdkName: 'bitable.v1.appTableRecord.batchCreate',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-记录-新增多条记录-在多维表格数据表中新增多条记录，单次调用最多新增 1,000 条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      records: z
        .array(
          z.object({
            fields: z
              .record(z.any())
              .describe(
                '要新增的记录的数据。你需先指定数据表中的字段（即指定列），再传入正确格式的数据作为一条记录。**注意**：该接口支持的字段类型及其描述如下所示：- 文本：原值展示，不支持 markdown 语法- 数字：填写数字格式的值- 单选：填写选项值，对于新的选项值，将会创建一个新的选项- 多选：填写多个选项值，对于新的选项值，将会创建一个新的选项。如果填写多个相同的新选项值，将会创建多个相同的选项- 日期：填写毫秒级时间戳- 复选框：填写 true 或 false- 条码- 人员：：填写用户的、 或 ，类型需要与 user_id_type 指定的类型一致- 电话号码：填写文本内容- 超链接：参考以下示例，text 为文本值，link 为 URL 链接- 附件：填写附件 token，需要先调用或接口将附件上传至该多维表格中- 单向关联：填写被关联表的记录 ID- 双向关联：填写被关联表的记录 ID- 地理位置：填写经纬度坐标不同类型字段的数据结构请参考',
              ),
            shared_url: z
              .string()
              .describe('记录分享链接。本接口不返回该参数，批量获取记录接口将返回该参数')
              .optional(),
            record_url: z.string().describe('记录链接。本接口不返回该参数，批量获取记录接口将返回该参数').optional(),
          }),
        )
        .describe('要新增的记录列表'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      client_token: z
        .string()
        .describe(
          '格式为标准的 uuidv4，操作的唯一标识，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
      ignore_consistency_check: z
        .boolean()
        .describe(
          '是否忽略一致性读写检查，默认为 false，即在进行读写操作时，系统将确保读取到的数据和写入的数据是一致的。可选值：- true：忽略读写一致性检查，提高性能，但可能会导致某些节点的数据不同步，出现暂时不一致- false：开启读写一致性检查，确保数据在读写过程中一致',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordBatchDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.batchDelete',
  sdkName: 'bitable.v1.appTableRecord.batchDelete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-记录-删除多条记录-删除多维表格数据表中现有的多条记录，单次调用中最多删除 500 条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      records: z
        .array(z.string())
        .describe(
          '删除的多条记录 ID 列表。通过接口获取',
        ),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordBatchGet = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.batchGet',
  sdkName: 'bitable.v1.appTableRecord.batchGet',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-记录-批量获取记录-通过多个记录 ID 查询记录信息。该接口最多支持查询 100 条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      record_ids: z
        .array(z.string())
        .describe(
          '记录 ID 列表。调用获取',
        ),
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
      with_shared_url: z
        .boolean()
        .describe('是否返回记录的分享链接。可选值：- true：返回分享链接- false：不返回分享链接**默认值**：false')
        .optional(),
      automatic_fields: z
        .boolean()
        .describe(
          '是否返回自动计算的字段。可选值：- true：返回自动计算的字段- false：不返回自动计算的字段**默认值**：false',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordBatchUpdate = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.batchUpdate',
  sdkName: 'bitable.v1.appTableRecord.batchUpdate',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/batch_update',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-多维表格-记录-更新多条记录-更新数据表中的多条记录，单次调用最多更新 1,000 条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      records: z
        .array(
          z.object({
            fields: z
              .record(z.any())
              .describe(
                '要更新的记录的数据。你需先指定数据表中的字段（即指定列），再传入正确格式的数据作为一条记录。**注意**：该接口支持的字段类型及其描述如下所示：- 文本：原值展示，不支持 markdown 语法- 数字：填写数字格式的值- 单选：填写选项值，对于新的选项值，将会创建一个新的选项- 多选：填写多个选项值，对于新的选项值，将会创建一个新的选项。如果填写多个相同的新选项值，将会创建多个相同的选项- 日期：填写毫秒级时间戳- 复选框：填写 true 或 false- 条码- 人员：填写用户的 open_id、union_id 或 user_id，类型需要与 user_id_type 指定的类型一致- 电话号码：填写文本内容- 超链接：参考以下示例，text 为文本值，link 为 URL 链接- 附件：填写附件 token，需要先调用或接口将附件上传至该多维表格中- 单向关联：填写被关联表的记录 ID- 双向关联：填写被关联表的记录 ID- 地理位置：填写经纬度坐标不同类型字段的数据结构请参考',
              ),
            record_id: z.string().describe('数据表中一条记录的唯一标识').optional(),
            shared_url: z.string().describe('记录分享链接，本接口中该参数无效，请忽略').optional(),
            record_url: z.string().describe('记录链接。本接口中该参数无效，请忽略').optional(),
          }),
        )
        .describe('要更新的记录'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      ignore_consistency_check: z
        .boolean()
        .describe(
          '是否忽略一致性读写检查，默认为 false，即在进行读写操作时，系统将确保读取到的数据和写入的数据是一致的。可选值：- true：忽略读写一致性检查，提高性能，但可能会导致某些节点的数据不同步，出现暂时不一致- false：开启读写一致性检查，确保数据在读写过程中一致',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.create',
  sdkName: 'bitable.v1.appTableRecord.create',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-多维表格-记录-新增记录-在多维表格数据表中新增一条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      fields: z
        .record(z.any())
        .describe(
          '要新增的记录的数据。你需先指定数据表中的字段（即指定列），再传入正确格式的数据作为一条记录。**注意**：该接口支持的字段类型及其描述如下所示：- 文本： 填写字符串格式的值- 数字：填写数字格式的值- 单选：填写选项值，对于新的选项值，将会创建一个新的选项- 多选：填写多个选项值，对于新的选项值，将会创建一个新的选项。如果填写多个相同的新选项值，将会创建多个相同的选项- 日期：填写毫秒级时间戳- 复选框：填写 true 或 false- 条码- 人员：填写用户的、 或 ，类型需要与 user_id_type 指定的类型一致- 电话号码：填写文本内容- 超链接：参考以下示例，text 为文本值，link 为 URL 链接- 附件：填写附件 token，需要先调用或接口将附件上传至该多维表格中- 单向关联：填写被关联表的记录 ID- 双向关联：填写被关联表的记录 ID- 地理位置：填写经纬度坐标不同类型字段的数据结构请参考',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      client_token: z
        .string()
        .describe(
          '格式为标准的 uuidv4，操作的唯一标识，用于幂等的进行更新操作。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
      ignore_consistency_check: z
        .boolean()
        .describe(
          '是否忽略一致性读写检查，默认为 false，即在进行读写操作时，系统将确保读取到的数据和写入的数据是一致的。可选值：- true：忽略读写一致性检查，提高性能，但可能会导致某些节点的数据不同步，出现暂时不一致- false：开启读写一致性检查，确保数据在读写过程中一致',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.delete',
  sdkName: 'bitable.v1.appTableRecord.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-多维表格-记录-删除记录-删除多维表格数据表中的一条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      record_id: z.string().describe('数据表中一条记录的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordGet = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.get',
  sdkName: 'bitable.v1.appTableRecord.get',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-云文档-多维表格-检索记录-该接口用于根据 record_id 的值检索现有记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      text_field_as_array: z
        .boolean()
        .describe('多行文本字段数据是否以数组形式返回。true 表示以数组形式返回。默认为 false')
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      display_formula_ref: z
        .boolean()
        .describe('控制公式、查找引用是否显示完整原样的返回结果。默认为 false')
        .optional(),
      with_shared_url: z
        .boolean()
        .describe('控制是否返回该记录的链接，即 record_url 参数。默认为 false，即不返回')
        .optional(),
      automatic_fields: z
        .boolean()
        .describe(
          '控制是否返回自动计算的字段，例如 `created_by`/`created_time`/`last_modified_by`/`last_modified_time`，true 表示返回。默认为 false',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      record_id: z.string().describe('数据表中一条记录的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordList = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.list',
  sdkName: 'bitable.v1.appTableRecord.list',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-云文档-多维表格-列出记录-该接口用于列出数据表中的现有记录，单次最多列出 500 行记录，支持分页获取',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
      filter: z
        .string()
        .describe(
          '筛选参数，用于指定本次查询的筛选条件注意：1.不支持对“人员”以及“关联字段”的属性进行过滤筛选，如人员的 OpenID。2.指定筛选条件时，参数长度不超过2000个字符。详细请参考',
        )
        .optional(),
      sort: z
        .string()
        .describe(
          '排序参数，用于指定本次查询返回结果的顺序注意：1.不支持对带“公式”和“关联字段”的表的使用。2.指定排序条件时，参数长度不超过1000字符。3.当存在多个排序条件时，数据将根据条件顺序逐层排序',
        )
        .optional(),
      field_names: z.string().describe('字段名称，用于指定本次查询返回记录中包含的字段').optional(),
      text_field_as_array: z
        .boolean()
        .describe(
          '控制多行文本字段数据的返回格式，true 表示以数组形式返回。注意：1.多行文本中如果有超链接部分，则会返回链接的 URL。2.目前可以返回多行文本中 URL 类型为多维表格链接、飞书 doc、飞书 sheet的URL类型以及@人员的数据结构',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      display_formula_ref: z
        .boolean()
        .describe(
          '默认值为false，返回当前字段的默认类型和结果；当该参数的值为true时，公式 和 查找引用 类型的字段，将会以 被引用字段 的格式返回',
        )
        .optional(),
      automatic_fields: z
        .boolean()
        .describe(
          '控制是否返回自动计算的字段，例如 `created_by`/`created_time`/`last_modified_by`/`last_modified_time`，true 表示返回',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordSearch = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.search',
  sdkName: 'bitable.v1.appTableRecord.search',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-记录-查询记录-该接口用于查询数据表中的现有记录，单次最多查询 500 行记录，支持分页获取',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
      field_names: z.array(z.string()).describe('字段名称，用于指定本次查询返回记录中包含的字段').optional(),
      sort: z
        .array(
          z.object({
            field_name: z.string().describe('字段名称').optional(),
            desc: z.boolean().describe('是否倒序排序').optional(),
          }),
        )
        .describe('排序条件')
        .optional(),
      filter: z
        .object({
          conjunction: z
            .enum(['and', 'or'])
            .describe(
              '表示条件之间的逻辑连接词，该字段必填，请忽略左侧必填列的否 Options:and(ConjunctionAnd 满足全部条件),or(ConjunctionOr 满足任一条件)',
            )
            .optional(),
          conditions: z
            .array(
              z.object({
                field_name: z.string().describe('筛选条件的左值，值为字段的名称'),
                operator: z
                  .enum([
                    'is',
                    'isNot',
                    'contains',
                    'doesNotContain',
                    'isEmpty',
                    'isNotEmpty',
                    'isGreater',
                    'isGreaterEqual',
                    'isLess',
                    'isLessEqual',
                    'like',
                    'in',
                  ])
                  .describe(
                    '条件运算符 Options:is(OperatorIs 等于),isNot(OperatorIsNot 不等于（不支持日期字段，了解如何查询日期字段，参考）),contains(OperatorContains 包含（不支持日期字段）),doesNotContain(OperatorDoesNotContain 不包含（不支持日期字段）),isEmpty(OperatorIsEmpty 为空),isNotEmpty(OperatorIsNotEmpty 不为空),isGreater(OperatorIsGreater 大于),isGreaterEqual(OperatorIsGreaterEqual 大于等于（不支持日期字段）),isLess(OperatorIsLess 小于),isLessEqual(OperatorIsLessEqual 小于等于（不支持日期字段）),like(OperatorLike LIKE 运算符。暂未支持),in(OperatorIn IN 运算符。暂未支持)',
                  ),
                value: z
                  .array(z.string())
                  .describe(
                    '条件的值，可以是单个值或多个值的数组。不同字段类型和不同的 operator 可填的值不同。详情参考',
                  )
                  .optional(),
              }),
            )
            .describe('筛选条件集合')
            .optional(),
        })
        .describe(
          '包含条件筛选信息的对象。了解 filter 填写指南和使用示例（如怎样同时使用 `and` 和 `or` 逻辑链接词），参考',
        )
        .optional(),
      automatic_fields: z.boolean().describe('是否返回自动计算的字段。默认为 false，表示不返回').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小。最大值为 500').optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableRecordUpdate = {
  project: 'bitable',
  name: 'bitable.v1.appTableRecord.update',
  sdkName: 'bitable.v1.appTableRecord.update',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/records/:record_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-云文档-多维表格-记录-更新记录-更新多维表格数据表中的一条记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      fields: z
        .record(z.any())
        .describe(
          '要更新的记录的数据。你需先指定数据表中的字段（即指定列），再传入正确格式的数据作为一条记录。**注意**：该接口支持的字段类型及其描述如下所示：- 文本：原值展示，不支持 markdown 语法- 数字：填写数字格式的值- 单选：填写选项值，对于新的选项值，将会创建一个新的选项- 多选：填写多个选项值，对于新的选项值，将会创建一个新的选项。如果填写多个相同的新选项值，将会创建多个相同的选项- 日期：填写毫秒级时间戳- 复选框：填写 true 或 false- 条码- 人员：填写用户的 open_id、union_id 或 user_id，类型需要与 user_id_type 指定的类型一致- 电话号码：填写文本内容- 超链接：参考以下示例，text 为文本值，link 为 URL 链接- 附件：填写附件 token，需要先调用或接口将附件上传至该多维表格中- 单向关联：填写被关联表的记录 ID- 双向关联：填写被关联表的记录 ID- 地理位置：填写经纬度坐标不同类型字段的数据结构请参考',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      ignore_consistency_check: z
        .boolean()
        .describe(
          '是否忽略一致性读写检查，默认为 false，即在进行读写操作时，系统将确保读取到的数据和写入的数据是一致的。可选值：- true：忽略读写一致性检查，提高性能，但可能会导致某些节点的数据不同步，出现暂时不一致- false：开启读写一致性检查，确保数据在读写过程中一致',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识'),
      table_id: z.string().describe('多维表格数据表的唯一标识'),
      record_id: z.string().describe('数据表中一条记录的唯一标识'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableViewCreate = {
  project: 'bitable',
  name: 'bitable.v1.appTableView.create',
  sdkName: 'bitable.v1.appTableView.create',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-多维表格-视图-新增视图-在多维表格数据表中新增一个视图，可指定视图类型，包括表格视图、看板视图、画册视图、甘特视图和表单视图',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      view_name: z
        .string()
        .describe(
          '视图名称。名称不能包含特殊字符，请确保其符合以下规则：- 长度不超过 100 个字符- 不为空且不包含这些特殊符号：[ ]',
        ),
      view_type: z
        .enum(['grid', 'kanban', 'gallery', 'gantt', 'form'])
        .describe('视图类型 Options:grid(表格视图),kanban(看板视图),gallery(画册视图),gantt(甘特视图),form(表单视图)')
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableViewDelete = {
  project: 'bitable',
  name: 'bitable.v1.appTableView.delete',
  sdkName: 'bitable.v1.appTableView.delete',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-多维表格-视图-删除视图-删除多维表格数据表中的指定视图',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableViewGet = {
  project: 'bitable',
  name: 'bitable.v1.appTableView.get',
  sdkName: 'bitable.v1.appTableView.get',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-视图-获取视图-根据视图 ID 获取现有视图信息，包括视图名称、类型、属性等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableViewList = {
  project: 'bitable',
  name: 'bitable.v1.appTableView.list',
  sdkName: 'bitable.v1.appTableView.list',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-视图-列出视图-获取多维表格数据表中的所有视图',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppTableViewPatch = {
  project: 'bitable',
  name: 'bitable.v1.appTableView.patch',
  sdkName: 'bitable.v1.appTableView.patch',
  path: '/open-apis/bitable/v1/apps/:app_token/tables/:table_id/views/:view_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-云文档-多维表格-视图-更新视图-增量更新视图信息，包括视图名称、属性等，可设置视图的筛选条件',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      view_name: z
        .string()
        .describe(
          '视图名称。名称不能包含特殊字符，请确保其符合以下规则：- 长度不超过 100 个字符- 不为空且不包含这些特殊符号：[ ]',
        )
        .optional(),
      property: z
        .object({
          filter_info: z
            .object({
              conjunction: z
                .enum(['and', 'or'])
                .describe('多个筛选条件的关系，表示条件之间的逻辑连接词 Options:and(与),or(或)'),
              conditions: z
                .array(
                  z.object({
                    field_id: z.string().describe('多维表格中表单的唯一标识'),
                    operator: z
                      .enum([
                        'is',
                        'isNot',
                        'contains',
                        'doesNotContain',
                        'isEmpty',
                        'isNotEmpty',
                        'isGreater',
                        'isGreaterEqual',
                        'isLess',
                        'isLessEqual',
                      ])
                      .describe(
                        '筛选操作的类型，条件运算符 Options:is(等于),isNot(不等于（不支持日期字段）),contains(包含（不支持日期字段）),doesNotContain(不包含（不支持日期字段）),isEmpty(为空),isNotEmpty(不为空),isGreater(大于),isGreaterEqual(大于等于（不支持日期字段）),isLess(小于),isLessEqual(小于等于（不支持日期字段）)',
                      ),
                    value: z
                      .string()
                      .describe(
                        '条件的值，可以是单个值或多个值的数组。不同字段类型和不同的 operator 可填的值不同。详情参考',
                      )
                      .optional(),
                  }),
                )
                .describe('筛选条件集合'),
            })
            .describe('筛选条件')
            .optional(),
          hidden_fields: z.array(z.string()).describe('隐藏字段 ID 列表').optional(),
          hierarchy_config: z
            .object({ field_id: z.string().describe('多维表格中表单的唯一标识').optional() })
            .describe('表格视图层级结构设置')
            .optional(),
        })
        .describe('视图属性')
        .optional(),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      table_id: z.string().describe('多维表格数据表的唯一标识').optional(),
      view_id: z.string().describe('多维表格中视图的唯一标识').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppUpdate = {
  project: 'bitable',
  name: 'bitable.v1.app.update',
  sdkName: 'bitable.v1.app.update',
  path: '/open-apis/bitable/v1/apps/:app_token',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-云文档-多维表格-多维表格-更新多维表格元数据-更新多维表格元数据，包括多维表格的名称、是否开启高级权限',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('新的多维表格名称，不传则不更新名称').optional(),
      is_advanced: z
        .boolean()
        .describe('多维表格是否开启高级权限。不传则不更新设置。可选值：- true：开启高级权限- false：关闭高级权限')
        .optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppWorkflowList = {
  project: 'bitable',
  name: 'bitable.v1.appWorkflow.list',
  sdkName: 'bitable.v1.appWorkflow.list',
  path: '/open-apis/bitable/v1/apps/:app_token/workflows',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-多维表格-自动化-列出自动化流程-该接口用于列出多维表格的自动化流程',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({ app_token: z.string().describe('多维表格 App 的唯一标识').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1AppWorkflowUpdate = {
  project: 'bitable',
  name: 'bitable.v1.appWorkflow.update',
  sdkName: 'bitable.v1.appWorkflow.update',
  path: '/open-apis/bitable/v1/apps/:app_token/workflows/:workflow_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-云文档-多维表格-自动化-更新自动化流程状态-开启或关闭自动化流程',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      status: z.string().describe('自动化状态。可选值：- Enable：开启自动化流程- Disable：关闭自动化流程'),
    }),
    path: z.object({
      app_token: z.string().describe('多维表格 App 的唯一标识').optional(),
      workflow_id: z
        .string()
        .describe(
          '自动化工作流 ID，通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const bitableV1Tools = [
  bitableV1AppCopy,
  bitableV1AppCreate,
  bitableV1AppDashboardCopy,
  bitableV1AppDashboardList,
  bitableV1AppGet,
  bitableV1AppRoleCreate,
  bitableV1AppRoleDelete,
  bitableV1AppRoleList,
  bitableV1AppRoleMemberBatchCreate,
  bitableV1AppRoleMemberBatchDelete,
  bitableV1AppRoleMemberCreate,
  bitableV1AppRoleMemberDelete,
  bitableV1AppRoleMemberList,
  bitableV1AppRoleUpdate,
  bitableV1AppTableBatchCreate,
  bitableV1AppTableBatchDelete,
  bitableV1AppTableCreate,
  bitableV1AppTableDelete,
  bitableV1AppTableFieldCreate,
  bitableV1AppTableFieldDelete,
  bitableV1AppTableFieldList,
  bitableV1AppTableFieldUpdate,
  bitableV1AppTableFormFieldList,
  bitableV1AppTableFormFieldPatch,
  bitableV1AppTableFormGet,
  bitableV1AppTableFormPatch,
  bitableV1AppTableList,
  bitableV1AppTablePatch,
  bitableV1AppTableRecordBatchCreate,
  bitableV1AppTableRecordBatchDelete,
  bitableV1AppTableRecordBatchGet,
  bitableV1AppTableRecordBatchUpdate,
  bitableV1AppTableRecordCreate,
  bitableV1AppTableRecordDelete,
  bitableV1AppTableRecordGet,
  bitableV1AppTableRecordList,
  bitableV1AppTableRecordSearch,
  bitableV1AppTableRecordUpdate,
  bitableV1AppTableViewCreate,
  bitableV1AppTableViewDelete,
  bitableV1AppTableViewGet,
  bitableV1AppTableViewList,
  bitableV1AppTableViewPatch,
  bitableV1AppUpdate,
  bitableV1AppWorkflowList,
  bitableV1AppWorkflowUpdate,
];
