import axios from 'axios';
import { DocumentRecallToolOptions } from './type';
import { USER_AGENT } from '../../../utils/constants';

export const recallDeveloperDocument = async (query: string, options: DocumentRecallToolOptions) => {
  try {
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
    let results = response.data.chunks || [];
    return results.slice(0, count);
  } catch (error) {
    throw error;
  }
};
