// One-shot (and repeatable) conversion of screenshot/logo PNGs to WebP.
// Resizes to display-appropriate widths so the homepage does not ship 18MB originals.
import { readdirSync, statSync, unlinkSync } from "node:fs";
import { join, extname, parse } from "node:path";
import { fileURLToPath } from "node:url";
import { dirname } from "node:path";
import sharp from "sharp";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const REPLACE = process.argv.includes("--replace");

async function convertDir(relDir, maxWidth) {
  const dir = join(ROOT, relDir);
  const files = readdirSync(dir).filter((f) => extname(f).toLowerCase() === ".png");
  for (const file of files) {
    const input = join(dir, file);
    const output = join(dir, `${parse(file).name}.webp`);
    const before = statSync(input).size;
    await sharp(input)
      .resize({ width: maxWidth, withoutEnlargement: true })
      .webp({ quality: 82, alphaQuality: 90, effort: 4 })
      .toFile(output);
    const after = statSync(output).size;
    const kb = (n) => `${Math.round(n / 1024)}K`;
    console.log(`${relDir}/${file}: ${kb(before)} → ${kb(after)}`);
    if (REPLACE) unlinkSync(input);
  }
}

await convertDir("src/assets/case-studies", 1600);
await convertDir("src/assets/clients", 400);
console.log(REPLACE ? "PNG sources removed." : "PNG sources kept. Re-run with --replace to delete them.");
