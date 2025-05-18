import { z } from 'zod';
export type ehrV1ToolName = 'ehr.v1.employee.list';
export const ehrV1EmployeeList = {
  project: 'ehr',
  name: 'ehr.v1.employee.list',
  sdkName: 'ehr.v1.employee.list',
  path: '/open-apis/ehr/v1/employees',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（标准版）-批量获取员工花名册信息-根据员工飞书用户 ID / 员工状态 / 雇员类型等搜索条件 ，批量获取员工花名册字段信息。字段包括「系统标准字段 / system_fields」和「自定义字段 / custom_fields」',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      view: z
        .enum(['basic', 'full'])
        .describe(
          '返回数据类型，不传值默认为 basic。 Options:basic(概览，只返回 id、name 等基本信息),full(明细，返回系统标准字段和自定义字段集合)',
        )
        .optional(),
      status: z
        .array(
          z
            .number()
            .describe(
              'Options:1(to_be_onboarded 待入职),2(active 在职),3(onboarding_cancelled 已取消入职),4(offboarding 待离职),5(offboarded 已离职)',
            ),
        )
        .describe('员工状态，不传代表查询所有员工状态实际在职 = 2&4可同时查询多个状态的记录，如 status=2&status=4')
        .optional(),
      type: z
        .array(
          z
            .number()
            .describe(
              'Options:1(regular 全职),2(intern 实习),3(consultant 顾问),4(outsourcing 外包),5(contractor 劳务)',
            ),
        )
        .describe(
          '人员类型，不传代表查询所有人员类型同时可使用自定义员工类型的 int 值进行查询，可通过下方接口获取到该租户的自定义员工类型的名称，参见 ',
        )
        .optional(),
      start_time: z.string().describe('查询开始时间（入职时间 &gt;= 此时间）').optional(),
      end_time: z.string().describe('查询结束时间（入职时间 &lt;= 此时间）').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      user_ids: z
        .array(z.string())
        .describe(
          'user_id、open_id 或 union_id，默认为 open_id。如果传入的值不是 open_id，需要一并传入 user_id_type 参数。可一次查询多个 id 的用户，例如：user_ids=ou_8ebd4f35d7101ffdeb4771d7c8ec517e&user_ids=ou_7abc4f35d7101ffdeb4771dabcde',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，取值范围 1~100，默认 10').optional(),
    }),
  },
};
export const ehrV1Tools = [ehrV1EmployeeList];
