import { USER_AGENT } from './constants';

type RequestConfig = {
  url?: string;
  method?: string;
  headers?: Record<string, string>;
  data?: any;
  params?: Record<string, string>;
};

type HttpInstance = {
  (config: RequestConfig): Promise<any>;
  request: (config: RequestConfig) => Promise<any>;
  get: (url: string, config?: RequestConfig) => Promise<any>;
  post: (url: string, data?: any, config?: RequestConfig) => Promise<any>;
  put: (url: string, data?: any, config?: RequestConfig) => Promise<any>;
  delete: (url: string, config?: RequestConfig) => Promise<any>;
  patch: (url: string, data?: any, config?: RequestConfig) => Promise<any>;
  head: (url: string, config?: RequestConfig) => Promise<any>;
  options: (url: string, config?: RequestConfig) => Promise<any>;
};

function createFetchHttpInstance(): HttpInstance {
  async function request(config: RequestConfig): Promise<any> {
    let { url = '', method = 'GET', headers = {}, data, params } = config;

    // 添加 User-Agent
    headers['User-Agent'] = USER_AGENT;

    // 处理 query params
    if (params) {
      const searchParams = new URLSearchParams(params);
      url = url.includes('?') ? `${url}&${searchParams}` : `${url}?${searchParams}`;
    }

    // GET/HEAD 请求不允许有请求体
    if (method.toLowerCase() === 'get' || method.toLowerCase() === 'head') {
      data = undefined;
    }

    // 处理 /drive/v1/medias/upload_all 请求的 Content-Type
    if (url.includes('/drive/v1/medias/upload_all')) {
      headers['Content-Type'] = 'multipart/form-data; boundary=---7MA4YWxkTrZu0gW';
    }

    const fetchOptions: RequestInit = {
      method: method.toUpperCase(),
      headers,
    };

    // 处理请求体
    if (data !== undefined) {
      if (data instanceof FormData) {
        fetchOptions.body = data;
      } else if (typeof data === 'object') {
        fetchOptions.body = JSON.stringify(data);
        if (!headers['Content-Type']) {
          headers['Content-Type'] = 'application/json';
        }
      } else {
        fetchOptions.body = data;
      }
    }

    const response = await fetch(url, fetchOptions);
    const responseData = await response.json();

    return responseData;
  }

  const instance = ((config: RequestConfig) => request(config)) as HttpInstance;

  instance.request = request;

  instance.get = (url: string, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'GET' });

  instance.post = (url: string, data?: any, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'POST', data });

  instance.put = (url: string, data?: any, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'PUT', data });

  instance.delete = (url: string, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'DELETE' });

  instance.patch = (url: string, data?: any, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'PATCH', data });

  instance.head = (url: string, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'HEAD' });

  instance.options = (url: string, config: RequestConfig = {}) =>
    request({ ...config, url, method: 'OPTIONS' });

  return instance;
}

export const oapiHttpInstance = createFetchHttpInstance();
