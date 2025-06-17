import { z } from 'zod';

import { addMermaidBlockMarkers } from '../../utils/markdown-processor';

export const mediaUploadTool = {
  project: 'drive',
  name: 'drive_media_upload',
  accessTokens: ['user', 'tenant'],
  description: '[P4][飞书/Lark] - 云空间-素材-上传素材，最大20MB, 支持url、文本、base64编码的图片、想当作图片展示的svg, 四选一。注意：除ccm_import_open外，其它上传点需要指定block id，用于指定素材将要上传到的云文档或位置。这意味着你通常需要先创建一个块，然后才能上传素材到这个块中。',
  schema: {
    url: z.string().describe('文件URL').optional(),
    text: z.string().describe('文本内容').optional(),
    base64: z.string().describe('base64编码的图片').optional(),
    svg2png: z.string().describe('想当作图片展示的svg，其它情况使用text').optional(),
    file_name: z.string().describe('文件名').max(250),
    parent_type: z.enum(['ccm_import_open', 'docx_image', 'docx_file','sheet_image','sheet_file','bitable_image','bitable_file']).describe('上传点的类型。你可根据上传的素材类型与云文档类型确定上传点类型。例如，要将一张图片插入到新版文档（文件类型为 docx）中，需指定上传点为 docx_image；要将一个附件上传到新版文档中，需指定上传点为 docx_file。ccm_import_open是导入文档专用，别的文件不要用，否则会报错。').optional(),
    parent_node: z.string().describe('block id，即要在文档中插入的块的id，用于指定素材将要上传到的云文档或位置。此处不能为文档ID，当parent_type不是ccm_import_open时，parent_node一定得是块的id，如果你提供不了，就放弃调用这个TOOL,先去创建一个块，再调用这个TOOL。千万不要强行调用这个TOOL，没有任何用处。').optional()
  },
  customHandler: async (params: any, options: any): Promise<any> => {
    try {
      const { userAccessToken } = options || {};
      let file:File = new File([], '');
      let actualFileName = params.file_name;
      
      if(params.base64){
        file = new File([Buffer.from(params.base64, 'base64')], params.file_name);
      }
      if(params.svg2png){
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

        const pngBuffer = await response.arrayBuffer();

        // 创建png文件，如果文件名不是png结尾，则添加.png后缀
        actualFileName = params.file_name.endsWith('.png') 
          ? params.file_name 
          : params.file_name + '.png';
        
        file = new File([pngBuffer], actualFileName);
      }
      // url有值，先下载文件
      if (params.url){
        const response = await fetch(params.url);
        file = new File([await response.blob()], params.file_name);
      }

      // 处理 markdown 内容，为 mermaid 代码块添加标记
      if ( params.file_name.endsWith('.md') && params.text){
        params.text = addMermaidBlockMarkers(params.text);
      }

      if(params.text){
        file = new File([params.text], params.file_name);
      }
      // 构造 FormData
      const formData = new FormData();
      formData.append('file_name', actualFileName);
      formData.append('parent_type', params.parent_type || 'ccm_import_open');
      formData.append('parent_node', params.parent_node);
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
      // const response =
      //   userAccessToken && params.useUAT
      //     ? await client.drive.media.uploadAll({ data }, lark.withUserAccessToken(userAccessToken))
      //     : await client.drive.media.uploadAll({ data })
      const response = result.data;
      if (!response?.file_token) {
        return {
          isError: true,
          content: [{ type: 'text' as const, text: '上传素材失败，请检查文件内容或文件类型'+JSON.stringify(result) }],
        };
      }

      

      return {
        content: [
          {
            type: 'text' as const,
            text: `{
              "file_token": "${response.file_token}"
            }`,
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
            text: `上传素材失败: ${JSON.stringify((error as any)?.response?.data || error)}`,
          },
        ],
      };
    }
  },
};
