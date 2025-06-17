import axios from 'axios';

import { USER_AGENT } from './constants';

export const oapiHttpInstance = axios.create();

oapiHttpInstance.interceptors.request.use(
  (request) => {
    // /drive/v1/medias/upload_all 请求设置 Content-Type 为 multipart/form-data; boundary=---7MA4YWxkTrZu0gW
    if (request.url?.includes('/drive/v1/medias/upload_all')) {
      // request.headers.delete('Content-Type');
      // const boundary = '----WebKitFormBoundary' + Math.random().toString(36).substring(2);
      request.headers['Content-Type'] = "multipart/form-data; boundary=---7MA4YWxkTrZu0gW";
    }
    // GET/HEAD 请求不允许有请求体，删除 data
    if (request.method === 'get' || request.method === 'head') {
      request.data = null;
    }
    if (request.headers) {
      request.headers['User-Agent'] = USER_AGENT;
    }
    if (request.url?.includes('/drive/v1/medias/upload_all')) {
      // const formData = new FormData();
      // formData.append('file_name', request.data.file_name);
      // formData.append('parent_type', request.data.parent_type);
      // formData.append('parent_node', request.data.parent_node);
      // formData.append('size', request.data.size);
      // formData.append('file', request.data.file);
      // formData.append('extra', request.data.extra);

      // console.log('formData', formData);
      // request.data = formData;
    }
    // console.log('request', request);
    return request;
  },
  undefined,
  { synchronous: true },
);

oapiHttpInstance.interceptors.response.use((response) => response.data);
