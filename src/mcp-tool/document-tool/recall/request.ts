import axios from 'axios';

import { USER_AGENT } from '../../../utils/constants';

import { DocumentRecallToolOptions } from './type';

export const recallDeveloperDocument = async (query: string, options: DocumentRecallToolOptions) => {
  const { domain, count = 3 } = options;
  // Get Feishu search API endpoint
  const searchEndpoint = `${domain}/document_portal/v1/recall`;
  const payload = {
    question: query,
  };
  // Send network request to Feishu search API
  const response = await axios.post(searchEndpoint, payload, {
    timeout: 10000,
    headers: { 'User-Agent': USER_AGENT },
  });

  // Process search results
  const results = response.data.chunks || [];
  return results.slice(0, count);
};
