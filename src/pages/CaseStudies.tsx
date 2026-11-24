import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import PageIntro from "@/components/editorial/PageIntro";
import CTASection from "@/components/CTASection";
import {
  getCaseStudiesForFilter,
  getPortfolioOrder,
  type CaseStudy,
  type CaseStudyFilterId,
} from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import DeviceMockup, { getMobileShot } from "@/components/case-studies/DeviceMockup";
import { prefetchCaseStudy } from "@/lib/prefetchRoute";

/** The project shown full width at the top of the unfiltered list. */
const FEATURED_ID = "viajes-a-bulgaria";

const FeaturedCaseStudy = ({ study }: { study: CaseStudy }) => (
  <Reveal immediate delay={0.2}>
    <Link
      to={`/case-studies/${study.id}`}
      onMouseEnter={prefetchCaseStudy}
      onFocus={prefetchCaseStudy}
      className="group grid gap-6 rounded-md bg-secondary p-3 transition-colors hover:bg-secondary/70 md:p-4 lg:grid-cols-[minmax(0,1.7fr)_minmax(0,1fr)] lg:items-center lg:gap-10"
    >
      <DeviceMockup desktop={study.image} mobile={getMobileShot(study.id)} alt={study.title} wide />
      <div className="flex flex-col gap-6 px-1 pb-2 lg:pr-6">
        <div>
          <p className="eyebrow">Акцентен проект · {study.category}</p>
          <h2 className="mt-3 text-3xl font-semibold leading-tight text-foreground md:text-[2.4rem]">
            {study.title}
          </h2>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground md:text-[1.05rem]">
            {study.subtitle}
          </p>
        </div>
        <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-foreground">
          Разгледайте проекта
          <ArrowUpRight
            size={15}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </span>
      </div>
    </Link>
  </Reveal>
);

const ProjectGrid =({ studies }: { studies: CaseStudy[] }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {studies.map((study, index) => (
      <CaseStudyCard key={study.id} study={study} index={index} />
    ))}
  </div>
);

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilterId>("all");

  const filteredStudies = getCaseStudiesForFilter(activeFilter);
  const featured =
    activeFilter === "all" ? filteredStudies.find((s) => s.id === FEATURED_ID) : undefined;
  const gridStudies = featured ? filteredStudies.filter((s) => s.id !== featured.id) : filteredStudies;

  const publicStudies = getPortfolioOrder().filter((s) => s.isPublic);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Проекти — Adrexio",
      description:
        "Сайтове, онлайн магазини и уеб платформи, които Adrexio е направило за клиенти от различни сфери.",
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
        title="Проекти на Adrexio — сайтове, магазини и платформи"
        description="Сайтове, онлайн магазини и уеб платформи, които сме направили от нулата — за ресторанти, клиники, магазини, производители и технологични компании."
        keywords="портфолио, проекти, case studies, уеб дизайн, уебсайтове, онлайн магазини, Adrexio, България"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Проекти"
        title={<>Проекти, които можете да отворите.</>}
        description="Ресторанти, клиники, онлайн магазини, производители и технологични компании. При всеки проект пише каква беше задачата, какво направихме и кое беше най-трудно. Числата на клиента стоят отделно от нашите."
      />

      {/* Featured project, full width, on the unfiltered view */}
      {featured && (
        <section className="bg-background pb-12 md:pb-16">
          <div className="container mx-auto px-6">
            <FeaturedCaseStudy study={featured} />
          </div>
        </section>
      )}

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
          {gridStudies.length > 0 ? (
            <ProjectGrid studies={gridStudies} />
          ) : (
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
          )}
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default CaseStudies;
