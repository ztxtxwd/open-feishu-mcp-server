import { z } from 'zod';
export type hireV1ToolName =
  | 'hire.v1.advertisement.publish'
  | 'hire.v1.agency.batchQuery'
  | 'hire.v1.agency.get'
  | 'hire.v1.agency.getAgencyAccount'
  | 'hire.v1.agency.operateAgencyAccount'
  | 'hire.v1.agency.protect'
  | 'hire.v1.agency.protectSearch'
  | 'hire.v1.agency.query'
  | 'hire.v1.application.cancelOnboard'
  | 'hire.v1.application.create'
  | 'hire.v1.application.get'
  | 'hire.v1.application.getDetail'
  | 'hire.v1.applicationInterview.list'
  | 'hire.v1.application.list'
  | 'hire.v1.application.offer'
  | 'hire.v1.application.recover'
  | 'hire.v1.application.terminate'
  | 'hire.v1.application.transferOnboard'
  | 'hire.v1.application.transferStage'
  | 'hire.v1.attachment.get'
  | 'hire.v1.attachment.preview'
  | 'hire.v1.backgroundCheckOrder.list'
  | 'hire.v1.diversityInclusion.search'
  | 'hire.v1.ecoAccountCustomField.batchDelete'
  | 'hire.v1.ecoAccountCustomField.batchUpdate'
  | 'hire.v1.ecoAccountCustomField.create'
  | 'hire.v1.ecoBackgroundCheckCustomField.batchDelete'
  | 'hire.v1.ecoBackgroundCheckCustomField.batchUpdate'
  | 'hire.v1.ecoBackgroundCheckCustomField.create'
  | 'hire.v1.ecoBackgroundCheckPackage.batchDelete'
  | 'hire.v1.ecoBackgroundCheckPackage.batchUpdate'
  | 'hire.v1.ecoBackgroundCheckPackage.create'
  | 'hire.v1.ecoBackgroundCheck.cancel'
  | 'hire.v1.ecoBackgroundCheck.updateProgress'
  | 'hire.v1.ecoBackgroundCheck.updateResult'
  | 'hire.v1.ecoExamPaper.batchDelete'
  | 'hire.v1.ecoExamPaper.batchUpdate'
  | 'hire.v1.ecoExamPaper.create'
  | 'hire.v1.ecoExam.loginInfo'
  | 'hire.v1.ecoExam.updateResult'
  | 'hire.v1.ehrImportTask.patch'
  | 'hire.v1.employee.get'
  | 'hire.v1.employee.getByApplication'
  | 'hire.v1.employee.patch'
  | 'hire.v1.evaluationTask.list'
  | 'hire.v1.evaluation.list'
  | 'hire.v1.examMarkingTask.list'
  | 'hire.v1.exam.create'
  | 'hire.v1.externalApplication.create'
  | 'hire.v1.externalApplication.delete'
  | 'hire.v1.externalApplication.list'
  | 'hire.v1.externalApplication.update'
  | 'hire.v1.externalBackgroundCheck.batchQuery'
  | 'hire.v1.externalBackgroundCheck.create'
  | 'hire.v1.externalBackgroundCheck.delete'
  | 'hire.v1.externalBackgroundCheck.update'
  | 'hire.v1.externalInterviewAssessment.create'
  | 'hire.v1.externalInterviewAssessment.patch'
  | 'hire.v1.externalInterview.batchQuery'
  | 'hire.v1.externalInterview.create'
  | 'hire.v1.externalInterview.delete'
  | 'hire.v1.externalInterview.update'
  | 'hire.v1.externalOffer.batchQuery'
  | 'hire.v1.externalOffer.create'
  | 'hire.v1.externalOffer.delete'
  | 'hire.v1.externalOffer.update'
  | 'hire.v1.externalReferralReward.create'
  | 'hire.v1.externalReferralReward.delete'
  | 'hire.v1.interviewFeedbackForm.list'
  | 'hire.v1.interviewRecordAttachment.get'
  | 'hire.v1.interviewRecord.get'
  | 'hire.v1.interviewRecord.list'
  | 'hire.v1.interviewRegistrationSchema.list'
  | 'hire.v1.interviewRoundType.list'
  | 'hire.v1.interviewTask.list'
  | 'hire.v1.interview.getByTalent'
  | 'hire.v1.interview.list'
  | 'hire.v1.interviewer.list'
  | 'hire.v1.interviewer.patch'
  | 'hire.v1.jobFunction.list'
  | 'hire.v1.jobProcess.list'
  | 'hire.v1.jobPublishRecord.search'
  | 'hire.v1.jobRequirementSchema.list'
  | 'hire.v1.jobRequirement.create'
  | 'hire.v1.jobRequirement.delete'
  | 'hire.v1.jobRequirement.list'
  | 'hire.v1.jobRequirement.listById'
  | 'hire.v1.jobRequirement.update'
  | 'hire.v1.jobSchema.list'
  | 'hire.v1.jobType.list'
  | 'hire.v1.job.close'
  | 'hire.v1.job.combinedCreate'
  | 'hire.v1.job.combinedUpdate'
  | 'hire.v1.job.config'
  | 'hire.v1.job.get'
  | 'hire.v1.job.getDetail'
  | 'hire.v1.job.list'
  | 'hire.v1.jobManager.batchUpdate'
  | 'hire.v1.jobManager.get'
  | 'hire.v1.job.open'
  | 'hire.v1.job.recruiter'
  | 'hire.v1.job.updateConfig'
  | 'hire.v1.location.list'
  | 'hire.v1.location.query'
  | 'hire.v1.minutes.get'
  | 'hire.v1.note.create'
  | 'hire.v1.note.delete'
  | 'hire.v1.note.get'
  | 'hire.v1.note.list'
  | 'hire.v1.note.patch'
  | 'hire.v1.offerApplicationForm.get'
  | 'hire.v1.offerApplicationForm.list'
  | 'hire.v1.offerCustomField.update'
  | 'hire.v1.offerSchema.get'
  | 'hire.v1.offer.create'
  | 'hire.v1.offer.get'
  | 'hire.v1.offer.internOfferStatus'
  | 'hire.v1.offer.list'
  | 'hire.v1.offer.offerStatus'
  | 'hire.v1.offer.update'
  | 'hire.v1.questionnaire.list'
  | 'hire.v1.referralAccount.create'
  | 'hire.v1.referralAccount.deactivate'
  | 'hire.v1.referralAccount.enable'
  | 'hire.v1.referralAccount.getAccountAssets'
  | 'hire.v1.referralAccount.reconciliation'
  | 'hire.v1.referralAccount.withdraw'
  | 'hire.v1.referralWebsiteJobPost.get'
  | 'hire.v1.referralWebsiteJobPost.list'
  | 'hire.v1.referral.getByApplication'
  | 'hire.v1.referral.search'
  | 'hire.v1.registrationSchema.list'
  | 'hire.v1.resumeSource.list'
  | 'hire.v1.role.get'
  | 'hire.v1.role.list'
  | 'hire.v1.subject.list'
  | 'hire.v1.talentBlocklist.changeTalentBlock'
  | 'hire.v1.talentFolder.list'
  | 'hire.v1.talentObject.query'
  | 'hire.v1.talentOperationLog.search'
  | 'hire.v1.talentPool.batchChangeTalentPool'
  | 'hire.v1.talentPool.moveTalent'
  | 'hire.v1.talentPool.search'
  | 'hire.v1.talentTag.list'
  | 'hire.v1.talent.addToFolder'
  | 'hire.v1.talent.batchGetId'
  | 'hire.v1.talent.combinedCreate'
  | 'hire.v1.talent.combinedUpdate'
  | 'hire.v1.talentExternalInfo.create'
  | 'hire.v1.talentExternalInfo.update'
  | 'hire.v1.talent.get'
  | 'hire.v1.talent.list'
  | 'hire.v1.talent.onboardStatus'
  | 'hire.v1.talent.removeToFolder'
  | 'hire.v1.talent.tag'
  | 'hire.v1.terminationReason.list'
  | 'hire.v1.test.search'
  | 'hire.v1.todo.list'
  | 'hire.v1.tripartiteAgreement.create'
  | 'hire.v1.tripartiteAgreement.delete'
  | 'hire.v1.tripartiteAgreement.list'
  | 'hire.v1.tripartiteAgreement.update'
  | 'hire.v1.userRole.list'
  | 'hire.v1.websiteChannel.create'
  | 'hire.v1.websiteChannel.delete'
  | 'hire.v1.websiteChannel.list'
  | 'hire.v1.websiteChannel.update'
  | 'hire.v1.websiteDeliveryTask.get'
  | 'hire.v1.websiteDelivery.createByAttachment'
  | 'hire.v1.websiteDelivery.createByResume'
  | 'hire.v1.websiteJobPost.get'
  | 'hire.v1.websiteJobPost.list'
  | 'hire.v1.websiteJobPost.search'
  | 'hire.v1.website.list'
  | 'hire.v1.websiteSiteUser.create';
export const hireV1AdvertisementPublish = {
  project: 'hire',
  name: 'hire.v1.advertisement.publish',
  sdkName: 'hire.v1.advertisement.publish',
  path: '/open-apis/hire/v1/advertisements/:advertisement_id/publish',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-发布职位广告-支持把职位广告发布上线至招聘官网、内推平台',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_channel_id: z
        .string()
        .describe(
          '招聘渠道 ID，选择要发布的招聘官网，单次仅可发布 1 个渠道：- 当发布内推平台时，可使用 job_channel_id = 3 来发布- 官网渠道的 ID 可通过」接口获取',
        )
        .optional(),
    }),
    path: z.object({
      advertisement_id: z
        .string()
        .describe(
          '职位广告 ID，可由接口创建职位后返回获取',
        ),
    }),
  },
};
export const hireV1AgencyBatchQuery = {
  project: 'hire',
  name: 'hire.v1.agency.batchQuery',
  sdkName: 'hire.v1.agency.batchQuery',
  path: '/open-apis/hire/v1/agencies/batch_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-搜索猎头供应商列表-可根据猎头供应商 ID 列表或关键字、筛选项查询供应商信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      agency_supplier_id_list: z
        .array(z.string())
        .describe('猎头供应商 ID 列表，当传递此值，以此值为准，其余查询字段失效')
        .optional(),
      keyword: z.string().describe('搜索关键字，可传入名称或邮箱').optional(),
      filter_list: z
        .array(
          z.object({
            key: z.string().describe('筛选项 key，使用筛选项查询时必填'),
            value_type: z
              .number()
              .describe(
                '筛选项值类型，使用筛选项查询时必填 Options:1(值过滤，填充 value_list 字段),2(范围过滤，填充 range_filter 字段)',
              ),
            value_list: z.array(z.string()).describe('筛选项值列表，当`value_type`为`1`时必填').optional(),
            range_filter: z
              .object({ from: z.string().describe('起始值').optional(), to: z.string().describe('终止值').optional() })
              .describe('范围筛选，当`value_type`为`2`时必填')
              .optional(),
          }),
        )
        .describe('筛选项，相同的 Key 仅可传一次，字段取值可查看本文`筛选字段说明`节')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
    }),
  },
};
export const hireV1AgencyGet = {
  project: 'hire',
  name: 'hire.v1.agency.get',
  sdkName: 'hire.v1.agency.get',
  path: '/open-apis/hire/v1/agencies/:agency_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-获取猎头供应商信息-根据猎头供应商 ID 获取有合作关系的猎头供应商信息，包含猎头供应商ID、名称、联系人等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ agency_id: z.string().describe('猎头供应商ID').optional() }),
  },
};
export const hireV1AgencyGetAgencyAccount = {
  project: 'hire',
  name: 'hire.v1.agency.getAgencyAccount',
  sdkName: 'hire.v1.agency.getAgencyAccount',
  path: '/open-apis/hire/v1/agencies/get_agency_account',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-查询猎头供应商下猎头列表-根据猎头供应商 ID 查询该猎头供应商下的猎头列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      supplier_id: z
        .string()
        .describe(
          '猎头供应商 ID，可通过接口获取',
        ),
      status: z
        .number()
        .describe('猎头状态 Options:0(Normal 正常),1(Enabled 已禁用),2(DisabledBySupplier 已被猎头供应商停用)')
        .optional(),
      role: z.number().describe('角色 Options:0(Manager 管理员),1(Consultant 顾问)').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
    }),
  },
};
export const hireV1AgencyOperateAgencyAccount = {
  project: 'hire',
  name: 'hire.v1.agency.operateAgencyAccount',
  sdkName: 'hire.v1.agency.operateAgencyAccount',
  path: '/open-apis/hire/v1/agencies/operate_agency_account',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-禁用/取消禁用猎头-可根据猎头 ID 对猎头执行禁用/取消禁用操作。被禁用的猎头，不能推荐候选人与被分配职位',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      option: z.number().describe('操作类型 Options:1(Add 禁用),2(Remove 取消禁用)'),
      id: z
        .string()
        .describe(
          '猎头 ID，可通过接口获取',
        ),
      reason: z.string().describe('禁用原因，仅当`option`为`1`时，必填').optional(),
    }),
  },
};
export const hireV1AgencyProtect = {
  project: 'hire',
  name: 'hire.v1.agency.protect',
  sdkName: 'hire.v1.agency.protect',
  path: '/open-apis/hire/v1/agencies/protect',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-设置猎头保护期-设置指定人才的猎头保护期，当「飞书招聘」内置的保护期功能不满足需求时，客户可通过此接口自定义人才的保护期',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才ID，可通过、接口获取',
        ),
      supplier_id: z.string().describe('猎头供应商ID'),
      consultant_id: z.string().describe('猎头顾问ID，需与`user_id_type`类型一致'),
      protect_create_time: z.number().describe('保护期创建时间（int64类型），毫秒时间戳'),
      protect_expire_time: z.number().describe('保护期过期时间（int64类型），毫秒时间戳'),
      comment: z.string().describe('推荐语').optional(),
      current_salary: z.string().describe('当前薪资').optional(),
      expected_salary: z.string().describe('预期薪资').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1AgencyProtectSearch = {
  project: 'hire',
  name: 'hire.v1.agency.protectSearch',
  sdkName: 'hire.v1.agency.protectSearch',
  path: '/open-apis/hire/v1/agencies/protection_period/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-查询猎头保护期信息-查询指定人才的猎头保护期信息列表，包含保护期起止时间、猎头供应商、猎头顾问信息等。若人才已经入职，还会返回入职时所在的保护期信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过、接口获取',
        ),
    }),
  },
};
export const hireV1AgencyQuery = {
  project: 'hire',
  name: 'hire.v1.agency.query',
  sdkName: 'hire.v1.agency.query',
  path: '/open-apis/hire/v1/agencies/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-猎头-查询猎头供应商信息-根据猎头供应商名称查询有合作关系的猎头供应商信息，包含猎头供应商ID、名称、联系人等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      name: z.string().describe('猎头供应商名称，精准匹配查询(区分大小写)'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ApplicationCancelOnboard = {
  project: 'hire',
  name: 'hire.v1.application.cancelOnboard',
  sdkName: 'hire.v1.application.cancelOnboard',
  path: '/open-apis/hire/v1/applications/:application_id/cancel_onboard',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-入职-取消候选人入职-取消待入职状态的候选人入职',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      termination_type: z.number().describe('终止类型 Options:1(我们拒绝了候选人),22(候选人拒绝了我们),27(其他)'),
      termination_reason_id_list: z
        .array(z.string())
        .describe(
          '终止的具体原因的id列表，详细信息请参考',
        )
        .optional(),
      termination_reason_notes: z.string().describe('备注').optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，如何获取投递 ID 请参考',
        ),
    }),
  },
};
export const hireV1ApplicationCreate = {
  project: 'hire',
  name: 'hire.v1.application.create',
  sdkName: 'hire.v1.application.create',
  path: '/open-apis/hire/v1/applications',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-投递管理-创建投递-为人才在特定职位上创建投递',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过获取',
        ),
      job_id: z
        .string()
        .describe('职位 ID，可通过获取'),
      user_id: z
        .string()
        .describe(
          '人员 ID，与入参 `user_id_type` 类型一致。**注意**：若投递来源为属于「员工转岗」或「实习生转正」时必填，创建投递成功后会将该员工和对应人才进行绑定；创建其他来源投递时，不会进行人员与人才绑定',
        )
        .optional(),
      resume_source_id: z
        .string()
        .describe(
          '简历来源 ID，可通过获取',
        )
        .optional(),
      application_preferred_city_code_list: z
        .array(z.string())
        .describe(
          '意向投递城市列表，可通过获取到对应的城市编码',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const hireV1ApplicationGet = {
  project: 'hire',
  name: 'hire.v1.application.get',
  sdkName: 'hire.v1.application.get',
  path: '/open-apis/hire/v1/applications/:application_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-投递管理-获取投递信息-根据投递 ID 获取单个投递信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      options: z
        .array(
          z
            .literal('get_latest_application_on_chain')
            .describe(
              'Options:get_latest_application_on_chain(GetLatestApplicationOnChain 仅对当前投递是虚拟职位投递时生效。 - 若投递未分配，虚拟职位投递即为最新投递，返回请求中指定的虚拟职位投递的信息 - 若投递已分配，会返回分配链上最新一个实体职位投递的信息，而非请求中指定的投递。)',
            ),
        )
        .describe(
          '请求控制参数，用于控制接口响应逻辑。如需一次查询多个用户ID，可通过将同一参数名多次传递，并且每次传递不同的参数值。例如：https://{url}?options={option1}&options={option2}',
        )
        .optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1ApplicationGetDetail = {
  project: 'hire',
  name: 'hire.v1.application.getDetail',
  sdkName: 'hire.v1.application.getDetail',
  path: '/open-apis/hire/v1/applications/:application_id/get_detail',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-投递管理-获取投递详情-根据投递 ID 获取投递信息并通过参数按需获取该投递相关的实体信息，如「职位」、「人才」、「评估」、「面试」、「Offer」、「猎头」、「内推」、「官网」等实体的信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型 Options:open_department_id(以 open_department_id 来标识部门，通过接口获取),department_id(以 department_id 来标识部门，通过接口获取)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
      options: z
        .array(
          z
            .enum([
              'with_job',
              'with_talent',
              'with_interview',
              'with_offer',
              'with_evaluation',
              'with_employee',
              'with_agency',
              'with_referral',
              'with_portal',
            ])
            .describe(
              'Options:with_job(返回职位实体信息),with_talent(返回人才实体信息),with_interview(返回面试聚合实体信息),with_offer(返回 Offer 实体信息),with_evaluation(返回评估实体信息),with_employee(返回员工实体信息),with_agency(返回猎头实体信息),with_referral(返回内推实体信息),with_portal(返回官网实体信息)',
            ),
        )
        .describe(
          '关联实体信息获取参数，用于指定获取哪些关联实体信息，不传时默认只返回投递基本信息（`basic_info`）。如需一次查询多个实体信息，可通过将同一参数名多次传递，并且每次传递不同的参数值。 例如：https://{url}?options=with_job&options=with_talent',
        )
        .optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1ApplicationInterviewList = {
  project: 'hire',
  name: 'hire.v1.applicationInterview.list',
  sdkName: 'hire.v1.applicationInterview.list',
  path: '/open-apis/hire/v1/applications/:application_id/interviews',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-招聘-面试-获取面试记录列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，不能超过 50'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['user_id', 'union_id', 'open_id', 'people_admin_id']).describe('用户ID类型').optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过「获取租户职级列表」接口获取)',
        )
        .optional(),
    }),
    path: z.object({ application_id: z.string().describe('投递ID') }),
  },
};
export const hireV1ApplicationList = {
  project: 'hire',
  name: 'hire.v1.application.list',
  sdkName: 'hire.v1.application.list',
  path: '/open-apis/hire/v1/applications',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-投递管理-获取投递列表-获取投递列表信息。可根据「招聘流程 ID」、「招聘阶段 ID」、「人才 ID」、「职位 ID」、「投递活跃状态」以及「投递更新时间」进行条件筛选',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      process_id: z
        .string()
        .describe(
          '招聘流程 ID，可通过接口中的「流程 ID」获取',
        )
        .optional(),
      stage_id: z
        .string()
        .describe(
          '招聘阶段 ID，可通过接口每个流程下的「阶段列表」获取',
        )
        .optional(),
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        )
        .optional(),
      active_status: z
        .string()
        .describe('投递活跃状态，不传该参数则默认为“全部”**可选值有**：- `1`：活跃投递- `2`：非活跃投递- `3`：全部')
        .optional(),
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        )
        .optional(),
      lock_status: z
        .array(z.number().describe('Options:1(未锁定),2(锁定在其他职位),3(锁定在当前职位)'))
        .describe('锁定状态，无默认值，不传该参数则不对锁定状态进行筛选')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小**最大值**：200').optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
    }),
  },
};
export const hireV1ApplicationOffer = {
  project: 'hire',
  name: 'hire.v1.application.offer',
  sdkName: 'hire.v1.application.offer',
  path: '/open-apis/hire/v1/applications/:application_id/offer',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-Offer-获取 Offer 信息-根据投递 ID 获取 Offer 信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同),department_id(【飞书】用来标识租户内一个唯一的部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递ID，可通过获取',
        ),
    }),
  },
};
export const hireV1ApplicationRecover = {
  project: 'hire',
  name: 'hire.v1.application.recover',
  sdkName: 'hire.v1.application.recover',
  path: '/open-apis/hire/v1/applications/:application_id/recover',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-投递管理-恢复投递-根据投递 ID 将「已终止」投递进行恢复',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递ID，详情请参考：',
        ),
    }),
  },
};
export const hireV1ApplicationTerminate = {
  project: 'hire',
  name: 'hire.v1.application.terminate',
  sdkName: 'hire.v1.application.terminate',
  path: '/open-apis/hire/v1/applications/:application_id/terminate',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-投递管理-终止投递-根据投递 ID 修改投递状态为「已终止」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      termination_type: z.number().describe('终止原因的类型 Options:1(我们拒绝了候选人),22(候选人拒绝了我们),27(其他)'),
      termination_reason_list: z
        .array(z.string())
        .describe(
          '终止的具体原因的id列表，可通过接口获取',
        )
        .optional(),
      termination_reason_note: z.string().describe('终止备注').optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1ApplicationTransferOnboard = {
  project: 'hire',
  name: 'hire.v1.application.transferOnboard',
  sdkName: 'hire.v1.application.transferOnboard',
  path: '/open-apis/hire/v1/applications/:application_id/transfer_onboard',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-入职-操作候选人入职-根据投递 ID 操作候选人入职并创建员工，后续可通过  接口获取入职信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      actual_onboard_time: z
        .number()
        .describe('实际入职时间，毫秒时间戳（int64类型），不能晚于当前时间，不传则默认为当前时间')
        .optional(),
      expected_conversion_time: z.number().describe('预期转正时间，毫秒时间戳（int64类型），不传则默认为0').optional(),
      job_requirement_id: z
        .string()
        .describe(
          '招聘需求 ID，可通过接口  获取。是否必须传入取决于管理员在系统后台「招聘需求关联设置」的配置。入职完成后招聘需求的「已入职」人数会加1',
        )
        .optional(),
      operator_id: z.string().describe('操作人ID，与入参 `user_id_type` 类型一致').optional(),
      onboard_city_code: z
        .string()
        .describe(
          '候选人办公地点 ID，将用于候选人内推奖规则判断，数据源可通过接口获取',
        )
        .optional(),
      department: z
        .string()
        .describe(
          '候选人入职部门 ID ，将用于候选人内推奖规则判断，可通过接口获取，与入参 `department_id_type ` 类型一致',
        )
        .optional(),
      leader: z
        .string()
        .describe('候选人直属上级 UserID ，将用于候选人内推奖规则判断，与入参 `user_id_type` 类型一致')
        .optional(),
      sequence: z
        .string()
        .describe('候选人序列 ID ，将用于候选人内推奖规则判断，与入参 `job_family_id_type ` 类型一致')
        .optional(),
      level: z
        .string()
        .describe('候选人职级 ID ，将用于候选人内推奖规则判断，与入参 `job_level_id_type ` 类型一致')
        .optional(),
      employee_type: z
        .string()
        .describe('候选人入职人员类型 ID，将用于候选人内推奖规则判断，与入参 `employee_type_id_type ` 类型一致')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_admin_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(以 open_department_id 来标识部门由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),people_admin_department_id(以 people_admin_department_id 来标识部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递ID，可通过接口  获取',
        ),
    }),
  },
};
export const hireV1ApplicationTransferStage = {
  project: 'hire',
  name: 'hire.v1.application.transferStage',
  sdkName: 'hire.v1.application.transferStage',
  path: '/open-apis/hire/v1/applications/:application_id/transfer_stage',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-投递管理-转移投递阶段-根据投递 ID 和投递阶段 ID 转移投递阶段',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      stage_id: z
        .string()
        .describe(
          '要转移到的阶段 ID，可通过接口获取',
        ),
    }),
    path: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1AttachmentGet = {
  project: 'hire',
  name: 'hire.v1.attachment.get',
  sdkName: 'hire.v1.attachment.get',
  path: '/open-apis/hire/v1/attachments/:attachment_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-附件-获取附件信息-根据附件 ID 和附件类型获取招聘系统中附件的信息，比如附件名称、附件创建时间、附件下载地址等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      type: z
        .number()
        .describe(
          '附件类型 Options:1(附件简历 简历附件，人才上的简历附件。),2(候选人作品 作品附件，人才上的作品附件。),3(自定义附件 通用附件，通过、、接口获取。)',
        )
        .optional(),
    }),
    path: z.object({
      attachment_id: z
        .string()
        .describe(
          '附件 ID，获取方式如下：- 简历附件 ID/作品附件 ID：通过接口获取- 通用附件 ID：通过、、接口获取',
        ),
    }),
  },
};
export const hireV1AttachmentPreview = {
  project: 'hire',
  name: 'hire.v1.attachment.preview',
  sdkName: 'hire.v1.attachment.preview',
  path: '/open-apis/hire/v1/attachments/:attachment_id/preview',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-附件-获取附件 PDF 格式下载链接-根据人才简历附件 ID 获取该简历附件对应的 PDF 文件的下载地址',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      attachment_id: z
        .string()
        .describe(
          '附件 ID，可通过接口返回数据中获取人才简历附件 ID',
        ),
    }),
  },
};
export const hireV1BackgroundCheckOrderList = {
  project: 'hire',
  name: 'hire.v1.backgroundCheckOrder.list',
  sdkName: 'hire.v1.backgroundCheckOrder.list',
  path: '/open-apis/hire/v1/background_check_orders',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-背调-获取背调信息列表-根据投递 ID 或背调更新时间批量获取背调订单信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      application_id: z
        .string()
        .describe(
          '投递 ID。可通过接口获取',
        )
        .optional(),
      update_start_time: z.string().describe('最早更新时间。毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间。毫秒时间戳').optional(),
    }),
  },
};
export const hireV1DiversityInclusionSearch = {
  project: 'hire',
  name: 'hire.v1.diversityInclusion.search',
  sdkName: 'hire.v1.diversityInclusion.search',
  path: '/open-apis/hire/v1/applications/diversity_inclusions/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-投递管理-获取申请表附加信息-获取候选人的申请表附加信息。支持通过投递 ID 或者人才 ID 进行查询',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_ids: z
        .array(z.string())
        .describe(
          '人才 ID 列表，如何获取人才 ID 请参考**特殊说明：**- 当通过人才 ID 列表查询时会返回对应人才最新投递的申请表附加信息。- 当人才 ID 列表或投递 ID 列表同时存在将以人才 ID 列表为准。- 当人才 ID 列表和投递 ID 列表都没有填写时则返回空数据',
        )
        .optional(),
      application_ids: z
        .array(z.string())
        .describe(
          '投递 ID 列表，如何获取投递 ID 请参考',
        )
        .optional(),
    }),
  },
};
export const hireV1EcoAccountCustomFieldBatchDelete = {
  project: 'hire',
  name: 'hire.v1.ecoAccountCustomField.batchDelete',
  sdkName: 'hire.v1.ecoAccountCustomField.batchDelete',
  path: '/open-apis/hire/v1/eco_account_custom_fields/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-账号-删除账号自定义字段-飞书招聘的背调或笔试服务商，可通过此接口删除账号自定义字段（如客户在服务商处的租户 ID、账号 ID等）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z.number().describe('适用范围 Options:1(背调),2(笔试)'),
      custom_field_key_list: z.array(z.string()).describe('要删除的自定义字段的 key 列表').optional(),
    }),
  },
};
export const hireV1EcoAccountCustomFieldBatchUpdate = {
  project: 'hire',
  name: 'hire.v1.ecoAccountCustomField.batchUpdate',
  sdkName: 'hire.v1.ecoAccountCustomField.batchUpdate',
  path: '/open-apis/hire/v1/eco_account_custom_fields/batch_update',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-招聘-生态对接-账号-更新账号自定义字段-飞书招聘的背调或笔试服务商，可通过此接口更新账号自定义字段（比如客户在服务商处的租户 ID、账号 ID等）的名称和描述',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z.number().describe('适用范围 Options:1(背调),2(笔试)'),
      custom_field_list: z
        .array(
          z.object({
            key: z.string().describe('当前`scope`下已存在的自定义字段的标识'),
            name: z
              .object({
                zh_cn: z.string().describe('自定义字段中文名称').optional(),
                en_us: z.string().describe('自定义字段英文名称').optional(),
              })
              .describe(
                '自定义字段的名称。用户在「飞书招聘」-「设置」-「生态对接」-「笔试/背景调查」下添加账号时看到的表单控件标题',
              ),
            is_required: z
              .boolean()
              .describe('是否必填。**可选值有**：* `true`：必填* `false`：非必填**注意**：该字段在当前接口暂不生效'),
            description: z
              .object({
                zh_cn: z.string().describe('中文名称').optional(),
                en_us: z.string().describe('英文名称').optional(),
              })
              .describe(
                '自定义字段的描述。用户在「飞书招聘」-「设置」-「生态对接」-「笔试/背景调查」下添加账号时看到的控件提示信息',
              )
              .optional(),
          }),
        )
        .describe('自定义字段列表'),
    }),
  },
};
export const hireV1EcoAccountCustomFieldCreate = {
  project: 'hire',
  name: 'hire.v1.ecoAccountCustomField.create',
  sdkName: 'hire.v1.ecoAccountCustomField.create',
  path: '/open-apis/hire/v1/eco_account_custom_fields',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-账号-创建账号自定义字段-飞书招聘的背调或笔试服务商，可通过此接口创建账号自定义字段，用来标识飞书招聘客户在服务商处的身份（比如客户在服务商处的租户 ID、账号 ID等字段）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z.number().describe('适用范围 Options:1(背调),2(笔试)'),
      custom_field_list: z
        .array(
          z.object({
            key: z.string().describe('自定义字段的标识。在同一`scope`内须唯一'),
            name: z
              .object({
                zh_cn: z.string().describe('自定义字段中文名称').optional(),
                en_us: z.string().describe('自定义字段英文名称').optional(),
              })
              .describe(
                '自定义字段的名称。用户在「飞书招聘」-「设置」-「生态对接」-「笔试/背景调查」下添加账号时看到的表单控件标题',
              ),
            is_required: z.boolean().describe('是否必填。**可选值有**：* `true`：必填* `false`：非必填'),
            description: z
              .object({
                zh_cn: z.string().describe('中文名称').optional(),
                en_us: z.string().describe('英文名称').optional(),
              })
              .describe(
                '自定义字段的描述。用户在「飞书招聘」-「设置」-「生态对接」-「笔试/背景调查」下添加账号时看到的控件提示信息',
              )
              .optional(),
          }),
        )
        .describe('自定义字段列表'),
    }),
  },
};
export const hireV1EcoBackgroundCheckCustomFieldBatchDelete = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckCustomField.batchDelete',
  sdkName: 'hire.v1.ecoBackgroundCheckCustomField.batchDelete',
  path: '/open-apis/hire/v1/eco_background_check_custom_fields/batch_delete',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-生态对接-背调-删除背调自定义字段-删除用户在发起背调时展示的表单自定义字段',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可通过事件获取',
        ),
    }),
  },
};
export const hireV1EcoBackgroundCheckCustomFieldBatchUpdate = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckCustomField.batchUpdate',
  sdkName: 'hire.v1.ecoBackgroundCheckCustomField.batchUpdate',
  path: '/open-apis/hire/v1/eco_background_check_custom_fields/batch_update',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-招聘-生态对接-背调-更新背调自定义字段-更新用户在发起背调时展示的表单自定义字段名称和描述',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可通过事件获取',
        ),
      custom_field_list: z
        .array(
          z.object({
            type: z
              .enum(['text', 'textarea', 'number', 'boolean', 'select', 'multiselect', 'date', 'file', 'resume'])
              .describe(
                '自定义字段类型 Options:text(单行文本，最多100个汉字),textarea(MultiText 多行文本，最多200个汉字),number(数字),boolean(布尔),select(Choice 单选),multiselect(MultiChoice 多选),date(日期),file(Attachment 附件),resume(候选人简历)',
              ),
            key: z.string().describe('自定义字段的标识，在同一账号内唯一'),
            name: z
              .object({
                zh_cn: z.string().describe('中文名称').optional(),
                en_us: z.string().describe('英文名称').optional(),
              })
              .describe('自定义字段的名称，用户在安排背调表单看到的控件标题'),
            is_required: z.boolean().describe('是否必填'),
            description: z
              .object({
                zh_cn: z.string().describe('中文描述').optional(),
                en_us: z.string().describe('英文描述').optional(),
              })
              .describe('自定义字段的描述，如果是输入控件，为用户在安排背调表单看到的 placeholder 或 提示文字')
              .optional(),
            options: z
              .array(
                z.object({
                  key: z.string().describe('选项的唯一标识'),
                  name: z
                    .object({
                      zh_cn: z.string().describe('中文名称').optional(),
                      en_us: z.string().describe('英文名称').optional(),
                    })
                    .describe('选项的名称'),
                }),
              )
              .describe('type 为 select 或 multiselect 时必填，单选或多选的选项')
              .optional(),
          }),
        )
        .describe(
          '自定义字段列表。**注意**：列表长度须与时传入的一致',
        ),
    }),
  },
};
export const hireV1EcoBackgroundCheckCustomFieldCreate = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckCustomField.create',
  sdkName: 'hire.v1.ecoBackgroundCheckCustomField.create',
  path: '/open-apis/hire/v1/eco_background_check_custom_fields',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-创建背调自定义字段-创建用户在发起背调时展示的表单自定义字段。自定义字段支持多种类型如单行文本、单选等，可以设置为必填或非必填',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可在事件中获取',
        ),
      custom_field_list: z
        .array(
          z.object({
            type: z
              .enum(['text', 'textarea', 'number', 'boolean', 'select', 'multiselect', 'date', 'file', 'resume'])
              .describe(
                '自定义字段类型 Options:text(单行文本，最多100个汉字),textarea(MultiText 多行文本，最多200个汉字),number(数字),boolean(布尔),select(Choice 单选),multiselect(MultiChoice 多选),date(日期),file(Attachment 附件),resume(候选人简历)',
              ),
            key: z.string().describe('自定义字段的标识，在同一账号内唯一'),
            name: z
              .object({
                zh_cn: z.string().describe('中文名称').optional(),
                en_us: z.string().describe('英文名称').optional(),
              })
              .describe('自定义字段的名称，用户在安排背调表单看到的控件标题'),
            is_required: z.boolean().describe('是否必填'),
            description: z
              .object({
                zh_cn: z.string().describe('中文描述').optional(),
                en_us: z.string().describe('英文描述').optional(),
              })
              .describe(
                '自定义字段的描述。如果是输入控件（type=text 或 type=textarea），为用户在安排背调表单看到的 placeholder 或 提示文字',
              )
              .optional(),
            options: z
              .array(
                z.object({
                  key: z.string().describe('选项的唯一标识'),
                  name: z
                    .object({
                      zh_cn: z.string().describe('中文名称').optional(),
                      en_us: z.string().describe('英文名称').optional(),
                    })
                    .describe('选项的名称'),
                }),
              )
              .describe('type 为`select`或`multiselect`时必填，单选或多选的选项')
              .optional(),
          }),
        )
        .describe('自定义字段列表'),
    }),
  },
};
export const hireV1EcoBackgroundCheckPackageBatchDelete = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckPackage.batchDelete',
  sdkName: 'hire.v1.ecoBackgroundCheckPackage.batchDelete',
  path: '/open-apis/hire/v1/eco_background_check_packages/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-删除背调套餐和附加调查项-删除背调帐号下的背调套餐和附加调查项信息。删除操作不会影响已创建的背调',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可通过事件获取',
        ),
      package_id_list: z.array(z.string()).describe('要删除的套餐 ID 列表。删除套餐不影响已安排的背调').optional(),
      additional_item_id_list: z
        .array(z.string())
        .describe('要删除的附加调查项 ID 列表。删除附加调查项不影响已安排的背调')
        .optional(),
    }),
  },
};
export const hireV1EcoBackgroundCheckPackageBatchUpdate = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckPackage.batchUpdate',
  sdkName: 'hire.v1.ecoBackgroundCheckPackage.batchUpdate',
  path: '/open-apis/hire/v1/eco_background_check_packages/batch_update',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-更新背调套餐和附加调查项-更新指定背调帐号下的背调套餐和附加调查项信息。如需新增背调套餐、附加调查项请使用进行添加',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可通过事件获取',
        ),
      package_list: z
        .array(
          z.object({
            id: z.string().describe('账号下已有的套餐 ID'),
            name: z.string().describe('套餐名称'),
            description: z.string().describe('套餐描述').optional(),
          }),
        )
        .describe('背调套餐列表'),
      additional_item_list: z
        .array(
          z.object({
            id: z.string().describe('账号下已有的附加调查项 ID'),
            name: z.string().describe('附加调查项名称'),
            description: z.string().describe('附加调查项描述').optional(),
          }),
        )
        .describe('附加调查项列表')
        .optional(),
    }),
  },
};
export const hireV1EcoBackgroundCheckPackageCreate = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheckPackage.create',
  sdkName: 'hire.v1.ecoBackgroundCheckPackage.create',
  path: '/open-apis/hire/v1/eco_background_check_packages',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-创建背调套餐和附加调查项-在指定背调帐号下创建可用的背调套餐列表和附加调查项信息列表。该接口为增量创建，每次调用会在原有的套餐列表和附加调查项列表基础上新增',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '背调账号 ID，可通过事件获取',
        ),
      package_list: z
        .array(
          z.object({
            id: z.string().describe('套餐 ID。由调用方自定义**注意**：长度不超过`36`字符'),
            name: z.string().describe('套餐名称'),
            description: z.string().describe('套餐描述').optional(),
          }),
        )
        .describe('背调套餐列表'),
      additional_item_list: z
        .array(
          z.object({
            id: z.string().describe('附件调查项 ID。由调用方自定义**注意**：长度不超过`36`字符'),
            name: z.string().describe('附加调查项名称'),
            description: z.string().describe('附加调查项描述').optional(),
          }),
        )
        .describe('附加调查项列表')
        .optional(),
    }),
  },
};
export const hireV1EcoBackgroundCheckCancel = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheck.cancel',
  sdkName: 'hire.v1.ecoBackgroundCheck.cancel',
  path: '/open-apis/hire/v1/eco_background_checks/cancel',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-终止背调订单-调用此接口将会将背调订单状态变成已终止，已终止订单将将无法通过和修改订单进度和最终结果。 调用此接口前，建议先调用接口将订单进度更新为「已终止」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      background_check_id: z
        .string()
        .describe(
          '背调 ID。可通过事件获取',
        ),
    }),
  },
};
export const hireV1EcoBackgroundCheckUpdateProgress = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheck.updateProgress',
  sdkName: 'hire.v1.ecoBackgroundCheck.updateProgress',
  path: '/open-apis/hire/v1/eco_background_checks/update_progress',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-更新背调订单进度-更新指定背调订单的进度信息和阶段性报告，进度信息将会被展示在「飞书招聘」-「投递详情页」-「背调卡片」上，告知用户目前背调订单的流转状态',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      background_check_id: z
        .string()
        .describe(
          '背调 ID。可通过事件获取',
        ),
      stage_id: z.string().describe('阶段 ID。同一背调订单此 ID 不能重复，由调用方自定义'),
      stage_en_name: z.string().describe('背调阶段英文名称').optional(),
      stage_name: z.string().describe('背调阶段名称'),
      stage_time: z.string().describe('阶段进度更新时间。 毫秒时间戳，每次调用此字段应严格递增'),
      result: z
        .string()
        .describe('背调结果（阶段性背调结果）。**注意**：若需回传该字段，report_file_list为必填')
        .optional(),
      report_file_list: z
        .array(
          z.object({
            report_name: z.string().describe('报告名称'),
            report_url: z
              .string()
              .describe('报告地址；当report_url_type 为空或为 1 时需为可下载的 pdf 链接；为 2 时为预览型链接'),
            report_url_type: z
              .number()
              .describe(
                '报告地址类型；枚举值为空或 1 时为可下载的 pdf 链接，2 为预览型链接 Options:1(DownloadLink 可下载的链接),2(ExternalLink 预览型链接)',
              )
              .optional(),
          }),
        )
        .describe('报告列表')
        .optional(),
    }),
  },
};
export const hireV1EcoBackgroundCheckUpdateResult = {
  project: 'hire',
  name: 'hire.v1.ecoBackgroundCheck.updateResult',
  sdkName: 'hire.v1.ecoBackgroundCheck.updateResult',
  path: '/open-apis/hire/v1/eco_background_checks/update_result',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-背调-回传背调订单的最终结果-回传背调的最终结果和终版报告。回传后，若租户未启用背调报告审批功能，则背调订单状态将会直接变成「已完成」。若启用背调报告审批功能，则在管理员审批通过后，订单状态流转为「已完成」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      background_check_id: z
        .string()
        .describe(
          '背调 ID。可通过事件获取',
        ),
      result: z.string().describe('背调结果'),
      result_time: z.string().describe('背调结果时间。毫秒时间戳'),
      report_file_list: z
        .array(
          z.object({
            report_name: z.string().describe('报告名称'),
            report_url: z
              .string()
              .describe('报告地址；当report_url_type 为空或为 1 时需为可下载的 pdf 链接；为 2 时为预览型链接'),
            report_url_type: z
              .number()
              .describe(
                '报告地址类型；枚举值为空或 1 时为可下载的 pdf 链接，2 为预览型链接 Options:1(DownloadLink 可下载的链接),2(ExternalLink 外链型链接)',
              )
              .optional(),
          }),
        )
        .describe('报告列表')
        .optional(),
    }),
  },
};
export const hireV1EcoExamPaperBatchDelete = {
  project: 'hire',
  name: 'hire.v1.ecoExamPaper.batchDelete',
  sdkName: 'hire.v1.ecoExamPaper.batchDelete',
  path: '/open-apis/hire/v1/eco_exam_papers/batch_delete',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-笔试-删除试卷列表-飞书招聘的笔试服务商，可通过该接口删除客户笔试帐号下的试卷列表。删除操作不影响已安排的笔试，删除不存在的试卷时不会报错',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '笔试账号 ID，可通过事件获取',
        ),
      paper_id_list: z
        .array(z.string())
        .describe(
          '试卷 ID 列表。为通过传入的 ID',
        ),
    }),
  },
};
export const hireV1EcoExamPaperBatchUpdate = {
  project: 'hire',
  name: 'hire.v1.ecoExamPaper.batchUpdate',
  sdkName: 'hire.v1.ecoExamPaper.batchUpdate',
  path: '/open-apis/hire/v1/eco_exam_papers/batch_update',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-招聘-生态对接-笔试-更新试卷列表-飞书招聘的笔试服务商，可通过该接口更新客户笔试账号下的试卷列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '笔试账号 ID，可通过事件获取',
        ),
      paper_list: z
        .array(
          z.object({
            id: z
              .string()
              .describe(
                '试卷 ID，为通过传入的 ID',
              ),
            name: z.string().describe('试卷名称**注意**：试卷名称长度应不超过`255`字符，超出部分将被截断'),
            duration: z.number().describe('笔试时长（分钟）').optional(),
            question_count: z.number().describe('试卷题目数量').optional(),
            start_time: z
              .string()
              .describe(
                '笔试开始时间，毫秒时间戳。留空或不传表示不限制开始时间。**注意**：若传值且`end_time`不为空，则开始时间必须小于结束时间',
              )
              .optional(),
            end_time: z
              .string()
              .describe(
                '笔试结束时间，毫秒时间戳。留空或不传表示不限制结束时间**注意**：若传值且`start_time `不为空，则结束时间必须大于开始时间',
              )
              .optional(),
          }),
        )
        .describe('试卷列表'),
    }),
  },
};
export const hireV1EcoExamPaperCreate = {
  project: 'hire',
  name: 'hire.v1.ecoExamPaper.create',
  sdkName: 'hire.v1.ecoExamPaper.create',
  path: '/open-apis/hire/v1/eco_exam_papers',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-笔试-创建试卷列表-飞书招聘的笔试服务商，在完成后，可通过本接口在客户的笔试帐号下创建试卷列表。若客户的笔试账号为「未激活」、「停用」状态，则试卷创建成功后，客户的账号将变为「正常」状态，可正常安排笔试',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      account_id: z
        .string()
        .describe(
          '笔试账号 ID，可通过事件获取',
        ),
      paper_list: z
        .array(
          z.object({
            id: z.string().describe('试卷 ID。由调用方自定义**注意**：试卷 ID 长度应不超过`255`字符，超出部分将被截断'),
            name: z.string().describe('试卷名称**注意**：试卷名称长度应不超过`255`字符，超出部分将被截断'),
            duration: z.number().describe('考试时长（分钟）').optional(),
            question_count: z.number().describe('试卷题目数量').optional(),
            start_time: z
              .string()
              .describe(
                '笔试开始时间，毫秒时间戳。留空或不传表示不限制开始时间。**注意**：若传值且`end_time`不为空，则开始时间必须小于结束时间',
              )
              .optional(),
            end_time: z
              .string()
              .describe(
                '笔试结束时间，毫秒时间戳。留空或不传表示不限制结束时间**注意**：若传值且`start_time `不为空，则结束时间必须大于开始时间',
              )
              .optional(),
          }),
        )
        .describe('试卷列表'),
    }),
  },
};
export const hireV1EcoExamLoginInfo = {
  project: 'hire',
  name: 'hire.v1.ecoExam.loginInfo',
  sdkName: 'hire.v1.ecoExam.loginInfo',
  path: '/open-apis/hire/v1/eco_exams/:exam_id/login_info',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-笔试-回传笔试安排结果-飞书招聘的笔试服务商，在收到事件并安排笔试后，应通过本接口回传笔试安排结果。若安排成功，须返回笔试链接；若笔试链接需要登录鉴权，则须返回登录凭证（`username`，`password`)',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      result: z.number().describe('状态码。* 0：成功* 非0：服务商内部的失败错误码').optional(),
      msg: z.string().describe('安排成功或失败的描述信息').optional(),
      exam_login_info: z
        .object({
          exam_url: z.string().describe('笔试链接。若返回的链接已经附带候选人唯一标识且无需登录鉴权，可只返回此链接'),
          username: z.string().describe('登录用户名。**注意**：若笔试链接需要登录鉴权，须返回此登录凭证').optional(),
          password: z.string().describe('登录密码。**注意**：若笔试链接需要登录鉴权，须返回此登录凭证').optional(),
        })
        .describe('笔试作答信息'),
    }),
    path: z.object({
      exam_id: z
        .string()
        .describe(
          '笔试 ID。可通过事件获取',
        ),
    }),
  },
};
export const hireV1EcoExamUpdateResult = {
  project: 'hire',
  name: 'hire.v1.ecoExam.updateResult',
  sdkName: 'hire.v1.ecoExam.updateResult',
  path: '/open-apis/hire/v1/eco_exams/:exam_id/update_result',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-生态对接-笔试-回传笔试结果-飞书招聘的笔试服务商，可通过该接口回传候选人的笔试结果。回传笔试结果后，候选人在飞书招聘内的笔试状态将变为「已作答」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      result: z
        .string()
        .describe('笔试结果。表示该场笔试考生的笔试成绩，推荐传 "0"-"100" 的数字（字符串格式），如 "60"、"90" 等'),
      result_time: z.string().describe('笔试结果时间，毫秒时间戳').optional(),
      report_list: z
        .array(
          z.object({
            name: z.string().describe('报告名称'),
            url: z.string().describe('报告链接'),
            answer_time: z.string().describe('作答完成时间，毫秒时间戳').optional(),
          }),
        )
        .describe('报告列表')
        .optional(),
      detail_list: z
        .array(
          z.object({
            id: z.string().describe('评价项 ID，由调用方自定义').optional(),
            name: z
              .string()
              .describe(
                '评价项名称，由调用方自定义。单次调用支持传入多个相同的评价项名称，结果将在「飞书招聘」-「候选人详情」-「笔试卡片」中并列展示',
              ),
            result: z.string().describe('评价结果，由调用方自定义'),
          }),
        )
        .describe('详细评价结果')
        .optional(),
    }),
    path: z.object({
      exam_id: z
        .string()
        .describe(
          '笔试 ID，可通过事件获取',
        ),
    }),
  },
};
export const hireV1EhrImportTaskPatch = {
  project: 'hire',
  name: 'hire.v1.ehrImportTask.patch',
  sdkName: 'hire.v1.ehrImportTask.patch',
  path: '/open-apis/hire/v1/ehr_import_tasks/:ehr_import_task_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-入职-更新 e-HR 导入任务结果-在处理完事件后，可调用该接口，更新 e-HR 导入任务结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      fail_reason: z.string().describe('失败原因，仅在导入结果为失败时可用').optional(),
      redirect_url: z
        .string()
        .describe(
          '跳转链接，若需返回跳转链接，请前往「飞书招聘」-「设置」-「生态对接」- 「e-HR / OA 办公系统」 - 「导入 e-HR」功能设置中开启「支持对接的 e-HR / OA 系统返回外部链接」开关',
        )
        .optional(),
      state: z.number().describe('导入结果 Options:1(导入成功),2(导入失败)'),
    }),
    path: z.object({
      ehr_import_task_id: z
        .string()
        .describe(
          '导入任务 ID，任务 ID 来源于导入 e-HR 事件中的 task_id，详情参考',
        ),
    }),
  },
};
export const hireV1EmployeeGet = {
  project: 'hire',
  name: 'hire.v1.employee.get',
  sdkName: 'hire.v1.employee.get',
  path: '/open-apis/hire/v1/employees/:employee_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-入职-通过员工 ID 获取入职信息-通过员工 ID 获取入职信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_admin_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。),people_admin_department_id(以 people_admin_department_id 来标识部门，该 ID 类型即将下线，不推荐使用)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      employee_id: z
        .string()
        .describe(
          '员工ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1EmployeeGetByApplication = {
  project: 'hire',
  name: 'hire.v1.employee.getByApplication',
  sdkName: 'hire.v1.employee.getByApplication',
  path: '/open-apis/hire/v1/employees/get_by_application',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-入职-通过投递 ID 获取入职信息-通过投递 ID 获取员工入职信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      application_id: z
        .string()
        .describe(
          '投递ID，可通过接口获取',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_admin_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。),people_admin_department_id(以 people_admin_department_id 来标识部门，该 ID 类型即将下线，不推荐使用)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1EmployeePatch = {
  project: 'hire',
  name: 'hire.v1.employee.patch',
  sdkName: 'hire.v1.employee.patch',
  path: '/open-apis/hire/v1/employees/:employee_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-候选人管理-投递流程-入职-更新员工状态-根据员工 ID 更新员工招聘系统内的转正、离职状态',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operation: z
        .number()
        .describe(
          '修改状态操作类型 Options:1(Convert 转正),2(Overboard 离职),3(Cancel 恢复至待入职),4(WithdrawOverboard 撤销离职（恢复至已入职）),5(WithdrawConversion 撤销转正（恢复至待转正）)',
        ),
      conversion_info: z
        .object({ actual_conversion_time: z.number().describe('实际转正日期，毫秒时间戳').optional() })
        .describe('转正信息，操作类型operation为`转正`时必填')
        .optional(),
      overboard_info: z
        .object({
          actual_overboard_time: z.number().describe('实际离职日期，毫秒时间戳').optional(),
          overboard_note: z.string().describe('离职原因').optional(),
        })
        .describe('离职信息，操作类型operation为`离职`时必填')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id', 'people_admin_department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(以 open_department_id 来标识部门由系统自动生成的部门 ID，ID 前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。),people_admin_department_id(以 people_admin_department_id 来标识部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过 接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过 接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过 接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      employee_id: z
        .string()
        .describe(
          '员工ID，请参考：',
        ),
    }),
  },
};
export const hireV1EvaluationTaskList = {
  project: 'hire',
  name: 'hire.v1.evaluationTask.list',
  sdkName: 'hire.v1.evaluationTask.list',
  path: '/open-apis/hire/v1/evaluation_tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-招聘进程跟进-获取简历评估任务列表-根据评估人ID查询评估任务列表，可以查询到的信息包括：评估ID、投递ID、任务状态等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id: z.string().describe('评估人 ID，需要与user_id_type类型保持一致'),
      activity_status: z
        .number()
        .describe('任务状态，不传则查询全部记录 Options:1(待评估),2(已评估),3(无需评估)')
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1EvaluationList = {
  project: 'hire',
  name: 'hire.v1.evaluation.list',
  sdkName: 'hire.v1.evaluation.list',
  path: '/open-apis/hire/v1/evaluations',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-评估-获取简历评估信息列表-批量获取简历评估信息，包含评估人、评估结论、评估详情等信息。支持按照投递 ID、更新时间来进行筛选',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量，最大100').optional(),
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        )
        .optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ExamMarkingTaskList = {
  project: 'hire',
  name: 'hire.v1.examMarkingTask.list',
  sdkName: 'hire.v1.examMarkingTask.list',
  path: '/open-apis/hire/v1/exam_marking_tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-招聘进程跟进-获取笔试阅卷任务列表-根据阅卷人ID查询员工笔试阅卷任务列表，能查询到的信息包括：笔试阅卷任务ID、投递ID、任务状态等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id: z.string().describe('阅卷人 ID，需要与user_id_type类型保持一致'),
      activity_status: z.number().describe('任务状态，不传则查询全部记录 Options:1(待阅卷),2(已阅卷)').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ExamCreate = {
  project: 'hire',
  name: 'hire.v1.exam.create',
  sdkName: 'hire.v1.exam.create',
  path: '/open-apis/hire/v1/exams',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-笔试-添加笔试结果-根据投递 ID 添加该投递下的笔试结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过获取',
        ),
      exam_resource_name: z.string().describe('试卷名称'),
      score: z.number().describe('笔试分数（精度为小数点后 1 位）'),
      uuid: z
        .string()
        .describe(
          '报告附件 ID，可通过上传报告附件，生成对应附件 ID',
        )
        .optional(),
      operator_id: z.string().describe('添加人用户 id，与入参`user_id_type` 保持一致'),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ExternalApplicationCreate = {
  project: 'hire',
  name: 'hire.v1.externalApplication.create',
  sdkName: 'hire.v1.externalApplication.create',
  path: '/open-apis/hire/v1/external_applications',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部投递信息-创建外部投递-创建外部投递，可用于导入来自其他系统的投递信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_id: z
        .string()
        .describe(
          '外部系统投递主键 （仅用于幂等）- 若不传此值，则不进行幂等校验- 若传此值，则用于幂等校验，同一 `external_id` 24小时内仅可创建一次',
        )
        .optional(),
      job_recruitment_type: z
        .number()
        .describe('职位招聘类型 Options:1(social_recruitment 社招),2(campus_recruitment 校招)')
        .optional(),
      job_title: z.string().describe('职位名称').optional(),
      resume_source: z.string().describe('简历来源').optional(),
      stage: z.string().describe('阶段名称').optional(),
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
      termination_reason: z.string().describe('终止原因').optional(),
      delivery_type: z
        .number()
        .describe(
          '投递类型 Options:1(HR_visit HR 寻访),2(candidate_delivery 候选人主动投递),3(talent_recommend 人才推荐),4(others 其他)',
        )
        .optional(),
      modify_time: z.number().describe('投递在外部系统终止时间，毫秒时间戳（字段类型为：int64）').optional(),
      create_time: z.number().describe('投递在外部系统创建时间，毫秒时间戳（字段类型为：int64）').optional(),
      termination_type: z.string().describe('终止类型').optional(),
    }),
  },
};
export const hireV1ExternalApplicationDelete = {
  project: 'hire',
  name: 'hire.v1.externalApplication.delete',
  sdkName: 'hire.v1.externalApplication.delete',
  path: '/open-apis/hire/v1/external_applications/:external_application_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部投递信息-删除外部投递-根据外部投递 ID 删除外部投递',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        )
        .optional(),
    }),
    path: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalApplicationList = {
  project: 'hire',
  name: 'hire.v1.externalApplication.list',
  sdkName: 'hire.v1.externalApplication.list',
  path: '/open-apis/hire/v1/external_applications',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部投递信息-查询外部投递列表-可根据人才 ID 获取人才外部投递列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
      page_size: z.number().describe('分页大小**默认值：**10').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalApplicationUpdate = {
  project: 'hire',
  name: 'hire.v1.externalApplication.update',
  sdkName: 'hire.v1.externalApplication.update',
  path: '/open-apis/hire/v1/external_applications/:external_application_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部投递信息-更新外部投递-更新外部投递信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_recruitment_type: z
        .number()
        .describe('职位招聘类型 Options:1(social_recruitment 社招),2(campus_recruitment 校招)')
        .optional(),
      job_title: z.string().describe('职位名称').optional(),
      resume_source: z.string().describe('简历来源').optional(),
      stage: z.string().describe('阶段名称').optional(),
      termination_reason: z.string().describe('终止原因').optional(),
      delivery_type: z
        .number()
        .describe(
          '投递类型 Options:1(HR_visit HR 寻访),2(candidate_delivery 候选人主动投递),3(talent_recommend 人才推荐),4(others 其他)',
        )
        .optional(),
      modify_time: z.number().describe('投递在外部系统终止时间，毫秒时间戳（字段类型为：int64）').optional(),
      create_time: z.number().describe('投递在外部系统创建时间，毫秒时间戳（字段类型为：int64）').optional(),
      termination_type: z.string().describe('终止类型').optional(),
    }),
    path: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalBackgroundCheckBatchQuery = {
  project: 'hire',
  name: 'hire.v1.externalBackgroundCheck.batchQuery',
  sdkName: 'hire.v1.externalBackgroundCheck.batchQuery',
  path: '/open-apis/hire/v1/external_background_checks/batch_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部背调信息-查询外部背调列表-可根据外部投递 ID 或外部背调 ID 列表查询外部背调信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_background_check_id_list: z
        .array(z.string())
        .describe('外部背调 ID 列表，当传此值时，仅以此值作为条件查询，其他查询条件不生效')
        .optional(),
    }),
    params: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalBackgroundCheckCreate = {
  project: 'hire',
  name: 'hire.v1.externalBackgroundCheck.create',
  sdkName: 'hire.v1.externalBackgroundCheck.create',
  path: '/open-apis/hire/v1/external_background_checks',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部背调信息-创建外部背调-创建外部背调，可用于导入来自其他系统的背调信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_id: z
        .string()
        .describe(
          '外部系统背调主键 （仅用于幂等）- 若不传此值，则不进行幂等校验- 若传此值，则用于幂等校验，同一`external_id` 24小时内仅可创建一次',
        )
        .optional(),
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        ),
      date: z.number().describe('背调日期，毫秒时间戳（字段类型为：int64）').optional(),
      name: z.string().describe('背调名称').optional(),
      result: z.string().describe('背调结果').optional(),
      attachment_id_list: z
        .array(z.string())
        .describe(
          '背调附件 ID 列表，可通过接口返回',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalBackgroundCheckDelete = {
  project: 'hire',
  name: 'hire.v1.externalBackgroundCheck.delete',
  sdkName: 'hire.v1.externalBackgroundCheck.delete',
  path: '/open-apis/hire/v1/external_background_checks/:external_background_check_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部背调信息-删除外部背调-根据外部背调 ID 删除外部背调',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      external_background_check_id: z
        .string()
        .describe(
          '外部背调 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1ExternalBackgroundCheckUpdate = {
  project: 'hire',
  name: 'hire.v1.externalBackgroundCheck.update',
  sdkName: 'hire.v1.externalBackgroundCheck.update',
  path: '/open-apis/hire/v1/external_background_checks/:external_background_check_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部背调信息-更新外部背调-更新外部背调信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        ),
      date: z.number().describe('背调日期，毫秒时间戳（字段类型为：int64）').optional(),
      name: z.string().describe('背调名称').optional(),
      result: z.string().describe('背调结果').optional(),
      attachment_id_list: z
        .array(z.string())
        .describe(
          '背调附件 ID 列表，可通过接口返回',
        )
        .optional(),
    }),
    path: z.object({
      external_background_check_id: z
        .string()
        .describe(
          '外部背调 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1ExternalInterviewAssessmentCreate = {
  project: 'hire',
  name: 'hire.v1.externalInterviewAssessment.create',
  sdkName: 'hire.v1.externalInterviewAssessment.create',
  path: '/open-apis/hire/v1/external_interview_assessments',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-创建外部面评-导入来自其他系统的面评信息，创建为外部面评',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_id: z.string().describe('外部系统面评主键（仅用于幂等）').optional(),
      username: z.string().describe('面试官姓名').optional(),
      conclusion: z.number().describe('面试结果 Options:1(不通过),2(通过),3(待定)').optional(),
      assessment_dimension_list: z
        .array(
          z.object({
            score: z.number().describe('打分题分数（当题目类型为「打分题」时使用）').optional(),
            option: z.string().describe('单选选项（当题目类型为「单选题」时使用）').optional(),
            options: z.array(z.string()).describe('多选选项（当题目类型为「多选题」时使用）').optional(),
            content: z.string().describe('描述内容（当题目类型为「描述题」时使用）').optional(),
            assessment_type: z.number().describe('题目类型 Options:1(打分题),2(单选题),3(描述题),4(多选题)').optional(),
            title: z.string().describe('题目标题').optional(),
            description: z.string().describe('题目描述').optional(),
          }),
        )
        .describe('评价维度列表')
        .optional(),
      content: z.string().describe('综合记录').optional(),
      external_interview_id: z.string().describe('外部面试 ID'),
    }),
  },
};
export const hireV1ExternalInterviewAssessmentPatch = {
  project: 'hire',
  name: 'hire.v1.externalInterviewAssessment.patch',
  sdkName: 'hire.v1.externalInterviewAssessment.patch',
  path: '/open-apis/hire/v1/external_interview_assessments/:external_interview_assessment_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-更新外部面评-更新外部面评部分字段，没有填写的字段不会被更新',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      username: z.string().describe('面试官姓名').optional(),
      conclusion: z.number().describe('面试结果 Options:1(Fail 不通过),2(Pass 通过),3(toBeDetermined 待定)').optional(),
      assessment_dimension_list: z
        .array(
          z.object({
            score: z.number().describe('打分题分数（当题目类型为「打分题」时使用）').optional(),
            option: z.string().describe('单选选项（当题目类型为「单选题」时使用）').optional(),
            options: z.array(z.string()).describe('多选选项（当题目类型为「多选题」时使用）').optional(),
            content: z.string().describe('描述内容（当题目类型为「描述题」时使用）').optional(),
            assessment_type: z
              .number()
              .describe('题目类型 Options:1(Score 打分题),2(singleChoice 单选题),3(text 描述题),4(multiChoice 多选题)')
              .optional(),
            title: z.string().describe('题目标题').optional(),
            description: z.string().describe('题目描述').optional(),
          }),
        )
        .describe('评价维度列表')
        .optional(),
      content: z.string().describe('综合记录').optional(),
    }),
    path: z.object({ external_interview_assessment_id: z.string().describe('外部面评 ID') }),
  },
};
export const hireV1ExternalInterviewBatchQuery = {
  project: 'hire',
  name: 'hire.v1.externalInterview.batchQuery',
  sdkName: 'hire.v1.externalInterview.batchQuery',
  path: '/open-apis/hire/v1/external_interviews/batch_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-查询外部面试列表-可根据外部投递 ID 或外部面试 ID 列表查询外部面试信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_interview_id_list: z
        .array(z.string())
        .describe('外部面试 ID 列表，当传此值时，仅以此值作为条件查询，其他查询条件不生效')
        .optional(),
    }),
    params: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalInterviewCreate = {
  project: 'hire',
  name: 'hire.v1.externalInterview.create',
  sdkName: 'hire.v1.externalInterview.create',
  path: '/open-apis/hire/v1/external_interviews',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-创建外部面试-创建外部面试，可用于导入来自其他系统的面试信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_id: z
        .string()
        .describe(
          '外部系统面试主键 （仅用于幂等）- 若不传此值，则不进行幂等校验- 若传此值，则用于幂等校验，同一`external_id` 24小时内仅可创建一次',
        )
        .optional(),
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        ),
      participate_status: z
        .number()
        .describe('参与状态 Options:1(NotStart 未参与),2(Participated 参与),3(NotPaticipated 爽约)')
        .optional(),
      begin_time: z.number().describe('开始时间，毫秒时间戳（字段类型为：int64）').optional(),
      end_time: z.number().describe('结束时间，毫秒时间戳（字段类型为：int64）').optional(),
      interview_assessments: z
        .array(
          z.object({
            username: z.string().describe('面试官姓名').optional(),
            conclusion: z
              .number()
              .describe('面试结论 Options:1(Fail 不通过),2(Pass 通过),3(toBeDetermined 待定)')
              .optional(),
            assessment_dimension_list: z
              .array(
                z.object({
                  score: z.number().describe('打分题分数（当维度类型为「打分题」时使用）').optional(),
                  option: z.string().describe('单选选项（当维度类型为「单选题」时使用）').optional(),
                  options: z.array(z.string()).describe('多选选项（当维度类型为「多选题」时使用）').optional(),
                  content: z.string().describe('描述内容（当维度类型为「描述题」时使用）').optional(),
                  assessment_type: z
                    .number()
                    .describe(
                      '维度类型 Options:1(Score 打分题),2(singleChoice 单选题),3(text 描述题),4(multiChoice 多选题)',
                    )
                    .optional(),
                  title: z.string().describe('维度标题').optional(),
                  description: z.string().describe('维度描述').optional(),
                }),
              )
              .describe('评价维度列表')
              .optional(),
            content: z.string().describe('综合评价').optional(),
          }),
        )
        .describe('面试评价列表')
        .optional(),
    }),
  },
};
export const hireV1ExternalInterviewDelete = {
  project: 'hire',
  name: 'hire.v1.externalInterview.delete',
  sdkName: 'hire.v1.externalInterview.delete',
  path: '/open-apis/hire/v1/external_interviews/:external_interview_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-删除外部面试-根据外部面试 ID 删除外部面试',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      external_interview_id: z
        .string()
        .describe(
          '外部面试 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1ExternalInterviewUpdate = {
  project: 'hire',
  name: 'hire.v1.externalInterview.update',
  sdkName: 'hire.v1.externalInterview.update',
  path: '/open-apis/hire/v1/external_interviews/:external_interview_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部面试信息-更新外部面试-更新外部面试信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        ),
      participate_status: z
        .number()
        .describe('参与状态 Options:1(NotStart 未参与),2(Participated 参与),3(NotPaticipated 爽约)')
        .optional(),
      begin_time: z.number().describe('开始时间，毫秒时间戳（字段类型为：int64）').optional(),
      end_time: z.number().describe('结束时间，毫秒时间戳（字段类型为：int64）').optional(),
      interview_assessments: z
        .array(
          z.object({
            username: z.string().describe('面试官姓名').optional(),
            conclusion: z
              .number()
              .describe('面试结果 Options:1(Fail 不通过),2(Pass 通过),3(toBeDetermined 待定)')
              .optional(),
            assessment_dimension_list: z
              .array(
                z.object({
                  score: z.number().describe('打分题分数（当维度类型为「打分题」时使用）').optional(),
                  option: z.string().describe('单选选项（当维度类型为「单选题」时使用）').optional(),
                  options: z.array(z.string()).describe('多选选项（当维度类型为「多选题」时使用）').optional(),
                  content: z.string().describe('描述内容（当维度类型为「描述题」时使用）').optional(),
                  assessment_type: z
                    .number()
                    .describe(
                      '维度类型 Options:1(Score 打分题),2(singleChoice 单选题),3(text 描述题),4(multiChoice 多选题)',
                    )
                    .optional(),
                  title: z.string().describe('维度标题').optional(),
                  description: z.string().describe('维度描述').optional(),
                }),
              )
              .describe('评价维度列表')
              .optional(),
            content: z.string().describe('综合评价').optional(),
          }),
        )
        .describe('面试评价列表')
        .optional(),
    }),
    path: z.object({
      external_interview_id: z
        .string()
        .describe(
          '外部面试 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1ExternalOfferBatchQuery = {
  project: 'hire',
  name: 'hire.v1.externalOffer.batchQuery',
  sdkName: 'hire.v1.externalOffer.batchQuery',
  path: '/open-apis/hire/v1/external_offers/batch_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部 Offer 信息-查询外部 Offer 列表-可根据外部投递 ID 或外部 Offer ID 列表查询外部 Offer 信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_offer_id_list: z
        .array(z.string())
        .describe('外部 Offer ID 列表，当传此值时，仅以此值作为条件查询，其他查询条件不生效')
        .optional(),
    }),
    params: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalOfferCreate = {
  project: 'hire',
  name: 'hire.v1.externalOffer.create',
  sdkName: 'hire.v1.externalOffer.create',
  path: '/open-apis/hire/v1/external_offers',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部 Offer 信息-创建外部 Offer-创建外部 Offer，可用于导入来自其他系统的 Offer 信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_id: z
        .string()
        .describe(
          '外部系统 Offer 主键（仅用于幂等）- 若不传此值，则不进行幂等校验- 若传此值，则用于幂等校验，同一`external_id` 24小时内仅可创建一次',
        )
        .optional(),
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获得',
        ),
      biz_create_time: z.string().describe('Offer 创建时间，毫秒时间戳').optional(),
      owner: z.string().describe('Offer 负责人姓名').optional(),
      offer_status: z.string().describe('Offer 状态').optional(),
      attachment_id_list: z
        .array(z.string())
        .describe(
          'Offer 详情附件 ID 列表，可通过接口返回',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalOfferDelete = {
  project: 'hire',
  name: 'hire.v1.externalOffer.delete',
  sdkName: 'hire.v1.externalOffer.delete',
  path: '/open-apis/hire/v1/external_offers/:external_offer_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部 Offer 信息-删除外部 Offer-根据外部 Offer ID 删除外部 Offer',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      external_offer_id: z
        .string()
        .describe(
          '外部 Offer ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalOfferUpdate = {
  project: 'hire',
  name: 'hire.v1.externalOffer.update',
  sdkName: 'hire.v1.externalOffer.update',
  path: '/open-apis/hire/v1/external_offers/:external_offer_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-获取候选人-外部系统信息-外部 Offer 信息-更新外部 Offer-更新外部 Offer 信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      external_application_id: z
        .string()
        .describe(
          '外部投递 ID，可通过接口获取',
        ),
      biz_create_time: z.string().describe('Offer 创建时间，毫秒时间戳').optional(),
      owner: z.string().describe('Offer 负责人姓名').optional(),
      offer_status: z.string().describe('Offer 状态').optional(),
      attachment_id_list: z
        .array(z.string())
        .describe(
          'Offer 详情附件 ID 列表，可由接口返回所得',
        )
        .optional(),
    }),
    path: z.object({
      external_offer_id: z
        .string()
        .describe(
          '外部 Offer ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1ExternalReferralRewardCreate = {
  project: 'hire',
  name: 'hire.v1.externalReferralReward.create',
  sdkName: 'hire.v1.externalReferralReward.create',
  path: '/open-apis/hire/v1/external_referral_rewards',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部内推奖励信息-导入外部内推奖励-支持将外部的内推奖励（积分/现金）导入到招聘的「内推账号」中',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      referral_user_id: z
        .string()
        .describe(
          '内推人 ID内推人的唯一标识，在中获取',
        ),
      create_user_id: z.string().describe('奖励创建人，管理员与内推人可见，若不传，则默认为「外部系统」').optional(),
      confirm_user_id: z
        .string()
        .describe('确认人，若导入的「内推奖励状态」为「已确认」可传入，若不传，则默认为「外部系统」')
        .optional(),
      pay_user_id: z
        .string()
        .describe('发放人，导入的「内推奖励状态」为「已发放」的奖励传入，若不传，则默认为「外部系统」')
        .optional(),
      external_id: z.string().describe('外部系统奖励唯一id（仅用于幂等）'),
      application_id: z
        .string()
        .describe(
          '内推的候选人投递 ID，可通过获取若未传入`talent_id`，该参数必填若传入了`talent_id`，该参数选填若同时传入了`application_id`和`talent_id`，以`application_id`为准<md-alert type="warn">若不传入投递 ID（`application_id`），当前内推奖励将无法关联到投递，系统内无法展示该内推对应的「职位」、「职位负责人」、「offer负责人」，对应字段将展示为「--」。</md-alert>',
        )
        .optional(),
      talent_id: z
        .string()
        .describe(
          '内推的候选人人才 ID若未传入`application_id`，该参数必填若传入了`application_id`，该参数可不填，将以「内推的候选人投递 ID」为准',
        )
        .optional(),
      job_id: z
        .string()
        .describe(
          '内推职位 ID招聘系统内的职位 ID。若不传入，对管理员与内推人将展示为--若传入了「内推的候选人投递 ID」，该参数可不填，职位ID将自动以「投递ID」关联的「职位ID」为准<md-alert type="warn">若不传入「内推职位 ID」，且未传入「内推的投递 ID」，当前内推奖励将无法关联到职位，「职位的相关权限人」（如社/校招管理员、职位负责人、协助人、用人经理等）无法看到该条内推记录</md-alert>',
        )
        .optional(),
      reason: z
        .string()
        .describe(
          '奖励原因，若不传则为 「--」将展示在内推奖励明细中，管理员与内推人可见。如需与飞书招聘判定的内推奖励原因保持一致，方便统计，可参考下方说明传入- 若「奖励规则类型」为「过程奖励」，建议传入如下原因： - 推荐奖励 - 进入{阶段名称}阶段 - 候选人到面奖励 - 若「奖励规则类型」为「入职奖励」，建议传入如下原因: - 入职 - 转正 - 若「奖励规则类型」为「活动奖励」，建议传入如下原因： - 累计推荐 n 个候选人{过程奖励或入职奖励原因} - 推荐满 n 个候选人- 若「奖励规则类型」为「开源奖励」，建议传入如下原因： - 入职｜开源 - 转正｜开源',
        )
        .optional(),
      rule_type: z
        .number()
        .describe(
          '导入的奖励规则类型，将展示在内推奖励明细中，管理员与内推人可见如需与飞书招聘内的奖励原因保持一致，方便统一统计，可参考下方说明传入 Options:1(Onboard 入职奖励，候选人入职或转正后产生的奖励),2(Processe 过程奖励，入职奖励外，若候选人有阶段性进展，则给予内推人对应的奖励),3(Active 活动奖励，额外奖励，用于支持内推周期性活动),4(OpenSource 开源奖励，若内推候选人首次进入人才库，且在被推荐后一段时间内，入职了规则内的任意职位的奖励),5(Other 其他奖励，以上奖励无法覆盖的奖励)',
        ),
      bonus: z
        .object({
          bonus_type: z.number().describe('奖励发放形式 Options:1(Point 积分),2(Cash 现金)'),
          point_bonus: z.number().describe('导入积分数量，若奖励发放形式为现金为必填').optional(),
          cash: z
            .object({
              currency_type: z
                .string()
                .describe(
                  '导入现金币种，若奖励发放形式为现金为必填，币种参数可在',
                ),
              amount: z.number().describe('导入现金数量，若奖励发放形式为现金为必填，需传入非负数'),
            })
            .describe('现金奖励')
            .optional(),
        })
        .describe('奖励额度'),
      stage: z
        .number()
        .describe(
          '导入的内推奖励状态 Options:1(ToBeConfirmed 待确认，建议导入需人工审核的奖励明细，导入后，需管理员在「内推奖励管理」-「待确认」中，手动审核确认才会展示给内推人),2(Confirmed 已确认，建议导入已通过人工审核但仍未发放的奖励明细导入后，将展示给管理员和内推人，奖励状态展示为「已确认」（未发放）),3(paid 已发放，建议导入已发放完成的奖励明细，导入后，将展示给管理员和内推人，奖励状态展示为「已发放」)',
        ),
      create_time: z.string().describe('奖励产生时间时间戳，内推奖励触发时间，若未传入，取接口调用时间').optional(),
      confirm_time: z
        .string()
        .describe('确认时间时间戳，若导入的「内推奖励状态」为「已确认」可传入，若未传入，取接口传入时间')
        .optional(),
      pay_time: z
        .string()
        .describe('发放时间时间戳，若导入的「内推奖励状态」为「已确认」可传入，若未传入，取接口传入时间')
        .optional(),
      onboard_time: z
        .string()
        .describe('入职时间时间戳，管理员与内推人可见，当「奖励规则类型」为「入职奖励」时，建议传入该参数')
        .optional(),
      conversion_time: z
        .string()
        .describe('转正时间时间戳，管理员与内推人可见，当「奖励规则类型」为「入职奖励」时，建议传入该参数')
        .optional(),
      comment: z.string().describe('操作备注管理员与内推人可见，若为空，将展示为奖励原因').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const hireV1ExternalReferralRewardDelete = {
  project: 'hire',
  name: 'hire.v1.externalReferralReward.delete',
  sdkName: 'hire.v1.externalReferralReward.delete',
  path: '/open-apis/hire/v1/external_referral_rewards/:external_referral_reward_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部内推奖励信息-删除外部内推奖励-根据外部内推奖励ID删除外部内推奖励',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      external_referral_reward_id: z
        .string()
        .describe(
          '外部内推奖励ID，通过生成',
        )
        .optional(),
    }),
  },
};
export const hireV1InterviewFeedbackFormList = {
  project: 'hire',
  name: 'hire.v1.interviewFeedbackForm.list',
  sdkName: 'hire.v1.interviewFeedbackForm.list',
  path: '/open-apis/hire/v1/interview_feedback_forms',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-面试设置-获取面试评价表列表-获取面试评价表信息列表，评价表信息包括题目描述、题目选项等。可用于面试评价表展示等场景',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      interview_feedback_form_ids: z.array(z.string()).describe('面试评价表 ID 列表，使用此参数时不再分页').optional(),
      page_size: z.number().describe('分页大小。最大值为100，默认值为0').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1InterviewRecordAttachmentGet = {
  project: 'hire',
  name: 'hire.v1.interviewRecordAttachment.get',
  sdkName: 'hire.v1.interviewRecordAttachment.get',
  path: '/open-apis/hire/v1/interview_records/attachments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试记录附件-获取面试记录 PDF 附件，包含相关投递基本信息、面试评价信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        ),
      interview_record_id: z
        .string()
        .describe(
          '面试评价 ID，可通过接口获取，若不填该参数，则会获取入参投递下所有的面试评价',
        )
        .optional(),
      language: z.number().describe('面试评价语言，用于指定附件的语言 Options:1(zh 中文),2(en 英文)').optional(),
    }),
  },
};
export const hireV1InterviewRecordGet = {
  project: 'hire',
  name: 'hire.v1.interviewRecord.get',
  sdkName: 'hire.v1.interviewRecord.get',
  path: '/open-apis/hire/v1/interview_records/:interview_record_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试评价详细信息-获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      interview_record_id: z
        .string()
        .describe(
          '面试评价 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1InterviewRecordList = {
  project: 'hire',
  name: 'hire.v1.interviewRecord.list',
  sdkName: 'hire.v1.interviewRecord.list',
  path: '/open-apis/hire/v1/interview_records',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-批量获取面试评价详细信息-批量获取面试评价详细信息，如面试结论、面试得分和面试官等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      ids: z
        .array(z.string())
        .describe(
          '面试评价 ID 列表，可通过接口获取，使用该筛选项时不会分页',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1InterviewRegistrationSchemaList = {
  project: 'hire',
  name: 'hire.v1.interviewRegistrationSchema.list',
  sdkName: 'hire.v1.interviewRegistrationSchema.list',
  path: '/open-apis/hire/v1/interview_registration_schemas',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-面试设置-获取面试登记表列表-获取面试登记表列表，可获取到的信息包括登记表名称、登记表模块、登记表字段',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量，最大10').optional(),
    }),
  },
};
export const hireV1InterviewRoundTypeList = {
  project: 'hire',
  name: 'hire.v1.interviewRoundType.list',
  sdkName: 'hire.v1.interviewRoundType.list',
  path: '/open-apis/hire/v1/interview_round_types',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-面试设置-获取面试轮次类型列表-根据职位流程查询面试轮次类型列表，可以查询到的信息包括：面试轮次类型名称、启用状态、关联的面试评价表信息。可应用于更新职位设置场景：',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ process_type: z.number().describe('职位流程类型 Options:1(社招流程),2(校招流程)').optional() }),
  },
};
export const hireV1InterviewTaskList = {
  project: 'hire',
  name: 'hire.v1.interviewTask.list',
  sdkName: 'hire.v1.interviewTask.list',
  path: '/open-apis/hire/v1/interview_tasks',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-招聘进程跟进-获取面试任务列表-根据面试官ID查询面试任务列表，可以查询到的信息包括：面试ID、投递ID、任务状态等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小, 默认10，不能超过 20').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id: z.string().describe('面试官 ID，需要与user_id_type类型保持一致'),
      activity_status: z.number().describe('任务状态 Options:1(未开始),2(未评价),3(已评价),5(已终止)').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1InterviewGetByTalent = {
  project: 'hire',
  name: 'hire.v1.interview.getByTalent',
  sdkName: 'hire.v1.interview.getByTalent',
  path: '/open-apis/hire/v1/interviews/get_by_talent',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-面试-获取人才面试信息-获取人才下所有面试信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1InterviewList = {
  project: 'hire',
  name: 'hire.v1.interview.list',
  sdkName: 'hire.v1.interview.list',
  path: '/open-apis/hire/v1/interviews',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试信息-获取面试信息。可通过「投递 ID」、「面试 ID」以及「面试开始时间」进行条件筛选，筛选条件不能同时为空',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取（不允许 application_id、interview_id、start_time、end_time 同时为空）',
        )
        .optional(),
      interview_id: z
        .string()
        .describe('面试 ID（不允许 application_id、interview_id、start_time、end_time 同时为空）')
        .optional(),
      start_time: z
        .string()
        .describe(
          '面试最早开始时间，毫秒时间戳，必须大于 0（不允许 application_id、interview_id、start_time、end_time 同时为空）',
        )
        .optional(),
      end_time: z
        .string()
        .describe(
          '面试最晚开始时间，毫秒时间戳，必须大于 0（不允许 application_id、interview_id、start_time、end_time 同时为空）',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1InterviewerList = {
  project: 'hire',
  name: 'hire.v1.interviewer.list',
  sdkName: 'hire.v1.interviewer.list',
  path: '/open-apis/hire/v1/interviewers',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘相关配置-面试设置-面试官管理-查询面试官信息列表-分页查询面试官列表，接口只会返回执行过「更新面试官信息」用户的数据，通过接口查询不到的数据则默认为「未认证」面试官。接口默认按更新时间、user_id顺序进行顺序拉取',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_ids: z.array(z.string().describe('面试官userID')).describe('面试官userID列表').optional(),
      verify_status: z.number().describe('认证状态 Options:1(NotVarified 未认证),2(Varified 已认证)').optional(),
      earliest_update_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      latest_update_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1InterviewerPatch = {
  project: 'hire',
  name: 'hire.v1.interviewer.patch',
  sdkName: 'hire.v1.interviewer.patch',
  path: '/open-apis/hire/v1/interviewers/:interviewer_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-招聘相关配置-面试设置-面试官管理-更新面试官信息-用于更新面试官认证信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      interviewer: z
        .object({
          verify_status: z.number().describe('认证状态 Options:1(NotVarified 未认证),2(Varified 已认证)').optional(),
        })
        .describe('面试官信息'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ interviewer_id: z.string().describe('面试官userID').optional() }),
  },
};
export const hireV1JobFunctionList = {
  project: 'hire',
  name: 'hire.v1.jobFunction.list',
  sdkName: 'hire.v1.jobFunction.list',
  path: '/open-apis/hire/v1/job_functions',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职能分类列表-根据page_token与page_size对职能分类进行游标分页查询，可查询到的信息包括：职能分类ID、职能分类中英文名、启用状态，可应用于职位基础信息绑定等场景',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小, 不能超过 50, 默认10').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1JobProcessList = {
  project: 'hire',
  name: 'hire.v1.jobProcess.list',
  sdkName: 'hire.v1.jobProcess.list',
  path: '/open-apis/hire/v1/job_processes',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘流程-获取招聘流程信息-获取全部招聘流程信息。如「流程名称」、「流程类型」及流程下的「阶段名称」、「阶段类型」等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小**默认值**：10').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1JobPublishRecordSearch = {
  project: 'hire',
  name: 'hire.v1.jobPublishRecord.search',
  sdkName: 'hire.v1.jobPublishRecord.search',
  path: '/open-apis/hire/v1/job_publish_records/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位广告发布记录-根据招聘渠道 ID 获取当前渠道下曾发布过的职位广告信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_channel_id: z
        .string()
        .describe(
          '招聘渠道 ID- 官网 ID：可通过接口获取- 三方渠道 ID：可通过中「三方渠道 ID」枚举定义- 猎头渠道 ID ： "2"- 内推渠道 ID ： "3"',
        ),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，可通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobRequirementSchemaList = {
  project: 'hire',
  name: 'hire.v1.jobRequirementSchema.list',
  sdkName: 'hire.v1.jobRequirementSchema.list',
  path: '/open-apis/hire/v1/job_requirement_schemas',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-获取招聘需求模板列表-获取招聘需求模板列表，包含需求模板ID，以及模板里的字段定义等。招聘需求模板可参考「飞书招聘」-「设置」-「招聘需求字段管理」',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小**最大值**：`100`').optional(),
    }),
  },
};
export const hireV1JobRequirementCreate = {
  project: 'hire',
  name: 'hire.v1.jobRequirement.create',
  sdkName: 'hire.v1.jobRequirement.create',
  path: '/open-apis/hire/v1/job_requirements',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-创建招聘需求-创建招聘需求，可指定招聘需求部门、招聘人数、需求描述等，具体可参考「飞书招聘」-「设置」-「招聘需求字段管理」，或者参考',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      short_code: z.string().describe('招聘需求编号，需传入唯一的编号'),
      name: z.string().describe('需求名称'),
      display_progress: z
        .number()
        .describe(
          '需求状态 Options:1(WaitingStart 未开始),2(OnGoing 进行中),3(Canceled 已取消),4(Suspended 已暂停),5(Completed 已完成),6(Expired 已超期)',
        ),
      head_count: z.number().describe('需求人数'),
      recruitment_type_id: z
        .string()
        .describe(
          '职位性质 ID，可在查阅枚举值。- **注意**：该字段即将下线，请使用`employee_type_id`字段，与`employee_type_id`字段必填其一',
        )
        .optional(),
      employee_type_id: z.string().describe('人员类型ID，类型需与`employee_type_id_type`保持一致').optional(),
      max_level_id: z.string().describe('最高职级 ID，需与`job_level_id_type`类型保持一致').optional(),
      min_level_id: z.string().describe('最低职级 ID，需与`job_level_id_type`类型保持一致').optional(),
      sequence_id: z.string().describe('职位序列 ID，需与`job_family_id_type`类型保持一致').optional(),
      category: z.number().describe('需求类型 Options:1(Addition 新增),2(Replacement 替换)').optional(),
      department_id: z.string().describe('需求部门 ID，需与`department_id_type`类型一致').optional(),
      recruiter_id_list: z.array(z.string()).describe('需求负责人 ID 列表，需与`user_id_type`类型保持一致').optional(),
      jr_hiring_manager_id_list: z
        .array(z.string())
        .describe('需求用人经理 ID 列表，需与`user_id_type`类型保持一致')
        .optional(),
      direct_leader_id_list: z.array(z.string()).describe('直属上级 ID，需与`user_id_type`类型保持一致').optional(),
      start_time: z.string().describe('开始日期，毫秒时间戳').optional(),
      deadline: z.string().describe('预计完成日期，毫秒时间戳').optional(),
      priority: z.number().describe('招聘优先级 Options:1(High 高),2(Medium 中),3(Low 低)').optional(),
      required_degree: z
        .number()
        .describe(
          '学历要求 Options:1(PrimaryEducation 小学及以上),2(JuniorMiddleSchoolEducation 初中及以上),3(Secondary 专职及以上),4(SeniorSchoolGraduates 高中及以上),5(Associate 大专及以上),6(Bachelor 本科及以上),7(Master 硕士及以上),8(Phd 博士及以上),20(NoLimit 不限)',
        )
        .optional(),
      max_salary: z.string().describe('月薪范围-最高薪资，单位：K').optional(),
      min_salary: z.string().describe('月薪范围-最低薪资，单位：K').optional(),
      address_id: z
        .string()
        .describe(
          '工作地址 ID，可通过获取',
        )
        .optional(),
      description: z.string().describe('需求描述').optional(),
      customized_data_list: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义字段 ID，可通过获取',
              )
              .optional(),
            value: z
              .string()
              .describe(
                '自定义字段 value- 单选：`"1"`- 多选：`"[\\"1\\", \\"2\\"]"`- 单行：`"单行文本"`- 多行：`"多行文本"`- 数字：`"1"`- 月份选择：`"1627379423000"`- 年份选择：`"1627379423000"`- 日期选择：`"1627379423000"`- 时间段：`"[\\"1577808000000\\", \\"1612108800000\\"]"`',
              )
              .optional(),
          }),
        )
        .describe(
          '自定义字段，可通过获取自定义字段列表、类型等',
        )
        .optional(),
      process_type: z.number().describe('招聘类型 Options:1(Social 社招),2(Campus 校招)').optional(),
      job_type_id: z
        .string()
        .describe(
          '职位类别，可通过获取',
        )
        .optional(),
      job_id_list: z.array(z.string()).describe('关联的职位 ID 列表').optional(),
      employment_job_id: z
        .string()
        .describe(
          '职务 ID，可通过获取（仅限飞书人事租户使用）',
        )
        .optional(),
      position_id: z
        .string()
        .describe(
          '岗位 ID，可通过获取（仅限飞书人事租户使用，若链接无法打开，则说明飞书人事未启用岗位，请联系开通）',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，可通过获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，可通过获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，可通过获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobRequirementDelete = {
  project: 'hire',
  name: 'hire.v1.jobRequirement.delete',
  sdkName: 'hire.v1.jobRequirement.delete',
  path: '/open-apis/hire/v1/job_requirements/:job_requirement_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-删除招聘需求-删除指定的招聘需求，请注意：若该招聘需求已经关联到职位上，则需先接触关联后，才能删除招聘需求',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_requirement_id: z
        .string()
        .describe(
          '招聘需求ID，可通过获取',
        ),
    }),
  },
};
export const hireV1JobRequirementList = {
  project: 'hire',
  name: 'hire.v1.jobRequirement.list',
  sdkName: 'hire.v1.jobRequirement.list',
  path: '/open-apis/hire/v1/job_requirements',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-获取招聘需求列表-获取招聘需求列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，最大值100').optional(),
      job_id: z
        .string()
        .describe('职位ID，详情请参考：')
        .optional(),
      create_time_begin: z.string().describe('起始创建时间，传入毫秒级时间戳').optional(),
      create_time_end: z.string().describe('截止创建时间，传入毫秒级时间戳').optional(),
      update_time_begin: z.string().describe('起始更新时间，传入毫秒级时间戳').optional(),
      update_time_end: z.string().describe('截止更新时间，传入毫秒级时间戳').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobRequirementListById = {
  project: 'hire',
  name: 'hire.v1.jobRequirement.listById',
  sdkName: 'hire.v1.jobRequirement.listById',
  path: '/open-apis/hire/v1/job_requirements/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-获取招聘需求信息-根据「招聘需求ID」获取招聘需求信息，支持批量查询',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      id_list: z
        .array(z.string())
        .describe(
          '招聘需求ID列表，详情请参考：不允许和招聘需求编号列表同时使用，否则报错（详见错误码1002725）限制单次最大100条，该字段和编号列表都不传则返回空',
        )
        .optional(),
      short_code_list: z
        .array(z.string())
        .describe(
          '招聘需求编号列表，详情请参考：不允许和招聘需求ID列表同时使用，否则报错（详见错误码1002725）限制单次最大100条，该字段和ID列表都不传则返回空',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobRequirementUpdate = {
  project: 'hire',
  name: 'hire.v1.jobRequirement.update',
  sdkName: 'hire.v1.jobRequirement.update',
  path: '/open-apis/hire/v1/job_requirements/:job_requirement_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-招聘需求-更新招聘需求-更新指定招聘需求的信息，包含招聘需求的名称、状态、需求人数等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('需求名称'),
      display_progress: z
        .number()
        .describe(
          '需求状态 Options:1(WaitingStart 待启动),2(OnGoing 进行中),3(Canceled 已取消),4(Suspended 已暂停),5(Completed 已完成),6(Expired 已超期)',
        ),
      head_count: z.number().describe('需求人数'),
      recruitment_type_id: z
        .string()
        .describe(
          '职位性质 ID，可在查阅枚举值。- **注意**：该字段即将下线，请使用「employee_type_id」字段。与「employee_type_id」字段必填其一',
        )
        .optional(),
      employee_type_id: z.string().describe('人员类型ID，类型需与`employee_type_id_type`保持一致').optional(),
      max_level_id: z.string().describe('最高职级 ID，需与`job_level_id_type`类型保持一致').optional(),
      min_level_id: z.string().describe('最低职级 ID，需与`job_level_id_type`类型保持一致').optional(),
      sequence_id: z.string().describe('职位序列 ID，需与`job_family_id_type`类型保持一致').optional(),
      category: z.number().describe('需求类型 Options:1(Addition 新增),2(Replacement 替换)').optional(),
      department_id: z.string().describe('需求部门ID，需与`department_id_type`类型一致').optional(),
      recruiter_id_list: z.array(z.string()).describe('需求负责人 ID 列表，需与`user_id_type`类型保持一致').optional(),
      jr_hiring_manager_id_list: z
        .array(z.string())
        .describe('需求用人经理 ID 列表，需与`user_id_type`类型保持一致')
        .optional(),
      direct_leader_id_list: z.array(z.string()).describe('直属上级 ID，需与`user_id_type`类型保持一致').optional(),
      start_time: z.string().describe('开始日期，毫秒时间戳').optional(),
      deadline: z.string().describe('预计完成日期，毫秒时间戳').optional(),
      priority: z.number().describe('招聘优先级 Options:1(High 高),2(Medium 中),3(Low 低)').optional(),
      required_degree: z
        .number()
        .describe(
          '学历要求 Options:1(PrimaryEducation 小学及以上),2(JuniorMiddleSchoolEducation 初中及以上),3(Secondary 专职及以上),4(SeniorSchoolGraduates 高中及以上),5(Associate 大专及以上),6(Bachelor 本科及以上),7(Master 硕士及以上),8(Phd 博士及以上),20(NoLimit 不限)',
        )
        .optional(),
      max_salary: z.string().describe('月薪范围-最高薪资，单位：K').optional(),
      min_salary: z.string().describe('月薪范围-最低薪资，单位：K').optional(),
      address_id: z
        .string()
        .describe(
          '工作地点 ID，可通过获取',
        )
        .optional(),
      description: z.string().describe('需求描述').optional(),
      customized_data_list: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义字段 ID，可通过获取',
              )
              .optional(),
            value: z
              .string()
              .describe(
                '自定义字段 value- 单选：`"1"`- 多选：`"[\\"1\\", \\"2\\"]"`- 单行：`"单行文本"`- 多行：`"多行文本"`- 数字：`"1"`- 月份选择：`"1627379423000"`- 年份选择：`"1627379423000"`- 日期选择：`"1627379423000"`- 时间段：`"[\\"1577808000000\\", \\"1612108800000\\"]"`',
              )
              .optional(),
          }),
        )
        .describe(
          '自定义字段，可通过获取，自定义字段是否必填需依据需求模板中自定义字段的定义。- 注意： 更新时会全量覆盖',
        )
        .optional(),
      process_type: z.number().describe('招聘类型 Options:1(Social 社招),2(Campus 校招)').optional(),
      job_type_id: z
        .string()
        .describe(
          '职位类别，可通过获取',
        )
        .optional(),
      job_id_list: z
        .array(z.string())
        .describe('关联的职位 ID 列表（与 update_option. need_update_related_job 配合使用）')
        .optional(),
      employment_job_id: z
        .string()
        .describe(
          '职务 ID，可通过获取（仅限飞书人事租户使用）',
        )
        .optional(),
      position_id: z
        .string()
        .describe(
          '岗位 ID，可通过获取（仅限飞书人事租户使用，若链接无法打开，则说明飞书人事未启用岗位，请联系开通）',
        )
        .optional(),
      update_option: z
        .object({ need_update_related_job: z.boolean().describe('是否需要修改关联的职位').optional() })
        .describe('招聘需求修改确认控制')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，可通过获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，可通过获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，可通过获取)',
        )
        .optional(),
    }),
    path: z.object({
      job_requirement_id: z
        .string()
        .describe(
          '招聘需求ID，可通过获取',
        ),
    }),
  },
};
export const hireV1JobSchemaList = {
  project: 'hire',
  name: 'hire.v1.jobSchema.list',
  sdkName: 'hire.v1.jobSchema.list',
  path: '/open-apis/hire/v1/job_schemas',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位模板-获取社招、校招职位模板中的职位字段，返回结果包括系统默认字段和自定义字段。招聘管理员可在「飞书招聘」-「设置」-「职位管理」-「职位字段管理」中修改职位模板',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小**默认值**：10**数据校验规则**：* 最大值：100').optional(),
      scenario: z.number().describe('职位模板类型 Options:1(社招),2(校招)').optional(),
    }),
  },
};
export const hireV1JobTypeList = {
  project: 'hire',
  name: 'hire.v1.jobType.list',
  sdkName: 'hire.v1.jobType.list',
  path: '/open-apis/hire/v1/job_types',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位类别列表-获取招聘系统预置的职位类别列表，可用于操作职位（如），操作招聘需求（如）时回填职位类别字段。返回列表默认按创建时间升序排序，且包含节点的层级关系（节点的父节点 ID），可在获取全量数据后自行构建职位类别树',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小**默认值**：10').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1JobClose = {
  project: 'hire',
  name: 'hire.v1.job.close',
  sdkName: 'hire.v1.job.close',
  path: '/open-apis/hire/v1/jobs/:job_id/close',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-关闭职位-关闭职位后，职位所有的职位广告将同步从官网、内推、猎头渠道下线',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1JobCombinedCreate = {
  project: 'hire',
  name: 'hire.v1.job.combinedCreate',
  sdkName: 'hire.v1.job.combinedCreate',
  path: '/open-apis/hire/v1/jobs/combined_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-新建职位-创建一个新的职位',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      code: z
        .string()
        .describe('职位编码，传入需保证唯一性，不传系统会自动生成一个唯一编码，限定长度16字节')
        .optional(),
      experience: z
        .number()
        .describe(
          '工作经验要求 Options:1(NoLimit 不限),2(Graduate 应届毕业生),3(UnderOneYear 1年以下),4(OneToThreeYear 1-3年),5(ThreeToFiveYear 3-5年),6(FiveToSevenYear 5-7年),7(SevenToTenYear 7-10年),8(OverTenYear 10年以上)',
        )
        .optional(),
      expiry_time: z.number().describe('到期日期，此字段已废弃，请使用expiry_timestamp').optional(),
      customized_data_list: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义字段 ID，可通过接口获取',
              )
              .optional(),
            value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
          }),
        )
        .describe('自定义字段')
        .optional(),
      min_level_id: z.string().describe('最低职级 ID，需与入参`job_level_id_type` 类型一致').optional(),
      min_salary: z.number().describe('最低月薪，单位：K').optional(),
      title: z.string().describe('职位名称'),
      job_managers: z
        .object({
          id: z.string().describe('职位 ID（此字段无需填充，请忽略）').optional(),
          recruiter_id: z.string().describe('招聘负责人 ID，需与入参`user_id_type`类型一致'),
          hiring_manager_id_list: z.array(z.string()).describe('用人经理 ID 列表，需与入参`user_id_type`类型一致'),
          assistant_id_list: z.array(z.string()).describe('协助人 ID 列表，需与入参`user_id_type`类型一致').optional(),
        })
        .describe('职位管理者'),
      job_process_id: z
        .string()
        .describe(
          '招聘流程 ID，可通过接口获取',
        ),
      process_type: z.number().describe('职位流程类型 Options:1(SocialProcess 社招),2(CampusProcess 校招)'),
      subject_id: z
        .string()
        .describe(
          '项目 ID，可通过接口获取',
        )
        .optional(),
      job_function_id: z
        .string()
        .describe(
          '职能分类ID，可通过接口获取',
        )
        .optional(),
      department_id: z.string().describe('部门 ID，需与入参中的`department_id_type`类型一致'),
      head_count: z.number().describe('招聘数量').optional(),
      is_never_expired: z.boolean().describe('是否长期有效'),
      max_salary: z.number().describe('最高月薪，单位：K').optional(),
      requirement: z.string().describe('职位要求').optional(),
      description: z.string().describe('职位描述').optional(),
      highlight_list: z
        .array(z.string())
        .describe(
          '职位亮点列表，可通过中职位亮枚举定义」获取',
        )
        .optional(),
      job_type_id: z
        .string()
        .describe(
          '职位类别 ID，可通过接口获取',
        ),
      max_level_id: z.string().describe('最高职级 ID，需与入参`job_level_id_type` 类型一致').optional(),
      recruitment_type_id: z
        .string()
        .describe(
          '雇佣类型 ID，详情请参考：中「职位性质/雇佣类型（recruitment_type）枚举定义」',
        ),
      required_degree: z
        .number()
        .describe(
          '学历要求 Options:1(PrimaryEducation 小学及以上),2(JuniorMiddleSchoolEducation 初中及以上),3(Secondary 专职及以上),4(SeniorSchoolGraduates 高中及以上),5(Associate 大专及以上),6(Bachelor 本科及以上),7(Master 硕士及以上),8(Phd 博士及以上),20(NoLimit 不限)',
        )
        .optional(),
      job_category_id: z.string().describe('序列 ID，需与入参`job_family_id_type` 类型一致').optional(),
      address_id_list: z
        .array(z.string())
        .describe(
          '工作地址列表，可通过接口获取',
        )
        .optional(),
      job_attribute: z.number().describe('职位属性 Options:1(Concrete 实体职位),2(Virtual 虚拟职位)').optional(),
      expiry_timestamp: z
        .string()
        .describe('到期时间，毫秒时间戳，如果`is_never_expired`字段选择true，则不会实际使用该字段的值，职位为长期有效')
        .optional(),
      interview_registration_schema_id: z
        .string()
        .describe(
          '面试登记表 ID，当在飞书招聘「设置 - 信息登记表使用设置 - 面试登记表使用方式」中选择「HR 按职位选择登记表」时，该字段为必填；否则该字段不生效。可通过接口获取',
        )
        .optional(),
      onboard_registration_schema_id: z
        .string()
        .describe(
          '入职登记表 ID，当在飞书招聘「设置 - 信息登记表使用设置 - 入职登记表使用方式」中选择「HR 按职位选择登记表」时，该字段为必填；否则该字段不生效。可通过接口获取',
        )
        .optional(),
      target_major_id_list: z
        .array(z.string().describe('目标专业ID'))
        .describe(
          '目标专业 ID 列表，可通过获取',
        )
        .optional(),
      portal_website_apply_form_schema_id: z
        .string()
        .describe(
          '官网申请表ID，可通过接口获取',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobCombinedUpdate = {
  project: 'hire',
  name: 'hire.v1.job.combinedUpdate',
  sdkName: 'hire.v1.job.combinedUpdate',
  path: '/open-apis/hire/v1/jobs/:job_id/combined_update',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-更新职位-更新职位信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      id: z
        .string()
        .describe(
          '职位 ID，可通过  接口获取',
        )
        .optional(),
      experience: z
        .number()
        .describe(
          '工作经验要求 Options:1(NoLimit 不限),2(Graduate 应届毕业生),3(UnderOneYear 1年以下),4(OneToThreeYear 1-3年),5(ThreeToFiveYear 3-5年),6(FiveToSevenYear 5-7年),7(SevenToTenYear 7-10年),8(OverTenYear 10年以上)',
        )
        .optional(),
      expiry_time: z.number().describe('到期日期，此字段已废弃，请使用expiry_timestamp').optional(),
      customized_data_list: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义字段 ID，可通过接口获取',
              )
              .optional(),
            value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
          }),
        )
        .describe('自定义字段- 注意：更新时会全量覆盖')
        .optional(),
      min_level_id: z.string().describe('最低职级 ID，需与入参`job_level_id_type` 类型一致').optional(),
      min_salary: z.number().describe('最低薪资，单位：K').optional(),
      title: z.string().describe('职位名称').optional(),
      job_managers: z
        .object({
          id: z.string().describe('职位 ID（废弃字段，请忽略）').optional(),
          recruiter_id: z.string().describe('招聘负责人 ID，需与入参`user_id_type`类型一致'),
          hiring_manager_id_list: z.array(z.string()).describe('用人经理 ID 列表，需与入参`user_id_type`类型一致'),
          assistant_id_list: z.array(z.string()).describe('协助人 ID 列表，需与入参`user_id_type`类型一致').optional(),
        })
        .describe('职位管理者列表'),
      job_process_id: z
        .string()
        .describe(
          '招聘流程，可通过接口获取',
        )
        .optional(),
      subject_id: z
        .string()
        .describe(
          '项目 ID，可通过接口获取',
        )
        .optional(),
      job_function_id: z
        .string()
        .describe(
          '职能分类ID，可通过接口获取',
        )
        .optional(),
      department_id: z.string().describe('部门 ID，需与入参中的`department_id_type`类型一致').optional(),
      head_count: z.number().describe('招聘数量').optional(),
      is_never_expired: z.boolean().describe('是否长期有效'),
      max_salary: z.number().describe('最高薪资，单位：K').optional(),
      requirement: z.string().describe('职位要求').optional(),
      description: z.string().describe('职位描述').optional(),
      highlight_list: z
        .array(z.string())
        .describe(
          '职位亮点 ID 列表， 详情请查看：中「职位亮点枚举定义」',
        )
        .optional(),
      job_type_id: z
        .string()
        .describe(
          '职位类别ID，可通过接口获取',
        ),
      max_level_id: z.string().describe('最高职级 ID，需与入参`job_level_id_type` 类型一致').optional(),
      required_degree: z
        .number()
        .describe(
          '学历要求 Options:1(PrimaryEducation 小学及以上),2(JuniorMiddleSchoolEducation 初中及以上),3(Secondary 专职及以上),4(SeniorSchoolGraduates 高中及以上),5(Associate 大专及以上),6(Bachelor 本科及以上),7(Master 硕士及以上),8(Phd 博士及以上),20(NoLimit 不限)',
        )
        .optional(),
      job_category_id: z.string().describe('序列 ID，需与入参`job_family_id_type` 类型一致').optional(),
      address_id_list: z
        .array(z.string())
        .describe(
          '工作地点 ID 列表，可通过接口获取',
        )
        .optional(),
      job_attribute: z.number().describe('职位属性 Options:1(Concrete 实体职位),2(Virtual 虚拟职位)').optional(),
      expiry_timestamp: z
        .string()
        .describe('到期时间，毫秒时间戳，如果`is_never_expired`字段选择true，则不会实际使用该字段的值，职位为长期有效')
        .optional(),
      target_major_id_list: z
        .array(z.string().describe('目标专业ID'))
        .describe(
          '目标专业 ID 列表，可通过获取',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，可通过  接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，可通过  接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过  接口获取',
        ),
    }),
  },
};
export const hireV1JobConfig = {
  project: 'hire',
  name: 'hire.v1.job.config',
  sdkName: 'hire.v1.job.config',
  path: '/open-apis/hire/v1/jobs/:job_id/config',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位设置-获取职位设置，包含 Offer 申请表、Offer 审批流程、建议评估人列表、面试评价表、建议面试官列表、招聘需求、面试登记表、入职登记表、面试轮次类型列表、关联职位列表等设置',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1JobGet = {
  project: 'hire',
  name: 'hire.v1.job.get',
  sdkName: 'hire.v1.job.get',
  path: '/open-apis/hire/v1/jobs/:job_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位信息-根据职位 ID 获取职位信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe('部门ID类型 Options:open_department_id(开放平台部门ID),department_id(内部部门ID)')
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({ job_id: z.string().describe('职位 ID，请求Path中') }),
  },
};
export const hireV1JobGetDetail = {
  project: 'hire',
  name: 'hire.v1.job.getDetail',
  sdkName: 'hire.v1.job.getDetail',
  path: '/open-apis/hire/v1/jobs/:job_id/get_detail',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位详情-根据职位 ID 获取职位详情，包含职位基本信息、职位负责人、协助人、用人经理、职位地址列表、职位设置、关联招需、门店列表及标签列表等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中使用的部门 ID 的类型 Options:open_department_id(以 open_department_id 来标识部门),department_id(以 department_id 来标识部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1JobList = {
  project: 'hire',
  name: 'hire.v1.job.list',
  sdkName: 'hire.v1.job.list',
  path: '/open-apis/hire/v1/jobs',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位列表-获取职位列表，仅支持获取默认字段信息，获取详细信息可调用接口',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，可通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1JobManagerBatchUpdate = {
  project: 'hire',
  name: 'hire.v1.jobManager.batchUpdate',
  sdkName: 'hire.v1.jobManager.batchUpdate',
  path: '/open-apis/hire/v1/jobs/:job_id/managers/batch_update',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-更新职位相关人员-更新职位相关人员，包含招聘负责人、招聘协助人、用人经理',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      recruiter_id: z
        .string()
        .describe('招聘负责人 ID，与入参`user_id_type`类型一致，当`update_option_list `包含`招聘负责人`时，该参数必填')
        .optional(),
      assistant_id_list: z
        .array(z.string())
        .describe(
          '招聘协助人 ID 列表，与入参`user_id_type`类型一致，当`update_option_list `包含`招聘协助人`时，该参数必填',
        )
        .optional(),
      hiring_manager_id_list: z
        .array(z.string())
        .describe('用人经理 ID 列表，与入参`user_id_type`类型一致，当`update_option_list`包含`用人经理`时，该参数必填')
        .optional(),
      update_option_list: z
        .array(z.number().describe('Options:1(JobManager 招聘负责人),2(Assistant 招聘协助人),3(HireManager 用人经理)'))
        .describe('更新的人员类型'),
      creator_id: z.string().describe('操作者 ID，与入参`user_id_type`类型一致，不填默认系统操作').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1JobManagerGet = {
  project: 'hire',
  name: 'hire.v1.jobManager.get',
  sdkName: 'hire.v1.jobManager.get',
  path: '/open-apis/hire/v1/jobs/:job_id/managers/:manager_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-历史版本（不推荐）-招聘-职位-获取职位上的招聘人员信息-根据职位 ID 获取职位上的招聘人员信息，如招聘负责人、用人经理',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ job_id: z.string().describe('职位 ID'), manager_id: z.string().describe('此处传入职位 ID') }),
  },
};
export const hireV1JobOpen = {
  project: 'hire',
  name: 'hire.v1.job.open',
  sdkName: 'hire.v1.job.open',
  path: '/open-apis/hire/v1/jobs/:job_id/open',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-重启职位-对于已关闭的职位，可通过本接口重启职位',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      expiry_time: z
        .number()
        .describe('到期日期，毫秒时间戳（int64类型）**注意**：当`is_never_expired`为`false`时该字段必填且大于当前时间')
        .optional(),
      is_never_expired: z.boolean().describe('是否长期有效**可选值有**：* `true`：长期有效* `false`：指定到期日期'),
    }),
    path: z.object({
      job_id: z
        .string()
        .describe('职位 ID，可通过获取'),
    }),
  },
};
export const hireV1JobRecruiter = {
  project: 'hire',
  name: 'hire.v1.job.recruiter',
  sdkName: 'hire.v1.job.recruiter',
  path: '/open-apis/hire/v1/jobs/:job_id/recruiter',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-职位-获取职位上的招聘人员信息-根据职位 ID 获取职位上的招聘人员信息，如招聘负责人、用人经理等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID, 可通过接口获取',
        ),
    }),
  },
};
export const hireV1JobUpdateConfig = {
  project: 'hire',
  name: 'hire.v1.job.updateConfig',
  sdkName: 'hire.v1.job.updateConfig',
  path: '/open-apis/hire/v1/jobs/:job_id/update_config',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-职位-更新职位设置-更新职位设置，包括面试评价表、Offer 申请表等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      offer_apply_schema_id: z
        .string()
        .describe(
          'Offer 申请表 ID，可通过接口获取，当`update_option_list`包含`更新 Offer 申请表`时，该参数必填',
        )
        .optional(),
      offer_process_conf: z
        .string()
        .describe(
          'Offer 审批流程 ID，可通过接口获取',
        )
        .optional(),
      recommended_evaluator_id_list: z
        .array(z.string())
        .describe('建议评估人 ID 列表，需与入参`user_id_type`类型一致')
        .optional(),
      update_option_list: z
        .array(
          z
            .number()
            .describe(
              'Options:1(更新面试评价表),2(更新 Offer 申请表),3(更新 Offer 审批流程),4(更新招聘需求),5(更新建议面试官),6(更新推荐评估人 更新建议评估人),8(更新关联职位),9(更新自助约面配置 更新面试官安排面试配置),10(更新面试登记表),11(更新入职登记表),12(更新官网申请表)',
            ),
        )
        .describe(
          '更新选项，传入要更新的配置项- 接口将按照所选择的「选项」进行设置参数校验和更新。若设置的必填字段更新时未填写内容，接口将报错无法完成更新',
        ),
      assessment_template_biz_id: z
        .string()
        .describe(
          '面试评价表 ID，可通过接口获取，当同时满足以下两个条件时，该参数必填：- `update_option_list`包含`更新面试评价表`- 「飞书招聘」-「设置」-「面试轮次类型设置」-「启用面试轮次类型」开关关闭',
        )
        .optional(),
      interview_round_conf_list: z
        .array(
          z.object({
            interviewer_id_list: z
              .array(z.string())
              .describe('建议面试官 ID 列表，需与入参`user_id_type`类型一致')
              .optional(),
            round: z.number().describe('面试轮次').optional(),
          }),
        )
        .describe('建议面试官列表，当`update_option_list`包含`更新建议面试官`时，该参数必填')
        .optional(),
      jr_id_list: z
        .array(z.string())
        .describe(
          '关联招聘需求，可通过接口获取',
        )
        .optional(),
      interview_registration_schema_id: z
        .string()
        .describe(
          '面试登记表 ID，可通过接口获取。<strong>注意：- 当在「飞书招聘」-「设置」 -「信息登记表使用设置」 - 「申请表和登记表使用设置」中选择「HR 按职位选择登记表」时，该字段为必填；否则该字段不生效- 当`update_option_list`包含`更新面试登记表`时，该参数必填',
        )
        .optional(),
      onboard_registration_schema_id: z
        .string()
        .describe(
          '入职登记表 ID，可通过接口获取。<strong>注意：- 当在飞书招聘「设置」 - 「信息登记表使用设置」 - 「入职登记表使用方式」中选择「HR 按职位选择登记表」时，该字段为必填；否则该字段不生效- 当`update_option_list`包含`更新入职登记表`时，该参数必填',
        )
        .optional(),
      interview_round_type_conf_list: z
        .array(
          z.object({
            round_biz_id: z
              .string()
              .describe(
                '面试轮次类型 ID，可通过接口获取',
              )
              .optional(),
            assessment_template_biz_id: z
              .string()
              .describe(
                '面试评价表 ID，可通过接口获取',
              )
              .optional(),
          }),
        )
        .describe(
          '面试轮次类型 ID 列表，当同时满足以下两个条件时，该参数必填：- `update_option_list`包含`更新面试评价表`- 「飞书招聘」-「设置」-「面试轮次类型设置」-「启用面试轮次类型」开关打开',
        )
        .optional(),
      related_job_id_list: z
        .array(z.string())
        .describe(
          '关联职位列表，如职位为实体职位则关联虚拟职位 ID，如职位为虚拟职位则关联实体职位 ID，可通过接口获取',
        )
        .optional(),
      interview_appointment_config: z
        .object({
          enable_interview_appointment_by_interviewer: z.boolean().describe('是否开启面试官自助约面').optional(),
          config: z
            .object({
              interview_type: z
                .number()
                .describe('面试类型 Options:1(OnSite 现场面试),2(Phone 电话面试),3(Video 视频面试)')
                .optional(),
              talent_timezone_code: z.string().describe('候选人时区').optional(),
              contact_user_id: z.string().describe('面试联系人 ID，需与入参`user_id_type`类型一致').optional(),
              contact_mobile: z.string().describe('面试联系人电话').optional(),
              contact_email: z.string().describe('面试联系人邮箱').optional(),
              address_id: z
                .string()
                .describe(
                  '面试地点 ID，可通过接口获取',
                )
                .optional(),
              video_type: z
                .number()
                .describe(
                  '视频面试类型 Options:1(Zoom),2(NewCoderTech 牛客技术类型),3(NewCoderNoTech 牛客非技术类型),4(AcmCoder 赛码),5(Lark 飞书),8(Hackerrank),9(LarkWithCoding 飞书(含代码考核)),100(None 不使用系统工具)',
                )
                .optional(),
              cc: z.array(z.string()).describe('抄送人 ID 列表，需与入参`user_id_type`类型一致').optional(),
              remark: z.string().describe('面试配置备注').optional(),
              interview_notification_template_id: z.string().describe('面试通知模板 ID').optional(),
              appointment_notification_template_id: z.string().describe('预约通知模板 ID').optional(),
              cancel_interview_notification_template_id: z.string().describe('取消面试通知模版 ID').optional(),
            })
            .describe('配置详情')
            .optional(),
        })
        .describe('自助约面配置，当`update_option_list`包含`更新面试官安排面试配置`时，该参数必填')
        .optional(),
      portal_website_apply_form_schema_id: z
        .string()
        .describe(
          '官网申请表ID，可通过接口获取',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      job_id: z
        .string()
        .describe(
          '职位 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1LocationList = {
  project: 'hire',
  name: 'hire.v1.location.list',
  sdkName: 'hire.v1.location.list',
  path: '/open-apis/hire/v1/locations',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-地址-获取地址列表-获取地址列表，可查询到的信息包括地址与地点信息，可应用在职位地点、面试地点、人才意向工作城市等场景',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
      usage: z
        .enum(['position_location', 'interview_location', 'store_location'])
        .describe(
          '地址类型 Options:position_location(职位地址),interview_location(面试地址),store_location(门店地址。当前仅支持未接入飞书人事的租户使用)',
        ),
    }),
  },
};
export const hireV1LocationQuery = {
  project: 'hire',
  name: 'hire.v1.location.query',
  sdkName: 'hire.v1.location.query',
  path: '/open-apis/hire/v1/locations/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-招聘相关配置-地址-查询地点列表-根据地点类型和地点码查询地点列表，获取地点名称信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      code_list: z
        .array(z.string())
        .describe('地点码列表，最大长度不超过100，不传则根据地点类型分页查询全量列表')
        .optional(),
      location_type: z.number().describe('地点类型 Options:1(国家类型),2(省份/州类型),3(市类型),4(区类型)'),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页限制'),
    }),
  },
};
export const hireV1MinutesGet = {
  project: 'hire',
  name: 'hire.v1.minutes.get',
  sdkName: 'hire.v1.minutes.get',
  path: '/open-apis/hire/v1/minutes',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试速记明细-获取指定面试的面试速记明细记录',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      interview_id: z
        .string()
        .describe(
          '面试ID，可根据接口、获取',
        ),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，表示本次请求获取的速记中的语句的最大数量').optional(),
    }),
  },
};
export const hireV1NoteCreate = {
  project: 'hire',
  name: 'hire.v1.note.create',
  sdkName: 'hire.v1.note.create',
  path: '/open-apis/hire/v1/notes',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-备注-创建备注-为人才创建备注信息，支持在备注中@其他用户',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe('人才ID，可通过获取'),
      application_id: z
        .string()
        .describe(
          '投递ID，可通过获取',
        )
        .optional(),
      creator_id: z.string().describe('创建人ID，请传入与`user_id_type`相匹配的ID').optional(),
      content: z.string().describe('备注内容'),
      privacy: z.number().describe('备注私密属性（默认为公开） Options:1(Private 私密),2(Public 公开)').optional(),
      notify_mentioned_user: z.boolean().describe('是否通知被@的用户').optional(),
      mention_entity_list: z
        .array(
          z.object({
            offset: z.number().describe('被@用户在 content 中的偏移量- 取值范围：0 ~ content.length'),
            user_id: z.string().describe('被@用户的 ID，请传入与 `user_id_type` 类型相匹配的 ID'),
          }),
        )
        .describe('被@用户列表')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1NoteDelete = {
  project: 'hire',
  name: 'hire.v1.note.delete',
  sdkName: 'hire.v1.note.delete',
  path: '/open-apis/hire/v1/notes/:note_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-招聘-候选人管理-备注-删除备注-根据备注 ID 删除备注',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      note_id: z
        .string()
        .describe('备注 ID，可通过获取')
        .optional(),
    }),
  },
};
export const hireV1NoteGet = {
  project: 'hire',
  name: 'hire.v1.note.get',
  sdkName: 'hire.v1.note.get',
  path: '/open-apis/hire/v1/notes/:note_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-备注-获取备注-根据备注 ID 查询人才备注信息，包括备注内容、人才 ID、投递 ID 等。可用于人才备注信息展示等场景',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      note_id: z
        .string()
        .describe('备注 ID，可通过获取'),
    }),
  },
};
export const hireV1NoteList = {
  project: 'hire',
  name: 'hire.v1.note.list',
  sdkName: 'hire.v1.note.list',
  path: '/open-apis/hire/v1/notes',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-候选人管理-备注-获取备注列表-根据人才ID获取备注列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，默认 10，最大值为 200').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      talent_id: z
        .string()
        .describe('人才ID，可通过获取'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1NotePatch = {
  project: 'hire',
  name: 'hire.v1.note.patch',
  sdkName: 'hire.v1.note.patch',
  path: '/open-apis/hire/v1/notes/:note_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-招聘-候选人管理-备注-更新备注-根据备注 ID 更新备注信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      content: z.string().describe('备注内容'),
      operator_id: z.string().describe('更新人 ID，请传入与`user_id_type`相匹配的ID').optional(),
      notify_mentioned_user: z.boolean().describe('是否通知被@的用户').optional(),
      mention_entity_list: z
        .array(
          z.object({
            offset: z.number().describe('被@用户在 content 中的偏移量- 取值范围：0 ~ content.length'),
            user_id: z.string().describe('被@用户的 ID，请传入与 `user_id_type` 类型相匹配的 ID'),
          }),
        )
        .describe('被@用户列表')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      note_id: z
        .string()
        .describe('备注 ID，可通过获取'),
    }),
  },
};
export const hireV1OfferApplicationFormGet = {
  project: 'hire',
  name: 'hire.v1.offerApplicationForm.get',
  sdkName: 'hire.v1.offerApplicationForm.get',
  path: '/open-apis/hire/v1/offer_application_forms/:offer_application_form_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘相关配置-Offer 设置-Offer 申请表-获取 Offer 申请表信息-根据 Offer 申请表 ID 获取 Offer 申请表信息，可获取到的信息包括申请表名称、申请表模块、申请表字段等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      offer_application_form_id: z
        .string()
        .describe(
          'Offer 申请表 ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferApplicationFormList = {
  project: 'hire',
  name: 'hire.v1.offerApplicationForm.list',
  sdkName: 'hire.v1.offerApplicationForm.list',
  path: '/open-apis/hire/v1/offer_application_forms',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘相关配置-Offer 设置-Offer 申请表-获取 Offer 申请表列表-获取 Offer 申请表列表，可获取的信息包括申请表名称、创建时间等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，**无效参数，请忽略**').optional(),
    }),
  },
};
export const hireV1OfferCustomFieldUpdate = {
  project: 'hire',
  name: 'hire.v1.offerCustomField.update',
  sdkName: 'hire.v1.offerCustomField.update',
  path: '/open-apis/hire/v1/offer_custom_fields/:offer_custom_field_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-招聘相关配置-Offer 设置-Offer 申请表-更新 Offer 申请表自定义字段-本接口支持修改 Offer 申请表的自定义字段，Offer 申请表的定义可参考「飞书招聘」-「设置」-「Offer 设置」-「Offer 申请表设置」中的内容',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z
        .object({
          zh_cn: z.string().describe('字段中文名称').optional(),
          en_us: z.string().describe('字段英文名称').optional(),
        })
        .describe('自定义字段名称，zh_cn和en_us必填其一'),
      config: z
        .object({
          options: z
            .array(
              z.object({
                name: z
                  .object({
                    zh_cn: z.string().describe('选项中文名称').optional(),
                    en_us: z.string().describe('选项英文名称').optional(),
                  })
                  .describe('选项名称，zh_cn和en_us必填其一'),
              }),
            )
            .describe(
              '选项列表，仅字段类型为「单选」、「多选」时需传配置选项信息。字段类型可通过接口获取',
            )
            .optional(),
        })
        .describe('自定义字段配置信息')
        .optional(),
    }),
    path: z.object({
      offer_custom_field_id: z
        .string()
        .describe(
          'Offer 申请表自定义字段 ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferSchemaGet = {
  project: 'hire',
  name: 'hire.v1.offerSchema.get',
  sdkName: 'hire.v1.offerSchema.get',
  path: '/open-apis/hire/v1/offer_schemas/:offer_schema_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-招聘-offer-获取 Offer 申请表详细信息',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ offer_schema_id: z.string().describe('offer申请表的ID *必需属性') }),
  },
};
export const hireV1OfferCreate = {
  project: 'hire',
  name: 'hire.v1.offer.create',
  sdkName: 'hire.v1.offer.create',
  path: '/open-apis/hire/v1/offers',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-Offer-创建 Offer-传入 Offer 基本信息，创建 Offer',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，详情请参考：',
        ),
      schema_id: z
        .string()
        .describe(
          'Offer 申请表模板 ID，用于描述申请表单结构的元数据定义，即对申请表内容的描述。用户每一次更改 Offer 申请表模板信息，都会生成新的 schema_id，创建 Offer 时应传入最新的 schema_id，可先从中拿到offer申请表ID，再从接口中获取最新的模板ID。不填则会自动填充最新模版ID',
        )
        .optional(),
      offer_type: z.number().describe('Offer 类型 Options:1(正式 Offer),2(实习 Offer)').optional(),
      basic_info: z
        .object({
          department_id: z
            .string()
            .describe(
              '部门 ID，与入参中的`department_id_type`类型一致，详情请查看：',
            ),
          leader_user_id: z.string().describe('直属上级 ID，与入参`user_id_type`类型一致'),
          employment_job_id: z
            .string()
            .describe(
              '职务 ID，可通过接口获取。**请注意**：仅支持开通飞书人事企业版的客户使用',
            )
            .optional(),
          employee_type_id: z.string().describe('人员类型 ID，与入参`employee_type_id_type` 类型一致').optional(),
          job_family_id: z
            .string()
            .describe(
              '职位序列 ID，通过接口获取',
            )
            .optional(),
          job_level_id: z
            .string()
            .describe(
              '职位级别 ID，通过接口获取',
            )
            .optional(),
          probation_month: z.number().describe('试用期（月）').optional(),
          contract_year: z.number().describe('合同期(年)，推荐使用「contract_period」').optional(),
          contract_period: z
            .object({
              period_type: z.number().describe('合同周期类型 Options:1(month 月),2(year 年)'),
              period: z.number().describe('合同时长'),
            })
            .describe('合同期（年/月）')
            .optional(),
          expected_onboard_date: z.string().describe('预计入职日期。以下示例值未转义，使用时请注意转义').optional(),
          onboard_address_id: z
            .string()
            .describe(
              '入职地点 ID，详情请参考：',
            )
            .optional(),
          work_address_id: z
            .string()
            .describe(
              '办公地点 ID，详情请参考：',
            )
            .optional(),
          owner_user_id: z.string().describe('Offer负责人 ID，与入参`user_id_type`类型一致'),
          recommended_words: z.string().describe('Offer 推荐语').optional(),
          job_requirement_id: z
            .string()
            .describe(
              '招聘需求 ID，详情请查看：',
            )
            .optional(),
          job_process_type_id: z.number().describe('招聘流程类型 ID，可选值：「1:社招，2:校招」').optional(),
          attachment_id_list: z.array(z.string()).describe('附件 ID 列表，暂无获取附件 ID 的方式，请勿使用').optional(),
          common_attachment_id_list: z
            .array(z.string())
            .describe(
              '通用附件 ID 列表，可使用接口创建的附件',
            )
            .optional(),
          attachment_description: z.string().describe('附件描述').optional(),
          operator_user_id: z.string().describe('Offer操作人 ID，与入参`user_id_type`类型一致'),
          position_id: z
            .string()
            .describe(
              '岗位 ID，可通过 获取（仅限飞书人事租户使用，若链接无法打开，则说明飞书人事未启用岗位，请联系开通）',
            )
            .optional(),
          job_offered: z.string().describe('入职职位').optional(),
          job_grade_id: z
            .string()
            .describe(
              '职等 ID，可通过 获取（仅限飞书人事租户使用）',
            )
            .optional(),
        })
        .describe('Offer 基本信息'),
      salary_info: z
        .object({
          currency: z.string().describe('币种'),
          basic_salary: z
            .string()
            .describe('基本工资，当启用 Offer 申请表中的「薪资信息」模块时，「基本工资」字段为必传项')
            .optional(),
          probation_salary_percentage: z.string().describe('试用期薪资百分比').optional(),
          award_salary_multiple: z.string().describe('年终奖月数').optional(),
          option_shares: z.string().describe('期权股数').optional(),
          quarterly_bonus: z.string().describe('季度奖金额，单位元、支持小数点后两位').optional(),
          half_year_bonus: z.string().describe('半年奖金额，单位元、支持小数点后两位').optional(),
        })
        .describe('Offer 薪资信息')
        .optional(),
      customized_info_list: z
        .array(
          z.object({
            id: z.string().describe('自定义字段 ID').optional(),
            value: z
              .string()
              .describe(
                '自定义字段信息，以字符串形式传入，如：1. 单选： "1"2. 多选："[\\"1\\", \\"2\\"]"3. 日期："{"date":"2022-01-01"}"4. 年份选择："{"date":"2022"}"5. 月份选择："{"date":"2022-01"}"6. 单行文本："xxx "7. 多行文本："xxx "8. 数字："123"9. 金额："123.1"',
              )
              .optional(),
          }),
        )
        .describe('自定义信息')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同),department_id(【飞书】用来标识租户内一个唯一的部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferGet = {
  project: 'hire',
  name: 'hire.v1.offer.get',
  sdkName: 'hire.v1.offer.get',
  path: '/open-apis/hire/v1/offers/:offer_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-Offer-获取 Offer 详情-根据 Offer ID 获取 Offer 详细信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '此次调用中使用的部门 ID 类型。 Options:open_department_id(【飞书】用来在具体某个应用中标识一个部门，同一个department_id 在不同应用中的 open_department_id 相同),department_id(【飞书】用来标识租户内一个唯一的部门)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      offer_id: z
        .string()
        .describe(
          'Offer ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferInternOfferStatus = {
  project: 'hire',
  name: 'hire.v1.offer.internOfferStatus',
  sdkName: 'hire.v1.offer.internOfferStatus',
  path: '/open-apis/hire/v1/offers/:offer_id/intern_offer_status',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-Offer-更新实习 Offer 入/离职状态-对「实习待入职」状态的实习 Offer 确认入职、放弃入职，或对「实习已入职」状态的实习 Offer 操作离职',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operation: z
        .enum(['confirm_onboarding', 'cancel_onboarding', 'offboard'])
        .describe(
          '更新入/离职状态的操作 Options:confirm_onboarding(确认入职),cancel_onboarding(放弃入职),offboard(操作离职)',
        ),
      onboarding_info: z
        .object({ actual_onboarding_date: z.string().describe('实际入职日期**值格式**："YYYY-MM-DD"') })
        .describe('入职表单信息**注意**：当 operation 为 `confirm_onboarding` 时，该字段必填')
        .optional(),
      offboarding_info: z
        .object({
          actual_offboarding_date: z
            .string()
            .describe('实际离职日期**注意**：实际离职日期需晚于实际入职日期**值格式**："YYYY-MM-DD"'),
          notes: z.string().describe('备注').optional(),
        })
        .describe('离职表单信息**注意**：当 operation 为 `offboard` 时，该字段必填')
        .optional(),
    }),
    path: z.object({
      offer_id: z
        .string()
        .describe(
          'Offer ID，如何获取请参考',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferList = {
  project: 'hire',
  name: 'hire.v1.offer.list',
  sdkName: 'hire.v1.offer.list',
  path: '/open-apis/hire/v1/offers',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-候选人管理-投递流程-Offer-获取 Offer 列表-根据人才 ID 获取 Offer 列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小，最大为 200').optional(),
      talent_id: z
        .string()
        .describe(
          '人才 ID，如何获取人才 ID 请参考',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferOfferStatus = {
  project: 'hire',
  name: 'hire.v1.offer.offerStatus',
  sdkName: 'hire.v1.offer.offerStatus',
  path: '/open-apis/hire/v1/offers/:offer_id/offer_status',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-Offer-更新 Offer 状态-通过 Offer ID 更新候选人 Offer 的「Offer 审批状态」或 「Offer 发送和接受状态」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      offer_status: z
        .number()
        .describe(
          'Offer 状态 Options:2(Approving Offer 审批中),3(Withdrawn Offer 审批已撤回),4(Approved Offer 审批通过),5(Rejected Offer 审批不通过),6(OfferLetterSent Offer 已发送),7(OfferAccepted Offer 被候选人接受),8(OfferRejected Offer 被候选人拒绝),9(Obsolete Offer 已失效),10(NoApproval Offer 已创建)',
        ),
      expiration_date: z
        .string()
        .describe('Offer 失效时间**注意**：当请求参数 offer_status 为「Offer 已发送」时必填**值格式**："YYYY-MM-DD"')
        .optional(),
      termination_reason_id_list: z
        .array(z.string())
        .describe(
          '终止原因 ID 列表，可通过接口获取**最大长度**：50**注意**：当请求参数 offer_status 为「Offer 被候选人拒绝」时必填',
        )
        .optional(),
      termination_reason_note: z.string().describe('Offer 终止备注信息').optional(),
    }),
    path: z.object({
      offer_id: z
        .string()
        .describe(
          'Offer ID，如何获取请参考',
        )
        .optional(),
    }),
  },
};
export const hireV1OfferUpdate = {
  project: 'hire',
  name: 'hire.v1.offer.update',
  sdkName: 'hire.v1.offer.update',
  path: '/open-apis/hire/v1/offers/:offer_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-Offer-更新 Offer 信息-更新 Offer 信息，包含基本信息、薪资信息、自定义信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      schema_id: z
        .string()
        .describe(
          'Offer 申请表模板 ID，用于描述申请表单结构的元数据定义，即对申请表内容的描述。用户每一次更改 Offer 申请表模板信息，都会生成新的 schema_id，创建 Offer 时应传入最新的 schema_id，可先从中拿到offer申请表 ID，再从接口中获取最新的模板 ID',
        ),
      basic_info: z
        .object({
          department_id: z
            .string()
            .describe(
              '部门 ID，与入参中的`department_id_type`类型一致，可通过接口获取',
            ),
          leader_user_id: z.string().describe('直属上级 ID，需与入参`user_id_type`类型一致'),
          employment_job_id: z
            .string()
            .describe(
              '职务 ID，可通过获取，**请注意**：仅支持开通飞书人事企业版的租户使用',
            )
            .optional(),
          employee_type_id: z.string().describe('人员类型 ID，需与入参`employee_type_id_type` 类型一致').optional(),
          job_family_id: z.string().describe('职位序列 ID，需与入参`job_family_id_type` 类型一致').optional(),
          job_level_id: z.string().describe('职位级别 ID，需与入参`job_level_id_type` 类型一致').optional(),
          probation_month: z.number().describe('试用期（月）').optional(),
          contract_year: z.number().describe('合同期(年)，推荐使用`contract_period`').optional(),
          contract_period: z
            .object({
              period_type: z.number().describe('合同周期类型 Options:1(month 月),2(year 年)'),
              period: z.number().describe('合同时长'),
            })
            .describe('合同期（年/月）')
            .optional(),
          expected_onboard_date: z
            .string()
            .describe('预计入职日期，格式为：{"date":"YYYY-MM-DD"}，使用时请注意转义')
            .optional(),
          onboard_address_id: z
            .string()
            .describe(
              '入职地点 ID，可通过接口获取',
            )
            .optional(),
          work_address_id: z
            .string()
            .describe(
              '办公地点 ID，可通过接口获取',
            )
            .optional(),
          owner_user_id: z.string().describe('Offer负责人 ID，需与入参`user_id_type`类型一致'),
          recommended_words: z.string().describe('Offer 推荐语').optional(),
          job_requirement_id: z
            .string()
            .describe(
              '招聘需求 ID，可通过接口获取',
            )
            .optional(),
          job_process_type_id: z.number().describe('招聘流程类型 ID**可选值**：- 1：社招- 2：校招').optional(),
          attachment_id_list: z.array(z.string()).describe('附件 ID 列表，暂无获取附件 ID 的方式，请勿使用').optional(),
          common_attachment_id_list: z
            .array(z.string())
            .describe(
              '通用附件 ID 列表，可使用接口创建的附件',
            )
            .optional(),
          attachment_description: z.string().describe('附件描述').optional(),
          operator_user_id: z.string().describe('Offer 操作人 ID，需与入参`user_id_type`类型一致'),
          position_id: z
            .string()
            .describe(
              '岗位 ID，可通过 获取（仅限飞书人事租户使用，若链接无法打开，则说明飞书人事未启用岗位，请联系开通）',
            )
            .optional(),
          job_offered: z.string().describe('入职职位').optional(),
          job_grade_id: z
            .string()
            .describe(
              '职等 ID，可通过 获取（仅限飞书人事租户使用）',
            )
            .optional(),
        })
        .describe('Offer 基本信息'),
      salary_info: z
        .object({
          currency: z.string().describe('币种'),
          basic_salary: z
            .string()
            .describe('基本薪资，当启用 Offer 申请表中的「薪资信息」模块时，「基本工资」字段为必传项，支持小数点后两位')
            .optional(),
          probation_salary_percentage: z.string().describe('试用期百分比，支持小数点后两位').optional(),
          award_salary_multiple: z.string().describe('年终奖月数，仅支持整数').optional(),
          option_shares: z.string().describe('期权股数，仅支持整数').optional(),
          quarterly_bonus: z.string().describe('季度奖金额，单位元、支持小数点后两位').optional(),
          half_year_bonus: z.string().describe('半年奖金额，单位元、支持小数点后两位').optional(),
        })
        .describe('Offer 薪资信息')
        .optional(),
      customized_info_list: z
        .array(
          z.object({
            id: z.string().describe('自定义字段 ID').optional(),
            value: z
              .string()
              .describe(
                '自定义字段信息，以字符串形式传入，如：1. 单行文本："xxx "2. 多行文本："xxx "3. 单选： "1"4. 多选："[\\"1\\", \\"2\\"]"5. 日期："{"date":"2022-01-01"}"6. 年份选择："{"date":"2022"}"7. 月份选择："{"date":"2022-01"}"8. 数字："123"9. 金额："123.1"10. 公式："( [6872592813776914699] * 12 + 20 / 2 ) / [6872592813776914699] + 2000"，其中6872592813776914699为薪资字段 ID- 更多详细请查看：',
              )
              .optional(),
          }),
        )
        .describe('自定义信息，此字段更新为覆盖式更新，旧 Offer 中已存在字段不传则默认为删除，反之为新增')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      job_family_id_type: z
        .enum(['people_admin_job_category_id', 'job_family_id'])
        .describe(
          '此次调用中使用的「序列 ID」的类型 Options:people_admin_job_category_id(「人力系统管理后台」适用的序列 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_family_id(「飞书管理后台」适用的序列 ID，通过接口获取)',
        )
        .optional(),
      employee_type_id_type: z
        .enum(['people_admin_employee_type_id', 'employee_type_enum_id'])
        .describe(
          '此次调用中使用的「人员类型 ID」的类型 Options:people_admin_employee_type_id(「人力系统管理后台」适用的人员类型 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),employee_type_enum_id(「飞书管理后台」适用的人员类型 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      offer_id: z
        .string()
        .describe(
          'Offer ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1QuestionnaireList = {
  project: 'hire',
  name: 'hire.v1.questionnaire.list',
  sdkName: 'hire.v1.questionnaire.list',
  path: '/open-apis/hire/v1/questionnaires',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-面试-获取面试满意度问卷列表-批量获取面试满意度问卷信息，包含问卷完成情况、问卷题目及问卷题目作答内容等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      application_id: z
        .string()
        .describe(
          '投递 ID，用于筛选指定投递下的数据，可通过接口获取**注意**：- 当「飞书招聘」-「设置」-「面试设置」-「面试满意度问卷设置」中，通过邮件向候选人发送问卷时机选择为「面试流程结束后」时，仅可通过该参数进行筛选- 该参数不可以和 `interview_id` 参数同时填写',
        )
        .optional(),
      interview_id: z
        .string()
        .describe(
          '面试 ID，用于筛选指定面试下的数据，可通过接口或接口获取**注意**：- 当「飞书招聘」-「设置」-「面试设置」-「面试满意度问卷设置」中，通过邮件向候选人发送问卷时机选择为「每次面试结束后」或者「第一次面试结束后」时，仅可通过该参数进行筛选- 该参数不可以和 `application_id` 参数同时填写',
        )
        .optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
    }),
  },
};
export const hireV1ReferralAccountCreate = {
  project: 'hire',
  name: 'hire.v1.referralAccount.create',
  sdkName: 'hire.v1.referralAccount.create',
  path: '/open-apis/hire/v1/referral_account',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-内推账户-注册内推账户-通过内推人的手机号或邮箱注册「内推奖励账户」。注册后，可通过接口获取内推账户 ID、积分余额、现金余额等，可通过接口提取账户余额，可通过、接口启/停用账户',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      mobile: z
        .object({
          code: z
            .string()
            .describe(
              '电话国际区号，遵守国际统一标准，请参考',
            )
            .optional(),
          number: z.string().describe('手机号码，在传 mobile 参数的情况下必传').optional(),
        })
        .describe('电话，该参数与 email 参数必传一个')
        .optional(),
      email: z.string().describe('邮箱，该参数与 mobile 参数必传一个').optional(),
    }),
  },
};
export const hireV1ReferralAccountDeactivate = {
  project: 'hire',
  name: 'hire.v1.referralAccount.deactivate',
  sdkName: 'hire.v1.referralAccount.deactivate',
  path: '/open-apis/hire/v1/referral_account/:referral_account_id/deactivate',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-内推账户-停用内推账户-停用内推账户，停用后，将不再发送，也无法通过提取',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      referral_account_id: z
        .string()
        .describe(
          '账户ID，注册账户后获取：',
        )
        .optional(),
    }),
  },
};
export const hireV1ReferralAccountEnable = {
  project: 'hire',
  name: 'hire.v1.referralAccount.enable',
  sdkName: 'hire.v1.referralAccount.enable',
  path: '/open-apis/hire/v1/referral_account/enable',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-内推账户-启用内推账户-根据账户 ID 启用账户，启用后可通过监听余额变更、通过提取余额',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      referral_account_id: z
        .string()
        .describe(
          '账户 ID，注册账户后获取：',
        )
        .optional(),
    }),
  },
};
export const hireV1ReferralAccountGetAccountAssets = {
  project: 'hire',
  name: 'hire.v1.referralAccount.getAccountAssets',
  sdkName: 'hire.v1.referralAccount.getAccountAssets',
  path: '/open-apis/hire/v1/referral_account/get_account_assets',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-内推账户-查询内推账户-根据账户 ID 查询内推账户信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      referral_account_id: z
        .string()
        .describe(
          '账户 ID，注册账户后获取：',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ReferralAccountReconciliation = {
  project: 'hire',
  name: 'hire.v1.referralAccount.reconciliation',
  sdkName: 'hire.v1.referralAccount.reconciliation',
  path: '/open-apis/hire/v1/referral_account/reconciliation',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-内推账户-内推账户提现数据对账-对一段时间内的内推账户积分提现数据进行对账，调用方需传入调用方系统的内推账户积分变动信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      start_trans_time: z.string().describe('对账时段的起始交易时间，毫秒时间戳'),
      end_trans_time: z.string().describe('对账时段的截止交易时间，毫秒时间戳'),
      trade_details: z
        .array(
          z.object({
            account_id: z
              .string()
              .describe(
                '内推账户ID，通过生成',
              ),
            total_recharge_reward_info: z
              .object({ point_bonus: z.number().describe('变动的积分数量').optional() })
              .describe('时段内该账户发生在调用方系统的积分之和')
              .optional(),
          }),
        )
        .describe('账户积分变动信息')
        .optional(),
    }),
  },
};
export const hireV1ReferralAccountWithdraw = {
  project: 'hire',
  name: 'hire.v1.referralAccount.withdraw',
  sdkName: 'hire.v1.referralAccount.withdraw',
  path: '/open-apis/hire/v1/referral_account/:referral_account_id/withdraw',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-内推账户-全额提取内推账户余额-通过账户 ID 全额提取内推账户下的积分/现金。全额提现后，内推人在飞书招聘系统中的积分/现金余额会变为 0，对应的积分/现金奖励状态也会变为「已发放」',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      withdraw_bonus_type: z
        .array(z.number().describe('Options:1(point 积分),2(cash 现金)'))
        .describe('提取的奖励类型'),
      external_order_id: z
        .string()
        .describe(
          '外部提取单 ID，由请求方提供，用于保证接口的幂等性，需要保证唯一。传入重复 ID 会返回原 ID 对应的提取详情',
        ),
    }),
    path: z.object({
      referral_account_id: z
        .string()
        .describe(
          '账户 ID，通过生成',
        )
        .optional(),
    }),
  },
};
export const hireV1ReferralWebsiteJobPostGet = {
  project: 'hire',
  name: 'hire.v1.referralWebsiteJobPost.get',
  sdkName: 'hire.v1.referralWebsiteJobPost.get',
  path: '/open-apis/hire/v1/referral_websites/job_posts/:job_post_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-内推-获取内推官网下职位广告详情-根据职位广告 ID 获取内推官网下的职位广告详情，包含职位广告 ID 以及职位信息等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      job_post_id: z
        .string()
        .describe(
          '职位广告 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1ReferralWebsiteJobPostList = {
  project: 'hire',
  name: 'hire.v1.referralWebsiteJobPost.list',
  sdkName: 'hire.v1.referralWebsiteJobPost.list',
  path: '/open-apis/hire/v1/referral_websites/job_posts',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-内推-获取内推官网下职位广告列表-获取内推官网下的职位列表，包含职位广告ID、职位广告名称、职位信息等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      process_type: z
        .number()
        .describe('招聘流程类型 Options:1(social_process 社招),2(campus_process 校招)')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
    }),
  },
};
export const hireV1ReferralGetByApplication = {
  project: 'hire',
  name: 'hire.v1.referral.getByApplication',
  sdkName: 'hire.v1.referral.getByApplication',
  path: '/open-apis/hire/v1/referrals/get_by_application',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-内推-获取内推信息-根据投递 ID 获取内推信息，包含内推人信息、内推创建时间等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过获取',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1ReferralSearch = {
  project: 'hire',
  name: 'hire.v1.referral.search',
  sdkName: 'hire.v1.referral.search',
  path: '/open-apis/hire/v1/referrals/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-内推-查询人才内推信息-根据人才查询内推信息列表，包含内推人信息、内推时间、投递 ID等，按内推投递的`创建时间`从小到大排序返回',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID ，可通过获取',
        ),
      start_time: z
        .string()
        .describe('内推记录最早创建时间，毫秒时间戳。若不填，默认为指定人才下的全部记录，但最多返回200条')
        .optional(),
      end_time: z
        .string()
        .describe('内推记录最晚创建时间，毫秒时间戳。默认为指定人才下的全部记录，但最多返回200条')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const hireV1RegistrationSchemaList = {
  project: 'hire',
  name: 'hire.v1.registrationSchema.list',
  sdkName: 'hire.v1.registrationSchema.list',
  path: '/open-apis/hire/v1/registration_schemas',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-候选人-获取信息登记表列表-根据适用场景获取信息登记表列表，可获取到的信息包括登记表名称、登记表模块、登记表字段等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      scenario: z
        .number()
        .describe(
          '登记表适用场景；不填表示获取全部类型信息登记表 Options:5(InterviewRegistration 面试登记表),6(OnboardRegistration 入职登记表),14(InfoUpdateRegistration 信息更新登记表)',
        )
        .optional(),
    }),
  },
};
export const hireV1ResumeSourceList = {
  project: 'hire',
  name: 'hire.v1.resumeSource.list',
  sdkName: 'hire.v1.resumeSource.list',
  path: '/open-apis/hire/v1/resume_sources',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-候选人管理-简历来源-获取简历来源列表-获取简历来源列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小**默认值**：1000').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1RoleGet = {
  project: 'hire',
  name: 'hire.v1.role.get',
  sdkName: 'hire.v1.role.get',
  path: '/open-apis/hire/v1/roles/:role_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-权限-获取角色详情-可通过此接口获取角色详情信息，包括名称、描述、权限列表等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      role_id: z
        .string()
        .describe('角色 ID，调用 获取')
        .optional(),
    }),
  },
};
export const hireV1RoleList = {
  project: 'hire',
  name: 'hire.v1.role.list',
  sdkName: 'hire.v1.role.list',
  path: '/open-apis/hire/v1/roles',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-权限-获取角色列表-根据 page_token 与 page_size 对权限角色进行游标分页查询，可查询到的信息包括：权限角色ID、角色名、角色描述。可应用于权限判断等鉴权场景',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
    }),
  },
};
export const hireV1SubjectList = {
  project: 'hire',
  name: 'hire.v1.subject.list',
  sdkName: 'hire.v1.subject.list',
  path: '/open-apis/hire/v1/subjects',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-项目-获取项目列表-获取项目列表（概念上一批集体启动和管理的职位可以定义为一个项目，例如 「2012 秋招项目」）',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小, 不能超过 200').optional(),
    }),
  },
};
export const hireV1TalentBlocklistChangeTalentBlock = {
  project: 'hire',
  name: 'hire.v1.talentBlocklist.changeTalentBlock',
  sdkName: 'hire.v1.talentBlocklist.changeTalentBlock',
  path: '/open-apis/hire/v1/talent_blocklist/change_talent_block',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-加入/移除屏蔽名单-根据人才 ID 将人才加入或移除屏蔽名单',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
      option: z.number().describe('操作类型 Options:1(Add 加入屏蔽名单),2(Remove 从屏蔽名单中移除)'),
      reason: z.string().describe('屏蔽原因，当`option`为`1`时必填').optional(),
    }),
  },
};
export const hireV1TalentFolderList = {
  project: 'hire',
  name: 'hire.v1.talentFolder.list',
  sdkName: 'hire.v1.talentFolder.list',
  path: '/open-apis/hire/v1/talent_folders',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-获取人才文件夹列表-获取招聘系统中人才文件夹信息列表，包括文件夹 ID、文件夹名称、文件夹所有者 ID',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1TalentObjectQuery = {
  project: 'hire',
  name: 'hire.v1.talentObject.query',
  sdkName: 'hire.v1.talentObject.query',
  path: '/open-apis/hire/v1/talent_objects/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-获取人才字段-获取全部人才字段详细信息，包含字段名称、字段描述、字段类型、启用状态等信息',
  accessTokens: ['tenant'],
  schema: {},
};
export const hireV1TalentOperationLogSearch = {
  project: 'hire',
  name: 'hire.v1.talentOperationLog.search',
  sdkName: 'hire.v1.talentOperationLog.search',
  path: '/open-apis/hire/v1/talent_operation_logs/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-招聘-人才-查询人才操作记录-根据操作人和操作类型查询人才的操作记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_id_list: z
        .array(z.string())
        .describe(
          '职位 ID 列表，可通过接口获取',
        )
        .optional(),
      operator_id_list: z.array(z.string()).describe('操作人 ID 列表，与入参 `user_id_type` 类型一致'),
      operation_list: z
        .array(z.number())
        .describe(
          '操作类型 ID 列表，操作类型枚举可查看中 `操作类型枚举定义`',
        ),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1TalentPoolBatchChangeTalentPool = {
  project: 'hire',
  name: 'hire.v1.talentPool.batchChangeTalentPool',
  sdkName: 'hire.v1.talentPool.batchChangeTalentPool',
  path: '/open-apis/hire/v1/talent_pools/:talent_pool_id/batch_change_talent_pool',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才库-批量加入/移除人才库中人才-对于同一个人才库，可批量执行人才加入或移除操作- 执行加入操作：当传入不存在人才 ID 时，接口会报错返回不存在人才 ID 列表。 当人才已在人才库中时，接口静默处理。- 执行移除操作：当传入不存在人才 ID 时，接口会报错返回不存在人才 ID 列表。 当人才未在人才库中时，接口静默处理',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id_list: z
        .array(z.string())
        .describe(
          '人才 ID 列表，可通过接口获取',
        ),
      option_type: z
        .number()
        .describe('操作类型 Options:1(Add 将人才添加至指定人才库),2(Remove 将人才从指定人才库中移除)'),
    }),
    path: z.object({
      talent_pool_id: z
        .string()
        .describe(
          '人才库 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1TalentPoolMoveTalent = {
  project: 'hire',
  name: 'hire.v1.talentPool.moveTalent',
  sdkName: 'hire.v1.talentPool.moveTalent',
  path: '/open-apis/hire/v1/talent_pools/:talent_pool_id/talent_relationship',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才库-将人才加入人才库-将人才加入人才库',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口  获取',
        ),
      add_type: z
        .number()
        .describe('加入类型，加入后是否从其他库移出 Options:1(OnlyAdd 否),2(AddAndRemoveFromOrigin 是)'),
    }),
    path: z.object({
      talent_pool_id: z
        .string()
        .describe(
          '人才库 ID，可通过接口  获取',
        )
        .optional(),
    }),
  },
};
export const hireV1TalentPoolSearch = {
  project: 'hire',
  name: 'hire.v1.talentPool.search',
  sdkName: 'hire.v1.talentPool.search',
  path: '/open-apis/hire/v1/talent_pools/',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才库-获取人才库列表-获取人才库列表，可获取的信息包括人才库 ID、人才库名称等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      id_list: z
        .array(z.string())
        .describe('人才库 ID 列表。当传入该参数时，返回min(page_size, len(id_list))的人才库信息')
        .optional(),
    }),
  },
};
export const hireV1TalentTagList = {
  project: 'hire',
  name: 'hire.v1.talentTag.list',
  sdkName: 'hire.v1.talentTag.list',
  path: '/open-apis/hire/v1/talent_tags',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-候选人-获取人才标签信息列表-可通过关键词、ID 列表、标签类型、停用状态等获取人才标签信息列表，结果按照创建时间倒序排序',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      keyword: z.string().describe('搜索关键词').optional(),
      id_list: z.array(z.string().describe('标签 ID')).describe('标签 ID 列表').optional(),
      type: z.number().describe('标签类型 Options:1(手动标签),2(自动标签)').optional(),
      include_inactive: z.boolean().describe('是否包含停用标签').optional(),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const hireV1TalentAddToFolder = {
  project: 'hire',
  name: 'hire.v1.talent.addToFolder',
  sdkName: 'hire.v1.talent.addToFolder',
  path: '/open-apis/hire/v1/talents/add_to_folder',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-将人才加入指定文件夹-根据人才 ID 列表将人才加入指定文件夹',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id_list: z
        .array(z.string())
        .describe(
          '人才 ID 列表，可通过接口获得',
        ),
      folder_id: z
        .string()
        .describe(
          '文件夹 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1TalentBatchGetId = {
  project: 'hire',
  name: 'hire.v1.talent.batchGetId',
  sdkName: 'hire.v1.talent.batchGetId',
  path: '/open-apis/hire/v1/talents/batch_get_id',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-批量获取人才ID-通过手机号、邮箱、证件号，批量查询人才ID',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      mobile_code: z
        .string()
        .describe(
          '国际区号，遵守国际统一标准，请参考。传入手机号但没传区号的情况下，默认为中国大陆区号："86"',
        )
        .optional(),
      mobile_number_list: z.array(z.string()).describe('手机号列表').optional(),
      email_list: z.array(z.string()).describe('邮箱列表').optional(),
      identification_type: z
        .number()
        .describe(
          '证件类型，枚举定义详见文档：的 IdentificationType。传入证件号的情况下必须传入该参数',
        )
        .optional(),
      identification_number_list: z.array(z.string()).describe('证件号列表').optional(),
    }),
  },
};
export const hireV1TalentCombinedCreate = {
  project: 'hire',
  name: 'hire.v1.talent.combinedCreate',
  sdkName: 'hire.v1.talent.combinedCreate',
  path: '/open-apis/hire/v1/talents/combined_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-创建人才-用于在企业内创建一个人才。支持自定义字段数据，可配合接口获取自定义字段信息使用',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      init_source_id: z.string().describe('简历来源 ID，已弃用，请使用 resume_source_id 字段').optional(),
      resume_source_id: z
        .string()
        .describe(
          '简历来源 ID，可通过接口查询',
        )
        .optional(),
      folder_id_list: z
        .array(z.string())
        .describe(
          '文件夹 ID 列表，可通过接口获取',
        )
        .optional(),
      creator_id: z
        .string()
        .describe(
          '创建人 ID，和入参 `user_id_type` 类型保持一致，默认为系统用户 ID，当创建人类型为「系统」时无需填写该字段',
        )
        .optional(),
      creator_account_type: z.number().describe('创建人类型 Options:1(员工体系 员工),3(系统)').optional(),
      resume_attachment_id: z
        .string()
        .describe(
          '简历附件 ID，如何创建附件请参考',
        )
        .optional(),
      basic_info: z
        .object({
          name: z.string().describe('名字'),
          mobile: z.string().describe('手机').optional(),
          mobile_country_code: z
            .string()
            .describe(
              '手机国家代码，可通过接口获取',
            )
            .optional(),
          email: z.string().describe('邮箱').optional(),
          identification: z
            .object({
              identification_type: z
                .number()
                .describe(
                  '证件类型 Options:1(MainlandIDCard 中国 - 居民身份证),2(Passport 护照),3(HongKongIDCard 中国 - 港澳居民居住证),4(TaiwanIDCard 中国 - 台湾居民来往大陆通行证),5(Others 其他),6(HKMAMainlandTravelPermit 中国 - 港澳居民来往内地通行证),9(TWResidencePermit 中国 - 台湾居民居住证)',
                )
                .optional(),
              identification_number: z.string().describe('证件号').optional(),
            })
            .describe('证件信息')
            .optional(),
          start_work_time: z.string().describe('开始工作时间，毫秒时间戳').optional(),
          birthday: z.string().describe('出生日期时间，毫秒时间戳').optional(),
          gender: z.number().describe('性别 Options:1(Male 男),2(Female 女),3(Other 其他)').optional(),
          nationality_id: z
            .string()
            .describe(
              '国籍编码，可通过获取',
            )
            .optional(),
          current_city_code: z
            .string()
            .describe(
              '所在地点编码，可通过获取',
            )
            .optional(),
          hometown_city_code: z
            .string()
            .describe(
              '家乡编码，可通过获取',
            )
            .optional(),
          customized_data: z
            .array(
              z.object({
                object_id: z
                  .string()
                  .describe(
                    '自定义字段 ID，可通过接口获取',
                  )
                  .optional(),
                children: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过接口获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('子字段列表')
                  .optional(),
              }),
            )
            .describe(
              '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
            )
            .optional(),
        })
        .describe('基本信息'),
      education_list: z
        .array(
          z.object({
            id: z.string().describe('教育经历 ID，无效字段，请勿使用').optional(),
            degree: z
              .number()
              .describe(
                '学历 Options:1(PrimaryEducation 小学),2(JuniorMiddleSchoolEducation 初中),3(Secondary 专职),4(SeniorSchoolGraduates 高中),5(Associate 大专),6(Bachelor 本科),7(Master 硕士),8(Phd 博士),9(Other 其他)',
              )
              .optional(),
            school: z.string().describe('教育经历学校').optional(),
            field_of_study: z.string().describe('专业').optional(),
            start_time: z.string().describe('教育经历开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('教育经历结束时间，毫秒时间戳').optional(),
            education_type: z
              .number()
              .describe(
                '教育经历学历类型 Options:1(Overseas, Hong Kong and Taiwan 海外及港台),2(FullTimeUnifiedEnrollment 统招全日制),3(PartTimeUnifiedEnrollment 非全日制),4(SelfTaught 自考),5(Others 其他)',
              )
              .optional(),
            academic_ranking: z
              .number()
              .describe(
                '教育经历成绩排名 Options:5(Top5Percent 前 5 %),10(Top10Percent 前 10 %),20(Top20Percent 前 20 %),30(Top30Percent 前 30 %),50(Top50Percent 前 50 %),-1(Others 其他)',
              )
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('教育经历')
        .optional(),
      career_list: z
        .array(
          z.object({
            id: z.string().describe('工作经历 ID，无效字段，请勿使用').optional(),
            company: z.string().describe('工作经历公司名称').optional(),
            title: z.string().describe('工作经历职位名称').optional(),
            desc: z.string().describe('工作经历描述').optional(),
            start_time: z.string().describe('工作经历开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('工作经历结束时间，毫秒时间戳').optional(),
            career_type: z
              .number()
              .describe('工作经历经历类型 Options:1(Internship 实习经历),2(Career 工作经历)')
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('工作经历')
        .optional(),
      project_list: z
        .array(
          z.object({
            id: z.string().describe('项目经历 ID，无效字段，请勿使用').optional(),
            name: z.string().describe('项目名称').optional(),
            role: z.string().describe('项目角色').optional(),
            link: z.string().describe('项目链接').optional(),
            desc: z.string().describe('项目描述').optional(),
            start_time: z.string().describe('项目开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('项目结束时间，毫秒时间戳').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('项目经历')
        .optional(),
      works_list: z
        .array(
          z.object({
            id: z.string().describe('作品 ID，无效字段，请勿使用').optional(),
            link: z.string().describe('作品链接').optional(),
            desc: z.string().describe('作品描述').optional(),
            attachment_id: z.string().describe('作品附件 ID').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('作品')
        .optional(),
      award_list: z
        .array(
          z.object({
            id: z.string().describe('获奖 ID，无效字段，请勿使用').optional(),
            title: z.string().describe('获奖名称').optional(),
            award_time: z.string().describe('获奖时间，毫秒时间戳').optional(),
            desc: z.string().describe('获奖描述').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('获奖')
        .optional(),
      language_list: z
        .array(
          z.object({
            id: z.string().describe('语言能力 ID，无效字段，请勿使用').optional(),
            language: z
              .number()
              .describe(
                '语言类型 Options:1(English 英语),2(French 法语),3(Japanese 日语),4(Korean 韩语),5(German 德语),6(Russian 俄语),7(Spanish 西班牙语),8(Portuguese 葡萄牙语),9(Arabic 阿拉伯语),10(Hindi 印地语),11(Hindustani 印度斯坦语),12(Bengali 孟加拉语),13(Hausa 豪萨语),14(Punjabi 旁遮普语),15(Persian 波斯语),16(Swahili 斯瓦西里语),17(Telugu 泰卢固语),18(Turkish 土耳其语),19(Italian 意大利语),20(Javanese 爪哇语),21(Tamil 泰米尔语),22(Marathi 马拉地语),23(Vietnamese 越南语),24(Mandarin 普通话),25(Cantonese 粤语),26(Indonesian 印尼语),27(Malayan 马来语),28(Thai 泰语),29(Serbian 塞尔维亚语)',
              )
              .optional(),
            proficiency: z
              .number()
              .describe(
                '语言精通程度 Options:1(Elementary 入门),2(LimitedWorking 日常会话),3(ProfessionalWorking 商务会话),4(FullProfessional 无障碍沟通),5(NativeOrBilingual 母语)',
              )
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('语言能力')
        .optional(),
      sns_list: z
        .array(
          z.object({
            id: z.string().describe('社交账号 ID，无效字段，请勿使用').optional(),
            sns_type: z
              .number()
              .describe(
                'SNS 名称 Options:1(LinkedIn 领英),2(Maimai 脉脉),3(Wechat 微信),4(Weibo 微博),5(Github),6(Zhihu 知乎),7(Facebook 脸书),8(Twitter 推特),9(Whatsapp),10(PersonalWebsite 个人网站),11(QQ)',
              )
              .optional(),
            link: z.string().describe('URL/ID').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('社交账号')
        .optional(),
      preferred_city_code_list: z
        .array(z.string())
        .describe(
          '意向地点，可通过接口获取',
        )
        .optional(),
      self_evaluation: z
        .object({
          id: z.string().describe('自我评价 ID，无效字段，请勿使用').optional(),
          content: z.string().describe('自我评价内容').optional(),
          customized_data: z
            .array(
              z.object({
                object_id: z
                  .string()
                  .describe(
                    '自定义字段 ID，可通过接口获取',
                  )
                  .optional(),
                children: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过接口获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('子字段列表')
                  .optional(),
              }),
            )
            .describe(
              '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
            )
            .optional(),
        })
        .describe('自我评价')
        .optional(),
      customized_data: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义模块 ID，可通过接口获取',
              )
              .optional(),
            children: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                }),
              )
              .describe('子字段列表')
              .optional(),
          }),
        )
        .describe('自定义模块列表**注意**：`children` 字段为二维数组，请参考请求体示例')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1TalentCombinedUpdate = {
  project: 'hire',
  name: 'hire.v1.talent.combinedUpdate',
  sdkName: 'hire.v1.talent.combinedUpdate',
  path: '/open-apis/hire/v1/talents/combined_update',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-更新人才-用于在企业内更新一个人才。支持自定义字段数据，可配合接口获取自定义字段信息使用',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
      init_source_id: z
        .string()
        .describe(
          '简历来源 ID，可通过接口查询',
        )
        .optional(),
      folder_id_list: z
        .array(z.string())
        .describe(
          '文件夹 ID 列表，可通过接口获取',
        )
        .optional(),
      operator_id: z.string().describe('更新人 ID，与入参 `user_id_type` 类型一致').optional(),
      operator_account_type: z.number().describe('更新人类型 Options:1(员工体系 员工),3(系统)').optional(),
      resume_attachment_id: z
        .string()
        .describe(
          '简历附件 ID，如何创建附件请参考；请注意：本接口仅会给人才增加一个附件简历，不会解析附件简历中的内容并更新人才',
        )
        .optional(),
      basic_info: z
        .object({
          name: z.string().describe('名字').optional(),
          mobile: z.string().describe('手机').optional(),
          mobile_country_code: z
            .string()
            .describe(
              '手机国家代码，可通过接口获取',
            )
            .optional(),
          email: z.string().describe('邮箱').optional(),
          identification: z
            .object({
              identification_type: z
                .number()
                .describe(
                  '证件类型 Options:1(MainlandIDCard 中国 - 居民身份证),2(Passport 护照),3(HongKongIDCard 中国 - 港澳居民居住证),4(TaiwanIDCard 中国 - 台湾居民来往大陆通行证),5(Others 其他),6(HKMAMainlandTravelPermit 中国 - 港澳居民来往内地通行证),9(TWResidencePermit 中国 - 台湾居民居住证)',
                )
                .optional(),
              identification_number: z.string().describe('证件号').optional(),
            })
            .describe('证件信息')
            .optional(),
          start_work_time: z.string().describe('开始工作时间，毫秒时间戳').optional(),
          birthday: z.string().describe('出生日期时间，毫秒时间戳').optional(),
          gender: z.number().describe('性别 Options:1(Male 男),2(Female 女),3(Other 其他)').optional(),
          nationality_id: z
            .string()
            .describe(
              '国籍编码，可通过获取',
            )
            .optional(),
          current_city_code: z
            .string()
            .describe(
              '所在地点编码，可通过获取',
            )
            .optional(),
          hometown_city_code: z
            .string()
            .describe(
              '家乡编码，可通过获取',
            )
            .optional(),
          customized_data: z
            .array(
              z.object({
                object_id: z
                  .string()
                  .describe(
                    '自定义字段 ID，可通过接口获取',
                  )
                  .optional(),
                children: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过接口获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('子字段列表')
                  .optional(),
              }),
            )
            .describe(
              '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
            )
            .optional(),
        })
        .describe('基本信息'),
      education_list: z
        .array(
          z.object({
            id: z.string().describe('教育经历 ID，无效字段，请勿使用').optional(),
            degree: z
              .number()
              .describe(
                '学历 Options:1(PrimaryEducation 小学),2(JuniorMiddleSchoolEducation 初中),3(Secondary 专职),4(SeniorSchoolGraduates 高中),5(Associate 大专),6(Bachelor 本科),7(Master 硕士),8(Phd 博士),9(Other 其他)',
              )
              .optional(),
            school: z.string().describe('学校').optional(),
            field_of_study: z.string().describe('专业').optional(),
            start_time: z.string().describe('教育经历开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('教育经历结束时间，毫秒时间戳').optional(),
            education_type: z
              .number()
              .describe(
                '学历类型 Options:1(Overseas, Hong Kong and Taiwan 海外及港台),2(FullTimeUnifiedEnrollment 统招全日制),3(PartTimeUnifiedEnrollment 非全日制),4(SelfTaught 自考),5(Others 其他)',
              )
              .optional(),
            academic_ranking: z
              .number()
              .describe(
                '成绩排名 Options:5(Top5Percent 前 5 %),10(Top10Percent 前 10 %),20(Top20Percent 前 20 %),30(Top30Percent 前 30 %),50(Top50Percent 前 50 %),-1(Others 其他)',
              )
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('教育经历**注意**：更新时会全量覆盖')
        .optional(),
      career_list: z
        .array(
          z.object({
            id: z.string().describe('工作经历 ID，无效字段，请勿使用').optional(),
            company: z.string().describe('公司名称').optional(),
            title: z.string().describe('职位名称').optional(),
            desc: z.string().describe('工作经历描述').optional(),
            start_time: z.string().describe('工作经历开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('工作经历结束时间，毫秒时间戳').optional(),
            career_type: z
              .number()
              .describe('工作经历类型 Options:1(Internship 实习经历),2(Career 工作经历)')
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('工作经历**注意**：更新时会全量覆盖')
        .optional(),
      project_list: z
        .array(
          z.object({
            id: z.string().describe('项目经历 ID，无效字段，请勿使用').optional(),
            name: z.string().describe('项目名称').optional(),
            role: z.string().describe('项目角色').optional(),
            link: z.string().describe('项目链接').optional(),
            desc: z.string().describe('项目描述').optional(),
            start_time: z.string().describe('项目开始时间，毫秒时间戳').optional(),
            end_time: z.string().describe('项目结束时间，毫秒时间戳').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('项目经历**注意**：更新时会全量覆盖')
        .optional(),
      works_list: z
        .array(
          z.object({
            id: z.string().describe('作品 ID，无效字段，请勿使用').optional(),
            link: z.string().describe('作品链接').optional(),
            desc: z.string().describe('作品描述').optional(),
            attachment_id: z.string().describe('作品附件 ID').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('作品**注意**：更新时会全量覆盖')
        .optional(),
      award_list: z
        .array(
          z.object({
            id: z.string().describe('获奖 ID，无效字段，请勿使用').optional(),
            title: z.string().describe('获奖名称').optional(),
            award_time: z.string().describe('获奖时间，毫秒时间戳').optional(),
            desc: z.string().describe('获奖描述').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('获奖**注意**：更新时会全量覆盖')
        .optional(),
      language_list: z
        .array(
          z.object({
            id: z.string().describe('语言能力 ID，无效字段，请勿使用').optional(),
            language: z
              .number()
              .describe(
                '语言类型 Options:1(English 英语),2(French 法语),3(Japanese 日语),4(Korean 韩语),5(German 德语),6(Russian 俄语),7(Spanish 西班牙语),8(Portuguese 葡萄牙语),9(Arabic 阿拉伯语),10(Hindi 印地语),11(Hindustani 印度斯坦语),12(Bengali 孟加拉语),13(Hausa 豪萨语),14(Punjabi 旁遮普语),15(Persian 波斯语),16(Swahili 斯瓦西里语),17(Telugu 泰卢固语),18(Turkish 土耳其语),19(Italian 意大利语),20(Javanese 爪哇语),21(Tamil 泰米尔语),22(Marathi 马拉地语),23(Vietnamese 越南语),24(Mandarin 普通话),25(Cantonese 粤语),26(Indonesian 印尼语),27(Malayan 马来语),28(Thai 泰语),29(Serbian 塞尔维亚语)',
              )
              .optional(),
            proficiency: z
              .number()
              .describe(
                '语言精通程度 Options:1(Elementary 入门),2(LimitedWorking 日常会话),3(ProfessionalWorking 商务会话),4(FullProfessional 无障碍沟通),5(NativeOrBilingual 母语)',
              )
              .optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('语言能力**注意**：更新时会全量覆盖')
        .optional(),
      sns_list: z
        .array(
          z.object({
            id: z.string().describe('社交账号 ID，无效字段，请勿使用').optional(),
            sns_type: z
              .number()
              .describe(
                'SNS 名称 Options:1(LinkedIn 领英),2(Maimai 脉脉),3(Wechat 微信),4(Weibo 微博),5(Github),6(Zhihu 知乎),7(Facebook 脸书),8(Twitter 推特),9(Whatsapp),10(PersonalWebsite 个人网站),11(QQ)',
              )
              .optional(),
            link: z.string().describe('URL/ID').optional(),
            customized_data: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  children: z
                    .array(
                      z.object({
                        object_id: z
                          .string()
                          .describe(
                            '自定义字段 ID，可通过接口获取',
                          )
                          .optional(),
                        value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                      }),
                    )
                    .describe('子字段列表')
                    .optional(),
                }),
              )
              .describe(
                '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
              )
              .optional(),
          }),
        )
        .describe('社交账号**注意**：更新时会全量覆盖')
        .optional(),
      preferred_city_code_list: z
        .array(z.string())
        .describe(
          '意向地点，可通过接口获取',
        )
        .optional(),
      self_evaluation: z
        .object({
          id: z.string().describe('自我评价 ID，无效字段，请勿使用').optional(),
          content: z.string().describe('自我评价内容').optional(),
          customized_data: z
            .array(
              z.object({
                object_id: z
                  .string()
                  .describe(
                    '自定义字段 ID，可通过接口获取',
                  )
                  .optional(),
                children: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过接口获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('子字段列表')
                  .optional(),
              }),
            )
            .describe(
              '自定义字段列表**注意**：`children` 字段无效，请参考请求体示例在当前层级传入 `object_id` 和 `value`',
            )
            .optional(),
        })
        .describe('自我评价')
        .optional(),
      customized_data: z
        .array(
          z.object({
            object_id: z
              .string()
              .describe(
                '自定义模块 ID，可通过接口获取',
              )
              .optional(),
            children: z
              .array(
                z.object({
                  object_id: z
                    .string()
                    .describe(
                      '自定义字段 ID，可通过接口获取',
                    )
                    .optional(),
                  value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                }),
              )
              .describe('子字段列表')
              .optional(),
          }),
        )
        .describe('自定义模块列表**注意**：- `children` 字段为二维数组，请参考请求体示例- 更新时会全量覆盖')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1TalentExternalInfoCreate = {
  project: 'hire',
  name: 'hire.v1.talentExternalInfo.create',
  sdkName: 'hire.v1.talentExternalInfo.create',
  path: '/open-apis/hire/v1/talents/:talent_id/external_info',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部人才信息-创建人才外部信息-创建外部人才，可将已存在人才标记为外部人才，并写入外部系统创建时间',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ external_create_time: z.string().describe('人才在外部系统的创建时间，毫秒时间戳') }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1TalentExternalInfoUpdate = {
  project: 'hire',
  name: 'hire.v1.talentExternalInfo.update',
  sdkName: 'hire.v1.talentExternalInfo.update',
  path: '/open-apis/hire/v1/talents/:talent_id/external_info',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-获取候选人-外部系统信息-外部人才信息-更新人才外部信息-更新人才外部信息，包含外部系统创建时间',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ external_create_time: z.string().describe('人才在外部系统的创建时间，毫秒时间戳') }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1TalentGet = {
  project: 'hire',
  name: 'hire.v1.talent.get',
  sdkName: 'hire.v1.talent.get',
  path: '/open-apis/hire/v1/talents/:talent_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-获取人才信息-根据人才 ID 获取人才信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1TalentList = {
  project: 'hire',
  name: 'hire.v1.talent.list',
  sdkName: 'hire.v1.talent.list',
  path: '/open-apis/hire/v1/talents',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-人才-获取人才列表-批量获取人才摘要信息，包括人才 ID、人才基信息、教育经历、工作经历等。若需要获取人才详细信息请使用接口',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      keyword: z.string().describe('搜索关键词，支持布尔语言（使用 and、or、not 连接关键词）').optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
      page_size: z.number().describe('分页大小').optional(),
      sort_by: z
        .number()
        .describe('排序规则 Options:1(按更新日期降序),2(按相关度降序),3(按投递时间降序),4(按入库时间降序)')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      query_option: z
        .literal('ignore_empty_error')
        .describe('请求控制参数 Options:ignore_empty_error(忽略结果为空时的报错)')
        .optional(),
    }),
  },
};
export const hireV1TalentOnboardStatus = {
  project: 'hire',
  name: 'hire.v1.talent.onboardStatus',
  sdkName: 'hire.v1.talent.onboardStatus',
  path: '/open-apis/hire/v1/talents/:talent_id/onboard_status',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-更新人才在职状态-更新人才的在职状态，可进行的操作包括入职与离职',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operation: z.number().describe('操作类型 Options:1(onboard 入职),2(overboard 离职)'),
      onboard_time: z.string().describe('入职时间，毫秒时间戳').optional(),
      overboard_time: z.string().describe('离职时间，毫秒时间戳').optional(),
    }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才ID，可通过接口获取',
        )
        .optional(),
    }),
  },
};
export const hireV1TalentRemoveToFolder = {
  project: 'hire',
  name: 'hire.v1.talent.removeToFolder',
  sdkName: 'hire.v1.talent.removeToFolder',
  path: '/open-apis/hire/v1/talents/remove_to_folder',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-将人才从指定文件夹移除-根据人才 ID 列表将人才从指定文件夹移除',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      talent_id_list: z
        .array(z.string())
        .describe(
          '人才 ID 列表，可通过接口获得',
        ),
      folder_id: z
        .string()
        .describe(
          '文件夹 ID，可通过接口获取',
        ),
    }),
  },
};
export const hireV1TalentTag = {
  project: 'hire',
  name: 'hire.v1.talent.tag',
  sdkName: 'hire.v1.talent.tag',
  path: '/open-apis/hire/v1/talents/:talent_id/tag',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-候选人管理-人才-操作人才标签-可为人才新增、删除标签',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operation: z.number().describe('操作类型 Options:1(新增),2(删除)'),
      tag_id_list: z
        .array(z.string().describe('标签 ID'))
        .describe(
          '标签 ID 列表，可通过以下接口获取',
        ),
    }),
    path: z.object({
      talent_id: z
        .string()
        .describe(
          '人才 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1TerminationReasonList = {
  project: 'hire',
  name: 'hire.v1.terminationReason.list',
  sdkName: 'hire.v1.terminationReason.list',
  path: '/open-apis/hire/v1/termination_reasons',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-投递管理-获取终止投递原因-获取系统中默认的投递终止原因以及用户配置的自定义投递终止原因',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量，默认值为 10').optional(),
    }),
  },
};
export const hireV1TestSearch = {
  project: 'hire',
  name: 'hire.v1.test.search',
  sdkName: 'hire.v1.test.search',
  path: '/open-apis/hire/v1/tests/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-笔试-获取笔试列表-批量获取人才在投递流程中的笔试信息。如作答状态、笔试得分等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      application_id_list: z
        .array(z.string())
        .describe(
          '投递 ID 列表，可通过接口获取',
        )
        .optional(),
      test_start_time_min: z.string().describe('笔试最早开始时间（毫秒时间戳）').optional(),
      test_start_time_max: z.string().describe('笔试最晚开始时间（毫秒时间戳）').optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1TodoList = {
  project: 'hire',
  name: 'hire.v1.todo.list',
  sdkName: 'hire.v1.todo.list',
  path: '/open-apis/hire/v1/todos',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-候选人管理-招聘进程跟进-批量获取待办事项-批量获取当前用户的待办事项信息，包含评估待办事项、面试待办事项、笔试待办事项和 Offer 待办事项',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.string().describe('每页获取记录数量').optional(),
      user_id: z.string().describe('用户 ID，该字段无效，请勿使用').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_admin_id']).describe('用户ID类型').optional(),
      type: z
        .enum(['evaluation', 'offer', 'exam', 'interview'])
        .describe('待办类型 Options:evaluation(评估待办),offer(Offer 待办),exam(笔试待办),interview(面试待办)'),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const hireV1TripartiteAgreementCreate = {
  project: 'hire',
  name: 'hire.v1.tripartiteAgreement.create',
  sdkName: 'hire.v1.tripartiteAgreement.create',
  path: '/open-apis/hire/v1/tripartite_agreements',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-候选人管理-投递流程-三方协议-创建三方协议-在校招投递上创建三方协议',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        ),
      state: z
        .number()
        .describe(
          '三方协议状态 Options:1(NotStarted 未开始),2(Applied 已申请),3(StudentProcessing 学生处理中),4(CompanyProcessing 公司处理中),5(SchoolProcessing 学校处理中),6(Terminated 已终止),7(Completed 已完成),8(TerminationProcessing 解约处理中),9(Terminated 已解约)',
        ),
      create_time: z.string().describe('三方协议创建时间，毫秒时间戳'),
    }),
  },
};
export const hireV1TripartiteAgreementDelete = {
  project: 'hire',
  name: 'hire.v1.tripartiteAgreement.delete',
  sdkName: 'hire.v1.tripartiteAgreement.delete',
  path: '/open-apis/hire/v1/tripartite_agreements/:tripartite_agreement_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-候选人管理-投递流程-三方协议-删除三方协议-删除投递的三方协议',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      tripartite_agreement_id: z
        .string()
        .describe(
          '三方协议 ID，由接口返回或通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1TripartiteAgreementList = {
  project: 'hire',
  name: 'hire.v1.tripartiteAgreement.list',
  sdkName: 'hire.v1.tripartiteAgreement.list',
  path: '/open-apis/hire/v1/tripartite_agreements',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-候选人管理-投递流程-三方协议-获取三方协议-根据三方协议 ID 或投递 ID 获取三方协议信息，如三方协议状态、创建时间等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      application_id: z
        .string()
        .describe(
          '投递 ID，可通过接口获取',
        )
        .optional(),
      tripartite_agreement_id: z
        .string()
        .describe(
          '三方协议 ID，由接口返回',
        )
        .optional(),
    }),
  },
};
export const hireV1TripartiteAgreementUpdate = {
  project: 'hire',
  name: 'hire.v1.tripartiteAgreement.update',
  sdkName: 'hire.v1.tripartiteAgreement.update',
  path: '/open-apis/hire/v1/tripartite_agreements/:tripartite_agreement_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-候选人管理-投递流程-三方协议-更新三方协议-更新三方协议的状态及修改时间信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      state: z
        .number()
        .describe(
          '三方协议状态 Options:1(NotStarted 未开始),2(Applied 已申请),3(StudentProcessing 学生处理中),4(CompanyProcessing 公司处理中),5(SchoolProcessing 学校处理中),6(Ended 已终止),7(Completed 已完成),8(TerminationProcessing 解约处理中),9(Terminated 已解约)',
        ),
      modify_time: z.string().describe('三方协议修改时间，毫秒时间戳**注意**：不可小于创建时间或者上次修改时间'),
    }),
    path: z.object({
      tripartite_agreement_id: z
        .string()
        .describe(
          '三方协议 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1UserRoleList = {
  project: 'hire',
  name: 'hire.v1.userRole.list',
  sdkName: 'hire.v1.userRole.list',
  path: '/open-apis/hire/v1/user_roles',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-招聘相关配置-权限-获取用户角色列表-通过用户ID、角色ID等筛选条件获取用户角色列表，可获取的信息包括用户ID、角色ID、角色姓名、业务管理范围等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量').optional(),
      user_id: z.string().describe('用户 ID，与入参 `user_id_type` 类型一致').optional(),
      role_id: z
        .string()
        .describe(
          '角色 ID，可通过接口  获取',
        )
        .optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒时间戳').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const hireV1WebsiteChannelCreate = {
  project: 'hire',
  name: 'hire.v1.websiteChannel.create',
  sdkName: 'hire.v1.websiteChannel.create',
  path: '/open-apis/hire/v1/websites/:website_id/channels',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-新建招聘官网推广渠道-新建指定官网的推广渠道。每个官网可以新建多个推广渠道，每个推广渠道具有不同的推广链接和推广码',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ channel_name: z.string().describe('推广渠道名称') }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteChannelDelete = {
  project: 'hire',
  name: 'hire.v1.websiteChannel.delete',
  sdkName: 'hire.v1.websiteChannel.delete',
  path: '/open-apis/hire/v1/websites/:website_id/channels/:channel_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-招聘-获取候选人-官网-删除招聘官网推广渠道-根据招聘官网 ID 和推广渠道 ID 删除推广渠道',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        )
        .optional(),
      channel_id: z
        .string()
        .describe(
          '推广渠道 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteChannelList = {
  project: 'hire',
  name: 'hire.v1.websiteChannel.list',
  sdkName: 'hire.v1.websiteChannel.list',
  path: '/open-apis/hire/v1/websites/:website_id/channels',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-获取候选人-官网-获取招聘官网推广渠道列表-根据官网 ID 获取推广渠道列表，支持分页查询',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_size: z.string().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteChannelUpdate = {
  project: 'hire',
  name: 'hire.v1.websiteChannel.update',
  sdkName: 'hire.v1.websiteChannel.update',
  path: '/open-apis/hire/v1/websites/:website_id/channels/:channel_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-更新招聘官网推广渠道-根据招聘官网 ID 和推广渠道 ID 更改推广渠道，仅支持修改推广渠道名称',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ channel_name: z.string().describe('推广渠道名称') }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，通过获取',
        )
        .optional(),
      channel_id: z
        .string()
        .describe(
          '推广渠道 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteDeliveryTaskGet = {
  project: 'hire',
  name: 'hire.v1.websiteDeliveryTask.get',
  sdkName: 'hire.v1.websiteDeliveryTask.get',
  path: '/open-apis/hire/v1/websites/:website_id/delivery_tasks/:delivery_task_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-获取招聘官网投递任务结果-通过接口创建的投递任务，可通过本接口获取投递任务结果。如果获取到的数据 data 为空，可继续轮询（正常情况下不会超过1分钟）直到获取到的 data 不为空',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        ),
      delivery_task_id: z
        .string()
        .describe(
          '投递任务 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1WebsiteDeliveryCreateByAttachment = {
  project: 'hire',
  name: 'hire.v1.websiteDelivery.createByAttachment',
  sdkName: 'hire.v1.websiteDelivery.createByAttachment',
  path: '/open-apis/hire/v1/websites/:website_id/deliveries/create_by_attachment',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-根据简历附件创建招聘官网投递任务-根据简历附件创建招聘官网投递任务，创建投递的最终结果请通过获取',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_post_id: z
        .string()
        .describe(
          '职位广告 ID，可通过获取',
        ),
      user_id: z
        .string()
        .describe(
          '官网用户ID，暂无直接查询接口，需在获取并保存',
        ),
      resume_file_id: z
        .string()
        .describe('简历文件 ID，通过生成'),
      channel_id: z
        .string()
        .describe(
          '官网推广渠道 ID，可通过获取',
        )
        .optional(),
      application_preferred_city_code_list: z
        .array(z.string())
        .describe(
          '意向投递城市列表，最多可填入一个意向城市，可通过获取',
        )
        .optional(),
      mobile_country_code: z
        .string()
        .describe(
          '电话国际区号，遵守国际统一标准，请参考（当该参数值与简历附件中的相关值不一致时，将以该参数值为准）',
        )
        .optional(),
      mobile: z.string().describe('电话号码（当该参数值与简历附件中的相关值不一致时，将以该参数值为准）').optional(),
      email: z.string().describe('邮箱（当该参数值与简历附件中的相关值不一致时，将以该参数值为准）').optional(),
      identification: z
        .object({
          identification_type: z
            .number()
            .describe(
              '证件类型 Options:1(中国 - 居民身份证),2(护照),3(中国 - 港澳居民居住证),4(中国 - 台湾居民来往大陆通行证),5(其他),6(中国 - 港澳居民来往内地通行证),9(中国 - 台湾居民居住证)',
            )
            .optional(),
          identification_number: z.string().describe('证件号码').optional(),
        })
        .describe('证件（当该参数值与简历附件中的相关值不一致时，将以该参数值为准）')
        .optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1WebsiteDeliveryCreateByResume = {
  project: 'hire',
  name: 'hire.v1.websiteDelivery.createByResume',
  sdkName: 'hire.v1.websiteDelivery.createByResume',
  path: '/open-apis/hire/v1/websites/:website_id/deliveries/create_by_resume',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-获取候选人-官网-新建招聘官网投递-新建招聘官网投递',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_post_id: z
        .string()
        .describe(
          '职位广告 ID，可通过或者获取',
        ),
      resume: z
        .object({
          internship_list: z
            .array(
              z.object({
                desc: z.string().describe('实习经历描述').optional(),
                end_time: z.number().describe('结束时间，毫秒时间戳，如果是「至今」可传值 -1').optional(),
                start_time: z.number().describe('开始时间，毫秒时间戳').optional(),
                title: z.string().describe('职位名称').optional(),
                company: z.string().describe('公司名称').optional(),
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('实习经历')
            .optional(),
          basic_info: z
            .object({
              nationality_id: z
                .string()
                .describe(
                  '国家码，可通过获取',
                )
                .optional(),
              start_work_time: z.number().describe('起始工作时间，毫秒时间戳').optional(),
              current_home_address: z.string().describe('家庭住址').optional(),
              hometown_city_code: z
                .string()
                .describe(
                  '家乡，可通过获取',
                )
                .optional(),
              mobile_country_code: z
                .string()
                .describe(
                  '手机国家代码，可通过获取',
                )
                .optional(),
              identification: z
                .object({
                  identification_number: z.string().describe('身份证件号码').optional(),
                  identification_type: z
                    .number()
                    .describe(
                      '身份证件类型 Options:1(中国 - 居民身份证),2(护照),3(中国 - 港澳居民居住证),4(中国 - 台湾居民来往大陆通行证),5(其他),6(中国 - 港澳居民来往内地通行证),9(中国 - 台湾居民居住证)',
                    )
                    .optional(),
                })
                .describe('身份证件')
                .optional(),
              marital_status: z.number().describe('婚姻状况 Options:1(已婚),2(未婚)').optional(),
              mobile: z.string().describe('电话').optional(),
              current_city_code: z
                .string()
                .describe(
                  '所在城市，可通过获取',
                )
                .optional(),
              experience_years: z.number().describe('工作年限').optional(),
              gender: z.number().describe('性别 Options:1(Male 男),2(Female 女),3(Other 其他)').optional(),
              birthday: z.number().describe('出生日期，毫秒时间戳').optional(),
              name: z.string().describe('姓名'),
              preferred_city_code_list: z
                .array(z.string())
                .describe(
                  '意向城市列表，可通过获取',
                )
                .optional(),
              resume_source_id: z
                .string()
                .describe(
                  '简历来源，可通过获取',
                )
                .optional(),
              age: z.number().describe('年龄').optional(),
              customized_data: z
                .array(
                  z.object({
                    object_id: z
                      .string()
                      .describe(
                        '自定义字段 ID，可通过获取',
                      )
                      .optional(),
                    value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                  }),
                )
                .describe('自定义字段')
                .optional(),
              email: z.string().describe('邮箱').optional(),
            })
            .describe('基本信息'),
          education_list: z
            .array(
              z.object({
                education_type: z
                  .number()
                  .describe(
                    '学历类型 Options:1(NonMainland 非中国大陆),2(FullTimeUnifiedEnrollment 统招全日制),3(PartTimeUnifiedEnrollment 非全日制),4(SelfTaught 自考),5(Others 其他)',
                  )
                  .optional(),
                end_time: z
                  .number()
                  .describe(
                    '结束时间 ，毫秒时间戳，如果是「至今」可传值 -1。请注意：若传值-1，投递创建成功后在系统中可正常查看，但若编辑则需要填一个具体时间',
                  )
                  .optional(),
                end_time_v2: z
                  .number()
                  .describe(
                    '结束时间（新），毫秒时间戳，无「至今」传值。建议使用此字段，避免模糊的毕业时间影响候选人筛选',
                  )
                  .optional(),
                field_of_study: z.string().describe('专业').optional(),
                school: z.string().describe('学校').optional(),
                start_time: z.number().describe('开始时间，毫秒时间戳').optional(),
                academic_ranking: z
                  .number()
                  .describe(
                    '专业排名 Options:5(Top5Percent 前 5 %),10(Top10Percent 前 10 %),20(Top20Percent 前 20 %),30(Top30Percent 前 30 %),50(Top50Percent 前 50 %),51(Others 其他)',
                  )
                  .optional(),
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                degree: z
                  .number()
                  .describe(
                    '学位 Options:1(PrimaryEducation 小学),2(JuniorMiddleSchoolEducation 初中),3(Secondary 专职),4(SeniorSchoolGraduates 高中),5(Associate 大专),6(Bachelor 本科),7(Master 硕士),8(Phd 博士),9(Other 其他)',
                  )
                  .optional(),
              }),
            )
            .describe('教育经历')
            .optional(),
          self_evaluation: z
            .object({
              content: z.string().describe('评价内容').optional(),
              customized_data: z
                .array(
                  z.object({
                    object_id: z
                      .string()
                      .describe(
                        '自定义字段 ID，可通过获取',
                      )
                      .optional(),
                    value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                  }),
                )
                .describe('自定义字段')
                .optional(),
            })
            .describe('自我评价')
            .optional(),
          career_list: z
            .array(
              z.object({
                desc: z.string().describe('工作经历描述').optional(),
                end_time: z.number().describe('结束时间, 毫秒时间戳，如果是「至今」可传值 -1').optional(),
                start_time: z.number().describe('开始时间，毫秒时间戳').optional(),
                title: z.string().describe('职位名称').optional(),
                company: z.string().describe('公司').optional(),
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('工作经历')
            .optional(),
          customized_data: z
            .array(
              z.object({
                object_id: z
                  .string()
                  .describe(
                    '自定义模块ID，可通过获取',
                  )
                  .optional(),
                children: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('字段列表')
                  .optional(),
              }),
            )
            .describe('自定义模块')
            .optional(),
          resume_attachment_id: z
            .string()
            .describe(
              '简历附件ID，需通过生成',
            )
            .optional(),
          sns_list: z
            .array(
              z.object({
                sns_type: z
                  .number()
                  .describe(
                    '社交账号类型 Options:1(LinkedIn 领英),2(Maimai 脉脉),3(Wechat 微信),4(Weibo 微博),5(Github),6(Zhihu 知乎),7(Facebook 脸书),8(Twitter 推特),9(Whatsapp),10(PersonalWebsite 个人网站),11(QQ)',
                  )
                  .optional(),
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                link: z.string().describe('社交账号链接').optional(),
              }),
            )
            .describe('社交账号')
            .optional(),
          works_list: z
            .array(
              z.object({
                desc: z.string().describe('作品描述').optional(),
                link: z.string().describe('作品链接').optional(),
                attachment: z
                  .object({
                    file_id: z
                      .string()
                      .describe(
                        '文件ID，需通过生成',
                      )
                      .optional(),
                  })
                  .describe('附件')
                  .optional(),
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
              }),
            )
            .describe('作品')
            .optional(),
          award_list: z
            .array(
              z.object({
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                desc: z.string().describe('获奖描述').optional(),
                title: z.string().describe('奖项名称').optional(),
                award_time: z.number().describe('获奖时间，毫秒时间戳').optional(),
              }),
            )
            .describe('获奖记录')
            .optional(),
          project_list: z
            .array(
              z.object({
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                desc: z.string().describe('项目描述').optional(),
                end_time: z.number().describe('结束时间，毫秒时间戳，如果是「至今」可传值-1').optional(),
                link: z.string().describe('项目链接').optional(),
                name: z.string().describe('项目名称').optional(),
                role: z.string().describe('项目角色').optional(),
                start_time: z.number().describe('开始时间，毫秒时间戳').optional(),
              }),
            )
            .describe('项目经历')
            .optional(),
          language_list: z
            .array(
              z.object({
                customized_data: z
                  .array(
                    z.object({
                      object_id: z
                        .string()
                        .describe(
                          '自定义字段 ID，可通过获取',
                        )
                        .optional(),
                      value: z.string().describe('自定义字段值，请参考本文「自定义字段数据格式说明」').optional(),
                    }),
                  )
                  .describe('自定义字段')
                  .optional(),
                language: z
                  .number()
                  .describe(
                    '语言 Options:1(English 英语),2(French 法语),3(Japanese 日语),4(Korean 韩语),5(German 德语),6(Russian 俄语),7(Spanish 西班牙语),8(Portuguese 葡萄牙语),9(Arabic 阿拉伯语),10(Hindi 印地语),11(Hindustani 印度斯坦语),12(Bengali 孟加拉语),13(Hausa 豪萨语),14(Punjabi 旁遮普语),15(Persian 波斯语),16(Swahili 斯瓦西里语),17(Telugu 泰卢固语),18(Turkish 土耳其语),19(Italian 意大利语),20(Javanese 爪哇语),21(Tamil 泰米尔语),22(Marathi 马拉地语),23(Vietnamese 越南语),24(Mandarin 普通话),25(Cantonese 粤语)',
                  )
                  .optional(),
                proficiency: z
                  .number()
                  .describe(
                    '熟悉程度 Options:1(Elementary 入门),2(LimitedWorking 日常会话),3(ProfessionalWorking 商务会话),4(FullProfessional 无障碍沟通),5(NativeOrBilingual 母语)',
                  )
                  .optional(),
              }),
            )
            .describe('语言能力')
            .optional(),
        })
        .describe('人才信息'),
      user_id: z
        .string()
        .describe(
          '官网用户 ID，需通过生成',
        ),
      application_preferred_city_code_list: z
        .array(z.string())
        .describe(
          '意向投递城市列表，可通过获取',
        )
        .optional(),
      channel_id: z
        .string()
        .describe(
          '官网推广渠道 ID，可通过获取',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1WebsiteJobPostGet = {
  project: 'hire',
  name: 'hire.v1.websiteJobPost.get',
  sdkName: 'hire.v1.websiteJobPost.get',
  path: '/open-apis/hire/v1/websites/:website_id/job_posts/:job_post_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-获取招聘官网下职位广告详情-获取招聘官网下的职位广告详情，包含职位广告 ID、名称、关联职位 ID、关联职位编码等信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID， ID前缀固定为 `od-`，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内，department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        ),
      job_post_id: z
        .string()
        .describe(
          '职位广告 ID，可通过或获取',
        ),
    }),
  },
};
export const hireV1WebsiteJobPostList = {
  project: 'hire',
  name: 'hire.v1.websiteJobPost.list',
  sdkName: 'hire.v1.websiteJobPost.list',
  path: '/open-apis/hire/v1/websites/:website_id/job_posts',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-招聘-获取候选人-官网-获取招聘官网下的职位广告列表-获取招聘官网下的职位信息列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量，最大10，不传则默认值为10').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒级时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒级时间戳').optional(),
      create_start_time: z.string().describe('最早创建时间，毫秒级时间戳').optional(),
      create_end_time: z.string().describe('最晚创建时间，毫秒级时间戳').optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，通过接口获得',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteJobPostSearch = {
  project: 'hire',
  name: 'hire.v1.websiteJobPost.search',
  sdkName: 'hire.v1.websiteJobPost.search',
  path: '/open-apis/hire/v1/websites/:website_id/job_posts/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-招聘-获取候选人-官网-搜索招聘官网下的职位广告列表-搜索招聘官网下的职位列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      job_type_id_list: z
        .array(z.string())
        .describe(
          '职位类别列表，详情请参考：',
        )
        .optional(),
      city_code_list: z
        .array(z.string())
        .describe(
          '职位城市列表，详情请参考：',
        )
        .optional(),
      job_function_id_list: z
        .array(z.string())
        .describe(
          '职能分类列表，详情请参考：',
        )
        .optional(),
      subject_id_list: z
        .array(z.string())
        .describe(
          '职位项目列表，详情请参考：',
        )
        .optional(),
      keyword: z.string().describe('关键字').optional(),
      update_start_time: z.string().describe('最早更新时间，毫秒级时间戳').optional(),
      update_end_time: z.string().describe('最晚更新时间，毫秒级时间戳').optional(),
      create_start_time: z.string().describe('最早创建时间，毫秒级时间戳').optional(),
      create_end_time: z.string().describe('最晚创建时间，毫秒级时间戳').optional(),
    }),
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量，最大10，不传则默认值为10').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['open_department_id', 'department_id'])
        .describe(
          '指定查询结果中的部门 ID 类型。关于部门 ID 的详细介绍，可参见。 Options:open_department_id(由系统自动生成的部门 ID，ID 前缀固定为 od-，在租户内全局唯一。),department_id(支持用户自定义配置的部门 ID。自定义配置时可复用已删除的 department_id，因此在未删除的部门范围内 department_id 具有唯一性。)',
        )
        .optional(),
      job_level_id_type: z
        .enum(['people_admin_job_level_id', 'job_level_id'])
        .describe(
          '此次调用中使用的「职级 ID」的类型 Options:people_admin_job_level_id(「人力系统管理后台」适用的职级 ID。人力系统管理后台逐步下线中，建议不继续使用此 ID。),job_level_id(「飞书管理后台」适用的职级 ID，通过接口获取)',
        )
        .optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const hireV1WebsiteList = {
  project: 'hire',
  name: 'hire.v1.website.list',
  sdkName: 'hire.v1.website.list',
  path: '/open-apis/hire/v1/websites',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-获取招聘官网列表-获取招聘官网列表，返回信息包括官网名称、官网ID、招聘渠道ID等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('每页获取记录数量 **默认值** : 10').optional(),
    }),
  },
};
export const hireV1WebsiteSiteUserCreate = {
  project: 'hire',
  name: 'hire.v1.websiteSiteUser.create',
  sdkName: 'hire.v1.websiteSiteUser.create',
  path: '/open-apis/hire/v1/websites/:website_id/site_users',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-招聘-获取候选人-官网-新建招聘官网用户-注册指定招聘官网的用户，注册完成后，可通过创建官网投递任务，或通过创建官网投递',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('用户姓名').optional(),
      email: z.string().describe('用户邮箱').optional(),
      external_id: z
        .string()
        .describe(
          '外部 ID，幂等字段，同一外部 ID只会创建1个官网用户；当系统中已存在`external_id`对应的官网用户时，接口会返回已存在的官网用户信息',
        ),
      mobile: z.string().describe('电话，若填写了该字段，国家码(mobile_country_code)字段必填').optional(),
      mobile_country_code: z
        .string()
        .describe(
          '国家码，若填写了该字段，电话（mobile）字段必填，可通过获取',
        )
        .optional(),
    }),
    path: z.object({
      website_id: z
        .string()
        .describe(
          '官网 ID，可通过获取',
        ),
    }),
  },
};
export const hireV1Tools = [
  hireV1AdvertisementPublish,
  hireV1AgencyBatchQuery,
  hireV1AgencyGet,
  hireV1AgencyGetAgencyAccount,
  hireV1AgencyOperateAgencyAccount,
  hireV1AgencyProtect,
  hireV1AgencyProtectSearch,
  hireV1AgencyQuery,
  hireV1ApplicationCancelOnboard,
  hireV1ApplicationCreate,
  hireV1ApplicationGet,
  hireV1ApplicationGetDetail,
  hireV1ApplicationInterviewList,
  hireV1ApplicationList,
  hireV1ApplicationOffer,
  hireV1ApplicationRecover,
  hireV1ApplicationTerminate,
  hireV1ApplicationTransferOnboard,
  hireV1ApplicationTransferStage,
  hireV1AttachmentGet,
  hireV1AttachmentPreview,
  hireV1BackgroundCheckOrderList,
  hireV1DiversityInclusionSearch,
  hireV1EcoAccountCustomFieldBatchDelete,
  hireV1EcoAccountCustomFieldBatchUpdate,
  hireV1EcoAccountCustomFieldCreate,
  hireV1EcoBackgroundCheckCustomFieldBatchDelete,
  hireV1EcoBackgroundCheckCustomFieldBatchUpdate,
  hireV1EcoBackgroundCheckCustomFieldCreate,
  hireV1EcoBackgroundCheckPackageBatchDelete,
  hireV1EcoBackgroundCheckPackageBatchUpdate,
  hireV1EcoBackgroundCheckPackageCreate,
  hireV1EcoBackgroundCheckCancel,
  hireV1EcoBackgroundCheckUpdateProgress,
  hireV1EcoBackgroundCheckUpdateResult,
  hireV1EcoExamPaperBatchDelete,
  hireV1EcoExamPaperBatchUpdate,
  hireV1EcoExamPaperCreate,
  hireV1EcoExamLoginInfo,
  hireV1EcoExamUpdateResult,
  hireV1EhrImportTaskPatch,
  hireV1EmployeeGet,
  hireV1EmployeeGetByApplication,
  hireV1EmployeePatch,
  hireV1EvaluationTaskList,
  hireV1EvaluationList,
  hireV1ExamMarkingTaskList,
  hireV1ExamCreate,
  hireV1ExternalApplicationCreate,
  hireV1ExternalApplicationDelete,
  hireV1ExternalApplicationList,
  hireV1ExternalApplicationUpdate,
  hireV1ExternalBackgroundCheckBatchQuery,
  hireV1ExternalBackgroundCheckCreate,
  hireV1ExternalBackgroundCheckDelete,
  hireV1ExternalBackgroundCheckUpdate,
  hireV1ExternalInterviewAssessmentCreate,
  hireV1ExternalInterviewAssessmentPatch,
  hireV1ExternalInterviewBatchQuery,
  hireV1ExternalInterviewCreate,
  hireV1ExternalInterviewDelete,
  hireV1ExternalInterviewUpdate,
  hireV1ExternalOfferBatchQuery,
  hireV1ExternalOfferCreate,
  hireV1ExternalOfferDelete,
  hireV1ExternalOfferUpdate,
  hireV1ExternalReferralRewardCreate,
  hireV1ExternalReferralRewardDelete,
  hireV1InterviewFeedbackFormList,
  hireV1InterviewRecordAttachmentGet,
  hireV1InterviewRecordGet,
  hireV1InterviewRecordList,
  hireV1InterviewRegistrationSchemaList,
  hireV1InterviewRoundTypeList,
  hireV1InterviewTaskList,
  hireV1InterviewGetByTalent,
  hireV1InterviewList,
  hireV1InterviewerList,
  hireV1InterviewerPatch,
  hireV1JobFunctionList,
  hireV1JobProcessList,
  hireV1JobPublishRecordSearch,
  hireV1JobRequirementSchemaList,
  hireV1JobRequirementCreate,
  hireV1JobRequirementDelete,
  hireV1JobRequirementList,
  hireV1JobRequirementListById,
  hireV1JobRequirementUpdate,
  hireV1JobSchemaList,
  hireV1JobTypeList,
  hireV1JobClose,
  hireV1JobCombinedCreate,
  hireV1JobCombinedUpdate,
  hireV1JobConfig,
  hireV1JobGet,
  hireV1JobGetDetail,
  hireV1JobList,
  hireV1JobManagerBatchUpdate,
  hireV1JobManagerGet,
  hireV1JobOpen,
  hireV1JobRecruiter,
  hireV1JobUpdateConfig,
  hireV1LocationList,
  hireV1LocationQuery,
  hireV1MinutesGet,
  hireV1NoteCreate,
  hireV1NoteDelete,
  hireV1NoteGet,
  hireV1NoteList,
  hireV1NotePatch,
  hireV1OfferApplicationFormGet,
  hireV1OfferApplicationFormList,
  hireV1OfferCustomFieldUpdate,
  hireV1OfferSchemaGet,
  hireV1OfferCreate,
  hireV1OfferGet,
  hireV1OfferInternOfferStatus,
  hireV1OfferList,
  hireV1OfferOfferStatus,
  hireV1OfferUpdate,
  hireV1QuestionnaireList,
  hireV1ReferralAccountCreate,
  hireV1ReferralAccountDeactivate,
  hireV1ReferralAccountEnable,
  hireV1ReferralAccountGetAccountAssets,
  hireV1ReferralAccountReconciliation,
  hireV1ReferralAccountWithdraw,
  hireV1ReferralWebsiteJobPostGet,
  hireV1ReferralWebsiteJobPostList,
  hireV1ReferralGetByApplication,
  hireV1ReferralSearch,
  hireV1RegistrationSchemaList,
  hireV1ResumeSourceList,
  hireV1RoleGet,
  hireV1RoleList,
  hireV1SubjectList,
  hireV1TalentBlocklistChangeTalentBlock,
  hireV1TalentFolderList,
  hireV1TalentObjectQuery,
  hireV1TalentOperationLogSearch,
  hireV1TalentPoolBatchChangeTalentPool,
  hireV1TalentPoolMoveTalent,
  hireV1TalentPoolSearch,
  hireV1TalentTagList,
  hireV1TalentAddToFolder,
  hireV1TalentBatchGetId,
  hireV1TalentCombinedCreate,
  hireV1TalentCombinedUpdate,
  hireV1TalentExternalInfoCreate,
  hireV1TalentExternalInfoUpdate,
  hireV1TalentGet,
  hireV1TalentList,
  hireV1TalentOnboardStatus,
  hireV1TalentRemoveToFolder,
  hireV1TalentTag,
  hireV1TerminationReasonList,
  hireV1TestSearch,
  hireV1TodoList,
  hireV1TripartiteAgreementCreate,
  hireV1TripartiteAgreementDelete,
  hireV1TripartiteAgreementList,
  hireV1TripartiteAgreementUpdate,
  hireV1UserRoleList,
  hireV1WebsiteChannelCreate,
  hireV1WebsiteChannelDelete,
  hireV1WebsiteChannelList,
  hireV1WebsiteChannelUpdate,
  hireV1WebsiteDeliveryTaskGet,
  hireV1WebsiteDeliveryCreateByAttachment,
  hireV1WebsiteDeliveryCreateByResume,
  hireV1WebsiteJobPostGet,
  hireV1WebsiteJobPostList,
  hireV1WebsiteJobPostSearch,
  hireV1WebsiteList,
  hireV1WebsiteSiteUserCreate,
];
