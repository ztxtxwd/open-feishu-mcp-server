import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';
import { insertFile } from './helpers';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-插入文件或视频',
  bestFor: '在文档中插入文件或视频，支持url等多种来源',
  notRecommendedFor: '插入图片（请使用 docx_insert_image 工具）',
  promptExample: '在文档中插入一个PDF文件',
  usageExample: 'docx_insert_file({document_id: "xxx", block_id: "xxx", url: "https://example.com/file.pdf", file_name: "file.pdf"})',
  returns: '插入成功的文件块信息，包括块ID和文件token'
};

export const docxInsertFile = {
  project: 'docx',
  name: 'docx_insert_file',
  description: convertDescriptionToString(description),
  accessTokens: ['user'],
  schema: {
    document_id: z.string().describe('文档唯一标识'),
    block_id: z.string().describe('要在哪个块下插入文件，通常传入document_id'),
    index: z.number().describe('插入位置索引，从0开始').optional(),
    // 文件来源（四选一）
    url: z.string().describe('文件URL地址').optional(),
    base64: z.string().describe('base64编码的文件').optional(),
    text: z.string().describe('文本内容').optional(),
    svg2png: z.string().describe('SVG内容（将转换为PNG图片）').optional(),
    file_name: z.string().max(250).describe('文件名，需包含扩展名（如 .pdf, .mp4, .docx等）'),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      const result = await insertFile(client, options.userAccessToken, {
        document_id: params.document_id,
        block_id: params.block_id,
        index: params.index,
        url: params.url,
        base64: params.base64,
        svg2png: params.svg2png,
        text: params.text,
        file_name: params.file_name
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
      console.error('docxInsertFile 工具执行失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `插入文件失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};
