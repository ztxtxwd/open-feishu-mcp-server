import { z } from 'zod';
export type cardkitV1ToolName =
  | 'cardkit.v1.card.batchUpdate'
  | 'cardkit.v1.card.create'
  | 'cardkit.v1.cardElement.content'
  | 'cardkit.v1.cardElement.create'
  | 'cardkit.v1.cardElement.delete'
  | 'cardkit.v1.cardElement.patch'
  | 'cardkit.v1.cardElement.update'
  | 'cardkit.v1.card.idConvert'
  | 'cardkit.v1.card.settings'
  | 'cardkit.v1.card.update';
export const cardkitV1CardBatchUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.batchUpdate',
  sdkName: 'cardkit.v1.card.batchUpdate',
  path: '/open-apis/cardkit/v1/cards/:card_id/batch_update',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书卡片-卡片-批量更新卡片实体-更新指定卡片实体局部，包括配置和组件等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
      actions: z
        .string()
        .describe(
          '操作列表，可选值有：- `partial_update_setting`：更新卡片配置，支持更新卡片的 config 和 card_link 字段。参数结构可参考；- `add_elements`：添加组件，支持 type、 target_element_id、elements 字段。参数结构可参考接口请求体；- `delete_elements`：删除组件，支持 element_ids 字段。参数值为组件 ID 数组。参数结构可参考； - `partial_update_element`：更新组件的属性，支持 element_id 和 partial_element 字段。参数结构可参考接口的路径参数 element_id 和请求体 partial_element 字段 ; - `update_element`：全量更新组件，支持 element_id 和 element 字段。参数结构可参考接口的路径参数 element_id 和请求体 element 字段',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
    }),
  },
};
export const cardkitV1CardCreate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.create',
  sdkName: 'cardkit.v1.card.create',
  path: '/open-apis/cardkit/v1/cards',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书卡片-卡片-创建卡片实体-基于卡片 JSON 代码，创建卡片实体',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      type: z.string().describe('卡片数据的类型。取固定值 `card_json`'),
      data: z
        .string()
        .describe(
          '卡片 JSON 数据的内容。仅支持，即你必须声明 schema 为 2.0。以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串',
        ),
    }),
  },
};
export const cardkitV1CardElementContent = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.content',
  sdkName: 'cardkit.v1.cardElement.content',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id/content',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书卡片-组件-流式更新文本-对卡片中的普通文本元素（tag 为 plain_text 的元素）或富文本组件（tag 为 markdown 的组件）传入全量文本内容，以实现“打字机”式的文字输出效果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      content: z.string().describe('新的全量文本内容。以下示例值未转义，使用时请注意转义'),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
      element_id: z
        .string()
        .describe('普通文本组件或富文本组件的 ID。对应卡片 JSON 中的 `element_id` 属性，由开发者自定义'),
    }),
  },
};
export const cardkitV1CardElementCreate = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.create',
  sdkName: 'cardkit.v1.cardElement.create',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书卡片-组件-新增组件-为指定卡片实体新增组件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      type: z
        .enum(['insert_before', 'insert_after', 'append'])
        .describe(
          '添加组件的方式。 Options:insert_before(在目标组件前插入),insert_after(在目标组件后插入),append(在卡片或容器组件末尾添加)',
        ),
      target_element_id: z
        .string()
        .describe(
          '目标组件的 ID。 填写规则如下所示：- 当 `type` 为 `insert_before`、`insert_after` 时，为用于定位的目标组件- 当 `type` 为 `append` 时，该字段仅支持容器类组件，为用于指定末尾添加的目标组件- 未填写默认为在卡片 body 末尾添加',
        )
        .optional(),
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
      elements: z.string().describe('添加的组件列表。以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串'),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
    }),
  },
};
export const cardkitV1CardElementDelete = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.delete',
  sdkName: 'cardkit.v1.cardElement.delete',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书卡片-组件-删除组件-删除指定卡片实体中的组件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z.string().describe('幂等 id，可通过传入唯一的 uuid 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
      element_id: z.string().describe('要删除的组件 ID。对应卡片 JSON 中的 `element_id` 属性，由开发者自定义'),
    }),
  },
};
export const cardkitV1CardElementPatch = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.patch',
  sdkName: 'cardkit.v1.cardElement.patch',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书卡片-组件-更新组件属性-更新卡片实体中指定组件的属性',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      partial_element: z
        .string()
        .describe(
          '组件的新的配置项字段。传入 `element_id` 参数后，原组件的 ID 将更新。不支持修改 `tag` 参数。 **注意**：以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串',
        ),
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
      element_id: z.string().describe('要更新的组件的 ID。对应 JSON 代码中的 `element_id` 属性，由开发者自定义'),
    }),
  },
};
export const cardkitV1CardElementUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.cardElement.update',
  sdkName: 'cardkit.v1.cardElement.update',
  path: '/open-apis/cardkit/v1/cards/:card_id/elements/:element_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-飞书卡片-组件-更新组件-更新卡片实体中的指定组件为新组件。支持传入多个组件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      element: z
        .string()
        .describe('新的组件的完整的 JSON 数据。以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串'),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
      element_id: z.string().describe('要更新的组件 ID。对应卡片 JSON 中的 `element_id` 属性，由开发者自定义'),
    }),
  },
};
export const cardkitV1CardIdConvert = {
  project: 'cardkit',
  name: 'cardkit.v1.card.idConvert',
  sdkName: 'cardkit.v1.card.idConvert',
  path: '/open-apis/cardkit/v1/cards/id_convert',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-转换 ID-将（ `message_id` ）转换为卡片实体 ID（`card_id`）。用于将由等接口返回的消息 ID 转换为卡片实体 ID，以进一步对卡片进行全量更新、局部更新、或文本流式更新操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      message_id: z
        .string()
        .describe(
          '消息 ID。通过等接口获取。其消息类型（msg_type）需为卡片（interactive）',
        ),
    }),
  },
};
export const cardkitV1CardSettings = {
  project: 'cardkit',
  name: 'cardkit.v1.card.settings',
  sdkName: 'cardkit.v1.card.settings',
  path: '/open-apis/cardkit/v1/cards/:card_id/settings',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书卡片-卡片-更新卡片配置-更新指定卡片实体的配置，支持更新 `config` 和 `card_link` 字段',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      settings: z
        .string()
        .describe(
          '卡片配置相关字段，包括 `config` 和 `card_link` 字段。以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串。了解字段详细说明，参考',
        ),
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
    }),
  },
};
export const cardkitV1CardUpdate = {
  project: 'cardkit',
  name: 'cardkit.v1.card.update',
  sdkName: 'cardkit.v1.card.update',
  path: '/open-apis/cardkit/v1/cards/:card_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-飞书卡片-卡片-全量更新卡片实体-传入全新的卡片 JSON 数据，更新指定的卡片实体',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      card: z
        .object({
          type: z.literal('card_json').describe('卡片数据的类型。取固定值 `card_json`。 Options:card_json(卡片 JSON)'),
          data: z
            .string()
            .describe(
              '卡片 JSON 数据的内容。仅支持 schema 2.0 版本的卡片结构。以下示例值未转义，使用时请注意将其转为 JSON 序列化后的字符串',
            ),
        })
        .describe('更新后的卡片内容'),
      uuid: z.string().describe('幂等 ID，可通过传入唯一的 UUID 以保证相同批次的操作只进行一次').optional(),
      sequence: z
        .number()
        .describe(
          '卡片处于流式更新模式时，操作卡片的序号。用于保证多次更新的时序性。该序号的值应为正整数，由开发者自定义。取值范围为 int32 范围内的值。**注意**：在卡片的单次流式更新开启期间，若多次更新卡片，你需确保 `sequence` 逐次递增，否则将报 300317 错误码',
        ),
    }),
    path: z.object({
      card_id: z
        .string()
        .describe('卡片实体 ID。通过获取'),
    }),
  },
};
export const cardkitV1Tools = [
  cardkitV1CardBatchUpdate,
  cardkitV1CardCreate,
  cardkitV1CardElementContent,
  cardkitV1CardElementCreate,
  cardkitV1CardElementDelete,
  cardkitV1CardElementPatch,
  cardkitV1CardElementUpdate,
  cardkitV1CardIdConvert,
  cardkitV1CardSettings,
  cardkitV1CardUpdate,
];
