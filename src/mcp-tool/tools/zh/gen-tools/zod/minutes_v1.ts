import { z } from 'zod';
export type minutesV1ToolName =
  | 'minutes.v1.minute.get'
  | 'minutes.v1.minuteMedia.get'
  | 'minutes.v1.minuteStatistics.get';
export const minutesV1MinuteGet = {
  project: 'minutes',
  name: 'minutes.v1.minute.get',
  sdkName: 'minutes.v1.minute.get',
  path: '/open-apis/minutes/v1/minutes/:minute_token',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-妙记-妙记信息-获取妙记信息-通过这个接口，可以得到一篇妙记的基础概述信息，包含 `owner_id`、`create_time`、标题、封面、时长和 URL',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      minute_token: z.string().describe('妙记唯一标识。可从妙记链接中获取，一般为链接中最后一串字符').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const minutesV1MinuteMediaGet = {
  project: 'minutes',
  name: 'minutes.v1.minuteMedia.get',
  sdkName: 'minutes.v1.minuteMedia.get',
  path: '/open-apis/minutes/v1/minutes/:minute_token/media',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-妙记-妙记音视频文件-下载妙记音视频文件-获取妙记的音视频文件',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ minute_token: z.string().describe('妙记唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const minutesV1MinuteStatisticsGet = {
  project: 'minutes',
  name: 'minutes.v1.minuteStatistics.get',
  sdkName: 'minutes.v1.minuteStatistics.get',
  path: '/open-apis/minutes/v1/minutes/:minute_token/statistics',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-妙记-妙记统计数据-获取妙记统计数据-通过这个接口，可以获得妙记的访问情况统计，包含PV、UV、访问过的 user id、访问过的 user timestamp',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      minute_token: z.string().describe('妙记唯一标识。可从妙记链接中获取，一般为链接中最后一串字符').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const minutesV1Tools = [minutesV1MinuteGet, minutesV1MinuteMediaGet, minutesV1MinuteStatisticsGet];
