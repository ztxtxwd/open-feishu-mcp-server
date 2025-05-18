import { z } from 'zod';
export type speechToTextV1ToolName =
  | 'speech_to_text.v1.speech.fileRecognize'
  | 'speech_to_text.v1.speech.streamRecognize';
export const speechToTextV1SpeechFileRecognize = {
  project: 'speech_to_text',
  name: 'speech_to_text.v1.speech.fileRecognize',
  sdkName: 'speech_to_text.v1.speech.fileRecognize',
  path: '/open-apis/speech_to_text/v1/speech/file_recognize',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-AI 能力-语音识别-识别语音文件-语音文件识别接口，上传整段语音文件进行一次性识别。接口适合 60 秒以内音频识别',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      speech: z
        .object({
          speech: z
            .string()
            .describe('pcm格式音频文件（文件识别）或音频分片（流式识别）经base64编码后的内容')
            .optional(),
        })
        .describe('语音资源'),
      config: z
        .object({
          file_id: z.string().describe('仅包含字母数字和下划线的 16 位字符串作为文件的标识，用户生成'),
          format: z.string().describe('语音格式，目前仅支持：pcm'),
          engine_type: z.string().describe('引擎类型，目前仅支持：16k_auto 中英混合'),
        })
        .describe('配置属性'),
    }),
  },
};
export const speechToTextV1SpeechStreamRecognize = {
  project: 'speech_to_text',
  name: 'speech_to_text.v1.speech.streamRecognize',
  sdkName: 'speech_to_text.v1.speech.streamRecognize',
  path: '/open-apis/speech_to_text/v1/speech/stream_recognize',
  httpMethod: 'POST',
  description:
    '[Feishu/Lark]-AI 能力-语音识别-识别流式语音-语音流式接口，将整个音频文件分片进行传入模型。能够实时返回数据。建议每个音频分片的大小为 100-200ms',
  accessTokens: ['tenant'],
  schema: {
    data: z.object({
      speech: z
        .object({
          speech: z
            .string()
            .describe('pcm格式音频文件（文件识别）或音频分片（流式识别）经base64编码后的内容')
            .optional(),
        })
        .describe('语音资源'),
      config: z
        .object({
          stream_id: z.string().describe('仅包含字母数字和下划线的 16 位字符串作为同一数据流的标识，用户生成'),
          sequence_id: z.number().describe('数据流分片的序号，序号从 0 开始，每次请求递增 1'),
          action: z
            .number()
            .describe(
              '数据流标记：1 首包，2 正常结束，等待结果返回，3 中断数据流不返回最终结果，0 传输语音中间的数据包',
            ),
          format: z.string().describe('语音格式，目前仅支持：pcm'),
          engine_type: z.string().describe('引擎类型，目前仅支持：16k_auto 中英混合'),
        })
        .describe('配置属性'),
    }),
  },
};
export const speechToTextV1Tools = [speechToTextV1SpeechFileRecognize, speechToTextV1SpeechStreamRecognize];
