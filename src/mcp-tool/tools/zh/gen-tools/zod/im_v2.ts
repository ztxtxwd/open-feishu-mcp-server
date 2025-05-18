import { z } from 'zod';
export type imV2ToolName =
  | 'im.v2.appFeedCardBatch.delete'
  | 'im.v2.appFeedCardBatch.update'
  | 'im.v2.appFeedCard.create'
  | 'im.v2.bizEntityTagRelation.create'
  | 'im.v2.bizEntityTagRelation.get'
  | 'im.v2.bizEntityTagRelation.update'
  | 'im.v2.chatButton.update'
  | 'im.v2.feedCard.botTimeSentive'
  | 'im.v2.feedCard.patch'
  | 'im.v2.tag.create'
  | 'im.v2.tag.patch'
  | 'im.v2.urlPreview.batchUpdate';
export const imV2AppFeedCardBatchDelete = {
  project: 'im',
  name: 'im.v2.appFeedCardBatch.delete',
  sdkName: 'im.v2.appFeedCardBatch.delete',
  path: '/open-apis/im/v2/app_feed_card/batch',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-消息流-应用消息-删除应用消息流卡片-该接口用于删除应用消息流卡片',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      feed_cards: z
        .array(
          z.object({
            biz_id: z.string().describe('业务 ID'),
            user_id: z
              .string()
              .describe(
                '用户 ID（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 userID 权限，所以无法值使用 user_id 类型的用户 ID）',
              ),
          }),
        )
        .describe('应用消息卡片')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const imV2AppFeedCardBatchUpdate = {
  project: 'im',
  name: 'im.v2.appFeedCardBatch.update',
  sdkName: 'im.v2.appFeedCardBatch.update',
  path: '/open-apis/im/v2/app_feed_card/batch',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-消息流-应用消息-更新应用消息流卡片-该接口用于更新消息流卡片的头像、标题、预览、标签状态、按钮等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      feed_cards: z
        .array(
          z.object({
            app_feed_card: z
              .object({
                biz_id: z
                  .string()
                  .describe(
                    '业务 ID（非必填字段，开发者可自定义业务 ID 以方便管理数据；若不传入，则 API 响应体中会返回系统自动分配的业务 ID）',
                  )
                  .optional(),
                title: z
                  .string()
                  .describe('主标题（在用户界面中最多展示一行，自动省略超出部分的内容；不支持定义字号及颜色）')
                  .optional(),
                avatar_key: z.string().describe('头像 key').optional(),
                preview: z
                  .string()
                  .describe(
                    '预览信息（在用户界面中最多展示一行，自动省略超出部分的内容；支持多个字段拼接、特殊符号和 emoji；不支持定义字号及颜色）',
                  )
                  .optional(),
                status_label: z
                  .object({
                    text: z.string().describe('标签文字'),
                    type: z
                      .enum(['primary', 'secondary', 'success', 'danger'])
                      .describe(
                        '标签类型 Options:primary(主类型),secondary(次要类型),success(成功类型),danger(危险类型)',
                      ),
                  })
                  .describe('状态标签（非必填字段，如未选择该字段，则默认展示卡片触达时间）')
                  .optional(),
                buttons: z
                  .object({
                    buttons: z
                      .array(
                        z.object({
                          multi_url: z
                            .object({
                              url: z.string().describe('默认 URL').optional(),
                              android_url: z.string().describe('Android 平台 URL').optional(),
                              ios_url: z.string().describe('iOS 平台 URL').optional(),
                              pc_url: z.string().describe('PC URL').optional(),
                            })
                            .describe('跳转 URL（仅支持 https 协议）')
                            .optional(),
                          action_type: z
                            .enum(['url_page', 'webhook'])
                            .describe(
                              '交互类型（按钮交互方式可配置跳转 URL 页面，也可配置 webhook 回调） Options:url_page(URLPage URL 页面),webhook(回调)',
                            ),
                          text: z.object({ text: z.string().describe('文本') }).describe('文字'),
                          button_type: z
                            .enum(['default', 'primary', 'success'])
                            .describe('按钮类型 Options:default(默认),primary(主要),success(成功)')
                            .optional(),
                          action_map: z.record(z.any()).describe('action 字典').optional(),
                        }),
                      )
                      .describe('按钮组合'),
                  })
                  .describe('交互按钮（非必填字段，如未传入该字段，则不展示按钮；最多展示 2 个按钮）')
                  .optional(),
                link: z
                  .object({ link: z.string().describe('卡片整体跳转链接（创建时该参数为必填参数）').optional() })
                  .describe('跳转链接')
                  .optional(),
                time_sensitive: z
                  .boolean()
                  .describe('即时提醒状态（设置为 true 后，卡片在消息列表临时置顶；设置为 false，消息卡片不置顶）')
                  .optional(),
                notify: z
                  .object({
                    close_notify: z.boolean().describe('是否关闭通知').optional(),
                    custom_sound_text: z.string().describe('自定义语音播报文本内容（仅支持移动端）').optional(),
                    with_custom_sound: z
                      .boolean()
                      .describe('是否播报自定义语音（仅支持移动端；播报语音包暂不支持切换，默认为女声）')
                      .optional(),
                  })
                  .describe('通知设置，当前可设置通知是否关闭，为空时默认进行通知')
                  .optional(),
              })
              .describe('应用消息卡片'),
            user_id: z
              .string()
              .describe(
                '用户 ID（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 userID 权限，所以无法值使用 user_id 类型的用户 ID）',
              ),
            update_fields: z
              .array(
                z
                  .enum(['1', '2', '3', '10', '11', '12', '13', '101', '102', '103'])
                  .describe(
                    'Options:1(TITLE 标题),2(AVATAR_KEY 头像 key),3(PREVIEW 预览),10(STATUS_LABEL 状态标签),11(BUTTONS 按钮),12(LINK 跳转链接),13(TIME_SENSITIVE 即时提醒状态),101(DISPLAY_TIME_TO_CURRENT 展示时间更新到当前),102(RERANK_TO_CURRENT 排序时间更新到当前),103(WITH_NOTIFY 进行通知)',
                  ),
              )
              .describe('更新字段列表'),
          }),
        )
        .describe('应用消息卡片')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const imV2AppFeedCardCreate = {
  project: 'im',
  name: 'im.v2.appFeedCard.create',
  sdkName: 'im.v2.appFeedCard.create',
  path: '/open-apis/im/v2/app_feed_card',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-消息流-应用消息-创建应用消息流卡片-应用消息流卡片是飞书为应用提供的消息触达能力，让应用可以直接在消息流发送消息，重要消息能更快触达用户',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      app_feed_card: z
        .object({
          biz_id: z
            .string()
            .describe(
              '业务 ID（非必填字段，开发者可自定义业务 ID 以方便管理数据；若不传入，则 API 响应体中会返回系统自动分配的业务 ID）',
            )
            .optional(),
          title: z
            .string()
            .describe('主标题（在用户界面中最多展示一行，自动省略超出部分的内容；不支持定义字号及颜色）')
            .optional(),
          avatar_key: z.string().describe('头像 key').optional(),
          preview: z
            .string()
            .describe(
              '预览信息（在用户界面中最多展示一行，自动省略超出部分的内容；支持多个字段拼接、特殊符号和 emoji；不支持定义字号及颜色）',
            )
            .optional(),
          status_label: z
            .object({
              text: z.string().describe('标签文字'),
              type: z
                .enum(['primary', 'secondary', 'success', 'danger'])
                .describe('标签类型 Options:primary(主类型),secondary(次要类型),success(成功类型),danger(危险类型)'),
            })
            .describe('状态标签（非必填字段，如未选择该字段，则默认展示卡片触达时间）')
            .optional(),
          buttons: z
            .object({
              buttons: z
                .array(
                  z.object({
                    multi_url: z
                      .object({
                        url: z.string().describe('默认 URL').optional(),
                        android_url: z.string().describe('Android 平台 URL').optional(),
                        ios_url: z.string().describe('iOS 平台 URL').optional(),
                        pc_url: z.string().describe('PC URL').optional(),
                      })
                      .describe('跳转 URL（仅支持 https 协议）')
                      .optional(),
                    action_type: z
                      .enum(['url_page', 'webhook'])
                      .describe(
                        '交互类型（按钮交互方式可配置跳转 URL 页面，也可配置 webhook 回调） Options:url_page(URLPage URL 页面),webhook(回调)',
                      ),
                    text: z.object({ text: z.string().describe('文本') }).describe('文字'),
                    button_type: z
                      .enum(['default', 'primary', 'success'])
                      .describe('按钮类型 Options:default(默认),primary(主要),success(成功)')
                      .optional(),
                    action_map: z.record(z.any()).describe('action 字典').optional(),
                  }),
                )
                .describe('按钮组合'),
            })
            .describe('交互按钮（非必填字段，如未传入该字段，则不展示按钮；最多展示 2 个按钮）')
            .optional(),
          link: z
            .object({
              link: z
                .string()
                .describe('链接**注意**：仅支持 HTTPS 协议，以及网页应用或小程序的 Applink（会校验 appid 是否正确）')
                .optional(),
            })
            .describe('卡片整体跳转链接（创建时该参数为必填参数）')
            .optional(),
          time_sensitive: z
            .boolean()
            .describe('即时提醒状态（设置为 true 后，卡片在消息列表临时置顶；设置为 false，消息卡片不置顶）')
            .optional(),
          notify: z
            .object({
              close_notify: z.boolean().describe('是否关闭通知').optional(),
              custom_sound_text: z.string().describe('自定义语音播报文本内容（仅支持移动端）').optional(),
              with_custom_sound: z
                .boolean()
                .describe('是否播报自定义语音（仅支持移动端；播报语音包暂不支持切换，默认为女声）')
                .optional(),
            })
            .describe('通知设置，当前可设置通知是否关闭，为空时默认进行通知')
            .optional(),
        })
        .describe('应用消息卡片')
        .optional(),
      user_ids: z
        .array(z.string())
        .describe(
          '用户 ID 列表（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 userID 权限，所以无法值使用 user_id 类型的用户 ID）',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const imV2BizEntityTagRelationCreate = {
  project: 'im',
  name: 'im.v2.bizEntityTagRelation.create',
  sdkName: 'im.v2.bizEntityTagRelation.create',
  path: '/open-apis/im/v2/biz_entity_tag_relation',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-企业自定义群标签-绑定标签到群-绑定标签到业务实体。目前支持给会话打标签',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      tag_biz_type: z.literal('chat').describe('业务类型 Options:chat(chat 会话类型)'),
      biz_entity_id: z.string().describe('业务实体 ID'),
      tag_ids: z.array(z.string()).describe('标签 ID').optional(),
    }),
  },
};
export const imV2BizEntityTagRelationGet = {
  project: 'im',
  name: 'im.v2.bizEntityTagRelation.get',
  sdkName: 'im.v2.bizEntityTagRelation.get',
  path: '/open-apis/im/v2/biz_entity_tag_relation',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-企业自定义群标签-查询实体与标签的绑定关系-查询实体与标签的绑定关系',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      tag_biz_type: z.literal('chat').describe('业务类型 Options:chat(chat类型)'),
      biz_entity_id: z.string().describe('业务实体id'),
    }),
  },
};
export const imV2BizEntityTagRelationUpdate = {
  project: 'im',
  name: 'im.v2.bizEntityTagRelation.update',
  sdkName: 'im.v2.bizEntityTagRelation.update',
  path: '/open-apis/im/v2/biz_entity_tag_relation',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-企业自定义群标签-解绑标签与群-从业务实体上解绑标签',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      tag_biz_type: z.literal('chat').describe('业务类型 Options:chat(chat类型)'),
      biz_entity_id: z.string().describe('业务实体id'),
      tag_ids: z.array(z.string()).describe('标签id').optional(),
    }),
  },
};
export const imV2ChatButtonUpdate = {
  project: 'im',
  name: 'im.v2.chatButton.update',
  sdkName: 'im.v2.chatButton.update',
  path: '/open-apis/im/v2/chat_button',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-消息流-群聊或机器人消息-更新消息流卡片按钮-为群组消息、机器人消息的消息流卡片添加、更新、删除快捷操作按钮',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z
        .array(z.string())
        .describe(
          '用户 ID 列表（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 user ID 权限，所以无法使用 user_id 类型的用户 ID）',
        )
        .optional(),
      chat_id: z.string().describe('群 ID'),
      buttons: z
        .object({
          buttons: z
            .array(
              z.object({
                multi_url: z
                  .object({
                    url: z.string().describe('默认 URL').optional(),
                    android_url: z.string().describe('Android 平台 URL').optional(),
                    ios_url: z.string().describe('iOS 平台 URL').optional(),
                    pc_url: z.string().describe('PC URL').optional(),
                  })
                  .describe('跳转 URL（仅支持 https 协议）')
                  .optional(),
                action_type: z
                  .enum(['url_page', 'webhook'])
                  .describe(
                    '交互类型（按钮交互方式可配置跳转 URL 页面，也可配置 webhook 回调） Options:url_page(URLPage URL 页面),webhook(回调)',
                  ),
                text: z.object({ text: z.string().describe('文本') }).describe('文字'),
                button_type: z
                  .enum(['default', 'primary', 'success'])
                  .describe('按钮类型 Options:default(默认),primary(主要),success(成功)')
                  .optional(),
                action_map: z.record(z.any()).describe('action 字典').optional(),
              }),
            )
            .describe(
              '按钮组合，该字段为全量更新字段，若未传入字段原有值，则会清空字段数据。例如：- 在保持原有按钮的字段配置的前提下，新增一个按钮配置会添加一个按钮。- 在原有按钮的字段配置上做更新，会更新该按钮。- 清空原有按钮的字段配置，会删除该按钮',
            ),
        })
        .describe('交互按钮（非必填字段，如未传入该字段，则不展示按钮；最多展示 2 个按钮）')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const imV2FeedCardBotTimeSentive = {
  project: 'im',
  name: 'im.v2.feedCard.botTimeSentive',
  sdkName: 'im.v2.feedCard.botTimeSentive',
  path: '/open-apis/im/v2/feed_cards/bot_time_sentive',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-消息流-群聊或机器人消息-机器人单聊即时提醒-可将机器人对话在消息列表中置顶展示，打开飞书首页即可处理重要任务',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      time_sensitive: z
        .boolean()
        .describe('即时提醒状态（设置为 true 后，卡片在消息列表临时置顶；设置为 false，消息卡片不置顶）'),
      user_ids: z
        .array(z.string())
        .describe(
          '用户 ID 列表（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 user ID 权限，所以无法使用 user_id 类型的用户 ID）',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型') }),
  },
};
export const imV2FeedCardPatch = {
  project: 'im',
  name: 'im.v2.feedCard.patch',
  sdkName: 'im.v2.feedCard.patch',
  path: '/open-apis/im/v2/feed_cards/:feed_card_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-消息流-群聊或机器人消息-即时提醒-即时提醒能力是飞书在消息列表中提供的强提醒能力，当有重要通知或任务需要及时触达用户，可将群组或机器人对话在消息列表中置顶展示，打开飞书首页即可处理重要任务',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      time_sensitive: z
        .boolean()
        .describe('即时提醒状态（设置为 true 后，卡片在消息列表临时置顶；设置为 false，消息卡片不置顶）'),
      user_ids: z
        .array(z.string())
        .describe(
          '用户 ID 列表（ID 类型与 user_id_type 的取值一致。如果是商店应用，因不支持获取用户 user ID 权限，所以无法使用 user_id 类型的用户 ID）',
        ),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型') }),
    path: z.object({ feed_card_id: z.string().describe('消息卡片 id，当前只支持群聊类型') }),
  },
};
export const imV2TagCreate = {
  project: 'im',
  name: 'im.v2.tag.create',
  sdkName: 'im.v2.tag.create',
  path: '/open-apis/im/v2/tags',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-企业自定义群标签-创建标签-创建标签并返回标签 ID',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      create_tag: z
        .object({
          tag_type: z.literal('tenant').describe('标签类型 Options:tenant(租户类型标签)'),
          name: z.string().describe('标签默认名称'),
          i18n_names: z
            .array(z.object({ locale: z.string().describe('语言'), name: z.string().describe('名称').optional() }))
            .describe('i18n多语言标签名称集合')
            .optional(),
        })
        .describe('创建标签'),
    }),
  },
};
export const imV2TagPatch = {
  project: 'im',
  name: 'im.v2.tag.patch',
  sdkName: 'im.v2.tag.patch',
  path: '/open-apis/im/v2/tags/:tag_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-企业自定义群标签-修改标签-修改标签在各个语言下的名称',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      patch_tag: z
        .object({
          id: z.string().describe('标签 ID').optional(),
          name: z.string().describe('标签名称').optional(),
          i18n_names: z
            .array(z.object({ locale: z.string().describe('语言'), name: z.string().describe('名称').optional() }))
            .describe('i18n 多语言名称集合')
            .optional(),
        })
        .describe('编辑标签')
        .optional(),
    }),
    path: z.object({ tag_id: z.string().describe('标签 ID') }),
  },
};
export const imV2UrlPreviewBatchUpdate = {
  project: 'im',
  name: 'im.v2.urlPreview.batchUpdate',
  sdkName: 'im.v2.urlPreview.batchUpdate',
  path: '/open-apis/im/v2/url_previews/batch_update',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-消息-URL 预览-更新 URL 预览-该接口用于主动更新 ，调用后会重新触发一次客户端拉取，需要回调服务返回更新后的数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      preview_tokens: z
        .array(z.string())
        .describe(
          'URL 预览的 preview_tokens 列表。需要通过回调获取 preview_tokens。**注意**：单个 token 限制更新频率为 1次/5秒',
        ),
      open_ids: z
        .array(z.string())
        .describe(
          '需要更新 URL 预览的用户 open_id。若不传，则默认更新 URL 预览所在会话的所有成员；若用户不在 URL 所在会话，则无法触发更新该用户对应的 URL 预览结果。获取方式参见',
        )
        .optional(),
    }),
  },
};
export const imV2Tools = [
  imV2AppFeedCardBatchDelete,
  imV2AppFeedCardBatchUpdate,
  imV2AppFeedCardCreate,
  imV2BizEntityTagRelationCreate,
  imV2BizEntityTagRelationGet,
  imV2BizEntityTagRelationUpdate,
  imV2ChatButtonUpdate,
  imV2FeedCardBotTimeSentive,
  imV2FeedCardPatch,
  imV2TagCreate,
  imV2TagPatch,
  imV2UrlPreviewBatchUpdate,
];
