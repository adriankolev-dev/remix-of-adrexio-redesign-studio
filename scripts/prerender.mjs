// Post-build prerender. Runs after `vite build`.
// Writes a real HTML file per public route with unique <title>, description,
// canonical, Open Graph tags and visible text in #root. Google's first crawl
// (and scrapers that do not run JS) then see the actual page instead of an
// empty SPA shell that canonicalises everything to the homepage.
// The React app still hydrates and takes over in the browser.
import { readFileSync, writeFileSync, mkdirSync, readdirSync, existsSync } from "node:fs";
import { join, dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { marked } from "marked";

const __dirname = dirname(fileURLToPath(import.meta.url));
const ROOT = join(__dirname, "..");
const DIST = join(ROOT, "dist");
const SRC = join(ROOT, "src");
const CONTENT_DIR = join(SRC, "content", "blog");
const BASE_URL = "https://www.adrexio.com";
const SITE_NAME = "Adrexio";
const DEFAULT_IMAGE = `${BASE_URL}/og-image.png`;

marked.setOptions({ gfm: true, breaks: false });

const SERVICE_FILES = [
  { path: "/services/web-development", file: "WebDevelopment.tsx" },
  { path: "/services/ai-implementation", file: "AIImplementation.tsx" },
  { path: "/services/mobile-apps", file: "MobileApps.tsx" },
  { path: "/services/ui-ux-design", file: "UIUXDesign.tsx" },
  { path: "/services/seo", file: "SEO.tsx" },
  { path: "/services/digital-marketing", file: "DigitalMarketing.tsx" },
  { path: "/services/technical-support", file: "TechnicalSupport.tsx" },
];

// ── String helpers ──────────────────────────────────────────────────────────

export function stripQuotes(v) {
  const t = v.trim();
  if ((t.startsWith('"') && t.endsWith('"')) || (t.startsWith("'") && t.endsWith("'"))) {
    return t.slice(1, -1);
  }
  return t;
}

export function escapeAttr(s = "") {
  return s.replace(/&/g, "&amp;").replace(/"/g, "&quot;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

export function escapeHtml(s = "") {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
}

function unescapeJs(s = "") {
  return s.replace(/\\n/g, "\n").replace(/\\"/g, '"').replace(/\\\\/g, "\\");
}

export function truncateDescription(text, maxLength = 145) {
  if (!text) return "";
  if (text.length <= maxLength) return text;
  const truncated = text.substring(0, maxLength);
  const lastSpace = truncated.lastIndexOf(" ");
  return (lastSpace > 0 ? truncated.substring(0, lastSpace) : truncated) + "...";
}

function formatDate(date) {
  if (!date) return "";
  const d = new Date(date);
  if (Number.isNaN(d.getTime())) return date;
  return new Intl.DateTimeFormat("bg-BG", { day: "numeric", month: "long", year: "numeric" }).format(d);
}

function readingTime(md) {
  const words = md.replace(/[#>*_`~\-\[\]()!]/g, " ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
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

function extractJsxStringProp(src, name) {
  const re = new RegExp(`${name}\\s*=\\s*"([^"]*)"`);
  const m = src.match(re);
  return m ? unescapeJs(m[1]) : "";
}

function extractStringField(src, name) {
  const re = new RegExp(`${name}:\\s*"((?:\\\\.|[^"\\\\])*)"`);
  const m = src.match(re);
  return m ? unescapeJs(m[1]) : "";
}

function extractBoolField(src, name) {
  const re = new RegExp(`${name}:\\s*(true|false)`);
  const m = src.match(re);
  return m ? m[1] === "true" : false;
}

function extractQuotedArray(src, name) {
  const re = new RegExp(`${name}:\\s*\\[([\\s\\S]*?)\\]`);
  const m = src.match(re);
  if (!m) return [];
  return [...m[1].matchAll(/"((?:\\\\.|[^"\\\\])*)"/g)].map((x) => unescapeJs(x[1]));
}

function extractTitleDescriptionPairs(block) {
  const pairs = [];
  const re =
    /(?:title|question):\s*"((?:\\.|[^"\\])*)"[\s\S]*?(?:description|answer):\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(block))) {
    pairs.push({ title: unescapeJs(m[1]), description: unescapeJs(m[2]) });
  }
  return pairs;
}

function extractJsxArrayBlock(src, name) {
  const marker = `${name}={[`;
  const start = src.indexOf(marker);
  if (start === -1) return "";
  let i = start + marker.length;
  let depth = 1;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") depth -= 1;
    i += 1;
  }
  return src.slice(start + marker.length, i - 1);
}

function extractConstArrayBlock(src, name) {
  const marker = `const ${name} = [`;
  const start = src.indexOf(marker);
  if (start === -1) return "";
  let i = start + marker.length;
  let depth = 1;
  while (i < src.length && depth > 0) {
    const ch = src[i];
    if (ch === "[") depth += 1;
    else if (ch === "]") depth -= 1;
    i += 1;
  }
  return src.slice(start + marker.length, i - 1);
}

export function parseCaseStudies(raw) {
  const chunks = raw.split(/\n  \{\s*\n    id: "/);
  const studies = [];
  for (const chunk of chunks.slice(1)) {
    const id = chunk.match(/^([^"]+)"/)?.[1];
    if (!id) continue;
    const body = `id: "${chunk}`;
    studies.push({
      id,
      title: extractStringField(body, "title"),
      subtitle: extractStringField(body, "subtitle"),
      category: extractStringField(body, "category"),
      url: extractStringField(body, "url") || null,
      isPublic: extractBoolField(body, "isPublic"),
      overview: extractStringField(body, "overview"),
      challenge: extractStringField(body, "challenge"),
      solution: extractQuotedArray(body, "solution"),
      technologies: extractQuotedArray(body, "technologies"),
      results: [...body.matchAll(/\{\s*metric:\s*"((?:\\.|[^"\\])*)"\s*,\s*label:\s*"((?:\\.|[^"\\])*)"/g)].map(
        (m) => ({ metric: unescapeJs(m[1]), label: unescapeJs(m[2]) }),
      ),
    });
  }
  return studies;
}

export function parseServicePage(src) {
  const featuresBlock = extractJsxArrayBlock(src, "features");
  const faqsBlock = extractJsxArrayBlock(src, "faqs");
  const faqPairs = extractTitleDescriptionPairs(faqsBlock).map((p) => ({
    question: p.title,
    answer: p.description,
  }));
  return {
    seoTitle: extractJsxStringProp(src, "seoTitle"),
    seoDescription: extractJsxStringProp(src, "seoDescription"),
    seoKeywords: extractJsxStringProp(src, "seoKeywords"),
    serviceName: extractJsxStringProp(src, "serviceName"),
    heroTitle: extractJsxStringProp(src, "heroTitle"),
    heroHighlight: extractJsxStringProp(src, "heroHighlight"),
    heroSubtitle: extractJsxStringProp(src, "heroSubtitle"),
    introTitle: extractJsxStringProp(src, "introTitle"),
    introDescription: extractJsxStringProp(src, "introDescription"),
    features: extractTitleDescriptionPairs(featuresBlock),
    faqs: faqPairs,
  };
}

// ── Head helpers ────────────────────────────────────────────────────────────

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

function replaceHreflang(html, href) {
  const re = /(<link rel="alternate" hreflang="bg" href=")[^"]*(")/;
  if (re.test(html)) return html.replace(re, `$1${escapeAttr(href)}$2`);
  return html.replace("</head>", `    <link rel="alternate" hreflang="bg" href="${escapeAttr(href)}" />\n  </head>`);
}

function replaceTitle(html, title) {
  return html
    .replace(/<title>[^<]*<\/title>/, `<title>${escapeHtml(title)}</title>`)
    .replace(/(<meta name="title" content=")[^"]*(")/, `$1${escapeAttr(title)}$2`);
}

function injectJsonLd(html, data) {
  const payload = Array.isArray(data) ? data : [data];
  const scripts = payload
    .filter(Boolean)
    .map((item) => `    <script type="application/ld+json">${JSON.stringify(item)}</script>`)
    .join("\n");
  return html.replace("</head>", `${scripts}\n  </head>`);
}

function injectRoot(html, inner) {
  if (!/<div id="root">\s*<\/div>/.test(html)) {
    throw new Error("index.html template is missing an empty #root");
  }
  return html.replace(/<div id="root">\s*<\/div>/, `<div id="root">${inner}</div>`);
}

function applyMeta(html, { title, description, url, image, type = "website", keywords }) {
  let out = html;
  out = replaceTitle(out, title);
  out = replaceMetaName(out, "description", description);
  if (keywords) out = replaceMetaName(out, "keywords", keywords);
  out = replaceCanonical(out, url);
  out = replaceHreflang(out, url);
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

function writePage(routePath, html) {
  const outDir = routePath === "/" ? DIST : join(DIST, routePath.replace(/^\//, ""));
  mkdirSync(outDir, { recursive: true });
  writeFileSync(join(outDir, "index.html"), html, "utf8");
}

function list(items) {
  return `<ul>${items.map((item) => `<li>${item}</li>`).join("")}</ul>`;
}

function chrome(inner) {
  return `<header>
    <p><a href="/">Adrexio</a> — уеб студио в София</p>
    <nav>
      <a href="/">Начало</a>
      <a href="/services">Услуги</a>
      <a href="/pricing">Цени</a>
      <a href="/about">За нас</a>
      <a href="/case-studies">Проекти</a>
      <a href="/blog">Блог</a>
      <a href="/contact">Контакти</a>
    </nav>
  </header>
  <main>${inner}</main>
  <footer>
    <p>Adrexio · София, България · <a href="mailto:hello@adrexio.com">hello@adrexio.com</a> · <a href="tel:+359896173743">+359 896 173 743</a></p>
    <p><a href="/privacy">Политика за поверителност</a> · <a href="/terms">Общи условия</a> · <a href="/affiliate">Партньорска програма</a></p>
  </footer>`;
}

function orgSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: SITE_NAME,
    url: BASE_URL,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
    description:
      "Създаваме бързи и оптимизирани уебсайтове, мобилни приложения и дигитални решения, които помагат на бизнеса да расте онлайн.",
    address: { "@type": "PostalAddress", addressLocality: "София", addressCountry: "BG" },
    contactPoint: {
      "@type": "ContactPoint",
      telephone: "+359-896-173-743",
      contactType: "customer service",
      email: "hello@adrexio.com",
      areaServed: "BG",
      availableLanguage: "Bulgarian",
    },
    sameAs: [
      "https://www.linkedin.com/company/adrexio/",
      "https://www.instagram.com/adrexio_/",
      "https://www.facebook.com/profile.php?id=61587315031705",
    ],
  };
}

function websiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: SITE_NAME,
    url: BASE_URL,
    description: "Модерни уебсайтове и дигитални решения за бизнеса",
    inLanguage: "bg-BG",
  };
}

function serviceSchema(name, description) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: name,
    provider: { "@type": "Organization", name: SITE_NAME },
    description,
    areaServed: { "@type": "Country", name: "България" },
  };
}

function faqSchema(faqs) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };
}

function breadcrumbSchema(items) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

function localBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": BASE_URL,
    name: SITE_NAME,
    image: `${BASE_URL}/favicon.svg`,
    logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
    description: "Уеб дизайн и разработка, мобилни приложения, SEO и GEO оптимизация",
    address: { "@type": "PostalAddress", addressLocality: "София", addressCountry: "BG" },
    telephone: "+359-896-173-743",
    email: "hello@adrexio.com",
    priceRange: "$$",
    areaServed: { "@type": "Country", name: "България" },
  };
}

function assemble(template, { title, description, url, image, type, keywords, jsonLd, inner }) {
  let page = applyMeta(template, { title, description, url, image: image || DEFAULT_IMAGE, type, keywords });
  if (jsonLd) page = injectJsonLd(page, jsonLd);
  return injectRoot(page, chrome(inner));
}

function loadBlogPosts() {
  const files = existsSync(CONTENT_DIR) ? readdirSync(CONTENT_DIR).filter((f) => f.endsWith(".md")) : [];
  return files
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
}

function parsePricingServices(src) {
  const block = extractConstArrayBlock(src, "PRICING_SERVICES");
  const items = [];
  const re =
    /name:\s*"((?:\\.|[^"\\])*)"[\s\S]*?fromLabel:\s*PRICING\.\w+\.fromLabel[\s\S]*?description:\s*"((?:\\.|[^"\\])*)"/g;
  let m;
  while ((m = re.exec(block))) {
    items.push({ name: unescapeJs(m[1]), description: unescapeJs(m[2]) });
  }
  return items;
}

function parsePricingAmounts(src) {
  const website = src.match(/website:\s*\{[\s\S]*?fromLabel:\s*"([^"]+)"/);
  const ecommerce = src.match(/ecommerce:\s*\{[\s\S]*?fromLabel:\s*"([^"]+)"/);
  const maintenance = src.match(/maintenance:\s*\{[\s\S]*?fromLabel:\s*"([^"]+)"/);
  return {
    website: website?.[1] ?? "от €690",
    ecommerce: ecommerce?.[1] ?? "от €1.900",
    maintenance: maintenance?.[1] ?? "от €99 / месец",
  };
}

function parsePricingFaqs(pricingPageSrc, paymentCopy) {
  const block = extractConstArrayBlock(pricingPageSrc, "faqs");
  return extractTitleDescriptionPairs(block.replaceAll("PAYMENT_COPY", `"${paymentCopy.replace(/"/g, '\\"')}"`)).map(
    (p) => ({ question: p.title, answer: p.description }),
  );
}

function parseAffiliate(src) {
  const benefits = extractTitleDescriptionPairs(extractConstArrayBlock(src, "benefits"));
  const steps = extractTitleDescriptionPairs(extractConstArrayBlock(src, "steps"));
  const faqs = extractTitleDescriptionPairs(extractConstArrayBlock(src, "faqs")).map((p) => ({
    question: p.title,
    answer: p.description,
  }));
  return { benefits, steps, faqs };
}

function parseAboutValues(src) {
  return {
    values: extractTitleDescriptionPairs(extractConstArrayBlock(src, "values")),
    offer: extractTitleDescriptionPairs(extractConstArrayBlock(src, "offer")),
  };
}

function parseServicesIndex(src) {
  const block = extractConstArrayBlock(src, "services");
  const items = [];
  const chunks = block.split(/\n  \{\n/);
  for (const chunk of chunks.slice(1)) {
    const title = extractStringField(chunk, "title");
    const description = extractStringField(chunk, "description");
    const href = extractStringField(chunk, "href");
    const features = extractQuotedArray(chunk, "features");
    if (title && href) items.push({ title, description, href, features });
  }
  return items;
}

// ── Page writers ────────────────────────────────────────────────────────────

function prerenderHome(template, services, posts, studies) {
  const title = "Уебсайтове от нулата, не от шаблон | Adrexio";
  const description =
    "Уеб студио в София. Изграждаме сайтове и магазини от нулата — без шаблони. Дизайн, който се помни, и структура, която носи запитвания.";
  const inner = `
    <h1>Край на сайтовете, които приличат на всеки втори.</h1>
    <p>Повечето агенции продават един и същ шаблон с ново лого. Ние проектираме и изграждаме от нулата — дизайн, който клиентите ви помнят, и структура, която носи запитвания.</p>
    <p><a href="/contact">Свържи се с нас</a> · <a href="/case-studies">Виж проектите</a></p>
    <h2>Услуги</h2>
    ${list(services.map((s) => `<a href="${s.href}">${escapeHtml(s.title)}</a> — ${escapeHtml(s.description)}`))}
    <h2>Проекти</h2>
    ${list(
      studies
        .slice(0, 12)
        .map((s) => `<a href="/case-studies/${s.id}">${escapeHtml(s.title)}</a> — ${escapeHtml(s.subtitle)}`),
    )}
    <h2>Блог</h2>
    ${list(posts.map((p) => `<a href="/blog/${p.slug}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.excerpt)}`))}
  `;
  writePage(
    "/",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/`,
      keywords:
        "уеб разработка, уеб дизайн, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, уебсайт София, уеб студио България, разработка на сайтове, мобилни приложения iOS Android",
      jsonLd: { "@context": "https://schema.org", "@graph": [orgSchema(), websiteSchema()] },
      inner,
    }),
  );
}

function prerenderServicesIndex(template, services) {
  const title = "Услуги - Adrexio | Изработка на уебсайтове, мобилни приложения, SEO и GEO, дигитален маркетинг";
  const description =
    "Изработка на уебсайтове, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг и техническа поддръжка в София.";
  const inner = `
    <h1>Всичко, от което имате нужда — изградено от нулата.</h1>
    <p>От първия wireframe до пускането. Не предлагаме готови шаблони с ново лого — проектираме всяко решение спрямо вашия бизнес.</p>
    ${services
      .map(
        (s) => `<article>
      <h2><a href="${s.href}">${escapeHtml(s.title)}</a></h2>
      <p>${escapeHtml(s.description)}</p>
      ${s.features?.length ? list(s.features.map((f) => escapeHtml(f))) : ""}
    </article>`,
      )
      .join("\n")}
  `;
  writePage(
    "/services",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/services`,
      keywords:
        "изработка на уебсайтове, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, техническа поддръжка, уеб студио услуги София",
      jsonLd: [
        { "@context": "https://schema.org", "@graph": services.map((s) => serviceSchema(s.title, s.description)) },
        breadcrumbSchema([
          { name: "Начало", url: `${BASE_URL}/` },
          { name: "Услуги", url: `${BASE_URL}/services` },
        ]),
      ],
      inner,
    }),
  );
}

function prerenderServicePages(template) {
  for (const { path: routePath, file } of SERVICE_FILES) {
    const src = readFileSync(join(SRC, "pages", "services", file), "utf8");
    const page = parseServicePage(src);
    if (!page.seoTitle || !page.seoDescription) {
      throw new Error(`[prerender] missing SEO fields in ${file}`);
    }
    const h1 = [page.heroTitle, page.heroHighlight].filter(Boolean).join(" ");
    const inner = `
      <p><a href="/services">← Услуги</a></p>
      <h1>${escapeHtml(h1)}</h1>
      <p>${escapeHtml(page.heroSubtitle)}</p>
      <h2>${escapeHtml(page.introTitle)}</h2>
      <p>${escapeHtml(page.introDescription)}</p>
      ${
        page.features.length
          ? `<h2>Какво включва услугата</h2>${list(
              page.features.map((f) => `<strong>${escapeHtml(f.title)}</strong> — ${escapeHtml(f.description)}`),
            )}`
          : ""
      }
      ${
        page.faqs.length
          ? `<h2>Често задавани въпроси</h2>${page.faqs
              .map(
                (f) =>
                  `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`,
              )
              .join("")}`
          : ""
      }
      <p><a href="/contact">Свържи се с нас</a></p>
    `;
    const jsonLd = [
      serviceSchema(page.serviceName || h1, page.seoDescription),
      page.faqs.length ? faqSchema(page.faqs) : null,
      breadcrumbSchema([
        { name: "Начало", url: `${BASE_URL}/` },
        { name: "Услуги", url: `${BASE_URL}/services` },
        { name: page.serviceName || h1, url: `${BASE_URL}${routePath}` },
      ]),
    ];
    writePage(
      routePath,
      assemble(template, {
        title: page.seoTitle,
        description: page.seoDescription,
        url: `${BASE_URL}${routePath}`,
        keywords: page.seoKeywords,
        jsonLd,
        inner,
      }),
    );
  }
}

function prerenderPricing(template, amounts, services, faqs) {
  const title = "Цени за уеб проекти - Adrexio | Уеб сайтове, онлайн магазини и поддръжка";
  const description =
    "Ориентировъчни цени за уеб сайтове, онлайн магазини и месечна поддръжка. За SEO, маркетинг и AI — оферта след консултация. 50/50 плащане.";
  const inner = `
    <h1>Ясни цени за уеб проекти. Без изненади.</h1>
    <p>Ориентировъчни суми за уеб сайтове, онлайн магазини и поддръжка. За SEO, дигитален маркетинг, AI и мобилни приложения — оферта след консултация.</p>
    ${services
      .map((s, i) => {
        const from = i === 0 ? amounts.website : i === 1 ? amounts.ecommerce : amounts.maintenance;
        return `<h2>${escapeHtml(s.name)} — ${escapeHtml(from)}</h2><p>${escapeHtml(s.description)}</p>`;
      })
      .join("")}
    ${faqs.map((f) => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join("")}
    <p><a href="/contact">Свържи се с нас</a></p>
  `;
  writePage(
    "/pricing",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/pricing`,
      keywords:
        "цени уебсайт, цена уеб разработка, цена онлайн магазин, цена поддръжка сайт, цени уеб студио София, уебсайт цена България",
      jsonLd: [faqSchema(faqs), breadcrumbSchema([{ name: "Начало", url: `${BASE_URL}/` }, { name: "Цени", url: `${BASE_URL}/pricing` }])],
      inner,
    }),
  );
}

function prerenderAbout(template, { values, offer }) {
  const title = "За нас - Adrexio | Професионално уеб студио в София";
  const description =
    "Уеб студио в София за модерни уебсайтове, мобилни приложения и дигитални решения. Фокус върху качество, скорост и резултати.";
  const inner = `
    <h1>Ние сме Adrexio — пълна дигитална агенция. Започваме със сайт или онлайн магазин.</h1>
    <p>Пълна дигитална агенция: започваме със сайт или магазин, после растем заедно с вас — поддръжка, проследяване и базово SEO. Приложения, реклама и по-сложни AI интеграции идват на следващ етап — по проект.</p>
    <h2>Мисия</h2>
    <p>Помагаме на бизнеса да расте онлайн — чрез бързи, оптимизирани и незабравими сайтове и магазини. После оставаме за поддръжка, проследяване и SEO. Приложения, реклама и AI — когато бизнесът е готов.</p>
    <h2>Ценности</h2>
    ${list(values.map((v) => `<strong>${escapeHtml(v.title)}</strong> — ${escapeHtml(v.description)}`))}
    <h2>Какво получавате</h2>
    ${list(offer.map((v) => `<strong>${escapeHtml(v.title)}</strong> — ${escapeHtml(v.description)}`))}
    <p><a href="/contact">Свържи се с нас</a> · <a href="/case-studies">Виж проектите</a></p>
  `;
  writePage(
    "/about",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/about`,
      keywords: "за нас Adrexio, уеб студио София, екип уеб разработка, история Adrexio, опит уеб дизайн",
      jsonLd: orgSchema(),
      inner,
    }),
  );
}

function prerenderCaseStudiesIndex(template, studies) {
  const title = "Проекти — реални резултати на Adrexio";
  const description =
    "Разгледайте реални проекти на Adrexio — уебсайтове, мобилни приложения, UI/UX дизайн и дигитални решения, изградени от нулата за бизнеси от различни индустрии.";
  const publicStudies = studies.filter((s) => s.isPublic);
  const inner = `
    <h1>Реални проекти, реални резултати.</h1>
    <p>Уебсайтове, магазини и приложения, изградени от нулата за бизнеси от различни индустрии.</p>
    ${list(
      publicStudies.map(
        (s) =>
          `<a href="/case-studies/${s.id}">${escapeHtml(s.title)}</a> — ${escapeHtml(s.subtitle)}. ${escapeHtml(s.overview)}`,
      ),
    )}
  `;
  writePage(
    "/case-studies",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/case-studies`,
      keywords: "портфолио, проекти, case studies, уеб дизайн, уебсайтове, мобилни приложения, Adrexio, България",
      jsonLd: [
        {
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "Проекти — Adrexio",
          description,
          url: `${BASE_URL}/case-studies`,
          inLanguage: "bg-BG",
          mainEntity: {
            "@type": "ItemList",
            numberOfItems: publicStudies.length,
            itemListElement: publicStudies.map((study, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: study.title,
              url: `${BASE_URL}/case-studies/${study.id}`,
            })),
          },
        },
        breadcrumbSchema([
          { name: "Начало", url: `${BASE_URL}/` },
          { name: "Проекти", url: `${BASE_URL}/case-studies` },
        ]),
      ],
      inner,
    }),
  );
}

function caseStudyTitle(study) {
  if (study.id === "koleff-house") {
    return `${study.title} - Къща за гости Твърдица, Сливен | Next.js Уебсайт | Adrexio`;
  }
  return `${study.title} - ${study.subtitle} | Adrexio`;
}

function prerenderCaseStudyPages(template, studies) {
  for (const study of studies.filter((s) => s.isPublic)) {
    const description = truncateDescription(study.overview);
    const inner = `
      <p><a href="/case-studies">← Назад към проектите</a></p>
      <p>${escapeHtml(study.category)}</p>
      <h1>${escapeHtml(study.title)}</h1>
      <p>${escapeHtml(study.subtitle)}</p>
      <h2>Преглед</h2>
      <p>${escapeHtml(study.overview)}</p>
      <h2>Предизвикателство</h2>
      <p>${escapeHtml(study.challenge)}</p>
      <h2>Решение</h2>
      ${list(study.solution.map((item) => escapeHtml(item)))}
      ${
        study.results.length
          ? `<h2>Резултати</h2>${list(study.results.map((r) => `${escapeHtml(r.metric)} — ${escapeHtml(r.label)}`))}`
          : ""
      }
      ${study.technologies.length ? `<p>Технологии: ${escapeHtml(study.technologies.join(", "))}</p>` : ""}
      ${study.url ? `<p><a href="${escapeAttr(study.url)}">Към сайта</a></p>` : ""}
    `;
    writePage(
      `/case-studies/${study.id}`,
      assemble(template, {
        title: caseStudyTitle(study),
        description,
        url: `${BASE_URL}/case-studies/${study.id}`,
        type: "article",
        keywords:
          study.id === "koleff-house"
            ? `${study.title}, къща за гости Твърдица, настаняване Сливен, Next.js уебсайт, Stefan Kolev, ${study.category}, уеб разработка, case study, ${study.technologies.join(", ")}`
            : `${study.title}, ${study.category}, уеб разработка, case study, ${study.technologies.join(", ")}`,
        jsonLd: {
          "@context": "https://schema.org",
          "@graph": [
            {
              "@type": "Article",
              "@id": `${BASE_URL}/case-studies/${study.id}`,
              headline: `${study.title} - ${study.subtitle}`,
              description,
              inLanguage: "bg-BG",
              author: { "@type": "Organization", name: SITE_NAME, url: BASE_URL },
              publisher: {
                "@type": "Organization",
                name: SITE_NAME,
                logo: { "@type": "ImageObject", url: `${BASE_URL}/favicon.svg`, width: 512, height: 512 },
              },
              mainEntityOfPage: { "@type": "WebPage", "@id": `${BASE_URL}/case-studies/${study.id}` },
              articleSection: study.category,
            },
            breadcrumbSchema([
              { name: "Начало", url: BASE_URL },
              { name: "Проекти", url: `${BASE_URL}/case-studies` },
              { name: study.title, url: `${BASE_URL}/case-studies/${study.id}` },
            ]),
          ],
        },
        inner,
      }),
    );
  }
}

function prerenderBlog(template, posts) {
  for (const post of posts) {
    const url = `${BASE_URL}/blog/${post.slug}`;
    const image = `${BASE_URL}${post.cover}`;
    const bodyHtml = marked.parse(post.content);
    const inner = `<article>
      <p><a href="/blog">← Обратно към блога</a></p>
      <p>${escapeHtml(post.category)} · ${escapeHtml(formatDate(post.date))} · ${post.readingTime} мин.</p>
      <h1>${escapeHtml(post.title)}</h1>
      <p>${escapeHtml(post.excerpt)}</p>
      <img src="${escapeAttr(post.cover)}" alt="${escapeAttr(post.title)}" width="1200" height="675" />
      ${bodyHtml}
    </article>`;
    writePage(
      `/blog/${post.slug}`,
      assemble(template, {
        title: `${post.title} | ${SITE_NAME}`,
        description: post.excerpt,
        url,
        image,
        type: "article",
        jsonLd: {
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
        },
        inner,
      }),
    );
  }

  const url = `${BASE_URL}/blog`;
  const inner = `
    <h1>Идеи за дигиталния бизнес.</h1>
    <p>Практични статии за изкуствен интелект, автоматизация, уеб разработка и дигитални стратегии от екипа на Adrexio.</p>
    ${list(posts.map((p) => `<a href="/blog/${p.slug}">${escapeHtml(p.title)}</a> — ${escapeHtml(p.excerpt)}`))}
  `;
  writePage(
    "/blog",
    assemble(template, {
      title: `Блог — статии за AI, автоматизация и дигитални решения | ${SITE_NAME}`,
      description:
        "Практични статии за изкуствен интелект, автоматизация, уеб разработка и дигитални стратегии — от екипа на Adrexio.",
      url,
      keywords: "блог, изкуствен интелект, AI, автоматизация, чатботове, уеб разработка, дигитален маркетинг, Adrexio",
      jsonLd: {
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
      },
      inner,
    }),
  );
}

function prerenderContact(template) {
  const title = "Контакти - Adrexio | Свържете се с нас за безплатна консултация";
  const description =
    "Свържете се с Adrexio за безплатна консултация по вашия проект. Телефон: +359 896 173 743, Email: hello@adrexio.com. София, България.";
  const inner = `
    <h1>Да поговорим за проекта</h1>
    <p>Свържете се с нас за безплатна консултация. Ще ви помогнем да превърнете идеите си в реалност.</p>
    <ul>
      <li>Имейл: <a href="mailto:hello@adrexio.com">hello@adrexio.com</a></li>
      <li>Телефон: <a href="tel:+359896173743">+359 896 173 743</a></li>
      <li>Адрес: София, България</li>
    </ul>
    <p>Безплатна първоначална консултация. 50/50: половината при старт, половината след като видите резултата и преди публикуване.</p>
  `;
  writePage(
    "/contact",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/contact`,
      keywords: "контакт Adrexio, уеб студио София, консултация уебсайт, разработка сайт България, свържете се с нас",
      jsonLd: localBusinessSchema(),
      inner,
    }),
  );
}

function prerenderAffiliate(template, { benefits, steps, faqs }) {
  const title = "Affiliate програма - Adrexio | Печелете 20% комисионна за всяка препоръка";
  const description =
    "Affiliate програма с 20% комисионна за всеки успешен проект. Безплатна регистрация и бързо плащане. Партньорство за уеб разработка и дигитални услуги.";
  const inner = `
    <h1>Печелете 20% комисионна за всяка препоръка</h1>
    <p>Препоръчайте нашите услуги и получавайте справедлива комисионна за всеки успешно завършен проект. Плащаме след като клиентът е платил и проектът е завършен.</p>
    <h2>Предимства</h2>
    ${list(benefits.map((b) => `<strong>${escapeHtml(b.title)}</strong> — ${escapeHtml(b.description)}`))}
    <h2>Как работи</h2>
    ${list(steps.map((s) => `<strong>${escapeHtml(s.title)}</strong> — ${escapeHtml(s.description)}`))}
    ${faqs.map((f) => `<h3>${escapeHtml(f.question)}</h3><p>${escapeHtml(f.answer)}</p>`).join("")}
    <p><a href="/contact?affiliate=true">Станете партньор</a></p>
  `;
  writePage(
    "/affiliate",
    assemble(template, {
      title,
      description,
      url: `${BASE_URL}/affiliate`,
      keywords:
        "affiliate програма, партньорска програма, реферална програма, комисионна 20%, партньорство, Adrexio affiliate, печели с препоръки",
      jsonLd: [
        faqSchema(faqs),
        breadcrumbSchema([
          { name: "Начало", url: `${BASE_URL}/` },
          { name: "Партньорска програма", url: `${BASE_URL}/affiliate` },
        ]),
      ],
      inner,
    }),
  );
}

function prerenderLegal(template) {
  writePage(
    "/privacy",
    assemble(template, {
      title: "Политика за поверителност - Adrexio | Политика, съобразена с GDPR",
      description:
        "Политика за поверителност на Adrexio. Научете как събираме, използваме и защитаваме вашите лични данни в съответствие с GDPR и българското законодателство.",
      url: `${BASE_URL}/privacy`,
      keywords: "политика поверителност, GDPR, защита данни, лични данни, поверителност Adrexio",
      inner: `
        <h1>Защита на личните данни</h1>
        <p>Настоящата Политика за поверителност описва как Adrexio събира, използва, съхранява, защитава, споделя и управлява личните данни на потребителите, когато използвате нашия уебсайт и свързаните с него услуги.</p>
        <p>Ние се ангажираме да защитаваме личните ви данни и да спазваме GDPR, Закона за защита на личните данни и съответните подзаконови нормативни актове в България.</p>
        <p>Администратор: Adrexio, София, България. Имейл: <a href="mailto:hello@adrexio.com">hello@adrexio.com</a>. Телефон: <a href="tel:+359896173743">+359 896 173 743</a>.</p>
      `,
    }),
  );
  writePage(
    "/terms",
    assemble(template, {
      title: "Общи условия - Adrexio | Условия за използване",
      description:
        "Общи условия за използване на услугите на Adrexio. Прочетете нашите условия за поръчки, плащания, интелектуална собственост и гаранции.",
      url: `${BASE_URL}/terms`,
      keywords: "общи условия, условия използване, условия Adrexio, договорни условия",
      inner: `
        <h1>Условия за използване</h1>
        <p>Добре дошли в общите условия на Adrexio. Моля, прочетете внимателно тези условия преди да използвате нашия уебсайт и услуги.</p>
        <p>С използването на нашия уебсайт и услуги вие се съгласявате да се придържате към тези общи условия.</p>
        <p>Въпроси: <a href="mailto:hello@adrexio.com">hello@adrexio.com</a> · <a href="tel:+359896173743">+359 896 173 743</a></p>
      `,
    }),
  );
}

// ── Main ────────────────────────────────────────────────────────────────────

export function prerenderAll() {
  if (!existsSync(DIST)) {
    throw new Error("[prerender] dist/ not found — run `vite build` first.");
  }

  const template = readFileSync(join(DIST, "index.html"), "utf8");
  const posts = loadBlogPosts();
  const studies = parseCaseStudies(readFileSync(join(SRC, "data", "caseStudies.ts"), "utf8"));
  const services = parseServicesIndex(readFileSync(join(SRC, "pages", "Services.tsx"), "utf8"));
  const pricingSrc = readFileSync(join(SRC, "data", "pricing.ts"), "utf8");
  const pricingPageSrc = readFileSync(join(SRC, "pages", "Pricing.tsx"), "utf8");
  const paymentCopy =
    unescapeJs(pricingSrc.match(/PAYMENT_COPY\s*=\s*"((?:\\.|[^"\\])*)"/)?.[1] ?? "") ||
    "50/50: половината при старт, половината след като видите резултата и преди публикуване.";
  const pricingServices = parsePricingServices(pricingSrc);
  const amounts = parsePricingAmounts(pricingSrc);
  const pricingFaqs = parsePricingFaqs(pricingPageSrc, paymentCopy);
  const about = parseAboutValues(readFileSync(join(SRC, "pages", "About.tsx"), "utf8"));
  const affiliate = parseAffiliate(readFileSync(join(SRC, "pages", "Affiliate.tsx"), "utf8"));

  if (!services.length) throw new Error("[prerender] failed to parse services list");
  if (!studies.some((s) => s.isPublic)) throw new Error("[prerender] failed to parse case studies");
  if (!pricingServices.length) throw new Error("[prerender] failed to parse pricing services");

  prerenderServicesIndex(template, services);
  prerenderServicePages(template);
  prerenderPricing(template, amounts, pricingServices, pricingFaqs);
  prerenderAbout(template, about);
  prerenderCaseStudiesIndex(template, studies);
  prerenderCaseStudyPages(template, studies);
  prerenderBlog(template, posts);
  prerenderContact(template);
  prerenderAffiliate(template, affiliate);
  prerenderLegal(template);
  prerenderHome(template, services, posts, studies.filter((s) => s.isPublic));

  const publicStudies = studies.filter((s) => s.isPublic).length;
  console.log(
    `[prerender] done — ${posts.length} article(s), ${publicStudies} case study page(s), ${SERVICE_FILES.length} service page(s).`,
  );
}

const isDirectRun = process.argv[1] && resolve(process.argv[1]) === fileURLToPath(import.meta.url);
if (isDirectRun) {
  try {
    prerenderAll();
  } catch (err) {
    console.error(err.message || err);
    process.exit(1);
  }
}
