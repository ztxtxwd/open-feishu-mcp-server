/**
 * Utility functions for processing markdown content
 */

/**
 * Adds a marker to all mermaid code blocks in the markdown content
 * 
 * @param markdown The original markdown content
 * @param marker The marker to add to each mermaid code block (default: '%% mermaid-block')
 * @param position The position to add the marker ('start' or 'end', default: 'start')
 * @returns The modified markdown content with markers added to mermaid code blocks
 */
export function addMermaidBlockMarkers(
  markdown: string, 
  marker: string = '%% mermaid',
  position: 'start' | 'end' = 'start'
): string {
  // Regular expression to match mermaid code blocks
  // This matches:
  // 1. A code block opening (```mermaid)
  // 2. Any content inside the code block (non-greedy)
  // 3. A code block closing (```)
  const mermaidBlockRegex = /```mermaid\n([\s\S]*?)```/g;
  
  // Replace each mermaid code block with the same block plus the marker
  return markdown.replace(mermaidBlockRegex, (match, codeContent) => {
    if (position === 'start') {
      // Add marker at the start of the code block content
      return `\`\`\`mermaid\n${marker}\n${codeContent}\`\`\``;
    } else {
      // Add marker at the end of the code block content
      return `\`\`\`mermaid\n${codeContent}${marker}\n\`\`\``;
    }
  });
}
