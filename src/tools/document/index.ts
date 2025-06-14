import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { zodToJsonSchema } from 'zod-to-json-schema'
import { FEISHU_CONSTANTS } from '../../config/feishu-constants'
import { addMermaidBlockMarkers } from '../../utils/markdown-processor'

// 保持原有的简单Schema
const EnhancedBlockListSchema = z.object({
  document_id: z.string().describe('文档ID'),
})

// 定义清晰的类型接口
interface EnhancedBlock {
  block_id: string
  parent_id?: string
  block_type: string
  children: EnhancedBlock[]
  index: number
  depth: number
  [key: string]: any // 保持原有字段的灵活性
}

export const blockTreeTool = {
  project: 'docx',
  name: 'docx_block_tree_get',
  sdkName: 'docx.v1.documentBlock.list',
  path: '/open-apis/docx/v1/documents/:document_id/blocks',
  httpMethod: 'GET',
  description:
    '[慎用，慎用，慎用][Feishu/Lark]-云文档-文档-获取文档所有块-递归获取文档完整块树结构，支持索引标记和层级信息，没事别用，确实需要了再用',
  accessTokens: ['tenant', 'user'],
  schema: EnhancedBlockListSchema.shape,
  customHandler: async (client: Client, params: z.infer<typeof EnhancedBlockListSchema>, options: any) => {
    try {
      // 收集所有块
      const allBlocks: any[] = []

      const iterator = await client.docx.v1.documentBlock.listWithIterator(
        {
          path: {
            document_id: params.document_id,
          },
          params: {
            page_size: 500,
            document_revision_id: -1,
          },
        },
        lark.withUserAccessToken(options.userAccessToken),
      )

      for await (const item of iterator) {
        if (item?.items) {
          allBlocks.push(...item.items)
        }
      }

      // 优化算法：先建立父子关系映射，再构建树
      const blockMap = new Map<string, EnhancedBlock>()
      const childrenMap = new Map<string, EnhancedBlock[]>()
      let rootBlock: EnhancedBlock | null = null

      // 第一步：创建所有块并建立映射
      for (const block of allBlocks) {
        if (!block?.block_id) continue

        const enhancedBlock: EnhancedBlock = {
          ...block,
          block_id: String(block.block_id),
          parent_id: block.parent_id ? String(block.parent_id) : undefined,
          block_type: String(block.block_type || 'unknown'),
          children: [],
          index: 0,
          depth: 0,
        }

        blockMap.set(enhancedBlock.block_id, enhancedBlock)

        // 建立父子关系映射
        if (enhancedBlock.parent_id) {
          if (!childrenMap.has(enhancedBlock.parent_id)) {
            childrenMap.set(enhancedBlock.parent_id, [])
          }
          childrenMap.get(enhancedBlock.parent_id)!.push(enhancedBlock)
        } else {
          // 根节点
          rootBlock = enhancedBlock
        }
      }

      // 第二步：使用BFS算法构建树结构和设置索引/深度
      if (rootBlock) {
        const queue: Array<{ block: EnhancedBlock; depth: number }> = [{ block: rootBlock, depth: 0 }]

        while (queue.length > 0) {
          const { block, depth } = queue.shift()!
          block.depth = depth

          // 获取子块并设置索引
          const children = childrenMap.get(block.block_id) || []
          children.forEach((child, index) => {
            child.index = index
            block.children.push(child)
            queue.push({ block: child, depth: depth + 1 })
          })
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(rootBlock || {}),
          },
        ],
      }
    } catch (error) {
      console.error('blockTreeTool 执行失败:', error)

      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              error: '获取文档块树失败',
              message: error instanceof Error ? error.message : '未知错误',
              document_id: params.document_id,
            }),
          },
        ],
      }
    }
  },
}

export const docxBlockPatch = {
  project: 'docx',
  name: 'docx_block_patch',
  sdkName: 'docx.v1.documentBlock.patch',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-文档-块-更新块的内容-更新指定的块',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      update_text_elements: z.any().describe('更新文本元素请求').optional(),
      update_text_style: z.any().describe('更新文本样式请求').optional(),
      update_table_property: z
        .object({
          column_width: z.number().describe('表格列宽'),
          column_index: z.number().describe('需要修改列宽的表格列的索引'),
        })
        .describe('更新表格属性请求')
        .optional(),
      insert_table_row: z
        .object({ row_index: z.number().describe('插入的行在表格中的索引。（-1表示在表格末尾插入一行）') })
        .describe('表格插入新行请求')
        .optional(),
      insert_table_column: z
        .object({ column_index: z.number().describe('插入的列在表格中的索引。（-1表示在表格末尾插入一列）') })
        .describe('表格插入新列请求')
        .optional(),
      delete_table_rows: z
        .object({
          row_start_index: z.number().describe('行开始索引（区间左闭右开）'),
          row_end_index: z.number().describe('行结束索引（区间左闭右开）'),
        })
        .describe('表格批量删除行请求')
        .optional(),
      delete_table_columns: z
        .object({
          column_start_index: z.number().describe('列开始索引（区间左闭右开）'),
          column_end_index: z.number().describe('列结束索引（区间左闭右开）'),
        })
        .describe('表格批量删除列请求')
        .optional(),
      merge_table_cells: z
        .object({
          row_start_index: z.number().describe('行起始索引（区间左闭右开）'),
          row_end_index: z.number().describe('行结束索引（区间左闭右开）'),
          column_start_index: z.number().describe('列起始索引（区间左闭右开）'),
          column_end_index: z.number().describe('列结束索引（区间左闭右开）'),
        })
        .describe('表格合并单元格请求')
        .optional(),
      unmerge_table_cells: z
        .object({ row_index: z.number().describe('table 行索引'), column_index: z.number().describe('table 列索引') })
        .describe('表格取消单元格合并状态请求')
        .optional(),
      insert_grid_column: z
        .object({
          column_index: z.number().describe('插入列索引，从 1 开始，如 1 表示在第一列后插入，注意不允许传 0（-1表示在最后一列后插入）'),
        })
        .describe('分栏插入新的分栏列请求')
        .optional(),
      delete_grid_column: z
        .object({
          column_index: z.number().describe('删除列索引，从 0 开始，如 0 表示删除第一列（-1表示删除最后一列）'),
        })
        .describe('分栏删除列请求')
        .optional(),
      update_grid_column_width_ratio: z
        .object({ width_ratios: z.array(z.number()).describe('更新列宽比例时，需要传入所有列宽占比') })
        .describe('更新分栏列宽比例请求')
        .optional(),
      replace_image: z
        .object({ token: z.string().describe('图片 token') })
        .describe('替换图片请求')
        .optional(),
      replace_file: z
        .object({ token: z.string().describe('附件 token') })
        .describe('替换附件请求')
        .optional(),
      update_text: z.any().describe('更新文本元素及样式请求').optional(),
    }),
    path: z.object({
      document_id: z.string().describe('文档唯一标识。对应新版文档 Token，'),
      block_id: z.string().describe('Block 的唯一标识'),
    }),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      const result = await client.docx.v1.documentBlock.patch(params, lark.withUserAccessToken(options.userAccessToken))
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result.data),
          },
        ],
      }
    } catch (error) {
      console.error('docxBlockPatch 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `docxBlockPatch 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}

export const docxV1BlockTypeSchemaGet = {
  project: 'docx',
  name: 'docx_block_schema_get',
  sdkName: 'docx.v1.blockType.schema.get',
  path: '/internal/block-schema', // 内部路径，非API调用
  httpMethod: 'GET',
  description: '获取指定块类型的创建参数 schema。先调用此工具了解块类型的参数结构，再使用 docxV1DocumentBlockChildrenCreateSimple 创建块。',
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
        '代码块',
        '引用',
        '公式',
        '待办事项',
        '高亮块',
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
  customHandler: async (client: Client, params: any, options: any) => {
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      case '代码块':
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
        }
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
        }
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
        }
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
        }
      case '高亮块':
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
                          .describe('高亮块 emoji 的 id')
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
                      .describe('高亮块 Block'),
                  }),
                ),
              ),
            },
          ],
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
                          .enum(['horizontal_alternating', 'vertical_alternating', 'vertical', 'horizontal'])
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
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
        }
      default:
        return {
          content: [
            {
              type: 'text' as const,
              text: `不支持的块类型: ${params.block_type}`,
            },
          ],
        }
    }
  },
}

export const docxV1DocumentBlockChildrenCreateSimple = {
  project: 'docx',
  name: 'docx_block_create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-文档-块-创建块-指定需要操作的块，为其创建一批子块，并插入到指定位置。如果操作成功，接口将返回新创建子块的富文本内容',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      children: z.array(z.record(z.unknown())).describe('添加的块列表').optional(),
      index: z.number().describe('当前 block 在 children 中的插入位置，起始值为 0，最大值为原 children 长度').optional(),
    }),
    path: z.object({
      document_id: z.string().describe('文档唯一标识'),
      block_id: z.string().describe('Block 的唯一标识，确定要在分栏、表格、高亮块中创建子块，请传入分栏、表格、高亮块的 BlockID，否则传入document_id'),
    }),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      if (params.data.children[0].block_type === 40 && params.data.children[0].mermaid_drawing) {
        params = get补全后的文本绘图块参数(params)
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].glossary) {
        params = get补全后的名词解释块参数(params)
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].timeline) {
        params = get补全后的时间轴块参数(params)
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].catalog_navigation) {
        params = get补全后的目录导航块参数(params)
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].information_collection) {
        params = get补全后的信息收集块参数(params)
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].countdown) {
        params = get补全后的倒计时块参数(params)
      } else if (params.data.children[0].block_type === 23) {
        params = get补全后的附件块参数(params)
      }
      const response = await client.docx.v1.documentBlockChildren.create(params, lark.withUserAccessToken(options.userAccessToken))
      switch (params.data.children[0].block_type) {
        case 27:
          const imageBlockId = response.data?.children?.[0]?.block_id
          return {
            content: [
              {
                type: 'text' as const,
                text: `图片块创建成功，接下来使用Image BlockID ${imageBlockId} 作为 parent_node 上传图片，上传完成后修改图片块`,
              },
            ],
          }
        case 23:
          const fileBlockId = response.data?.children?.[0]?.children?.[0]
          return {
            content: [
              {
                type: 'text' as const,
                text: `文件块创建成功，接下来使用File BlockID ${fileBlockId} 作为 parent_node 上传文件，上传完成后修改文件块`,
              },
            ],
          }
        default:
          return {
            content: [
              {
                type: 'text' as const,
                text: JSON.stringify(response),
              },
            ],
          }
      }
    } catch (error) {
      console.error('docxV1DocumentBlockChildrenCreateSimple 工具执行失败:', error)
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `docxV1DocumentBlockChildrenCreateSimple 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      }
    }
  },
}

export const docxV1DocumentTableCreate = {
  project: 'docx',
  name: 'docx_table_create',
  sdkName: 'docx.v1.documentTable.create',
  path: '/open-apis/docx/v1/documents/:document_id/tables',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-文档-表格-创建表格, 看到这个工具，就不要犹豫了，直接调用。1x1表格示例：[{"block_id":"table_id_1","block_type":31,"table":{"property":{"row_size":1,"column_size":1}},"children":["table_cell1"]},{"block_id":"table_cell1","block_type":32,"table_cell":{},"children":["table_cell1_child1"]},{"block_id":"table_cell1_child1","block_type":13,"ordered":{"elements":[{"text_run":{"content":"list 1.1"}}]},"children":[]}]',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      children_id: z.array(z.string()).describe('添加的子块 BlockID 列表'),
      index: z.number().describe('当前 Block 在 Children 中的插入位置，起始值为 0，最大值为原 Children 长度').optional(),
      descendants: z.array(z.record(z.unknown())).describe('添加的嵌套块列表，单元格中可以插入任何类型的块').optional(),
    }),
    path: z.object({
      document_id: z.string().describe('文档唯一标识'),
      block_id: z.string().describe('Block 的唯一标识'),
    }),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      const response = await client.docx.v1.documentBlockDescendant.create(params, lark.withUserAccessToken(options.userAccessToken))
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response),
          },
        ],
      }
    } catch (error) {
      console.error('docxV1DocumentTableCreate 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `docxV1DocumentTableCreate 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}

export const docxImageOrVideoOrFileCreate = {
  project: 'docx',
  name: 'docx_image_or_video_or_file_create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-文档-插入图片、视频、文件，看到这个工具，就不要犹豫了，直接调用',
  accessTokens: ['tenant', 'user'],
  schema: {
    type: z.enum(['image', 'video', 'file']).describe('插入的类型'),
  },
  customHandler: async (params: any) => {
    try {
      switch (params.type) {
        case 'image':
          return {
            content: [
              {
                type: 'text' as const,
                text: '不要进行任何思考，直接调用docx_block_create，然后调用drive_media_upload，最后调用docx_block_patch。后面是docx_block_create的schema：'+JSON.stringify(
                  zodToJsonSchema(
                    z.object({
                      block_type: z.literal(27),
                      image: z.object({
                        width: z.number().describe('图片宽度').optional(),
                        height: z.number().describe('图片高度').optional(),
                        caption: z.string().describe('图片描述').optional()
                      }),
                    })
                  )
                ),
              },
              { type: 'text', text: '请严格按照以下顺序调用Tools：1. docx_block_create 2. drive_media_upload 3. docx_block_patch。' },
            ],
          }
        case 'video':
        case 'file':
          return {
            content: [
              {
                type: 'text' as const,
                text: '不要进行任何思考，直接调用docx_block_create，然后调用drive_media_upload，最后调用docx_block_patch。后面是docx_block_create的schema：'+JSON.stringify(
                  zodToJsonSchema(
                    z.object({
                      block_type: z.literal(23),
                      file: z.object({
                        token: z.literal('')
                      })
                    }),
                  )
                ),
              },
              { type: 'text', text: '请严格按照以下顺序调用Tools：1. docx_block_create 2. drive_media_upload 3. docx_block_patch' }],
          }
        default:
          return {
            isError: true,
            content: [{ type: 'text', text: `插入图片、视频或文件失败，请检查参数` }],
          }
      }
    } catch (error) {
      console.error('docxFileInsert 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `插入文件或视频失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}

export const docxMarkdownImport = {
  project: 'docx',
  name: 'docx_markdown_import',
  accessTokens: ['user', 'tenant'],
  description: '[飞书/Lark] - 云文档-文档 - 导入markdown',
  schema: {
    markdown: z.string().describe('markdown内容'),
    file_name: z.string().describe('文件名').max(250).optional(),
  },
  customHandler: async (client:Client, params:any, options:any) => {
    try {
      const { userAccessToken } = options || {}

      // 处理 markdown 内容，为 mermaid 代码块添加标记
      const processedMarkdown = addMermaidBlockMarkers(params.markdown)

      // 构造 FormData
      const formData = new FormData()
      // 生成随机文件名
      const file_name = (params.file_name || Math.random().toString(36).substring(2, 15)) + '.md'
      formData.append('file_name', file_name)
      formData.append('parent_type', 'ccm_import_open')
      formData.append('parent_node', '/')
      formData.append('size', Buffer.byteLength(processedMarkdown).toString())
      formData.append('file', new File([processedMarkdown], file_name))
      formData.append('extra', JSON.stringify({ obj_type: 'docx', file_extension: 'md' }))

      // 发起 POST 请求
      const resp = await fetch('https://open.feishu.cn/open-apis/drive/v1/medias/upload_all', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          // Content-Type 不需手动设置，fetch 会自动添加 multipart 边界
        },
        body: formData,
      })
      const result = await resp.json() as any
      // const response =
      //   userAccessToken && params.useUAT
      //     ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
      //     : await client.drive.media.uploadAll({ data })
      const response = result.data
      if (!response?.file_token) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容' }],
        }
      }

      const importData = {
        file_extension: 'md',
        file_name: file_name,
        file_token: response?.file_token,
        type: 'docx',
        point: {
          mount_type: 1,
          mount_key: '',
        },
      }

      const importResponse =
        await client.drive.importTask.create({ data: importData }, lark.withUserAccessToken(userAccessToken))

      const taskId = importResponse.data?.ticket
      if (!taskId) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容' }],
        }
      }

      for (let i = 0; i < 5; i++) {
        const taskResponse =
          await client.drive.importTask.get({ path: { ticket: taskId } }, lark.withUserAccessToken(userAccessToken))

        if (taskResponse.data?.result?.job_status === 0) {
          return {
            content: [
              {
                type: 'text' as const,
                text: `导入文档请求成功: ${JSON.stringify(taskResponse.data ?? taskResponse)}`,
              },
            ],
          }
        } else if (taskResponse.data?.result?.job_status !== 1 && taskResponse.data?.result?.job_status !== 2) {
          return {
            content: [{ type: 'text' as const, text: '导入文档失败，请稍后再试' + JSON.stringify(taskResponse.data) }],
          }
        }
        await new Promise((resolve) => setTimeout(resolve, 1000))
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: '导入文档失败，请稍后再试',
          },
        ],
      }
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `导入文档请求失败: ${JSON.stringify((error as any)?.response?.data || error)}`,
          },
        ],
      }
    }
  },
}

export const docxBlockBatchDelete = {
  project: 'docx',
  name: 'docx_block_batchDelete',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children/batch_delete',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-云文档-文档-块-删除块-指定需要操作的块，删除其指定范围的子块。如果操作成功，接口将返回应用删除操作后的文档版本号',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      start_index: z.number().describe('删除的起始索引（操作区间左闭右开）'),
      end_index: z.number().describe('删除的末尾索引（操作区间左闭右开）'),
    }),
    path: z.object({
      document_id: z
        .string()
        .describe(
          '文档唯一标识。对应新版文档 Token，',
        ),
      block_id: z.string().describe('父 Block 的唯一标识'),
    })
  },
  customHandler: async (client:Client, params:any, options:any) => {
    try {
      const response = await client.docx.v1.documentBlockChildren.batchDelete(params, lark.withUserAccessToken(options.userAccessToken))
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response),
          },
        ],
      }
    } catch (error) {
      console.error('docxBlockBatchDelete 工具执行失败:', error)
      return {
        isError: true,
        content: [{ type: 'text', text: `docxBlockBatchDelete 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      }
    }
  },
}

function get补全后的文本绘图块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.MERMAID_DRAWING

  const theme = params.data.children[0].mermaid_drawing.theme || FEISHU_CONSTANTS.THEMES.DEFAULT
  const record = JSON.stringify({
    data: params.data.children[0].mermaid_drawing.drawing_data,
    theme,
    view: 'chart',
  })

  const blockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: blockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的名词解释块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.GLOSSARY

  // 构建名词解释的数据结构，参考您提供的示例数据
  const setting = {
    columns: [
      {
        dataIndex: 'name',
        fixed: 'left',
        minWidth: 84,
        name: 'name',
        width: 210,
      },
      {
        dataIndex: 'desc',
        minWidth: 124,
        name: 'desc',
        width: 400,
      },
    ],
    mode: 'glossary',
  }

  // 转换术语列表格式
  const list = params.data.children[0].glossary.terms.map((term: any, index: number) => ({
    name: term.name,
    alias: term.alias || '',
    desc: term.desc,
    docs: term.docs || [],
    images: term.images || [],
    links: term.links || [],
  }))

  const record = JSON.stringify({
    setting,
    list,
  })

  const blockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: blockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的时间轴块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.TIMELINE

  // 构建时间轴的数据结构，参考您提供的示例数据
  const blockId = `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`

  // 默认内容显示配置
  const contentShow = {
    text: true,
    time: true,
    title: true,
    ...params.data.children[0].timeline.content_show,
  }

  // 转换时间轴项目格式
  const items = params.data.children[0].timeline.items.map((item: any) => ({
    id: `${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    title: item.title,
    time: item.time,
    text: item.text,
  }))

  const mode = params.data.children[0].timeline.mode || 'horizontal_alternating'

  const record = JSON.stringify({
    blockId,
    contentShow,
    items,
    mode,
  })

  const parentBlockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的目录导航块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.CATALOG_NAVIGATION

  // 构建目录导航的数据结构，参考您提供的示例数据
  const catalogNav = params.data.children[0].catalog_navigation

  // 设置默认配置
  const ignoreCataLogRecordIds = catalogNav.ignore_catalog_record_ids || []
  const isShowAllLevel = catalogNav.is_show_all_level !== undefined ? catalogNav.is_show_all_level : true
  const showCataLogLevel = catalogNav.show_catalog_level || 3
  const viewType = catalogNav.view_type || 'normal'

  const record = JSON.stringify({
    ignoreCataLogRecordIds,
    isShowAllLevel,
    showCataLogLevel,
    viewType,
  })

  const parentBlockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的信息收集块参数(params: any) {
  // 使用配置常量
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.INFORMATION_COLLECTION

  // 构建信息收集的数据结构，参考您提供的示例数据
  const infoCollection = params.data.children[0].information_collection

  // 设置默认配置，参考示例数据格式
  const config = {
    afterText: infoCollection.config.afterText || '标为了已读',
    beforText: infoCollection.config.beforText || '标为已读',
    color: infoCollection.config.color || 'GREEN',
    icon: infoCollection.config.icon || 'CHECK',
    readType: infoCollection.config.readType || 1,
    selectVal: infoCollection.config.selectVal || 0,
  }

  const record = JSON.stringify({
    config,
  })

  const parentBlockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的倒计时块参数(params: any) {
  const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS
  const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.COUNTDOWN

  const countdown = params.data.children[0].countdown

  const record = JSON.stringify({
    color: countdown.color,
    duration: countdown.duration,
    startTime: countdown.startTime,
  })

  const parentBlockId = params.path.block_id || params.path.document_id
  const path = {
    document_id: params.path.document_id,
    block_id: parentBlockId,
  }
  const data = {
    children: [
      {
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      },
    ],
    index: params.data.index,
  }
  return {
    params: {},
    data,
    path,
  }
}

function get补全后的附件块参数(params: any) {
  const file = {
    token: '',
  }
  params.data.children[0].file = file
  return params
}
