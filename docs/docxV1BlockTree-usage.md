# blockTreeTool 工具使用指南

## 概述

`blockTreeTool` 是一个增强版的飞书文档块获取工具，相比原始的 `docxV1DocumentBlockList`，它提供了以下核心优势：

- ✅ **自动分页处理** - 突破分页限制，一次获取所有块
- ✅ **树形结构组织** - 按父子关系构建完整的文档结构树
- ✅ **索引信息标记** - 每个块都包含在父容器中的精确位置
- ✅ **深度信息** - 提供每个块在文档树中的层级深度
- ✅ **性能优化** - 使用优化算法提高处理效率
- ✅ **类型安全** - 完整的TypeScript类型定义

## 使用方法

### MCP 工具调用

```typescript
// 基本调用（唯一必需参数）
{
  "document_id": "doccnxxxxxxxxxxxxxx"
}
```

### 参数说明

| 参数 | 类型 | 必需 | 说明 |
|------|------|------|------|
| `document_id` | string | ✅ | 文档的唯一标识符 |

## 返回结果结构

### 成功响应

```json
{
  "block_id": "doxcnxxxxxxxxxxxxxx",
  "block_type": "page",
  "index": 0,
  "depth": 0,
  "children": [
    {
      "block_id": "doxcnxxxxxxxxxxxxxx",
      "parent_id": "doxcnxxxxxxxxxxxxxx",
      "block_type": "heading1",
      "index": 0,
      "depth": 1,
      "children": [
        {
          "block_id": "doxcnxxxxxxxxxxxxxx",
          "parent_id": "doxcnxxxxxxxxxxxxxx",
          "block_type": "text",
          "index": 0,
          "depth": 2,
          "children": [],
          // ... 其他块属性
        }
      ],
      // ... 其他块属性
    }
  ],
  // ... 其他根块属性
}
```

### 错误响应

```json
{
  "error": "获取文档块树失败",
  "message": "具体错误信息",
  "document_id": "doccnxxxxxxxxxxxxxx"
}
```

## 核心字段说明

### EnhancedBlock 接口

每个块都包含以下增强字段：

- `children`: 子块数组，按照在父容器中的顺序排列
- `index`: 在父容器中的索引位置（从0开始）
- `depth`: 在文档树中的深度（根节点为0）
- 原有的所有块属性（block_type, content等）

## 算法优化

### 性能特性

1. **两阶段处理**：
   - 第一阶段：收集所有块并建立父子关系映射
   - 第二阶段：使用BFS算法构建树结构

2. **时间复杂度**：O(n)，其中n是块的总数

3. **空间复杂度**：O(n)，主要用于存储块映射和结果树

4. **优化策略**：
   - 使用 `Map<string, EnhancedBlock[]>` 建立父子关系映射
   - BFS遍历确保层级信息的正确设置
   - 避免递归查找，提高性能

## 使用场景

### 1. 完整文档分析

```typescript
// 获取文档完整结构
const result = await callTool('docx.v1.block.tree', {
  document_id: 'doccnxxxxxxxxxxxxxx'
});

const documentTree = JSON.parse(result.content[0].text);
console.log(`文档类型: ${documentTree.block_type}`);
console.log(`子块数量: ${documentTree.children.length}`);
```

### 2. 批量操作准备

```typescript
// 找到所有标题块
function findHeadingBlocks(block, headings = []) {
  if (block.block_type && block.block_type.startsWith('heading')) {
    headings.push({
      id: block.block_id,
      type: block.block_type,
      index: block.index,
      depth: block.depth
    });
  }
  
  if (block.children && block.children.length > 0) {
    for (const child of block.children) {
      findHeadingBlocks(child, headings);
    }
  }
  
  return headings;
}
```

### 3. 文档导出

```typescript
// 按层级导出文档内容
function exportToMarkdown(block, level = 0) {
  let markdown = '';
  const indent = '  '.repeat(level);
  
  markdown += `${indent}- ${block.block_type}: ${block.block_id}\n`;
  
  if (block.children && block.children.length > 0) {
    for (const child of block.children) {
      markdown += exportToMarkdown(child, level + 1);
    }
  }
  
  return markdown;
}
```

### 4. 查找特定位置的块

```typescript
// 根据索引路径查找块
function findBlockByPath(root, indexPath) {
  let current = root;
  
  for (const index of indexPath) {
    if (current.children && current.children[index]) {
      current = current.children[index];
    } else {
      return null;
    }
  }
  
  return current;
}

// 示例：查找第一个子块的第二个子块
const targetBlock = findBlockByPath(documentTree, [0, 1]);
```

## 性能指标

基于优化后的算法：

- **小文档** (< 100块): 通常 < 200ms
- **中等文档** (100-500块): 通常 < 800ms  
- **大文档** (500-2000块): 通常 < 2s
- **超大文档** (> 2000块): 取决于网络延迟

## 错误处理

### 常见错误

1. **权限不足**: 确保有文档读取权限
2. **文档不存在**: 检查 document_id 是否正确
3. **网络超时**: 大文档可能需要更长时间
4. **API限制**: 注意飞书API的调用频率限制

### 调试建议

1. 检查返回结果中的 `isError` 字段
2. 验证 document_id 格式是否正确
3. 确认用户token是否有效
4. 查看控制台错误日志

## 与原工具对比

| 特性 | docxV1DocumentBlockList | blockTreeTool |
|------|-------------------------|-----------------|
| 分页处理 | ❌ 手动处理 | ✅ 自动处理 |
| 数据结构 | ❌ 平铺列表 | ✅ 树形结构 |
| 索引信息 | ❌ 无 | ✅ 完整索引 |
| 深度信息 | ❌ 无 | ✅ 层级深度 |
| 性能 | ❌ O(n) 每页 | ✅ O(n) 总体 |
| 类型安全 | ❌ 基础 | ✅ 完整 |

## 最佳实践

1. **合理使用**: 仅在需要完整文档结构时使用此工具
2. **缓存结果**: 对于不经常变化的文档，可以缓存结果
3. **错误处理**: 始终检查返回结果中的错误信息
4. **权限验证**: 确保具有足够的文档访问权限
5. **性能监控**: 对于大文档，注意处理时间

## 示例代码

完整的使用示例请参考项目中的测试文件 `src/tools/document/test.ts`。 