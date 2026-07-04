// Post-build prerender for the blog. Runs after `vite build`.
// For each Markdown article it produces a real, static HTML file with correct
// <title>, meta description, canonical and Open Graph / Twitter tags plus the
// article text baked into #root — so Google and the Facebook scraper (which
// does NOT run JS) get proper SEO and link previews. The SPA still takes over
// on the client for navigation.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const CONTENT_DIR = join(ROOT, "src", "content", "blog");
const BASE_URL = "https://www.adrexio.com";
const SITE_NAME = "Adrexio";

marked.setOptions({ gfm: true, breaks: false });

// ── Minimal frontmatter parser (mirror of src/lib/blog/frontmatter.ts) ──
function stripQuotes(v) {
  const t = v.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

function parseFrontmatter(raw) {
  const normalized = raw.replace(/\r\n/g, "\n");
  const match = normalized.match(/^---\s*\n([\s\S]*?)\n---\s*\n?([\s\S]*)$/);
  if (!match) return { data: {}, content: normalized.trim() };
  const [, block, body] = match;
  const data = {};
  for (const line of block.split("\n")) {
    if (!line.trim() || line.trim().startsWith("#")) continue;
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    if (key) data[key] = stripQuotes(line.slice(idx + 1));
  }
  return { data, content: body.trim() };
}

function readingTime(md) {
  const words = md.replace(/[#>*_`~\-\[\]()!]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}

function escapeAttr(s = "") {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat("bg-BG", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

// ── Head-tag replacement helpers ──
function replaceMetaProperty(html, prop, content) {
  const re = new RegExp(`(<meta property="${prop}" content=")[^"]*(")`);
  if (re.test(html)) return html.replace(re, `$1${escapeAttr(content)}$2`);
  return html.replace("</head>", `    <meta property="${prop}" content="${escapeAttr(content)}" />\n  </head>`);
}

function replaceMetaName(html, name, content) {
  const re = new RegExp(`(<meta name="${name}" content=")[^"]*(")`);
  if (re.test(html)) return html.replace(re, `$1${escapeAttr(content)}$2`);
  return html.replace("</head>", `    <meta name="${name}" content="${escapeAttr(content)}" />\n  </head>`);
}

function replaceCanonical(html, href) {
  const re = /(<link rel="canonical" href=")[^"]*(")/;
  if (re.test(html)) return html.replace(re, `$1${escapeAttr(href)}$2`);
  return html.replace("</head>", `    <link rel="canonical" href="${escapeAttr(href)}" />\n  </head>`);
}

function replaceTitle(html, title) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`);
}

function injectJsonLd(html, data) {
  const script = `    <script type="application/ld+json">${JSON.stringify(data)}</script>\n  </head>`;
  return html.replace("</head>", script);
}

function injectRoot(html, inner) {
  return html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${inner}</div>`);
}

function applyMeta(html, { title, description, url, image, type = "article" }) {
  let out = html;
  out = replaceTitle(out, title);
  out = replaceMetaName(out, "description", description);
  out = replaceCanonical(out, url);
  out = replaceMetaProperty(out, "og:type", type);
  out = replaceMetaProperty(out, "og:url", url);
  out = replaceMetaProperty(out, "og:title", title);
  out = replaceMetaProperty(out, "og:description", description);
  out = replaceMetaProperty(out, "og:image", image);
  out = replaceMetaProperty(out, "og:image:secure_url", image);
  out = replaceMetaProperty(out, "og:image:alt", title);
  out = replaceMetaName(out, "twitter:url", url);
  out = replaceMetaName(out, "twitter:title", title);
  out = replaceMetaName(out, "twitter:description", description);
  out = replaceMetaName(out, "twitter:image", image);
  return out;
}

// ── Main ──
if (!existsSync(DIST)) {
  console.error("[prerender-blog] dist/ not found — run `vite build` first.");
  process.exit(1);
}

const template = readFileSync(join(DIST, "index.html"), "utf8");

const files = existsSync(CONTENT_DIR)
  ? readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md"))
  : [];

const posts = files
  .map((file) => {
    const raw = readFileSync(join(CONTENT_DIR, file), "utf8");
    const { data, content } = parseFrontmatter(raw);
    const slug = data.slug || file.replace(/\.md$/, "");
    return {
      slug,
      title: data.title ?? "Без заглавие",
      excerpt: data.excerpt ?? "",
      category: data.category ?? "Общи",
      date: data.date ?? "",
      cover: data.cover ?? "/og-image.png",
      author: data.author ?? SITE_NAME,
      content,
      readingTime: readingTime(content),
    };
  })
  .sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));

// Per-article pages
for (const post of posts) {
  const url = `${BASE_URL}/blog/${post.slug}`;
  const image = `${BASE_URL}${post.cover}`;
  const bodyHtml = marked.parse(post.content);

  const inner = `<main>
    <article>
      <p><a href="/blog">← Обратно към блога</a></p>
      <p>${escapeHtml(post.category)} · ${escapeHtml(formatDate(post.date))} · ${post.readingTime} мин четене</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.excerpt)}</p>
      <img src="${escapeAttr(post.cover)}" alt="${escapeAttr(post.title)}" width="1200" height="675" />
      ${bodyHtml}
    </article>
  </main>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "@id": url,
    headline: post.title,
    description: post.excerpt,
    image,
    datePublished: post.date,
    dateModified: post.date,
    inLanguage: "bg-BG",
    author: { "@type": "Organization", name: post.author, url: BASE_URL },
    publisher: {
      "@type": "Organization",
      name: SITE_NAME,
      logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
    },
    mainEntityOfPage: { "@type": "WebPage", "@id": url },
  };

  let page = applyMeta(template, {
    title: `${post.title} | ${SITE_NAME}`,
    description: post.excerpt,
    url,
    image,
    type: "article",
  });
  page = injectJsonLd(page, jsonLd);
  page = injectRoot(page, inner);

  const outDir = join(DIST, "blog", post.slug);
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), page, "utf8");
  console.log(`[prerender-blog] /blog/${post.slug}`);
}

// Listing page
{
  const url = `${BASE_URL}/blog`;
  const listInner = `<main>
    <h1>Блог — Adrexio</h1>
    <p>Практични статии за изкуствен интелект, автоматизация и технологии за бизнеса.</p>
    <ul>
      ${posts
        .map(
          (p) =>
            `<li><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.excerpt)}</li>`
        )
        .join("\n      ")}
    </ul>
  </main>`;

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Blog",
    name: "Блог — Adrexio",
    url,
    inLanguage: "bg-BG",
    blogPost: posts.map((p) => ({
      "@type": "BlogPosting",
      headline: p.title,
      description: p.excerpt,
      datePublished: p.date,
      url: `${BASE_URL}/blog/${p.slug}`,
      image: `${BASE_URL}${p.cover}`,
    })),
  };

  let page = applyMeta(template, {
    title: `Блог — статии за AI, автоматизация и дигитални решения | ${SITE_NAME}`,
    description:
      "Практични статии за изкуствен интелект, автоматизация, уеб разработка и дигитални стратегии от екипа на Adrexio.",
    url,
    image: `${BASE_URL}/og-image.png`,
    type: "website",
  });
  page = injectJsonLd(page, jsonLd);
  page = injectRoot(page, listInner);

  const outDir = join(DIST, "blog");
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), page, "utf8");
  console.log("[prerender-blog] /blog");
}

// Append blog URLs to sitemap.xml
{
  const sitemapPath = join(DIST, "sitemap.xml");
  if (existsSync(sitemapPath)) {
    let sitemap = readFileSync(sitemapPath, "utf8");
    if (!sitemap.includes(`${BASE_URL}/blog<`) && !sitemap.includes(`${BASE_URL}/blog</loc>`)) {
      const entries = [
        `  <url>\n    <loc>${BASE_URL}/blog</loc>\n    <changefreq>weekly</changefreq>\n    <priority>0.8</priority>\n  </url>`,
        ...posts.map(
          (p) =>
            `  <url>\n    <loc>${BASE_URL}/blog/${p.slug}</loc>\n    <lastmod>${p.date}</lastmod>\n    <changefreq>monthly</changefreq>\n    <priority>0.7</priority>\n  </url>`
        ),
      ].join("\n");
      sitemap = sitemap.replace("</urlset>", `${entries}\n</urlset>`);
      writeFileSync(sitemapPath, sitemap, "utf8");
      console.log("[prerender-blog] sitemap.xml updated");
    }
  }
}

console.log(`[prerender-blog] done — ${posts.length} article(s).`);
