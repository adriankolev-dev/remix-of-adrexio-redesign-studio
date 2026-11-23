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
  const html = marked.parse(markdown, { async: false }) as string;
  // A wide table must scroll on its own on a phone instead of widening the
  // whole article past the screen.
  return html
    .replace(/<table>/g, '<div class="blog-table overflow-x-auto"><table>')
    .replace(/<\/table>/g, "</table></div>");
}
