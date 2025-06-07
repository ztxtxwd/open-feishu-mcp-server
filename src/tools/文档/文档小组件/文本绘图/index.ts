import { z } from 'zod'
import { Client } from '@larksuiteoapi/node-sdk'
import { larkOapiHandler } from '../../../../mcp-tool/utils/handler'

// Schema定义
const MermaidSchema = z.object({
  document_id: z.string().describe('文档ID'),
  parent_block_id: z.string().describe('父级块ID (可选，默认为文档根)').optional(),
  index: z.number().describe('插入位置 (可选)').optional(),
  drawing_data: z.string().describe('Mermaid绘图数据'),
  theme: z.enum(['default', 'dark', 'forest', 'neutral']).describe('主题 (可选，默认default)').optional(),
})

export const docxAddonsMermaidCreate = {
  project: 'docx',
  name: 'docx.addons.mermaid.create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-文档-块-创建文本绘图文档小组件块，并插入到指定位置。如果操作成功，接口将返回新创建块的富文本内容',
  accessTokens: ['tenant', 'user'],
  schema: MermaidSchema,
  customHandler: async (client: Client, params: z.infer<typeof MermaidSchema>, options: any) => {
    // 参数验证
    const validatedParams = MermaidSchema.parse(params)
    
    // 固定值配置
    const BLOCK_TYPE = 40;                                      // AddOns 文档小组件类型
    const COMPONENT_TYPE_ID = 'blk_631fefbbae02400430b8f9f4';   // 文本绘图组件类型ID
    const REVISION_ID = -1;                                     // 使用最新版本
    const USER_ID_TYPE = 'open_id';                            // 固定使用open_id
    
    const theme = validatedParams.theme || 'default';
    const record = JSON.stringify({
      data: validatedParams.drawing_data,
      theme,
      view: 'chart',
    });

    // 移除或改为debug级别的日志
    // console.log(record)

    const blockId = validatedParams.parent_block_id || validatedParams.document_id;
    const path = {
      document_id: validatedParams.document_id,
      block_id: blockId,
    }
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
    }
    
    try {
      const response = await larkOapiHandler(client, {params:{}, data, path, useUAT: true}, options)
      return response
    } catch (error) {
      console.error('创建文本绘图块失败:', error)
      throw error
    }
  }
}
