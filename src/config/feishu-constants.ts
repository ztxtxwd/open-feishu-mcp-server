/**
 * 飞书文档相关常量配置
 */
export const FEISHU_CONSTANTS = {
  // 文档块类型
  BLOCK_TYPES: {
    TEXT: 1,
    HEADING: 2,
    ADDONS: 40, // 文档小组件类型
  },
  
  // 文档小组件类型ID
  COMPONENT_TYPE_IDS: {
    MERMAID_DRAWING: 'blk_631fefbbae02400430b8f9f4', // 文本绘图组件
    GLOSSARY: 'blk_604dc919d3c0800173e7963c', // 名词解释组件
    TIMELINE: 'blk_6358a421bca0001c22536e4c', // 时间轴组件
    CATALOG_NAVIGATION: 'blk_637dcc698597401c1a8fd711', // 目录导航组件
    INFORMATION_COLLECTION: 'blk_6358a421bca0001c1ce11f5f', // 信息收集组件
    COUNTDOWN: 'blk_6358a421bca0001c1ce10709', // 倒计时组件
  },
  
  // 默认配置
  DEFAULTS: {
    REVISION_ID: -1,
    USER_ID_TYPE: 'open_id',
  },
  
  // 主题选项
  THEMES: {
    DEFAULT: 'default',
    DARK: 'dark',
    FOREST: 'forest',
    NEUTRAL: 'neutral',
  } as const,
} as const;

export type FeishuTheme = keyof typeof FEISHU_CONSTANTS.THEMES 