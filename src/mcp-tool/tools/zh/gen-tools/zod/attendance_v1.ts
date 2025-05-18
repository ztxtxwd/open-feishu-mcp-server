import { z } from 'zod';
export type attendanceV1ToolName =
  | 'attendance.v1.approvalInfo.process'
  | 'attendance.v1.archiveRule.delReport'
  | 'attendance.v1.archiveRule.list'
  | 'attendance.v1.archiveRule.uploadReport'
  | 'attendance.v1.archiveRule.userStatsFieldsQuery'
  | 'attendance.v1.group.create'
  | 'attendance.v1.group.delete'
  | 'attendance.v1.group.get'
  | 'attendance.v1.group.list'
  | 'attendance.v1.group.listUser'
  | 'attendance.v1.group.search'
  | 'attendance.v1.leaveAccrualRecord.patch'
  | 'attendance.v1.leaveEmployExpireRecord.get'
  | 'attendance.v1.shift.create'
  | 'attendance.v1.shift.delete'
  | 'attendance.v1.shift.get'
  | 'attendance.v1.shift.list'
  | 'attendance.v1.shift.query'
  | 'attendance.v1.userApproval.create'
  | 'attendance.v1.userApproval.query'
  | 'attendance.v1.userDailyShift.batchCreate'
  | 'attendance.v1.userDailyShift.batchCreateTemp'
  | 'attendance.v1.userDailyShift.query'
  | 'attendance.v1.userFlow.batchCreate'
  | 'attendance.v1.userFlow.batchDel'
  | 'attendance.v1.userFlow.get'
  | 'attendance.v1.userFlow.query'
  | 'attendance.v1.userSetting.modify'
  | 'attendance.v1.userSetting.query'
  | 'attendance.v1.userStatsData.query'
  | 'attendance.v1.userStatsField.query'
  | 'attendance.v1.userStatsView.query'
  | 'attendance.v1.userStatsView.update'
  | 'attendance.v1.userTaskRemedy.create'
  | 'attendance.v1.userTaskRemedy.query'
  | 'attendance.v1.userTaskRemedy.queryUserAllowedRemedys'
  | 'attendance.v1.userTask.query';
export const attendanceV1ApprovalInfoProcess = {
  project: 'attendance',
  name: 'attendance.v1.approvalInfo.process',
  sdkName: 'attendance.v1.approvalInfo.process',
  path: '/open-apis/attendance/v1/approval_infos/process',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-假勤审批-通知审批状态更新-对于只使用飞书考勤系统而未使用飞书审批系统的企业，可以通过该接口更新写入飞书考勤系统中的三方系统审批状态，例如请假、加班、外出、出差、补卡等审批，状态包括通过、不通过、撤销等',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      approval_id: z
        .string()
        .describe(
          '审批实例 ID，获取方式：1） 2） 3）',
        ),
      approval_type: z
        .string()
        .describe('审批类型- `leave`：请假- `out`：外出- `overtime`：加班- `trip`：出差- `remedy`：补卡'),
      status: z
        .number()
        .describe(
          '审批状态- `1`：不通过- `2`：通过- `4`：撤销**注意**- **请假、外出、加班、出差**只支持传**撤销**- **补卡**支持传**不通过、通过和撤销**',
        ),
    }),
  },
};
export const attendanceV1ArchiveRuleDelReport = {
  project: 'attendance',
  name: 'attendance.v1.archiveRule.delReport',
  sdkName: 'attendance.v1.archiveRule.delReport',
  path: '/open-apis/attendance/v1/archive_rule/del_report',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-考勤打卡-归档报表-删除归档报表行数据-按月份、用户和归档规则ID直接删除归档报表行数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      month: z.string().describe('月份，格式yyyyMM'),
      operator_id: z.string().describe('操作者ID，对应employee_type'),
      archive_rule_id: z
        .string()
        .describe(
          '归档规则id，可根据获得',
        ),
      user_ids: z.array(z.string()).describe('用户id，对应employee_type').optional(),
    }),
    params: z.object({
      employee_type: z
        .string()
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用* `employee_id `：员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID* `employee_no`：员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const attendanceV1ArchiveRuleList = {
  project: 'attendance',
  name: 'attendance.v1.archiveRule.list',
  sdkName: 'attendance.v1.archiveRule.list',
  path: '/open-apis/attendance/v1/archive_rule',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-归档报表-查询所有归档规则-查询所有归档规则，对应后台假勤管理-考勤统计-报表-功能',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小，必填参数').optional(),
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
export const attendanceV1ArchiveRuleUploadReport = {
  project: 'attendance',
  name: 'attendance.v1.archiveRule.uploadReport',
  sdkName: 'attendance.v1.archiveRule.uploadReport',
  path: '/open-apis/attendance/v1/archive_rule/upload_report',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-归档报表-写入归档报表结果-写入归档报表结果，对应假勤管理-考勤统计-报表-页签，点击报表名称进入后的导入功能。可以将数据直接写入归档报表',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      month: z.string().describe('月份，格式为yyyyMM'),
      operator_id: z.string().describe('操作者ID，对应employee_type'),
      archive_report_datas: z
        .array(
          z.object({
            member_id: z.string().describe('用户ID，对应employee_type'),
            start_time: z.string().describe('考勤开始时间，格式为yyyyMMdd'),
            end_time: z.string().describe('考勤结束时间，格式为yyyyMMdd'),
            field_datas: z
              .array(
                z.object({
                  code: z
                    .string()
                    .describe(
                      '字段编码，可根据 获取',
                    ),
                  value: z.string().describe('字段结果值').optional(),
                }),
              )
              .describe('字段结果(不超过200个)')
              .optional(),
          }),
        )
        .describe('归档报表内容(不超过50个)')
        .optional(),
      archive_rule_id: z
        .string()
        .describe(
          '归档规则id，可根据获得',
        ),
    }),
    params: z.object({
      employee_type: z
        .string()
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用* `employee_id `：员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID* `employee_no`：员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const attendanceV1ArchiveRuleUserStatsFieldsQuery = {
  project: 'attendance',
  name: 'attendance.v1.archiveRule.userStatsFieldsQuery',
  sdkName: 'attendance.v1.archiveRule.userStatsFieldsQuery',
  path: '/open-apis/attendance/v1/archive_rule/user_stats_fields_query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-归档报表-查询归档报表表头-查询归档报表表头，对应后台假勤管理-考勤统计-报表-中一个归档报表的表头信息。归档报表支持引用系统报表，可设置归档时间和数据归档周期，并且支持根据部门/人员、国家/地区、人员类型、工作地点、职级、序列、职务进行人员圈选',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      locale: z.string().describe('语言类型。默认为zh。可选值有：* `en`：英语* `ja`：日语* `zh`：中文').optional(),
      month: z.string().describe('月份，日期格式为yyyyMM'),
      archive_rule_id: z
        .string()
        .describe(
          '归档规则id，可根据获得',
        ),
      operator_id: z.string().describe('操作者id，对应employee_type'),
    }),
    params: z.object({
      employee_type: z
        .string()
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用* `employee_id `：员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID* `employee_no`：员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const attendanceV1GroupCreate = {
  project: 'attendance',
  name: 'attendance.v1.group.create',
  sdkName: 'attendance.v1.group.create',
  path: '/open-apis/attendance/v1/groups',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤组管理-创建或修改考勤组-考勤组，是对部门或者员工在某个特定场所及特定时间段内的出勤情况（包括上下班、迟到、早退、病假、婚假、丧假、公休、工作时间、加班情况等）的一种规则设定。通过设置考勤组，可以从部门、员工两个维度，来设定考勤方式、考勤时间、考勤地点等考勤规则。对应功能同设置-假勤设置-的“新建”功能',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      group: z
        .object({
          group_id: z
            .string()
            .describe(
              '考勤组 ID（仅修改时提供）， 需要从或接口中获取 groupId。如果不填的话，会创建新的考勤组',
            )
            .optional(),
          group_name: z.string().describe('考勤组名称'),
          time_zone: z.string().describe('时区'),
          bind_dept_ids: z
            .array(z.string().describe('参加考勤的部门id列表'))
            .describe('绑定的部门 ID（与「need_punch_members」同时使用时，以当前字段为准）。对应dept_type')
            .optional(),
          except_dept_ids: z
            .array(z.string().describe('无需考勤的部门id列表'))
            .describe('排除的部门 ID（该字段已下线）')
            .optional(),
          bind_user_ids: z
            .array(z.string().describe('参加考勤的人员id列表'))
            .describe('绑定的用户 ID（与「need_punch_members」同时使用时，以当前字段为准），对应employee_type')
            .optional(),
          except_user_ids: z
            .array(z.string().describe('参加考勤的人员id列表'))
            .describe('排除的用户 ID（该字段已下线）')
            .optional(),
          group_leader_ids: z
            .array(z.string().describe('考勤组主负责人id列表'))
            .describe('考勤主负责人 ID 列表，必选字段（需至少拥有考勤组管理员权限），对应employee_type'),
          sub_group_leader_ids: z
            .array(z.string().describe('考勤组子负责人id列表'))
            .describe('考勤子负责人 ID 列表，对应employee_type')
            .optional(),
          allow_out_punch: z.boolean().describe('是否允许外勤打卡，默认为空').optional(),
          out_punch_need_approval: z
            .boolean()
            .describe('外勤打卡需审批（需要允许外勤打卡才能设置生效），默认为空')
            .optional(),
          out_punch_need_remark: z
            .boolean()
            .describe('外勤打卡需填写备注（需要允许外勤打卡才能设置生效），默认为空')
            .optional(),
          out_punch_need_photo: z
            .boolean()
            .describe('外勤打卡需拍照（需要允许外勤打卡才能设置生效），默认为空')
            .optional(),
          out_punch_allowed_hide_addr: z
            .boolean()
            .describe('外勤打卡允许员工隐藏详细地址（需要允许外勤打卡才能设置生效），默认为空')
            .optional(),
          allow_pc_punch: z.boolean().describe('是否允许 PC 端打卡，默认为空').optional(),
          allow_remedy: z.boolean().describe('是否限制补卡，默认为空').optional(),
          remedy_limit: z.boolean().describe('是否限制补卡次数，默认为空').optional(),
          remedy_limit_count: z.number().describe('补卡次数，默认为空').optional(),
          remedy_date_limit: z.boolean().describe('是否限制补卡时间，默认为空').optional(),
          remedy_date_num: z.number().describe('补卡时间，几天内补卡，默认为空').optional(),
          allow_remedy_type_lack: z.boolean().describe('允许缺卡补卡（需要允许补卡才能设置生效），默认为空').optional(),
          allow_remedy_type_late: z.boolean().describe('允许迟到补卡（需要允许补卡才能设置生效），默认为空').optional(),
          allow_remedy_type_early: z
            .boolean()
            .describe('允许早退补卡（需要允许补卡才能设置生效），默认为空')
            .optional(),
          allow_remedy_type_normal: z
            .boolean()
            .describe('允许正常补卡（需要允许补卡才能设置生效），默认为空')
            .optional(),
          show_cumulative_time: z.boolean().describe('是否展示累计时长，默认为空').optional(),
          show_over_time: z.boolean().describe('是否展示加班时长，默认为空').optional(),
          hide_staff_punch_time: z.boolean().describe('是否隐藏员工打卡详情，默认为空').optional(),
          face_punch: z.boolean().describe('是否开启人脸识别打卡，默认为空').optional(),
          face_punch_cfg: z
            .number()
            .describe(
              '人脸识别打卡规则，默认为空**可选值有：*** 1：每次打卡均需人脸识别* 2：疑似作弊打卡时需要人脸识别',
            )
            .optional(),
          face_live_need_action: z
            .boolean()
            .describe(
              '人脸打卡规则，默认为空**可选值有：*** false：表示开启活体验证 * true：表示动作验证，仅在 face_punch_cfg = 1 时有效',
            )
            .optional(),
          face_downgrade: z.boolean().describe('人脸识别失败时是否允许普通拍照打卡，默认为空').optional(),
          replace_basic_pic: z.boolean().describe('人脸识别失败时是否允许替换基准图片，默认为空').optional(),
          machines: z
            .array(
              z.object({
                machine_sn: z.string().describe('考勤机序列号'),
                machine_name: z.string().describe('考勤机名称'),
              }),
            )
            .describe('考勤机列表')
            .optional(),
          gps_range: z.number().describe('GPS 打卡的有效范围（历史无效字段）').optional(),
          locations: z
            .array(
              z.object({
                location_name: z.string().describe('地址名称'),
                location_type: z.number().describe('地址类型**可选值有：*** 1：GPS* 2：Wi-Fi* 8：IP'),
                latitude: z.number().describe('地址纬度').optional(),
                longitude: z.number().describe('地址经度').optional(),
                ssid: z.string().describe('Wi-Fi 名称').optional(),
                bssid: z.string().describe('Wi-Fi 的 MAC 地址').optional(),
                map_type: z.number().describe('地图类型，1：高德， 2：谷歌').optional(),
                address: z.string().describe('地址名称').optional(),
                ip: z.string().describe('IP 地址').optional(),
                feature: z.string().describe('额外信息，例如：运营商信息').optional(),
                gps_range: z.number().describe('GPS 打卡的有效范围（历史无效字段）').optional(),
              }),
            )
            .describe('地址列表（仅追加，不会覆盖之前的列表）')
            .optional(),
          group_type: z.number().describe('考勤类型**可选值有：*** 1：固定班制* 2：排班制* 3：自由班制'),
          punch_day_shift_ids: z
            .array(z.string())
            .describe(
              '班次 ID 列表。当考勤类型参数（group_type）设置为固定班制时，必须填够 7 个（从周一至周日）。当考勤类型参数（group_type）设置为排班制或自由班制时，请传入空数组。班次 ID 可以通过 和 获取。休息日填0',
            ),
          free_punch_cfg: z
            .object({
              free_start_time: z
                .string()
                .describe('自由班制打卡开始时间，格式为x点x分，注意这里小时如果小于10点，是不需要补零的'),
              free_end_time: z
                .string()
                .describe('自由班制打卡结束时间，格式为x点x分，注意这里小时如果小于10点，是不需要补零的'),
              punch_day: z.number().describe('打卡的时间，为 7 位数字，每一位依次代表周一到周日，0 为不上班，1 为上班'),
              work_day_no_punch_as_lack: z.boolean().describe('工作日不打卡是否记为缺卡，默认为空').optional(),
              work_hours_demand: z.boolean().describe('工作日出勤是否需满足时长要求，默认为空').optional(),
              work_hours: z.number().describe('每日工作时长（分钟），范围[0,1440]').optional(),
            })
            .describe('配置自由班制')
            .optional(),
          calendar_id: z
            .number()
            .describe(
              '国家日历 ID**可选值有：*** 0：不根据国家日历排休* 1：中国大陆* 2：美国* 3：日本* 4：印度* 5：新加坡',
            ),
          need_punch_special_days: z
            .array(
              z.object({
                punch_day: z.number().describe('打卡日期，格式为yyyyMMdd'),
                shift_id: z
                  .string()
                  .describe(
                    '班次 ID，可根据 和 获得',
                  ),
              }),
            )
            .describe('必须打卡的特殊日期')
            .optional(),
          no_need_punch_special_days: z
            .array(
              z.object({
                punch_day: z.number().describe('打卡日期，格式为yyyyMMdd'),
                shift_id: z
                  .string()
                  .describe(
                    '班次 ID，可根据 和 获得',
                  ),
              }),
            )
            .describe('无需打卡的特殊日期')
            .optional(),
          work_day_no_punch_as_lack: z.boolean().describe('自由班制下工作日不打卡是否记为缺卡，默认为空').optional(),
          effect_now: z.boolean().describe('是否立即生效，默认 false').optional(),
          remedy_period_type: z.number().describe('补卡周期类型* 1：按月* 2：自定义').optional(),
          remedy_period_custom_date: z.number().describe('补卡自定义周期起始日期，范围0-28号').optional(),
          punch_type: z
            .number()
            .describe(
              '打卡类型。位运算，即如需设置 1 和 2 两种打卡类型，则需要传入加和值 3。**可选值**：* 1：GPS 打卡* 2：Wi-Fi 打卡* 4：考勤机打卡* 8：IP 打卡',
            )
            .optional(),
          rest_clockIn_need_approval: z
            .boolean()
            .describe(
              '休息日打卡需审批。当设置 `rest_clockIn_need_approval=true` 时，休息日一天开始时间会被重置为 4:00。默认为空',
            )
            .optional(),
          clockIn_need_photo: z.boolean().describe('每次打卡均需拍照，默认为空').optional(),
          member_status_change: z
            .object({
              onboarding_on_no_need_punch: z.boolean().describe('是否入职日上班无需打卡，默认为空').optional(),
              onboarding_off_no_need_punch: z.boolean().describe('是否入职日下班无需打卡，默认为空').optional(),
              offboarding_on_no_need_punch: z.boolean().describe('是否离职日上班无需打卡，默认为空').optional(),
              offboarding_off_no_need_punch: z.boolean().describe('是否离职日下班无需打卡，默认为空').optional(),
            })
            .describe('人员异动打卡设置')
            .optional(),
          leave_need_punch: z.boolean().describe('请假离岗或返岗是否需打卡，默认为空').optional(),
          leave_need_punch_cfg: z
            .object({
              late_minutes_as_late: z.number().describe('晚到超过多久记为迟到').optional(),
              late_minutes_as_lack: z.number().describe('晚到超过多久记为缺卡').optional(),
              early_minutes_as_early: z.number().describe('早走超过多久记为早退').optional(),
              early_minutes_as_lack: z.number().describe('早走超过多久记为缺卡').optional(),
            })
            .describe('请假离岗或返岗打卡规则，单位：分钟')
            .optional(),
          go_out_need_punch: z.number().describe('外出期间是否需打卡，默认为空').optional(),
          go_out_need_punch_cfg: z
            .object({
              late_minutes_as_late: z.number().describe('晚到超过多久记为迟到').optional(),
              late_minutes_as_lack: z.number().describe('晚到超过多久记为缺卡').optional(),
              early_minutes_as_early: z.number().describe('早走超过多久记为早退').optional(),
              early_minutes_as_lack: z.number().describe('早走超过多久记为缺卡').optional(),
            })
            .describe('外出期间打卡规则，单位：分钟')
            .optional(),
          travel_need_punch: z.number().describe('出差期间是否需打卡，默认为空').optional(),
          travel_need_punch_cfg: z
            .object({
              late_minutes_as_late: z.number().describe('晚到超过多久记为迟到').optional(),
              late_minutes_as_lack: z.number().describe('晚到超过多久记为缺卡').optional(),
              early_minutes_as_early: z.number().describe('早走超过多久记为早退').optional(),
              early_minutes_as_lack: z.number().describe('早走超过多久记为缺卡').optional(),
            })
            .describe('出差期间打卡规则，单位：分钟')
            .optional(),
          need_punch_members: z
            .array(
              z.object({
                rule_scope_type: z.number().describe('圈人方式：* `0`：无 * `1`：全部 * `2`：自定义').optional(),
                scope_group_list: z
                  .object({
                    scope_value_type: z
                      .number()
                      .describe(
                        '**类型**：* 1: 部门* 2:人员* 3: 国家地区* 4: 员工类型* 5: 工作城市* 6: 职级* 7: 序列* 8: 职务（企业版）* 9: 工时制度（企业版）* 100: 自定义字段（企业版）',
                      )
                      .optional(),
                    operation_type: z
                      .number()
                      .describe(
                        '范围类型（是否包含）* 1: 包含* 2: 不包含* 3: 相等* 4: 小于等于* 5: 大于等于* 6: 大于* 7: 小于* 8: 不相等',
                      )
                      .optional(),
                    right: z
                      .array(
                        z.object({
                          key: z.string().describe('标识Key').optional(),
                          name: z.string().describe('名称').optional(),
                        }),
                      )
                      .describe('如果是人员/部门类型 不需要使用该字段')
                      .optional(),
                    member_ids: z
                      .array(z.string())
                      .describe('部门/人员 ID 列表（根据 scope_value_type 判断为部门或人员）')
                      .optional(),
                    custom_field_ID: z
                      .string()
                      .describe('企业版自定义字段唯一键 ID, 需要从飞书人事获取（暂不支持）')
                      .optional(),
                    custom_field_obj_type: z
                      .string()
                      .describe(
                        '企业版自定义字段对象类型（暂不支持）* "Employment": 主数据对象，员工雇佣信息 * "Person": 主数据对象，个人',
                      )
                      .optional(),
                  })
                  .describe('圈人规则列表')
                  .optional(),
              }),
            )
            .describe('需要打卡的人员集合（仅当不传「bind_dept_ids」和「bind_user_ids」时，才会使用该字段）')
            .optional(),
          no_need_punch_members: z
            .array(
              z.object({
                rule_scope_type: z.number().describe('圈人方式：* `0`：无 * `1`：全部 * `2`：自定义').optional(),
                scope_group_list: z
                  .object({
                    scope_value_type: z
                      .number()
                      .describe(
                        '**类型**：* 1: 部门* 2:人员* 3: 国家地区* 4: 员工类型* 5: 工作城市* 6: 职级* 7: 序列* 8: 职务（企业版）* 9: 工时制度（企业版）* 100: 自定义字段（企业版）',
                      )
                      .optional(),
                    operation_type: z
                      .number()
                      .describe(
                        '范围类型（是否包含）* 1: 包含* 2: 不包含* 3: 相等* 4: 小于等于* 5: 大于等于* 6: 大于* 7: 小于* 8: 不相等',
                      )
                      .optional(),
                    right: z
                      .array(
                        z.object({
                          key: z.string().describe('标识Key').optional(),
                          name: z.string().describe('名称').optional(),
                        }),
                      )
                      .describe('如果是人员/部门类型 不需要使用该字段')
                      .optional(),
                    member_ids: z
                      .array(z.string())
                      .describe('部门/人员 ID 列表（根据 scope_value_type 判断为部门或人员）')
                      .optional(),
                    custom_field_ID: z
                      .string()
                      .describe('企业版自定义字段唯一键 ID, 需要从飞书人事获取（暂不支持）')
                      .optional(),
                    custom_field_obj_type: z
                      .string()
                      .describe(
                        '企业版自定义字段对象类型（暂不支持）* "Employment": 主数据对象，员工雇佣信息 * "Person": 主数据对象，个人',
                      )
                      .optional(),
                  })
                  .describe('圈人规则列表')
                  .optional(),
              }),
            )
            .describe(
              '无需打卡的人员集合（仅当不传「bind_default_dept_ids」和「bind_default_user_ids」时，才会使用该字段）',
            )
            .optional(),
          save_auto_changes: z
            .boolean()
            .describe(
              '是否允许保存有冲突人员的考勤组。如果 true，则冲突人员将被自动拉入到当前设置的考勤组中，并从原考勤组中移除；如果 false，则需手动调整冲突人员。默认为 false',
            )
            .optional(),
          org_change_auto_adjust: z
            .boolean()
            .describe('当有新员工入职或人员异动，符合条件的人员是否自动加入考勤组。默认为空')
            .optional(),
          bind_default_dept_ids: z
            .array(z.string().describe('默认出勤的部门id列表'))
            .describe(
              '参与无需打卡的部门 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应dept_type',
            )
            .optional(),
          bind_default_user_ids: z
            .array(z.string().describe('默认出勤的用户ID列表'))
            .describe(
              '参与无需打卡的人员 ID 列表（与「no_need_punch_members」同时使用时，以当前字段为准），对应employee_type',
            )
            .optional(),
        })
        .describe('考勤组信息'),
      operator_id: z
        .string()
        .describe(
          '操作人uid，对应employee_type，如果您未操作，则此字段为必填字段',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
      dept_type: z
        .literal('open_id')
        .describe(
          '部门 ID 的类型 Options:open_id(暂时只支持部门的 openid。具体概念请参考中的open_department_id)',
        ),
    }),
  },
};
export const attendanceV1GroupDelete = {
  project: 'attendance',
  name: 'attendance.v1.group.delete',
  sdkName: 'attendance.v1.group.delete',
  path: '/open-apis/attendance/v1/groups/:group_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-考勤打卡-考勤组管理-删除考勤组-通过考勤组 ID 删除考勤组。对应设置-假勤设置-操作列的删除功能',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      group_id: z
        .string()
        .describe(
          '考勤组 ID，获取方式：1） 2） 3）',
        ),
    }),
  },
};
export const attendanceV1GroupGet = {
  project: 'attendance',
  name: 'attendance.v1.group.get',
  sdkName: 'attendance.v1.group.get',
  path: '/open-apis/attendance/v1/groups/:group_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-考勤组管理-按 ID 查询考勤组-通过考勤组 ID 获取考勤组详情。包含基本信息、考勤班次、考勤方式、考勤设置信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体和响应体中的 user_id 和 creator_id 的员工id类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
      dept_type: z
        .literal('open_id')
        .describe(
          '部门 ID 的类型 Options:open_id(暂时只支持部门的 openid。具体概念请参考中的open_department_id)',
        ),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '考勤组 ID，获取方式：1） 2） 3）',
        ),
    }),
  },
};
export const attendanceV1GroupList = {
  project: 'attendance',
  name: 'attendance.v1.group.list',
  sdkName: 'attendance.v1.group.list',
  path: '/open-apis/attendance/v1/groups',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-考勤组管理-查询所有考勤组-翻页获取所有考勤组列表。列表中的数据为考勤组信息，字段包含考勤组名称和考勤组id',
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
    }),
  },
};
export const attendanceV1GroupListUser = {
  project: 'attendance',
  name: 'attendance.v1.group.listUser',
  sdkName: 'attendance.v1.group.listUser',
  path: '/open-apis/attendance/v1/groups/:group_id/list_user',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-考勤打卡-考勤组管理-查询考勤组下所有成员-查询指定考勤组下的所有成员',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      employee_type: z
        .string()
        .describe(
          '响应体中 user_id 的员工 ID 类型。如果没有后台管理权限，可使用<b>可选值有</b>：1. employee_id：员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID2. employee_no：员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号',
        ),
      dept_type: z
        .string()
        .describe(
          '响应体中 department_ids 的部门 ID 的类型<b>可选值有</b>：1. open_id：暂时只支持部门的 openid。具体概念请参考中的open_department_id',
        ),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      member_clock_type: z
        .number()
        .describe(
          '查询的考勤组成员的打卡类型<b>可选值有</b>：<ul><li>0：全部打卡类型</li><li>1：需要打卡类型</li><li>2：无需打卡类型</li></ul>',
        ),
    }),
    path: z.object({
      group_id: z
        .string()
        .describe(
          '考勤组 ID，获取方式：1） 2） 3）',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const attendanceV1GroupSearch = {
  project: 'attendance',
  name: 'attendance.v1.group.search',
  sdkName: 'attendance.v1.group.search',
  path: '/open-apis/attendance/v1/groups/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤组管理-按名称查询考勤组-按考勤组名称查询考勤组摘要信息。查询条件支持名称精确匹配和模糊匹配两种方式。查询结果按考勤组修改时间 desc 排序，且最大记录数为 10 条。对应页面设置-假勤设置-的名称搜索功能',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ group_name: z.string().describe('考勤组名称') }),
  },
};
export const attendanceV1LeaveAccrualRecordPatch = {
  project: 'attendance',
  name: 'attendance.v1.leaveAccrualRecord.patch',
  sdkName: 'attendance.v1.leaveAccrualRecord.patch',
  path: '/open-apis/attendance/v1/leave_accrual_record/:leave_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-考勤打卡-休假发放记录-修改发放记录-更新发放记录的发放数量和失效日期，对应假勤管理-休假管理-',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      leave_granting_record_id: z
        .string()
        .describe(
          '发放记录的唯一ID，可通过',
        ),
      employment_id: z.string().describe('员工ID，类型对应user_id_type'),
      leave_type_id: z
        .string()
        .describe(
          '假期类型ID，可通过获取',
        ),
      reason: z
        .array(z.object({ lang: z.string().describe('语言码'), value: z.string().describe('语言码对应的文本') }))
        .describe('修改发放记录原因'),
      time_offset: z.number().describe('时间偏移，东八区：480 8*60').optional(),
      expiration_date: z.string().describe('失效日期，格式"2020-01-01"').optional(),
      quantity: z.string().describe('修改发放数量').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      leave_id: z
        .string()
        .describe(
          '假期类型ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const attendanceV1LeaveEmployExpireRecordGet = {
  project: 'attendance',
  name: 'attendance.v1.leaveEmployExpireRecord.get',
  sdkName: 'attendance.v1.leaveEmployExpireRecord.get',
  path: '/open-apis/attendance/v1/leave_employ_expire_records/:leave_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-休假获取过期发放记录-通过过期时间获取发放记录-只能获取到对应时间段过期的发放记录',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      employment_id: z.string().describe('员工ID，与user_id_type保持一致'),
      leave_type_id: z
        .string()
        .describe(
          '假期类型ID，可通过获取',
        ),
      start_expiration_date: z.string().describe('失效最早日期，格式为yyyy-MM-dd'),
      end_expiration_date: z.string().describe('失效最晚日期，格式为yyyy-MM-dd'),
      time_offset: z.number().describe('时间偏移，东八区：480 8*60， 如果没有这个参数，默认东八区').optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id', 'people_corehr_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      leave_id: z
        .string()
        .describe(
          '假期类型ID，可通过获取',
        )
        .optional(),
    }),
  },
};
export const attendanceV1ShiftCreate = {
  project: 'attendance',
  name: 'attendance.v1.shift.create',
  sdkName: 'attendance.v1.shift.create',
  path: '/open-apis/attendance/v1/shifts',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤班次-创建班次-班次是描述一次考勤任务时间规则的统称，比如一天打多少次卡，每次卡的上下班时间，晚到多长时间算迟到，晚到多长时间算缺卡等。在假勤设置-中点击班次名称可以进行班次详情查看。如果入参中传入了班次id，那么支持编辑班次的能力',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      shift_name: z.string().describe('班次名称，不可重复'),
      punch_times: z.number().describe('打卡次数（历史字段，已无用，以punch_time_rule为准）'),
      sub_shift_leader_ids: z
        .array(z.string().describe('排班组子负责人id列表'))
        .describe('班次负责人，与employee_type类型对应')
        .optional(),
      is_flexible: z.boolean().describe('是否弹性打卡，默认为false，不开启').optional(),
      flexible_minutes: z
        .number()
        .describe(
          '弹性打卡时间，单位：分钟，设置【上班最多可晚到】与【下班最多可早走】时间。仅当未设置 flexible_rule 参数时，该参数生效。如果设置了 flexible_rule 参数，则该参数不生效',
        )
        .optional(),
      flexible_rule: z
        .array(
          z.object({
            flexible_early_minutes: z
              .number()
              .describe('下班最多可早走，单位：分钟（上班早到几分钟，下班可早走几分钟）'),
            flexible_late_minutes: z
              .number()
              .describe('上班最多可晚到，单位：分钟（上班晚到几分钟，下班须晚走几分钟）'),
          }),
        )
        .describe('弹性打卡时间设置')
        .optional(),
      no_need_off: z.boolean().describe('true为不需要打下班卡。默认为false，需要下班打卡').optional(),
      punch_time_rule: z
        .array(
          z.object({
            on_time: z.string().describe('上班时间'),
            off_time: z
              .string()
              .describe(
                '下班时间。如果下班时间跨天，则需要在 24 小时的基础上累加时间。例如，第二天凌晨 2 点取值为 26:00',
              ),
            late_minutes_as_late: z.number().describe('晚到多久记为迟到。单位：分钟'),
            late_minutes_as_lack: z.number().describe('晚到多久记为缺卡。单位：分钟'),
            on_advance_minutes: z.number().describe('最早多久可打上班卡。最大值为 720。单位：分钟'),
            early_minutes_as_early: z.number().describe('早退多久记为早退。单位：分钟'),
            early_minutes_as_lack: z.number().describe('早退多久记为缺卡。单位：分钟'),
            off_delay_minutes: z.number().describe('最晚多久可打下班卡。最大值为 960。单位：分钟'),
            late_minutes_as_serious_late: z.number().describe('晚到多久记为严重迟到。单位：分钟').optional(),
            no_need_on: z
              .boolean()
              .describe('true为不需要打上班卡，这里需要特别注意，第一段打卡规则须为false。后续可按需配置')
              .optional(),
            no_need_off: z
              .boolean()
              .describe('true为不需要打下班卡。默认为false，需要下班打卡（优先级高于data.shift.no_need_off）')
              .optional(),
          }),
        )
        .describe('打卡规则'),
      late_off_late_on_rule: z
        .array(
          z.object({
            late_off_minutes: z.number().describe('晚走多久。单位：分钟'),
            late_on_minutes: z.number().describe('晚到多久。单位：分钟'),
          }),
        )
        .describe('晚走晚到规则（仅飞书人事企业版可用）')
        .optional(),
      rest_time_rule: z
        .array(
          z.object({
            rest_begin_time: z.string().describe('休息开始'),
            rest_end_time: z.string().describe('休息结束'),
          }),
        )
        .describe('休息规则')
        .optional(),
      overtime_rule: z
        .array(
          z.object({ on_overtime: z.string().describe('开始时间'), off_overtime: z.string().describe('结束时间') }),
        )
        .describe('加班时段（仅飞书人事企业版可用）')
        .optional(),
      day_type: z
        .number()
        .describe('日期类型，【是否弹性打卡 = ture】时，不可设置为“休息日” 可选值：1：工作日 2：休息日。默认值：1')
        .optional(),
      overtime_rest_time_rule: z
        .array(
          z.object({
            rest_begin_time: z.string().describe('休息开始'),
            rest_end_time: z.string().describe('休息结束'),
          }),
        )
        .describe('班外休息规则')
        .optional(),
      late_minutes_as_serious_late: z
        .number()
        .describe(
          '晚到多久记为严重迟到。单位：分钟（优先级高于data.shift.punch_time_rule.late_minutes_as_serious_late）',
        )
        .optional(),
      shift_middle_time_rule: z
        .object({
          middle_time_type: z
            .number()
            .describe(
              '半天分割类型 Options:0(DefaultWithRest 按全天班次时长（含休息）的中点分割),1(DefaultWithoutRest 按全天班次时长（不含休息）的中点分割),2(BaseInRest 按休息时间分割),3(BaseInFixed 按固定时间点分割)',
            )
            .optional(),
          fixed_middle_time: z.string().describe('固定分割时间点（middle_time_type 为 3 时有效）').optional(),
        })
        .describe('半天分割规则（仅飞书人事企业版可用）')
        .optional(),
      shift_attendance_time_config: z
        .object({
          attendance_time: z.number().describe('应出勤时长').optional(),
          on_attendance_time: z.number().describe('上半天应出勤时长').optional(),
          off_attendance_time: z.number().describe('下半天应出勤时长').optional(),
        })
        .describe('应出勤配置（灰度中，暂未开放）')
        .optional(),
      late_off_late_on_setting: z
        .object({
          late_off_base_on_time_type: z
            .number()
            .describe('当日晚走时间计算规则 Options:0(FlexibleType 弹性规则),1(FixedType 固定规则)')
            .optional(),
          late_on_base_on_time_type: z
            .number()
            .describe('次日晚到时间计算规则 Options:0(FixedType 固定规则),1(FlexibleType 弹性规则)')
            .optional(),
        })
        .describe('晚走次日晚到配置规则')
        .optional(),
      id: z
        .string()
        .describe(
          '班次id(更新班次时需要传递)，获取方式：1） 2）',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID，或者获取的userid。),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        )
        .optional(),
    }),
  },
};
export const attendanceV1ShiftDelete = {
  project: 'attendance',
  name: 'attendance.v1.shift.delete',
  sdkName: 'attendance.v1.shift.delete',
  path: '/open-apis/attendance/v1/shifts/:shift_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-考勤打卡-考勤班次-删除班次-通过班次 ID 删除班次。对应功能为假勤设置-班次列表中操作栏的删除按钮',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      shift_id: z
        .string()
        .describe(
          '班次 ID，获取方式：1） 2）',
        ),
    }),
  },
};
export const attendanceV1ShiftGet = {
  project: 'attendance',
  name: 'attendance.v1.shift.get',
  sdkName: 'attendance.v1.shift.get',
  path: '/open-apis/attendance/v1/shifts/:shift_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-考勤班次-按 ID 查询班次-通过班次 ID 获取班次详情。对应功能为假勤设置-班次列表中的具体班次，班次信息可以点击班次名称查看',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      shift_id: z
        .string()
        .describe(
          '班次 ID，获取方式：1） 2）',
        ),
    }),
  },
};
export const attendanceV1ShiftList = {
  project: 'attendance',
  name: 'attendance.v1.shift.list',
  sdkName: 'attendance.v1.shift.list',
  path: '/open-apis/attendance/v1/shifts',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-考勤班次-查询所有班次-飞书人事管理后台中假勤设置-中的翻页查询所有班次功能，展示班次名称、打卡规则、弹性班次规则、休息规则等',
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
    }),
  },
};
export const attendanceV1ShiftQuery = {
  project: 'attendance',
  name: 'attendance.v1.shift.query',
  sdkName: 'attendance.v1.shift.query',
  path: '/open-apis/attendance/v1/shifts/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤班次-按名称查询班次-飞书人事管理后台中假勤设置-中的搜索班次名称功能，展示班次名称、打卡规则、弹性班次规则、休息规则等',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ shift_name: z.string().describe('班次名称，支持模糊匹配') }),
  },
};
export const attendanceV1UserApprovalCreate = {
  project: 'attendance',
  name: 'attendance.v1.userApproval.create',
  sdkName: 'attendance.v1.userApproval.create',
  path: '/open-apis/attendance/v1/user_approvals',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-假勤审批-写入审批结果-由于部分企业使用的是自己的审批系统，而不是飞书审批系统，因此员工的请假、加班等数据无法流入到飞书考勤系统中，导致员工在请假时间段内依然收到打卡提醒，并且被记为缺卡。对于这些只使用飞书考勤系统，而未使用飞书审批系统的企业，可以通过考勤开放接口的形式，将三方审批结果数据回写到飞书考勤系统中',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_approval: z
        .object({
          user_id: z.string().describe('审批提交人 ID。传入的ID类型需要与employee_type的取值一致'),
          date: z.string().describe('审批作用日期，格式为yyyyMMdd'),
          outs: z
            .array(
              z.object({
                uniq_id: z
                  .string()
                  .describe(
                    '外出类型唯一 ID，代表一种外出类型，长度小于 14* 如何获取？可以选择填入三方的外出类型id。如市内外出、市外外出的id',
                  ),
                unit: z
                  .number()
                  .describe('外出时长单位 Options:1(Day 天),2(Hour 小时),3(HalfDay 半天),4(HalfHour 半小时)'),
                interval: z.number().describe('关联审批单外出时长，单位为秒，与unit无关'),
                start_time: z.string().describe('开始时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                end_time: z.string().describe('结束时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                i18n_names: z
                  .object({
                    ch: z.string().describe('中文描述').optional(),
                    en: z.string().describe('英语描述').optional(),
                    ja: z.string().describe('日语描述').optional(),
                  })
                  .describe(
                    '外出多语言展示，格式为 map，key 为 ["ch"、"en"、"ja"]，其中 ch 代表中文、en 代表英语、ja 代表日语',
                  ),
                default_locale: z
                  .string()
                  .describe(
                    '默认语言类型，由于飞书客户端支持中、英、日三种语言，当用户切换语言时，如果假期名称没有所对应的语言，会使用默认语言的名称',
                  ),
                reason: z.string().describe('外出理由'),
                idempotent_id: z
                  .string()
                  .describe('外出记录的唯一幂等键，用于避免外出记录重复创建，可以填入三方的外出记录id')
                  .optional(),
                correct_process_id: z
                  .array(z.string())
                  .describe('更正流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                cancel_process_id: z
                  .array(z.string())
                  .describe('撤销流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                process_id: z
                  .array(z.string())
                  .describe('发起流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
              }),
            )
            .describe('外出信息')
            .optional(),
          leaves: z
            .array(
              z.object({
                uniq_id: z.string().describe('审批实例id').optional(),
                unit: z
                  .number()
                  .describe('假期时长单位 Options:1(Day 天),2(Hour 小时),3(HalfDay 半天),4(HalfHour 半小时)'),
                interval: z.number().describe('关联审批单假期时长，单位为秒，与unit无关'),
                start_time: z.string().describe('开始时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                end_time: z.string().describe('结束时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                i18n_names: z
                  .object({
                    ch: z.string().describe('中文描述').optional(),
                    en: z.string().describe('英语描述').optional(),
                    ja: z.string().describe('日语描述').optional(),
                  })
                  .describe(
                    '假期多语言展示，格式为 map，key 为 ["ch"、"en"、"ja"]，其中 ch 代表中文、en 代表英语、ja 代表日语',
                  ),
                default_locale: z
                  .enum(['ch', 'en', 'ja'])
                  .describe(
                    '默认语言类型，由于飞书客户端支持中、英、日三种语言，当用户切换语言时，如果假期名称没有所对应的语言，会使用默认语言的名称 Options:ch(中文),en(英文),ja(日文)',
                  ),
                reason: z.string().describe('请假理由，必选字段'),
                idempotent_id: z
                  .string()
                  .describe('请假记录的唯一幂等键，用于避免请假记录重复创建，可以填入三方的请假记录id')
                  .optional(),
              }),
            )
            .describe('请假信息')
            .optional(),
          overtime_works: z
            .array(
              z.object({
                duration: z
                  .number()
                  .describe(
                    '加班时长，如需使用此字段进行加班时长计算，请联系开通。默认采用start_time和end_time计算',
                  ),
                unit: z
                  .number()
                  .describe('加班时长单位 Options:1(Day 天),2(Hour 小时),3(HalfDay 半天),4(HalfHour 半小时)'),
                category: z
                  .number()
                  .describe('加班日期类型 Options:1(Workday 工作日),2(Weekend 休息日),3(Holiday 节假日)'),
                type: z
                  .number()
                  .describe(
                    '加班规则类型 Options:0(None 仅记录),1(DaysOff 调休),2(Fee 加班费),3(Bind 【该可选值已废弃】)',
                  ),
                start_time: z.string().describe('开始时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                end_time: z.string().describe('结束时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                reason: z.string().describe('加班事由').optional(),
                idempotent_id: z
                  .string()
                  .describe('加班记录的唯一幂等键，用于避免加班记录重复创建，可以填入三方的加班记录id')
                  .optional(),
                correct_process_id: z
                  .array(z.string())
                  .describe('更正流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                cancel_process_id: z
                  .array(z.string())
                  .describe('撤销流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                process_id: z
                  .array(z.string())
                  .describe('发起流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
              }),
            )
            .describe('加班信息')
            .optional(),
          trips: z
            .array(
              z.object({
                start_time: z.string().describe('开始时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                end_time: z.string().describe('结束时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                reason: z.string().describe('出差理由'),
                approve_pass_time: z.string().describe('审批通过时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                approve_apply_time: z.string().describe('审批申请时间，时间格式为 yyyy-MM-dd HH:mm:ss'),
                idempotent_id: z
                  .string()
                  .describe('出差记录的唯一幂等键，用于避免出差记录重复创建，可以填入三方的出差记录id')
                  .optional(),
                correct_process_id: z
                  .array(z.string())
                  .describe('更正流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                cancel_process_id: z
                  .array(z.string())
                  .describe('撤销流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                process_id: z
                  .array(z.string())
                  .describe('发起流程实例 ID。该字段由系统自动生成，在写入审批结果时，无需传入该参数')
                  .optional(),
                departure: z
                  .object({
                    region_level: z
                      .string()
                      .describe('地理等级（国家｜省｜市｜区）l1：国家级；l2：省级；l3：市级l4：区/县级')
                      .optional(),
                    region_id: z
                      .string()
                      .describe(
                        '地理id可以通过或获取（仅支持飞书人事企业版使用）',
                      )
                      .optional(),
                  })
                  .describe('出发地（只有一个）')
                  .optional(),
                destinations: z
                  .array(
                    z.object({
                      region_level: z
                        .string()
                        .describe('地理等级（国家｜省｜市｜区）l1：国家级；l2：省级；l3：市级l4：区/县级')
                        .optional(),
                      region_id: z
                        .string()
                        .describe(
                          '地理id可以通过或获取（仅支持飞书人事企业版使用）',
                        )
                        .optional(),
                    }),
                  )
                  .describe('目的地（可写多个）')
                  .optional(),
                transportation: z
                  .array(z.number())
                  .describe('交通工具（1 飞机，2 火车，3 汽车，4 高铁/动车，5 船，6 其他）')
                  .optional(),
                trip_type: z.number().describe('出差类型(1:单程 2:往返)').optional(),
                remarks: z.string().describe('出差备注').optional(),
              }),
            )
            .describe(
              '出差信息。目前仅支持全天出差（未满全天则按全天计入）。如果你需要支持半天出差，请咨询',
            )
            .optional(),
          time_zone: z.string().describe('此字段不再使用，以用户匹配的考勤组时区为准').optional(),
        })
        .describe('审批信息')
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no', 'open_id'])
        .describe(
          '请求体和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号),open_id(用户在某个应用中的身份，可以参考)',
        ),
    }),
  },
};
export const attendanceV1UserApprovalQuery = {
  project: 'attendance',
  name: 'attendance.v1.userApproval.query',
  sdkName: 'attendance.v1.userApproval.query',
  path: '/open-apis/attendance/v1/user_approvals/query',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-考勤打卡-假勤审批-获取审批数据-获取员工在某段时间内的请假、加班、外出和出差四种审批数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z
        .array(z.string())
        .describe('employee_no 或 employee_id 列表。传入的ID类型需要与employee_type的取值一致'),
      check_date_from: z
        .number()
        .describe(
          '查询的起始日期。格式yyyyMMdd**注意**：传入的日期不能超过当天 +1 天，例如当天 20241010，则传入 20241011 支持查询，但传入 20241012 会报错',
        ),
      check_date_to: z.number().describe('查询的结束日期，与 check_date_from 的时间间隔不超过 30 天。格式yyyyMMdd'),
      check_date_type: z
        .enum(['PeriodTime', 'CreateTime', 'UpdateTime'])
        .describe(
          '查询依据的时间类型（不填默认依据PeriodTime） Options:PeriodTime(单据作用时间),CreateTime(单据创建时间),UpdateTime(单据状态更新时间（灰度中，暂不开放）)',
        )
        .optional(),
      status: z
        .number()
        .describe(
          '查询状态（不填默认查询已通过状态）请假、加班：仅支持已通过和已撤回状态外出、出差：支持查询所有状态 Options:0(Todo 待审批),1(Rejected 未通过),2(Approved 已通过),3(Canceled 已取消),4(Reverted 已撤回)',
        )
        .optional(),
      check_time_from: z.string().describe('查询的起始时间，精确到秒的时间戳（灰度中，暂不开放）').optional(),
      check_time_to: z.string().describe('查询的结束时间，精确到秒的时间戳（灰度中，暂不开放）').optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserDailyShiftBatchCreate = {
  project: 'attendance',
  name: 'attendance.v1.userDailyShift.batchCreate',
  sdkName: 'attendance.v1.userDailyShift.batchCreate',
  path: '/open-apis/attendance/v1/user_daily_shifts/batch_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤排班-创建或修改排班表-排班表是用来描述考勤组内人员每天按哪个班次进行上班。目前排班表支持按x月y日对一位或多位人员进行排班。当用户的排班数据不存在时会进行创建，当用户的排班数据存在时会按照入参信息进行修改。注意：每人每天只能在一个考勤组中',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_daily_shifts: z
        .array(
          z.object({
            group_id: z
              .string()
              .describe(
                '考勤组 ID，获取方式：1） 2） 3）',
              ),
            shift_id: z
              .string()
              .describe(
                '班次 ID，获取方式：1） 2）。传入0代表休息',
              ),
            month: z.number().describe('月份，格式yyyyMM'),
            user_id: z.string().describe('用户 ID，与employee_type对应'),
            day_no: z.number().describe('日期'),
            is_clear_schedule: z
              .boolean()
              .describe('是否清空班次 (此字段优先于 shift_id，若为true ，shift_id 将失效)')
              .optional(),
          }),
        )
        .describe('排班表信息列表（数量限制50以内）'),
      operator_id: z
        .string()
        .describe(
          '操作人uid，与employee_type对应。如果您未操作，则此字段为必填字段',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID，或者获取的userid。),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserDailyShiftBatchCreateTemp = {
  project: 'attendance',
  name: 'attendance.v1.userDailyShift.batchCreateTemp',
  sdkName: 'attendance.v1.userDailyShift.batchCreateTemp',
  path: '/open-apis/attendance/v1/user_daily_shifts/batch_create_temp',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤排班-创建或修改临时排班-可在排班表上创建或修改临时班次，并用于排班。目前支持按日期对一位或多位人员进行排临时班次。临时排班为付费功能，如需使用请联系您的客户经理',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      user_tmp_daily_shifts: z
        .array(
          z.object({
            group_id: z
              .string()
              .describe(
                '考勤组 ID，获取方式：1） 2） 3）',
              ),
            user_id: z.string().describe('用户 ID，与employee_type对应'),
            date: z.number().describe('日期，格式：yyyymmdd，如20240120'),
            shift_name: z.string().describe('班次名称'),
            punch_time_simple_rules: z
              .array(
                z.object({
                  on_time: z.string().describe('上班时间，格式HH：MM'),
                  off_time: z.string().describe('下班时间，格式HH：MM。如需表示次日2点，则填入"26：00"'),
                }),
              )
              .describe('打卡规则'),
          }),
        )
        .describe('临时班表信息列表（数量限制50以内）'),
      operator_id: z.string().describe('操作人uid，与employee_type对应').optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(EmployeeID 员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID，或者获取的userid。),employee_no(EmployeeNo 员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const attendanceV1UserDailyShiftQuery = {
  project: 'attendance',
  name: 'attendance.v1.userDailyShift.query',
  sdkName: 'attendance.v1.userDailyShift.query',
  path: '/open-apis/attendance/v1/user_daily_shifts/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤排班-查询排班表-支持查询多个用户的排班情况，注意此接口返回的是用户维度的排班结果，与页面功能并不对应。可以通过返回结果中的group_id查询考勤组 ，shift_id查询班次 。查询的时间跨度不能超过 30 天',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('employee_no 或 employee_id 列表，与employee_type对应。最多50人'),
      check_date_from: z.number().describe('查询的起始工作日，格式为yyyyMMdd'),
      check_date_to: z.number().describe('查询的结束工作日，格式为yyyyMMdd'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID，或者获取的userid。),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserFlowBatchCreate = {
  project: 'attendance',
  name: 'attendance.v1.userFlow.batchCreate',
  sdkName: 'attendance.v1.userFlow.batchCreate',
  path: '/open-apis/attendance/v1/user_flows/batch_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-打卡信息管理-导入打卡流水-导入员工的打卡流水记录。导入后，会根据员工所在的考勤组班次规则，计算最终的打卡状态与结果。可在打卡管理-中查询',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      flow_records: z
        .array(
          z.object({
            user_id: z.string().describe('用户 ID。与employee_type对应'),
            creator_id: z.string().describe('记录创建者 ID。与employee_type对应'),
            location_name: z.string().describe('打卡位置名称信息'),
            check_time: z.string().describe('打卡时间，精确到秒的时间戳（只支持导入打卡时间在2022年1月1日之后的数据）'),
            comment: z.string().describe('打卡备注'),
            record_id: z.string().describe('打卡记录 ID，导入时此参数无效').optional(),
            ssid: z.string().describe('打卡 Wi-Fi 的 SSID').optional(),
            bssid: z.string().describe('打卡 Wi-Fi 的 MAC 地址').optional(),
            is_field: z.boolean().describe('是否为外勤打卡。默认为false，非外勤打卡').optional(),
            is_wifi: z.boolean().describe('是否为 Wi-Fi 打卡。默认为false，非Wi-Fi打卡').optional(),
            type: z
              .number()
              .describe(
                '记录的生成方式。举例：type=0表示「开放平台导入」的「用户打卡」流水；type=1表示「开放平台导入」的「管理员修改」流水。若不设置type，则默认是0。 Options:0(Self 用户打卡),1(ManagerModification 管理员修改),2(Remedy 用户补卡),3(System 系统自动生成),4(Free 下班免打卡),5(Machine 考勤机),6(Quick 极速打卡),7(import 考勤开放平台导入)',
              )
              .optional(),
            photo_urls: z.array(z.string()).describe('打卡照片列表（该字段目前不支持）').optional(),
            device_id: z.string().describe('打卡设备ID，（只支持小程序打卡，导入时无效）').optional(),
            check_result: z
              .enum([
                'NoNeedCheck',
                'SystemCheck',
                'Normal',
                'Early',
                'Late',
                'SeriousLate',
                'Lack',
                'Invalid',
                'None',
                'Todo',
              ])
              .describe(
                '打卡结果，作为入参时无效 Options:NoNeedCheck(无需打卡),SystemCheck(系统打卡),Normal(正常),Early(早退),Late(迟到),SeriousLate(严重迟到),Lack(缺卡),Invalid(无效),None(无状态),Todo(尚未打卡)',
              )
              .optional(),
            external_id: z
              .string()
              .describe('用户导入的外部打卡记录ID，用于和外部数据对比，如果不传，在查询的时候不方便区分')
              .optional(),
            idempotent_id: z.string().describe('唯一幂等键，不传的话无法实现幂等处理').optional(),
          }),
        )
        .describe('打卡流水记录列表(数量限制50)'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体和响应体中的 user_id 和 creator_id 的员工id类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID，或者获取的userid。),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserFlowBatchDel = {
  project: 'attendance',
  name: 'attendance.v1.userFlow.batchDel',
  sdkName: 'attendance.v1.userFlow.batchDel',
  path: '/open-apis/attendance/v1/user_flows/batch_del',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-打卡信息管理-删除打卡流水-删除员工从开放平台导入的打卡记录。删除后会重新计算打卡记录对应考勤任务结果',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      record_ids: z
        .array(z.string().describe('待删除的流水记录ID'))
        .describe(
          '打卡流水记录 ID，获取方式：1） 2） 3）',
        ),
    }),
  },
};
export const attendanceV1UserFlowGet = {
  project: 'attendance',
  name: 'attendance.v1.userFlow.get',
  sdkName: 'attendance.v1.userFlow.get',
  path: '/open-apis/attendance/v1/user_flows/:user_flow_id',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-打卡信息管理-查询打卡流水-通过打卡记录 ID 获取用户的打卡流水记录。返回信息主要包含：* 用户id和创建者id* 记录信息* 打卡位置信息、时间信息* 打卡方式信息 * GPS 打卡：location_name（定位地址信息） * Wi-Fi 打卡：ssid（wifi名称）、bssid（mac地址） * 考勤机打卡：device_id（考勤机设备id）对应页面功能打卡管理-',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 和 creator_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
    path: z.object({
      user_flow_id: z
        .string()
        .describe(
          '打卡流水记录 ID，获取方式：1） 2） 3）',
        ),
    }),
  },
};
export const attendanceV1UserFlowQuery = {
  project: 'attendance',
  name: 'attendance.v1.userFlow.query',
  sdkName: 'attendance.v1.userFlow.query',
  path: '/open-apis/attendance/v1/user_flows/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-打卡信息管理-批量查询打卡流水-通过用户 ID 获取用户的打卡流水记录。返回信息主要包含：* 用户id和创建者id* 记录信息* 打卡位置信息、时间信息* 打卡方式信息 * GPS 打卡：location_name（定位地址信息） * Wi-Fi 打卡：ssid（wifi名称）、bssid（mac地址） * 考勤机打卡：device_id（考勤机设备id）对应页面功能打卡管理-',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('employee_no 或 employee_id 列表，长度不超过 50'),
      check_time_from: z.string().describe('查询的起始时间，秒级时间戳'),
      check_time_to: z.string().describe('查询的结束时间，秒级时间戳'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
      include_terminated_user: z
        .boolean()
        .describe(
          '由于新入职用户可以复用已离职用户的employee_no/employee_id。如果true，返回employee_no/employee_id对应的所有在职+离职用户数据；如果false，只返回employee_no/employee_id对应的在职或最近一个离职用户数据',
        )
        .optional(),
    }),
  },
};
export const attendanceV1UserSettingModify = {
  project: 'attendance',
  name: 'attendance.v1.userSetting.modify',
  sdkName: 'attendance.v1.userSetting.modify',
  path: '/open-apis/attendance/v1/user_settings/modify',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤用户管理-修改用户人脸识别信息-修改授权内员工的用户设置信息，包括人脸照片文件 ID。修改用户人脸识别信息目前只支持 API 方式修改，管理后台已无法修改',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_setting: z
        .object({
          user_id: z.string().describe('用户 ID，对应employee_type'),
          face_key: z
            .string()
            .describe(
              '人脸照片文件 ID，获取方式：',
            ),
          face_key_update_time: z.string().describe('人脸照片更新时间，精确到秒的时间戳').optional(),
        })
        .describe('用户设置')
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserSettingQuery = {
  project: 'attendance',
  name: 'attendance.v1.userSetting.query',
  sdkName: 'attendance.v1.userSetting.query',
  path: '/open-apis/attendance/v1/user_settings/query',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-考勤打卡-考勤用户管理-批量查询用户人脸识别信息-批量查询授权内员工的用户设置信息，包括人脸照片文件 ID、人脸照片更新时间。对应页面假勤设置-。根据返回的face_key可以下载人脸信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ user_ids: z.array(z.string()).describe('employee_no 或 employee_id 列表，对应employee_type') }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(EmployeeId 员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(EmployeeNo 员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserStatsDataQuery = {
  project: 'attendance',
  name: 'attendance.v1.userStatsData.query',
  sdkName: 'attendance.v1.userStatsData.query',
  path: '/open-apis/attendance/v1/user_stats_datas/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤统计-查询统计数据-查询日度统计或月度统计的统计数据。字段包含基本信息、考勤组信息、出勤统计、异常统计、请假统计、加班统计、打卡时间、考勤结果和自定义字段。具体报表可在考勤统计-中找到',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      locale: z.enum(['en', 'ja', 'zh']).describe('语言类型 Options:en(英语),ja(日语),zh(中文)'),
      stats_type: z.enum(['daily', 'month']).describe('统计类型 Options:daily(日度统计),month(月度统计)'),
      start_date: z.number().describe('开始时间，格式yyyyMMdd'),
      end_date: z.number().describe('结束时间，格式yyyyMMdd（时间间隔不超过 31 天）'),
      user_ids: z
        .array(z.string())
        .describe(
          '查询的用户 ID 列表，与employee_type对应（用户数量不超过 200）* 必填字段(已全部升级到新系统，新系统要求必填)',
        )
        .optional(),
      need_history: z.boolean().describe('是否包含离职人员和转出人员，默认为false不包含').optional(),
      current_group_only: z
        .boolean()
        .describe('* `true`：只展示员工当前所属考勤组数据* `false`：展示员工所有考勤组数据默认值：false')
        .optional(),
      user_id: z
        .string()
        .describe(
          '操作者的 user_id。与employee_type对应* 不同的操作者（管理员）的每个报表可能有不同的字段设置，系统将根据 user_id 查询指定报表的统计数据。* 必填字段（已全部升级到新系统，新系统要求该字段必填）',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserStatsFieldQuery = {
  project: 'attendance',
  name: 'attendance.v1.userStatsField.query',
  sdkName: 'attendance.v1.userStatsField.query',
  path: '/open-apis/attendance/v1/user_stats_fields/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤统计-查询统计表头-查询考勤统计支持的日度统计或月度统计的统计表头。报表的表头信息可以在考勤统计-中查询到具体的报表信息，此接口专门用于查询表头数据',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      locale: z.enum(['en', 'ja', 'zh']).describe('语言类型 Options:en(英语),ja(日语),zh(中文)'),
      stats_type: z.enum(['daily', 'month']).describe('统计类型 Options:daily(日度统计),month(月度统计)'),
      start_date: z.number().describe('开始时间，格式为yyyyMMdd（无效字段）'),
      end_date: z.number().describe('结束时间，格式为yyyyMMdd（时间间隔不超过 40 天）（无效字段）'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserStatsViewQuery = {
  project: 'attendance',
  name: 'attendance.v1.userStatsView.query',
  sdkName: 'attendance.v1.userStatsView.query',
  path: '/open-apis/attendance/v1/user_stats_views/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤统计-查询统计设置-查询考勤统计支持的日度统计或月度统计的统计表头。报表的表头信息可以在考勤统计-中查询到具体的报表信息，此接口专门用于查询表头数据。注意此接口和基本相同，区别点在于在兼容历史统计视图模型（历史统计数据模型可以按用户ID设置，后续统计升级为仅支持租户维度）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      locale: z.enum(['en', 'ja', 'zh']).describe('语言类型 Options:en(英语),ja(日语),zh(中文)'),
      stats_type: z.enum(['daily', 'month']).describe('统计类型 Options:daily(日度统计),month(月度统计)'),
      user_id: z
        .string()
        .describe('操作者的用户id，对应employee_type* 必填字段(系统升级后，新系统要求必填)')
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserStatsViewUpdate = {
  project: 'attendance',
  name: 'attendance.v1.userStatsView.update',
  sdkName: 'attendance.v1.userStatsView.update',
  path: '/open-apis/attendance/v1/user_stats_views/:user_stats_view_id',
  httpMethod: 'PUT',
  description:
    '[Feishu/Lark]-考勤打卡-考勤统计-更新统计设置-更新开发者定制的日度统计或月度统计的统计报表表头设置信息。报表的表头信息可以在考勤统计-中查询到具体的报表信息，此接口专门用于更新表头信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      view: z
        .object({
          view_id: z
            .string()
            .describe(
              '视图 ID，可通过获取',
            ),
          stats_type: z.enum(['daily', 'month']).describe('视图类型 Options:daily(日度统计),month(月度统计)'),
          user_id: z.string().describe('操作者的用户id，对应employee_type'),
          items: z
            .array(
              z.object({
                code: z.string().describe('标题编号'),
                child_items: z
                  .array(
                    z.object({
                      code: z.string().describe('子标题编号'),
                      value: z.string().describe('开关字段，0：关闭，1：开启'),
                    }),
                  )
                  .describe('子标题')
                  .optional(),
              }),
            )
            .describe('用户设置字段')
            .optional(),
        })
        .describe('统计设置'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
    path: z.object({
      user_stats_view_id: z
        .string()
        .describe(
          '用户视图 ID，获取方式：1）',
        ),
    }),
  },
};
export const attendanceV1UserTaskRemedyCreate = {
  project: 'attendance',
  name: 'attendance.v1.userTaskRemedy.create',
  sdkName: 'attendance.v1.userTaskRemedy.create',
  path: '/open-apis/attendance/v1/user_task_remedys',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤补卡-通知补卡审批发起-对于只使用飞书考勤系统而未使用飞书审批系统的企业，可以通过该接口，将在三方审批系统中发起的补卡审批数据，写入到飞书考勤系统中，状态为审批中。写入后可以由 进行状态更新',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户 ID，对应employee_type'),
      remedy_date: z.number().describe('补卡日期，日期格式yyyyMMdd'),
      punch_no: z.number().describe('第几次上下班，0：第 1 次上下班，1：第 2 次上下班，2：第 3 次上下班，自由班制填 0'),
      work_type: z.number().describe('上班 / 下班，1：上班，2：下班，自由班制填 0'),
      remedy_time: z.string().describe('补卡时间，时间格式为 yyyy-MM-dd HH:mm'),
      reason: z.string().describe('补卡原因'),
      time: z.string().describe('字段已失效').optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserTaskRemedyQuery = {
  project: 'attendance',
  name: 'attendance.v1.userTaskRemedy.query',
  sdkName: 'attendance.v1.userTaskRemedy.query',
  path: '/open-apis/attendance/v1/user_task_remedys/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-考勤补卡-获取补卡记录-补卡：用户通过审批的方式，在某一次上/下班的打卡时间范围内，补充一条打卡记录，用以修正用户的考勤结果。本接口专用于获取员工的补卡记录（无页面功能对应）',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z
        .array(z.string())
        .describe('employee_no 或 employee_id 列表。传入的ID类型需要与employee_type的取值一致。最多支持50个'),
      check_time_from: z.string().describe('查询的起始时间，精确到秒的时间戳'),
      check_time_to: z.string().describe('查询的结束时间，精确到秒的时间戳'),
      check_date_type: z
        .enum(['PeriodTime', 'CreateTime', 'UpdateTime'])
        .describe(
          '查询依据的时间类型（默认依据PeriodTime，如果使用非默认的，非特定租户不支持） Options:PeriodTime(单据作用时间),CreateTime(单据创建时间（目前暂不支持）),UpdateTime(单据状态更新时间（灰度中，暂不开放）)',
        )
        .optional(),
      status: z
        .number()
        .describe(
          '查询状态（不填默认查询已通过状态） Options:0(Pending 待审批),1(Rejected 未通过),2(Pass 已通过),3(Cancel 已取消),4(Withdraw 已撤回)',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '请求体中的 user_ids 和响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserTaskRemedyQueryUserAllowedRemedys = {
  project: 'attendance',
  name: 'attendance.v1.userTaskRemedy.queryUserAllowedRemedys',
  sdkName: 'attendance.v1.userTaskRemedy.queryUserAllowedRemedys',
  path: '/open-apis/attendance/v1/user_task_remedys/query_user_allowed_remedys',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-考勤打卡-考勤补卡-获取可补卡时间-获取用户某天可以补的第几次上 / 下班卡的时间',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('用户 ID，对应employee_type'),
      remedy_date: z.number().describe('补卡日期，格式为yyyyMMdd'),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '响应体中的 user_id 的员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
    }),
  },
};
export const attendanceV1UserTaskQuery = {
  project: 'attendance',
  name: 'attendance.v1.userTask.query',
  sdkName: 'attendance.v1.userTask.query',
  path: '/open-apis/attendance/v1/user_tasks/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-考勤打卡-打卡信息管理-查询打卡结果-获取企业内员工的实际打卡结果，包括：* 打卡任务列表 * 打卡记录id * 用户信息 * 考勤组id * 班次id * 考勤记录 * 上班记录 * 下班记录 * 上班打卡结果 * 下班打卡结果 * 上班打卡结果补充 * 下班打卡结果补充 * 上班打卡时间 * 下班打卡时间* 无效用户id列表* 没有权限用户ID列表',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_ids: z.array(z.string()).describe('employee_no 或 employee_id 列表，对应employee_type，长度不超过 50'),
      check_date_from: z.number().describe('查询的起始工作日，格式为yyyyMMdd'),
      check_date_to: z.number().describe('查询的结束工作日，格式为yyyyMMdd'),
      need_overtime_result: z
        .boolean()
        .describe(
          '是否需要加班班段打卡结果；当need_overtime_result=true时，会返回加班班段，加班班段通过task_shift_type=1标识，加班班段上下班与正常班段相连时会出现共用record_id情况。例如：9-18为正常班次，18-19为加班班次，打卡结果中records 会出现两段，分别为9-18，18-19 且两段上下班record_id相同（check_in_record_id和check_out_record_id相同）。非相连加班班次正常分段返回。当need_overtime_result=false时，仅返回正常班段且task_shift_type=0',
        )
        .optional(),
    }),
    params: z.object({
      employee_type: z
        .enum(['employee_id', 'employee_no'])
        .describe(
          '员工ID类型。如果没有后台管理权限，可使用 Options:employee_id(员工 employee ID，即 > 组织架构 > 成员与部门 > 成员详情中的用户 ID),employee_no(员工工号，即 > 组织架构 > 成员与部门 > 成员详情中的工号)',
        ),
      ignore_invalid_users: z
        .boolean()
        .describe(
          '是否忽略无效和没有权限的用户，对应employee_type。如果 true，则返回有效用户的信息，并告知无效和没有权限的用户信息；如果 false，且 user_ids 中存在无效或没有权限的用户，则返回错误',
        )
        .optional(),
      include_terminated_user: z
        .boolean()
        .describe(
          '由于新入职员工可以复用已离职员工的 employee_no/employee_id，对应employee_type。如果 true，则返回 employee_no/employee_id 对应的所有在职 + 离职员工的数据；如果 false，则只返回 employee_no/employee_id 对应的在职或最近一个离职员工的数据',
        )
        .optional(),
    }),
  },
};
export const attendanceV1Tools = [
  attendanceV1ApprovalInfoProcess,
  attendanceV1ArchiveRuleDelReport,
  attendanceV1ArchiveRuleList,
  attendanceV1ArchiveRuleUploadReport,
  attendanceV1ArchiveRuleUserStatsFieldsQuery,
  attendanceV1GroupCreate,
  attendanceV1GroupDelete,
  attendanceV1GroupGet,
  attendanceV1GroupList,
  attendanceV1GroupListUser,
  attendanceV1GroupSearch,
  attendanceV1LeaveAccrualRecordPatch,
  attendanceV1LeaveEmployExpireRecordGet,
  attendanceV1ShiftCreate,
  attendanceV1ShiftDelete,
  attendanceV1ShiftGet,
  attendanceV1ShiftList,
  attendanceV1ShiftQuery,
  attendanceV1UserApprovalCreate,
  attendanceV1UserApprovalQuery,
  attendanceV1UserDailyShiftBatchCreate,
  attendanceV1UserDailyShiftBatchCreateTemp,
  attendanceV1UserDailyShiftQuery,
  attendanceV1UserFlowBatchCreate,
  attendanceV1UserFlowBatchDel,
  attendanceV1UserFlowGet,
  attendanceV1UserFlowQuery,
  attendanceV1UserSettingModify,
  attendanceV1UserSettingQuery,
  attendanceV1UserStatsDataQuery,
  attendanceV1UserStatsFieldQuery,
  attendanceV1UserStatsViewQuery,
  attendanceV1UserStatsViewUpdate,
  attendanceV1UserTaskRemedyCreate,
  attendanceV1UserTaskRemedyQuery,
  attendanceV1UserTaskRemedyQueryUserAllowedRemedys,
  attendanceV1UserTaskQuery,
];
