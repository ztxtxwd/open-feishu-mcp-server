import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';

import { addMermaidBlockMarkers } from '../../../utils/markdown-processor';

const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-导入Markdown文件为新文档',
  bestFor: 'Markdown内容转换为飞书文档，支持Mermaid图表、标题、列表、代码块等',
  notRecommendedFor: '复杂的HTML内容、非标准Markdown格式',
  promptExample: '将这个Markdown内容导入为新的飞书文档',
  usageExample: 'docx_markdown_import({markdown: "# 标题\\n\\n内容", file_name: "我的文档"})',
  returns: '导入任务的执行结果和新文档信息'
};

export const docxMarkdownImport = {
  project: 'docx',
  name: 'docx_markdown_import',
  accessTokens: ['user', 'tenant'],
  description: convertDescriptionToString(description),
  schema: {
    markdown: z.string().nonempty().describe('markdown内容'),
    file_name: z.string().describe('文件名').max(250).optional(),
  },
  customHandler: async (client:Client, params:any, options:any) => {
    try {
      const { userAccessToken } = options || {};

      // 处理 markdown 内容，为 mermaid 代码块添加标记
      let processedMarkdown = addMermaidBlockMarkers(params.markdown);
      // 去除markdown 内容开头的一级标题
      processedMarkdown = processedMarkdown.replace(/^# .*\n?/, '');
      // 构造 FormData
      const formData = new FormData();
      // 生成随机文件名
      const file_name = (params.file_name || Math.random().toString(36).substring(2, 15)) + '.md';
      formData.append('file_name', file_name);
      formData.append('parent_type', 'ccm_import_open');
      formData.append('parent_node', '/');
      formData.append('size', Buffer.byteLength(processedMarkdown).toString());
      formData.append('file', new File([processedMarkdown], file_name));
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
      const result = await resp.json() as any;
      // const response =
      //   userAccessToken && params.useUAT
      //     ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
      //     : await client.drive.media.uploadAll({ data })
      const response = result.data;
      if (!response?.file_token) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容'+JSON.stringify(result) }],
        };
      }

      const importData = {
        file_extension: 'md',
        file_name: file_name.replace('.md', ''),
        file_token: response?.file_token,
        type: 'docx',
        point: {
          mount_type: 1,
          mount_key: '',
        },
      };

      const importResponse =
        await client.drive.importTask.create({ data: importData }, lark.withUserAccessToken(userAccessToken));

      const taskId = importResponse.data?.ticket;
      if (!taskId) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '导入文档失败，请检查markdown文件内容' }],
        };
      }

      for (let i = 0; i < 5; i++) {
        const taskResponse =
          await client.drive.importTask.get({ path: { ticket: taskId } }, lark.withUserAccessToken(userAccessToken));

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