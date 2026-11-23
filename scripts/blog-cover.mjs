#!/usr/bin/env node
// Generates a branded 1200×675 WebP cover for a blog post from its title.
//
//   node scripts/blog-cover.mjs <slug> "<title>" ["<category>"]
//   → public/blog-covers/<slug>.webp
//
// Text is drawn as SVG paths with opentype.js, so the result does not depend on
// the fonts installed on the machine (the scheduled content agent runs on Linux
// without Tektur). Fonts are the site's own: Tektur for the title, Inter Tight
// for the small labels. Both are OFL, licences next to the files.
import { readFileSync, mkdirSync } from "node:fs";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import opentype from "opentype.js";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const ASSETS = join(ROOT, "scripts", "assets");
const W = 1200;
const H = 675;
const INK = "#0a0a0a";
const MUTED = "#5b5b5b";
const ACCENT = "#44D0F3";
const PAPER = "#fcfcfc";

const load = (file) => {
  const buf = readFileSync(join(ASSETS, file));
  return opentype.parse(buf.buffer.slice(buf.byteOffset, buf.byteOffset + buf.byteLength));
};

// Each family ships as a Cyrillic and a Latin subset; pick per character.
const families = {
  display: [load("tektur-cyrillic-700-normal.woff"), load("tektur-latin-700-normal.woff")],
  text: [load("inter-tight-cyrillic-500-normal.woff"), load("inter-tight-latin-500-normal.woff")],
};

function fontFor(family, ch) {
  for (const f of families[family]) {
    if (f.charToGlyphIndex(ch) > 0) return f;
  }
  return families[family][families[family].length - 1];
}

function advance(family, text, size) {
  let w = 0;
  for (const ch of text) {
    const f = fontFor(family, ch);
    w += (f.charToGlyph(ch).advanceWidth / f.unitsPerEm) * size;
  }
  return w;
}

function pathFor(family, text, x, y, size, fill) {
  let cx = x;
  let d = "";
  for (const ch of text) {
    const f = fontFor(family, ch);
    const g = f.charToGlyph(ch);
    d += g.getPath(cx, y, size).toPathData(2);
    cx += (g.advanceWidth / f.unitsPerEm) * size;
  }
  return `<path d="${d}" fill="${fill}"/>`;
}

function wrap(family, text, size, maxWidth) {
  // One-letter words (в, с, и, а…) stay with the word after them, as in print.
  const words = [];
  for (const w of text.split(/\s+/)) {
    const prev = words[words.length - 1];
    if (prev !== undefined && prev.length === 1 && /\p{L}/u.test(prev)) words[words.length - 1] = `${prev} ${w}`;
    else words.push(w);
  }
  const lines = greedy(family, words, size, maxWidth);
  // No lone word on the last line: pull one down from the line above if it fits.
  if (lines.length > 1 && !lines[lines.length - 1].includes(" ")) {
    const above = lines[lines.length - 2].split(" ");
    if (above.length > 2) {
      const moved = above.pop();
      const candidate = `${moved} ${lines[lines.length - 1]}`;
      if (advance(family, candidate, size) <= maxWidth) {
        lines[lines.length - 2] = above.join(" ");
        lines[lines.length - 1] = candidate;
      }
    }
  }
  return lines;
}

function greedy(family, words, size, maxWidth) {
  const lines = [];
  let line = "";
  for (const word of words) {
    const next = line ? `${line} ${word}` : word;
    if (line && advance(family, next, size) > maxWidth) {
      lines.push(line);
      line = word;
    } else {
      line = next;
    }
  }
  if (line) lines.push(line);
  return lines;
}

export function coverSvg(title, category = "Блог") {
  const left = 80;
  const maxWidth = 860;
  // Shrink the title until it fits in four lines.
  let size = 84;
  let lines = wrap("display", title, size, maxWidth);
  while ((lines.length > 4 || lines.some((l) => advance("display", l, size) > maxWidth)) && size > 44) {
    size -= 4;
    lines = wrap("display", title, size, maxWidth);
  }
  const lineHeight = size * 1.08;
  const blockHeight = lines.length * lineHeight;
  const top = Math.max(200, (H - blockHeight) / 2 + size * 0.6);

  const eyebrow = category.toLocaleUpperCase("bg-BG");
  const parts = [
    `<rect width="${W}" height="${H}" fill="${PAPER}"/>`,
    // Brand mark: a quarter disc in the corner, echoing the site's stone motif.
    `<circle cx="${W}" cy="${H}" r="300" fill="${ACCENT}"/>`,
    `<circle cx="${W}" cy="${H}" r="180" fill="${PAPER}" fill-opacity="0.35"/>`,
    `<rect x="${left}" y="96" width="44" height="6" fill="${ACCENT}"/>`,
    pathFor("text", eyebrow, left + 60, 105, 22, MUTED),
    ...lines.map((l, i) => pathFor("display", l, left, top + i * lineHeight, size, INK)),
    pathFor("display", "Adrexio", left, H - 72, 30, INK),
    pathFor("text", "adrexio.com · уеб студио в София", left + 150, H - 74, 20, MUTED),
  ];
  return `<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">${parts.join("")}</svg>`;
}

const isCli = process.argv[1] && fileURLToPath(import.meta.url) === process.argv[1];
if (isCli) {
  const [slug, title, category] = process.argv.slice(2);
  if (!slug || !title) {
    console.error('Usage: node scripts/blog-cover.mjs <slug> "<title>" ["<category>"]');
    process.exit(1);
  }
  const outDir = join(ROOT, "public", "blog-covers");
  mkdirSync(outDir, { recursive: true });
  const out = join(outDir, `${slug}.webp`);
  await sharp(Buffer.from(coverSvg(title, category))).webp({ quality: 82 }).toFile(out);
  console.log(out);
}
