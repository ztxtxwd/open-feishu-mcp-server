import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';

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
      const response = await client.docx.v1.documentBlockChildren.batchDelete(params, lark.withUserAccessToken(options.userAccessToken));
      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(response),
          },
        ],
      };
    } catch (error) {
      console.error('docxBlockBatchDelete 工具执行失败:', error);
      return {
        isError: true,
        content: [{ type: 'text', text: `docxBlockBatchDelete 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      };
    }
  },
};