import { z } from 'zod';
export type eventV1ToolName = 'event.v1.outboundIp.list';
export const eventV1OutboundIpList = {
  project: 'event',
  name: 'event.v1.outboundIp.list',
  sdkName: 'event.v1.outboundIp.list',
  path: '/open-apis/event/v1/outbound_ip',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-事件与回调-事件订阅-获取事件出口 IP-飞书开放平台向应用配置的回调地址推送事件时，是通过特定的 IP 发送出去的，应用可以通过本接口获取所有相关的 IP 地址',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，默认10，取值范围 10-50').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const eventV1Tools = [eventV1OutboundIpList];
