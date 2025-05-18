import { addMermaidBlockMarkers } from '../markdown-processor';

describe('markdown-processor', () => {
  describe('addMermaidBlockMarkers', () => {
    it('should add markers to mermaid code blocks at the start by default', () => {
      const markdown = `
# Test Document

Here is a mermaid diagram:

\`\`\`mermaid
graph TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
\`\`\`

And here is another one:

\`\`\`mermaid
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`

And some regular code:

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`
`;

      const expected = `
# Test Document

Here is a mermaid diagram:

\`\`\`mermaid
%% mermaid-block
graph TD
    A[Start] --> B{Is it?}
    B -->|Yes| C[OK]
    C --> D[Rethink]
    D --> B
    B ---->|No| E[End]
\`\`\`

And here is another one:

\`\`\`mermaid
%% mermaid-block
sequenceDiagram
    participant Alice
    participant Bob
    Alice->>John: Hello John, how are you?
    loop Healthcheck
        John->>John: Fight against hypochondria
    end
    Note right of John: Rational thoughts <br/>prevail!
    John-->>Alice: Great!
    John->>Bob: How about you?
    Bob-->>John: Jolly good!
\`\`\`

And some regular code:

\`\`\`javascript
function hello() {
  console.log("Hello, world!");
}
\`\`\`
`;

      const result = addMermaidBlockMarkers(markdown);
      expect(result).toEqual(expected);
    });

    it('should add markers to mermaid code blocks at the end when specified', () => {
      const markdown = `
\`\`\`mermaid
graph TD
    A[Start] --> B[End]
\`\`\`
`;

      const expected = `
\`\`\`mermaid
graph TD
    A[Start] --> B[End]
%% mermaid-block
\`\`\`
`;

      const result = addMermaidBlockMarkers(markdown, '%% mermaid-block', 'end');
      expect(result).toEqual(expected);
    });

    it('should use custom marker text when provided', () => {
      const markdown = `
\`\`\`mermaid
graph TD
    A[Start] --> B[End]
\`\`\`
`;

      const expected = `
\`\`\`mermaid
%% custom-marker
graph TD
    A[Start] --> B[End]
\`\`\`
`;

      const result = addMermaidBlockMarkers(markdown, '%% custom-marker');
      expect(result).toEqual(expected);
    });

    it('should handle markdown with no mermaid blocks', () => {
      const markdown = `
# Just a regular document

Some text here.

\`\`\`javascript
console.log("Hello");
\`\`\`
`;

      const result = addMermaidBlockMarkers(markdown);
      expect(result).toEqual(markdown);
    });

    it('should handle empty markdown', () => {
      const markdown = '';
      const result = addMermaidBlockMarkers(markdown);
      expect(result).toEqual('');
    });
  });
});
