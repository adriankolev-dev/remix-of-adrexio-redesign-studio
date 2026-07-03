import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { Lock, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Link } from "react-router-dom";

// Проекти с изображения
const projects = [
  { id: 1, image: "/images/projects/amadent.png", title: "Дентална клиника", category: "Медицина" },
  { id: 2, image: "/images/projects/ameliadiva.png", title: "Модна къща", category: "Мода" },
  { id: 3, image: "/images/projects/athleticiq.png", title: "Спортен център", category: "Спорт & Фитнес" },
  { id: 4, image: "/images/projects/bitcoinempires.png", title: "Crypto платформа", category: "Финтех" },
  { id: 5, image: "/images/projects/boas.png", title: "Tech стартъп", category: "Технологии" },
  { id: 6, image: "/images/projects/bodyaesthetics.png", title: "Beauty студио", category: "Красота & Здраве" },
  { id: 7, image: "/images/projects/booom.png", title: "Маркетинг агенция", category: "Digital маркетинг" },
  { id: 8, image: "/images/projects/breezypointvillas.png", title: "Луксозни вили", category: "Недвижими имоти" },
  { id: 9, image: "/images/projects/bulbiochem.png", title: "Biotech компания", category: "Биотехнологии" },
  { id: 10, image: "/images/projects/fml-bd.png", title: "Софтуерна платформа", category: "SaaS" },
  { id: 11, image: "/images/projects/globalstreetart.png", title: "Арт галерия", category: "Изкуство & Култура" },
  { id: 12, image: "/images/projects/inniti.png", title: "IT консултантска фирма", category: "Enterprise" },
  { id: 13, image: "/images/projects/kappabay.png", title: "Бутиков хотел", category: "Хотелиерство" },
  { id: 14, image: "/images/projects/koleff-house.png", title: "Архитектурно студио", category: "Архитектура" },
  { id: 15, image: "/images/projects/koni.png", title: "Cloud решения", category: "Технологии" },
  { id: 16, image: "/images/projects/legends.png", title: "Gaming платформа", category: "eSports & Gaming" },
  { id: 17, image: "/images/projects/mehana.png", title: "Ресторантска верига", category: "Ресторантьорство" },
  { id: 18, image: "/images/projects/nfclogo.png", title: "IoT решения", category: "Smart технологии" },
  { id: 19, image: "/images/projects/oraqor.png", title: "E-commerce магазин", category: "Онлайн търговия" },
  { id: 20, image: "/images/projects/riact.png", title: "Web приложение", category: "Web развитие" },
  { id: 21, image: "/images/projects/supercredit.png", title: "Финансова платформа", category: "Финанси" },
  { id: 22, image: "/images/projects/tajmahal.png", title: "Етнически ресторант", category: "Гастрономия" },
  { id: 23, image: "/images/projects/webxotic.png", title: "Дигитална агенция", category: "Creative Studio" },
];

const AUTOPLAY_MS = 4200;

const ProjectsCarousel = () => {
  const [active, setActive] = useState(0);
  const [paused, setPaused] = useState(false);
  const thumbsRef = useRef<HTMLDivElement>(null);

  const total = projects.length;
  const current = projects[active];

  const go = (next: number) => setActive((next + total) % total);

  // Autoplay
  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setActive((a) => (a + 1) % total), AUTOPLAY_MS);
    return () => clearInterval(t);
  }, [paused, total]);

  // Keep the active thumbnail centered — scroll only the rail horizontally,
  // never the page (scrollIntoView would yank the whole window down).
  useEffect(() => {
    const rail = thumbsRef.current;
    const el = rail?.children[active] as HTMLElement | undefined;
    if (!rail || !el) return;
    const target = el.offsetLeft - rail.clientWidth / 2 + el.clientWidth / 2;
    rail.scrollTo({ left: target, behavior: "smooth" });
  }, [active]);

  return (
    <section className="relative overflow-hidden bg-secondary/30 py-24 md:py-32">
      <div className="container mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-14 text-center"
        >
          <span className="font-mono-meta mb-5 inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.2em] text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Портфолио
          </span>
          <h2 className="font-display mb-4 text-3xl font-bold tracking-tight text-foreground md:text-4xl lg:text-5xl">
            Реални проекти, <span className="accent-mark">реални резултати</span>
          </h2>
          <p className="mx-auto max-w-3xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Всеки проект е създаден с внимание към детайла, фокус върху потребителското изживяване и
            цел да донесе измерими резултати за бизнеса.
          </p>
        </motion.div>

        <div
          className="mx-auto max-w-5xl"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
        >
          {/* Big browser preview */}
          <div className="overflow-hidden rounded-2xl border border-border bg-background shadow-2xl shadow-foreground/5">
            {/* Chrome */}
            <div className="flex items-center gap-3 border-b border-border px-4 py-3">
              <div className="flex items-center gap-1.5">
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
                <span className="h-2.5 w-2.5 rounded-full bg-foreground/15" />
              </div>
              <div className="flex flex-1 items-center justify-center">
                <div className="font-mono-meta inline-flex items-center gap-1.5 rounded-md bg-secondary px-3 py-1 text-[0.62rem] tracking-wide text-muted-foreground">
                  <Lock className="h-2.5 w-2.5" />
                  adrexio.com
                </div>
              </div>
              <div className="w-[46px]" aria-hidden />
            </div>

            {/* Viewport */}
            <div className="relative aspect-[16/10] bg-secondary">
              <AnimatePresence initial={false}>
                <motion.img
                  key={current.id}
                  src={current.image}
                  alt={current.title}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.6, ease: "easeInOut" }}
                  className="absolute inset-0 h-full w-full object-cover object-top"
                />
              </AnimatePresence>
            </div>
          </div>

          {/* Caption + controls */}
          <div className="mt-6 flex items-center justify-between gap-4">
            <div className="min-w-0">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, y: 6 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.25 }}
                >
                  <h3 className="font-display truncate text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                    {current.title}
                  </h3>
                  <p className="font-mono-meta mt-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {current.category}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <div className="flex shrink-0 items-center gap-4">
              <span className="font-mono-meta text-[0.7rem] tabular-nums tracking-[0.14em] text-muted-foreground">
                {String(active + 1).padStart(2, "0")}{" "}
                <span className="text-muted-foreground/50">/ {String(total).padStart(2, "0")}</span>
              </span>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={() => go(active - 1)}
                  aria-label="Предишен проект"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <ChevronLeft className="h-5 w-5" />
                </button>
                <button
                  type="button"
                  onClick={() => go(active + 1)}
                  aria-label="Следващ проект"
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:border-primary hover:bg-primary/5"
                >
                  <ChevronRight className="h-5 w-5" />
                </button>
              </div>
            </div>
          </div>

          {/* Thumbnail rail */}
          <div
            ref={thumbsRef}
            className="mt-8 flex gap-3 overflow-x-auto pb-3 [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
          >
            {projects.map((project, i) => (
              <button
                type="button"
                key={project.id}
                onClick={() => setActive(i)}
                aria-label={project.title}
                aria-current={i === active ? "true" : undefined}
                className={`relative aspect-[16/10] w-28 shrink-0 overflow-hidden rounded-lg border transition-all duration-300 md:w-32 ${
                  i === active
                    ? "border-primary opacity-100 ring-2 ring-primary/30"
                    : "border-border opacity-45 hover:opacity-80"
                }`}
              >
                <img
                  src={project.image}
                  alt={project.title}
                  loading="lazy"
                  className="h-full w-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* View all */}
          <div className="mt-10 text-center">
            <Link
              to="/case-studies"
              className="font-mono-meta inline-flex items-center gap-2 text-[0.7rem] uppercase tracking-[0.16em] text-foreground transition-colors hover:text-primary"
            >
              Разгледай всички проекти
              <ArrowUpRight className="h-3.5 w-3.5" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsCarousel;
