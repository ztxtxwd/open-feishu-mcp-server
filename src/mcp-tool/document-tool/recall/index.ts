import { z } from "zod";

import { DocumentRecallTool } from "./type";
import { recallDeveloperDocument } from "./request";

const searchParamsSchema = {
  query: z.string().describe("user input"),
};

export const RecallTool: DocumentRecallTool = {
  name: "openplatform_developer_document_recall",
  description: "Recall for relevant documents in all of the Feishu/Lark Open Platform Developer Documents based on user input.",
  schema: searchParamsSchema,
  handler: async (params, options) => {
    const { query } = params;
    try {
      const results = await recallDeveloperDocument(query, options);
      // Return results
      return {
        content: [
          {
            type: "text",
            text: results.length ? `Find ${results.length} results:\n${results.join("\n\n")}` : "No results found",
          }
        ],
      };
    } catch (error: Error | unknown) {    
      return {
        isError: true,
        content: [
          {
            type: "text",
            text: `Search failed:${error instanceof Error ? error.message : 'Unknown error'}`,
          },
        ],
      };
    }
  }
};
