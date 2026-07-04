// Minimal, dependency-free frontmatter parser for our own controlled Markdown
// files. Runs identically in the browser (Vite) and in Node (prerender script),
// so both surfaces produce the exact same article data.

export interface RawFrontmatter {
  [key: string]: string;
}

export interface ParsedMarkdown {
  data: RawFrontmatter;
  content: string;
}

const FRONTMATTER_RE = /^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/;

function stripQuotes(value: string): string {
  const trimmed = value.trim();
  if (
    (trimmed.startsWith('"') && trimmed.endsWith('"')) ||
    (trimmed.startsWith("'") && trimmed.endsWith("'"))
  ) {
    return trimmed.slice(1, -1);
  }
  return trimmed;
}

export function parseFrontmatter(raw: string): ParsedMarkdown {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(FRONTMATTER_RE);

  if (!match) {
    return { data: {}, content: normalized.trim() };
  }

  const [, block, body] = match;
  const data: RawFrontmatter = {};

  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1);
    if (key) data[key] = stripQuotes(value);
  }

  return { data, content: body.trim() };
}

/** Rough reading-time estimate in minutes (Bulgarian ~200 wpm). */
export function readingTimeMinutes(markdown: string): number {
  const words = markdown
    .replace(/[#>*_`~\-\[\]()!]/g, " ")
    .split(/\s+/)
    .filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
