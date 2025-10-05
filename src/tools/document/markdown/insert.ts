import z from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';
import { addMermaidBlockMarkers } from '../../../utils/markdown-processor';

/**
 * 上传图片
 */
async function uploadImage(userAccessToken: string, blockId: string, imageUrl: string) {
    try {
        // 下载图片
        const response = await fetch(imageUrl);
        if (!response.ok) {
            throw new Error(`下载图片失败: ${response.statusText}`);
        }

        const blob = await response.blob();
        const fileName = imageUrl.split('/').pop() || 'image.png';
        const file = new File([blob], fileName);

        // 上传图片
        const formData = new FormData();
        formData.append('file_name', fileName);
        formData.append('parent_type', 'docx_image');
        formData.append('parent_node', blockId);
        formData.append('size', file.size.toString());
        formData.append('file', file);

        const uploadResp = await fetch('https://open.feishu.cn/open-apis/drive/v1/medias/upload_all', {
            method: 'POST',
            headers: {
                Authorization: `Bearer ${userAccessToken}`
            },
            body: formData
        });

        const uploadResult = await uploadResp.json() as any;

        if (!uploadResp.ok || !uploadResult.data?.file_token) {
            throw new Error(`上传图片失败: ${JSON.stringify(uploadResult)}`);
        }

        return uploadResult.data.file_token;
    } catch (error) {
        console.error(`上传图片失败 (${imageUrl}):`, error);
        return null;
    }
}

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

            // 步骤1: 转换 markdown 为块结构
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
            console.log('转换后的结果', JSON.stringify(转换后的结果));

            // 步骤2: 提取图片块与 URL 的映射关系 (temporary_block_id -> image_url)
            const blockIdToImageUrls = new Map<string, string>();
            if (转换后的结果.block_id_to_image_urls) {
                for (const item of 转换后的结果.block_id_to_image_urls) {
                    blockIdToImageUrls.set(item.block_id, item.image_url);
                }
            }
            console.log('图片块映射', Array.from(blockIdToImageUrls.entries()));

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

            // 步骤3: 使用创建嵌套块接口
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
            }

            // 步骤4: 建立 temporary_block_id -> real_block_id 的映射
            const tempToRealBlockId = new Map<string, string>();
            if (创建嵌套块响应.data?.block_id_relations) {
                for (const relation of 创建嵌套块响应.data.block_id_relations) {
                    tempToRealBlockId.set(relation.temporary_block_id, relation.block_id);
                }
            }
            console.log('块ID映射', Array.from(tempToRealBlockId.entries()));

            // 步骤5: 为每个图片块上传图片并更新块
            const uploadResults = [];
            for (const [tempBlockId, imageUrl] of blockIdToImageUrls.entries()) {
                // 通过临时ID找到真实的块ID
                const realBlockId = tempToRealBlockId.get(tempBlockId);

                if (!realBlockId) {
                    console.warn(`未找到真实块ID: ${tempBlockId}`);
                    uploadResults.push({
                        temp_block_id: tempBlockId,
                        url: imageUrl,
                        success: false,
                        error: '未找到真实块ID'
                    });
                    continue;
                }

                // 上传图片
                const fileToken = await uploadImage(userAccessToken, realBlockId, imageUrl);

                if (!fileToken) {
                    console.warn(`图片上传失败: ${imageUrl}`);
                    uploadResults.push({
                        temp_block_id: tempBlockId,
                        real_block_id: realBlockId,
                        url: imageUrl,
                        success: false,
                        error: '图片上传失败'
                    });
                    continue;
                }

                // 更新图片块
                try {
                    await client.docx.v1.documentBlock.patch({
                        path: {
                            document_id: params.document_id,
                            block_id: realBlockId
                        },
                        data: {
                            replace_image: { token: fileToken }
                        }
                    }, lark.withUserAccessToken(userAccessToken));

                    uploadResults.push({
                        temp_block_id: tempBlockId,
                        real_block_id: realBlockId,
                        url: imageUrl,
                        file_token: fileToken,
                        success: true
                    });
                } catch (error) {
                    console.error(`更新图片块失败 (${realBlockId}):`, error);
                    uploadResults.push({
                        temp_block_id: tempBlockId,
                        real_block_id: realBlockId,
                        url: imageUrl,
                        file_token: fileToken,
                        success: false,
                        error: error instanceof Error ? error.message : '未知错误'
                    });
                }
            }

            return {
                content: [
                    {
                        type: 'text' as const,
                        text: `插入Markdown内容成功！\n创建响应: ${JSON.stringify(创建嵌套块响应)}\n图片上传结果: ${JSON.stringify(uploadResults, null, 2)}`
                    },
                ],
            };
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
