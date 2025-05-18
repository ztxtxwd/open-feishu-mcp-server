import { z } from 'zod';
export type workplaceV1ToolName =
  | 'workplace.v1.customWorkplaceAccessData.search'
  | 'workplace.v1.workplaceAccessData.search'
  | 'workplace.v1.workplaceBlockAccessData.search';
export const workplaceV1CustomWorkplaceAccessDataSearch = {
  project: 'workplace',
  name: 'workplace.v1.customWorkplaceAccessData.search',
  sdkName: 'workplace.v1.customWorkplaceAccessData.search',
  path: '/open-apis/workplace/v1/custom_workplace_access_data/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-工作台-工作台访问数据-获取定制工作台访问数据-获取定制工作台访问数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      from_date: z.string().describe('数据检索开始时间，精确到日。格式yyyy-MM-dd'),
      to_date: z.string().describe('数据检索结束时间，精确到日。格式yyyy-MM-dd'),
      page_size: z.number().describe('分页大小，最小为 1，最大为 200，默认为 20'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      custom_workplace_id: z
        .string()
        .describe(
          '定制工作台id，非必填。不填时，返回所有定制工作台数据。如何获取定制工作台ID：可前往 飞书管理后台 > 工作台 > 定制工作台，点击指定工作台的 设置 进入设置页面；鼠标连续点击三次顶部的 设置 字样即可出现 ID，复制 ID 即可',
        )
        .optional(),
    }),
  },
};
export const workplaceV1WorkplaceAccessDataSearch = {
  project: 'workplace',
  name: 'workplace.v1.workplaceAccessData.search',
  sdkName: 'workplace.v1.workplaceAccessData.search',
  path: '/open-apis/workplace/v1/workplace_access_data/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-工作台-工作台访问数据-获取工作台访问数据-获取工作台访问数据（包含默认工作台与定制工作台）',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      from_date: z.string().describe('数据检索开始时间，精确到日。格式yyyy-MM-dd'),
      to_date: z.string().describe('数据检索结束时间，精确到日。格式yyyy-MM-dd'),
      page_size: z.number().describe('分页大小，最小为 1，最大为 200，默认为 20'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const workplaceV1WorkplaceBlockAccessDataSearch = {
  project: 'workplace',
  name: 'workplace.v1.workplaceBlockAccessData.search',
  sdkName: 'workplace.v1.workplaceBlockAccessData.search',
  path: '/open-apis/workplace/v1/workplace_block_access_data/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-工作台-工作台访问数据-获取定制工作台小组件访问数据-获取定制工作台小组件访问数据',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      from_date: z.string().describe('数据检索开始时间，精确到日。格式yyyy-MM-dd'),
      to_date: z.string().describe('数据检索结束时间，精确到日。格式yyyy-MM-dd'),
      page_size: z.number().describe('分页大小，最小为 1，最大为 200，默认为 20'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      block_id: z
        .string()
        .describe(
          '小组件id（BlockID）。可前往 飞书管理后台 > 工作台 > 定制工作台，选择指定的工作台并进入工作台编辑器，点击某个小组件，即可查看页面右侧面板中该小组件名称下方的“BlockID”',
        )
        .optional(),
    }),
  },
};
export const workplaceV1Tools = [
  workplaceV1CustomWorkplaceAccessDataSearch,
  workplaceV1WorkplaceAccessDataSearch,
  workplaceV1WorkplaceBlockAccessDataSearch,
];
