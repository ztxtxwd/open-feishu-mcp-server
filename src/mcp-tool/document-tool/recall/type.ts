import type { CallToolResult } from "@modelcontextprotocol/sdk/types";
import type { z } from "zod";

export interface DocumentRecallToolOptions {
  domain?: string;
  smallToBig?: boolean;
  count?: number;
  multiQuery?: boolean;
  timeout?: number;
}

export interface DocumentRecallTool {
  name: string;
  description: string;
  schema: { query: z.ZodType<string> };
  handler: (params: { query: string }, options: DocumentRecallToolOptions) => Promise<CallToolResult>;
}