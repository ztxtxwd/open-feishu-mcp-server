import { z } from 'zod';
export type lingoV1ToolName =
  | 'lingo.v1.classification.list'
  | 'lingo.v1.draft.create'
  | 'lingo.v1.draft.update'
  | 'lingo.v1.entity.create'
  | 'lingo.v1.entity.delete'
  | 'lingo.v1.entity.get'
  | 'lingo.v1.entity.highlight'
  | 'lingo.v1.entity.list'
  | 'lingo.v1.entity.match'
  | 'lingo.v1.entity.search'
  | 'lingo.v1.entity.update'
  | 'lingo.v1.repo.list';
export const lingoV1ClassificationList = {
  project: 'lingo',
  name: 'lingo.v1.classification.list',
  sdkName: 'lingo.v1.classification.list',
  path: '/open-apis/lingo/v1/classifications',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书词典-分类-获取词典分类-获取飞书词典当前分类。飞书词典目前为二级分类体系，每个词条可添加多个二级分类，但选择的二级分类必须从属于不同的一级分类',
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
      repo_id: z
        .string()
        .describe(
          '词库ID（不传默认范围为全员词库）如以应用身份获取非全员词库中的分类，需要在“词库设置”页面添加应用；若以用户身份获取非全员词库中的分类，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1DraftCreate = {
  project: 'lingo',
  name: 'lingo.v1.draft.create',
  sdkName: 'lingo.v1.draft.create',
  path: '/open-apis/lingo/v1/drafts',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书词典-草稿-创建草稿-草稿并非词条，而是指通过 API 发起创建新词条或更新现有词条的申请。词典管理员审核通过后，草稿将变为新的词条或覆盖已有词条',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z.string().describe('词条 ID （需要更新某个词条时填写，若是创建新词条可不填写）').optional(),
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('名称的展示范围'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('名称的展示范围'),
          }),
        )
        .describe('别名')
        .optional(),
      description: z
        .string()
        .describe('纯文本格式词条释义。注：description 和 rich_text 至少有一个，否则会报错：1540001')
        .optional(),
      related_meta: z
        .object({
          users: z
            .array(
              z.object({
                id: z.string().describe('格式根据 user_id_type 不同需要符合 open_id、user_id、union_id 格式的有效 id'),
                title: z.string().describe('备注').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('公开群 id') }))
            .describe('相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('文档标题').optional(),
                url: z.string().describe('文档 url').optional(),
              }),
            )
            .describe('飞书文档或飞书 wiki')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('值班号 id') }))
            .describe('飞书值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('其他网页链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('其他相关词条 id').optional() }))
            .describe('相关词条')
            .optional(),
          classifications: z
            .array(
              z.object({
                id: z.string().describe('二级分类 ID'),
                father_id: z.string().describe('对应一级分类 ID').optional(),
              }),
            )
            .describe('当前词条所属分类词条只能属于二级分类，且每个一级分类下只能选择一个二级分类')
            .optional(),
          images: z
            .array(z.object({ token: z.string().describe('通过文件接口上传图片后，获得的图片 token') }))
            .describe('上传的相关图片')
            .optional(),
        })
        .describe('词条相关信息')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('数据提供方（不能包含中横线 "-"）'),
          outer_id: z
            .string()
            .describe('唯一标识，可用来和其他平台的内容进行绑定。需保证和百科词条唯一对应（不能包含中横线 "-"）'),
        })
        .describe('外部系统关联数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
      i18n_descs: z
        .array(
          z.object({
            language: z.number().describe('语言类型 Options:1(ZH_CN 中文),2(EN_US 英文),3(JA_JP 日文)'),
            description: z.string().describe('纯文本释义').optional(),
            rich_text: z.string().describe('富文本描述').optional(),
          }),
        )
        .describe('国际化的词条释义')
        .optional(),
    }),
    params: z.object({
      repo_id: z
        .string()
        .describe(
          '词库ID（需要在指定词库创建草稿时填写，不填写默认创建至全员词库）如以应用身份创建草稿到非全员词库，需要在“词库设置”页面添加应用；若以用户身份创建草稿到非全员词库，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1DraftUpdate = {
  project: 'lingo',
  name: 'lingo.v1.draft.update',
  sdkName: 'lingo.v1.draft.update',
  path: '/open-apis/lingo/v1/drafts/:draft_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-飞书词典-草稿-更新草稿-根据 draft_id 更新草稿内容，已审批的草稿无法编辑',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z.string().describe('词条 ID （需要更新某个词条时填写，若是创建新词条可不填写）').optional(),
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('别名')
        .optional(),
      description: z.string().describe('详情描述').optional(),
      related_meta: z
        .object({
          users: z
            .array(z.object({ id: z.string().describe('数据 id'), title: z.string().describe('标题').optional() }))
            .describe('关联用户信息')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('数据 id') }))
            .describe('关联群组信息')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('关联文档信息')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('数据 id') }))
            .describe('关联值班者信息')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('关联链接信息')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关其他词条 id').optional() }))
            .describe('相关词条信息')
            .optional(),
          classifications: z
            .array(
              z.object({
                id: z.string().describe('二级分类 ID'),
                father_id: z.string().describe('对应一级分类 ID').optional(),
              }),
            )
            .describe('当前词条所属分类词条只能属于二级分类，且每个一级分类下只能选择一个二级分类')
            .optional(),
          images: z
            .array(z.object({ token: z.string().describe('通过文件接口上传后的图片 token') }))
            .describe('上传的相关图片')
            .optional(),
        })
        .describe('相关数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
      i18n_descs: z
        .array(
          z.object({
            language: z.number().describe('语言类型 Options:1(ZH_CN 中文),2(EN_US 英文),3(JA_JP 日文)'),
            description: z.string().describe('纯文本释义').optional(),
            rich_text: z.string().describe('富文本描述').optional(),
          }),
        )
        .describe('国际化的词条释义')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ draft_id: z.string().describe('草稿ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntityCreate = {
  project: 'lingo',
  name: 'lingo.v1.entity.create',
  sdkName: 'lingo.v1.entity.create',
  path: '/open-apis/lingo/v1/entities',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书词典-词条-创建免审词条-通过此接口创建的词条，无需经过词典管理员审核，直接写入词库。因此，调用此接口时，应当慎重操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('别名')
        .optional(),
      description: z
        .string()
        .describe('纯文本格式词条释义。注：description 和 rich_text 至少有一个，否则会报错：1540001')
        .optional(),
      related_meta: z
        .object({
          users: z
            .array(
              z.object({
                id: z.string().describe('格式根据 user_id_type 不同需要符合 open_id、user_id、union_id 格式的有效 id'),
                title: z.string().describe('备注').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('公开群 id') }))
            .describe('有关的公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('文档标题').optional(),
                url: z.string().describe('文档 url').optional(),
              }),
            )
            .describe('飞书文档或飞书 wiki')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('值班号 id') }))
            .describe('飞书值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('网页链接').optional(),
              }),
            )
            .describe('其他网页链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('其他相关词条 id').optional() }))
            .describe('相关词条')
            .optional(),
          classifications: z
            .array(
              z.object({
                id: z.string().describe('二级分类 ID'),
                father_id: z.string().describe('对应一级分类 ID').optional(),
              }),
            )
            .describe('当前词条所属分类词条只能属于二级分类，且每个一级分类下只能选择一个二级分类')
            .optional(),
          images: z
            .array(z.object({ token: z.string().describe('通过文件接口上传后的图片 token') }))
            .describe('上传的相关图片')
            .optional(),
        })
        .describe('词条相关信息')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('数据提供方（不能包含中横线 "-"）'),
          outer_id: z.string().describe('词条在外部系统中对应的唯一 ID（不能包含中横线 "-"）'),
        })
        .describe('外部系统关联数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分**注意**：富文本格式至少需要包含一个 `<p>` 标签，否则请求会报错',
        )
        .optional(),
      i18n_descs: z
        .array(
          z.object({
            language: z.number().describe('语言类型 Options:1(ZH_CN 中文),2(EN_US 英文),3(JA_JP 日文)'),
            description: z.string().describe('纯文本释义').optional(),
            rich_text: z.string().describe('富文本描述').optional(),
          }),
        )
        .describe('国际化的词条释义')
        .optional(),
    }),
    params: z.object({
      repo_id: z
        .string()
        .describe(
          '词库 ID（需要在指定词库创建词条时传入，不传时默认创建至全员词库）如以应用身份创建词条到非全员词库，需要在“词库设置”页面添加应用；若以用户身份创建词条到非全员词库，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const lingoV1EntityDelete = {
  project: 'lingo',
  name: 'lingo.v1.entity.delete',
  sdkName: 'lingo.v1.entity.delete',
  path: '/open-apis/lingo/v1/entities/:entity_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-飞书词典-词条-删除免审词条-通过 entity_id 删除已有的词条，无需经过词典管理员审核。因此，调用该接口时应当慎重操作',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      provider: z
        .string()
        .describe('外部系统（使用时需要将路径中的词条 ID 固定为：enterprise_0，且提供 provider 和 outer_id）')
        .optional(),
      outer_id: z
        .string()
        .describe(
          '词条在外部系统中对应的唯一 ID（使用时需要将路径中的词条 ID 固定为：enterprise_0，且提供 provider 和 outer_id）',
        )
        .optional(),
    }),
    path: z.object({ entity_id: z.string().describe('词条 ID') }),
  },
};
export const lingoV1EntityGet = {
  project: 'lingo',
  name: 'lingo.v1.entity.get',
  sdkName: 'lingo.v1.entity.get',
  path: '/open-apis/lingo/v1/entities/:entity_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书词典-词条-获取词条详情-通过词条 id 拉取对应的词条详情信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      provider: z.string().describe('外部系统').optional(),
      outer_id: z.string().describe('词条在外部系统中对应的唯一 ID').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ entity_id: z.string().describe('词条 ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntityHighlight = {
  project: 'lingo',
  name: 'lingo.v1.entity.highlight',
  sdkName: 'lingo.v1.entity.highlight',
  path: '/open-apis/lingo/v1/entities/highlight',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书词典-词条-词条高亮-传入一句话，智能识别句中对应的词条，并返回词条位置和 entity_id，可在外部系统中快速实现词条智能高亮',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ text: z.string().describe('需要识别词条的内容（不超过1000字）') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntityList = {
  project: 'lingo',
  name: 'lingo.v1.entity.list',
  sdkName: 'lingo.v1.entity.list',
  path: '/open-apis/lingo/v1/entities',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书词典-词条-获取词条列表-分页拉取词条列表数据，支持拉取租户内(或指定词库内)的全部词条',
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
      provider: z.string().describe('相关外部系统【可用来过滤词条数据】').optional(),
      repo_id: z
        .string()
        .describe(
          '词库 id(不传时默认返回全员词库数据)如以应用身份拉取非全员词库的词条，需要在“词库设置”页面添加应用；若以用户身份拉取非全员词库的词条，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntityMatch = {
  project: 'lingo',
  name: 'lingo.v1.entity.match',
  sdkName: 'lingo.v1.entity.match',
  path: '/open-apis/lingo/v1/entities/match',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书词典-词条-精准搜索词条-将关键词与词条名、别名精准匹配，并返回对应的 词条 ID',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ word: z.string().describe('搜索关键词，将与词条名、别名进行精准匹配') }),
    params: z.object({
      repo_id: z
        .string()
        .describe(
          '词库ID(不传时默认在全员词库内搜索)如以应用身份搜索非全员词库中的词条，需要在“词库设置”页面添加应用；若以用户身份搜索非全员词库中的词条，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntitySearch = {
  project: 'lingo',
  name: 'lingo.v1.entity.search',
  sdkName: 'lingo.v1.entity.search',
  path: '/open-apis/lingo/v1/entities/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书词典-词条-模糊搜索词条-传入关键词，与词条名、别名、释义等信息进行模糊匹配，返回搜到的词条信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      query: z.string().describe('搜索关键词').optional(),
      classification_filter: z
        .object({
          include: z.array(z.string()).describe('需要获取的分类').optional(),
          exclude: z.array(z.string()).describe('需要排除的分类').optional(),
        })
        .describe('分类筛选')
        .optional(),
      sources: z
        .array(z.number())
        .describe('词条的创建来源，1：用户主动创建，2：批量导入，3：官方词，4：OpenAPI 创建')
        .optional(),
      creators: z.array(z.string()).describe('创建者').optional(),
    }),
    params: z.object({
      page_size: z.number().describe('每页返回的词条量').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      repo_id: z
        .string()
        .describe(
          '词库ID(不传时默认在全员词库内搜索)如以应用身份搜索非全员词库中的词条，需要在“词库设置”页面添加应用；若以用户身份搜索非全员词库中的词条，该用户需要拥有对应词库的可见权限',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1EntityUpdate = {
  project: 'lingo',
  name: 'lingo.v1.entity.update',
  sdkName: 'lingo.v1.entity.update',
  path: '/open-apis/lingo/v1/entities/:entity_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书词典-词条-更新免审词条-通过此接口更新已有的词条，无需经过词典管理员审核，直接写入词库。因此，调用该接口时应当慎重操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('是否允许在 IM 和 Doc 等场景进行高亮提示'),
                allow_search: z.boolean().describe('是否允许在飞书中被搜索到'),
              })
              .describe('展示状态'),
          }),
        )
        .describe('别名')
        .optional(),
      description: z.string().describe('详情描述').optional(),
      related_meta: z
        .object({
          users: z
            .array(
              z.object({ id: z.string().describe('对应相关信息 ID'), title: z.string().describe('标题').optional() }),
            )
            .describe('关联用户信息')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('关联文档信息')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关其他词条 id').optional() }))
            .describe('相关词条信息')
            .optional(),
          classifications: z
            .array(
              z.object({
                id: z.string().describe('二级分类 ID'),
                father_id: z.string().describe('对应一级分类 ID').optional(),
              }),
            )
            .describe('当前词条所属分类词条只能属于二级分类，且每个一级分类下只能选择一个二级分类')
            .optional(),
          images: z
            .array(z.object({ token: z.string().describe('通过文件接口上传后的图片 token') }))
            .describe('上传的相关图片')
            .optional(),
        })
        .describe('相关数据')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('数据提供方（不能包含中横线 "-"）'),
          outer_id: z
            .string()
            .describe('唯一标识，可用来和其他平台的内容进行绑定。需保证和百科词条唯一对应（不能包含中横线 "-"）'),
        })
        .describe('外部 id 关联数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
      i18n_descs: z
        .array(
          z.object({
            language: z.number().describe('语言类型 Options:1(ZH_CN 中文),2(EN_US 英文),3(JA_JP 日文)'),
            description: z.string().describe('纯文本释义').optional(),
            rich_text: z.string().describe('富文本描述').optional(),
          }),
        )
        .describe('国际化的词条释义')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ entity_id: z.string().describe('词条 ID').optional() }),
  },
};
export const lingoV1RepoList = {
  project: 'lingo',
  name: 'lingo.v1.repo.list',
  sdkName: 'lingo.v1.repo.list',
  path: '/open-apis/lingo/v1/repos',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书词典-词库-获取词库列表-获取有权限访问的飞书词典词库列表。如以应用身份获取，需要在“词库设置”页面添加应用；若以用户身份获取，该用户需要拥有对应词库的可见权限',
  accessTokens: ['tenant', 'user'],
  schema: {
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const lingoV1Tools = [
  lingoV1ClassificationList,
  lingoV1DraftCreate,
  lingoV1DraftUpdate,
  lingoV1EntityCreate,
  lingoV1EntityDelete,
  lingoV1EntityGet,
  lingoV1EntityHighlight,
  lingoV1EntityList,
  lingoV1EntityMatch,
  lingoV1EntitySearch,
  lingoV1EntityUpdate,
  lingoV1RepoList,
];
