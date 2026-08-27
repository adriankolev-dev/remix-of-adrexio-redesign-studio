import { readFileSync } from "node:fs";
import { join } from "node:path";
import { describe, expect, it } from "vitest";
import {
  parseCaseStudies,
  parseServicePage,
  truncateDescription,
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
    expect(page.seoTitle).toMatch(/Изработка на уебсайтове/);
    expect(page.serviceName).toBe("Изработка на уебсайтове");
    expect(page.heroHighlight).toMatch(/процеса/);
    expect(page.features.length).toBeGreaterThan(3);
    expect(page.faqs.length).toBeGreaterThan(3);
    expect(page.faqs[0].question).toMatch(/уебсайт/);
  });

  it("keeps an empty #root so prerender can inject crawler HTML", () => {
    const html = readFileSync(join(ROOT, "index.html"), "utf8");
    expect(html).toMatch(/<div id="root">\s*<\/div>/);
    expect(html).toContain('id="boot-shell"');
  });

  it("truncates meta descriptions without breaking mid-word", () => {
    const long = "А ".repeat(100);
    const cut = truncateDescription(long, 145);
    expect(cut.endsWith("...")).toBe(true);
    expect(cut.length).toBeLessThanOrEqual(148);
  });
});
