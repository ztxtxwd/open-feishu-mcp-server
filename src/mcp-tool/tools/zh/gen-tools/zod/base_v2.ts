import { z } from 'zod';
export type baseV2ToolName = 'base.v2.appRole.create' | 'base.v2.appRole.list' | 'base.v2.appRole.update';
export const baseV2AppRoleCreate = {
  project: 'base',
  name: 'base.v2.appRole.create',
  sdkName: 'base.v2.appRole.create',
  path: '/open-apis/base/v2/apps/:app_token/roles',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-多维表格-高级权限-自定义角色-新增自定义角色-新增多维表格高级权限中自定义的角色',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      role_name: z.string().describe('自定义权限的名字'),
      table_roles: z
        .array(
          z.object({
            table_perm: z
              .number()
              .describe(
                '数据表权限。**提示**：**协作者可编辑自己的记录** 和 **可编辑指定字段** 是 **可编辑记录** 的特殊情况，可通过指定 `rec_rule` 或 `field_perm` 参数实现相同的效果。 Options:0(NoPerm 无权限),1(Read 仅可阅读),2(Edit 可编辑),4(Admin 可管理)',
              ),
            table_name: z.string().describe('数据表名称').optional(),
            table_id: z
              .string()
              .describe(
                '多维表格数据表的唯一标识。获取方式：- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`- 也可通过接口获取 `table_id` ',
              )
              .optional(),
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
                      values: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可编辑或可阅读的记录')
                  .optional(),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
                other_perm: z
                  .number()
                  .describe(
                    '其他记录权限，仅在 `table_perm` 为 2 （数据表权限为可编辑）时生效。- 当 `other_perm` 为 1 时，表示未命中 `rec_rule` 的记录仅可阅读，不可编辑- 当 `other_perm` 为 0 时，表示既未命中 `rec_rule`、也未命中 `other_rec_rule` 的记录会被禁止阅读。即你可以通过 `other_rec_rule` 进一步指定可阅读的记录范围。 Options:0(NoPerm 禁止查看),1(Read 仅可阅读)',
                  )
                  .optional(),
              })
              .describe('记录筛选条件，当 `table_perm` 为 1 或 2 时生效。用于指定可编辑或可阅读的记录')
              .optional(),
            other_rec_rule: z
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
                      values: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可阅读的记录')
                  .optional(),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
              })
              .describe(
                '记录筛选条件，在 `rec_rule.other_perm` 为 0 时生效。对于未命中 `rec_rule` 的记录，通过 `other_rec_rule` 指定可阅读记录范围；此时，既未命中 `rec_rule`、也未命中 `other_rec_rule` 的记录会被禁止阅读。**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
              .optional(),
            field_perm: z
              .record(z.any())
              .describe(
                '字段权限，仅在 `table_perm` 为 1和 2 时生效。用于设置字段可编辑或可阅读。类型为 map，key 是字段名称，value 是字段权限。对于未设置的字段，默认无权限。value 枚举值有：- `1`：可阅读- `2`：可添加- `3`：可编辑',
              )
              .optional(),
            allow_add_record: z
              .boolean()
              .describe('新增记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以新增')
              .optional(),
            allow_delete_record: z
              .boolean()
              .describe('删除记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以删除')
              .optional(),
            view_perm: z.number().describe('设置视图的权限。 Options:1(Read 可阅读),2(Edit 可编辑)').optional(),
            view_rules: z
              .record(z.any())
              .describe(
                '可读的视图集合，仅在 view_perm 为 1 （视图为可阅读）时生效。- 未设置时，表示所有视图可读。- 设置后，表示设置的视图可读，未设置的视图无权限。该参数类型为 map，其中 key 是，value 是视图对应的权限。value 枚举值有：- `0`：无权限- `1`：可阅读**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
              .optional(),
            field_action_rules: z
              .record(z.any())
              .describe(
                '设置字段的权限，仅可配置单多选字段、附件字段。可选的点位有：- `select_option_edit` : 选项配置点位，配置是否可增删改单、多选选项，未设置表示无权限。- `attachment_export`: 附件操作权限点位，配置是否可导出附件，未设置表示可导出。该参数类型为两层 map 结构，其中 key 是字段点位权限，value 是字段权限集合。字段权限集合也是一个 map 结构，其中 key 是字段名称，value 是字段点位权限：- `0`：无权限- `1`：有权限**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
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
            block_perm: z.number().describe('设置仪表盘的权限 Options:0(NoPerm 无权限),1(Read 可阅读)'),
          }),
        )
        .describe('针对仪表盘的权限设置')
        .optional(),
      base_rule: z
        .record(z.any())
        .describe(
          '多维表格点位的权限。- 未设置时，表示自定义角色拥有所有点位权限。- 设置时，可设置以下两种权限： - `base_complex_edit` : 设置是否可以创建副本、下载、打印多维表格 - `copy`: 设置是否可以复制多维表格内容该参数类型为 map，其中 key 是权限点位名称，value 是权限开关。value 枚举值有：- `0`：无权限- `1`：有权限**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z
        .string()
        .describe(
          '多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分： - 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。了解更多，参考',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baseV2AppRoleList = {
  project: 'base',
  name: 'base.v2.appRole.list',
  sdkName: 'base.v2.appRole.list',
  path: '/open-apis/base/v2/apps/:app_token/roles',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-多维表格-高级权限-自定义角色-列出自定义角色-列出多维表格高级权限中用户自定义的角色',
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
      app_token: z
        .string()
        .describe(
          '多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分： - 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。了解更多，参考',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baseV2AppRoleUpdate = {
  project: 'base',
  name: 'base.v2.appRole.update',
  sdkName: 'base.v2.appRole.update',
  path: '/open-apis/base/v2/apps/:app_token/roles/:role_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-多维表格-高级权限-自定义角色-更新自定义角色-更新多维表格高级权限中自定义的角色',
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
                '数据表权限。**提示**：**协作者可编辑自己的记录** 和 **可编辑指定字段** 是 **可编辑记录** 的特殊情况，可通过指定 `rec_rule` 或 `field_perm` 参数实现相同的效果。 Options:0(NoPerm 无权限),1(Read 仅可阅读),2(Edit 可编辑),4(Admin 可管理)',
              ),
            table_name: z.string().describe('数据表名称').optional(),
            table_id: z
              .string()
              .describe(
                '多维表格数据表的唯一标识。获取方式：- 你可通过多维表格 URL 获取 `table_id`，下图高亮部分即为当前数据表的 `table_id`- 也可通过接口获取 `table_id` ',
              )
              .optional(),
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
                      values: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可编辑或可阅读的记录')
                  .optional(),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
                other_perm: z
                  .number()
                  .describe(
                    '其他记录权限，仅在 `table_perm` 为 2 （数据表权限为可编辑）时生效。- 当 `other_perm` 为 1 时，表示未命中 `rec_rule` 的记录仅可阅读，不可编辑- 当 `other_perm` 为 0 时，表示既未命中 `rec_rule`、也未命中 `other_rec_rule` 的记录会被禁止阅读。即你可以通过 `other_rec_rule` 进一步指定可阅读的记录范围。 Options:0(NoPerm 禁止查看),1(Read 仅可阅读)',
                  )
                  .optional(),
              })
              .describe(
                '记录筛选条件，当 `table_perm` 为 1 或 2 时生效。用于指定可编辑或可阅读的记录。- rec_rule字段未设置、且 `table_perm `不变的情况下，保持旧值。- 字段 value 为 {} 的情况下，表示设置为默认值，即全部可编辑或可阅读，具体权限需结合 table_perm 参数',
              )
              .optional(),
            other_rec_rule: z
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
                      values: z
                        .array(z.string())
                        .describe(
                          '条件的值，可以是单个值或多个值的数组。详情参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('记录筛选条件，用于指定可阅读的记录')
                  .optional(),
                conjunction: z.enum(['and', 'or']).describe('多个筛选条件的关系 Options:and(与),or(或)').optional(),
              })
              .describe(
                '记录筛选条件，在 `table_perm` 为 2 且`rec_rule.other_perm` 为 0 时生效。- 对于未命中 `rec_rule` 的记录，通过 `other_rec_rule` 指定可阅读记录范围；此时，既未命中 `rec_rule`、也未命中 `other_rec_rule` 的记录会被禁止阅读。- `other_rec_rule` 字段未设置、且 `table_perm` 与 `rec_rule` 不变的情况下，将会保持旧值不变。- `other_rec_rule` 字段设置为 {} 时，且 `table_perm` 与`rec_rule` 不变的情况下，表示设置为默认值，即非`rec_rule` 记录全部可阅读。**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
              .optional(),
            field_perm: z
              .record(z.any())
              .describe(
                '字段权限，仅在 `table_perm` 为 1和 2 时生效。用于设置字段可编辑或可阅读。类型为 map，key 是字段名称，value 是字段权限。对于未设置的多维表格字段，则为无权限。更新时，`field_perm` 未传值时，将保留旧值不变。`field_perm` 传{}时，则将所有字段设置为默认值可编辑或者可阅读，默认值需结合`table_perm `字段。value 枚举值有：- `1`：可阅读- `2`：可添加- `3`：可编辑',
              )
              .optional(),
            allow_add_record: z
              .boolean()
              .describe('新增记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以新增')
              .optional(),
            allow_delete_record: z
              .boolean()
              .describe('删除记录权限，仅在 `table_perm` 为 2 时生效，用于设置记录是否可以删除')
              .optional(),
            view_perm: z.number().describe('设置视图的编辑权限。 Options:1(Read 可阅读),2(Edit 可编辑)').optional(),
            view_rules: z
              .record(z.any())
              .describe(
                '可读的视图集合，仅在 `view_perm` 为 1 （视图为可阅读）时生效。更新时，未设置该字段`view_rules `，且 `view_perm` 未变化的情况下，将保留旧值。设置该字段`view_rules `为{}，且 `view_perm` 为1的情况下，会将所有视图置为可读。该参数类型为 map，其中 key 是，value 是视图对应的权限。value 枚举值有：- `0`：无权限- `1`：可阅读**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
              .optional(),
            field_action_rules: z
              .record(z.any())
              .describe(
                '更新字段的权限，仅可配置单多选字段、附件字段。可选的点位有：- `select_option_edit` : 选项配置点位，配置是否可增删改单、多选选项，未设置表示无权限。- `attachment_export`: 附件操作权限点位，配置是否可导出附件，未设置表示可导出。该参数类型为两层 map 结构，其中 key 是字段点位权限，value 是字段权限集合。字段权限集合也是一个 map 结构，其中 key 是字段名称，value 是字段点位权限：- `0`：无权限- `1`：有权限**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
              )
              .optional(),
          }),
        )
        .describe('针对数据表的权限设置，未设置该字段的情况下，保持旧值不变'),
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
        .describe(
          '针对仪表盘的权限设置。更新是，未设置该字段的情况下，保持旧值不变。设置`block_roles`为{}时，将所有仪表盘更新为默认权限，即所有仪表盘无权限',
        )
        .optional(),
      base_rule: z
        .record(z.any())
        .describe(
          '多维表格点位的权限。更新时，未设置`base_rule`字段时，所有点位保持旧值。设置`base_rule`字段为{}时，会将所有点位设置为默认值，即所有点位有权限。可设置以下两种权限：- `base_complex_edit` : 设置是否可以创建副本、下载、打印多维表格- `copy`: 设置是否可以复制多维表格内容该参数类型为 map，其中 key 是权限点位名称，value 是权限开关。value 枚举值有：- `0`：无权限- `1`：有权限**注意**：仅高级权限为 v2 版本的多维表格支持该参数。是否是 v2 版本可调用查看',
        )
        .optional(),
    }),
    path: z.object({
      app_token: z
        .string()
        .describe(
          '多维表格 App 的唯一标识。不同形态的多维表格，其 `app_token` 的获取方式不同：- 如果多维表格的 URL 以 ==**feishu.cn/base**== 开头，该多维表格的 `app_token` 是下图高亮部分： - 如果多维表格的 URL 以 ==**feishu.cn/wiki**== 开头，你需调用知识库相关接口获取多维表格的 app_token。当 `obj_type` 的值为 `bitable` 时，`obj_token` 字段的值才是多维表格的 `app_token`。了解更多，参考',
        ),
      role_id: z
        .string()
        .describe(
          '多维表格高级权限中自定义角色的唯一标识，以 rol 开头。获取方式：通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baseV2Tools = [baseV2AppRoleCreate, baseV2AppRoleList, baseV2AppRoleUpdate];
