---
name: adrexio-blog
description: Write and publish one blog article for adrexio.com from the content queue. Use when asked to write the next Adrexio blog post, when the scheduled content routine runs, or when writing any article for src/content/blog/. Covers topic selection from queue.md, research with cited sources, the Adrexio writing style, cover generation, internal links, AI-style check, build verification and publishing to main.
---

# Статия за блога на Adrexio

Една статия на изпълнение. Пиши на български. Стилът е в `STYLE.md` — прочети го целия преди да пишеш.

## 1. Избор на тема

1. Отвори `.claude/skills/adrexio-blog/queue.md` и вземи първия ред със статус `чака`.
2. Ако няма такъв ред, спри: не измисляй тема. Изведи „Опашката е празна“ и приключи без commit.
3. Провери, че `src/content/blog/<slug>.md` още не съществува. Ако съществува, маркирай реда `публикувана` с датата от файла и вземи следващия.

## 2. Проучване

- Прочети 2–3 от съществуващите статии в `src/content/blog/`, за да хванеш гласа.
- Прочети страниците, към които ще сочиш (`src/pages/services/*.tsx`, `src/data/pricing.ts`, `src/data/caseStudies.ts` за казусите). Цени, срокове и факти за проекти взимай само оттам.
- За пазарни данни, закони, цени на куриери, платформи и т.н. отвори първичния източник (официалния сайт, помощната страница, закона) и го цитирай с връзка и дата („към ноември 2026 г.“). Ако не можеш да потвърдиш факт, не го пиши.
- Не цитирай конкуренти по име, освен ако е нужно за факт и е неутрално.

## 3. Писане

Файл `src/content/blog/<slug>.md`:

```markdown
---
title: "<заглавието от опашката, може да се прецизира, ≤ 65 знака>"
slug: "<slug>"
date: "<днешна дата YYYY-MM-DD>"
category: "<категорията от опашката>"
author: "Адриан Колев"
cover: "/blog-covers/<slug>.webp"
excerpt: "<1–2 изречения, 140–180 знака: конкретно какво ще научи читателят, с число ако има>"
---

<първо изречение = тезата>
...
```

- 900–1800 думи. H2 за разделите (`##`), H3 за подразделите. Без H1 в тялото (заглавието идва от frontmatter).
- Вътрешни връзки: всички от колоната на опашката, вплетени в текста с естествен анкор, относителни пътища с наклонена черта накрая (`/services/seo/`). Казус = `/case-studies/<id>/`. Поне една връзка към услуга в първата половина на статията.
- Външни връзки само към източници, които си отворил.
- Последният раздел е практическа следваща стъпка с един CTA към услугата.

## 4. Корица

```bash
node scripts/blog-cover.mjs <slug> "<title>" "<category>"
```

Създава `public/blog-covers/<slug>.webp` (1200×675). Ако заглавието е дълго, скриптът сам намалява шрифта.

## 5. Проверки (всички задължителни)

1. Стил: `python3 .claude/skills/adrexio-blog/scripts/check_ai_signs.py src/content/blog/<slug>.md`. Поправи реалната неяснота и пълнеж, не само флагнатите думи. Пусни отново.
2. Прочети статията изцяло като собственик на малък бизнес. Изтрий всяко изречение, без което нищо не се губи.
3. Факти: всяко число е или от файловете на сайта, или има връзка към източник.
4. Build: `npm run build` трябва да мине. След това провери, че `dist/blog/<slug>/index.html` съществува и че `dist/sitemap.xml` съдържа `/blog/<slug>/`.
5. Връзки: всяка вътрешна връзка в статията трябва да има файл в `dist/` (`dist/<път>/index.html`). Скрипт:
   ```bash
   grep -oE '\]\(/[^)#]*\)' src/content/blog/<slug>.md | sed -E 's/\]\(|\)//g' | while read p; do [ -f "dist${p%/}/index.html" ] || echo "СЧУПЕНА: $p"; done
   ```
   Няма право да има „СЧУПЕНА“.
6. `npm test` трябва да мине.

Ако някоя проверка не минава и не можеш да я оправиш, не публикувай: остави статията в отделен клон `blog/<slug>`, push-ни клона и изведи какво не е наред.

## 6. Публикуване

1. В `queue.md` смени статуса на реда на `публикувана <YYYY-MM-DD>`.
2. Commit само на: статията, корицата, `queue.md`. Съобщение: `Blog: <title>`. Без Co-Authored-By и без „Generated with“.
3. `git push origin main`. Netlify публикува автоматично.
4. Изведи: заглавие, URL `https://www.adrexio.com/blog/<slug>/`, брой думи, вътрешни връзки, източници.
