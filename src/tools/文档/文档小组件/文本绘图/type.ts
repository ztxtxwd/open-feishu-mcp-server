import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type { z } from "zod";

export interface DocumentDrawingToolOptions {
  domain?: string;
  smallToBig?: boolean;
  count?: number;
  multiQuery?: boolean;
  timeout?: number;
}

export interface DocumentDrawingTool {
  name: string;
  description: string;
  schema: { document_id: z.ZodType<string>, parent_block_id: z.ZodType<string>, index: z.ZodType<number>, drawing_data: z.ZodType<string>, theme: z.ZodType<string> };
  handler: (params: { document_id: string, parent_block_id: string, index: number, drawing_data: string, theme: string }, options: DocumentDrawingToolOptions) => Promise<CallToolResult>;
}