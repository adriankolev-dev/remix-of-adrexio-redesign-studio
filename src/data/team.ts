/**
 * The people behind Adrexio. MeetTheTeam renders them on /about, and
 * scripts/prerender.mjs parses this file for the static HTML and the
 * Organization/Person schema, so keep each entry a flat object literal with
 * `name` and `role` on one line.
 */

export const FOUNDING_YEAR = 2019;

export const FOUNDER = { name: "Адриан Колев", role: "Основател & CEO" };

export const TEAM = [
  { name: "Николай Ненов", role: "Head of Marketing" },
  { name: "Пламен Петков", role: "CTO" },
  { name: "Стефан Колев", role: "Lead Developer" },
];

/** Byline data for blog authors, keyed by the `author` frontmatter value. */
export const AUTHORS: Record<string, { role: string; bio: string }> = {
  "Адриан Колев": {
    role: "Основател на Adrexio",
    bio: "Адриан Колев е основател и CEO на Adrexio, уеб студио в София, което води от 2019 г.",
  },
};
