import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { EASE_OUT } from "@/components/editorial/motion";
import { getCaseStudyById, type CaseStudy } from "@/data/caseStudies";

// The hero zooms out to reveal a browser on the canvas. Here that same window
// stays open — and we flip through real projects inside it, like tabs.
const FEATURED_IDS = [
  "koni-jewellery",
  "body-aesthetics",
  "koleff-house",
  "webxotic",
  "inniti",
];

const featured = FEATURED_IDS.map((id) => getCaseStudyById(id)).filter(
  (s): s is CaseStudy => Boolean(s),
);

const studyHref = (study: CaseStudy) =>
  study.isPublic ? `/case-studies/${study.id}` : "/case-studies";

const domainOf = (url: string | null) => {
  if (!url) return "adrexio.com";
  try {
    return new URL(url).hostname.replace(/^www\./, "");
  } catch {
    return "adrexio.com";
  }
};

const WorkSection = () => {
  const reduceMotion = useReducedMotion();
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const study = featured[active];

  // Gentle autoplay so the window feels alive — stops on any interaction.
  useEffect(() => {
    if (reduceMotion || paused) return;
    const id = window.setInterval(
      () => setActive((a) => (a + 1) % featured.length),
      4200,
    );
    return () => window.clearInterval(id);
  }, [reduceMotion, paused]);

  if (!study) return null;

  const metric = study.results[0];

  return (
    <section id="work" className="relative overflow-hidden bg-background pb-24 pt-16 md:py-32">
      <div className="canvas-grid canvas-grid-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        {/* Header */}
        <div className="flex flex-col justify-between gap-8 md:flex-row md:items-end">
          <div className="max-w-xl">
            <Reveal>
              <SectionEyebrow label="Избрана работа" index="02" />
            </Reveal>
            <Reveal delay={0.06}>
              <h2 className="font-display mt-6 text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                Работа, а не шаблони.
              </h2>
            </Reveal>
            <Reveal delay={0.12}>
              <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                Същият прозорец от началото — този път отворен на реални проекти.
                Превключвай табовете.
              </p>
            </Reveal>
          </div>

          <Reveal delay={0.16} className="shrink-0">
            <Link
              to="/case-studies"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-foreground"
            >
              <span className="border-b border-foreground/25 pb-0.5 transition-colors group-hover:border-primary">
                Всички проекти
              </span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </Link>
          </Reveal>
        </div>

        {/* The browser window — same chrome language as the hero */}
        <Reveal delay={0.1}>
          <div
            className="relative mx-auto mt-14 max-w-5xl"
            onMouseEnter={() => setPaused(true)}
            onMouseLeave={() => setPaused(false)}
            onFocusCapture={() => setPaused(true)}
          >
            <p className="font-hand pointer-events-none absolute -top-9 right-6 hidden rotate-[-5deg] text-2xl text-foreground lg:block">
              избери проект
              <svg
                className="ml-auto mt-1 h-6 w-16 overflow-visible"
                viewBox="0 0 90 30"
                fill="none"
                aria-hidden
              >
                <path
                  d="M4 6 C 30 10, 55 12, 82 24 M82 24 L 70 20 M82 24 L 74 12"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </p>

            <div className="layer-shadow overflow-hidden rounded-2xl border border-border bg-card">
              {/* Chrome bar */}
              <div className="flex items-center gap-2 border-b border-border px-4 py-3">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />

                <div className="ml-3 flex min-w-0 flex-1 justify-center">
                  <AnimatePresence mode="wait">
                    <motion.span
                      key={study.id}
                      initial={reduceMotion ? false : { opacity: 0, y: -4 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={reduceMotion ? undefined : { opacity: 0, y: 4 }}
                      transition={{ duration: 0.25 }}
                      className="font-mono-meta inline-flex max-w-full items-center gap-2 truncate rounded-full bg-muted px-3 py-1 text-[0.68rem] text-muted-foreground"
                    >
                      <Lock size={11} className="shrink-0 text-primary" />
                      <span className="truncate">{domainOf(study.url)}</span>
                    </motion.span>
                  </AnimatePresence>
                </div>

                {study.url && (
                  <a
                    href={study.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hidden shrink-0 items-center gap-1 text-xs font-medium text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
                  >
                    Отвори
                    <ArrowUpRight size={14} />
                  </a>
                )}
              </div>

              {/* Tab strip — the interactive selector */}
              <div
                className="flex gap-1 overflow-x-auto border-b border-border bg-muted/30 px-2 py-1.5"
                role="tablist"
                aria-label="Проекти"
              >
                {featured.map((s, i) => {
                  const isActive = i === active;
                  return (
                    <button
                      key={s.id}
                      role="tab"
                      aria-selected={isActive}
                      onClick={() => setActive(i)}
                      onMouseEnter={() => setActive(i)}
                      onFocus={() => setActive(i)}
                      className={`font-mono-meta relative whitespace-nowrap rounded-md px-3 py-1.5 text-[0.64rem] uppercase tracking-[0.08em] transition-colors ${
                        isActive
                          ? "bg-background text-foreground"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {s.title}
                      {isActive && (
                        <motion.span
                          layoutId="work-tab-underline"
                          className="absolute inset-x-2 -bottom-[7px] h-0.5 bg-primary"
                        />
                      )}
                    </button>
                  );
                })}
              </div>

              {/* Window body — the live screenshot */}
              <Link
                to={studyHref(study)}
                className="group relative block aspect-[16/10] overflow-hidden bg-muted"
              >
                <AnimatePresence mode="wait">
                  <motion.img
                    key={study.id}
                    src={study.image}
                    alt={study.title}
                    initial={reduceMotion ? false : { opacity: 0, scale: 1.015 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={reduceMotion ? undefined : { opacity: 0 }}
                    transition={{ duration: reduceMotion ? 0 : 0.45, ease: EASE_OUT }}
                    className="absolute inset-0 h-full w-full object-cover object-top"
                  />
                </AnimatePresence>

                <span className="absolute right-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-semibold text-foreground opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
                  Виж case study
                  <ArrowUpRight size={14} />
                </span>
              </Link>
            </div>

            {/* Caption below the window */}
            <div className="mt-6 flex min-h-[64px] flex-col justify-between gap-4 sm:flex-row sm:items-end">
              <AnimatePresence mode="wait">
                <motion.div
                  key={study.id}
                  initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                  transition={{ duration: 0.3, ease: EASE_OUT }}
                >
                  <p className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
                    {study.category}
                  </p>
                  <h3 className="font-display mt-1.5 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                    {study.title}
                  </h3>
                  <p className="mt-1 max-w-md text-sm text-muted-foreground">
                    {study.subtitle}
                  </p>
                </motion.div>
              </AnimatePresence>

              {metric && (
                <AnimatePresence mode="wait">
                  <motion.p
                    key={study.id}
                    initial={reduceMotion ? false : { opacity: 0, y: 8 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={reduceMotion ? undefined : { opacity: 0, y: -8 }}
                    transition={{ duration: 0.3, ease: EASE_OUT }}
                    className="font-display shrink-0 text-3xl font-bold tracking-tight text-primary md:text-4xl"
                  >
                    {metric.metric}
                    <span className="ml-2 text-sm font-normal text-muted-foreground">
                      {metric.label}
                    </span>
                  </motion.p>
                </AnimatePresence>
              )}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default WorkSection;
