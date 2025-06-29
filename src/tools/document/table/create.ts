import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-表格-创建表格',
  bestFor: '在文档中创建表格，单元格中可以插入任何类型的块（文本、图片、列表等）',
  notRecommendedFor: '修改现有表格（请使用patch工具）',
  promptExample: '创建一个2x3的表格，第一行作为表头',
  usageExample: 'docx_table_create({document_id: "xxx", block_id: "parent_block", data: {children_id: ["table_id"], descendants: [table_structure]}})',
  returns: '新创建的表格块信息和结构'
};

export const docxV1DocumentTableCreate = {
  project: 'docx',
  name: 'docx_table_create',
  sdkName: 'docx.v1.documentTable.create',
  path: '/open-apis/docx/v1/documents/:document_id/tables',
  httpMethod: 'POST',
  description: convertDescriptionToString(description),
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
      const response = await client.docx.v1.documentBlockDescendant.create(params, lark.withUserAccessToken(options.userAccessToken));
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response),
          },
        ],
      };
    } catch (error) {
      console.error('docxV1DocumentTableCreate 工具执行失败:', error);
      return {
        isError: true,
        content: [{ type: 'text', text: `docxV1DocumentTableCreate 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      };
    }
  },
};