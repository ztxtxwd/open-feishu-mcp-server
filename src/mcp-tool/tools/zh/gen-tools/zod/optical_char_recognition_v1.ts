import { z } from 'zod';
export type opticalCharRecognitionV1ToolName = 'optical_char_recognition.v1.image.basicRecognize';
export const opticalCharRecognitionV1ImageBasicRecognize = {
  project: 'optical_char_recognition',
  name: 'optical_char_recognition.v1.image.basicRecognize',
  sdkName: 'optical_char_recognition.v1.image.basicRecognize',
  path: '/open-apis/optical_char_recognition/v1/image/basic_recognize',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-AI 能力-光学字符识别-识别图片中的文字-可识别图片中的文字，按图片中的区域划分，分段返回文本列表。文件大小需小于5M',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({ image: z.string().describe('base64 后的图片数据').optional() }),
  },
};
export const opticalCharRecognitionV1Tools = [opticalCharRecognitionV1ImageBasicRecognize];
