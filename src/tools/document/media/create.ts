import z from 'zod';
import { zodToJsonSchema } from 'zod-to-json-schema';
import { convertDescriptionToString, McpToolDescription } from '../../types';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-插入图片、视频、文件-辅助工具',
  bestFor: '在文档中插入图片(svg、base64、url)、视频(url)、文件(url)，提供完整的插入流程指导',
  notRecommendedFor: '直接的文件上传（此工具只提供指导流程）',
  promptExample: '在文档中插入一张图片',
  usageExample: 'docx_image_or_video_or_file_create({type: "image"})',
  returns: '插入媒体文件的详细步骤指导和所需的schema'
};

export const docxImageOrVideoOrFileCreate = {
  project: 'docx',
  name: 'docx_image_or_video_or_file_create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description: convertDescriptionToString(description),
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
                text: '不要进行任何思考，直接调用docx_block_create，然后调用drive_media_upload，最后调用docx_block_patch。后面是docx_block_create中要用到的图片块的schema：'+JSON.stringify(
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
          };
        case 'video':
        case 'file':
          return {
            content: [
              {
                type: 'text' as const,
                text: '不要进行任何思考，直接调用docx_block_create，然后调用drive_media_upload，最后调用docx_block_patch。后面是docx_block_create中要用到的文件块的schema：'+JSON.stringify(
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
          };
        default:
          return {
            isError: true,
            content: [{ type: 'text', text: `插入图片、视频或文件失败，请检查参数` }],
          };
      }
    } catch (error) {
      console.error('docxFileInsert 工具执行失败:', error);
      return {
        isError: true,
        content: [{ type: 'text', text: `插入文件或视频失败: ${error instanceof Error ? error.message : '未知错误'}` }],
      };
    }
  },
};