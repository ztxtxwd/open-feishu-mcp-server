import { describe, it, expect, jest, beforeEach } from '@jest/globals';
import { Client } from '@larksuiteoapi/node-sdk';

import { docxAddonsMermaidCreate } from '../mermaid';

// Mock larkOapiHandler
jest.mock('../../../../mcp-tool/utils/handler', () => ({
  larkOapiHandler: jest.fn()
}));

const mockClient = {} as Client;
const mockOptions = {
  userAccessToken: 'mock-token',
  tool: docxAddonsMermaidCreate
};

describe('docxAddonsMermaidCreate', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  describe('参数验证', () => {
    it('应该验证必需参数', async () => {
      const invalidParams = {
        // 缺少 document_id 和 drawing_data
      };

      await expect(
        docxAddonsMermaidCreate.customHandler(mockClient, invalidParams as any, mockOptions)
      ).rejects.toThrow();
    });

    it('应该接受有效参数', async () => {
      const validParams = {
        document_id: 'doc123',
        drawing_data: 'graph TD; A-->B;',
        theme: 'default' as const
      };

      const { larkOapiHandler } = require('../../../../mcp-tool/utils/handler');
      larkOapiHandler.mockResolvedValue({ success: true });

      await expect(
        docxAddonsMermaidCreate.customHandler(mockClient, validParams, mockOptions)
      ).resolves.not.toThrow();
    });
  });

  describe('主题处理', () => {
    it('应该使用默认主题', async () => {
      const params = {
        document_id: 'doc123',
        drawing_data: 'graph TD; A-->B;'
      };

      const { larkOapiHandler } = require('../../../../mcp-tool/utils/handler');
      larkOapiHandler.mockResolvedValue({ success: true });

      await docxAddonsMermaidCreate.customHandler(mockClient, params, mockOptions);

      expect(larkOapiHandler).toHaveBeenCalledWith(
        mockClient,
        expect.objectContaining({
          data: expect.objectContaining({
            children: expect.arrayContaining([
              expect.objectContaining({
                add_ons: expect.objectContaining({
                  record: expect.stringContaining('"theme":"default"')
                })
              })
            ])
          })
        }),
        mockOptions
      );
    });
  });

  describe('错误处理', () => {
    it('应该正确处理API错误', async () => {
      const params = {
        document_id: 'doc123',
        drawing_data: 'graph TD; A-->B;'
      };

      const { larkOapiHandler } = require('../../../../mcp-tool/utils/handler');
      larkOapiHandler.mockRejectedValue(new Error('API错误'));

      await expect(
        docxAddonsMermaidCreate.customHandler(mockClient, params, mockOptions)
      ).rejects.toThrow('API错误');
    });
  });
}); 