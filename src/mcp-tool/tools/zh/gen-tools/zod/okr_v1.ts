import { z } from 'zod';
export type okrV1ToolName =
  | 'okr.v1.okr.batchGet'
  | 'okr.v1.periodRule.list'
  | 'okr.v1.period.create'
  | 'okr.v1.period.list'
  | 'okr.v1.period.patch'
  | 'okr.v1.progressRecord.create'
  | 'okr.v1.progressRecord.delete'
  | 'okr.v1.progressRecord.get'
  | 'okr.v1.progressRecord.update'
  | 'okr.v1.review.query'
  | 'okr.v1.userOkr.list';
export const okrV1OkrBatchGet = {
  project: 'okr',
  name: 'okr.v1.okr.batchGet',
  sdkName: 'okr.v1.okr.batchGet',
  path: '/open-apis/okr/v1/okrs/batch_get',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-OKR 内容-批量获取 OKR-根据 OKR id 批量获取 OKR',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      okr_ids: z.array(z.string()).describe('OKR ID 列表，最多10个'),
      lang: z.string().describe('请求OKR的语言版本（比如@的人名），lang=en_us/zh_cn，请求 Query中').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1PeriodRuleList = {
  project: 'okr',
  name: 'okr.v1.periodRule.list',
  sdkName: 'okr.v1.periodRule.list',
  path: '/open-apis/okr/v1/period_rules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-周期规则-获取 OKR 周期规则-获取租户的周期规则列表',
  accessTokens: ['tenant'],
  schema: {},
};
export const okrV1PeriodCreate = {
  project: 'okr',
  name: 'okr.v1.period.create',
  sdkName: 'okr.v1.period.create',
  path: '/open-apis/okr/v1/periods',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-OKR-OKR 周期-创建 OKR 周期-根据周期规则创建一个 OKR 周期',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      period_rule_id: z.string().describe('周期规则 id'),
      start_month: z.string().describe('周期起始年月'),
    }),
  },
};
export const okrV1PeriodList = {
  project: 'okr',
  name: 'okr.v1.period.list',
  sdkName: 'okr.v1.period.list',
  path: '/open-apis/okr/v1/periods',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-OKR 周期-获取 OKR 周期列表-获取 OKR 周期列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，默认10').optional(),
    }),
  },
};
export const okrV1PeriodPatch = {
  project: 'okr',
  name: 'okr.v1.period.patch',
  sdkName: 'okr.v1.period.patch',
  path: '/open-apis/okr/v1/periods/:period_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-OKR-OKR 周期-修改 OKR 周期状态-修改某个 OKR 周期的状态为「正常」、「失效」或「隐藏」，对租户所有人生效，请谨慎操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      status: z
        .number()
        .describe('周期显示状态 Options:1(normal_status 正常状态),2(mark_invalid 标记失效),3(hidden_period 隐藏周期)'),
    }),
    path: z.object({ period_id: z.string().describe('周期id') }),
  },
};
export const okrV1ProgressRecordCreate = {
  project: 'okr',
  name: 'okr.v1.progressRecord.create',
  sdkName: 'okr.v1.progressRecord.create',
  path: '/open-apis/okr/v1/progress_records',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-OKR-OKR 进展记录-创建 OKR 进展记录-创建 OKR 进展记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      source_title: z.string().describe('进展来源'),
      source_url: z.string().describe('进展来源链接'),
      target_id: z.string().describe('目标id，与target_type对应'),
      target_type: z.number().describe('目标类型 Options:2(objective okr的O),3(key_result okr的KR)'),
      content: z
        .object({
          blocks: z
            .array(
              z.object({
                type: z
                  .enum(['paragraph', 'gallery'])
                  .describe('文档元素类型 Options:paragraph(文本段落),gallery(图片)')
                  .optional(),
                paragraph: z
                  .object({
                    style: z
                      .object({
                        list: z
                          .object({
                            type: z
                              .enum(['number', 'bullet', 'checkBox', 'checkedBox', 'indent'])
                              .describe(
                                '列表类型 Options:number(有序列表),bullet(无序列表),checkBox(任务列表),checkedBox(已完成的任务列表),indent(tab缩进)',
                              )
                              .optional(),
                            indentLevel: z
                              .number()
                              .describe(
                                '列表的缩进级别，支持指定一行的缩进 除代码块以外的列表都支持设置缩进，支持 1-16 级缩进，取值范围：[1,16]',
                              )
                              .optional(),
                            number: z
                              .number()
                              .describe(
                                '用于指定列表的行号，仅对有序列表和代码块生效 如果为有序列表设置了缩进，行号可能会显示为字母或者罗马数字',
                              )
                              .optional(),
                          })
                          .describe('有序列表/无序列表/任务列表')
                          .optional(),
                      })
                      .describe('段落样式')
                      .optional(),
                    elements: z
                      .array(
                        z.object({
                          type: z
                            .enum(['textRun', 'docsLink', 'person'])
                            .describe(
                              '元素类型 Options:textRun(文本型元素),docsLink(文档链接型元素),person(艾特用户型元素)',
                            )
                            .optional(),
                          textRun: z
                            .object({
                              text: z.string().describe('具体的文本内容').optional(),
                              style: z
                                .object({
                                  bold: z.boolean().describe('是否加粗').optional(),
                                  strikeThrough: z.boolean().describe('是否删除').optional(),
                                  backColor: z
                                    .object({
                                      red: z.number().describe('红 取值范围[0,255]').optional(),
                                      green: z.number().describe('绿 取值范围[0,255]').optional(),
                                      blue: z.number().describe('蓝 取值范围[0,255]').optional(),
                                      alpha: z.number().describe('透明度 取值范围[0,1]').optional(),
                                    })
                                    .describe('背景颜色')
                                    .optional(),
                                  textColor: z
                                    .object({
                                      red: z.number().describe('红 取值范围[0,255]').optional(),
                                      green: z.number().describe('绿 取值范围[0,255]').optional(),
                                      blue: z.number().describe('蓝 取值范围[0,255]').optional(),
                                      alpha: z.number().describe('透明度 取值范围[0,1]').optional(),
                                    })
                                    .describe('字体颜色')
                                    .optional(),
                                  link: z
                                    .object({ url: z.string().describe('链接地址').optional() })
                                    .describe('链接地址')
                                    .optional(),
                                })
                                .describe('文本内容的样式，支持 BIUS、颜色等')
                                .optional(),
                            })
                            .describe('文本')
                            .optional(),
                          docsLink: z
                            .object({
                              url: z.string().describe('飞书云文档链接地址').optional(),
                              title: z.string().describe('飞书云文档标题').optional(),
                            })
                            .describe('飞书云文档')
                            .optional(),
                          person: z
                            .object({ openId: z.string().describe('员工的OpenID').optional() })
                            .describe('艾特用户')
                            .optional(),
                        }),
                      )
                      .describe('段落元素组成一个段落')
                      .optional(),
                  })
                  .describe('文本段落')
                  .optional(),
                gallery: z
                  .object({
                    imageList: z
                      .array(
                        z.object({
                          fileToken: z.string().describe('图片 token，通过上传图片接口获取').optional(),
                          src: z.string().describe('图片链接').optional(),
                          width: z.number().describe('图片宽，单位px').optional(),
                          height: z.number().describe('图片高，单位px').optional(),
                        }),
                      )
                      .describe('图片元素')
                      .optional(),
                  })
                  .describe('图片')
                  .optional(),
              }),
            )
            .describe('文档结构是按行排列的，每行内容是一个 Block')
            .optional(),
        })
        .describe('进展详情 富文本格式'),
      source_url_pc: z.string().describe('pc进展来源链接').optional(),
      source_url_mobile: z.string().describe('mobile进展来源链接').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1ProgressRecordDelete = {
  project: 'okr',
  name: 'okr.v1.progressRecord.delete',
  sdkName: 'okr.v1.progressRecord.delete',
  path: '/open-apis/okr/v1/progress_records/:progress_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-OKR-OKR 进展记录-删除 OKR 进展记录-根据 ID 删除 OKR 进展记录',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ progress_id: z.string().describe('待删除的 OKR进展记录 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1ProgressRecordGet = {
  project: 'okr',
  name: 'okr.v1.progressRecord.get',
  sdkName: 'okr.v1.progressRecord.get',
  path: '/open-apis/okr/v1/progress_records/:progress_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-OKR 进展记录-获取 OKR 进展记录-根据 ID 获取 OKR 进展记录详情',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ progress_id: z.string().describe('待查询的 OKR进展记录 ID').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1ProgressRecordUpdate = {
  project: 'okr',
  name: 'okr.v1.progressRecord.update',
  sdkName: 'okr.v1.progressRecord.update',
  path: '/open-apis/okr/v1/progress_records/:progress_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-OKR-OKR 进展记录-更新 OKR 进展记录-根据 OKR 进展记录 ID 更新进展详情',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      content: z
        .object({
          blocks: z
            .array(
              z.object({
                type: z
                  .enum(['paragraph', 'gallery'])
                  .describe('文档元素类型 Options:paragraph(文本段落),gallery(图片)')
                  .optional(),
                paragraph: z
                  .object({
                    style: z
                      .object({
                        list: z
                          .object({
                            type: z
                              .enum(['number', 'bullet', 'checkBox', 'checkedBox', 'indent'])
                              .describe(
                                '列表类型 Options:number(有序列表),bullet(无序列表),checkBox(任务列表),checkedBox(已完成的任务列表),indent(tab缩进)',
                              )
                              .optional(),
                            indentLevel: z
                              .number()
                              .describe(
                                '列表的缩进级别，支持指定一行的缩进 除代码块以外的列表都支持设置缩进，支持 1-16 级缩进，取值范围：[1,16]',
                              )
                              .optional(),
                            number: z
                              .number()
                              .describe(
                                '用于指定列表的行号，仅对有序列表和代码块生效 如果为有序列表设置了缩进，行号可能会显示为字母或者罗马数字',
                              )
                              .optional(),
                          })
                          .describe('有序列表/无序列表/任务列表')
                          .optional(),
                      })
                      .describe('段落样式')
                      .optional(),
                    elements: z
                      .array(
                        z.object({
                          type: z
                            .enum(['textRun', 'docsLink', 'person'])
                            .describe(
                              '元素类型 Options:textRun(文本型元素),docsLink(文档链接型元素),person(艾特用户型元素)',
                            )
                            .optional(),
                          textRun: z
                            .object({
                              text: z.string().describe('具体的文本内容').optional(),
                              style: z
                                .object({
                                  bold: z.boolean().describe('是否加粗').optional(),
                                  strikeThrough: z.boolean().describe('是否删除').optional(),
                                  backColor: z
                                    .object({
                                      red: z.number().describe('红 取值范围[0,255]').optional(),
                                      green: z.number().describe('绿 取值范围[0,255]').optional(),
                                      blue: z.number().describe('蓝 取值范围[0,255]').optional(),
                                      alpha: z.number().describe('透明度 取值范围[0,1]').optional(),
                                    })
                                    .describe('背景颜色')
                                    .optional(),
                                  textColor: z
                                    .object({
                                      red: z.number().describe('红 取值范围[0,255]').optional(),
                                      green: z.number().describe('绿 取值范围[0,255]').optional(),
                                      blue: z.number().describe('蓝 取值范围[0,255]').optional(),
                                      alpha: z.number().describe('透明度 取值范围[0,1]').optional(),
                                    })
                                    .describe('字体颜色')
                                    .optional(),
                                  link: z
                                    .object({ url: z.string().describe('链接地址').optional() })
                                    .describe('链接地址')
                                    .optional(),
                                })
                                .describe('文本内容的样式，支持 BIUS、颜色等')
                                .optional(),
                            })
                            .describe('文本')
                            .optional(),
                          docsLink: z
                            .object({
                              url: z.string().describe('飞书云文档链接地址').optional(),
                              title: z.string().describe('飞书云文档标题').optional(),
                            })
                            .describe('飞书云文档')
                            .optional(),
                          person: z
                            .object({ openId: z.string().describe('员工的OpenID').optional() })
                            .describe('艾特用户')
                            .optional(),
                        }),
                      )
                      .describe('段落元素组成一个段落')
                      .optional(),
                  })
                  .describe('文本段落')
                  .optional(),
                gallery: z
                  .object({
                    imageList: z
                      .array(
                        z.object({
                          fileToken: z.string().describe('图片 token，通过上传图片接口获取').optional(),
                          src: z.string().describe('图片链接').optional(),
                          width: z.number().describe('图片宽，单位px').optional(),
                          height: z.number().describe('图片高，单位px').optional(),
                        }),
                      )
                      .describe('图片元素')
                      .optional(),
                  })
                  .describe('图片')
                  .optional(),
              }),
            )
            .describe('文档结构是按行排列的，每行内容是一个 Block')
            .optional(),
        })
        .describe('进展详情 富文本格式'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ progress_id: z.string().describe('待更新的 OKR进展记录 ID') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1ReviewQuery = {
  project: 'okr',
  name: 'okr.v1.review.query',
  sdkName: 'okr.v1.review.query',
  path: '/open-apis/okr/v1/reviews/query',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-OKR 复盘-查询复盘信息-根据周期和用户查询复盘信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      user_ids: z.array(z.string()).describe('目标用户id列表，最多5个'),
      period_ids: z.array(z.string()).describe('period_id列表，最多5个'),
    }),
  },
};
export const okrV1UserOkrList = {
  project: 'okr',
  name: 'okr.v1.userOkr.list',
  sdkName: 'okr.v1.userOkr.list',
  path: '/open-apis/okr/v1/users/:user_id/okrs',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-OKR-OKR 内容-获取用户的 OKR 列表-根据用户的 id 获取 OKR 列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      offset: z.string().describe('请求列表的偏移（对应响应体的 okr_list 字段），offset>=0'),
      limit: z.string().describe('列表长度，0-10'),
      lang: z.string().describe('请求OKR的语言版本（比如@的人名），lang=en_us/zh_cn').optional(),
      period_ids: z.array(z.string()).describe('period_id列表，最多10个').optional(),
    }),
    path: z.object({ user_id: z.string().describe('目标用户id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const okrV1Tools = [
  okrV1OkrBatchGet,
  okrV1PeriodRuleList,
  okrV1PeriodCreate,
  okrV1PeriodList,
  okrV1PeriodPatch,
  okrV1ProgressRecordCreate,
  okrV1ProgressRecordDelete,
  okrV1ProgressRecordGet,
  okrV1ProgressRecordUpdate,
  okrV1ReviewQuery,
  okrV1UserOkrList,
];
