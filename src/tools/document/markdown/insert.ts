import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';

import { addMermaidBlockMarkers } from '../../../utils/markdown-processor';

const description: McpToolDescription = {
    shortDescription: '飞书-云文档-文档-插入Markdown内容',
    bestFor: 'Markdown内容插入到飞书文档，支持文本、一到九级标题、无序列表、有序列表、代码块、引用、待办事项、图片、表格、表格单元格',
    notRecommendedFor: '高亮块、群聊卡片块、公式块、日期提醒块、倒计时块、附件块、文件块、视频块、文本绘图块、名词解释块、时间轴块、目录导航块、电子表格块',
    promptExample: '插入这段Markdown内容到文档中',
    usageExample: 'docx_markdown_insert({markdown: "# 标题\\n\\n内容", file_name: "我的文档"})',
    returns: '插入任务的执行结果'
};

export const docxMarkdownInsert = {
    project: 'docx',
    name: 'docx_markdown_insert',
    accessTokens: ['user', 'tenant'],
    description: convertDescriptionToString(description),
    schema: {
        markdown: z.string().nonempty().describe('markdown内容'),
        index: z.number().describe('在目标block中的插入位置，起始值为 0，最大值为原目标block的子块长度').optional(),
        document_id: z.string().describe('文档唯一标识'),
        block_id: z.string().describe('目标block的唯一标识'),
    },
    customHandler: async (client: Client, params: any, options: any) => {
        try {
            const { userAccessToken } = options || {};

            // 处理 markdown 内容，为 mermaid 代码块添加标记
            let processedMarkdown = addMermaidBlockMarkers(params.markdown);
            // 去除markdown 内容开头的一级标题
            processedMarkdown = processedMarkdown.replace(/^# .*\n?/, '');
            const response = await client.docx.v1.document.convert({
                data: {
                    content_type: 'markdown',
                    content: processedMarkdown,
                },
            }, lark.withUserAccessToken(userAccessToken));

            const 转换后的结果 = response.data;
            if (!转换后的结果) {
                return {
                    isError: true,
                    content: [
                        { type: 'text' as const, text: '转换后的结果为空' },
                    ],
                };
            }

            // 根据first_level_block_ids调整blocks的顺序
            let blocks = 转换后的结果.blocks || [];
            // 去除blocks中有table属性的block中的merge_info属性
            blocks = blocks.map((block: any) => {
                if (block.block_type === 31) {
                    block.table.property.merge_info = undefined;
                }
                return block;
            });
            const first_level_block_ids = 转换后的结果.first_level_block_ids || [];
            const newBlocks = [];
            for (const blockId of first_level_block_ids) {
                const block = blocks.find((block: any) => block.block_id === blockId);
                if (block) {
                    newBlocks.push(block);
                }
            }
            for (const block of blocks) {
                if (block.block_id && !first_level_block_ids.includes(block.block_id)) {
                    newBlocks.push(block);
                }
            }
            // 使用创建嵌套块接口
            const 创建嵌套块响应 = await client.docx.v1.documentBlockDescendant.create({
                path: {
                    document_id: params.document_id,
                    block_id: params.block_id,
                },
                data: {
                    children_id: first_level_block_ids,
                    index: params.index,
                    descendants: newBlocks,
                },
            }, lark.withUserAccessToken(userAccessToken));
            if (创建嵌套块响应.code !== 0) {
                return {
                    isError: true,
                    content: [
                        { type: 'text' as const, text: `插入Markdown内容请求失败: ${JSON.stringify(创建嵌套块响应)}` },
                    ],
                };
            }else{
                return {
                    content: [
                        { type: 'text' as const, text: `插入Markdown内容请求成功: ${JSON.stringify(创建嵌套块响应)}` },
                    ],
                };
            }
        } catch (error) {
            return {
                isError: true,
                content: [
                    {
                        type: 'text' as const,
                        text: `插入Markdown内容请求失败: ${JSON.stringify((error as any)?.response?.data || error)}`,
                    },
                ],
            };
        }
    },
};