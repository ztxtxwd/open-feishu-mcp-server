import { z } from 'zod';
import { convertDescriptionToString, McpToolDescription } from '../types';
import { addMermaidBlockMarkers } from '../../utils/markdown-processor';

// 类型定义
interface MediaUploadParams {
  url?: string;
  text?: string;
  base64?: string;
  svg2png?: string;
  file_name: string;
  parent_type?: 'ccm_import_open' | 'docx_image' | 'docx_file' | 'sheet_image' | 'sheet_file' | 'bitable_image' | 'bitable_file';
  parent_node?: string;
}

interface MediaUploadOptions {
  userAccessToken?: string;
}

// 工具描述
const description: McpToolDescription = {
  shortDescription: '飞书-云空间-素材-上传素材，最大20MB, 支持url、文本、base64编码的图片、想当作图片展示的svg, 四选一。注意：除ccm_import_open外，其它上传点需要指定block id，用于指定素材将要上传到的云文档或位置。这意味着你通常需要先创建一个块，然后才能上传素材到这个块中。',
  bestFor: '上传各种类型的素材到飞书云文档，支持多种格式的图片、文本和文件',
  notRecommendedFor: '超过20MB的大文件上传，或不支持的文件格式',
  promptExample: '上传一张base64格式的图片到文档中',
  usageExample: 'drive_media_upload({base64: "data:image/png;base64,...", file_name: "image.png", parent_type: "docx_image", parent_node: "block_id"})',
  returns: '上传成功的文件token，用于后续在文档中引用该素材'
};

export const mediaUploadTool = {
  project: 'drive',
  name: 'drive_media_upload',
  accessTokens: ['user', 'tenant'],
  description: convertDescriptionToString(description),
  schema: {
    url: z.string().describe('文件URL').optional(),
    text: z.string().describe('文本内容').optional(),
    base64: z.string().describe('base64编码的图片').optional(),
    svg2png: z.string().describe('想当作图片展示的svg，其它情况使用text').optional(),
    file_name: z.string().max(250).describe('文件名'),
    parent_type: z.enum(['ccm_import_open', 'docx_image', 'docx_file', 'sheet_image', 'sheet_file', 'bitable_image', 'bitable_file'])
      .describe('上传点的类型。你可根据上传的素材类型与云文档类型确定上传点类型。例如，要将一张图片插入到新版文档（文件类型为 docx）中，需指定上传点为 docx_image；要将一个附件上传到新版文档中，需指定上传点为 docx_file。ccm_import_open是导入文档专用，别的文件不要用，否则会报错。')
      .optional(),
    parent_node: z.string()
      .describe('block id，即要在文档中插入的块的id，用于指定素材将要上传到的云文档或位置。此处不能为文档ID，当parent_type不是ccm_import_open时，parent_node一定得是块的id，如果你提供不了，就放弃调用这个TOOL,先去创建一个块，再调用这个TOOL。千万不要强行调用这个TOOL，没有任何用处。')
      .optional()
  },
  customHandler: async (params: MediaUploadParams, options?: MediaUploadOptions): Promise<any> => {
    try {
      const { userAccessToken } = options || {};
      
      if (!userAccessToken) {
        throw new Error('用户访问令牌未提供');
      }

      // 验证参数：必须提供四种内容之一
      const contentTypes = [params.url, params.text, params.base64, params.svg2png].filter(Boolean);
      if (contentTypes.length === 0) {
        throw new Error('必须提供url、text、base64或svg2png中的至少一种内容');
      }

      if (contentTypes.length > 1) {
        throw new Error('只能提供url、text、base64、svg2png中的一种内容');
      }

      let file: File = new File([], '');
      let actualFileName = params.file_name;
      
      // 处理不同类型的内容
      if (params.base64) {
        file = new File([Buffer.from(params.base64, 'base64')], params.file_name);
      } else if (params.svg2png) {
        // 将svg转换为png使用在线服务
        const response = await fetch('https://svg-to-png.tapeless.eu.org', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            svg: params.svg2png
          })
        });

        if (!response.ok) {
          throw new Error(`SVG转PNG失败: ${response.statusText}`);
        }

        const pngBuffer = await response.arrayBuffer();

        // 创建png文件，如果文件名不是png结尾，则添加.png后缀
        actualFileName = params.file_name.endsWith('.png') 
          ? params.file_name 
          : params.file_name + '.png';
        
        file = new File([pngBuffer], actualFileName);
      } else if (params.url) {
        // url有值，先下载文件
        const response = await fetch(params.url);
        if (!response.ok) {
          throw new Error(`下载文件失败: ${response.statusText}`);
        }
        file = new File([await response.blob()], params.file_name);
      } else if (params.text) {
        // 处理 markdown 内容，为 mermaid 代码块添加标记
        let processedText = params.text;
        if (params.file_name.endsWith('.md')) {
          processedText = addMermaidBlockMarkers(params.text);
        }
        file = new File([processedText], params.file_name);
      }

      // 构造 FormData
      const formData = new FormData();
      formData.append('file_name', actualFileName);
      formData.append('parent_type', params.parent_type || 'ccm_import_open');
      formData.append('parent_node', params.parent_node || '');
      formData.append('size', file.size.toString());
      formData.append('file', file);

      // 发起 POST 请求
      const resp = await fetch('https://open.feishu.cn/open-apis/drive/v1/medias/upload_all', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${userAccessToken}`,
          // Content-Type 不需手动设置，fetch 会自动添加 multipart 边界
        },
        body: formData,
      });

      const result = await resp.json() as any;

      if (!resp.ok) {
        throw new Error(`上传请求失败: ${resp.status} ${resp.statusText}, ${JSON.stringify(result)}`);
      }

      const response = result.data;
      if (!response?.file_token) {
        throw new Error(`上传失败，未获取到文件token: ${JSON.stringify(result)}`);
      }

      return {
        content: [
          {
            type: 'text' as const,
            text: JSON.stringify({
              file_token: response.file_token,
              file_name: actualFileName,
              file_size: file.size
            }, null, 2),
          },
        ],
      };
    } catch (error) {
      console.error('上传素材失败:', error);
      return {
        isError: true,
        content: [
          {
            type: 'text' as const,
            text: `上传素材失败: ${error instanceof Error ? error.message : JSON.stringify(error)}`,
          },
        ],
      };
    }
  },
};

// 导出评论相关工具
export { 
  driveCommentCreate,
  driveCommentList,
  driveCommentPatch,
  driveCommentReplyCreate,
  driveCommentReplyList
} from './comment';
