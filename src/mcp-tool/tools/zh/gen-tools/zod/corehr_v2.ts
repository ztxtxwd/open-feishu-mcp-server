import { z } from 'zod';
export type corehrV2ToolName =
  | 'corehr.v2.approvalGroups.get'
  | 'corehr.v2.approvalGroups.openQueryDepartmentChangeListByIds'
  | 'corehr.v2.approvalGroups.openQueryJobChangeListByIds'
  | 'corehr.v2.approver.list'
  | 'corehr.v2.basicInfoBankBranch.search'
  | 'corehr.v2.basicInfoBank.search'
  | 'corehr.v2.basicInfoCity.search'
  | 'corehr.v2.basicInfoCountryRegionSubdivision.search'
  | 'corehr.v2.basicInfoCountryRegion.search'
  | 'corehr.v2.basicInfoCurrency.search'
  | 'corehr.v2.basicInfoDistrict.search'
  | 'corehr.v2.basicInfoLanguage.search'
  | 'corehr.v2.basicInfoNationality.search'
  | 'corehr.v2.basicInfoTimeZone.search'
  | 'corehr.v2.bp.getByDepartment'
  | 'corehr.v2.bp.list'
  | 'corehr.v2.company.active'
  | 'corehr.v2.company.batchGet'
  | 'corehr.v2.company.queryRecentChange'
  | 'corehr.v2.contract.search'
  | 'corehr.v2.costAllocation.batchQuery'
  | 'corehr.v2.costAllocation.createVersion'
  | 'corehr.v2.costAllocation.removeVersion'
  | 'corehr.v2.costAllocation.updateVersion'
  | 'corehr.v2.costCenter.create'
  | 'corehr.v2.costCenter.delete'
  | 'corehr.v2.costCenter.patch'
  | 'corehr.v2.costCenter.queryRecentChange'
  | 'corehr.v2.costCenter.search'
  | 'corehr.v2.costCenterVersion.create'
  | 'corehr.v2.costCenterVersion.delete'
  | 'corehr.v2.costCenterVersion.patch'
  | 'corehr.v2.defaultCostCenter.batchQuery'
  | 'corehr.v2.defaultCostCenter.createVersion'
  | 'corehr.v2.defaultCostCenter.removeVersion'
  | 'corehr.v2.defaultCostCenter.updateVersion'
  | 'corehr.v2.department.batchGet'
  | 'corehr.v2.department.delete'
  | 'corehr.v2.department.parents'
  | 'corehr.v2.department.patch'
  | 'corehr.v2.department.queryMultiTimeline'
  | 'corehr.v2.department.queryOperationLogs'
  | 'corehr.v2.department.queryRecentChange'
  | 'corehr.v2.department.queryTimeline'
  | 'corehr.v2.department.search'
  | 'corehr.v2.department.tree'
  | 'corehr.v2.employee.batchGet'
  | 'corehr.v2.employee.create'
  | 'corehr.v2.employee.search'
  | 'corehr.v2.employeesAdditionalJob.batch'
  | 'corehr.v2.employeesAdditionalJob.create'
  | 'corehr.v2.employeesAdditionalJob.delete'
  | 'corehr.v2.employeesAdditionalJob.patch'
  | 'corehr.v2.employeesBp.batchGet'
  | 'corehr.v2.employeesJobData.batchGet'
  | 'corehr.v2.employeesJobData.query'
  | 'corehr.v2.enum.search'
  | 'corehr.v2.jobChange.create'
  | 'corehr.v2.jobChange.revoke'
  | 'corehr.v2.jobChange.search'
  | 'corehr.v2.jobFamily.batchGet'
  | 'corehr.v2.jobFamily.queryRecentChange'
  | 'corehr.v2.jobGrade.create'
  | 'corehr.v2.jobGrade.delete'
  | 'corehr.v2.jobGrade.patch'
  | 'corehr.v2.jobGrade.query'
  | 'corehr.v2.jobGrade.queryRecentChange'
  | 'corehr.v2.jobLevel.batchGet'
  | 'corehr.v2.jobLevel.queryRecentChange'
  | 'corehr.v2.job.get'
  | 'corehr.v2.job.list'
  | 'corehr.v2.job.queryRecentChange'
  | 'corehr.v2.location.active'
  | 'corehr.v2.locationAddress.create'
  | 'corehr.v2.locationAddress.delete'
  | 'corehr.v2.locationAddress.patch'
  | 'corehr.v2.location.batchGet'
  | 'corehr.v2.location.patch'
  | 'corehr.v2.location.queryRecentChange'
  | 'corehr.v2.offboarding.edit'
  | 'corehr.v2.offboarding.revoke'
  | 'corehr.v2.offboarding.submitV2'
  | 'corehr.v2.person.create'
  | 'corehr.v2.person.patch'
  | 'corehr.v2.preHire.complete'
  | 'corehr.v2.preHire.create'
  | 'corehr.v2.preHire.delete'
  | 'corehr.v2.preHire.patch'
  | 'corehr.v2.preHire.query'
  | 'corehr.v2.preHire.restoreFlowInstance'
  | 'corehr.v2.preHire.search'
  | 'corehr.v2.preHire.transitTask'
  | 'corehr.v2.preHire.withdrawOnboarding'
  | 'corehr.v2.probationAssessment.create'
  | 'corehr.v2.probationAssessment.delete'
  | 'corehr.v2.probationAssessment.patch'
  | 'corehr.v2.probation.enableDisableAssessment'
  | 'corehr.v2.probation.search'
  | 'corehr.v2.probation.submit'
  | 'corehr.v2.probation.withdraw'
  | 'corehr.v2.processRevoke.update'
  | 'corehr.v2.processWithdraw.update'
  | 'corehr.v2.processApprover.update'
  | 'corehr.v2.processExtra.update'
  | 'corehr.v2.processFormVariableData.get'
  | 'corehr.v2.process.get'
  | 'corehr.v2.process.list'
  | 'corehr.v2.processTransfer.update'
  | 'corehr.v2.reportDetailRow.batchDelete'
  | 'corehr.v2.reportDetailRow.batchSave'
  | 'corehr.v2.workforcePlanDetailRow.batchDelete'
  | 'corehr.v2.workforcePlanDetailRow.batchSave'
  | 'corehr.v2.workforcePlanDetail.batch'
  | 'corehr.v2.workforcePlanDetail.batchV2'
  | 'corehr.v2.workforcePlan.list';
export const corehrV2ApprovalGroupsGet = {
  project: 'corehr',
  name: 'corehr.v2.approvalGroups.get',
  sdkName: 'corehr.v2.approvalGroups.get',
  path: '/open-apis/corehr/v2/approval_groups/:process_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织架构调整-根据流程 ID 查询组织架构调整记录-用户通过『飞书人事-我的团队-组织架构』 发起一个组织架构调整会根据 审批流配置发起 一个或多个审批。 之后用户可通过流程 process 的单据 ID， 查询到该审批进行的状态， 以及该流程中涉及到的 组织架构信息（包括部门变更、人员变更记录 ID、岗位变更记录 ID）。如需查询具体变更详情：- 部门变更：- 员工变更：',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '组织架构调整流程 ID， 用户通过『飞书人事-我的团队-组织架构』或『飞书 人事-人员管理-组织架构』 发起一个组织架构调整，并提交审批后，系统会根据管理员在审批流程中配置的规则，生成 一个或多个审批单据',
        ),
    }),
  },
};
export const corehrV2ApprovalGroupsOpenQueryDepartmentChangeListByIds = {
  project: 'corehr',
  name: 'corehr.v2.approvalGroups.openQueryDepartmentChangeListByIds',
  sdkName: 'corehr.v2.approvalGroups.openQueryDepartmentChangeListByIds',
  path: '/open-apis/corehr/v2/approval_groups/open_query_department_change_list_by_ids',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织架构调整-批量查询部门调整内容-根据部门调整记录 ID 批量查询部门调整内容',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_change_ids: z
        .array(z.string())
        .describe(
          '部门调整记录 ID 列表， 返回的变更 ID 类型与 请求体中的```department_id_type``` 一致。 调整记录详情可通过 获取。',
        )
        .optional(),
      need_department_path: z
        .boolean()
        .describe(
          '是否返回部门全路径， 用于在组织架构调整中级联创建部门的场景， 由于上级部门还未生效， 因此返回全路径用于数据查询',
        )
        .optional(),
    }),
    params: z.object({
      process_id: z
        .string()
        .describe(
          '组织架构调整流程 ID， 用户通过『飞书人事-我的团队-组织架构』或『飞书 人事-人员管理-组织架构』 发起一个组织架构调整，并提交审批后，系统会根据管理员在审批流程中配置的规则，生成 一个或多个审批单据',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2ApprovalGroupsOpenQueryJobChangeListByIds = {
  project: 'corehr',
  name: 'corehr.v2.approvalGroups.openQueryJobChangeListByIds',
  sdkName: 'corehr.v2.approvalGroups.openQueryJobChangeListByIds',
  path: '/open-apis/corehr/v2/approval_groups/open_query_job_change_list_by_ids',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织架构调整-批量查询人员调整内容-根据人员异动记录 ID 批量查询人员调整内容',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_change_ids: z
        .array(z.string())
        .describe(
          '人员异动记录 ID List, 在组织架构调整发起后，会为调整涉及的员工生成一个 员工异动记录， 对应的记录 ID 即为 job_change_id。 调整记录可通过[【根据流程 ID 查询组织架构调整记录】](ssl://ttdocs/uAjLw4CM/ukTMukTMukTM/corehr-v2/approval_groups/get) 获取。',
        )
        .optional(),
      need_department_path: z.boolean().describe('是否返回部门全路径').optional(),
    }),
    params: z.object({
      process_id: z
        .string()
        .describe(
          '组织架构调整流程 ID， 用户通过『飞书人事-我的团队-组织架构』或『飞书 人事-人员管理-组织架构』 发起一个组织架构调整，并提交审批后，系统会根据管理员在审批流程中配置的规则，生成 一个或多个审批单据',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2ApproverList = {
  project: 'corehr',
  name: 'corehr.v2.approver.list',
  sdkName: 'corehr.v2.approver.list',
  path: '/open-apis/corehr/v2/approvers',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-审批任务-获取指定人员审批任务列表-审批任务依赖于流程节点实例存在，每一个流程节点实例可能包含有一或多个审批任务，每一个任务表明当前节点的审批人是谁，该接口可获取指定人员的审批任务列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      user_id: z.string().describe('指定人员id，按user_id_type类型传递'),
      approver_status: z
        .number()
        .describe(
          '任务状态 Options:-2(Skipped 跳过),-1(Initiated 发起),0(Not started 未开始),1(In progress 进行中),2(Rejected 已拒绝),3(Approved 已通过),4(Cancelled 被撤回),5(CC 抄送),6(Form submitted 表单提交),12(Failed 失败),14(Rolled back 已回退),16(Revoke 发起撤销)',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoBankBranchSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoBankBranch.search',
  sdkName: 'corehr.v2.basicInfoBankBranch.search',
  path: '/open-apis/corehr/v2/basic_info/bank_branchs/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-银行信息-查询支行信息-根据银行 ID、支行 ID 、支行名称、联行号，支行状态、更新时间 查询银行信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      bank_id_list: z
        .array(z.string())
        .describe(
          '银行 ID 列表，可通过列举，或从等接口返回的 `person_info.bank_account_list.bank_id_v2` 字段中获取',
        )
        .optional(),
      bank_branch_id_list: z
        .array(z.string())
        .describe(
          '支行 ID 列表，可通过等接口返回的 `person_info.bank_account_list.bank_branch_id_v2` 字段获取',
        )
        .optional(),
      bank_branch_name_list: z.array(z.string()).describe('支行名称列表，支持对支行名称精确搜索').optional(),
      code_list: z
        .array(z.string())
        .describe('金融分支机构编码（联行号）列表，支持对金融分支机构编码精确搜索')
        .optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('状态列表')
        .optional(),
      update_start_time: z.string().describe('最早更新时间').optional(),
      update_end_time: z.string().describe('最晚更新时间').optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoBankSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoBank.search',
  sdkName: 'corehr.v2.basicInfoBank.search',
  path: '/open-apis/corehr/v2/basic_info/banks/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-银行信息-查询银行信息-根据银行 ID 、银行名称，查询银行信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      bank_id_list: z
        .array(z.string())
        .describe(
          '银行 ID 列表，可通过等接口返回的 `person_info.bank_account_list.bank_id_v2` 字段获取',
        )
        .optional(),
      bank_name_list: z.array(z.string()).describe('银行名称列表，支持对银行名称精确搜索').optional(),
      status_list: z
        .array(z.number().describe('Options:1(enabled 生效),0(disabled 失效)'))
        .describe('状态列表')
        .optional(),
      update_start_time: z.string().describe('最早更新时间').optional(),
      update_end_time: z.string().describe('最晚更新时间').optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoCitySearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoCity.search',
  sdkName: 'corehr.v2.basicInfoCity.search',
  path: '/open-apis/corehr/v2/basic_info/cities/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-地理库信息-查询城市信息-根据城市 ID、上级省份/主要行政区 ID ，查询城市（自治区、地区、县「美」、町、村「日」）信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      country_region_subdivision_id_list: z
        .array(z.string())
        .describe(
          '省份/行政区 ID 列表，可通过接口获取，不填则返回全部',
        )
        .optional(),
      city_id_list: z.array(z.string()).describe('城市 ID 列表，不填则返回全部').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('状态列表，不填则返回全部')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoCountryRegionSubdivisionSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoCountryRegionSubdivision.search',
  sdkName: 'corehr.v2.basicInfoCountryRegionSubdivision.search',
  path: '/open-apis/corehr/v2/basic_info/country_region_subdivisions/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-地理库信息-查询省份/主要行政区信息-根据国家/地区 ID、省份/主要行政区 ID、状态，批量查询国家/地区下辖的一级行政区（如省份、直辖市、自治区、州等）数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      country_region_id_list: z
        .array(z.string())
        .describe(
          '国家/地区 ID 列表，可通过接口获取，不填写则返回全部',
        )
        .optional(),
      country_region_subdivision_id_list: z
        .array(z.string())
        .describe('省份/主要行政区 ID 列表，不填写则返回全部')
        .optional(),
      status_list: z
        .array(z.number().describe('Options:1(Effective 生效),0(Expiration 失效)'))
        .describe('状态列表，不填写则返回全部')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoCountryRegionSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoCountryRegion.search',
  sdkName: 'corehr.v2.basicInfoCountryRegion.search',
  path: '/open-apis/corehr/v2/basic_info/country_regions/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-地理库信息-查询国家/地区信息-根据国家/地区 ID、状态，批量查询国家/地区信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      country_region_id_list: z.array(z.string()).describe('国家/地区 ID 列表，不填写则返回全部').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('国家/地区数据的状态列表，不填写则返回全部')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoCurrencySearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoCurrency.search',
  sdkName: 'corehr.v2.basicInfoCurrency.search',
  path: '/open-apis/corehr/v2/basic_info/currencies/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-货币信息-查询货币信息-根据货币 ID、状态查询货币信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      currency_id_list: z.array(z.string()).describe('货币 ID 列表，不填写则返回全部列表').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('货币状态列表，不填写则返回全部列表')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoDistrictSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoDistrict.search',
  sdkName: 'corehr.v2.basicInfoDistrict.search',
  path: '/open-apis/corehr/v2/basic_info/districts/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-地理库信息-查询区/县信息-根据区/县 ID、上级城市 ID，查询区/县信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      city_id_list: z
        .array(z.string())
        .describe(
          '所属城市 ID 列表，详细信息可通过接口查询获得，不填写则返回全部列表',
        )
        .optional(),
      district_id_list: z.array(z.string()).describe('区/县 ID 列表，不填则返回全部').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('区/县状态列表，不填则返回全部')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoLanguageSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoLanguage.search',
  sdkName: 'corehr.v2.basicInfoLanguage.search',
  path: '/open-apis/corehr/v2/basic_info/languages/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-语言信息-查询语言信息-根据语言 ID、状态，批量查询语言信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      language_id_list: z.array(z.string()).describe('语言 ID 列表，如果为空，返回所有数据').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('状态列表')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoNationalitySearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoNationality.search',
  sdkName: 'corehr.v2.basicInfoNationality.search',
  path: '/open-apis/corehr/v2/basic_info/nationalities/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-国籍信息-查询国籍信息-根据国籍 ID、国家 ID，查询国籍信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      nationality_id_list: z
        .array(z.string())
        .describe(
          '国籍 ID 列表，可从接口返回的 `person_info.nationality_id_v2` 等字段中获取，不填则返回全部',
        )
        .optional(),
      country_region_id_list: z
        .array(z.string())
        .describe(
          '国家 / 地区 ID 列表，可通过接口查询，不填则返回全部',
        )
        .optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('状态列表')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BasicInfoTimeZoneSearch = {
  project: 'corehr',
  name: 'corehr.v2.basicInfoTimeZone.search',
  sdkName: 'corehr.v2.basicInfoTimeZone.search',
  path: '/open-apis/corehr/v2/basic_info/time_zones/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-基础数据-时区信息-查询时区信息-根据时区 ID、状态，批量查询时区信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      time_zone_id_list: z.array(z.string()).describe('时区 ID 列表，如果为空，返回所有数据').optional(),
      status_list: z
        .array(z.number().describe('Options:1(active 生效),0(inactive 失效)'))
        .describe('状态列表')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2BpGetByDepartment = {
  project: 'corehr',
  name: 'corehr.v2.bp.getByDepartment',
  sdkName: 'corehr.v2.bp.getByDepartment',
  path: '/open-apis/corehr/v2/bps/get_by_department',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-权限-查询部门 HRBP-查询部门的 HRBP 信息，包括来自上级部门的 HRBP',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_id: z
        .string()
        .describe(
          '部门 ID，ID类型与department_id_type的取值意义一致。 > 可以使用 换取 ==department_id== > 部门id也可通过接口获取',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2BpList = {
  project: 'corehr',
  name: 'corehr.v2.bp.list',
  sdkName: 'corehr.v2.bp.list',
  path: '/open-apis/corehr/v2/bps',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-权限-获取 HRBP 列表-获取 HRBP 列表。列表中包含HRBP的ID以及部门ID信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 500'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2CompanyActive = {
  project: 'corehr',
  name: 'corehr.v2.company.active',
  sdkName: 'corehr.v2.company.active',
  path: '/open-apis/corehr/v2/companies/active',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-启用/停用公司-对公司进行启用或停用操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      company_id: z
        .string()
        .describe(
          '公司 ID- 可从 的 id 字段中获取',
        ),
      effective_time: z
        .string()
        .describe(
          '公司启用/停用生效时间- 填写格式： YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 ～ 9999-12-31',
        ),
      active: z.boolean().describe('启用/停用状态。- active 传 true 代表启用- active 传 false 代表停用'),
      operation_reason: z.string().describe('操作原因'),
    }),
  },
};
export const corehrV2CompanyBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.company.batchGet',
  sdkName: 'corehr.v2.company.batchGet',
  path: '/open-apis/corehr/v2/companies/batch_get',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-通过公司 ID 批量获取公司信息-通过 ID 批量查询公司信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      company_ids: z
        .array(z.string())
        .describe(
          '需要查询的公司ID列表。ID获取方式：- 调用等接口可以返回部门ID',
        ),
    }),
  },
};
export const corehrV2CompanyQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.company.queryRecentChange',
  sdkName: 'corehr.v2.company.queryRecentChange',
  path: '/open-apis/corehr/v2/companies/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-公司-查询当前生效信息变更公司-查询指定时间范围内当前生效信息发生变更的公司，即只有公司当前生效版本的生效时间在查询时间范围内，才返回该公司id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，格式 "YYYY-MM-DD HH:MM:SS", 以 UTC+8 时区查询变更'),
      end_date: z
        .string()
        .describe('查询的结束时间，格式 "YYYY-MM-DD HH:MM:SS", 以 UTC+8 时区查询变更。 查询结束时间应大于开始时间'),
    }),
  },
};
export const corehrV2ContractSearch = {
  project: 'corehr',
  name: 'corehr.v2.contract.search',
  sdkName: 'corehr.v2.contract.search',
  path: '/open-apis/corehr/v2/contracts/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-合同-搜索合同-该接口可用于搜索合同信息，包括合同开始时间、合同预计结束时间、合同实际结束时间、合同公司主体等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id_list: z
        .array(z.string())
        .describe(
          '雇佣 ID 列表，雇佣ID可通过接口查询；最多支持传入20个ID',
        )
        .optional(),
      contract_id_list: z
        .array(z.string())
        .describe(
          '合同 ID 列表，该ID可以通过接口获取；最多支持传入20个ID。<md-alert type="tip" icon="none">注意：以上两个筛选条件如果都填写，则是 「与」 的关系；如果都不填写，默认返回所有的合同列表信息</md-alert>',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2CostAllocationBatchQuery = {
  project: 'corehr',
  name: 'corehr.v2.costAllocation.batchQuery',
  sdkName: 'corehr.v2.costAllocation.batchQuery',
  path: '/open-apis/corehr/v2/cost_allocations/batch_query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-成本分摊-查询成本分摊-查询成本分摊',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '员工ID列表-可以调用接口，获取指定员工的 employment_id',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2CostAllocationCreateVersion = {
  project: 'corehr',
  name: 'corehr.v2.costAllocation.createVersion',
  sdkName: 'corehr.v2.costAllocation.createVersion',
  path: '/open-apis/corehr/v2/cost_allocations/create_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-成本分摊-创建成本分摊-创建成本分摊',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工雇佣 ID-可以调用接口，获取指定员工的 employment_id',
        ),
      cost_allocation: z
        .object({
          effective_time: z.string().describe('分摊生效日期'),
          expiration_time: z.string().describe('分摊失效日期').optional(),
          job_data_cost_center_id: z
            .array(
              z.object({
                cost_center_id: z
                  .string()
                  .describe(
                    '成本中心 ID-可以调用接口，获取对应成本中心信息的成本中心ID',
                  ),
                new_rate: z.number().describe('分摊比例'),
              }),
            )
            .describe('成本分摊')
            .optional(),
          reason: z.string().describe('变更原因').optional(),
        })
        .describe('成本分摊')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
    }),
  },
};
export const corehrV2CostAllocationRemoveVersion = {
  project: 'corehr',
  name: 'corehr.v2.costAllocation.removeVersion',
  sdkName: 'corehr.v2.costAllocation.removeVersion',
  path: '/open-apis/corehr/v2/cost_allocations/remove_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-成本分摊-删除成本分摊-删除成本分摊',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工ID，删除时必填-可以调用接口，获取指定员工的 employment_id',
        ),
      cost_allocation: z
        .object({
          wk_id: z
            .string()
            .describe(
              'wk_id，删除时必填-可以调用接口，获取对应成本分摊信息的成本分摊ID',
            ),
        })
        .describe('成本分摊')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
    }),
  },
};
export const corehrV2CostAllocationUpdateVersion = {
  project: 'corehr',
  name: 'corehr.v2.costAllocation.updateVersion',
  sdkName: 'corehr.v2.costAllocation.updateVersion',
  path: '/open-apis/corehr/v2/cost_allocations/update_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-成本分摊-更新成本分摊-更新成本分摊',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工雇佣 ID-可以调用接口，获取指定员工的 employment_id',
        ),
      cost_allocation: z
        .object({
          wk_id: z
            .string()
            .describe(
              'wk_id-可以调用接口，获取对应成本分摊信息的成本分摊ID',
            ),
          effective_time: z.string().describe('分摊生效日期').optional(),
          expiration_time: z.string().describe('分摊失效日期').optional(),
          job_data_cost_center_id: z
            .array(
              z.object({
                cost_center_id: z
                  .string()
                  .describe(
                    '成本中心 ID-可以调用接口，获取对应成本中心信息的成本中心ID',
                  )
                  .optional(),
                new_rate: z.number().describe('分摊比例').optional(),
              }),
            )
            .describe('成本分摊')
            .optional(),
          reason: z.string().describe('变更原因').optional(),
        })
        .describe('成本分摊')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
    }),
  },
};
export const corehrV2CostCenterCreate = {
  project: 'corehr',
  name: 'corehr.v2.costCenter.create',
  sdkName: 'corehr.v2.costCenter.create',
  path: '/open-apis/corehr/v2/cost_centers',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-成本中心-创建成本中心-单个创建成本中心；可定义成本中心的名称，父级成本中心，成本中心负责人，生效时间等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .array(
          z.object({
            lang: z.string().describe('名称信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('文本内容'),
          }),
        )
        .describe('成本中心名称- 名称不能包含「/」「；」「;」字符- 成本中心中英文名称会有全局唯一校验'),
      code: z
        .string()
        .describe(
          '成本中心编码 (不能与其他记录的编码重复)- 开启自动编码时，如果不传值会自动生成编码，否则以传入值为准- 未开启自动编码时，不传值不会自动生成编码',
        )
        .optional(),
      parent_cost_center_id: z
        .string()
        .describe(
          '上级成本中心ID，详细信息可通过接口查询获得',
        )
        .optional(),
      managers: z
        .array(z.string())
        .describe(
          '成本中心负责人ID 列表。ID获取方式：- 调用返回雇佣信息ID- 调用接口返回雇佣信息ID',
        )
        .optional(),
      description: z
        .array(
          z.object({
            lang: z.string().describe('信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('成本中心描述的具体内容'),
          }),
        )
        .describe('成本中心描述')
        .optional(),
      effective_time: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31- 详情可以参考',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2CostCenterDelete = {
  project: 'corehr',
  name: 'corehr.v2.costCenter.delete',
  sdkName: 'corehr.v2.costCenter.delete',
  path: '/open-apis/corehr/v2/cost_centers/:cost_center_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-成本中心-删除成本中心-删除成本中心记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ operation_reason: z.string().describe('操作原因') }),
    path: z.object({
      cost_center_id: z
        .string()
        .describe(
          '成本ID。ID获取方式：- 调用等接口可以返回成本中心ID',
        )
        .optional(),
    }),
  },
};
export const corehrV2CostCenterPatch = {
  project: 'corehr',
  name: 'corehr.v2.costCenter.patch',
  sdkName: 'corehr.v2.costCenter.patch',
  path: '/open-apis/corehr/v2/cost_centers/:cost_center_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-成本中心-启用 / 停用成本中心-该接口支持对单个成本中心进行启用和停用操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      effective_time: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31- 详情可以参考',
        ),
      active: z.boolean().describe('启用停用状态'),
      operation_reason: z.string().describe('操作原因'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      cost_center_id: z
        .string()
        .describe(
          '成本中心ID，可通过接口查询获得',
        )
        .optional(),
    }),
  },
};
export const corehrV2CostCenterQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.costCenter.queryRecentChange',
  sdkName: 'corehr.v2.costCenter.queryRecentChange',
  path: '/open-apis/corehr/v2/cost_centers/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-成本中心-查询当前生效信息发生变更的成本中心-查询指定时间范围内当前生效信息发生变更的成本中心，即只有部门当前生效版本的生效时间在查询时间范围内，才返回该成本中心id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"'),
    }),
  },
};
export const corehrV2CostCenterSearch = {
  project: 'corehr',
  name: 'corehr.v2.costCenter.search',
  sdkName: 'corehr.v2.costCenter.search',
  path: '/open-apis/corehr/v2/cost_centers/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-成本中心-搜索成本中心信息-搜索成本中心信息；支持通过成本中心ID，成本中心名称，成本中心编码，成本中心上级搜索成本中心的信息，有分页功能',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      cost_center_id_list: z.array(z.string()).describe('成本中心ID 列表').optional(),
      name_list: z.array(z.string()).describe('成长中心名称列表，精确匹配').optional(),
      code: z.string().describe('成本中心编码').optional(),
      parent_cost_center_id: z.string().describe('上级成本中心ID，可用于查询直接下级成本中心').optional(),
      get_all_version: z
        .boolean()
        .describe(
          '是否获取所有成本中心版本，true 为获取成本中心所有版本记录，false 为仅获取当前生效的成本中心记录，默认为 false当填写 true 并输入其他查询条件时，返回的是所有符合查询条件的版本信息',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2CostCenterVersionCreate = {
  project: 'corehr',
  name: 'corehr.v2.costCenterVersion.create',
  sdkName: 'corehr.v2.costCenterVersion.create',
  path: '/open-apis/corehr/v2/cost_centers/:cost_center_id/versions',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-组织管理-成本中心-成本中心版本-创建成本中心版本-创建成本中心版本；每次调用可创建一个成本中心版本，可定义成本中心的名称，描述，上级成本，成本中心负责人，版本生效时间等信息，接口内会做相关规则的校验',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .array(
          z.object({
            lang: z.string().describe('信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('内容'),
          }),
        )
        .describe('成本中心名称'),
      parent_cost_center_id: z
        .string()
        .describe(
          '上级成本中心ID，可通过接口查询获得',
        )
        .optional(),
      managers: z
        .array(z.string())
        .describe(
          '成本中心负责人ID 列表，可通过接口获取',
        )
        .optional(),
      description: z
        .array(
          z.object({
            lang: z.string().describe('信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('内容'),
          }),
        )
        .describe('成本中心描述')
        .optional(),
      effective_time: z
        .string()
        .describe(
          '版本生效时间- 填写格式：YYYY-MM-DD - 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31 - 详情可以参考',
        ),
      operation_reason: z.string().describe('操作原因'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      cost_center_id: z
        .string()
        .describe(
          '成本中心ID，可通过接口查询获得',
        )
        .optional(),
    }),
  },
};
export const corehrV2CostCenterVersionDelete = {
  project: 'corehr',
  name: 'corehr.v2.costCenterVersion.delete',
  sdkName: 'corehr.v2.costCenterVersion.delete',
  path: '/open-apis/corehr/v2/cost_centers/:cost_center_id/versions/:version_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-组织管理-成本中心-成本中心版本-撤销成本中心版本-该接口支持通过成本中心的版本ID撤销成本中心版本信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ operation_reason: z.string().describe('操作原因') }),
    path: z.object({
      cost_center_id: z
        .string()
        .describe(
          '成本中心ID，可通过接口查询获得',
        )
        .optional(),
      version_id: z
        .string()
        .describe(
          '版本ID，可通过接口查询获得',
        )
        .optional(),
    }),
  },
};
export const corehrV2CostCenterVersionPatch = {
  project: 'corehr',
  name: 'corehr.v2.costCenterVersion.patch',
  sdkName: 'corehr.v2.costCenterVersion.patch',
  path: '/open-apis/corehr/v2/cost_centers/:cost_center_id/versions/:version_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-组织管理-成本中心-成本中心版本-更正成本中心版本-对成本中心的版本记录进行更正，可更正的字段包括：名称，上级成本中心，成本中心负责人列表，成本中心的描述，生效时间',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .array(
          z.object({
            lang: z.string().describe('信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('文本内容'),
          }),
        )
        .describe('成本中心名称')
        .optional(),
      parent_cost_center_id: z
        .string()
        .describe(
          '上级成本中心ID，可通过接口查询获得',
        )
        .optional(),
      managers: z
        .array(z.string())
        .describe(
          '成本中心负责人ID 列表。ID获取方式：- 调用返回雇佣信息ID- 调用接口返回雇佣信息ID',
        )
        .optional(),
      description: z
        .array(
          z.object({
            lang: z.string().describe('信息的语言，支持中文和英文。中文用zh-CN；英文用en-US'),
            value: z.string().describe('文本内容'),
          }),
        )
        .describe('成本中心描述')
        .optional(),
      effective_time: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD（系统会自动将时分秒改为00:00:00）- 本次编辑的记录版本生效的时间， 如果用户在本次操作的生效日期之后修改了对象信息，则系统会将下一次操作的日期作为当前记录的失效时间。 - 系统默认为填写日期当天的 失效- 日期范围要求:1900-01-01 ～9999-12-31- 详情可以参考',
        ),
      operation_reason: z.string().describe('操作原因'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      cost_center_id: z
        .string()
        .describe(
          '成本中心ID，可通过接口查询获得',
        )
        .optional(),
      version_id: z
        .string()
        .describe(
          '版本ID，可通过接口查询获得',
        )
        .optional(),
    }),
  },
};
export const corehrV2DefaultCostCenterBatchQuery = {
  project: 'corehr',
  name: 'corehr.v2.defaultCostCenter.batchQuery',
  sdkName: 'corehr.v2.defaultCostCenter.batchQuery',
  path: '/open-apis/corehr/v2/default_cost_centers/batch_query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-默认成本中心-查询默认成本中心-查询默认成本中心',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '员工雇佣 ID 列表--可以调用接口，获取指定员工的 employment_id',
        ),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2DefaultCostCenterCreateVersion = {
  project: 'corehr',
  name: 'corehr.v2.defaultCostCenter.createVersion',
  sdkName: 'corehr.v2.defaultCostCenter.createVersion',
  path: '/open-apis/corehr/v2/default_cost_centers/create_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-默认成本中心-添加默认成本中心-添加默认成本中心',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工雇佣 ID-可以调用接口，获取指定员工的 employment_id',
        ),
      default_cost_center: z
        .object({
          effective_time: z.string().describe('生效日期'),
          cost_center_id: z
            .string()
            .describe(
              '成本中心ID-可以调用接口，获取成本中心信息中的成本中心ID',
            )
            .optional(),
          is_inherit: z.boolean().describe('是否继承自岗位/部门的默认成本中心').optional(),
          reason: z.string().describe('变更原因').optional(),
        })
        .describe('默认成本中心信息')
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('幂等标识，服务端会忽略client_token重复的请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2DefaultCostCenterRemoveVersion = {
  project: 'corehr',
  name: 'corehr.v2.defaultCostCenter.removeVersion',
  sdkName: 'corehr.v2.defaultCostCenter.removeVersion',
  path: '/open-apis/corehr/v2/default_cost_centers/remove_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-默认成本中心-删除默认成本中心-删除默认成本中心',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工雇佣 ID-可以调用接口，获取指定员工的 employment_id',
        ),
      default_cost_center: z
        .object({
          wk_id: z
            .string()
            .describe(
              'wk_id-可以调用接口，获取对应默认成本中心信息的默认成本中心ID',
            ),
          wk_tid: z
            .string()
            .describe(
              'wk_tid-可以调用接口，获取对应默认成本中心信息的默认成本中心版本ID',
            ),
        })
        .describe('默认成本中心信息')
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('幂等标识，服务端会忽略client_token重复的请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2DefaultCostCenterUpdateVersion = {
  project: 'corehr',
  name: 'corehr.v2.defaultCostCenter.updateVersion',
  sdkName: 'corehr.v2.defaultCostCenter.updateVersion',
  path: '/open-apis/corehr/v2/default_cost_centers/update_version',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-默认成本中心-更新默认成本中心-更新默认成本中心',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '员工雇佣 ID-可以调用接口，获取指定员工的 employment_id',
        ),
      default_cost_center: z
        .object({
          wk_id: z
            .string()
            .describe(
              'wk_id-可以调用接口，获取对应默认成本中心信息的默认成本中心ID',
            ),
          wk_tid: z
            .string()
            .describe(
              'wk_tid-可以调用接口，获取对应默认成本中心信息的默认成本中心版本ID',
            ),
          effective_time: z.string().describe('生效日期').optional(),
          cost_center_id: z
            .string()
            .describe(
              '成本中心 ID-可以调用接口，获取对应成本中心信息的成本中心ID',
            )
            .optional(),
          is_inherit: z.boolean().describe('是否继承自岗位/部门的默认成本中心').optional(),
          reason: z.string().describe('变更原因').optional(),
        })
        .describe('默认成本中心信息')
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('幂等标识，服务端会忽略client_token重复的请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2DepartmentBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.department.batchGet',
  sdkName: 'corehr.v2.department.batchGet',
  path: '/open-apis/corehr/v2/departments/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-批量查询部门-批量查询部门信息，**该接口只返回部门当前内容**',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_id_list: z
        .array(z.string())
        .describe(
          '部门ID列表，和 department_name_list 至少传一种，两个字段都传会按照 AND 方式查询，都不传则返回空。ID获取方式：- 调用等接口可以返回部门ID- 也可以通过 获取部门ID信息',
        )
        .optional(),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，都不传则只返回部门 ID，可选值：- version_id：当前版本ID- sub_type：部门子类型- manager：负责人- is_root：是否根部门- is_confidential：是否保密- effective_date：当前版本生效日期- expiration_date：当前版本失效日期- department_name：部门名称- parent_department_id：上级部门ID- tree_order：树形排序- list_order：列表排序- code：部门编码- active：是否启用- description：部门描述- custom_fields：自定义字段- staffing_model：岗职务模式- cost_center_id：部门默认成本中心- created_time：创建时间- updated_time：更新时间- created_by：创建人- updated_by：更新人- record_created_time：记录创建时间- record_updated_time：记录更新时间- record_created_by：记录创建人- record_updated_by：记录更新人',
        )
        .optional(),
      department_name_list: z
        .array(z.string())
        .describe(
          '部门名称精确匹配，最多传100个。和 department_id_list 至少传一种，两个字段都传会按照 AND 方式查询，都不传则返回空',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentDelete = {
  project: 'corehr',
  name: 'corehr.v2.department.delete',
  sdkName: 'corehr.v2.department.delete',
  path: '/open-apis/corehr/v2/departments/:department_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-删除部门 V2-可以通过该接口通过部门ID删除一个部门记录，带数据行权限判权',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
    path: z.object({
      department_id: z
        .string()
        .describe(
          '需要删除的部门 ID，可通过接口查询获得',
        ),
    }),
  },
};
export const corehrV2DepartmentParents = {
  project: 'corehr',
  name: 'corehr.v2.department.parents',
  sdkName: 'corehr.v2.department.parents',
  path: '/open-apis/corehr/v2/departments/parents',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-获取父部门信息-该接口用来递归获取部门的父部门信息，并按照由子到父的顺序返回有权限的父部门信息列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_id_list: z
        .array(z.string())
        .describe(
          '部门 ID 列表，一次性最多传入 100 个部门 ID- 调用等接口可以返回部门ID',
        ),
    }),
    params: z.object({
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentPatch = {
  project: 'corehr',
  name: 'corehr.v2.department.patch',
  sdkName: 'corehr.v2.department.patch',
  path: '/open-apis/corehr/v2/departments/:department_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-更新部门-更新部门，支持数据行权限判权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      id: z.string().describe('该字段暂时无效，可忽略').optional(),
      sub_type: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '部门类型，通过查询获取。请求参数：object_api_name=department；custom_api_name=subtype',
        )
        .optional(),
      manager: z
        .string()
        .describe(
          '部门负责人 ID详细信息可通过 或  接口获取',
        )
        .optional(),
      is_confidential: z.boolean().describe('是否保密（该字段暂不支持，可忽略）').optional(),
      hiberarchy_common: z
        .object({
          parent_id: z.string().describe('上级组织').optional(),
          name: z
            .array(
              z.object({
                lang: z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: z.string().describe('文本内容'),
              }),
            )
            .describe('部门名称- 名称不能包含「/」「；」「;」字符。- 中英文名称会有重名校验规则（依赖租户配置规则）')
            .optional(),
          active: z.boolean().describe('部门启用状态，true为启用，false为停用').optional(),
          code: z.string().describe('部门编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
          description: z
            .array(
              z.object({
                lang: z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
                value: z.string().describe('文本内容'),
              }),
            )
            .describe('描述')
            .optional(),
        })
        .describe('组织实体公共字段，包括名称、描述、上级、启停用状态、生效日期、编码等基础信息')
        .optional(),
      effective_time: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD 00:00:00（系统会自动将时分秒改为00:00:00）- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01 00:00:00～9999-12-31 23:59:59',
        ),
      custom_fields: z
        .array(
          z.object({
            field_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
            value: z
              .string()
              .describe(
                '字段值，为 JSON 转义后的字符串。**注意：具体传值方式参见**',
              ),
          }),
        )
        .describe(
          '自定义字段，枚举值可通过获取',
        )
        .optional(),
      cost_center_id: z
        .string()
        .describe(
          '成本中心 ID，可以通过接口获取对应的成本中心信息',
        )
        .optional(),
      staffing_model: z
        .object({ enum_name: z.string().describe('枚举值：job、position、non_job') })
        .describe(
          '岗职管理模式- 详细枚举类型请查看中关于staffing_model定义',
        )
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
    path: z.object({ department_id: z.string().describe('需要更新的部门 ID') }),
  },
};
export const corehrV2DepartmentQueryMultiTimeline = {
  project: 'corehr',
  name: 'corehr.v2.department.queryMultiTimeline',
  sdkName: 'corehr.v2.department.queryMultiTimeline',
  path: '/open-apis/corehr/v2/departments/query_multi_timeline',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-批量查询部门版本信息-根据部门ID列表，批量查询开始结束时间内的所有部门版本信息，含部门名称、部门类型、上级、编码、负责人、是否启用、描述等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_ids: z
        .array(z.string())
        .describe(
          '部门 ID 列表，可请求获取',
        ),
      effective_date_start: z.string().describe('生效日期开始(包含)').optional(),
      effective_date_end: z.string().describe('生效日期结束(包含)').optional(),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，可选["department_name", "sub_type", "code", "active", "parent_department_id", "manager", "description", "effective_date"], 以及自定义字段field_name',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentQueryOperationLogs = {
  project: 'corehr',
  name: 'corehr.v2.department.queryOperationLogs',
  sdkName: 'corehr.v2.department.queryOperationLogs',
  path: '/open-apis/corehr/v2/departments/query_operation_logs',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-批量查询部门操作日志-批量查询指定时间范围内的部门操作日志',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_ids: z
        .array(z.string().describe('部门ID'))
        .describe(
          '部门ID列表，ID获取方式：- 调用、接口可以返回部门ID- 也可以通过、 获取部门ID',
        ),
      start_date: z
        .string()
        .describe(
          '查询的起始操作日期，格式 "YYYY-MM-DD"，不带时分秒，包含start_date传入的时间，系统会以start_date的00:00:00为开始时间进行查询',
        ),
      end_date: z
        .string()
        .describe(
          '查询的截止操作日期，格式 "YYYY-MM-DD"，不带时分秒，包含end_date传入的时间，系统会以end_date的23:59:59为截止时间进行查询。查询截止日期应大于起始日期，起止日期跨度最大为366天',
        ),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 1000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.department.queryRecentChange',
  sdkName: 'corehr.v2.department.queryRecentChange',
  path: '/open-apis/corehr/v2/departments/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-查询生效信息变更部门-查询指定时间范围内当前生效信息发生变更的部门，即只有部门当前生效版本的生效时间在查询时间范围内，才返回该部门id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大支持单次 2000 条变更'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，格式 "YYYY-MM-DD HH:MM:SS", 以 UTC+8 时区查询变更。'),
      end_date: z
        .string()
        .describe('查询的结束时间，格式 "YYYY-MM-DD HH:MM:SS", 以 UTC+8 时区查询变更。 查询结束时间应大于开始时间'),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentQueryTimeline = {
  project: 'corehr',
  name: 'corehr.v2.department.queryTimeline',
  sdkName: 'corehr.v2.department.queryTimeline',
  path: '/open-apis/corehr/v2/departments/query_timeline',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-查询指定生效日期的部门基本信息-查询指定生效的部门基本信息，含部门名称、部门类型、上级、编码、负责人、是否启用、描述等信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_ids: z
        .array(z.string())
        .describe(
          '部门 ID 列表- 可通过 或者 获取详情',
        ),
      effective_date: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31',
        ),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，可选["department_name", "sub_type", "code", "active", "parent_department_id", "manager", "description", "effective_date"]',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentSearch = {
  project: 'corehr',
  name: 'corehr.v2.department.search',
  sdkName: 'corehr.v2.department.search',
  path: '/open-apis/corehr/v2/departments/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-搜索部门信息-该接口支持通过部门id、上级部门ID、部门负责人、名称、编码字段批量搜索当天的部门详情信息，包括部门包含的名称、描述、启用状态等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      active: z
        .boolean()
        .describe('该部门是否启用，true为启用，false为停用- 如果传空则所有启用状态数据都返回')
        .optional(),
      get_all_children: z
        .boolean()
        .describe('当通过上级部门 ID 查询时，填写 true 返回所有子部门，填写 false 只返回直接下级部门- 默认为false')
        .optional(),
      manager_list: z
        .array(z.string())
        .describe(
          '部门负责人 ID 列表- 详细信息可通过 或  接口获取- 传非空值返回指定部门负责人的部门，传空值则不加该筛选条件',
        )
        .optional(),
      department_id_list: z
        .array(z.string())
        .describe('部门 ID列表，用来做条件筛选- 传非空值返回指定部门ID，传空值则不加该筛选条件')
        .optional(),
      name_list: z
        .array(z.string())
        .describe('部门名称列表，需精确匹配，用于筛选条件- 传非空值则返回指定部门名称的部门，传空值则不加该筛选条件')
        .optional(),
      parent_department_id: z
        .string()
        .describe(
          '上级部门 ID - 可通过 或者 获取详情- 传非空值返回指定上级部门ID的子部门，传空值则不加该筛选条件',
        )
        .optional(),
      code_list: z
        .array(z.string())
        .describe('部门编码列表- 传非空值返回指定编码的部门，传空值则不加该筛选条件')
        .optional(),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，如果传空只返回部门id，可选值：- version_id：当前版本ID- sub_type：部门类型- manager：负责人- is_root：是否根部门- is_confidential：是否保密- effective_date：当前版本生效日期- expiration_date：当前版本失效日期- department_name：部门名称- parent_department_id：上级部门ID- tree_order：树形排序- list_order：列表排序- code：部门编码- active：是否启用- description：部门描述- custom_fields：自定义字段- staffing_model：岗职务模式- cost_center_id：部门默认成本中心- created_time：创建时间- updated_time：更新时间- created_by：创建人- updated_by：更新人- record_created_time：记录创建时间- record_updated_time：记录更新时间- record_created_by：记录创建人- record_updated_by：记录更新人',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2DepartmentTree = {
  project: 'corehr',
  name: 'corehr.v2.department.tree',
  sdkName: 'corehr.v2.department.tree',
  path: '/open-apis/corehr/v2/departments/tree',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-部门-查询指定生效日期的部门架构树-支持传入部门ID（不传默认根部门），任意日期（不传默认当前日期）。从给定部门ID开始广度遍历，每页最多返回2000行数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      department_id: z.string().describe('部门 ID，默认根部门').optional(),
      need_inactive: z.boolean().describe('是否包含失效部门，默认false').optional(),
      effective_date: z
        .string()
        .describe('日期，格式yyyy-mm-dd，默认当前日期- 传2024-01-01，即为返回2024-01-01的组织架构')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeeBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.employee.batchGet',
  sdkName: 'corehr.v2.employee.batchGet',
  path: '/open-apis/corehr/v2/employees/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-员工信息-批量查询员工信息-通过员工 ID 、个人信息 ID、工作邮箱等筛选项批量查询员工的工作信息、个人信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      fields: z
        .array(z.string())
        .describe(
          '需要查询的字段列表- 参考- 为空时仅返回 employment_id',
        )
        .optional(),
      employment_ids: z
        .array(z.string())
        .describe(
          '雇佣 ID 列表- 以下请求参数中「employment_ids」，「person_ids」，「work_emails」不得均为空- 请根据需求选择一种模式进行查询，若单次请求中多个请求参数有值，按照【employment_ids > person_ids > work_emails】的顺序只识别第一个有值的请求参数- ID 类型需要与 user_id_type 保持一致。- 在时返回的 ID',
        )
        .optional(),
      person_ids: z
        .array(z.string())
        .describe(
          '个人信息 ID 列表，employment_ids参数有值时该参数不生效。- 在时返回的 ID',
        )
        .optional(),
      work_emails: z
        .array(z.string())
        .describe('主工作邮箱列表，「employment_ids」，「person_ids」参数有值时该参数不生效')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeeCreate = {
  project: 'corehr',
  name: 'corehr.v2.employee.create',
  sdkName: 'corehr.v2.employee.create',
  path: '/open-apis/corehr/v2/employees',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-员工信息-添加人员-支持在单个接口中进行人员全信息添加，包括人员的基本信息，雇佣信息，入职任职记录及其他分组信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      personal_info: z
        .object({
          personal_basic_info: z
            .object({
              legal_name: z
                .object({
                  additional_name_type: z
                    .string()
                    .describe(
                      '补充姓名类型枚举值可以通过接口查询，查询参数如下：- object_api_name = "person_name"- custom_api_name = "additional_name_type"',
                    )
                    .optional(),
                  country_region: z
                    .string()
                    .describe(
                      '国家 / 地区 ID如果填写了法定姓名对象，则该字段必填可通过接口获取',
                    )
                    .optional(),
                  full_name: z.string().describe('全名').optional(),
                  hereditary: z.string().describe('姓氏称谓').optional(),
                  middle_name: z.string().describe('中间名').optional(),
                  secondary: z.string().describe('第二姓氏').optional(),
                  social: z
                    .string()
                    .describe(
                      '尊称枚举值可以通过接口查询，查询参数如下：- object_api_name = "person_name" - custom_api_name = "social"',
                    )
                    .optional(),
                  tertiary: z.string().describe('婚后姓氏').optional(),
                  local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
                  local_middle_name: z.string().describe('本地中间名').optional(),
                  local_primary: z.string().describe('姓 - 本地文字').optional(),
                  local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
                  local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
                  title: z
                    .string()
                    .describe(
                      '头衔枚举值可以通过接口查询，查询参数如下：- object_api_name = "person_name" - custom_api_name = "title"',
                    )
                    .optional(),
                  local_first_name: z.string().describe('名 - 本地文字').optional(),
                  custom_local_name: z.string().describe('自定义姓名（本地文字）').optional(),
                  custom_western_name: z.string().describe('自定义姓名（西方文字）').optional(),
                  first_name: z.string().describe('名').optional(),
                  name_primary: z.string().describe('姓').optional(),
                })
                .describe(
                  '法定姓名。- ',
                )
                .optional(),
              preferred_name: z
                .object({
                  additional_name_type: z
                    .string()
                    .describe(
                      '补充姓名类型枚举值可以通过接口查询，查询参数如下： - object_api_name = "person_name" - custom_api_name = "additional_name_type"',
                    )
                    .optional(),
                  country_region: z
                    .string()
                    .describe(
                      '国家 / 地区 ID如果填写了常用姓名对象，则该字段必填可通过接口获取',
                    )
                    .optional(),
                  full_name: z.string().describe('全名').optional(),
                  hereditary: z.string().describe('姓氏称谓').optional(),
                  middle_name: z.string().describe('中间名').optional(),
                  secondary: z.string().describe('第二姓氏').optional(),
                  social: z
                    .string()
                    .describe(
                      '尊称枚举值可以通过接口查询，查询参数如下： - object_api_name = "person_name" - custom_api_name = "social"',
                    )
                    .optional(),
                  tertiary: z.string().describe('婚后姓氏').optional(),
                  local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
                  local_middle_name: z.string().describe('本地中间名').optional(),
                  local_primary: z.string().describe('姓 - 本地文字').optional(),
                  local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
                  local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
                  title: z
                    .string()
                    .describe(
                      '头衔枚举值可以通过接口查询，查询参数如下： - object_api_name = "person_name" - custom_api_name = "title"',
                    )
                    .optional(),
                  local_first_name: z.string().describe('名 - 本地文字').optional(),
                  custom_local_name: z.string().describe('自定义姓名（本地文字）').optional(),
                  custom_western_name: z.string().describe('自定义姓名（西方文字）').optional(),
                  first_name: z.string().describe('名').optional(),
                  name_primary: z.string().describe('姓').optional(),
                })
                .describe(
                  '常用姓名。- ',
                )
                .optional(),
              additional_name: z.string().describe('别名').optional(),
              gender: z
                .string()
                .describe(
                  '性别枚举值可通过接口查询，查询参数如下： - object_api_name = "person" - custom_api_name = "gender"',
                )
                .optional(),
              nationality_v2: z
                .string()
                .describe(
                  '国籍 ID可通过接口获取',
                )
                .optional(),
              ethnicity_race: z
                .string()
                .describe(
                  '民族 / 种族枚举值可通过接口查询，查询参数如下： - object_api_name = "person" - custom_api_name = "ethnicity_race"',
                )
                .optional(),
              phone: z
                .object({
                  international_area_code: z
                    .string()
                    .describe(
                      '国际电话区号枚举值可通过接口查询，查询参数如下： - object_api_name = "phone" - custom_api_name = "international_area_code"',
                    )
                    .optional(),
                  phone_number: z.string().describe('电话号码如果填写了个人电话对象，则该字段必填').optional(),
                })
                .describe('个人电话')
                .optional(),
              email: z.string().describe('个人邮箱').optional(),
              date_of_birth: z.string().describe('出生日期').optional(),
              marital_status: z
                .string()
                .describe(
                  '婚姻状况枚举值可通过接口查询，查询参数如下： - object_api_name = "person" - custom_api_name = "marital_status"',
                )
                .optional(),
              is_disabled: z.boolean().describe('是否残疾').optional(),
              disable_card_number: z.string().describe('残疾证号is_disabled 为 true 时必填').optional(),
              is_martyr_family: z.boolean().describe('是否为烈属').optional(),
              martyr_card_number: z.string().describe('烈属证号is_martyr_family 为 true 时必填').optional(),
              is_old_alone: z.boolean().describe('是否为孤老').optional(),
              born_country_region: z.string().describe('出生国家/地区').optional(),
              political_affiliation: z
                .string()
                .describe(
                  '政治面貌枚举值可通过接口查询，查询参数如下： - object_api_name = "person_info_chn" - custom_api_name = "political_affiliation"',
                )
                .optional(),
              native_region: z
                .string()
                .describe(
                  '籍贯（省份/行政区 ID）可通过接口获取',
                )
                .optional(),
              date_entered_workforce: z.string().describe('参加工作日期').optional(),
              first_entry_time: z.string().describe('首次入境日期').optional(),
              leave_time: z.string().describe('预计离境日期').optional(),
              custom_fields: z
                .array(
                  z.object({
                    field_name: z.string().describe('字段名'),
                    value: z
                      .string()
                      .describe(
                        '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                      )
                      .optional(),
                  }),
                )
                .describe('自定义字段')
                .optional(),
              additional_nationalities: z.array(z.string()).describe('其他国籍（地区）ID').optional(),
            })
            .describe('基本信息')
            .optional(),
          emergency_contacts: z
            .array(
              z.object({
                legal_name: z.string().describe('姓名').optional(),
                relationship: z
                  .string()
                  .describe(
                    '关系枚举值可通过接口查询，查询参数如下： - object_api_name = "emergency_contact" - custom_api_name = "relationship"',
                  )
                  .optional(),
                is_primary: z.boolean().describe('主要联系人').optional(),
                phone: z
                  .object({
                    international_area_code: z
                      .string()
                      .describe(
                        '国际电话区号枚举值可通过接口查询，查询参数如下： - object_api_name = "phone" - custom_api_name = "international_area_code"',
                      )
                      .optional(),
                    phone_number: z.string().describe('电话号码如果填写了电话对象，则该字段必填').optional(),
                  })
                  .describe('电话')
                  .optional(),
                email: z.string().describe('邮箱').optional(),
                address: z
                  .object({
                    address_type: z
                      .string()
                      .describe(
                        '地址类型枚举值可通过接口查询，查询参数如下： - object_api_name = "address" - custom_api_name = "address_type"',
                      )
                      .optional(),
                    country_region: z
                      .string()
                      .describe(
                        '国家 / 地区 ID如果填写了地址对象，则该字段必填可通过接口获取',
                      )
                      .optional(),
                    region: z
                      .string()
                      .describe(
                        '主要行政区 ID可通过接口获取',
                      )
                      .optional(),
                    region_subdivision_1: z.string().describe('主要行政区往下细分 1 层的行政区').optional(),
                    region_subdivision_2: z.string().describe('主要行政区往下细分 2 层的行政区').optional(),
                    city_v2: z
                      .string()
                      .describe(
                        '城市V2 ID可通过接口获取',
                      )
                      .optional(),
                    city_text: z.string().describe('城市（文本）').optional(),
                    local_city_text: z.string().describe('城市（仅文本，非拉丁语系的本地文字）').optional(),
                    city_subdivision_1: z.string().describe('城市往下细分 1 层的行政区').optional(),
                    city_subdivision_2: z.string().describe('城市往下细分 2 层的行政区').optional(),
                    district_v2: z
                      .string()
                      .describe(
                        '区/县 V2 ID可通过接口获取',
                      )
                      .optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_line_1: z.string().describe('地址行 1如果填写了地址对象，则该字段必填').optional(),
                    local_address_line_1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    address_line_2: z.string().describe('地址行 2').optional(),
                    local_address_line_2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    address_line_3: z.string().describe('地址行 3').optional(),
                    local_address_line_3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    address_line_4: z.string().describe('地址行 4').optional(),
                    local_address_line_5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    address_line_6: z.string().describe('地址行 6').optional(),
                    local_address_line_6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    address_line_7: z.string().describe('地址行 7').optional(),
                    local_address_line_7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    address_line_8: z.string().describe('地址行 8').optional(),
                    local_address_line_8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    address_line_9: z.string().describe('地址行 9').optional(),
                    local_address_line_9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    local_address_line_4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    address_line_5: z.string().describe('地址行 5').optional(),
                  })
                  .describe('地址')
                  .optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('紧急联系人')
            .optional(),
          bank_accounts: z
            .array(
              z.object({
                country_region: z
                  .string()
                  .describe(
                    '国家 / 地区 ID可通过接口获取',
                  )
                  .optional(),
                bank_name: z.string().describe('银行名称').optional(),
                branch_name: z.string().describe('支行名称').optional(),
                account_holder: z.string().describe('开户人姓名如果填写了银行账号对象，则该字段必填').optional(),
                bank_account_number: z.string().describe('银行账号如果填写了银行账号对象，则该字段必填').optional(),
                bank_account_usages: z
                  .array(z.string())
                  .describe(
                    '银行卡用途枚举值可通过接口查询，查询参数如下： - object_api_name = "bank_account" - custom_api_name = "bank_account_usage"',
                  )
                  .optional(),
                bank_account_type: z
                  .string()
                  .describe(
                    '银行卡类型枚举值可通过接口查询，查询参数如下： - object_api_name = "bank_account" - custom_api_name = "bank_account_type"',
                  )
                  .optional(),
                bank_id: z
                  .string()
                  .describe(
                    '银行 ID可通过接口获取',
                  )
                  .optional(),
                branch_id: z
                  .string()
                  .describe(
                    '银行支行 ID可通过接口获取',
                  )
                  .optional(),
                payment_type: z
                  .enum(['percent', 'amount', 'balance'])
                  .describe('分配方式，枚举值 Options:percent(按比例分配),amount(按金额分配),balance(默认卡)')
                  .optional(),
                payment_rate: z.string().describe('分配比例，0～100，保留两位小数').optional(),
                payment_amount: z.string().describe('分配金额，保留两位小数').optional(),
                priority: z.string().describe('优先级，不能低于0').optional(),
              }),
            )
            .describe('银行账户')
            .optional(),
          nationals: z
            .array(
              z.object({
                country_region: z
                  .string()
                  .describe(
                    '国家 / 地区 ID如果填写了证件对象，则该字段必填可通过接口获取',
                  )
                  .optional(),
                national_id_type: z
                  .string()
                  .describe(
                    '国家证件类型 ID如果填写了证件对象，则该字段必填可通过接口获取',
                  )
                  .optional(),
                national_id_number: z.string().describe('证件号码如果填写了证件对象，则该字段必填').optional(),
                issued_date: z.string().describe('证件签发日期').optional(),
                issued_by: z.string().describe('证件签发机构').optional(),
                expiration_date: z.string().describe('证件到期日期').optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('证件')
            .optional(),
          resident_taxes: z
            .array(
              z.object({
                year_resident_tax: z.string().describe('年度如果填写了居民身份信息对象，则该字段必填').optional(),
                tax_country_region: z
                  .string()
                  .describe(
                    '国家 / 地区 ID如果填写了居民身份信息对象，则该字段必填可通过接口获取',
                  )
                  .optional(),
                resident_status: z
                  .string()
                  .describe(
                    '居民身份枚举值可通过接口查询，查询参数如下： - object_api_name = "resident_tax" - custom_api_name = "resident_status"',
                  )
                  .optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('居民身份信息')
            .optional(),
          dependents: z
            .array(
              z.object({
                legal_name: z.string().describe('姓名').optional(),
                date_of_birth: z.string().describe('生日').optional(),
                relationship_with_dependent: z
                  .string()
                  .describe(
                    '关系如果填写了家庭成员对象，则该字段必填枚举值可通过接口查询，查询参数如下： - object_api_name = "dependent" - custom_api_name ="relationship_with_dependent"',
                  )
                  .optional(),
                gender: z
                  .string()
                  .describe(
                    '性别枚举值可通过接口查询，查询参数如下： - object_api_name = "dependent" - custom_api_name = "gender"',
                  )
                  .optional(),
                phone: z
                  .object({
                    international_area_code: z
                      .string()
                      .describe(
                        '国际电话区号枚举值可通过接口查询，查询参数如下： - object_api_name = "phone" - custom_api_name = "international_area_code"',
                      )
                      .optional(),
                    phone_number: z.string().describe('电话号码').optional(),
                  })
                  .describe('电话')
                  .optional(),
                job: z.string().describe('岗位').optional(),
                child_birth_certificates: z
                  .array(
                    z.object({
                      file_id: z
                        .string()
                        .describe(
                          '文件 ID- 可通过接口获取- 只传该字段即可，大小、类型等字段可以不传递',
                        )
                        .optional(),
                      mime_type: z.string().describe('文件 MIME 类型').optional(),
                      name: z.string().describe('文件名').optional(),
                      size: z.string().describe('文件大小（KB）').optional(),
                      token: z.string().describe('文件 Token').optional(),
                    }),
                  )
                  .describe('出生证明')
                  .optional(),
                employer: z.string().describe('工作单位').optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                address: z
                  .object({
                    address_type: z
                      .string()
                      .describe(
                        '地址类型枚举值可通过接口查询，查询参数如下： - object_api_name = "address" - custom_api_name = "address_type"',
                      )
                      .optional(),
                    country_region: z
                      .string()
                      .describe(
                        '国家 / 地区 ID可通过接口获取',
                      )
                      .optional(),
                    region: z
                      .string()
                      .describe(
                        '主要行政区 ID可通过接口获取',
                      )
                      .optional(),
                    region_subdivision_1: z.string().describe('主要行政区往下细分 1 层的行政区').optional(),
                    region_subdivision_2: z.string().describe('主要行政区往下细分 2 层的行政区').optional(),
                    city_v2: z
                      .string()
                      .describe(
                        '城市 V2 ID可通过接口获取',
                      )
                      .optional(),
                    city_text: z.string().describe('城市（文本）').optional(),
                    local_city_text: z.string().describe('城市（仅文本，非拉丁语系的本地文字）').optional(),
                    city_subdivision_1: z.string().describe('城市往下细分 1 层的行政区').optional(),
                    city_subdivision_2: z.string().describe('城市往下细分 2 层的行政区').optional(),
                    district_v2: z
                      .string()
                      .describe(
                        '区/县 V2 ID可通过接口获取',
                      )
                      .optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_line_1: z.string().describe('地址行 1').optional(),
                    local_address_line_1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    address_line_2: z.string().describe('地址行 2').optional(),
                    local_address_line_2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    address_line_3: z.string().describe('地址行 3').optional(),
                    local_address_line_3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    address_line_4: z.string().describe('地址行 4').optional(),
                    local_address_line_5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    address_line_6: z.string().describe('地址行 6').optional(),
                    local_address_line_6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    address_line_7: z.string().describe('地址行 7').optional(),
                    local_address_line_7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    address_line_8: z.string().describe('地址行 8').optional(),
                    local_address_line_8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    address_line_9: z.string().describe('地址行 9').optional(),
                    local_address_line_9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    local_address_line_4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    address_line_5: z.string().describe('地址行 5').optional(),
                  })
                  .describe('联系地址')
                  .optional(),
              }),
            )
            .describe('家庭成员')
            .optional(),
          hukou: z
            .object({
              hukou_type: z
                .string()
                .describe(
                  '户口类型枚举值可通过接口查询，查询参数如下： - object_api_name = "person_info_chn" - custom_api_name = "hukou_type"',
                )
                .optional(),
              hukou_location: z.string().describe('户口所在地').optional(),
              custom_fields: z
                .array(
                  z.object({
                    field_name: z.string().describe('字段名'),
                    value: z
                      .string()
                      .describe(
                        '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                      )
                      .optional(),
                  }),
                )
                .describe('自定义字段')
                .optional(),
            })
            .describe('户口')
            .optional(),
          contact_addresses: z
            .array(
              z.object({
                address_type: z
                  .string()
                  .describe(
                    '地址类型枚举值可通过接口查询，查询参数如下： - object_api_name = "address" - custom_api_name = "address_type"',
                  )
                  .optional(),
                country_region: z
                  .string()
                  .describe(
                    '国家 / 地区 ID如果填写了地址对象，则该字段必填可通过接口获取',
                  )
                  .optional(),
                region: z
                  .string()
                  .describe(
                    '主要行政区 ID可通过接口获取',
                  )
                  .optional(),
                region_subdivision_1: z.string().describe('主要行政区往下细分 1 层的行政区').optional(),
                region_subdivision_2: z.string().describe('主要行政区往下细分 2 层的行政区').optional(),
                city_v2: z
                  .string()
                  .describe(
                    '城市 V2 ID可通过接口获取',
                  )
                  .optional(),
                city_text: z.string().describe('城市（文本）').optional(),
                local_city_text: z.string().describe('城市（仅文本，非拉丁语系的本地文字）').optional(),
                city_subdivision_1: z.string().describe('城市往下细分 1 层的行政区').optional(),
                city_subdivision_2: z.string().describe('城市往下细分 2 层的行政区').optional(),
                district_v2: z
                  .string()
                  .describe(
                    '区/县 V2 ID可通过接口获取',
                  )
                  .optional(),
                postal_code: z.string().describe('邮政编码').optional(),
                address_line_1: z.string().describe('地址行 1如果填写了地址对象，则该字段必填').optional(),
                local_address_line_1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                address_line_2: z.string().describe('地址行 2').optional(),
                local_address_line_2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                address_line_3: z.string().describe('地址行 3').optional(),
                local_address_line_3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                address_line_4: z.string().describe('地址行 4').optional(),
                local_address_line_5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                address_line_6: z.string().describe('地址行 6').optional(),
                local_address_line_6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                address_line_7: z.string().describe('地址行 7').optional(),
                local_address_line_7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                address_line_8: z.string().describe('地址行 8').optional(),
                local_address_line_8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                address_line_9: z.string().describe('地址行 9').optional(),
                local_address_line_9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                local_address_line_4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                address_line_5: z.string().describe('地址行 5').optional(),
              }),
            )
            .describe('联系地址')
            .optional(),
          custom_groups: z
            .array(
              z.object({
                group_name: z.string().describe('分组名').optional(),
                items: z
                  .array(
                    z.object({
                      custom_fields: z
                        .array(
                          z.object({
                            field_name: z.string().describe('字段名'),
                            value: z
                              .string()
                              .describe(
                                '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                              )
                              .optional(),
                          }),
                        )
                        .describe('自定义字段')
                        .optional(),
                    }),
                  )
                  .describe('分组数据')
                  .optional(),
              }),
            )
            .describe('自定义分组')
            .optional(),
          citizenship_statuses: z
            .array(
              z.object({
                country_region: z.string().describe('国家/地区ID').optional(),
                citizenship_status: z.string().describe('公民身份类型').optional(),
              }),
            )
            .describe('公民身份列表')
            .optional(),
        })
        .describe('个人信息')
        .optional(),
      employment_info: z
        .object({
          basic_info: z
            .object({
              employee_number: z.string().describe('员工编号').optional(),
              effective_time: z.string().describe('入职日期').optional(),
              regular_employee_start_date: z.string().describe('转正式员工日期').optional(),
              seniority_date: z.string().describe('资历起算日期').optional(),
              work_email: z.string().describe('工作邮箱').optional(),
              phone: z
                .object({
                  international_area_code: z
                    .string()
                    .describe(
                      '国际电话区号枚举值可通过接口查询，查询参数如下： - object_api_name = "phone" - custom_api_name = "international_area_code"',
                    )
                    .optional(),
                  phone_number: z.string().describe('电话号码如果填写了工作电话对象，则该字段必填').optional(),
                })
                .describe('工作电话')
                .optional(),
              user_geo: z.string().describe('数据驻留地开通了飞书数据驻留服务的企业，该字段为必填').optional(),
              custom_fields: z
                .array(
                  z.object({
                    field_name: z.string().describe('字段名'),
                    value: z
                      .string()
                      .describe(
                        '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式- 请参考',
                      )
                      .optional(),
                  }),
                )
                .describe('自定义字段')
                .optional(),
            })
            .describe('基本信息')
            .optional(),
          probation_info: z
            .object({
              probation_start_date: z.string().describe('试用期开始日期').optional(),
              probation_expected_end_date: z.string().describe('试用期预计结束日期').optional(),
              actual_probation_end_date: z.string().describe('试用期实际结束日期').optional(),
            })
            .describe('试用期信息')
            .optional(),
          employment_record: z
            .object({
              employee_type: z
                .string()
                .describe(
                  '人员类型 ID可通过接口获取',
                )
                .optional(),
              department: z
                .string()
                .describe(
                  '部门 ID可通过接口获取',
                )
                .optional(),
              direct_manager: z
                .string()
                .describe(
                  '直属上级雇佣 ID可通过接口获取',
                )
                .optional(),
              working_hours_type: z
                .string()
                .describe(
                  '工时制度 ID可通过接口获取',
                )
                .optional(),
              cost_centers: z
                .array(
                  z.object({
                    id: z
                      .string()
                      .describe(
                        '支持的成本中心 ID，详细信息可通过接口查询获得',
                      )
                      .optional(),
                    rate: z.number().describe('分摊比例').optional(),
                  }),
                )
                .describe('成本中心分摊信息')
                .optional(),
              direct_manager_effective_time: z.string().describe('直属上级入职日期').optional(),
              dotted_line_manager: z
                .string()
                .describe(
                  '虚线上级雇佣 ID可通过接口获取',
                )
                .optional(),
              dotted_line_manager_effective_time: z.string().describe('虚线上级入职日期').optional(),
              job: z
                .string()
                .describe(
                  '职务 ID可通过接口获取',
                )
                .optional(),
              job_family: z
                .string()
                .describe(
                  '序列 ID可通过接口获取',
                )
                .optional(),
              job_level: z
                .string()
                .describe(
                  '职级 ID可通过接口获取',
                )
                .optional(),
              job_grade: z
                .string()
                .describe(
                  '职等 ID可通过接口获取',
                )
                .optional(),
              work_location: z
                .string()
                .describe(
                  '工作地点 ID可通过接口获取',
                )
                .optional(),
              weekly_working_hours: z.number().describe('周工作时长').optional(),
              position: z.string().describe('岗位ID').optional(),
              pathway: z.string().describe('通道ID').optional(),
            })
            .describe('任职记录')
            .optional(),
          emp_contract_record: z
            .object({
              contract_number: z.string().describe('合同协议编号').optional(),
              contract_type: z
                .string()
                .describe(
                  '合同类型枚举值可通过接口查询，查询参数如下： - object_api_name = "contract" - custom_api_name = "contract_type"',
                )
                .optional(),
              first_party: z
                .string()
                .describe(
                  '甲方公司 ID引用 Company 的 ID，详细信息可通过接口查询获得',
                )
                .optional(),
              effective_time: z.string().describe('合同开始日期如果填写了合同对象，则该字段必填').optional(),
              duration_type: z
                .string()
                .describe(
                  '期限类型枚举值可通过接口查询，查询参数如下： - object_api_name = "contract" - custom_api_name = "duration_type"',
                )
                .optional(),
              contract_end_date: z.string().describe('合同结束日期').optional(),
            })
            .describe('合同记录')
            .optional(),
          custom_groups: z
            .array(
              z.object({
                group_name: z.string().describe('分组名').optional(),
                items: z
                  .array(
                    z.object({
                      custom_fields: z
                        .array(
                          z.object({
                            field_name: z.string().describe('字段名'),
                            value: z
                              .string()
                              .describe(
                                '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                              )
                              .optional(),
                          }),
                        )
                        .describe('自定义字段')
                        .optional(),
                    }),
                  )
                  .describe('分组数据')
                  .optional(),
              }),
            )
            .describe('自定义分组')
            .optional(),
          custom_org_groups: z
            .array(
              z.object({
                effective_time: z.string().describe('生效时间'),
                start_reason: z.string().describe('原因').optional(),
                custom_org_with_rates: z
                  .array(
                    z.object({
                      id: z.string().describe('自定义组织ID'),
                      rate: z.number().describe('比例 如果是非比例的可不填写').optional(),
                    }),
                  )
                  .describe('自定义组织列表'),
                object_api_name: z.string().describe('自定义组织类型'),
              }),
            )
            .describe('自定义组织记录')
            .optional(),
          seniority_adjust_informations: z
            .array(
              z.object({
                seniority_adjustment_type: z
                  .enum(['increase', 'decrease'])
                  .describe(
                    '调整类型- 可通过接口查询，查询参数如下： - object_api_name：seniority_adjust_information - custom_api_name：seniority_adjustment_type Options:increase(增加),decrease(减少)',
                  ),
                start_date: z.string().describe('开始日期- 格式： yyyy-mm-dd').optional(),
                end_date: z.string().describe('结束日期- 格式： yyyy-mm-dd').optional(),
                reasons_for_seniority_adjustment: z.string().describe('调整原因').optional(),
                seniority_adjustment: z.number().describe('调整值- 精确度：两位小数- 单位：年'),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值, 是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考【操作手册】如何通过 OpenAPI 维护自定义字段',
                        )
                        .optional(),
                    }),
                  )
                  .describe(
                    '自定义字段- 具体支持的对象请参考',
                  )
                  .optional(),
              }),
            )
            .describe('司龄调整信息')
            .optional(),
          default_cost_center: z
            .object({
              reason: z.string().describe('变更原因').optional(),
              is_inherit: z.boolean().describe('是否继承').optional(),
              cost_center_id: z
                .object({ wk_id: z.string().describe('成本中心').optional() })
                .describe('默认成本中心')
                .optional(),
            })
            .describe('默认成本中心')
            .optional(),
          cost_allocation: z
            .object({
              effective_time: z.string().describe('分摊生效日期').optional(),
              expiration_time: z.string().describe('分摊失效日期').optional(),
              cost_center_rates: z
                .array(
                  z.object({
                    cost_center_id: z
                      .string()
                      .describe('成本中心 ID，可以通过【查询单个成本中心信息】接口获取对应的成本中心信息')
                      .optional(),
                    rate: z.number().describe('分摊比例(整数)').optional(),
                    new_rate: z.number().describe('分摊比例').optional(),
                  }),
                )
                .describe('成本分摊信息')
                .optional(),
            })
            .describe('成本分摊')
            .optional(),
        })
        .describe('工作信息')
        .optional(),
      career: z
        .object({
          educations: z
            .array(
              z.object({
                school: z.string().describe('学校').optional(),
                school_enum: z
                  .string()
                  .describe(
                    '学校枚举值可通过接口查询，查询参数如下： - object_api_name = "education" - custom_api_name = "school_name"',
                  )
                  .optional(),
                start_date: z.string().describe('开始日期').optional(),
                end_date: z.string().describe('结束日期').optional(),
                level_of_education: z
                  .string()
                  .describe(
                    '学历枚举值可通过接口查询，查询参数如下： - object_api_name = "education" - custom_api_name = "level_of_education"',
                  )
                  .optional(),
                field_of_study: z.string().describe('专业').optional(),
                degree: z
                  .string()
                  .describe(
                    '学位枚举值可通过接口查询，查询参数如下： - object_api_name = "education" - custom_api_name = "degree"',
                  )
                  .optional(),
                field_of_study_enum: z
                  .string()
                  .describe(
                    '专业枚举值可通过接口查询，查询参数如下： - object_api_name = "education"- custom_api_name = "field_of_study_name"',
                  )
                  .optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('教育经历')
            .optional(),
          work_experiences: z
            .array(
              z.object({
                company_organization: z
                  .object({
                    zh_cn: z.string().describe('中文').optional(),
                    en_us: z.string().describe('英文').optional(),
                  })
                  .describe('公司 / 组织')
                  .optional(),
                department: z
                  .object({
                    zh_cn: z.string().describe('中文').optional(),
                    en_us: z.string().describe('英文').optional(),
                  })
                  .describe('部门')
                  .optional(),
                start_date: z.string().describe('开始日期').optional(),
                end_date: z.string().describe('结束日期').optional(),
                job: z
                  .object({
                    zh_cn: z.string().describe('中文').optional(),
                    en_us: z.string().describe('英文').optional(),
                  })
                  .describe('岗位')
                  .optional(),
                description: z
                  .object({
                    zh_cn: z.string().describe('中文').optional(),
                    en_us: z.string().describe('英文').optional(),
                  })
                  .describe('工作描述')
                  .optional(),
                custom_fields: z
                  .array(
                    z.object({
                      field_name: z.string().describe('字段名'),
                      value: z
                        .string()
                        .describe(
                          '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        )
                        .optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('工作经历')
            .optional(),
          custom_groups: z
            .array(
              z.object({
                group_name: z.string().describe('分组名').optional(),
                items: z
                  .array(
                    z.object({
                      custom_fields: z
                        .array(
                          z.object({
                            field_name: z.string().describe('字段名'),
                            value: z
                              .string()
                              .describe(
                                '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                              )
                              .optional(),
                          }),
                        )
                        .describe('自定义字段')
                        .optional(),
                    }),
                  )
                  .describe('分组数据')
                  .optional(),
              }),
            )
            .describe('自定义分组')
            .optional(),
        })
        .describe('履历信息')
        .optional(),
      data_attachment: z
        .object({
          personal_records: z
            .array(
              z.object({
                profile_type: z
                  .string()
                  .describe(
                    '资料类型- 枚举值可通过接口查询，查询参数如下： - object_api_name = "personal_profile" - custom_api_name = "profile_type"- 仅 【飞书人事-档案配置-资料附件】存在的字段编码可用',
                  )
                  .optional(),
                files: z
                  .array(
                    z.object({
                      file_id: z
                        .string()
                        .describe(
                          '文件 ID- 可通过接口获取- 只传该字段即可，大小、类型等字段可以不传递',
                        )
                        .optional(),
                      mime_type: z.string().describe('文件 MIME 类型').optional(),
                      name: z.string().describe('文件名').optional(),
                      size: z.string().describe('文件大小（KB）').optional(),
                      token: z.string().describe('文件 Token').optional(),
                    }),
                  )
                  .describe('文件列表')
                  .optional(),
              }),
            )
            .describe('资料附件记录')
            .optional(),
          custom_groups: z
            .array(
              z.object({
                group_name: z.string().describe('分组名').optional(),
                items: z
                  .array(
                    z.object({
                      custom_fields: z
                        .array(
                          z.object({
                            field_name: z.string().describe('字段名'),
                            value: z
                              .string()
                              .describe(
                                '字段值是 JSON 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                              )
                              .optional(),
                          }),
                        )
                        .describe('自定义字段')
                        .optional(),
                    }),
                  )
                  .describe('分组数据')
                  .optional(),
              }),
            )
            .describe('自定义分组')
            .optional(),
        })
        .describe('资料附件')
        .optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
      rehire: z
        .boolean()
        .describe('是否为离职重聘- false：系统直接标为非离职重聘人员，不再做重复判断- true：要求 rehire_employment_id')
        .optional(),
      rehire_employment_id: z
        .string()
        .describe(
          '离职重聘员工雇佣 ID可通过接口获取',
        )
        .optional(),
      force_submit: z.boolean().describe('是否强制提交- true：是，跳过超编等校验- false：否，被拦截报错').optional(),
      ignore_working_hours_type_rule: z
        .boolean()
        .describe(
          '是否忽略工时制度自动生成规则- 值为 false 时，以下字段必填： - emp_contract_record.first_party - employment_record.work_location - employment_record.employee_type - employment_record.job_family - employment_record.job - employment_record.job_level - employment_record.department',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const corehrV2EmployeeSearch = {
  project: 'corehr',
  name: 'corehr.v2.employee.search',
  sdkName: 'corehr.v2.employee.search',
  path: '/open-apis/corehr/v2/employees/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-搜索员工信息-查询员工的工作信息、个人信息等数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      fields: z
        .array(z.string())
        .describe(
          '需要查询的字段列表- 参考- 为空时仅返回 employment_id',
        )
        .optional(),
      employment_id_list: z
        .array(z.string())
        .describe(
          '雇佣 ID 列表- 在 返回的 ID- ID类型应于 user_id_type 一致',
        )
        .optional(),
      employee_number_list: z
        .array(z.string())
        .describe(
          '工号列表，是在时主动传递的或者自动生成的工号',
        )
        .optional(),
      work_email: z.string().describe('邮箱，精确匹配查询').optional(),
      phone_number: z
        .string()
        .describe(
          '个人电话，精确匹配查询- 字段权限要求： - <md-perm name="corehr:person.phone.search:read" desc="使用个人电话搜索" support_app_types="custom,isv" >使用个人电话搜索</md-perm>',
        )
        .optional(),
      key_word: z
        .string()
        .describe(
          '搜索关键字，支持对邮箱、工号和姓名的模糊匹配- 模糊搜索基于相关性返回，返回数据不固定，请勿依赖此字段翻页查询',
        )
        .optional(),
      employment_status: z
        .enum(['hired', 'terminated'])
        .describe('雇佣状态 Options:hired(在职),terminated(离职)')
        .optional(),
      employee_type_id: z
        .string()
        .describe(
          '人员类型 ID，可通过接口获取',
        )
        .optional(),
      department_id_list: z
        .array(z.string())
        .describe(
          '部门 ID，根据员工主职的直接部门查询，可以通过 API 获取 部门 ID- ID 类型应与 department_id_type 一致',
        )
        .optional(),
      direct_manager_id_list: z
        .array(z.string())
        .describe(
          '直接上级的雇佣 ID，根据员工主职的直接上级查询- 可基于当前接口获取员工的直属上级雇佣ID- 可基于时返回的雇佣ID- ID 类型应与 user_id_type 一致',
        )
        .optional(),
      dotted_line_manager_id_list: z
        .array(z.string())
        .describe(
          '虚线上级的雇佣 ID，根据员工主职的虚线上级查询- 可基于当前接口获取员工的虚线上级雇佣ID- 可基于时返回的雇佣ID- ID 类型应与 user_id_type 一致',
        )
        .optional(),
      regular_employee_start_date_start: z.string().describe('转正式员工日期-搜索范围开始').optional(),
      regular_employee_start_date_end: z.string().describe('转正式员工日期-搜索范围结束').optional(),
      effective_time_start: z.string().describe('入职日期-搜索范围开始，需要与搜索范围结束一同使用').optional(),
      effective_time_end: z.string().describe('入职日期-搜索范围结束').optional(),
      work_location_id_list_include_sub: z
        .array(z.string())
        .describe(
          '工作地点 ID 列表，查询属于该工作地点及下级工作地点的员工- 可通过 接口获取',
        )
        .optional(),
      preferred_english_full_name_list: z.array(z.string()).describe('常用英文全名精确搜索').optional(),
      preferred_local_full_name_list: z.array(z.string()).describe('常用本地全名精确搜索').optional(),
      national_id_number_list: z
        .array(z.string())
        .describe(
          '居民身份证件号码精确搜索- 字段权限要求： - <md-perm name="corehr:person.national_id.search:read" desc="使用身份证号搜索" support_app_types="custom,isv" >使用身份证号搜索</md-perm>',
        )
        .optional(),
      phone_number_list: z
        .array(z.string())
        .describe(
          '个人电话列表，精确匹配查询- 字段权限要求： - <md-perm name="corehr:person.phone.search:read" desc="使用个人电话搜索" support_app_types="custom,isv" >使用个人电话搜索</md-perm>',
        )
        .optional(),
      email_address_list: z.array(z.string()).describe('工作邮箱地址列表，精确匹配查询').optional(),
      department_id_list_include_sub: z
        .array(z.string())
        .describe(
          '部门 ID 列表，查询属于该部门及下级部门的员工- 可通过获取- ID 类型应与 department_id_type 一致',
        )
        .optional(),
      additional_national_id_number_list: z
        .array(z.string())
        .describe(
          '其他国籍ID列表，精准匹配查询- 字段权限要求 - <md-perm name="corehr:person.additional_nationalities:read" desc="读取员工其他国籍" support_app_types="custom,isv" >读取员工其他国籍</md-perm>',
        )
        .optional(),
      citizenship_status_list: z
        .array(z.string())
        .describe(
          '公民身份类型列表，精确匹配查询- 字段权限要求 - <md-perm name="corehr:person.citizenship_status:read" desc="读取员工公民身份" support_app_types="custom,isv" >读取员工公民身份</md-perm>',
        )
        .optional(),
      cost_center_id_list: z
        .array(z.string())
        .describe(
          '成本中心 ID 列表- 可通过  获取',
        )
        .optional(),
      service_company_list: z
        .array(z.string())
        .describe(
          '任职公司 ID 列表- 获取- 字段权限要求： - <md-perm name="corehr:job_data.service_company:read" desc="读取员工任职公司" support_app_types="custom,isv" >读取员工任职公司</md-perm>',
        )
        .optional(),
      service_company_list_include_sub: z
        .array(z.string())
        .describe(
          '任职公司 ID 列表（含下级）- 获取- 字段权限要求： - <md-perm name="corehr:job_data.service_company:read" desc="读取员工任职公司" support_app_types="custom,isv" >读取员工任职公司</md-perm>',
        )
        .optional(),
      job_family_id_list: z
        .array(z.string())
        .describe(
          '序列 ID 列表 - 获取',
        )
        .optional(),
      job_family_id_list_include_sub: z
        .array(z.string())
        .describe(
          '序列 ID 列表（含下级） - 获取',
        )
        .optional(),
      job_level_id_list: z
        .array(z.string())
        .describe(
          '职级 ID 列表- 可通过获取- 字段权限要求： - <md-perm name="corehr:employment.job_level:read" desc="读取员工职级" support_app_types="custom,isv" >读取员工职级</md-perm>',
        )
        .optional(),
      job_grade_id_list: z
        .array(z.string())
        .describe(
          '职等 ID 列表- 可通过获取- 字段权限要求： - <md-perm name="corehr:employment.job_grade:read" desc="读取员工职等" support_app_types="custom,isv" >读取员工职等</md-perm>',
        )
        .optional(),
      job_id_list: z
        .array(z.string())
        .describe(
          '职务 ID 列表- 可通过获取- 字段权限要求： - <md-perm name="corehr:employment.job:read" desc="读取员工职务" support_app_types="custom,isv" >读取员工职务</md-perm>',
        )
        .optional(),
      position_id_list: z
        .array(z.string())
        .describe(
          '岗位 ID 列表 - 功能灰度中，如有需求请联系 - 字段权限要求： - <md-perm name="corehr:employment.position:read" desc="读取员工岗位" support_app_types="custom,isv" >读取员工岗位</md-perm>',
        )
        .optional(),
      position_id_list_include_sub: z
        .array(z.string())
        .describe(
          '岗位 ID 列表（含下级） - 功能灰度中，如有需求请联系 - 字段权限要求： - <md-perm name="corehr:employment.position:read" desc="读取员工岗位" support_app_types="custom,isv" >读取员工岗位</md-perm>',
        )
        .optional(),
      working_hours_type_id_list: z
        .array(z.string())
        .describe(
          '工时制度 ID 列表- 可通过获取',
        )
        .optional(),
      nationality_id_list: z
        .array(z.string())
        .describe(
          '国籍 ID 列表- 可通过获取 - 字段权限要求： - <md-perm name="corehr:person.nationality:read" desc="读取员工国籍" support_app_types="custom,isv" >读取员工国籍</md-perm>',
        )
        .optional(),
      pay_group_id_list: z
        .array(z.string())
        .describe(
          '员工所属薪资组 ID 列表 - 可通过  获取 - 字段权限要求： - <md-perm name="corehr:employment.pay_group:read" desc="读取员工薪资组" support_app_types="custom,isv" >读取员工薪资组</md-perm>',
        )
        .optional(),
      assignment_pay_group_id_list: z
        .array(z.string())
        .describe(
          '员工所属外派薪资组 ID 列表- 可通过  获取- 字段权限要求： - <md-perm name="corehr:employment.assignment_pay_group:read" desc="读取员工外派薪资组" support_app_types="custom,isv" >读取员工外派薪资组</md-perm>',
        )
        .optional(),
      contract_type_list: z
        .array(z.string())
        .describe(
          '员工当前合同类型列表- 可通过查询 - object_api_name：contract - custom_api_name：contract_type- 字段权限要求： - <md-perm name="corehr:employment.contract_type:read" desc="读取员工当前合同类型" support_app_types="custom,isv" >读取员工当前合同类型</md-perm>',
        )
        .optional(),
      archive_cpst_plan_id_list: z
        .array(z.string())
        .describe(
          '员工当前所属薪资方案 ID 列表- 可通过获取- 字段权限要求： - <md-perm name="corehr:employment.archive_cpst_plan:read" desc="读取员工当前薪资方案" support_app_types="custom,isv" >读取员工当前薪资方案</md-perm>',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeesAdditionalJobBatch = {
  project: 'corehr',
  name: 'corehr.v2.employeesAdditionalJob.batch',
  sdkName: 'corehr.v2.employeesAdditionalJob.batch',
  path: '/open-apis/corehr/v2/employees/additional_jobs/batch',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-员工信息-任职信息-兼职信息-批量查询兼职信息-批量查询兼职信息，包括开始日期、职务、序列、上级、薪资类型等信息。支持全量遍历和筛选查询',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '雇佣 ID，可通过获取详细信息- 类型与 user_id_type 一致',
        )
        .optional(),
      additional_job_ids: z
        .array(z.string())
        .describe('兼职 ID- 指定兼职记录 ID 查询时，请将 page_size 设为最大值，不返回 has_more 参数')
        .optional(),
      start_date: z
        .object({ start: z.string().describe('开始'), end: z.string().describe('结束') })
        .describe('开始日期- 无默认值')
        .optional(),
      end_date: z
        .object({ start: z.string().describe('开始'), end: z.string().describe('结束') })
        .describe('结束日期- 无默认值')
        .optional(),
      data_date: z.string().describe('查看数据日期，默认当天- 与时间范围筛选为 AND 关系').optional(),
      is_effective: z
        .boolean()
        .describe('仅查询在【data_date】当天为生效中的兼职- 默认为 false，即 【data_date】不生效')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个 department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeesAdditionalJobCreate = {
  project: 'corehr',
  name: 'corehr.v2.employeesAdditionalJob.create',
  sdkName: 'corehr.v2.employeesAdditionalJob.create',
  path: '/open-apis/corehr/v2/employees/additional_jobs',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-员工信息-任职信息-兼职信息-创建兼职-创建员工的兼职',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employee_type_id: z
        .string()
        .describe(
          '人员类型 ID，可通过获取',
        ),
      working_hours_type_id: z
        .string()
        .describe(
          '工时制度 ID，可通过获取详细信息',
        )
        .optional(),
      work_location_id: z
        .string()
        .describe(
          '工作地点 ID- 可通过获取详细信息，并选择【地点用途】为工作地点（business_site）的记录',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '部门 ID，可通过获取详细信息类型与 department_id_type 一致',
        ),
      job_id: z
        .string()
        .describe('职务 ID，可通过获取详细信息')
        .optional(),
      job_level_id: z
        .string()
        .describe(
          '职级 ID，可通过获取详细信息',
        )
        .optional(),
      job_family_id: z
        .string()
        .describe(
          '序列 ID，可通过获取详细信息',
        )
        .optional(),
      employment_id: z
        .string()
        .describe(
          '雇佣 ID，可通过获取详细信息类型与 user_id_type 一致',
        ),
      start_date: z.string().describe('兼职开始日期'),
      end_date: z.string().describe('兼职结束日期，不可清空').optional(),
      direct_manager_id: z
        .string()
        .describe(
          '直属上级的雇佣ID，可通过获取详细信息类型与 user_id_type 一致',
        )
        .optional(),
      dotted_line_manager_id: z
        .string()
        .describe(
          '虚线上级的雇佣ID，可通过获取详细信息类型与 user_id_type 一致',
        )
        .optional(),
      work_shift: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '排班类型，可通过接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "work_shift"',
        )
        .optional(),
      compensation_type: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '薪资类型，可通过接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "compensation_type"',
        )
        .optional(),
      service_company: z
        .string()
        .describe(
          '任职公司，可通过获取详细信息',
        )
        .optional(),
      weekly_working_hours: z.string().describe('周工作时长【0~168】').optional(),
      work_calendar_id: z
        .string()
        .describe(
          '工作日历 ID，可通过获取详细信息',
        )
        .optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '操作的唯一标识，用于幂等校验，格式为标准的 UUIDV4。请求成功时，重复的 client_token 不会再创建、变更数据',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个 department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeesAdditionalJobDelete = {
  project: 'corehr',
  name: 'corehr.v2.employeesAdditionalJob.delete',
  sdkName: 'corehr.v2.employeesAdditionalJob.delete',
  path: '/open-apis/corehr/v2/employees/additional_jobs/:additional_job_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-员工信息-任职信息-兼职信息-删除兼职-删除一条指定的员工兼职',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ additional_job_id: z.string().describe('兼职记录 ID') }),
  },
};
export const corehrV2EmployeesAdditionalJobPatch = {
  project: 'corehr',
  name: 'corehr.v2.employeesAdditionalJob.patch',
  sdkName: 'corehr.v2.employeesAdditionalJob.patch',
  path: '/open-apis/corehr/v2/employees/additional_jobs/:additional_job_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-员工信息-任职信息-兼职信息-更新兼职-更新员工的兼职',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employee_type_id: z
        .string()
        .describe(
          '人员类型 ID，可通过获取',
        )
        .optional(),
      working_hours_type_id: z
        .string()
        .describe(
          '工时制度 ID，可通过获取详细信息',
        )
        .optional(),
      work_location_id: z
        .string()
        .describe(
          '工作地点 ID- 可通过获取详细信息，并选择【地点用途】为工作地点（business_site）的记录',
        )
        .optional(),
      department_id: z
        .string()
        .describe(
          '部门 ID，可通过获取详细信息类型与 department_id_type 一致',
        )
        .optional(),
      job_id: z
        .string()
        .describe('职务 ID，可通过获取详细信息')
        .optional(),
      job_level_id: z
        .string()
        .describe(
          '职级 ID，可通过获取详细信息',
        )
        .optional(),
      job_family_id: z
        .string()
        .describe(
          '序列 ID，可通过获取详细信息',
        )
        .optional(),
      start_date: z.string().describe('兼职开始日期').optional(),
      end_date: z.string().describe('兼职结束日期，不可清空').optional(),
      direct_manager_id: z
        .string()
        .describe(
          '直属上级的雇佣 ID，可通过获取详细信息类型与 user_id_type 一致',
        )
        .optional(),
      dotted_line_manager_id: z
        .string()
        .describe(
          '虚线上级的雇佣 ID，可通过获取详细信息类型与 user_id_type 一致',
        )
        .optional(),
      work_shift: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '排班类型，可通过接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "work_shift"',
        )
        .optional(),
      compensation_type: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '薪资类型，可通过接口查询，查询参数如下：- object_api_name = "job_data"- custom_api_name = "compensation_type"',
        )
        .optional(),
      service_company: z
        .string()
        .describe(
          '任职公司，可通过获取详细信息',
        )
        .optional(),
      weekly_working_hours: z.string().describe('周工作时长【0~168】').optional(),
      work_calendar_id: z
        .string()
        .describe(
          '工作日历 ID，可通过获取',
        )
        .optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '操作的唯一标识，用于幂等校验，格式为标准的 UUIDV4。请求成功时，重复的 client_token 不会再创建、变更数据',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个 department_id 在不同应用中的 open_department_id 相同。),department_id(【飞书】用来标识租户内一个唯一的部门。),people_corehr_department_id(【飞书人事】用来标识「飞书人事」中的部门。)',
        )
        .optional(),
    }),
    path: z.object({ additional_job_id: z.string().describe('兼职记录 ID') }),
  },
};
export const corehrV2EmployeesBpBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.employeesBp.batchGet',
  sdkName: 'corehr.v2.employeesBp.batchGet',
  path: '/open-apis/corehr/v2/employees/bps/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-权限-查询员工 HRBP / 属地 BP-查询员工的 HRBP 和属地 BP，包括来自上级部门的 HRBP 和属地 BP',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '员工ID，ID类型与user_id_type的取值意义一致。 > 如果你需要不同类型的ID进行转换，可以使用  换取 ==employment_id==',
        ),
      get_all: z
        .boolean()
        .describe(
          '是否获取全部 BP，true 为获取员工所在部门及来自上级部门的全部 HRBP 和属地 BP，false 为仅获取员工的直属 HRBP 和属地 BP（当员工所在部门、属地无 BP 时，会上钻找到最近的 BP），默认为 false',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2EmployeesJobDataBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.employeesJobData.batchGet',
  sdkName: 'corehr.v2.employeesJobData.batchGet',
  path: '/open-apis/corehr/v2/employees/job_datas/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-批量查询员工任职信息-通过员工雇佣 ID 批量查询任职信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '员工雇佣 ID 列表，可通过获取- 应与 user_id_type 类型一致',
        ),
      get_all_version: z
        .boolean()
        .describe(
          '是否获取所有版本的任职记录- true 为获取员工所有版本的任职记录- false 为仅获取当前生效的任职记录- 默认为 false',
        )
        .optional(),
      effective_date_start: z.string().describe('生效日期 - 搜索范围开始- 默认为空').optional(),
      effective_date_end: z.string().describe('生效日期 - 搜索范围结束- 默认为空').optional(),
      data_date: z.string().describe('查看数据日期- 默认为当天').optional(),
      primary_job_data: z
        .boolean()
        .describe(
          '是否仅查询主职- true：仅返回 primary_job_data 为 true 的任职记录- false：仅返回 primary_job_data 为 false 的任职记录- 不传：返回全部',
        )
        .optional(),
      assignment_start_reasons: z
        .array(z.string())
        .describe(
          '业务类型（原：任职原因）- 可通过接口查询，查询参数如下： - object_api_name：job_data - custom_api_name：assignment_start_reason',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EmployeesJobDataQuery = {
  project: 'corehr',
  name: 'corehr.v2.employeesJobData.query',
  sdkName: 'corehr.v2.employeesJobData.query',
  path: '/open-apis/corehr/v2/employees/job_datas/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-员工信息-任职信息-获取任职信息列表-获取任职信息列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      get_all_version: z
        .boolean()
        .describe(
          '是否获取所有版本的任职记录- true 为获取员工所有版本的任职记录- false 为仅获取当前生效的任职记录- 默认为 false',
        )
        .optional(),
      data_date: z.string().describe('查看数据日期- 与时间范围筛选为 AND 关系- 默认为当天').optional(),
      effective_date_start: z.string().describe('生效日期 - 搜索范围开始- 默认为空').optional(),
      effective_date_end: z.string().describe('生效日期 - 搜索范围结束- 默认为空').optional(),
      department_id: z.string().describe('员工当前所在的部门 ID- 类型应与 department_id_type 一致').optional(),
      employment_ids: z.array(z.string()).describe('员工雇佣 ID 列表- 类型应与 user_id_type 一致').optional(),
      primary_job_data: z
        .boolean()
        .describe(
          '是否仅查询主职- true：仅返回 primary_job_data 为 true 的任职记录- false：仅返回 primary_job_data 为 false 的任职记录- 不传：返回全部',
        )
        .optional(),
      assignment_start_reasons: z
        .array(z.string())
        .describe(
          '业务类型（原：任职原因）- 可通过接口查询，查询参数如下： - object_api_name：job_data - custom_api_name：assignment_start_reason',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2EnumSearch = {
  project: 'corehr',
  name: 'corehr.v2.enum.search',
  sdkName: 'corehr.v2.enum.search',
  path: '/open-apis/corehr/v2/enums/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-基础数据-枚举信息-查询枚举信息-根据枚举的APIName查询枚举详细信息，用于BPM等场景获取枚举选项',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      enum_apiname_lists: z.array(z.string()).describe('枚举apiname列表（不传值查询结果为空）').optional(),
    }),
  },
};
export const corehrV2JobChangeCreate = {
  project: 'corehr',
  name: 'corehr.v2.jobChange.create',
  sdkName: 'corehr.v2.jobChange.create',
  path: '/open-apis/corehr/v2/job_changes',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-异动-发起员工异动-该接口用于发起员工异动（变更员工雇佣信息），若发起成功，会生成一条员工的异动数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      transfer_mode: z.number().describe('异动方式 Options:1(type1 直接异动（无审批）),2(type2 正常异动（完整流程）)'),
      employment_id: z
        .string()
        .describe(
          '雇员ID，ID 类型与查询参数 user_id_type 的取值一致。- 当user_id_type=user_id时，该字段取员工的user_id，取值参考user_id_type部分。- 当user_id_type=people_corehr_id时，则取该员工的人事雇佣ID，可从接口获取',
        ),
      transfer_type_unique_identifier: z
        .string()
        .describe(
          '异动类型唯一标识，不支持仅在特殊场景使用的异动类型，如组织架构调整、职责转交和试用期转正，不会校验是否停用。 可通过接口获取',
        ),
      flow_id: z
        .string()
        .describe(
          '关联流程唯一标识符，可通过接口获取注意：当异动方式为2时，该字段为必填',
        )
        .optional(),
      effective_date: z.string().describe('生效日期，格式："YYYY-MM-DD"'),
      transfer_info: z
        .object({
          remark: z.string().describe('备注').optional(),
          offer_info: z
            .string()
            .describe(
              'offer信息。格式为 json 转义：{\\"resume_id\\": \\"xx\\", \\"resume_detail\\": \\"yy\\"}。resume_id 为投递ID',
            )
            .optional(),
          target_dotted_manager_clean: z.boolean().describe('是否撤销虚线上级').optional(),
          probation_exist: z.boolean().describe('是否有试用期').optional(),
          target_department: z
            .string()
            .describe(
              '新部门ID，可通过接口获取',
            )
            .optional(),
          target_work_location: z
            .string()
            .describe(
              '新工作地点，可通过接口获取',
            )
            .optional(),
          target_direct_manager: z
            .string()
            .describe(
              '新直属上级，可通过接口获取',
            )
            .optional(),
          target_dotted_manager: z
            .string()
            .describe(
              '新虚线上级，可通过接口获取',
            )
            .optional(),
          target_job: z
            .string()
            .describe('新职务，可通过接口获取')
            .optional(),
          target_job_family: z
            .string()
            .describe(
              '新序列ID，可通过接口获取',
            )
            .optional(),
          target_job_level: z
            .string()
            .describe(
              '新职级ID，可通过接口获取',
            )
            .optional(),
          target_workforce_type: z
            .string()
            .describe(
              '新人员类型，可通过接口获取',
            )
            .optional(),
          target_employee_subtype: z.string().describe('新人员子类型').optional(),
          target_company: z
            .string()
            .describe(
              '新公司，详细信息可通过接口查询获得',
            )
            .optional(),
          target_contract_number: z
            .string()
            .describe(
              '新合同编号，可通过接口获取详细信息',
            )
            .optional(),
          target_contract_type: z
            .string()
            .describe(
              '新合同类型，可通过接口获取详细信息',
            )
            .optional(),
          target_duration_type: z
            .string()
            .describe(
              '新期限类型，可通过接口获取详细信息',
            )
            .optional(),
          target_signing_type: z
            .string()
            .describe(
              '新签订类型，可通过接口获取详细信息',
            )
            .optional(),
          target_contract_start_date: z.string().describe('新合同开始日期，格式："YYYY-MM-DD"').optional(),
          target_contract_end_date: z.string().describe('新合同结束日期，格式："YYYY-MM-DD"').optional(),
          target_working_hours_type: z
            .string()
            .describe(
              '新工时制度，可通过接口获取',
            )
            .optional(),
          target_working_calendar: z
            .string()
            .describe('新工作日历，请开通休假服务后联系管理员获取工作日历数据')
            .optional(),
          target_probation_end_date: z.string().describe('新试用期预计结束日期，格式："YYYY-MM-DD"').optional(),
          target_weekly_working_hours: z.string().describe('新周工作时长。取值范围1-168').optional(),
          target_work_shift: z.string().describe('新排班').optional(),
          target_cost_center_rates: z
            .array(
              z.object({
                cost_center_id: z
                  .string()
                  .describe(
                    '支持的成本中心id，详细信息可通过接口查询获得',
                  )
                  .optional(),
                rate: z.number().describe('分摊比例').optional(),
              }),
            )
            .describe('新成本中心分摊方式')
            .optional(),
          target_employment_change: z
            .object({
              regular_employee_start_date: z.string().describe('转正式员工日期，格式："YYYY-MM-DD"').optional(),
              seniority_date: z.string().describe('司龄起算日期，格式："YYYY-MM-DD"').optional(),
              employee_number: z
                .string()
                .describe(
                  '员工编号，可通过接口获取',
                )
                .optional(),
              custom_fields: z
                .array(
                  z.object({
                    custom_api_name: z
                      .string()
                      .describe(
                        '自定义字段 apiname，即自定义字段的唯一标识。可以通过获取',
                      ),
                    value: z
                      .string()
                      .describe(
                        '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同（如 123, 123.23, "true", ["id1","id2"], "2006-01-02 15:04:05"）注意：1.枚举字段值可通过获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name',
                      ),
                  }),
                )
                .describe('自定义字段')
                .optional(),
            })
            .describe('新工作信息')
            .optional(),
          target_job_grade: z
            .string()
            .describe(
              '新职等，可通过接口获取',
            )
            .optional(),
          target_compensation_type: z.string().describe('新薪资类型').optional(),
          target_service_company: z
            .string()
            .describe(
              '新任职公司，详细信息可通过接口查询获得',
            )
            .optional(),
          target_position: z.string().describe('新岗位').optional(),
          target_social_security_city: z.string().describe('新社保城市').optional(),
          is_transfer_with_workforce: z.boolean().describe('编制随人员一起调整').optional(),
        })
        .describe('异动详细信息，以下参数如不传，无默认值，代表对应数据无异动'),
      transfer_key: z.string().describe('异动记录标识符，发起失败可以重新用此标志继续请求').optional(),
      initiator_id: z.string().describe('异动发起人 ID').optional(),
      transfer_reason_unique_identifier: z.string().describe('异动原因唯一标识').optional(),
    }),
    params: z.object({
      user_id_type: z
        .enum(['open_id', 'union_id', 'user_id', 'people_admin_id', 'people_corehr_id'])
        .describe('用户ID类型')
        .optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2JobChangeRevoke = {
  project: 'corehr',
  name: 'corehr.v2.jobChange.revoke',
  sdkName: 'corehr.v2.jobChange.revoke',
  path: '/open-apis/corehr/v2/job_changes/:job_change_id/revoke',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-异动-撤销异动-该接口用于撤销员工异动，若发起成功，会撤销一条已发起、待生效或已生效的异动数据，同时产生相应的事件：。该接口无法撤销批量发起的多人异动。使用时需指定操作人，关联了流程的异动需要流程管理员和审批单管理员权限',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator_id: z
        .string()
        .describe(
          '操作人id， 获取ID。关联了流程的异动需要操作人有流程管理员和审批单管理员权限',
        ),
    }),
    params: z.object({
      user_id_type: z
        .enum(['open_id', 'union_id', 'user_id', 'people_admin_id', 'people_corehr_id'])
        .describe('用户ID类型')
        .optional(),
    }),
    path: z.object({
      job_change_id: z
        .string()
        .describe('异动id， 获取ID'),
    }),
  },
};
export const corehrV2JobChangeSearch = {
  project: 'corehr',
  name: 'corehr.v2.jobChange.search',
  sdkName: 'corehr.v2.jobChange.search',
  path: '/open-apis/corehr/v2/job_changes/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-异动-搜索员工异动信息-搜索异动信息，该接口会按照应用拥有的「员工数据」的权限范围返回数据，请确定在「开发者后台 - 权限管理 - 数据权限」中有申请「员工资源」权限范围',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '雇员 ID 列表，可通过接口获取',
        )
        .optional(),
      job_change_ids: z
        .array(z.string())
        .describe(
          '异动记录 ID 列表，可通过接口获取详细信息',
        )
        .optional(),
      statuses: z
        .array(
          z
            .enum(['Approving', 'Approved', 'Transformed', 'Rejected', 'Cancelled', 'NoNeedApproval'])
            .describe(
              'Options:Approving(Approving 审批中),Approved(Approved 审批通过),Transformed(Transformed 已异动),Rejected(Rejected 已拒绝),Cancelled(Cancelled 已撤销),NoNeedApproval(NoNeedApproval 无需审批)',
            ),
        )
        .describe('异动状态，多个状态之间为「或」的关系')
        .optional(),
      effective_date_start: z
        .string()
        .describe('异动生效日期 - 搜索范围开始，需要与搜索范围结束一同使用，格式："YYYY-MM-DD"')
        .optional(),
      effective_date_end: z.string().describe('异动生效日期 - 搜索范围结束，格式："YYYY-MM-DD"').optional(),
      updated_time_start: z
        .string()
        .describe('异动更新时间 - 搜索范围开始，需要与搜索范围结束一同使用，毫秒时间戳')
        .optional(),
      updated_time_end: z.string().describe('异动更新时间 - 搜索范围结束，毫秒时间戳').optional(),
      target_department_ids: z.array(z.string()).describe('新部门 ID 列表').optional(),
      transfer_type_unique_identifier: z
        .array(z.string())
        .describe(
          '异动类型，可通过接口获取',
        )
        .optional(),
      transfer_reason_unique_identifier: z
        .array(z.string())
        .describe(
          '异动原因，可通过接口获取详细信息',
        )
        .optional(),
      exception_statuses: z
        .array(z.enum(['pending', 'processed']).describe('Options:pending(pending 未处理),processed(processed 已处理)'))
        .describe('异常处理状态，多个状态之间为「或」的关系')
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2JobFamilyBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.jobFamily.batchGet',
  sdkName: 'corehr.v2.jobFamily.batchGet',
  path: '/open-apis/corehr/v2/job_families/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-通过序列 ID 批量获取序列信息-通过序列 ID 批量查询序列的详情信息，包括序列名称、启用状态、上级序列等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_family_ids: z
        .array(z.string())
        .describe(
          '序列ID列表。ID获取方式：- 调用等接口可以返回序列ID',
        ),
    }),
  },
};
export const corehrV2JobFamilyQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.jobFamily.queryRecentChange',
  sdkName: 'corehr.v2.jobFamily.queryRecentChange',
  path: '/open-apis/corehr/v2/job_families/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-序列-查询当前生效信息发生变更的序列-查询指定时间范围内当前生效信息发生变更的序列，即只有序列前生效版本的生效时间在查询时间范围内，才返回该序列id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"'),
    }),
  },
};
export const corehrV2JobGradeCreate = {
  project: 'corehr',
  name: 'corehr.v2.jobGrade.create',
  sdkName: 'corehr.v2.jobGrade.create',
  path: '/open-apis/corehr/v2/job_grades',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职等-创建职等-创建职等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      grade_order: z.number().describe('职等数值'),
      code: z.string().describe('编码').optional(),
      names: z
        .array(
          z.object({ lang: z.string().describe('语言编码（IETF BCP 47）'), value: z.string().describe('文本内容') }),
        )
        .describe('名称'),
      descriptions: z
        .array(
          z.object({ lang: z.string().describe('语言编码（IETF BCP 47）'), value: z.string().describe('文本内容') }),
        )
        .describe('描述')
        .optional(),
    }),
    params: z.object({ client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() }),
  },
};
export const corehrV2JobGradeDelete = {
  project: 'corehr',
  name: 'corehr.v2.jobGrade.delete',
  sdkName: 'corehr.v2.jobGrade.delete',
  path: '/open-apis/corehr/v2/job_grades/:job_grade_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职等-删除职等-删除职等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_grade_id: z
        .string()
        .describe(
          '需要删除的职等ID。ID获取方式：- 调用等接口可以返回职等ID',
        ),
    }),
  },
};
export const corehrV2JobGradePatch = {
  project: 'corehr',
  name: 'corehr.v2.jobGrade.patch',
  sdkName: 'corehr.v2.jobGrade.patch',
  path: '/open-apis/corehr/v2/job_grades/:job_grade_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职等-更新职等-更新职等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      grade_order: z.number().describe('职等数值').optional(),
      code: z.string().describe('编码').optional(),
      names: z
        .array(
          z.object({ lang: z.string().describe('语言编码（IETF BCP 47）'), value: z.string().describe('文本内容') }),
        )
        .describe('名称')
        .optional(),
      descriptions: z
        .array(
          z.object({ lang: z.string().describe('语言编码（IETF BCP 47）'), value: z.string().describe('文本内容') }),
        )
        .describe('描述')
        .optional(),
      active: z.boolean().describe('启用').optional(),
    }),
    params: z.object({ client_token: z.string().describe('根据client_token是否一致来判断是否为同一请求').optional() }),
    path: z.object({
      job_grade_id: z
        .string()
        .describe(
          '职等ID。ID获取方式：- 调用等接口可以返回职等ID',
        ),
    }),
  },
};
export const corehrV2JobGradeQuery = {
  project: 'corehr',
  name: 'corehr.v2.jobGrade.query',
  sdkName: 'corehr.v2.jobGrade.query',
  path: '/open-apis/corehr/v2/job_grades/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职等-查询职等-查询职等的详细信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      ids: z.array(z.string()).describe('职等 ID 列表，不填写则返回全部列表').optional(),
      codes: z.array(z.string()).describe('职等 code 列表，不填写则返回全部列表').optional(),
      active: z.boolean().describe('是否启用，不填写则不作为过滤条件').optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const corehrV2JobGradeQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.jobGrade.queryRecentChange',
  sdkName: 'corehr.v2.jobGrade.queryRecentChange',
  path: '/open-apis/corehr/v2/job_grades/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职等-查询当前生效信息发生变更的职等-查询指定时间范围内当前生效信息发生变更的职等，即只有职等当前生效版本的生效时间在查询时间范围内，才返回该地点id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"'),
    }),
  },
};
export const corehrV2JobLevelBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.jobLevel.batchGet',
  sdkName: 'corehr.v2.jobLevel.batchGet',
  path: '/open-apis/corehr/v2/job_levels/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-通过职级 ID 批量获取职级信息-该接口支持通过职级id批量查询职级详情信息，包括职级包含的名称、描述、启用状态等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ job_level_ids: z.array(z.string()).describe('职级 ID 列表') }),
  },
};
export const corehrV2JobLevelQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.jobLevel.queryRecentChange',
  sdkName: 'corehr.v2.jobLevel.queryRecentChange',
  path: '/open-apis/corehr/v2/job_levels/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职级-查询当前生效信息发生变更的职级-查询指定时间范围内当前生效信息发生变更的职级，即只有地点当前生效版本的生效时间在查询时间范围内，才返回该职级id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"'),
    }),
  },
};
export const corehrV2JobGet = {
  project: 'corehr',
  name: 'corehr.v2.job.get',
  sdkName: 'corehr.v2.job.get',
  path: '/open-apis/corehr/v2/jobs/:job_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-查询单个职务-根据 ID 查询单个职务',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职务ID。ID获取方式：- 调用等可以返回职务ID- 也可以通过  获取ID',
        ),
    }),
  },
};
export const corehrV2JobList = {
  project: 'corehr',
  name: 'corehr.v2.job.list',
  sdkName: 'corehr.v2.job.list',
  path: '/open-apis/corehr/v2/jobs',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-批量查询职务-可以通过该接口查询租户下全部职务ID列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.string().describe('每页获取记录数量，最大100'),
      name: z.string().describe('职务名称').optional(),
      query_language: z.string().describe('语言信息，中文用zh-CN，英文用en-US- 传空默认都返回').optional(),
    }),
  },
};
export const corehrV2JobQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.job.queryRecentChange',
  sdkName: 'corehr.v2.job.queryRecentChange',
  path: '/open-apis/corehr/v2/jobs/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-岗职务管理-职务-查询当前生效信息发生变更的职务-查询指定时间范围内当前生效信息发生变更的职务，即只有职务当前生效版本的生效时间在查询时间范围内，才返回该职务id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"。- 限定查询范围在90天以内'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"。- 限定查询范围在90天以内'),
    }),
  },
};
export const corehrV2LocationActive = {
  project: 'corehr',
  name: 'corehr.v2.location.active',
  sdkName: 'corehr.v2.location.active',
  path: '/open-apis/corehr/v2/locations/active',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-启用/停用地点-启用/停用地点',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      location_id: z
        .string()
        .describe(
          '地点 ID。ID 获取方式：- 调用等接口可以返回地点ID',
        ),
      effective_time: z
        .string()
        .describe(
          '地点启用/停用生效日期- 填写格式：YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31- 详情可以参考',
        ),
      active: z.boolean().describe('地点启用/停用状态- true 为启用- false 为停用'),
      operation_reason: z.string().describe('操作原因'),
    }),
  },
};
export const corehrV2LocationAddressCreate = {
  project: 'corehr',
  name: 'corehr.v2.locationAddress.create',
  sdkName: 'corehr.v2.locationAddress.create',
  path: '/open-apis/corehr/v2/locations/:location_id/addresses',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-组织管理-地点-地点地址-添加地点地址-添加地点地址',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      country_region_id: z
        .string()
        .describe(
          '国家 / 地区 ID- 可通过接口获取',
        ),
      region_id: z
        .string()
        .describe(
          '主要行政区 ID- 可通过接口获取',
        ),
      city_id: z
        .string()
        .describe(
          '城市ID。- 详情调用获取',
        ),
      distinct_id: z
        .string()
        .describe(
          '区/县ID- 详情可通过接口获取',
        ),
      local_address_line1: z
        .string()
        .describe(
          '地址行 1（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line2: z
        .string()
        .describe(
          '地址行 2（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line3: z
        .string()
        .describe(
          '地址行 3（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line4: z
        .string()
        .describe(
          '地址行 4（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line5: z
        .string()
        .describe(
          '地址行 5（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line6: z
        .string()
        .describe(
          '地址行 6（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line7: z
        .string()
        .describe(
          '地址行 7（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line8: z
        .string()
        .describe(
          '地址行 8（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line9: z
        .string()
        .describe(
          '地址行 9（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      postal_code: z.string().describe('邮政编码').optional(),
      address_types: z
        .array(z.object({ enum_name: z.string().describe('枚举值') }))
        .describe(
          '地址类型，枚举值及详细信息可通过查询获得',
        )
        .optional(),
      is_primary: z
        .boolean()
        .describe(
          '是否主要地址，一个地点只能存在一个主要地址，添加主要地址会将取消原主要地址- true 表示地址是主要地址- false 表示地址不是主要地址',
        )
        .optional(),
      is_public: z.boolean().describe('是否公开地址- true 表示地址是公开地址- false 表示地址不是公开地址').optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
    }),
    path: z.object({
      location_id: z
        .string()
        .describe(
          '地点 ID。ID 获取方式：- 调用等接口可以返回地点 ID',
        ),
    }),
  },
};
export const corehrV2LocationAddressDelete = {
  project: 'corehr',
  name: 'corehr.v2.locationAddress.delete',
  sdkName: 'corehr.v2.locationAddress.delete',
  path: '/open-apis/corehr/v2/locations/:location_id/addresses/:address_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-组织管理-地点-地点地址-删除地点地址-删除地点地址',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      location_id: z
        .string()
        .describe(
          '地点 ID。ID 获取方式：- 调用等接口可以返回地点 ID',
        ),
      address_id: z
        .string()
        .describe(
          '地址 ID。ID 获取方式：- 调用等接口可以返回地址 ID',
        ),
    }),
  },
};
export const corehrV2LocationAddressPatch = {
  project: 'corehr',
  name: 'corehr.v2.locationAddress.patch',
  sdkName: 'corehr.v2.locationAddress.patch',
  path: '/open-apis/corehr/v2/locations/:location_id/addresses/:address_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-组织管理-地点-地点地址-更新地点地址-更新地点地址',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      country_region_id: z
        .string()
        .describe(
          '国家 / 地区 ID- 可通过接口获取',
        )
        .optional(),
      region_id: z
        .string()
        .describe(
          '主要行政区 ID- 可通过接口获取',
        )
        .optional(),
      city_id: z
        .string()
        .describe(
          '城市ID。- 详情调用获取',
        )
        .optional(),
      distinct_id: z
        .string()
        .describe(
          '区/县ID- 详情可通过接口获取',
        )
        .optional(),
      local_address_line1: z
        .string()
        .describe(
          '地址行 1（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line2: z
        .string()
        .describe(
          '地址行 2（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line3: z
        .string()
        .describe(
          '地址行 3（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line4: z
        .string()
        .describe(
          '地址行 4（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line5: z
        .string()
        .describe(
          '地址行 5（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line6: z
        .string()
        .describe(
          '地址行 6（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line7: z
        .string()
        .describe(
          '地址行 7（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line8: z
        .string()
        .describe(
          '地址行 8（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      local_address_line9: z
        .string()
        .describe(
          '地址行 9（非拉丁语系的本地文字）- 填写规则可见',
        )
        .optional(),
      postal_code: z.string().describe('邮政编码').optional(),
      address_types: z
        .array(z.object({ enum_name: z.string().describe('枚举值') }))
        .describe(
          '地址类型，枚举值及详细信息可通过查询获得',
        )
        .optional(),
      is_primary: z
        .boolean()
        .describe(
          '是否主要地址，一个地点只能存在一个主要地址，更新地址为主要地址会取消原主要地址，无法更新主要地址为非主要地址- true 表示地址是主要地址- false 表示地址不是主要地址',
        )
        .optional(),
      is_public: z.boolean().describe('是否公开地址- true 表示地址是公开地址- false 表示地址不是公开地址').optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
    }),
    path: z.object({
      location_id: z
        .string()
        .describe(
          '地点 ID。ID 获取方式：- 调用等接口可以返回地点 ID',
        ),
      address_id: z
        .string()
        .describe(
          '地址 ID。ID 获取方式：- 调用等接口可以返回地址 ID',
        ),
    }),
  },
};
export const corehrV2LocationBatchGet = {
  project: 'corehr',
  name: 'corehr.v2.location.batchGet',
  sdkName: 'corehr.v2.location.batchGet',
  path: '/open-apis/corehr/v2/locations/batch_get',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-通过地点 ID 批量获取地点信息-该接口用于根据地点 ID批量查询地点信息，信息包含地点名称、描述、地点用途、工时制度、区域设置、时区以及关联的地址信息等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      location_ids: z
        .array(z.string())
        .describe(
          '地点 ID 列表， 地点维护管理员在 飞书人事系统，组织管理模块维护的地点记录 ID。ID获取方式：- 调用等接口可以返回地点ID',
        ),
    }),
  },
};
export const corehrV2LocationPatch = {
  project: 'corehr',
  name: 'corehr.v2.location.patch',
  sdkName: 'corehr.v2.location.patch',
  path: '/open-apis/corehr/v2/locations/:location_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-更新地点-更新地点',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      parent_id: z
        .string()
        .describe(
          '上级地点，在创建场景下，该字段必填，枚举值及详细信息可通过查询获得',
        )
        .optional(),
      names: z
        .array(
          z.object({
            lang: z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
            value: z.string().describe('名称内容'),
          }),
        )
        .describe('地点名称- 名称不能包含「/」「；」「;」字符- 地点中英文名称会有全局唯一校验')
        .optional(),
      active: z.boolean().describe('地点启用/停用状态- true 为启用- false 为停用').optional(),
      effective_time: z
        .string()
        .describe(
          '版本生效日期- 填写格式：YYYY-MM-DD- 系统默认为填写日期当天的 00:00:00 生效 - 该接口只支持到最小单位为日- 日期范围要求:1900-01-01～9999-12-31- 详情可以参考',
        ),
      code: z.string().describe('地点编码 (不能与其他记录的编码重复)，当开启自动编码时，该字段会失效').optional(),
      descriptions: z
        .array(
          z.object({
            lang: z.string().describe('语言信息，中文用zh-CN，英文用en-US'),
            value: z.string().describe('描述内容'),
          }),
        )
        .describe('地点描述')
        .optional(),
      location_usages: z
        .array(z.object({ enum_name: z.string().describe('枚举值') }))
        .describe(
          '地点用途 ID，枚举值及详细信息可通过接口查询获得。- 请求参数object_api_name=location；custom_api_name=location_usage',
        )
        .optional(),
      working_hours_type_id: z
        .string()
        .describe(
          '工时制度 ID，枚举值及详细信息可通过接口查询获得',
        )
        .optional(),
      locale: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '区域设置 ID ，枚举值及详细信息可通过接口查询获得。- 请求参数object_api_name=location；custom_api_name=locale',
        )
        .optional(),
      time_zone_id: z.string().describe('时区 ID').optional(),
      display_language_id: z.string().describe('默认显示语言 ID').optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
    }),
    path: z.object({
      location_id: z
        .string()
        .describe(
          '地点ID。ID获取方式：- 调用等接口可以返回地点ID',
        ),
    }),
  },
};
export const corehrV2LocationQueryRecentChange = {
  project: 'corehr',
  name: 'corehr.v2.location.queryRecentChange',
  sdkName: 'corehr.v2.location.queryRecentChange',
  path: '/open-apis/corehr/v2/locations/query_recent_change',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-组织管理-地点-查询当前生效信息发生变更的地点-查询指定时间范围内当前生效信息发生变更的地点，即只有地点当前生效版本的生效时间在查询时间范围内，才返回该地点id',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，最大 2000'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      start_date: z.string().describe('查询的开始时间，支持"yyyy-MM-dd HH:MM:SS"'),
      end_date: z.string().describe('查询的结束时间，格式 "yyyy-MM-dd HH:MM:SS"'),
    }),
  },
};
export const corehrV2OffboardingEdit = {
  project: 'corehr',
  name: 'corehr.v2.offboarding.edit',
  sdkName: 'corehr.v2.offboarding.edit',
  path: '/open-apis/corehr/v2/offboardings/edit',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-离职-编辑离职信息-该接口用于编辑飞书人事的，支持的字段包括离职日期、离职原因、离职申请发起时间和离职申请审批通过时间等等，同时也支持编辑离职的自定义字段（附件字段除外）。当接口成功提交后，会产生对应的事件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      offboarding_id: z
        .string()
        .describe(
          '离职记录ID，不允许为空。可以通过获取，取值于接口返回的data > items > offboarding_id',
        ),
      operator_id: z
        .string()
        .describe(
          '操作人雇佣 ID（employment_id），ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考。2、当user_id_type取值为user_id时，ID获取方式参考。3、当user_id_type取值为union_id时，ID获取方式参考。4、当user_id_type取值为people_corehr_id时，先参考获取User ID。然后通过获取雇佣ID。注意：为空时，默认系统操作人',
        )
        .optional(),
      update_data: z
        .array(
          z.object({
            field_name: z
              .string()
              .describe(
                '字段唯一标识（api_name）注意：1.该字段取值于 > 信息配置 > 离职信息 中各字段的字段编码2.自定义字段也可以通过获取3.不可编辑的字段api_name范围：-wk_id-wk_tenant_id-employment-process_id-flow_id-node_id-initiator_id-status-checklist_status-checklist_process_id-type,hrbp_ids-hrbp_list-probation_id-wk_created_at-wk_created_by-wk_updated_at-wk_updated_by-wk_deleted_at-wk_is_deleted-noncompete_agreement_id-social_insurance_end_date-provident_fund_end_date-sign_type',
              ),
            value: z
              .string()
              .describe(
                '字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同，例如：-文本类型（1）:"文本"-布尔类型（2）:"true"-数字类型（3）:"123"-单值枚举类型（4）:"option_1"-多值枚举类型（4）："[\\"option_1\\",\\"option_2\\"]"-日期类型（7）:"2024-06-30"注意：1.枚举字段的枚举值取值于 > 信息配置 > 离职信息 对应字段选项集的选项编码。2.枚举字段值也可通过获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name3.人员字段目前只支持传入员工的雇佣ID。先参考获取User ID。然后通过获取雇佣ID。4.暂不支持填写附件类型字段',
              ),
          }),
        )
        .describe('编辑字段数据信息，不允许为空'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2OffboardingRevoke = {
  project: 'corehr',
  name: 'corehr.v2.offboarding.revoke',
  sdkName: 'corehr.v2.offboarding.revoke',
  path: '/open-apis/corehr/v2/offboardings/revoke',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-离职-撤销离职-通过离职ID撤销飞书人事的。当接口成功提交后，会产生对应的事件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      offboarding_id: z
        .string()
        .describe(
          '离职记录ID，不允许为空。可以通过获取，取值于接口返回的data > items > offboarding_id',
        ),
      operator_id: z
        .string()
        .describe(
          '操作人雇佣 ID（employment_id），ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考。2、当user_id_type取值为user_id时，ID获取方式参考。3、当user_id_type取值为union_id时，ID获取方式参考。4、当user_id_type取值为people_corehr_id时，先参考获取User ID。然后通过获取雇佣ID。注意：为空时，默认系统操作人',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2OffboardingSubmitV2 = {
  project: 'corehr',
  name: 'corehr.v2.offboarding.submitV2',
  sdkName: 'corehr.v2.offboarding.submitV2',
  path: '/open-apis/corehr/v2/offboardings/submit_v2',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-离职-操作员工离职-该接口用于发起飞书人事的，支持填写离职日期、离职原因、屏蔽名单和自定义字段（附件字段除外）等。当接口成功提交后，会产生对应的事件',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      offboarding_mode: z
        .number()
        .describe('离职方式 Options:1(Termination_of_dismissal 直接离职),2(Offboarding_with_process 发起离职审批)'),
      employment_id: z
        .string()
        .describe(
          '离职员工 ID（employment_id）不允许为空。ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考。2、当user_id_type取值为user_id时，ID获取方式参考。3、当user_id_type取值为union_id时，ID获取方式参考。4、当user_id_type取值为people_corehr_id时，先参考获取User ID。然后通过获取雇佣ID',
        ),
      offboarding_date: z
        .string()
        .describe(
          '离职日期，不允许为空，填写时需要符合YYYY-MM-DD的日期格式。注意：按员工离职当天的工作地点时区24点生效。假设员工离职日期为2024-12-01，如果员工在中国大陆，则生效时间为东八区的2024-12-01 23:59:59。如果员工在华盛顿，则生效时间为东八区的2024-12-02 12:59:59，对应西五区的2024-12-01 23:59:59',
        ),
      offboarding_reason_unique_identifier: z
        .string()
        .describe(
          '离职原因，不允许为空，可通过接口获取',
        ),
      offboarding_reason_explanation: z.string().describe('离职原因说明，选填，最大长度6000').optional(),
      initiator_id: z
        .string()
        .describe(
          '发起人 ID。这个发起人需要有飞书账号，能够登录系统。ID类型与查询参数 user_id_type取值一致：1、当user_id_type取值为open_id时，ID获取方式参考。2、当user_id_type取值为user_id时，ID获取方式参考。3、当user_id_type取值为union_id时，ID获取方式参考。4、当user_id_type取值为people_corehr_id时，先参考获取User ID。然后通过获取雇佣ID。注意：1.只有发起人可以撤销流程2.为空时，默认系统发起人',
        )
        .optional(),
      add_block_list: z
        .boolean()
        .describe(
          '是否加入离职屏蔽名单注意：1.取值为true时，屏蔽原因（block_reason）为必填。2.取值为false时，不允许填写屏蔽原因（block_reason）和屏蔽原因说明（block_reason_explanation）。3.取值为空时，不允许填写屏蔽原因（block_reason）和屏蔽原因说明（block_reason_explanation）。4.操作离职时如果选择加入屏蔽名单，只有当员工离职生效后才会进入到屏蔽名单',
        )
        .optional(),
      block_reason: z
        .string()
        .describe(
          '屏蔽原因注意：1.该字段取值于  > 信息配置 > 离职信息 的屏蔽原因字段选项集。2.枚举字段值也可通过获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name3.该字段是否必填取决于是否加入离职屏蔽名单(add_block_list)',
        )
        .optional(),
      block_reason_explanation: z.string().describe('屏蔽原因说明，选填，最大长度6000').optional(),
      custom_fields: z
        .array(
          z.object({
            field_name: z
              .string()
              .describe(
                '字段唯一标识注意：1.该字段取值于 > 信息配置 > 离职信息 中各字段的字段编码2.该字段也可以通过获取',
              ),
            value: z
              .string()
              .describe(
                '自定义字段值，根据元数据定义不同，字段格式不同(如123, 123.23, "true", [\\"id1\\",\\"id2\\"], "2006-01-02 15:04:05")。注意：1.枚举字段的枚举值取值于 > 信息配置 > 离职信息 对应字段选项集的选项编码。2.枚举字段值也可通过获取，参考接口返回的 字段详情 > 字段类型配置信息 > 选项配置信息 > 选项信息 > 枚举常量集 API name3.人员字段目前只支持传入员工的雇佣ID。员工的人事雇佣ID需要先获取User ID后，通过获取4.暂不支持填写附件类型字段',
              ),
          }),
        )
        .describe(
          '离职自定义字段。注意：可填写的字段范围参考 > 信息配置 > 离职信息 中的自定义字段',
        )
        .optional(),
      retain_account: z.boolean().describe('离职是否保留飞书账号').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2PersonCreate = {
  project: 'corehr',
  name: 'corehr.v2.person.create',
  sdkName: 'corehr.v2.person.create',
  path: '/open-apis/corehr/v2/persons',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-员工信息-个人信息-创建个人信息-创建员工的个人信息，包括姓名、个人电话、邮箱、联系地址、政治面貌、户口信息等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name_list: z
        .array(
          z.object({
            local_primary: z.string().describe('姓 - 本地文字').optional(),
            local_first_name: z.string().describe('名 - 本地文字').optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              ),
            name_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '姓名类型- 可通过接口查询，查询参数如下： - object_api_name：person_name - custom_api_name：name_type',
              ),
            local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
            local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
            additional_name_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '补充姓名类型，可通过获取，查询参数：- custom_api_name：additional_name_type- object_api_name：person_name',
              )
              .optional(),
            first_name: z.string().describe('名').optional(),
            full_name: z.string().describe('全名').optional(),
            hereditary: z.string().describe('姓氏称谓').optional(),
            custom_name: z
              .string()
              .describe('自定义姓名（未传入时，姓名将默认根据所属国家 / 地区规则对相关姓、名字段拼接）')
              .optional(),
            custom_local_name: z
              .string()
              .describe(
                '本地文字的自定义姓名（未传入时，本地文字的姓名将默认根据所属国家 / 地区规则对本地文字的相关姓、名字段拼接）',
              )
              .optional(),
            middle_name: z.string().describe('中间名').optional(),
            name_primary: z.string().describe('姓').optional(),
            secondary: z.string().describe('第二姓氏').optional(),
            social: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '尊称，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
              )
              .optional(),
            tertiary: z.string().describe('婚后姓氏').optional(),
            title: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '头衔，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
              )
              .optional(),
            local_middle_name: z.string().describe('本地中间名').optional(),
            local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
          }),
        )
        .describe(
          '姓名列表，当用于 的离职重聘时，该字段必填 <b>字段权限要求：</b> 读写法定姓名信息(corehr:person.legal_name:write)',
        )
        .optional(),
      gender: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '性别，枚举值可通过接口查询，查询参数如下：- object_api_name = "person"- custom_api_name = "gender"<b>字段权限要求：</b> 读写性别信息(corehr:person.gender:write)',
        )
        .optional(),
      date_of_birth: z
        .string()
        .describe('出生日期<b>字段权限要求：</b> 读写生日信息(corehr:person.date_of_birth:write)')
        .optional(),
      race: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '民族 / 种族，枚举值 api_name 可通过接口查询，查询参数如下：- object_api_name = "person"- custom_api_name = "ethnicity_race"',
        )
        .optional(),
      marital_status: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '婚姻状况，枚举值 api_name 可通过接口查询，查询参数如下：- object_api_name = "person"- custom_api_name = "marital_status"<b>字段权限要求：</b> 读写婚姻状况信息(corehr:person.marital_status:write)',
        )
        .optional(),
      phone_list: z
        .array(
          z.object({
            international_area_code: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
              )
              .optional(),
            phone_number: z.string().describe('电话号码'),
          }),
        )
        .describe('电话列表')
        .optional(),
      address_list: z
        .array(
          z.object({
            address_id: z.string().describe('地址 ID，首次创建可不填').optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              ),
            region_id: z
              .string()
              .describe(
                '主要行政区，可通过获取',
              )
              .optional(),
            address_line1: z.string().describe('地址行 1').optional(),
            address_line2: z.string().describe('地址行 2').optional(),
            address_line3: z.string().describe('地址行 3').optional(),
            address_line4: z.string().describe('地址行 4').optional(),
            address_line5: z.string().describe('地址行 5').optional(),
            address_line6: z.string().describe('地址行 6').optional(),
            address_line7: z.string().describe('地址行 7').optional(),
            address_line8: z.string().describe('地址行 8').optional(),
            address_line9: z.string().describe('地址行 9').optional(),
            local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
            local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
            local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
            local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
            local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
            local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
            local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
            local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
            local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
            postal_code: z.string().describe('邮政编码').optional(),
            address_type_list: z
              .array(z.object({ enum_name: z.string().describe('枚举值') }))
              .describe(
                '地址类型- 可通过接口查询，查询参数如下： - object_api_name：address - custom_api_name：address_type- 默认：home_address',
              ),
            is_primary: z.boolean().describe('主要地址，默认 false'),
            is_public: z.boolean().describe('公开地址，默认 true'),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('地址列表<b>字段权限要求：</b> 读取个人地址信息(corehr:person.address:write)')
        .optional(),
      email_list: z
        .array(
          z.object({
            email: z.string().describe('邮箱地址'),
            is_primary: z.boolean().describe('是否为主要邮箱，默认 true').optional(),
            is_public: z.boolean().describe('是否为公开邮箱，默认 true').optional(),
            email_usage: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '邮箱用途- 可通过接口查询，查询参数如下： - object_api_name: email - custom_api_name: email_usage- 请勿填写 work 枚举，工作邮箱在雇佣信息中操作- 默认：emergency_contact',
              )
              .optional(),
          }),
        )
        .describe('邮箱列表<b>字段权限要求：</b>读写个人邮箱信息(corehr:person.email:write)')
        .optional(),
      work_experience_list: z
        .array(
          z.object({
            company_organization: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('公司 / 组织')
              .optional(),
            department: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('部门')
              .optional(),
            job: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('岗位')
              .optional(),
            description: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('工作描述')
              .optional(),
            start_date: z.string().describe('开始日期').optional(),
            end_date: z.string().describe('结束日期').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('工作经历列表<b>字段权限要求：</b>读写工作履历信息(corehr:person.work_experience:write)')
        .optional(),
      education_list: z
        .array(
          z.object({
            school: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('学校- 如果学校有对应枚举，请使用 school_name 字段'),
            level_of_education: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学历- 可通过接口查询，查询参数如下： - object_api_name：education - custom_api_name：level_of_education',
              )
              .optional(),
            start_date: z.string().describe('开始日期').optional(),
            end_date: z.string().describe('结束日期').optional(),
            field_of_study: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('专业名称- 如果专业有对应枚举，请使用 field_of_study_name 字段')
              .optional(),
            degree: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学位- 可通过接口查询，查询参数如下： - object_api_name：education - custom_api_name：degree',
              )
              .optional(),
            school_name: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学校名称- 可通过获取，查询参数： - custom_api_name：school_name - object_api_name：education- 如果学校有对应枚举，请使用该字段，否则可使用 school 直接写入文本',
              )
              .optional(),
            field_of_study_name: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '专业名称- 可通过获取，查询参数： - custom_api_name：field_of_study_name - object_api_name：education- 如果专业有对应枚举，请使用该字段，否则可使用 field_of_study 直接写入文本',
              )
              .optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区ID，可通过获取',
              )
              .optional(),
            expected_end_date: z.string().describe('预期结束日期').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('教育经历列表<b>字段权限要求：</b>读写教育经历信息(corehr:person.education:write)')
        .optional(),
      bank_account_list: z
        .array(
          z.object({
            bank_name: z.string().describe('银行名称- 如果有对应银行ID，请使用 bank_id_v2').optional(),
            bank_account_number: z.string().describe('银行账号'),
            account_holder: z.string().describe('开户人姓名'),
            branch_name: z.string().describe('支行名称- 如果有对应支行 ID，请使用 branch_id_v2').optional(),
            bank_id_v2: z
              .string()
              .describe(
                '银行 ID，可通过接口查询获得',
              )
              .optional(),
            branch_id_v2: z
              .string()
              .describe(
                '支行 ID，要求必须为填入银行的支行，可通过接口查询获得',
              )
              .optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区ID，可通过获取',
              )
              .optional(),
            bank_account_usage: z
              .array(z.object({ enum_name: z.string().describe('枚举值') }))
              .describe(
                '银行卡类型- 可通过接口查询，查询参数如下： - object_api_name: bank_account - custom_api_name: bank_account_type',
              )
              .optional(),
            bank_account_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '银行卡类型- 可通过接口查询，查询参数如下： - object_api_name: bank_account - custom_api_name: bank_account_type',
              )
              .optional(),
            currency_id: z
              .string()
              .describe(
                '货币 ID- 详细信息可通过接口查询获得',
              )
              .optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('银行账户<b>字段权限要求：</b>读写银行账号列表信息(corehr:person.bank_account:write)')
        .optional(),
      national_id_list: z
        .array(
          z.object({
            national_id_type_id: z
              .string()
              .describe(
                '国家证件类型，可通过获得',
              ),
            national_id_number: z.string().describe('证件号码'),
            issue_date: z.string().describe('证件签发日期').optional(),
            expiration_date: z.string().describe('证件到期日期').optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区ID，可通过获取',
              ),
            issued_by: z.string().describe('证件签发机构').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('证件列表<b>字段权限要求：</b>读写证件信息(corehr:person.national_id:write)')
        .optional(),
      dependent_list: z
        .array(
          z.object({
            relationship: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '亲属关系- 可通过接口查询，查询参数如下： - object_api_name：dependent - custom_api_name：relationship_with_dependent',
              ),
            gender: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '性别，枚举值可通过接口查询，查询参数如下：- object_api_name = "person"- custom_api_name = "gender"',
              )
              .optional(),
            date_of_birth: z.string().describe('生日').optional(),
            nationality_id_v2: z
              .string()
              .describe(
                '国籍 ID，可通过接口查询',
              )
              .optional(),
            national_id_list: z
              .array(
                z.object({
                  national_id_type_id: z
                    .string()
                    .describe(
                      '国家证件类型，可通过获得',
                    ),
                  national_id_number: z.string().describe('证件号码'),
                  issue_date: z.string().describe('证件签发日期').optional(),
                  expiration_date: z.string().describe('证件到期日期').optional(),
                  country_region_id: z
                    .string()
                    .describe(
                      '国家/地区ID，可通过获取',
                    ),
                  issued_by: z.string().describe('证件签发机构').optional(),
                  custom_fields: z
                    .array(
                      z.object({
                        custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                        value: z
                          .string()
                          .describe(
                            '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                          ),
                      }),
                    )
                    .describe(
                      '自定义字段- 请参考',
                    )
                    .optional(),
                }),
              )
              .describe('证件号码')
              .optional(),
            spouses_working_status: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '配偶工作状态，可通过获取，查询参数：- custom_api_name：spouses_working_status- object_api_name：dependent',
              )
              .optional(),
            is_this_person_covered_by_health_insurance: z.boolean().describe('包含家属医疗保险').optional(),
            is_this_person_allowed_for_tax_deduction: z.boolean().describe('允许家属抵扣税款').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
            dependent_name: z.string().describe('家庭成员姓名').optional(),
            employer: z.string().describe('工作单位').optional(),
            job: z.string().describe('岗位').optional(),
            phone: z
              .object({
                international_area_code: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
                  )
                  .optional(),
                phone_number: z.string().describe('电话号码'),
              })
              .describe('电话')
              .optional(),
            address: z
              .object({
                address_id: z
                  .string()
                  .describe(
                    '地址 ID，在、时可获得',
                  )
                  .optional(),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区，可通过获取',
                  ),
                region_id: z
                  .string()
                  .describe(
                    '主要行政区，可通过获取',
                  )
                  .optional(),
                address_line1: z.string().describe('地址行 1').optional(),
                address_line2: z.string().describe('地址行 2').optional(),
                address_line3: z.string().describe('地址行 3').optional(),
                address_line4: z.string().describe('地址行 4').optional(),
                address_line5: z.string().describe('地址行 5').optional(),
                address_line6: z.string().describe('地址行 6').optional(),
                address_line7: z.string().describe('地址行 7').optional(),
                address_line8: z.string().describe('地址行 8').optional(),
                address_line9: z.string().describe('地址行 9').optional(),
                local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: z.string().describe('邮政编码').optional(),
                custom_fields: z
                  .array(
                    z.object({
                      custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                      value: z
                        .string()
                        .describe(
                          '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        ),
                    }),
                  )
                  .describe(
                    '自定义字段- 请参考',
                  )
                  .optional(),
              })
              .describe('联系地址')
              .optional(),
            birth_certificate_of_child: z
              .array(
                z.object({
                  id: z
                    .string()
                    .describe(
                      '上传文件ID，可通过获取',
                    )
                    .optional(),
                }),
              )
              .describe('出生证明')
              .optional(),
          }),
        )
        .describe('家庭成员列表<b>字段权限要求：</b>读写家庭成员信息(corehr:person.dependent:write)')
        .optional(),
      emergency_contact_list: z
        .array(
          z.object({
            name: z
              .object({
                local_primary: z.string().describe('姓 - 本地文字').optional(),
                local_first_name: z.string().describe('名 - 本地文字').optional(),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区，可通过获取',
                  ),
                name_type: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '姓名类型- 可通过接口查询，查询参数如下： - object_api_name：person_name - custom_api_name：name_type',
                  ),
                local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
                local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
                additional_name_type: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '补充姓名类型，可通过获取，查询参数：- custom_api_name：additional_name_type- object_api_name：person_name',
                  )
                  .optional(),
                first_name: z.string().describe('名').optional(),
                full_name: z.string().describe('全名').optional(),
                hereditary: z.string().describe('姓氏称谓').optional(),
                custom_name: z
                  .string()
                  .describe('自定义姓名（未传入时，姓名将默认根据所属国家 / 地区规则对相关姓、名字段拼接）')
                  .optional(),
                custom_local_name: z
                  .string()
                  .describe(
                    '本地文字的自定义姓名（未传入时，本地文字的姓名将默认根据所属国家 / 地区规则对本地文字的相关姓、名字段拼接）',
                  )
                  .optional(),
                middle_name: z.string().describe('中间名').optional(),
                name_primary: z.string().describe('姓').optional(),
                secondary: z.string().describe('第二姓氏').optional(),
                social: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '尊称，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
                  )
                  .optional(),
                tertiary: z.string().describe('婚后姓氏').optional(),
                title: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '头衔，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
                  )
                  .optional(),
                local_middle_name: z.string().describe('本地中间名').optional(),
                local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
              })
              .describe('姓名- 该字段已废弃，请使用 legal_name')
              .optional(),
            relationship: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '关系- 可通过接口查询，查询参数如下： - object_api_name：dependent - custom_api_name：relationship_with_dependent',
              )
              .optional(),
            phone_ist: z
              .array(
                z.object({
                  international_area_code: z
                    .object({ enum_name: z.string().describe('枚举值') })
                    .describe(
                      '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
                    )
                    .optional(),
                  phone_number: z.string().describe('电话号码'),
                }),
              )
              .describe('电话')
              .optional(),
            legal_name: z.string().describe('法定姓名').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('紧急联系人列表<b>字段权限要求：</b>读写紧急联系人信息(corehr:person.emergency_contact:write)')
        .optional(),
      date_entered_workforce: z
        .string()
        .describe('参加工作日期<b>字段权限要求：</b>读写参加工作日期(corehr:person.date_entered_workforce:write)')
        .optional(),
      profile_image_id: z.string().describe('头像资源的 ID- 该字段已废弃').optional(),
      personal_profile: z
        .array(
          z.object({
            personal_profile_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '资料类型- 可通过获取，查询参数： - custom_api_name：profile_type - object_api_name：personal_profile- 仅 【飞书人事-档案配置-资料附件】存在的字段编码可用',
              )
              .optional(),
            files: z
              .array(z.object({ id: z.string().describe('上传文件ID').optional() }))
              .describe('上传文件列表')
              .optional(),
          }),
        )
        .describe('个人资料附件<b>字段权限要求：</b>读写个人资料信息(corehr:person.personal_profile:write)')
        .optional(),
      native_region: z
        .string()
        .describe(
          '籍贯 ID，可通过接口查询<b>字段权限要求：</b>读写籍贯信息(corehr:person.native_region:write)',
        )
        .optional(),
      hukou_type: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '户口类型- 可通过接口查询，查询参数如下： - object_api_name: person_info_chn - custom_api_name: hukou_type<b>字段权限要求：</b>读写户口信息(corehr:person.hukou:write)',
        )
        .optional(),
      hukou_location: z
        .string()
        .describe('户口所在地<b>字段权限要求：</b>读写户口信息(corehr:person.hukou:write)')
        .optional(),
      political_affiliations: z
        .array(z.object({ enum_name: z.string().describe('枚举值') }))
        .describe(
          '政治面貌- 可通过接口查询，查询参数如下： - object_api_name：person_info_chn - custom_api_name：political_affiliation',
        )
        .optional(),
      talent_id: z
        .string()
        .describe(
          '人才ID，可通过获取',
        )
        .optional(),
      custom_fields: z
        .array(
          z.object({
            custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
            value: z
              .string()
              .describe(
                '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
              ),
          }),
        )
        .describe(
          '自定义字段- 请参考',
        )
        .optional(),
      born_country_region: z.string().describe('出生国家/地区').optional(),
      is_disabled: z.boolean().describe('是否残疾').optional(),
      disable_card_number: z.string().describe('残疾证号').optional(),
      is_martyr_family: z.boolean().describe('是否烈属').optional(),
      martyr_card_number: z.string().describe('烈属证号').optional(),
      is_old_alone: z.boolean().describe('是否孤老').optional(),
      resident_taxes: z
        .array(
          z.object({
            year_resident_tax: z.string().describe('年度'),
            resident_status: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '居民身份，枚举值可通过接口查询，查询参数如下： - object_api_name = "resident_tax" - custom_api_name = "resident_status"',
              )
              .optional(),
            tax_country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过接口查询',
              )
              .optional(),
            custom_fields: z
              .array(
                z.object({
                  field_name: z.string().describe('字段名'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('居民身份信息')
        .optional(),
      first_entry_time: z.string().describe('首次入境日期').optional(),
      leave_time: z.string().describe('预计离境日期').optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
    }),
  },
};
export const corehrV2PersonPatch = {
  project: 'corehr',
  name: 'corehr.v2.person.patch',
  sdkName: 'corehr.v2.person.patch',
  path: '/open-apis/corehr/v2/persons/:person_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-员工信息-个人信息-更新个人信息-更新员工的个人信息，包括姓名、个人电话、邮箱、联系地址、政治面貌、户口信息等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name_list: z
        .array(
          z.object({
            local_primary: z.string().describe('姓 - 本地文字').optional(),
            local_first_name: z.string().describe('名 - 本地文字').optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              ),
            name_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '姓名类型- 可通过接口查询，查询参数如下： - object_api_name：person_name - custom_api_name：name_type',
              ),
            local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
            local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
            additional_name_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '补充姓名类型，可通过获取，查询参数：- custom_api_name：additional_name_type- object_api_name：person_name',
              )
              .optional(),
            first_name: z.string().describe('名').optional(),
            full_name: z.string().describe('全名').optional(),
            hereditary: z.string().describe('姓氏称谓').optional(),
            custom_name: z
              .string()
              .describe('自定义姓名（未传入时，姓名将默认根据所属国家 / 地区规则对相关姓、名字段拼接）')
              .optional(),
            custom_local_name: z
              .string()
              .describe(
                '本地文字的自定义姓名（未传入时，本地文字的姓名将默认根据所属国家 / 地区规则对本地文字的相关姓、名字段拼接）',
              )
              .optional(),
            middle_name: z.string().describe('中间名').optional(),
            name_primary: z.string().describe('姓').optional(),
            secondary: z.string().describe('第二姓氏').optional(),
            social: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '尊称，可通过 获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
              )
              .optional(),
            tertiary: z.string().describe('婚后姓氏').optional(),
            title: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '头衔，可通过 获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
              )
              .optional(),
            local_middle_name: z.string().describe('本地中间名').optional(),
            local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
          }),
        )
        .describe('姓名列表- 覆盖式更新')
        .optional(),
      gender: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '性别，枚举值可查询接口获取，按如下参数查询即可： - custom_api_name：gender - object_api_name：person',
        )
        .optional(),
      date_of_birth: z.string().describe('出生日期').optional(),
      race: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '民族 / 种族，可通过获取，按如下参数查询即可： - custom_api_name：ethnicity_race - object_api_name：person',
        )
        .optional(),
      marital_status: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '婚姻状况，可通过接口获取，按如下参数查询即可： - custom_api_name：marital_status - object_api_name：person',
        )
        .optional(),
      phone_list: z
        .array(
          z.object({
            international_area_code: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
              )
              .optional(),
            phone_number: z.string().describe('电话号码'),
          }),
        )
        .describe('电话列表')
        .optional(),
      address_list: z
        .array(
          z.object({
            address_id: z
              .string()
              .describe(
                '地址 ID，在时返回的的地址ID；不可与其他地址使用相同 ID；为空时会返回新的ID',
              )
              .optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              ),
            region_id: z
              .string()
              .describe(
                '主要行政区，可通过获取',
              )
              .optional(),
            address_line1: z.string().describe('地址行 1').optional(),
            address_line2: z.string().describe('地址行 2').optional(),
            address_line3: z.string().describe('地址行 3').optional(),
            address_line4: z.string().describe('地址行 4').optional(),
            address_line5: z.string().describe('地址行 5').optional(),
            address_line6: z.string().describe('地址行 6').optional(),
            address_line7: z.string().describe('地址行 7').optional(),
            address_line8: z.string().describe('地址行 8').optional(),
            address_line9: z.string().describe('地址行 9').optional(),
            local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
            local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
            local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
            local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
            local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
            local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
            local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
            local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
            local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
            postal_code: z.string().describe('邮政编码').optional(),
            address_type_list: z
              .array(z.object({ enum_name: z.string().describe('枚举值') }))
              .describe(
                '地址类型- 可通过接口查询，查询参数如下： - object_api_name：address - custom_api_name：address_type- 默认：home_address',
              ),
            is_primary: z.boolean().describe('主要地址默认：true'),
            is_public: z.boolean().describe('公开地址默认：false'),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('地址列表- 覆盖式更新')
        .optional(),
      email_list: z
        .array(
          z.object({
            email: z.string().describe('邮箱地址- 覆盖式更新'),
            is_primary: z.boolean().describe('是否为主要邮箱默认：true').optional(),
            is_public: z.boolean().describe('是否为公开邮箱默认：true').optional(),
            email_usage: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '邮箱用途- 可通过接口查询，查询参数如下： - object_api_name: email - custom_api_name：email_usage- 请勿填写 work 枚举，工作邮箱在雇佣信息中操作- 默认：emergency_contact',
              )
              .optional(),
          }),
        )
        .describe('邮箱列表')
        .optional(),
      work_experience_list: z
        .array(
          z.object({
            company_organization: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('公司 / 组织')
              .optional(),
            department: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('部门')
              .optional(),
            job: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('岗位')
              .optional(),
            description: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('工作描述')
              .optional(),
            start_date: z.string().describe('开始日期').optional(),
            end_date: z.string().describe('结束日期').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('工作经历列表- 覆盖式更新')
        .optional(),
      education_list: z
        .array(
          z.object({
            school: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('学校- 如果学校有对应枚举，请使用 school_name 字段'),
            level_of_education: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学历- 可通过接口查询，查询参数如下： - object_api_name：education - custom_api_name：level_of_education',
              )
              .optional(),
            start_date: z.string().describe('开始日期').optional(),
            end_date: z.string().describe('结束日期').optional(),
            field_of_study: z
              .array(
                z.object({
                  lang: z.string().describe('语言编码（IETF BCP 47）'),
                  value: z.string().describe('文本内容'),
                }),
              )
              .describe('专业- 如果专业有对应枚举，请使用 field_of_study_name 字段')
              .optional(),
            degree: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学位- 可通过接口查询，查询参数如下： - object_api_name：education - custom_api_name：degree',
              )
              .optional(),
            school_name: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '学校名称- 可通过获取，查询参数： - custom_api_name：school_name - object_api_name：education- 如果学校有对应枚举，请使用该字段，否则可使用 school 直接写入文本',
              )
              .optional(),
            field_of_study_name: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '专业名称- 可通过获取，查询参数：- custom_api_name：field_of_study_name- object_api_name：education- 如果专业有对应枚举，请使用该字段，否则可使用 field_of_study 直接写入文本',
              )
              .optional(),
            country_region_id: z
              .string()
              .describe(
                '国家地区ID，可通过获取',
              )
              .optional(),
            expected_end_date: z.string().describe('预期结束日期').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('教育经历列表- 覆盖式更新')
        .optional(),
      bank_account_list: z
        .array(
          z.object({
            bank_name: z.string().describe('银行名称- 如果有对应银行ID，请使用 bank_id_v2').optional(),
            bank_account_number: z.string().describe('银行账号'),
            account_holder: z.string().describe('开户人姓名'),
            branch_name: z.string().describe('支行名称- 如果有对应支行 ID，请使用 branch_id_v2').optional(),
            bank_id_v2: z
              .string()
              .describe(
                '银行 ID，详细信息可通过接口查询获得',
              )
              .optional(),
            branch_id_v2: z
              .string()
              .describe(
                '支行 ID，要求必须为填入银行的支行，详细信息可通过接口查询获得',
              )
              .optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区 ID，详细信息可通过接口查询获得',
              )
              .optional(),
            bank_account_usage: z
              .array(z.object({ enum_name: z.string().describe('枚举值') }))
              .describe(
                '银行卡用途- 可通过接口查询，查询参数如下： - object_api_name: bank_account - custom_api_name: bank_account_usage',
              )
              .optional(),
            bank_account_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '银行卡类型- 可通过接口查询，查询参数如下： - object_api_name: bank_account - custom_api_name: bank_account_type',
              )
              .optional(),
            currency_id: z
              .string()
              .describe(
                '货币 ID- 详细信息可通过接口查询获得',
              )
              .optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('银行账户- 覆盖式更新')
        .optional(),
      national_id_list: z
        .array(
          z.object({
            national_id_type_id: z
              .string()
              .describe(
                '国家证件类型，可通过获得',
              ),
            national_id_number: z.string().describe('证件号码'),
            issue_date: z.string().describe('证件签发日期').optional(),
            expiration_date: z.string().describe('证件到期日期').optional(),
            country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              ),
            issued_by: z.string().describe('证件签发机构').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 具体支持的对象请参考',
              )
              .optional(),
          }),
        )
        .describe('证件- 覆盖式更新')
        .optional(),
      dependent_list: z
        .array(
          z.object({
            relationship: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '关系- 可通过接口查询，查询参数如下： - object_api_name：dependent - custom_api_name：relationship_with_dependent',
              ),
            gender: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '性别，枚举值可查询接口获取，按如下参数查询即可： - custom_api_name：gender - object_api_name：person',
              )
              .optional(),
            date_of_birth: z.string().describe('生日').optional(),
            nationality_id_v2: z
              .string()
              .describe(
                '国籍 ID，可通过获取',
              )
              .optional(),
            national_id_list: z
              .array(
                z.object({
                  national_id_type_id: z
                    .string()
                    .describe(
                      '国家证件类型，可通过获得',
                    ),
                  national_id_number: z.string().describe('证件号码'),
                  issue_date: z.string().describe('证件签发日期').optional(),
                  expiration_date: z.string().describe('证件到期日期').optional(),
                  country_region_id: z
                    .string()
                    .describe(
                      '国家/地区ID，可通过获取',
                    ),
                  issued_by: z.string().describe('证件签发机构').optional(),
                  custom_fields: z
                    .array(
                      z.object({
                        custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                        value: z
                          .string()
                          .describe(
                            '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                          ),
                      }),
                    )
                    .describe(
                      '自定义字段- 请参考',
                    )
                    .optional(),
                }),
              )
              .describe('证件号码')
              .optional(),
            spouses_working_status: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '配偶工作状态，可通过获取，查询参数：- custom_api_name：spouses_working_status- object_api_name：dependent',
              )
              .optional(),
            is_this_person_covered_by_health_insurance: z.boolean().describe('包含家属医疗保险').optional(),
            is_this_person_allowed_for_tax_deduction: z.boolean().describe('允许家属抵扣税款').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
            dependent_name: z.string().describe('家庭成员姓名').optional(),
            employer: z.string().describe('工作单位').optional(),
            job: z.string().describe('岗位').optional(),
            phone: z
              .object({
                international_area_code: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
                  )
                  .optional(),
                phone_number: z.string().describe('电话号码'),
              })
              .describe('电话')
              .optional(),
            address: z
              .object({
                address_id: z
                  .string()
                  .describe(
                    '地址 ID，在时返回的的地址ID；不可与其他地址使用相同 ID；为空时返回新的ID',
                  )
                  .optional(),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区，可通过获取',
                  ),
                region_id: z
                  .string()
                  .describe(
                    '主要行政区，可通过获取',
                  )
                  .optional(),
                address_line1: z.string().describe('地址行 1').optional(),
                address_line2: z.string().describe('地址行 2').optional(),
                address_line3: z.string().describe('地址行 3').optional(),
                address_line4: z.string().describe('地址行 4').optional(),
                address_line5: z.string().describe('地址行 5').optional(),
                address_line6: z.string().describe('地址行 6').optional(),
                address_line7: z.string().describe('地址行 7').optional(),
                address_line8: z.string().describe('地址行 8').optional(),
                address_line9: z.string().describe('地址行 9').optional(),
                local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: z.string().describe('邮政编码').optional(),
                custom_fields: z
                  .array(
                    z.object({
                      custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                      value: z
                        .string()
                        .describe(
                          '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                        ),
                    }),
                  )
                  .describe(
                    '自定义字段- 请参考',
                  )
                  .optional(),
              })
              .describe('联系地址')
              .optional(),
            birth_certificate_of_child: z
              .array(
                z.object({
                  id: z
                    .string()
                    .describe(
                      '文件ID，可通过获取',
                    )
                    .optional(),
                }),
              )
              .describe('出生证明')
              .optional(),
          }),
        )
        .describe('家庭成员列表- 覆盖式更新')
        .optional(),
      emergency_contact_list: z
        .array(
          z.object({
            name: z
              .object({
                local_primary: z.string().describe('姓 - 本地文字').optional(),
                local_first_name: z.string().describe('名 - 本地文字').optional(),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区ID，可通过获取',
                  ),
                name_type: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '姓名类型- 可通过接口查询，查询参数如下： - object_api_name：person_name - custom_api_name：name_type',
                  ),
                local_first_name_2: z.string().describe('名 - 第二本地文字').optional(),
                local_primary_2: z.string().describe('姓 - 第二本地文字').optional(),
                additional_name_type: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '补充姓名类型，可通过获取，查询参数：- custom_api_name：additional_name_type- object_api_name：person_name',
                  )
                  .optional(),
                first_name: z.string().describe('名').optional(),
                full_name: z.string().describe('全名').optional(),
                hereditary: z.string().describe('姓氏称谓').optional(),
                custom_name: z
                  .string()
                  .describe('自定义姓名（未传入时，姓名将默认根据所属国家 / 地区规则对相关姓、名字段拼接）')
                  .optional(),
                custom_local_name: z
                  .string()
                  .describe(
                    '本地文字的自定义姓名（未传入时，本地文字的姓名将默认根据所属国家 / 地区规则对本地文字的相关姓、名字段拼接）',
                  )
                  .optional(),
                middle_name: z.string().describe('中间名').optional(),
                name_primary: z.string().describe('姓').optional(),
                secondary: z.string().describe('第二姓氏').optional(),
                social: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '尊称，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
                  )
                  .optional(),
                tertiary: z.string().describe('婚后姓氏').optional(),
                title: z
                  .object({ enum_name: z.string().describe('枚举值') })
                  .describe(
                    '头衔，可通过 接口获取，按如下参数查询即可：- custom_api_name：social- object_api_name：person_name',
                  )
                  .optional(),
                local_middle_name: z.string().describe('本地中间名').optional(),
                local_secondary: z.string().describe('第二姓氏 - 本地文字').optional(),
              })
              .describe('姓名- 该字段已弃用，请使用 legal_name')
              .optional(),
            relationship: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '关系- 可通过接口查询，查询参数如下： - object_api_name：dependent - custom_api_name：relationship_with_dependent',
              )
              .optional(),
            phone_ist: z
              .array(
                z.object({
                  international_area_code: z
                    .object({ enum_name: z.string().describe('枚举值') })
                    .describe(
                      '国家区号，可通过获取，按如下参数查询即可：- custom_api_name：international_area_code- object_api_name：phone',
                    )
                    .optional(),
                  phone_number: z.string().describe('电话号码'),
                }),
              )
              .describe('电话')
              .optional(),
            legal_name: z.string().describe('法定姓名').optional(),
            custom_fields: z
              .array(
                z.object({
                  custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('紧急联系人列表- 覆盖式更新')
        .optional(),
      date_entered_workforce: z.string().describe('参加工作日期').optional(),
      profile_image_id: z.string().describe('头像资源的 ID- 该字段已废弃').optional(),
      personal_profile: z
        .array(
          z.object({
            personal_profile_type: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '资料类型- 可通过获取，查询参数： - custom_api_name：profile_type - object_api_name：personal_profile- 仅 【飞书人事-档案配置-资料附件】存在的字段编码可用',
              )
              .optional(),
            files: z
              .array(
                z.object({
                  id: z
                    .string()
                    .describe(
                      '文件ID，可通过获取',
                    )
                    .optional(),
                }),
              )
              .describe('上传文件列表')
              .optional(),
          }),
        )
        .describe('个人资料附件，该字段为全量覆盖式更新，请谨慎操作')
        .optional(),
      native_region: z
        .string()
        .describe(
          '籍贯 ID，可通过获取',
        )
        .optional(),
      hukou_type: z
        .object({ enum_name: z.string().describe('枚举值') })
        .describe(
          '户口类型- 可通过接口查询，查询参数如下： - object_api_name: person_info_chn - custom_api_name: hukou_type',
        )
        .optional(),
      hukou_location: z.string().describe('户口所在地').optional(),
      political_affiliations: z
        .array(z.object({ enum_name: z.string().describe('枚举值') }))
        .describe(
          '政治面貌- 可通过接口查询，查询参数如下： - object_api_name：person_info_chn - custom_api_name：political_affiliation',
        )
        .optional(),
      talent_id: z
        .string()
        .describe(
          '人才ID，可通过获取',
        )
        .optional(),
      custom_fields: z
        .array(
          z.object({
            custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
            value: z
              .string()
              .describe(
                '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
              ),
          }),
        )
        .describe(
          '自定义字段- 请参考',
        )
        .optional(),
      born_country_region: z
        .string()
        .describe(
          '出生国家 / 地区 ID- 可通过接口获取',
        )
        .optional(),
      is_disabled: z.boolean().describe('是否残疾').optional(),
      disable_card_number: z.string().describe('残疾证号').optional(),
      is_martyr_family: z.boolean().describe('是否烈属').optional(),
      martyr_card_number: z.string().describe('烈属证号').optional(),
      is_old_alone: z.boolean().describe('是否孤老').optional(),
      resident_taxes: z
        .array(
          z.object({
            year_resident_tax: z.string().describe('年度'),
            resident_status: z
              .object({ enum_name: z.string().describe('枚举值') })
              .describe(
                '居民身份，可通过 接口查询，查询参数如下：- object_api_name：resident_tax- custom_api_name：resident_status',
              )
              .optional(),
            tax_country_region_id: z
              .string()
              .describe(
                '国家/地区，可通过获取',
              )
              .optional(),
            custom_fields: z
              .array(
                z.object({
                  field_name: z.string().describe('字段名'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同。使用方式可参考',
                    ),
                }),
              )
              .describe(
                '自定义字段- 请参考',
              )
              .optional(),
          }),
        )
        .describe('居民身份信息- 覆盖式更新')
        .optional(),
      first_entry_time: z.string().describe('首次入境日期').optional(),
      leave_time: z.string().describe('预计离境日期').optional(),
    }),
    params: z.object({
      client_token: z
        .string()
        .describe(
          '操作的唯一标识，用于幂等的进行更新操作，格式为标准的 UUIDV4。此值为空表示将发起一次新的请求，此值非空表示幂等的进行更新操作',
        )
        .optional(),
      no_need_query: z
        .boolean()
        .describe('根据no_need_query判断更新后是否返回更新后个人信息，若填写为 “true”则 data 为空')
        .optional(),
    }),
    path: z.object({
      person_id: z
        .string()
        .describe(
          '个人信息 ID- 该 ID 在时可从响应体中获取（person_id）- 此外你也可以调用接口，获取指定员工的 person_id',
        )
        .optional(),
    }),
  },
};
export const corehrV2PreHireComplete = {
  project: 'corehr',
  name: 'corehr.v2.preHire.complete',
  sdkName: 'corehr.v2.preHire.complete',
  path: '/open-apis/corehr/v2/pre_hires/:pre_hire_id/complete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-操作员工完成入职-操作待入职员工完成入职，正式入职建立员工和公司/组织的雇佣关系',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      pre_hire_id: z
        .string()
        .describe('待入职ID,可从接口获取'),
    }),
  },
};
export const corehrV2PreHireCreate = {
  project: 'corehr',
  name: 'corehr.v2.preHire.create',
  sdkName: 'corehr.v2.preHire.create',
  path: '/open-apis/corehr/v2/pre_hires',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-入职-直接创建待入职-使用指定数据创建一个待入职人员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      basic_info: z
        .object({
          name: z
            .object({
              full_name: z.string().describe('全名').optional(),
              first_name: z.string().describe('名').optional(),
              middle_name: z.string().describe('中间名').optional(),
              name_primary: z.string().describe('姓').optional(),
              local_first_name: z.string().describe('名 - 本地文字').optional(),
              local_middle_name: z.string().describe('本地中间名').optional(),
              local_primary: z.string().describe('姓 - 本地文字').optional(),
              country_region_id: z
                .string()
                .describe(
                  '国家 / 地区，可以通过接口获得',
                )
                .optional(),
              custom_local_name: z.string().describe('本地文字的自定义姓名').optional(),
              custom_western_name: z.string().describe('西方文字的自定义姓名').optional(),
              additional_name: z.string().describe('别名').optional(),
            })
            .describe('常用名')
            .optional(),
          phone_number: z.string().describe('手机号').optional(),
          international_area_code: z
            .string()
            .describe(
              '区号，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = phone- custom_api_name = international_area_code',
            )
            .optional(),
          email: z.string().describe('个人邮箱').optional(),
          date_of_birth: z.string().describe('生日').optional(),
          personal_id_number: z.string().describe('证件号（待废弃，建议使用national_id_list）').optional(),
          personal_id_type: z
            .string()
            .describe(
              '证件类型（待废弃，建议使用national_id_list），可以通过接口获取',
            )
            .optional(),
          date_entered_workforce: z.string().describe('参加工作日期，格式："YYYY-MM-DD"').optional(),
          gender_id: z
            .string()
            .describe(
              '性别，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = person- custom_api_name = gender',
            )
            .optional(),
          nationality_v2_id: z
            .string()
            .describe(
              '国籍（新），可以通过接口获得',
            )
            .optional(),
          additional_nationality_id_list: z
            .array(z.string())
            .describe(
              '其他国籍，可以通过接口获得',
            )
            .optional(),
          citizenship_status_id_list: z
            .array(z.string())
            .describe('公民身份，如需获取具体值，请联系人员档案管理员')
            .optional(),
          home_address: z.string().describe('家庭地址（待废弃）').optional(),
          worker_id: z.string().describe('人员编号').optional(),
          user_geo: z
            .string()
            .describe(
              '数据驻留地（部分租户开通此功能），枚举值可查询接口获取。按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = user_geo',
            )
            .optional(),
          legal_name: z
            .object({
              full_name: z.string().describe('全名').optional(),
              first_name: z.string().describe('名').optional(),
              middle_name: z.string().describe('中间名').optional(),
              name_primary: z.string().describe('姓').optional(),
              local_first_name: z.string().describe('名 - 本地文字').optional(),
              local_middle_name: z.string().describe('本地中间名').optional(),
              local_primary: z.string().describe('姓 - 本地文字').optional(),
              country_region_id: z
                .string()
                .describe(
                  '国家 / 地区，可以通过接口获得',
                )
                .optional(),
              custom_local_name: z.string().describe('本地文字的自定义姓名').optional(),
              custom_western_name: z.string().describe('西方文字的自定义姓名').optional(),
              additional_name: z.string().describe('别名').optional(),
            })
            .describe('法定姓名')
            .optional(),
          additional_name: z
            .object({
              full_name: z.string().describe('全名').optional(),
              first_name: z.string().describe('名').optional(),
              middle_name: z.string().describe('中间名').optional(),
              name_primary: z.string().describe('姓').optional(),
              local_first_name: z.string().describe('名 - 本地文字').optional(),
              local_middle_name: z.string().describe('本地中间名').optional(),
              local_primary: z.string().describe('姓 - 本地文字').optional(),
              country_region_id: z.string().describe('国家 / 地区').optional(),
              custom_local_name: z.string().describe('本地文字的自定义姓名').optional(),
              custom_western_name: z.string().describe('西方文字的自定义姓名').optional(),
              additional_name: z.string().describe('别名').optional(),
            })
            .describe('别名')
            .optional(),
          resident_tax_list: z
            .array(
              z.object({
                tax_country_region: z
                  .string()
                  .describe(
                    '国家 / 地区ID，可以通过接口获得',
                  )
                  .optional(),
                resident_status: z
                  .string()
                  .describe(
                    '居民身份，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = resident_tax- custom_api_name = resident_status',
                  )
                  .optional(),
                tax_address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家 / 地区，可以通过接口获得',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获得',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name = "address" - custom_api_name = "address_type"',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z
                      .string()
                      .describe(
                        '城市，可以通过接口获取详情',
                      )
                      .optional(),
                    district_id_v2: z
                      .string()
                      .describe(
                        '区/县，可以通过接口获取详情',
                      )
                      .optional(),
                  })
                  .describe('纳税地址')
                  .optional(),
                resident_status_specification: z.string().describe('居民纳税身份说明').optional(),
                year_resident_tax: z.string().describe('年度').optional(),
              }),
            )
            .describe('纳税身份信息')
            .optional(),
          born_country_region: z
            .string()
            .describe(
              '出生国家/地区，可以通过接口获取',
            )
            .optional(),
          is_disabled: z.boolean().describe('是否残疾').optional(),
          disable_card_number: z.string().describe('残疾证号').optional(),
          is_old_alone: z.boolean().describe('是否孤老').optional(),
          is_martyr_family: z.boolean().describe('是否烈属').optional(),
          martyr_card_number: z.string().describe('烈属证号').optional(),
          dependent_list: z
            .array(
              z.object({
                relationship: z
                  .string()
                  .describe(
                    '关系 ，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：relationship_with_dependent',
                  ),
                gender: z
                  .string()
                  .describe(
                    '性别 ，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：gender',
                  )
                  .optional(),
                date_of_birth: z.string().describe('生日').optional(),
                national_ids: z
                  .array(
                    z.object({
                      country_region_id: z
                        .string()
                        .describe(
                          '国家/地区，可以通过接口获取',
                        ),
                      national_id_type_id: z
                        .string()
                        .describe(
                          '国家证件类型，可以通过接口获取',
                        ),
                      national_id_number: z.string().describe('证件号码'),
                      issue_date: z.string().describe('证件签发日期，格式："YYYY-MM-DD"').optional(),
                      expiration_date: z.string().describe('证件到期日期，格式："YYYY-MM-DD"').optional(),
                      issued_by: z.string().describe('证件签发机构').optional(),
                    }),
                  )
                  .describe('证件号码')
                  .optional(),
                spouses_working_status: z
                  .string()
                  .describe(
                    '配偶工作状态，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：spouses_working_status',
                  )
                  .optional(),
                is_this_person_covered_by_health_insurance: z.boolean().describe('包含家属医疗保险').optional(),
                is_this_person_allowed_for_tax_deduction: z.boolean().describe('允许家属抵扣税款').optional(),
                dependent_name: z.string().describe('家庭成员姓名').optional(),
                employer: z.string().describe('工作单位').optional(),
                job: z.string().describe('岗位信息').optional(),
                phone: z
                  .object({
                    international_area_code: z
                      .string()
                      .describe(
                        '手机区号，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：international_area_code',
                      ),
                    phone_number: z.string().describe('电话号码'),
                    device_type: z
                      .string()
                      .describe(
                        '设备类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：device_type',
                      ),
                    phone_usage: z
                      .string()
                      .describe(
                        '电话用途，枚举值可查询接口获取，按如下参数查询即可：- custom_api_name：phone_usage- object_api_name：phone',
                      ),
                    is_primary: z.boolean().describe('主要电话，若有多个电话，只能有一个电话的「is_primary」为true'),
                    is_public: z.boolean().describe('公开电话'),
                  })
                  .describe('电话')
                  .optional(),
                address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家/地区，可以通过接口获取',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获取',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- custom_api_name：address_type- object_api_name：address',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z
                      .string()
                      .describe(
                        '城市，可以通过接口获取详情',
                      )
                      .optional(),
                    district_id_v2: z
                      .string()
                      .describe(
                        '区/县，可以通过接口获取详情',
                      )
                      .optional(),
                  })
                  .describe('联系地址')
                  .optional(),
              }),
            )
            .describe('家庭成员')
            .optional(),
          religion: z
            .string()
            .describe(
              '宗教信仰，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：religion',
            )
            .optional(),
          bank_account_list: z
            .array(
              z.object({
                bank_name: z.string().describe('银行名称').optional(),
                branch_name: z.string().describe('支行名称').optional(),
                bank_account_number: z.string().describe('银行账号'),
                account_holder: z.string().describe('开户人姓名'),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区，可以通过接口获取',
                  )
                  .optional(),
                bank_account_usages: z
                  .array(z.string())
                  .describe(
                    '银行卡用途，枚举值可查询接口获取，按如下参数查询即可：- custom_api_name：bank_account_usage- object_api_name：bank_account',
                  )
                  .optional(),
                bank_account_type: z
                  .string()
                  .describe(
                    '银行卡类型，枚举值可查询接口获取，按如下参数查询即可：- custom_api_name：bank_account_type- object_api_name：bank_account',
                  )
                  .optional(),
              }),
            )
            .describe('银行账号')
            .optional(),
          national_id_list: z
            .array(
              z.object({
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区，可以通过接口获取',
                  ),
                national_id_type_id: z
                  .string()
                  .describe(
                    '国家证件类型，可以通过接口获取',
                  ),
                national_id_number: z.string().describe('证件号码'),
                issue_date: z.string().describe('证件签发日期').optional(),
                expiration_date: z.string().describe('证件到期日期').optional(),
                issued_by: z.string().describe('证件签发机构').optional(),
              }),
            )
            .describe('国家证件')
            .optional(),
          personal_profile_list: z
            .array(
              z.object({
                personal_profile_type: z
                  .string()
                  .describe(
                    '资料类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：personal_profile- custom_api_name：profile_type',
                  )
                  .optional(),
                files: z
                  .array(
                    z.object({
                      id: z
                        .string()
                        .describe(
                          '上传文件ID，可以通过接口获取',
                        )
                        .optional(),
                    }),
                  )
                  .describe('资料文件列表')
                  .optional(),
              }),
            )
            .describe('个人资料')
            .optional(),
          emergency_contact_list: z
            .array(
              z.object({
                legal_name: z.string().describe('紧急联系人姓名').optional(),
                relationship: z
                  .string()
                  .describe(
                    '紧急联系人与本人亲属关系，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：emergency_contact- custom_api_name：relationship',
                  )
                  .optional(),
                phones: z
                  .array(
                    z.object({
                      international_area_code: z
                        .string()
                        .describe(
                          '国际电话区号，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：international_area_code',
                        ),
                      phone_number: z.string().describe('电话号码'),
                      device_type: z
                        .string()
                        .describe(
                          '设备类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：device_type',
                        ),
                      phone_usage: z
                        .string()
                        .describe(
                          '电话用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：phone_usage',
                        ),
                      is_primary: z.boolean().describe('主要电话，若有多个电话，只能有一个电话的「is_primary」为true'),
                      is_public: z.boolean().describe('公开电话'),
                    }),
                  )
                  .describe('电话')
                  .optional(),
                address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家 / 地区，可以通过接口获取',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获取',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z
                      .string()
                      .describe(
                        '城市，可以通过接口获取详情',
                      )
                      .optional(),
                    district_id_v2: z
                      .string()
                      .describe(
                        '区/县，可以通过接口获取详情',
                      )
                      .optional(),
                  })
                  .describe('地址')
                  .optional(),
                email: z
                  .object({
                    email: z.string().describe('邮箱地址'),
                    is_primary: z
                      .boolean()
                      .describe('是否为主要邮箱，若有多个邮箱，只能有一个邮箱的「is_primary」为true'),
                    is_public: z.boolean().describe('是否为公开邮箱'),
                    email_usage: z
                      .string()
                      .describe(
                        '邮箱用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：email- custom_api_name：email_usage',
                      ),
                  })
                  .describe('邮箱')
                  .optional(),
                is_primary: z
                  .boolean()
                  .describe('主要联系人，若有多个联系人，只能有一个联系人的「is_primary」为true')
                  .optional(),
              }),
            )
            .describe('紧急联系人')
            .optional(),
          address_list: z
            .array(
              z.object({
                country_region_id: z
                  .string()
                  .describe(
                    '国家 / 地区，可以通过接口获取',
                  ),
                region_id: z
                  .string()
                  .describe(
                    '主要行政区，可以通过接口获取',
                  )
                  .optional(),
                local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: z.string().describe('邮政编码').optional(),
                address_types: z
                  .array(z.string())
                  .describe(
                    '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                  ),
                is_primary: z.boolean().describe('主要地址'),
                is_public: z.boolean().describe('公开地址'),
                city_id_v2: z
                  .string()
                  .describe(
                    '城市，可以通过接口获取详情',
                  )
                  .optional(),
                district_id_v2: z
                  .string()
                  .describe(
                    '区/县，可以通过接口获取详情',
                  )
                  .optional(),
              }),
            )
            .describe('联系地址')
            .optional(),
          marital_status: z
            .string()
            .describe(
              '婚姻状况，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：marital_status',
            )
            .optional(),
          ethnicity_race: z
            .string()
            .describe(
              '民族 / 种族，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：ethnicity_race',
            )
            .optional(),
          native_region: z
            .string()
            .describe(
              '籍贯，可以通过接口获取',
            )
            .optional(),
          hukou_type: z
            .string()
            .describe(
              '户口类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person_info_chn- custom_api_name：hukou_type',
            )
            .optional(),
          hukou_location: z.string().describe('户口所在地').optional(),
          custom_fields: z
            .array(
              z.object({
                field_name: z.string().describe('字段名'),
                value: z
                  .string()
                  .describe(
                    '字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05])',
                  ),
              }),
            )
            .describe(
              'person对象上的自定义字段，可以通过接口获得',
            )
            .optional(),
          expected_graduate_date: z.string().describe('预计毕业日期').optional(),
        })
        .describe('个人信息'),
      offer_info: z
        .object({
          offer_id: z
            .string()
            .describe(
              'Offer ID，仅支持飞书招聘 ID，可以通过飞书招聘接口获取，如果未使用飞书招聘请置空',
            )
            .optional(),
          offer_hr_id: z
            .string()
            .describe(
              'Offer HR 雇佣 ID，可以通过接口获取',
            )
            .optional(),
          department_id: z
            .string()
            .describe(
              '部门 ID，可以通过接口获取',
            )
            .optional(),
          direct_leader_id: z
            .string()
            .describe(
              '直属领导的雇佣 ID，可以通过接口获取',
            )
            .optional(),
          dotted_line_manager_id: z
            .string()
            .describe(
              '虚线上级ID，可以通过接口获取- 功能灰度中，如有需求请联系',
            )
            .optional(),
          job_id: z
            .string()
            .describe('职务 ID，可以通过接口获取')
            .optional(),
          job_family_id: z
            .string()
            .describe(
              '序列 ID，可以通过接口获取',
            )
            .optional(),
          job_level_id: z
            .string()
            .describe(
              '职级 ID，可以通过接口获取',
            )
            .optional(),
          job_title: z.string().describe('职务头衔（待废弃）').optional(),
          probation_start_date: z.string().describe('试用期开始日期，格式："YYYY-MM-DD"').optional(),
          probation_end_date: z.string().describe('试用期结束日期，格式："YYYY-MM-DD"').optional(),
          contract_start_date: z.string().describe('合同开始日期，格式："YYYY-MM-DD"').optional(),
          contract_end_date: z.string().describe('合同结束日期，格式："YYYY-MM-DD"').optional(),
          duration_period: z.number().describe('合同期限时长').optional(),
          duration_unit: z
            .string()
            .describe(
              '合同期限单位，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = duration_unit',
            )
            .optional(),
          onboarding_date: z.string().describe('入职日期，格式："YYYY-MM-DD"').optional(),
          onboarding_location_id: z
            .string()
            .describe(
              '入职地点 ID，可以通过接口获取',
            )
            .optional(),
          office_location_id: z
            .string()
            .describe(
              '办公地点 ID，可以通过接口获取',
            )
            .optional(),
          recruitment_type_id: z
            .string()
            .describe(
              '招聘来源，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：recruitment_type',
            )
            .optional(),
          probation_period: z.string().describe('试用期时长').optional(),
          employee_type_id: z
            .string()
            .describe(
              '人员类型 ID，可以通过接口获取',
            )
            .optional(),
          employee_subtype_id: z.string().describe('人员子类型id').optional(),
          employment_type_id: z
            .string()
            .describe(
              '雇佣类型，请注意该字段为必填，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：employment_type',
            )
            .optional(),
          work_email: z.string().describe('工作邮箱').optional(),
          duration_type_id: z
            .string()
            .describe(
              '期限类型， 枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：duration_type',
            )
            .optional(),
          signing_type_id: z
            .string()
            .describe(
              '签订类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：signing_type',
            )
            .optional(),
          entry_mode: z
            .string()
            .describe(
              '入职方式，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：onboarding_method',
            )
            .optional(),
          social_security_city_id: z
            .string()
            .describe(
              '社保城市 ID，可以通过接口获取',
            )
            .optional(),
          contract_type: z
            .string()
            .describe(
              '合同类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：contract_type',
            )
            .optional(),
          company: z
            .string()
            .describe(
              '公司 ID，可以通过接口获取',
            )
            .optional(),
          cost_center_rate: z
            .array(
              z.object({
                cost_center_id: z
                  .string()
                  .describe(
                    '成本中心 ID，可以通过接口获取',
                  )
                  .optional(),
                rate: z.number().describe('分摊比例，大于0小于等于100的正整数').optional(),
              }),
            )
            .describe('成本中心分摊信息')
            .optional(),
          job_grade_id: z
            .string()
            .describe('职等ID，可以通过接口获取')
            .optional(),
          custom_fields: z
            .array(
              z.object({
                field_name: z.string().describe('字段名'),
                value: z.string().describe('字段值，请转换为字符串数组的方式写入'),
              }),
            )
            .describe(
              'pre_hire对象上的自定义字段，可以通过接口获得',
            )
            .optional(),
          service_company: z
            .string()
            .describe(
              '任职公司，可以通过接口获取',
            )
            .optional(),
          work_shift: z
            .string()
            .describe(
              '排班，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：work_shift',
            )
            .optional(),
          compensation_type: z
            .string()
            .describe(
              '薪资类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：compensation_type',
            )
            .optional(),
          work_location_id: z
            .string()
            .describe(
              '工作地点ID，可以通过接口获取',
            )
            .optional(),
          onboarding_address_id: z
            .string()
            .describe(
              '入职地址ID，可以通过接口获取',
            )
            .optional(),
          office_address_id: z
            .string()
            .describe(
              '办公地址ID，，可以通过接口获取',
            )
            .optional(),
          position_id: z.string().describe('岗位ID').optional(),
          working_calendar_id: z.string().describe('工作日历ID').optional(),
          working_hours_type: z
            .string()
            .describe(
              '工时制度，可以通过接口获得',
            )
            .optional(),
          pay_group_id: z.string().describe('薪资组').optional(),
          flow_id: z.string().describe('入职流程ID').optional(),
          check_in_time: z.string().describe('签到日期，格式："YYYY-MM-DD"').optional(),
          check_in_method: z
            .string()
            .describe(
              '签到方式，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：onboarding_method',
            )
            .optional(),
          seniority_date: z.string().describe('司龄起算日期').optional(),
          seniority_adjust_information_list: z
            .array(
              z.object({
                seniority_adjustment: z
                  .number()
                  .describe(
                    '调整值- 精确度：两位小数- 单位：年- 自动计算逻辑：如果这个值为空，司龄调整的开始日期和结束日期均不为空，会自动计算出调整值',
                  )
                  .optional(),
                seniority_adjustment_type: z
                  .enum(['decrease', 'increase'])
                  .describe(
                    '调整类型- 可通过接口查询，查询参数如下： - object_api_name：seniority_adjust_information - custom_api_name：seniority_adjustment_type Options:decrease(减少),increase(增加)',
                  ),
                reasons_for_seniority_adjustment: z.string().describe('司龄调整原因').optional(),
                start_date: z.string().describe('开始日期- 格式： yyyy-mm-dd').optional(),
                end_date: z.string().describe('结束日期- 格式： yyyy-mm-dd').optional(),
              }),
            )
            .describe('司龄调整信息- 功能灰度中，如有需求请联系')
            .optional(),
          notice_period_probation_voluntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '试用期内通知期（主动离职)- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_probation_involuntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '试用期内通知期（被动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_positive_voluntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '转正后通知期（主动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_positive_involuntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '转正后通知期（被动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          condition_worker: z.boolean().describe('是否外部人员').optional(),
          non_compete_covenant: z.boolean().describe('是否包含竞业条款').optional(),
          company_sponsored_visa: z.boolean().describe('需要公司办理签证').optional(),
          work_station: z.string().describe('工位').optional(),
        })
        .describe('职位信息'),
      education_info: z
        .array(
          z.object({
            school_name: z.string().describe('学校名称').optional(),
            education: z
              .string()
              .describe(
                '学历，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：education- custom_api_name：level_of_education',
              )
              .optional(),
            start_time: z.string().describe('开始时间，格式："YYYY-MM-DD"').optional(),
            end_time: z.string().describe('结束时间，格式："YYYY-MM-DD"').optional(),
            field_of_study: z.string().describe('专业').optional(),
            custom_fields: z
              .array(
                z.object({
                  field_name: z.string().describe('字段名'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05])',
                    ),
                }),
              )
              .describe('自定义字段')
              .optional(),
          }),
        )
        .describe('教育经历')
        .optional(),
      work_experience: z
        .array(
          z.object({
            company_name: z.string().describe('公司名称').optional(),
            start_time: z.string().describe('开始时间，格式："YYYY-MM-DD"').optional(),
            end_time: z.string().describe('结束时间，格式："YYYY-MM-DD"').optional(),
            job_title: z.string().describe('岗位').optional(),
            description: z.string().describe('工作描述').optional(),
            department: z.string().describe('部门').optional(),
            custom_fields: z
              .array(
                z.object({
                  field_name: z.string().describe('字段名'),
                  value: z
                    .string()
                    .describe(
                      '字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05])',
                    ),
                }),
              )
              .describe('自定义字段')
              .optional(),
          }),
        )
        .describe('工作经历')
        .optional(),
      ats_application_id: z
        .string()
        .describe(
          '招聘应用 ID，仅支持飞书招聘 ID，可以通过接口获取',
        )
        .optional(),
      out_biz_id: z
        .string()
        .describe(
          '外部业务唯一编码，用于支持幂等创建- 外部接入方需要保证id的唯一，相同id最多唯一对应一个待入职数据- 如果id对应的待入职数据已经存在，执行创建操作则直接返回待入职id，且不会更新本次传入的数据到待入职',
        )
        .optional(),
    }),
  },
};
export const corehrV2PreHireDelete = {
  project: 'corehr',
  name: 'corehr.v2.preHire.delete',
  sdkName: 'corehr.v2.preHire.delete',
  path: '/open-apis/corehr/v2/pre_hires/:pre_hire_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-删除待入职信息-删除待入职人员，删除后无法搜索到待入职人员信息，请谨慎操作',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      pre_hire_id: z
        .string()
        .describe('待入职ID，可通过获取'),
    }),
  },
};
export const corehrV2PreHirePatch = {
  project: 'corehr',
  name: 'corehr.v2.preHire.patch',
  sdkName: 'corehr.v2.preHire.patch',
  path: '/open-apis/corehr/v2/pre_hires/:pre_hire_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书人事（企业版）-入职-更新待入职信息-通过指定系统字段和自定义字段以更新待入职数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      basic_info_update: z
        .object({
          names: z
            .array(
              z.object({
                full_name: z.string().describe('全名').optional(),
                first_name: z.string().describe('名').optional(),
                middle_name: z.string().describe('中间名').optional(),
                name_primary: z.string().describe('姓').optional(),
                local_first_name: z.string().describe('名 - 本地文字').optional(),
                local_middle_name: z.string().describe('本地中间名').optional(),
                local_primary: z.string().describe('姓 - 本地文字').optional(),
                custom_local_name: z.string().describe('自定义姓名（本地文字）').optional(),
                custom_western_name: z.string().describe('自定义姓名（西方文字）').optional(),
                country_region: z
                  .string()
                  .describe(
                    '国家/地区，可以通过接口获得',
                  ),
                name_type: z
                  .string()
                  .describe(
                    '姓名类型，枚举值如下：- legal_name：法定姓名- preferred_name：常用名- former_name：曾用名- additional_name：别名',
                  ),
                additional_name: z.string().describe('别名').optional(),
              }),
            )
            .describe(
              '姓名，该值是一个list，会全量更新。即使只更新 list 中的某一个元素，也需要把其它元素都完整传值，否则将丢失数据',
            )
            .optional(),
          phones: z
            .array(
              z.object({
                international_area_code: z
                  .string()
                  .describe(
                    '电话区号，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = phone- custom_api_name = international_area_code',
                  ),
                phone_number: z.string().describe('电话号码'),
                device_type: z
                  .string()
                  .describe(
                    '设备类型，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = phone- custom_api_name = device_type',
                  ),
                phone_usage: z
                  .string()
                  .describe(
                    '电话用途，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = phone- custom_api_name = phone_usage',
                  ),
                is_primary: z.boolean().describe('主要电话，若有多个电话，只能有一个电话的「is_primary」为true'),
                is_public: z.boolean().describe('公开电话'),
              }),
            )
            .describe(
              '电话，该值是一个list，会全量更新。即使只更新 list 中的某一个元素，也需要把其它元素都完整传值，否则将丢失数据',
            )
            .optional(),
          emails: z
            .array(
              z.object({
                email: z.string().describe('邮箱地址'),
                is_primary: z.boolean().describe('是否为主要邮箱,若有多个邮箱，只能有一个邮箱的「is_primary」为true'),
                is_public: z.boolean().describe('是否为公开邮箱'),
                email_usage: z
                  .string()
                  .describe(
                    '邮箱用途，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = email- custom_api_name = email_usage',
                  ),
              }),
            )
            .describe(
              '邮箱，该值是一个list，会全量更新。即使只更新 list 中的某一个元素，也需要把其它元素都完整传值，否则将丢失数据',
            )
            .optional(),
          nationality_v2_id: z
            .string()
            .describe(
              '国籍，可以通过接口获取',
            )
            .optional(),
          additional_nationality_id_list: z
            .array(z.string())
            .describe(
              '其他国籍，可以通过接口获取',
            )
            .optional(),
          resident_tax_list: z
            .array(
              z.object({
                tax_country_region: z
                  .string()
                  .describe(
                    '国家 / 地区ID，可以通过接口获得',
                  )
                  .optional(),
                resident_status: z.string().describe('居民身份').optional(),
                tax_address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家 / 地区，可以通过接口获得',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获得',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z
                      .string()
                      .describe(
                        '城市，可以通过接口获取详情',
                      )
                      .optional(),
                    district_id_v2: z
                      .string()
                      .describe(
                        '区/县，可以通过接口获取详情',
                      )
                      .optional(),
                  })
                  .describe('纳税地址')
                  .optional(),
                resident_status_specification: z.string().describe('居民纳税身份说明').optional(),
                year_resident_tax: z.string().describe('年度').optional(),
              }),
            )
            .describe('纳税身份信息,该值是一个list，会全量更新')
            .optional(),
          born_country_region: z
            .string()
            .describe(
              '出生国家/地区，可以通过接口获得',
            )
            .optional(),
          is_disabled: z.boolean().describe('是否残疾').optional(),
          disable_card_number: z.string().describe('残疾证号').optional(),
          is_old_alone: z.boolean().describe('是否孤老').optional(),
          is_martyr_family: z.boolean().describe('是否烈属').optional(),
          martyr_card_number: z.string().describe('烈属证号').optional(),
          dependent_list: z
            .array(
              z.object({
                relationship: z
                  .string()
                  .describe(
                    '关系，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：relationship_with_dependent',
                  ),
                gender: z
                  .string()
                  .describe(
                    '性别，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：gender',
                  )
                  .optional(),
                date_of_birth: z.string().describe('生日').optional(),
                national_ids: z
                  .array(
                    z.object({
                      country_region_id: z
                        .string()
                        .describe(
                          '国家 / 地区，可以通过接口获得',
                        ),
                      national_id_type_id: z
                        .string()
                        .describe(
                          '国家证件类型，可以通过接口获得',
                        ),
                      national_id_number: z.string().describe('证件号码'),
                      issue_date: z.string().describe('证件签发日期').optional(),
                      expiration_date: z.string().describe('证件到期日期').optional(),
                      issued_by: z.string().describe('证件签发机构').optional(),
                    }),
                  )
                  .describe('证件号码')
                  .optional(),
                spouses_working_status: z
                  .string()
                  .describe(
                    '配偶工作状态，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：spouses_working_status',
                  )
                  .optional(),
                is_this_person_covered_by_health_insurance: z.boolean().describe('包含家属医疗保险').optional(),
                is_this_person_allowed_for_tax_deduction: z.boolean().describe('允许家属抵扣税款').optional(),
                dependent_name: z.string().describe('家庭成员姓名').optional(),
                employer: z.string().describe('工作单位').optional(),
                job: z.string().describe('岗位信息描述').optional(),
                phone: z
                  .object({
                    international_area_code: z
                      .string()
                      .describe(
                        '国家区号，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：international_area_code',
                      ),
                    phone_number: z.string().describe('电话号码'),
                    device_type: z
                      .string()
                      .describe(
                        '设备类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：device_type',
                      ),
                    phone_usage: z
                      .string()
                      .describe(
                        '电话用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：phone_usage',
                      ),
                    is_primary: z.boolean().describe('主要电话，若有多个电话，只能有一个电话的「is_primary」为true'),
                    is_public: z.boolean().describe('公开电话'),
                  })
                  .describe('电话')
                  .optional(),
                address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家 / 地区，可以通过接口获得',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获得',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z.string().describe('城市').optional(),
                    district_id_v2: z.string().describe('区/县').optional(),
                  })
                  .describe('联系地址')
                  .optional(),
              }),
            )
            .describe('家庭成员')
            .optional(),
          religion: z
            .string()
            .describe(
              '宗教信仰，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：religion',
            )
            .optional(),
          bank_account_list: z
            .array(
              z.object({
                bank_name: z.string().describe('银行名称').optional(),
                branch_name: z.string().describe('支行名称').optional(),
                bank_account_number: z.string().describe('银行账号'),
                account_holder: z.string().describe('开户人姓名'),
                country_region_id: z
                  .string()
                  .describe(
                    '国家/地区 ID，可以通过接口获得',
                  )
                  .optional(),
                bank_account_usages: z
                  .array(z.string())
                  .describe(
                    '银行卡用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：bank_account- custom_api_name：bank_account_usage',
                  )
                  .optional(),
                bank_account_type: z
                  .string()
                  .describe(
                    '银行卡类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：bank_account- custom_api_name：bank_account_type',
                  )
                  .optional(),
              }),
            )
            .describe('银行账号')
            .optional(),
          national_id_list: z
            .array(
              z.object({
                country_region_id: z
                  .string()
                  .describe(
                    '国家 / 地区，可以通过接口获得',
                  ),
                national_id_type_id: z
                  .string()
                  .describe(
                    '国家证件类型，可以通过接口获得',
                  ),
                national_id_number: z.string().describe('证件号码'),
                issue_date: z.string().describe('证件签发日期').optional(),
                expiration_date: z.string().describe('证件到期日期').optional(),
                issued_by: z.string().describe('证件签发机构').optional(),
              }),
            )
            .describe('证件账号')
            .optional(),
          personal_profile_list: z
            .array(
              z.object({
                personal_profile_type: z
                  .string()
                  .describe(
                    '资料类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：personal_profile- custom_api_name: profile_type',
                  )
                  .optional(),
                files: z
                  .array(
                    z.object({
                      id: z
                        .string()
                        .describe(
                          '文件ID，通过[上传文件](/uAjLw4CM/ukTMukTMukTM/reference/corehr-v1/person/upload)接口上传文件后，获取文件ID',
                        )
                        .optional(),
                    }),
                  )
                  .describe('资料文件列表')
                  .optional(),
              }),
            )
            .describe('个人资料')
            .optional(),
          emergency_contact_list: z
            .array(
              z.object({
                legal_name: z.string().describe('紧急联系人姓名').optional(),
                relationship: z
                  .string()
                  .describe(
                    '紧急联系人与本人亲属关系，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：emergency_contact- custom_api_name：relationship',
                  )
                  .optional(),
                phones: z
                  .array(
                    z.object({
                      international_area_code: z
                        .string()
                        .describe(
                          '国家区号，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：international_area_code',
                        ),
                      phone_number: z.string().describe('电话号码'),
                      device_type: z
                        .string()
                        .describe(
                          '设备类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：device_type',
                        ),
                      phone_usage: z
                        .string()
                        .describe(
                          '电话用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：phone- custom_api_name：phone_usage',
                        ),
                      is_primary: z.boolean().describe('主要电话，若有多个电话，只能有一个电话的「is_primary」为true'),
                      is_public: z.boolean().describe('公开电话'),
                    }),
                  )
                  .describe('电话')
                  .optional(),
                address: z
                  .object({
                    country_region_id: z
                      .string()
                      .describe(
                        '国家 / 地区，可以通过接口获得',
                      ),
                    region_id: z
                      .string()
                      .describe(
                        '主要行政区，可以通过接口获得',
                      )
                      .optional(),
                    local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                    local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                    local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                    local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                    local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                    local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                    local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                    local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                    local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                    postal_code: z.string().describe('邮政编码').optional(),
                    address_types: z
                      .array(z.string())
                      .describe(
                        '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                      ),
                    is_primary: z.boolean().describe('主要地址'),
                    is_public: z.boolean().describe('公开地址'),
                    city_id_v2: z.string().describe('城市').optional(),
                    district_id_v2: z.string().describe('区/县').optional(),
                  })
                  .describe('地址')
                  .optional(),
                email: z
                  .object({
                    email: z.string().describe('邮箱地址'),
                    is_primary: z
                      .boolean()
                      .describe('是否为主要邮箱,若有多个邮箱，只能有一个邮箱的「is_primary」为true'),
                    is_public: z.boolean().describe('是否为公开邮箱'),
                    email_usage: z
                      .string()
                      .describe(
                        '邮箱用途，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：email- custom_api_name：email_usage',
                      ),
                  })
                  .describe('邮箱')
                  .optional(),
                is_primary: z
                  .boolean()
                  .describe('主要联系人,若有多个联系人，只能有一个联系人的「is_primary」为true')
                  .optional(),
              }),
            )
            .describe('紧急联系人')
            .optional(),
          address_list: z
            .array(
              z.object({
                country_region_id: z
                  .string()
                  .describe(
                    '国家 / 地区，可以通过接口获得',
                  ),
                region_id: z
                  .string()
                  .describe(
                    '主要行政区，可以通过接口获得',
                  )
                  .optional(),
                local_address_line1: z.string().describe('地址行 1（非拉丁语系的本地文字）').optional(),
                local_address_line2: z.string().describe('地址行 2（非拉丁语系的本地文字）').optional(),
                local_address_line3: z.string().describe('地址行 3（非拉丁语系的本地文字）').optional(),
                local_address_line4: z.string().describe('地址行 4（非拉丁语系的本地文字）').optional(),
                local_address_line5: z.string().describe('地址行 5（非拉丁语系的本地文字）').optional(),
                local_address_line6: z.string().describe('地址行 6（非拉丁语系的本地文字）').optional(),
                local_address_line7: z.string().describe('地址行 7（非拉丁语系的本地文字）').optional(),
                local_address_line8: z.string().describe('地址行 8（非拉丁语系的本地文字）').optional(),
                local_address_line9: z.string().describe('地址行 9（非拉丁语系的本地文字）').optional(),
                postal_code: z.string().describe('邮政编码').optional(),
                address_types: z
                  .array(z.string())
                  .describe(
                    '地址类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：address- custom_api_name：address_type',
                  ),
                is_primary: z.boolean().describe('主要地址'),
                is_public: z.boolean().describe('公开地址'),
                city_id_v2: z.string().describe('城市').optional(),
                district_id_v2: z.string().describe('区/县').optional(),
              }),
            )
            .describe('联系地址')
            .optional(),
          marital_status: z
            .string()
            .describe(
              '婚姻状况，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：marital_status',
            )
            .optional(),
          ethnicity_race: z
            .string()
            .describe(
              '民族 / 种族，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person- custom_api_name：ethnicity_race',
            )
            .optional(),
          custom_fields: z
            .array(
              z.object({
                field_name: z.string().describe('字段名'),
                value: z
                  .string()
                  .describe(
                    '字段值，是json转义后的字符串，根据元数据定义不同，字段格式不同(123, 123.23, true, [\\"id1\\",\\"id2\\], 2006-01-02 15:04:05)',
                  ),
              }),
            )
            .describe('自定义字段')
            .optional(),
          native_region: z
            .string()
            .describe(
              '籍贯，可以通过接口获取',
            )
            .optional(),
          hukou_type: z
            .string()
            .describe(
              '户口类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：person_info_chn- custom_api_name：hukou_type',
            )
            .optional(),
          hukou_location: z.string().describe('户口所在地').optional(),
          gender_id: z
            .string()
            .describe(
              '性别，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：dependent- custom_api_name：gender',
            )
            .optional(),
          date_of_birth: z.string().describe('生日').optional(),
          date_entered_workforce: z.string().describe('参加工作日期').optional(),
          expected_graduate_date: z.string().describe('预计毕业日期').optional(),
          citizenship_status_id_list: z.array(z.string()).describe('公民身份').optional(),
          work_experience: z
            .array(
              z.object({
                company_name: z.string().describe('公司名称').optional(),
                start_time: z.string().describe('开始时间').optional(),
                end_time: z.string().describe('结束时间').optional(),
                job_title: z.string().describe('岗位').optional(),
                description: z.string().describe('工作描述').optional(),
                department: z.string().describe('部门').optional(),
              }),
            )
            .describe('工作履历')
            .optional(),
          education_info: z
            .array(
              z.object({
                school_name: z.string().describe('学校名称').optional(),
                education: z
                  .string()
                  .describe(
                    '学历，枚举值可通过文档学历（level_of_education）枚举定义获得',
                  )
                  .optional(),
                start_time: z.string().describe('开始时间').optional(),
                end_time: z.string().describe('结束时间').optional(),
                field_of_study: z.string().describe('专业').optional(),
              }),
            )
            .describe('教育经历')
            .optional(),
        })
        .describe('更新个人（person）信息')
        .optional(),
      offer_info_update: z
        .object({
          onboarding_date: z.string().describe('入职日期').optional(),
          ats_application_id: z
            .string()
            .describe(
              '招聘应用 ID，仅支持飞书招聘 ID，可以通过接口获取',
            )
            .optional(),
          onboarding_location_id: z
            .string()
            .describe(
              '入职地点ID，可以通过接口获得',
            )
            .optional(),
          onboarding_address_id: z
            .string()
            .describe(
              '入职地址ID，可以通过接口获得',
            )
            .optional(),
          office_location_id: z
            .string()
            .describe(
              '办公地点ID，可以通过接口获得',
            )
            .optional(),
          office_address_id: z
            .string()
            .describe(
              '办公地址ID，可以通过接口获得',
            )
            .optional(),
          employment_type: z
            .string()
            .describe(
              '雇佣类型，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = employment_type',
            )
            .optional(),
          onboarding_method: z
            .string()
            .describe(
              '入职方式，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = onboarding_method',
            )
            .optional(),
          work_emails: z
            .array(
              z.object({
                email: z.string().describe('邮箱地址'),
                is_primary: z.boolean().describe('是否为主要邮箱,若有多个邮箱，只能有一个邮箱的「is_primary」为true'),
                is_public: z.boolean().describe('是否为公开邮箱'),
                email_usage: z
                  .string()
                  .describe(
                    '邮箱用途，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = email- custom_api_name = email_usage',
                  ),
              }),
            )
            .describe(
              '工作邮箱，该值是一个list，会全量更新。即使只更新 list 中的某一个元素，也需要把其它元素都完整传值，否则将丢失数据',
            )
            .optional(),
          cost_center_rates: z
            .array(
              z.object({
                cost_center_id: z
                  .string()
                  .describe(
                    '成本中心 ID，可以通过接口获得',
                  )
                  .optional(),
                rate: z.number().describe('分摊比例，大于0小于等于100的正整数').optional(),
              }),
            )
            .describe('成本中心分摊信息（仅支持部门开通成本中心功能的租户）')
            .optional(),
          custom_fields: z
            .array(
              z.object({
                field_name: z.string().describe('字段名'),
                value: z.string().describe('字段值，该值是一个 string list 经转义后的字符串，具体参考请求体示例'),
              }),
            )
            .describe('自定义字段')
            .optional(),
          position_id: z.string().describe('岗位id，如需获取具体值，请联系人员档案管理员').optional(),
          probation_period: z.number().describe('试用期时长').optional(),
          probation_start_date: z.string().describe('试用期开始日期，格式："YYYY-MM-DD"').optional(),
          probation_end_date: z.string().describe('试用期结束日期，格式："YYYY-MM-DD"').optional(),
          contract_start_date: z.string().describe('合同开始日期，格式："YYYY-MM-DD"').optional(),
          contract_end_date: z.string().describe('合同结束日期，格式："YYYY-MM-DD"').optional(),
          contract_type: z
            .string()
            .describe(
              '合同类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：contract_type',
            )
            .optional(),
          duration_type_id: z
            .string()
            .describe(
              '期限类型， 枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：duration_type',
            )
            .optional(),
          signing_type_id: z
            .string()
            .describe(
              '签订类型，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：signing_type',
            )
            .optional(),
          worker_id: z.string().describe('工号').optional(),
          check_in_time: z.string().describe('签到日期，格式："YYYY-MM-DD"').optional(),
          check_in_method: z
            .string()
            .describe(
              '签到方式，枚举值可查询接口获取，按如下参数查询即可：- object_api_name：pre_hire- custom_api_name：onboarding_method',
            )
            .optional(),
          company: z
            .string()
            .describe(
              '公司主体，可以通过接口查询',
            )
            .optional(),
          work_shift: z
            .string()
            .describe(
              '排班，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = work_shift',
            )
            .optional(),
          recruitment_type_id: z
            .string()
            .describe(
              '招聘类型，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = recruitment_type',
            )
            .optional(),
          compensation_type: z
            .string()
            .describe(
              '薪资类型，枚举值可查询接口获取，按如下参数查询即可： - object_api_name = pre_hire- custom_api_name = compensation_type',
            )
            .optional(),
          pay_group_id: z.string().describe('薪资组，如需获取具体值，请联系人员档案管理员').optional(),
          offer_hr_id: z
            .string()
            .describe(
              'Offer HR 雇佣ID，可以通过接口获取',
            )
            .optional(),
          job_id: z
            .string()
            .describe('职务 ID，可以通过接口获取')
            .optional(),
          job_family_id: z
            .string()
            .describe(
              '序列 ID，可以通过接口获取',
            )
            .optional(),
          job_level_id: z
            .string()
            .describe(
              '职级 ID，可以通过接口获取',
            )
            .optional(),
          job_grade_id: z
            .string()
            .describe('职等ID，可以通过接口获取')
            .optional(),
          employee_type_id: z
            .string()
            .describe(
              '人员类型 ID，可以通过接口获取',
            )
            .optional(),
          employee_subtype_id: z.string().describe('人员子类型').optional(),
          direct_leader_id: z
            .string()
            .describe(
              '直属上级，可以通过接口获取',
            )
            .optional(),
          dotted_line_manager_id: z
            .string()
            .describe(
              '虚线上级，可以通过接口获取详情- 功能灰度中，如有需求请联系',
            )
            .optional(),
          department_id: z
            .string()
            .describe(
              '部门 ID，可以通过接口获取',
            )
            .optional(),
          social_security_city: z
            .string()
            .describe(
              '社保城市ID，可以通过接口获得',
            )
            .optional(),
          work_location_id: z
            .string()
            .describe(
              '工作地点ID，可以通过接口获得',
            )
            .optional(),
          working_calendar: z
            .string()
            .describe(
              '工作日历，可以通过接口获得',
            )
            .optional(),
          working_hours_type: z
            .string()
            .describe(
              '工时制度，可以通过接口获得',
            )
            .optional(),
          seniority_date: z.string().describe('司龄起算日期').optional(),
          seniority_adjust_information_list: z
            .array(
              z.object({
                seniority_adjustment: z
                  .number()
                  .describe(
                    '调整值- 精确度：两位小数- 单位：年- 自动计算逻辑：如果这个值为空，司龄调整的开始日期和结束日期均不为空，会自动计算出调整值',
                  )
                  .optional(),
                seniority_adjustment_type: z
                  .enum(['decrease', 'increase'])
                  .describe(
                    '调整类型- 可通过接口查询，查询参数如下： - object_api_name：seniority_adjust_information - custom_api_name：seniority_adjustment_type Options:decrease(减少),increase(增加)',
                  ),
                reasons_for_seniority_adjustment: z.string().describe('司龄调整原因').optional(),
                start_date: z.string().describe('开始日期- 格式： yyyy-mm-dd').optional(),
                end_date: z.string().describe('结束日期- 格式： yyyy-mm-dd').optional(),
              }),
            )
            .describe('司龄调整信息- 功能灰度中，如有需求请联系')
            .optional(),
          notice_period_probation_voluntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '试用期内通知期（主动离职)- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_probation_involuntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '试用期内通知期（被动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_positive_voluntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '转正后通知期（主动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          notice_period_positive_involuntary: z
            .object({
              wk_id: z.string().describe('ID').optional(),
              value: z.number().describe('数值').optional(),
              value_unit: z.string().describe('单位').optional(),
            })
            .describe(
              '转正后通知期（被动离职）- 功能灰度中，如有需求请联系',
            )
            .optional(),
          condition_worker: z.boolean().describe('是否外部人员').optional(),
          company_sponsored_visa: z.boolean().describe('需要公司办理签证').optional(),
          weekly_working_hours_v2: z.number().describe('周工作时长（单位：小时）').optional(),
          work_station: z.string().describe('工位').optional(),
          service_company: z
            .string()
            .describe(
              '任职公司，可以通过接口查询',
            )
            .optional(),
          non_compete_covenant: z.boolean().describe('是否包含竞业条款').optional(),
        })
        .describe('更新待入职（prehire）信息')
        .optional(),
      standard_update_fields: z
        .array(z.string())
        .describe(
          '指定需要更新的系统字段，只支持最多下钻一层，格式如下： - basic_info_update字段：basic_info_update.names（对name整体进行覆盖更新）；basic_info_update.emails（对邮箱整体进行更新） - offer_info_update字段：offer_info_update.onboarding_method注意，如果指定了要更新的系统字段但是没有在结构体中传对应的值，那么就会清空该字段的值',
        )
        .optional(),
      custom_update_fields: z
        .array(z.string())
        .describe(
          '指定需要更新的pre_hire对象上的自定义字段，可以通过接口获得注意：如果指定了要更新的自定义字段但是没有在结构体中传对应的值，那么就会清空该字段的值',
        )
        .optional(),
      person_custom_update_fields: z
        .array(z.string())
        .describe(
          '指定需要更新的person对象上的自定义字段，可以通过接口获得注意：如果指定了要更新的自定义字段但是没有在结构体中传对应的值，那么就会清空该字段的值',
        )
        .optional(),
    }),
    path: z.object({
      pre_hire_id: z
        .string()
        .describe(
          '待入职ID，可以通过接口获得',
        ),
    }),
  },
};
export const corehrV2PreHireQuery = {
  project: 'corehr',
  name: 'corehr.v2.preHire.query',
  sdkName: 'corehr.v2.preHire.query',
  path: '/open-apis/corehr/v2/pre_hires/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-查询待入职信息-该接口用于根据待入职人员 ID(支持批量)查询待入职人员信息，信息包含姓名、手机号等个人信息和任职信息。- 延迟说明：数据库主从延迟 2s 以内，即：直接创建待入职后2s内调用此接口可能查询不到数据。- 性能说明：本接口返回数据量较多，查询时请控制每批次数量（<10）和适当减少查询字段数(<50)',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      pre_hire_ids: z.array(z.string()).describe('待入职人员 ID 列表').optional(),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，填写方式：- 为空时只返回 pre_hire_id- 不为空时按照传入的字段返回数据，数据结构可以参考response的数据结构，格式示例如下： - person_info（个人信息） 字段：person_info.gender，person_info.age - employment_info（雇佣信息） 字段：employment_info.department - onboarding_info（入职信息） 字段：onboarding_info.onboarding_date - probation_info（试用期信息） 字段：probation_info.probation_period - contract_info（合同信息） 字段：contract_info.contract_type- 如果要返回所有下级，只用传上级结构体名称，例如 person_info- 返回数据越多，查询接口性能越慢，请按需填写返回字段',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 10'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2PreHireRestoreFlowInstance = {
  project: 'corehr',
  name: 'corehr.v2.preHire.restoreFlowInstance',
  sdkName: 'corehr.v2.preHire.restoreFlowInstance',
  path: '/open-apis/corehr/v2/pre_hires/restore_flow_instance',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-恢复入职-通过本接口对指定已撤销的待入职员工执行恢复入职操作，对应入职管理页面恢复入职按钮',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      pre_hire_id: z
        .string()
        .describe('待入职ID,可从接口获取'),
      confirm_workforce: z.boolean().describe('是否强制占编；true为强制占编；false为非强制占编').optional(),
    }),
  },
};
export const corehrV2PreHireSearch = {
  project: 'corehr',
  name: 'corehr.v2.preHire.search',
  sdkName: 'corehr.v2.preHire.search',
  path: '/open-apis/corehr/v2/pre_hires/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-搜索待入职信息-该接口用于根据工号/待入职人员 ID /入职地点等查询条件搜索待入职人员信息。- 查询的待入职数量及字段越多，耗时越久，使用时建议细化指定需要的字段。- 创建待入职后，会有5秒内的数据延迟导致搜索不到数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      worker_ids: z.array(z.string()).describe('待入职人员工号列表，如果不填写，则不根据工号过滤待入职数据').optional(),
      pre_hire_ids: z.array(z.string()).describe('待入职人员 ID 列表，如果不填写，则搜索全部待入职').optional(),
      person_ids: z
        .array(z.string())
        .describe(
          '个人信息 ID 列表，可以通过获取',
        )
        .optional(),
      onboarding_date_start: z
        .string()
        .describe(
          '入职日期（搜索的起始时间），需要与入职日期（onboarding_date_end）一同使用，不填写则不根据入职日期过滤',
        )
        .optional(),
      onboarding_date_end: z
        .string()
        .describe(
          '入职日期（搜索的结束时间），需要与入职日期（onboarding_date_start）一同使用，不填写则不根据入职日期过滤',
        )
        .optional(),
      updated_date_start: z
        .string()
        .describe(
          '待入职数据更新时间（搜索的起始时间），需要与更新时间（updated_date_end）一同使用，不填写则不根据数据更新时间过滤',
        )
        .optional(),
      updated_date_end: z
        .string()
        .describe(
          '待入职数据更新时间（搜索的结束时间），需要与更新时间（updated_date_start）一同使用，不填写则不根据数据更新时间过滤',
        )
        .optional(),
      onboarding_location_ids: z
        .array(z.string())
        .describe(
          '入职地点 ID 列表，可通过接口获取',
        )
        .optional(),
      onboarding_status: z
        .enum(['preboarding', 'deleted', 'day_one', 'withdrawn', 'completed'])
        .describe(
          '入职状态，不填写则搜索全部入职状态的数据。 Options:preboarding(待入职),deleted(已删除),day_one(DayOne 准备就绪),withdrawn(已撤销),completed(已完成)',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '部门 ID 列表，ID类型与查询参数 department_id_type的取值保持一致，ID值可以通过接口获取ID转换：支持根据department_id_type进行ID转换，返回department_id_type对应的类型的ID',
        )
        .optional(),
      direct_manager_ids: z
        .array(z.string())
        .describe(
          '直接上级的雇佣 ID 列表，ID类型与查询参数user_id_type的取值保持一致，可以通过接口获取ID转换：支持根据user_id_type进行ID转换，返回user_id_type对应的类型的ID',
        )
        .optional(),
      employee_type_ids: z
        .array(z.string())
        .describe(
          '人员类型 ID 列表，可以通过接口获取',
        )
        .optional(),
      employee_subtype_ids: z.array(z.string()).describe('人员子类型 ID 列表').optional(),
      job_family_ids: z
        .array(z.string())
        .describe(
          '序列 ID 列表，可以通过接口获取',
        )
        .optional(),
      key_word: z.string().describe('搜索关键字，支持对常用名模糊搜索 + 工号精确搜索，不填写则搜索全部数据').optional(),
      rehire: z
        .enum(['to_be_confirmed', 'no', 'yes'])
        .describe('是否离职重聘，不填写则搜索全部数据。 Options:to_be_confirmed(ToBeConfirmed 待确认),no(否),yes(是)')
        .optional(),
      fields: z
        .array(z.string())
        .describe(
          '返回数据的字段列表，填写方式：- 为空时只返回 pre_hire_id- 不为空时按照传入的字段返回数据，格式如下： - person_info 字段：person_info.gender，person_info.age - employment_info 字段：employment_info.department - onboarding_info 字段：onboarding_info.onboarding_date - probation_info 字段：probation_info.probation_period - contract_info 字段：contract_info.contract_type- 如果要返回所有下级，只用传上级结构体名称，例如 person_info- 返回数据越多，查询接口性能越慢，请按需填写返回字段',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2PreHireTransitTask = {
  project: 'corehr',
  name: 'corehr.v2.preHire.transitTask',
  sdkName: 'corehr.v2.preHire.transitTask',
  path: '/open-apis/corehr/v2/pre_hires/:pre_hire_id/transit_task',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-入职-流转入职任务-配置入职流程后，可通过本接口流转进行中的任务',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      task_id: z
        .string()
        .describe(
          '任务标识码。- 对于系统内置的任务，标识码与任务名称的对应关系如下所示： > 其中 **创建账户SSO** 为隐藏的任务节点，在 **个人信息** 前自动执行。 - 1：职位信息 - 2：个人信息 - 3：创建账户SSO - 4：签到 - 9：签署入职文件- 对于自定义的任务节点（如：3095697a-065f-4627-a47c-46fe958a6754），名称的获取方式如下所示： 1. 通过 `pre_hire_id` 调用接口或 2. 查询字段 `fields` 中添加 `onboarding_info.onboarding_task_list` 查询后返回的 onboarding_task_list 结构体中包含标识码和任务名字的对应关系，示例如下所示：```json{ "onboarding_task_list": [ { "task_code": "3095697a-065f-4627-a47c-46fe958a6754", "task_name": "修改入职日期", "task_status": "uninitialized" }, { "task_code": "d37b9d7c-232d-4a55-98fa-541318234ede", "task_name": "工签补充任务", "task_status": "uninitialized" } ]}```',
        ),
    }),
    path: z.object({
      pre_hire_id: z
        .string()
        .describe('待入职ID，可从接口获取'),
    }),
  },
};
export const corehrV2PreHireWithdrawOnboarding = {
  project: 'corehr',
  name: 'corehr.v2.preHire.withdrawOnboarding',
  sdkName: 'corehr.v2.preHire.withdrawOnboarding',
  path: '/open-apis/corehr/v2/pre_hires/withdraw_onboarding',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-入职-撤销入职-通过本接口对指定待入职，入职准备就绪的员工执行撤销入职操作，对应入职管理页面撤销入职按钮',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      pre_hire_id: z
        .string()
        .describe(
          '待入职ID，可以通过接口获得',
        ),
      withdraw_reason: z.string().describe('撤销原因，上限为500字'),
    }),
  },
};
export const corehrV2ProbationAssessmentCreate = {
  project: 'corehr',
  name: 'corehr.v2.probationAssessment.create',
  sdkName: 'corehr.v2.probationAssessment.create',
  path: '/open-apis/corehr/v2/probation/assessments',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-试用期-新增试用期考核信息-新增员工试用期考核结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z.string().describe('试用期人员的雇佣 ID'),
      assessments: z
        .array(
          z.object({
            assessment_status: z
              .enum(['not_started', 'in_process', 'completed', 'no_need'])
              .describe('考核状态 Options:not_started(未开始),in_process(进行中),completed(已完成),no_need(无需考核)'),
            assessment_result: z
              .enum(['approved', 'rejected'])
              .describe('试用期考核结果 Options:approved(通过),rejected(不通过)')
              .optional(),
            assessment_score: z.number().describe('考核得分').optional(),
            assessment_grade: z
              .string()
              .describe(
                '试用期考核等级，枚举值 api_name 可通过接口查询，查询参数如下：- object_api_name = "probation_management"- custom_api_name = "final_assessment_grade"',
              )
              .optional(),
            assessment_comment: z.string().describe('考核评语').optional(),
            assessment_detail: z.string().describe('考核结果页面超链接').optional(),
            is_final_asssessment: z.boolean().describe('是否为最终考核结果'),
          }),
        )
        .describe('试用期考核结果列表'),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2ProbationAssessmentDelete = {
  project: 'corehr',
  name: 'corehr.v2.probationAssessment.delete',
  sdkName: 'corehr.v2.probationAssessment.delete',
  path: '/open-apis/corehr/v2/probation/assessments/:assessment_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书人事（企业版）-试用期-删除试用期考核信息-删除试用期的考核结果',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ assessment_id: z.string().describe('考核结果 ID') }),
  },
};
export const corehrV2ProbationAssessmentPatch = {
  project: 'corehr',
  name: 'corehr.v2.probationAssessment.patch',
  sdkName: 'corehr.v2.probationAssessment.patch',
  path: '/open-apis/corehr/v2/probation/assessments/:assessment_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书人事（企业版）-试用期-更新试用期考核信息-更新试用期的考核结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      assessment_status: z
        .enum(['not_started', 'in_process', 'completed', 'no_need'])
        .describe('考核状态 Options:not_started(未开始),in_process(进行中),completed(已完成),no_need(无需考核)'),
      assessment_result: z
        .enum(['approved', 'rejected'])
        .describe('试用期考核结果 Options:approved(通过),rejected(不通过)')
        .optional(),
      assessment_score: z.number().describe('考核得分').optional(),
      assessment_grade: z
        .string()
        .describe(
          '试用期考核等级，枚举值 api_name 可通过接口查询，查询参数如下：- object_api_name = "probation_management"- custom_api_name = "final_assessment_grade"',
        )
        .optional(),
      assessment_comment: z.string().describe('考核评语').optional(),
      assessment_detail: z.string().describe('考核结果页面超链接').optional(),
      is_final_asssessment: z.boolean().describe('是否为最终考核结果'),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
    }),
    path: z.object({ assessment_id: z.string().describe('考核结果 ID') }),
  },
};
export const corehrV2ProbationEnableDisableAssessment = {
  project: 'corehr',
  name: 'corehr.v2.probation.enableDisableAssessment',
  sdkName: 'corehr.v2.probation.enableDisableAssessment',
  path: '/open-apis/corehr/v2/probation/enable_disable_assessment',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-试用期-启用/停用试用期考核功能-启用/停用试用期考核功能，启用后系统功能中针对试用期考核相关的字段会自动启用，并可通过接口更新试用期考核结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      active: z.boolean().describe('启用 / 停用状态。启用后可在试用期管理页面中可见试用期考核相关的字段'),
      app_url: z.string().describe('试用期考核系统入口链接，当启用功能时该字段必填').optional(),
    }),
  },
};
export const corehrV2ProbationSearch = {
  project: 'corehr',
  name: 'corehr.v2.probation.search',
  sdkName: 'corehr.v2.probation.search',
  path: '/open-apis/corehr/v2/probation/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-试用期-搜索试用期信息-搜索试用期信息，创建试用期后立刻搜索，可能会存在 5s 左右延迟',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_ids: z
        .array(z.string())
        .describe(
          '雇佣 ID 列表，可通过接口获取',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '部门 ID 列表，可通过接口获取',
        )
        .optional(),
      probation_start_date_start: z
        .string()
        .describe('试用期开始日期 - 搜索范围开始，需要与搜索范围结束一同使用，格式："YYYY-MM-DD"')
        .optional(),
      probation_start_date_end: z.string().describe('试用期开始日期 - 搜索范围结束，格式："YYYY-MM-DD"').optional(),
      probation_expected_end_date_start: z
        .string()
        .describe('试用期预计结束日期 - 搜索范围开始，需要与搜索范围结束一同使用，格式："YYYY-MM-DD"')
        .optional(),
      probation_expected_end_date_end: z
        .string()
        .describe('试用期预计结束日期 - 搜索范围结束，格式："YYYY-MM-DD"')
        .optional(),
      actual_probation_end_date_start: z
        .string()
        .describe('试用期实际结束日期 - 搜索范围开始，需要与搜索范围结束一同使用，格式："YYYY-MM-DD"')
        .optional(),
      actual_probation_end_date_end: z
        .string()
        .describe('试用期实际结束日期 - 搜索范围结束，格式："YYYY-MM-DD"')
        .optional(),
      initiating_time_start: z
        .string()
        .describe('转正发起日期 - 搜索范围开始，需要与搜索范围结束一同使用，格式："YYYY-MM-DD"')
        .optional(),
      initiating_time_end: z.string().describe('转正发起日期 - 搜索范围结束，格式："YYYY-MM-DD"').optional(),
      probation_status: z
        .enum(['pending', 'rejected', 'waiting', 'approved', 'converted', 'offboarded'])
        .describe(
          '试用期状态 Options:pending(审批中),rejected(已拒绝),waiting(待发起转正),approved(审批通过),converted(已转正),offboarded(已离职)',
        )
        .optional(),
      final_assessment_result: z
        .enum(['approved', 'rejected'])
        .describe('试用期最终考核结果 Options:approved(通过),rejected(不通过)')
        .optional(),
      final_assessment_grade: z
        .string()
        .describe(
          '试用期最终考核等级，枚举值 api_name 可通过接口查询，查询参数如下：- object_api_name：probation_management- custom_api_name：final_assessment_grade<b>字段权限要求：</b> 按照试用期考核等级搜索 (corehr:probation.grade.search:read)',
        )
        .optional(),
    }),
    params: z.object({
      page_size: z.number().describe('分页大小，最大 100'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
  },
};
export const corehrV2ProbationSubmit = {
  project: 'corehr',
  name: 'corehr.v2.probation.submit',
  sdkName: 'corehr.v2.probation.submit',
  path: '/open-apis/corehr/v2/probation/submit',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-试用期-发起转正-通过本接口可以为员工发起转正',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '试用期人员的雇佣 ID，可通过接口获取',
        ),
      conversion_mode: z.number().describe('转正方式 Options:1(直接转正),2(发起转正)'),
      actual_probation_end_date: z
        .string()
        .describe(
          '实际结束日期，如果为空则默认填入试用期预计结束日期，填入日期需满足：试用期开始时间 <= 实际结束日期 <= 试用期预计结束日期，格式："YYYY-MM-DD"',
        )
        .optional(),
      submission_type: z
        .enum(['self_submission', 'system', 'hr_submission'])
        .describe('发起方 Options:self_submission(员工),system(系统),hr_submission(HR)'),
      initiator_id: z
        .string()
        .describe(
          '发起人 ID，当发起方为 HR 时填写，为其他发起方时该字段会自动计算，可通过接口获取',
        )
        .optional(),
      notes: z.string().describe('备注，当为直接转正时必填').optional(),
      self_review: z.string().describe('员工自评').optional(),
      custom_fields: z
        .array(
          z.object({
            custom_api_name: z.string().describe('自定义字段 apiname，即自定义字段的唯一标识'),
            name: z
              .object({ zh_cn: z.string().describe('中文').optional(), en_us: z.string().describe('英文').optional() })
              .describe('自定义字段名称（无需填写）')
              .optional(),
            type: z.number().describe('自定义字段类型（无需填写）').optional(),
            value: z
              .string()
              .describe(
                '字段值，是 json 转义后的字符串，根据元数据定义不同，字段格式不同，不同类型字段传值格式如下- 文本，示例："你好"- 超链接，示例："https://www.baidu.com/"- 数字，示例："123"- 布尔，示例："true"- 单选，示例："option1"- 多选，示例："[\\"option1\\", \\"option2\\"]"- 人员（单选），示例："7140964208476371111"- 人员（多选），示例："[\\"7140964208476371111\\", \\"7140964208476371112\\"]"- 日期，示例："2025-01-01"',
              ),
          }),
        )
        .describe('自定义字段（试用期中如果有附件自定义字段，当前不支持使用「上传文件」接口写入）')
        .optional(),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2ProbationWithdraw = {
  project: 'corehr',
  name: 'corehr.v2.probation.withdraw',
  sdkName: 'corehr.v2.probation.withdraw',
  path: '/open-apis/corehr/v2/probation/withdraw',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书人事（企业版）-试用期-撤销转正-可通过本接口撤销对员工之前发起的转正',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z
        .string()
        .describe(
          '试用期人员的雇佣 ID，可通过接口获取',
        ),
    }),
    params: z.object({
      client_token: z.string().describe('根据 client_token 是否一致来判断是否为同一请求').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const corehrV2ProcessRevokeUpdate = {
  project: 'corehr',
  name: 'corehr.v2.processRevoke.update',
  sdkName: 'corehr.v2.processRevoke.update',
  path: '/open-apis/corehr/v2/process_revoke/:process_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-流程实例-撤销流程-撤销单个流程，状态为已完成的流程能够进行撤销，使用时需指定操作人，目前支持流程管理员和审批单管理员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('按照查询参数中指定的用户ID类型传递对应的用户ID，默认为Open ID').optional(),
      reason: z.string().describe('原因').optional(),
      system_user: z.boolean().describe('true-系统身份操作').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例 ID。可通过接口获取',
        ),
    }),
  },
};
export const corehrV2ProcessWithdrawUpdate = {
  project: 'corehr',
  name: 'corehr.v2.processWithdraw.update',
  sdkName: 'corehr.v2.processWithdraw.update',
  path: '/open-apis/corehr/v2/process_withdraw/:process_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-流程实例-撤回流程-对状态为“审批中”的单个审批实例进行撤回操作，撤回后审批流程结束',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z
        .string()
        .describe('按照查询参数中指定的用户ID类型传递对应的用户ID，默认为Open ID。如果system_user为true，此字段可不填')
        .optional(),
      reason: z.string().describe('原因').optional(),
      system_user: z.boolean().describe('是否以系统身份操作，如果为false，则user_id必填').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例ID。可通过接口获取',
        ),
    }),
  },
};
export const corehrV2ProcessApproverUpdate = {
  project: 'corehr',
  name: 'corehr.v2.processApprover.update',
  sdkName: 'corehr.v2.processApprover.update',
  path: '/open-apis/corehr/v2/processes/:process_id/approvers/:approver_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-审批任务-通过/拒绝审批任务-对于单个审批任务进行通过（提交）或拒绝操作。对于多人或签节点，一个审批任务通过则整个节点通过；对于多人会签节点，所有审批任务通过则节点通过。在通过（提交）时，若表单中有必填字段，支持写入表单字段',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      status: z.number().describe('将审批任务修改为同意/拒绝 Options:2(Approved 拒绝),3(Rejected 通过)'),
      user_id: z
        .string()
        .describe(
          '用户id，按user_id_type类型传递。如果system_approval为false，则必填审批任务“approver_id”对应的原审批人的user_id；为true时非必填',
        )
        .optional(),
      system_approval: z
        .boolean()
        .describe(
          '是否为系统身份审批。true - 使用系统身份审批，若使用系统身份，将代替approver_id对应的原审批人进行审批，原审批人将失去审批任务的查看权限；false - 按照所传的人员身份审批',
        )
        .optional(),
      reason: z.string().describe('通过原因，长度限制为500**默认值**：""').optional(),
      field_values_v2: z
        .array(
          z.object({
            variable_api_name: z
              .string()
              .describe(
                '变量唯一标识，可通过查询变量',
              )
              .optional(),
            variable_value: z
              .object({
                text_value: z.string().describe('文本值').optional(),
                bool_value: z.boolean().describe('布尔值').optional(),
                number_value: z.string().describe('数字值').optional(),
                enum_value: z.string().describe('枚举值，这里是枚举的id').optional(),
                date_value: z.string().describe('从 1970 开始的天数').optional(),
                date_time_value: z.string().describe('时间戳，毫秒').optional(),
                i18n_value: z
                  .object({
                    zh_cn: z.string().describe('中文值').optional(),
                    en_us: z.string().describe('英文值').optional(),
                  })
                  .describe('多语字段值')
                  .optional(),
                object_value: z
                  .object({
                    wk_id: z
                      .string()
                      .describe(
                        '飞书人事主数据对象唯一标识。例如：wk_api_name为"job"时，wk_id代表职务ID。详请可参考wk_api_name为"job_level"时，wk_id代表职级ID。详情可参考',
                      )
                      .optional(),
                    wk_api_name: z
                      .string()
                      .describe(
                        '飞书人事元数据对象的唯一标识。例如：职务的wk_api_name为"job"；职级的wk_api_name为"job_level"；如需获取更多对象信息，可查询接口',
                      )
                      .optional(),
                  })
                  .describe('对象值')
                  .optional(),
                department_value: z
                  .string()
                  .describe(
                    '部门id，根据查询参数department_id_type类型选择对应的部门id。可通过 或 接口查询详情',
                  )
                  .optional(),
                employment_value: z
                  .string()
                  .describe(
                    '员工类型字段值，为用户id，根据入参选择的user_id_type类型返回的用户id。可通过 或 接口查询详情',
                  )
                  .optional(),
                list_values: z
                  .array(z.string())
                  .describe('数组类型值，里面包含多个值，每个元素都对应sub_values中的key')
                  .optional(),
                file_value: z
                  .object({
                    open_file_id: z
                      .string()
                      .describe(
                        '通过获得的id',
                      )
                      .optional(),
                    file_name: z.string().describe('文件名称').optional(),
                    length: z.number().describe('文件大小，单位：Byte').optional(),
                  })
                  .describe('文件类型字段值')
                  .optional(),
              })
              .describe('变量值')
              .optional(),
            sub_values: z
              .array(
                z.object({
                  key: z.string().describe('用于关联list_values和record_values类型变量值中的key').optional(),
                  value: z
                    .object({
                      text_value: z.string().describe('文本值').optional(),
                      bool_value: z.boolean().describe('布尔值').optional(),
                      number_value: z.string().describe('数字值').optional(),
                      enum_value: z.string().describe('枚举值，这里是枚举的id').optional(),
                      date_value: z.string().describe('从 1970 开始的天数').optional(),
                      date_time_value: z.string().describe('时间戳，毫秒').optional(),
                      i18n_value: z
                        .object({
                          zh_cn: z.string().describe('中文值').optional(),
                          en_us: z.string().describe('英文值').optional(),
                        })
                        .describe('多语字段值')
                        .optional(),
                      object_value: z
                        .object({
                          wk_id: z
                            .string()
                            .describe(
                              '飞书人事主数据对象唯一标识。例如：wk_api_name为"job"时，wk_id代表职务ID。详请可参考wk_api_name为"job_level"时，wk_id代表职级ID。详情可参考',
                            )
                            .optional(),
                          wk_api_name: z
                            .string()
                            .describe(
                              '飞书人事元数据对象的唯一标识。例如：职务的wk_api_name为"job"；职级的wk_api_name为"job_level"；如需获取更多对象信息，可查询接口',
                            )
                            .optional(),
                        })
                        .describe('对象值，包括对象id和对象类型')
                        .optional(),
                      department_value: z
                        .string()
                        .describe(
                          '部门id，根据查询参数department_id_type类型选择对应的部门id。可通过 或 接口查询详情',
                        )
                        .optional(),
                      employment_value: z
                        .string()
                        .describe(
                          '员工类型字段值，为用户id，根据入参选择的user_id_type类型返回的用户id。可通过 或 接口查询详情',
                        )
                        .optional(),
                      list_values: z
                        .array(z.string())
                        .describe('数组类型值，里面包含多个值，每个元素都对应sub_values中的key')
                        .optional(),
                      file_value: z
                        .object({
                          open_file_id: z
                            .string()
                            .describe(
                              '通过获得的id',
                            )
                            .optional(),
                          file_name: z.string().describe('文件名称').optional(),
                          length: z.number().describe('文件大小，单位：Byte').optional(),
                        })
                        .describe('文件类型字段值')
                        .optional(),
                    })
                    .describe('变量值')
                    .optional(),
                }),
              )
              .describe('在list_values和record_values中引用的变量')
              .optional(),
          }),
        )
        .describe('表单数据')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例id，是一个流程的唯一标识。可通过接口返回的 process_ids 字段获取',
        ),
      approver_id: z
        .string()
        .describe(
          '标识流程中一个审批节点的一个审批人的审批任务。同一个审批节点如果有多个审批人，不同审批人的 approver_id 不同。可通过 接口获取流程中各审批任务的 approver_id',
        ),
    }),
  },
};
export const corehrV2ProcessExtraUpdate = {
  project: 'corehr',
  name: 'corehr.v2.processExtra.update',
  sdkName: 'corehr.v2.processExtra.update',
  path: '/open-apis/corehr/v2/processes/:process_id/extra',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-审批任务-加签审批任务-给单个流程中的节点或审批任务加签，加签方式有前加签、并加签、后加签三种',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator: z
        .string()
        .describe('操作人，按user_id_type类型传递；如果system_user为true，则此字段可以不填')
        .optional(),
      node_id: z.string().describe('流程节点id，与approver_id二选一传入，都传以node_id为准').optional(),
      approver_id: z
        .string()
        .describe(
          '标识流程中一个审批节点的一个审批人的审批任务。同一个审批节点如果有多个审批人，不同审批人的 approver_id 不同。可通过 接口获取流程中各审批任务的 approver_id。与node_id二选一传入，都传以node_id为准',
        )
        .optional(),
      extra_type: z.number().describe('加签方式 Options:0(PreExtra 前加签),1(CurrentExtra 并加签),2(PostExtra 后加签)'),
      approval_type: z
        .number()
        .describe(
          '多人加签时的审批方式，需要注意当extra_type为并加签时，此处只能选择会签 Options:0(OR 或签),1(AND 会签)',
        )
        .optional(),
      extra_user_ids: z.array(z.string()).describe('加签人员id列表'),
      remark: z.string().describe('备注').optional(),
      system_user: z.boolean().describe('是否以系统身份操作，如果为false，则operator必填').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例id，是一个流程的唯一标识。可通过接口返回的 process_ids 字段获取',
        ),
    }),
  },
};
export const corehrV2ProcessFormVariableDataGet = {
  project: 'corehr',
  name: 'corehr.v2.processFormVariableData.get',
  sdkName: 'corehr.v2.processFormVariableData.get',
  path: '/open-apis/corehr/v2/processes/:process_id/form_variable_data',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-流程实例-获取流程表单数据-根据流程实例 id（process_id）获取流程表单字段数据，包括表单里的业务字段和自定义字段。仅支持飞书人事、假勤相关业务流程。注： 文档已移动到【历史版本】目录',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_corehr_department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门),people_corehr_department_id(以 people_corehr_department_id 来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例id，是一个流程的唯一标识。可通过接口返回的 process_ids 字段获取',
        ),
    }),
  },
};
export const corehrV2ProcessGet = {
  project: 'corehr',
  name: 'corehr.v2.process.get',
  sdkName: 'corehr.v2.process.get',
  path: '/open-apis/corehr/v2/processes/:process_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-流程实例-获取单个流程详情-根据流程实例 id（process_id）获取单个流程详情。比如流程状态、流程发起人、流程发起时间、流程摘要、流程里的所有待办、已办、抄送任务等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例ID。可通过接口获取',
        ),
    }),
  },
};
export const corehrV2ProcessList = {
  project: 'corehr',
  name: 'corehr.v2.process.list',
  sdkName: 'corehr.v2.process.list',
  path: '/open-apis/corehr/v2/processes',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-流程实例-查询流程实例列表-本接口用于查询流程实例列表，支持通过流程定义 ID 等进行查询，其中：- 流程实例：是指用户在业务功能或者飞书人事的审批中心发起的具体流程，process_id 是其唯一标识。- 流程定义：是指管理员在设置侧配置的流程，类似流程模板，flow_definition_id 是其唯一标识。用户发起的流程是按照对应的流程定义的配置生成',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      statuses: z
        .array(z.number())
        .describe(
          '查询流程状态列表。如需一次查询多个状态值,可通过将同一参数名多次传递,并且每次传递不同的参数值。例如:https://{url}?statuses=1&statuses=2可选值：- 1：进行中- 2：已拒绝- 4：已撤回- 8：已撤销- 9：已完成- 15：撤销中',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小'),
      modify_time_from: z
        .string()
        .describe(
          '任务查询开始时间，闭区间单位：ms。从 1970 年 1 月 1 日 (UTC/GMT的午夜) 开始经过的毫秒数注意：开始时间和结束时间跨度要小于 31 天',
        ),
      modify_time_to: z
        .string()
        .describe(
          '任务查询结束时间，闭区间单位：ms。从 1970 年 1 月 1 日 (UTC/GMT的午夜) 开始经过的毫秒数注意：开始时间和结束时间跨度要小于 31 天',
        ),
      flow_definition_id: z
        .string()
        .describe(
          '流程定义ID可通过查询流程实例对应的流程定义ID',
        )
        .optional(),
    }),
  },
};
export const corehrV2ProcessTransferUpdate = {
  project: 'corehr',
  name: 'corehr.v2.processTransfer.update',
  sdkName: 'corehr.v2.processTransfer.update',
  path: '/open-apis/corehr/v2/processes/:process_id/transfer',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-流程-审批任务-转交审批任务-对于单个审批任务进行转交操作。转交后审批流程流转给被转交人',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator: z
        .string()
        .describe('操作人，按user_id_type类型传递；如果system_user为true，则此字段可以不填')
        .optional(),
      to_user_id: z.string().describe('被转交人，按user_id_type类型传递'),
      approver_ids: z
        .array(z.string())
        .describe(
          '待转交审批任务id列表同一个审批节点如果有多个审批人，不同审批人的 approver_id 不同。可通过 接口获取流程中各审批任务的 approver_id',
        ),
      remark: z.string().describe('备注').optional(),
      system_user: z.boolean().describe('是否以系统身份操作，如果为fasle，则operator必填').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      process_id: z
        .string()
        .describe(
          '流程实例id，是一个流程的唯一标识。可通过接口返回的 process_ids 字段获取',
        ),
    }),
  },
};
export const corehrV2ReportDetailRowBatchDelete = {
  project: 'corehr',
  name: 'corehr.v2.reportDetailRow.batchDelete',
  sdkName: 'corehr.v2.reportDetailRow.batchDelete',
  path: '/open-apis/corehr/v2/report_detail_row/batchDelete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-批量删除填报行-批量删除填报行后，可在【设置-编制规划设置-编制规划XXX-集中填报-查看数据】进行查看',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z.string().describe('编制规划id，可在「设置-编制规划设置-编制规划XXX-页面URL」中解析到'),
      centralized_reporting_project_id: z
        .string()
        .describe('集中填报id，可在「设置-编制规划设置-编制规划XXX-集中填报XXX-查看数据」中解析到'),
      items: z
        .array(
          z.object({
            dimensions: z
              .array(
                z.object({
                  dimension_key: z
                    .string()
                    .describe(
                      '维度key，可从下面列表中进行选择：- "department"：部门。- "employee_type" ：人员类型。- "location"：地点。- "position" ：岗位。- "cost_center" ：成本中心/业务线。- "job_family" ：序列。- "job_level" ：职级。- "job" ：职务。自定义组织：- "custom_org_01" - "custom_org_02"- "custom_org_03"- "custom_org_04" - "custom_org_05"',
                    ),
                  dimension_value: z
                    .string()
                    .describe(
                      '维度value。- department_id：可从获得。- location_id：可从获得。- cost_center_id：可从获得。- job_id：可从获得。- job_level_id：可从获得。- job_family_id：可从获得。- employee_type_id：可从获得。- position_id：岗位，功能灰度中，如有需求请联系技术支持- custom_org_01_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_02_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_03_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_04_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_05_id：自定义组织，功能灰度中，有需要请联系技术支持',
                    ),
                }),
              )
              .describe(
                '集中填报的维度信息要和用户创建的维度匹配，即传入除自动匹配维度外的所有维度，不多不少。通过「设置-编制规划设置-编制规划XXX」查看该编制规划有哪些维度。自定义组织暂时不支持【为组织设置自动匹配规则】，请联系了解如何判断该字段是否为自动匹配字段',
              ),
            eai_details: z
              .array(
                z.object({
                  date: z
                    .string()
                    .describe(
                      '预估在职人数的日期，和集中填报页面上显示的预估在职人数的日期一致，且格式要依照示例给定，若二者不匹配，则无法完成识别更新',
                    )
                    .optional(),
                  estimated_active_individuals: z
                    .string()
                    .describe(
                      '预估在职人数应与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看预估在职人数的小数位数',
                    )
                    .optional(),
                }),
              )
              .describe(
                '预估在职人数相关信息。可从「设置-编制规划设置-编制规划XXX-集中填报」查看预估在职人数的时间，如果不存在该字段说明用户创建时即没有允许填写该字段，批量删除填报行时则无需给该字段，如果存在，用户需要查看预估在职人数的日期，使用示例值格式进行传参',
              )
              .optional(),
            plan_value: z
              .string()
              .describe(
                '编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数',
              )
              .optional(),
          }),
        )
        .describe('集中填报的填报行数量应介于 1 至 5 个之间'),
    }),
  },
};
export const corehrV2ReportDetailRowBatchSave = {
  project: 'corehr',
  name: 'corehr.v2.reportDetailRow.batchSave',
  sdkName: 'corehr.v2.reportDetailRow.batchSave',
  path: '/open-apis/corehr/v2/report_detail_row/batchSave',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-批量创建/更新填报行-批量创建/更新填报行后，可在【设置-编制规划设置-编制规划XXX-集中填报-查看数据】进行查看',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z.string().describe('编制规划id，可在「设置-编制规划设置-编制规划XXX-页面URL」中解析到'),
      centralized_reporting_project_id: z
        .string()
        .describe('集中填报id，可在「设置-编制规划设置-编制规划XXX-集中填报XXX-查看数据」中解析到'),
      items: z
        .array(
          z.object({
            dimensions: z
              .array(
                z.object({
                  dimension_key: z
                    .string()
                    .describe(
                      '维度key，可从下面列表中进行选择：- "department"：部门。- "employee_type" ：人员类型。- "location"：地点。- "position" ：岗位。- "cost_center" ：成本中心/业务线。- "job_family" ：序列。- "job_level" ：职级。- "job" ：职务。自定义组织：- "custom_org_01" - "custom_org_02"- "custom_org_03"- "custom_org_04" - "custom_org_05"',
                    ),
                  dimension_value: z
                    .string()
                    .describe(
                      '维度value。- department_id：可从获得。- location_id：可从获得。- cost_center_id：可从获得。- job_id：可从获得。- job_level_id：可从获得。- job_family_id：可从获得。- employee_type_id：可从获得。- position_id：岗位，功能灰度中，如有需求请联系技术支持- custom_org_01_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_02_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_03_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_04_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_05_id：自定义组织，功能灰度中，有需要请联系技术支持',
                    ),
                }),
              )
              .describe(
                '集中填报的维度信息要和用户创建的维度匹配，即传入除自动匹配维度外的所有维度，不多不少。通过「设置-编制规划设置-编制规划XXX」查看该编制规划有哪些维度。自定义组织暂时不支持【为组织设置自动匹配规则】，请联系了解如何判断该字段是否为自动匹配字段',
              ),
            eai_details: z
              .array(
                z.object({
                  date: z
                    .string()
                    .describe(
                      '预估在职人数的日期，和集中填报页面上显示的预估在职人数的日期一致，且格式要依照示例给定，若二者不匹配，则无法完成识别更新',
                    )
                    .optional(),
                  estimated_active_individuals: z
                    .string()
                    .describe(
                      '预估在职人数应与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看预估在职人数的小数位数',
                    )
                    .optional(),
                }),
              )
              .describe(
                '预估在职人数相关信息。可从「设置-编制规划设置-编制规划XXX-集中填报」查看预估在职人数的时间，如果不存在该字段说明用户创建时即没有允许填写该字段，批量创建/更新填报行时则无需给该字段，如果存在，用户需要查看预估在职人数的日期，使用示例值格式进行传参',
              )
              .optional(),
            plan_value: z
              .string()
              .describe(
                '编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数。注意当编制规划方案是按自然周期选择时，该值必须为空，需要设置自然周期的编制规划信息multi_period_values',
              )
              .optional(),
            multi_period_values: z
              .array(
                z.object({
                  period_date: z.string().describe('周期的最后一天。注意需要在填报选择的周期范围内').optional(),
                  workforce_plan: z
                    .string()
                    .describe(
                      '对应自然周期的编制规划值。编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数',
                    )
                    .optional(),
                  individuals_to_be_added: z
                    .string()
                    .describe('对应自然周期预增员数量。批量创建更新时，无需写入此字段')
                    .optional(),
                  individuals_to_be_removed: z
                    .string()
                    .describe('对应自然周期预减员数量。批量创建更新时，无需写入此字段')
                    .optional(),
                }),
              )
              .describe(
                '自然周期的编制规划信息。当编制规划方案是按自然周期选择时，设置该字段。功能灰度中，有需要请联系',
              )
              .optional(),
          }),
        )
        .describe('集中填报的填报行数量应介于 1 至 5 个之间'),
    }),
  },
};
export const corehrV2WorkforcePlanDetailRowBatchDelete = {
  project: 'corehr',
  name: 'corehr.v2.workforcePlanDetailRow.batchDelete',
  sdkName: 'corehr.v2.workforcePlanDetailRow.batchDelete',
  path: '/open-apis/corehr/v2/workforce_plan_detail_row/batchDelete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-批量删除明细行-批量删除明细行后，可在【设置-编制规划设置-编制规划XXX-编辑数据】进行查看明细行是否被删除',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z.string().describe('编制规划id，可在「设置-编制规划设置-编制规划XXX-页面URL」中解析到'),
      items: z
        .array(
          z.object({
            dimensions: z
              .array(
                z.object({
                  dimension_key: z
                    .string()
                    .describe(
                      '维度key，可从下面列表中进行选择：- "department"：部门。- "employee_type" ：人员类型。- "location"：地点。- "position" ：岗位。- "cost_center" ：成本中心/业务线。- "job_family" ：序列。- "job_level" ：职级。- "job" ：职务。自定义组织：- "custom_org_01" - "custom_org_02"- "custom_org_03"- "custom_org_04" - "custom_org_05"',
                    ),
                  dimension_value: z
                    .string()
                    .describe(
                      '维度value。- department_id：可从获得。- location_id：可从获得。- cost_center_id：可从获得。- job_id：可从获得。- job_level_id：可从获得。- job_family_id：可从获得。- employee_type_id：可从获得。- position_id：岗位，功能灰度中，如有需求请联系技术支持- custom_org_01_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_02_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_03_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_04_id：自定义组织，功能灰度中，有需要请联系技术支持- custom_org_05_id：自定义组织，功能灰度中，有需要请联系技术支持',
                    ),
                }),
              )
              .describe(
                '编制规划的维度信息要和用户创建的维度匹配，即传入除自动匹配维度外的所有维度，不多不少。通过「设置-编制规划设置-编制规划XXX」查看该编制规划有哪些维度。自定义组织暂时不支持【为组织设置自动匹配规则】，请联系了解如何判断该字段是否为自动匹配字段',
              ),
            eai_details: z
              .array(
                z.object({
                  date: z
                    .string()
                    .describe(
                      '预估在职人数的日期，和编制规划页面上显示的预估在职人数的日期一致，且格式要依照示例给定，若二者不匹配，则无法完成识别更新',
                    )
                    .optional(),
                  estimated_active_individuals: z
                    .string()
                    .describe(
                      '预估在职人数应与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看预估在职人数的小数位数',
                    )
                    .optional(),
                }),
              )
              .describe(
                '预估在职人数相关信息。可从「设置-编制规划设置-编制规划XXX」查看预估在职人数的时间，如果不存在该字段说明用户创建时即没有允许填写该字段，批量删除明细行时则无需给该字段，如果存在，用户需要查看预估在职人数的日期，使用示例值格式进行传参',
              )
              .optional(),
            plan_value: z
              .string()
              .describe(
                '编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数',
              )
              .optional(),
          }),
        )
        .describe('编制规划的明细行数量应介于 1 至 5 个之间'),
    }),
  },
};
export const corehrV2WorkforcePlanDetailRowBatchSave = {
  project: 'corehr',
  name: 'corehr.v2.workforcePlanDetailRow.batchSave',
  sdkName: 'corehr.v2.workforcePlanDetailRow.batchSave',
  path: '/open-apis/corehr/v2/workforce_plan_detail_row/batchSave',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-批量创建/更新明细行-批量创建/更新明细行后，可在【设置-编制规划设置-编制规划XXX-编辑数据】进行查看',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z.string().describe('编制规划id，可在「设置-编制规划设置-编制规划XXX-页面URL」中解析到'),
      items: z
        .array(
          z.object({
            dimensions: z
              .array(
                z.object({
                  dimension_key: z
                    .string()
                    .describe(
                      '维度key，可从下面列表中进行选择：- "department"：部门。- "employee_type" ：人员类型。- "location"：地点。- "position" ：岗位。- "cost_center" ：成本中心/业务线。- "job_family" ：序列。- "job_level" ：职级。- "job" ：职务。自定义组织：- "custom_org_01" - "custom_org_02"- "custom_org_03"- "custom_org_04" - "custom_org_05"',
                    ),
                  dimension_value: z
                    .string()
                    .describe(
                      '维度value。- department_id：可从获得。- location_id：可从获得。- cost_center_id：可从获得。- job_id：可从获得。- job_level_id：可从获得。- job_family_id：可从获得。- employee_type_id：可从获得。- position_id：岗位，功能灰度中，如有需求请联系- custom_org_01_id：自定义组织，功能灰度中，有需要请联系- custom_org_02_id：自定义组织，功能灰度中，有需要请联系- custom_org_03_id：自定义组织，功能灰度中，有需要请联系- custom_org_04_id：自定义组织，功能灰度中，有需要请联系- custom_org_05_id：自定义组织，功能灰度中，有需要请联系',
                    ),
                }),
              )
              .describe(
                '编制规划的维度信息要和用户创建的维度匹配，即传入除自动匹配维度外的所有维度，不多不少。通过「设置-编制规划设置-编制规划XXX」查看该编制规划有哪些维度。自定义组织暂时不支持【为组织设置自动匹配规则】，请联系了解如何判断该字段是否为自动匹配字段',
              ),
            eai_details: z
              .array(
                z.object({
                  date: z
                    .string()
                    .describe(
                      '预估在职人数的日期，和编制规划页面上显示的预估在职人数的日期一致，且格式要依照示例给定，若二者不匹配，则无法完成识别更新',
                    )
                    .optional(),
                  estimated_active_individuals: z
                    .string()
                    .describe(
                      '预估在职人数应与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看预估在职人数的小数位数',
                    )
                    .optional(),
                }),
              )
              .describe(
                '预估在职人数相关信息。可从「设置-编制规划设置-编制规划XXX」查看预估在职人数的时间，如果不存在该字段说明用户创建时即没有允许填写该字段，批量创建/更新明细行时则无需给该字段，如果存在，用户需要查看预估在职人数的日期，使用示例值格式进行传参',
              )
              .optional(),
            plan_value: z
              .string()
              .describe(
                '编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数。注意当编制规划方案是按自然周期选择时，该值必须为空，需要设置自然周期的编制规划信息multi_period_values',
              )
              .optional(),
            multi_period_values: z
              .array(
                z.object({
                  period_date: z.string().describe('周期的最后一天').optional(),
                  workforce_plan: z
                    .string()
                    .describe(
                      '对应自然周期的编制规划值。编制规划值需与创建编制规划时指定的小数位数相匹配，若不匹配，则无法更新。小数位查看方式：「设置-编制规划-编制规划XXX」查看编制规划的小数位数',
                    )
                    .optional(),
                  individuals_to_be_added: z
                    .string()
                    .describe('对应自然周期的预增员数量。批量创建更新时，无需写入此字段')
                    .optional(),
                  individuals_to_be_removed: z
                    .string()
                    .describe('对应自然周期的预减员数量。批量创建更新时，无需写入此字段')
                    .optional(),
                }),
              )
              .describe(
                '自然周期的编制规划信息。当编制规划方案是按自然周期选择时，设置该字段。功能灰度中，有需要请联系',
              )
              .optional(),
          }),
        )
        .describe('编制规划的明细行数量应介于 1 至 5 个之间'),
    }),
  },
};
export const corehrV2WorkforcePlanDetailBatch = {
  project: 'corehr',
  name: 'corehr.v2.workforcePlanDetail.batch',
  sdkName: 'corehr.v2.workforcePlanDetail.batch',
  path: '/open-apis/corehr/v2/workforce_plan_details/batch',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-查询编制规划明细信息（不支持自定义组织）-查询编制规划明细，包括维度信息、编制数和预估在职人数',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z
        .string()
        .describe(
          '编制规划方案 ID， ID及详细信息可通过接口查询获得。查询编制规划明细信息时，编制规划方案 ID 必填',
        )
        .optional(),
      is_centralized_reporting_project: z
        .boolean()
        .describe(
          '是否为集中填报项目。如果租户未使用集中填报功能，将此参数置空即可。**字段权限要求**：获取编制规划集中填报明细信息(corehr:workforce_plan_centralized_reporting_project_detail:read)',
        )
        .optional(),
      centralized_reporting_project_id: z
        .string()
        .describe(
          '编制规划集中填报项目 ID。ID可根据集中填报链接获取。如果租户未使用集中填报功能，将此参数置空即可。查询集中填报信息时，将以集中填报ID为准，无需填写编制规划方案 ID。**字段权限要求**：获取编制规划集中填报明细信息(corehr:workforce_plan_centralized_reporting_project_detail:read)',
        )
        .optional(),
      department_ids: z
        .array(z.string())
        .describe(
          '部门ID列表。ID获取方式：- 调用等接口可以返回部门ID- 也可以通过 获取部门ID信息',
        )
        .optional(),
      employee_type_ids: z
        .array(z.string())
        .describe(
          '人员类型 ID 列表- 可通过获取详情',
        )
        .optional(),
      work_location_ids: z
        .array(z.string())
        .describe(
          '工作地点 ID 列表。ID获取方式：- 调用等接口可以返回地点ID',
        )
        .optional(),
      job_family_ids: z
        .array(z.string())
        .describe(
          '序列 ID 列表。ID获取方式：- 调用等接口可以返回序列ID',
        )
        .optional(),
      job_level_ids: z
        .array(z.string())
        .describe(
          '职级ID。ID获取方式：- 调用等接口可以返回职级ID',
        )
        .optional(),
      job_ids: z
        .array(z.string())
        .describe(
          '职务ID。ID获取方式：- 调用等可以返回职务ID- 也可以通过  获取ID',
        )
        .optional(),
      cost_center_ids: z
        .array(z.string())
        .describe(
          '成本中心 ID 列表。ID获取方式：- 调用等接口可以返回成本中心ID',
        )
        .optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const corehrV2WorkforcePlanDetailBatchV2 = {
  project: 'corehr',
  name: 'corehr.v2.workforcePlanDetail.batchV2',
  sdkName: 'corehr.v2.workforcePlanDetail.batchV2',
  path: '/open-apis/corehr/v2/workforce_plan_details/batch_v2',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-飞书人事（企业版）-编制规划-查询编制规划明细信息（支持自定义组织）-查询编制规划明细，包括维度信息、编制数、预估在职人数、在职人数和预增/预减人数',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      workforce_plan_id: z
        .string()
        .describe(
          '编制规划方案ID，ID及详细信息可通过接口查询获得。查询编制规划明细信息时，编制规划方案ID必填，是否为集中填报项目设置为false，不填写集中填报项目ID（是否填写不影响返回结果）',
        )
        .optional(),
      is_centralized_reporting_project: z
        .boolean()
        .describe(
          '是否为集中填报项目。如果租户未使用集中填报功能，将此参数置空即可。如果查询集中填报明细，将此参数设置为true。**字段权限要求**：获取编制规划集中填报明细信息(corehr:workforce_plan_centralized_reporting_project_detail:read)',
        )
        .optional(),
      centralized_reporting_project_id: z
        .string()
        .describe(
          '编制规划集中填报项目ID，ID可通过访问集中填报页面，从URL中提取report_id参数。如果租户未使用集中填报功能，将此参数置空即可。查询集中填报信息时，集中填报项目ID必填，是否为集中填报项目设置为true，不填写编制规划方案ID（是否填写不影响返回结果）**字段权限要求**：获取编制规划集中填报明细信息(corehr:workforce_plan_centralized_reporting_project_detail:read)',
        )
        .optional(),
      dimension_id_in_datas: z
        .array(
          z.object({
            dimension_key: z
              .string()
              .describe(
                '维度key，可从下面列表中进行选择：- "department"：部门。- "employee_type" ：人员类型。- "location"：地点。- "position" ：岗位。- "cost_center" ：成本中心/业务线。- "job_family" ：序列。- "job_level" ：职级。- "job" ：职务。自定义组织：- "custom_org_01" - "custom_org_02"- "custom_org_03"- "custom_org_04" - "custom_org_05"',
              )
              .optional(),
            dimension_ids: z
              .array(z.string())
              .describe(
                '维度value。- department_id：可从获得。- location_id：可从获得。- cost_center_id：可从获得。- job_id：可从获得。- job_level_id：可从获得。- job_family_id：可从获得。- employee_type_id：可从获得。- position_id：岗位，功能灰度中，如有需求请联系- custom_org_01_id：自定义组织，功能灰度中，有需要请联系- custom_org_02_id：自定义组织，功能灰度中，有需要请联系- custom_org_03_id：自定义组织，功能灰度中，有需要请联系- custom_org_04_id：自定义组织，功能灰度中，有需要请联系- custom_org_05_id：自定义组织，功能灰度中，有需要请联系',
              )
              .optional(),
          }),
        )
        .describe('维度筛选')
        .optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
  },
};
export const corehrV2WorkforcePlanList = {
  project: 'corehr',
  name: 'corehr.v2.workforcePlan.list',
  sdkName: 'corehr.v2.workforcePlan.list',
  path: '/open-apis/corehr/v2/workforce_plans',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书人事（企业版）-编制规划-查询编制规划方案-根据传入的筛选项获取编制规划的方案列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      get_all_plan: z
        .boolean()
        .describe(
          '是否获取所有编制规划方案，默认为 false。- true 所有编制规划方案列表。- false 为仅获取当前生效的编制规划方案',
        )
        .optional(),
      active: z
        .boolean()
        .describe('是否只获取已启用的方案，默认为 true。- true 获取已启用编制规划方案- false 获取所有编制规划方案,')
        .optional(),
    }),
  },
};
export const corehrV2Tools = [
  corehrV2ApprovalGroupsGet,
  corehrV2ApprovalGroupsOpenQueryDepartmentChangeListByIds,
  corehrV2ApprovalGroupsOpenQueryJobChangeListByIds,
  corehrV2ApproverList,
  corehrV2BasicInfoBankBranchSearch,
  corehrV2BasicInfoBankSearch,
  corehrV2BasicInfoCitySearch,
  corehrV2BasicInfoCountryRegionSubdivisionSearch,
  corehrV2BasicInfoCountryRegionSearch,
  corehrV2BasicInfoCurrencySearch,
  corehrV2BasicInfoDistrictSearch,
  corehrV2BasicInfoLanguageSearch,
  corehrV2BasicInfoNationalitySearch,
  corehrV2BasicInfoTimeZoneSearch,
  corehrV2BpGetByDepartment,
  corehrV2BpList,
  corehrV2CompanyActive,
  corehrV2CompanyBatchGet,
  corehrV2CompanyQueryRecentChange,
  corehrV2ContractSearch,
  corehrV2CostAllocationBatchQuery,
  corehrV2CostAllocationCreateVersion,
  corehrV2CostAllocationRemoveVersion,
  corehrV2CostAllocationUpdateVersion,
  corehrV2CostCenterCreate,
  corehrV2CostCenterDelete,
  corehrV2CostCenterPatch,
  corehrV2CostCenterQueryRecentChange,
  corehrV2CostCenterSearch,
  corehrV2CostCenterVersionCreate,
  corehrV2CostCenterVersionDelete,
  corehrV2CostCenterVersionPatch,
  corehrV2DefaultCostCenterBatchQuery,
  corehrV2DefaultCostCenterCreateVersion,
  corehrV2DefaultCostCenterRemoveVersion,
  corehrV2DefaultCostCenterUpdateVersion,
  corehrV2DepartmentBatchGet,
  corehrV2DepartmentDelete,
  corehrV2DepartmentParents,
  corehrV2DepartmentPatch,
  corehrV2DepartmentQueryMultiTimeline,
  corehrV2DepartmentQueryOperationLogs,
  corehrV2DepartmentQueryRecentChange,
  corehrV2DepartmentQueryTimeline,
  corehrV2DepartmentSearch,
  corehrV2DepartmentTree,
  corehrV2EmployeeBatchGet,
  corehrV2EmployeeCreate,
  corehrV2EmployeeSearch,
  corehrV2EmployeesAdditionalJobBatch,
  corehrV2EmployeesAdditionalJobCreate,
  corehrV2EmployeesAdditionalJobDelete,
  corehrV2EmployeesAdditionalJobPatch,
  corehrV2EmployeesBpBatchGet,
  corehrV2EmployeesJobDataBatchGet,
  corehrV2EmployeesJobDataQuery,
  corehrV2EnumSearch,
  corehrV2JobChangeCreate,
  corehrV2JobChangeRevoke,
  corehrV2JobChangeSearch,
  corehrV2JobFamilyBatchGet,
  corehrV2JobFamilyQueryRecentChange,
  corehrV2JobGradeCreate,
  corehrV2JobGradeDelete,
  corehrV2JobGradePatch,
  corehrV2JobGradeQuery,
  corehrV2JobGradeQueryRecentChange,
  corehrV2JobLevelBatchGet,
  corehrV2JobLevelQueryRecentChange,
  corehrV2JobGet,
  corehrV2JobList,
  corehrV2JobQueryRecentChange,
  corehrV2LocationActive,
  corehrV2LocationAddressCreate,
  corehrV2LocationAddressDelete,
  corehrV2LocationAddressPatch,
  corehrV2LocationBatchGet,
  corehrV2LocationPatch,
  corehrV2LocationQueryRecentChange,
  corehrV2OffboardingEdit,
  corehrV2OffboardingRevoke,
  corehrV2OffboardingSubmitV2,
  corehrV2PersonCreate,
  corehrV2PersonPatch,
  corehrV2PreHireComplete,
  corehrV2PreHireCreate,
  corehrV2PreHireDelete,
  corehrV2PreHirePatch,
  corehrV2PreHireQuery,
  corehrV2PreHireRestoreFlowInstance,
  corehrV2PreHireSearch,
  corehrV2PreHireTransitTask,
  corehrV2PreHireWithdrawOnboarding,
  corehrV2ProbationAssessmentCreate,
  corehrV2ProbationAssessmentDelete,
  corehrV2ProbationAssessmentPatch,
  corehrV2ProbationEnableDisableAssessment,
  corehrV2ProbationSearch,
  corehrV2ProbationSubmit,
  corehrV2ProbationWithdraw,
  corehrV2ProcessRevokeUpdate,
  corehrV2ProcessWithdrawUpdate,
  corehrV2ProcessApproverUpdate,
  corehrV2ProcessExtraUpdate,
  corehrV2ProcessFormVariableDataGet,
  corehrV2ProcessGet,
  corehrV2ProcessList,
  corehrV2ProcessTransferUpdate,
  corehrV2ReportDetailRowBatchDelete,
  corehrV2ReportDetailRowBatchSave,
  corehrV2WorkforcePlanDetailRowBatchDelete,
  corehrV2WorkforcePlanDetailRowBatchSave,
  corehrV2WorkforcePlanDetailBatch,
  corehrV2WorkforcePlanDetailBatchV2,
  corehrV2WorkforcePlanList,
];
