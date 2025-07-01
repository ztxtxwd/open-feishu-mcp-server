# 云文档评论工具

这个目录包含了飞书云文档（包括文档、表格、幻灯片等）的评论相关工具。

## 工具列表

### 1. drive_comment_create - 创建评论
在云文档中添加一条全局评论。

**使用示例：**
```javascript
drive_comment_create({
  file_token: "xxx",
  file_type: "docx", // 可选: doc, docx, sheet, file, slides
  content: "这里需要补充更多细节"
})
```

### 2. drive_comment_list - 获取评论列表
分页获取文档的所有评论信息。

**使用示例：**
```javascript
drive_comment_list({
  file_token: "xxx",
  file_type: "docx",
  is_solved: false, // 只获取未解决的评论
  page_size: 20
})
```

### 3. drive_comment_patch - 更新评论状态
标记评论为已解决或恢复未解决状态。

**使用示例：**
```javascript
drive_comment_patch({
  file_token: "xxx",
  file_type: "docx",
  comment_id: "yyy",
  is_solved: true // 标记为已解决
})
```

### 4. drive_comment_reply_create - 创建回复
在评论下创建回复进行讨论。

**使用示例：**
```javascript
drive_comment_reply_create({
  file_token: "xxx",
  file_type: "docx",
  comment_id: "yyy",
  content: "已经按照建议修改"
})
```

### 5. drive_comment_reply_list - 获取回复列表
获取某条评论的所有回复。

**使用示例：**
```javascript
drive_comment_reply_list({
  file_token: "xxx",
  file_type: "docx",
  comment_id: "yyy"
})
```

## 支持的文档类型

- `doc` - 旧版文档
- `docx` - 新版文档
- `sheet` - 电子表格
- `file` - 文件
- `slides` - 幻灯片

## 注意事项

1. 所有工具都需要提供 `file_token` 和 `file_type` 参数
2. 创建评论后内容不可修改，只能更新解决状态
3. 支持富文本格式，包括 @用户、云文档链接等
4. 评论支持全局评论和局部评论（目前只实现了全局评论）