import { z } from 'zod';
export type calendarV4ToolName =
  | 'calendar.v4.calendarAcl.create'
  | 'calendar.v4.calendarAcl.delete'
  | 'calendar.v4.calendarAcl.list'
  | 'calendar.v4.calendarAcl.subscription'
  | 'calendar.v4.calendarAcl.unsubscription'
  | 'calendar.v4.calendar.create'
  | 'calendar.v4.calendar.delete'
  | 'calendar.v4.calendarEventAttendee.batchDelete'
  | 'calendar.v4.calendarEventAttendeeChatMember.list'
  | 'calendar.v4.calendarEventAttendee.create'
  | 'calendar.v4.calendarEventAttendee.list'
  | 'calendar.v4.calendarEvent.create'
  | 'calendar.v4.calendarEvent.delete'
  | 'calendar.v4.calendarEvent.get'
  | 'calendar.v4.calendarEvent.instanceView'
  | 'calendar.v4.calendarEvent.instances'
  | 'calendar.v4.calendarEvent.list'
  | 'calendar.v4.calendarEventMeetingChat.create'
  | 'calendar.v4.calendarEventMeetingChat.delete'
  | 'calendar.v4.calendarEventMeetingMinute.create'
  | 'calendar.v4.calendarEvent.patch'
  | 'calendar.v4.calendarEvent.reply'
  | 'calendar.v4.calendarEvent.search'
  | 'calendar.v4.calendarEvent.subscription'
  | 'calendar.v4.calendarEvent.unsubscription'
  | 'calendar.v4.calendar.get'
  | 'calendar.v4.calendar.list'
  | 'calendar.v4.calendar.patch'
  | 'calendar.v4.calendar.primary'
  | 'calendar.v4.calendar.search'
  | 'calendar.v4.calendar.subscribe'
  | 'calendar.v4.calendar.subscription'
  | 'calendar.v4.calendar.unsubscribe'
  | 'calendar.v4.calendar.unsubscription'
  | 'calendar.v4.exchangeBinding.create'
  | 'calendar.v4.exchangeBinding.delete'
  | 'calendar.v4.exchangeBinding.get'
  | 'calendar.v4.freebusy.list'
  | 'calendar.v4.setting.generateCaldavConf'
  | 'calendar.v4.timeoffEvent.create'
  | 'calendar.v4.timeoffEvent.delete';
export const calendarV4CalendarAclCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendarAcl.create',
  sdkName: 'calendar.v4.calendarAcl.create',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/acls',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历访问控制-创建访问控制-调用该接口以当前身份（应用或用户）为指定日历添加访问控制，即日历成员权限',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      role: z
        .enum(['unknown', 'free_busy_reader', 'reader', 'writer', 'owner'])
        .describe(
          '对日历的访问权限。 Options:unknown(Unkonwn 未知权限。unknown 是 role 参数枚举值之一，但 role 作为请求参数时，不支持传入 unknown。),free_busy_reader(FreeBusyReader 游客，只能看到忙碌、空闲信息。),reader(订阅者，可查看所有日程详情。),writer(编辑者，可创建及修改日程。),owner(管理员，可管理日历及共享设置。)',
        ),
      scope: z
        .object({
          type: z
            .literal('user')
            .describe(
              '权限生效范围的类型。**注意**：目前只支持 `user`，且当 `type=user` 时，user_id 需要传入和 user_id_type 一致的用户 ID 类型。例如，`user_id_type=open_id` 时，user_id 需要传入用户的 open_id。 Options:user(用户)',
            ),
          user_id: z
            .string()
            .describe(
              '用户 ID。当 `type=user` 时，必须设置该参数值。关于用户 ID 的更多介绍可参见',
            )
            .optional(),
        })
        .describe('权限的生效范围'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '需要添加访问控制的日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarAclDelete = {
  project: 'calendar',
  name: 'calendar.v4.calendarAcl.delete',
  sdkName: 'calendar.v4.calendarAcl.delete',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/acls/:acl_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-日历-日历访问控制-删除访问控制-调用该接口以当前身份（应用或用户）删除指定日历内的某一访问控制，即成员权限',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '需要删除访问控制的日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
      acl_id: z
        .string()
        .describe(
          '访问控制 ID。为日历创建访问控制时会返回访问控制 ID。你也可以调用接口，获取指定日历内的访问控制信息',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarAclList = {
  project: 'calendar',
  name: 'calendar.v4.calendarAcl.list',
  sdkName: 'calendar.v4.calendarAcl.list',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/acls',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日历访问控制-获取访问控制列表-调用该接口以当前身份（应用或用户）获取指定日历的访问控制列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z
        .number()
        .describe('分页大小，即一次请求返回的最大条目数。**注意**：最小值 10，即取值小于 10 时统一按 10 处理')
        .optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarAclSubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendarAcl.subscription',
  sdkName: 'calendar.v4.calendarAcl.subscription',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/acls/subscription',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历访问控制-订阅日历访问控制变更事件-调用该接口以用户身份订阅指定日历下的访问控制变更事件',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarAclUnsubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendarAcl.unsubscription',
  sdkName: 'calendar.v4.calendarAcl.unsubscription',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/acls/unsubscription',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历访问控制-取消订阅日历访问控制变更事件-调用该接口以用户身份取消订阅指定日历下的访问控制变更事件',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendar.create',
  sdkName: 'calendar.v4.calendar.create',
  path: '/open-apis/calendar/v4/calendars',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日历管理-创建共享日历-调用该接口为当前身份（应用或用户）创建一个共享日历',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z.string().describe('日历标题。**默认值**：空').optional(),
      description: z.string().describe('日历描述。**默认值**：空').optional(),
      permissions: z
        .enum(['private', 'show_only_free_busy', 'public'])
        .describe(
          '日历公开范围。**默认值**：show_only_free_busy Options:private(私密),show_only_free_busy(ShowOnlyFreeBusy 仅展示忙闲信息),public(公开，他人可查看日程详情)',
        )
        .optional(),
      color: z
        .number()
        .describe(
          '日历颜色，取值通过颜色 RGB 值的 int32 表示，其中，24 ~ 31 位为透明度，16 ~ 23 位为红，8 ~ 15 位为绿，0 ~ 7 位为蓝。例如，-11034625 表示 RGB 值 (87, 159, 255)。**注意**：- 取值范围为 -2^31 ~ 2^31-1- 日历颜色会映射到飞书客户端色板上最接近的一种颜色进行展示。- 该颜色仅对当前身份生效。**默认值**：-14513409',
        )
        .optional(),
      summary_alias: z
        .string()
        .describe('日历备注名，设置该字段后（包括后续修改该字段）仅对当前身份生效。**默认值**：空')
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarDelete = {
  project: 'calendar',
  name: 'calendar.v4.calendar.delete',
  sdkName: 'calendar.v4.calendar.delete',
  path: '/open-apis/calendar/v4/calendars/:calendar_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-日历-日历管理-删除共享日历-调用该接口以当前身份（应用或用户）删除某一指定的共享日历',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventAttendeeBatchDelete = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventAttendee.batchDelete',
  sdkName: 'calendar.v4.calendarEventAttendee.batchDelete',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日程参与人管理（含会议室）-删除日程参与人-调用该接口以当前身份（应用或用户）删除指定日程的一个或多个参与人',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      attendee_ids: z
        .array(z.string())
        .describe(
          '需要删除的参与人 ID 列表。添加日程参与人时，会返回参与人 ID（attendee_id），你也可以调用接口，查询指定日程的参与人 ID。- 一次最多删除500个参与人（与delete_ids一起计算）',
        )
        .optional(),
      delete_ids: z
        .array(
          z.object({
            type: z
              .enum(['user', 'chat', 'resource', 'third_party'])
              .describe('参与人类型。 Options:user(用户),chat(群组),resource(会议室),third_party(ThirdParty 外部邮箱)')
              .optional(),
            user_id: z
              .string()
              .describe(
                '用户 ID。当选择用户类型参与人（type 取值为 user）时，需要传入该参数。传入的用户 ID 类型需要和 user_id_type 的值保持一致',
              )
              .optional(),
            chat_id: z
              .string()
              .describe('群组 ID。当选择群组类型参与人（type 取值为 chat）时，需要传入该参数')
              .optional(),
            room_id: z
              .string()
              .describe('会议室 ID。当选择会议室类型参与人（type 取值为 resource）时，需要传入该参数')
              .optional(),
            third_party_email: z
              .string()
              .describe('邮箱地址。当选择外部邮箱类型参与人（type 取值为 third_party）时，需要传入该参数')
              .optional(),
          }),
        )
        .describe(
          '参与人类型对应的 ID，该 ID 是 attendee_ids 字段的补充字段。- 一次最多删除500个参与人（与attendee_ids一起计算）',
        )
        .optional(),
      need_notification: z
        .boolean()
        .describe('删除日程参与人时，是否向参与人发送 Bot 通知。**可选值有**：- true（默认值）：发送- false：不发送')
        .optional(),
      instance_start_time_admin: z
        .string()
        .describe('使用管理员身份访问时，要修改的实例（仅用于重复日程修改其中的一个实例，非重复日程无需填此字段）')
        .optional(),
      is_enable_admin: z
        .boolean()
        .describe(
          '是否启用会议室管理员身份（需先在管理后台设置某人为会议室管理员）。**可选值有**：- true：启用- false（默认值）：不启用',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程对应的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventAttendeeChatMemberList = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventAttendeeChatMember.list',
  sdkName: 'calendar.v4.calendarEventAttendeeChatMember.list',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees/:attendee_id/chat_members',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日程参与人管理（含会议室）-获取日程参与群成员列表-调用该接口以当前身份（应用或用户）获取日程的群组类型参与人的群成员列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('一次请求返回的最大群成员数量').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。关于日历 ID 可参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
      attendee_id: z
        .string()
        .describe(
          '群组类型参与人 ID。添加日程参与人时，会返回参与人 ID（attendee_id），你也可以调用接口，查询指定日程的参与人 ID',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventAttendeeCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventAttendee.create',
  sdkName: 'calendar.v4.calendarEventAttendee.create',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日程参与人管理（含会议室）-添加日程参与人-调用该接口以当前身份（应用或用户）为指定日程添加一个或多个参与人，参与人类型包括用户、群组、会议室以及邮箱',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      attendees: z
        .array(
          z.object({
            type: z
              .enum(['user', 'chat', 'resource', 'third_party'])
              .describe('参与人类型。 Options:user(用户),chat(群组),resource(会议室),third_party(ThirdParty 外部邮箱)')
              .optional(),
            is_optional: z
              .boolean()
              .describe('参与人是否为可选参加。**可选值有**：- true：是- false：否**注意**：无法编辑群参与人的此字段')
              .optional(),
            user_id: z
              .string()
              .describe(
                '用户 ID。当选择用户类型参与人（type 取值为 user）时，需要传入该参数。传入的用户 ID 类型需要和 user_id_type 的值保持一致。关于用户 ID 可参见',
              )
              .optional(),
            chat_id: z
              .string()
              .describe(
                '群组 ID。当选择群组类型参与人（type 取值为 chat）时，需要传入该参数。关于群组 ID 可参见',
              )
              .optional(),
            room_id: z
              .string()
              .describe(
                '会议室 ID。当选择会议室类型参与人（type 取值为 resource）时，需要传入该参数。你可以通过以下接口获取指定会议室 ID：- - ',
              )
              .optional(),
            third_party_email: z
              .string()
              .describe('邮箱地址。当选择外部邮箱类型参与人（type 取值为 third_party）时，需要传入该参数')
              .optional(),
            operate_id: z
              .string()
              .describe(
                '会议室联系人 ID。传入的用户 ID 类型需要和 user_id_type 的值保持一致。关于用户 ID 可参见。**说明**：如果当前日程是基于应用身份创建的，则在添加会议室类型参与人时，需要通过该参数指定会议室的联系人，该联系人会在日程会议室信息中展示。**默认值**：空',
              )
              .optional(),
            resource_customization: z
              .array(
                z.object({
                  index_key: z.string().describe('表单内配置的唯一 ID'),
                  input_content: z.string().describe('当配置类型为填空时，需要填入该参数').optional(),
                  options: z
                    .array(
                      z.object({
                        option_key: z.string().describe('选项的唯一 ID').optional(),
                        others_content: z.string().describe('当选项类型为其它选项时，需要填入该参数').optional(),
                      }),
                    )
                    .describe('每个配置的选项')
                    .optional(),
                }),
              )
              .describe(
                '会议室的个性化配置。- 在选择会议室类型参与人时，如果会议室有预定表单，则可以通过该参数配置表单信息。- 当前添加的参与人不涉及会议室个性化配置时，无需设置该参数',
              )
              .optional(),
            approval_reason: z
              .string()
              .describe(
                '申请预定审批会议室的原因。参数配置说明：- 仅使用用户身份（user_access_token）预定审批会议室时，该字段生效。- 对于申请预定审批会议室的场景，不传该值会直接预约失败。- 如果使用应用身份（tenant_access_token）预定审批会议室，会直接失败。**默认值**：空',
              )
              .optional(),
          }),
        )
        .describe(
          '新增参与人列表。**注意**：- 单次请求可设置的参与人数量（含会议室）上限为 1000。- 单次请求可设置的会议室数量上限为 100',
        )
        .optional(),
      need_notification: z
        .boolean()
        .describe('是否给参与人发送 Bot 通知。**可选值有**：- true（默认值）：发送- false：不发送')
        .optional(),
      instance_start_time_admin: z
        .string()
        .describe(
          '使用管理员身份访问时，要修改的日程实例。**注意**：- 该参数仅用于修改重复日程中的某一日程实例，非重复日程无需填此字段。- 你可以调用接口，获取重复日程中某一日程实例的 event_id。该参数取值为 event_id 的时间戳后缀。例如查询到的日程实例 ID 为 `2cf525f0-1e67-4b04-ad4d-30b7f003903c_1713168000`，则当前的 `instance_start_time_admin` 取值为 `1713168000`。**默认值**：空',
        )
        .optional(),
      is_enable_admin: z
        .boolean()
        .describe(
          '是否启用会议室管理员身份（需先在管理后台设置某成员为会议室管理员)。**可选值有**：- true：启用- false（默认值）：不启用**说明**：开启后，本次请求只处理会议室数据，其他参与人操作不会生效',
        )
        .optional(),
      add_operator_to_attendee: z
        .boolean()
        .describe('是否添加会议室联系人（operate_id）到日程参与人。**可选值有**：- true（默认值）：启用- false：不启用')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程对应的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventAttendeeList = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventAttendee.list',
  sdkName: 'calendar.v4.calendarEventAttendee.list',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/attendees',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日程参与人管理（含会议室）-获取日程参与人列表-调用该接口以当前身份（应用或用户）获取日程的参与人列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      need_resource_customization: z
        .boolean()
        .describe(
          '是否需要会议室表单信息。**可选值有**：- true：需要- false（默认值）：不需要**注意**：当前身份需要有日程的编辑权限才会返回会议室表单信息，即当前身份需要是日程的组织者，或者是日程参与人且日程设置了**参与人可编辑日程**权限。你可以调用接口，获取日程的参与人权限（attendee_ability）',
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
        .describe('一次请求返回的最大日程参与人数量。最小值为 10，传入小于 10 的值默认按照 10 计算')
        .optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。关于日历 ID 可参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.create',
  sdkName: 'calendar.v4.calendarEvent.create',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日程管理-创建日程-调用该接口以当前身份（应用或用户）在指定日历上创建一个日程',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z
        .string()
        .describe(
          '日程标题。**注意**：为确保数据安全，系统会自动检测日程标题内容，当包含 **晋升、绩效、述职、调薪、调级、复议、申诉、校准、答辩** 中任一关键词时，该日程不会生成会议纪要',
        )
        .optional(),
      description: z
        .string()
        .describe(
          '日程描述。支持解析Html标签。**注意**：可以通过Html标签来实现部分富文本格式，但是客户端生成的富文本格式并不是通过Html标签实现，如果通过客户端生成富文本描述后，再通过API更新描述，会导致客户端原来的富文本格式丢失',
        )
        .optional(),
      need_notification: z
        .boolean()
        .describe(
          '更新日程时，是否给日程参与人发送 Bot 通知。**可选值有**：- true：发送通知- false：不发送通知**默认值**：true',
        )
        .optional(),
      start_time: z
        .object({
          date: z
            .string()
            .describe(
              '开始时间，仅全天日程使用该字段， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
            )
            .optional(),
          timestamp: z
            .string()
            .describe(
              '秒级时间戳，用于设置具体的开始时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
            )
            .optional(),
          timezone: z
            .string()
            .describe(
              '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天日程时区固定为UTC +0- 非全天日程时区默认为 Asia/Shanghai',
            )
            .optional(),
        })
        .describe('日程开始时间'),
      end_time: z
        .object({
          date: z
            .string()
            .describe(
              '结束时间，仅全天日程使用该字段， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
            )
            .optional(),
          timestamp: z
            .string()
            .describe(
              '秒级时间戳，用于设置具体的结束时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
            )
            .optional(),
          timezone: z
            .string()
            .describe(
              '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天日程时区固定为UTC +0- 非全天日程时区默认为 Asia/Shanghai',
            )
            .optional(),
        })
        .describe('日程结束时间'),
      vchat: z
        .object({
          vc_type: z
            .enum(['vc', 'third_party', 'no_meeting', 'lark_live', 'unknown'])
            .describe(
              '视频会议类型。如果无需视频会议，则必须传入 `no_meeting`。**默认值**：空，表示在首次添加日程参与人时，会自动生成飞书视频会议 URL。 Options:vc(飞书视频会议。取该类型时，vchat 内的其他字段均无效。),third_party(ThirdParty 第三方链接视频会议。取该类型时，仅生效 vchat 内的 icon_type、description、meeting_url 字段。),no_meeting(NoMeeting 无视频会议。取该类型时，vchat 内的其他字段均无效。),lark_live(LarkLive 飞书直播。该值用于客户端，不支持通过 API 调用，只读。),unknown(未知类型。该值用于客户端做兼容使用，不支持通过 API 调用，只读。)',
            )
            .optional(),
          icon_type: z
            .enum(['vc', 'live', 'default'])
            .describe(
              '第三方视频会议的 icon 类型。**默认值**：default Options:vc(飞书视频会议 icon。),live(直播视频会议 icon。),default(默认 icon。)',
            )
            .optional(),
          description: z.string().describe('第三方视频会议文案。**默认值**：空，为空展示默认文案').optional(),
          meeting_url: z.string().describe('视频会议 URL').optional(),
          meeting_settings: z
            .object({
              owner_id: z
                .string()
                .describe(
                  '设置会议 owner 的用户 ID，ID 类型需和 user_id_type 保持一致。该参数需满足以下全部条件才会生效：- 应用身份（tenant_access_token）请求，且在应用日历上操作日程。- 首次将日程设置为 VC 会议时，才能设置owner。- owner 不能为非用户身份。- owner 不能为外部租户用户身份',
                )
                .optional(),
              join_meeting_permission: z
                .enum(['anyone_can_join', 'only_organization_employees', 'only_event_attendees'])
                .describe(
                  '设置入会范围。**默认值**：anyone_can_join Options:anyone_can_join(AnyOne 所有人可以加入会议),only_organization_employees(OnlySameOrganization 仅企业内的用户可以加入会议),only_event_attendees(OnlyEventAttendees 仅日程参与者可以加入会议)',
                )
                .optional(),
              assign_hosts: z
                .array(z.string())
                .describe(
                  '通过用户 ID 指定主持人，ID 类型需和 user_id_type 保持一致。**注意**：- 仅日程组织者可以指定主持人。- 主持人不能是非用户身份。- 主持人不能是外部租户用户身份。- 在应用日历上操作日程时，不允许指定主持人',
                )
                .optional(),
              auto_record: z
                .boolean()
                .describe('是否开启自动录制。**可选值有**：- true：开启- false（默认值）：不开启')
                .optional(),
              open_lobby: z
                .boolean()
                .describe('是否开启等候室。**可选值有**：- true（默认值）：开启- false：不开启')
                .optional(),
              allow_attendees_start: z
                .boolean()
                .describe(
                  '是否允许日程参与者发起会议。**可选值有**：- true（默认值）：允许- false：不允许**注意**：应用日历上操作日程时，该字段必须为 true，否则没有人能发起会议',
                )
                .optional(),
            })
            .describe(
              '飞书视频会议（VC）的会前设置，需满足以下全部条件：- 当 `vc_type` 为 `vc` 时生效。- 需要有日程的编辑权限',
            )
            .optional(),
        })
        .describe('视频会议信息')
        .optional(),
      visibility: z
        .enum(['default', 'public', 'private'])
        .describe(
          '日程公开范围，新建日程默认为 `default`。**注意**：该参数仅在新建日程时，对所有参与人生效。如果后续更新日程修改了该参数值，则仅对当前身份生效。 Options:default(默认权限，即跟随日历权限，默认仅向他人显示是否忙碌),public(公开，显示日程详情),private(私密，仅自己可见详情)',
        )
        .optional(),
      attendee_ability: z
        .enum(['none', 'can_see_others', 'can_invite_others', 'can_modify_event'])
        .describe(
          '参与人权限。**默认值**：none Options:none(无法编辑日程、无法邀请其他参与人、无法查看参与人列表),can_see_others(CanSeeOthers 无法编辑日程、无法邀请其他参与人、可以查看参与人列表),can_invite_others(CanInviteOthers 无法编辑日程、可以邀请其他参与人、可以查看参与人列表),can_modify_event(CanModifyEvent 可以编辑日程、可以邀请其他参与人、可以查看参与人列表)',
        )
        .optional(),
      free_busy_status: z
        .enum(['busy', 'free'])
        .describe(
          '日程占用的忙闲状态，新建日程默认为 `busy`。**注意**：该参数仅在新建日程时，对所有参与人生效。如果后续更新日程时修改了该参数值，则仅对当前身份生效。 Options:busy(忙碌),free(空闲)',
        )
        .optional(),
      location: z
        .object({
          name: z.string().describe('地点名称').optional(),
          address: z.string().describe('地点地址').optional(),
          latitude: z
            .number()
            .describe('地点坐标纬度信息。- 对于国内的地点，采用 GCJ-02 标准。- 对于海外的地点，采用 WGS84 标准')
            .optional(),
          longitude: z
            .number()
            .describe('地点坐标经度信息。- 对于国内的地点，采用 GCJ-02 标准。- 对于海外的地点，采用 WGS84 标准')
            .optional(),
        })
        .describe('日程地点，不传值则默认为空')
        .optional(),
      color: z
        .number()
        .describe(
          '日程颜色，取值通过颜色 RGB 值的 int32 表示。**注意**：- 该参数仅对当前身份生效。- 客户端展示时会映射到色板上最接近的一种颜色。- 取值为 0 或 -1 时，默认跟随日历颜色',
        )
        .optional(),
      reminders: z
        .array(
          z.object({
            minutes: z
              .number()
              .describe(
                '日程提醒时间的偏移量。- 正数时表示在日程开始前 X 分钟提醒。- 负数时表示在日程开始后 X 分钟提醒。**注意**：新建或更新日程时传入该字段，仅对当前身份生效，不会对日程的其他参与人生效',
              )
              .optional(),
          }),
        )
        .describe('日程提醒列表。不传值则默认为空')
        .optional(),
      recurrence: z
        .string()
        .describe(
          '重复日程的重复性规则，规则设置方式参考。**默认值**：空，表示当前日程不是重复日程。**注意**：- COUNT 和 UNTIL 不支持同时出现。- 预定会议室重复日程长度不得超过两年',
        )
        .optional(),
      schemas: z
        .array(
          z.object({
            ui_name: z
              .string()
              .describe(
                'UI 名称。**可选值有**： - ForwardIcon：日程转发按钮 - MeetingChatIcon：会议群聊按钮 - MeetingMinutesIcon：会议纪要按钮 - MeetingVideo：视频会议区域 - RSVP：接受、拒绝、待定区域 - Attendee：参与者区域 - OrganizerOrCreator：组织者或创建者区域',
              )
              .optional(),
            ui_status: z
              .enum(['hide', 'readonly', 'editable', 'unknown'])
              .describe(
                'UI 项的状态。目前只支持选择 `hide`。 Options:hide(隐藏显示),readonly(只读),editable(可编辑),unknown(未知 UI 项自定义状态。该参数仅用于读取时兼容，不支持作为请求参数值传入)',
              )
              .optional(),
            app_link: z
              .string()
              .describe('按钮点击后跳转的链接。**注意**：兼容性参数，只读，因此暂不支持传入该请求参数')
              .optional(),
          }),
        )
        .describe('日程自定义信息，控制日程详情页的 UI 展示。不传值则默认为空')
        .optional(),
      attachments: z
        .array(
          z.object({
            file_token: z
              .string()
              .describe(
                '附件 Token。调用接口，获取附件的 file_token。在调用上传素材接口时需要注意：- `parent_type` 需传入固定值 `calendar`。- `parent_node` 需传入与当前接口一致的日历 ID。**附件校验规则**：附件总大小不超过 25 MB',
              )
              .optional(),
          }),
        )
        .describe('日程附件')
        .optional(),
      event_check_in: z
        .object({
          enable_check_in: z.boolean().describe('是否启用日程签到'),
          check_in_start_time: z
            .object({
              time_type: z
                .enum(['before_event_start', 'after_event_start', 'after_event_end'])
                .describe(
                  '偏移量(分钟)相对于的日程时间节点类型。 Options:before_event_start(BeforeEventStart 日程开始前),after_event_start(AfterEventStart 日程开始后),after_event_end(AfterEventEnd 日程结束后)',
                ),
              duration: z
                .number()
                .describe(
                  '相对于日程开始或者结束的偏移量(分钟)。- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。- 当time_type为before_event_start，duration不能取0',
                ),
            })
            .describe('日程签到开始时间。**注意**：签到开始时间不能大于或者等于签到结束时间')
            .optional(),
          check_in_end_time: z
            .object({
              time_type: z
                .enum(['before_event_start', 'after_event_start', 'after_event_end'])
                .describe(
                  '偏移量(分钟)相对于的日程时间节点类型。 Options:before_event_start(BeforeEventStart 日程开始前),after_event_start(AfterEventStart 日程开始后),after_event_end(AfterEventEnd 日程结束后)',
                ),
              duration: z
                .number()
                .describe(
                  '相对于日程开始或者结束的偏移量(分钟)。- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。- 当time_type为before_event_start，duration不能取0',
                ),
            })
            .describe('日程签到结束时间。**注意**：签到开始时间不能大于或者等于签到结束时间')
            .optional(),
          need_notify_attendees: z.boolean().describe('签到开始时是否自动发送签到通知给参与者').optional(),
        })
        .describe('日程签到设置，为空则不进行日程签到设置')
        .optional(),
    }),
    params: z.object({
      idempotency_key: z
        .string()
        .describe(
          '创建日程的幂等 key，该 key 在应用和日历维度下唯一，用于避免重复创建资源。建议按照示例值的格式进行取值',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventDelete = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.delete',
  sdkName: 'calendar.v4.calendarEvent.delete',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-日历-日程管理-删除日程-调用该接口以当前身份（应用或用户）删除指定日历上的一个日程',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      need_notification: z
        .enum(['true', 'false'])
        .describe('删除日程是否给日程参与人发送 Bot 通知。**默认值**：true Options:true(发送),false(不发送)')
        .optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。获取方式：- 会返回日程 ID- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventGet = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.get',
  sdkName: 'calendar.v4.calendarEvent.get',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日程管理-获取日程-调用该接口以当前身份（应用或用户）获取指定日历内的某一日程信息，包括日程的标题、时间段、视频会议信息、公开范围以及参与人权限等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      need_meeting_settings: z
        .boolean()
        .describe(
          '是否需要返回飞书视频会议（VC）的会前设置。需满足以下条件才可以获取到返回结果：- 日程的会议类型（vc_type）需要是 vc。- 需要有日程的编辑权限。**可选值有**：- true：需要- false（默认值）：不需要',
        )
        .optional(),
      need_attendee: z
        .boolean()
        .describe('是否需要返回参与人信息。**可选值有**：- true：需要- false（默认值）：不需要')
        .optional(),
      max_attendee_num: z
        .number()
        .describe(
          '返回的最大参与人数量。调用可获取日程完整的参与人信息',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。关于日历 ID 可参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventInstanceView = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.instanceView',
  sdkName: 'calendar.v4.calendarEvent.instanceView',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/instance_view',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日程管理-查询日程视图-调用该接口以用户身份查询指定日历下的日程视图。与不同的是，当前接口会按照重复日程的重复性规则展开成多个日程实例（instance），并根据查询的时间区间返回相应的日程实例信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      start_time: z
        .string()
        .describe(
          '开始时间，Unix 时间戳，单位为秒。该参数与 end_time 用于设置查询的时间范围。**注意**：start_time 与 end_time 之间的时间区间需要小于 40 天',
        ),
      end_time: z
        .string()
        .describe(
          '结束时间，Unix 时间戳，单位为秒。该参数与 start_time 用于设置查询的时间范围。**注意**：start_time 与 end_time 之间的时间区间需要小于 40 天',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventInstances = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.instances',
  sdkName: 'calendar.v4.calendarEvent.instances',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/instances',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-日程管理-获取重复日程实例-调用该接口以当前身份（应用或用户）获取指定日历中的某一重复日程信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      start_time: z
        .string()
        .describe(
          '开始时间，Unix 时间戳，单位为秒。该参数与 end_time 用于设置时间范围，即重复日程的查询区间为 （start_time, end_time）**注意**：start_time 与 end_time 之间的时间区间不能超过 2年',
        ),
      end_time: z
        .string()
        .describe(
          '结束时间，Unix 时间戳，单位为秒。该参数与 start_time 用于设置时间范围，即重复日程的查询区间为 （start_time, end_time）**注意**：start_time 与 end_time 之间的时间区间不能超过 2年',
        ),
      page_size: z.number().describe('一次调用返回的日程数量上限').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventList = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.list',
  sdkName: 'calendar.v4.calendarEvent.list',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-日历-日程管理-获取日程列表-调用该接口以当前身份（应用或用户）获取指定日历下的日程列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z
        .number()
        .describe(
          '一次请求要求返回的最大日程数量。实际返回的日程数量可能小于该值，也可能为空，可以根据响应体里的has_more字段来判断是否还有更多日程',
        )
        .optional(),
      anchor_time: z
        .string()
        .describe(
          '时间锚点，Unix 时间戳（秒）。anchor_time 用于设置一个时间点，以便直接拉取该时间点之后的日程数据，从而避免拉取全量日程数据。可使用 page_token 或 sync_token 进行分页或增量拉取 anchor_time 之后的所有日程数据。**使用说明**：- 对于单次日程，会获取到 **日程结束时间 >= anchor_time** 的日程信息。- 对于重复性日程，目前设置 anchor_time 后均会获取到，包括在 anchor_time 之前的已结束的历史重复性日程。- 对于例外日程，会获取到 **original_time >= anchor_time** 以及 **日程结束时间 >= anchor_time** 的日程信息，其中 original_time 从例外日程 ID 中获取，ID 结构为 `{uid}_{original_time}`。**注意**：该参数不可与 start_time 和 end_time 一起使用。**默认值**：空',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      sync_token: z
        .string()
        .describe(
          '增量同步标记，第一次请求不填。当分页查询结束（page_token 返回值为空）时，接口会返回 sync_token 字段，下次调用可使用该 sync_token 增量获取日历变更数据。**默认值**：空',
        )
        .optional(),
      start_time: z
        .string()
        .describe(
          '时间区间的开始时间， Unix 时间戳（秒），与end_time搭配使用，用于拉取指定时间区间内的日程数据.**注意**：- 该方式只能一次性返回数据，无法进行分页。一次性返回的数据大小受page_size限制，超过限制的数据将被截断。- 在使用start_time和end_time时，不能与page_token或sync_token一起使用。- 在使用start_time和end_time时，不能与anchor_time一起使用。**默认值**：空',
        )
        .optional(),
      end_time: z
        .string()
        .describe(
          '时间区间的结束时间， Unix 时间戳（秒）。与start_time搭配使用，用于拉取指定时间区间内的日程数据.**注意**：- 该方式只能一次性返回数据，无法进行分页。一次性返回的数据大小受page_size限制，超过限制的数据将被截断。- 在使用start_time和end_time时不能与page_token或sync_token一起使用。- 在使用start_time和end_time时，不能与anchor_time一起使用。**默认值**：空',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventMeetingChatCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventMeetingChat.create',
  sdkName: 'calendar.v4.calendarEventMeetingChat.create',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-会议群-创建会议群-调用该接口以当前身份（应用或用户）为指定日程创建一个会议群',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventMeetingChatDelete = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventMeetingChat.delete',
  sdkName: 'calendar.v4.calendarEventMeetingChat.delete',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_chat',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-日历-会议群-解绑会议群-调用该接口以当前身份（应用或用户）为日程解绑已创建的会议群',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ meeting_chat_id: z.string().describe('会议群 ID。在创建会议群时会返回会议群 ID') }),
    path: z.object({ calendar_id: z.string().describe('日程所在的日历 ID'), event_id: z.string().describe('日程 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventMeetingMinuteCreate = {
  project: 'calendar',
  name: 'calendar.v4.calendarEventMeetingMinute.create',
  sdkName: 'calendar.v4.calendarEventMeetingMinute.create',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/meeting_minute',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-会议纪要-创建会议纪要-调用该接口为指定的日程创建会议纪要。纪要以文档形式展示，成功创建后会返回纪要文档 URL',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。调用接口，获取当前身份的主日历 ID',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。调用接口，在指定日历内搜索日程并获取日程 ID',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventPatch = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.patch',
  sdkName: 'calendar.v4.calendarEvent.patch',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-日历-日程管理-更新日程-调用该接口以当前身份（应用或用户）更新指定日历上的一个日程，包括日程标题、描述、开始与结束时间、视频会议以及日程地点等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z.string().describe('日程标题。**默认值**：空，表示不更新该字段').optional(),
      description: z
        .string()
        .describe(
          '日程描述。**注意**：目前 API 方式不支持编辑富文本描述。如果日程描述通过客户端编辑为富文本内容，则使用 API 更新描述会导致富文本格式丢失。**默认值**：空，表示不更新该字段',
        )
        .optional(),
      need_notification: z
        .boolean()
        .describe(
          '更新日程时，是否给日程参与人发送 Bot 通知。**默认值**：空，表示不更新该字段**可选值有**：- true：发送通知- false：不发送通知',
        )
        .optional(),
      start_time: z
        .object({
          date: z
            .string()
            .describe(
              '开始时间，仅全天日程使用该字段， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
            )
            .optional(),
          timestamp: z
            .string()
            .describe(
              '秒级时间戳，用于设置具体的开始时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
            )
            .optional(),
          timezone: z
            .string()
            .describe(
              '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天日程时区固定为UTC +0- 非全天日程时区默认为 Asia/Shanghai',
            )
            .optional(),
        })
        .describe('日程开始时间。需要与end_time同时有值才会生效')
        .optional(),
      end_time: z
        .object({
          date: z
            .string()
            .describe(
              '结束时间，仅全天日程使用该字段， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
            )
            .optional(),
          timestamp: z
            .string()
            .describe(
              '秒级时间戳，用于设置具体的结束时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
            )
            .optional(),
          timezone: z
            .string()
            .describe(
              '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天日程时区固定为UTC +0- 非全天日程时区默认为 Asia/Shanghai',
            )
            .optional(),
        })
        .describe('日程结束时间。需要与start_time同时有值才会生效')
        .optional(),
      vchat: z
        .object({
          vc_type: z
            .enum(['vc', 'third_party', 'no_meeting', 'lark_live', 'unknown'])
            .describe(
              '视频会议类型。如果无需视频会议，则必须传入 `no_meeting`。 Options:vc(飞书视频会议。取该类型时，vchat 内的其他字段均无效。),third_party(ThirdParty 第三方链接视频会议。取该类型时，仅生效 vchat 内的 icon_type、description、meeting_url 字段。),no_meeting(NoMeeting 无视频会议。取该类型时，vchat 内的其他字段均无效。),lark_live(LarkLive 飞书直播。该值用于客户端，不支持通过 API 调用，只读。),unknown(未知类型。该值用于客户端做兼容使用，不支持通过 API 调用，只读。)',
            )
            .optional(),
          icon_type: z
            .enum(['vc', 'live', 'default'])
            .describe(
              '第三方视频会议的 icon 类型。**默认值**：空，表示不更新该字段 Options:vc(飞书视频会议 icon),live(直播视频会议 icon),default(默认 icon)',
            )
            .optional(),
          description: z.string().describe('第三方视频会议文案。**默认值**：空，表示不更新该字段').optional(),
          meeting_url: z.string().describe('视频会议 URL。**默认值**：空，表示不更新该字段').optional(),
          meeting_settings: z
            .object({
              owner_id: z
                .string()
                .describe(
                  '设置会议 owner 的用户 ID，ID 类型需和 user_id_type 保持一致。该参数需满足以下全部条件才会生效：- 应用身份（tenant_access_token）请求，且在应用日历上操作日程。- 首次将日程设置为 VC 会议时，才能设置owner。- owner 不能为非用户身份。- owner 不能为外部租户用户身份',
                )
                .optional(),
              join_meeting_permission: z
                .enum(['anyone_can_join', 'only_organization_employees', 'only_event_attendees'])
                .describe(
                  '设置入会范围。 Options:anyone_can_join(AnyOne 所有人可以加入会议),only_organization_employees(OnlySameOrganization 仅企业内用户可以加入会议),only_event_attendees(OnlyEventAttendees 仅日程参与者可以加入会议)',
                )
                .optional(),
              assign_hosts: z
                .array(z.string())
                .describe(
                  '通过用户 ID 指定主持人，ID 类型需和 user_id_type 保持一致。**注意**：- 仅日程组织者可以指定主持人。- 主持人不能是非用户身份。- 主持人不能是外部租户用户身份。- 在应用日历上操作日程时，不允许指定主持人',
                )
                .optional(),
              auto_record: z
                .boolean()
                .describe('是否开启自动录制。**可选值有**：- true：开启- false：不开启**默认值**：空，表示不更新该字段')
                .optional(),
              open_lobby: z
                .boolean()
                .describe('是否开启等候室。**可选值有**：- true：开启- false：不开启**默认值**：空，表示不更新该字段')
                .optional(),
              allow_attendees_start: z
                .boolean()
                .describe(
                  '是否允许日程参与者发起会议。**注意**：应用日历上操作日程时，该字段必须为 true，否则没有人能发起会议。**可选值有**：- true：允许- false：不允许**默认值**：空，表示不更新该字段',
                )
                .optional(),
            })
            .describe(
              '飞书视频会议（VC）的会前设置，需满足以下全部条件：- 当 `vc_type` 为 `vc` 时生效。- 需要有日程的编辑权限。不传值则表示不更新该字段',
            )
            .optional(),
        })
        .describe('视频会议信息。不传值则表示不更新该字段')
        .optional(),
      visibility: z
        .enum(['default', 'public', 'private'])
        .describe(
          '日程公开范围。**注意**：更新日程时如果修改了该参数值，则仅对当前身份生效。**默认值**：空，表示不更新该字段 Options:default(默认权限，即跟随日历权限，默认仅向他人显示是否忙碌),public(公开，显示日程详情),private(私密，仅自己可见详情)',
        )
        .optional(),
      attendee_ability: z
        .enum(['none', 'can_see_others', 'can_invite_others', 'can_modify_event'])
        .describe(
          '参与人权限。**默认值**：空，表示不更新该字段 Options:none(无法编辑日程、无法邀请其他参与人、无法查看参与人列表),can_see_others(CanSeeOthers 无法编辑日程、无法邀请其他参与人、可以查看参与人列表),can_invite_others(CanInviteOthers 无法编辑日程、可以邀请其他参与人、可以查看参与人列表),can_modify_event(CanModifyEvent 可以编辑日程、可以邀请其他参与人、可以查看参与人列表)',
        )
        .optional(),
      free_busy_status: z
        .enum(['busy', 'free'])
        .describe(
          '日程占用的忙闲状态，新建日程默认为 `busy`。**注意**：更新日程时如果修改了该参数值，则仅对当前身份生效。**默认值**：空，表示不更新该字段 Options:busy(忙碌),free(空闲)',
        )
        .optional(),
      location: z
        .object({
          name: z.string().describe('地点名称').optional(),
          address: z.string().describe('地点地址').optional(),
          latitude: z
            .number()
            .describe('地点坐标纬度信息。- 对于国内的地点，采用 GCJ-02 标准。- 对于海外的地点，采用 WGS84 标准')
            .optional(),
          longitude: z
            .number()
            .describe('地点坐标经度信息。- 对于国内的地点，采用 GCJ-02 标准。- 对于海外的地点，采用 WGS84 标准')
            .optional(),
        })
        .describe('日程地点。不传值则表示不更新该字段')
        .optional(),
      color: z
        .number()
        .describe(
          '日程颜色，取值通过颜色 RGB 值的 int32 表示。**注意**：- 该参数仅对当前身份生效。- 客户端展示时会映射到色板上最接近的一种颜色。- 取值为 0 或 -1 时，默认跟随日历颜色。**默认值**：空，表示不更新该字段',
        )
        .optional(),
      reminders: z
        .array(
          z.object({
            minutes: z
              .number()
              .describe(
                '日程提醒时间的偏移量。- 正数时表示在日程开始前 X 分钟提醒。- 负数时表示在日程开始后 X 分钟提醒。**注意**：更新日程时修改该字段仅对当前身份生效',
              )
              .optional(),
          }),
        )
        .describe('日程提醒列表。不传值则表示不更新该字段')
        .optional(),
      recurrence: z
        .string()
        .describe(
          '重复日程的重复性规则，规则设置方式参考。**注意**：- COUNT 和 UNTIL 不支持同时出现。- 预定会议室重复日程长度不得超过两年。**默认值**：空，表示不更新该字段',
        )
        .optional(),
      schemas: z
        .array(
          z.object({
            ui_name: z
              .string()
              .describe(
                'UI 名称。**可选值有**： - ForwardIcon：日程转发按钮 - MeetingChatIcon：会议群聊按钮 - MeetingMinutesIcon：会议纪要按钮 - MeetingVideo：视频会议区域 - RSVP：接受、拒绝、待定区域 - Attendee：参与者区域 - OrganizerOrCreator：组织者或创建者区域',
              )
              .optional(),
            ui_status: z
              .enum(['hide', 'readonly', 'editable', 'unknown'])
              .describe(
                'UI 项的状态。目前只支持选择 `hide`。 Options:hide(隐藏显示),readonly(只读),editable(可编辑),unknown(未知 UI 项自定义状态。该参数仅用于读取时兼容，不支持作为请求参数值传入)',
              )
              .optional(),
            app_link: z
              .string()
              .describe('按钮点击后跳转的链接。**注意**：兼容性参数，只读，因此暂不支持传入该请求参数')
              .optional(),
          }),
        )
        .describe('日程自定义信息，控制日程详情页的 UI 展示。不传值则表示不更新该字段')
        .optional(),
      attachments: z
        .array(
          z.object({
            file_token: z
              .string()
              .describe(
                '附件 Token。调用接口，获取附件的 file_token。在调用上传素材接口时需要注意：- `parent_type` 需传入固定值 `calender`。- `parent_node` 需传入与当前接口一致的日历 ID。**附件校验规则**：附件总大小不超过 25 MB',
              )
              .optional(),
            is_deleted: z
              .boolean()
              .describe('是否删除附件。**可选值有**： - true：删除- false：不删除**默认值**：false')
              .optional(),
          }),
        )
        .describe('日程附件')
        .optional(),
      event_check_in: z
        .object({
          enable_check_in: z.boolean().describe('是否启用日程签到'),
          check_in_start_time: z
            .object({
              time_type: z
                .enum(['before_event_start', 'after_event_start', 'after_event_end'])
                .describe(
                  '偏移量(分钟)相对于的日程时间节点类型。 Options:before_event_start(BeforeEventStart 日程开始前),after_event_start(AfterEventStart 日程开始后),after_event_end(AfterEventEnd 日程结束后)',
                ),
              duration: z
                .number()
                .describe(
                  '相对于日程开始或者结束的偏移量(分钟)。- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。- 当time_type为before_event_start，duration不能取0',
                ),
            })
            .describe('日程签到开始时间。**注意**：签到开始时间不能大于或者等于签到结束时间')
            .optional(),
          check_in_end_time: z
            .object({
              time_type: z
                .enum(['before_event_start', 'after_event_start', 'after_event_end'])
                .describe(
                  '偏移量(分钟)相对于的日程时间节点类型。 Options:before_event_start(BeforeEventStart 日程开始前),after_event_start(AfterEventStart 日程开始后),after_event_end(AfterEventEnd 日程结束后)',
                ),
              duration: z
                .number()
                .describe(
                  '相对于日程开始或者结束的偏移量(分钟)。- 目前取值只能为列表[0, 5, 15, 30, 60]之一，0表示立即开始。- 当time_type为before_event_start，duration不能取0',
                ),
            })
            .describe('日程签到结束时间。**注意**：签到开始时间不能大于或者等于签到结束时间')
            .optional(),
          need_notify_attendees: z.boolean().describe('签到开始时是否自动发送签到通知给参与者').optional(),
        })
        .describe('日程签到设置，为空则不进行日程签到设置')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventReply = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.reply',
  sdkName: 'calendar.v4.calendarEvent.reply',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/:event_id/reply',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日程管理-回复日程-调用该接口以当前身份（应用或用户）回复日程',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      rsvp_status: z
        .enum(['accept', 'decline', 'tentative'])
        .describe('日程参与人 RSVP 状态，即日程回复状态。 Options:accept(接受),decline(拒绝),tentative(待定)'),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日程所在的日历 ID。了解更多，参见',
        ),
      event_id: z
        .string()
        .describe(
          '日程 ID。创建日程时会返回日程 ID。你也可以调用以下接口获取某一日历的 ID。- - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventSearch = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.search',
  sdkName: 'calendar.v4.calendarEvent.search',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日程管理-搜索日程-调用该接口搜索指定日历下的相关日程，支持关键词搜索、过滤条件搜索',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      query: z
        .string()
        .describe(
          '搜索关键字，用于模糊查询日程名称。**注意**：如果日程名称包含下划线（_），则必须精准查询。该场景模糊查询可能无法搜索到日程',
        ),
      filter: z
        .object({
          start_time: z
            .object({
              date: z
                .string()
                .describe(
                  '以天为最小单位指定开始时间， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
                )
                .optional(),
              timestamp: z
                .string()
                .describe(
                  '秒级时间戳，指具体的开始时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
                )
                .optional(),
              timezone: z
                .string()
                .describe(
                  '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天时区固定为UTC +0- 非全天时区默认为 Asia/Shanghai',
                )
                .optional(),
            })
            .describe(
              '搜索过滤项，日程搜索区间的开始时间。**注意**：start_time 和 end_time 不传值时，默认搜索近一个月内的日程',
            )
            .optional(),
          end_time: z
            .object({
              date: z
                .string()
                .describe(
                  '以天为最小单位指定结束时间， 格式，例如，2018-09-01。**注意**：该参数不能与 `timestamp` 同时指定',
                )
                .optional(),
              timestamp: z
                .string()
                .describe(
                  '秒级时间戳，指具体的结束时间。例如，1602504000 表示 2020/10/12 20:00:00（UTC +8 时区）。**注意**：该参数不能与 `date` 同时指定',
                )
                .optional(),
              timezone: z
                .string()
                .describe(
                  '时区。使用 IANA Time Zone Database 标准，例如 Asia/Shanghai。- 全天时区固定为UTC +0- 非全天时区默认为 Asia/Shanghai',
                )
                .optional(),
            })
            .describe(
              '搜索过滤项，日程搜索区间的结束时间。**注意**：start_time 和 end_time 不传值时，默认搜索近一个月内的日程',
            )
            .optional(),
          user_ids: z
            .array(z.string())
            .describe(
              '搜索过滤项，日程参与人的用户 ID 列表。设置该字段后，被搜索到的日程中至少包含其中一个参与人。**注意**：用户 ID 类型和 user_id_type 的值保持一致，关于用户 ID 可参见。**默认值**：空，表示不设置该过滤项',
            )
            .optional(),
          room_ids: z
            .array(z.string())
            .describe(
              '搜索过滤项，会议室 ID 列表。设置该字段后，被搜索到的日程中至少包含其中一个会议室。**默认值**：空，表示不设置该过滤项',
            )
            .optional(),
          chat_ids: z
            .array(z.string())
            .describe(
              '搜索过滤项，群 ID 列表。设置该字段后，被搜索到的日程中至少包含其中一个群。关于群 ID 可参见。**默认值**：空，表示不设置该过滤项',
            )
            .optional(),
        })
        .describe('搜索过滤器')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('一次调用所返回的最大日程数量。最小值为10，不足10取10').optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventSubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.subscription',
  sdkName: 'calendar.v4.calendarEvent.subscription',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/subscription',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日程管理-订阅日程变更事件-调用该接口以用户身份订阅指定日历下的日程变更事件',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarEventUnsubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendarEvent.unsubscription',
  sdkName: 'calendar.v4.calendarEvent.unsubscription',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/events/unsubscription',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日程管理-取消订阅日程变更事件-调用该接口以用户身份取消订阅指定日历下的日程变更事件',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。关于日历 ID 可参见',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarGet = {
  project: 'calendar',
  name: 'calendar.v4.calendar.get',
  sdkName: 'calendar.v4.calendar.get',
  path: '/open-apis/calendar/v4/calendars/:calendar_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-日历-日历管理-查询日历信息-调用该接口以当前身份（应用或用户）查询指定日历的信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarList = {
  project: 'calendar',
  name: 'calendar.v4.calendar.list',
  sdkName: 'calendar.v4.calendar.list',
  path: '/open-apis/calendar/v4/calendars',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-日历-日历管理-查询日历列表-调用该接口分页查询当前身份（应用或用户）的日历列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z
        .number()
        .describe(
          '一次请求要求返回的最大日历数量。实际返回的日历数量可能小于该值，也可能为空，可以根据响应体里的has_more字段来判断是否还有更多日历',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      sync_token: z
        .string()
        .describe(
          '增量同步标记，第一次请求不填。当分页查询结束（page_token 返回值为空）时，接口会返回 sync_token 字段，下次调用可使用该 sync_token 增量获取日历变更数据。**默认值**：空',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarPatch = {
  project: 'calendar',
  name: 'calendar.v4.calendar.patch',
  sdkName: 'calendar.v4.calendar.patch',
  path: '/open-apis/calendar/v4/calendars/:calendar_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-日历-日历管理-更新日历信息-调用该接口以当前身份（应用或用户）修改指定日历的标题、描述、公开范围等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z.string().describe('日历标题。- 不传表示不更新该字段').optional(),
      description: z.string().describe('日历描述。- 不传表示不更新该字段').optional(),
      permissions: z
        .enum(['private', 'show_only_free_busy', 'public'])
        .describe(
          '日历公开范围。- 不传表示不更新该字段。 Options:private(私密),show_only_free_busy(ShowOnlyFreeBusy 仅展示忙闲信息),public(公开，他人可查看日程详情)',
        )
        .optional(),
      color: z
        .number()
        .describe(
          '日历颜色，取值通过颜色 RGB 值的 int32 表示，其中，24 ~ 31 位为透明度，16 ~ 23 位为红，8 ~ 15 位为绿，0 ~ 7 位为蓝。例如，-11034625 表示 RGB 值 (87, 159, 255)。- 不传表示不更新该字段。**注意**：- 取值范围为 -2^31 ~ 2^31-1- 日历颜色会映射到飞书客户端色板上最接近的一种颜色进行展示。- 该颜色仅对当前身份生效',
        )
        .optional(),
      summary_alias: z
        .string()
        .describe('日历备注名，设置该字段后（包括后续修改该字段）仅对当前身份生效。- 不传表示不更新该字段')
        .optional(),
    }),
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarPrimary = {
  project: 'calendar',
  name: 'calendar.v4.calendar.primary',
  sdkName: 'calendar.v4.calendar.primary',
  path: '/open-apis/calendar/v4/calendars/primary',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日历管理-查询主日历信息-调用该接口获取当前身份（应用或用户）的主日历信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarSearch = {
  project: 'calendar',
  name: 'calendar.v4.calendar.search',
  sdkName: 'calendar.v4.calendar.search',
  path: '/open-apis/calendar/v4/calendars/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历管理-搜索日历-调用该接口通过关键字搜索日历，搜索结果为标题或描述包含关键字的公共日历或用户主日历',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      query: z.string().describe('搜索关键字。接口将会搜索标题或描述中包含该关键字的公共日历或用户主日历'),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('一次请求返回的最大日历数量').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarSubscribe = {
  project: 'calendar',
  name: 'calendar.v4.calendar.subscribe',
  sdkName: 'calendar.v4.calendar.subscribe',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/subscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日历管理-订阅日历-调用该接口以当前身份（应用或用户）订阅指定的日历',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历ID。创建共享日历时会返回日历 ID。你也可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarSubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendar.subscription',
  sdkName: 'calendar.v4.calendar.subscription',
  path: '/open-apis/calendar/v4/calendars/subscription',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历管理-订阅日历变更事件-调用该接口为当前用户身份订阅',
  accessTokens: ['user'],
  schema: {
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarUnsubscribe = {
  project: 'calendar',
  name: 'calendar.v4.calendar.unsubscribe',
  sdkName: 'calendar.v4.calendar.unsubscribe',
  path: '/open-apis/calendar/v4/calendars/:calendar_id/unsubscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-日历-日历管理-取消订阅日历-调用该接口以当前身份（应用或用户）取消指定日历的订阅状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      calendar_id: z
        .string()
        .describe(
          '日历 ID。你可以调用以下接口获取某一日历的 ID。- - - ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4CalendarUnsubscription = {
  project: 'calendar',
  name: 'calendar.v4.calendar.unsubscription',
  sdkName: 'calendar.v4.calendar.unsubscription',
  path: '/open-apis/calendar/v4/calendars/unsubscription',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历管理-取消订阅日历变更事件-调用该接口为当前用户身份取消订阅',
  accessTokens: ['user'],
  schema: {
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4ExchangeBindingCreate = {
  project: 'calendar',
  name: 'calendar.v4.exchangeBinding.create',
  sdkName: 'calendar.v4.exchangeBinding.create',
  path: '/open-apis/calendar/v4/exchange_bindings',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-同步 Exchange 日历信息-将 Exchange 账户绑定到飞书账户-调用该接口将 Exchange 账户绑定到飞书账户，进而支持 Exchange 日历的导入',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      admin_account: z.string().describe('Exchange 的 admin 账户').optional(),
      exchange_account: z.string().describe('需绑定的 Exchange 账户').optional(),
      user_id: z
        .string()
        .describe(
          '用户 ID，即 Exchange 账户绑定的飞书账户 ID。关于用户 ID 可参见',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4ExchangeBindingDelete = {
  project: 'calendar',
  name: 'calendar.v4.exchangeBinding.delete',
  sdkName: 'calendar.v4.exchangeBinding.delete',
  path: '/open-apis/calendar/v4/exchange_bindings/:exchange_binding_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-日历-同步 Exchange 日历信息-解除 Exchange 账户绑定-调用该接口解除 Exchange 账户和飞书账户的绑定关系，Exchange 账户解除绑定后才能和其他飞书账户继续绑定',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      exchange_binding_id: z
        .string()
        .describe(
          'Exchange 绑定的唯一标识 ID。调用  绑定时，可从返回结果中获取 exchange_binding_id',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4ExchangeBindingGet = {
  project: 'calendar',
  name: 'calendar.v4.exchangeBinding.get',
  sdkName: 'calendar.v4.exchangeBinding.get',
  path: '/open-apis/calendar/v4/exchange_bindings/:exchange_binding_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-日历-同步 Exchange 日历信息-查询 Exchange 账户的绑定状态-调用该接口获取 Exchange 账户的绑定状态，包括 Exchange 日历的同步状态',
  accessTokens: ['user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      exchange_binding_id: z
        .string()
        .describe(
          'Exchange 绑定的唯一标识 ID。调用  绑定时，可从返回结果中获取 exchange_binding_id',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4FreebusyList = {
  project: 'calendar',
  name: 'calendar.v4.freebusy.list',
  sdkName: 'calendar.v4.freebusy.list',
  path: '/open-apis/calendar/v4/freebusy/list',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-日历管理-查询主日历日程忙闲信息-调用该接口查询指定用户的主日历忙闲信息，或者查询指定会议室的忙闲信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      time_min: z
        .string()
        .describe(
          '查询时段开始时间， date_time 格式。**注意**：time_min 与 time_max 之间的时间间隔不能大于 90 天',
        ),
      time_max: z
        .string()
        .describe(
          '查询时段结束时间， date_time 格式。**注意**：time_min 与 time_max 之间的时间间隔不能大于 90 天',
        ),
      user_id: z
        .string()
        .describe(
          '用户 ID，需要传入与查询参数 user_id_type 相匹配的 id。例如，`user_id_type=open_id` 时，需要传入用户的 open_id。了解用户 ID 参见。**注意**：user_id 与 room_id 需要二选一传入，如果同时传入则只生效 user_id',
        )
        .optional(),
      room_id: z
        .string()
        .describe(
          '会议室 room_id。你可以调用接口或者接口，获取相应会议室的 room_id。**注意**：user_id 与 room_id 需要二选一传入，如果同时传入则只生效 user_id',
        )
        .optional(),
      include_external_calendar: z
        .boolean()
        .describe('是否包含绑定的三方日历中的日程。**取值**：- true（默认值）：包含- false：不包含')
        .optional(),
      only_busy: z
        .boolean()
        .describe(
          '是否只查询忙碌日程信息。**取值**：- true（默认值）：是，查询结果不包含空闲日程。- false：否，查询结果包含空闲日程',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4SettingGenerateCaldavConf = {
  project: 'calendar',
  name: 'calendar.v4.setting.generateCaldavConf',
  sdkName: 'calendar.v4.setting.generateCaldavConf',
  path: '/open-apis/calendar/v4/settings/generate_caldav_conf',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-同步到本地日历-生成 CalDAV 配置-调用该接口为当前用户生成一个 CalDAV 账号密码，用于将飞书日历信息同步到本地设备日历',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      device_name: z.string().describe('需要同步日历的设备名，在日历中用来展示。**默认值**：空').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const calendarV4TimeoffEventCreate = {
  project: 'calendar',
  name: 'calendar.v4.timeoffEvent.create',
  sdkName: 'calendar.v4.timeoffEvent.create',
  path: '/open-apis/calendar/v4/timeoff_events',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-日历-请假日程管理-创建请假日程-调用该接口为指定用户创建一个请假日程。请假日程分为普通日程和全天日程。创建请假日程后，在请假时间内，用户个人签名页会展示请假信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z
        .string()
        .describe(
          '用户 ID。ID 类型需要与 user_id_type 的值保持一致。关于用户 ID 可参见',
        ),
      timezone: z.string().describe('时区信息'),
      start_time: z
        .string()
        .describe(
          '请假开始时间。支持以下任一格式：- 秒级时间戳：通过时间戳设置的请假日程为普通日程，即按小时请假。取值示例 `1609430400`- 日期格式：通过日期设置的请假日程为全天日程。取值示例 `2021-01-01`**注意**：start_time 和 end_time 所选用的时间格式必须保持一致，否则无效',
        ),
      end_time: z
        .string()
        .describe(
          '请假结束时间。支持以下任一格式：- 秒级时间戳：通过时间戳设置的请假日程为普通日程，即按小时请假。取值示例 `1609430400`- 日期格式：通过日期设置的请假日程为全天日程。取值示例 `2021-01-01`**注意**：start_time 和 end_time 所选用的时间格式必须保持一致，否则无效',
        ),
      title: z.string().describe('自定义请假日程标题。**默认值**：空，使用默认标题').optional(),
      description: z.string().describe('自定义请假日程描述。**默认值**：空，使用默认描述').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const calendarV4TimeoffEventDelete = {
  project: 'calendar',
  name: 'calendar.v4.timeoffEvent.delete',
  sdkName: 'calendar.v4.timeoffEvent.delete',
  path: '/open-apis/calendar/v4/timeoff_events/:timeoff_event_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-日历-请假日程管理-删除请假日程-调用该接口删除一个指定的请假日程。请假日程删除后，用户个人签名页的请假信息也会消失',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ timeoff_event_id: z.string().describe('请假日程 ID，在创建请假日程时从返回结果中获取') }),
  },
};
export const calendarV4Tools = [
  calendarV4CalendarAclCreate,
  calendarV4CalendarAclDelete,
  calendarV4CalendarAclList,
  calendarV4CalendarAclSubscription,
  calendarV4CalendarAclUnsubscription,
  calendarV4CalendarCreate,
  calendarV4CalendarDelete,
  calendarV4CalendarEventAttendeeBatchDelete,
  calendarV4CalendarEventAttendeeChatMemberList,
  calendarV4CalendarEventAttendeeCreate,
  calendarV4CalendarEventAttendeeList,
  calendarV4CalendarEventCreate,
  calendarV4CalendarEventDelete,
  calendarV4CalendarEventGet,
  calendarV4CalendarEventInstanceView,
  calendarV4CalendarEventInstances,
  calendarV4CalendarEventList,
  calendarV4CalendarEventMeetingChatCreate,
  calendarV4CalendarEventMeetingChatDelete,
  calendarV4CalendarEventMeetingMinuteCreate,
  calendarV4CalendarEventPatch,
  calendarV4CalendarEventReply,
  calendarV4CalendarEventSearch,
  calendarV4CalendarEventSubscription,
  calendarV4CalendarEventUnsubscription,
  calendarV4CalendarGet,
  calendarV4CalendarList,
  calendarV4CalendarPatch,
  calendarV4CalendarPrimary,
  calendarV4CalendarSearch,
  calendarV4CalendarSubscribe,
  calendarV4CalendarSubscription,
  calendarV4CalendarUnsubscribe,
  calendarV4CalendarUnsubscription,
  calendarV4ExchangeBindingCreate,
  calendarV4ExchangeBindingDelete,
  calendarV4ExchangeBindingGet,
  calendarV4FreebusyList,
  calendarV4SettingGenerateCaldavConf,
  calendarV4TimeoffEventCreate,
  calendarV4TimeoffEventDelete,
];
