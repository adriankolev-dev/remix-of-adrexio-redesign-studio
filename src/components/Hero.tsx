import type { CSSProperties } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import { motion, useReducedMotion } from "framer-motion";
import { EASE_OUT } from "@/components/editorial/motion";
import { prefetchRoute } from "@/lib/prefetchRoute";
import stone from "@/assets/hero-stone.webp";
import stoneSmall from "@/assets/hero-stone-800.webp";

/**
 * Headline lines with their indent, in em of the headline size. The desktop
 * composition is an 11.2em-wide box, so every offset scales with the type.
 */
const LINES = [
  { text: "Сайтове,", indent: 0.24 },
  { text: "които не", indent: 2.06 },
  { text: "приличат на", indent: 0 },
  { text: "всеки втори.", indent: 1.25 },
] as const;

const MOBILE_INDENTS = [0, 0.9, 0, 0.45] as const;

// 0.9 line height: the stone sits from 3 × 0.9 + 0.42 = 3.12em, so only its peak overlaps the last line; the intro from 4 × 0.9 + 0.15 = 3.75em.
const LINE_HEIGHT = 0.9;

const STONE_ALT =
  "Синя каменна скулптура във формата на буквата А — знакът на Adrexio";

const Tags = ({ className = "" }: { className?: string }) => (
  <p className={`text-[0.62rem] font-medium uppercase tracking-[0.24em] text-muted-foreground lg:text-[0.66rem] ${className}`}>
    Custom design <span className="mx-2 opacity-60 sm:mx-3">/</span> Development{" "}
    <span className="mx-2 opacity-60 sm:mx-3">/</span> SEO <span className="mx-2 opacity-60 sm:mx-3">/</span> AI
  </p>
);

const Hero = () => {
  const reduceMotion = useReducedMotion();

  const rise = (delay: number) =>
    reduceMotion
      ? {}
      : {
          initial: { y: "105%" },
          animate: { y: "0%" },
          transition: { duration: 0.9, delay, ease: EASE_OUT },
        };

  const fade = (delay: number, y = 16) =>
    reduceMotion
      ? {}
      : {
          initial: { opacity: 0, y },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.9, delay, ease: EASE_OUT },
        };

  return (
    <section className="relative overflow-hidden bg-background">
      {/* Faint column rules */}
      <div className="pointer-events-none absolute inset-0 hidden lg:block" aria-hidden>
        {[14, 30, 70, 86].map((x) => (
          <span
            key={x}
            className="absolute inset-y-0 w-px bg-foreground/[0.045]"
            style={{ left: `${x}%` }}
          />
        ))}
      </div>

      <div className="relative flex flex-col px-5 pb-12 pt-28 sm:px-8 lg:h-[100svh] lg:min-h-[640px] lg:px-0 lg:pb-0 lg:pt-[5.5rem]">
        <div className="flex flex-1 items-start justify-center lg:pt-[3.6vh]">
          {/* One composition for every width: below lg it stacks, from lg the
              stone and intro are placed in em of the headline size. */}
          <div className="relative w-full text-[12vw] sm:text-[11vw] lg:h-[5em] lg:w-[11.2em] lg:[font-size:min(8.9vw,15svh)]">
            <h1
              className="relative z-0 font-black uppercase text-foreground lg:pl-[1.29em]"
              style={{ fontFamily: "'Inter Tight', system-ui, sans-serif", lineHeight: LINE_HEIGHT, letterSpacing: "-0.06em" }}
            >
              {LINES.map((line, i) => (
                <span
                  key={line.text}
                  className="-mt-[0.3em] block overflow-hidden pb-[0.04em] pt-[0.3em] pl-[var(--indent-sm)] lg:pl-[var(--indent)]"
                  style={
                    {
                      "--indent": `${line.indent}em`,
                      "--indent-sm": `${MOBILE_INDENTS[i]}em`,
                      marginBottom: "-0.04em",
                    } as CSSProperties
                  }
                >
                  <motion.span className="block whitespace-nowrap" {...rise(0.15 + i * 0.08)}>
                    {line.text}
                  </motion.span>
                </span>
              ))}
            </h1>

            <div className="relative z-10 mx-auto -mt-[0.3em] w-[86%] max-w-[36rem] lg:absolute lg:left-1/2 lg:top-[3.12em] lg:mt-0 lg:w-[3.8em] lg:-translate-x-1/2">
              <motion.img
                src={stone}
                srcSet={`${stoneSmall} 800w, ${stone} 1260w`}
                sizes="(min-width: 1024px) 40vw, 86vw"
                alt={STONE_ALT}
                width={1260}
                height={659}
                // React 18 only passes the lowercase attribute through to the DOM.
                {...{ fetchpriority: "high" }}
                decoding="async"
                className="pointer-events-none block h-auto w-full select-none"
                {...fade(0.45, 28)}
              />
            </div>

            <div className="lg:absolute lg:left-[1.12em] lg:top-[3.75em]">
              <motion.p
                className="mt-6 max-w-[20rem] text-[1rem] leading-[1.6] text-muted-foreground lg:mt-0 lg:text-[1.1rem]"
                {...fade(0.7)}
              >
                Дизайн и разработка от нулата — за бизнеси, които искат да се отличават и да
                получават повече запитвания.
              </motion.p>
            </div>
          </div>
        </div>

        {/* Phone actions */}
        <motion.div className="mt-7 flex flex-col gap-3 sm:max-w-md lg:hidden" {...fade(0.6)}>
          <Link
            to="/contact"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full bg-foreground text-[0.8rem] font-bold uppercase tracking-[0.06em] text-background"
          >
            Обсъди проект
            <ArrowUpRight size={17} strokeWidth={2.2} />
          </Link>
          <Link
            to="/case-studies"
            className="inline-flex h-12 items-center justify-center gap-3 rounded-full border-[1.5px] border-foreground text-[0.8rem] font-bold uppercase tracking-[0.06em] text-foreground"
          >
            Виж проектите
            <ArrowUpRight size={17} strokeWidth={2.2} />
          </Link>
        </motion.div>

        <motion.div
          className="relative z-20 mt-8 flex flex-col gap-2 lg:mt-0 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-12 lg:pb-8"
          {...fade(0.9, 0)}
        >
          <p className="text-[0.62rem] font-medium uppercase tracking-[0.24em] text-muted-foreground lg:text-[0.66rem]">
            Уеб студио · София
          </p>
          <Link
            to="/case-studies"
            onMouseEnter={() => prefetchRoute("/case-studies")}
            onFocus={() => prefetchRoute("/case-studies")}
            className="group hidden items-center gap-3 text-[0.95rem] font-bold uppercase tracking-[0.04em] text-foreground lg:inline-flex"
          >
            Виж проектите
            <ArrowUpRight
              size={19}
              strokeWidth={2.2}
              className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
            />
          </Link>
          <Tags className="lg:justify-self-end lg:text-right" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
