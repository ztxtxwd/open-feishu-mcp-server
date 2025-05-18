import { z } from 'zod';
export type driveV2ToolName =
  | 'drive.v2.fileLike.list'
  | 'drive.v2.permissionPublic.get'
  | 'drive.v2.permissionPublic.patch';
export const driveV2FileLikeList = {
  project: 'drive',
  name: 'drive.v2.fileLike.list',
  sdkName: 'drive.v2.fileLike.list',
  path: '/open-apis/drive/v2/files/:file_token/likes',
  httpMethod: 'GET',
  description:
    '[Feishu/Lark]-云文档-云空间-点赞-获取云文档的点赞者列表-获取指定云文档的点赞者列表并按点赞时间由近到远分页返回',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      file_type: z
        .enum(['doc', 'docx', 'file'])
        .describe(
          '云文档类型，如果该值为空或者与云文档实际类型不匹配，接口会返回失败。 Options:doc(旧版文档),docx(新版文档),file(文件)',
        ),
      page_size: z.number().describe('分页大小').optional(),
      page_token: z
        .string()
        .describe(
          '分页标记，第一次请求不填，表示从头开始遍历；分页查询结果还有更多项时会同时返回新的 page_token，下次遍历可采用该 page_token 获取查询结果',
        )
        .optional(),
      user_id_type: z.enum(['open_id', 'union_id', 'user_id']).describe('用户ID类型').optional(),
    }),
    path: z.object({
      file_token: z
        .string()
        .describe(
          '需要查询点赞者列表的云文档 token。',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const driveV2PermissionPublicGet = {
  project: 'drive',
  name: 'drive.v2.permissionPublic.get',
  sdkName: 'drive.v2.permissionPublic.get',
  path: '/open-apis/drive/v2/permissions/:token/public',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-权限-设置 v2-获取云文档权限设置-该接口用于根据 filetoken 获取云文档的权限设置',
  accessTokens: ['tenant', 'user'],
  schema: {
    params: z.object({
      type: z
        .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
        .describe(
          '文件类型，需要与文件的 token 相匹配 Options:doc(旧版文档),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)',
        ),
    }),
    path: z.object({
      token: z
        .string()
        .describe(
          '文件的 token，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const driveV2PermissionPublicPatch = {
  project: 'drive',
  name: 'drive.v2.permissionPublic.patch',
  sdkName: 'drive.v2.permissionPublic.patch',
  path: '/open-apis/drive/v2/permissions/:token/public',
  httpMethod: 'PATCH',
  description: '[Feishu/Lark]-云文档-权限-设置 v2-更新云文档权限设置-该接口用于根据 filetoken 更新云文档的权限设置',
  accessTokens: ['tenant', 'user'],
  schema: {
    data: z.object({
      external_access_entity: z
        .enum(['open', 'closed', 'allow_share_partner_tenant'])
        .describe(
          '允许内容被分享到组织外 Options:open(打开),closed(关闭),allow_share_partner_tenant(AllowSharePartnerTenant 允许分享给关联组织（只有租户后台设置仅允许关联组织分享，才能设置为该值）)',
        )
        .optional(),
      security_entity: z
        .enum(['anyone_can_view', 'anyone_can_edit', 'only_full_access'])
        .describe(
          '谁可以创建副本、打印、下载 Options:anyone_can_view(AnyoneCanView 拥有可阅读权限的用户),anyone_can_edit(AnyoneCanEdit 拥有可编辑权限的用户),only_full_access(OnlyFullAccess 拥有可管理权限（包括我）的用户)',
        )
        .optional(),
      comment_entity: z
        .enum(['anyone_can_view', 'anyone_can_edit'])
        .describe(
          '谁可以评论 Options:anyone_can_view(AnyoneCanView 拥有可阅读权限的用户),anyone_can_edit(AnyoneCanEdit 拥有可编辑权限的用户)',
        )
        .optional(),
      share_entity: z
        .enum(['anyone', 'same_tenant'])
        .describe(
          '谁可以添加和管理协作者-组织维度 Options:anyone(所有可阅读或编辑此文档的用户),same_tenant(SameTenant 组织内所有可阅读或编辑此文档的用户)',
        )
        .optional(),
      manage_collaborator_entity: z
        .enum(['collaborator_can_view', 'collaborator_can_edit', 'collaborator_full_access'])
        .describe(
          '谁可以添加和管理协作者-协作者维度 Options:collaborator_can_view(CollaboratorCanView 拥有可阅读权限的协作者),collaborator_can_edit(CollaboratorCanEdit 拥有可编辑权限的协作者),collaborator_full_access(CollaboratorFullAccess 拥有可管理权限（包括我）的协作者)',
        )
        .optional(),
      link_share_entity: z
        .enum([
          'tenant_readable',
          'tenant_editable',
          'partner_tenant_readable',
          'partner_tenant_editable',
          'anyone_readable',
          'anyone_editable',
          'closed',
        ])
        .describe(
          '链接分享设置 Options:tenant_readable(TenantReadable 组织内获得链接的人可阅读),tenant_editable(TenantEditable 组织内获得链接的人可编辑),partner_tenant_readable(PartnerTenantReadable 关联组织的人可阅读（只有租户后台设置仅允许关联组织分享，才能设置为该值）),partner_tenant_editable(PartnerTenantEditable 关联组织的人可编辑（只有租户后台设置仅允许关联组织分享，才能设置为该值）),anyone_readable(AnyoneReadable 互联网上获得链接的任何人可阅读（仅external_access_entity=“open”时有效）),anyone_editable(AnyoneEditable 互联网上获得链接的任何人可编辑（仅external_access_entity=“open”时有效）),closed(关闭链接分享)',
        )
        .optional(),
      copy_entity: z
        .enum(['anyone_can_view', 'anyone_can_edit', 'only_full_access'])
        .describe(
          '谁可以复制内容 Options:anyone_can_view(AnyoneCanView 拥有可阅读权限的用户),anyone_can_edit(AnyoneCanEdit 拥有可编辑权限的用户),only_full_access(OnlyFullAccess 拥有可管理权限（包括我）的协作者)',
        )
        .optional(),
    }),
    params: z.object({
      type: z
        .enum(['doc', 'sheet', 'file', 'wiki', 'bitable', 'docx', 'mindnote', 'minutes', 'slides'])
        .describe(
          '文件类型，需要与文件的 token 相匹配 Options:doc(旧版文档),sheet(电子表格),file(云空间文件),wiki(知识库节点),bitable(多维表格),docx(新版文档),mindnote(思维笔记),minutes(妙记),slides(幻灯片)',
        ),
    }),
    path: z.object({
      token: z
        .string()
        .describe(
          '文件的 token，获取方式见 ',
        ),
    }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const driveV2Tools = [driveV2FileLikeList, driveV2PermissionPublicGet, driveV2PermissionPublicPatch];
