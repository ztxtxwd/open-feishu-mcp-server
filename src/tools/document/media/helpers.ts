import { Client } from '@larksuiteoapi/node-sdk';
import * as lark from '@larksuiteoapi/node-sdk';

/**
 * 媒体插入参数类型
 */
interface MediaInsertParams {
  document_id: string;
  block_id: string;
  index?: number;
  // 媒体来源，四选一
  url?: string;
  text?: string;
  base64?: string;
  svg2png?: string;
  file_name: string;
  // 图片专属参数
  width?: number;
  height?: number;
  caption?: string;
}

/**
 * 步骤1：创建块
 */
async function createBlock(
  client: Client,
  userAccessToken: string,
  params: {
    document_id: string;
    block_id: string;
    block_type: number; // 27=图片, 23=文件
    index?: number;
    width?: number;
    height?: number;
    caption?: string;
  }
) {
  const children: any[] = [];

  if (params.block_type === 27) {
    // 图片块
    children.push({
      block_type: 27,
      image: {
        width: params.width,
        height: params.height,
        caption: params.caption
      }
    });
  } else if (params.block_type === 23) {
    // 文件块
    children.push({
      block_type: 23,
      file: {
        token: ''
      }
    });
  }

  const response = await client.docx.v1.documentBlockChildren.create(
    {
      path: {
        document_id: params.document_id,
        block_id: params.block_id
      },
      data: {
        children,
        index: params.index
      }
    },
    lark.withUserAccessToken(userAccessToken)
  );

  // 返回所有创建的块
  const blocks = response.data?.children || [];
  if (blocks.length === 0) {
    throw new Error('创建块失败，未获取到任何块');
  }

  return blocks;
}

/**
 * 步骤2：上传媒体
 */
async function uploadMedia(
  userAccessToken: string,
  params: {
    parent_node: string;
    parent_type: 'docx_image' | 'docx_file';
    url?: string;
    text?: string;
    base64?: string;
    svg2png?: string;
    file_name: string;
  }
) {
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
    actualFileName = params.file_name.endsWith('.png')
      ? params.file_name
      : params.file_name + '.png';

    file = new File([pngBuffer], actualFileName);
  } else if (params.url) {
    const response = await fetch(params.url);
    if (!response.ok) {
      throw new Error(`下载文件失败: ${response.statusText}`);
    }
    file = new File([await response.blob()], params.file_name);
  } else if (params.text) {
    file = new File([params.text], params.file_name);
  }

  // 构造 FormData
  const formData = new FormData();
  formData.append('file_name', actualFileName);
  formData.append('parent_type', params.parent_type);
  formData.append('parent_node', params.parent_node);
  formData.append('size', file.size.toString());
  formData.append('file', file);

  // 发起 POST 请求
  const resp = await fetch('https://open.feishu.cn/open-apis/drive/v1/medias/upload_all', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${userAccessToken}`
    },
    body: formData
  });

  const result = await resp.json() as any;

  if (!resp.ok) {
    throw new Error(`上传请求失败: ${resp.status} ${resp.statusText}, ${JSON.stringify(result)}`);
  }

  const fileToken = result.data?.file_token;
  if (!fileToken) {
    throw new Error(`上传失败，未获取到文件token: ${JSON.stringify(result)}`);
  }

  return {
    file_token: fileToken,
    file_name: actualFileName,
    file_size: file.size
  };
}

/**
 * 步骤3：更新块内容
 */
async function patchBlock(
  client: Client,
  userAccessToken: string,
  params: {
    document_id: string;
    block_id: string;
    file_token: string;
    block_type: 'image' | 'file';
  }
) {
  const patchData: any = {};

  if (params.block_type === 'image') {
    patchData.replace_image = { token: params.file_token };
  } else {
    patchData.replace_file = { token: params.file_token };
  }

  const response = await client.docx.v1.documentBlock.patch(
    {
      path: {
        document_id: params.document_id,
        block_id: params.block_id
      },
      data: patchData
    },
    lark.withUserAccessToken(userAccessToken)
  );

  return response.data;
}

/**
 * 完整的图片插入流程
 */
export async function insertImage(
  client: Client,
  userAccessToken: string,
  params: MediaInsertParams
) {
  // 步骤1: 创建图片块
  const blocks = await createBlock(client, userAccessToken, {
    document_id: params.document_id,
    block_id: params.block_id,
    block_type: 27,
    index: params.index,
    width: params.width,
    height: params.height,
    caption: params.caption
  });

  const blockId = blocks[0]?.block_id;
  if (!blockId) {
    throw new Error('创建图片块失败，未获取到 block_id');
  }

  // 步骤2: 上传图片
  const uploadResult = await uploadMedia(userAccessToken, {
    parent_node: blockId,
    parent_type: 'docx_image',
    url: params.url,
    text: params.text,
    base64: params.base64,
    svg2png: params.svg2png,
    file_name: params.file_name
  });

  // 步骤3: 更新图片块
  const patchResult = await patchBlock(client, userAccessToken, {
    document_id: params.document_id,
    block_id: blockId,
    file_token: uploadResult.file_token,
    block_type: 'image'
  });

  return {
    blocks,
    block_id: blockId,
    file_token: uploadResult.file_token,
    file_name: uploadResult.file_name,
    file_size: uploadResult.file_size,
    patch_result: patchResult
  };
}

/**
 * 完整的文件/视频插入流程
 */
export async function insertFile(
  client: Client,
  userAccessToken: string,
  params: MediaInsertParams
) {
  // 步骤1: 创建文件块
  const blocks = await createBlock(client, userAccessToken, {
    document_id: params.document_id,
    block_id: params.block_id,
    block_type: 23,
    index: params.index
  });

  const blockId = blocks[0]?.children?.[0];
  if (!blockId) {
    throw new Error('创建文件块失败，未获取到 block_id');
  }

  // 步骤2: 上传文件
  const uploadResult = await uploadMedia(userAccessToken, {
    parent_node: blockId,
    parent_type: 'docx_file',
    url: params.url,
    text: params.text,
    base64: params.base64,
    svg2png: params.svg2png,
    file_name: params.file_name
  });

  // 步骤3: 更新文件块
  const patchResult = await patchBlock(client, userAccessToken, {
    document_id: params.document_id,
    block_id: blockId,
    file_token: uploadResult.file_token,
    block_type: 'file'
  });

  return {
    blocks,
    block_id: blockId,
    file_token: uploadResult.file_token,
    file_name: uploadResult.file_name,
    file_size: uploadResult.file_size,
    patch_result: patchResult
  };
}
