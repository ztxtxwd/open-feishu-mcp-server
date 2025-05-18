import { z } from 'zod';
export type vcV1ToolName =
  | 'vc.v1.alert.list'
  | 'vc.v1.export.get'
  | 'vc.v1.export.meetingList'
  | 'vc.v1.export.participantList'
  | 'vc.v1.export.participantQualityList'
  | 'vc.v1.export.resourceReservationList'
  | 'vc.v1.meetingList.get'
  | 'vc.v1.meeting.end'
  | 'vc.v1.meeting.get'
  | 'vc.v1.meeting.invite'
  | 'vc.v1.meeting.kickout'
  | 'vc.v1.meeting.listByNo'
  | 'vc.v1.meetingRecording.get'
  | 'vc.v1.meetingRecording.setPermission'
  | 'vc.v1.meetingRecording.start'
  | 'vc.v1.meetingRecording.stop'
  | 'vc.v1.meeting.setHost'
  | 'vc.v1.participantList.get'
  | 'vc.v1.participantQualityList.get'
  | 'vc.v1.report.getDaily'
  | 'vc.v1.report.getTopUser'
  | 'vc.v1.reserveConfigAdmin.get'
  | 'vc.v1.reserveConfigAdmin.patch'
  | 'vc.v1.reserveConfigDisableInform.get'
  | 'vc.v1.reserveConfigDisableInform.patch'
  | 'vc.v1.reserveConfigForm.get'
  | 'vc.v1.reserveConfigForm.patch'
  | 'vc.v1.reserveConfig.patch'
  | 'vc.v1.reserveConfig.reserveScope'
  | 'vc.v1.reserve.apply'
  | 'vc.v1.reserve.delete'
  | 'vc.v1.reserve.get'
  | 'vc.v1.reserve.getActiveMeeting'
  | 'vc.v1.reserve.update'
  | 'vc.v1.resourceReservationList.get'
  | 'vc.v1.roomConfig.query'
  | 'vc.v1.roomConfig.set'
  | 'vc.v1.roomConfig.setCheckboardAccessCode'
  | 'vc.v1.roomConfig.setRoomAccessCode'
  | 'vc.v1.roomLevel.create'
  | 'vc.v1.roomLevel.del'
  | 'vc.v1.roomLevel.get'
  | 'vc.v1.roomLevel.list'
  | 'vc.v1.roomLevel.mget'
  | 'vc.v1.roomLevel.patch'
  | 'vc.v1.roomLevel.search'
  | 'vc.v1.room.create'
  | 'vc.v1.room.delete'
  | 'vc.v1.room.get'
  | 'vc.v1.room.list'
  | 'vc.v1.room.mget'
  | 'vc.v1.room.patch'
  | 'vc.v1.room.search'
  | 'vc.v1.scopeConfig.create'
  | 'vc.v1.scopeConfig.get';
export const vcV1AlertList = {
  project: 'vc',
  name: 'vc.v1.alert.list',
  sdkName: 'vc.v1.alert.list',
  path: '/open-apis/vc/v1/alerts',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-告警中心-获取告警记录-获取特定条件下租户的设备告警记录',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      start_time: z.string().describe('开始时间（unix时间，单位秒）'),
      end_time: z.string().describe('结束时间（unix时间，单位秒）'),
      query_type: z
        .number()
        .describe('查询对象类型，不填返回所有 Options:1(room 会议室),2(erc 企业会议室连接器),3(sip SIP会议室系统)')
        .optional(),
      query_value: z.string().describe('查询对象ID，会议室ID或企业会议室连接器ID').optional(),
      page_size: z
        .number()
        .describe('请求期望返回的告警记录数量，不足则返回全部，该值默认为 100，最大为 1000')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const vcV1ExportGet = {
  project: 'vc',
  name: 'vc.v1.export.get',
  sdkName: 'vc.v1.export.get',
  path: '/open-apis/vc/v1/exports/:task_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-导出-查询导出任务结果-查看异步导出的进度',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ task_id: z.string().describe('任务id').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ExportMeetingList = {
  project: 'vc',
  name: 'vc.v1.export.meetingList',
  sdkName: 'vc.v1.export.meetingList',
  path: '/open-apis/vc/v1/exports/meeting_list',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-导出-导出会议明细-导出会议明细，具体权限要求请参考资源介绍',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      start_time: z.string().describe('查询开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('查询结束时间（unix时间，单位sec）'),
      meeting_status: z
        .number()
        .describe('会议状态（不传默认为已结束会议） Options:1(ongoing 进行中),2(past 已结束),3(future 待召开)')
        .optional(),
      meeting_no: z.string().describe('按9位会议号筛选（最多一个筛选条件）').optional(),
      user_id: z.string().describe('按参会Lark用户筛选（最多一个筛选条件）').optional(),
      room_id: z.string().describe('按参会Rooms筛选（最多一个筛选条件）').optional(),
      meeting_type: z
        .number()
        .describe(
          '按会议类型筛选（最多一个筛选条件） Options:1(all 全部类型（默认）),2(meeting 视频会议),3(share_screen 本地投屏)',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ExportParticipantList = {
  project: 'vc',
  name: 'vc.v1.export.participantList',
  sdkName: 'vc.v1.export.participantList',
  path: '/open-apis/vc/v1/exports/participant_list',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-视频会议-导出-导出参会人明细-导出某个会议的参会人详情列表，具体权限要求请参考「资源介绍」',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      meeting_start_time: z.string().describe('会议开始时间（unix时间，单位sec）'),
      meeting_end_time: z
        .string()
        .describe('会议结束时间（unix时间，单位sec，若是进行中会议可填当前时间，否则填准确的会议结束时间）'),
      meeting_status: z
        .number()
        .describe('会议状态（不传默认为已结束会议） Options:1(ongoing 进行中),2(past 已结束),3(future 待召开)')
        .optional(),
      meeting_no: z.string().describe('9位会议号'),
      user_id: z.string().describe('按参会Lark用户筛选（最多一个筛选条件）').optional(),
      room_id: z.string().describe('按参会Rooms筛选（最多一个筛选条件）').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ExportParticipantQualityList = {
  project: 'vc',
  name: 'vc.v1.export.participantQualityList',
  sdkName: 'vc.v1.export.participantQualityList',
  path: '/open-apis/vc/v1/exports/participant_quality_list',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-视频会议-导出-导出参会人会议质量数据-导出某场会议某个参会人的音视频&共享质量数据（仅支持已结束会议），具体权限要求请参考「资源介绍」',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      meeting_start_time: z.string().describe('会议开始时间（需要精确到一分钟，unix时间，单位sec）'),
      meeting_end_time: z.string().describe('会议结束时间（unix时间，单位sec）'),
      meeting_no: z.string().describe('9位会议号'),
      join_time: z.string().describe('参会人入会时间（unix时间，单位sec），可从「查询参会人明细」返回结果获取'),
      user_id: z.string().describe('参会人为Lark用户时填入，room_id和user_id必须只填一个').optional(),
      room_id: z.string().describe('参会人为Rooms时填入，room_id和user_id必须只填一个').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ExportResourceReservationList = {
  project: 'vc',
  name: 'vc.v1.export.resourceReservationList',
  sdkName: 'vc.v1.export.resourceReservationList',
  path: '/open-apis/vc/v1/exports/resource_reservation_list',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-导出-导出会议室预定数据-导出会议室预定数据，具体权限要求请参考「资源介绍」',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      room_level_id: z.string().describe('会议室层级id'),
      need_topic: z.boolean().describe('是否展示会议主题').optional(),
      start_time: z.string().describe('查询开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('查询结束时间（unix时间，单位sec）'),
      room_ids: z.array(z.string()).describe('待筛选的会议室id列表').optional(),
      is_exclude: z.boolean().describe('若为true表示导出room_ids范围外的会议室，默认为false').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingListGet = {
  project: 'vc',
  name: 'vc.v1.meetingList.get',
  sdkName: 'vc.v1.meetingList.get',
  path: '/open-apis/vc/v1/meeting_list',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议数据-查询会议明细-查询会议明细，具体权限要求请参考',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      start_time: z.string().describe('查询开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('查询结束时间（unix时间，单位sec）'),
      meeting_status: z
        .number()
        .describe(
          '会议状态（不传默认为已结束会议） Options:1(ongoing 进行中),2(past 已结束),3(future 待召开。该枚举值只读，请求时不支持选择。)',
        )
        .optional(),
      meeting_no: z.string().describe('按9位会议号筛选（最多一个筛选条件）').optional(),
      user_id: z.string().describe('按参会Lark用户筛选（最多一个筛选条件）').optional(),
      room_id: z.string().describe('按参会Rooms筛选（最多一个筛选条件）').optional(),
      meeting_type: z
        .number()
        .describe(
          '按会议类型筛选（最多一个筛选条件） Options:1(all 全部类型（默认）),2(meeting 视频会议),3(share_screen 本地投屏)',
        )
        .optional(),
      page_size: z.number().describe('分页尺寸大小').optional(),
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
export const vcV1MeetingEnd = {
  project: 'vc',
  name: 'vc.v1.meeting.end',
  sdkName: 'vc.v1.meeting.end',
  path: '/open-apis/vc/v1/meetings/:meeting_id/end',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议管理-结束会议-结束一个进行中的会议',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingGet = {
  project: 'vc',
  name: 'vc.v1.meeting.get',
  sdkName: 'vc.v1.meeting.get',
  path: '/open-apis/vc/v1/meetings/:meeting_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议管理-获取会议详情-获取一个会议的详细数据',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      with_participants: z.boolean().describe('是否需要参会人列表').optional(),
      with_meeting_ability: z.boolean().describe('是否需要会中使用能力统计（仅限tenant_access_token）').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingInvite = {
  project: 'vc',
  name: 'vc.v1.meeting.invite',
  sdkName: 'vc.v1.meeting.invite',
  path: '/open-apis/vc/v1/meetings/:meeting_id/invite',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议管理-邀请参会人-邀请参会人进入会议',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      invitees: z
        .array(
          z.object({
            id: z.string().describe('用户ID').optional(),
            user_type: z
              .number()
              .describe(
                '用户类型 Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
              )
              .optional(),
          }),
        )
        .describe('被邀请的用户列表【一次性最多支持邀请10人】'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingKickout = {
  project: 'vc',
  name: 'vc.v1.meeting.kickout',
  sdkName: 'vc.v1.meeting.kickout',
  path: '/open-apis/vc/v1/meetings/:meeting_id/kickout',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-会议管理-移除参会人-将参会人从会议中移除',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      kickout_users: z
        .array(
          z.object({
            id: z.string().describe('用户ID').optional(),
            user_type: z
              .number()
              .describe(
                '用户类型 Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
              )
              .optional(),
          }),
        )
        .describe('需移除的用户列表'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ meeting_id: z.string().describe('会议ID').optional() }),
  },
};
export const vcV1MeetingListByNo = {
  project: 'vc',
  name: 'vc.v1.meeting.listByNo',
  sdkName: 'vc.v1.meeting.listByNo',
  path: '/open-apis/vc/v1/meetings/list_by_no',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议管理-获取与会议号关联的会议列表-获取指定时间范围（90天内)会议号关联的会议简要信息列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      meeting_no: z.string().describe('9位会议号'),
      start_time: z.string().describe('查询开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('查询结束时间（unix时间，单位sec）'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingRecordingGet = {
  project: 'vc',
  name: 'vc.v1.meetingRecording.get',
  sdkName: 'vc.v1.meetingRecording.get',
  path: '/open-apis/vc/v1/meetings/:meeting_id/recording',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-录制-获取录制文件-获取一个会议的录制文件',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingRecordingSetPermission = {
  project: 'vc',
  name: 'vc.v1.meetingRecording.setPermission',
  sdkName: 'vc.v1.meetingRecording.setPermission',
  path: '/open-apis/vc/v1/meetings/:meeting_id/recording/set_permission',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-录制-授权录制文件-将一个会议的录制文件授权给组织、用户或公开到公网',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      permission_objects: z
        .array(
          z.object({
            id: z.string().describe('授权对象ID').optional(),
            type: z
              .number()
              .describe(
                '授权对象类型 Options:1(User 用户授权（id字段填入用户ID）),2(Group 群组授权（id字段填入群组open_chat_id）),3(Tenant 租户内授权（id字段不填）),4(Public 公网授权（id字段不填）)',
              ),
            permission: z.number().describe('权限 Options:1(View 查看)'),
          }),
        )
        .describe('授权对象列表'),
      action_type: z
        .number()
        .describe('授权或者取消授权，默认授权 Options:0(authorize 授权),1(revoke 取消授权)')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingRecordingStart = {
  project: 'vc',
  name: 'vc.v1.meetingRecording.start',
  sdkName: 'vc.v1.meetingRecording.start',
  path: '/open-apis/vc/v1/meetings/:meeting_id/recording/start',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-录制-开始录制-在会议中开始录制',
  accessTokens: ['user'],
  schema: {
    data: z.object({ timezone: z.number().describe('录制文件时间显示使用的时区[-12,12]').optional() }),
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingRecordingStop = {
  project: 'vc',
  name: 'vc.v1.meetingRecording.stop',
  sdkName: 'vc.v1.meetingRecording.stop',
  path: '/open-apis/vc/v1/meetings/:meeting_id/recording/stop',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-录制-停止录制-在会议中停止录制',
  accessTokens: ['user'],
  schema: {
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1MeetingSetHost = {
  project: 'vc',
  name: 'vc.v1.meeting.setHost',
  sdkName: 'vc.v1.meeting.setHost',
  path: '/open-apis/vc/v1/meetings/:meeting_id/set_host',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议管理-设置主持人-设置会议的主持人',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      host_user: z
        .object({
          id: z.string().describe('用户ID').optional(),
          user_type: z
            .number()
            .describe(
              '用户类型 Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
            )
            .optional(),
        })
        .describe('将要设置的主持人'),
      old_host_user: z
        .object({
          id: z.string().describe('用户ID').optional(),
          user_type: z
            .number()
            .describe(
              '用户类型 Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
            )
            .optional(),
        })
        .describe('当前主持人（CAS并发安全：如果和会中当前主持人不符则会设置失败，可使用返回的最新数据重新设置）')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      meeting_id: z.string().describe('会议ID（视频会议的唯一标识，视频会议开始后才会产生）').optional(),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ParticipantListGet = {
  project: 'vc',
  name: 'vc.v1.participantList.get',
  sdkName: 'vc.v1.participantList.get',
  path: '/open-apis/vc/v1/participant_list',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议数据-查询参会人明细-查询参会人明细，具体权限要求请参考',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      meeting_start_time: z.string().describe('会议开始时间（unix时间，单位sec）'),
      meeting_end_time: z
        .string()
        .describe('会议结束时间（unix时间，单位sec，若是进行中会议可填当前时间，否则填准确的会议结束时间）'),
      meeting_status: z
        .number()
        .describe('会议状态（不传默认为已结束会议） Options:1(ongoing 进行中),2(past 已结束),3(future 待召开)')
        .optional(),
      meeting_no: z.string().describe('9位会议号'),
      user_id: z.string().describe('按参会Lark用户筛选（最多一个筛选条件）').optional(),
      room_id: z.string().describe('按参会Rooms筛选（最多一个筛选条件）').optional(),
      page_size: z.number().describe('分页尺寸大小').optional(),
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
export const vcV1ParticipantQualityListGet = {
  project: 'vc',
  name: 'vc.v1.participantQualityList.get',
  sdkName: 'vc.v1.participantQualityList.get',
  path: '/open-apis/vc/v1/participant_quality_list',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议数据-查询参会人会议质量数据-查询参会人会议质量数据（仅支持已结束会议），具体权限要求请参考「资源介绍」',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      meeting_start_time: z.string().describe('会议开始时间（需要精确到一分钟，unix时间，单位sec）'),
      meeting_end_time: z.string().describe('会议结束时间（unix时间，单位sec）'),
      meeting_no: z.string().describe('9位会议号'),
      join_time: z.string().describe('参会人入会时间（unix时间，单位sec），可从「查询参会人明细」返回结果获取'),
      user_id: z.string().describe('参会人为Lark用户时填入，room_id和user_id必须只填一个').optional(),
      room_id: z.string().describe('参会人为Rooms时填入，room_id和user_id必须只填一个').optional(),
      page_size: z.number().describe('分页尺寸大小').optional(),
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
export const vcV1ReportGetDaily = {
  project: 'vc',
  name: 'vc.v1.report.getDaily',
  sdkName: 'vc.v1.report.getDaily',
  path: '/open-apis/vc/v1/reports/get_daily',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议报告-获取会议报告-获取一段时间内组织的每日会议使用报告',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      start_time: z.string().describe('开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('结束时间（unix时间，单位sec）'),
      unit: z
        .number()
        .describe(
          '数据驻留地（传参前提是租户存在多个驻留地数据且开通了该查询功能） Options:0(CN 中国大陆),1(VA 美国),2(SG 新加坡),3(JP 日本)',
        )
        .optional(),
    }),
  },
};
export const vcV1ReportGetTopUser = {
  project: 'vc',
  name: 'vc.v1.report.getTopUser',
  sdkName: 'vc.v1.report.getTopUser',
  path: '/open-apis/vc/v1/reports/get_top_user',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议报告-获取 Top 用户列表-获取一段时间内组织内会议使用的 Top 用户列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      start_time: z.string().describe('开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('结束时间（unix时间，单位sec）'),
      limit: z.number().describe('取前多少位'),
      order_by: z.number().describe('排序依据（降序） Options:1(meeting_count 会议数量),2(meeting_duration 会议时长)'),
      unit: z
        .number()
        .describe(
          '数据驻留地（传参前提是租户存在多个驻留地数据且开通了该查询功能） Options:0(CN 中国大陆),1(VA 美国),2(SG 新加坡),3(JP 日本)',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const vcV1ReserveConfigAdminGet = {
  project: 'vc',
  name: 'vc.v1.reserveConfigAdmin.get',
  sdkName: 'vc.v1.reserveConfigAdmin.get',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/admin',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室配置-查询会议室预定管理员-查询会议室预定管理员',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope_type: z.number().describe('会议室或层级'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级id').optional() }),
  },
};
export const vcV1ReserveConfigAdminPatch = {
  project: 'vc',
  name: 'vc.v1.reserveConfigAdmin.patch',
  sdkName: 'vc.v1.reserveConfigAdmin.patch',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/admin',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室配置-更新会议室预定管理员-更新会议室预定管理员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope_type: z.number().describe('1代表层级，2代表会议室'),
      reserve_admin_config: z
        .object({
          depts: z
            .array(z.object({ department_id: z.string().describe('预定管理部门ID，使用open_department_id') }))
            .describe('预定管理部门')
            .optional(),
          users: z
            .array(z.object({ user_id: z.string().describe('预定管理员ID') }))
            .describe('预定管理员')
            .optional(),
        })
        .describe('预定管理员或部门'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级id').optional() }),
  },
};
export const vcV1ReserveConfigDisableInformGet = {
  project: 'vc',
  name: 'vc.v1.reserveConfigDisableInform.get',
  sdkName: 'vc.v1.reserveConfigDisableInform.get',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室配置-查询禁用状态变更通知-查询禁用状态变更通知',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope_type: z.number().describe('1表示层级，2表示会议室'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级ID，可通过会议室或层级相关查询接口获取') }),
  },
};
export const vcV1ReserveConfigDisableInformPatch = {
  project: 'vc',
  name: 'vc.v1.reserveConfigDisableInform.patch',
  sdkName: 'vc.v1.reserveConfigDisableInform.patch',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/disable_inform',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室配置-更新禁用状态变更通知-更新禁用状态变更通知',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope_type: z.number().describe('1表示会议室层级，2表示会议室'),
      disable_inform: z
        .object({
          if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
          if_inform: z.boolean().describe('禁用状态变更通知开关'),
          informed_users: z
            .array(z.object({ user_id: z.string().describe('预定管理员ID') }))
            .describe('通知成员列表')
            .optional(),
          informed_depts: z
            .array(z.object({ department_id: z.string().describe('预定管理部门ID，使用open_department_id') }))
            .describe('通知部门列表')
            .optional(),
        })
        .describe('禁用通知配置'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级ID，可通过会议室或层级相关查询接口获取') }),
  },
};
export const vcV1ReserveConfigFormGet = {
  project: 'vc',
  name: 'vc.v1.reserveConfigForm.get',
  sdkName: 'vc.v1.reserveConfigForm.get',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/form',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室配置-查询会议室预定表单-查询会议室预定表单',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope_type: z.number().describe('1代表层级，2代表会议室'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级id').optional() }),
  },
};
export const vcV1ReserveConfigFormPatch = {
  project: 'vc',
  name: 'vc.v1.reserveConfigForm.patch',
  sdkName: 'vc.v1.reserveConfigForm.patch',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id/form',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室配置-更新会议室预定表单-更新会议室预定表单',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope_type: z.number().describe('1代表层级，2代表会议室'),
      reserve_form_config: z
        .object({
          if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
          reserve_form: z.boolean().describe('预定表单开关，true表示打开，false表示关闭'),
          notified_users: z
            .array(z.object({ user_id: z.string().describe('预定管理员ID') }))
            .describe('通知人列表')
            .optional(),
          notified_time: z.number().describe('最晚于会议开始前 notified_time收到通知（单位：分/时/天）').optional(),
          time_unit: z.number().describe('时间单位，1为分钟；2为小时；3为天，默认为天').optional(),
        })
        .describe('预定表单设置'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级ID').optional() }),
  },
};
export const vcV1ReserveConfigPatch = {
  project: 'vc',
  name: 'vc.v1.reserveConfig.patch',
  sdkName: 'vc.v1.reserveConfig.patch',
  path: '/open-apis/vc/v1/reserve_configs/:reserve_config_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室配置-更新会议室预定限制-更新会议室预定限制',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope_type: z.string().describe('1 代表层级，2 代表会议室'),
      approval_config: z
        .object({
          approval_switch: z
            .number()
            .describe(
              '预定审批开关：0 代表关闭，1 代表打开。<b>说明</b>：1. 未设置值时不更新原开关的值，但此时必填 approval_condition2. 设置值为 1 时，必填 approval_condition 3. 设置值为 0 时整个 approval_config 其他字段均可省略',
            )
            .optional(),
          approval_condition: z
            .number()
            .describe(
              '预定审批条件：0 代表所有预定均需审批，1 代表满足条件的需审批<b>说明</b>：为 1 时必填 meeting_duration',
            )
            .optional(),
          meeting_duration: z
            .number()
            .describe(
              '超过 meeting_duration的预定需要审批（单位：小时，取值范围[0.1-99]）<b>说明</b>：1. 当 approval_condition 为 0 ，更新时如果未设置值，默认更新为 99 .2. 传入的值小数点后超过 2 位，自动四舍五入保留两位',
            )
            .optional(),
          approvers: z
            .array(z.object({ user_id: z.string().describe('预定管理员ID') }))
            .describe('审批人列表，当打开审批开关时，至少需要设置一位审批人')
            .optional(),
        })
        .describe('预定审批设置')
        .optional(),
      time_config: z
        .object({
          if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
          time_switch: z.number().describe('预定时间开关：0 代表关闭，1 代表开启'),
          days_in_advance: z
            .number()
            .describe(
              '最早可提前 days_in_advance 预定会议室（单位：天，取值范围[1-730]）<b>说明</b>：不填写时，默认更新为 365',
            )
            .optional(),
          opening_hour: z
            .string()
            .describe(
              '开放当天可于 opening_hour 开始预定（单位：秒，取值范围[0,86400]）<b>说明</b>：1. 不填写时默认更新为 28800 2. 如果填写的值不是 60 的倍数，则自动会更新为离其最近的 60 整数倍的值',
            )
            .optional(),
          start_time: z
            .string()
            .describe(
              '每日可预定时间范围的开始时间（单位：秒，取值范围[0,86400]）<b>说明</b>：1. 不填写时，默认更新为 0 ，此时填写的 end_time 不得小于 30。2. 当 start_time 与 end_time 均填写时， end_time 至少超过 start_time 30 。3. 如果填写的值不是 60 的倍数，则自动会更新为离其最近的 60 整数倍的值',
            )
            .optional(),
          end_time: z
            .string()
            .describe(
              '每日可预定时间范围结束时间（单位：秒，取值范围[0,86400]）<b>说明</b>：1. 不填写时，默认更新为 86400 ，此时填写的 start_time 不得大于等于 86370 。2. 当 start_time 与 end_time 均填写时， end_time 至少要超过 start_time 30。3. 如果填写的值不是 60 的倍数，则自动会更新为离其最近的 60 整数倍的值',
            )
            .optional(),
          max_duration: z
            .number()
            .describe('单次会议室可预定时长上限（单位：小时，取值范围[1,99]）<b>说明</b>：不填写时默认更新为 2')
            .optional(),
        })
        .describe('预定时间设置')
        .optional(),
      reserve_scope_config: z
        .object({
          if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
          allow_all_users: z
            .number()
            .describe(
              '可预定成员范围：0 代表部分成员，1 代表全部成员。<b>说明</b>：1. 此值必填。2. 当设置为 0 时，至少需要 1 个预定部门或预定人',
            )
            .optional(),
          allow_users: z
            .array(z.object({ user_id: z.string().describe('预定管理员ID') }))
            .describe('可预定成员列表')
            .optional(),
          allow_depts: z
            .array(z.object({ department_id: z.string().describe('预定管理部门ID，使用open_department_id') }))
            .describe('可预定部门列表')
            .optional(),
        })
        .describe('预定范围设置')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_config_id: z.string().describe('会议室或层级id') }),
  },
};
export const vcV1ReserveConfigReserveScope = {
  project: 'vc',
  name: 'vc.v1.reserveConfig.reserveScope',
  sdkName: 'vc.v1.reserveConfig.reserveScope',
  path: '/open-apis/vc/v1/reserve_configs/reserve_scope',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室配置-查询会议室预定限制-查询会议室预定限制',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope_id: z.string().describe('会议室或层级id'),
      scope_type: z.string().describe('1 代表层级，2 代表会议室'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const vcV1ReserveApply = {
  project: 'vc',
  name: 'vc.v1.reserve.apply',
  sdkName: 'vc.v1.reserve.apply',
  path: '/open-apis/vc/v1/reserves/apply',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-预约-预约会议-创建一个会议预约',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      end_time: z.string().describe('预约到期时间（unix时间，单位sec），多人会议必填').optional(),
      owner_id: z
        .string()
        .describe(
          '指定会议归属人，使用 tenant_access_token 时生效且必传，指定对象必须为同租户下的合法飞书用户使用 user_access_token 时，该参数不生效，设置归属人无意义',
        )
        .optional(),
      meeting_settings: z
        .object({
          topic: z.string().describe('会议主题').optional(),
          action_permissions: z
            .array(
              z.object({
                permission: z
                  .number()
                  .describe(
                    '权限项 Options:1(can_be_host 是否能成为主持人),2(can_invite 是否能邀请参会人),3(can_join 是否能加入会议)',
                  ),
                permission_checkers: z
                  .array(
                    z.object({
                      check_field: z
                        .number()
                        .describe(
                          '检查字段类型 Options:1(user_id 用户ID（check_list填入用户ID）),2(user_type 用户类型（check_list可选值有 "1"：飞书用户、"2"：rooms用户、"6"：pstn用户、"7"：sip用户）),3(tenant_id 租户ID（check_list填入租户tenant_key）)',
                        ),
                      check_mode: z
                        .number()
                        .describe(
                          '检查方式 Options:1(within 在check_list中为有权限（白名单）),2(without 不在check_list中为有权限（黑名单）)',
                        ),
                      check_list: z.array(z.string()).describe('检查字段列表（根据check_field的类型填入对应内容）'),
                    }),
                  )
                  .describe('权限检查器列表，权限检查器之间为"逻辑或"的关系（即 有一个为true则拥有该权限）'),
              }),
            )
            .describe(
              '会议权限配置列表，如果存在相同的权限配置项则它们之间为"逻辑或"的关系（即 有一个为true则拥有该权限）',
            )
            .optional(),
          meeting_initial_type: z
            .number()
            .describe('会议初始类型 Options:1(group_meeting 多人会议),2(call 1v1呼叫(仅支持预约PSTN用户))')
            .optional(),
          meeting_connect: z.boolean().describe('该会议是否支持互通，不支持更新（注：该字段内测中）').optional(),
          call_setting: z
            .object({
              callee: z
                .object({
                  id: z.string().describe('用户ID').optional(),
                  user_type: z
                    .number()
                    .describe(
                      '用户类型，当前仅支持用户类型6(pstn用户) Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
                    ),
                  pstn_sip_info: z
                    .object({
                      nickname: z.string().describe('给pstn/sip用户设置的临时昵称').optional(),
                      main_address: z
                        .string()
                        .describe(
                          'pstn/sip主机号，格式为：[国际冠字]-[电话区号][电话号码]，当前仅支持国内手机及固定电话号码',
                        ),
                    })
                    .describe('pstn/sip信息')
                    .optional(),
                })
                .describe('被呼叫的用户'),
            })
            .describe('1v1呼叫相关参数')
            .optional(),
          auto_record: z.boolean().describe('使用飞书视频会议时，是否开启自动录制，默认false').optional(),
          assign_host_list: z
            .array(
              z.object({
                user_type: z
                  .number()
                  .describe('用户类型，仅支持设置同租户下的 Lark 用户 Options:1(lark_user 飞书用户)')
                  .optional(),
                id: z.string().describe('用户ID').optional(),
              }),
            )
            .describe('指定主持人列表')
            .optional(),
          password: z
            .string()
            .describe(
              '设置会议密码，不传则根据个人设置决定是否使用密码及分配随机密码，传空则不使用密码，传 4-9 位数字则设置密码',
            )
            .optional(),
        })
        .describe('会议设置'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ReserveDelete = {
  project: 'vc',
  name: 'vc.v1.reserve.delete',
  sdkName: 'vc.v1.reserve.delete',
  path: '/open-apis/vc/v1/reserves/:reserve_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-视频会议-预约-删除预约-删除一个预约',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ reserve_id: z.string().describe('预约ID（预约的唯一标识）').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ReserveGet = {
  project: 'vc',
  name: 'vc.v1.reserve.get',
  sdkName: 'vc.v1.reserve.get',
  path: '/open-apis/vc/v1/reserves/:reserve_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-预约-获取预约-获取一个预约的详情',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_id: z.string().describe('预约ID（预约的唯一标识）').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ReserveGetActiveMeeting = {
  project: 'vc',
  name: 'vc.v1.reserve.getActiveMeeting',
  sdkName: 'vc.v1.reserve.getActiveMeeting',
  path: '/open-apis/vc/v1/reserves/:reserve_id/get_active_meeting',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-预约-获取活跃会议-获取一个预约的当前活跃会议',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      with_participants: z.boolean().describe('是否需要参会人列表，默认为false').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ reserve_id: z.string().describe('预约ID（预约的唯一标识）').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ReserveUpdate = {
  project: 'vc',
  name: 'vc.v1.reserve.update',
  sdkName: 'vc.v1.reserve.update',
  path: '/open-apis/vc/v1/reserves/:reserve_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-视频会议-预约-更新预约-更新一个预约',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      end_time: z.string().describe('预约到期时间（unix时间，单位sec）').optional(),
      meeting_settings: z
        .object({
          topic: z.string().describe('会议主题').optional(),
          action_permissions: z
            .array(
              z.object({
                permission: z
                  .number()
                  .describe(
                    '权限项 Options:1(can_be_host 是否能成为主持人),2(can_invite 是否能邀请参会人),3(can_join 是否能加入会议)',
                  ),
                permission_checkers: z
                  .array(
                    z.object({
                      check_field: z
                        .number()
                        .describe(
                          '检查字段类型 Options:1(user_id 用户ID（check_list填入用户ID）),2(user_type 用户类型（check_list可选值有 "1"：飞书用户、"2"：rooms用户、"6"：pstn用户、"7"：sip用户）),3(tenant_id 租户ID（check_list填入租户tenant_key）)',
                        ),
                      check_mode: z
                        .number()
                        .describe(
                          '检查方式 Options:1(within 在check_list中为有权限（白名单）),2(without 不在check_list中为有权限（黑名单）)',
                        ),
                      check_list: z.array(z.string()).describe('检查字段列表（根据check_field的类型填入对应内容）'),
                    }),
                  )
                  .describe('权限检查器列表，权限检查器之间为"逻辑或"的关系（即 有一个为true则拥有该权限）'),
              }),
            )
            .describe(
              '会议权限配置列表，如果存在相同的权限配置项则它们之间为"逻辑或"的关系（即 有一个为true则拥有该权限）',
            )
            .optional(),
          meeting_initial_type: z
            .number()
            .describe('会议初始类型 Options:1(group_meeting 多人会议),2(call 1v1呼叫)')
            .optional(),
          meeting_connect: z.boolean().describe('该会议是否支持互通，不支持更新（注：该字段内测中）').optional(),
          call_setting: z
            .object({
              callee: z
                .object({
                  id: z.string().describe('用户ID').optional(),
                  user_type: z
                    .number()
                    .describe(
                      '用户类型，当前仅支持用户类型6(pstn用户) Options:1(lark_user 飞书用户),2(room_user rooms用户),3(doc_user 文档用户),4(neo_user neo单品用户),5(neo_guest_user neo单品游客用户),6(pstn_user pstn用户),7(sip_user sip用户)',
                    ),
                  pstn_sip_info: z
                    .object({
                      nickname: z.string().describe('给pstn/sip用户设置的临时昵称').optional(),
                      main_address: z
                        .string()
                        .describe(
                          'pstn/sip主机号，格式为：[国际冠字]-[电话区号][电话号码]，当前仅支持国内手机及固定电话号码',
                        ),
                    })
                    .describe('pstn/sip信息')
                    .optional(),
                })
                .describe('被呼叫的用户'),
            })
            .describe('1v1呼叫相关参数')
            .optional(),
          auto_record: z.boolean().describe('使用飞书视频会议时，是否开启自动录制，默认false').optional(),
          assign_host_list: z
            .array(
              z.object({
                user_type: z
                  .number()
                  .describe('用户类型，仅支持设置同租户下的 Lark 用户 Options:1(lark_user 飞书用户)')
                  .optional(),
                id: z.string().describe('用户ID').optional(),
              }),
            )
            .describe('指定主持人列表')
            .optional(),
          password: z
            .string()
            .describe(
              '设置会议密码，不传则根据个人设置决定是否使用密码及分配随机密码，传空则不使用密码，传 4-9 位数字则设置密码',
            )
            .optional(),
        })
        .describe('会议设置')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ reserve_id: z.string().describe('预约ID（预约的唯一标识）').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ResourceReservationListGet = {
  project: 'vc',
  name: 'vc.v1.resourceReservationList.get',
  sdkName: 'vc.v1.resourceReservationList.get',
  path: '/open-apis/vc/v1/resource_reservation_list',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议数据-查询会议室预定数据-查询会议室预定数据，具体权限要求请参考「资源介绍」',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      room_level_id: z.string().describe('层级ID，如传递非omb前缀的异常ID时，会默认使用租户层级进行兜底'),
      need_topic: z.boolean().describe('是否展示会议主题').optional(),
      start_time: z.string().describe('查询开始时间（unix时间，单位sec）'),
      end_time: z.string().describe('查询结束时间（unix时间，单位sec）'),
      room_ids: z
        .array(z.string())
        .describe(
          '待筛选的会议室ID列表；如需要传递多个会议室ID，需要通过room_ids=aaaa&room_ids=bbbb&room_ids=cccc的形式传递',
        ),
      is_exclude: z
        .boolean()
        .describe(
          '默认为false；若为false，则获取room_ids字段传入的会议室列表预定数据；若为true，则根据room_level_id字段获取层级下的会议室列表，并过滤掉room_ids范围的会议室，获取剩余会议室的预定数据',
        )
        .optional(),
      page_size: z.number().describe('分页尺寸大小').optional(),
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
export const vcV1RoomConfigQuery = {
  project: 'vc',
  name: 'vc.v1.roomConfig.query',
  sdkName: 'vc.v1.roomConfig.query',
  path: '/open-apis/vc/v1/room_configs/query',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-历史版本（不推荐）-会议室-会议室配置-查询会议室配置-查询一个范围内的会议室配置',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope: z
        .number()
        .describe(
          '查询节点范围 Options:1(tenant 租户),2(country_district 国家/地区),3(city 城市),4(building 建筑),5(floor 楼层),6(room 会议室)',
        ),
      country_id: z.string().describe('国家/地区ID scope为2，3时需要此参数').optional(),
      district_id: z.string().describe('城市ID scope为3时需要此参数').optional(),
      building_id: z.string().describe('建筑ID scope为4，5时需要此参数').optional(),
      floor_name: z.string().describe('楼层 scope为5时需要此参数').optional(),
      room_id: z.string().describe('会议室ID scope为6时需要此参数').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const vcV1RoomConfigSet = {
  project: 'vc',
  name: 'vc.v1.roomConfig.set',
  sdkName: 'vc.v1.roomConfig.set',
  path: '/open-apis/vc/v1/room_configs/set',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-会议室-会议室配置-设置会议室配置-设置一个范围内的会议室配置',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z
        .number()
        .describe(
          '设置节点范围 Options:1(tenant 租户),2(country_district 国家/地区),3(city 城市),4(building 建筑),5(floor 楼层),6(room 会议室)',
        ),
      country_id: z.string().describe('国家/地区ID scope为2，3时需要此参数').optional(),
      district_id: z.string().describe('城市ID scope为3时需要此参数').optional(),
      building_id: z.string().describe('建筑ID scope为4，5时需要此参数').optional(),
      floor_name: z.string().describe('楼层 scope为5时需要此参数').optional(),
      room_id: z.string().describe('会议室ID scope为6时需要此参数').optional(),
      room_config: z
        .object({
          room_background: z.string().describe('飞书会议室背景图').optional(),
          display_background: z.string().describe('飞书签到板背景图').optional(),
          digital_signage: z
            .object({
              enable: z.boolean().describe('是否开启数字标牌功能').optional(),
              mute: z.boolean().describe('是否静音播放').optional(),
              start_display: z
                .number()
                .describe('在会议结束n分钟后开始播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              stop_display: z
                .number()
                .describe('在日程会议开始前n分钟停止播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              materials: z
                .array(
                  z.object({
                    id: z.string().describe('素材ID，当设置新素材时，无需传递该字段').optional(),
                    name: z.string().describe('素材名称').optional(),
                    material_type: z.number().describe('素材类型 Options:1(pic 图片),2(video 视频),3(gif)').optional(),
                    url: z.string().describe('素材url').optional(),
                    duration: z.number().describe('播放时长（单位sec），取值1~43200').optional(),
                    cover: z.string().describe('素材封面url').optional(),
                    md5: z.string().describe('素材文件md5').optional(),
                    vid: z.string().describe('素材文件vid').optional(),
                    size: z.string().describe('素材文件大小（单位byte）').optional(),
                  }),
                )
                .describe('素材列表')
                .optional(),
            })
            .describe('飞书会议室数字标牌')
            .optional(),
          room_box_digital_signage: z
            .object({
              enable: z.boolean().describe('是否开启数字标牌功能').optional(),
              mute: z.boolean().describe('是否静音播放').optional(),
              start_display: z
                .number()
                .describe('在会议结束n分钟后开始播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              stop_display: z
                .number()
                .describe('在日程会议开始前n分钟停止播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              materials: z
                .array(
                  z.object({
                    id: z.string().describe('素材ID，当设置新素材时，无需传递该字段').optional(),
                    name: z.string().describe('素材名称').optional(),
                    material_type: z.number().describe('素材类型 Options:1(pic 图片),2(video 视频),3(gif)').optional(),
                    url: z.string().describe('素材url').optional(),
                    duration: z.number().describe('播放时长（单位sec），取值1~43200').optional(),
                    cover: z.string().describe('素材封面url').optional(),
                    md5: z.string().describe('素材文件md5').optional(),
                    vid: z.string().describe('素材文件vid').optional(),
                    size: z.string().describe('素材文件大小（单位byte）').optional(),
                  }),
                )
                .describe('素材列表')
                .optional(),
            })
            .describe('飞书投屏盒子数字标牌')
            .optional(),
          room_status: z
            .object({
              status: z.boolean().describe('是否启用会议室'),
              disable_start_time: z.string().describe('禁用开始时间（unix时间，单位sec）').optional(),
              disable_end_time: z.string().describe('禁用结束时间（unix时间，单位sec，数值0表示永久禁用）').optional(),
              disable_reason: z.string().describe('禁用原因').optional(),
              contact_ids: z.array(z.string()).describe('联系人列表，id类型由user_id_type参数决定').optional(),
              disable_notice: z.boolean().describe('是否在禁用时发送通知给预定了该会议室的员工').optional(),
              resume_notice: z.boolean().describe('是否在恢复启用时发送通知给联系人').optional(),
            })
            .describe('会议室状态')
            .optional(),
        })
        .describe('会议室设置'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const vcV1RoomConfigSetCheckboardAccessCode = {
  project: 'vc',
  name: 'vc.v1.roomConfig.setCheckboardAccessCode',
  sdkName: 'vc.v1.roomConfig.setCheckboardAccessCode',
  path: '/open-apis/vc/v1/room_configs/set_checkboard_access_code',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-会议室-会议室配置-创建签到板部署码-创建一个范围内的签到板部署码',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z
        .number()
        .describe(
          '设置节点范围 Options:1(tenant 租户),2(country_district 国家/地区),3(city 城市),4(building 建筑),5(floor 楼层),6(room 会议室)',
        ),
      country_id: z.string().describe('国家/地区ID scope为2，3时需要此参数').optional(),
      district_id: z.string().describe('城市ID scope为3时需要此参数').optional(),
      building_id: z.string().describe('建筑ID scope为4，5时需要此参数').optional(),
      floor_name: z.string().describe('楼层 scope为5时需要此参数').optional(),
      room_id: z.string().describe('会议室ID scope为6时需要此参数').optional(),
      valid_day: z.number().describe('有效天数 Options:1(day 1天),7(week 7天),30(month 30天)'),
    }),
  },
};
export const vcV1RoomConfigSetRoomAccessCode = {
  project: 'vc',
  name: 'vc.v1.roomConfig.setRoomAccessCode',
  sdkName: 'vc.v1.roomConfig.setRoomAccessCode',
  path: '/open-apis/vc/v1/room_configs/set_room_access_code',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-历史版本（不推荐）-会议室-会议室配置-创建会议室部署码-创建一个范围内的会议室部署码',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope: z
        .number()
        .describe(
          '设置节点范围 Options:1(tenant 租户),2(country_district 国家/地区),3(city 城市),4(building 建筑),5(floor 楼层),6(room 会议室)',
        ),
      country_id: z.string().describe('国家/地区ID scope为2，3时需要此参数').optional(),
      district_id: z.string().describe('城市ID scope为3时需要此参数').optional(),
      building_id: z.string().describe('建筑ID scope为4，5时需要此参数').optional(),
      floor_name: z.string().describe('楼层 scope为5时需要此参数').optional(),
      room_id: z.string().describe('会议室ID scope为6时需要此参数').optional(),
      valid_day: z.number().describe('有效天数 Options:1(day 1天),7(week 7天),30(month 30天)'),
    }),
  },
};
export const vcV1RoomLevelCreate = {
  project: 'vc',
  name: 'vc.v1.roomLevel.create',
  sdkName: 'vc.v1.roomLevel.create',
  path: '/open-apis/vc/v1/room_levels',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-会议室层级-创建会议室层级-该接口用于创建会议室层级',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('层级名称'),
      parent_id: z
        .string()
        .describe(
          '父层级ID。**说明**：如需在租户层级（即根层级）下创建会议室层级，可以先调用接口，将路径参数 `room_level_id` 传入 `0` 进行查询，返回结果中的 `room_level_id` 值即为根层级 ID',
        ),
      custom_group_id: z.string().describe('自定义层级ID').optional(),
    }),
  },
};
export const vcV1RoomLevelDel = {
  project: 'vc',
  name: 'vc.v1.roomLevel.del',
  sdkName: 'vc.v1.roomLevel.del',
  path: '/open-apis/vc/v1/room_levels/del',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-会议室层级-删除会议室层级-该接口可以用来删除某个会议室层级',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      room_level_id: z.string().describe('层级ID'),
      delete_child: z.boolean().describe('是否删除所有子层级').optional(),
    }),
  },
};
export const vcV1RoomLevelGet = {
  project: 'vc',
  name: 'vc.v1.roomLevel.get',
  sdkName: 'vc.v1.roomLevel.get',
  path: '/open-apis/vc/v1/room_levels/:room_level_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室层级-查询会议室层级详情-该接口可以使用会议室层级 ID 查询会议室层级详情',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ room_level_id: z.string().describe('层级ID，查询租户层级可传0') }),
  },
};
export const vcV1RoomLevelList = {
  project: 'vc',
  name: 'vc.v1.roomLevel.list',
  sdkName: 'vc.v1.roomLevel.list',
  path: '/open-apis/vc/v1/room_levels',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室层级-查询会议室层级列表-该接口用来查询某个会议室层级下的子层级列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      room_level_id: z.string().describe('层级ID，当需要获取租户下层级列表时，room_level_id可传空').optional(),
      page_size: z.number().describe('分页尺寸大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
  },
};
export const vcV1RoomLevelMget = {
  project: 'vc',
  name: 'vc.v1.roomLevel.mget',
  sdkName: 'vc.v1.roomLevel.mget',
  path: '/open-apis/vc/v1/room_levels/mget',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-视频会议-会议室层级-批量查询会议室层级详情-该接口可以使用会议室层级 ID 批量查询会议室层级详情',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ level_ids: z.array(z.string()).describe('层级ID列表') }),
  },
};
export const vcV1RoomLevelPatch = {
  project: 'vc',
  name: 'vc.v1.roomLevel.patch',
  sdkName: 'vc.v1.roomLevel.patch',
  path: '/open-apis/vc/v1/room_levels/:room_level_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室层级-更新会议室层级-该接口可以用来更新某个会议室层级的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('层级名称'),
      parent_id: z.string().describe('父层级ID'),
      custom_group_id: z.string().describe('自定义层级ID').optional(),
    }),
    path: z.object({ room_level_id: z.string().describe('层级ID') }),
  },
};
export const vcV1RoomLevelSearch = {
  project: 'vc',
  name: 'vc.v1.roomLevel.search',
  sdkName: 'vc.v1.roomLevel.search',
  path: '/open-apis/vc/v1/room_levels/search',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议室层级-搜索会议室层级-该接口可以用来搜索会议室层级，支持使用自定义会议室层级 ID 进行查询',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ custom_level_ids: z.string().describe('用于查询指定会议室层级的自定义会议室层级ID') }),
  },
};
export const vcV1RoomCreate = {
  project: 'vc',
  name: 'vc.v1.room.create',
  sdkName: 'vc.v1.room.create',
  path: '/open-apis/vc/v1/rooms',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-会议室管理-创建会议室-该接口用于创建会议室',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('会议室名称'),
      capacity: z.number().describe('会议室能容纳的人数'),
      description: z.string().describe('会议室的相关描述').optional(),
      custom_room_id: z.string().describe('自定义的会议室ID').optional(),
      room_level_id: z.string().describe('层级ID'),
      room_status: z
        .object({
          status: z.boolean().describe('是否启用会议室'),
          schedule_status: z
            .boolean()
            .describe('会议室未来状态为启用或禁用（请忽略，该字段用于查询接口的返回值）')
            .optional(),
          disable_start_time: z.string().describe('禁用开始时间（unix时间，单位sec）').optional(),
          disable_end_time: z.string().describe('禁用结束时间（unix时间，单位sec，数值0表示永久禁用）').optional(),
          disable_reason: z.string().describe('禁用原因').optional(),
          contact_ids: z.array(z.string()).describe('联系人列表，id类型由user_id_type参数决定').optional(),
          disable_notice: z.boolean().describe('是否在禁用时发送通知给预定了该会议室的员工').optional(),
          resume_notice: z.boolean().describe('是否在恢复启用时发送通知给联系人').optional(),
        })
        .describe('会议室状态')
        .optional(),
      device: z
        .array(z.object({ name: z.string().describe('设施名称') }))
        .describe('设施信息列表')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const vcV1RoomDelete = {
  project: 'vc',
  name: 'vc.v1.room.delete',
  sdkName: 'vc.v1.room.delete',
  path: '/open-apis/vc/v1/rooms/:room_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-视频会议-会议室管理-删除会议室-该接口可以用来删除某个会议室',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ room_id: z.string().describe('会议室ID') }),
  },
};
export const vcV1RoomGet = {
  project: 'vc',
  name: 'vc.v1.room.get',
  sdkName: 'vc.v1.room.get',
  path: '/open-apis/vc/v1/rooms/:room_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室管理-查询会议室详情-该接口可以使用会议室 ID 查询会议室详情',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ room_id: z.string().describe('会议室ID') }),
  },
};
export const vcV1RoomList = {
  project: 'vc',
  name: 'vc.v1.room.list',
  sdkName: 'vc.v1.room.list',
  path: '/open-apis/vc/v1/rooms',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-视频会议-会议室管理-查询会议室列表-该接口可以用来查询某个会议室层级下会议室列表',
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
      room_level_id: z.string().describe('层级ID，当需要获取租户下会议室列表时，room_level_id可传空').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const vcV1RoomMget = {
  project: 'vc',
  name: 'vc.v1.room.mget',
  sdkName: 'vc.v1.room.mget',
  path: '/open-apis/vc/v1/rooms/mget',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-视频会议-会议室管理-批量查询会议室详情-该接口可以使用会议室 ID 批量查询会议室详情',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ room_ids: z.array(z.string()).describe('会议室id列表') }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const vcV1RoomPatch = {
  project: 'vc',
  name: 'vc.v1.room.patch',
  sdkName: 'vc.v1.room.patch',
  path: '/open-apis/vc/v1/rooms/:room_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-视频会议-会议室管理-更新会议室-该接口可以用来更新某个会议室的信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      name: z.string().describe('会议室名称').optional(),
      capacity: z.number().describe('会议室能容纳的人数').optional(),
      description: z.string().describe('会议室的相关描述').optional(),
      custom_room_id: z.string().describe('自定义的会议室ID').optional(),
      room_level_id: z.string().describe('层级ID').optional(),
      room_status: z
        .object({
          status: z.boolean().describe('是否启用会议室'),
          schedule_status: z
            .boolean()
            .describe('会议室未来状态为启用或禁用（请忽略，该字段用于查询接口的返回值）')
            .optional(),
          disable_start_time: z.string().describe('禁用开始时间（unix时间，单位sec）').optional(),
          disable_end_time: z.string().describe('禁用结束时间（unix时间，单位sec，数值0表示永久禁用）').optional(),
          disable_reason: z.string().describe('禁用原因').optional(),
          contact_ids: z.array(z.string()).describe('联系人列表，id类型由user_id_type参数决定').optional(),
          disable_notice: z.boolean().describe('是否在禁用时发送通知给预定了该会议室的员工').optional(),
          resume_notice: z.boolean().describe('是否在恢复启用时发送通知给联系人').optional(),
        })
        .describe('会议室状态')
        .optional(),
      device: z
        .array(z.object({ name: z.string().describe('设施名称') }))
        .describe('设施信息列表')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ room_id: z.string().describe('会议室ID') }),
  },
};
export const vcV1RoomSearch = {
  project: 'vc',
  name: 'vc.v1.room.search',
  sdkName: 'vc.v1.room.search',
  path: '/open-apis/vc/v1/rooms/search',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-视频会议-会议室管理-搜索会议室-该接口可以用来搜索会议室，支持使用关键词进行搜索，也支持使用自定义会议室 ID 进行查询。该接口只会返回用户有预定权限的会议室列表',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      custom_room_ids: z
        .array(z.string())
        .describe('用于查询指定会议室的租户自定义会议室ID列表，优先使用该字段进行查询')
        .optional(),
      keyword: z.string().describe('会议室搜索关键词（当custom_room_ids为空时，使用该字段进行查询）').optional(),
      room_level_id: z
        .string()
        .describe('在该会议室层级下进行搜索（当custom_room_ids为空时，使用该字段进行查询）')
        .optional(),
      search_level_name: z
        .boolean()
        .describe('搜索会议室是否可以包括层级名称（当custom_room_ids为空时，使用 keyword 字段查询）')
        .optional(),
      page_size: z
        .number()
        .describe('分页大小，该值默认为10，最大为100（当custom_room_ids为空时，使用该字段进行查询）')
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const vcV1ScopeConfigCreate = {
  project: 'vc',
  name: 'vc.v1.scopeConfig.create',
  sdkName: 'vc.v1.scopeConfig.create',
  path: '/open-apis/vc/v1/scope_config',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-视频会议-会议室配置-设置会议室配置-该接口可以用来设置某个会议层级范围下或者某个会议室的配置',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      scope_type: z.number().describe('查询节点范围 Options:1(RoomLevel 会议室层级),2(Room 会议室)'),
      scope_id: z.string().describe('查询节点ID：如果scope_type为1，则为层级ID，如果scope_type为2，则为会议室ID'),
      scope_config: z
        .object({
          room_background: z.string().describe('飞书会议室背景图').optional(),
          display_background: z.string().describe('飞书签到板背景图').optional(),
          digital_signage: z
            .object({
              if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
              enable: z.boolean().describe('是否开启数字标牌功能').optional(),
              mute: z.boolean().describe('是否静音播放').optional(),
              start_display: z
                .number()
                .describe('在会议结束n分钟后开始播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              stop_display: z
                .number()
                .describe('在日程会议开始前n分钟停止播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              materials: z
                .array(
                  z.object({
                    id: z.string().describe('素材ID，当设置新素材时，无需传递该字段').optional(),
                    name: z.string().describe('素材名称').optional(),
                    material_type: z.number().describe('素材类型 Options:1(pic 图片),2(video 视频),3(gif)').optional(),
                    url: z.string().describe('素材url').optional(),
                    duration: z.number().describe('播放时长（单位sec），取值1~43200').optional(),
                    cover: z.string().describe('素材封面url').optional(),
                    md5: z.string().describe('素材文件md5').optional(),
                    vid: z.string().describe('素材文件vid').optional(),
                    size: z.string().describe('素材文件大小（单位byte）').optional(),
                  }),
                )
                .describe('素材列表')
                .optional(),
            })
            .describe('飞书会议室数字标牌')
            .optional(),
          room_box_digital_signage: z
            .object({
              if_cover_child_scope: z.boolean().describe('是否覆盖子层级及会议室').optional(),
              enable: z.boolean().describe('是否开启数字标牌功能').optional(),
              mute: z.boolean().describe('是否静音播放').optional(),
              start_display: z
                .number()
                .describe('在会议结束n分钟后开始播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              stop_display: z
                .number()
                .describe('在日程会议开始前n分钟停止播放，取值1~720（仅对飞书会议室数字标牌生效）')
                .optional(),
              materials: z
                .array(
                  z.object({
                    id: z.string().describe('素材ID，当设置新素材时，无需传递该字段').optional(),
                    name: z.string().describe('素材名称').optional(),
                    material_type: z.number().describe('素材类型 Options:1(pic 图片),2(video 视频),3(gif)').optional(),
                    url: z.string().describe('素材url').optional(),
                    duration: z.number().describe('播放时长（单位sec），取值1~43200').optional(),
                    cover: z.string().describe('素材封面url').optional(),
                    md5: z.string().describe('素材文件md5').optional(),
                    vid: z.string().describe('素材文件vid').optional(),
                    size: z.string().describe('素材文件大小（单位byte）').optional(),
                  }),
                )
                .describe('素材列表')
                .optional(),
            })
            .describe('飞书投屏盒子数字标牌')
            .optional(),
          room_status: z
            .object({
              status: z.boolean().describe('是否启用会议室'),
              schedule_status: z
                .boolean()
                .describe('会议室未来状态为启用或禁用（请忽略，该字段用于查询接口的返回值）')
                .optional(),
              disable_start_time: z.string().describe('禁用开始时间（unix时间，单位sec）').optional(),
              disable_end_time: z.string().describe('禁用结束时间（unix时间，单位sec，数值0表示永久禁用）').optional(),
              disable_reason: z.string().describe('禁用原因').optional(),
              contact_ids: z.array(z.string()).describe('联系人列表，id类型由user_id_type参数决定').optional(),
              disable_notice: z.boolean().describe('是否在禁用时发送通知给预定了该会议室的员工').optional(),
              resume_notice: z.boolean().describe('是否在恢复启用时发送通知给联系人').optional(),
            })
            .describe('会议室状态')
            .optional(),
        })
        .describe('节点配置')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
  },
};
export const vcV1ScopeConfigGet = {
  project: 'vc',
  name: 'vc.v1.scopeConfig.get',
  sdkName: 'vc.v1.scopeConfig.get',
  path: '/open-apis/vc/v1/scope_config',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-视频会议-会议室配置-查询会议室配置-该接口可以用来查询某个会议层级范围下或者某个会议室的配置',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      scope_type: z.number().describe('查询节点范围 Options:1(RoomLevel 会议室层级),2(Room 会议室)'),
      scope_id: z.string().describe('查询节点ID：如果scope_type为1，则为层级ID，如果scope_type为2，则为会议室ID'),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
  },
};
export const vcV1Tools = [
  vcV1AlertList,
  vcV1ExportGet,
  vcV1ExportMeetingList,
  vcV1ExportParticipantList,
  vcV1ExportParticipantQualityList,
  vcV1ExportResourceReservationList,
  vcV1MeetingListGet,
  vcV1MeetingEnd,
  vcV1MeetingGet,
  vcV1MeetingInvite,
  vcV1MeetingKickout,
  vcV1MeetingListByNo,
  vcV1MeetingRecordingGet,
  vcV1MeetingRecordingSetPermission,
  vcV1MeetingRecordingStart,
  vcV1MeetingRecordingStop,
  vcV1MeetingSetHost,
  vcV1ParticipantListGet,
  vcV1ParticipantQualityListGet,
  vcV1ReportGetDaily,
  vcV1ReportGetTopUser,
  vcV1ReserveConfigAdminGet,
  vcV1ReserveConfigAdminPatch,
  vcV1ReserveConfigDisableInformGet,
  vcV1ReserveConfigDisableInformPatch,
  vcV1ReserveConfigFormGet,
  vcV1ReserveConfigFormPatch,
  vcV1ReserveConfigPatch,
  vcV1ReserveConfigReserveScope,
  vcV1ReserveApply,
  vcV1ReserveDelete,
  vcV1ReserveGet,
  vcV1ReserveGetActiveMeeting,
  vcV1ReserveUpdate,
  vcV1ResourceReservationListGet,
  vcV1RoomConfigQuery,
  vcV1RoomConfigSet,
  vcV1RoomConfigSetCheckboardAccessCode,
  vcV1RoomConfigSetRoomAccessCode,
  vcV1RoomLevelCreate,
  vcV1RoomLevelDel,
  vcV1RoomLevelGet,
  vcV1RoomLevelList,
  vcV1RoomLevelMget,
  vcV1RoomLevelPatch,
  vcV1RoomLevelSearch,
  vcV1RoomCreate,
  vcV1RoomDelete,
  vcV1RoomGet,
  vcV1RoomList,
  vcV1RoomMget,
  vcV1RoomPatch,
  vcV1RoomSearch,
  vcV1ScopeConfigCreate,
  vcV1ScopeConfigGet,
];
