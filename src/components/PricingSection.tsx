import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import {
  animate,
  motion,
  useAnimationControls,
  useInView,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import HandNote from "@/components/editorial/HandNote";
import { EASE_OUT } from "@/components/editorial/motion";
import { useIsMobile } from "@/hooks/use-mobile";

type Plan = {
  name: string;
  amount: number | null;
  priceLabel: string;
  period: string;
  description: string;
  highlight: string;
  features: string[];
  popular: boolean;
};

const plans: Plan[] = [
  {
    name: "ESSENTIAL",
    amount: 690,
    priceLabel: "690",
    period: "еднократно",
    description: "За компании, които искат силно първо впечатление онлайн.",
    highlight: "Готов за 2–3 седмици · 30 дни поддръжка включени",
    features: [
      "До 6 страници, изградени от нулата",
      "Индивидуален дизайн — без шаблон",
      "Перфектен на мобилни устройства",
      "Базово SEO + GEO",
      "Google Analytics 4 + Search Console",
      "SSL, скорост и сигурност",
    ],
    popular: false,
  },
  {
    name: "BUSINESS",
    amount: 1900,
    priceLabel: "1.900",
    period: "еднократно",
    description: "За бизнеси, които искат сайтът да носи запитвания и продажби.",
    highlight: "Готов за 4–6 седмици · 2 месеца поддръжка включени",
    features: [
      "До 12 страници или онлайн магазин",
      "Всичко от ESSENTIAL",
      "E-commerce с онлайн плащания",
      "CMS — управлявате съдържанието сами",
      "Разширено SEO + копирайтинг",
      "Трекинг: GA4, Meta Pixel, Google Ads",
      "Интеграции по избор (CRM, имейл)",
    ],
    popular: true,
  },
  {
    name: "ENTERPRISE",
    amount: null,
    priceLabel: "∞",
    period: "по запитване",
    description: "Персонално решение без ограничения.",
    highlight: "Индивидуален обхват, срок и цена",
    features: [
      "100% custom функционалност",
      "Уникален дизайн от нулата",
      "ERP / CRM интеграции",
      "Мултиезичност и мултивалута",
      "Висока производителност и мащаб",
      "Приоритетна поддръжка",
    ],
    popular: false,
  },
];

// Recurring care plan — the ongoing-revenue product, presented separately from
// the one-time build tiers.
const carePlan = {
  name: "ПОДДРЪЖКА",
  amount: 99,
  features: [
    "Хостинг + управление на домейн",
    "Ъпдейти и сигурност",
    "До 1 ч. дребни промени / месец",
    "Мониторинг и седмични бекъпи",
    "Приоритетна реакция при проблем",
  ],
};

// Optional á la carte add-ons — easy upsells on top of any plan.
const addOns: { label: string; price: string }[] = [
  { label: "Копирайтинг (до 6 стр.)", price: "от €150" },
  { label: "Лого + бранд насоки", price: "от €250" },
  { label: "Допълнителен език", price: "от €200" },
  { label: "Блог / новини модул", price: "от €180" },
  { label: "Всяка допълнителна страница", price: "€60" },
];

// Prices that spin up to their value when they scroll into view.
const CountUp = ({ to }: { to: number }) => {
  const reduce = useReducedMotion();
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-15%" });
  const [val, setVal] = useState(reduce ? to : 0);

  useEffect(() => {
    if (reduce || !inView) return;
    const controls = animate(0, to, {
      duration: 1.2,
      ease: EASE_OUT,
      onUpdate: (v) => setVal(v),
    });
    return () => controls.stop();
  }, [inView, to, reduce]);

  return <span ref={ref}>{Math.round(val).toLocaleString("de-DE")}</span>;
};

const PriceValue = ({ plan }: { plan: Plan }) => (
  <div className="flex items-baseline gap-1 md:justify-end">
    {plan.amount !== null && <span className="text-lg text-muted-foreground">€</span>}
    <span className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
      {plan.amount !== null ? <CountUp to={plan.amount} /> : plan.priceLabel}
    </span>
  </div>
);

const PlanBody = ({ plan }: { plan: Plan }) => (
  <>
    <div className={plan.popular ? "md:pl-8" : ""}>
      <div className="flex items-center gap-3">
        <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
          {plan.name}
        </h3>
        {plan.popular && (
          <span className="font-mono-meta rounded-full bg-primary px-2.5 py-1 text-[0.58rem] uppercase tracking-wider text-primary-foreground">
            Най-продаван
          </span>
        )}
      </div>
      <p className="mt-2 text-sm text-muted-foreground">{plan.description}</p>
      <p className="mt-1 text-sm font-medium text-primary">{plan.highlight}</p>
      <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
        {plan.features.map((f) => (
          <li
            key={f}
            className="text-xs text-muted-foreground before:mr-1.5 before:text-primary before:content-['/']"
          >
            {f}
          </li>
        ))}
      </ul>
    </div>

    <div className="md:text-right">
      <PriceValue plan={plan} />
      <p className="text-sm text-muted-foreground">{plan.period}</p>
    </div>

    <div className="md:pl-4">
      <Button
        variant={plan.popular ? "ink" : "line"}
        size="lg"
        className="w-full md:w-auto"
        asChild
      >
        <Link to="/contact">
          {plan.name === "ENTERPRISE" ? "Консултация" : "Започни"}
          <ArrowRight size={18} />
        </Link>
      </Button>
    </div>
  </>
);

// Each plan reacts to the sweeping spotlight: it sharpens, lifts and (if
// recommended) draws its cyan rule + tint as the beam passes over it.
const activation: [number, number][] = [
  [0.06, 0.3],
  [0.32, 0.56],
  [0.54, 0.8],
];

const AnimatedPlanRow = ({
  plan,
  index,
  progress,
}: {
  plan: Plan;
  index: number;
  progress: MotionValue<number>;
}) => {
  const [start, end] = activation[index];
  const opacity = useTransform(progress, [start - 0.04, end], [0.28, 1]);
  const y = useTransform(progress, [start - 0.04, end], [44, 0]);
  const blur = useTransform(progress, [start - 0.04, end], [7, 0]);
  const filter = useTransform(blur, (b) => `blur(${b}px)`);
  const ruleScale = useTransform(progress, [start, end], [0, 1]);
  const tintOpacity = useTransform(progress, [start, end], [0, 1]);

  // The recommended plan flashes when the spotlight snaps onto it, then settles
  // into a soft resting glow. Re-arms if you scroll back up.
  const glow = useAnimationControls();
  const fired = useRef(false);
  useMotionValueEvent(progress, "change", (v) => {
    if (!plan.popular) return;
    if (v > 0.62 && !fired.current) {
      fired.current = true;
      glow.start({
        boxShadow: [
          "0 0 0px 0px hsl(var(--primary) / 0)",
          "0 0 64px 8px hsl(var(--primary) / 0.5)",
          "0 0 22px 1px hsl(var(--primary) / 0.16)",
        ],
        transition: { duration: 0.75, ease: EASE_OUT, times: [0, 0.4, 1] },
      });
    } else if (v < 0.5 && fired.current) {
      fired.current = false;
      glow.start({
        boxShadow: "0 0 0px 0px hsl(var(--primary) / 0)",
        transition: { duration: 0.3 },
      });
    }
  });

  return (
    <motion.div
      style={{ opacity, y, filter }}
      className="relative grid grid-cols-1 gap-6 border-b border-border py-8 md:grid-cols-[1.5fr_auto_auto] md:items-center md:gap-10"
    >
      {plan.popular && (
        <>
          <motion.span
            animate={glow}
            className="pointer-events-none absolute inset-0 md:rounded-sm"
            aria-hidden
          />
          <motion.span
            style={{ opacity: tintOpacity }}
            className="pointer-events-none absolute inset-0 bg-primary/[0.05]"
            aria-hidden
          />
          <motion.span
            style={{ scaleY: ruleScale }}
            className="pointer-events-none absolute inset-y-0 left-0 hidden w-0.5 origin-center bg-primary md:block"
            aria-hidden
          />
        </>
      )}
      <PlanBody plan={plan} />
    </motion.div>
  );
};

const AnimatedPricing = () => {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end end"],
  });

  // The spotlight sweeps down, then parks on the recommended (middle) plan.
  const beamTop = useTransform(
    scrollYProgress,
    [0.06, 0.32, 0.62, 0.82],
    ["4%", "34%", "50%", "50%"],
  );
  const beamOpacity = useTransform(
    scrollYProgress,
    [0, 0.08, 0.82, 0.96],
    [0, 1, 1, 0],
  );
  // Beam glow swells as it snaps onto the recommended plan.
  const beamFlash = useTransform(scrollYProgress, [0.5, 0.64, 0.78], [1, 1.7, 1]);
  const beamGlowOpacity = useTransform(scrollYProgress, [0.5, 0.64, 0.82], [0.25, 0.55, 0.25]);

  return (
    <section ref={ref} className="relative bg-secondary/40" style={{ height: "240vh" }}>
      <div className="sticky top-0 flex min-h-screen items-center overflow-hidden py-16">
        <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-50" aria-hidden />

        <div className="container relative z-10 mx-auto px-6">
          <div className="mb-10 max-w-3xl">
            <SectionEyebrow label="Цени" index="09" />
            <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Прозрачни планове, без скрити такси.
            </h2>
            <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
              50/50 плащане — половината в началото, половината след като видите резултата.
            </p>
          </div>

          <div className="relative mx-auto max-w-5xl border-t border-border">
            {/* the scanning spotlight */}
            <motion.div
              style={{ top: beamTop, opacity: beamOpacity }}
              className="pointer-events-none absolute inset-x-0 z-20 -translate-y-1/2"
              aria-hidden
            >
              <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
              <motion.div
                style={{ scaleX: beamFlash, opacity: beamGlowOpacity }}
                className="mx-auto -mt-3 h-6 w-2/3 bg-primary blur-2xl"
              />
            </motion.div>

            {plans.map((plan, i) => (
              <AnimatedPlanRow key={plan.name} plan={plan} index={i} progress={scrollYProgress} />
            ))}
          </div>

          <p className="mx-auto mt-8 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">50/50 плащане:</strong> Плащате 50% в началото.
            Останалите 50% — след като видите резултата и преди официалното издаване. Без
            скрити такси.
          </p>
        </div>
      </div>
    </section>
  );
};

// Reduced-motion / no-JS-scroll fallback: the clean static rows.
const StaticPricing = () => (
  <section className="relative overflow-hidden bg-secondary/40 py-24 md:py-32">
    <div className="container mx-auto px-6">
      <SectionHeaderStatic />
      <div className="mx-auto max-w-5xl border-t border-border">
        {plans.map((plan) => (
          <div
            key={plan.name}
            className={`relative grid grid-cols-1 gap-6 border-b border-border py-10 md:grid-cols-[1.5fr_auto_auto] md:items-center md:gap-10 ${
              plan.popular ? "bg-primary/[0.04]" : ""
            }`}
          >
            {plan.popular && (
              <span className="absolute inset-y-0 left-0 hidden w-0.5 bg-primary md:block" aria-hidden />
            )}
            <PlanBody plan={plan} />
          </div>
        ))}
      </div>
      <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
        <strong className="text-foreground">50/50 плащане:</strong> Плащате 50% в началото.
        Останалите 50% — след като видите резултата и преди официалното издаване. Без скрити
        такси.
      </p>
    </div>
  </section>
);

const SectionHeaderStatic = () => (
  <div className="mb-14 max-w-3xl">
    <Reveal>
      <SectionEyebrow label="Цени" index="09" />
    </Reveal>
    <Reveal delay={0.08}>
      <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
        Прозрачни планове, без скрити такси.
      </h2>
    </Reveal>
    <Reveal delay={0.16}>
      <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
        50/50 плащане — половината в началото, половината след като видите резултата.
      </p>
    </Reveal>
    <HandNote className="mt-6" rotate={-3}>
      никакви изненади накрая
    </HandNote>
  </div>
);

// Mobile scrub ranges — when the beam sweeps across each plan.
const scrubActivation: [number, number][] = [
  [0.04, 0.3],
  [0.34, 0.62],
  [0.6, 0.86],
];

// One plan row on mobile — stays fully readable (no blur). As the scroll-driven
// beam crosses the row, a cyan line "scans" across it left→right and the row
// lifts slightly. The recommended plan keeps its line lit and glows; the others
// let the scan fade once the beam has passed.
const ScrubPlanRow = ({
  plan,
  index,
  progress,
}: {
  plan: (typeof plans)[number];
  index: number;
  progress: MotionValue<number>;
}) => {
  const [start, end] = scrubActivation[index];
  const mid = (start + end) / 2;

  const y = useTransform(progress, [start - 0.06, start + 0.02], [16, 0]);

  // the scanning line drawing across the row as the beam reaches it
  const scanScale = useTransform(progress, [start, mid], [0, 1]);
  const scanFade = useTransform(progress, [start, mid, end + 0.06], [0, 1, 0]);
  const scanHold = useTransform(progress, [start, mid], [0, 1]);
  const scanOpacity = plan.popular ? scanHold : scanFade;

  // recommended plan settles into a lit state — subtle tint + left rule only
  // (no box glow: it crowded the text and hurt readability)
  const tintOpacity = useTransform(progress, [start, mid], [0, 1]);
  const ruleScale = useTransform(progress, [start, mid], [0, 1]);

  return (
    <motion.div
      style={{ y }}
      className={`relative grid grid-cols-1 gap-6 border-b border-border py-9 ${
        plan.popular ? "pl-5" : ""
      }`}
    >
      {plan.popular && (
        <>
          <motion.span
            style={{ opacity: tintOpacity }}
            className="pointer-events-none absolute inset-0 bg-primary/[0.03]"
            aria-hidden
          />
          <motion.span
            style={{ scaleY: ruleScale }}
            className="pointer-events-none absolute inset-y-0 left-0 w-0.5 origin-center bg-primary"
            aria-hidden
          />
        </>
      )}

      {/* the scan line that draws across the row as the beam sweeps past */}
      <motion.span
        style={{ scaleX: scanScale, opacity: scanOpacity }}
        className="pointer-events-none absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-primary via-primary to-transparent"
        aria-hidden
      />

      <PlanBody plan={plan} />
    </motion.div>
  );
};

// Mobile: the same scroll-scrubbed spotlight as desktop — the beam follows the
// scroll and parks on the recommended plan, and each plan blurs in as the beam
// reaches it — but without pinning, so it stays readable in the page flow.
const ScrubPricing = () => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "end center"] });

  const beamTop = useTransform(scrollYProgress, [0.1, 0.4, 0.68, 0.85], ["0%", "34%", "50%", "50%"]);
  const beamOpacity = useTransform(scrollYProgress, [0.04, 0.16, 0.85, 0.96], [0, 1, 1, 0]);
  const beamFlash = useTransform(scrollYProgress, [0.5, 0.66, 0.8], [1, 1.7, 1]);
  const beamGlow = useTransform(scrollYProgress, [0.5, 0.66, 0.85], [0.2, 0.55, 0.2]);

  return (
    <section className="relative overflow-hidden bg-secondary/40 py-24">
      <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-50" aria-hidden />
      <div className="container relative z-10 mx-auto px-6">
        <SectionHeaderStatic />

        <div ref={ref} className="relative mx-auto max-w-5xl border-t border-border">
          {/* scanning spotlight — driven by scroll, parks on the recommended plan */}
          <motion.div
            style={{ top: beamTop, opacity: beamOpacity }}
            className="pointer-events-none absolute inset-x-0 z-20 -translate-y-1/2"
            aria-hidden
          >
            <div className="h-px w-full bg-gradient-to-r from-transparent via-primary to-transparent" />
            <motion.div
              style={{ scaleX: beamFlash, opacity: beamGlow }}
              className="mx-auto -mt-3 h-6 w-2/3 bg-primary blur-2xl"
            />
          </motion.div>

          {plans.map((plan, i) => (
            <ScrubPlanRow key={plan.name} plan={plan} index={i} progress={scrollYProgress} />
          ))}
        </div>

        <p className="mx-auto mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
          <strong className="text-foreground">50/50 плащане:</strong> Плащате 50% в началото.
          Останалите 50% — след като видите резултата и преди официалното издаване. Без скрити
          такси.
        </p>
      </div>
    </section>
  );
};

// Recurring "Поддръжка" plan + á la carte add-ons + trust/guarantee note.
// Rendered once, after whichever tier layout is active.
const PricingExtras = () => (
  <section className="relative overflow-hidden bg-secondary/40 pb-24 md:pb-32">
    <div className="container mx-auto px-6">
      <div className="mx-auto max-w-5xl">
        {/* Recurring care plan */}
        <Reveal>
          <div className="relative grid grid-cols-1 gap-6 rounded-sm border border-border bg-background/50 p-6 md:grid-cols-[1.5fr_auto_auto] md:items-center md:gap-10 md:p-8">
            <div>
              <div className="flex items-center gap-3">
                <h3 className="font-display text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {carePlan.name}
                </h3>
                <span className="font-mono-meta rounded-full border border-primary/40 px-2.5 py-1 text-[0.58rem] uppercase tracking-wider text-primary">
                  абонамент
                </span>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Спокойствие след старта — грижим се за сайта, докато вие се грижите за бизнеса.
              </p>
              <ul className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
                {carePlan.features.map((f) => (
                  <li
                    key={f}
                    className="text-xs text-muted-foreground before:mr-1.5 before:text-primary before:content-['/']"
                  >
                    {f}
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:text-right">
              <div className="flex items-baseline gap-1 md:justify-end">
                <span className="text-lg text-muted-foreground">€</span>
                <span className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                  {carePlan.amount}
                </span>
              </div>
              <p className="text-sm text-muted-foreground">на месец</p>
            </div>

            <div className="md:pl-4">
              <Button variant="line" size="lg" className="w-full md:w-auto" asChild>
                <Link to="/contact">
                  Добави поддръжка
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </div>
          </div>
        </Reveal>

        {/* Add-ons */}
        <Reveal delay={0.08}>
          <div className="mt-12 border-t border-border pt-8">
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
              Добавки по избор
            </span>
            <div className="mt-5 grid gap-x-10 sm:grid-cols-2">
              {addOns.map((a) => (
                <div
                  key={a.label}
                  className="flex items-center justify-between gap-4 border-b border-border py-3"
                >
                  <span className="text-sm text-foreground">
                    <span className="mr-2 text-primary">/</span>
                    {a.label}
                  </span>
                  <span className="font-mono-meta shrink-0 text-xs text-muted-foreground">
                    {a.price}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>

        {/* Trust / guarantee */}
        <Reveal delay={0.12}>
          <p className="mt-10 max-w-2xl text-sm leading-relaxed text-muted-foreground">
            <strong className="text-foreground">Без риск:</strong> започвате с 50% и виждате
            дизайн концепцията, преди да продължите. Не ви ли грабне — не плащате втората
            вноска. Без скрити такси, без обвързващи договори.
          </p>
        </Reveal>
      </div>
    </div>
  </section>
);

const PricingSection = () => {
  const reduceMotion = useReducedMotion();
  const isMobile = useIsMobile();
  // Both scrub the spotlight to scroll; mobile flows (no pin), desktop pins.
  const Tiers = reduceMotion ? StaticPricing : isMobile ? ScrubPricing : AnimatedPricing;
  return (
    <>
      <Tiers />
      <PricingExtras />
    </>
  );
};

export default PricingSection;
