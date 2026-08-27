import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import MobileAppsSection from "@/components/case-studies/MobileAppsSection";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import RobotMascot from "@/components/mascots/RobotMascot";
import CTASection from "@/components/CTASection";
import {
  CASE_STUDY_FILTERS,
  getCaseStudiesForFilter,
  getPortfolioOrder,
  partitionFeatured,
  PORTFOLIO_CLIENT_COUNT,
  PORTFOLIO_PROJECT_COUNT,
  type CaseStudy,
  type CaseStudyFilterId,
} from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { mobileApps } from "@/data/mobileApps";
import { getLenis } from "@/lib/lenis";

const summaryStats = [
  { value: String(PORTFOLIO_CLIENT_COUNT), label: "Доволни клиенти" },
  { value: String(PORTFOLIO_PROJECT_COUNT), label: "Завършени проекти" },
  { value: "< 2 сек", label: "Време за зареждане" },
];

const ProjectGrid = ({ studies }: { studies: CaseStudy[] }) => (
  <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
    {studies.map((study, index) => (
      <CaseStudyCard key={study.id} study={study} index={index} />
    ))}
  </div>
);

const AppsScrollCue = () => {
  const reduceMotion = useReducedMotion();
  const { scrollY } = useScroll();
  const [visible, setVisible] = useState(true);

  useMotionValueEvent(scrollY, "change", (value) => {
    setVisible(value < 80);
  });

  const scrollToApps = () => {
    const target = document.getElementById("mobile-apps");
    if (!target) return;
    const top =
      target.getBoundingClientRect().top +
      (window.scrollY || document.documentElement.scrollTop) -
      72;
    const lenis = getLenis();
    if (lenis) {
      lenis.scrollTo(top, { force: true });
      return;
    }
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <AnimatePresence>
      {visible && (
        <motion.button
          type="button"
          onClick={scrollToApps}
          aria-label="Надолу към мобилните приложения"
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 8 }}
          transition={{ duration: 0.3 }}
          className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full border border-border bg-background/95 px-5 py-3 shadow-sm backdrop-blur"
        >
          <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.18em] text-primary">
            Надолу
          </span>
          <motion.span
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { y: [0, 7, 0], opacity: [1, 0.15, 1] }
            }
            transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-primary"
          >
            <span className="h-6 w-0.5 rounded-full bg-primary" />
            <ChevronDown className="h-5 w-5" strokeWidth={2} />
          </motion.span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilterId>("all");

  const filteredStudies = getCaseStudiesForFilter(activeFilter);
  const isDefaultView = activeFilter === "all";
  const isAppsView = activeFilter === "app";
  const { featured: featuredStudies, rest: restStudies } = partitionFeatured(filteredStudies);

  const publicStudies = getPortfolioOrder().filter((s) => s.isPublic);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Проекти — Adrexio",
      description:
        "Реални проекти на Adrexio: уебсайтове, мобилни приложения и дигитални решения за бизнеси от различни индустрии.",
      url: "https://www.adrexio.com/case-studies",
      inLanguage: "bg-BG",
      mainEntity: {
        "@type": "ItemList",
        numberOfItems: publicStudies.length,
        itemListElement: publicStudies.map((study, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: study.title,
          url: `https://www.adrexio.com/case-studies/${study.id}`,
        })),
      },
    },
    getBreadcrumbSchema([
      { name: "Начало", url: "https://www.adrexio.com/" },
      { name: "Проекти", url: "https://www.adrexio.com/case-studies" },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Проекти — реални резултати на Adrexio"
        description="Разгледайте реални проекти на Adrexio — уебсайтове, мобилни приложения, UI/UX дизайн и дигитални решения, изградени от нулата за бизнеси от различни индустрии."
        keywords="портфолио, проекти, case studies, уеб дизайн, уебсайтове, мобилни приложения, Adrexio, България"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Проекти"
        title={
          <>
            Реални проекти, <span className="accent-mark">реални резултати</span>.
          </>
        }
        description="Разгледайте как помогнахме на бизнеси от различни индустрии да постигнат дигитален успех — с решения, изградени от нулата, а не от шаблон."
      />

      {/* Filters */}
      <section className="relative bg-background pb-12">
        <div className="container mx-auto px-6">
          <CaseStudyFilters
            activeFilter={activeFilter}
            onFilterChange={setActiveFilter}
          />
        </div>
      </section>

      {/* Projects */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          {isDefaultView ? (
            <>
              <div className="mb-10 border-t border-border pt-8">
                <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                  Избрано
                </span>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {featuredStudies.length} проекта
                </h2>
              </div>
              <ProjectGrid studies={featuredStudies} />

              {restStudies.length > 0 && (
                <>
                  <div className="mb-10 mt-20 border-t border-border pt-8">
                    <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                      Още работа
                    </span>
                    <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                      {restStudies.length}{" "}
                      {restStudies.length === 1 ? "проект" : "проекта"}
                    </h2>
                  </div>
                  <ProjectGrid studies={restStudies} />
                </>
              )}
            </>
          ) : (
            <>
              <div className="mb-10 border-t border-border pt-8">
                <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
                  {CASE_STUDY_FILTERS.find((f) => f.id === activeFilter)?.label}
                </span>
                <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
                  {isAppsView
                    ? `${filteredStudies.length + mobileApps.length} проекта`
                    : `${filteredStudies.length} ${filteredStudies.length === 1 ? "проект" : "проекта"}`}
                </h2>
              </div>

              {filteredStudies.length > 0 ? (
                <ProjectGrid studies={filteredStudies} />
              ) : !isAppsView ? (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="flex flex-col items-center border-t border-border py-16 text-center"
                >
                  <RobotMascot variant="lost" className="mb-8 max-w-[220px]" />
                  <p className="mb-4 text-lg text-muted-foreground">
                    Няма проекти в тази категория
                  </p>
                  <Button variant="line" onClick={() => setActiveFilter("all")}>
                    Покажи всички
                  </Button>
                </motion.div>
              ) : null}
            </>
          )}
        </div>
      </section>

      {(isDefaultView || isAppsView) && <MobileAppsSection />}
      {isAppsView && <AppsScrollCue />}

      {/* Stats — editorial dark band, big numbers on hairlines */}
      <section className="layer-dark relative overflow-hidden py-24 md:py-32">
        <div className="canvas-grid absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6">
          <SectionHeader
            index="02"
            label="Резултати"
            title={
              <>
                Нашата история на <span className="text-primary">успеха</span>.
              </>
            }
            description="Числа от портфолиото и конкретни проекти — без среден растеж, който обещаваме на всеки."
          />

          <div className="grid grid-cols-1 border-t border-border sm:grid-cols-3">
            {summaryStats.map((stat, i) => (
              <Reveal key={stat.label} delay={i * 0.06}>
                <div className="border-b border-border py-8 md:py-10">
                  <div className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {stat.value}
                  </div>
                  <div className="font-mono-meta mt-3 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.24} className="mt-12">
            <div className="flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="accent" size="lg" asChild>
                <Link to="/contact">
                  Свържи се с нас
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                variant="line"
                size="lg"
                asChild
                className="border-foreground/25 text-foreground hover:border-foreground/50"
              >
                <Link to="/services">
                  Разгледай услугите
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default CaseStudies;
