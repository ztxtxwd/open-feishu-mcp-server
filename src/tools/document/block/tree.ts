import { z } from 'zod';
import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';
import { convertDescriptionToString, McpToolDescription } from '../../types';


// Schema定义
const DocumentSchema = {
  document_id: z.string().describe('文档ID'),
};

// 定义清晰的类型接口
interface EnhancedBlock {
  block_id: string
  parent_id?: string
  block_type: string
  children: EnhancedBlock[]
  index: number
  depth: number
  [key: string]: any // 保持原有字段的灵活性
}

// const description: McpToolDescription = '[慎用，慎用，慎用][Feishu/Lark]-云文档-文档-获取文档所有块-递归获取文档完整块树结构，支持索引标记和层级信息，没事别用，确实需要了再用'
const description: McpToolDescription = {
  shortDescription: '飞书-云文档-文档-获取文档所有块-递归获取文档完整块树结构',
  bestFor: '需要获取文档内容或指定块位置时',
  notRecommendedFor: '在文档开头或末尾操作时',
  returns: '文档完整块树结构，包含索引标记和层级信息',
};
interface BlockTreeParams {
  document_id: string;
}
export const blockTreeTool = {
  name: 'docx_block_tree_get',
  description: convertDescriptionToString(description),
  inputSchema: DocumentSchema,
  customHandler: async (params: BlockTreeParams, client?: Client, userAccessToken?: string) => {
    try {
      if (!client) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: 'Client not provided' }],
        };
      }

      // 收集所有块
      const allBlocks: any[] = [];

      const iterator = await client.docx.v1.documentBlock.listWithIterator(
        {
          path: {
            document_id: params.document_id,
          },
          params: {
            page_size: 500,
            document_revision_id: -1,
          },
        },
        userAccessToken ? lark.withUserAccessToken(userAccessToken) : undefined,
      );

      for await (const item of iterator) {
        if (item?.items) {
          allBlocks.push(...item.items);
        }
      }

      // 优化算法：先建立父子关系映射，再构建树
      const blockMap = new Map<string, EnhancedBlock>();
      const childrenMap = new Map<string, EnhancedBlock[]>();
      let rootBlock: EnhancedBlock | null = null;

      // 第一步：创建所有块并建立映射
      for (const block of allBlocks) {
        if (!block?.block_id) {continue;}

        const enhancedBlock: EnhancedBlock = {
          ...block,
          block_id: String(block.block_id),
          parent_id: block.parent_id ? String(block.parent_id) : undefined,
          block_type: String(block.block_type || 'unknown'),
          children: [],
          index: 0,
          depth: 0,
        };

        blockMap.set(enhancedBlock.block_id, enhancedBlock);

        // 建立父子关系映射
        if (enhancedBlock.parent_id) {
          if (!childrenMap.has(enhancedBlock.parent_id)) {
            childrenMap.set(enhancedBlock.parent_id, []);
          }
          childrenMap.get(enhancedBlock.parent_id)!.push(enhancedBlock);
        } else {
          // 根节点
          rootBlock = enhancedBlock;
        }
      }

      // 第二步：使用BFS算法构建树结构和设置索引/深度
      if (rootBlock) {
        const queue: Array<{ block: EnhancedBlock; depth: number }> = [{ block: rootBlock, depth: 0 }];

        while (queue.length > 0) {
          const { block, depth } = queue.shift()!;
          block.depth = depth;

          // 获取子块并设置索引
          const children = childrenMap.get(block.block_id) || [];
          children.forEach((child, index) => {
            child.index = index;
            block.children.push(child);
            queue.push({ block: child, depth: depth + 1 });
          });
        }
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify(rootBlock || {}),
          },
        ],
      };
    } catch (error) {
      console.error('blockTreeTool 执行失败:', error);

      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              error: '获取文档块树失败',
              message: error instanceof Error ? error.message : '未知错误',
              document_id: params.document_id,
            }),
          },
        ],
      };
    }
  }
}; 