import { z } from 'zod';
export type sheetsV3ToolName =
  | 'sheets.v3.spreadsheet.create'
  | 'sheets.v3.spreadsheet.get'
  | 'sheets.v3.spreadsheet.patch'
  | 'sheets.v3.spreadsheetSheetFilterViewCondition.create'
  | 'sheets.v3.spreadsheetSheetFilterViewCondition.delete'
  | 'sheets.v3.spreadsheetSheetFilterViewCondition.get'
  | 'sheets.v3.spreadsheetSheetFilterViewCondition.query'
  | 'sheets.v3.spreadsheetSheetFilterViewCondition.update'
  | 'sheets.v3.spreadsheetSheetFilterView.create'
  | 'sheets.v3.spreadsheetSheetFilterView.delete'
  | 'sheets.v3.spreadsheetSheetFilterView.get'
  | 'sheets.v3.spreadsheetSheetFilterView.patch'
  | 'sheets.v3.spreadsheetSheetFilterView.query'
  | 'sheets.v3.spreadsheetSheetFilter.create'
  | 'sheets.v3.spreadsheetSheetFilter.delete'
  | 'sheets.v3.spreadsheetSheetFilter.get'
  | 'sheets.v3.spreadsheetSheetFilter.update'
  | 'sheets.v3.spreadsheetSheet.find'
  | 'sheets.v3.spreadsheetSheetFloatImage.create'
  | 'sheets.v3.spreadsheetSheetFloatImage.delete'
  | 'sheets.v3.spreadsheetSheetFloatImage.get'
  | 'sheets.v3.spreadsheetSheetFloatImage.patch'
  | 'sheets.v3.spreadsheetSheetFloatImage.query'
  | 'sheets.v3.spreadsheetSheet.get'
  | 'sheets.v3.spreadsheetSheet.moveDimension'
  | 'sheets.v3.spreadsheetSheet.query'
  | 'sheets.v3.spreadsheetSheet.replace';
export const sheetsV3SpreadsheetCreate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheet.create',
  sdkName: 'sheets.v3.spreadsheet.create',
  path: '/open-apis/sheets/v3/spreadsheets',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-电子表格-表格-创建电子表格-在云空间指定目录下创建电子表格。可自定义表格标题。不支持带内容创建表格',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      title: z.string().describe('表格标题').optional(),
      folder_token: z
        .string()
        .describe(
          '文件夹 token。你可通过以下两种方式获取文件夹的 token：- 文件夹的 URL：https://sample.feishu.cn/drive/folder/==fldbcO1UuPz8VwnpPx5a92abcef==- 调用开放平台接口获取： - 调用接口获取根目录（即根文件夹）的 token。 - 继续调用接口，获取根目录下文件夹的 token',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheet.get',
  sdkName: 'sheets.v3.spreadsheet.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-电子表格-表格-获取电子表格信息-根据电子表格 token 获取电子表格的基础信息，包括电子表格的所有者、URL 链接等',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetPatch = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheet.patch',
  sdkName: 'sheets.v3.spreadsheet.patch',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-云文档-电子表格-表格-修改电子表格属性-该接口用于修改电子表格的属性。目前支持修改电子表格标题',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      title: z
        .string()
        .describe('新的电子表格标题。参数为空时，表格标题将显示为“未命名表格”或本地语言环境对应内容')
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewConditionCreate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterViewCondition.create',
  sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.create',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-电子表格-筛选视图-筛选条件-创建筛选条件-在筛选视图的指定列创建筛选条件，包括筛选的类型、比较类型、筛选参数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      condition_id: z.string().describe('设置筛选条件的列，用字母表示').optional(),
      filter_type: z
        .string()
        .describe(
          '筛选类型。枚举值如下所示。了解更多，参考。- hiddenValue：隐藏值筛选- number：数字筛选- text：文本筛选- color：颜色筛选',
        )
        .optional(),
      compare_type: z
        .string()
        .describe(
          '比较类型。了解更多，参考',
        )
        .optional(),
      expected: z
        .array(z.string())
        .describe(
          '筛选参数。了解更多，参考',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewConditionDelete = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterViewCondition.delete',
  sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.delete',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-电子表格-筛选视图-筛选条件-删除筛选条件-删除筛选视图指定列的所有筛选条件',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
      condition_id: z.string().describe('要删除所有筛选条件的列，用字母表示').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewConditionGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterViewCondition.get',
  sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-电子表格-筛选视图-筛选条件-获取筛选条件-获取筛选视图某列的筛选条件，包括筛选的类型、比较类型、筛选参数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
      condition_id: z.string().describe('要查询的筛选视图的列').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewConditionQuery = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterViewCondition.query',
  sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.query',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-电子表格-筛选视图-筛选条件-查询筛选条件-查询指定筛选视图的所有筛选条件，包括筛选的类型、比较类型、筛选参数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewConditionUpdate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterViewCondition.update',
  sdkName: 'sheets.v3.spreadsheetSheetFilterViewCondition.update',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id/conditions/:condition_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-电子表格-筛选视图-筛选条件-更新筛选条件-更新筛选视图指定列的筛选条件，包括筛选的类型、比较类型、筛选参数等',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      filter_type: z
        .string()
        .describe(
          '筛选类型。枚举值如下所示。了解更多，参考。- hiddenValue：隐藏值筛选- number：数字筛选- text：文本筛选- color：颜色筛选',
        )
        .optional(),
      compare_type: z
        .string()
        .describe(
          '比较类型。了解更多，参考',
        )
        .optional(),
      expected: z
        .array(z.string())
        .describe(
          '筛选参数。了解更多，参考',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
      condition_id: z.string().describe('要更新的筛选视图的列的索引，用字母表示').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewCreate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterView.create',
  sdkName: 'sheets.v3.spreadsheetSheetFilterView.create',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-电子表格-筛选视图-创建筛选视图-指定电子表格工作表的筛选范围，创建一个筛选视图',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      filter_view_id: z
        .string()
        .describe('自定义筛选视图 ID。不填将由系统生成。长度需为 10 字符。字符可以是 0-9 数字、a-z、A-Z 字母或其组合')
        .optional(),
      filter_view_name: z.string().describe('自定义筛选视图名称。不填将由系统生成。长度不超过100 个字符').optional(),
      range: z
        .string()
        .describe(
          '筛选视图的筛选范围。该参数必填，请忽略必填列的“否”。支持以下五种写法，了解更多，参考。- `sheetId`：填写实际的工作表 ID，表示将筛选应用于整表- `sheetId!{开始行索引}:{结束行索引}`：填写工作表 ID 和行数区间，表示将筛选应用于整行- `sheetId!{开始列索引}:{结束列索引}`：填写工作表 ID 和列的区间，表示将筛选应用于整列- `sheetId!{开始单元格}:{结束单元格}`：填写工作表 ID 和单元格区间，表示将筛选应用于单元格选定的区域中- `sheetId!{开始单元格}:{结束列索引}`：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewDelete = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterView.delete',
  sdkName: 'sheets.v3.spreadsheetSheetFilterView.delete',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-电子表格-筛选视图-删除筛选视图-删除指定筛选视图',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterView.get',
  sdkName: 'sheets.v3.spreadsheetSheetFilterView.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-电子表格-筛选视图-获取筛选视图-获取指定筛选视图的信息，包括 ID、名称和筛选范围',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewPatch = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterView.patch',
  sdkName: 'sheets.v3.spreadsheetSheetFilterView.patch',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/:filter_view_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-电子表格-筛选视图-更新筛选视图-更新筛选视图的名称或筛选范围',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      filter_view_name: z.string().describe('筛选视图名称。长度不得超过 100 个字符，且在工作表内必须唯一').optional(),
      range: z
        .string()
        .describe(
          '筛选视图的筛选范围。支持以下五种写法，了解更多，参考。- sheetId：填写实际的工作表 ID，表示将筛选应用于整表- sheetId!1:2 ：填写工作表 ID 和行数区间，表示将筛选应用于整行- sheetId!A:B ：填写工作表 ID 和列的区间，表示将筛选应用于整列- sheetId!A1:B2 ：填写工作表 ID 和单元格区间，表示将筛选应用于单元格选定的区域中- sheetId!A1:C ：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
      filter_view_id: z
        .string()
        .describe(
          '筛选视图 ID。通过获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterViewQuery = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilterView.query',
  sdkName: 'sheets.v3.spreadsheetSheetFilterView.query',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter_views/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-电子表格-筛选视图-查询筛选视图-查询电子表格指定工作表的所有筛选视图及其基本信息，包括视图 ID、视图名称和筛选范围',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterCreate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilter.create',
  sdkName: 'sheets.v3.spreadsheetSheetFilter.create',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-电子表格-筛选-创建筛选-在电子表格工作表的指定范围内，设置筛选条件，创建筛选',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      range: z
        .string()
        .describe(
          '设置筛选的应用范围。支持以下五种写法，了解更多，参考。- `sheetId`：填写实际的工作表 ID，表示将筛选应用于整表- `sheetId!{开始行索引}:{结束行索引}` ：填写工作表 ID 和行数区间，表示将筛选应用于整行- `sheetId!{开始列索引}:{结束列索引}`：填写工作表 ID 和列的区间，表示将筛选应用于整列- `sheetId!{开始单元格}:{结束单元格}`：填写工作表 ID 和单元格区间，表示将筛选应用于单元格选定的区域中- `sheetId!{开始单元格}:{结束列索引}`：填写工作表 ID、起始单元格和结束列，表示省略结束行，使用表格的最后行作为结束行',
        ),
      col: z.string().describe('设置应用筛选条件的列'),
      condition: z
        .object({
          filter_type: z
            .string()
            .describe(
              '筛选类型，枚举值如下所示。了解更多，参考。- multiValue ：多值筛选- number ：数字筛选- text ：文本筛选- color ：颜色筛选- clear ：清除某列的筛选条件',
            ),
          compare_type: z.string().describe('比较类型').optional(),
          expected: z.array(z.string()).describe('筛选参数'),
        })
        .describe('设置筛选条件'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterDelete = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilter.delete',
  sdkName: 'sheets.v3.spreadsheetSheetFilter.delete',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-电子表格-筛选-删除筛选-删除电子表格中指定工作表的所有筛选',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilter.get',
  sdkName: 'sheets.v3.spreadsheetSheetFilter.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-电子表格-筛选-获取筛选-获取电子表格中工作表的详细筛选信息，包括筛选的应用范围、筛选条件、被筛选条件过滤掉的行',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFilterUpdate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFilter.update',
  sdkName: 'sheets.v3.spreadsheetSheetFilter.update',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/filter',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-云文档-电子表格-筛选-更新筛选-在电子表格工作表筛选范围中，更新指定列的筛选条件',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      col: z.string().describe('指定要更新筛选条件的列'),
      condition: z
        .object({
          filter_type: z
            .string()
            .describe(
              '筛选类型，枚举值如下所示。了解更多，参考。- multiValue ：多值筛选- number ：数字筛选- text ：文本筛选- color ：颜色筛选- clear ：清除某列的筛选条件',
            ),
          compare_type: z
            .string()
            .describe(
              '比较类型。不同筛选类型的比较类型的枚举值不同，详情参考',
            )
            .optional(),
          expected: z
            .array(z.string())
            .describe(
              '筛选参数。不同筛选类型的筛选参数限制不同，详情参考',
            ),
        })
        .describe('设置筛选条件'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表 ID，通过 获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFind = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheet.find',
  sdkName: 'sheets.v3.spreadsheetSheet.find',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/find',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-电子表格-单元格-查找单元格-在指定范围内查找符合查找条件的单元格',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      find_condition: z
        .object({
          range: z
            .string()
            .describe(
              '查找范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：- `sheetId` 为工作表 ID，通过 获取- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考',
            ),
          match_case: z
            .boolean()
            .describe(
              '是否忽略查找字符串的大小写，默认为 false。- `true`：忽略字符串中字母大小写差异- `false`：区分字符串中字母大小写',
            )
            .optional(),
          match_entire_cell: z
            .boolean()
            .describe(
              '字符串是否需要完全匹配整个单元格，默认值为 false。- `true`：完全匹配单元格，比如 `find` 参数 取值为 "hello"，则单元格中的内容必须为 "hello" 才会匹配替换- `false`：允许部分匹配单元格，比如 `find` 取值为 "hello"，则单元格中的内容包含 "hello" 即可匹配替换',
            )
            .optional(),
          search_by_regex: z
            .boolean()
            .describe('是否使用正则表达式查找，默认值为 false。- `true`：使用正则表达式- `false`：不使用正则表达式')
            .optional(),
          include_formulas: z
            .boolean()
            .describe('是否仅搜索单元格公式，默认值为 false。- `true`：仅搜索单元格公式- `false`：仅搜索单元格内容')
            .optional(),
        })
        .describe('指定查找单元格的条件'),
      find: z.string().describe('查找的字符串。当`search_by_regex` 字段为 true 时，你需填入正则表达式'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表的 ID，获取方式见',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFloatImageCreate = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFloatImage.create',
  sdkName: 'sheets.v3.spreadsheetSheetFloatImage.create',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-电子表格-浮动图片-创建浮动图片-在电子表格工作表的指定位置创建一张浮动图片',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      float_image_id: z
        .string()
        .describe(
          '工作表内浮动图片的唯一标识。可不传由系统自动生成，也可选择自定义。**数据校验规则**：长度为 10，由 0-9、a-z、A-Z 组合而成',
        )
        .optional(),
      float_image_token: z
        .string()
        .describe(
          '浮动图片的 token。通过或上传图片至表格，获得素材的 `file_token`，即为 float_image_token。**注意**：该参数必填，请忽略左侧必填列的”否”',
        )
        .optional(),
      range: z
        .string()
        .describe(
          '浮动图片左上角所在单元格位置，只允许单个单元格的形式，如 "ahgsch!A1:A1"。了解更多，参考。**注意**：该参数必填，请忽略左侧必填列的”否”',
        )
        .optional(),
      width: z
        .number()
        .describe(
          '浮动图片的宽度，单位为像素。不传会默认采用图片实际宽度，如果传则需要大于等于 20 像素。了解更多，参考',
        )
        .optional(),
      height: z
        .number()
        .describe(
          '浮动图片的高度，单位为像素。不传会默认采用图片实际高度，如果传则需要大于等于 20 像素。了解更多，参考',
        )
        .optional(),
      offset_x: z
        .number()
        .describe(
          '浮动图片左上角距离所在单元格左上角的横向偏移，单位为像素，默认为 0，设置的值需要大于等于 0、小于浮动图片左上角所在单元格的宽度。了解更多，参考',
        )
        .optional(),
      offset_y: z
        .number()
        .describe(
          '浮动图片左上角距离所在单元格左上角的纵向偏移，单位为像素，默认为 0。设置的值需要大于等于 0、小于浮动图片左上角所在单元格的高度。了解更多，参考',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '电子表格工作表的 ID。调用获取 ID',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFloatImageDelete = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFloatImage.delete',
  sdkName: 'sheets.v3.spreadsheetSheetFloatImage.delete',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-云文档-电子表格-浮动图片-删除浮动图片-删除电子表格工作表内指定的浮动图片',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '电子表格工作表的 ID。调用获取 ID',
        )
        .optional(),
      float_image_id: z
        .string()
        .describe(
          '工作表内浮动图片的唯一标识。通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFloatImageGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFloatImage.get',
  sdkName: 'sheets.v3.spreadsheetSheetFloatImage.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-电子表格-浮动图片-获取浮动图片-获取电子表格工作表内指定浮动图片的参数信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '电子表格工作表的 ID。调用获取 ID',
        )
        .optional(),
      float_image_id: z
        .string()
        .describe(
          '工作表内浮动图片的唯一标识。通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFloatImagePatch = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFloatImage.patch',
  sdkName: 'sheets.v3.spreadsheetSheetFloatImage.patch',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/:float_image_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-电子表格-浮动图片-更新浮动图片-更新已有的浮动图片位置和宽高',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      float_image_token: z.string().describe('在本更新接口中，该参数无需传入').optional(),
      range: z
        .string()
        .describe(
          '浮动图片左上角所在单元格位置，只允许单个单元格的形式，如 "ahgsch!A1:A1"。了解更多，参考',
        )
        .optional(),
      width: z
        .number()
        .describe(
          '浮动图片的宽度，单位为像素。不传会默认采用图片实际宽度，如果传则需要大于等于 20 像素。了解更多，参考',
        )
        .optional(),
      height: z
        .number()
        .describe(
          '浮动图片的高度，单位为像素。不传会默认采用图片实际高度，如果传则需要大于等于 20 像素。了解更多，参考',
        )
        .optional(),
      offset_x: z
        .number()
        .describe(
          '浮动图片左上角距离所在单元格左上角的横向偏移，单位为像素，默认为 0，设置的值需要大于等于 0、小于浮动图片左上角所在单元格的宽度。了解更多，参考',
        )
        .optional(),
      offset_y: z
        .number()
        .describe(
          '浮动图片左上角距离所在单元格左上角的纵向偏移，单位为像素，默认为 0。设置的值需要大于等于 0、小于浮动图片左上角所在单元格的高度。了解更多，参考',
        )
        .optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '电子表格工作表的 ID。调用获取 ID',
        )
        .optional(),
      float_image_id: z
        .string()
        .describe(
          '工作表内浮动图片的唯一标识。通过接口获取',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetFloatImageQuery = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheetFloatImage.query',
  sdkName: 'sheets.v3.spreadsheetSheetFloatImage.query',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/float_images/query',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-电子表格-浮动图片-查询浮动图片-获取电子表格工作表内所有的浮动图片的参数信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '电子表格工作表的 ID。调用获取 ID',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetGet = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheet.get',
  sdkName: 'sheets.v3.spreadsheetSheet.get',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-电子表格-工作表-查询工作表-根据工作表 ID 查询工作表属性信息，包括工作表的标题、索引位置、是否被隐藏等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        ),
      sheet_id: z
        .string()
        .describe(
          '工作表的 ID。调用获取 ID',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetMoveDimension = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheet.moveDimension',
  sdkName: 'sheets.v3.spreadsheetSheet.moveDimension',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/move_dimension',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-云文档-电子表格-行列-移动行列-该接口用于移动行或列。行或列被移动到目标位置后，原本在目标位置的行列会对应右移或下移',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      source: z
        .object({
          major_dimension: z.string().describe('移动的维度。可选值：- `ROWS`：行- `COLUMNS`：列').optional(),
          start_index: z
            .number()
            .describe(
              '要移动的行或列的起始位置。从 0 开始计数。若 `startIndex` 为 3，则从第 4 行或列开始移动。包含第 4 行或列',
            )
            .optional(),
          end_index: z
            .number()
            .describe(
              '要移动的行或列结束的位置。从 0 开始计数。若 `endIndex` 为 7，则要移动的范围至第 8 行或列结束。不包含第 8 行或列。示例：当 `majorDimension`为 `ROWS`、 `startIndex` 为 3、`endIndex ` 为 7 时，则移动第 4、5、6、7 行，共 4 行',
            )
            .optional(),
        })
        .describe('移动源位置信息')
        .optional(),
      destination_index: z.number().describe('移动的目标位置行或者列').optional(),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表的 ID。调用获取 ID',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetQuery = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheet.query',
  sdkName: 'sheets.v3.spreadsheetSheet.query',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-电子表格-工作表-获取工作表-根据电子表格 token 获取表格中所有工作表及其属性信息，包括工作表 ID、标题、索引位置、是否被隐藏等',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3SpreadsheetSheetReplace = {
  project: 'sheets',
  name: 'sheets.v3.spreadsheetSheet.replace',
  sdkName: 'sheets.v3.spreadsheetSheet.replace',
  path: '/open-apis/sheets/v3/spreadsheets/:spreadsheet_token/sheets/:sheet_id/replace',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-云文档-电子表格-单元格-替换单元格-在指定范围内，查找并替换符合查找条件的单元格',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      find_condition: z
        .object({
          range: z
            .string()
            .describe(
              '查找范围。格式为 `<sheetId>!<开始位置>:<结束位置>`。其中：- `sheetId` 为工作表 ID，通过 获取- `<开始位置>:<结束位置>` 为工作表中单元格的范围，数字表示行索引，字母表示列索引。如 `A2:B2` 表示该工作表第 2 行的 A 列到 B 列。`range`支持四种写法，详情参考',
            ),
          match_case: z
            .boolean()
            .describe(
              '是否忽略查找字符串的大小写，默认为 false。- `true`：忽略字符串中字母大小写差异- `false`：区分字符串中字母大小写',
            )
            .optional(),
          match_entire_cell: z
            .boolean()
            .describe(
              '字符串是否需要完全匹配整个单元格，默认值为 false。- `true`：完全匹配单元格，比如 `find` 参数 取值为 "hello"，则单元格中的内容必须为 "hello" 才会匹配替换- `false`：允许部分匹配单元格，比如 `find` 取值为 "hello"，则单元格中的内容包含 "hello" 即可匹配替换',
            )
            .optional(),
          search_by_regex: z
            .boolean()
            .describe('是否使用正则表达式查找，默认值为 false。- `true`：使用正则表达式- `false`：不使用正则表达式')
            .optional(),
          include_formulas: z
            .boolean()
            .describe('是否仅搜索单元格公式，默认值为 false。- `true`：仅搜索单元格公式- `false`：仅搜索单元格内容')
            .optional(),
        })
        .describe('指定查找单元格的条件'),
      find: z.string().describe('查找的字符串。当`search_by_regex` 字段为 true 时，你需填入正则表达式'),
      replacement: z.string().describe('替换的字符串'),
    }),
    path: z.object({
      spreadsheet_token: z
        .string()
        .describe(
          '电子表格的 token。可通过以下两种方式获取。了解更多，参考。- 电子表格的 URL：https://sample.feishu.cn/sheets/==Iow7sNNEphp3WbtnbCscPqabcef==- 调用',
        )
        .optional(),
      sheet_id: z
        .string()
        .describe(
          '工作表的 ID，获取方式见',
        )
        .optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const sheetsV3Tools = [
  sheetsV3SpreadsheetCreate,
  sheetsV3SpreadsheetGet,
  sheetsV3SpreadsheetPatch,
  sheetsV3SpreadsheetSheetFilterViewConditionCreate,
  sheetsV3SpreadsheetSheetFilterViewConditionDelete,
  sheetsV3SpreadsheetSheetFilterViewConditionGet,
  sheetsV3SpreadsheetSheetFilterViewConditionQuery,
  sheetsV3SpreadsheetSheetFilterViewConditionUpdate,
  sheetsV3SpreadsheetSheetFilterViewCreate,
  sheetsV3SpreadsheetSheetFilterViewDelete,
  sheetsV3SpreadsheetSheetFilterViewGet,
  sheetsV3SpreadsheetSheetFilterViewPatch,
  sheetsV3SpreadsheetSheetFilterViewQuery,
  sheetsV3SpreadsheetSheetFilterCreate,
  sheetsV3SpreadsheetSheetFilterDelete,
  sheetsV3SpreadsheetSheetFilterGet,
  sheetsV3SpreadsheetSheetFilterUpdate,
  sheetsV3SpreadsheetSheetFind,
  sheetsV3SpreadsheetSheetFloatImageCreate,
  sheetsV3SpreadsheetSheetFloatImageDelete,
  sheetsV3SpreadsheetSheetFloatImageGet,
  sheetsV3SpreadsheetSheetFloatImagePatch,
  sheetsV3SpreadsheetSheetFloatImageQuery,
  sheetsV3SpreadsheetSheetGet,
  sheetsV3SpreadsheetSheetMoveDimension,
  sheetsV3SpreadsheetSheetQuery,
  sheetsV3SpreadsheetSheetReplace,
];
