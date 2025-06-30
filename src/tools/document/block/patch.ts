import z from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import * as lark from '@larksuiteoapi/node-sdk'
import { convertDescriptionToString, McpToolDescription } from '../../types'

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-块-更新块的内容-更新指定的块',
  bestFor: '文本、标题、表格、分栏、图片、附件、有序列表、无序列表、引用、待办事项、代码',
  notRecommendedFor: '其他块类型，其他块类型请先删除再创建以实现更新',
  returns: '更新后的块内容',
}
export const docxBlockPatch = {
  name: 'docx_block_patch',
  description: convertDescriptionToString(description),
  inputSchema: {
    data: z.object({
      update_text_elements: z
        .object({
          elements: z.any().describe('文本元素'),
        })
        .describe('更新文本元素')
        .optional(),
      update_text_style: z
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
            .describe('文本样式'),
          fields: z
            .array(
              z
                .number()
                .min(1)
                .max(7)
                .describe(
                  '1：修改 Block 的对齐方式 2：Todo 的完成状态。支持对 Todo 和 Task 块进行修改 3：文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet、Todo 和 Task 块进行修改 4：代码块语言类型。仅支持对 Code 块进行修改 5：代码块是否自动换行。支持对 Code 块进行修改 6：块背景色 7：首行缩进级别。仅支持对 Text 块进行修改。',
                ),
            )
            .describe('应更新的字段，必须至少指定一个字段。'),
        })
        .describe('更新文本样式')
        .optional(),
      update_table_property: z
        .object({
          column_width: z.number().describe('表格列宽'),
          column_index: z.number().describe('需要修改列宽的表格列的索引'),
        })
        .describe('更新表格属性')
        .optional(),
      insert_table_row: z
        .object({ row_index: z.number().describe('插入的行在表格中的索引。（-1表示在表格末尾插入一行）') })
        .describe('表格插入新行')
        .optional(),
      insert_table_column: z
        .object({ column_index: z.number().describe('插入的列在表格中的索引。（-1表示在表格末尾插入一列）') })
        .describe('表格插入新列')
        .optional(),
      delete_table_rows: z
        .object({
          row_start_index: z.number().describe('行开始索引（区间左闭右开）'),
          row_end_index: z.number().describe('行结束索引（区间左闭右开）'),
        })
        .describe('表格批量删除行')
        .optional(),
      delete_table_columns: z
        .object({
          column_start_index: z.number().describe('列开始索引（区间左闭右开）'),
          column_end_index: z.number().describe('列结束索引（区间左闭右开）'),
        })
        .describe('表格批量删除列')
        .optional(),
      merge_table_cells: z
        .object({
          row_start_index: z.number().describe('行起始索引（区间左闭右开）'),
          row_end_index: z.number().describe('行结束索引（区间左闭右开）'),
          column_start_index: z.number().describe('列起始索引（区间左闭右开）'),
          column_end_index: z.number().describe('列结束索引（区间左闭右开）'),
        })
        .describe('表格合并单元格')
        .optional(),
      unmerge_table_cells: z
        .object({ row_index: z.number().describe('table 行索引'), column_index: z.number().describe('table 列索引') })
        .describe('表格取消单元格合并状态')
        .optional(),
      insert_grid_column: z
        .object({
          column_index: z.number().describe('插入列索引，从 1 开始，如 1 表示在第一列后插入，注意不允许传 0（-1表示在最后一列后插入）'),
        })
        .describe('分栏插入新的分栏列')
        .optional(),
      delete_grid_column: z
        .object({
          column_index: z.number().describe('删除列索引，从 0 开始，如 0 表示删除第一列（-1表示删除最后一列）'),
        })
        .describe('分栏删除列')
        .optional(),
      update_grid_column_width_ratio: z
        .object({ width_ratios: z.array(z.number()).describe('更新列宽比例时，需要传入所有列宽占比') })
        .describe('更新分栏列宽比例')
        .optional(),
      replace_image: z
        .object({ token: z.string().describe('图片 token') })
        .describe('替换图片')
        .optional(),
      replace_file: z
        .object({ token: z.string().describe('附件 token') })
        .describe('替换附件')
        .optional(),
      //   update_text: z.object({
      //     elements: z.any().describe('文本元素'),
      //     style: z.any().describe('文本样式'),
      //     fields: z.array(z.number().min(1).max(7).describe('1：修改 Block 的对齐方式 2：Todo 的完成状态。支持对 Todo 和 Task 块进行修改 3：文本的折叠状态。支持对 Heading1~9、和有子块的 Text、Ordered、Bullet、Todo 和 Task 块进行修改 4：代码块语言类型。仅支持对 Code 块进行修改 5：代码块是否自动换行。支持对 Code 块进行修改 6：块背景色 7：首行缩进级别。仅支持对 Text 块进行修改。')).describe('应更新的字段，必须至少指定一个字段。'),
      //   }).describe('更新文本元素及样式').optional(),
    }).describe('更新块内容'),
    path: z.object({ document_id: z.string().describe('文档ID'), block_id: z.string().describe('块ID') }).describe('路径'),
  },
  customHandler: async (params: any, client: Client, userAccessToken: string) => {
    try {
      const result = await client.docx.v1.documentBlock.patch(params, lark.withUserAccessToken(userAccessToken))
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
