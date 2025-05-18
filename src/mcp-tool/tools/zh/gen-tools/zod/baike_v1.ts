import { z } from 'zod';
export type baikeV1ToolName =
  | 'baike.v1.classification.list'
  | 'baike.v1.draft.create'
  | 'baike.v1.draft.update'
  | 'baike.v1.entity.create'
  | 'baike.v1.entity.extract'
  | 'baike.v1.entity.get'
  | 'baike.v1.entity.highlight'
  | 'baike.v1.entity.list'
  | 'baike.v1.entity.match'
  | 'baike.v1.entity.search'
  | 'baike.v1.entity.update';
export const baikeV1ClassificationList = {
  project: 'baike',
  name: 'baike.v1.classification.list',
  sdkName: 'baike.v1.classification.list',
  path: '/open-apis/baike/v1/classifications',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-分类-获取词典分类-获取飞书词典当前分类。飞书词典目前为二级分类体系，每个词条可添加多个二级分类，但选择的二级分类必须从属于不同的一级分类',
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
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1DraftCreate = {
  project: 'baike',
  name: 'baike.v1.draft.create',
  sdkName: 'baike.v1.draft.create',
  path: '/open-apis/baike/v1/drafts',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-草稿-创建草稿-草稿并非词条，而是指通过 API 发起创建新词条或更新现有词条的申请。词典管理员审核通过后，草稿将变为新的词条或覆盖已有词条',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z.string().describe('词条 ID （需要更新某个词条时填写，若是创建新词条可不填写）').optional(),
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
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
                id: z.string().describe('对应相关信息 ID'),
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关云文档')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关词条 ID').optional() }))
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
            .describe('上传的图片')
            .optional(),
        })
        .describe('更多相关信息')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('外部系统（不能包含中横线 "-"）'),
          outer_id: z.string().describe('词条在外部系统中对应的唯一 ID（不能包含中横线 "-"）'),
        })
        .describe('外部系统关联数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1DraftUpdate = {
  project: 'baike',
  name: 'baike.v1.draft.update',
  sdkName: 'baike.v1.draft.update',
  path: '/open-apis/baike/v1/drafts/:draft_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-草稿-更新草稿-根据 draft_id 更新草稿内容，已审批的草稿无法编辑',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      id: z.string().describe('词条 ID （需要更新某个词条时填写，若是创建新词条可不填写）').optional(),
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
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
                id: z.string().describe('对应相关信息 ID'),
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关云文档')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关词条 ID').optional() }))
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
            .describe('上传的图片')
            .optional(),
        })
        .describe('更多相关信息')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ draft_id: z.string().describe('草稿 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityCreate = {
  project: 'baike',
  name: 'baike.v1.entity.create',
  sdkName: 'baike.v1.entity.create',
  path: '/open-apis/baike/v1/entities',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-创建免审词条-通过此接口创建的词条，无需经过词典管理员审核，直接写入词库。因此，调用此接口时，应当慎重操作',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
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
                id: z.string().describe('对应相关信息 ID'),
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关云文档')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关词条 ID').optional() }))
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
            .describe('上传的图片')
            .optional(),
        })
        .describe('更多相关信息')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('外部系统（不能包含中横线 "-"）'),
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
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityExtract = {
  project: 'baike',
  name: 'baike.v1.entity.extract',
  sdkName: 'baike.v1.entity.extract',
  path: '/open-apis/baike/v1/entities/extract',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-提取潜在的词条-提取文本中可能成为词条的词语，且不会过滤已经成为词条的词语。同时返回推荐的别名',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ text: z.string().describe('需要被提取词条的文本（不会过滤租户中已成为词条的内容）').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityGet = {
  project: 'baike',
  name: 'baike.v1.entity.get',
  sdkName: 'baike.v1.entity.get',
  path: '/open-apis/baike/v1/entities/:entity_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-获取词条详情-通过词条 id 拉取对应的词条详情信息',
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
export const baikeV1EntityHighlight = {
  project: 'baike',
  name: 'baike.v1.entity.highlight',
  sdkName: 'baike.v1.entity.highlight',
  path: '/open-apis/baike/v1/entities/highlight',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-词条高亮-传入一句话，智能识别句中对应的词条，并返回词条位置和 entity_id，可在外部系统中快速实现词条智能高亮',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ text: z.string().describe('需要识别词条的内容（不超过1000字）') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityList = {
  project: 'baike',
  name: 'baike.v1.entity.list',
  sdkName: 'baike.v1.entity.list',
  path: '/open-apis/baike/v1/entities',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-获取词条列表-分页拉取词条列表数据，支持拉取租户内的全部词条',
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
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityMatch = {
  project: 'baike',
  name: 'baike.v1.entity.match',
  sdkName: 'baike.v1.entity.match',
  path: '/open-apis/baike/v1/entities/match',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-精准搜索词条-将关键词与词条名、别名精准匹配，并返回对应的 词条 ID',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({ word: z.string().describe('搜索关键词，将与词条名、别名进行精准匹配') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntitySearch = {
  project: 'baike',
  name: 'baike.v1.entity.search',
  sdkName: 'baike.v1.entity.search',
  path: '/open-apis/baike/v1/entities/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-模糊搜索词条-传入关键词，与词条名、别名、释义等信息进行模糊匹配，返回搜到的词条信息',
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
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1EntityUpdate = {
  project: 'baike',
  name: 'baike.v1.entity.update',
  sdkName: 'baike.v1.entity.update',
  path: '/open-apis/baike/v1/entities/:entity_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-飞书词典-词条-更新免审词条-通过此接口更新已有的词条，无需经过词典管理员审核，直接写入词库。因此，调用该接口时应当慎重操作',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      main_keys: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
          }),
        )
        .describe('词条名'),
      aliases: z
        .array(
          z.object({
            key: z.string().describe('名称的值'),
            display_status: z
              .object({
                allow_highlight: z.boolean().describe('对应名称是否在消息/云文档高亮'),
                allow_search: z.boolean().describe('对应名称是否在搜索结果中展示'),
              })
              .describe('名称展示范围'),
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
                id: z.string().describe('对应相关信息 ID'),
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
              }),
            )
            .describe('相关联系人')
            .optional(),
          chats: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关公开群')
            .optional(),
          docs: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关云文档')
            .optional(),
          oncalls: z
            .array(z.object({ id: z.string().describe('对应相关信息 ID') }))
            .describe('相关服务中的相关值班号')
            .optional(),
          links: z
            .array(
              z.object({
                title: z.string().describe('对应相关信息的描述，如相关联系人的描述、相关链接的标题').optional(),
                url: z.string().describe('链接地址').optional(),
              }),
            )
            .describe('相关链接')
            .optional(),
          abbreviations: z
            .array(z.object({ id: z.string().describe('相关词条 ID').optional() }))
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
            .describe('上传的图片')
            .optional(),
        })
        .describe('更多相关信息')
        .optional(),
      outer_info: z
        .object({
          provider: z.string().describe('外部系统（不能包含中横线 "-"）'),
          outer_id: z.string().describe('词条在外部系统中对应的唯一 ID（不能包含中横线 "-"）'),
        })
        .describe('外部系统关联数据')
        .optional(),
      rich_text: z
        .string()
        .describe(
          '富文本格式（当填写富文本内容时，description字段将会失效可不填写），支持的格式参考中的释义部分',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ entity_id: z.string().describe('实体词 ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const baikeV1Tools = [
  baikeV1ClassificationList,
  baikeV1DraftCreate,
  baikeV1DraftUpdate,
  baikeV1EntityCreate,
  baikeV1EntityExtract,
  baikeV1EntityGet,
  baikeV1EntityHighlight,
  baikeV1EntityList,
  baikeV1EntityMatch,
  baikeV1EntitySearch,
  baikeV1EntityUpdate,
];
