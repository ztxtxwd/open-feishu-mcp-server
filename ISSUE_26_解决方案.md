# Issue #26 - 评论相关工具解决方案

## 为什么不能放在 `src/tools/drive/comment` 目录下？

1. **功能分类错误**：
   - `drive` 目录是用于云空间（云盘）相关功能
   - 新版文档（docx）的评论功能应该归属于文档功能，不是云空间功能

2. **目录结构**：
   ```
   src/tools/
   ├── drive/          # 云空间相关（如文件上传）
   │   └── index.ts    # 只有媒体上传工具
   ├── document/       # 文档相关 ✅ 正确位置
   │   ├── block/      # 块操作
   │   ├── children/   # 子块操作
   │   ├── table/      # 表格操作
   │   └── comment/    # 评论操作（应该创建在这里）
   ```

3. **项目架构**：
   - 项目有两个工具系统：
     - `src/mcp-tool/tools/` - API 工具定义（自动生成）
     - `src/tools/` - 自定义工具实现

## 正确的解决方案

### 方案一：在 document 目录下创建评论工具（推荐）

1. 创建 `src/tools/document/comment/index.ts`
2. 实现评论相关的自定义工具
3. 在 `src/tools/document/index.ts` 中导出
4. 在 `src/mcp-tool/tools/zh/builtin-tools/docx/builtin.ts` 中引用

### 方案二：直接在 gen-tools 中添加（简单但不灵活）

1. 在 `src/mcp-tool/tools/zh/gen-tools/zod/` 目录下创建 `docx_v1_comments.ts`
2. 定义评论相关的 API 工具
3. 在 `docx_v1.ts` 中导入并添加到 `docxV1Tools` 数组

## 实现步骤（方案一）

### 1. 创建评论工具文件

```typescript
// src/tools/document/comment/index.ts
import { z } from 'zod';
import { McpToolDescription, convertDescriptionToString } from '../../types';

// 创建评论
export const docxCommentCreate = {
  project: 'docx',
  name: 'docx_comment_create',
  accessTokens: ['user', 'tenant'],
  description: '在新版文档中创建评论',
  schema: {
    document_id: z.string().describe('文档ID'),
    block_id: z.string().describe('要评论的块ID'),
    content: z.object({
      elements: z.array(
        z.object({
          type: z.enum(['text_run', 'docs_link', 'person']),
          text_run: z.object({ text: z.string() }).optional(),
          docs_link: z.object({ url: z.string() }).optional(),
          person: z.object({ user_id: z.string() }).optional(),
        })
      ),
    }),
  },
  customHandler: async (client: any, params: any, options: any) => {
    // 实现 API 调用逻辑
  },
};

// 其他评论工具...
```

### 2. 导出评论工具

```typescript
// src/tools/document/index.ts
export { 
  docxCommentCreate, 
  docxCommentList, 
  docxCommentUpdate, 
  docxCommentDelete, 
  docxCommentReplyCreate 
} from './comment';
```

### 3. 添加到 builtin 工具

```typescript
// src/mcp-tool/tools/zh/builtin-tools/docx/builtin.ts
import { 
  docxCommentCreate, 
  docxCommentList, 
  // ... 
} from '../../../../../tools/document';

export const docxBuiltinTools = [
  larkDocxBuiltinSearchTool, 
  larkDocxBuiltinImportTool,
  docxCommentCreate,
  docxCommentList,
  // ...
];
```

## 注意事项

1. **API 路径**：评论 API 可能尚未在飞书开放平台发布，需要确认
2. **参数设计**：参考现有的 drive 和 task 评论工具
3. **错误处理**：确保有适当的错误处理和返回信息
4. **测试**：实现后需要充分测试各种场景

## 总结

不能放在 `src/tools/drive/comment` 的主要原因是：
- **功能分类不匹配**：docx 评论不属于 drive（云空间）功能
- **目录不存在**：drive 目录下没有 comment 子目录
- **架构设计**：应该遵循现有的模块化架构，将文档相关功能放在 document 目录下