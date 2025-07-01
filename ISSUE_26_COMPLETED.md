# Issue #26 - 评论相关工具已完成

## 已创建的工具

在 `src/tools/drive/comment/` 目录下创建了以下云文档评论工具：

1. **drive_comment_create** - 创建评论
   - 文件：`create.ts`
   - 功能：在云文档中添加全局评论

2. **drive_comment_list** - 获取评论列表
   - 文件：`list.ts`
   - 功能：分页获取文档的所有评论

3. **drive_comment_patch** - 更新评论状态
   - 文件：`patch.ts`
   - 功能：标记评论为已解决或未解决

4. **drive_comment_reply_create** - 创建回复
   - 文件：`reply-create.ts`
   - 功能：在评论下创建回复

5. **drive_comment_reply_list** - 获取回复列表
   - 文件：`reply-list.ts`
   - 功能：获取某条评论的所有回复

## 文件结构

```
src/tools/drive/
├── index.ts          # 已更新，导出评论工具
└── comment/
    ├── index.ts      # 评论工具导出
    ├── create.ts     # 创建评论
    ├── list.ts       # 获取评论列表
    ├── patch.ts      # 更新评论状态
    ├── reply-create.ts # 创建回复
    ├── reply-list.ts   # 获取回复列表
    └── README.md       # 使用说明
```

## 技术实现

- 使用 zod 进行参数验证
- 使用 @larksuiteoapi/node-sdk 调用飞书 API
- 支持用户令牌和应用令牌认证
- 支持富文本内容（包括 @用户、云文档链接等）
- 支持分页查询

## 支持的文档类型

- `doc` - 旧版文档
- `docx` - 新版文档  
- `sheet` - 电子表格
- `file` - 文件
- `slides` - 幻灯片

## 使用方式

这些工具已经在 `src/tools/drive/index.ts` 中导出，可以直接使用：

```javascript
import { 
  driveCommentCreate,
  driveCommentList,
  driveCommentPatch,
  driveCommentReplyCreate,
  driveCommentReplyList
} from './src/tools/drive';
```

## 注意事项

1. 这些工具基于飞书开放平台的 drive v1 评论 API
2. 创建的评论内容不可修改，只能更新解决状态
3. 目前只支持全局评论，局部评论功能可以后续扩展
4. 所有工具都需要提供文档 token 和文档类型参数