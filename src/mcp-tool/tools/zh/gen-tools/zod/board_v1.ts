import { z } from 'zod';
export type boardV1ToolName = 'board.v1.whiteboardNode.list';
export const boardV1WhiteboardNodeList = {
  project: 'board',
  name: 'board.v1.whiteboardNode.list',
  sdkName: 'board.v1.whiteboardNode.list',
  path: '/open-apis/board/v1/whiteboards/:whiteboard_id/nodes',
  httpMethod: 'GET',
  description: '[Feishu/Lark]-云文档-画板-节点-获取所有节点-获取画板内所有的节点',
  accessTokens: ['tenant', 'user'],
  schema: {
    path: z.object({ whiteboard_id: z.string().describe('画板唯一标识') }),
    useUAT: z.boolean().describe('使用用户身份请求, 否则使用应用身份').optional(),
  },
};
export const boardV1Tools = [boardV1WhiteboardNodeList];
