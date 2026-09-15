import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  normalizeUrls,
  parseCaseStudies,
  parseCaseStudyServiceLabels,
  parseServicePage,
  truncateDescription,
  withTrailingSlash,
} from "../../scripts/prerender.mjs";

const ROOT = process.cwd();

describe("prerender parsers", () => {
  it("parses public and private case studies from source", () => {
    const raw = readFileSync(join(ROOT, "src/data/caseStudies.ts"), "utf8");
    const studies = parseCaseStudies(raw);
    expect(studies.length).toBeGreaterThan(10);

    const koleff = studies.find((s) => s.id === "koleff-house");
    expect(koleff?.title).toBe("Koleff House");
    expect(koleff?.isPublic).toBe(true);
    expect(koleff?.overview).toMatch(/Твърдица/);
    expect(koleff?.solution.length).toBeGreaterThan(2);

    const internal = studies.find((s) => s.id === "super-credit");
    expect(internal?.isPublic).toBe(false);
  });

  it("parses a service landing page SEO and FAQs", () => {
    const src = readFileSync(join(ROOT, "src/pages/services/WebDevelopment.tsx"), "utf8");
    const page = parseServicePage(src);
    expect(page.seoTitle).toMatch(/Изработка на сайт в София/);
    expect(page.serviceName).toBe("Изработка на сайт");
    expect(page.heroHighlight).toMatch(/шаблонът не стига/);
    expect(page.features.length).toBeGreaterThan(3);
    expect(page.faqs.length).toBeGreaterThan(3);
    expect(page.faqs[0].question).toMatch(/уебсайт/);
  });

  it("extracts the service blocks that used to be dropped from crawler HTML", () => {
    // ServiceLandingTemplate renders process, use cases, benefits, reasons and
    // technologies to users, but the prerender once emitted only hero, intro,
    // features and FAQs — roughly 40% of each page was invisible to crawlers.
    const src = readFileSync(join(ROOT, "src/pages/services/MobileApps.tsx"), "utf8");
    const page = parseServicePage(src);
    expect(page.benefits.length).toBeGreaterThan(2);
    expect(page.steps.length).toBeGreaterThan(2);
    expect(page.useCases.length).toBeGreaterThan(2);
    expect(page.whyChooseUs.length).toBeGreaterThan(2);
    expect(page.technologies).toContain("Flutter");
    expect(page.processTitle).toBeTruthy();
  });

  it("parses the GEO landing page the SEO page was split into", () => {
    const src = readFileSync(join(ROOT, "src/pages/services/GEOOptimization.tsx"), "utf8");
    const page = parseServicePage(src);
    expect(page.seoTitle).toMatch(/GEO оптимизация/);
    expect(page.faqs.length).toBeGreaterThan(3);
    // The page must keep saying llms.txt is an unadopted convention rather than
    // selling it as a ranking factor.
    expect(page.faqs.some((f) => /llms\.txt/.test(f.question))).toBe(true);
  });

  it("titles case studies by service and niche, not by the client's brand", () => {
    const raw = readFileSync(join(ROOT, "src/data/caseStudies.ts"), "utf8");
    const { labels, fallback } = parseCaseStudyServiceLabels(raw);
    // The prerender parses the same map React uses, so a missing parse would
    // silently retitle all 24 pages with the fallback.
    expect(Object.keys(labels).length).toBeGreaterThan(10);
    expect(labels["Електронна търговия"]).toMatch(/онлайн магазин/);
    expect(fallback).toBe("Изработка на сайт");

    const studies = parseCaseStudies(raw);
    const koni = studies.find((s) => s.id === "koni-jewellery");
    expect(labels[koni!.category]).toBe("Изработка на онлайн магазин");

    // Every public case study must resolve to a real service phrase.
    for (const study of studies.filter((s) => s.isPublic)) {
      expect(labels[study.category] ?? fallback).toMatch(/^Изработка|^Уеб/);
    }
  });

  it("keeps an empty #root so prerender can inject crawler HTML", () => {
    const html = readFileSync(join(ROOT, "index.html"), "utf8");
    expect(html).toMatch(/<div id="root">\s*<\/div>/);
    expect(html).toContain('id="boot-shell"');
  });

  it("points paths at the trailing-slash URL Netlify actually serves", () => {
    expect(withTrailingSlash("/services")).toBe("/services/");
    expect(withTrailingSlash("/case-studies/koni-jewellery")).toBe("/case-studies/koni-jewellery/");
    // Root, already-slashed paths and files must stay untouched.
    expect(withTrailingSlash("/")).toBe("/");
    expect(withTrailingSlash("/services/")).toBe("/services/");
    expect(withTrailingSlash("/og-image.png")).toBe("/og-image.png");
    expect(withTrailingSlash("/site.webmanifest")).toBe("/site.webmanifest");
    // Query and fragment survive, and a bare "#id" is not a page path.
    expect(withTrailingSlash("/contact?affiliate=true")).toBe("/contact/?affiliate=true");
    expect(withTrailingSlash("/#organization")).toBe("/#organization");
  });

  it("normalizes canonicals, schema ids and links in one pass", () => {
    const html = normalizeUrls(
      '<link rel="canonical" href="https://www.adrexio.com/services" />' +
        '<a href="/case-studies/koni-jewellery">x</a>' +
        '<script type="application/ld+json">{"@id":"https://www.adrexio.com/#organization",' +
        '"image":"https://www.adrexio.com/og-image.png"}</script>',
    );
    expect(html).toContain('href="https://www.adrexio.com/services/"');
    expect(html).toContain('href="/case-studies/koni-jewellery/"');
    expect(html).toContain('"@id":"https://www.adrexio.com/#organization"');
    expect(html).toContain('"image":"https://www.adrexio.com/og-image.png"');
  });

  it("truncates meta descriptions without breaking mid-word", () => {
    const long = "А ".repeat(100);
    const cut = truncateDescription(long, 145);
    expect(cut.endsWith("...")).toBe(true);
    expect(cut.length).toBeLessThanOrEqual(148);
  });
});
