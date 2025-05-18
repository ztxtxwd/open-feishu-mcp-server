import { z } from 'zod';
export type taskV1ToolName =
  | 'task.v1.task.batchDeleteCollaborator'
  | 'task.v1.task.batchDeleteFollower'
  | 'task.v1.taskCollaborator.create'
  | 'task.v1.taskCollaborator.delete'
  | 'task.v1.taskCollaborator.list'
  | 'task.v1.taskComment.create'
  | 'task.v1.taskComment.delete'
  | 'task.v1.taskComment.get'
  | 'task.v1.taskComment.list'
  | 'task.v1.taskComment.update'
  | 'task.v1.task.complete'
  | 'task.v1.task.create'
  | 'task.v1.task.delete'
  | 'task.v1.taskFollower.create'
  | 'task.v1.taskFollower.delete'
  | 'task.v1.taskFollower.list'
  | 'task.v1.task.get'
  | 'task.v1.task.list'
  | 'task.v1.task.patch'
  | 'task.v1.taskReminder.create'
  | 'task.v1.taskReminder.delete'
  | 'task.v1.taskReminder.list'
  | 'task.v1.task.uncomplete';
export const taskV1TaskBatchDeleteCollaborator = {
  project: 'task',
  name: 'task.v1.task.batchDeleteCollaborator',
  sdkName: 'task.v1.task.batchDeleteCollaborator',
  path: '/open-apis/task/v1/tasks/:task_id/batch_delete_collaborator',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-执行者-批量删除执行者-该接口用于批量删除执行者',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id_list: z
        .array(z.string())
        .describe(
          '执行者的用户ID列表。传入的值为 user_id 或 open_id，由user_id_type 决定。user_id和open_id的获取可见文档',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskBatchDeleteFollower = {
  project: 'task',
  name: 'task.v1.task.batchDeleteFollower',
  sdkName: 'task.v1.task.batchDeleteFollower',
  path: '/open-apis/task/v1/tasks/:task_id/batch_delete_follower',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-关注人-批量删除关注人-该接口用于批量删除关注人',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ id_list: z.array(z.string()).describe('要删除的关注人ID列表').optional() }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCollaboratorCreate = {
  project: 'task',
  name: 'task.v1.taskCollaborator.create',
  sdkName: 'task.v1.taskCollaborator.create',
  path: '/open-apis/task/v1/tasks/:task_id/collaborators',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-执行者-新增执行者-该接口用于新增任务执行者，一次性可以添加多个执行者。只有任务的创建者和执行者才能添加执行者，关注人无权限添加',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z
        .string()
        .describe(
          '任务执行者的 ID。传入的值为 user_id 或 open_id，由user_id_type 决定。user_id和open_id的获取可见文档。<md-alert>已经废弃，为了向前兼容早期只支持单次添加一个人的情况而保留，但不再推荐使用，建议使用id_list字段</md-alert>',
        )
        .optional(),
      id_list: z
        .array(z.string())
        .describe(
          '执行者的用户ID列表。传入的值为 user_id 或 open_id，由user_id_type 决定。user_id和open_id的获取可见文档',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      task_id: z
        .string()
        .describe(
          '任务 ID，可通过时响应体中的id字段获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCollaboratorDelete = {
  project: 'task',
  name: 'task.v1.taskCollaborator.delete',
  sdkName: 'task.v1.taskCollaborator.delete',
  path: '/open-apis/task/v1/tasks/:task_id/collaborators/:collaborator_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-执行者-删除指定执行者-该接口用于删除任务执行者',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      task_id: z.string().describe('任务 ID'),
      collaborator_id: z.string().describe('任务执行者 ID（Open ID或User ID，由user_id_type指定）'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCollaboratorList = {
  project: 'task',
  name: 'task.v1.taskCollaborator.list',
  sdkName: 'task.v1.taskCollaborator.list',
  path: '/open-apis/task/v1/tasks/:task_id/collaborators',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-执行者-获取执行者列表-该接口用于查询任务执行者列表，支持分页，最大值为50',
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
    path: z.object({ task_id: z.string().describe('任务 ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCommentCreate = {
  project: 'task',
  name: 'task.v1.taskComment.create',
  sdkName: 'task.v1.taskComment.create',
  path: '/open-apis/task/v1/tasks/:task_id/comments',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-评论-创建评论-该接口用于创建和回复任务的评论。当parent_id字段为0时，为创建评论；当parent_id不为0时，为回复某条评论',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      content: z
        .string()
        .describe('评论内容。<md-alert>评论内容和富文本评论内容同时存在时只使用富文本评论内容。</md-alert>')
        .optional(),
      parent_id: z.string().describe('评论的父ID，创建评论时若不为空则为某条评论的回复，若为空则不是回复').optional(),
      create_milli_time: z.string().describe('评论创建的时间戳，单位为毫秒，用于展示，创建时不用填写').optional(),
      rich_content: z
        .string()
        .describe(
          '富文本评论内容。语法格式参见',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCommentDelete = {
  project: 'task',
  name: 'task.v1.taskComment.delete',
  sdkName: 'task.v1.taskComment.delete',
  path: '/open-apis/task/v1/tasks/:task_id/comments/:comment_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-评论-删除评论-该接口用于通过评论ID删除评论',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_id: z.string().describe('任务ID'), comment_id: z.string().describe('评论ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCommentGet = {
  project: 'task',
  name: 'task.v1.taskComment.get',
  sdkName: 'task.v1.taskComment.get',
  path: '/open-apis/task/v1/tasks/:task_id/comments/:comment_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-评论-获取评论详情-该接口用于通过评论ID获取评论详情',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务ID'), comment_id: z.string().describe('评论ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCommentList = {
  project: 'task',
  name: 'task.v1.taskComment.list',
  sdkName: 'task.v1.taskComment.list',
  path: '/open-apis/task/v1/tasks/:task_id/comments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-评论-获取评论列表-该接口用于查询任务评论列表，支持分页，最大值为100',
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
      list_direction: z
        .number()
        .describe(
          '评论排序标记，可按照评论时间从小到大查询，或者评论时间从大到小查询，不填默认按照从小到大 Options:0(Down 按照回复时间从小到大查询),1(Up 按照回复时间从大到小查询)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ task_id: z.string().describe('任务id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCommentUpdate = {
  project: 'task',
  name: 'task.v1.taskComment.update',
  sdkName: 'task.v1.taskComment.update',
  path: '/open-apis/task/v1/tasks/:task_id/comments/:comment_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-评论-更新评论-该接口用于更新评论内容',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      content: z.string().describe('新的评论内容').optional(),
      rich_content: z.string().describe('新的富文本评论内容（优先使用）').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务ID'), comment_id: z.string().describe('评论 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskComplete = {
  project: 'task',
  name: 'task.v1.task.complete',
  sdkName: 'task.v1.task.complete',
  path: '/open-apis/task/v1/tasks/:task_id/complete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-完成任务-该接口用于将任务状态修改为“已完成”。完成任务是指整个任务全部完成，而不支持执行者分别完成任务，执行成功后，任务对所有关联用户都变为完成状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      task_id: z
        .string()
        .describe(
          '任务 ID，可通过时响应体中的id字段获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskCreate = {
  project: 'task',
  name: 'task.v1.task.create',
  sdkName: 'task.v1.task.create',
  path: '/open-apis/task/v1/tasks',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-创建任务-该接口可以创建一个任务，支持填写任务的基本信息，包括任务的标题，描述及协作者等。在此基础上，创建任务时可以设置截止时间和重复规则，将任务设置为定期执行的重复任务。通过添加协作者，则可以让其他用户协同完成该任务。此外，接口也提供了一些支持自定义内容的字段，调用方可以实现定制化效果，如完成任务后跳转到指定结束界面',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z
        .string()
        .describe(
          '任务的标题，类型为文本字符串。如果要在任务标题中插入 URL 或者 @某个用户，请使用rich_summary字段。创建任务时，任务标题(summary字段)和任务富文本标题(rich_summary字段)不能同时为空，需要至少填充其中一个字段。<md-alert>任务标题和任务富文本标题同时存在时只使用富文本标题。</md-alert>',
        )
        .optional(),
      description: z
        .string()
        .describe(
          '任务的描述，类型为文本字符串。如果要在任务描述中插入 URL 或者 @某个用户，请使用rich_description字段。<md-alert>任务备注和任务富文本备注同时存在时只使用富文本备注。</md-alert>',
        )
        .optional(),
      extra: z
        .string()
        .describe(
          '附属信息。接入方可以传入base64 编码后的自定义的数据。用户如果需要对当前任务备注信息，但对外不显示，可使用该字段进行存储。该数据会在获取任务详情时，原样返回给用户',
        )
        .optional(),
      due: z
        .object({
          time: z.string().describe('表示截止时间的Unix时间戳（单位为秒）').optional(),
          timezone: z
            .string()
            .describe(
              '截止时间对应的时区。传入值需要符合IANA Time Zone Database标准，规范见',
            )
            .optional(),
          is_all_day: z
            .boolean()
            .describe(
              '标记任务是否为全天任务。包括如下取值：- true：表示是全天任务，全天任务的截止时间为当天 UTC 时间的 0 点。- false：表示不是全天任务',
            )
            .optional(),
        })
        .describe('任务的截止时间设置')
        .optional(),
      origin: z
        .object({
          platform_i18n_name: z
            .string()
            .describe(
              '任务来源的名称。用于在任务中心详情页展示。需要提供一个字典，支持多种语言名称映射。应用在使用不同语言时，导入来源也将展示对应的内容。详细参见：',
            ),
          href: z
            .object({
              url: z
                .string()
                .describe(
                  '具体链接地址。URL仅支持解析http、https。详细参见：',
                )
                .optional(),
              title: z.string().describe('链接对应的标题').optional(),
            })
            .describe('任务关联的来源平台详情页链接')
            .optional(),
        })
        .describe('任务关联的第三方平台来源信息'),
      can_edit: z
        .boolean()
        .describe(
          '此字段用于控制该任务在飞书任务中心是否可编辑，默认为false<md-alert>已经废弃，向前兼容故仍然保留，但不推荐使用</md-alert>',
        )
        .optional(),
      custom: z
        .string()
        .describe(
          '自定义完成配置。此字段用于设置完成任务时的页面跳转，或展示提示语。详细参见：',
        )
        .optional(),
      collaborator_ids: z
        .array(z.string())
        .describe(
          '创建任务时添加的执行者用户id列表。传入的值为 user_id 或 open_id ，由user_id_type 决定。user_id和open_id的获取可见文档：',
        )
        .optional(),
      follower_ids: z
        .array(z.string())
        .describe(
          '创建任务时添加的关注者用户id列表。传入的值为 user_id 或 open_id ，由user_id_type 决定。user_id和open_id的获取可见文档：',
        )
        .optional(),
      repeat_rule: z
        .string()
        .describe('重复任务的规则表达式。语法格式参见 4.3.10小节')
        .optional(),
      rich_summary: z
        .string()
        .describe(
          '富文本任务标题。语法格式参见。创建任务时，任务标题(summary字段)和任务富文本标题(rich_summary字段)不能同时为空，需要至少填充其中一个字段',
        )
        .optional(),
      rich_description: z
        .string()
        .describe(
          '富文本任务备注。语法格式参见',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskDelete = {
  project: 'task',
  name: 'task.v1.task.delete',
  sdkName: 'task.v1.task.delete',
  path: '/open-apis/task/v1/tasks/:task_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-删除任务-该接口用于删除任务',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskFollowerCreate = {
  project: 'task',
  name: 'task.v1.taskFollower.create',
  sdkName: 'task.v1.taskFollower.create',
  path: '/open-apis/task/v1/tasks/:task_id/followers',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-关注人-新增关注人-该接口用于新增任务关注人。可以一次性添加多位关注人。关注人ID要使用表示用户的ID',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z.string().describe('任务关注人 ID').optional(),
      id_list: z.array(z.string()).describe('要删除的关注人ID列表').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskFollowerDelete = {
  project: 'task',
  name: 'task.v1.taskFollower.delete',
  sdkName: 'task.v1.taskFollower.delete',
  path: '/open-apis/task/v1/tasks/:task_id/followers/:follower_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-关注人-删除指定关注人-该接口用于删除任务关注人',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      task_id: z.string().describe('任务 ID'),
      follower_id: z.string().describe('任务关注人 ID（Open ID或User ID，由user_id_type指定）'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskFollowerList = {
  project: 'task',
  name: 'task.v1.taskFollower.list',
  sdkName: 'task.v1.taskFollower.list',
  path: '/open-apis/task/v1/tasks/:task_id/followers',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-关注人-获取关注人列表',
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
      user_id_type: z.enum(['user_id', 'union_id', 'open_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskGet = {
  project: 'task',
  name: 'task.v1.task.get',
  sdkName: 'task.v1.task.get',
  path: '/open-apis/task/v1/tasks/:task_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-查询指定任务-该接口用于获取任务详情，包括任务标题、描述、时间、来源等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskList = {
  project: 'task',
  name: 'task.v1.task.list',
  sdkName: 'task.v1.task.list',
  path: '/open-apis/task/v1/tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-查询所有任务-以分页的方式获取任务列表。当使用user_access_token时，获取与该用户身份相关的所有任务。当使用tenant_access_token时，获取以该应用身份通过“创建任务“接口创建的所有任务（并非获取该应用所在租户下所有用户创建的任务）。本接口支持通过任务创建时间以及任务的完成状态对任务进行过滤',
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
      start_create_time: z
        .string()
        .describe('范围查询任务时，查询的起始时间。不填时默认起始时间为第一个任务的创建时间')
        .optional(),
      end_create_time: z
        .string()
        .describe('范围查询任务时，查询的结束时间。不填时默认结束时间为最后一个任务的创建时间')
        .optional(),
      task_completed: z
        .boolean()
        .describe(
          '可用于查询时过滤任务完成状态。true表示只返回已完成的任务，false表示只返回未完成的任务。不填时表示同时返回两种完成状态的任务',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskPatch = {
  project: 'task',
  name: 'task.v1.task.patch',
  sdkName: 'task.v1.task.patch',
  path: '/open-apis/task/v1/tasks/:task_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-更新任务-该接口用于修改任务的标题、描述、时间、来源等相关信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      task: z
        .object({
          summary: z
            .string()
            .describe(
              '任务的标题，类型为文本字符串。如果要在任务标题中插入 URL 或者 @某个用户，请使用rich_summary字段。创建任务时，任务标题(summary字段)和任务富文本标题(rich_summary字段)不能同时为空，需要至少填充其中一个字段。<md-alert>任务标题和任务富文本标题同时存在时只使用富文本标题。</md-alert>',
            )
            .optional(),
          description: z
            .string()
            .describe(
              '任务的描述，类型为文本字符串。如果要在任务描述中插入 URL 或者 @某个用户，请使用rich_description字段。<md-alert>任务备注和任务富文本备注同时存在时只使用富文本备注。</md-alert>',
            )
            .optional(),
          extra: z
            .string()
            .describe(
              '附属信息。接入方可以传入base64 编码后的自定义的数据。用户如果需要对当前任务备注信息，但对外不显示，可使用该字段进行存储。该数据会在获取任务详情时，原样返回给用户',
            )
            .optional(),
          due: z
            .object({
              time: z.string().describe('表示截止时间的Unix时间戳（单位为秒）').optional(),
              timezone: z
                .string()
                .describe(
                  '截止时间对应的时区。传入值需要符合IANA Time Zone Database标准，规范见',
                )
                .optional(),
              is_all_day: z
                .boolean()
                .describe(
                  '标记任务是否为全天任务。包括如下取值：- true：表示是全天任务，全天任务的截止时间为当天 UTC 时间的 0 点。- false：表示不是全天任务',
                )
                .optional(),
            })
            .describe('任务的截止时间设置')
            .optional(),
          origin: z
            .object({
              platform_i18n_name: z
                .string()
                .describe(
                  '任务来源的名称。用于在任务中心详情页展示。需要提供一个字典，支持多种语言名称映射。应用在使用不同语言时，导入来源也将展示对应的内容。详细参见：',
                ),
              href: z
                .object({
                  url: z
                    .string()
                    .describe(
                      '具体链接地址。URL仅支持解析http、https。详细参见：',
                    )
                    .optional(),
                  title: z.string().describe('链接对应的标题').optional(),
                })
                .describe('任务关联的来源平台详情页链接')
                .optional(),
            })
            .describe('任务关联的第三方平台来源信息')
            .optional(),
          can_edit: z
            .boolean()
            .describe(
              '此字段用于控制该任务在飞书任务中心是否可编辑，默认为false<md-alert>已经废弃，向前兼容故仍然保留，但不推荐使用</md-alert>',
            )
            .optional(),
          custom: z
            .string()
            .describe(
              '自定义完成配置。此字段用于设置完成任务时的页面跳转，或展示提示语。详细参见：',
            )
            .optional(),
          followers: z
            .array(
              z.object({
                id: z.string().describe('任务关注人 ID').optional(),
                id_list: z.array(z.string()).describe('要删除的关注人ID列表').optional(),
              }),
            )
            .describe('任务的关注者')
            .optional(),
          collaborators: z
            .array(
              z.object({
                id: z
                  .string()
                  .describe(
                    '任务执行者的 ID。传入的值为 user_id 或 open_id，由user_id_type 决定。user_id和open_id的获取可见文档。<md-alert>已经废弃，为了向前兼容早期只支持单次添加一个人的情况而保留，但不再推荐使用，建议使用id_list字段</md-alert>',
                  )
                  .optional(),
                id_list: z
                  .array(z.string())
                  .describe(
                    '执行者的用户ID列表。传入的值为 user_id 或 open_id，由user_id_type 决定。user_id和open_id的获取可见文档',
                  )
                  .optional(),
              }),
            )
            .describe('任务的执行者')
            .optional(),
          collaborator_ids: z
            .array(z.string())
            .describe(
              '创建任务时添加的执行者用户id列表。传入的值为 user_id 或 open_id ，由user_id_type 决定。user_id和open_id的获取可见文档：',
            )
            .optional(),
          follower_ids: z
            .array(z.string())
            .describe(
              '创建任务时添加的关注者用户id列表。传入的值为 user_id 或 open_id ，由user_id_type 决定。user_id和open_id的获取可见文档：',
            )
            .optional(),
          repeat_rule: z
            .string()
            .describe(
              '重复任务的规则表达式。语法格式参见 4.3.10小节',
            )
            .optional(),
          rich_summary: z
            .string()
            .describe(
              '富文本任务标题。语法格式参见。创建任务时，任务标题(summary字段)和任务富文本标题(rich_summary字段)不能同时为空，需要至少填充其中一个字段',
            )
            .optional(),
          rich_description: z
            .string()
            .describe(
              '富文本任务备注。语法格式参见',
            )
            .optional(),
        })
        .describe('被更新的任务实体基础信息'),
      update_fields: z
        .array(z.string())
        .describe(
          '指定需要更新的任务字段。可以更新的字段包括：<md-enum><md-enum-item key="summary" >任务标题（普通文本）</md-enum-item><md-enum-item key="rich_summary" >任务标题（富文本）</md-enum-item><md-enum-item key="description" >任务描述（普通文本）</md-enum-item><md-enum-item key="rich_description" >任务描述（富文本）</md-enum-item><md-enum-item key="due" >任务截止时间</md-enum-item><md-enum-item key="extra" >任务附属信息</md-enum-item><md-enum-item key="custom" >任务自定义完成规则</md-enum-item><md-enum-item key="follower_ids" >任务关注人ID列表</md-enum-item><md-enum-item key="collaborator_ids" >任务执行者ID列表</md-enum-item><md-enum-item key="repeat_rule" >任务重复规则</md-enum-item></md-enum>',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskReminderCreate = {
  project: 'task',
  name: 'task.v1.taskReminder.create',
  sdkName: 'task.v1.taskReminder.create',
  path: '/open-apis/task/v1/tasks/:task_id/reminders',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-任务-提醒-新增提醒时间-该接口用于创建任务的提醒时间。提醒时间在截止时间基础上做偏移，但是偏移后的结果不能早于当前时间',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      relative_fire_minute: z
        .number()
        .describe(
          '相对于截止时间的提醒时间（如提前 30 分钟，截止时间后 30 分钟，则为 -30） 任务没有截止时间则为全天任务(截止时间为0)',
        ),
    }),
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskReminderDelete = {
  project: 'task',
  name: 'task.v1.taskReminder.delete',
  sdkName: 'task.v1.taskReminder.delete',
  path: '/open-apis/task/v1/tasks/:task_id/reminders/:reminder_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-提醒-删除提醒时间-删除提醒时间，返回结果状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      task_id: z.string().describe('任务 ID'),
      reminder_id: z.string().describe('任务提醒时间设置的 ID（即 reminder.id）'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskReminderList = {
  project: 'task',
  name: 'task.v1.taskReminder.list',
  sdkName: 'task.v1.taskReminder.list',
  path: '/open-apis/task/v1/tasks/:task_id/reminders',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-提醒-查询提醒时间列表-返回提醒时间列表，支持分页，最大值为50',
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
    path: z.object({ task_id: z.string().describe('任务 ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1TaskUncomplete = {
  project: 'task',
  name: 'task.v1.task.uncomplete',
  sdkName: 'task.v1.task.uncomplete',
  path: '/open-apis/task/v1/tasks/:task_id/uncomplete',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-任务-任务管理-取消完成任务-该接口用于取消任务的已完成状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_id: z.string().describe('任务 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV1Tools = [
  taskV1TaskBatchDeleteCollaborator,
  taskV1TaskBatchDeleteFollower,
  taskV1TaskCollaboratorCreate,
  taskV1TaskCollaboratorDelete,
  taskV1TaskCollaboratorList,
  taskV1TaskCommentCreate,
  taskV1TaskCommentDelete,
  taskV1TaskCommentGet,
  taskV1TaskCommentList,
  taskV1TaskCommentUpdate,
  taskV1TaskComplete,
  taskV1TaskCreate,
  taskV1TaskDelete,
  taskV1TaskFollowerCreate,
  taskV1TaskFollowerDelete,
  taskV1TaskFollowerList,
  taskV1TaskGet,
  taskV1TaskList,
  taskV1TaskPatch,
  taskV1TaskReminderCreate,
  taskV1TaskReminderDelete,
  taskV1TaskReminderList,
  taskV1TaskUncomplete,
];
