import { z } from 'zod';
export type hireV2ToolName = 'hire.v2.interviewRecord.get' | 'hire.v2.interviewRecord.list' | 'hire.v2.talent.get';
export const hireV2InterviewRecordGet = {
  project: 'hire',
  name: 'hire.v2.interviewRecord.get',
  sdkName: 'hire.v2.interviewRecord.get',
  path: '/open-apis/hire/v2/interview_records/:interview_record_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试评价详细信息（新版）-获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      interview_record_id: z
        .string()
        .describe(
          '面试评价 ID，可通过接口获取',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const hireV2InterviewRecordList = {
  project: 'hire',
  name: 'hire.v2.interviewRecord.list',
  sdkName: 'hire.v2.interviewRecord.list',
  path: '/open-apis/hire/v2/interview_records',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-批量获取面试评价详细信息（新版）-批量获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      ids: z
        .array(z.string())
        .describe(
          '面试评价 ID 列表，可通过接口获取，使用该筛选项时不会分页',
        )
        .optional(),
      page_size: z.number().describe('分页大小**注意**：若不传该参数，则默认根据 `ids` 参数获取数据').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const hireV2TalentGet = {
  project: 'hire',
  name: 'hire.v2.talent.get',
  sdkName: 'hire.v2.talent.get',
  path: '/open-apis/hire/v2/talents/:talent_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-获取人才详情-根据人才 ID 获取人才详情，包含人才加入文件夹列表、标签、人才库、备注以及屏蔽名单等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV2Tools = [hireV2InterviewRecordGet, hireV2InterviewRecordList, hireV2TalentGet];
