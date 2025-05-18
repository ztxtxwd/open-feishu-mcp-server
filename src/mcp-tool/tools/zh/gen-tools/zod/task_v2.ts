import { z } from 'zod';
export type taskV2ToolName =
  | 'task.v2.attachment.delete'
  | 'task.v2.attachment.get'
  | 'task.v2.attachment.list'
  | 'task.v2.comment.create'
  | 'task.v2.comment.delete'
  | 'task.v2.comment.get'
  | 'task.v2.comment.list'
  | 'task.v2.comment.patch'
  | 'task.v2.customField.add'
  | 'task.v2.customField.create'
  | 'task.v2.customField.get'
  | 'task.v2.customField.list'
  | 'task.v2.customFieldOption.create'
  | 'task.v2.customFieldOption.patch'
  | 'task.v2.customField.patch'
  | 'task.v2.customField.remove'
  | 'task.v2.section.create'
  | 'task.v2.section.delete'
  | 'task.v2.section.get'
  | 'task.v2.section.list'
  | 'task.v2.section.patch'
  | 'task.v2.section.tasks'
  | 'task.v2.task.addDependencies'
  | 'task.v2.task.addMembers'
  | 'task.v2.task.addReminders'
  | 'task.v2.task.addTasklist'
  | 'task.v2.task.create'
  | 'task.v2.task.delete'
  | 'task.v2.task.get'
  | 'task.v2.task.list'
  | 'task.v2.task.patch'
  | 'task.v2.task.removeDependencies'
  | 'task.v2.task.removeMembers'
  | 'task.v2.task.removeReminders'
  | 'task.v2.task.removeTasklist'
  | 'task.v2.taskSubtask.create'
  | 'task.v2.taskSubtask.list'
  | 'task.v2.task.tasklists'
  | 'task.v2.tasklistActivitySubscription.create'
  | 'task.v2.tasklistActivitySubscription.delete'
  | 'task.v2.tasklistActivitySubscription.get'
  | 'task.v2.tasklistActivitySubscription.list'
  | 'task.v2.tasklistActivitySubscription.patch'
  | 'task.v2.tasklist.addMembers'
  | 'task.v2.tasklist.create'
  | 'task.v2.tasklist.delete'
  | 'task.v2.tasklist.get'
  | 'task.v2.tasklist.list'
  | 'task.v2.tasklist.patch'
  | 'task.v2.tasklist.removeMembers'
  | 'task.v2.tasklist.tasks';
export const taskV2AttachmentDelete = {
  project: 'task',
  name: 'task.v2.attachment.delete',
  sdkName: 'task.v2.attachment.delete',
  path: '/open-apis/task/v2/attachments/:attachment_guid',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-任务-附件-删除附件-提供一个附件GUID，删除该附件。删除后该附件不可再恢复',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      attachment_guid: z
        .string()
        .describe(
          '要删除附件的GUID。可以通过创建接口创建, 或者通过接口查询得到',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2AttachmentGet = {
  project: 'task',
  name: 'task.v2.attachment.get',
  sdkName: 'task.v2.attachment.get',
  path: '/open-apis/task/v2/attachments/:attachment_guid',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-附件-获取附件-提供一个附件GUID，返回附件的详细信息，包括GUID，名称，大小，上传时间，临时可下载链接等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({
      attachment_guid: z
        .string()
        .describe(
          '获取详情的附件GUID。可以通过创建接口创建, 或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2AttachmentList = {
  project: 'task',
  name: 'task.v2.attachment.list',
  sdkName: 'task.v2.attachment.list',
  path: '/open-apis/task/v2/attachments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-附件-列取附件-列取一个资源的所有附件。返回的附件列表支持分页，按照附件上传时间排序。每个附件会返回一个可供下载的临时url，有效期为3分钟，最多可以支持3次下载。如果超过使用限制，需要通过本接口获取新的临时url',
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
      resource_type: z.string().describe('附件归属的资源类型。目前只支持"task"').optional(),
      resource_id: z
        .string()
        .describe(
          '附件归属资源的id，配合resource_type使用。例如希望获取任务的附件，需要设置 resource_type为task， resource_id为任务GUID。任务GUID的获取方式可以参考',
        ),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CommentCreate = {
  project: 'task',
  name: 'task.v2.comment.create',
  sdkName: 'task.v2.comment.create',
  path: '/open-apis/task/v2/comments',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-评论-创建评论-为一个任务创建评论，或者回复该任务的某个评论。若要创建一个回复评论，需要在创建时设置`reply_to_comment_id`字段。被回复的评论和新建的评论必须属于同一个任务',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      content: z.string().describe('评论内容。不允许为空，最长3000个utf8字符'),
      reply_to_comment_id: z.string().describe('回复给评论的评论ID。如果不填写表示创建非回复评论').optional(),
      resource_type: z.string().describe('评论归属的资源类型，目前只支持任务“task”，默认为"task"').optional(),
      resource_id: z.string().describe('评论归属的资源ID。当归属资源类型为"task"时，这里应填写任务的GUID').optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CommentDelete = {
  project: 'task',
  name: 'task.v2.comment.delete',
  sdkName: 'task.v2.comment.delete',
  path: '/open-apis/task/v2/comments/:comment_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-任务-评论-删除评论-删除一条评论。评论被删除后，将无法进行任何操作，也无法恢复',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ comment_id: z.string().describe('要删除的评论id') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CommentGet = {
  project: 'task',
  name: 'task.v2.comment.get',
  sdkName: 'task.v2.comment.get',
  path: '/open-apis/task/v2/comments/:comment_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-评论-获取评论详情-给定一个评论的ID，返回评论的详情，包括内容，创建人，创建时间和更新时间等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ comment_id: z.string().describe('要获取评论详情的评论ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CommentList = {
  project: 'task',
  name: 'task.v2.comment.list',
  sdkName: 'task.v2.comment.list',
  path: '/open-apis/task/v2/comments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-评论-获取评论列表-给定一个资源，返回该资源的评论列表。支持分页。评论可以按照创建时间的正序（asc, 从最老到最新），或者逆序（desc，从最老到最新），返回数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，默认为50').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      resource_type: z.string().describe('要获取评论列表的资源类型，目前只支持"task"，默认为"task"').optional(),
      resource_id: z.string().describe('要获取评论的资源ID。例如要获取任务的评论列表，此处应该填写任务全局唯一ID'),
      direction: z
        .enum(['asc', 'desc'])
        .describe(
          '返回数据的排序方式。"asc"表示从最老到最新顺序返回；"desc"表示从最新到最老顺序返回。默认为"asc"。 Options:asc(评论发表时间升序),desc(评论发表时间降序)',
        )
        .optional(),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CommentPatch = {
  project: 'task',
  name: 'task.v2.comment.patch',
  sdkName: 'task.v2.comment.patch',
  path: '/open-apis/task/v2/comments/:comment_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-评论-更新评论-更新一条评论。更新时，将`update_fields`字段中填写所有要修改的评论的字段名，同时在`comment`字段中填写要修改的字段的新值即可。更新接口规范详情见中的“ 关于资源的更新”章节。目前只支持更新评论的"conent"字段',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      comment: z
        .object({
          content: z
            .string()
            .describe('要更新的评论内容。如果更新该字段，不允许设为空，最大支持3000个utf8字符')
            .optional(),
        })
        .describe('要更新的评论数据'),
      update_fields: z
        .array(z.string())
        .describe('要更新的字段，支持<md-enum><md-enum-item key="content" >评论内容</md-enum-item></md-enum>'),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ comment_id: z.string().describe('要更新的评论ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldAdd = {
  project: 'task',
  name: 'task.v2.customField.add',
  sdkName: 'task.v2.customField.add',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid/add',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-自定义字段-将自定义字段加入资源-将自定义字段加入一个资源。目前资源类型支持清单tasklist。一个自定义字段可以加入多个清单中。加入后，该清单可以展示任务的该字段的值，同时基于该字段实现筛选，分组等功能。如果自定义字段的设置被更新，字段加入的所有字段都能收到这个更新，并进行相应的展示',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      resource_type: z.string().describe('要将自定义字段添加到一个资源的资源类型。目前只支持tasklist'),
      resource_id: z.string().describe('要将自定义字段添加到的资源id，目前只支持tasklist_guid'),
    }),
    path: z.object({
      custom_field_guid: z
        .string()
        .describe(
          '自定义字段GUID。自定义字段GUID。可以通过接口创建, 或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldCreate = {
  project: 'task',
  name: 'task.v2.customField.create',
  sdkName: 'task.v2.customField.create',
  path: '/open-apis/task/v2/custom_fields',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-自定义字段-创建自定义字段-创建一个自定义字段，并将其加入一个资源上（目前资源只支持清单）。创建自定义字段必须提供字段名称，类型和相应类型的设置。目前任务自定义字段支持数字(number)，成员(member)，日期(datetime)，单选(single_select),多选(multi_select), 文本(text)几种类型。分别使用"number_setting", "member_setting", "datetime_setting", "single_select_setting", "multi_select_setting","text_setting"来设置。例如创建一个数字类型的自定义字段，并添加到guid为"ec5ed63d-a4a9-44de-a935-7ba243471c0a"的清单，可以这样发请求。```POST /task/v2/custom_fields{ "name": "价格", "type": "number", "resource_type": "tasklist", "resource_id": "ec5ed63d-a4a9-44de-a935-7ba243471c0a", "number_setting": { "format": "cny", "decimal_count": 2, "separator": "thousand" }}```表示创建一个叫做“价格”的自定义字段，保留两位小数。在界面上显示时采用人民币的格式，并显示千分位分割符。类似的，创建一个单选字段，可以这样调用接口：```POST /task/v2/custom_fields{ "name": "优先级", "type": "single_select", "resource_type": "tasklist", "resource_id": "ec5ed63d-a4a9-44de-a935-7ba243471c0a", "single_select_setting": { "options": [ { "name": "高", "color_index": 1 }, { "name": "中", "color_index": 11 }, { "name": "低", "color_index": 16 } ] }}```表示创建一个叫“优先级”的单选，包含“高”，“中”，“低”三个选项，每个选项设置一个颜色值',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      resource_type: z.string().describe('自定义字段要归属的资源类型，支持"tasklist"'),
      resource_id: z.string().describe('自定义字段要归属的资源ID，当`resource_type`为"tasklist"时必须填写清单的GUID'),
      name: z.string().describe('字段名称，最大50个字符'),
      type: z
        .enum(['number', 'datetime', 'member', 'single_select', 'multi_select', 'text'])
        .describe(
          '自定义字段类型。 Options:number(数字),datetime(日期),member(成员),single_select(单选),multi_select(多选),text(文本)',
        ),
      number_setting: z
        .object({
          format: z
            .enum(['normal', 'percentage', 'cny', 'usd', 'custom'])
            .describe(
              '数字类型的自定义字段的值在App展示的格式。注意本设置仅影响App中的数字类型字段的字段值的显示格式，并不会影响openapi中输入/输出的字段值的格式。 Options:normal(常规数字),percentage(百分比格式),cny(人民币格式),usd(美元格式),custom(自定义符号)',
            )
            .optional(),
          custom_symbol: z
            .string()
            .describe(
              '当`format`设为"custom"时，设置具体的自定义符号。注意本设置仅影响App中的数字类型字段的字段值的显示格式，并不会影响openapi输入/输出的字段值的格式',
            )
            .optional(),
          custom_symbol_position: z
            .enum(['left', 'right'])
            .describe(
              '当`format`设为"custom"时，自定义符号相对于数字的显示位置。注意本设置仅影响App中的数字类型字段的字段值的显示格式，并不会影响openapi输入/输出的字段值的格式。 Options:left(letf 自定义符号显示在数字左边),right(自定义符号显示在数字右边)',
            )
            .optional(),
          separator: z
            .enum(['none', 'thousand'])
            .describe(
              '数字类型自定义字段整数部分的分隔符样式。注意本设置仅影响App中的数字类型字段的字段值的显示格式，并不会影响openapi输入/输出的字段值的格式。 Options:none(无分隔符),thousand(千分位分隔符)',
            )
            .optional(),
          decimal_count: z
            .number()
            .describe('数字类型自定义字段的值保留的小数位数。多余的位数将被四舍五入。默认为0')
            .optional(),
        })
        .describe('数字类型的字段设置')
        .optional(),
      member_setting: z
        .object({ multi: z.boolean().describe('是否支持多选。默认为false').optional() })
        .describe('人员类型的字段设置')
        .optional(),
      datetime_setting: z
        .object({
          format: z
            .string()
            .describe(
              '日期时间格式，支持<md-enum><md-enum-item key="yyyy-mm-dd" >以短横分隔的年月日，例如2023-08-24</md-enum-item><md-enum-item key="yyyy/mm/dd" >以斜杠分隔的年月日，例如2023/08/04</md-enum-item><md-enum-item key="mm/dd/yyyy" >以斜杠分隔的月日年，例如08/24/2023</md-enum-item><md-enum-item key="dd/mm/yyyy" >以斜杠分隔的日月年，例如24/08/2023</md-enum-item></md-enum>默认为"yyyy-mm-dd"。注意本设置仅影响App中的时间日期类型字段的字段值的显示格式，并不会影响openapi输入/输出的字段值的格式',
            )
            .optional(),
        })
        .describe('时间日期类型的字段设置')
        .optional(),
      single_select_setting: z
        .object({
          options: z
            .array(
              z.object({
                name: z.string().describe('选项名称，不能为空，最大50个字符'),
                color_index: z
                  .number()
                  .describe('选项的颜色索引值，取值0～54。如不填写会自动从未使用的颜色索引值中随机选一个')
                  .optional(),
                is_hidden: z
                  .boolean()
                  .describe('选项是否隐藏。隐藏后的选项在界面不可见，也不可以再通过openapi将字段值设为该选项')
                  .optional(),
              }),
            )
            .describe('单选选项')
            .optional(),
        })
        .describe('单选设置')
        .optional(),
      multi_select_setting: z
        .object({
          options: z
            .array(
              z.object({
                name: z.string().describe('选项名称，不能为空，最大50个字符'),
                color_index: z
                  .number()
                  .describe('选项的颜色索引值，可以是0～54中的一个数字。如果不填写则会随机选一个')
                  .optional(),
                is_hidden: z
                  .boolean()
                  .describe('选项是否隐藏。隐藏后的选项在App界面不可见，也不可以通过oapi将字段值设为该选项')
                  .optional(),
              }),
            )
            .describe('多选选项')
            .optional(),
        })
        .describe('多选设置')
        .optional(),
      text_setting: z.record(z.any()).describe('文本类型设置（目前文本类型没有可设置项）').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldGet = {
  project: 'task',
  name: 'task.v2.customField.get',
  sdkName: 'task.v2.customField.get',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-任务-自定义字段-获取自定义字段-根据一个自定义字段的GUID，获取其详细的设置信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      custom_field_guid: z
        .string()
        .describe(
          '自定义字段GUID。可以通过接口创建, 或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldList = {
  project: 'task',
  name: 'task.v2.customField.list',
  sdkName: 'task.v2.customField.list',
  path: '/open-apis/task/v2/custom_fields',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-自定义字段-列取自定义字段-列取用户可访问的自定义字段列表。如果不提供`resource_type`和`resource_id`参数，则返回用户可访问的所有自定义字段。如果提供`resource_type`和`resource_id`，则返回该资源下的自定义字段。目前`resource_type`仅支持"tasklist"，此时`resource_id`应为一个清单的tasklist_guid。该接口支持分页',
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
      resource_type: z
        .string()
        .describe('资源类型，如提供表示仅查询特定资源下的自定义字段。目前只支持tasklist')
        .optional(),
      resource_id: z.string().describe('要查询自定义字段的归属resource_id').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldOptionCreate = {
  project: 'task',
  name: 'task.v2.customFieldOption.create',
  sdkName: 'task.v2.customFieldOption.create',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid/options',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-自定义字段选项-创建自定义任务选项-为单选或多选字段添加一个自定义选项。一个单选/多选字段最大支持100个选项。新添加的选项如果不隐藏，其名字不能和已存在的不隐藏选项的名字重复',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('选项名称，最大50个字符').optional(),
      color_index: z.number().describe('颜色索引值，支持0～54中的一个数字。如果不填写，则会随机选一个').optional(),
      insert_before: z.string().describe('要放到某个option之前的option_guid').optional(),
      insert_after: z.string().describe('要放到某个option之后的option_guid').optional(),
      is_hidden: z.boolean().describe('是否隐藏').optional(),
    }),
    path: z.object({ custom_field_guid: z.string().describe('要添加选项的自定义字段GUID，该字段必须是') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldOptionPatch = {
  project: 'task',
  name: 'task.v2.customFieldOption.patch',
  sdkName: 'task.v2.customFieldOption.patch',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid/options/:option_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-自定义字段选项-更新自定义字段选项-根据一个自定义字段的GUID和其选项的GUID，更新该选项的数据。要更新的字段必须是单选或者多选类型，且要更新的字段必须归属于该字段。更新时，将`update_fields`字段中填写所有要修改的任务字段名，同时在`option`字段中填写要修改的字段的新值即可。`update_fields`支持的字段包括：* `name`: 选项名称* `color_index`: 选项的颜色索引值* `is_hidden`: 是否从界面上隐藏* `insert_before`: 将当前option放到同字段某个option之前的那个option_guid。* `insert_after`: 将当前option放到同字段某个option之后的那个option_guid',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      option: z
        .object({
          name: z.string().describe('选项名称，最大50个字符').optional(),
          color_index: z.number().describe('颜色索引值，支持0～54中的一个数字').optional(),
          insert_before: z.string().describe('要放到某个option之前的option_guid').optional(),
          insert_after: z.string().describe('要放到某个option之后的option_guid').optional(),
          is_hidden: z.boolean().describe('是否隐藏').optional(),
        })
        .describe('要更新的option数据')
        .optional(),
      update_fields: z
        .array(z.string())
        .describe(
          '要更新的字段名，支持* `name`: 选项名称* `color_index`: 选项的颜色索引值* `is_hidden`: 是否从界面上隐藏* `insert_before`: 将当前option放到同字段某个option之前。* `insert_after`: 将当前option放到同字段某个option之后',
        )
        .optional(),
    }),
    path: z.object({
      custom_field_guid: z.string().describe('要更新的选项的自定义字段GUID'),
      option_guid: z.string().describe('要更新的选项的GUID'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldPatch = {
  project: 'task',
  name: 'task.v2.customField.patch',
  sdkName: 'task.v2.customField.patch',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-自定义字段-更新自定义字段-更新一个自定义字段的名称和设定。更新时，将`update_fields`字段中填写所有要修改的任务字段名，同时在`custom_field`字段中填写要修改的字段的新值即可。自定义字段不允许修改类型，只能根据类型修改其设置。`update_fields`支持更新的字段包括：* `name`：自定义字段名称* `number_setting` ：数字类型设置（当且仅当要更新的自定义字段类型是数字时)* `member_setting` ：人员类型设置（当且仅当要更新的自定义字段类型是人员时)* `datetime_setting` ：日期类型设置 (当且仅当要更新的自定义字段类型是日期时)* `single_select_setting`：单选类型设置 (当且仅当要更新的自定义字段类型是单选时)* `multi_select_setting`：多选类型设置 (当且仅当要更新的自定义字段类型是多选时)* `text_setting`: 文本类型设置（目前文本类型没有可设置项）当更改某个设置时，如果不填写一个字段，表示不覆盖原有的设定。比如，对于一个数字，原有的setting是:```json"number_setting": { "format": "normal", "decimal_count": 2, "separator": "none", "custom_symbol": "L", "custom_symbol_position": "right"}```使用如下参数调用接口：```PATCH /task/v2/custom_fields/:custom_field_guid{ "custom_field": { "number_setting": { "decimal_count": 4 } }, "update_fields": ["number_setting"]}```表示仅仅将小数位数从2改为4，其余的设置`format`, `separator`, `custom_field`等都不变。对于单选/多选类型的自定义字段，其设定是一个选项列表。更新时，使用方式接近使用App的界面。使用者不必传入字段的所有选项，而是只需要提供最终希望界面可见（is_hidden=false) 的选项。原有字段中的选项如果没有出现在输入中，则被置为`is_hidden=true`并放到所有可见选项之后。对于某一个更新的选项，如果提供了option_guid，将视作更新该选项（此时option_guid必须存在于当前字段，否则会返回错误）；如果不提供，将视作新建一个选项（新的选项的option_guid会在reponse中被返回)。例如，一个单选字段原来有3个选项A，B，C，D。其中C是隐藏的。用户可以这样更新选项：```PATCH /task/v2/custom_fields/:custom_field_guid{ "custom_field": { "single_select_setting": { "optoins": [ { "name": "E", "color_index": 25 }, { "guid": "<option_guid of A>" "name": "A2" }, { "guid": "<option_guid of C>", }, ] } }, "update_fields": ["single_select_setting"]}```调用后最终得到了新的选项列表E, A, C, B, D。其中：* 选项E被新建出来，其`color_index`被设为了25。* 选项A被更新，其名称被改为了"A2"。但其color_index因为没有设置而保持不变；* 选项整体顺序遵循用户的输入顺序，即E，A，C。同时E，A，C作为直接的输入，其is_hidden均被设为了false，其中，C原本是is_hidden=true，也会被设置为is_hidden=false。* 选项B和D因为用户没有输入，其`is_hidden`被置为了true，并且被放到了所有用户输入的选项之后。如果只是单纯的希望修改用户可见的选项的顺序，比如从原本的选项A,B,C修改为C,B,A，可以这样调用接口：```PATCH /task/v2/custom_fields/:custom_field_guid{ "custom_field": { "single_select_setting": { "optoins": [ { "guid": "<option_guid_of_C>" }, { "guid": "<option_guid of B>" }, { "guid": "<option_guid of A>", }, ] } }, "update_fields": ["single_select_setting"]}```如果希望直接将字段里的所有选项都标记为不可见，可以这样调用接口：```PATCH /task/v2/custom_fields/:custom_field_guid{ "custom_field": { "single_select_setting": { "optoins": [] } }, "update_fields": ["single_select_setting"]}```更新单选/多选字段的选项必须满足“可见选项名字不能重复”的约束。否则会返回错误。开发者需要自行保证输入的选项名不可以重复。如希望只更新单个选项，或者希望单独设置某个选项的is_hidden，本接口无法支持，但可以使用接口实现',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      custom_field: z
        .object({
          name: z.string().describe('字段名称，支持最大50个字符').optional(),
          number_setting: z
            .object({
              format: z
                .enum(['normal', 'percentage', 'cny', 'usd', 'custom'])
                .describe(
                  '数字展示的格式 Options:normal(常规数字),percentage(百分比格式),cny(人民币格式),usd(美元格式),custom(自定义符号)',
                )
                .optional(),
              custom_symbol: z
                .string()
                .describe('自定义符号，支持最大4个字符。只有`format`设为"custom"时才会生效')
                .optional(),
              custom_symbol_position: z
                .enum(['left', 'right'])
                .describe(
                  '自定义符号显示的位置。 Options:left(letf 自定义符号放在数字左边),right(自定义符号放在数字右边)',
                )
                .optional(),
              separator: z
                .enum(['none', 'thousand'])
                .describe('分隔符样式 Options:none(无分隔符),thousand(千分位分隔符)')
                .optional(),
              decimal_count: z
                .number()
                .describe(
                  '保留小数位数。输入的数字值的小数位数如果比该设置多，多余的位数将被四舍五入后舍弃。如果`format`为"percentage"，表示变为百分数之后的小数位数',
                )
                .optional(),
            })
            .describe('数字类型的字段设置')
            .optional(),
          member_setting: z
            .object({ multi: z.boolean().describe('是否支持多选').optional() })
            .describe('人员类型的字段设置')
            .optional(),
          datetime_setting: z
            .object({
              format: z
                .string()
                .describe(
                  '日期显示格式。支持<md-enum><md-enum-item key="yyyy-mm-dd">以短横分隔的年月日，例如2023-08-24</md-enum-item><md-enum-item key="yyyy/mm/dd">以斜杠分隔的年月日，例如2023/08/04</md-enum-item><md-enum-item key="mm/dd/yyyy">以斜杠分隔的月日年，例如08/24/2023</md-enum-item><md-enum-item key="dd/mm/yyyy">以斜杠分隔的日月年，例如24/08/2023</md-enum-item></md-enum>',
                )
                .optional(),
            })
            .describe('时间日期类型的字段设置')
            .optional(),
          single_select_setting: z
            .object({
              options: z
                .array(
                  z.object({
                    guid: z.string().describe('选项的GUID。如果填写表示更新；不填写表示新建').optional(),
                    name: z.string().describe('选项名称，最大50个字符').optional(),
                    color_index: z.number().describe('选项的颜色索引值，可以是0～54中的一个数字').optional(),
                  }),
                )
                .describe('单选选项')
                .optional(),
            })
            .describe('单选设置')
            .optional(),
          multi_select_setting: z
            .object({
              options: z
                .array(
                  z.object({
                    guid: z.string().describe('选项的GUID。如果填写表示更新；不填写表示新建').optional(),
                    name: z.string().describe('选项名称，最大50个字符').optional(),
                    color_index: z.number().describe('选项的颜色索引值，可以是0～54中的一个数字').optional(),
                  }),
                )
                .describe('多选选项')
                .optional(),
            })
            .describe('多选设置')
            .optional(),
          text_setting: z.record(z.any()).describe('文本类型设置').optional(),
        })
        .describe('要修改的自定义字段数据')
        .optional(),
      update_fields: z
        .array(z.string())
        .describe(
          '要修改的自定义字段类型，支持：* `name`：自定义字段名称。* `number_setting` ：数字类型设置（当且仅当要更新的自定义字段类型是数字时)* `member_setting` ：人员类型设置（当且仅当要更新的自定义字段类型是人员时)* `datetime_setting` ：日期类型设置 (当且仅当要更新的自定义字段类型是日期时)* `single_select_setting`：单选类型设置 (当且仅当要更新的自定义字段类型是单选时)* `multi_select_setting`：多选类型设置 (当且仅当要更新的自定义字段类型是多选时)* `text_setting`: 文本类型设置（当前无可设置项）',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      custom_field_guid: z
        .string()
        .describe(
          '自定义字段GUID。自定义字段GUID。可以通过接口创建, 或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2CustomFieldRemove = {
  project: 'task',
  name: 'task.v2.customField.remove',
  sdkName: 'task.v2.customField.remove',
  path: '/open-apis/task/v2/custom_fields/:custom_field_guid/remove',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-自定义字段-将自定义字段移出资源-将自定义字段从资源中移出。移除后，该资源将无法再使用该字段。目前资源的类型支持"tasklist"。如果要移除自定义字段本来就不存在于资源，本接口将正常返回。注意自定义字段是通过清单来实现授权的，如果将自定义字段从所有关联的清单中移除，就意味着任何调用身份都无法再访问改自定义字段',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      resource_type: z.string().describe('要从某个资源移除自定义字段的资源类型，目前只支持清单'),
      resource_id: z
        .string()
        .describe('要从某个资源移除自定义字段的资源id，`resource_type`为"tasklist"时，需填写清单的GUID'),
    }),
    path: z.object({
      custom_field_guid: z
        .string()
        .describe(
          '自定义字段GUID。自定义字段GUID。可以通过接口创建, 或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionCreate = {
  project: 'task',
  name: 'task.v2.section.create',
  sdkName: 'task.v2.section.create',
  path: '/open-apis/task/v2/sections',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-自定义分组-创建自定义分组-为清单或我负责的任务列表创建一个自定义分组。创建时可以需要提供名称和可选的配置。如果不指定位置，新分组会放到指定resource的自定义分组列表的最后。当在清单中创建自定义分组时，需要设置`resourse_type`为"tasklist", `resource_id`设为清单的GUID。当为我负责任务列表中创建自定义分组时，需要设置`resource_type`为"my_tasks"，不需要设置`resource_id`。调用身份只能为自己的我负责的任务列表创建自定义分组',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('自定义分组名。不允许为空，最大100个utf8字符'),
      resource_type: z.string().describe('自定义分组的资源类型，支持"tasklist"（清单）或者"my_tasks"（我负责的）'),
      resource_id: z
        .string()
        .describe(
          '自定义分组要归属的资源id。当`resource_type`为"tasklist"时这里需要填写清单的GUID；当`resource_type`为"my_tasks"时，无需填写',
        )
        .optional(),
      insert_before: z
        .string()
        .describe(
          '要将新分组插入到自定义分分组的前面的目标分组的guid。`insert_before`和`insert_after`均不设置时表示将新分组放到已有的所有自定义分组之后。如果同时设置`insert_before`和`insert_after`，接口会报错',
        )
        .optional(),
      insert_after: z
        .string()
        .describe(
          '要将新分组插入到自定义分分组的后面的目标分组的guid。`insert_before`和`insert_after`均不设置时表示将新分组放到已有的所有自定义分组之后。如果同时设置`insert_before`和`insert_after`，接口会报错',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionDelete = {
  project: 'task',
  name: 'task.v2.section.delete',
  sdkName: 'task.v2.section.delete',
  path: '/open-apis/task/v2/sections/:section_guid',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-任务-自定义分组-删除自定义分组-删除一个自定义分组。删除后该自定义分组中的任务会被移动到被删除自定义分组所属资源的默认自定义分组中。不能删除默认的自定义分组',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ section_guid: z.string().describe('要删除的自定义分组全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionGet = {
  project: 'task',
  name: 'task.v2.section.get',
  sdkName: 'task.v2.section.get',
  path: '/open-apis/task/v2/sections/:section_guid',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-自定义分组-获取自定义分组详情-获取一个自定义分组详情，包括名称，创建人等信息。如果该自定义分组归属于一个清单，还会返回清单的摘要信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ section_guid: z.string().describe('要获取的自定义分组GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionList = {
  project: 'task',
  name: 'task.v2.section.list',
  sdkName: 'task.v2.section.list',
  path: '/open-apis/task/v2/sections',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-自定义分组-获取自定义分组列表-获取一个资源下所有的自定义分组列表。支持分页。返回结果按照自定义分组在界面上的顺序排序',
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
      resource_type: z
        .string()
        .describe(
          '自定义分组所属的资源类型。支持my_tasks(我负责的）和tasklist（清单）。当使用tasklist时，需要用resource_id提供清单的全局唯一ID',
        ),
      resource_id: z
        .string()
        .describe('如`resource_type`为"tasklist"，这里需要填写要列取自定义分组的清单的GUID')
        .optional(),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionPatch = {
  project: 'task',
  name: 'task.v2.section.patch',
  sdkName: 'task.v2.section.patch',
  path: '/open-apis/task/v2/sections/:section_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-自定义分组-更新自定义分组-更新自定义分组，可以更新自定义分组的名称和位置。更新时，将`update_fields`字段中填写所有要修改的字段名，同时在`section`字段中填写要修改的字段的新值即可。调用约定详情见中的“ 关于资源的更新”章节。目前支持更新的字段包括：* `name` - 自定义字段名字;* `insert_before` - 要让当前自定义分组放到某个自定义分组前面的secion_guid，用于改变当前自定义分组的位置;* `insert_after` - 要让当前自定义分组放到某个自定义分组后面的secion_guid，用于改变当前自定义分组的位置。`insert_before`和`insert_after`如果填写，必须是同一个资源的合法section_guid。注意不能同时设置`insert_before`和`insert_after`',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      section: z
        .object({
          name: z.string().describe('自定义分组名。如更新，不允许设为空，支持最大100个utf8字符').optional(),
          insert_before: z.string().describe('要将新分组插入到自定义分分组的前面的目标分组的guid').optional(),
          insert_after: z.string().describe('要将新分组插入到自定义分分组的后面的目标分组的guid').optional(),
        })
        .describe('要更新的自定义分组的数据'),
      update_fields: z
        .array(z.string())
        .describe(
          '要更新的字段名，支持：* `name` - 自定义字段名字* `insert_before` - 要让当前自定义分组放到某个自定义分组前面的secion_guid，用于改变当前自定义分组的位置。* `insert_after` - 要让当前自定义分组放到某个自定义分组后面的secion_guid，用于改变当前自定义分组的位置',
        ),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ section_guid: z.string().describe('要更新的自定义分组GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2SectionTasks = {
  project: 'task',
  name: 'task.v2.section.tasks',
  sdkName: 'task.v2.section.tasks',
  path: '/open-apis/task/v2/sections/:section_guid/tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-自定义分组-获取自定义分组任务列表-列取一个自定义分组里的所有任务。支持分页。任务按照自定义排序的顺序返回。本接口支持简单的过滤',
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
      completed: z.boolean().describe('按照任务状态过滤，如果不填写则表示不按完成状态过滤').optional(),
      created_from: z.string().describe('按照创建时间筛选的起始时间戳（ms)，如不填写则为首个任务的创建时刻').optional(),
      created_to: z.string().describe('按照创建时间筛选的起始时间戳（ms)，如不填写则为最后任务的创建时刻').optional(),
    }),
    path: z.object({ section_guid: z.string().describe('要获取任务的自定义分组全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskAddDependencies = {
  project: 'task',
  name: 'task.v2.task.addDependencies',
  sdkName: 'task.v2.task.addDependencies',
  path: '/open-apis/task/v2/tasks/:task_guid/add_dependencies',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-添加依赖-为一个任务添加一个或多个依赖。可以添加任务的前置依赖和后置依赖。存在依赖关系的任务如果在同一个清单，可以通过清单的甘特图来展示其依赖关系。本接口也可以用于修改一个现有依赖的类型（前置改为后置或者后置改为前置）。注意：添加的依赖的`task_guid`不能重复，也不能添加当前任务为自己的依赖。尝试添加一个已经存在的依赖会被自动忽略',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      dependencies: z
        .array(
          z.object({
            type: z.enum(['prev', 'next']).describe('依赖类型 Options:prev(前置依赖),next(后置依赖)'),
            task_guid: z.string().describe('依赖任务的GUID'),
          }),
        )
        .describe('要添加的依赖')
        .optional(),
    }),
    path: z.object({ task_guid: z.string().describe('任务GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskAddMembers = {
  project: 'task',
  name: 'task.v2.task.addMembers',
  sdkName: 'task.v2.task.addMembers',
  path: '/open-apis/task/v2/tasks/:task_guid/add_members',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-添加任务成员-添加任务的负责人或者关注人。一次性可以添加多个成员。返回任务的实体中会返回最终任务成员的列表。* 关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节。* 成员的角色支持"assignee"和"follower"。* 成员类型支持"user"和"app"。* 如果要添加的成员已经在任务中，则自动被忽略',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id'),
            type: z.string().describe('成员类型').optional(),
            role: z.string().describe('成员的角色，支持"assignee"或"follower"'),
          }),
        )
        .describe(
          '要添加的members列表，单请求支持最大50个成员（去重后)。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节',
        ),
      client_token: z
        .string()
        .describe(
          '幂等token，如果提供则实现幂等行为。详见中的“ 幂等调用 ”章节',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要添加负责人的任务全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskAddReminders = {
  project: 'task',
  name: 'task.v2.task.addReminders',
  sdkName: 'task.v2.task.addReminders',
  path: '/open-apis/task/v2/tasks/:task_guid/add_reminders',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-添加任务提醒-为一个任务添加提醒。提醒是基于任务的截止时间计算得到的一个时刻。为了设置提醒，任务必须首先拥有截止时间(due)。可以在时设置截止时间，或者通过设置一个截止时间。目前一个任务只能设置1个提醒。但接口的形式可以在未来扩充为一个任务支持多个提醒。如果当前任务已经有提醒了，要更新提醒的设置，需要先调用接口移除原有提醒。再调用本接口添加提醒',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      reminders: z
        .array(
          z.object({
            relative_fire_minute: z
              .number()
              .describe('相对于截止时间的提醒时间分钟数。例如30表示截止时间前30分钟提醒；0表示截止时提醒。不支持负数'),
          }),
        )
        .describe('要添加的reminder的列表，目前1个任务只支持一个提醒'),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要添加负责人的任务全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskAddTasklist = {
  project: 'task',
  name: 'task.v2.task.addTasklist',
  sdkName: 'task.v2.task.addTasklist',
  path: '/open-apis/task/v2/tasks/:task_guid/add_tasklist',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-任务加入清单-将一个任务加入清单。返回任务的详细信息，包括任务所在的所有清单信息。如果任务已经在该清单，接口将返回成功',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      tasklist_guid: z.string().describe('要添加到的清单的全局唯一ID'),
      section_guid: z.string().describe('要添加到清单的自定义分组全局唯一ID，如不填写表示添加到默认分组').optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要添加到清单的任务的全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskCreate = {
  project: 'task',
  name: 'task.v2.task.create',
  sdkName: 'task.v2.task.create',
  path: '/open-apis/task/v2/tasks',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-创建任务-该接口可以创建一个任务，在创建任务时，支持填写任务的基本信息（如标题、描述、负责人等），此外，还可以设置任务的开始时间、截止时间提醒等条件，此外，还可以通过传入 tasklists 字段将新任务加到多个清单中。创建任务时，可以通过设置`members`字段来设置任务的负责人和关注人。关于member的格式，详见中的“ 如何表示任务和清单的成员？ ”章节。如果要设置任务的开始时间和截止时间，需要遵守任务时间的格式和约束。详见中的“ 如何使用开始时间和截止时间？”章节。如要设置自定义字段值，可以设置`custom_fields`字段。但因为自定义字段归属于清单，因此要填写的自定义字段的guid必须归属于要添加的清单(通过`tasklists`设置）。详见。通过设置`client_token`实现幂等调用。详见中的“ 幂等调用 ”章节。如要创建一个任务的子任务，需要使用接口。创建任务时可以一并设置自定义字段值。但根据自定义字段的权限关系，任务只能添加`tasklists`字段设置的清单中关联的自定义字段的值。详见中的介绍',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z.string().describe('任务标题。不能为空，支持最大3000个utf8字符'),
      description: z.string().describe('任务摘要。支持最大3000个utf8字符').optional(),
      due: z
        .object({
          timestamp: z
            .string()
            .describe(
              '截止时间/日期的时间戳，距1970-01-01 00:00:00 UTC的毫秒数。如果截止时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true',
            )
            .optional(),
          is_all_day: z
            .boolean()
            .describe('是否截止到一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
            .optional(),
        })
        .describe(
          '任务截止时间。详见中的“ 如何使用开始时间和截止时间？”章节',
        )
        .optional(),
      origin: z
        .object({
          platform_i18n_name: z
            .object({
              en_us: z.string().describe('英文').optional(),
              zh_cn: z.string().describe('中文').optional(),
              zh_hk: z.string().describe('中文（香港地区）').optional(),
              zh_tw: z.string().describe('中文（台湾地区）').optional(),
              ja_jp: z.string().describe('日语').optional(),
              fr_fr: z.string().describe('法语').optional(),
              it_it: z.string().describe('意大利语').optional(),
              de_de: z.string().describe('德语').optional(),
              ru_ru: z.string().describe('俄语').optional(),
              th_th: z.string().describe('泰语').optional(),
              es_es: z.string().describe('西班牙语').optional(),
              ko_kr: z.string().describe('韩语').optional(),
            })
            .describe('任务导入来源的名称，用于在任务中心详情页展示。需提供多语言版本')
            .optional(),
          href: z
            .object({
              url: z
                .string()
                .describe(
                  '来源链接对应的地址，如填写必须以https://或者http://开头。**说明**：如需调整 PC 端链接打开方式，可在飞书客户端的 **设置** > **效率** > **链接打开方式** 内调整',
                )
                .optional(),
              title: z.string().describe('来源链接对应的标题').optional(),
            })
            .describe('任务关联的来源平台详情页链接')
            .optional(),
        })
        .describe(
          '任务关联的第三方平台来源信息，用于来源信息在飞书任务界面的展示。只能创建任务时设置，一旦设置后就不可变更。详见中的“ 如何使用Origin? ”章节',
        )
        .optional(),
      extra: z
        .string()
        .describe(
          '调用者可以传入的任意附带到任务上的数据。在获取任务详情时会原样返回。如果是二进制数据可以使用Base64编码',
        )
        .optional(),
      completed_at: z
        .string()
        .describe(
          '任务的完成时刻时间戳(ms)。不填写或者设为0表示创建一个未完成任务；填写一个具体的时间戳表示创建一个已完成任务',
        )
        .optional(),
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id'),
            type: z.string().describe('成员的类型，可以是user或者app').optional(),
            role: z.string().describe('成员角色，可以是"assignee"或者"follower"'),
          }),
        )
        .describe(
          '任务成员列表，包括负责人和关注人。不填写表示任务无成员。单次请求支持最大50个成员（去重后）。详见中的“ 如何表示任务和清单的成员？ ”章节',
        )
        .optional(),
      repeat_rule: z
        .string()
        .describe(
          '重复任务规则。如果设置，则该任务为“重复任务”。详见中的“如何使用重复任务？”章节',
        )
        .optional(),
      custom_complete: z
        .object({
          pc: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示')
                .optional(),
            })
            .describe('pc客户端自定义完成配置（含mac和windows）')
            .optional(),
          ios: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示为')
                .optional(),
            })
            .describe('ios端的自定义完成配置')
            .optional(),
          android: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示为')
                .optional(),
            })
            .describe('android端的自定义完成配置')
            .optional(),
        })
        .describe(
          '任务自定义完成配置。详见中的“ 如何使用任务自定义完成？”章节',
        )
        .optional(),
      tasklists: z
        .array(
          z.object({
            tasklist_guid: z
              .string()
              .describe('指定在某个清单中创建任务，需要该清单的可编辑权限。不填写表示不在清单中创建任务')
              .optional(),
            section_guid: z
              .string()
              .describe(
                '清单中自定义分组的GUID，用于指定在某个清单中创建任务的同时把任务加入到某个具体的分组中。如果填写了清单的GUID，却没填写分组的GUID，则自动加入该清单的默认分组中',
              )
              .optional(),
          }),
        )
        .describe('任务所在清单的信息')
        .optional(),
      client_token: z
        .string()
        .describe(
          '幂等token。如果提供则触发后端实现幂等行为。详见中的“ 幂等调用 ”章节',
        )
        .optional(),
      start: z
        .object({
          timestamp: z
            .string()
            .describe(
              '开始时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果开始时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true。如果同时设置任务的开始时间和截止时间，开始时间必须<=截止时间，并且开始/截止时间的is_all_day设置必须相同',
            )
            .optional(),
          is_all_day: z
            .boolean()
            .describe('是否开始于一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
            .optional(),
        })
        .describe(
          '任务的开始时间(ms), 详见中的“ 如何使用开始时间和截止时间？”章节',
        )
        .optional(),
      reminders: z
        .array(
          z.object({
            relative_fire_minute: z
              .number()
              .describe(
                '相对于截止时间的提醒时间分钟数，取值必须大于等于0（调用本接口只能设置截止日期前的提醒时间）。例如30表示截止时间前30分钟提醒；0表示截止时提醒',
              ),
          }),
        )
        .describe('任务提醒。要设置提醒必须同时设置任务的截止时间。一个任务最多只能设置1个提醒')
        .optional(),
      mode: z.number().describe('任务完成模式, 1 - 会签任务; 2 - 或签任务').optional(),
      is_milestone: z.boolean().describe('是否是里程碑任务').optional(),
      custom_fields: z
        .array(
          z.object({
            guid: z.string().describe('自定义字段guid'),
            number_value: z
              .string()
              .describe('数字类型的自定义字段值，填写一个合法数字的字符串表示，空字符串表示设为空')
              .optional(),
            member_value: z
              .array(
                z.object({
                  id: z.string().describe('表示member的id').optional(),
                  type: z.string().describe('成员类型（默认user，可不填写）').optional(),
                }),
              )
              .describe(
                '人员类型的自定义字段值。可以设置1个或多个用户的id（遵循member格式，只支持user类型）。当字段设为只不能多选时只能输入一个值。设为空数组表示设为空',
              )
              .optional(),
            datetime_value: z
              .string()
              .describe(
                '日期类型自定义字段值，可以输入一个表示日期的以毫秒为单位的时间戳字符串。设为空字符串表示设为空',
              )
              .optional(),
            single_select_value: z
              .string()
              .describe('单选类型字段值，填写一个字段选项的option_guid。设置为空字符串表示设为空')
              .optional(),
            multi_select_value: z
              .array(z.string())
              .describe('多选类型字段值，可以填写一个或多个本字段的option_guid。设为空数组表示设为空')
              .optional(),
            text_value: z.string().describe('文本类型字段值。可以填写最多3000字符。使用空字符串表示设为空').optional(),
          }),
        )
        .describe(
          '自定义字段值。可以在创建任务的同时设置一个或多个自定义字段的值。要设置值的自定义字段必须关联于任务要加入的清单(通过`tasklists`字段设置），否则将无法设置。每个字段的值根据字段类型填写相应的字段。* 当`type`为"number"时，应使用`number_value`字段，表示数字类型自定义字段的值；* 当`type`为"member"时，应使用`member_value`字段，表示人员类型自定义字段的值；* 当`type`为"datetime"时，应使用`datetime_value`字段，表示日期类型自定义字段的值；* 当`type`为"single_select"时，应使用`single_select_value`字段，表示单选类型自定义字段的值；* 当`type`为"multi_select"时，应使用`multi_select_value`字段，表示多选类型自定义字段的值；* 当`type`为“text”时，应使用`text_value`字段，表示文本字段类型的值',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskDelete = {
  project: 'task',
  name: 'task.v2.task.delete',
  sdkName: 'task.v2.task.delete',
  path: '/open-apis/task/v2/tasks/:task_guid',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-任务-任务-删除任务-删除一个任务。删除后任务无法再被获取到',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_guid: z.string().describe('要删除的任务guid') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskGet = {
  project: 'task',
  name: 'task.v2.task.get',
  sdkName: 'task.v2.task.get',
  path: '/open-apis/task/v2/tasks/:task_guid',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-任务-任务-获取任务详情-该接口用于获取任务详情，包括任务标题、描述、时间、成员等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要获取的任务guid') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskList = {
  project: 'task',
  name: 'task.v2.task.list',
  sdkName: 'task.v2.task.list',
  path: '/open-apis/task/v2/tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-任务-列取任务列表-基于调用身份，列出特定类型的所有任务。支持分页。目前只支持列取任务界面上“我负责的”任务。返回的任务数据按照任务在”我负责的“界面中”自定义拖拽“的顺序排序',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('每页的任务数量').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      completed: z
        .boolean()
        .describe(
          '是否按任务完成进行过滤。填写true表示只列出已完成任务；填写false表示只列出未完成任务。不填写表示不过滤',
        )
        .optional(),
      type: z.string().describe('列取任务的类型，目前只支持"my_tasks"，即“我负责的”').optional(),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskPatch = {
  project: 'task',
  name: 'task.v2.task.patch',
  sdkName: 'task.v2.task.patch',
  path: '/open-apis/task/v2/tasks/:task_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-任务-更新任务-该接口用于修改任务的标题、描述、截止时间等信息。更新时，将`update_fields`字段中填写所有要修改的任务字段名，同时在`task`字段中填写要修改的字段的新值即可。如果`update_fields`中设置了要变更一个字段的名字，但是task里没设置新的值，则表示将该字段清空。调用约定详情见中的“ 关于资源的更新”章节。目前支持更新的字段包括：* `summary` - 任务标题* `description` - 任务描述* `start` - 任务开始时间* `due` - 任务截止时间* `completed_at` - 用于标记任务完成/未完成* `extra` - 任务附带自定义数据* `custom_complete` - 任务自定义完成配置。* `repeat_rule` - 重复任务规则。* `mode` - 任务完成模式。* `is_milestone` - 是否是里程碑任务。* `custom_fields` - 自定义字段值。该接口可以用于完成任务和将任务恢复至未完成，只需要修改`completed_at`字段即可。但留意，目前不管任务本身是会签任务还是或签任务，oapi对任务进行完成只能实现“整体完成”，不支持个人单独完成。此外，不能对已经完成的任务再次完成，但可以将其恢复到未完成的状态(设置`completed_at`为"0")。如更新自定义字段的值，需要调用身份同时拥有任务的编辑权限和自定义字段的编辑权限。详情见。更新时，只有填写在`task.custom_fields`的自定义字段值会被更新，不填写的不会被改变。任务成员/提醒/清单数据不能使用本接口进行更新。* 如要修改任务成员，需要使用和接口。* 如要修改任务提醒，需要使用和接口。* 如要变更任务所在的清单，需要使用和[任务移出清单]( https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/task-v2/task/remove_tasklist)接口',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      task: z
        .object({
          summary: z
            .string()
            .describe('任务标题。如更新标题，不可将任务标题设为空。标题最大支持3000个utf8 字符')
            .optional(),
          description: z.string().describe('任务描述。描述最大支持3000个utf8字符').optional(),
          due: z
            .object({
              timestamp: z
                .string()
                .describe(
                  '截止时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果截止时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true',
                )
                .optional(),
              is_all_day: z
                .boolean()
                .describe('是否截止到一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
                .optional(),
            })
            .describe(
              '任务截止时间。详见中的“ 如何使用开始时间和截止时间？”章节',
            )
            .optional(),
          extra: z.string().describe('调用者可以传入的任意附带到任务上的数据。在获取任务详情时会原样返回').optional(),
          completed_at: z.string().describe('任务的完成时刻时间戳(ms)').optional(),
          repeat_rule: z
            .string()
            .describe(
              '如果设置，则该任务为“重复任务”。详见中的“如何使用重复任务？”章节',
            )
            .optional(),
          custom_complete: z
            .object({
              pc: z
                .object({
                  href: z.string().describe('自定义完成的跳转url').optional(),
                  tip: z
                    .object({
                      en_us: z.string().describe('英文').optional(),
                      zh_cn: z.string().describe('中文').optional(),
                      zh_hk: z.string().describe('中文（香港地区）').optional(),
                      zh_tw: z.string().describe('中文（台湾地区）').optional(),
                      ja_jp: z.string().describe('日语').optional(),
                      fr_fr: z.string().describe('法语').optional(),
                      it_it: z.string().describe('意大利语').optional(),
                      de_de: z.string().describe('德语').optional(),
                      ru_ru: z.string().describe('俄语').optional(),
                      th_th: z.string().describe('泰语').optional(),
                      es_es: z.string().describe('西班牙语').optional(),
                      ko_kr: z.string().describe('韩语').optional(),
                    })
                    .describe('自定义完成的弹出提示为')
                    .optional(),
                })
                .describe('pc客户端自定义完成配置（含mac和windows）')
                .optional(),
              ios: z
                .object({
                  href: z.string().describe('自定义完成的跳转url').optional(),
                  tip: z
                    .object({
                      en_us: z.string().describe('英文').optional(),
                      zh_cn: z.string().describe('中文').optional(),
                      zh_hk: z.string().describe('中文（香港地区）').optional(),
                      zh_tw: z.string().describe('中文（台湾地区）').optional(),
                      ja_jp: z.string().describe('日语').optional(),
                      fr_fr: z.string().describe('法语').optional(),
                      it_it: z.string().describe('意大利语').optional(),
                      de_de: z.string().describe('德语').optional(),
                      ru_ru: z.string().describe('俄语').optional(),
                      th_th: z.string().describe('泰语').optional(),
                      es_es: z.string().describe('西班牙语').optional(),
                      ko_kr: z.string().describe('韩语').optional(),
                    })
                    .describe('自定义完成的弹出提示为')
                    .optional(),
                })
                .describe('ios端的自定义完成配置')
                .optional(),
              android: z
                .object({
                  href: z.string().describe('自定义完成的跳转url').optional(),
                  tip: z
                    .object({
                      en_us: z.string().describe('英文').optional(),
                      zh_cn: z.string().describe('中文').optional(),
                      zh_hk: z.string().describe('中文（香港地区）').optional(),
                      zh_tw: z.string().describe('中文（台湾地区）').optional(),
                      ja_jp: z.string().describe('日语').optional(),
                      fr_fr: z.string().describe('法语').optional(),
                      it_it: z.string().describe('意大利语').optional(),
                      de_de: z.string().describe('德语').optional(),
                      ru_ru: z.string().describe('俄语').optional(),
                      th_th: z.string().describe('泰语').optional(),
                      es_es: z.string().describe('西班牙语').optional(),
                      ko_kr: z.string().describe('韩语').optional(),
                    })
                    .describe('自定义完成的弹出提示为')
                    .optional(),
                })
                .describe('android端的自定义完成配置')
                .optional(),
            })
            .describe(
              '任务自定义完成配置。详见中的“ 如何使用任务自定义完成？”章节',
            )
            .optional(),
          start: z
            .object({
              timestamp: z
                .string()
                .describe(
                  '开始时间的时间戳，距1970-01-01 00:00:00的毫秒数。如果开始时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true',
                )
                .optional(),
              is_all_day: z
                .boolean()
                .describe('是否开始于一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
                .optional(),
            })
            .describe(
              '任务的开始时间(ms)。详见中的“ 如何使用开始时间和截止时间？”章节',
            )
            .optional(),
          mode: z.number().describe('任务的完成模式。1 - 会签任务；2 - 或签任务').optional(),
          is_milestone: z.boolean().describe('是否是里程碑任务').optional(),
          custom_fields: z
            .array(
              z.object({
                guid: z.string().describe('自定义字段guid'),
                number_value: z
                  .string()
                  .describe('数字类型的自定义字段值，填写一个合法数字的字符串表示，空字符串表示设为空')
                  .optional(),
                member_value: z
                  .array(
                    z.object({
                      id: z.string().describe('表示member的id').optional(),
                      type: z.string().describe('成员的类型').optional(),
                    }),
                  )
                  .describe(
                    '人员类型的自定义字段值。可以设置1个或多个用户的id（遵循member格式，只支持user类型）。当字段设为只不能多选时只能输入一个值。设为空数组表示设为空',
                  )
                  .optional(),
                datetime_value: z
                  .string()
                  .describe('日期类型自定义字段值，可以输入一个表示日期的以毫秒为单位的字符串。设为空字符串表示设为空')
                  .optional(),
                single_select_value: z
                  .string()
                  .describe('单选类型字段值，填写一个字段选项的option_guid。设置为空字符串表示设为空')
                  .optional(),
                multi_select_value: z
                  .array(z.string())
                  .describe('多选类型字段值，可以填写一个或多个本字段的option_guid。设为空数组表示设为空')
                  .optional(),
                text_value: z
                  .string()
                  .describe('文本类型字段值。可以填写最多3000字符。使用空字符串表示设为空')
                  .optional(),
              }),
            )
            .describe(
              '自定义字段值。如要更新，每个字段的值根据字段类型填写相应的字段。* 当`type`为"number"时，应使用`number_value`字段，表示数字类型自定义字段的值；* 当`type`为"member"时，应使用`member_value`字段，表示人员类型自定义字段的值；* 当`type`为"datetime"时，应使用`datetime_value`字段，表示日期类型自定义字段的值；* 当`type`为"single_select"时，应使用`single_select_value`字段，表示单选类型自定义字段的值；* 当`type`为"multi_select"时，应使用`multi_select_value`字段，表示多选类型自定义字段的值；* 当`type`为"text"时，应使用`text_value`字段，表示文本类型自定义字段的值',
            )
            .optional(),
        })
        .describe(
          '要更新的任务数据，只需要设置出现在`update_fields`中的字段即可。如果`update_fields`设置了要变更一个字段名，但是`task`里没设置新的值，则表示将该字段清空',
        )
        .optional(),
      update_fields: z
        .array(z.string())
        .describe(
          '设置需要修改的字段<md-enum><md-enum-item key="summary" >任务标题</md-enum-item><md-enum-item key="description" >任务描</md-enum-item><md-enum-item key="start" >任务开始时间</md-enum-item><md-enum-item key="due" >任务截止时间</md-enum-item><md-enum-item key="completed_at" >任务完成时间</md-enum-item><md-enum-item key="extra" >任务附属自定义数据</md-enum-item><md-enum-item key="custom_complete" >任务自定义完成规则</md-enum-item><md-enum-item key="repeat_rule" >任务重复规则</md-enum-item><md-enum-item key="mode" >任务完成模式</md-enum-item><md-enum-item key="is_milestone" >是否是里程碑任务</md-enum-item><md-enum-item key=custom_fields" >自定义字段值</md-enum-item></md-enum>',
        ),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要更新的任务全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskRemoveDependencies = {
  project: 'task',
  name: 'task.v2.task.removeDependencies',
  sdkName: 'task.v2.task.removeDependencies',
  path: '/open-apis/task/v2/tasks/:task_guid/remove_dependencies',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-移除依赖-从一个任务移除一个或者多个依赖。移除时只需要输入要移除的`task_guid`即可。注意，如果要移除的依赖非当前任务的依赖，会被自动忽略。接口会返回成功',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      dependencies: z.array(z.object({ task_guid: z.string().describe('依赖任务的GUID') })).describe('要移除的依赖'),
    }),
    path: z.object({ task_guid: z.string().describe('要移除依赖的任务GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskRemoveMembers = {
  project: 'task',
  name: 'task.v2.task.removeMembers',
  sdkName: 'task.v2.task.removeMembers',
  path: '/open-apis/task/v2/tasks/:task_guid/remove_members',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-移除任务成员-移除任务成员。一次性可以移除多个成员。可以移除任务的负责人或者关注人。移除时，如果要移除的成员不是任务成员，会被自动忽略。本接口返回移除成员后的任务数据，包含移除后的任务成员列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id'),
            type: z.string().describe('成员的类型').optional(),
            role: z.string().describe('成员角色，支持"assignee"或者"follower"'),
          }),
        )
        .describe('要移除的member列表'),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要移除成员的任务全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskRemoveReminders = {
  project: 'task',
  name: 'task.v2.task.removeReminders',
  sdkName: 'task.v2.task.removeReminders',
  path: '/open-apis/task/v2/tasks/:task_guid/remove_reminders',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-移除任务提醒-将一个提醒从任务中移除。如果要移除的提醒本来就不存在，本接口将直接返回成功',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ reminder_ids: z.array(z.string()).describe('要移除的reminder的id列表') }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要移除提醒的任务全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskRemoveTasklist = {
  project: 'task',
  name: 'task.v2.task.removeTasklist',
  sdkName: 'task.v2.task.removeTasklist',
  path: '/open-apis/task/v2/tasks/:task_guid/remove_tasklist',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-任务-任务移出清单-将任务从一个清单中移出。返回任务详情。如果任务不在清单中，接口将返回成功',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ tasklist_guid: z.string().describe('要移除的清单的全局唯一ID') }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('要从清单移除的任务的全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskSubtaskCreate = {
  project: 'task',
  name: 'task.v2.taskSubtask.create',
  sdkName: 'task.v2.taskSubtask.create',
  path: '/open-apis/task/v2/tasks/:task_guid/subtasks',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-子任务-创建子任务-给一个任务创建一个子任务。接口功能除了额外需要输入父任务的GUID之外，和接口功能完全一致',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      summary: z.string().describe('任务标题'),
      description: z.string().describe('任务摘要').optional(),
      due: z
        .object({
          timestamp: z
            .string()
            .describe(
              '截止时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果截止时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true',
            )
            .optional(),
          is_all_day: z
            .boolean()
            .describe('是否截止到一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
            .optional(),
        })
        .describe('任务截止时间戳(ms)，截止时间戳和截止日期选择一个填写')
        .optional(),
      origin: z
        .object({
          platform_i18n_name: z
            .object({
              en_us: z.string().describe('英文').optional(),
              zh_cn: z.string().describe('中文').optional(),
              zh_hk: z.string().describe('中文（香港地区）').optional(),
              zh_tw: z.string().describe('中文（台湾地区）').optional(),
              ja_jp: z.string().describe('日语').optional(),
              fr_fr: z.string().describe('法语').optional(),
              it_it: z.string().describe('意大利语').optional(),
              de_de: z.string().describe('德语').optional(),
              ru_ru: z.string().describe('俄语').optional(),
              th_th: z.string().describe('泰语').optional(),
              es_es: z.string().describe('西班牙语').optional(),
              ko_kr: z.string().describe('韩语').optional(),
            })
            .describe('任务导入来源的名称，用于在任务中心详情页展示。需提供多语言版本')
            .optional(),
          href: z
            .object({
              url: z.string().describe('链接对应的地址').optional(),
              title: z.string().describe('链接对应的标题').optional(),
            })
            .describe('任务关联的来源平台详情页链接')
            .optional(),
        })
        .describe(
          '任务关联的第三方平台来源信息。详见',
        )
        .optional(),
      extra: z.string().describe('调用者可以传入的任意附带到任务上的数据。在获取任务详情时会原样返回').optional(),
      completed_at: z.string().describe('任务的完成时刻时间戳(ms)').optional(),
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id').optional(),
            type: z.string().describe('成员的类型').optional(),
            role: z.string().describe('成员角色，支持"assignee"或者"follower"').optional(),
          }),
        )
        .describe('任务成员列表')
        .optional(),
      repeat_rule: z
        .string()
        .describe(
          '如果设置，则该任务为“重复任务”。该字段表示了重复任务的重复规则。详见中的“如何使用重复任务？”章节',
        )
        .optional(),
      custom_complete: z
        .object({
          pc: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示为')
                .optional(),
            })
            .describe('pc客户端自定义完成配置（含mac和windows）')
            .optional(),
          ios: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示为')
                .optional(),
            })
            .describe('飞书ios端的自定义完成配置')
            .optional(),
          android: z
            .object({
              href: z.string().describe('自定义完成的跳转url').optional(),
              tip: z
                .object({
                  en_us: z.string().describe('英文').optional(),
                  zh_cn: z.string().describe('中文').optional(),
                  zh_hk: z.string().describe('中文（香港地区）').optional(),
                  zh_tw: z.string().describe('中文（台湾地区）').optional(),
                  ja_jp: z.string().describe('日语').optional(),
                  fr_fr: z.string().describe('法语').optional(),
                  it_it: z.string().describe('意大利语').optional(),
                  de_de: z.string().describe('德语').optional(),
                  ru_ru: z.string().describe('俄语').optional(),
                  th_th: z.string().describe('泰语').optional(),
                  es_es: z.string().describe('西班牙语').optional(),
                  ko_kr: z.string().describe('韩语').optional(),
                })
                .describe('自定义完成的弹出提示为')
                .optional(),
            })
            .describe('飞书android端的自定义完成配置')
            .optional(),
        })
        .describe(
          '任务自定义完成规则。详见中的“如何使用自定义完成？”章节',
        )
        .optional(),
      tasklists: z
        .array(
          z.object({
            tasklist_guid: z.string().describe('任务要加入的清单的GUID').optional(),
            section_guid: z
              .string()
              .describe(
                '任务所在清单的自定义分组GUID。如果设置了清单GUID但没有设置自定义分组GUID，则自动加入该清单的默认分组',
              )
              .optional(),
          }),
        )
        .describe('任务所在清单的信息。如果设置，则表示创建的任务要直接加入到指定清单')
        .optional(),
      client_token: z
        .string()
        .describe(
          '幂等token。如果提供则触发后端实现幂等行为。详见中的“ 幂等调用 ”章节',
        )
        .optional(),
      start: z
        .object({
          timestamp: z
            .string()
            .describe(
              '开始时间/日期的时间戳，距1970-01-01 00:00:00的毫秒数。如果开始时间是一个日期，需要把日期转换成时间戳，并设置 is_all_day=true',
            )
            .optional(),
          is_all_day: z
            .boolean()
            .describe('是否开始于一个日期。如果设为true，timestamp中只有日期的部分会被解析和存储')
            .optional(),
        })
        .describe('任务的开始时间(ms)')
        .optional(),
      reminders: z
        .array(
          z.object({
            relative_fire_minute: z
              .number()
              .describe('相对于截止时间的提醒时间分钟数。例如30表示截止时间前30分钟提醒；0表示截止时提醒'),
          }),
        )
        .describe('任务提醒')
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ task_guid: z.string().describe('父任务GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskSubtaskList = {
  project: 'task',
  name: 'task.v2.taskSubtask.list',
  sdkName: 'task.v2.taskSubtask.list',
  path: '/open-apis/task/v2/tasks/:task_guid/subtasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-子任务-获取任务的子任务列表-获取一个任务的子任务列表。支持分页，数据按照子任务在界面上的顺序返回',
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
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    path: z.object({ task_guid: z.string().describe('父任务的全局唯一ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TaskTasklists = {
  project: 'task',
  name: 'task.v2.task.tasklists',
  sdkName: 'task.v2.task.tasklists',
  path: '/open-apis/task/v2/tasks/:task_guid/tasklists',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-任务-列取任务所在清单-列取一个任务所在的所有清单的信息，包括清单的GUID和所在自定义分组的GUID。只有调用身份有权限访问的清单信息会被返回',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_guid: z.string().describe('要获取清单列表的任务的全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistActivitySubscriptionCreate = {
  project: 'task',
  name: 'task.v2.tasklistActivitySubscription.create',
  sdkName: 'task.v2.tasklistActivitySubscription.create',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-清单动态订阅-创建动态订阅-为一个清单创建一个订阅。每个订阅可以包含1个或多个订阅者（目前只支持普通群组）。订阅创建后，如清单发生相应的事件，则会向订阅里的订阅者发送通知消息。一个清单最多可以创建50个订阅。每个订阅最大支持50个订阅者。订阅者目前仅支持"chat"类型。每个订阅可以通过设置`include_keys`可以针对哪些事件(event_key)做通知。如果`include_keys`为空，则不对任何事件进行通知。如有需要，创建时也可以直接将`disabled`设为true，创建一个禁止发送订阅通知的订阅',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('订阅名称，不能为空，最大50个字符'),
      subscribers: z
        .array(
          z.object({
            id: z.string().describe('表示member的id').optional(),
            type: z.string().describe('成员的类型 （目前仅支持chat）').optional(),
          }),
        )
        .describe('订阅者列表'),
      include_keys: z
        .array(z.number())
        .describe(
          '订阅的event key列表。每个event key用一个数字表示。目前支持下列event key：- 100: 任务添加入清单- 101: 任务从清单被移除- 103: 任务被完成- 104: 任务恢复为未完成- 109: 任务添加了负责人- 110: 任务更新了负责人- 111: 任务移除了负责人- 119: 任务添加了附件- 121: 任务中添加了新评论- 122: 任务中对评论进行回复- 129: 任务设置了新的开始时间- 130: 任务设置了新的截止时间- 131: 任务同时设置了新的开始/截止时间- 132: 任务同时移除了开始/截止时间该字段可以设置为空数组（即不对任何event进行通知）；输入的`include_keys`的元素不能重复',
        ),
      disabled: z.boolean().describe('该订阅是否为停用').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ tasklist_guid: z.string().describe('清单GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistActivitySubscriptionDelete = {
  project: 'task',
  name: 'task.v2.tasklistActivitySubscription.delete',
  sdkName: 'task.v2.tasklistActivitySubscription.delete',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-任务-清单动态订阅-删除动态订阅-给定一个清单的GUID和一个订阅的GUID，将其删除。删除后的数据不可恢复',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      tasklist_guid: z
        .string()
        .describe(
          '清单GUID。可以通过，或者通过接口查询得到',
        ),
      activity_subscription_guid: z
        .string()
        .describe(
          '要删除的订阅GUID。可以通过接口创建，或者通过查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistActivitySubscriptionGet = {
  project: 'task',
  name: 'task.v2.tasklistActivitySubscription.get',
  sdkName: 'task.v2.tasklistActivitySubscription.get',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-清单动态订阅-获取动态订阅-提供一个清单的GUID和一个订阅的GUID，获取该订阅的详细信息，包括名称，订阅者，可通知的event key列表等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      tasklist_guid: z
        .string()
        .describe(
          '清单GUID。可以通过，或者通过接口查询得到',
        ),
      activity_subscription_guid: z
        .string()
        .describe(
          '订阅GUID。可以通过接口创建，或者通过查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistActivitySubscriptionList = {
  project: 'task',
  name: 'task.v2.tasklistActivitySubscription.list',
  sdkName: 'task.v2.tasklistActivitySubscription.list',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-清单动态订阅-列取动态订阅-给定一个清单的GUID，获取其所有的订阅信息。结果按照订阅的创建时间排序',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      limit: z.number().describe('返回结果的最大数量').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      tasklist_guid: z
        .string()
        .describe(
          '清单GUID。可以通过，或者通过接口查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistActivitySubscriptionPatch = {
  project: 'task',
  name: 'task.v2.tasklistActivitySubscription.patch',
  sdkName: 'task.v2.tasklistActivitySubscription.patch',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/activity_subscriptions/:activity_subscription_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-清单动态订阅-更新动态订阅-提供一个清单的GUID和一个动态订阅的GUID，对其进行更新。更新时，将`update_fields`字段中填写所有要修改的字段名，同时在`activity_subscription`字段中填写要修改的字段的新值即可。`update_fields`支持更新的字段包括：* name：订阅的名称* subscribers: 订阅者列表。如更新，会将旧的订阅者列表完全替换为新的订阅者列表。支持最大50个订阅者。并且订阅者必须是chat类型。* include_keys ：订阅需要发送通知的key。如更新，会将旧的列表完全替换为新的include_keys列表。只能设置支持的event key (见字段描述）。* disabled：修改订阅的开启/禁用状态',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      activity_subscription: z
        .object({
          name: z.string().describe('订阅名称，如更新，不能为空，最大支持50个字符').optional(),
          subscribers: z
            .array(
              z.object({
                id: z.string().describe('表示member的id').optional(),
                type: z.string().describe('成员的类型。目前只支持群组').optional(),
              }),
            )
            .describe('订阅者列表。如更新，最大支持50个订阅者')
            .optional(),
          include_keys: z
            .array(z.number())
            .describe(
              '要订阅的清单动态event key列表。每个event key用一个数字表示。目前支持下列event key：- 100: 任务添加入清单- 101: 任务从清单被移除- 103: 任务被完成- 104: 任务恢复为未完成- 109: 任务添加了负责人- 110: 任务更新了负责人- 111: 任务移除了负责人- 119: 任务添加了附件- 121: 任务中添加了新评论- 122: 任务中对评论进行回复- 129: 任务设置了新的开始时间- 130: 任务设置了新的截止时间- 131: 任务同时设置了新的开始/截止时间- 132: 任务同时移除了开始/截止时间该字段可以设置为空数组（即不对任何event进行通知）；输入的`include_keys`的元素不能重复',
            )
            .optional(),
          disabled: z.boolean().describe('该订阅是否为停用').optional(),
        })
        .describe('要更新的订阅数据'),
      update_fields: z
        .array(
          z
            .enum(['name', 'include_keys', 'subscribers', 'disabled'])
            .describe(
              'Options:name(订阅名称),include_keys(订阅的事件类型列表),subscribers(订阅成员列表),disabled(是否禁用该订阅)',
            ),
        )
        .describe('要更新的字段列表'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      tasklist_guid: z
        .string()
        .describe(
          '清单GUID。可以通过，或者通过接口查询得到',
        ),
      activity_subscription_guid: z
        .string()
        .describe(
          '要更新的动态订阅GUID。可以通过接口创建，或者通过查询得到',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistAddMembers = {
  project: 'task',
  name: 'task.v2.tasklist.addMembers',
  sdkName: 'task.v2.tasklist.addMembers',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/add_members',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-清单-添加清单成员-向一个清单添加1个或多个协作成员。成员信息通过设置`members`字段实现。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节。一个清单协作成员可以是一个用户，应用或者群组。每个成员可以设置“可编辑”或者“可阅读”的角色。群组作为协作成员表示该群里所有群成员都自动拥有群组协作成员的角色。如果要添加的成员已经是清单成员，且角色和请求中设置是一样的，则会被自动忽略，接口返回成功。如果要添加的成员已经是清单成员，且角色和请求中设置是不一样的（比如原来的角色是可阅读，请求中设为可编辑），则相当于更新其角色。如果要添加的成员已经是清单的所有者，则会被自动忽略。接口返回成功。其所有者的角色不会改变。本接口不能用来设置清单所有者，如要设置，可以使用接口',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id').optional(),
            type: z
              .string()
              .describe(
                '成员的类型，支持：<md-enum><md-enum-item key="user">普通用户，此时member的id是一个表示用户的ID，比如open_id。具体格式取决于user_id_type参数</md-enum-item><md-enum-item key="chat">群组，此时member的id是一个Open Chat ID</md-enum-item><md-enum-item key="app">应用，此时member的id是一个应用的ID</md-enum-item></md-enum>',
              )
              .optional(),
            role: z
              .string()
              .describe(
                '成员角色。支持：<md-enum><md-enum-item key="editor" >可编辑</md-enum-item><md-enum-item key="viewer" >可阅读</md-enum-item></md-enum>默认为"viewer"。不能通过该字段设置清单所有者角色',
              )
              .optional(),
          }),
        )
        .describe(
          '要添加的成员列表。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节',
        ),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ tasklist_guid: z.string().describe('要添加成员的清单的全局唯一ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistCreate = {
  project: 'task',
  name: 'task.v2.tasklist.create',
  sdkName: 'task.v2.tasklist.create',
  path: '/open-apis/task/v2/tasklists',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-清单-创建清单-创建一个清单。清单可以用于组织和管理属于同一个项目的多个任务。创建时，必须填写清单的名字。同时，可以设置通过`members`字段设置清单的协作成员。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节。创建清单后，创建人自动成为清单的所有者。如果请求同时将创建人设置为可编辑/可阅读角色，则最终该用户成为清单所有者，并自动从清单成员列表中消失。因为同一个用户在同一个清单只能拥有一个角色',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('清单名称，必填。最多100个字符'),
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id').optional(),
            type: z
              .string()
              .describe(
                '成员的类型，支持:<md-enum><md-enum-item key="user">普通用户，此时member的id是一个表示用户的ID，比如open_id。具体格式取决于user_id_type参数</md-enum-item><md-enum-item key="chat">群组，此时member的id是一个Open Chat ID</md-enum-item><md-enum-item key="app">应用，此时member的id是一个应用的ID</md-enum-item></md-enum>',
              )
              .optional(),
            role: z
              .string()
              .describe('成员角色，可以是"editor"(可编辑）或者"viewer"（可阅读）。默认为"viewer"')
              .optional(),
          }),
        )
        .describe(
          '清单的成员列表。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistDelete = {
  project: 'task',
  name: 'task.v2.tasklist.delete',
  sdkName: 'task.v2.tasklist.delete',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-任务-清单-删除清单-删除一个清单。删除清单后，不可对该清单做任何操作，也无法再访问到清单。清单被删除后不可恢复',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ tasklist_guid: z.string().describe('要删除的清单GUID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistGet = {
  project: 'task',
  name: 'task.v2.tasklist.get',
  sdkName: 'task.v2.tasklist.get',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-任务-清单-获取清单详情-获取一个清单的详细信息，包括清单名，所有者，清单成员等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ tasklist_guid: z.string().describe('清单全局唯一GUID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistList = {
  project: 'task',
  name: 'task.v2.tasklist.list',
  sdkName: 'task.v2.tasklist.list',
  path: '/open-apis/task/v2/tasklists',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-任务-清单-获取清单列表-获取调用身份所有可读取的清单列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('每页返回的清单数量').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistPatch = {
  project: 'task',
  name: 'task.v2.tasklist.patch',
  sdkName: 'task.v2.tasklist.patch',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-任务-清单-更新清单-更新清单，可以更新清单的名字和所有者。更新清单时，将`update_fields`字段中填写所有要修改的清单字段名，同时在`tasklist`字段中填写要修改的字段的新值即可。更新调用规范详见中的“ 关于资源的更新”章节。支持更新的字段包括:* `name` - 清单名字* `owner` - 清单所有者更新清单所有者（owner）时，如果该成员已经是清单的“可编辑”或者“可阅读”角色，则该成员将直接升级为所有者角色，自动从清单的成员列表中消失。这是因为同一个用户在同一个清单中只能有一个角色。同时，支持使用`origin_owner_to_role`字段将原有所有者变为可编辑/可阅读角色或者直接退出清单。该接口不能用于更新清单的成员和增删清单中的任务。* 如要增删清单中的成员，可以使用和接口。* 如要增删清单中的任务，可以使用和[任务移出清单]( https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/task-v2/task/remove_tasklist)接口',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      tasklist: z
        .object({
          name: z.string().describe('清单名称。如要更新，不能设为空。最大100个字符').optional(),
          owner: z
            .object({
              id: z.string().describe('表示member的id').optional(),
              type: z.string().describe('成员的类型，可以是"user"或者"app"。所有者的类型不可以是"chat"').optional(),
              role: z.string().describe('成员角色，此时必须是"owner"').optional(),
            })
            .describe('更新的清单所有者')
            .optional(),
        })
        .describe('要更新清单的数据'),
      update_fields: z
        .array(z.string())
        .describe(
          '要更新的字段名，支持<md-enum><md-enum-item key="name" >更新清单名</md-enum-item><md-enum-item key="owner" >更新清单所有者</md-enum-item></md-enum>',
        ),
      origin_owner_to_role: z
        .enum(['editor', 'viewer', 'none'])
        .describe(
          '该字段表示如果更新了新的所有者，则将原所有者设为指定的新的角色。仅在更新清单所有者时生效。支持"editor", "viewer"和"none"。默认为"none"。如果不设置或设为"none"，原清单所有者将不具有任何清单的角色。如果没有通过其他渠道（比如通过协作群组间接授权），原清单所有者将失去对清单的所有权限。 Options:editor(原所有者变为可编辑角色),viewer(原所有者变为可阅读角色),none(原所有者直接退出清单)',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ tasklist_guid: z.string().describe('要更新的清单的全局唯一GUID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistRemoveMembers = {
  project: 'task',
  name: 'task.v2.tasklist.removeMembers',
  sdkName: 'task.v2.tasklist.removeMembers',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/remove_members',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-任务-清单-移除清单成员-移除清单的一个或多个协作成员。通过设置`members`字段表示要移除的成员信息。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节。清单中同一个成员只能有一个角色，通过的member的id和type可以唯一确定一个成员，因此请求参数中对于要删除的成员，不需要填写"role"字段。如果要移除的成员不在清单中，则被自动忽略，接口返回成功。该接口不能用于移除清单所有者。如果要移除的成员是清单所有者，则会被自动忽略。如要设置清单所有者，需要调用接口',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      members: z
        .array(
          z.object({
            id: z.string().describe('表示member的id').optional(),
            type: z
              .string()
              .describe(
                '成员的类型，支持：<md-enum><md-enum-item key="user" >普通用户，此时member的id是一个表示用户的ID，比如open_id。具体格式取决于user_id_type参数</md-enum-item><md-enum-item key="chat" >群组，此时member的id是一个Open Chat ID</md-enum-item><md-enum-item key="app" >应用，此时member的id是一个应用的ID</md-enum-item></md-enum>',
              )
              .optional(),
            role: z.string().describe('清单角色。移除清单成员时该字段不需要填写').optional(),
          }),
        )
        .describe(
          '要移除的member列表。关于member的格式，详见中的“ 如何表示任务和清单的成员？”章节',
        ),
    }),
    params: z.object({ user_id_type: z.string().describe('用户ID类型').optional() }),
    path: z.object({ tasklist_guid: z.string().describe('要移除协作人的清单全局唯一ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2TasklistTasks = {
  project: 'task',
  name: 'task.v2.tasklist.tasks',
  sdkName: 'task.v2.tasklist.tasks',
  path: '/open-apis/task/v2/tasklists/:tasklist_guid/tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-任务-清单-获取清单任务列表-获取一个清单的任务列表，返回任务的摘要信息。本接口支持分页。清单中的任务以“自定义拖拽”的顺序返回。本接口支持简单的按照任务的完成状态或者任务的创建时间范围过滤',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('每页返回的任务数量').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      completed: z
        .boolean()
        .describe(
          '只查看特定完成状态的任务，填写“true”表示返回已经完成的任务；“false”表示只返回未完成的任务；不填写表示不按完成状态过滤',
        )
        .optional(),
      created_from: z
        .string()
        .describe('任务创建的起始时间戳（ms），闭区间，不填写默认为首个任务的创建时间戳')
        .optional(),
      created_to: z
        .string()
        .describe('任务创建的结束时间戳（ms），闭区间，不填写默认为最后创建任务的创建时间戳')
        .optional(),
      user_id_type: z.string().describe('用户ID类型').optional(),
    }),
    path: z.object({ tasklist_guid: z.string().describe('要获取任务的清单全局唯一ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const taskV2Tools = [
  taskV2AttachmentDelete,
  taskV2AttachmentGet,
  taskV2AttachmentList,
  taskV2CommentCreate,
  taskV2CommentDelete,
  taskV2CommentGet,
  taskV2CommentList,
  taskV2CommentPatch,
  taskV2CustomFieldAdd,
  taskV2CustomFieldCreate,
  taskV2CustomFieldGet,
  taskV2CustomFieldList,
  taskV2CustomFieldOptionCreate,
  taskV2CustomFieldOptionPatch,
  taskV2CustomFieldPatch,
  taskV2CustomFieldRemove,
  taskV2SectionCreate,
  taskV2SectionDelete,
  taskV2SectionGet,
  taskV2SectionList,
  taskV2SectionPatch,
  taskV2SectionTasks,
  taskV2TaskAddDependencies,
  taskV2TaskAddMembers,
  taskV2TaskAddReminders,
  taskV2TaskAddTasklist,
  taskV2TaskCreate,
  taskV2TaskDelete,
  taskV2TaskGet,
  taskV2TaskList,
  taskV2TaskPatch,
  taskV2TaskRemoveDependencies,
  taskV2TaskRemoveMembers,
  taskV2TaskRemoveReminders,
  taskV2TaskRemoveTasklist,
  taskV2TaskSubtaskCreate,
  taskV2TaskSubtaskList,
  taskV2TaskTasklists,
  taskV2TasklistActivitySubscriptionCreate,
  taskV2TasklistActivitySubscriptionDelete,
  taskV2TasklistActivitySubscriptionGet,
  taskV2TasklistActivitySubscriptionList,
  taskV2TasklistActivitySubscriptionPatch,
  taskV2TasklistAddMembers,
  taskV2TasklistCreate,
  taskV2TasklistDelete,
  taskV2TasklistGet,
  taskV2TasklistList,
  taskV2TasklistPatch,
  taskV2TasklistRemoveMembers,
  taskV2TasklistTasks,
];
