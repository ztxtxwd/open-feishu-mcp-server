import { z } from 'zod';
export type apaasV1ToolName =
  | 'apaas.v1.applicationAuditLog.auditLogList'
  | 'apaas.v1.applicationAuditLog.dataChangeLogDetail'
  | 'apaas.v1.applicationAuditLog.dataChangeLogsList'
  | 'apaas.v1.applicationAuditLog.get'
  | 'apaas.v1.applicationEnvironmentVariable.get'
  | 'apaas.v1.applicationEnvironmentVariable.query'
  | 'apaas.v1.applicationFlow.execute'
  | 'apaas.v1.applicationFunction.invoke'
  | 'apaas.v1.applicationObject.oqlQuery'
  | 'apaas.v1.applicationObjectRecord.batchCreate'
  | 'apaas.v1.applicationObjectRecord.batchDelete'
  | 'apaas.v1.applicationObjectRecord.batchQuery'
  | 'apaas.v1.applicationObjectRecord.batchUpdate'
  | 'apaas.v1.applicationObjectRecord.create'
  | 'apaas.v1.applicationObjectRecord.delete'
  | 'apaas.v1.applicationObjectRecord.patch'
  | 'apaas.v1.applicationObjectRecord.query'
  | 'apaas.v1.applicationObject.search'
  | 'apaas.v1.applicationRecordPermissionMember.batchCreateAuthorization'
  | 'apaas.v1.applicationRecordPermissionMember.batchRemoveAuthorization'
  | 'apaas.v1.applicationRoleMember.batchCreateAuthorization'
  | 'apaas.v1.applicationRoleMember.batchRemoveAuthorization'
  | 'apaas.v1.applicationRoleMember.get'
  | 'apaas.v1.approvalInstance.cancel'
  | 'apaas.v1.approvalTask.addAssignee'
  | 'apaas.v1.approvalTask.agree'
  | 'apaas.v1.approvalTask.reject'
  | 'apaas.v1.approvalTask.transfer'
  | 'apaas.v1.seatActivity.list'
  | 'apaas.v1.seatAssignment.list'
  | 'apaas.v1.userTask.cc'
  | 'apaas.v1.userTask.chatGroup'
  | 'apaas.v1.userTask.expediting'
  | 'apaas.v1.userTask.query'
  | 'apaas.v1.userTask.rollback'
  | 'apaas.v1.userTask.rollbackPoints';
export const apaasV1ApplicationAuditLogAuditLogList = {
  project: 'apaas',
  name: 'apaas.v1.applicationAuditLog.auditLogList',
  sdkName: 'apaas.v1.applicationAuditLog.auditLogList',
  path: '/open-apis/apaas/v1/applications/:namespace/audit_log/audit_log_list',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书低代码平台-审计日志-查询审计日志列表-根据搜索/筛选条件，查询审计日志列表',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      page_size: z.string().describe('分页大小'),
      offset: z.string().describe('翻页数量'),
      quick_query: z.string().describe('模糊查询').optional(),
      from: z.string().describe('查询时间范围：开始时间（单位为毫秒级时间戳）'),
      to: z.string().describe('查询时间范围：结束时间（单位为毫秒级时间戳）'),
      log_type: z
        .string()
        .describe('日志类型：- 10000: 全部日志- 10001: 企业管理日志- 10002: 登录日志- 10003: 应用管理日志'),
      filter: z.string().describe('日志查询：筛选能力').optional(),
      columns: z
        .array(z.string())
        .describe('日志列表：选择展示行信息，例如["opTime","appName","eventName","clientIP","operator","status"]')
        .optional(),
      sort_by: z.string().describe('查询排序字段：可选项为操作时间（opTime）').optional(),
      sort_order: z.string().describe('查询排序：默认按时间从大到小；从小到大使用 asc').optional(),
      app_type: z.string().describe('应用类型，0为apaas类型，1为aily类型').optional(),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1ApplicationAuditLogDataChangeLogDetail = {
  project: 'apaas',
  name: 'apaas.v1.applicationAuditLog.dataChangeLogDetail',
  sdkName: 'apaas.v1.applicationAuditLog.dataChangeLogDetail',
  path: '/open-apis/apaas/v1/applications/:namespace/audit_log/data_change_log_detail',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书低代码平台-审计日志-查询数据变更日志详情-根据日志 ID 查询数据变更日志详情',
  accessTokens: ['user'],
  schema: {
    params: z.object({ log_id: z.string().describe('数据变更日志ID信息') }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1ApplicationAuditLogDataChangeLogsList = {
  project: 'apaas',
  name: 'apaas.v1.applicationAuditLog.dataChangeLogsList',
  sdkName: 'apaas.v1.applicationAuditLog.dataChangeLogsList',
  path: '/open-apis/apaas/v1/applications/:namespace/audit_log/data_change_logs_list',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书低代码平台-审计日志-查询数据变更日志列表-根据搜索/筛选条件，查询数据变更日志列表',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      quick_query: z.string().describe('模糊查询').optional(),
      page_size: z.string().describe('分页大小'),
      offset: z.string().describe('翻页数量'),
      from: z.string().describe('查询时间范围：开始时间').optional(),
      to: z.string().describe('查询时间范围：结束时间').optional(),
      log_type: z.string().describe('”日志类型：10007-数据变更日志“'),
      filter: z.string().describe('日志查询：筛选能力').optional(),
      columns: z
        .array(z.string())
        .describe('日志列表：选择展示行信息，例如["opTime","appName","eventName","clientIP","operator","status"]')
        .optional(),
      sort_by: z.string().describe('查询排序字段：可选项为操作时间（opTime）').optional(),
      sort_order: z.string().describe('查询排序：按时间从小到大使用 asc').optional(),
      app_type: z.string().describe('应用类型，0为apaas类型，1为aily类型').optional(),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1ApplicationAuditLogGet = {
  project: 'apaas',
  name: 'apaas.v1.applicationAuditLog.get',
  sdkName: 'apaas.v1.applicationAuditLog.get',
  path: '/open-apis/apaas/v1/applications/:namespace/audit_log',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书低代码平台-审计日志-查询审计日志详情-根据日志 ID 查询审计日志详情',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      log_id: z
        .string()
        .describe(
          '审计日志ID信息（通过获取单条日志ID）',
        ),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1ApplicationEnvironmentVariableGet = {
  project: 'apaas',
  name: 'apaas.v1.applicationEnvironmentVariable.get',
  sdkName: 'apaas.v1.applicationEnvironmentVariable.get',
  path: '/open-apis/apaas/v1/applications/:namespace/environment_variables/:environment_variable_api_name',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书低代码平台-环境变量-查询环境变量详情-查询基于飞书应用引擎开发的应用的环境变量详情，包括名称、描述、变量值等',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      environment_variable_api_name: z.string().describe('环境变量 API 名称'),
    }),
  },
};
export const apaasV1ApplicationEnvironmentVariableQuery = {
  project: 'apaas',
  name: 'apaas.v1.applicationEnvironmentVariable.query',
  sdkName: 'apaas.v1.applicationEnvironmentVariable.query',
  path: '/open-apis/apaas/v1/applications/:namespace/environment_variables/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-环境变量-查询环境变量列表-查询基于飞书应用引擎开发的应用的环境变量列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      filter: z
        .object({ quick_query: z.string().describe('模糊查询关键词').optional() })
        .describe('过滤条件')
        .optional(),
      limit: z.number().describe('限制的条数，默认为 500，不可超过 500').optional(),
      offset: z.number().describe('返回记录的偏移量，默认为 0，即从查询到的第一个记录开始返回').optional(),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
  },
};
export const apaasV1ApplicationFlowExecute = {
  project: 'apaas',
  name: 'apaas.v1.applicationFlow.execute',
  sdkName: 'apaas.v1.applicationFlow.execute',
  path: '/open-apis/apaas/v1/applications/:namespace/flows/:flow_id/execute',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-操作流程-发起流程-执行相应流程',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      is_async: z.boolean().describe('是否异步执行(不传默认false)').optional(),
      idempotent_key: z.string().describe('幂等键（建议本地生成uuid传入，重复的话请求会报错）').optional(),
      loop_masks: z.array(z.string()).describe('循环标志信息(当前版本可不传)').optional(),
      params: z.string().describe('流程入参（json 字符串，无入参不传）').optional(),
      operator: z
        .string()
        .describe('操作人（_id和email至少填一个，低代码平台用户的 id和email，需要从低代码平台获取，json字符串）'),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间(低代码平台->我的应用->应用管理->可查看到)'),
      flow_id: z.string().describe('流程API名称（低代码平台->我的应用->开发->流程->展开为表格->可查看到）'),
    }),
  },
};
export const apaasV1ApplicationFunctionInvoke = {
  project: 'apaas',
  name: 'apaas.v1.applicationFunction.invoke',
  sdkName: 'apaas.v1.applicationFunction.invoke',
  path: '/open-apis/apaas/v1/applications/:namespace/functions/:function_api_name/invoke',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-函数-执行函数-执行基于飞书应用引擎开发的应用的自定义函数',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ params: z.string().describe('函数输入参数（JSON 序列化后的字符串）').optional() }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      function_api_name: z.string().describe('函数 API 名称'),
    }),
  },
};
export const apaasV1ApplicationObjectOqlQuery = {
  project: 'apaas',
  name: 'apaas.v1.applicationObject.oqlQuery',
  sdkName: 'apaas.v1.applicationObject.oqlQuery',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/oql_query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-执行 OQL-在应用内执行 OQL 语句',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      query: z.string().describe('待执行的 OQL 语句'),
      args: z.string().describe('用于指定 OQL 语句中匿名参数的具体值').optional(),
      named_args: z.string().describe('用于指定 OQL 语句中具名参数的具体值').optional(),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
  },
};
export const apaasV1ApplicationObjectRecordBatchCreate = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.batchCreate',
  sdkName: 'apaas.v1.applicationObjectRecord.batchCreate',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-批量新建记录-一次新建多条对象中的记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      records: z.string().describe('记录详情列表，格式为 List<Map<string, ANY>>，操作记录数上限为 500 条'),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordBatchDelete = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.batchDelete',
  sdkName: 'apaas.v1.applicationObjectRecord.batchDelete',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_delete',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书低代码平台-对象-批量删除记录-一次删除多条对象中的记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ ids: z.array(z.string()).describe('记录 ID 列表，操作记录数上限为 500') }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordBatchQuery = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.batchQuery',
  sdkName: 'apaas.v1.applicationObjectRecord.batchQuery',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-查询记录列表-获取对象中符合指定条件的记录列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      select: z.array(z.string()).describe('需要获取的字段，使用字段唯一标识符进行查询，关联字段可使用「.」进行下钻'),
      filter: z
        .object({
          conditions: z
            .array(
              z.object({
                index: z.string().describe('序号').optional(),
                left: z
                  .object({
                    type: z.string().describe('左值类型，只支持 "metadataVariable"，表示字段').optional(),
                    settings: z
                      .string()
                      .describe(
                        '字段具体值，以 JSONString 表示，格式：{"fieldPath":[{"fieldApiName": "字段名","objectApiName": "对象名"}]}',
                      )
                      .optional(),
                  })
                  .describe('左值')
                  .optional(),
                right: z
                  .object({
                    type: z.string().describe('右值类型，只支持 "constant"，表示常量').optional(),
                    settings: z
                      .string()
                      .describe('常量具体值，以 JSONString 表示，格式：{"data":"常量具体值"}')
                      .optional(),
                  })
                  .describe('右值')
                  .optional(),
                operator: z.string().describe('操作符').optional(),
              }),
            )
            .describe('查询条件')
            .optional(),
          logic_expression: z.string().describe('逻辑关系').optional(),
        })
        .describe('筛选条件，通过 JSON 格式指定条件')
        .optional(),
      order_by: z
        .array(
          z.object({
            field: z.string().describe('字段唯一标识'),
            direction: z
              .enum(['ASC', 'DESC'])
              .describe(
                '排序方向，值为 "ASC" 或者 "DESC"，代表升序和降序 Options:ASC(SortDirectionASC 升序),DESC(SortDirectionDESC 降序)',
              ),
          }),
        )
        .describe(
          '排序参数，通过 JSON 格式指定条件。其中， field 为参与排序字段，direction 为排序方向，多个条件按其在数组中的顺序生效',
        )
        .optional(),
      group_by: z
        .array(z.object({ field: z.string().describe('字段唯一标识') }))
        .describe('聚合参数，通过 JSON 格式指定条件。其中， field 为参与聚合的字段')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      use_page_token: z
        .boolean()
        .describe(
          '是否使用 page_token 功能。为 True 时将使用 page_token 的值作为起始位置查询记录，并且会在 Response 中返回 next_page_token 。默认为 False',
        )
        .optional(),
      page_size: z.number().describe('期望服务端返回的记录条数，上限 500 条。不填则取默认值，默认值为 500').optional(),
      offset: z
        .number()
        .describe(
          '返回记录的偏移量，默认为 0 ，即从查询到的第一条记录开始返回。offset 较大时查询性能较差，可能引起接口响应超时，拉取全部记录时建议使用 ID 游标分页，具体见 ID 游标分页说明',
        )
        .optional(),
      need_total_count: z
        .boolean()
        .describe('是否返回符合条件的记录总数（Total）。默认为 False，不返回记录总数')
        .optional(),
    }),
    path: z.object({
      namespace: z.string().describe('命名空间'),
      object_api_name: z.string().describe('目标对象的唯一标识符'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordBatchUpdate = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.batchUpdate',
  sdkName: 'apaas.v1.applicationObjectRecord.batchUpdate',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/batch_update',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书低代码平台-对象-批量编辑记录-一次编辑多条对象中的记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      records: z.string().describe('记录详情列表，格式为 List<Map<string, ANY>>，操作记录数上限为 500 条'),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordCreate = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.create',
  sdkName: 'apaas.v1.applicationObjectRecord.create',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-新建记录-在对象中新建记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      record: z.string().describe('创建对象使用的数据，键为字段 API 名称，值为字段值，格式可参考字段值格式'),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordDelete = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.delete',
  sdkName: 'apaas.v1.applicationObjectRecord.delete',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-飞书低代码平台-对象-删除记录-删除对象中的指定记录',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
      id: z.string().describe('记录ID'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordPatch = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.patch',
  sdkName: 'apaas.v1.applicationObjectRecord.patch',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-飞书低代码平台-对象-编辑记录-编辑对象中的指定记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      record: z.string().describe('创建对象使用的数据，键为字段 API 名称，值为字段值，格式可参考字段值格式'),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
      id: z.string().describe('记录ID'),
    }),
  },
};
export const apaasV1ApplicationObjectRecordQuery = {
  project: 'apaas',
  name: 'apaas.v1.applicationObjectRecord.query',
  sdkName: 'apaas.v1.applicationObjectRecord.query',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/:object_api_name/records/:id/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-获取记录详情-获取对象中指定的记录详情',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      select: z
        .array(z.string())
        .describe('需要获取的字段，使用字段唯一标识符进行查询，关联字段可使用 . 进行下钻')
        .optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      object_api_name: z.string().describe('对象唯一标识'),
      id: z.string().describe('记录ID'),
    }),
  },
};
export const apaasV1ApplicationObjectSearch = {
  project: 'apaas',
  name: 'apaas.v1.applicationObject.search',
  sdkName: 'apaas.v1.applicationObject.search',
  path: '/open-apis/apaas/v1/applications/:namespace/objects/search',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-对象-搜索记录-在应用内搜索记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      q: z.string().describe('搜索词').optional(),
      search_objects: z
        .array(
          z.object({
            api_name: z.string().describe('对象 APIName').optional(),
            search_fields: z.array(z.string()).describe('搜索字段 SearchFields 列表').optional(),
            select: z.array(z.string()).describe('召回字段 APIID/APIName 列表').optional(),
            filter: z
              .object({
                conditions: z
                  .array(
                    z.object({
                      index: z.string().describe('序号').optional(),
                      left: z
                        .object({
                          type: z.string().describe('左值类型，只支持 "metadataVariable"，表示字段').optional(),
                          settings: z
                            .string()
                            .describe(
                              '字段具体值，以 JSONString 表示，格式：{"fieldPath":[{"fieldApiName": "字段名","objectApiName": "对象名"}]}',
                            )
                            .optional(),
                        })
                        .describe('左值')
                        .optional(),
                      right: z
                        .object({
                          type: z.string().describe('右值类型，只支持 "constant"，表示常量').optional(),
                          settings: z
                            .string()
                            .describe('常量具体值，以 JSONString 表示，格式：{"data":"常量具体值"}')
                            .optional(),
                        })
                        .describe('右值')
                        .optional(),
                      operator: z.string().describe('操作符').optional(),
                    }),
                  )
                  .describe('查询条件')
                  .optional(),
                logic_expression: z.string().describe('逻辑关系').optional(),
              })
              .describe('过滤条件，序列化的结果{"filter": "「标准Criterion」"}')
              .optional(),
            order_by: z
              .object({
                field: z.string().describe('字段名').optional(),
                order_type: z
                  .enum(['asc', 'desc'])
                  .describe('排序方式 Options:asc(OrderTypeASC 升序),desc(OrderTypeDESC 降序)')
                  .optional(),
              })
              .describe('排序条件')
              .optional(),
          }),
        )
        .describe('搜索对象范围')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.string().describe('返回数量，默认为50，最大不超过2000').optional(),
      metadata: z
        .enum(['Label', 'SearchLayout'])
        .describe(
          '返回元数据枚举值 Options:Label(MetadataOptionLabel 只返回 Label),SearchLayout(MetadataOptionSearchLayout 返回搜索布局信息)',
        )
        .optional(),
    }),
    path: z.object({ namespace: z.string().describe('应用命名空间') }),
  },
};
export const apaasV1ApplicationRecordPermissionMemberBatchCreateAuthorization = {
  project: 'apaas',
  name: 'apaas.v1.applicationRecordPermissionMember.batchCreateAuthorization',
  sdkName: 'apaas.v1.applicationRecordPermissionMember.batchCreateAuthorization',
  path: '/open-apis/apaas/v1/applications/:namespace/record_permissions/:record_permission_api_name/member/batch_create_authorization',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-权限-记录权限-批量创建记录权限用户授权-批量创建记录权限授权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('需要新增的用户 ID 列表，使用飞书低代码平台的用户 ID').optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      record_permission_api_name: z.string().describe('记录权限 API 名称'),
    }),
  },
};
export const apaasV1ApplicationRecordPermissionMemberBatchRemoveAuthorization = {
  project: 'apaas',
  name: 'apaas.v1.applicationRecordPermissionMember.batchRemoveAuthorization',
  sdkName: 'apaas.v1.applicationRecordPermissionMember.batchRemoveAuthorization',
  path: '/open-apis/apaas/v1/applications/:namespace/record_permissions/:record_permission_api_name/member/batch_remove_authorization',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-权限-记录权限-批量删除记录权限用户授权-批量删除记录权限授权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('需要删除的用户 ID 列表，使用飞书低代码平台的用户 ID').optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      record_permission_api_name: z.string().describe('记录权限 API 名称'),
    }),
  },
};
export const apaasV1ApplicationRoleMemberBatchCreateAuthorization = {
  project: 'apaas',
  name: 'apaas.v1.applicationRoleMember.batchCreateAuthorization',
  sdkName: 'apaas.v1.applicationRoleMember.batchCreateAuthorization',
  path: '/open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member/batch_create_authorization',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-权限-角色-批量创建角色成员授权-批量创建角色成员授权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('需要新增的用户 ID 列表，使用飞书低代码平台的用户 ID').optional(),
      department_ids: z.array(z.string()).describe('需要新增的部门 ID 列表，使用飞书低代码平台的部门 ID').optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      role_api_name: z.string().describe('角色 API 名称'),
    }),
  },
};
export const apaasV1ApplicationRoleMemberBatchRemoveAuthorization = {
  project: 'apaas',
  name: 'apaas.v1.applicationRoleMember.batchRemoveAuthorization',
  sdkName: 'apaas.v1.applicationRoleMember.batchRemoveAuthorization',
  path: '/open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member/batch_remove_authorization',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-权限-角色-批量删除角色成员授权-批量删除角色成员授权',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('需要删除的用户 ID 列表，使用飞书低代码平台的用户 ID').optional(),
      department_ids: z.array(z.string()).describe('需要删除的部门 ID 列表，使用飞书低代码平台的部门 ID').optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      role_api_name: z.string().describe('角色 API 名称'),
    }),
  },
};
export const apaasV1ApplicationRoleMemberGet = {
  project: 'apaas',
  name: 'apaas.v1.applicationRoleMember.get',
  sdkName: 'apaas.v1.applicationRoleMember.get',
  path: '/open-apis/apaas/v1/applications/:namespace/roles/:role_api_name/member',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-飞书低代码平台-权限-角色-查询角色成员信息-获取角色成员详情',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      need_display_name: z.boolean().describe('是否需要公式的展示名称，便于前端展示').optional(),
      use_api_id: z.boolean().describe('是否使用 API ID字段作为出入参，默认值为 false').optional(),
    }),
    path: z.object({
      namespace: z.string().describe('应用命名空间'),
      role_api_name: z.string().describe('角色 API 名称'),
    }),
  },
};
export const apaasV1ApprovalInstanceCancel = {
  project: 'apaas',
  name: 'apaas.v1.approvalInstance.cancel',
  sdkName: 'apaas.v1.approvalInstance.cancel',
  path: '/open-apis/apaas/v1/approval_instances/:approval_instance_id/cancel',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-撤销人工任务-撤销一个人工任务（包括审批任务，填写任务）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('操作用户的kunlunUserID,可通过Apaas用户管理页面获取'),
      opinion: z.string().describe('撤销原因'),
    }),
    path: z.object({
      approval_instance_id: z
        .string()
        .describe('审批实例，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1ApprovalTaskAddAssignee = {
  project: 'apaas',
  name: 'apaas.v1.approvalTask.addAssignee',
  sdkName: 'apaas.v1.approvalTask.addAssignee',
  path: '/open-apis/apaas/v1/approval_tasks/:approval_task_id/add_assignee',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-人工任务加签-对于人工任务进行加签操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('操作人 ID'),
      approvers: z.array(z.string().describe('审批人id')).describe('审批人列表').optional(),
      add_assignee_type: z
        .string()
        .describe('加签类型：- 并加签：currentAndAddAssign- 后加签：afterAndAddAssign')
        .optional(),
      opinion: z.string().describe('加签原因').optional(),
    }),
    path: z.object({ approval_task_id: z.string().describe('人工任务 ID') }),
  },
};
export const apaasV1ApprovalTaskAgree = {
  project: 'apaas',
  name: 'apaas.v1.approvalTask.agree',
  sdkName: 'apaas.v1.approvalTask.agree',
  path: '/open-apis/apaas/v1/approval_tasks/:approval_task_id/agree',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-同意人工任务-对于人工任务进行同意操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ user_id: z.string().describe('操作人 ID'), opinion: z.string().describe('审批意见').optional() }),
    path: z.object({ approval_task_id: z.string().describe('人工任务 ID') }),
  },
};
export const apaasV1ApprovalTaskReject = {
  project: 'apaas',
  name: 'apaas.v1.approvalTask.reject',
  sdkName: 'apaas.v1.approvalTask.reject',
  path: '/open-apis/apaas/v1/approval_tasks/:approval_task_id/reject',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-拒绝人工任务-对于人工任务进行拒绝操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ user_id: z.string().describe('操作人 ID'), opinion: z.string().describe('审批意见').optional() }),
    path: z.object({ approval_task_id: z.string().describe('人工任务 ID') }),
  },
};
export const apaasV1ApprovalTaskTransfer = {
  project: 'apaas',
  name: 'apaas.v1.approvalTask.transfer',
  sdkName: 'apaas.v1.approvalTask.transfer',
  path: '/open-apis/apaas/v1/approval_tasks/:approval_task_id/transfer',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-转交人工任务-对于人工任务进行转交操作',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('操作人 ID'),
      from_user_ids: z.array(z.string()).describe('原审批人id').optional(),
      to_user_ids: z.array(z.string()).describe('新审批人id').optional(),
      opinion: z.string().describe('转交原因').optional(),
    }),
    path: z.object({ approval_task_id: z.string().describe('人工任务 ID') }),
  },
};
export const apaasV1SeatActivityList = {
  project: 'apaas',
  name: 'apaas.v1.seatActivity.list',
  sdkName: 'apaas.v1.seatActivity.list',
  path: '/open-apis/apaas/v1/seat_activities',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书低代码平台-席位活跃-查询席位活跃详情-获取租户下用户使用飞书低代码平台席位最近访问应用时间。需要飞书低代码平台系统管理员作为授权人调用当前API',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      seat_type: z
        .enum(['per_user', 'per_user_per_app'])
        .describe(
          '席位类型，枚举值：per_user、per_user_per_app Options:per_user(平台席位),per_user_per_app(应用访问席位)',
        ),
      page_size: z.string().describe('分页大小，范围：【0，500】'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1SeatAssignmentList = {
  project: 'apaas',
  name: 'apaas.v1.seatAssignment.list',
  sdkName: 'apaas.v1.seatAssignment.list',
  path: '/open-apis/apaas/v1/seat_assignments',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-飞书低代码平台-席位分配-查询席位分配详情-获取租户下平台席位和应用访问席位分配详情，如用户 ID 、应用命名空间等，需要飞书低代码平台系统管理员作为授权人调用当前 API',
  accessTokens: ['user'],
  schema: {
    params: z.object({
      seat_type: z
        .enum(['per_user', 'per_user_per_app'])
        .describe(
          '席位类型，枚举值：per_user、per_user_per_app Options:per_user(平台席位),per_user_per_app(应用访问席位)',
        ),
      page_size: z.string().describe('分页大小，范围：【0，500】'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const apaasV1UserTaskCc = {
  project: 'apaas',
  name: 'apaas.v1.userTask.cc',
  sdkName: 'apaas.v1.userTask.cc',
  path: '/open-apis/apaas/v1/user_tasks/:task_id/cc',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-抄送人工任务-对当前的任务进行一次抄送',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      cc_user_ids: z.array(z.string()).describe('抄送人的kunlunID列表,可通过Apaas用户管理页面获取'),
      operator_user_id: z.string().describe('操作人kunlunUserID,可通过Apaas用户管理页面获取'),
    }),
    path: z.object({
      task_id: z
        .string()
        .describe('任务ID，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1UserTaskChatGroup = {
  project: 'apaas',
  name: 'apaas.v1.userTask.chatGroup',
  sdkName: 'apaas.v1.userTask.chatGroup',
  path: '/open-apis/apaas/v1/user_tasks/:task_id/chat_group',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-基于人工任务发起群聊-基于任务，发起一个飞书群聊',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator_user_id: z.string().describe('操作人kunlunUserID,可通过Apaas用户管理页面获取'),
      invite_user_ids: z.array(z.string()).describe('邀请进群用户KunlunID列表,可通过Apaas用户管理页面获取').optional(),
      chat_id: z.string().describe('要拉入的群openID，为空则新建群').optional(),
      chat_name: z.string().describe('要加入的群名称，当chat_id为空时用该名称创建群聊').optional(),
    }),
    path: z.object({
      task_id: z
        .string()
        .describe('任务ID，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1UserTaskExpediting = {
  project: 'apaas',
  name: 'apaas.v1.userTask.expediting',
  sdkName: 'apaas.v1.userTask.expediting',
  path: '/open-apis/apaas/v1/user_tasks/:task_id/expediting',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-催办人工任务-对任务当前的处理人发起一次催办',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator_user_id: z.string().describe('操作人kunlunUserID,可通过Apaas用户管理页面获取'),
      expediting_user_ids: z.array(z.string()).describe('催办人的kunlunID列表,可通过Apaas用户管理页面获取'),
      opinion: z.string().describe('催办理由').optional(),
    }),
    path: z.object({
      task_id: z
        .string()
        .describe('任务ID，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1UserTaskQuery = {
  project: 'apaas',
  name: 'apaas.v1.userTask.query',
  sdkName: 'apaas.v1.userTask.query',
  path: '/open-apis/apaas/v1/user_task/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-查询人工任务-查询人工任务列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      type: z.string().describe('类型- archived：已完成的- pending：待处理的').optional(),
      source: z.string().describe('来源- fromMe:我发起的- assignMe:分配给我的- CCMe：抄送我的').optional(),
      limit: z.string().describe('获取条数- 最小值：1- 最大值：50').optional(),
      offset: z.string().describe('起始位置').optional(),
      start_time: z.string().describe('开始时间（毫秒）').optional(),
      end_time: z.string().describe('结束时间（毫秒）').optional(),
      api_ids: z.array(z.string()).describe('流程apiid列表，可以通过apaas流程列表页获取').optional(),
      kunlun_user_id: z.string().describe('kunlunUserID,可通过Apaas用户管理页面获取'),
    }),
  },
};
export const apaasV1UserTaskRollback = {
  project: 'apaas',
  name: 'apaas.v1.userTask.rollback',
  sdkName: 'apaas.v1.userTask.rollback',
  path: '/open-apis/apaas/v1/user_tasks/:task_id/rollback',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-退回人工任务-对当前任务进行一次退回',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      operator_user_id: z.string().describe('操作人kunlunUserID,可通过Apaas用户管理页面获取'),
      to_task_id: z
        .string()
        .describe(
          '退回到的任务ID，可以通过[查询人工任务可退回的点](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/rollback_points)获取',
        ),
      opinion: z.string().describe('退回原因'),
    }),
    path: z.object({
      task_id: z
        .string()
        .describe('任务ID，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1UserTaskRollbackPoints = {
  project: 'apaas',
  name: 'apaas.v1.userTask.rollbackPoints',
  sdkName: 'apaas.v1.userTask.rollbackPoints',
  path: '/open-apis/apaas/v1/user_tasks/:task_id/rollback_points',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-飞书低代码平台-流程-人工任务-查询人工任务可退回的位置-查询当前任务可以退回的位置',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ operator_user_id: z.string().describe('操作人kunlunUserID,可通过Apaas用户管理页面获取') }),
    path: z.object({
      task_id: z
        .string()
        .describe('任务ID，可以通过[查询人工任务](/uAjLw4CM/ukTMukTMukTM/apaas-v1/user_task/query)获取'),
    }),
  },
};
export const apaasV1Tools = [
  apaasV1ApplicationAuditLogAuditLogList,
  apaasV1ApplicationAuditLogDataChangeLogDetail,
  apaasV1ApplicationAuditLogDataChangeLogsList,
  apaasV1ApplicationAuditLogGet,
  apaasV1ApplicationEnvironmentVariableGet,
  apaasV1ApplicationEnvironmentVariableQuery,
  apaasV1ApplicationFlowExecute,
  apaasV1ApplicationFunctionInvoke,
  apaasV1ApplicationObjectOqlQuery,
  apaasV1ApplicationObjectRecordBatchCreate,
  apaasV1ApplicationObjectRecordBatchDelete,
  apaasV1ApplicationObjectRecordBatchQuery,
  apaasV1ApplicationObjectRecordBatchUpdate,
  apaasV1ApplicationObjectRecordCreate,
  apaasV1ApplicationObjectRecordDelete,
  apaasV1ApplicationObjectRecordPatch,
  apaasV1ApplicationObjectRecordQuery,
  apaasV1ApplicationObjectSearch,
  apaasV1ApplicationRecordPermissionMemberBatchCreateAuthorization,
  apaasV1ApplicationRecordPermissionMemberBatchRemoveAuthorization,
  apaasV1ApplicationRoleMemberBatchCreateAuthorization,
  apaasV1ApplicationRoleMemberBatchRemoveAuthorization,
  apaasV1ApplicationRoleMemberGet,
  apaasV1ApprovalInstanceCancel,
  apaasV1ApprovalTaskAddAssignee,
  apaasV1ApprovalTaskAgree,
  apaasV1ApprovalTaskReject,
  apaasV1ApprovalTaskTransfer,
  apaasV1SeatActivityList,
  apaasV1SeatAssignmentList,
  apaasV1UserTaskCc,
  apaasV1UserTaskChatGroup,
  apaasV1UserTaskExpediting,
  apaasV1UserTaskQuery,
  apaasV1UserTaskRollback,
  apaasV1UserTaskRollbackPoints,
];
