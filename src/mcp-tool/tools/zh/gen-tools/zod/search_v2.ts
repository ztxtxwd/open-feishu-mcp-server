import { z } from 'zod';
export type searchV2ToolName =
  | 'search.v2.app.create'
  | 'search.v2.dataSource.create'
  | 'search.v2.dataSource.delete'
  | 'search.v2.dataSource.get'
  | 'search.v2.dataSourceItem.create'
  | 'search.v2.dataSourceItem.delete'
  | 'search.v2.dataSourceItem.get'
  | 'search.v2.dataSource.list'
  | 'search.v2.dataSource.patch'
  | 'search.v2.message.create'
  | 'search.v2.schema.create'
  | 'search.v2.schema.delete'
  | 'search.v2.schema.get'
  | 'search.v2.schema.patch';
export const searchV2AppCreate = {
  project: 'search',
  name: 'search.v2.app.create',
  sdkName: 'search.v2.app.create',
  path: '/open-apis/search/v2/app',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-搜索-套件搜索-搜索应用-用户可以通过关键字搜索到可见应用，应用可见性与套件内搜索一致',
  accessTokens: ['user'],
  schema: {
    data: z.object({ query: z.string().describe('搜索关键词') }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
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
export const searchV2DataSourceCreate = {
  project: 'search',
  name: 'search.v2.dataSource.create',
  sdkName: 'search.v2.dataSource.create',
  path: '/open-apis/search/v2/data_sources',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据源-创建数据源',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('data_source的展示名称'),
      state: z
        .number()
        .describe('数据源状态，0-已上线，1-未上线 Options:0(Online 已上线),1(Offline 未上线)')
        .optional(),
      description: z.string().describe('对于数据源的描述').optional(),
      icon_url: z.string().describe('数据源在 search tab 上的展示图标路径').optional(),
      template: z.string().describe('数据源采用的展示模版名称').optional(),
      searchable_fields: z.array(z.string()).describe('描述哪些字段可以被搜索').optional(),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('国际化字段：中文').optional(),
          en_us: z.string().describe('国际化字段：英文').optional(),
          ja_jp: z.string().describe('国际化字段：日文').optional(),
        })
        .describe('数据源的国际化展示名称')
        .optional(),
      i18n_description: z
        .object({
          zh_cn: z.string().describe('国际化字段：中文').optional(),
          en_us: z.string().describe('国际化字段：英文').optional(),
          ja_jp: z.string().describe('国际化字段：日文').optional(),
        })
        .describe('数据源的国际化描述')
        .optional(),
      schema_id: z.string().describe('数据源关联的 schema 标识').optional(),
      app_id: z.string().describe('datasource对应的开放平台应用id').optional(),
      connect_type: z
        .number()
        .describe(
          '搜索请求的接入方式 Options:0(Default 调用搜索请求时，使用的是飞书搜索接口),1(Callback 调用搜索请求时，使用的是自定义回调函数的Uri)',
        )
        .optional(),
      connector_param: z
        .object({
          callback_user_id_type: z
            .number()
            .describe(
              '回调时Request里面的id类型 Options:0(Unknown 不合法),1(UserID 用户在租户内的身份),2(OpenID 用户在应用内的身份),3(UnionID 用户在同一应用服务商所开发的多个应用下的统一身份)',
            )
            .optional(),
          callback_endpoint: z.string().describe('回调时的地址，必须为POST地址').optional(),
        })
        .describe('根据连接器类型不同所需要提供的相关参数')
        .optional(),
      enable_answer: z.boolean().describe('是否使用问答服务').optional(),
    }),
  },
};
export const searchV2DataSourceDelete = {
  project: 'search',
  name: 'search.v2.dataSource.delete',
  sdkName: 'search.v2.dataSource.delete',
  path: '/open-apis/search/v2/data_sources/:data_source_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据源-删除数据源',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ data_source_id: z.string().describe('数据源的唯一标识') }),
  },
};
export const searchV2DataSourceGet = {
  project: 'search',
  name: 'search.v2.dataSource.get',
  sdkName: 'search.v2.dataSource.get',
  path: '/open-apis/search/v2/data_sources/:data_source_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据源-获取数据源',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ data_source_id: z.string().describe('数据源的唯一标识') }),
  },
};
export const searchV2DataSourceItemCreate = {
  project: 'search',
  name: 'search.v2.dataSourceItem.create',
  sdkName: 'search.v2.dataSourceItem.create',
  path: '/open-apis/search/v2/data_sources/:data_source_id/items',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据项-为指定数据项创建索引',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      id: z.string().describe('item 在 datasource 中的唯一标识，只接受英文字母、数字和下划线'),
      acl: z
        .array(
          z.object({
            access: z
              .enum(['allow', 'deny'])
              .describe('权限类型，优先级：Deny > Allow Options:allow(允许访问),deny(禁止访问)')
              .optional(),
            value: z.string().describe('设置的权限值，依赖 type 描述').optional(),
            type: z
              .enum([
                'user_id',
                'open_id',
                'union_id',
                'department_id',
                'open_department_id',
                'group_id',
                'app_group_id',
                'user',
                'group',
              ])
              .describe(
                '权限值类型 Options:user_id(UserID 用户在租户内的身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction),open_id(OpenID 用户在应用内的身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction),union_id(UnionID 用户在同一应用开发商提供的多个应用间的统一身份ID，详细说明请参考：https://open.feishu.cn/document/home/user-identity-introduction/introduction),department_id(DepartmentID 部门在租户内的唯一ID，详细说明请参考：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0),open_department_id(OpenDepartmentID 部门在应用内的唯一ID，详细说明请参考：https://open.feishu.cn/document/uAjLw4CM/ukTMukTMukTM/reference/contact-v3/department/field-overview#23857fe0),group_id(GroupID GroupID（灰度中，对部分租户开放）),app_group_id(AppGroupID AppGroupID（灰度中，对部分租户开放）),user(同 UserID),group(同 GroupID)',
              )
              .optional(),
          }),
        )
        .describe('item 的访问权限控制'),
      metadata: z
        .object({
          title: z.string().describe('数据项标题'),
          source_url: z.string().describe('搜索命中的跳转地址'),
          create_time: z.number().describe('数据项的创建时间，采用 Unix 时间戳').optional(),
          update_time: z.number().describe('数据项的更新时间，采用 Unix 时间戳').optional(),
          source_url_mobile: z
            .string()
            .describe(
              '移动端搜索命中的跳转地址。如果您PC端和移动端有不同的跳转地址，可以在这里写入移动端专用的url，我们会在搜索时为您选择合适的地址',
            )
            .optional(),
        })
        .describe('item 的元信息'),
      structured_data: z.string().describe('结构化数据'),
      content: z
        .object({
          format: z.enum(['html', 'plaintext']).describe('内容的格式 Options:html(),plaintext()').optional(),
          content_data: z.string().describe('全文数据').optional(),
        })
        .describe('非结构化数据，如文档文本')
        .optional(),
    }),
    path: z.object({ data_source_id: z.string().describe('数据源的ID') }),
  },
};
export const searchV2DataSourceItemDelete = {
  project: 'search',
  name: 'search.v2.dataSourceItem.delete',
  sdkName: 'search.v2.dataSourceItem.delete',
  path: '/open-apis/search/v2/data_sources/:data_source_id/items/:item_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据项-删除数据项',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ data_source_id: z.string().describe('数据源的ID'), item_id: z.string().describe('数据记录的ID') }),
  },
};
export const searchV2DataSourceItemGet = {
  project: 'search',
  name: 'search.v2.dataSourceItem.get',
  sdkName: 'search.v2.dataSourceItem.get',
  path: '/open-apis/search/v2/data_sources/:data_source_id/items/:item_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据项-查询指定数据项-获取单个数据记录',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      data_source_id: z.string().describe('数据源的id').optional(),
      item_id: z
        .string()
        .describe(
          '数据记录的唯一标识**注意**：- 该字段大小写敏感。- 如果调用成功但返回结果为空数据，请检查该字段传值是否正确',
        )
        .optional(),
    }),
  },
};
export const searchV2DataSourceList = {
  project: 'search',
  name: 'search.v2.dataSource.list',
  sdkName: 'search.v2.dataSource.list',
  path: '/open-apis/search/v2/data_sources',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据源-批量获取数据源',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      view: z
        .number()
        .describe(
          '回包数据格式，0-全量数据；1-摘要数据。**注**：摘要数据仅包含"id"，"name"，"state"。 Options:0(FULL 全量数据),1(BASIC 摘要数据)',
        )
        .optional(),
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
export const searchV2DataSourcePatch = {
  project: 'search',
  name: 'search.v2.dataSource.patch',
  sdkName: 'search.v2.dataSource.patch',
  path: '/open-apis/search/v2/data_sources/:data_source_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据源-修改数据源',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('数据源的展示名称').optional(),
      state: z
        .number()
        .describe('数据源状态，0-已上线，1-未上线 Options:0(Online 已上线),1(Offline 未上线)')
        .optional(),
      description: z.string().describe('对于数据源的描述').optional(),
      icon_url: z.string().describe('数据源在 search tab 上的展示图标路径').optional(),
      i18n_name: z
        .object({
          zh_cn: z.string().describe('国际化字段：中文').optional(),
          en_us: z.string().describe('国际化字段：英文').optional(),
          ja_jp: z.string().describe('国际化字段：日文').optional(),
        })
        .describe(
          '数据源名称多语言配置，json格式，key为语言locale，value为对应文案，例如{"zh_cn":"测试数据源", "en_us":"Test DataSource"}',
        )
        .optional(),
      i18n_description: z
        .object({
          zh_cn: z.string().describe('国际化字段：中文').optional(),
          en_us: z.string().describe('国际化字段：英文').optional(),
          ja_jp: z.string().describe('国际化字段：日文').optional(),
        })
        .describe(
          '数据源描述多语言配置，json格式，key为语言locale，value为对应文案，例如{"zh_cn":"搜索测试数据源相关数据", "en_us":"Search data from Test DataSource"}',
        )
        .optional(),
      connector_param: z
        .object({
          callback_user_id_type: z
            .number()
            .describe(
              '回调时Request里面的id类型 Options:0(Unknown 不合法),1(UserID 用户在租户内的身份),2(OpenID 用户在应用内的身份),3(UnionID 用户在同一应用服务商所开发的多个应用下的统一身份)',
            )
            .optional(),
          callback_endpoint: z.string().describe('回调时的地址，必须为POST地址').optional(),
        })
        .describe('修改connector的相关配置')
        .optional(),
      enable_answer: z.boolean().describe('是否使用问答服务').optional(),
    }),
    path: z.object({ data_source_id: z.string().describe('数据源的唯一标识') }),
  },
};
export const searchV2MessageCreate = {
  project: 'search',
  name: 'search.v2.message.create',
  sdkName: 'search.v2.message.create',
  path: '/open-apis/search/v2/message',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-搜索-套件搜索-搜索消息-用户可以通过关键字搜索可见消息，可见性和套件内搜索一致',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      query: z.string().describe('搜索关键词'),
      from_ids: z.array(z.string().describe('消息来自user_id')).describe('消息来自user_id列表').optional(),
      chat_ids: z.array(z.string().describe('消息所在chat_id')).describe('消息所在chat_id列表').optional(),
      message_type: z
        .enum(['file', 'image', 'media'])
        .describe('消息类型(file/image/media) Options:file(文件),image(图片),media(视频)')
        .optional(),
      at_chatter_ids: z.array(z.string().describe('at用户user_id')).describe('at用户user_id列表').optional(),
      from_type: z.enum(['bot', 'user']).describe('消息来自类型(bot/user) Options:bot(机器人),user(用户)').optional(),
      chat_type: z
        .enum(['group_chat', 'p2p_chat'])
        .describe('会话类型(group_chat/p2p_chat) Options:group_chat(群聊),p2p_chat(单聊)')
        .optional(),
      start_time: z.string().describe('消息发送起始时间').optional(),
      end_time: z.string().describe('消息发送结束时间').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
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
export const searchV2SchemaCreate = {
  project: 'search',
  name: 'search.v2.schema.create',
  sdkName: 'search.v2.schema.create',
  path: '/open-apis/search/v2/schemas',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据范式-创建数据范式',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      properties: z
        .array(
          z.object({
            name: z.string().describe('属性名'),
            type: z
              .enum(['text', 'int', 'tag', 'timestamp', 'double', 'tinytext', 'user_ids'])
              .describe(
                '属性类型 Options:text(长文本类型),int(64位整数类型),tag(标签类型),timestamp(Unix 时间戳类型（单位为秒）),double(浮点数类型（小数）),tinytext(短文本类型，（utf8 编码）长度小于 140 的文本),user_ids(UserIDs 用户ID类型（数组类型）)',
              ),
            is_searchable: z.boolean().describe('该属性是否可用作搜索，默认为 false').optional(),
            is_sortable: z
              .boolean()
              .describe('该属性是否可用作搜索结果排序，默认为 false。如果为 true，需要再配置 sortOptions')
              .optional(),
            is_returnable: z
              .boolean()
              .describe('该属性是否可用作返回字段，为 false 时，该字段不会被召回和展示。默认为 false')
              .optional(),
            sort_options: z
              .object({
                priority: z
                  .number()
                  .describe(
                    '排序的优先级，可选范围为 0~4，0为最高优先级。如果优先级相同，则随机进行排序。默认为0 Options:0(Zero 最高优先级),1(One 次高优先级),2(Two 次次高优先级),3(Three 次低优先级),4(Four 最低优先级)',
                  )
                  .optional(),
                order: z
                  .enum(['asc', 'desc'])
                  .describe('排序的顺序。默认为 desc Options:asc(升序),desc(降序)')
                  .optional(),
              })
              .describe('属性排序的可选配置，当 is_sortable 为 true 时，该字段为必填字段')
              .optional(),
            type_definitions: z
              .object({
                tag: z
                  .array(
                    z.object({
                      name: z.string().describe('tag 对应的枚举值名称'),
                      color: z
                        .enum(['red', 'green', 'blue', 'grey', 'yellow'])
                        .describe(
                          '标签对应的颜色 Options:red(含警示性、敏感性的提示信息),green(表示成功、完成、完毕的提示信息),blue(组件架构、职能等中性信息),grey(中立系统提示信息（慎重使用）),yellow(焦点信息、推广性信息)',
                        ),
                      text: z.string().describe('标签中展示的文本'),
                    }),
                  )
                  .describe('标签类型的定义')
                  .optional(),
                user_ids: z
                  .object({
                    id_type: z
                      .enum(['open_id', 'union_id', 'user_id'])
                      .describe(
                        '用户身份类型 Options:open_id(OpenID 用户在应用内的身份),union_id(UnionID 用户在同一应用服务商所开发的多个应用下的统一身份),user_id(UserID 用户在租户内的身份)',
                      ),
                  })
                  .describe('用户身份标识')
                  .optional(),
              })
              .describe('相关类型数据的定义和约束')
              .optional(),
            search_options: z
              .object({
                enable_semantic_match: z
                  .boolean()
                  .describe('是否支持语义切词召回。默认不支持（推荐使用在长文本的场景）')
                  .optional(),
                enable_exact_match: z
                  .boolean()
                  .describe('是否支持精确匹配。默认不支持（推荐使用在短文本、需要精确查找的场景）')
                  .optional(),
                enable_prefix_match: z
                  .boolean()
                  .describe('是否支持前缀匹配（短文本的默认的分词/召回策略。前缀长度为 1-12）')
                  .optional(),
                enable_number_suffix_match: z
                  .boolean()
                  .describe(
                    '是否支持数据后缀匹配。默认不支持（推荐使用在短文本、有数字后缀查找的场景。后缀长度为3-12）',
                  )
                  .optional(),
                enable_camel_match: z
                  .boolean()
                  .describe('是否支持驼峰英文匹配。默认不支持（推荐使用在短文本，且包含驼峰形式英文的查找场景）')
                  .optional(),
              })
              .describe('属性搜索的可选配置，当 is_searchable 为 true 时，该字段为必填参数')
              .optional(),
            is_filterable: z
              .boolean()
              .describe('该属性是否可用作返回字段，为 false 时，该字段不会被筛选。默认为 false')
              .optional(),
            filter_options: z
              .object({
                display_name: z.string().describe('筛选器展示名称'),
                i18n_display_name: z
                  .object({
                    zh_cn: z.string().describe('国际化字段：中文').optional(),
                    en_us: z.string().describe('国际化字段：英文').optional(),
                    ja_jp: z.string().describe('国际化字段：日文').optional(),
                  })
                  .describe('筛选器展示名称国际化字段')
                  .optional(),
                option_mode: z
                  .enum(['single', 'multiple'])
                  .describe(
                    '指明该筛选器支持单选或多选，默认单选 Options:single(该筛选器支持单选),multiple(该筛选器支持多选)',
                  )
                  .optional(),
                associated_smart_filter: z
                  .enum(['from', 'date'])
                  .describe(
                    '关联的综合筛选器。只有 filter_type 为"user"和"time"时可以关联。"user" -> "from"；"time" -> "date"。 Options:from(映射到综合“来自用户”筛选器),date(映射到综合“时间”筛选器)',
                  )
                  .optional(),
                filter_type: z
                  .enum(['user', 'time', 'searchable', 'predefine_enum'])
                  .describe(
                    '筛选器类型 Options:user(用户筛选器),time(时间筛选器),searchable(可搜筛选器),predefine_enum(PredefineEnum 预定义枚举筛选器)',
                  )
                  .optional(),
                predefine_enum_values: z
                  .array(
                    z.object({
                      name: z.string().describe('枚举值的标识。在多枚举值定义中保持唯一'),
                      text: z.string().describe('枚举值展示文案'),
                    }),
                  )
                  .describe('预定义的展示枚举值。在 filter_type 为 "predefine_enum" 时必须填写')
                  .optional(),
                enable_client_filter: z.boolean().describe('是否开启客户端筛选器').optional(),
                reference_datasource_id: z.string().describe('可搜筛选器关联的数据源标识').optional(),
              })
              .describe('属性筛选的可选配置，当 is_searchable 为 true 时，该字段为必填参数')
              .optional(),
            answer_option: z
              .object({
                is_searchable: z.boolean().describe('是否用于搜索').optional(),
                is_returnable: z.boolean().describe('是否用于返回').optional(),
              })
              .describe('问答产品设置，仅在datasource中enable_answer为true时生效')
              .optional(),
            desc: z.string().describe('字段描述').optional(),
          }),
        )
        .describe('数据范式的属性定义'),
      display: z
        .object({
          card_key: z
            .literal('search_common_card')
            .describe('搜索数据的展示卡片 Options:search_common_card(Common 普通 common 卡片)'),
          fields_mapping: z
            .array(
              z.object({
                display_field: z
                  .string()
                  .describe('展示字段名称，与 card_key 有关，每个模版能展示的字段不同。该字段不能重复'),
                data_field: z
                  .string()
                  .describe(
                    '数据字段的名称。需要确保该字段对应在 schema 属性定义中的 is_returnable 为 true，否则无法展示。需要使用 ${xxx} 的规则来描述',
                  ),
              }),
            )
            .describe('数据字段名称和展示字段名称的映射关系。如果没有设置，则只会展示 与展示字段名称同名的 数据字段')
            .optional(),
        })
        .describe('数据展示相关配置'),
      schema_id: z.string().describe('用户自定义数据范式的唯一标识'),
    }),
    params: z.object({ validate_only: z.boolean().describe('是否只用来校验合法性').optional() }),
  },
};
export const searchV2SchemaDelete = {
  project: 'search',
  name: 'search.v2.schema.delete',
  sdkName: 'search.v2.schema.delete',
  path: '/open-apis/search/v2/schemas/:schema_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据范式-删除数据范式',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ schema_id: z.string().describe('用户自定义数据范式的唯一标识') }),
  },
};
export const searchV2SchemaGet = {
  project: 'search',
  name: 'search.v2.schema.get',
  sdkName: 'search.v2.schema.get',
  path: '/open-apis/search/v2/schemas/:schema_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据范式-获取数据范式',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ schema_id: z.string().describe('用户自定义数据范式的唯一标识') }),
  },
};
export const searchV2SchemaPatch = {
  project: 'search',
  name: 'search.v2.schema.patch',
  sdkName: 'search.v2.schema.patch',
  path: '/open-apis/search/v2/schemas/:schema_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-搜索-搜索连接器-数据范式-修改数据范式',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      display: z
        .object({
          card_key: z
            .literal('search_common_card')
            .describe('搜索数据的展示卡片 Options:search_common_card(Common 普通 common 卡片)'),
          fields_mapping: z
            .array(
              z.object({
                display_field: z
                  .string()
                  .describe('展示字段名称，与 card_key 有关，每个模版能展示的字段不同。该字段不能重复'),
                data_field: z
                  .string()
                  .describe(
                    '数据字段的名称。需要确保该字段对应在 schema 属性定义中的 is_returnable 为 true，否则无法展示。需要使用 ${xxx} 的规则来描述',
                  ),
              }),
            )
            .describe('数据字段名称和展示字段名称的映射关系。如果没有设置，则只会展示 与展示字段名称同名的 数据字段')
            .optional(),
        })
        .describe('数据展示相关配置')
        .optional(),
      properties: z
        .array(
          z.object({
            name: z.string().describe('属性名'),
            desc: z.string().describe('属性描述').optional(),
            answer_option: z
              .object({
                is_searchable: z.boolean().describe('是否用于搜索').optional(),
                is_returnable: z.boolean().describe('是否用于返回').optional(),
              })
              .describe('问答产品设置，仅在datasource中use_answer为true时生效')
              .optional(),
          }),
        )
        .describe('数据范式的属性定义')
        .optional(),
    }),
    path: z.object({ schema_id: z.string().describe('用户自定义数据范式的唯一标识') }),
  },
};
export const searchV2Tools = [
  searchV2AppCreate,
  searchV2DataSourceCreate,
  searchV2DataSourceDelete,
  searchV2DataSourceGet,
  searchV2DataSourceItemCreate,
  searchV2DataSourceItemDelete,
  searchV2DataSourceItemGet,
  searchV2DataSourceList,
  searchV2DataSourcePatch,
  searchV2MessageCreate,
  searchV2SchemaCreate,
  searchV2SchemaDelete,
  searchV2SchemaGet,
  searchV2SchemaPatch,
];
