import z from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { convertDescriptionToString, McpToolDescription } from '../../types';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-块-获取块类型Schema-获取指定块类型的创建参数结构',
  bestFor: '了解任何块类型的详细参数结构和字段说明，为后续创建块做准备',
  notRecommendedFor: '创建图片、视频、文件块（获取schema后请使用docx_image_or_video_or_file_create工具）',
  promptExample: '获取文本块的创建参数结构',
  usageExample: 'docx_block_schema_get({block_type: "文本"})',
  returns: '指定块类型的完整JSON Schema，包含所有可用字段和选项说明'
};

export const docxV1BlockTypeSchemaGet = {
  project: 'docx',
  name: 'docx_block_schema_get',
  sdkName: 'docx.v1.blockType.schema.get',
  path: '/internal/block-schema', // 内部路径，非API调用
  httpMethod: 'GET',
  description: convertDescriptionToString(description),
  accessTokens: [],
  schema: {
    block_type: z
      .enum([
        '文本',
        '一级标题',
        '二级标题',
        '三级标题',
        '四级标题',
        '五级标题',
        '六级标题',
        '七级标题',
        '八级标题',
        '九级标题',
        '无序列表',
        '有序列表',
        '代码',
        '引用',
        '公式',
        '待办事项',
        '高亮',
        '群聊卡片',
        '分割线',
        '分栏',
        '内嵌网页',
        '文本绘图',
        '名词解释',
        '时间轴',
        '目录导航',
        '电子表格',
        '表格',
        '日期提醒',
        '倒计时',
        '图片',
        '附件',
        '文件',
        '视频'
      ])
      .describe('块类型'),
  },
  customHandler: async (params: any) => {
    switch (params.block_type) {
      case '文本':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(2),
                    text: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('文本 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '一级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(3),
                    heading1: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('一级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '二级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(4),
                    heading2: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('二级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '三级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(5),
                    heading3: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('三级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '四级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(6),
                    heading4: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('四级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '五级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(7),
                    heading5: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('五级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '六级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(8),
                    heading6: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('六级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '七级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(9),
                    heading7: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('七级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '八级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(10),
                    heading8: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('八级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '九级标题':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(11),
                    heading9: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('九级标题 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '无序列表':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(12),
                    bullet: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('无序列表 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '有序列表':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(13),
                    ordered: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('有序列表 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '代码':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(14),
                    code: z
                      .object({
                        style: z
                          .object({
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                })
                                .describe('文字')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('代码块 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '引用':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(15),
                    quote: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            language: z
                              .number()
                              .describe(
                                '代码块语言 Options:1(PlainText),2(ABAP),3(Ada),4(Apache),5(Apex),6(AssemblyLanguage Assembly Language),7(Bash),8(CSharp),9(CPlusPlus C++),10(C),11(COBOL),12(CSS),13(CoffeeScript),14(D),15(Dart),16(Delphi),17(Django),18(Dockerfile),19(Erlang),20(Fortran),21(FoxPro),22(Go),23(Groovy),24(HTML),25(HTMLBars),26(HTTP),27(Haskell),28(JSON),29(Java),30(JavaScript),31(Julia),32(Kotlin),33(LateX),34(Lisp),35(Logo),36(Lua),37(MATLAB),38(Makefile),39(Markdown),40(Nginx),41(ObjectiveC Objective-C),42(OpenEdgeABL),43(PHP),44(Perl),45(PostScript),46(PowerShell Power Shell),47(Prolog),48(ProtoBuf),49(Python),50(R),51(RPG),52(Ruby),53(Rust),54(SAS),55(SCSS),56(SQL),57(Scala),58(Scheme),59(Scratch),60(Shell),61(Swift),62(Thrift),63(TypeScript),64(VBScript),65(VisualBasic Visual Basic),66(XML),67(YAML),68(CMake),69(Diff),70(Gherkin),71(GraphQL),72(OpenGLShadingLanguage OpenGL Shading Language),73(Properties),74(Solidity),75(TOML)',
                              )
                              .optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('引用 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '公式':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(2),
                    text: z
                      .object({
                        elements: z
                          .array(
                            z.object({
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('公式 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '待办事项':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(17),
                    todo: z
                      .object({
                        style: z
                          .object({
                            align: z.number().describe('对齐方式 Options:1(Left 居左排版),2(Center 居中排版),3(Right 居右排版)').optional(),
                            done: z.boolean().describe('todo 的完成状态').optional(),
                            folded: z.boolean().describe('文本的折叠状态').optional(),
                            wrap: z.boolean().describe('代码块是否自动换行').optional(),
                            background_color: z
                              .enum([
                                'LightGrayBackground',
                                'LightRedBackground',
                                'LightOrangeBackground',
                                'LightYellowBackground',
                                'LightGreenBackground',
                                'LightBlueBackground',
                                'LightPurpleBackground',
                                'PaleGrayBackground',
                                'DarkGrayBackground',
                                'DarkRedBackground',
                                'DarkOrangeBackground',
                                'DarkYellowBackground',
                                'DarkGreenBackground',
                                'DarkBlueBackground',
                                'DarkPurpleBackground',
                              ])
                              .describe(
                                '块背景色 Options:LightGrayBackground(浅灰色),LightRedBackground(浅红色),LightOrangeBackground(浅橙色),LightYellowBackground(浅黄色),LightGreenBackground(浅绿色),LightBlueBackground(浅蓝色),LightPurpleBackground(浅紫色),PaleGrayBackground(淡灰色),DarkGrayBackground(深灰色),DarkRedBackground(深红色),DarkOrangeBackground(深橙色),DarkYellowBackground(深黄色),DarkGreenBackground(深绿色),DarkBlueBackground(深蓝色),DarkPurpleBackground(深紫色)',
                              )
                              .optional(),
                            indentation_level: z
                              .enum(['NoIndent', 'OneLevelIndent'])
                              .describe('首行缩进级别 Options:NoIndent(无缩进),OneLevelIndent(一级缩进)')
                              .optional(),
                          })
                          .describe('文本样式')
                          .optional(),
                        elements: z
                          .array(
                            z.object({
                              text_run: z
                                .object({
                                  content: z.string().describe('文本内容'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('文字')
                                .optional(),
                              mention_user: z
                                .object({
                                  user_id: z.string().describe('用户 OpenID'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@用户')
                                .optional(),
                              mention_doc: z
                                .object({
                                  token: z.string().describe('云文档 token'),
                                  obj_type: z
                                    .number()
                                    .describe(
                                      '云文档类型 Options:1(Doc),3(Sheet),8(Bitable),11(MindNote),12(File),15(Slide),16(Wiki),22(Docx)',
                                    ),
                                  url: z.string().describe('云文档链接（需要 url_encode)'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('@文档')
                                .optional(),
                              reminder: z
                                .object({
                                  create_user_id: z.string().describe('创建者用户 ID'),
                                  is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                                  expire_time: z.string().describe('事件发生的时间（毫秒级事件戳）'),
                                  notify_time: z.string().describe('触发通知的时间（毫秒级时间戳）'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('日期提醒')
                                .optional(),
                              file: z
                                .object({
                                  file_token: z.string().describe('附件 token').optional(),
                                  source_block_id: z.string().describe('当前文档中该附件所处的 block 的 id').optional(),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联附件')
                                .optional(),
                              inline_block: z
                                .object({
                                  block_id: z.string().describe('关联的内联状态的 block 的 block_id'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('内联 block')
                                .optional(),
                              equation: z
                                .object({
                                  content: z
                                    .string()
                                    .describe('符合 KaTeX 语法的公式内容，语法规则请参考：https://katex.org/docs/supported.html'),
                                  text_element_style: z
                                    .object({
                                      bold: z.boolean().describe('加粗').optional(),
                                      italic: z.boolean().describe('斜体').optional(),
                                      strikethrough: z.boolean().describe('删除线').optional(),
                                      underline: z.boolean().describe('下划线').optional(),
                                      inline_code: z.boolean().describe('inline 代码').optional(),
                                      background_color: z
                                        .number()
                                        .describe(
                                          '背景色 Options:1(LightPink 浅粉红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightGray 浅灰色),8(DarkPink 暗粉红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkGray 暗灰色),15(DarkSlightGray 暗银灰色)',
                                        )
                                        .optional(),
                                      text_color: z
                                        .number()
                                        .describe(
                                          '字体颜色 Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                                        )
                                        .optional(),
                                      link: z
                                        .object({ url: z.string().describe('超链接指向的 url (需要 url_encode)') })
                                        .describe('链接')
                                        .optional(),
                                      comment_ids: z.array(z.string()).describe('评论 id 列表').optional(),
                                    })
                                    .describe('文本局部样式')
                                    .optional(),
                                })
                                .describe('公式')
                                .optional(),
                            }),
                          )
                          .describe('文本元素'),
                      })
                      .describe('待办事项 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '高亮':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(19),
                    callout: z
                      .object({
                        emoji_id: z
                          .enum([
                            'grinning',
                            'grin',
                            'joy',
                            'smiley',
                            'smile',
                            'sweat_smile',
                            'laughing',
                            'wink',
                            'blush',
                            'yum',
                            'sunglasses',
                            'heart_eyes',
                            'kissing_heart',
                            'kissing',
                            'kissing_smiling_eyes',
                            'kissing_closed_eyes',
                            'slightly_smiling_face',
                            'hugging_face',
                            'thinking_face',
                            'neutral_face',
                            'expressionless',
                            'no_mouth',
                            'face_with_rolling_eyes',
                            'smirk',
                            'persevere',
                            'disappointed_relieved',
                            'open_mouth',
                            'zipper_mouth_face',
                            'hushed',
                            'sleepy',
                            'tired_face',
                            'sleeping',
                            'relieved',
                            'stuck_out_tongue',
                            'stuck_out_tongue_winking_eye',
                            'stuck_out_tongue_closed_eyes',
                            'unamused',
                            'sweat',
                            'pensive',
                            'confused',
                            'upside_down_face',
                            'money_mouth_face',
                            'astonished',
                            'slightly_frowning_face',
                            'confounded',
                            'disappointed',
                            'worried',
                            'triumph',
                            'cry',
                            'sob',
                            'frowning',
                            'anguished',
                            'fearful',
                            'weary',
                            'grimacing',
                            'cold_sweat',
                            'scream',
                            'flushed',
                            'dizzy_face',
                            'rage',
                            'angry',
                            'mask',
                            'face_with_thermometer',
                            'face_with_head_bandage',
                            'innocent',
                            'nerd_face',
                            'smiling_imp',
                            'imp',
                            'japanese_ogre',
                            'japanese_goblin',
                            'skull',
                            'ghost',
                            'alien',
                            'space_invader',
                            'robot_face',
                            'hankey',
                            'smiley_cat',
                            'smile_cat',
                            'joy_cat',
                            'heart_eyes_cat',
                            'smirk_cat',
                            'kissing_cat',
                            'scream_cat',
                            'crying_cat_face',
                            'pouting_cat',
                            'see_no_evil',
                            'hear_no_evil',
                            'speak_no_evil',
                            'baby',
                            'boy',
                            'girl',
                            'man',
                            'woman',
                            'older_man',
                            'older_woman',
                            'cop',
                            'guardsman',
                            'construction_worker',
                            'princess',
                            'man_with_turban',
                            'man_with_gua_pi_mao',
                            'person_with_blond_hair',
                            'bride_with_veil',
                            'angel',
                            'santa',
                            'person_frowning',
                            'person_with_pouting_face',
                            'no_good',
                            'ok_woman',
                            'information_desk_person',
                            'raising_hand',
                            'bow',
                            'massage',
                            'haircut',
                            'walking',
                            'runner',
                            'dancer',
                            'dancers',
                            'bath',
                            'sleeping_accommodation',
                            'bust_in_silhouette',
                            'busts_in_silhouette',
                            'horse_racing',
                            'snowboarder',
                            'surfer',
                            'rowboat',
                            'swimmer',
                            'bicyclist',
                            'mountain_bicyclist',
                            'couple',
                            'two_men_holding_hands',
                            'two_women_holding_hands',
                            'couplekiss',
                            'couple_with_heart',
                            'family',
                            'muscle',
                            'point_left',
                            'point_right',
                            'point_up_2',
                            'middle_finger',
                            'point_down',
                            'spock-hand',
                            'the_horns',
                            'hand',
                            'ok_hand',
                            '+1',
                            '-1',
                            'fist',
                            'facepunch',
                            'wave',
                            'clap',
                            'open_hands',
                            'raised_hands',
                            'pray',
                            'nail_care',
                            'ear',
                            'nose',
                            'footprints',
                            'eyes',
                            'tongue',
                            'lips',
                            'kiss',
                            'cupid',
                            'heartbeat',
                            'broken_heart',
                            'two_hearts',
                            'sparkling_heart',
                            'heartpulse',
                            'blue_heart',
                            'green_heart',
                            'yellow_heart',
                            'purple_heart',
                            'gift_heart',
                            'revolving_hearts',
                            'heart_decoration',
                            'love_letter',
                            'zzz',
                            'anger',
                            'bomb',
                            'boom',
                            'sweat_drops',
                            'dash',
                            'dizzy',
                            'speech_balloon',
                            'thought_balloon',
                            'eyeglasses',
                            'necktie',
                            'shirt',
                            'jeans',
                            'dress',
                            'kimono',
                            'bikini',
                            'womans_clothes',
                            'purse',
                            'handbag',
                            'pouch',
                            'school_satchel',
                            'mans_shoe',
                            'athletic_shoe',
                            'high_heel',
                            'sandal',
                            'boot',
                            'crown',
                            'womans_hat',
                            'tophat',
                            'mortar_board',
                            'prayer_beads',
                            'lipstick',
                            'ring',
                            'gem',
                            'monkey_face',
                            'monkey',
                            'dog',
                            'dog2',
                            'poodle',
                            'wolf',
                            'cat',
                            'cat2',
                            'lion_face',
                            'tiger',
                            'tiger2',
                            'leopard',
                            'horse',
                            'racehorse',
                            'unicorn_face',
                            'cow',
                            'ox',
                            'water_buffalo',
                            'cow2',
                            'pig',
                            'pig2',
                            'boar',
                            'pig_nose',
                            'ram',
                            'sheep',
                            'goat',
                            'dromedary_camel',
                            'camel',
                            'elephant',
                            'mouse',
                            'mouse2',
                            'rat',
                            'hamster',
                            'rabbit',
                            'rabbit2',
                            'bear',
                            'koala',
                            'panda_face',
                            'feet',
                            'turkey',
                            'chicken',
                            'rooster',
                            'hatching_chick',
                            'baby_chick',
                            'hatched_chick',
                            'bird',
                            'penguin',
                            'frog',
                            'crocodile',
                            'turtle',
                            'snake',
                            'dragon_face',
                            'dragon',
                            'whale',
                            'whale2',
                            'dolphin',
                            'fish',
                            'tropical_fish',
                            'blowfish',
                            'octopus',
                            'shell',
                            'crab',
                            'snail',
                            'bug',
                            'ant',
                            'bee',
                            'beetle',
                            'scorpion',
                            'bouquet',
                            'cherry_blossom',
                            'white_flower',
                            'rose',
                            'hibiscus',
                            'sunflower',
                            'blossom',
                            'tulip',
                            'seedling',
                            'evergreen_tree',
                            'deciduous_tree',
                            'palm_tree',
                            'cactus',
                            'ear_of_rice',
                            'herb',
                            'four_leaf_clover',
                            'maple_leaf',
                            'fallen_leaf',
                            'leaves',
                            'grapes',
                            'melon',
                            'watermelon',
                            'tangerine',
                            'lemon',
                            'banana',
                            'pineapple',
                            'apple',
                            'green_apple',
                            'pear',
                            'peach',
                            'cherries',
                            'strawberry',
                            'tomato',
                            'eggplant',
                            'corn',
                            'mushroom',
                            'chestnut',
                            'bread',
                            'cheese_wedge',
                            'meat_on_bone',
                            'poultry_leg',
                            'hamburger',
                            'fries',
                            'pizza',
                            'hotdog',
                            'taco',
                            'burrito',
                            'fried_egg',
                            'stew',
                            'popcorn',
                            'bento',
                            'rice_cracker',
                            'rice_ball',
                            'rice',
                            'curry',
                            'ramen',
                            'spaghetti',
                            'sweet_potato',
                            'oden',
                            'sushi',
                            'fried_shrimp',
                            'fish_cake',
                            'dango',
                            'icecream',
                            'shaved_ice',
                            'ice_cream',
                            'doughnut',
                            'cookie',
                            'birthday',
                            'cake',
                            'chocolate_bar',
                            'candy',
                            'lollipop',
                            'custard',
                            'honey_pot',
                            'baby_bottle',
                            'coffee',
                            'tea',
                            'sake',
                            'champagne',
                            'wine_glass',
                            'cocktail',
                            'tropical_drink',
                            'beer',
                            'beers',
                            'fork_and_knife',
                            'hocho',
                            'amphora',
                            'jack_o_lantern',
                            'christmas_tree',
                            'fireworks',
                            'sparkler',
                            'sparkles',
                            'balloon',
                            'tada',
                            'confetti_ball',
                            'tanabata_tree',
                            'bamboo',
                            'dolls',
                            'flags',
                            'wind_chime',
                            'rice_scene',
                            'ribbon',
                            'gift',
                            'ticket',
                            'trophy',
                            'sports_medal',
                            'soccer',
                            'baseball',
                            'basketball',
                            'volleyball',
                            'football',
                            'rugby_football',
                            'tennis',
                            '8ball',
                            'bowling',
                            'cricket_bat_and_ball',
                            'field_hockey_stick_and_ball',
                            'ice_hockey_stick_and_puck',
                            'table_tennis_paddle_and_ball',
                            'badminton_racquet_and_shuttlecock',
                            'dart',
                            'golf',
                            'fishing_pole_and_fish',
                            'running_shirt_with_sash',
                            'ski',
                            'video_game',
                            'game_die',
                            'black_joker',
                            'mahjong',
                            'flower_playing_cards',
                            'earth_africa',
                            'earth_americas',
                            'earth_asia',
                            'globe_with_meridians',
                            'japan',
                            'volcano',
                            'mount_fuji',
                            'house',
                            'house_with_garden',
                            'office',
                            'post_office',
                            'european_post_office',
                            'hospital',
                            'bank',
                            'hotel',
                            'love_hotel',
                            'convenience_store',
                            'school',
                            'department_store',
                            'factory',
                            'japanese_castle',
                            'european_castle',
                            'wedding',
                            'tokyo_tower',
                            'statue_of_liberty',
                            'church',
                            'mosque',
                            'synagogue',
                            'kaaba',
                            'fountain',
                            'tent',
                            'foggy',
                            'night_with_stars',
                            'sunrise_over_mountains',
                            'sunrise',
                            'city_sunset',
                            'city_sunrise',
                            'bridge_at_night',
                            'milky_way',
                            'carousel_horse',
                            'ferris_wheel',
                            'roller_coaster',
                            'barber',
                            'circus_tent',
                            'performing_arts',
                            'art',
                            'slot_machine',
                            'steam_locomotive',
                            'railway_car',
                            'bullettrain_side',
                            'bullettrain_front',
                            'train2',
                            'metro',
                            'light_rail',
                            'station',
                            'tram',
                            'monorail',
                            'mountain_railway',
                            'train',
                            'bus',
                            'oncoming_bus',
                            'trolleybus',
                            'minibus',
                            'ambulance',
                            'fire_engine',
                            'police_car',
                            'oncoming_police_car',
                            'taxi',
                            'oncoming_taxi',
                            'car',
                            'oncoming_automobile',
                            'blue_car',
                            'truck',
                            'articulated_lorry',
                            'tractor',
                            'bike',
                            'busstop',
                            'fuelpump',
                            'rotating_light',
                            'traffic_light',
                            'vertical_traffic_light',
                            'construction',
                            'anchor',
                            'boat',
                            'speedboat',
                            'ship',
                            'airplane_departure',
                            'airplane_arriving',
                            'seat',
                            'helicopter',
                            'suspension_railway',
                            'mountain_cableway',
                            'aerial_tramway',
                            'rocket',
                            'door',
                            'toilet',
                            'shower',
                            'bathtub',
                            'hourglass',
                            'hourglass_flowing_sand',
                            'watch',
                            'alarm_clock',
                            'clock12',
                            'clock1230',
                            'clock1',
                            'clock130',
                            'clock2',
                            'clock230',
                            'clock3',
                            'clock330',
                            'clock4',
                            'clock430',
                            'clock5',
                            'clock530',
                            'clock6',
                            'clock630',
                            'clock7',
                            'clock730',
                            'clock8',
                            'clock830',
                            'clock9',
                            'clock930',
                            'clock10',
                            'clock1030',
                            'clock11',
                            'clock1130',
                            'new_moon',
                            'waxing_crescent_moon',
                            'first_quarter_moon',
                            'moon',
                            'full_moon',
                            'waning_gibbous_moon',
                            'last_quarter_moon',
                            'waning_crescent_moon',
                            'crescent_moon',
                            'new_moon_with_face',
                            'first_quarter_moon_with_face',
                            'last_quarter_moon_with_face',
                            'full_moon_with_face',
                            'sun_with_face',
                            'star',
                            'star2',
                            'stars',
                            'partly_sunny',
                            'cyclone',
                            'rainbow',
                            'closed_umbrella',
                            'umbrella_with_rain_drops',
                            'zap',
                            'snowman_without_snow',
                            'fire',
                            'droplet',
                            'ocean',
                            'mute',
                            'speaker',
                            'sound',
                            'loud_sound',
                            'loudspeaker',
                            'mega',
                            'postal_horn',
                            'bell',
                            'no_bell',
                            'musical_score',
                            'musical_note',
                            'notes',
                            'microphone',
                            'headphones',
                            'radio',
                            'saxophone',
                            'guitar',
                            'musical_keyboard',
                            'trumpet',
                            'violin',
                            'iphone',
                            'calling',
                            'telephone_receiver',
                            'pager',
                            'fax',
                            'battery',
                            'electric_plug',
                            'computer',
                            'minidisc',
                            'floppy_disk',
                            'cd',
                            'dvd',
                            'movie_camera',
                            'clapper',
                            'tv',
                            'camera',
                            'camera_with_flash',
                            'video_camera',
                            'vhs',
                            'mag',
                            'mag_right',
                            'microscope',
                            'telescope',
                            'satellite_antenna',
                            'bulb',
                            'flashlight',
                            'izakaya_lantern',
                            'notebook_with_decorative_cover',
                            'closed_book',
                            'book',
                            'green_book',
                            'blue_book',
                            'orange_book',
                            'books',
                            'notebook',
                            'ledger',
                            'page_with_curl',
                            'scroll',
                            'page_facing_up',
                            'newspaper',
                            'bookmark_tabs',
                            'bookmark',
                            'moneybag',
                            'yen',
                            'dollar',
                            'euro',
                            'pound',
                            'money_with_wings',
                            'credit_card',
                            'chart',
                            'currency_exchange',
                            'heavy_dollar_sign',
                            'e-mail',
                            'incoming_envelope',
                            'envelope_with_arrow',
                            'outbox_tray',
                            'inbox_tray',
                            'package',
                            'mailbox',
                            'mailbox_closed',
                            'mailbox_with_mail',
                            'mailbox_with_no_mail',
                            'postbox',
                            'memo',
                            'briefcase',
                            'file_folder',
                            'open_file_folder',
                            'date',
                            'calendar',
                            'card_index',
                            'chart_with_upwards_trend',
                            'chart_with_downwards_trend',
                            'bar_chart',
                            'clipboard',
                            'pushpin',
                            'round_pushpin',
                            'paperclip',
                            'straight_ruler',
                            'triangular_ruler',
                            'lock',
                            'unlock',
                            'lock_with_ink_pen',
                            'closed_lock_with_key',
                            'key',
                            'hammer',
                            'gun',
                            'bow_and_arrow',
                            'wrench',
                            'nut_and_bolt',
                            'link',
                            'syringe',
                            'pill',
                            'smoking',
                            'moyai',
                            'crystal_ball',
                            'atm',
                            'put_litter_in_its_place',
                            'potable_water',
                            'wheelchair',
                            'mens',
                            'womens',
                            'restroom',
                            'baby_symbol',
                            'wc',
                            'passport_control',
                            'customs',
                            'baggage_claim',
                            'left_luggage',
                            'children_crossing',
                            'no_entry',
                            'no_entry_sign',
                            'no_bicycles',
                            'no_smoking',
                            'do_not_litter',
                            'non-potable_water',
                            'no_pedestrians',
                            'no_mobile_phones',
                            'underage',
                            'arrows_clockwise',
                            'arrows_counterclockwise',
                            'back',
                            'end',
                            'on',
                            'soon',
                            'top',
                            'place_of_worship',
                            'menorah_with_nine_branches',
                            'six_pointed_star',
                            'aries',
                            'taurus',
                            'gemini',
                            'cancer',
                            'leo',
                            'virgo',
                            'libra',
                            'scorpius',
                            'sagittarius',
                            'capricorn',
                            'aquarius',
                            'pisces',
                            'ophiuchus',
                            'twisted_rightwards_arrows',
                            'repeat',
                            'repeat_one',
                            'fast_forward',
                            'rewind',
                            'arrow_up_small',
                            'arrow_double_up',
                            'arrow_down_small',
                            'arrow_double_down',
                            'cinema',
                            'low_brightness',
                            'high_brightness',
                            'signal_strength',
                            'vibration_mode',
                            'mobile_phone_off',
                            'trident',
                            'name_badge',
                            'beginner',
                            'o',
                            'white_check_mark',
                            'x',
                            'negative_squared_cross_mark',
                            'heavy_plus_sign',
                            'heavy_minus_sign',
                            'heavy_division_sign',
                            'curly_loop',
                            'loop',
                            'question',
                            'grey_question',
                            'grey_exclamation',
                            'exclamation',
                            'keycap_ten',
                            '100',
                            'capital_abcd',
                            'abcd',
                            '1234',
                            'symbols',
                            'abc',
                            'ab',
                            'cl',
                            'cool',
                            'free',
                            'id',
                            'new',
                            'ng',
                            'ok',
                            'sos',
                            'up',
                            'vs',
                            'koko',
                            'u6709',
                            'u6307',
                            'ideograph_advantage',
                            'u5272',
                            'u7121',
                            'u7981',
                            'accept',
                            'u7533',
                            'u5408',
                            'u7a7a',
                            'u55b6',
                            'u6e80',
                            'white_medium_small_square',
                            'black_medium_small_square',
                            'black_large_square',
                            'white_large_square',
                            'large_orange_diamond',
                            'large_blue_diamond',
                            'small_orange_diamond',
                            'small_blue_diamond',
                            'small_red_triangle',
                            'small_red_triangle_down',
                            'diamond_shape_with_a_dot_inside',
                            'radio_button',
                            'black_square_button',
                            'white_square_button',
                            'white_circle',
                            'black_circle',
                            'red_circle',
                            'large_blue_circle',
                            'checkered_flag',
                            'triangular_flag_on_post',
                            'crossed_flags',
                            'gorilla',
                            'rolling_on_the_floor_laughing',
                            'waving_black_flag',
                            'fox_face',
                            'kiwifruit',
                            'coconut',
                            'avocado',
                            'zebra_face',
                            'deer',
                            'potato',
                            'carrot',
                            'star-struck',
                            'first_place_medal',
                            'face_with_raised_eyebrow',
                            'cucumber',
                            'drum_with_drumsticks',
                            'broccoli',
                            'second_place_medal',
                            'third_place_medal',
                            'peanuts',
                            'croissant',
                            'baguette_bread',
                            'pretzel',
                            'pancakes',
                            'giraffe_face',
                            'rhinoceros',
                            'cut_of_meat',
                            'bacon',
                            'boxing_glove',
                            'drooling_face',
                            'martial_arts_uniform',
                            'sandwich',
                            'goal_net',
                            'hedgehog',
                            'bat',
                            'stuffed_flatbread',
                            'egg',
                            'shallow_pan_of_food',
                            'sled',
                            'curling_stone',
                            'bowl_with_spoon',
                            'green_salad',
                            'canned_food',
                            'eagle',
                            'duck',
                            'owl',
                            'exploding_head',
                            'lizard',
                            'zany_face',
                            'dumpling',
                            'fortune_cookie',
                            'sauropod',
                            't-rex',
                            'takeout_box',
                            'face_with_symbols_on_mouth',
                            'nauseated_face',
                            'face_vomiting',
                            'shark',
                            'sneezing_face',
                            'pie',
                            'face_with_cowboy_hat',
                            'clown_face',
                            'lying_face',
                            'shrimp',
                            'squid',
                            'shushing_face',
                            'face_with_hand_over_mouth',
                            'butterfly',
                            'face_with_monocle',
                            'glass_of_milk',
                            'cricket',
                            'scooter',
                            'clinking_glasses',
                            'motor_scooter',
                            'tumbler_glass',
                            'cup_with_straw',
                            'wilted_flower',
                            'chopsticks',
                            'spoon',
                            'octagonal_sign',
                            'canoe',
                            'child',
                            'adult',
                            'older_adult',
                            'flying_saucer',
                            'prince',
                            'shopping_trolley',
                            'person_with_headscarf',
                            'bearded_person',
                            'man_in_tuxedo',
                            'pregnant_woman',
                            'breast-feeding',
                            'mrs_claus',
                            'mage',
                            'fairy',
                            'vampire',
                            'merperson',
                            'elf',
                            'genie',
                            'zombie',
                            'face_palm',
                            'shrug',
                            'man_dancing',
                            'person_in_steamy_room',
                            'person_climbing',
                            'person_in_lotus_position',
                            'fencer',
                            'person_doing_cartwheel',
                            'wrestlers',
                            'water_polo',
                            'handball',
                            'juggling',
                            'selfie',
                            'crossed_fingers',
                            'call_me_hand',
                            'left-facing_fist',
                            'right-facing_fist',
                            'raised_back_of_hand',
                            'i_love_you_hand_sign',
                            'palms_up_together',
                            'handshake',
                            'brain',
                            'orange_heart',
                            'black_heart',
                            'scarf',
                            'gloves',
                            'coat',
                            'socks',
                            'billed_cap',
                            'heart',
                            'pencil2',
                            'writing_hand',
                            'umbrella_on_ground',
                            'camping',
                            'beach_with_umbrella',
                            'desert_island',
                          ])
                          .describe('高亮 emoji 的 id')
                          .optional(),
                        background_color: z
                          .number()
                          .describe(
                            'Options:1(LightRed 浅红色),2(LightOrange 浅橙色),3(LightYellow 浅黄色),4(LightGreen 浅绿色),5(LightBlue 浅蓝色),6(LightPurple 浅紫色),7(LightNeutral 浅灰色),8(DarkRed 暗红色),9(DarkOrange 暗橙色),10(DarkYellow 暗黄色),11(DarkGreen 暗绿色),12(DarkBlue 暗蓝色),13(DarkPurple 暗紫色),14(DarkNeutral 暗灰色),15(DarkSlightGray 暗银灰色)',
                          )
                          .optional(),
                        border_color: z
                          .number()
                          .describe(
                            'Options:1(Red 红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Neutral 灰色)',
                          )
                          .optional(),
                        text_color: z
                          .number()
                          .describe(
                            'Options:1(Pink 粉红色),2(Orange 橙色),3(Yellow 黄色),4(Green 绿色),5(Blue 蓝色),6(Purple 紫色),7(Gray 灰色)',
                          )
                          .optional(),
                      })
                      .describe('高亮 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '群聊卡片':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(20),
                    chat_card: z
                      .object({
                        chat_id: z.string().describe('群聊天会话 ID'),
                        align: z.number().describe('对齐方式 Options:1(Left ),2(Center ),3(Right )').optional(),
                      })
                      .describe('群聊卡片 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '分割线':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(22),
                    divider: z.record(z.any()).describe('分割线 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '分栏':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(24),
                    grid: z
                      .object({
                        column_size: z.number().describe('分栏列数量'),
                      })
                      .describe('分栏 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '内嵌网页':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(26),
                    iframe: z
                      .object({
                        component: z
                          .object({
                            iframe_type: z
                              .number()
                              .describe(
                                'iframe 类型 Options:1(Bilibili 哔哩哔哩),2(XiGua 西瓜视频),3(Youku 优酷),4(Airtable),5(BaiduMap 百度地图),6(Amap 高德地图),7(TikTok Undefined),8(Figma),9(Modao 墨刀),10(Canva),11(CodePen),12(FeiShuWenJuan 飞书问卷),13(JinShuJu 金数据),14(GoogleMap Undefined),15(Youtube Undefined),99(Other)',
                              )
                              .optional(),
                            url: z.string().describe('内嵌网页 目标 url（需要进行 url_encode）'),
                          })
                          .describe('内嵌网页 的组成元素'),
                      })
                      .describe('内嵌网页 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '表格':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(31),
                    table: z
                      .object({
                        property: z
                          .object({
                            row_size: z.number().describe('行数'),
                            column_size: z.number().describe('列数'),
                            merge_info: z
                              .array(
                                z.object({
                                  row_span: z.number().describe('从当前行索引起被合并的连续行数').optional(),
                                  col_span: z.number().describe('从当前列索引起被合并的连续列数').optional(),
                                }),
                              )
                              .describe(
                                '单元格合并信息。在创建 Table 时候此属性是只读的，将由后端进行生成。如果需要对单元格进行合并操作，可以通过更新块的子请求 merge_table_cells 来实现',
                              )
                              .optional(),
                          })
                          .describe('表格属性'),
                      })
                      .describe('表格 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '文本绘图':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    mermaid_drawing: z
                      .object({
                        drawing_data: z.string().describe('mermaid代码，不需要转义'),
                        theme: z.enum(['default', 'dark', 'forest', 'neutral']).describe('主题 (可选，默认default)').optional(),
                      })
                      .describe('文本绘图 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '名词解释':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    glossary: z
                      .object({
                        terms: z
                          .array(
                            z.object({
                              name: z.string().describe('术语名称'),
                              alias: z.string().describe('术语别名').optional(),
                              desc: z.string().describe('术语描述'),
                              docs: z.array(z.string()).describe('相关文档').optional(),
                              images: z.array(z.string()).describe('相关图片').optional(),
                              links: z.array(z.string()).describe('相关链接').optional(),
                            }),
                          )
                          .describe('术语列表'),
                      })
                      .describe('名词解释 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '时间轴':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    timeline: z
                      .object({
                        items: z
                          .array(
                            z.object({
                              title: z.string().describe('时间轴项目标题'),
                              time: z.string().describe('时间点'),
                              text: z.string().describe('详细描述'),
                            }),
                          )
                          .describe('时间轴项目列表'),
                        mode: z
                          .enum(['horizontal_alternating', 'vertical_alternating', 'vertical_right', 'horizontal_top'])
                          .describe('显示模式 (可选，默认horizontal_alternating)')
                          .optional(),
                        content_show: z
                          .object({
                            title: z.boolean().describe('是否显示标题').optional(),
                            time: z.boolean().describe('是否显示时间').optional(),
                            text: z.boolean().describe('是否显示详情').optional(),
                          })
                          .describe('内容显示配置 (可选)')
                          .optional(),
                      })
                      .describe('时间轴 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '目录导航':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    catalog_navigation: z
                      .object({
                        show_catalog_level: z.number().describe('显示目录层级 (1-9, 默认3)').optional(),
                        is_show_all_level: z.boolean().describe('是否显示所有层级 (默认true)').optional(),
                        view_type: z.enum(['normal', 'simple', 'detailed']).describe('视图类型 (可选，默认normal)').optional(),
                        ignore_catalog_record_ids: z.array(z.string()).describe('忽略的目录记录ID列表 (可选)').optional(),
                      })
                      .describe('目录导航 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '信息收集':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    information_collection: z
                      .object({
                        config: z
                          .object({
                            beforText: z.string().describe('操作前的文本').optional(),
                            afterText: z.string().describe('操作后的文本').optional(),
                            color: z.enum(['BLACK', 'RED', 'BLUE', 'GREEN', 'ORANGE', 'PURPLE', 'YELLOW']).describe('颜色').optional(),
                            icon: z.enum(['SELECT', 'STAR', 'GOOD', 'LIKE', 'MEMBER', 'TIME', 'BELL']).describe('图标').optional(),
                            readType: z.number().describe('阅读类型').optional(),
                            selectVal: z.number().describe('选择值').optional(),
                          })
                          .describe('信息收集配置'),
                      })
                      .describe('信息收集 Block'),
                  }),
                ),
              ),
            },
          ],
        };
      case '日期提醒':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(2),
                    text: z
                      .object({
                        reminder: z
                          .object({
                            create_user_id: z.string().describe('创建者用户 ID'),
                            is_notify: z.boolean().describe('是否通知').optional(),
                            is_whole_day: z.boolean().describe('是日期还是整点小时').optional(),
                            expire_time: z.string().describe('事件发生的时间（毫秒级事件戳）'),
                            notify_time: z.string().describe('触发通知的时间（毫秒级时间戳）'),
                          })
                          .describe('日期提醒'),
                      })
                      .describe('文本'),
                  }),
                ),
              ),
            },
            {
              type: 'text' as const,
              text: '当前时间戳：' + Date.now() + '，当前时间：' + new Date().toLocaleString(),
            },
          ],
        };
      case '倒计时':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(40),
                    countdown: z.object({
                      color: z.string().describe('颜色,hex'),
                      duration: z.number().describe('倒计时时长,单位秒'),
                      startTime: z.string().describe('开始时间,毫秒级时间戳'),
                    }),
                  }),
                ),
              ),
            },
            {
              type: 'text' as const,
              text: '当前时间戳：' + Date.now() + '，当前时间：' + new Date().toLocaleString(),
            },
          ],
        };
      case '图片':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(27),
                    image: z.object({
                      width: z.number().describe('图片宽度').optional(),
                      height: z.number().describe('图片高度').optional(),
                      caption: z.string().describe('图片描述').optional(),
                    }),
                  }),
                ),
              ),
            },
          ],
        };
      case '视频':
      case '附件':
      case '文件':
        return {
          content: [
            {
              type: 'text' as const,
              text: JSON.stringify(
                zodToJsonSchema(
                  z.object({
                    block_type: z.literal(23),
                    file: z.object({
                      token: z.literal(''),
                    }),
                  }),
                ),
              ),
            },
            {
              type: 'text' as const,
              text: '不要受别的信息干扰，直接创建文件块就好',
            },
          ],
        };
      default:
        return {
          content: [
            {
              type: 'text' as const,
              text: `不支持的块类型: ${params.block_type}`,
            },
          ],
        };
    }
  },
};









