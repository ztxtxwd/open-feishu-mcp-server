import * as lark from '@larksuiteoapi/node-sdk';
import { CallToolResult } from '@modelcontextprotocol/sdk/types';

export interface McpHandlerOptions {
  userAccessToken?: string;
  tool?: McpTool;
}

export type McpHandler = (
  client: lark.Client,
  params: any,
  options: McpHandlerOptions,
) => Promise<CallToolResult> | CallToolResult;

/**
 * MCP工具描述类型定义
 * 
 * 支持两种格式：
 * 1. 简单字符串描述
 * 2. 结构化描述对象，包含多个可选字段
 * 
 * @example
 * // 简单字符串描述
 * const description: McpToolDescription = "这是一个简单的工具描述";
 * 
 * @example
 * // 结构化描述对象
 * const description: McpToolDescription = {
 *   shortDescription: "飞书-云文档-文档-获取文档所有块",
 *   bestFor: "需要获取文档内容或指定块位置时",
 *   notRecommendedFor: "在文档开头或末尾操作时",
 *   promptExample: "获取文档ID为xxx的所有块结构",
 *   usageExample: "docx_block_tree_get({document_id: 'xxx'})",
 *   returns: "文档完整块树结构，包含索引标记和层级信息"
 * };
 */
export type McpToolDescription = {
  /** 工具的简短描述 */
  shortDescription?: string;
  /** 工具最适合的使用场景 */
  bestFor?: string;
  /** 不推荐使用该工具的场景 */
  notRecommendedFor?: string;
  /** 提示词使用示例 */
  promptExample?: string;
  /** 工具调用示例 */
  usageExample?: string;
  /** 工具返回值说明 */
  returns?: string;
} | string;
/**
 * MCP工具类型定义
 */
export interface McpTool {
  // 工具名称
  name: string;
  // 工具描述
  description?: McpToolDescription;
  // 工具参数
  schema: any;
  // 自定义处理函数
  customHandler?: McpHandler;
}
export function convertDescriptionToString(description: McpToolDescription): string {
  const parts: string[] = [];
  
  if (typeof description === 'object' && 'shortDescription' in description) {
    parts.push(description.shortDescription || '');
  }
  
  if (typeof description === 'object' && 'bestFor' in description) {
    parts.push(`**最适合:** ${description.bestFor || ''}`);
  }
  
  if (typeof description === 'object' && 'notRecommendedFor' in description) {
    parts.push(`**不推荐用于:** ${description.notRecommendedFor || ''}`);
  }
  
  if (typeof description === 'object' && 'promptExample' in description) {
    parts.push(`**示例:** ${description.promptExample || ''}`);
  }
  
  if (typeof description === 'object' && 'usageExample' in description) {
    parts.push(`**调用示例:** ${description.usageExample || ''}`);
  }
  
  if (typeof description === 'object' && 'returns' in description) {
    parts.push(`**返回:** ${description.returns || ''}`);
  }
  
  return parts.join('\n\n');
}