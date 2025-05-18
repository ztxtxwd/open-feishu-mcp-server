import { z } from 'zod';
export type mailV1ToolName =
  | 'mail.v1.mailgroupAlias.create'
  | 'mail.v1.mailgroupAlias.delete'
  | 'mail.v1.mailgroupAlias.list'
  | 'mail.v1.mailgroup.create'
  | 'mail.v1.mailgroup.delete'
  | 'mail.v1.mailgroup.get'
  | 'mail.v1.mailgroup.list'
  | 'mail.v1.mailgroupManager.batchCreate'
  | 'mail.v1.mailgroupManager.batchDelete'
  | 'mail.v1.mailgroupManager.list'
  | 'mail.v1.mailgroupMember.batchCreate'
  | 'mail.v1.mailgroupMember.batchDelete'
  | 'mail.v1.mailgroupMember.create'
  | 'mail.v1.mailgroupMember.delete'
  | 'mail.v1.mailgroupMember.get'
  | 'mail.v1.mailgroupMember.list'
  | 'mail.v1.mailgroup.patch'
  | 'mail.v1.mailgroupPermissionMember.batchCreate'
  | 'mail.v1.mailgroupPermissionMember.batchDelete'
  | 'mail.v1.mailgroupPermissionMember.create'
  | 'mail.v1.mailgroupPermissionMember.delete'
  | 'mail.v1.mailgroupPermissionMember.get'
  | 'mail.v1.mailgroupPermissionMember.list'
  | 'mail.v1.mailgroup.update'
  | 'mail.v1.publicMailboxAlias.create'
  | 'mail.v1.publicMailboxAlias.delete'
  | 'mail.v1.publicMailboxAlias.list'
  | 'mail.v1.publicMailbox.create'
  | 'mail.v1.publicMailbox.delete'
  | 'mail.v1.publicMailbox.get'
  | 'mail.v1.publicMailbox.list'
  | 'mail.v1.publicMailboxMember.batchCreate'
  | 'mail.v1.publicMailboxMember.batchDelete'
  | 'mail.v1.publicMailboxMember.clear'
  | 'mail.v1.publicMailboxMember.create'
  | 'mail.v1.publicMailboxMember.delete'
  | 'mail.v1.publicMailboxMember.get'
  | 'mail.v1.publicMailboxMember.list'
  | 'mail.v1.publicMailbox.patch'
  | 'mail.v1.publicMailbox.update'
  | 'mail.v1.userMailboxAlias.create'
  | 'mail.v1.userMailboxAlias.delete'
  | 'mail.v1.userMailboxAlias.list'
  | 'mail.v1.userMailbox.delete'
  | 'mail.v1.userMailboxEvent.subscribe'
  | 'mail.v1.userMailboxEvent.subscription'
  | 'mail.v1.userMailboxEvent.unsubscribe'
  | 'mail.v1.userMailboxFolder.create'
  | 'mail.v1.userMailboxFolder.delete'
  | 'mail.v1.userMailboxFolder.list'
  | 'mail.v1.userMailboxFolder.patch'
  | 'mail.v1.userMailboxMailContact.create'
  | 'mail.v1.userMailboxMailContact.delete'
  | 'mail.v1.userMailboxMailContact.list'
  | 'mail.v1.userMailboxMailContact.patch'
  | 'mail.v1.userMailboxMessageAttachment.downloadUrl'
  | 'mail.v1.userMailboxMessage.get'
  | 'mail.v1.userMailboxMessage.getByCard'
  | 'mail.v1.userMailboxMessage.list'
  | 'mail.v1.userMailboxMessage.send'
  | 'mail.v1.userMailboxRule.create'
  | 'mail.v1.userMailboxRule.delete'
  | 'mail.v1.userMailboxRule.list'
  | 'mail.v1.userMailboxRule.reorder'
  | 'mail.v1.userMailboxRule.update'
  | 'mail.v1.user.query';
export const mailV1MailgroupAliasCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupAlias.create',
  sdkName: 'mail.v1.mailgroupAlias.create',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组别名-创建邮件组别名-创建邮件组别名',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ email_alias: z.string().describe('邮箱别名').optional() }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组id或邮件组邮箱地址').optional() }),
  },
};
export const mailV1MailgroupAliasDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupAlias.delete',
  sdkName: 'mail.v1.mailgroupAlias.delete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases/:alias_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组别名-删除邮件组别名-删除邮件组别名',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      mailgroup_id: z.string().describe('邮件组id或邮件组邮箱地址').optional(),
      alias_id: z.string().describe('邮件组别名邮箱地址').optional(),
    }),
  },
};
export const mailV1MailgroupAliasList = {
  project: 'mail',
  name: 'mail.v1.mailgroupAlias.list',
  sdkName: 'mail.v1.mailgroupAlias.list',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/aliases',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组别名-获取邮件组所有别名-获取邮件组所有别名',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ mailgroup_id: z.string().describe('邮件组id或邮件组邮箱地址').optional() }),
  },
};
export const mailV1MailgroupCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroup.create',
  sdkName: 'mail.v1.mailgroup.create',
  path: '/open-apis/mail/v1/mailgroups',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-创建邮件组-创建一个邮件组',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('邮件组地址').optional(),
      name: z.string().describe('邮件组名称').optional(),
      description: z.string().describe('邮件组描述').optional(),
      who_can_send_mail: z
        .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
        .describe(
          '谁可发送邮件到此邮件组 Options:ANYONE(任何人),ALL_INTERNAL_USERS(仅组织内部成员),ALL_GROUP_MEMBERS(仅邮件组成员),CUSTOM_MEMBERS(自定义成员)',
        )
        .optional(),
    }),
  },
};
export const mailV1MailgroupDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroup.delete',
  sdkName: 'mail.v1.mailgroup.delete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-删除邮件组-删除一个邮件组',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupGet = {
  project: 'mail',
  name: 'mail.v1.mailgroup.get',
  sdkName: 'mail.v1.mailgroup.get',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-查询指定邮件组-获取特定邮件组信息',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupList = {
  project: 'mail',
  name: 'mail.v1.mailgroup.list',
  sdkName: 'mail.v1.mailgroup.list',
  path: '/open-apis/mail/v1/mailgroups',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-批量获取邮件组-分页批量获取邮件组',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      manager_user_id: z.string().describe('邮件组管理员用户ID，用于获取该用户有管理权限的邮件组').optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
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
export const mailV1MailgroupManagerBatchCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupManager.batchCreate',
  sdkName: 'mail.v1.mailgroupManager.batchCreate',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理员-批量创建邮件组管理员-批量创建邮件组管理员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      mailgroup_manager_list: z
        .array(z.object({ user_id: z.string().describe('管理员用户ID').optional() }))
        .describe('邮件组管理员列表')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或邮箱地址').optional() }),
  },
};
export const mailV1MailgroupManagerBatchDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupManager.batchDelete',
  sdkName: 'mail.v1.mailgroupManager.batchDelete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers/batch_delete',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理员-批量删除邮件组管理员-批量删除邮件组管理员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      mailgroup_manager_list: z
        .array(z.object({ user_id: z.string().describe('管理员用户ID').optional() }))
        .describe('邮件组管理员列表')
        .optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupManagerList = {
  project: 'mail',
  name: 'mail.v1.mailgroupManager.list',
  sdkName: 'mail.v1.mailgroupManager.list',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/managers',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理员-批量获取邮件组管理员-批量获取邮件组管理员',
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
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或邮箱地址').optional() }),
  },
};
export const mailV1MailgroupMemberBatchCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.batchCreate',
  sdkName: 'mail.v1.mailgroupMember.batchCreate',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-批量创建邮件组成员-一次请求可以给一个邮件组添加多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      items: z
        .array(
          z.object({
            member_id: z.string().describe('邮件组内成员唯一标识（在请求体中不用填）').optional(),
            email: z
              .string()
              .describe('成员邮箱地址（当成员类型是EXTERNAL_USER/MAIL_GROUP/OTHER_MEMBER时有值）')
              .optional(),
            user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
            department_id: z.string().describe('租户内部门的唯一标识（当成员类型是DEPARTMENT时有值）').optional(),
            type: z
              .enum(['USER', 'DEPARTMENT', 'COMPANY', 'EXTERNAL_USER', 'MAIL_GROUP', 'PUBLIC_MAILBOX', 'OTHER_MEMBER'])
              .describe(
                '成员类型 Options:USER(内部用户),DEPARTMENT(部门),COMPANY(全员),EXTERNAL_USER(外部用户),MAIL_GROUP(邮件组),PUBLIC_MAILBOX(member is a public mailbox),OTHER_MEMBER(内部成员)',
              )
              .optional(),
          }),
        )
        .describe('本次添加的邮件组成员列表')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional() }),
  },
};
export const mailV1MailgroupMemberBatchDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.batchDelete',
  sdkName: 'mail.v1.mailgroupMember.batchDelete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/batch_delete',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-批量删除邮件组成员-一次请求可以删除一个邮件组中的多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      member_id_list: z
        .array(z.string().describe('The unique ID of a member in this mail group'))
        .describe('本次调用删除的成员ID列表')
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional() }),
  },
};
export const mailV1MailgroupMemberCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.create',
  sdkName: 'mail.v1.mailgroupMember.create',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-创建邮件组成员-向邮件组添加单个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('成员邮箱地址（当成员类型是EXTERNAL_USER/MAIL_GROUP/OTHER_MEMBER时有值）').optional(),
      user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
      department_id: z.string().describe('租户内部门的唯一标识（当成员类型是DEPARTMENT时有值）').optional(),
      type: z
        .enum(['USER', 'DEPARTMENT', 'COMPANY', 'EXTERNAL_USER', 'MAIL_GROUP', 'PUBLIC_MAILBOX', 'OTHER_MEMBER'])
        .describe(
          '成员类型 Options:USER(内部用户),DEPARTMENT(部门),COMPANY(全员),EXTERNAL_USER(外部用户),MAIL_GROUP(邮件组),PUBLIC_MAILBOX(member is a public mailbox),OTHER_MEMBER(内部成员)',
        )
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupMemberDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.delete',
  sdkName: 'mail.v1.mailgroupMember.delete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-删除邮件组成员-删除邮件组单个成员',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional(),
      member_id: z.string().describe('The unique ID of a member in this mail group').optional(),
    }),
  },
};
export const mailV1MailgroupMemberGet = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.get',
  sdkName: 'mail.v1.mailgroupMember.get',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members/:member_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-查询指定邮件组成员-获取邮件组单个成员信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional(),
      member_id: z.string().describe('邮件组内成员唯一标识').optional(),
    }),
  },
};
export const mailV1MailgroupMemberList = {
  project: 'mail',
  name: 'mail.v1.mailgroupMember.list',
  sdkName: 'mail.v1.mailgroupMember.list',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/members',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组成员-获取所有邮件组成员-分页批量获取邮件组成员列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional() }),
  },
};
export const mailV1MailgroupPatch = {
  project: 'mail',
  name: 'mail.v1.mailgroup.patch',
  sdkName: 'mail.v1.mailgroup.patch',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-修改邮件组部分信息-更新邮件组部分字段，没有填写的字段不会被更新',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('邮件组地址').optional(),
      name: z.string().describe('邮件组名称').optional(),
      description: z.string().describe('邮件组描述').optional(),
      who_can_send_mail: z
        .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
        .describe(
          '谁可发送邮件到此邮件组 Options:ANYONE(任何人),ALL_INTERNAL_USERS(仅组织内部成员),ALL_GROUP_MEMBERS(仅邮件组成员),CUSTOM_MEMBERS(自定义成员)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupPermissionMemberBatchCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.batchCreate',
  sdkName: 'mail.v1.mailgroupPermissionMember.batchCreate',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_create',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-批量创建邮件组权限成员-一次请求可以给一个邮件组添加多个权限成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      items: z
        .array(
          z.object({
            permission_member_id: z.string().describe('权限组内成员唯一标识（在请求体中不用填）').optional(),
            user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
            department_id: z.string().describe('租户内部门的唯一标识（当成员类型是DEPARTMENT时有值）').optional(),
            email: z.string().describe('成员邮箱地址（当成员类型是MAIL_GROUP/PUBLIC_MAILBOX时有值）').optional(),
            type: z
              .enum(['USER', 'DEPARTMENT', 'MAIL_GROUP', 'PUBLIC_MAILBOX'])
              .describe('成员类型 Options:USER(内部用户),DEPARTMENT(部门),MAIL_GROUP(邮件组),PUBLIC_MAILBOX(公共邮箱)')
              .optional(),
          }),
        )
        .describe('本次添加的邮件组权限成员列表')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional() }),
  },
};
export const mailV1MailgroupPermissionMemberBatchDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.batchDelete',
  sdkName: 'mail.v1.mailgroupPermissionMember.batchDelete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/batch_delete',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-批量删除邮件组权限成员-一次请求可以删除一个邮件组中的多个权限成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      permission_member_id_list: z
        .array(z.string().describe('The unique ID of a member in this permission group'))
        .describe('本次调用删除的权限成员ID列表'),
    }),
    path: z.object({ mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional() }),
  },
};
export const mailV1MailgroupPermissionMemberCreate = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.create',
  sdkName: 'mail.v1.mailgroupPermissionMember.create',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-创建邮件组权限成员-向邮件组添加单个自定义权限成员，添加后该成员可发送邮件到该邮件组',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
      department_id: z.string().describe('租户内部门的唯一标识（当成员类型是DEPARTMENT时有值）').optional(),
      email: z.string().describe('成员邮箱地址（当成员类型是MAIL_GROUP/PUBLIC_MAILBOX时有值）').optional(),
      type: z
        .enum(['USER', 'DEPARTMENT', 'MAIL_GROUP', 'PUBLIC_MAILBOX'])
        .describe('成员类型 Options:USER(内部用户),DEPARTMENT(部门),MAIL_GROUP(邮件组),PUBLIC_MAILBOX(公共邮箱)')
        .optional(),
    }),
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupPermissionMemberDelete = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.delete',
  sdkName: 'mail.v1.mailgroupPermissionMember.delete',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-删除邮件组权限成员-从自定义成员中删除单个成员，删除后该成员无法发送邮件到该邮件组',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      mailgroup_id: z.string().describe('The unique ID or email address of a mail group').optional(),
      permission_member_id: z.string().describe('The unique ID of a member in this permission group').optional(),
    }),
  },
};
export const mailV1MailgroupPermissionMemberGet = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.get',
  sdkName: 'mail.v1.mailgroupPermissionMember.get',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members/:permission_member_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-获取邮件组权限成员-获取邮件组单个权限成员信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
    }),
    path: z.object({
      mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional(),
      permission_member_id: z.string().describe('权限组内成员唯一标识').optional(),
    }),
  },
};
export const mailV1MailgroupPermissionMemberList = {
  project: 'mail',
  name: 'mail.v1.mailgroupPermissionMember.list',
  sdkName: 'mail.v1.mailgroupPermissionMember.list',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id/permission_members',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组权限成员-批量获取邮件组权限成员-分页批量获取邮件组权限成员列表',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
      department_id_type: z
        .enum(['department_id', 'open_department_id'])
        .describe(
          '此次调用中使用的部门ID的类型 Options:department_id(以自定义department_id来标识部门),open_department_id(以open_department_id来标识部门)',
        )
        .optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      page_size: z.number().describe('分页大小').optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1MailgroupUpdate = {
  project: 'mail',
  name: 'mail.v1.mailgroup.update',
  sdkName: 'mail.v1.mailgroup.update',
  path: '/open-apis/mail/v1/mailgroups/:mailgroup_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-邮箱-邮件组-邮件组管理-修改邮件组全部信息-更新邮件组所有信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('邮件组地址').optional(),
      name: z.string().describe('邮件组名称').optional(),
      description: z.string().describe('邮件组描述').optional(),
      who_can_send_mail: z
        .enum(['ANYONE', 'ALL_INTERNAL_USERS', 'ALL_GROUP_MEMBERS', 'CUSTOM_MEMBERS'])
        .describe(
          '谁可发送邮件到此邮件组 Options:ANYONE(任何人),ALL_INTERNAL_USERS(仅组织内部成员),ALL_GROUP_MEMBERS(仅邮件组成员),CUSTOM_MEMBERS(自定义成员)',
        )
        .optional(),
    }),
    path: z.object({ mailgroup_id: z.string().describe('邮件组ID或者邮件组地址').optional() }),
  },
};
export const mailV1PublicMailboxAliasCreate = {
  project: 'mail',
  name: 'mail.v1.publicMailboxAlias.create',
  sdkName: 'mail.v1.publicMailboxAlias.create',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱别名-创建公共邮箱别名-创建公共邮箱别名',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ email_alias: z.string().describe('邮箱别名').optional() }),
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱id或公共邮箱地址').optional() }),
  },
};
export const mailV1PublicMailboxAliasDelete = {
  project: 'mail',
  name: 'mail.v1.publicMailboxAlias.delete',
  sdkName: 'mail.v1.publicMailboxAlias.delete',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases/:alias_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱别名-删除公共邮箱别名-删除公共邮箱别名',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      public_mailbox_id: z.string().describe('公共邮箱id或公共邮箱地址').optional(),
      alias_id: z.string().describe('公共邮箱别名').optional(),
    }),
  },
};
export const mailV1PublicMailboxAliasList = {
  project: 'mail',
  name: 'mail.v1.publicMailboxAlias.list',
  sdkName: 'mail.v1.publicMailboxAlias.list',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/aliases',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱别名-查询公共邮箱的所有别名-获取所有公共邮箱别名',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱id或公共邮箱邮件地址').optional() }),
  },
};
export const mailV1PublicMailboxCreate = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.create',
  sdkName: 'mail.v1.publicMailbox.create',
  path: '/open-apis/mail/v1/public_mailboxes',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-创建公共邮箱-创建一个公共邮箱',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('公共邮箱地址').optional(),
      name: z.string().describe('公共邮箱名称').optional(),
      geo: z.string().describe('数据驻留地').optional(),
    }),
  },
};
export const mailV1PublicMailboxDelete = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.delete',
  sdkName: 'mail.v1.publicMailbox.delete',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-永久删除公共邮箱-该接口会永久删除公共邮箱地址。可用于释放邮箱回收站的公共邮箱地址，一旦删除，该邮箱地址将无法恢复',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ public_mailbox_id: z.string().describe('要释放的公共邮箱地址') }),
  },
};
export const mailV1PublicMailboxGet = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.get',
  sdkName: 'mail.v1.publicMailbox.get',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-查询指定公共邮箱-获取公共邮箱信息',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional() }),
  },
};
export const mailV1PublicMailboxList = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.list',
  sdkName: 'mail.v1.publicMailbox.list',
  path: '/open-apis/mail/v1/public_mailboxes',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-查询所有公共邮箱-分页批量获取公共邮箱列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
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
export const mailV1PublicMailboxMemberBatchCreate = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.batchCreate',
  sdkName: 'mail.v1.publicMailboxMember.batchCreate',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_create',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-批量添加公共邮箱成员-一次请求可以给一个公共邮箱添加多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      items: z
        .array(
          z.object({
            member_id: z.string().describe('公共邮箱内成员唯一标识（在请求体中不用填）').optional(),
            user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
            type: z.literal('USER').describe('成员类型 Options:USER(内部用户)').optional(),
          }),
        )
        .describe('本次调用添加的公共邮箱成员列表'),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ public_mailbox_id: z.string().describe('The unique ID or email address of a public mailbox') }),
  },
};
export const mailV1PublicMailboxMemberBatchDelete = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.batchDelete',
  sdkName: 'mail.v1.publicMailboxMember.batchDelete',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/batch_delete',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-批量删除公共邮箱成员-一次请求可以删除一个公共邮箱中的多个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      member_id_list: z
        .array(z.string().describe('The unique ID of a member in this public mailbox'))
        .describe('本次调用删除的公共邮箱成员ID列表'),
    }),
    path: z.object({
      public_mailbox_id: z.string().describe('The unique ID or email address of a public mailbox').optional(),
    }),
  },
};
export const mailV1PublicMailboxMemberClear = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.clear',
  sdkName: 'mail.v1.publicMailboxMember.clear',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/clear',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-删除公共邮箱所有成员-删除公共邮箱所有成员',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional() }),
  },
};
export const mailV1PublicMailboxMemberCreate = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.create',
  sdkName: 'mail.v1.publicMailboxMember.create',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-添加公共邮箱成员-向公共邮箱添加单个成员',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      user_id: z.string().describe('租户内用户的唯一标识（当成员类型是USER时有值）').optional(),
      type: z.literal('USER').describe('成员类型 Options:USER(内部用户)').optional(),
    }),
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional() }),
  },
};
export const mailV1PublicMailboxMemberDelete = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.delete',
  sdkName: 'mail.v1.publicMailboxMember.delete',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-删除公共邮箱单个成员-删除公共邮箱单个成员',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional(),
      member_id: z.string().describe('公共邮箱内成员唯一标识').optional(),
    }),
  },
};
export const mailV1PublicMailboxMemberGet = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.get',
  sdkName: 'mail.v1.publicMailboxMember.get',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members/:member_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-查询指定公共邮箱成员信息-获取公共邮箱单个成员信息',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional() }),
    path: z.object({
      public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional(),
      member_id: z.string().describe('公共邮箱内成员唯一标识').optional(),
    }),
  },
};
export const mailV1PublicMailboxMemberList = {
  project: 'mail',
  name: 'mail.v1.publicMailboxMember.list',
  sdkName: 'mail.v1.publicMailboxMember.list',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id/members',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱成员-查询所有公共邮箱成员信息-分页批量获取公共邮箱成员列表',
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
    }),
    path: z.object({
      public_mailbox_id: z.string().describe('The unique ID or email address of a public mailbox').optional(),
    }),
  },
};
export const mailV1PublicMailboxPatch = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.patch',
  sdkName: 'mail.v1.publicMailbox.patch',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
  httpMethod: 'PATCH',
  description:
    '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-修改公共邮箱部分信息-更新公共邮箱部分字段，没有填写的字段不会被更新',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('公共邮箱地址').optional(),
      name: z.string().describe('公共邮箱名称').optional(),
    }),
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional() }),
  },
};
export const mailV1PublicMailboxUpdate = {
  project: 'mail',
  name: 'mail.v1.publicMailbox.update',
  sdkName: 'mail.v1.publicMailbox.update',
  path: '/open-apis/mail/v1/public_mailboxes/:public_mailbox_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-邮箱-公共邮箱-公共邮箱管理-修改公共邮箱全部信息-更新公共邮箱所有信息',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      email: z.string().describe('公共邮箱地址').optional(),
      name: z.string().describe('公共邮箱名称').optional(),
    }),
    path: z.object({ public_mailbox_id: z.string().describe('公共邮箱唯一标识或公共邮箱地址').optional() }),
  },
};
export const mailV1UserMailboxAliasCreate = {
  project: 'mail',
  name: 'mail.v1.userMailboxAlias.create',
  sdkName: 'mail.v1.userMailboxAlias.create',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-用户邮箱-创建用户邮箱别名-创建用户邮箱别名',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ email_alias: z.string().describe('邮箱别名').optional() }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址').optional() }),
  },
};
export const mailV1UserMailboxAliasDelete = {
  project: 'mail',
  name: 'mail.v1.userMailboxAlias.delete',
  sdkName: 'mail.v1.userMailboxAlias.delete',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases/:alias_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-用户邮箱-删除用户邮箱别名-删除用户邮箱别名',
  accessTokens: ['tenant'],
  schema: {
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址').optional(),
      alias_id: z.string().describe('别名邮箱地址').optional(),
    }),
  },
};
export const mailV1UserMailboxAliasList = {
  project: 'mail',
  name: 'mail.v1.userMailboxAlias.list',
  sdkName: 'mail.v1.userMailboxAlias.list',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/aliases',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-用户邮箱-获取用户邮箱所有别名-获取用户邮箱所有别名',
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
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址').optional() }),
  },
};
export const mailV1UserMailboxDelete = {
  project: 'mail',
  name: 'mail.v1.userMailbox.delete',
  sdkName: 'mail.v1.userMailbox.delete',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id',
  httpMethod: 'DELETE',
  description:
    '[Feishu/Lark]-邮箱-用户邮箱-从回收站删除用户邮箱地址-该接口会永久删除用户邮箱地址。可用于删除位于邮箱回收站中的用户邮箱地址，一旦删除，将无法恢复。该接口支持邮件的转移，可以将被释放邮箱的邮件转移到另外一个可以使用的邮箱中',
  accessTokens: ['tenant'],
  schema: {
    params: z.object({ transfer_mailbox: z.string().describe('用于接受转移的邮箱地址').optional() }),
    path: z.object({ user_mailbox_id: z.string().describe('要释放的邮箱地址') }),
  },
};
export const mailV1UserMailboxEventSubscribe = {
  project: 'mail',
  name: 'mail.v1.userMailboxEvent.subscribe',
  sdkName: 'mail.v1.userMailboxEvent.subscribe',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-事件-订阅事件-订阅事件',
  accessTokens: ['user'],
  schema: {
    data: z.object({ event_type: z.number().describe('事件类型 Options:1(Message 邮件相关事件)') }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxEventSubscription = {
  project: 'mail',
  name: 'mail.v1.userMailboxEvent.subscription',
  sdkName: 'mail.v1.userMailboxEvent.subscription',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/subscription',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-事件-获取订阅状态-获取订阅状态',
  accessTokens: ['user'],
  schema: {
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxEventUnsubscribe = {
  project: 'mail',
  name: 'mail.v1.userMailboxEvent.unsubscribe',
  sdkName: 'mail.v1.userMailboxEvent.unsubscribe',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/event/unsubscribe',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-事件-取消订阅-取消订阅',
  accessTokens: ['user'],
  schema: {
    data: z.object({ event_type: z.number().describe('事件类型 Options:1(Message 邮件相关事件)') }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxFolderCreate = {
  project: 'mail',
  name: 'mail.v1.userMailboxFolder.create',
  sdkName: 'mail.v1.userMailboxFolder.create',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮箱文件夹-创建邮箱文件夹-创建邮箱文件夹',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('文件夹名称'),
      parent_folder_id: z
        .string()
        .describe(
          '父文件夹 id，该值为 0 表示根文件夹，id 获取方式见 ',
        ),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxFolderDelete = {
  project: 'mail',
  name: 'mail.v1.userMailboxFolder.delete',
  sdkName: 'mail.v1.userMailboxFolder.delete',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮箱文件夹-删除邮箱文件夹-删除邮箱文件夹',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      folder_id: z
        .string()
        .describe(
          '文件夹 id，id 获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxFolderList = {
  project: 'mail',
  name: 'mail.v1.userMailboxFolder.list',
  sdkName: 'mail.v1.userMailboxFolder.list',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮箱文件夹-列出邮箱文件夹-列出邮箱文件夹',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      folder_type: z.number().describe('文件夹类型 Options:1(System 系统文件夹),2(User 用户文件夹)').optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxFolderPatch = {
  project: 'mail',
  name: 'mail.v1.userMailboxFolder.patch',
  sdkName: 'mail.v1.userMailboxFolder.patch',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/folders/:folder_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-邮箱-邮箱文件夹-修改邮箱文件夹-修改邮箱文件夹',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('文件夹名称').optional(),
      parent_folder_id: z
        .string()
        .describe(
          '父文件夹 id，该值为 0 表示根文件夹，id 获取方式见 ',
        )
        .optional(),
    }),
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      folder_id: z
        .string()
        .describe(
          '文件夹 id，id 获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMailContactCreate = {
  project: 'mail',
  name: 'mail.v1.userMailboxMailContact.create',
  sdkName: 'mail.v1.userMailboxMailContact.create',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-邮箱联系人-创建邮箱联系人-创建一个邮箱联系人',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('联系人姓名'),
      company: z.string().describe('联系人公司').optional(),
      phone: z.string().describe('联系人手机号').optional(),
      mail_address: z.string().describe('联系人邮箱').optional(),
      tag: z.string().describe('联系人标签').optional(),
      remark: z.string().describe('联系人备注').optional(),
      position: z.string().describe('联系人职位').optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMailContactDelete = {
  project: 'mail',
  name: 'mail.v1.userMailboxMailContact.delete',
  sdkName: 'mail.v1.userMailboxMailContact.delete',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-邮箱联系人-删除邮箱联系人-删除一个邮箱联系人',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      mail_contact_id: z
        .string()
        .describe(
          '邮箱联系人 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMailContactList = {
  project: 'mail',
  name: 'mail.v1.userMailboxMailContact.list',
  sdkName: 'mail.v1.userMailboxMailContact.list',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-邮箱联系人-列出邮箱联系人-列出邮箱联系人列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMailContactPatch = {
  project: 'mail',
  name: 'mail.v1.userMailboxMailContact.patch',
  sdkName: 'mail.v1.userMailboxMailContact.patch',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/mail_contacts/:mail_contact_id',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-邮箱-邮箱联系人-修改邮箱联系人信息-修改一个邮箱联系人的信息',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      name: z.string().describe('联系人姓名'),
      company: z.string().describe('联系人公司').optional(),
      phone: z.string().describe('联系人手机号').optional(),
      mail_address: z.string().describe('联系人邮箱').optional(),
      tag: z.string().describe('联系人标签').optional(),
      remark: z.string().describe('联系人备注').optional(),
      position: z.string().describe('联系人职位').optional(),
    }),
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      mail_contact_id: z
        .string()
        .describe(
          '邮箱联系人 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMessageAttachmentDownloadUrl = {
  project: 'mail',
  name: 'mail.v1.userMailboxMessageAttachment.downloadUrl',
  sdkName: 'mail.v1.userMailboxMessageAttachment.downloadUrl',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id/attachments/download_url',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-用户邮件-邮件附件-获取附件下载链接-获取附件下载链接',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({ attachment_ids: z.array(z.string()).describe('附件 id 列表') }),
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      message_id: z
        .string()
        .describe(
          '用户邮件 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMessageGet = {
  project: 'mail',
  name: 'mail.v1.userMailboxMessage.get',
  sdkName: 'mail.v1.userMailboxMessage.get',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/:message_id',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-用户邮件-获取邮件详情-获取邮件详情',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      message_id: z
        .string()
        .describe(
          '用户邮件 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMessageGetByCard = {
  project: 'mail',
  name: 'mail.v1.userMailboxMessage.getByCard',
  sdkName: 'mail.v1.userMailboxMessage.getByCard',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/get_by_card',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-用户邮件-获取邮件卡片的邮件列表-获取邮件卡片下的邮件列表',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      card_id: z
        .string()
        .describe(
          '邮件卡片ID，可通过事件的推送获取',
        ),
      owner_id: z
        .string()
        .describe(
          '邮件卡片OwnerID，可通过[接收消息]( https://open.feishu.cn/document/server-docs/im-v1/message/events/receive)事件的推送获取（与`user_id_type`无关）',
        ),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMessageList = {
  project: 'mail',
  name: 'mail.v1.userMailboxMessage.list',
  sdkName: 'mail.v1.userMailboxMessage.list',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-用户邮件-列出邮件-列出邮件',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      page_size: z.number().describe('分页大小'),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      folder_id: z
        .string()
        .describe(
          '文件夹 id， 获取方式见 ',
        ),
      only_unread: z.boolean().describe('是否只查询未读邮件').optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxMessageSend = {
  project: 'mail',
  name: 'mail.v1.userMailboxMessage.send',
  sdkName: 'mail.v1.userMailboxMessage.send',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/messages/send',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-用户邮件-发送邮件-发送邮件',
  accessTokens: ['user'],
  schema: {
    data: z.object({
      subject: z.string().describe('主题').optional(),
      to: z
        .array(
          z.object({ mail_address: z.string().describe('邮件地址'), name: z.string().describe('名称').optional() }),
        )
        .describe('收件人')
        .optional(),
      cc: z
        .array(
          z.object({ mail_address: z.string().describe('邮件地址'), name: z.string().describe('名称').optional() }),
        )
        .describe('抄送')
        .optional(),
      bcc: z
        .array(
          z.object({ mail_address: z.string().describe('邮件地址'), name: z.string().describe('名称').optional() }),
        )
        .describe('秘送')
        .optional(),
      head_from: z
        .object({ name: z.string().describe('名称').optional() })
        .describe('发件人')
        .optional(),
      body_html: z.string().describe('正文').optional(),
      body_plain_text: z.string().describe('正文纯文本').optional(),
      attachments: z
        .array(
          z.object({
            body: z.string().describe('附件的正文，使用 base64url 编码（支持的文件最大 37MB）'),
            filename: z.string().describe('附件文件名'),
          }),
        )
        .describe('邮件附件列表')
        .optional(),
      thread_id: z.string().describe('会话id').optional(),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxRuleCreate = {
  project: 'mail',
  name: 'mail.v1.userMailboxRule.create',
  sdkName: 'mail.v1.userMailboxRule.create',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-收信规则-创建收信规则-创建收信规则',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      condition: z
        .object({
          match_type: z.number().describe('匹配类型 Options:1(MatchAll 满足所有条件),2(MatchAny 满足任意条件)'),
          items: z
            .array(
              z.object({
                type: z
                  .number()
                  .describe(
                    '匹配条件左值 Options:1(From 发件人地址),2(To 收件人地址),3(Cc 抄送地址),4(ToOrCc 收件人或抄送地址),6(Subject 主题),7(Body 正文),8(AttachmentName 附件名字),9(AttachmentType 附件类型),10(AnyAddress 任意地址),12(MatchAllMessage 所有邮件),13(IsExternal 是外部邮件),14(IsSpam 是垃圾邮件),15(IsNotSpam 不是垃圾邮件),16(HasAttachment 有附件)',
                  ),
                operator: z
                  .number()
                  .describe(
                    '匹配条件操作符 Options:1(Contains 包含),2(DoesNotContains 不包含),3(StartsWith 开头是),4(EndsWith 结尾是),5(Is 是),6(IsNot 不是),7(IncludesMe 包含自己),10(IsEmpty 为空)',
                  )
                  .optional(),
                input: z.string().describe('匹配条件右值').optional(),
              }),
            )
            .describe('匹配规则列表'),
        })
        .describe('匹配条件'),
      action: z
        .object({
          items: z
            .array(
              z.object({
                type: z
                  .number()
                  .describe(
                    '操作类型 Options:1(ArchiveMessage 归档),2(DeleteMessage 删除邮件),3(MarkAsRead 标记为已读),4(MarkAsSpam 移至垃圾邮件),5(NeverMarkAsSpam 不移至垃圾邮件),8(ApplyLabel 添加用户标签（暂不支持）),9(Flag 添加旗标),10(NeverPushNotification 不弹出通知),11(MoveToFolder 移至用户文件夹),12(AutoTransfer 自动转发（暂不支持）),13(SendToChat 分享到会话（暂不支持）)',
                  ),
                input: z.string().describe('当 type 为移动到文件夹时，该字段填文件夹的 id').optional(),
              }),
            )
            .describe('匹配中规则后的操作列表'),
        })
        .describe('匹配命中后的操作'),
      ignore_the_rest_of_rules: z.boolean().describe('是否终点规则'),
      name: z.string().describe('规则名称'),
      is_enable: z.boolean().describe('是否启用'),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxRuleDelete = {
  project: 'mail',
  name: 'mail.v1.userMailboxRule.delete',
  sdkName: 'mail.v1.userMailboxRule.delete',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id',
  httpMethod: 'DELETE',
  description: '[Feishu/Lark]-邮箱-收信规则-删除收信规则-删除收信规则',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      rule_id: z
        .string()
        .describe(
          '规则 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxRuleList = {
  project: 'mail',
  name: 'mail.v1.userMailboxRule.list',
  sdkName: 'mail.v1.userMailboxRule.list',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-邮箱-收信规则-列出收信规则-列出收信规则',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxRuleReorder = {
  project: 'mail',
  name: 'mail.v1.userMailboxRule.reorder',
  sdkName: 'mail.v1.userMailboxRule.reorder',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/reorder',
  httpMethod: 'POST',
  description: '[Feishu/Lark]-邮箱-收信规则-对收信规则进行排序-对收信规则进行排序',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      rule_ids: z
        .array(z.string())
        .describe(
          '规则 id 列表，获取方式见 ',
        ),
    }),
    path: z.object({ user_mailbox_id: z.string().describe('用户邮箱地址，使用 user_access_token 时可使用 me') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserMailboxRuleUpdate = {
  project: 'mail',
  name: 'mail.v1.userMailboxRule.update',
  sdkName: 'mail.v1.userMailboxRule.update',
  path: '/open-apis/mail/v1/user_mailboxes/:user_mailbox_id/rules/:rule_id',
  httpMethod: 'PUT',
  description: '[Feishu/Lark]-邮箱-收信规则-更新收信规则-更新收信规则',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      condition: z
        .object({
          match_type: z.number().describe('匹配类型 Options:1(MatchAll 满足所有条件),2(MatchAny 满足任意条件)'),
          items: z
            .array(
              z.object({
                type: z
                  .number()
                  .describe(
                    '匹配条件左值 Options:1(From 发件人地址),2(To 收件人地址),3(Cc 抄送地址),4(ToOrCc 收件人或抄送地址),6(Subject 主题),7(Body 正文),8(AttachmentName 附件名字),9(AttachmentType 附件类型),10(AnyAddress 任意地址),12(MatchAllMessage 所有邮件),13(IsExternal 是外部邮件),14(IsSpam 是垃圾邮件),15(IsNotSpam 不是垃圾邮件),16(HasAttachment 有附件)',
                  ),
                operator: z
                  .number()
                  .describe(
                    '匹配条件操作符 Options:1(Contains 包含),2(DoesNotContains 不包含),3(StartsWith 开头是),4(EndsWith 结尾是),5(Is 是),6(IsNot 不是),7(IncludesMe 包含自己),10(IsEmpty 为空)',
                  )
                  .optional(),
                input: z.string().describe('匹配条件右值').optional(),
              }),
            )
            .describe('匹配规则列表'),
        })
        .describe('匹配条件'),
      action: z
        .object({
          items: z
            .array(
              z.object({
                type: z
                  .number()
                  .describe(
                    '操作类型 Options:1(ArchiveMessage 归档),2(DeleteMessage 删除邮件),3(MarkAsRead 标记为已读),4(MarkAsSpam 移至垃圾邮件),5(NeverMarkAsSpam 不移至垃圾邮件),8(ApplyLabel 添加用户标签（暂不支持）),9(Flag 添加旗标),10(NeverPushNotification 不弹出通知),11(MoveToFolder 移至用户文件夹),12(AutoTransfer 自动转发（暂不支持）),13(SendToChat 分享到会话（暂不支持）)',
                  ),
                input: z.string().describe('当 type 为移动到文件夹时，该字段填文件夹的 id').optional(),
              }),
            )
            .describe('匹配中规则后的操作列表'),
        })
        .describe('匹配命中后的操作'),
      ignore_the_rest_of_rules: z.boolean().describe('是否终点规则'),
      name: z.string().describe('规则名称'),
      is_enable: z.boolean().describe('是否启用'),
    }),
    path: z.object({
      user_mailbox_id: z.string().describe('用户邮箱地址 或 输入me代表当前调用接口用户'),
      rule_id: z
        .string()
        .describe(
          '规则 id，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const mailV1UserQuery = {
  project: 'mail',
  name: 'mail.v1.user.query',
  sdkName: 'mail.v1.user.query',
  path: '/open-apis/mail/v1/users/query',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-邮箱-邮箱地址-查询邮箱地址状态-使用邮箱状态查询接口，可以输入邮箱地址，查询出该邮箱地址对应的类型以及状态',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ email_list: z.array(z.string()).describe('需要查询的邮箱地址列表') }),
  },
};
export const mailV1Tools = [
  mailV1MailgroupAliasCreate,
  mailV1MailgroupAliasDelete,
  mailV1MailgroupAliasList,
  mailV1MailgroupCreate,
  mailV1MailgroupDelete,
  mailV1MailgroupGet,
  mailV1MailgroupList,
  mailV1MailgroupManagerBatchCreate,
  mailV1MailgroupManagerBatchDelete,
  mailV1MailgroupManagerList,
  mailV1MailgroupMemberBatchCreate,
  mailV1MailgroupMemberBatchDelete,
  mailV1MailgroupMemberCreate,
  mailV1MailgroupMemberDelete,
  mailV1MailgroupMemberGet,
  mailV1MailgroupMemberList,
  mailV1MailgroupPatch,
  mailV1MailgroupPermissionMemberBatchCreate,
  mailV1MailgroupPermissionMemberBatchDelete,
  mailV1MailgroupPermissionMemberCreate,
  mailV1MailgroupPermissionMemberDelete,
  mailV1MailgroupPermissionMemberGet,
  mailV1MailgroupPermissionMemberList,
  mailV1MailgroupUpdate,
  mailV1PublicMailboxAliasCreate,
  mailV1PublicMailboxAliasDelete,
  mailV1PublicMailboxAliasList,
  mailV1PublicMailboxCreate,
  mailV1PublicMailboxDelete,
  mailV1PublicMailboxGet,
  mailV1PublicMailboxList,
  mailV1PublicMailboxMemberBatchCreate,
  mailV1PublicMailboxMemberBatchDelete,
  mailV1PublicMailboxMemberClear,
  mailV1PublicMailboxMemberCreate,
  mailV1PublicMailboxMemberDelete,
  mailV1PublicMailboxMemberGet,
  mailV1PublicMailboxMemberList,
  mailV1PublicMailboxPatch,
  mailV1PublicMailboxUpdate,
  mailV1UserMailboxAliasCreate,
  mailV1UserMailboxAliasDelete,
  mailV1UserMailboxAliasList,
  mailV1UserMailboxDelete,
  mailV1UserMailboxEventSubscribe,
  mailV1UserMailboxEventSubscription,
  mailV1UserMailboxEventUnsubscribe,
  mailV1UserMailboxFolderCreate,
  mailV1UserMailboxFolderDelete,
  mailV1UserMailboxFolderList,
  mailV1UserMailboxFolderPatch,
  mailV1UserMailboxMailContactCreate,
  mailV1UserMailboxMailContactDelete,
  mailV1UserMailboxMailContactList,
  mailV1UserMailboxMailContactPatch,
  mailV1UserMailboxMessageAttachmentDownloadUrl,
  mailV1UserMailboxMessageGet,
  mailV1UserMailboxMessageGetByCard,
  mailV1UserMailboxMessageList,
  mailV1UserMailboxMessageSend,
  mailV1UserMailboxRuleCreate,
  mailV1UserMailboxRuleDelete,
  mailV1UserMailboxRuleList,
  mailV1UserMailboxRuleReorder,
  mailV1UserMailboxRuleUpdate,
  mailV1UserQuery,
];
