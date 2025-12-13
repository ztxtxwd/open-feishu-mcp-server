# 飞书文档网页卡片块工具设计

## 工具名称
`docx_iframe_html_create` - 创建飞书文档网页卡片块（支持自定义 HTML）

## 参数设计

| 参数 | 类型 | 必填 | 描述 |
|------|------|------|------|
| document_id | string | 是 | 文档唯一标识 |
| block_id | string | 是 | 要插入的父块 ID（通常为 document_id） |
| index | number | 否 | 插入位置索引，从 0 开始 |
| html | string | 是 | HTML 代码内容 |
| width | number | 否 | 卡片宽度（像素） |
| height | number | 否 | 卡片高度（像素） |

## 工作流程

```
┌─────────────────────────────────────────────────────────────┐
│  1. 接收参数 (document_id, block_id, index, html, width, height)  │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  2. 生成唯一 ID (nanoid/uuid)                               │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  3. 上传 HTML 到 R2 (key: {id}.html)                        │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  4. 保存元信息到 D1 (id, document_id, created_at, size)     │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  5. 生成访问 URL: https://{worker-domain}/html/{id}         │
└──────────────────────────┬──────────────────────────────────┘
                           ▼
┌─────────────────────────────────────────────────────────────┐
│  6. 调用飞书 API 创建内嵌网页块 (block_type: 26)            │
│     - iframe_type: 99 (Other)                               │
│     - url: encode(访问URL)                                  │
└─────────────────────────────────────────────────────────────┘
```

## Cloudflare 资源配置

### wrangler.jsonc 配置

```jsonc
{
  // R2 存储桶 - 存放 HTML 文件
  "r2_buckets": [
    {
      "binding": "HTML_BUCKET",
      "bucket_name": "feishu-html-pages"
    }
  ],
  // D1 数据库 - 存放元信息
  "d1_databases": [
    {
      "binding": "HTML_DB",
      "database_name": "feishu-html-meta",
      "database_id": "<待创建>"
    }
  ]
}
```

### D1 表结构

```sql
CREATE TABLE html_pages (
  id TEXT PRIMARY KEY,
  document_id TEXT NOT NULL,
  html_size INTEGER NOT NULL,
  width INTEGER,
  height INTEGER,
  created_at DATETIME DEFAULT CURRENT_TIMESTAMP
);
```

### Workers 端点路由

- `GET /html/:id` - 返回 HTML 内容（从 R2 读取）

## 文件结构

```
src/tools/document/iframe/
├── index.ts          # 导出
├── create.ts         # 创建工具主逻辑
└── serve.ts          # HTML 服务端点处理
```

## 飞书内嵌网页块 Schema

```json
{
  "block_type": 26,
  "iframe": {
    "component": {
      "iframe_type": 99,
      "url": "<url_encoded_url>"
    }
  }
}
```

### iframe_type 选项

| 值 | 类型 |
|----|------|
| 1 | Bilibili 哔哩哔哩 |
| 2 | XiGua 西瓜视频 |
| 3 | Youku 优酷 |
| 4 | Airtable |
| 5 | BaiduMap 百度地图 |
| 6 | Amap 高德地图 |
| 8 | Figma |
| 9 | Modao 墨刀 |
| 10 | Canva |
| 11 | CodePen |
| 12 | FeiShuWenJuan 飞书问卷 |
| 13 | JinShuJu 金数据 |
| 99 | Other (自定义) |
