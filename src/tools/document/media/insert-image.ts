import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';
import { insertImage } from './helpers';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-插入图片',
  bestFor: '在文档中插入图片，支持url、base64、svg等多种格式',
  notRecommendedFor: '插入文件或视频（请使用 docx_insert_file 工具）',
  promptExample: '在文档中插入一张图片',
  usageExample: 'docx_insert_image({document_id: "xxx", block_id: "xxx", url: "https://example.com/image.png", file_name: "image.png"})',
  returns: '插入成功的图片块信息，包括块ID和文件token'
};

export const docxInsertImage = {
  project: 'docx',
  name: 'docx_insert_image',
  description: convertDescriptionToString(description),
  accessTokens: ['user'],
  schema: {
    document_id: z.string().describe('文档唯一标识'),
    block_id: z.string().describe('要在哪个块下插入图片，通常传入document_id'),
    index: z.number().describe('插入位置索引，从0开始').optional(),
    // 图片来源（四选一）
    url: z.string().describe('图片URL地址').optional(),
    base64: z.string().describe('base64编码的图片').optional(),
    svg2png: z.string().describe('SVG内容，将自动转换为PNG').optional(),
    text: z.string().describe('文本内容（用于特殊场景）').optional(),
    file_name: z.string().max(250).describe('文件名'),
    // 图片属性
    width: z.number().describe('图片宽度（像素）').optional(),
    height: z.number().describe('图片高度（像素）').optional(),
    caption: z.string().describe('图片描述/标题').optional(),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      const result = await insertImage(client, options.userAccessToken, {
        document_id: params.document_id,
        block_id: params.block_id,
        index: params.index,
        url: params.url,
        base64: params.base64,
        svg2png: params.svg2png,
        text: params.text,
        file_name: params.file_name,
        width: params.width,
        height: params.height,
        caption: params.caption
      });

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(result, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('docxInsertImage 工具执行失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `插入图片失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};
