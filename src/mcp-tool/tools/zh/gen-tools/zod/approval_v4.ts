import { z } from 'zod';
export type approvalV4ToolName =
  | 'approval.v4.approval.create'
  | 'approval.v4.approval.get'
  | 'approval.v4.approval.subscribe'
  | 'approval.v4.approval.unsubscribe'
  | 'approval.v4.externalApproval.create'
  | 'approval.v4.externalApproval.get'
  | 'approval.v4.externalInstance.check'
  | 'approval.v4.externalInstance.create'
  | 'approval.v4.externalTask.list'
  | 'approval.v4.instance.addSign'
  | 'approval.v4.instance.cancel'
  | 'approval.v4.instance.cc'
  | 'approval.v4.instanceComment.create'
  | 'approval.v4.instanceComment.delete'
  | 'approval.v4.instanceComment.list'
  | 'approval.v4.instanceComment.remove'
  | 'approval.v4.instance.create'
  | 'approval.v4.instance.get'
  | 'approval.v4.instance.list'
  | 'approval.v4.instance.preview'
  | 'approval.v4.instance.query'
  | 'approval.v4.instance.searchCc'
  | 'approval.v4.instance.specifiedRollback'
  | 'approval.v4.task.approve'
  | 'approval.v4.task.query'
  | 'approval.v4.task.reject'
  | 'approval.v4.task.resubmit'
  | 'approval.v4.task.search'
  | 'approval.v4.task.transfer';
export const approvalV4ApprovalCreate = {
  project: 'approval',
  name: 'approval.v4.approval.create',
  sdkName: 'approval.v4.approval.create',
  path: '/open-apis/approval/v4/approvals',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批定义-创建审批定义-该接口用于创建审批定义，可以灵活指定审批定义的基础信息、表单和流程等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_name: z.string().describe('审批名称的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符'),
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。使用说明：- 该参数不传值时，表示新建审批定义，最终响应结果会返回由系统自动生成的审批定义 Code。- 该参数传入指定审批定义 Code 时，表示调用该接口更新该审批定义内容，更新方式为覆盖原定义内容的全量更新。审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        )
        .optional(),
      description: z.string().describe('审批描述的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符').optional(),
      viewers: z
        .array(
          z.object({
            viewer_type: z
              .enum(['TENANT', 'DEPARTMENT', 'USER', 'NONE'])
              .describe(
                '审批定义的可见范围 Options:TENANT(当前企业内可见),DEPARTMENT(指定部门可见),USER(指定用户可见),NONE(任何人都不可见)',
              )
              .optional(),
            viewer_user_id: z
              .string()
              .describe('当 viewer_type 是 USER 时，需要通过该参数传入用户 ID，ID 类型与查询参数 user_id_type 取值一致')
              .optional(),
            viewer_department_id: z
              .string()
              .describe(
                '当 viewer_type 为DEPARTMENT，需要通过该参数传入部门 ID，ID 类型与查询参数 department_id_type 取值一致',
              )
              .optional(),
          }),
        )
        .describe(
          'viewers 字段指定了哪些人能从审批应用的前台发起该审批。使用说明： - 当 viewer_type 为 USER，需要填写 viewer_user_id - 当 viewer_type 为 DEPARTMENT，需要填写 viewer_department_id - 当 viewer_type 为 TENANT 或 NONE 时，无需填写 viewer_user_id 和 viewer_department_id**注意**：列表最大长度为 200',
        ),
      form: z
        .object({
          form_content: z
            .string()
            .describe(
              '审批定义表单。表单格式为 JSON 数组，实际传值时需要将 JSON 压缩转义为 String 类型。表单内各个控件的 JSON 字段说明参见。**注意**：以下示例值未转义，你可以参考下文**请求示例**章节的示例代码',
            ),
        })
        .describe('审批定义表单'),
      node_list: z
        .array(
          z.object({
            id: z
              .string()
              .describe(
                '节点 ID。- 开始节点的 ID 为 START- 结束节点的 ID 为 END开始和结束节点不需要指定 name、node_type 以及 approver',
              ),
            name: z.string().describe('节点名称的国际化文案 Key，以 `@i18n@` 开头，长度不得少于 9 个字符').optional(),
            node_type: z
              .enum(['AND', 'OR', 'SEQUENTIAL'])
              .describe(
                '当前节点的审批方式。**注意**：当该参数取值为依次审批（SEQUENTIAL）时，审批人类型（approver.type）必须为发起人自选（Free）。 Options:AND(会签，需要所有审批人同意才会通过审批),OR(或签，一名审批人同意即可通过审批),SEQUENTIAL(Sequental 依次审批，按照审批人顺序依次进行审批)',
              )
              .optional(),
            approver: z
              .array(
                z.object({
                  type: z
                    .enum([
                      'Supervisor',
                      'SupervisorTopDown',
                      'DepartmentManager',
                      'DepartmentManagerTopDown',
                      'Personal',
                      'Free',
                    ])
                    .describe(
                      '审批人类型。使用说明：- 该参数取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 参数中填写对应的级数。例如：由下往上三级主管审批，该参数取值 Supervisor 、level 参数取值 3。 - 该参数取值为 Personal 时，需要填写对应的 user_id ，用于指定用户。 - 该参数取值为 Free 时，无需指定 user_id 和 level。 Options:Supervisor(主管审批（由下往上）),SupervisorTopDown(主管审批（从上往下）),DepartmentManager(部门负责人审批（由下往上）),DepartmentManagerTopDown(部门负责人审批（从上往下）),Personal(指定成员),Free(发起人自选)',
                    ),
                  user_id: z
                    .string()
                    .describe(
                      '用户 ID。- type 取值 Personal 时需要通过该参数设置指定的用户。- ID 类型与查询参数 user_id_type 取值一致',
                    )
                    .optional(),
                  level: z
                    .string()
                    .describe(
                      '审批级数。当 type 取值为 Supervisor、SupervisorTopDown、DepartmentManager、DepartmentManagerTopDown 这 4 种时，需要在 level 中填写对应的级数。例如：由下往上三级主管审批，level 取值 3',
                    )
                    .optional(),
                }),
              )
              .describe('审批人列表')
              .optional(),
            ccer: z
              .array(
                z.object({
                  type: z
                    .enum([
                      'Supervisor',
                      'SupervisorTopDown',
                      'DepartmentManager',
                      'DepartmentManagerTopDown',
                      'Personal',
                      'Free',
                    ])
                    .describe(
                      '抄送人类型。使用说明：- 该参数取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 参数中填写对应的级数。例如：抄送由下往上三级主管，该参数取值 Supervisor 、level 参数取值 3。 - 该参数取值为 Personal 时，需要填写对应的 user_id ，用于指定用户。 - 该参数取值为 Free 时，无需指定 user_id 和 level。- 抄送人类型不支持设置为发起人自选（Free）。 Options:Supervisor(主管审批（由下往上）),SupervisorTopDown(主管审批（从上往下）),DepartmentManager(部门负责人审批（由下往上）),DepartmentManagerTopDown(部门负责人审批（从上往下）),Personal(指定成员),Free(发起人自选（抄送人类型不支持该选项）)',
                    ),
                  user_id: z
                    .string()
                    .describe(
                      '用户 ID。- type 取值 Personal 时需要通过该参数设置指定的用户。- ID 类型与查询参数 user_id_type 取值一致',
                    )
                    .optional(),
                  level: z
                    .string()
                    .describe(
                      '审批级数。当 type 取值为 Supervisor、SupervisorTopDown、DepartmentManager 、DepartmentManagerTopDown 这 4 种时，需要在 level 中填写对应的级数。例如：抄送由下往上三级主管，level 取值 3',
                    )
                    .optional(),
                }),
              )
              .describe('抄送人列表')
              .optional(),
            privilege_field: z
              .object({
                writable: z
                  .array(z.string())
                  .describe('可写权限的表单控件项的 ID 列表，ID 需要与表单参数（form）内传入的控件 ID 值保持一致'),
                readable: z
                  .array(z.string())
                  .describe('可读权限的表单控件项的 ID 列表，ID 需要与表单参数（form）内传入的控件 ID 值保持一致'),
              })
              .describe('表单内的控件权限')
              .optional(),
            approver_chosen_multi: z
              .boolean()
              .describe('发起人自选审批人时，是否允许多选。- true：允许- false：不允许')
              .optional(),
            approver_chosen_range: z
              .array(
                z.object({
                  type: z
                    .enum(['ALL', 'PERSONAL', 'ROLE'])
                    .describe('审批人类型 Options:ALL(全企业),PERSONAL(指定审批人),ROLE(指定角色)')
                    .optional(),
                  id_list: z
                    .array(z.string())
                    .describe(
                      'ID 列表。- 当 type 取值 ALL 时，无需传值。- 当 type 取值 PERSONAL 时，传入用户 ID，ID 类型与 user_id_type 取值一致。- 当 type 取值 ROLE 时，传入角色 ID。获取方式：成功后，在返回结果中可获取角色 ID',
                    )
                    .optional(),
                }),
              )
              .describe('发起人自选审批人时，可选择的范围')
              .optional(),
            starter_assignee: z
              .enum(['STARTER', 'AUTO_PASS', 'SUPERVISOR', 'DEPARTMENT_MANAGER'])
              .describe(
                '审批人为提交人本人时的操作 Options:STARTER(提交人本人进行审批),AUTO_PASS(自动通过),SUPERVISOR(提交人的直属上级进行审批),DEPARTMENT_MANAGER(提交人的直属部门负责人进行审批)',
              )
              .optional(),
          }),
        )
        .describe(
          '审批定义节点列表，用于设置审批流程所需要的各个节点，审批流程的始末固定为开始节点和结束节点，因此传值时需要将开始节点作为 list 第一个元素，结束节点作为 list 最后一个元素',
        ),
      settings: z
        .object({
          revert_interval: z
            .number()
            .describe('审批实例通过后允许撤回的时间，以秒为单位，默认 31 天，取值 0 为不可撤回')
            .optional(),
          revert_option: z
            .number()
            .describe('是否支持审批通过第一个节点后撤回，默认为 1 表示支持，取值为 0 表示不支持')
            .optional(),
          reject_option: z
            .number()
            .describe(
              '审批被拒绝后的设置 Options:0(RejectDefault 默认设置，流程被终止),1(RejectSubmit 退回至发起人，发起人可编辑流程后重新提交)',
            )
            .optional(),
          quick_approval_option: z
            .number()
            .describe('快捷审批配置项，开启后可在卡片上直接审批。**默认值**：1 Options:0(Close 禁用),1(Open 启用)')
            .optional(),
        })
        .describe('审批定义其他设置')
        .optional(),
      config: z
        .object({
          can_update_viewer: z.boolean().describe('是否允许用户修改可见范围**默认值**：false'),
          can_update_form: z.boolean().describe('是否允许用户更新表单**默认值**：false'),
          can_update_process: z.boolean().describe('是否允许用户更新流程定义**默认值**：false'),
          can_update_revert: z.boolean().describe('是否允许用户更新撤回设置**默认值**：false'),
          help_url: z.string().describe('审批定义的帮助文档链接').optional(),
        })
        .describe(
          '审批定义配置项，用于配置对应审批定义是否可以由用户在进行修改',
        )
        .optional(),
      icon: z
        .number()
        .describe(
          '审批图标枚举，默认为 0。下图从左至右，从上到下依次为 0~24 号图标。 ',
        )
        .optional(),
      i18n_resources: z
        .array(
          z.object({
            locale: z
              .enum(['zh-CN', 'en-US', 'ja-JP'])
              .describe('语言。 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)'),
            texts: z
              .array(
                z.object({
                  key: z
                    .string()
                    .describe(
                      '文案 key。key 以 `@i18n@` 开头，该字段主要用于做国际化，允许用户同时传多个语言的文案，审批中心会根据用户当前的语音环境使用对应的文案，如果没有传用户当前的语音环境文案，则会使用默认的语言文案',
                    ),
                  value: z.string().describe('文案内容'),
                }),
              )
              .describe('文案的 key、value'),
            is_default: z
              .boolean()
              .describe('是否为默认语言。默认语言需要包含所有 key，非默认语言如果 key 不存在会使用默认语言代替'),
          }),
        )
        .describe('国际化文案'),
      process_manager_ids: z
        .array(z.string())
        .describe('审批流程管理员的用户 ID 列表。- ID 类型与查询参数 user_id_type 取值一致- 列表最大长度为 200')
        .optional(),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门 ID 的类型。关于部门 ID 详细介绍参见。 Options:department_id(DepartmentId 支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(OpenDepartmentId 由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const approvalV4ApprovalGet = {
  project: 'approval',
  name: 'approval.v4.approval.get',
  sdkName: 'approval.v4.approval.get',
  path: '/open-apis/approval/v4/approvals/:approval_code',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-原生审批定义-查看指定审批定义-根据审批定义 Code 以及语言、用户 ID 等筛选条件获取指定审批定义的信息，包括审批定义名称、状态、表单控件以及节点等信息。获取审批定义信息后，可根据信息构造的请求',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      locale: z
        .enum(['zh-CN', 'en-US', 'ja-JP'])
        .describe(
          '语言可选值，默认为审批定义配置的默认语言。 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)',
        )
        .optional(),
      with_admin_id: z
        .boolean()
        .describe('是否返回有数据管理权限的审批流程管理员 ID 列表（即响应参数 approval_admin_ids）。**默认值**：false')
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
    }),
  },
};
export const approvalV4ApprovalSubscribe = {
  project: 'approval',
  name: 'approval.v4.approval.subscribe',
  sdkName: 'approval.v4.approval.subscribe',
  path: '/open-apis/approval/v4/approvals/:approval_code/subscribe',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-审批事件-事件接口-订阅审批事件-当应用后，需要调用该接口指定审批定义 Code（approval_code）开启订阅，开启后应用才可以接收该审批定义对应的事件',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
    }),
  },
};
export const approvalV4ApprovalUnsubscribe = {
  project: 'approval',
  name: 'approval.v4.approval.unsubscribe',
  sdkName: 'approval.v4.approval.unsubscribe',
  path: '/open-apis/approval/v4/approvals/:approval_code/unsubscribe',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-审批事件-事件接口-取消订阅审批事件-调用接口订阅审批定义 Code 后，如果不再需要接收该审批定义下的事件订阅通知，可以调用本接口取消订阅审批定义 Code，取消后应用无法再收到该审批定义对应实例的事件通知',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        )
        .optional(),
    }),
  },
};
export const approvalV4ExternalApprovalCreate = {
  project: 'approval',
  name: 'approval.v4.externalApproval.create',
  sdkName: 'approval.v4.externalApproval.create',
  path: '/open-apis/approval/v4/external_approvals',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-三方审批定义-创建三方审批定义-三方审批定义用于设置审批的名称、描述等基本信息，同时还需要设置三方审批系统的审批发起页、数据回调 URL 等信息，将飞书审批与三方审批系统关联起来，使企业员工在飞书审批内即可直接发起三方审批，且审批中心可以将审批数据回传给三方审批系统',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_name: z
        .string()
        .describe(
          '三方审批定义名称。- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- 该参数需要以 @i18n@ 开头，长度不得少于 9 个字符',
        ),
      approval_code: z
        .string()
        .describe(
          '该值用于判断调用当前接口是创建审批定义还是更新审批定义。具体说明：- 如果传入的值系统可以匹配到已存在的审批定义 approval_code，则调用该接口会更新相应的审批定义。- 如果传入的值系统匹配不到任何审批定义 approval_code，则会新建一个审批定义，并返回新建的审批定义真实的 approval_code（并非通过该参数传入的值）',
        ),
      group_code: z
        .string()
        .describe(
          '审批定义所属审批分组，用户自定义。具体说明：- 如果传入的 group_code 当前不存在，则会新建审批分组。- 如果 group_code 已经存在，则会使用 group_name 更新审批分组名称',
        ),
      group_name: z
        .string()
        .describe(
          '审批分组名称，审批发起页的审批定义分组名称来自该字段。具体说明：- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- 该参数需要以 @i18n@ 开头。- 如果 group_code 当前不存在，则该 group_name 必填，表示新建审批分组时设置分组名称。- 如果 group_code 存在，则会更新分组名称，不填则不更新分组名称',
        )
        .optional(),
      description: z
        .string()
        .describe(
          '审批定义的说明，后续企业员工发起审批时，该说明会在审批发起页展示。 - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- 该参数需要以 @i18n@ 开头',
        )
        .optional(),
      external: z
        .object({
          biz_name: z
            .string()
            .describe(
              '列表中用于提示审批来自哪个三方系统。 **注意**：- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- 该参数需要以 @i18n@ 开头。- 在 i18n_resources 中为该参数赋值时，无需设置 **来自** 前缀，审批中心默认会拼接 **来自** 前缀',
            )
            .optional(),
          biz_type: z.string().describe('审批定义业务类别，自定义设置').optional(),
          create_link_mobile: z
            .string()
            .describe(
              '移动端发起三方审批的链接。- 如果设置了该链接，则在移动端发起审批时，会跳转到该链接对应的三方审批发起页。- 如果不设置该链接，则在移动端不显示该审批',
            )
            .optional(),
          create_link_pc: z
            .string()
            .describe(
              'PC端发起三方审批的链接。 - 如果设置了该链接，则在 PC 端发起审批时，会跳转到该链接对应的三方审批发起页。- 如果不设置该链接，则在 PC 端不显示该审批',
            )
            .optional(),
          support_pc: z
            .boolean()
            .describe(
              '审批定义是否要在 PC 端的发起审批页面展示，如果为 true 则展示，否则不展示。**注意**：support_pc 和 support_mobile 不可都为 false',
            )
            .optional(),
          support_mobile: z
            .boolean()
            .describe(
              '审批定义是否要在移动端的发起审批页面展示，如果为 true 则展示，否则不展示。**注意**：support_pc 和 support_mobile 不可都为 false',
            )
            .optional(),
          support_batch_read: z.boolean().describe('是否支持批量已读').optional(),
          enable_mark_readed: z.boolean().describe('是否支持标注可读**注意**：该字段无效，暂不支持使用').optional(),
          enable_quick_operate: z.boolean().describe('是否支持快速操作**注意**：该字段无效，暂不支持使用').optional(),
          action_callback_url: z
            .string()
            .describe(
              '三方系统的操作回调 URL，**待审批** 实例的任务审批人点击同意或拒绝操作后，审批中心调用该 URL 通知三方系统，回调地址相关信息可参见',
            )
            .optional(),
          action_callback_token: z.string().describe('回调时带的 token，用于业务系统验证请求来自审批中心').optional(),
          action_callback_key: z
            .string()
            .describe(
              '请求参数加密密钥。如果配置了该参数，则会对请求参数进行加密，接收请求后需要对请求进行解密。加解密算法参考',
            )
            .optional(),
          allow_batch_operate: z
            .boolean()
            .describe('是否支持批量审批。取值为 true 时，审批人在处理该定义下的审批任务时可以批量处理多个任务')
            .optional(),
          exclude_efficiency_statistics: z.boolean().describe('审批流程数据是否不纳入效率统计').optional(),
        })
        .describe('三方审批相关信息'),
      viewers: z
        .array(
          z.object({
            viewer_type: z
              .enum(['TENANT', 'DEPARTMENT', 'USER', 'NONE'])
              .describe(
                '可见人类型 Options:TENANT(租户内可见),DEPARTMENT(指定部门),USER(指定用户),NONE(任何人都不可见)',
              )
              .optional(),
            viewer_user_id: z
              .string()
              .describe('当 viewer_type 取值为 USER 时，需指定用户 ID。ID 类型与查询参数 user_id_type 取值保持一致')
              .optional(),
            viewer_department_id: z
              .string()
              .describe(
                '当 view_type 取值为 DEPARTMENT 时，需指定部门 ID。ID 类型与查询参数 department_id_type 取值保持一致',
              )
              .optional(),
          }),
        )
        .describe(
          '审批可见人列表，列表长度上限 200，只有在审批可见人列表内的用户，才可以在审批发起页看到该审批。若该参数不传值，则表示任何人不可见',
        )
        .optional(),
      i18n_resources: z
        .array(
          z.object({
            locale: z
              .enum(['zh-CN', 'en-US', 'ja-JP'])
              .describe('语言。 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)'),
            texts: z
              .array(
                z.object({
                  key: z.string().describe('文案 Key，需要和各个参数 Key 相匹配'),
                  value: z.string().describe('文案 Value，即文案 Key 对应的参数值'),
                }),
              )
              .describe(
                '文案的 Key:Value。Key 需要以 @i18n@ 开头，并按照各个参数的要求传入 Value。 **说明**：该字段主要用于适配国际化，允许同时设置多个语言的文案，审批中心会根据实际用户当前的语音环境使用匹配的文案。如果没有设置用户当前的语音环境文案，则会使用默认的语言文案',
              ),
            is_default: z
              .boolean()
              .describe(
                '是否为默认语言。默认语言需要包含所有所需的文案 Key，非默认语言如果 Key 不存在，则会使用默认语言代替',
              ),
          }),
        )
        .describe('国际化文案')
        .optional(),
      managers: z
        .array(z.string())
        .describe('设置审批流程管理员的用户 ID，最多支持设置 200 个。ID 类型与查询参数 user_id_type 取值一致')
        .optional(),
    }),
    params: z.object({
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:department_id(DepartmentId 支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),open_department_id(OpenDepartmentId 由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const approvalV4ExternalApprovalGet = {
  project: 'approval',
  name: 'approval.v4.externalApproval.get',
  sdkName: 'approval.v4.externalApproval.get',
  path: '/open-apis/approval/v4/external_approvals/:approval_code',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-三方审批定义-查看指定三方审批定义-调用该接口通过三方审批定义 Code 获取审批定义的详细数据，包括三方审批定义的名称、说明、三方审批发起链接、回调 URL 以及审批定义可见人列表等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      approval_code: z
        .string()
        .describe(
          '三方审批定义 Code。获取方式：- 调用时，会返回审批定义 Code。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
    }),
  },
};
export const approvalV4ExternalInstanceCheck = {
  project: 'approval',
  name: 'approval.v4.externalInstance.check',
  sdkName: 'approval.v4.externalInstance.check',
  path: '/open-apis/approval/v4/external_instances/check',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-三方审批实例-校验三方审批实例-调用该接口校验三方审批实例数据，用于判断服务端数据是否为最新的。请求时提交实例最新更新时间，如果服务端不存在该实例，或者服务端实例更新时间不是最新的，则返回对应实例 ID。例如，设置定时任务每隔 5 分钟，将最近 5 分钟产生的实例使用该接口进行对比。如果数据在服务端不存在或者不是最新，则可以根据本接口返回的实例 ID、任务 ID，前往',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      instances: z
        .array(
          z.object({
            instance_id: z
              .string()
              .describe(
                '审批实例 ID。自定义配置，需要确保当前企业、应用内唯一。**注意**：调用本接口和接口操作同一个三方审批实例时，需要确保所用的实例 ID 一致',
              ),
            update_time: z.string().describe('审批实例最近更新时间，Unix 毫秒时间戳'),
            tasks: z
              .array(
                z.object({
                  task_id: z
                    .string()
                    .describe(
                      '审批实例内的审批任务 ID。自定义配置，需要确保当前企业、应用内唯一。**注意**：调用本接口和接口操作同一个三方审批实例内的任务时，需要确保所用的任务 ID 一致',
                    ),
                  update_time: z.string().describe('任务最近更新时间，Unix 毫秒时间戳'),
                }),
              )
              .describe('任务信息'),
          }),
        )
        .describe('校验的实例信息'),
    }),
  },
};
export const approvalV4ExternalInstanceCreate = {
  project: 'approval',
  name: 'approval.v4.externalInstance.create',
  sdkName: 'approval.v4.externalInstance.create',
  path: '/open-apis/approval/v4/external_instances',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-三方审批实例-同步三方审批实例-审批中心不负责审批的流转，审批的流转在三方系统。本接口用于把三方系统在审批流转后生成的审批实例、审批任务、审批抄送数据同步到审批中心',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。的返回值，用来指定当前实例属于的审批定义。 **说明**：如果在当前接口设置了 title 参数，则审批实例名称按照 title 展示。如果未设置 title，审批实例的标题取自对应审批定义（approval_code）的 name 参数',
        ),
      status: z
        .enum(['PENDING', 'APPROVED', 'REJECTED', 'CANCELED', 'DELETED', 'HIDDEN', 'TERMINATED'])
        .describe(
          '审批实例状态 Options:PENDING(审批中),APPROVED(审批流程结束，结果为同意),REJECTED(审批流程结束，结果为拒绝),CANCELED(审批发起人撤回),DELETED(审批被删除),HIDDEN(状态隐藏（不显示状态）),TERMINATED(审批终止)',
        ),
      extra: z
        .string()
        .describe(
          '审批实例扩展参数，JSON 格式，传值时需要压缩转义为字符串。单据编号通过传 business_key 参数来实现。**注意**：以下示例值未转义，使用时请注意转义。你可查看请求体示例中转义后的 extra 示例值',
        )
        .optional(),
      instance_id: z.string().describe('审批实例唯一标识，自定义设置。需确保证在当前企业和应用内唯一'),
      links: z
        .object({
          pc_link: z
            .string()
            .describe(
              'PC 端的三方审批实例跳转链接。 **说明**： - 当用户使用飞书 PC 端查看实例详情时，通过该链接进行跳转。- pc_link 和 mobile_link 至少填一个',
            ),
          mobile_link: z
            .string()
            .describe(
              '移动端的三方审批实例跳转链接。 **说明**： - 当用户使用飞书移动端查看实例详情时，通过该链接进行跳转。- pc_link 和 mobile_link 至少填一个',
            )
            .optional(),
        })
        .describe('审批实例链接信息。设置的链接用于在审批中心 **已发起** 列表内点击跳转，跳回三方审批系统查看审批详情'),
      title: z
        .string()
        .describe(
          '审批展示名称。 **说明**：- 如果填写了该参数，则审批列表中的审批名称使用该参数。如果不填该参数，则审批名称使用审批定义的名称。- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
        )
        .optional(),
      form: z
        .array(
          z.object({
            name: z
              .string()
              .describe(
                '表单字段名称。 **说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
              )
              .optional(),
            value: z
              .string()
              .describe(
                '表单值。 **说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
              )
              .optional(),
          }),
        )
        .describe(
          '用户提交审批时填写的表单数据，用于所有审批列表中展示。可传多个值，最多展示前 3 个，长度不超过 2048 字符。',
        )
        .optional(),
      user_id: z
        .string()
        .describe(
          '审批发起人 user_id。发起人可在审批中心的 **已发起** 列表中看到所有已发起的审批。在 **待办**、**已办**、**抄送我** 列表中，该字段用来展示审批的发起人。获取方式参见。 **注意**：审批发起人的 open_id 和 user_id 需至少传入一个',
        )
        .optional(),
      user_name: z
        .string()
        .describe(
          '审批发起人的用户名。如果发起人不是真实的用户（例如是某个部门），没有 user_id，则可以使用该参数传入一个名称。 **说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
        )
        .optional(),
      open_id: z
        .string()
        .describe(
          '审批发起人 open_id。发起人可在审批中心的 **已发起** 列表中看到所有已发起的审批。在 **待办**、**已办**、**抄送我** 列表中，该字段用来展示审批的发起人。获取方式参见。 **注意**：审批发起人的 open_id 和 user_id 需至少传入一个',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '发起人的部门 ID，用于在审批中心列表中展示发起人的所属部门，不传值则不展示。获取方式参见。 **说明**：如果用户没加入任何部门，传 `""`，默认展示企业名称。如果传入 department_name 参数，则展示对应的部门名称',
        )
        .optional(),
      department_name: z
        .string()
        .describe(
          '审批发起人的部门名称。如果发起人不是真实的用户或没有部门，则可以使用该参数传入部门名称。**说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
        )
        .optional(),
      start_time: z.string().describe('审批发起时间，Unix 毫秒时间戳'),
      end_time: z.string().describe('审批实例结束时间。未结束的审批为 0，Unix 毫秒时间戳'),
      update_time: z
        .string()
        .describe(
          '审批实例最近更新时间，用于推送数据版本控制。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批实例信息。 **说明**：使用该参数主要用来避免并发时，旧数据更新了新数据',
        ),
      display_method: z
        .enum(['BROWSER', 'SIDEBAR', 'NORMAL', 'TRUSTEESHIP'])
        .describe(
          '列表页打开审批实例的方式。 Options:BROWSER(跳转系统默认浏览器打开),SIDEBAR(飞书中侧边抽屉打开),NORMAL(飞书内嵌页面打开),TRUSTEESHIP(以托管打开（即托管在飞书审批中心打开）)',
        )
        .optional(),
      update_mode: z
        .enum(['REPLACE', 'UPDATE'])
        .describe(
          '更新方式。 - 当 update_mode 取值为 REPLACE 时，每次都以当前推送的数据为最终数据，会删掉审批中心中，不在本次推送数据中的多余的任务、抄送数据。- 当 update_mode 取值为 UPDATE 时，不会删除审批中心的数据，而只进行新增、更新实例与任务数据。**默认值**：REPLACE Options:REPLACE(全量替换),UPDATE(增量更新)',
        )
        .optional(),
      task_list: z
        .array(
          z.object({
            task_id: z.string().describe('审批实例内，审批任务的唯一标识，用于更新审批任务时定位数据'),
            user_id: z
              .string()
              .describe(
                '审批人 user_id，获取方式参见。 **说明**： - 该任务会出现在审批人的飞书审批中心 **待办** 或 **已办** 的列表中。- user_id 与 open_id 需至少传入一个',
              )
              .optional(),
            open_id: z
              .string()
              .describe(
                '审批人 open_id，获取方式参见。 **说明**： - 该任务会出现在审批人的飞书审批中心 **待办** 或 **已办** 的列表中。- user_id 与 open_id 需至少传入一个',
              )
              .optional(),
            title: z
              .string()
              .describe(
                '审批任务名称。 **说明**：- 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
              )
              .optional(),
            links: z
              .object({
                pc_link: z
                  .string()
                  .describe(
                    'PC 端的跳转链接。 **说明**： - 当用户使用飞书 PC 端查看任务详情时，通过该链接进行跳转。- pc_link 和 mobile_link 至少填一个',
                  ),
                mobile_link: z
                  .string()
                  .describe(
                    '移动端的跳转链接。 **说明**： - 当用户使用飞书移动端查看任务详情时，通过该链接进行跳转。- pc_link 和 mobile_link 至少填一个',
                  )
                  .optional(),
              })
              .describe('在审批中心 **待办**、**已办** 中使用的三方审批跳转链接，用于跳转回三方审批系统查看任务详情'),
            status: z
              .enum(['PENDING', 'APPROVED', 'REJECTED', 'TRANSFERRED', 'DONE'])
              .describe(
                '任务状态 Options:PENDING(待审批),APPROVED(任务同意),REJECTED(Reject 任务拒绝),TRANSFERRED(Transefrred 任务转交),DONE(任务通过但审批人未操作。审批人看不到该任务时，如需查看可抄送至该审批人。)',
              ),
            extra: z
              .string()
              .describe(
                '扩展字段。JSON 格式，传值时需要压缩转义为字符串。任务结束原因需传 complete_reason 参数，枚举值说明： - approved：同意 - rejected：拒绝 - node_auto_reject：因逻辑判断产生的自动拒绝 - specific_rollback：退回（包括退回到发起人、退回到中间任一审批人） - add：并加签（添加新审批人，与我一起审批） - add_pre：前加签（添加新审批人，在我之前审批） - add_post：后加签（添加新审批人，在我之后审批） - delete_assignee：减签 - forward: 手动转交 - forward_resign：离职自动转交 - recall：撤销（撤回单据，单据失效） - delete ：删除审批单 - admin_forward：管理员在后台操作转交 - system_forward：系统自动转交 - auto_skip：自动通过 - manual_skip：手动跳过 - submit_again：重新提交任务 - restart：重新启动流程 - others：其他',
              )
              .optional(),
            create_time: z.string().describe('任务创建时间，Unix 毫秒时间戳'),
            end_time: z.string().describe('任务完成时间。未结束的审批为 0，Unix 毫秒时间戳'),
            update_time: z
              .string()
              .describe(
                '任务最近更新时间，用于推送数据版本控制。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批任务信息',
              )
              .optional(),
            action_context: z
              .string()
              .describe('操作上下文。当用户操作审批时，回调请求中会包含该参数，用于传递该任务的上下文数据')
              .optional(),
            action_configs: z
              .array(
                z.object({
                  action_type: z
                    .string()
                    .describe(
                      '操作类型。每个任务都可以配置两个操作（同意、拒绝或任意中的两个），操作会展示审批列表中。当用户操作时，回调请求会包含该字段，三方审批可接受到审批人的操作数据。**可选值有**：<md-enum><md-enum-item key="APPROVE" >同意</md-enum-item><md-enum-item key="REJECT" >拒绝</md-enum-item><md-enum-item key="{KEY}" >任意字符串。如果使用任意字符串，则需要提供 action_name</md-enum-item></md-enum>',
                    ),
                  action_name: z
                    .string()
                    .describe(
                      '操作名称。如果 action_type 不等于 APPROVAL 或 REJECT，则必须提供该字段，用于展示特定的操作名称。 **说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
                    )
                    .optional(),
                  is_need_reason: z
                    .boolean()
                    .describe('是否需要审批意见。取值为 true 时，审批人在审批中心操作任务后，还需要跳转填写审批意见')
                    .optional(),
                  is_reason_required: z.boolean().describe('审批意见是否必填').optional(),
                  is_need_attachment: z.boolean().describe('审批意见是否支持上传附件').optional(),
                }),
              )
              .describe('任务级别的快捷审批操作配置。 **注意**：快捷审批目前仅支持在飞书移动端操作')
              .optional(),
            display_method: z
              .enum(['BROWSER', 'SIDEBAR', 'NORMAL', 'TRUSTEESHIP'])
              .describe(
                '审批中心列表页打开审批任务的方式。 Options:BROWSER(跳转系统默认浏览器打开),SIDEBAR(Sidbar 飞书中侧边抽屉打开),NORMAL(飞书内嵌页面打开),TRUSTEESHIP(以托管模式打开)',
              )
              .optional(),
            exclude_statistics: z
              .boolean()
              .describe('三方审批任务是否不纳入效率统计。可选值有：- true：不纳入效率统计- false：纳入效率统计')
              .optional(),
            node_id: z
              .string()
              .describe(
                '审批节点 ID。必须同时满足：- 一个审批流程内，每个节点 ID 唯一。例如，一个流程下直属上级、隔级上级等节点的 node_id 均不一样。- 同一个三方审批定义内，不同审批实例中的相同节点，node_id 要保持不变。例如，用户 A 和用户 B 分别发起了请假申请，这两个审批实例中的直属上级节点的 node_id 应该保持一致',
              )
              .optional(),
            node_name: z
              .string()
              .describe(
                '节点名称。**说明**： - 这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值。- Key 需要以 @i18n@ 开头',
              )
              .optional(),
          }),
        )
        .describe('任务列表')
        .optional(),
      cc_list: z
        .array(
          z.object({
            cc_id: z.string().describe('审批实例内抄送唯一标识'),
            user_id: z
              .string()
              .describe(
                '抄送人的 user_id。获取方式参见。 **注意**：抄送人的 open_id 和 user_id 需至少传入一个',
              )
              .optional(),
            open_id: z
              .string()
              .describe(
                '抄送人的 open_id。获取方式参见。 **注意**：抄送人的 open_id 和 user_id 需至少传入一个',
              )
              .optional(),
            links: z
              .object({
                pc_link: z
                  .string()
                  .describe(
                    'PC 端的三方审批实例跳转链接。 **说明**： - 当用户使用飞书 PC 端查看审批抄送时，通过该字段进行跳转。- pc_link 和 mobile_link 至少填一个',
                  ),
                mobile_link: z
                  .string()
                  .describe(
                    '移动端的三方审批实例跳转链接。 **说明**： - 当用户使用飞书移动端查看审批抄送时，通过该字段进行跳转。- pc_link 和 mobile_link 至少填一个',
                  )
                  .optional(),
              })
              .describe(
                '审批抄送跳转链接。设置的链接用于在审批中心 **抄送我** 列表内点击跳转，跳回三方审批系统查看审批抄送详情',
              ),
            read_status: z
              .enum(['READ', 'UNREAD'])
              .describe('抄送人的阅读状态，空值表示不支持已读未读。 Options:READ(已读),UNREAD(未读)'),
            extra: z.string().describe('扩展字段。JSON 格式，传值时需要压缩转义为字符串').optional(),
            title: z.string().describe('抄送任务名称').optional(),
            create_time: z.string().describe('抄送发起时间，Unix 毫秒时间戳'),
            update_time: z
              .string()
              .describe(
                '抄送最近更新时间，用于推送数据版本。如果 update_mode 值为 UPDATE，则仅当传过来的 update_time 有变化时（变大），才会更新审批中心中的审批实例信息',
              ),
            display_method: z
              .enum(['BROWSER', 'SIDEBAR', 'NORMAL', 'TRUSTEESHIP'])
              .describe(
                '列表页打开审批任务的方式。 Options:BROWSER(跳转系统默认浏览器打开),SIDEBAR(飞书中侧边抽屉打开),NORMAL(飞书内嵌页面打开),TRUSTEESHIP(以托管模式打开)',
              )
              .optional(),
          }),
        )
        .describe('抄送列表')
        .optional(),
      i18n_resources: z
        .array(
          z.object({
            locale: z
              .enum(['zh-CN', 'en-US', 'ja-JP'])
              .describe('语言 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)'),
            texts: z
              .array(
                z.object({
                  key: z.string().describe('文案 Key，需要和各个参数 Key 相匹配'),
                  value: z.string().describe('文案 Value，即文案 Key 对应的参数值'),
                }),
              )
              .describe(
                '文案的 Key:Value。Key 需要以 @i18n@ 开头，并按照各个参数的要求传入 Value。该字段主要用于做国际化，允许用户同时传多个语言的文案，审批中心会根据用户当前的语音环境使用对应的文案，如果没有传用户当前的语音环境文案，则会使用默认的语言文案',
              ),
            is_default: z
              .boolean()
              .describe(
                '是否为默认语言。默认语言需要包含所有所需的文案 Key，非默认语言如果 Key 不存在，则会使用默认语言代替',
              ),
          }),
        )
        .describe('国际化文案'),
      trusteeship_url_token: z.string().describe('单据托管认证 token，托管回调会附带此 token，帮助业务认证').optional(),
      trusteeship_user_id_type: z
        .string()
        .describe('用户的类型，会影响请求参数用户标识域的选择，包括加签操作回传的目标用户， 目前仅支持 user_id')
        .optional(),
      trusteeship_urls: z
        .object({
          form_detail_url: z.string().describe('获取表单 schema 相关数据的 URL 地址').optional(),
          action_definition_url: z.string().describe('表示获取审批操作区数据的 URL 地址').optional(),
          approval_node_url: z.string().describe('获取审批记录相关数据的 URL 地址').optional(),
          action_callback_url: z.string().describe('进行审批操作时回调的 URL 地址').optional(),
          pull_business_data_url: z
            .string()
            .describe(
              '获取托管动态数据 URL 地址。使用该接口时，必须要保证历史托管单据的数据中都同步了该接口地址。如果历史单据中没有该接口，需要重新同步历史托管单据的数据来更新该 URL。该接口用于飞书审批前端和业务进行交互使用，只有使用审批前端的特定组件（由飞书审批前端提供的组件，并且需要和业务进行接口交互的组件）才会需要',
            )
            .optional(),
        })
        .describe('单据托管回调接入方的接口 URL 地址')
        .optional(),
      trusteeship_cache_config: z
        .object({
          form_policy: z
            .enum(['DISABLE', 'IMMUTABLE', 'BY_NODE', 'BY_USER'])
            .describe(
              '托管预缓存策略。 Options:DISABLE(不启用，默认),IMMUTABLE(表单不会随流程进行改变),BY_NODE(ByNode 跟随流程节点变更更新缓存),BY_USER(ByUser 对于每个待办任务存储一份)',
            )
            .optional(),
          form_vary_with_locale: z.boolean().describe('表单是否随国际化改变').optional(),
          form_version: z
            .string()
            .describe('当前使用的表单版本号，保证表单改变后，版本号增加，实际值为 int64 整数')
            .optional(),
        })
        .describe('托管预缓存策略')
        .optional(),
    }),
  },
};
export const approvalV4ExternalTaskList = {
  project: 'approval',
  name: 'approval.v4.externalTask.list',
  sdkName: 'approval.v4.externalTask.list',
  path: '/open-apis/approval/v4/external_tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-三方审批任务-获取三方审批任务状态-该接口用于获取三方审批的状态。用户传入查询条件，接口返回满足条件的审批实例的状态',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_codes: z.array(z.string()).describe('审批定义 Code，用于指定只获取这些定义下的数据').optional(),
      instance_ids: z
        .array(z.string())
        .describe('审批实例 ID, 用于指定只获取这些实例下的数据，最多支持 20 个')
        .optional(),
      user_ids: z.array(z.string()).describe('审批人 user_id，用于指定只获取这些用户的数据').optional(),
      status: z
        .enum(['PENDING', 'APPROVED', 'REJECTED', 'TRANSFERRED', 'DONE'])
        .describe(
          '审批任务状态，用于指定获取该状态下的数据 Options:PENDING(审批中),APPROVED(审批流程结束，结果为同意),REJECTED(审批流程结束，结果为拒绝),TRANSFERRED(任务转交),DONE(任务通过但审批人未操作；审批人看不到这个任务, 若想要看到, 可以通过抄送该人.)',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const approvalV4InstanceAddSign = {
  project: 'approval',
  name: 'approval.v4.instance.addSign',
  sdkName: 'approval.v4.instance.addSign',
  path: '/open-apis/approval/v4/instances/add_sign',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-原生审批任务-审批任务加签',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('操作用户id'),
      approval_code: z.string().describe('审批定义code'),
      instance_code: z.string().describe('审批实例code'),
      task_id: z.string().describe('任务id'),
      comment: z.string().describe('意见').optional(),
      add_sign_user_ids: z.array(z.string()).describe('被加签人id'),
      add_sign_type: z
        .number()
        .describe(
          '1/2/3分别代表前加签/后加签/并加签 Options:1(add_sign_pre 前加签),2(add_sign_post 后加签),3(add_sign_parallel 并加签)',
        ),
      approval_method: z
        .number()
        .describe(
          '仅在前加签、后加签时需要填写，1/2 分别代表或签/会签 Options:1(or_sign 或签),2(add_sign 会签),3(sequential_sign 依次审批)',
        )
        .optional(),
    }),
  },
};
export const approvalV4InstanceCancel = {
  project: 'approval',
  name: 'approval.v4.instance.cancel',
  sdkName: 'approval.v4.instance.cancel',
  path: '/open-apis/approval/v4/instances/cancel',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批实例-撤回审批实例-如果企业管理员在审批后台的某一审批定义的 **更多设置** 中，勾选了 **允许撤销审批中的申请** 或者 **允许撤销 x 天内通过的审批**，则在符合撤销规则的情况下，你可以调用本接口将指定提交人的审批实例撤回',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('审批提交人的用户 ID，ID 类型与查询参数 user_id_type 的取值一致'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4InstanceCc = {
  project: 'approval',
  name: 'approval.v4.instance.cc',
  sdkName: 'approval.v4.instance.cc',
  path: '/open-apis/approval/v4/instances/cc',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批实例-抄送审批实例-调用该接口将当前审批实例抄送给指定用户。被抄送的用户可以查看审批实例详情。例如，在飞书客户端的 **工作台 > 审批 > 审批中心 > 抄送我** 列表中查看到审批实例',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('发起当前操作的用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
      cc_user_ids: z.array(z.string()).describe('抄送人的用户 ID 列表，ID 类型与查询参数 user_id_type 取值一致'),
      comment: z.string().describe('抄送留言').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4InstanceCommentCreate = {
  project: 'approval',
  name: 'approval.v4.instanceComment.create',
  sdkName: 'approval.v4.instanceComment.create',
  path: '/open-apis/approval/v4/instances/:instance_id/comments',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批评论-创建评论-在指定审批实例下创建、修改评论或回复评论（不包含审批同意、拒绝、转交等附加的理由或意见）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      content: z
        .string()
        .describe(
          '评论内容，JSON 格式，传入时需要压缩转义为字符串。以下示例值未转义，你可参考请求体示例中的示例 content 进行编辑。**JSON 内参数说明**：- text：string 类型，评论文本内容。- files：Attachment[] 类型，附件信息。 - url：string 类型，附件链接。 - thumbnailURL：string 类型，缩略图链接。 - fileSize：int64 类型，文件大小。 - title：string 类型，标题。 - type：string 类型，附件类型，取值 image 表示图片类型。**注意**：- 如需 @用户，则需要在该参数内设置用户名的文本，例如 `@username`，同时通过 at_info_list 参数实现 @ 效果。- 对于附件，在 PC 端使用 HTTP 资源链接传图片资源可能会导致缩略图异常，建议使用 HTTPS 传资源附件',
        )
        .optional(),
      at_info_list: z
        .array(
          z.object({
            user_id: z.string().describe('被艾特人的 ID，ID 类型与查询参数 user_id_type 取值一致'),
            name: z.string().describe('被艾特人的姓名'),
            offset: z
              .string()
              .describe(
                '被艾特人在评论中的位置，从 0 开始。用于偏移覆盖。例如：- 取值为 0 时的效果：@username 示例文本- 取值为 2 时的效果：示例 @username 文本- 取值为 4 时的效果：示例文本 @username **注意**：该参数生效方式是覆盖生效，因此你需要先通过 content 参数设置用户名称的文本内容，然后再通过该参数将实际生效的@效果覆盖到用户名称的文本内容上',
              ),
          }),
        )
        .describe('评论中艾特人信息')
        .optional(),
      parent_comment_id: z
        .string()
        .describe(
          '父评论 ID，如果是回复评论，需要传入该值。获取方式：- 调用当前接口成功后会返回本次评论的 ID，你可以保存用于下次使用。- 调用接口，获取评论 ID',
        )
        .optional(),
      comment_id: z
        .string()
        .describe(
          '评论 ID。如果需要编辑、删除一条评论，则需要将该评论的 ID 传入当前参数。获取方式：- 调用当前接口成功后会返回本次评论的 ID，你可以保存用于下次使用。- 调用接口，获取评论 ID',
        )
        .optional(),
      disable_bot: z
        .boolean()
        .describe(
          '是否不启用 Bot，取值为 true 时只同步数据，不触发 Bot。**说明**：飞书审批中自定义审批填写 false，其他情况填写 true',
        )
        .optional(),
      extra: z.string().describe('附加字段，JSON 格式，传入时需要压缩转义为字符串').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      user_id: z.string().describe('用户 ID，ID 类型与 user_id_type 取值一致'),
    }),
    path: z.object({
      instance_id: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code。说明：支持传入自定义审批实例 ID',
        ),
    }),
  },
};
export const approvalV4InstanceCommentDelete = {
  project: 'approval',
  name: 'approval.v4.instanceComment.delete',
  sdkName: 'approval.v4.instanceComment.delete',
  path: '/open-apis/approval/v4/instances/:instance_id/comments/:comment_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-审批-原生审批评论-删除评论-删除某审批实例下的一条评论或评论回复（不包含审批同意、拒绝、转交等附加的理由或意见），删除后在审批中心的审批实例内不再显示评论内容，而是显示 **评论已删除**',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      user_id: z.string().describe('用户 ID，ID 类型与 user_id_type 取值一致'),
    }),
    path: z.object({
      instance_id: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code。说明：支持传入自定义审批实例 ID',
        ),
      comment_id: z
        .string()
        .describe(
          '评论 ID。获取方式：- 调用成功会返回评论 ID。- 调用接口，获取评论 ID',
        ),
    }),
  },
};
export const approvalV4InstanceCommentList = {
  project: 'approval',
  name: 'approval.v4.instanceComment.list',
  sdkName: 'approval.v4.instanceComment.list',
  path: '/open-apis/approval/v4/instances/:instance_id/comments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-原生审批评论-获取评论-根据审批实例 Code 获取某个审批实例下，全部评论与评论回复（不包含审批同意、拒绝、转交等附加的理由或意见）',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      user_id: z.string().describe('用户 ID，ID 类型与 user_id_type 取值一致'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，用于限制一次请求返回的数据量上限').optional(),
    }),
    path: z.object({
      instance_id: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code。**说明**：支持传入自定义审批实例 ID',
        ),
    }),
  },
};
export const approvalV4InstanceCommentRemove = {
  project: 'approval',
  name: 'approval.v4.instanceComment.remove',
  sdkName: 'approval.v4.instanceComment.remove',
  path: '/open-apis/approval/v4/instances/:instance_id/comments/remove',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-原生审批评论-清空评论-清空某审批实例下的全部评论与评论回复，包括显示为已删除的评论',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      user_id: z.string().describe('用户 ID，ID 类型与 user_id_type 取值一致').optional(),
    }),
    path: z.object({
      instance_id: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code。**说明**：支持传入自定义审批实例 ID',
        ),
    }),
  },
};
export const approvalV4InstanceCreate = {
  project: 'approval',
  name: 'approval.v4.instance.create',
  sdkName: 'approval.v4.instance.create',
  path: '/open-apis/approval/v4/instances',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批实例-创建审批实例-调用本接口使用指定审批定义 Code 创建一个审批实例，接口调用者需对审批定义的表单有详细了解，按照定义的表单结构，将表单 Value 通过本接口传入',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      user_id: z
        .string()
        .describe(
          '审批发起人的 user_id，与 open_id 必须传入其中一个。如果传入了 user_id 则优先使用 user_id。获取方式参考',
        )
        .optional(),
      open_id: z
        .string()
        .describe(
          '审批发起人的 open_id，与 user_id 必须传入其中一个。如果传入了 user_id 则优先使用 user_id。获取方式参考',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '审批发起人所属部门 ID。如果用户只属于一个部门，可以不填。如果用户属于多个部门，不填值则默认选择部门列表第一个部门。获取方式参见。**说明**：- 不支持填写根部门。- 需填写 open_department_id 类型的部门 ID',
        )
        .optional(),
      form: z
        .string()
        .describe(
          '填写的审批表单控件值，JSON 数组，传值时需要压缩转义为字符串。各控件值的参数说明参考',
        ),
      node_approver_user_id_list: z
        .array(
          z.object({
            key: z
              .string()
              .describe(
                '节点的 node_id 或 custom_node_id，可调用  接口，从接口返回的 node_list 参数中获取',
              )
              .optional(),
            value: z
              .array(z.string())
              .describe(
                '审批人列表，需传入用户 user_id。获取方式参考',
              )
              .optional(),
          }),
        )
        .describe(
          '如果审批定义的流程中，有节点需要发起人自选审批人，则需要通过本参数填写对应节点的审批人（通过用户 user_id 指定审批人）。**说明**：如果同时传入了 node_approver_user_id_list、node_approver_open_id_list，则取两个参数的并集生效审批人',
        )
        .optional(),
      node_approver_open_id_list: z
        .array(
          z.object({
            key: z
              .string()
              .describe(
                '节点的 node_id 或 custom_node_id，可调用  接口，从接口返回的 node_list 参数中获取',
              )
              .optional(),
            value: z
              .array(z.string())
              .describe(
                '审批人列表，需传入用户 open_id。获取方式参考',
              )
              .optional(),
          }),
        )
        .describe(
          '如果审批定义的流程中，有节点需要发起人自选审批人，则需要通过本参数填写对应节点的审批人（通过用户 open_id 指定审批人）。**说明**：如果同时传入了 node_approver_user_id_list、node_approver_open_id_list，则取两个参数的并集生效审批人',
        )
        .optional(),
      node_cc_user_id_list: z
        .array(
          z.object({
            key: z
              .string()
              .describe(
                '节点的 node_id，可调用  接口，从接口返回的 node_list 参数中获取',
              )
              .optional(),
            value: z
              .array(z.string())
              .describe(
                '抄送人列表，需传入用户 user_id。获取方式参考',
              )
              .optional(),
          }),
        )
        .describe(
          '如果审批定义的流程中，有节点需要发起人自选抄送人，则需要通过本参数填写对应节点的抄送人（通过用户 user_id 指定审批人）。**说明**：如果同时传入了 node_cc_user_id_list、node_cc_open_id_list，则取两个参数的并集生效抄送人',
        )
        .optional(),
      node_cc_open_id_list: z
        .array(
          z.object({
            key: z
              .string()
              .describe(
                '节点的 node_id，可调用  接口，从接口返回的 node_list 参数中获取',
              )
              .optional(),
            value: z
              .array(z.string())
              .describe(
                '抄送人列表，需传入用户 open_id。获取方式参考',
              )
              .optional(),
          }),
        )
        .describe(
          '如果审批定义的流程中，有节点需要发起人自选抄送人，则需要通过本参数填写对应节点的抄送人（通过用户 open_id 指定审批人）。**说明**：如果同时传入了 node_cc_user_id_list、node_cc_open_id_list，则取两个参数的并集生效抄送人',
        )
        .optional(),
      uuid: z
        .string()
        .describe(
          '审批实例 uuid，用于幂等操作，单个企业内的唯一 key。同一个 uuid 只能用于创建一个审批实例，如果冲突则创建失败并返回错误码 60012 ，格式建议为 XXXXXXXX-XXXX-XXXX-XXXX-XXXXXXXXXXXX，不区分大小写',
        )
        .optional(),
      allow_resubmit: z
        .boolean()
        .describe(
          '是否配置 **提交** 按钮，适用于任务的审批人退回审批单据后，审批提交人可以在同一个审批实例内点击 **提交**，提交单据',
        )
        .optional(),
      allow_submit_again: z
        .boolean()
        .describe('是否配置 **再次提交** 按钮，适用于周期性提单场景，按照当前表单内容再次发起一个新审批实例')
        .optional(),
      cancel_bot_notification: z
        .string()
        .describe(
          '取消指定的 Bot 推送通知。可选值有：- 1：取消审批实例通过推送。- 2：取消审批实例拒绝推送。- 4：取消审批实例取消推送。支持同时取消多个 bot 推送通知。位运算，即如需取消 1 和 2 两种通知，则需要传入加和值 3',
        )
        .optional(),
      forbid_revoke: z.boolean().describe('是否禁止撤销审批实例').optional(),
      i18n_resources: z
        .array(
          z.object({
            locale: z
              .enum(['zh-CN', 'en-US', 'ja-JP'])
              .describe('语言 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)'),
            texts: z
              .array(
                z.object({
                  key: z.string().describe('文案 Key，需要和各个参数 Key 相匹配'),
                  value: z.string().describe('文案 Value，即文案 Key 对应的参数值'),
                }),
              )
              .describe(
                '文案的 Key:Value。Key 需要以 @i18n@ 开头，并按照各个参数的要求传入 Value。**说明**：该字段主要用于适配国际化，允许同时设置多个语言的文案，审批中心会根据实际用户当前的语音环境使用匹配的文案。如果没有设置用户当前的语音环境文案，则会使用默认的语言文案',
              ),
            is_default: z
              .boolean()
              .describe(
                '是否为默认语言。默认语言需要包含所有所需的文案 Key，非默认语言如果 Key 不存在，则会使用默认语言代替',
              ),
          }),
        )
        .describe('国际化文案。目前只支持为表单的单行、多行文本控件赋值')
        .optional(),
      title: z
        .string()
        .describe(
          '审批实例的展示名称。如果填写了该参数，则审批列表中的审批名称使用该参数，如果不填该参数，则审批名称使用审批定义的名称。**说明**：这里传入的是国际化文案 Key（即 i18n_resources.texts 参数中的 Key），必须以 @i18n@ 开头，还需要在 i18n_resources.texts 参数中以 Key:Value 格式进行赋值',
        )
        .optional(),
      title_display_method: z
        .number()
        .describe(
          '审批详情页 title 展示模式。 Options:0(display_all 如果审批定义和审批实例都有 title，则全部展示，通过竖线分割。),1(display_instance_title 如果审批定义和审批实例都有 title，只展示审批实例的 title。)',
        )
        .optional(),
      node_auto_approval_list: z
        .array(
          z.object({
            node_id_type: z
              .enum(['CUSTOM', 'NON_CUSTOM'])
              .describe('节点 ID 类型 Options:CUSTOM(自定义节点ID),NON_CUSTOM(NonCustom 非自定义节点ID)')
              .optional(),
            node_id: z
              .string()
              .describe(
                '节点 ID 值，可调用  接口，从接口返回的 node_list 参数中获取',
              )
              .optional(),
          }),
        )
        .describe('设置自动通过的节点')
        .optional(),
    }),
  },
};
export const approvalV4InstanceGet = {
  project: 'approval',
  name: 'approval.v4.instance.get',
  sdkName: 'approval.v4.instance.get',
  path: '/open-apis/approval/v4/instances/:instance_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-原生审批实例-获取单个审批实例详情-通过审批实例 Code 获取指定审批实例的详细信息，包括审批实例的名称、创建时间、发起审批的用户、状态以及任务列表等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      locale: z
        .enum(['zh-CN', 'en-US', 'ja-JP'])
        .describe(
          '语言。默认值为时在 i18n_resources 参数中配置的 is_default 取值为 true 的语言。 Options:zh-CN(Zhcn 中文),en-US(Enus 英文),ja-JP(Jajp 日文)',
        )
        .optional(),
      user_id: z.string().describe('发起审批的用户 ID，ID 类型由 user_id_type 参数指定').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      instance_id: z
        .string()
        .describe(
          '审批实例 Code。获取方式：-  后，从返回结果中获取审批实例 Code。如果在创建的时候传了 uuid 参数，则本参数也可以通过传 uuid 获取指定审批实例详情。- 调用，获取指定审批定义内的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
    }),
  },
};
export const approvalV4InstanceList = {
  project: 'approval',
  name: 'approval.v4.instance.list',
  sdkName: 'approval.v4.instance.list',
  path: '/open-apis/approval/v4/instances',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-审批-原生审批实例-批量获取审批实例 ID-根据审批定义的 approval_code 批量获取审批实例的 instance_code，用于拉取企业下某个审批定义的全部审批实例。默认以审批创建时间先后顺序排列',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，用于指定一次请求所返回的数据量上限').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      start_time: z
        .string()
        .describe(
          '审批实例创建时间的开始区间，毫秒时间戳。**说明**：start_time 与 end_time 组成时间区间查询条件，接口会返回在该时间区间内创建的审批实例数据',
        ),
      end_time: z
        .string()
        .describe(
          '审批实例创建时间的结束区间，毫秒时间戳。**说明**：start_time 与 end_time 组成时间区间查询条件，接口会返回在该时间区间内创建的审批实例的 Code',
        ),
    }),
  },
};
export const approvalV4InstancePreview = {
  project: 'approval',
  name: 'approval.v4.instance.preview',
  sdkName: 'approval.v4.instance.preview',
  path: '/open-apis/approval/v4/instances/preview',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-原生审批实例-预览审批流程',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户id'),
      approval_code: z.string().describe('审批定义code').optional(),
      department_id: z.string().describe('部门id').optional(),
      form: z.string().describe('表单数据').optional(),
      instance_code: z.string().describe('审批实例code').optional(),
      locale: z.string().describe('语言类型').optional(),
      task_id: z.string().describe('任务id').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'user_id', 'union_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4InstanceQuery = {
  project: 'approval',
  name: 'approval.v4.instance.query',
  sdkName: 'approval.v4.instance.query',
  path: '/open-apis/approval/v4/instances/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-审批查询-查询实例列表-该接口通过不同条件查询审批系统中符合条件的审批实例列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户 ID，ID 类型与查询参数 user_id_type 保持一致').optional(),
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      instance_external_id: z
        .string()
        .describe(
          '审批实例的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      group_external_id: z
        .string()
        .describe(
          '审批定义分组的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      instance_title: z.string().describe('审批实例标题。**说明**：仅第三方审批存在审批实例标题').optional(),
      instance_status: z
        .enum(['PENDING', 'RECALL', 'REJECT', 'DELETED', 'APPROVED', 'ALL'])
        .describe(
          '审批实例状态。 Options:PENDING(审批中),RECALL(已撤回),REJECT(已拒绝),DELETED(已删除),APPROVED(Approverd 已通过),ALL(所有状态)',
        )
        .optional(),
      instance_start_time_from: z
        .string()
        .describe(
          '实例查询开始时间，Unix 毫秒时间戳。与 instance_start_time_to 参数构成时间段查询条件，仅会返回在该时间段内的审批实例。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      instance_start_time_to: z
        .string()
        .describe(
          '实例查询结束时间，Unix 毫秒时间戳。与 instance_start_time_from 参数构成时间段查询条件，仅会返回在该时间段内的审批实例。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      locale: z
        .enum(['zh-CN', 'en-US', 'ja-JP'])
        .describe('语言。 Options:zh-CN(ZhCn 中文),en-US(EnUs 英文),ja-JP(JaJp 日文)')
        .optional(),
    }),
    params: z.object({
      page_size: z
        .number()
        .describe(
          '分页大小。如果当前页包含被撤销的审批实例，则查询结果中每页的数据条目数可能小于 page_size 值。例如，page_size 取值为 10，实际查询结果中当前页只显示 6 条数据，则表示有 4 条数据是被撤销的审批实例',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const approvalV4InstanceSearchCc = {
  project: 'approval',
  name: 'approval.v4.instance.searchCc',
  sdkName: 'approval.v4.instance.searchCc',
  path: '/open-apis/approval/v4/instances/search_cc',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-审批查询-查询抄送列表-该接口通过不同条件查询审批系统中符合条件的审批抄送列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户 ID，ID 类型与查询参数 user_id_type 保持一致').optional(),
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      instance_external_id: z
        .string()
        .describe(
          '审批实例的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      group_external_id: z
        .string()
        .describe(
          '审批定义分组的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      cc_title: z.string().describe('审批抄送标题。**说明**：仅第三方审批存在审批抄送标题').optional(),
      read_status: z
        .enum(['READ', 'UNREAD', 'ALL'])
        .describe(
          '审批抄送状态。**注意**：若不设置则查询全部状态，若不在集合中，则报错。 Options:READ(已读),UNREAD(未读),ALL(所有状态)',
        )
        .optional(),
      cc_create_time_from: z
        .string()
        .describe(
          '抄送查询开始时间，Unix 毫秒时间戳。与 cc_create_time_from 参数构成时间段查询条件，仅会返回在该时间段内的审批抄送。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      cc_create_time_to: z
        .string()
        .describe(
          '抄送查询结束时间，Unix 毫秒时间戳。与 cc_create_time_from 参数构成时间段查询条件，仅会返回在该时间段内的审批抄送。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      locale: z
        .enum(['zh-CN', 'en-US', 'ja-JP'])
        .describe('语言 Options:zh-CN(ZhCn 中文),en-US(EnUs 英文),ja-JP(JaJp 日文)')
        .optional(),
    }),
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
  },
};
export const approvalV4InstanceSpecifiedRollback = {
  project: 'approval',
  name: 'approval.v4.instance.specifiedRollback',
  sdkName: 'approval.v4.instance.specifiedRollback',
  path: '/open-apis/approval/v4/instances/specified_rollback',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批任务-退回审批任务-从当前审批任务，退回到已审批的一个或多个任务节点。退回后，已审批节点重新生成审批任务',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z
        .string()
        .describe(
          '当前审批任务的审批人的用户 ID，ID 类型与查询参数 user_id_type 取值一致。可调用，从返回结果的 task_list 参数中获取用户 ID 以及任务状态必须为 PENDING',
        ),
      task_id: z
        .string()
        .describe(
          '当前需要回退的审批任务 ID。可调用，从返回结果的 task_list 参数中获取任务 ID 以及任务状态必须为 PENDING',
        ),
      reason: z.string().describe('退回原因').optional(),
      extra: z.string().describe('扩展字段。**注意**：灰度参数，暂未开放使用').optional(),
      task_def_key_list: z
        .array(z.string())
        .describe(
          '需要退回到的任务 node_key。可调用，从返回结果的 timeline 参数中获取，且动态类型 type 必须为 PASS',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4TaskApprove = {
  project: 'approval',
  name: 'approval.v4.task.approve',
  sdkName: 'approval.v4.task.approve',
  path: '/open-apis/approval/v4/tasks/approve',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批任务-同意审批任务-对于单个审批任务进行同意操作。同意后审批流程会流转到下一个审批人',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('审批人的用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
      comment: z.string().describe('审批意见').optional(),
      task_id: z
        .string()
        .describe(
          '审批任务 ID，调用，从返回结果的 task_list 中获取所需的 id',
        ),
      form: z
        .string()
        .describe(
          '如果审批定义的流程设计中添加了条件分支，则需要传入条件分支所需的控件数据（JSON 数组），否则会影响后续的分支条件流转。**说明**：传值时需要将 JSON 序列化为字符串。参数示例值未进行转义，正确的传值示例可参见下文 **请求体示例**',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4TaskQuery = {
  project: 'approval',
  name: 'approval.v4.task.query',
  sdkName: 'approval.v4.task.query',
  path: '/open-apis/approval/v4/tasks/query',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-审批-审批查询-查询用户的任务列表',
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
      user_id: z.string().describe('需要查询的 User ID'),
      topic: z
        .enum(['1', '2', '3', '17', '18'])
        .describe(
          '需要查询的任务分组主题，如「待办」、「已办」等 Options:1(TodoApproval 待办审批),2(DoneApproval 已办审批),3(InitiatedApproval 已发起审批),17(UnreadNotice 未读知会),18(ReadNotice 已读知会)',
        ),
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const approvalV4TaskReject = {
  project: 'approval',
  name: 'approval.v4.task.reject',
  sdkName: 'approval.v4.task.reject',
  path: '/open-apis/approval/v4/tasks/reject',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-原生审批任务-拒绝审批任务-对于单个审批任务进行拒绝操作。拒绝后审批流程结束',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('审批人的用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
      comment: z.string().describe('审批意见').optional(),
      task_id: z
        .string()
        .describe(
          '审批任务 ID，调用，从返回结果的 task_list 中获取所需的 id',
        ),
      form: z
        .string()
        .describe(
          '如果审批定义的流程设计中添加了条件分支，则需要传入条件分支所需的控件数据（JSON 数组），否则会影响后续的分支条件流转。**说明**：传值时需要将 JSON 序列化为字符串。参数示例值未进行转义，正确的传值示例可参见下文 **请求体示例**',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4TaskResubmit = {
  project: 'approval',
  name: 'approval.v4.task.resubmit',
  sdkName: 'approval.v4.task.resubmit',
  path: '/open-apis/approval/v4/tasks/resubmit',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批任务-重新提交审批任务-对于退回到发起人的审批任务进行重新发起操作。发起后审批流程会流转到下一个审批人',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('操作人 ID，ID 类型与查询参数 user_id_type 取值一致'),
      comment: z
        .string()
        .describe(
          '意见。JSON 格式，传入时需要压缩转义为字符串。以下示例值未转义，你可参考请求体示例中的示例 comment 进行编辑。**JSON 内参数说明**：- text：string 类型，评论文本内容。- files：Attachment[] 类型，附件信息。 - url：string 类型，附件链接。 - thumbnailURL：string 类型，缩略图链接。 - fileSize：int64 类型，文件大小。 - title：string 类型，标题。 - type：string 类型，附件类型，取值 image 表示图片类型。**注意**：对于附件，在 PC 端使用 HTTP 资源链接传图片资源可能会导致缩略图异常，建议使用 HTTPS 传资源附件',
        )
        .optional(),
      task_id: z
        .string()
        .describe(
          '任务 ID。你可调用，从返回结果的 task_list 中获取所需的 id',
        ),
      form: z
        .string()
        .describe(
          '审批表单控件值，JSON 数组，传值时需要压缩转义为字符串。该参数与中的 form 参数用法一致',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4TaskSearch = {
  project: 'approval',
  name: 'approval.v4.task.search',
  sdkName: 'approval.v4.task.search',
  path: '/open-apis/approval/v4/tasks/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-审批-审批查询-查询任务列表-该接口通过不同条件查询审批系统中符合条件的审批任务列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('任务审批人 ID，ID 类型与查询参数 user_id_type 保持一致').optional(),
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      instance_external_id: z
        .string()
        .describe(
          '审批实例的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- instance_code 和 instance_external_id 查询结果取并集',
        )
        .optional(),
      group_external_id: z
        .string()
        .describe(
          '审批定义分组的第三方 ID。**注意**：- user_id、approval_code、instance_code、instance_external_id、group_external_id 不能同时为空。- approval_code 和 group_external_id 查询结果取并集',
        )
        .optional(),
      task_title: z.string().describe('审批任务标题。**说明**：仅第三方审批存在审批任务标题').optional(),
      task_status: z
        .enum(['PENDING', 'REJECTED', 'APPROVED', 'TRANSFERRED', 'DONE', 'RM_REPEAT', 'PROCESSED', 'ALL'])
        .describe(
          '审批任务状态。**注意**：若不设置则查询全部状态，若不在集合中，则报错。 Options:PENDING(审批中),REJECTED(Reject 已拒绝),APPROVED(Approverd 已通过),TRANSFERRED(已转交),DONE(已完成),RM_REPEAT(去重),PROCESSED(已处理),ALL(所有状态)',
        )
        .optional(),
      task_start_time_from: z
        .string()
        .describe(
          '任务查询开始时间，Unix 毫秒时间戳。与 task_start_time_to 参数构成时间段查询条件，仅会返回在该时间段内的审批任务。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      task_start_time_to: z
        .string()
        .describe(
          '任务查询结束时间，Unix 毫秒时间戳。与 task_start_time_from 参数构成时间段查询条件，仅会返回在该时间段内的审批任务。**注意**：查询时间跨度不得大于 30 天，开始和结束时间必须同时设置或者同时不设置',
        )
        .optional(),
      locale: z
        .enum(['zh-CN', 'en-US', 'ja-JP'])
        .describe('语言。 Options:zh-CN(ZhCn 中文),en-US(EnUs 英文),ja-JP(JaJp 日文)')
        .optional(),
      task_status_list: z
        .array(z.string())
        .describe(
          '查询多种状态的任务，当填写此参数时，task_status 参数将失效。**可选值有**：- `PENDING`：审批中- `REJECTED`：拒绝- `APPROVED`：通过- `TRANSFERRED`：转交- `DONE`：已完成- `RM_REPEAT`：去重- `PROCESSED`：已处理',
        )
        .optional(),
      order: z
        .number()
        .describe(
          '按任务时间排序 Options:0(UpdateTimeDESC 按审批任务更新时间（update_time）倒排。),1(UpdateTimeASC 按审批任务更新时间（update_time）正排。),2(StartTimeDESC 按审批任务开始时间（start_time）倒排。),3(StartTimeASC 按审批任务开始时间（start_time）正排。)',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z
        .number()
        .describe(
          '分页大小。如果当前页包含被撤销实例内的任务，则查询结果中每页的数据条目数可能小于 page_size 值。例如，page_size 取值为 10，实际查询结果中当前页只显示 6 条数据，则表示有 4 条数据是被撤销实例内的任务',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const approvalV4TaskTransfer = {
  project: 'approval',
  name: 'approval.v4.task.transfer',
  sdkName: 'approval.v4.task.transfer',
  path: '/open-apis/approval/v4/tasks/transfer',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-审批-原生审批任务-转交审批任务-对于单个审批任务进行转交操作。转交后审批流程流转给被转交人',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_code: z
        .string()
        .describe(
          '审批定义 Code。获取方式：- 调用接口后，从响应参数 approval_code 获取。- 登录审批管理后台，在指定审批定义的 URL 中获取，具体操作参见',
        ),
      instance_code: z
        .string()
        .describe(
          '审批实例 Code。获取方式：- 调用接口后，从响应参数 instance_code 获取。- 调用接口，获取所需的审批实例 Code。- 调用，设置过滤条件查询指定的审批实例 Code',
        ),
      user_id: z.string().describe('当前审批人的用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
      comment: z.string().describe('审批意见').optional(),
      transfer_user_id: z.string().describe('被转交人的用户 ID，ID 类型与查询参数 user_id_type 取值一致'),
      task_id: z
        .string()
        .describe(
          '审批任务 ID，调用，从返回结果的 task_list 中获取所需的 id',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const approvalV4Tools = [
  approvalV4ApprovalCreate,
  approvalV4ApprovalGet,
  approvalV4ApprovalSubscribe,
  approvalV4ApprovalUnsubscribe,
  approvalV4ExternalApprovalCreate,
  approvalV4ExternalApprovalGet,
  approvalV4ExternalInstanceCheck,
  approvalV4ExternalInstanceCreate,
  approvalV4ExternalTaskList,
  approvalV4InstanceAddSign,
  approvalV4InstanceCancel,
  approvalV4InstanceCc,
  approvalV4InstanceCommentCreate,
  approvalV4InstanceCommentDelete,
  approvalV4InstanceCommentList,
  approvalV4InstanceCommentRemove,
  approvalV4InstanceCreate,
  approvalV4InstanceGet,
  approvalV4InstanceList,
  approvalV4InstancePreview,
  approvalV4InstanceQuery,
  approvalV4InstanceSearchCc,
  approvalV4InstanceSpecifiedRollback,
  approvalV4TaskApprove,
  approvalV4TaskQuery,
  approvalV4TaskReject,
  approvalV4TaskResubmit,
  approvalV4TaskSearch,
  approvalV4TaskTransfer,
];
