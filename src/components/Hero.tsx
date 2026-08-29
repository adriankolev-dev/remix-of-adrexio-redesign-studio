import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock } from "lucide-react";
import { PORTFOLIO_PROJECT_COUNT } from "@/data/caseStudies";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { EASE_OUT } from "@/components/editorial/motion";
import { useIsMobile } from "@/hooks/use-mobile";

import athleticiqLogo from "@/assets/clients/athleticiq.webp";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.webp";
import fmlLogo from "@/assets/clients/fml.webp";
import ameliadivaLogo from "@/assets/clients/ameliadiva.webp";

const clientLogos = [
  { name: "Body Aesthetics", logo: bodyaestheticsLogo },
  { name: "FML-BD", logo: fmlLogo },
  { name: "Amelia Diva", logo: ameliadivaLogo },
  { name: "AthleticIQ", logo: athleticiqLogo },
];

const BUILD_LAYERS = [
  { label: "Заглавка", tint: "bg-card" },
  { label: "Съдържание", tint: "bg-card" },
  { label: "Проекти", tint: "layer-dark" },
  { label: "CTA", tint: "bg-card" },
] as const;

/** Hand-drawn cyan underline — one of the two playful accents. */
const DoodleUnderline = () => (
  <svg
    className="pointer-events-none absolute -bottom-2 left-0 h-[0.5em] w-full overflow-visible"
    viewBox="0 0 300 24"
    fill="none"
    preserveAspectRatio="none"
    aria-hidden
  >
    <motion.path
      d="M4 16 C 60 6, 120 22, 180 12 S 280 6, 296 14"
      stroke="hsl(var(--primary))"
      strokeWidth="7"
      strokeLinecap="round"
      initial={{ pathLength: 0 }}
      whileInView={{ pathLength: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.9, ease: EASE_OUT, delay: 0.5 }}
    />
  </svg>
);

const LayerStack = ({
  compact = false,
  animate = false,
}: {
  compact?: boolean;
  animate?: boolean;
}) => {
  const reduceMotion = useReducedMotion();
  const step = compact ? 48 : 64;
  const cardH = compact ? "h-[68px]" : "h-[84px]";

  return (
    <div
      className={
        compact
          ? "relative mx-auto h-[220px] w-full max-w-[22rem]"
          : "relative h-[300px]"
      }
    >
      {BUILD_LAYERS.map((layer, i) => {
        const placement = compact
          ? { top: i * step, left: 0, right: 0 }
          : { top: i * step, right: i * 10 };

        const card = (
          <div
            className={`layer-shadow flex items-center gap-3 rounded-lg border border-border px-4 ${cardH} ${
              compact ? "w-full" : "w-[86%]"
            } ${layer.tint}`}
          >
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
              0{i + 1}
            </span>
            <span className="text-sm font-semibold text-foreground">{layer.label}</span>
            <span className="ml-auto h-2 w-14 rounded-full bg-primary/70" />
          </div>
        );

        if (!animate || reduceMotion) {
          return (
            <div
              key={layer.label}
              className={compact ? "absolute" : "absolute right-0"}
              style={{ ...placement, zIndex: i }}
            >
              {card}
            </div>
          );
        }

        return (
          <motion.div
            key={layer.label}
            className={compact ? "absolute" : "absolute right-0"}
            style={{ ...placement, zIndex: i }}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.12 + i * 0.07, ease: EASE_OUT }}
          >
            {card}
          </motion.div>
        );
      })}
    </div>
  );
};

/** The message that lives on the canvas. Shared between the animated and reduced-motion paths. */
const HeroMessage = () => (
  <div className="grid items-center gap-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
    <div>
      <SectionEyebrow label="Уеб студио · София" index="01" />

      <h1 className="font-display text-display mt-6 font-bold text-foreground">
        Край на сайтовете, които приличат на{" "}
        <span className="relative inline-block whitespace-nowrap">
          всеки втори
          <DoodleUnderline />
        </span>
        .
      </h1>

      <p className="mt-7 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
        Повечето агенции продават един и същ шаблон с ново лого. Ние проектираме
        и изграждаме от нулата — дизайн, който клиентите ви помнят, и структура,
        която носи запитвания.
      </p>

      <div className="mt-8 flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        <Button variant="ink" size="xl" asChild>
          <Link to="/contact">
            Свържи се с нас
            <ArrowRight size={18} />
          </Link>
        </Button>
        <Button variant="line" size="xl" asChild>
          <Link to="/case-studies">Виж проектите</Link>
        </Button>
      </div>

      <p className="font-mono-meta mt-5 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        {PORTFOLIO_PROJECT_COUNT} проекта · отговор до 24ч
      </p>

      <div className="mt-10">
        <p className="mb-4 text-sm text-muted-foreground">
          Отзиви от{" "}
          <strong className="text-foreground">Борислав Гоцев, SuperCredit</strong>
          {", "}
          <strong className="text-foreground">Камелия Петрова, Body Aesthetics</strong>
          {" и "}
          <strong className="text-foreground">Николай Кирилов, FML-BD</strong>
        </p>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {clientLogos.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={116}
              height={36}
              decoding="async"
              className="h-9 w-auto max-w-[116px] object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>

    <div className="relative hidden lg:block">
      <LayerStack />
    </div>
  </div>
);

/**
 * Phone hero: same thesis as desktop, without the sticky zoom-out.
 * Scroll starts immediately; the layer stack is the signature, played once.
 */
const MobileHero = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section className="relative overflow-hidden bg-background">
      <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />
      <div className="container relative z-10 mx-auto px-6 pb-16 pt-28">
        <SectionEyebrow label="Уеб студио · София" index="01" />

        <h1 className="font-display mt-5 text-[2rem] font-bold leading-[1.08] text-foreground">
          Край на сайтовете, които приличат на{" "}
          <span className="relative inline-block whitespace-nowrap">
            всеки втори
            <DoodleUnderline />
          </span>
          .
        </h1>

        <p className="mt-5 text-[0.95rem] leading-relaxed text-muted-foreground">
          Проектираме и изграждаме от нулата — дизайн, който клиентите ви помнят, и структура,
          която носи запитвания.
        </p>

        <div className="mt-6 flex flex-col gap-3">
          <Button variant="ink" size="lg" asChild className="w-full">
            <Link to="/contact">
              Свържи се с нас
              <ArrowRight size={18} />
            </Link>
          </Button>
          <Button variant="line" size="lg" asChild className="w-full">
            <Link to="/case-studies">Виж проектите</Link>
          </Button>
        </div>

        <p className="font-mono-meta mt-5 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
          {PORTFOLIO_PROJECT_COUNT} проекта · отговор до 24ч
        </p>

        <div className="mt-8">
          <LayerStack compact animate={!reduceMotion} />
          <p className="font-hand mt-5 text-center text-lg leading-tight text-foreground">
            изградено от нулата,
            <br /> слой по слой
          </p>
        </div>

        <p className="mt-8 text-xs leading-relaxed text-muted-foreground">
          Отзиви от{" "}
          <strong className="text-foreground">Борислав Гоцев, SuperCredit</strong>
          {" и "}
          <strong className="text-foreground">Камелия Петрова, Body Aesthetics</strong>
        </p>
        <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
          {clientLogos.slice(0, 3).map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              width={84}
              height={24}
              decoding="async"
              className="h-6 w-auto max-w-[84px] object-contain opacity-90"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

const StaticDesktopHero = () => (
  <section className="relative overflow-hidden bg-background">
    <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />
    <div className="container relative z-10 mx-auto px-6 pb-20 pt-28 md:pb-24 md:pt-36">
      <HeroMessage />
    </div>
  </section>
);

const DesktopCanvasHero = () => {
  const ref = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const restScaleRef = useRef(1);
  const fitScaleRef = useRef(0.78);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const scaleFor = (v: number) => {
    const p = Math.min(v / 0.6, 1);
    const start = restScaleRef.current;
    const end = fitScaleRef.current;
    return start - p * (start - end);
  };
  const sceneScale = useTransform(scrollYProgress, scaleFor);

  useLayoutEffect(() => {
    const mockup = mockupRef.current;
    const chrome = chromeRef.current;
    const viewport = viewportRef.current;
    if (!mockup || !chrome || !viewport) return;

    const measure = () => {
      const GAP = 32;
      const HEADER = 80;

      const chromeH = chrome.offsetHeight;
      const chromeGap = 44;
      const sideExtras = window.innerWidth >= 1600 ? 300 : 0;
      const bottomExtras =
        window.innerWidth >= 1024 && window.innerWidth < 1600 ? 80 : 0;
      const naturalW = mockup.offsetWidth + sideExtras;
      const naturalH = chromeGap + chromeH + viewport.offsetHeight + bottomExtras;
      const availW = window.innerWidth - GAP * 2;
      const availH = window.innerHeight - HEADER - GAP * 2;

      const scaleToFit = Math.min(availW / naturalW, availH / naturalH);
      restScaleRef.current = Math.min(1, scaleToFit);
      fitScaleRef.current = Math.max(0.45, scaleToFit * 0.88);
      sceneScale.set(scaleFor(scrollYProgress.get()));
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(mockup);
    ro.observe(viewport);
    window.addEventListener("resize", measure);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", measure);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const frameOpacity = useTransform(scrollYProgress, [0.14, 0.5], [0, 1]);
  const chromeY = useTransform(scrollYProgress, [0.14, 0.5], [-14, 0]);
  const overlayOpacity = useTransform(scrollYProgress, [0.4, 0.72], [0, 1]);
  const overlayY = useTransform(scrollYProgress, [0.4, 0.72], [18, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={ref} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-background pt-20">
        <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />

        <motion.div
          style={{
            scale: sceneScale,
            transformOrigin: "center center",
            willChange: "transform",
          }}
          className="relative flex w-full items-center justify-center"
        >
          <div ref={mockupRef} className="relative mx-auto w-[min(1180px,92vw)]">
            <motion.div
              ref={chromeRef}
              style={{ opacity: frameOpacity, y: chromeY }}
              className="pointer-events-none absolute -top-11 left-0 right-0 flex items-center rounded-t-2xl border border-b-0 border-border bg-card px-4 py-3"
            >
              <div className="absolute left-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
                <span className="h-2.5 w-2.5 rounded-full bg-muted-foreground/30" />
              </div>
              <span className="font-mono-meta mx-auto inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1 text-[0.7rem] font-medium text-foreground/75">
                <Lock size={11} className="text-muted-foreground" />
                adrexio.com
              </span>
            </motion.div>

            <div className="relative overflow-hidden rounded-2xl">
              <div ref={viewportRef} className="relative px-2 py-6 md:px-8">
                <HeroMessage />
              </div>

              <motion.div
                style={{ opacity: frameOpacity }}
                className="layer-shadow pointer-events-none absolute inset-0 rounded-2xl border border-border"
                aria-hidden
              />
            </div>

            <motion.div
              style={{ opacity: overlayOpacity, y: overlayY }}
              className="pointer-events-none absolute right-4 top-full z-10 mt-3 hidden max-w-[210px] rotate-[-4deg] text-right lg:block min-[1600px]:hidden"
            >
              <p className="font-hand text-xl leading-tight text-foreground">
                изградено от нулата,
                <br /> слой по слой — не от шаблон
              </p>
              <svg
                className="mr-auto mt-1 h-6 w-20 rotate-180 overflow-visible"
                viewBox="0 0 120 40"
                fill="none"
                aria-hidden
              >
                <path
                  d="M110 4 C 80 10, 40 12, 12 30 M12 30 L 26 22 M12 30 L 22 36"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>

            <motion.div
              style={{ opacity: overlayOpacity, y: overlayY }}
              className="absolute right-full top-[18%] z-10 mr-5 hidden shrink-0 rounded-lg border border-border bg-card/95 p-2 backdrop-blur min-[1600px]:block"
            >
              <p className="eyebrow mb-2 px-1">Слоеве</p>
              <ul className="space-y-1">
                {["Заглавка", "Съдържание", "Проекти", "CTA"].map((layer, i) => (
                  <li
                    key={layer}
                    className={`font-mono-meta flex items-center gap-2 rounded px-2 py-1 text-[0.7rem] ${
                      i === 2 ? "bg-primary/15 text-foreground" : "text-muted-foreground"
                    }`}
                  >
                    <span className="h-2 w-2 rounded-[3px] border border-current opacity-60" />
                    {layer}
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              style={{ opacity: overlayOpacity, y: overlayY }}
              className="absolute left-full bottom-[18%] z-10 ml-5 hidden max-w-[220px] shrink-0 rotate-[-4deg] text-right min-[1600px]:block"
            >
              <p className="font-hand text-2xl leading-tight text-foreground">
                изградено от нулата,
                <br /> слой по слой — не от шаблон
              </p>
              <svg
                className="ml-auto mt-1 h-8 w-24 overflow-visible"
                viewBox="0 0 120 40"
                fill="none"
                aria-hidden
              >
                <path
                  d="M110 4 C 80 10, 40 12, 12 30 M12 30 L 26 22 M12 30 L 22 36"
                  stroke="hsl(var(--primary))"
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </motion.div>
          </div>
        </motion.div>

        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="eyebrow">Надолу</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-8 w-px bg-foreground/25"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();

  if (isMobile) return <MobileHero />;
  if (reduceMotion) return <StaticDesktopHero />;
  return <DesktopCanvasHero />;
};

export default Hero;
