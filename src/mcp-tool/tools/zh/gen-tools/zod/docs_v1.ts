import { z } from 'zod';
export type docsV1ToolName = 'docs.v1.content.get';
export const docsV1ContentGet = {
  project: 'docs',
  name: 'docs.v1.content.get',
  sdkName: 'docs.v1.content.get',
  path: '/open-apis/docs/v1/content',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-通用-获取云文档内容-可获取云文档内容，当前只支持获取新版文档 Markdown 格式的内容',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      doc_token: z
        .string()
        .describe(
          '云文档的唯一标识。点击了解如何获取文档的 `doc_token`',
        ),
      doc_type: z.literal('docx').describe('云文档类型 Options:docx(新版文档)'),
      content_type: z.literal('markdown').describe('内容类型 Options:markdown(Markdown 格式)'),
      lang: z
        .enum(['zh', 'en', 'ja'])
        .describe(
          '云文档中存在 @用户 元素时，指定该用户名称的语言。默认 `zh`，即中文 Options:zh(中文),en(英文),ja(日文)',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const docsV1Tools = [docsV1ContentGet];
