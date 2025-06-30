import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';

import { FEISHU_CONSTANTS } from '../../../config/feishu-constants';
import { convertDescriptionToString, McpToolDescription } from '../../types';
import {
  get补全后的文本绘图块参数,
  get补全后的名词解释块参数,
  get补全后的时间轴块参数,
  get补全后的目录导航块参数,
  get补全后的信息收集块参数,
  get补全后的倒计时块参数,
  get补全后的附件块参数
} from '../addons/helpers';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-块-创建块并插入到指定位置',
  bestFor: '文本、标题、列表、代码、引用、待办事项、高亮、表格、图片、附件、文件、视频、插件块（文本绘图、名词解释、时间轴、目录导航、信息收集、倒计时）等所有块类型的创建',
  notRecommendedFor: '在没有使用docx_image_or_video_or_file_create的情况下直接创建图片、附件、文件、视频块',
  promptExample: '在文档中创建一个文本块，内容为"Hello World"',
  returns: '新创建的块信息，包括块ID和富文本内容'
};

export const docxV1DocumentBlockChildrenCreateSimple = {
  project: 'docx',
  name: 'docx_block_create',
  sdkName: 'docx.v1.documentBlockChildren.create',
  path: '/open-apis/docx/v1/documents/:document_id/blocks/:block_id/children',
  httpMethod: 'POST',
  description: convertDescriptionToString(description),
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      children: z.array(z.record(z.unknown())).describe('添加的块列表').optional(),
      index: z.number().describe('当前 block 在 children 中的插入位置，起始值为 0，最大值为原 children 长度').optional(),
    }),
    path: z.object({
      document_id: z.string().describe('文档唯一标识'),
      block_id: z.string().describe('Block 的唯一标识，确定要在分栏、表格、高亮中创建子块，请传入分栏、表格、高亮的 BlockID，否则传入document_id'),
    }),
  },
  customHandler: async (client: Client, params: any, options: any) => {
    try {
      if (params.data.children[0].block_type === 40 && params.data.children[0].mermaid_drawing) {
        params = get补全后的文本绘图块参数(params);
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].glossary) {
        params = get补全后的名词解释块参数(params);
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].timeline) {
        params = get补全后的时间轴块参数(params);
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].catalog_navigation) {
        params = get补全后的目录导航块参数(params);
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].information_collection) {
        params = get补全后的信息收集块参数(params);
      } else if (params.data.children[0].block_type === 40 && params.data.children[0].countdown) {
        params = get补全后的倒计时块参数(params);
      } else if (params.data.children[0].block_type === 23) {
        params = get补全后的附件块参数(params);
      }
      const response = await client.docx.v1.documentBlockChildren.create(params, lark.withUserAccessToken(options.userAccessToken));
      switch (params.data.children[0].block_type) {
        case 27:
          const imageBlockId = response.data?.children?.[0]?.block_id;
          return {
            content: [
              {
                type: 'text' as const,
                text: `图片块创建成功，接下来使用Image BlockID ${imageBlockId} 作为 parent_node 上传图片，上传完成后修改图片块`,
              },
            ],
          };
        case 23:
          const fileBlockId = response.data?.children?.[0]?.children?.[0];
          return {
            content: [
              {
                type: 'text' as const,
                text: `文件块创建成功，接下来使用File BlockID ${fileBlockId} 作为 parent_node 上传文件，上传完成后修改文件块`,
              },
            ],
          };
        default:
          return {
            content: [
              {
                type: 'text' as const,
                text: JSON.stringify(response),
              },
            ],
          };
      }
    } catch (error) {
      console.error('docxV1DocumentBlockChildrenCreateSimple 工具执行失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text',
            text: `docxV1DocumentBlockChildrenCreateSimple 工具执行失败: ${error instanceof Error ? error.message : '未知错误'}`,
          },
        ],
      };
    }
  },
};