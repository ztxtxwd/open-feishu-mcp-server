import { z } from 'zod';
export type helpdeskV1ToolName =
  | 'helpdesk.v1.agentSchedule.create'
  | 'helpdesk.v1.agentSchedule.list'
  | 'helpdesk.v1.agentSkillRule.list'
  | 'helpdesk.v1.agentSkill.create'
  | 'helpdesk.v1.agentSkill.delete'
  | 'helpdesk.v1.agentSkill.get'
  | 'helpdesk.v1.agentSkill.list'
  | 'helpdesk.v1.agentSkill.patch'
  | 'helpdesk.v1.agent.agentEmail'
  | 'helpdesk.v1.agent.patch'
  | 'helpdesk.v1.agentSchedules.delete'
  | 'helpdesk.v1.agentSchedules.get'
  | 'helpdesk.v1.agentSchedules.patch'
  | 'helpdesk.v1.botMessage.create'
  | 'helpdesk.v1.category.create'
  | 'helpdesk.v1.category.delete'
  | 'helpdesk.v1.category.get'
  | 'helpdesk.v1.category.list'
  | 'helpdesk.v1.category.patch'
  | 'helpdesk.v1.event.subscribe'
  | 'helpdesk.v1.event.unsubscribe'
  | 'helpdesk.v1.faq.create'
  | 'helpdesk.v1.faq.delete'
  | 'helpdesk.v1.faq.get'
  | 'helpdesk.v1.faq.list'
  | 'helpdesk.v1.faq.patch'
  | 'helpdesk.v1.faq.search'
  | 'helpdesk.v1.notification.cancelApprove'
  | 'helpdesk.v1.notification.cancelSend'
  | 'helpdesk.v1.notification.create'
  | 'helpdesk.v1.notification.executeSend'
  | 'helpdesk.v1.notification.get'
  | 'helpdesk.v1.notification.patch'
  | 'helpdesk.v1.notification.preview'
  | 'helpdesk.v1.notification.submitApprove'
  | 'helpdesk.v1.ticketCustomizedField.create'
  | 'helpdesk.v1.ticketCustomizedField.delete'
  | 'helpdesk.v1.ticketCustomizedField.get'
  | 'helpdesk.v1.ticketCustomizedField.list'
  | 'helpdesk.v1.ticketCustomizedField.patch'
  | 'helpdesk.v1.ticket.answerUserQuery'
  | 'helpdesk.v1.ticket.customizedFields'
  | 'helpdesk.v1.ticket.get'
  | 'helpdesk.v1.ticket.list'
  | 'helpdesk.v1.ticketMessage.create'
  | 'helpdesk.v1.ticketMessage.list'
  | 'helpdesk.v1.ticket.startService'
  | 'helpdesk.v1.ticket.update';
export const helpdeskV1AgentScheduleCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSchedule.create',
  sdkName: 'helpdesk.v1.agentSchedule.create',
  path: '/open-apis/helpdesk/v1/agent_schedules',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-客服-客服工作日程-创建客服工作日程-该接口用于创建客服日程',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      agent_schedules: z
        .array(
          z.object({
            agent_id: z
              .string()
              .describe(
                '客服id',
              )
              .optional(),
            schedule: z
              .array(
                z.object({
                  start_time: z.string().describe('开始时间, format 00:00 - 23:59').optional(),
                  end_time: z.string().describe('结束时间, format 00:00 - 23:59').optional(),
                  weekday: z
                    .number()
                    .describe(
                      '星期几, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday, 7 - Sunday, 9 - Everyday, 10 - Weekday, 11 - Weekend',
                    )
                    .optional(),
                }),
              )
              .describe('工作日程列表')
              .optional(),
            agent_skill_ids: z.array(z.string()).describe('客服技能 ids').optional(),
          }),
        )
        .describe('新客服日程')
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentScheduleList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSchedule.list',
  sdkName: 'helpdesk.v1.agentSchedule.list',
  path: '/open-apis/helpdesk/v1/agent_schedules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服工作日程-查询全部客服工作日程-该接口用于获取所有客服信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      status: z
        .array(z.number())
        .describe(
          '筛选条件- 1：online客服- 2：offline(手动)客服- 3：off duty(下班)客服- 4：移除客服在 GET 请求中传入多个值的格式为 `status=1&status=2`',
        ),
    }),
  },
};
export const helpdeskV1AgentSkillRuleList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkillRule.list',
  sdkName: 'helpdesk.v1.agentSkillRule.list',
  path: '/open-apis/helpdesk/v1/agent_skill_rules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服技能规则-获取客服技能列表-该接口用于获取全部客服技能。仅支持自建应用',
  accessTokens: ['tenant'],
  schema: {},
};
export const helpdeskV1AgentSkillCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkill.create',
  sdkName: 'helpdesk.v1.agentSkill.create',
  path: '/open-apis/helpdesk/v1/agent_skills',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-客服-客服技能-创建客服技能-该接口用于创建客服技能',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      name: z.string().describe('技能名').optional(),
      rules: z
        .array(
          z.object({
            id: z
              .string()
              .describe(
                'rule id, 参考 用于获取rules options',
              )
              .optional(),
            selected_operator: z
              .number()
              .describe(
                '运算符比较, 参考',
              )
              .optional(),
            operand: z.string().describe('rule 操作数的值').optional(),
            category: z.number().describe('rule 类型，1-知识库，2-工单信息，3-用户飞书信息').optional(),
          }),
        )
        .describe('技能rules')
        .optional(),
      agent_ids: z.array(z.string()).describe('客服 ids').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentSkillDelete = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkill.delete',
  sdkName: 'helpdesk.v1.agentSkill.delete',
  path: '/open-apis/helpdesk/v1/agent_skills/:agent_skill_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-服务台-客服-客服技能-删除客服技能-该接口用于删除客服技能',
  accessTokens: ['user'],
  schema: {
    path: z.object({ agent_skill_id: z.string().describe('agent group id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentSkillGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkill.get',
  sdkName: 'helpdesk.v1.agentSkill.get',
  path: '/open-apis/helpdesk/v1/agent_skills/:agent_skill_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服技能-查询指定客服技能-该接口用于获取客服技能',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ agent_skill_id: z.string().describe('agent skill id').optional() }),
  },
};
export const helpdeskV1AgentSkillList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkill.list',
  sdkName: 'helpdesk.v1.agentSkill.list',
  path: '/open-apis/helpdesk/v1/agent_skills',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服技能-查询全部客服技能-获取全部客服技能',
  accessTokens: ['tenant'],
  schema: {},
};
export const helpdeskV1AgentSkillPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSkill.patch',
  sdkName: 'helpdesk.v1.agentSkill.patch',
  path: '/open-apis/helpdesk/v1/agent_skills/:agent_skill_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-客服-客服技能-更新客服技能-该接口用于更新客服技能',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      agent_skill: z
        .object({
          name: z.string().describe('技能名').optional(),
          rules: z
            .array(
              z.object({
                id: z
                  .string()
                  .describe(
                    'rule id, 参考 用于获取rules options',
                  )
                  .optional(),
                selected_operator: z
                  .number()
                  .describe(
                    '运算符比较, 参考',
                  )
                  .optional(),
                operator_options: z
                  .array(z.number())
                  .describe(
                    'rule操作数value，',
                  )
                  .optional(),
                operand: z.string().describe('rule 操作数的值').optional(),
              }),
            )
            .describe('技能rules')
            .optional(),
          agent_ids: z.array(z.string()).describe('具有此技能的客服ids').optional(),
        })
        .describe('更新技能')
        .optional(),
    }),
    path: z.object({ agent_skill_id: z.string().describe('agent skill id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentAgentEmail = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agent.agentEmail',
  sdkName: 'helpdesk.v1.agent.agentEmail',
  path: '/open-apis/helpdesk/v1/agent_emails',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服功能管理-获取客服邮箱-该接口用于获取客服邮箱地址',
  accessTokens: ['tenant'],
  schema: {},
};
export const helpdeskV1AgentPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agent.patch',
  sdkName: 'helpdesk.v1.agent.patch',
  path: '/open-apis/helpdesk/v1/agents/:agent_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-客服-客服功能管理-更新客服信息-更新客服状态等信息',
  accessTokens: ['user'],
  schema: {
    data: z.object({ status: z.number().describe('agent status，1：在线；2：离线').optional() }),
    path: z.object({ agent_id: z.string().describe('客服id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentSchedulesDelete = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSchedules.delete',
  sdkName: 'helpdesk.v1.agentSchedules.delete',
  path: '/open-apis/helpdesk/v1/agents/:agent_id/schedules',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-服务台-客服-客服工作日程-删除客服工作日程-该接口用于删除客服日程',
  accessTokens: ['user'],
  schema: {
    path: z.object({ agent_id: z.string().describe('agent user id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1AgentSchedulesGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSchedules.get',
  sdkName: 'helpdesk.v1.agentSchedules.get',
  path: '/open-apis/helpdesk/v1/agents/:agent_id/schedules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-客服-客服工作日程-查询指定客服工作日程-该接口用于获取客服信息',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ agent_id: z.string().describe('客服 id') }),
  },
};
export const helpdeskV1AgentSchedulesPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.agentSchedules.patch',
  sdkName: 'helpdesk.v1.agentSchedules.patch',
  path: '/open-apis/helpdesk/v1/agents/:agent_id/schedules',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-客服-客服工作日程-更新客服工作日程-该接口用于更新客服的日程',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      agent_schedule: z
        .object({
          schedule: z
            .array(
              z.object({
                start_time: z.string().describe('开始时间, format 00:00 - 23:59').optional(),
                end_time: z.string().describe('结束时间, format 00:00 - 23:59').optional(),
                weekday: z
                  .number()
                  .describe(
                    '星期几, 1 - Monday, 2 - Tuesday, 3 - Wednesday, 4 - Thursday, 5 - Friday, 6 - Saturday, 7 - Sunday, 9 - Everday, 10 - Weekday, 11 - Weekend',
                  )
                  .optional(),
              }),
            )
            .describe('工作日程列表')
            .optional(),
          agent_skill_ids: z.array(z.string()).describe('客服技能 ids').optional(),
        })
        .describe('工作日程列表')
        .optional(),
    }),
    path: z.object({ agent_id: z.string().describe('客服 id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1BotMessageCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.botMessage.create',
  sdkName: 'helpdesk.v1.botMessage.create',
  path: '/open-apis/helpdesk/v1/message',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-服务台-工单-工单消息-服务台机器人向工单绑定的群内发送消息-通过服务台机器人给指定用户的服务台专属群或私聊发送消息，支持文本、富文本、卡片、图片',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      msg_type: z
        .enum(['text', 'post', 'image', 'interactive'])
        .describe('消息类型 Options:text(普通文本),post(富文本),image(图片),interactive(卡片消息)'),
      content: z
        .string()
        .describe(
          '消息内容，json格式结构序列化成string。格式说明参考: ',
        ),
      receiver_id: z.string().describe('接收消息用户id'),
      receive_type: z
        .enum(['chat', 'user'])
        .describe(
          '接收消息方式，chat(服务台专属服务群)或user(服务台机器人私聊)。若选择专属服务群，用户有正在处理的工单将会发送失败。默认以chat方式发送。 Options:chat(通过服务台专属群发送),user(通过服务台机器人私聊发送)',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const helpdeskV1CategoryCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.category.create',
  sdkName: 'helpdesk.v1.category.create',
  path: '/open-apis/helpdesk/v1/categories',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-知识库-知识库分类-创建知识库分类-该接口用于创建知识库分类',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      name: z.string().describe('名称'),
      parent_id: z.string().describe('父知识库分类ID'),
      language: z.string().describe('语言').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1CategoryDelete = {
  project: 'helpdesk',
  name: 'helpdesk.v1.category.delete',
  sdkName: 'helpdesk.v1.category.delete',
  path: '/open-apis/helpdesk/v1/categories/:id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-服务台-知识库-知识库分类-删除知识库分类详情-该接口用于删除知识库分类详情',
  accessTokens: ['user'],
  schema: {
    path: z.object({ id: z.string().describe('知识库分类ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1CategoryGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.category.get',
  sdkName: 'helpdesk.v1.category.get',
  path: '/open-apis/helpdesk/v1/categories/:id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-知识库-知识库分类-获取知识库分类-该接口用于获取知识库分类',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ id: z.string().describe('知识库分类ID') }),
  },
};
export const helpdeskV1CategoryList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.category.list',
  sdkName: 'helpdesk.v1.category.list',
  path: '/open-apis/helpdesk/v1/categories',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-知识库-知识库分类-获取全部知识库分类-list all categories',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      lang: z.string().describe('知识库分类语言').optional(),
      order_by: z.number().describe('排序键。1: 根据知识库分类更新时间排序').optional(),
      asc: z.boolean().describe('顺序。true: 正序；false：反序').optional(),
    }),
  },
};
export const helpdeskV1CategoryPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.category.patch',
  sdkName: 'helpdesk.v1.category.patch',
  path: '/open-apis/helpdesk/v1/categories/:id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-知识库-知识库分类-更新知识库分类详情-该接口用于更新知识库分类详情',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      name: z.string().describe('名称').optional(),
      parent_id: z.string().describe('父知识库分类ID').optional(),
    }),
    path: z.object({ id: z.string().describe('category id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1EventSubscribe = {
  project: 'helpdesk',
  name: 'helpdesk.v1.event.subscribe',
  sdkName: 'helpdesk.v1.event.subscribe',
  path: '/open-apis/helpdesk/v1/events/subscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-事件订阅-订阅服务台事件-本接口用于订阅服务台事件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      events: z
        .array(z.object({ type: z.string().describe('事件类型'), subtype: z.string().describe('事件子类型') }))
        .describe('可订阅的事件列表'),
    }),
  },
};
export const helpdeskV1EventUnsubscribe = {
  project: 'helpdesk',
  name: 'helpdesk.v1.event.unsubscribe',
  sdkName: 'helpdesk.v1.event.unsubscribe',
  path: '/open-apis/helpdesk/v1/events/unsubscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-事件订阅-取消订阅服务台事件-本接口用于取消订阅服务台事件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      events: z
        .array(z.object({ type: z.string().describe('事件类型'), subtype: z.string().describe('事件子类型') }))
        .describe('event list to unsubscribe'),
    }),
  },
};
export const helpdeskV1FaqCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.create',
  sdkName: 'helpdesk.v1.faq.create',
  path: '/open-apis/helpdesk/v1/faqs',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-创建知识库-该接口用于创建知识库',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      faq: z
        .object({
          category_id: z.string().describe('知识库分类ID').optional(),
          question: z.string().describe('问题'),
          answer: z.string().describe('答案').optional(),
          answer_richtext: z
            .string()
            .describe(
              '富文本答案和答案必须有一个必填。Json Array格式，富文本结构请见。**注意**：以下示例值未转义，使用时请注意转义',
            )
            .optional(),
          tags: z.array(z.string()).describe('相似问题').optional(),
        })
        .describe('知识库详情')
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1FaqDelete = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.delete',
  sdkName: 'helpdesk.v1.faq.delete',
  path: '/open-apis/helpdesk/v1/faqs/:id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-删除知识库-该接口用于删除知识库',
  accessTokens: ['user'],
  schema: {
    path: z.object({ id: z.string().describe('id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1FaqGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.get',
  sdkName: 'helpdesk.v1.faq.get',
  path: '/open-apis/helpdesk/v1/faqs/:id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-获取指定知识库详情-该接口用于获取服务台知识库详情',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ id: z.string().describe('知识库ID').optional() }),
  },
};
export const helpdeskV1FaqList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.list',
  sdkName: 'helpdesk.v1.faq.list',
  path: '/open-apis/helpdesk/v1/faqs',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-获取全部知识库详情-该接口用于获取服务台知识库详情',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      category_id: z.string().describe('知识库分类ID').optional(),
      status: z.string().describe('搜索条件: 知识库状态 1:在线 0:删除，可恢复 2：删除，不可恢复').optional(),
      search: z.string().describe('搜索条件: 关键词，匹配问题标题，问题关键字，用户姓名').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().optional(),
    }),
  },
};
export const helpdeskV1FaqPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.patch',
  sdkName: 'helpdesk.v1.faq.patch',
  path: '/open-apis/helpdesk/v1/faqs/:id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-修改知识库-该接口用于修改知识库',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      faq: z
        .object({
          category_id: z.string().describe('知识库分类ID').optional(),
          question: z.string().describe('问题'),
          answer: z.string().describe('答案').optional(),
          answer_richtext: z
            .array(
              z.object({
                content: z.string().describe('内容').optional(),
                type: z.string().describe('内容类型。可选值：text、hyperlink、img、line break').optional(),
              }),
            )
            .describe(
              '富文本答案和答案必须有一个必填。Json Array格式，富文本结构请见',
            )
            .optional(),
          tags: z.array(z.string()).describe('相似问题').optional(),
        })
        .describe('修改的知识库内容')
        .optional(),
    }),
    path: z.object({ id: z.string().describe('知识库ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1FaqSearch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.faq.search',
  sdkName: 'helpdesk.v1.faq.search',
  path: '/open-apis/helpdesk/v1/faqs/search',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-知识库-知识库管理-搜索知识库-该接口用于搜索服务台知识库',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      query: z
        .string()
        .describe(
          '搜索query，query内容如果不是英文，包含中文空格等有两种编码策略：1. url编码 2. base64编码，同时加上base64=true参数',
        ),
      base64: z.string().describe('是否转换为base64,输入true表示是，不填写表示否').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().optional(),
    }),
  },
};
export const helpdeskV1NotificationCancelApprove = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.cancelApprove',
  sdkName: 'helpdesk.v1.notification.cancelApprove',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id/cancel_approve',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-推送中心-取消审核-提交审核后，如果需要取消审核，则调用此接口',
  accessTokens: ['user'],
  schema: {
    path: z.object({ notification_id: z.string().describe('唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationCancelSend = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.cancelSend',
  sdkName: 'helpdesk.v1.notification.cancelSend',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id/cancel_send',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-服务台-推送中心-取消推送-取消推送接口，审核通过后待调度可以调用，发送过程中可以调用（会撤回已发送的消息），发送完成后可以需要推送（会撤回所有已发送的消息）',
  accessTokens: ['user'],
  schema: {
    data: z.object({ is_recall: z.boolean().describe('是否召回已发送的消息,新人入职消息同样适用') }),
    path: z.object({ notification_id: z.string().describe('唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.create',
  sdkName: 'helpdesk.v1.notification.create',
  path: '/open-apis/helpdesk/v1/notifications',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-推送中心-创建推送-调用接口创建推送，创建成功后为草稿状态',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      id: z.string().describe('非必填，创建成功后返回').optional(),
      job_name: z.string().describe('必填，任务名称').optional(),
      status: z.number().describe('非必填，创建成功后返回').optional(),
      create_user: z
        .object({
          user_id: z.string().describe('非必填，用户id').optional(),
          avatar_url: z.string().describe('非必填，头像地址').optional(),
          name: z.string().describe('非必填，用户名称').optional(),
        })
        .describe('非必填，创建人')
        .optional(),
      created_at: z.string().describe('非必填，创建时间（毫秒时间戳）').optional(),
      update_user: z
        .object({
          user_id: z.string().describe('非必填，用户id').optional(),
          avatar_url: z.string().describe('非必填，头像地址').optional(),
          name: z.string().describe('非必填，用户名称').optional(),
        })
        .describe('非必填，更新用户')
        .optional(),
      updated_at: z.string().describe('非必填，更新时间（毫秒时间戳）').optional(),
      target_user_count: z.number().describe('非必填，目标推送用户总数').optional(),
      sent_user_count: z.number().describe('非必填，已推送用户总数').optional(),
      read_user_count: z.number().describe('非必填，已读用户总数').optional(),
      send_at: z.string().describe('非必填，推送任务触发时间（毫秒时间戳）').optional(),
      push_content: z
        .string()
        .describe('必填，推送内容，详见：https://open.feishu.cn/tool/cardbuilder?from=howtoguide')
        .optional(),
      push_type: z
        .number()
        .describe(
          '必填，0（定时推送：push_scope不能等于3） 1（新人入职推送：push_scope必须等于1或者3；new_staff_scope_type不能为空）',
        )
        .optional(),
      push_scope_type: z
        .number()
        .describe(
          '必填，推送范围（服务台私信） 0：组织内全部成员（user_list和department_list必须为空） 1：不推送任何成员（user_list和department_list必须为空，chat_list不可为空） 2：推送到部分成员（user_list或department_list不能为空） 3：入职新人 以上四种状态，chat_list都相对独立，只有在推送范围为1时，必须需要设置chat_list',
        )
        .optional(),
      new_staff_scope_type: z
        .number()
        .describe(
          '非必填，新人入职范围类型（push_type为1时生效） 0：组织内所有新人 1：组织内特定的部门（new_staff_scope_department_list 字段不能为空）',
        )
        .optional(),
      new_staff_scope_department_list: z
        .array(
          z.object({
            department_id: z.string().describe('部门ID').optional(),
            name: z.string().describe('非必填，部门名称').optional(),
          }),
        )
        .describe('非必填，新人入职生效部门列表')
        .optional(),
      user_list: z
        .array(
          z.object({
            user_id: z.string().describe('非必填，用户id').optional(),
            avatar_url: z.string().describe('非必填，头像地址').optional(),
            name: z.string().describe('非必填，用户名称').optional(),
          }),
        )
        .describe('非必填，push推送到成员列表')
        .optional(),
      department_list: z
        .array(
          z.object({
            department_id: z.string().describe('部门ID').optional(),
            name: z.string().describe('非必填，部门名称').optional(),
          }),
        )
        .describe('非必填，push推送到的部门信息列表')
        .optional(),
      chat_list: z
        .array(
          z.object({
            chat_id: z.string().describe('非必填，会话ID').optional(),
            name: z.string().describe('非必填，会话名称').optional(),
          }),
        )
        .describe('非必填，push推送到的会话列表(群)')
        .optional(),
      ext: z.string().describe('非必填，预留扩展字段').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationExecuteSend = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.executeSend',
  sdkName: 'helpdesk.v1.notification.executeSend',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id/execute_send',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-推送中心-执行推送-审核通过后调用此接口设置推送时间，等待调度系统调度，发送消息',
  accessTokens: ['user'],
  schema: {
    data: z.object({ send_at: z.string().describe('发送时间戳(毫秒)') }),
    path: z.object({ notification_id: z.string().describe('创建接口返回的唯一id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.get',
  sdkName: 'helpdesk.v1.notification.get',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-推送中心-查询推送-查询推送详情',
  accessTokens: ['user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ notification_id: z.string().describe('唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.patch',
  sdkName: 'helpdesk.v1.notification.patch',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-推送中心-更新推送-更新推送信息，只有在草稿状态下才可以调用此接口进行更新',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      id: z.string().describe('非必填，创建成功后返回').optional(),
      job_name: z.string().describe('必填，任务名称').optional(),
      status: z.number().describe('非必填，创建成功后返回').optional(),
      create_user: z
        .object({
          user_id: z.string().describe('非必填，用户id').optional(),
          avatar_url: z.string().describe('非必填，头像地址').optional(),
          name: z.string().describe('非必填，用户名称').optional(),
        })
        .describe('非必填，创建人')
        .optional(),
      created_at: z.string().describe('非必填，创建时间（毫秒时间戳）').optional(),
      update_user: z
        .object({
          user_id: z.string().describe('非必填，用户id').optional(),
          avatar_url: z.string().describe('非必填，头像地址').optional(),
          name: z.string().describe('非必填，用户名称').optional(),
        })
        .describe('非必填，更新用户')
        .optional(),
      updated_at: z.string().describe('非必填，更新时间（毫秒时间戳）').optional(),
      target_user_count: z.number().describe('非必填，目标推送用户总数').optional(),
      sent_user_count: z.number().describe('非必填，已推送用户总数').optional(),
      read_user_count: z.number().describe('非必填，已读用户总数').optional(),
      send_at: z.string().describe('非必填，推送任务触发时间（毫秒时间戳）').optional(),
      push_content: z
        .string()
        .describe('必填，推送内容，详见：https://open.feishu.cn/tool/cardbuilder?from=howtoguide')
        .optional(),
      push_type: z
        .number()
        .describe(
          '必填，0（定时推送：push_scope不能等于3） 1（新人入职推送：push_scope必须等于1或者3；new_staff_scope_type不能为空）',
        )
        .optional(),
      push_scope_type: z
        .number()
        .describe(
          '必填，推送范围（服务台私信） 0：组织内全部成员（user_list和department_list必须为空） 1：不推送任何成员（user_list和department_list必须为空，chat_list不可为空） 2：推送到部分成员（user_list或department_list不能为空） 3：入职新人 以上四种状态，chat_list都相对独立，只有在推送范围为1时，必须需要设置chat_list',
        )
        .optional(),
      new_staff_scope_type: z
        .number()
        .describe(
          '非必填，新人入职范围类型（push_type为1时生效） 0：组织内所有新人 1：组织内特定的部门（new_staff_scope_department_list 字段不能为空）',
        )
        .optional(),
      new_staff_scope_department_list: z
        .array(
          z.object({
            department_id: z.string().describe('部门ID').optional(),
            name: z.string().describe('非必填，部门名称').optional(),
          }),
        )
        .describe('非必填，新人入职生效部门列表')
        .optional(),
      user_list: z
        .array(
          z.object({
            user_id: z.string().describe('非必填，用户id').optional(),
            avatar_url: z.string().describe('非必填，头像地址').optional(),
            name: z.string().describe('非必填，用户名称').optional(),
          }),
        )
        .describe('非必填，push推送到成员列表')
        .optional(),
      department_list: z
        .array(
          z.object({
            department_id: z.string().describe('部门ID').optional(),
            name: z.string().describe('非必填，部门名称').optional(),
          }),
        )
        .describe('非必填，push推送到的部门信息列表')
        .optional(),
      chat_list: z
        .array(
          z.object({
            chat_id: z.string().describe('非必填，会话ID').optional(),
            name: z.string().describe('非必填，会话名称').optional(),
          }),
        )
        .describe('非必填，push推送到的会话列表(群)')
        .optional(),
      ext: z.string().describe('非必填，预留扩展字段').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ notification_id: z.string().describe('push任务唯一id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationPreview = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.preview',
  sdkName: 'helpdesk.v1.notification.preview',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id/preview',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-推送中心-预览推送-在正式执行推送之前是可以调用此接口预览设置的推送内容',
  accessTokens: ['user'],
  schema: {
    path: z.object({ notification_id: z.string().describe('创建推送接口成功后返回的唯一id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1NotificationSubmitApprove = {
  project: 'helpdesk',
  name: 'helpdesk.v1.notification.submitApprove',
  sdkName: 'helpdesk.v1.notification.submitApprove',
  path: '/open-apis/helpdesk/v1/notifications/:notification_id/submit_approve',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-服务台-推送中心-提交审核-正常情况下调用创建推送接口后，就可以调用提交审核接口，如果创建人是服务台owner则会自动审核通过，否则会通知服务台owner审核此推送信息',
  accessTokens: ['user'],
  schema: {
    data: z.object({ reason: z.string().describe('提交审批理由') }),
    path: z.object({ notification_id: z.string().describe('创建接口返回的唯一id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1TicketCustomizedFieldCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketCustomizedField.create',
  sdkName: 'helpdesk.v1.ticketCustomizedField.create',
  path: '/open-apis/helpdesk/v1/ticket_customized_fields',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-工单-工单自定义字段-创建工单自定义字段-create ticket customized field',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      helpdesk_id: z.string().describe('help desk id').optional(),
      key_name: z.string().describe('key name'),
      display_name: z.string().describe('display name'),
      position: z.string().describe('the position of ticket customized field in the page'),
      field_type: z.string().describe('type of the field'),
      description: z.string().describe('description of the field'),
      visible: z.boolean().describe('if the field is visible'),
      editable: z.boolean().describe('if the field is editable').optional(),
      required: z.boolean().describe('if the field is required'),
      dropdown_allow_multiple: z.boolean().describe('if the dropdown field supports multi-select').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1TicketCustomizedFieldDelete = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketCustomizedField.delete',
  sdkName: 'helpdesk.v1.ticketCustomizedField.delete',
  path: '/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-服务台-工单-工单自定义字段-删除工单自定义字段-该接口用于删除工单自定义字段',
  accessTokens: ['user'],
  schema: {
    path: z.object({ ticket_customized_field_id: z.string().describe('工单自定义字段ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1TicketCustomizedFieldGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketCustomizedField.get',
  sdkName: 'helpdesk.v1.ticketCustomizedField.get',
  path: '/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单自定义字段-获取指定工单自定义字段-get ticket customized field',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ ticket_customized_field_id: z.string().describe('工单自定义字段ID') }),
  },
};
export const helpdeskV1TicketCustomizedFieldList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketCustomizedField.list',
  sdkName: 'helpdesk.v1.ticketCustomizedField.list',
  path: '/open-apis/helpdesk/v1/ticket_customized_fields',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单自定义字段-获取全部工单自定义字段-list the ticket customized fields',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ visible: z.boolean().describe('是否可见').optional() }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const helpdeskV1TicketCustomizedFieldPatch = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketCustomizedField.patch',
  sdkName: 'helpdesk.v1.ticketCustomizedField.patch',
  path: '/open-apis/helpdesk/v1/ticket_customized_fields/:ticket_customized_field_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-服务台-工单-工单自定义字段-更新工单自定义字段-update the ticket customized field',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      display_name: z.string().describe('display name').optional(),
      position: z.string().describe('the position of ticket customized field in the page').optional(),
      description: z.string().describe('description of the field').optional(),
      visible: z.boolean().describe('if the field is visible').optional(),
      required: z.boolean().describe('if the field is required').optional(),
    }),
    path: z.object({ ticket_customized_field_id: z.string().describe('工单自定义字段ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1TicketAnswerUserQuery = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.answerUserQuery',
  sdkName: 'helpdesk.v1.ticket.answerUserQuery',
  path: '/open-apis/helpdesk/v1/tickets/:ticket_id/answer_user_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-服务台-工单-工单管理-回复用户在工单里的提问-该接口用于回复用户提问结果至工单，需要工单仍处于进行中且未接入人工状态。仅支持自建应用',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      event_id: z.string().describe('事件ID,可从订阅事件中提取'),
      faqs: z
        .array(
          z.object({
            id: z.string().describe('faq服务台内唯一标识').optional(),
            score: z.number().describe('faq匹配得分').optional(),
          }),
        )
        .describe('faq结果列表')
        .optional(),
    }),
    path: z.object({ ticket_id: z.string().describe('工单ID') }),
  },
};
export const helpdeskV1TicketCustomizedFields = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.customizedFields',
  sdkName: 'helpdesk.v1.ticket.customizedFields',
  path: '/open-apis/helpdesk/v1/customized_fields',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单管理-获取服务台自定义字段-该接口用于获取服务台自定义字段详情',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ visible_only: z.boolean().describe('visible only').optional() }),
  },
};
export const helpdeskV1TicketGet = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.get',
  sdkName: 'helpdesk.v1.ticket.get',
  path: '/open-apis/helpdesk/v1/tickets/:ticket_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单管理-查询指定工单详情-该接口用于获取单个服务台工单详情。仅支持自建应用',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      ticket_id: z
        .string()
        .describe('工单 ID。可通过获取'),
    }),
  },
};
export const helpdeskV1TicketList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.list',
  sdkName: 'helpdesk.v1.ticket.list',
  path: '/open-apis/helpdesk/v1/tickets',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单管理-查询全部工单详情-该接口用于获取全部工单详情。仅支持自建应用',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      ticket_id: z.string().describe('搜索条件：工单ID').optional(),
      agent_id: z.string().describe('搜索条件: 客服id').optional(),
      closed_by_id: z.string().describe('搜索条件: 关单客服id').optional(),
      type: z.number().describe('搜索条件: 工单类型 1:bot 2:人工').optional(),
      channel: z.number().describe('搜索条件: 工单渠道').optional(),
      solved: z.number().describe('搜索条件: 工单是否解决 1:没解决 2:已解决').optional(),
      score: z.number().describe('搜索条件: 工单评分').optional(),
      status_list: z.array(z.number()).describe('搜索条件: 工单状态列表').optional(),
      guest_name: z.string().describe('搜索条件: 用户名称').optional(),
      guest_id: z.string().describe('搜索条件: 用户id').optional(),
      tags: z.array(z.string()).describe('搜索条件: 用户标签列表').optional(),
      page: z.number().describe('页数, 从1开始, 默认为1').optional(),
      page_size: z
        .number()
        .describe(
          '当前页大小，最大为200， 默认为20。分页查询最多累计返回一万条数据，超过一万条请更改查询条件，推荐通过时间查询',
        )
        .optional(),
      create_time_start: z
        .number()
        .describe('搜索条件: 工单创建起始时间 ms (也需要填上create_time_end)，相当于>=create_time_start')
        .optional(),
      create_time_end: z
        .number()
        .describe('搜索条件: 工单创建结束时间 ms (也需要填上create_time_start)，相当于<=create_time_end')
        .optional(),
      update_time_start: z.number().describe('搜索条件: 工单修改起始时间 ms (也需要填上update_time_end)').optional(),
      update_time_end: z.number().describe('搜索条件: 工单修改结束时间 ms(也需要填上update_time_start)').optional(),
    }),
  },
};
export const helpdeskV1TicketMessageCreate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketMessage.create',
  sdkName: 'helpdesk.v1.ticketMessage.create',
  path: '/open-apis/helpdesk/v1/tickets/:ticket_id/messages',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-工单-工单消息-发送工单消息-该接口用于发送工单消息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      msg_type: z.string().describe('消息类型；text：纯文本；post：富文本'),
      content: z
        .string()
        .describe(
          '- 纯文本，参考中的content；- 富文本，参考中的content',
        ),
    }),
    path: z.object({ ticket_id: z.string().describe('工单ID').optional() }),
  },
};
export const helpdeskV1TicketMessageList = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticketMessage.list',
  sdkName: 'helpdesk.v1.ticketMessage.list',
  path: '/open-apis/helpdesk/v1/tickets/:ticket_id/messages',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-服务台-工单-工单消息-获取工单消息详情-该接口用于获取服务台工单消息详情',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      time_start: z.number().describe('起始时间').optional(),
      time_end: z.number().describe('结束时间').optional(),
      page: z.number().describe('页数ID').optional(),
      page_size: z.number().describe('消息数量，最大200，默认20').optional(),
    }),
    path: z.object({ ticket_id: z.string().describe('工单ID').optional() }),
  },
};
export const helpdeskV1TicketStartService = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.startService',
  sdkName: 'helpdesk.v1.ticket.startService',
  path: '/open-apis/helpdesk/v1/start_service',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-服务台-工单-工单管理-创建服务台对话-该接口用于创建服务台对话',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      human_service: z.boolean().describe('是否直接进入人工(若appointed_agents填写了，该值为必填)').optional(),
      appointed_agents: z
        .array(z.string())
        .describe(
          '客服 open ids (获取方式参考)，human_service需要为true',
        )
        .optional(),
      open_id: z
        .string()
        .describe(
          '用户 open id,(获取方式参考)',
        ),
      customized_info: z
        .string()
        .describe(
          '工单来源自定义信息，长度限制1024字符，如设置，会返回此信息',
        )
        .optional(),
    }),
  },
};
export const helpdeskV1TicketUpdate = {
  project: 'helpdesk',
  name: 'helpdesk.v1.ticket.update',
  sdkName: 'helpdesk.v1.ticket.update',
  path: '/open-apis/helpdesk/v1/tickets/:ticket_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-服务台-工单-工单管理-更新工单详情-该接口用于更新服务台工单详情。只会更新数据，不会触发相关操作。如修改工单状态到关单，不会关闭聊天页面。仅支持自建应用。要更新的工单字段必须至少输入一项',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      status: z
        .number()
        .describe(
          '工单新status，status对应具体的含义如下：1: 待响应, 2: 处理中, 3: 排队中, 4: 待定, 5: 待用户响应, 50: 机器人关闭工单, 51: 人工关闭工单',
        )
        .optional(),
      tag_names: z.array(z.string()).describe('新标签名').optional(),
      comment: z.string().describe('新评论').optional(),
      customized_fields: z
        .array(
          z.object({
            id: z.string().describe('自定义字段ID').optional(),
            value: z.string().describe('自定义字段值').optional(),
            key_name: z.string().describe('键名').optional(),
          }),
        )
        .describe('自定义字段')
        .optional(),
      ticket_type: z.number().describe('ticket stage').optional(),
      solved: z.number().describe('工单是否解决，1: 未解决, 2: 已解决').optional(),
      channel: z.number().describe('工单来源渠道ID').optional(),
    }),
    path: z.object({ ticket_id: z.string().describe('工单ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const helpdeskV1Tools = [
  helpdeskV1AgentScheduleCreate,
  helpdeskV1AgentScheduleList,
  helpdeskV1AgentSkillRuleList,
  helpdeskV1AgentSkillCreate,
  helpdeskV1AgentSkillDelete,
  helpdeskV1AgentSkillGet,
  helpdeskV1AgentSkillList,
  helpdeskV1AgentSkillPatch,
  helpdeskV1AgentAgentEmail,
  helpdeskV1AgentPatch,
  helpdeskV1AgentSchedulesDelete,
  helpdeskV1AgentSchedulesGet,
  helpdeskV1AgentSchedulesPatch,
  helpdeskV1BotMessageCreate,
  helpdeskV1CategoryCreate,
  helpdeskV1CategoryDelete,
  helpdeskV1CategoryGet,
  helpdeskV1CategoryList,
  helpdeskV1CategoryPatch,
  helpdeskV1EventSubscribe,
  helpdeskV1EventUnsubscribe,
  helpdeskV1FaqCreate,
  helpdeskV1FaqDelete,
  helpdeskV1FaqGet,
  helpdeskV1FaqList,
  helpdeskV1FaqPatch,
  helpdeskV1FaqSearch,
  helpdeskV1NotificationCancelApprove,
  helpdeskV1NotificationCancelSend,
  helpdeskV1NotificationCreate,
  helpdeskV1NotificationExecuteSend,
  helpdeskV1NotificationGet,
  helpdeskV1NotificationPatch,
  helpdeskV1NotificationPreview,
  helpdeskV1NotificationSubmitApprove,
  helpdeskV1TicketCustomizedFieldCreate,
  helpdeskV1TicketCustomizedFieldDelete,
  helpdeskV1TicketCustomizedFieldGet,
  helpdeskV1TicketCustomizedFieldList,
  helpdeskV1TicketCustomizedFieldPatch,
  helpdeskV1TicketAnswerUserQuery,
  helpdeskV1TicketCustomizedFields,
  helpdeskV1TicketGet,
  helpdeskV1TicketList,
  helpdeskV1TicketMessageCreate,
  helpdeskV1TicketMessageList,
  helpdeskV1TicketStartService,
  helpdeskV1TicketUpdate,
];
