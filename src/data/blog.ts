// Blog data layer — loads Markdown articles from src/content/blog/*.md at build
// time via Vite's import.meta.glob. Add a new article by dropping a .md file in
// that folder; it appears here automatically.
import { parseFrontmatter, readingTimeMinutes } from "@/lib/blog/frontmatter";

export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  date: string;
  cover: string;
  author: string;
  content: string;
  readingTime: number;
}

const rawFiles = import.meta.glob("/src/content/blog/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
}) as Record<string, string>;

function fileSlug(path: string): string {
  return path.split("/").pop()!.replace(/\.md$/, "");
}

const posts: BlogPost[] = Object.entries(rawFiles)
  .map(([path, raw]) => {
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || fileSlug(path);
    return {
      slug,
      title: data.title ?? "Без заглавие",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Общи",
      date: data.date ?? "",
      cover: data.cover ?? "/og-image.png",
      author: data.author ?? "Adrexio",
      content,
      readingTime: readingTimeMinutes(content),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

export const blogPosts: BlogPost[] = posts;

export const blogCategories: string[] = [
  "Всички",
  ...Array.from(new Set(posts.map((p) => p.category))),
];

export function getPostBySlug(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getPostsByCategory(category: string): BlogPost[] {
  if (category === "Всички") return posts;
  return posts.filter((p) => p.category === category);
}

export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const current = getPostBySlug(slug);
  if (!current) return [];
  const sameCategory = posts.filter(
    (p) => p.slug !== slug && p.category === current.category
  );
  const others = posts.filter(
    (p) => p.slug !== slug && p.category !== current.category
  );
  return [...sameCategory, ...others].slice(0, limit);
}

export function formatBlogDate(date: string): string {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat("bg-BG", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(d);
}
