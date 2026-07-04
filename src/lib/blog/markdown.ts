import { marked } from "marked";

marked.setOptions({
  gfm: true,
  breaks: false,
});

/**
 * Render trusted, author-written Markdown to an HTML string.
 * Content is authored in-repo (not user input), so the output is safe to inject.
 */
export function renderMarkdown(markdown: string): string {
  return marked.parse(markdown, { async: false }) as string;
}
