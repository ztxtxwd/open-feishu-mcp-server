import * as lark from '@larksuiteoapi/node-sdk';
import { z } from 'zod';

import { McpTool } from '../../../../types';
import { addMermaidBlockMarkers } from '../../../../utils/markdown-processor';

// 工具名称类型
export type docxBuiltinToolName = 'docx.builtin.search' | 'docx.builtin.import'

export const larkDocxBuiltinSearchTool: McpTool = {
  project: 'docx',
  name: 'docx.builtin.search',
  accessTokens: ['user'],
  description: '[飞书/Lark] - 云文档-文档 - 搜索文档 - 搜索云文档，只支持user_access_token',
  schema: {
    data: z.object({
      search_key: z.string().describe('搜索关键词'),
      count: z.number().describe('指定搜索返回的文件数量。取值范围为 [0,50]。').optional(),
      offset: z
        .number()
        .describe(
          '指定搜索的偏移量，该参数最小为 0，即不偏移。该参数的值与返回的文件数量之和不得大于或等于 200（即 offset + count < 200）。',
        )
        .optional(),
      owner_ids: z.array(z.string()).describe('文件所有者的 Open ID').optional(),
      chat_ids: z.array(z.string()).describe('文件所在群的 ID').optional(),
      docs_types: z
        .array(z.enum(['doc', 'sheet', 'slides', 'bitable', 'mindnote', 'file']))
        .describe('文件类型，支持以下枚举：doc：旧版文档;sheet：电子表格;slides：幻灯片;bitable：多维表格;mindnote：思维笔记;file：文件')
        .optional(),
    }),
    useUAT: z.boolean().describe('是否使用用户身份请求，false则使用应用身份请求').optional(),
  },
  customHandler: async (client, params, options): Promise<any> => {
    try {
      const { userAccessToken } = options || {};

      if (!userAccessToken) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '当前未配置 userAccessToken' }],
        };
      }

      const response = await client.request(
        {
          method: 'POST',
          url: '/open-apis/suite/docs-api/search/object',
          data: params.data,
        },
        lark.withUserAccessToken(userAccessToken),
      );

      return {
        content: [
          {
            type: 'text' as const,
            text: `搜索文档请求成功: ${JSON.stringify(response.data ?? response)}`,
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `搜索文档请求失败: ${JSON.stringify((error as any).response.data)}`,
          },
        ],
      };
    }
  },
};

export const larkDocxBuiltinImportTool: McpTool = {
  project: 'docx',
  name: 'docx.builtin.import',
  accessTokens: ['user', 'tenant'],
  description: '[飞书/Lark] - 云文档-文档 - 导入文档 - 导入云文档，最大20MB',
  schema: {
    data: z
      .object({
        markdown: z.string().describe('markdown文件内容'),
        file_name: z.string().describe('文件名').max(27).optional(),
      })
      .describe('请求体'),
    useUAT: z.boolean().describe('使用用户身份请求，否则为应用身份').optional(),
  },
  customHandler: async (client, params, options): Promise<any> => {
    try {
      const { userAccessToken } = options || {};

      // 处理 markdown 内容，为 mermaid 代码块添加标记
      const processedMarkdown = addMermaidBlockMarkers(params.data.markdown);

      // 构造 FormData
      const formData = new FormData();
      formData.append('file_name', 'docx.md');
      formData.append('parent_type', 'ccm_import_open');
      formData.append('parent_node', '/');
      formData.append('size', Buffer.byteLength(processedMarkdown).toString());
      formData.append('file', new File([processedMarkdown], 'docx.md'));
      formData.append('extra', JSON.stringify({ obj_type: 'docx', file_extension: 'md' }));

      // 发起 POST 请求
      const resp = await fetch('https://open.feishu.cn/open-apis/drive/v1/medias/upload_all', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          // Content-Type 不需手动设置，fetch 会自动添加 multipart 边界
        },
        body: formData,
      });
      const result = await resp.json();
      // const response =
      //   userAccessToken && params.useUAT
      //     ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
      //     : await client.drive.media.uploadAll({ data })
      const response = result.data;
      if (!response?.file_token) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容' }],
        };
      }

      const importData = {
        file_extension: 'md',
        file_name: params.data.file_name,
        file_token: response?.file_token,
        type: 'docx',
        point: {
          mount_type: 1,
          mount_key: '',
        },
      };

      const importResponse =
        userAccessToken && params.useUAT
          ? await client.drive.importTask.create({ data: importData }, lark.withUserAccessToken(userAccessToken))
          : await client.drive.importTask.create({ data: importData });

      const taskId = importResponse.data?.ticket;
      if (!taskId) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容' }],
        };
      }

      for (let i = 0; i < 5; i++) {
        const taskResponse =
          userAccessToken && params.useUAT
            ? await client.drive.importTask.get({ path: { ticket: taskId } }, lark.withUserAccessToken(userAccessToken))
            : await client.drive.importTask.get({ path: { ticket: taskId } });

        if (taskResponse.data?.result?.job_status === 0) {
          return {
            content: [
              {
                type: 'text' as const,
                text: `导入文档请求成功: ${JSON.stringify(taskResponse.data ?? taskResponse)}`,
              },
            ],
          };
        } else if (taskResponse.data?.result?.job_status !== 1 && taskResponse.data?.result?.job_status !== 2) {
          return {
            content: [{ type: 'text' as const, text: '导入文档失败，请稍后再试' + JSON.stringify(taskResponse.data) }],
          };
        }
        await new Promise((resolve) => setTimeout(resolve, 1000));
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: '导入文档失败，请稍后再试',
          },
        ],
      };
    } catch (error) {
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `导入文档请求失败: ${JSON.stringify((error as any)?.response?.data || error)}`,
          },
        ],
      };
    }
  },
};

export const docxBuiltinTools = [
  larkDocxBuiltinSearchTool, 
  larkDocxBuiltinImportTool,
];
