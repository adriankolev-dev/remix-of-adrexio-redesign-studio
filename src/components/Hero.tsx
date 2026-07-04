import { useLayoutEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Lock, Star } from "lucide-react";
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion";
import { Button } from "@/components/ui/button";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { useIsMobile } from "@/hooks/use-mobile";

import athleticiqLogo from "@/assets/clients/athleticiq.png";
import bodyaestheticsLogo from "@/assets/clients/bodyaesthetics.png";
import fmlLogo from "@/assets/clients/fml.png";
import ameliadivaLogo from "@/assets/clients/ameliadiva.png";

const clientLogos = [
  { name: "AthleticIQ", logo: athleticiqLogo },
  { name: "Body Aesthetics", logo: bodyaestheticsLogo },
  { name: "FML-BD", logo: fmlLogo },
  { name: "Amelia Diva", logo: ameliadivaLogo },
];


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
      transition={{ duration: 0.9, ease: [0.16, 1, 0.3, 1], delay: 0.5 }}
    />
  </svg>
);

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
            Започни проект
            <ArrowRight size={18} />
          </Link>
        </Button>
        <Button variant="line" size="xl" asChild>
          <Link to="/case-studies">Виж нашата работа</Link>
        </Button>
      </div>

      <p className="font-mono-meta mt-5 text-[0.7rem] uppercase tracking-[0.14em] text-muted-foreground">
        30+ проекта · среден <span className="text-primary">+150%</span> растеж · отговор до 24ч
      </p>

      <div className="mt-10">
        <div className="mb-4 flex items-center gap-3">
          <div className="flex">
            {[1, 2, 3, 4, 5].map((i) => (
              <Star key={i} size={14} className="fill-primary text-primary" />
            ))}
          </div>
          <span className="text-sm text-muted-foreground">
            <strong className="text-foreground">5/5</strong> от нашите клиенти
          </span>
        </div>
        <div className="flex flex-wrap items-center gap-x-8 gap-y-4">
          {clientLogos.map((client) => (
            <img
              key={client.name}
              src={client.logo}
              alt={client.name}
              className="h-9 w-auto max-w-[116px] object-contain opacity-90 transition-opacity hover:opacity-100"
            />
          ))}
        </div>
      </div>
    </div>

    {/* Layers motif — a stack of pieces the way we compose a build */}
    <div className="relative hidden h-[300px] lg:block">
      {[
        { label: "Хедър", top: 0, tint: "bg-card" },
        { label: "Съдържание", top: 64, tint: "bg-card" },
        { label: "Проекти", top: 128, tint: "layer-dark" },
        { label: "CTA", top: 192, tint: "bg-card" },
      ].map((l, i) => (
        <div
          key={l.label}
          className={`layer-shadow absolute right-0 flex h-[84px] w-[86%] items-center gap-3 rounded-lg border border-border px-4 ${l.tint}`}
          style={{ top: l.top, right: i * 10, zIndex: i }}
        >
          <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-muted-foreground">
            0{i + 1}
          </span>
          <span className="text-sm font-semibold text-foreground">{l.label}</span>
          <span className="ml-auto h-2 w-14 rounded-full bg-primary/70" />
        </div>
      ))}
    </div>
  </div>
);

/** Compact hero message that lives inside the mobile phone canvas. */
const MobileCanvasMessage = () => (
  <div>
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
          Започни проект
          <ArrowRight size={18} />
        </Link>
      </Button>
      <Button variant="line" size="lg" asChild className="w-full">
        <Link to="/case-studies">Виж нашата работа</Link>
      </Button>
    </div>

    <div className="mt-7 flex items-center gap-3">
      <div className="flex">
        {[1, 2, 3, 4, 5].map((i) => (
          <Star key={i} size={13} className="fill-primary text-primary" />
        ))}
      </div>
      <span className="text-xs text-muted-foreground">
        <strong className="text-foreground">5/5</strong> от нашите клиенти
      </span>
    </div>
    <div className="mt-4 flex flex-wrap items-center gap-x-5 gap-y-3">
      {clientLogos.slice(0, 3).map((client) => (
        <img
          key={client.name}
          src={client.logo}
          alt={client.name}
          className="h-6 w-auto max-w-[84px] object-contain opacity-90"
        />
      ))}
    </div>
  </div>
);

/**
 * Mobile hero — the same signature idea as desktop: on scroll the scene zooms
 * out to reveal it was living inside a canvas all along. Here the canvas is a
 * phone mockup (status bar + url + bezel) instead of a browser window.
 */
const MobileCanvasHero = () => {
  const ref = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  const restScaleRef = useRef(1);
  const fitScaleRef = useRef(0.82);

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
      const GAP = 24;
      const chromeGap = 36; // -top-9 between chrome and viewport
      const bottomExtras = 56; // caption below the phone
      const naturalW = mockup.offsetWidth;
      const naturalH = chromeGap + chrome.offsetHeight + viewport.offsetHeight + bottomExtras;
      const availW = window.innerWidth - GAP * 2;
      const availH = window.innerHeight - GAP * 2;

      const scaleToFit = Math.min(availW / naturalW, availH / naturalH);
      restScaleRef.current = Math.min(1, scaleToFit);
      fitScaleRef.current = Math.max(0.5, scaleToFit * 0.9);
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
  const chromeY = useTransform(scrollYProgress, [0.14, 0.5], [-10, 0]);
  const captionOpacity = useTransform(scrollYProgress, [0.4, 0.72], [0, 1]);
  const captionY = useTransform(scrollYProgress, [0.4, 0.72], [12, 0]);
  const cueOpacity = useTransform(scrollYProgress, [0, 0.12], [1, 0]);

  return (
    <section ref={ref} className="relative" style={{ height: "150vh" }}>
      <div className="sticky top-0 flex h-[100svh] items-center justify-center overflow-hidden bg-background">
        <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />

        <motion.div
          style={{ scale: sceneScale, transformOrigin: "center center" }}
          className="relative flex w-full items-center justify-center"
        >
          <div ref={mockupRef} className="relative mx-auto w-[min(400px,90vw)]">
            {/* phone chrome — status + url bar */}
            <motion.div
              ref={chromeRef}
              style={{ opacity: frameOpacity, y: chromeY }}
              className="pointer-events-none absolute -top-9 left-0 right-0 flex items-center rounded-t-[2rem] border border-b-0 border-border bg-card px-5 py-2.5"
            >
              <span className="font-mono-meta absolute left-5 text-[0.6rem] text-muted-foreground">
                9:41
              </span>
              <span className="font-mono-meta mx-auto inline-flex items-center gap-1.5 rounded-md bg-muted px-3 py-1 text-[0.62rem] font-medium text-foreground/75">
                <Lock size={10} className="text-muted-foreground" />
                adrexio.com
              </span>
              <span className="absolute right-5 h-1.5 w-6 rounded-full bg-muted-foreground/30" />
            </motion.div>

            {/* phone viewport — clips content; bezel fades in separately */}
            <div className="relative overflow-hidden rounded-[2rem]">
              <div ref={viewportRef} className="relative px-1 py-2">
                <MobileCanvasMessage />
              </div>
              <motion.div
                style={{ opacity: frameOpacity }}
                className="layer-shadow pointer-events-none absolute inset-0 rounded-[2rem] border-[3px] border-border"
                aria-hidden
              />
            </div>

            {/* caption below the phone — always visible on narrow screens */}
            <motion.div
              style={{ opacity: captionOpacity, y: captionY }}
              className="pointer-events-none absolute inset-x-0 top-full z-10 mx-auto mt-3 max-w-[240px] rotate-[-3deg] text-center"
            >
              <p className="font-hand text-lg leading-tight text-foreground">
                изградено от нулата,
                <br /> слой по слой
              </p>
            </motion.div>
          </div>
        </motion.div>

        {/* scroll cue at rest */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-6 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="eyebrow">Скролни</span>
          <motion.span
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            className="h-7 w-px bg-foreground/25"
          />
        </motion.div>
      </div>
    </section>
  );
};

const Hero = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  const ref = useRef<HTMLElement>(null);
  const mockupRef = useRef<HTMLDivElement>(null);
  const chromeRef = useRef<HTMLDivElement>(null);
  const viewportRef = useRef<HTMLDivElement>(null);
  // Start scale keeps the mockup inside the sticky viewport; end scale zooms out further.
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
      const HEADER = 80; // sticky pt-20 — keeps room for the fixed navbar

      const chromeH = chrome.offsetHeight;
      const chromeGap = 44; // -top-11 between chrome and viewport
      // Side annotations sit outside the mockup only on ultrawide — laptops use a caption below the frame.
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

  // Reduced motion: a completely still hero, no animation at all.
  if (reduceMotion) {
    return (
      <section className="relative overflow-hidden bg-background">
        <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />
        <div className="container relative z-10 mx-auto px-6 pb-20 pt-28 md:pb-24 md:pt-36">
          <HeroMessage />
        </div>
      </section>
    );
  }

  // Mobile: the same zoom-out reveal as desktop, but the canvas is a phone.
  if (isMobile) {
    return <MobileCanvasHero />;
  }

  return (
    <section ref={ref} className="relative" style={{ height: "280vh" }}>
      <div className="sticky top-0 flex h-screen items-center justify-center overflow-hidden bg-background pt-20">
        <div className="canvas-grid canvas-grid-fade absolute inset-0" aria-hidden />

        {/* The scene that zooms out to reveal it was a canvas all along */}
        <motion.div
          style={{ scale: sceneScale, transformOrigin: "center center" }}
          className="relative flex w-full items-center justify-center"
        >
          <div ref={mockupRef} className="relative mx-auto w-[min(1180px,92vw)]">
            {/* browser chrome — fades/slides in as the frame is revealed */}
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

            {/* browser viewport — clips content; border overlay fades in separately */}
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

            {/* laptop caption — below the frame so it never covers the headline */}
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

            {/* side overlays for ultrawide (≥ 1600px) — hug the mockup edges */}
            <motion.div
              style={{ opacity: overlayOpacity, y: overlayY }}
              className="absolute right-full top-[18%] z-10 mr-5 hidden shrink-0 rounded-lg border border-border bg-card/95 p-2 backdrop-blur min-[1600px]:block"
            >
              <p className="eyebrow mb-2 px-1">Слоеве</p>
              <ul className="space-y-1">
                {["Хедър", "Съдържание", "Проекти", "CTA"].map((layer, i) => (
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

        {/* scroll cue at rest */}
        <motion.div
          style={{ opacity: cueOpacity }}
          className="absolute bottom-8 left-1/2 flex -translate-x-1/2 flex-col items-center gap-2"
        >
          <span className="eyebrow">Скролни</span>
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

export default Hero;
