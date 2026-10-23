import { useState } from "react";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
} from "framer-motion";
import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import MobileAppsSection from "@/components/case-studies/MobileAppsSection";
import PageIntro from "@/components/editorial/PageIntro";
import CTASection from "@/components/CTASection";
import {
  getCaseStudiesForFilter,
  getPortfolioOrder,
  type CaseStudy,
  type CaseStudyFilterId,
} from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { getLenis } from "@/lib/lenis";

const ProjectGrid = ({ studies }: { studies: CaseStudy[] }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
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
          className="fixed bottom-8 left-1/2 z-40 flex -translate-x-1/2 flex-col items-center gap-1 rounded-full border border-border bg-background/95 px-5 py-3 backdrop-blur"
        >
          <span className="eyebrow text-foreground">
            Надолу
          </span>
          <motion.span
            animate={
              reduceMotion
                ? { opacity: 1 }
                : { y: [0, 7, 0], opacity: [1, 0.15, 1] }
            }
            transition={{ duration: 1.05, repeat: Infinity, ease: "easeInOut" }}
            className="flex flex-col items-center text-foreground"
          >
            <span className="h-6 w-0.5 rounded-full bg-foreground" />
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

  const publicStudies = getPortfolioOrder().filter((s) => s.isPublic);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Проекти — Adrexio",
      description:
        "Сайтове, онлайн магазини и мобилни приложения, които Adrexio е направило за клиенти от различни сфери.",
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
        title="Проекти на Adrexio — сайтове, магазини и приложения"
        description="Сайтове, онлайн магазини и мобилни приложения, които сме направили от нулата — за ресторанти, клиники, магазини, производители и технологични компании."
        keywords="портфолио, проекти, case studies, уеб дизайн, уебсайтове, мобилни приложения, Adrexio, България"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Проекти"
        title={<>Проекти, които можете да отворите.</>}
        description="Ресторанти, клиники, онлайн магазини, производители и технологични компании. При всеки проект пише каква беше задачата, какво направихме и кое беше най-трудно. Числата на клиента стоят отделно от нашите."
      />

      {/* Filters */}
      <section className="bg-background pb-8">
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
          {filteredStudies.length > 0 ? (
            <ProjectGrid studies={filteredStudies} />
          ) : !isAppsView ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center border-t border-border py-16 text-center"
            >
              <p className="mb-4 text-lg text-muted-foreground">
                Няма проекти в тази категория
              </p>
              <Button variant="line" onClick={() => setActiveFilter("all")}>
                Всички проекти
              </Button>
            </motion.div>
          ) : null}
        </div>
      </section>

      {(isDefaultView || isAppsView) && <MobileAppsSection />}
      {isAppsView && <AppsScrollCue />}

      <CTASection />
      <Footer />
    </main>
  );
};

export default CaseStudies;
