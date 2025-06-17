import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';

import { larkOapiHandler } from '../../../../mcp-tool/utils/handler';
import { FEISHU_CONSTANTS } from '../../../../config/feishu-constants';

// Schema定义
const MermaidSchema = z.object({
  document_id: z.string().describe('文档ID'),
  parent_block_id: z.string().describe('父级块ID (可选，默认为文档根)').optional(),
  index: z.number().describe('插入位置 (可选)').optional(),
  drawing_data: z.string().describe('Mermaid绘图数据'),
  theme: z.enum(['default', 'dark', 'forest', 'neutral']).describe('主题 (可选，默认default)').optional(),
});

export const docxAddonsMermaidCreate = {
  project: 'docx',
  name: 'docx.addons.mermaid.create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-文档-块-创建文本绘图文档小组件块，并插入到指定位置。如果操作成功，接口将返回新创建块的富文本内容',
  accessTokens: ['tenant', 'user'],
  schema: MermaidSchema.shape,
  customHandler: async (client: Client, params: z.infer<typeof MermaidSchema>, options: any) => {
    // 参数验证
    const validatedParams = MermaidSchema.parse(params);
    
    // 使用配置常量
    const BLOCK_TYPE = FEISHU_CONSTANTS.BLOCK_TYPES.ADDONS;
    const COMPONENT_TYPE_ID = FEISHU_CONSTANTS.COMPONENT_TYPE_IDS.MERMAID_DRAWING;
    const REVISION_ID = FEISHU_CONSTANTS.DEFAULTS.REVISION_ID;
    const USER_ID_TYPE = FEISHU_CONSTANTS.DEFAULTS.USER_ID_TYPE;
    
    const theme = validatedParams.theme || FEISHU_CONSTANTS.THEMES.DEFAULT;
    const record = JSON.stringify({
      data: validatedParams.drawing_data,
      theme,
      view: 'chart',
    });

    const blockId = validatedParams.parent_block_id || validatedParams.document_id;
    const path = {
      document_id: validatedParams.document_id,
      block_id: blockId,
    };
    const data = {
      children: [{
        block_type: BLOCK_TYPE,
        add_ons: {
          component_type_id: COMPONENT_TYPE_ID,
          record,
        },
      }],
      index: validatedParams.index,
      revision_id: REVISION_ID,
      user_id_type: USER_ID_TYPE,
    };
    
    try {
      const response = await larkOapiHandler(client, {params:{}, data, path, useUAT: true}, options);
      return response;
    } catch (error) {
      console.error('创建文本绘图块失败:', error);
      throw error;
    }
  }
};
