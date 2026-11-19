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

const ProjectGrid = ({ studies }: { studies: CaseStudy[] }) => (
  <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
    {studies.map((study, index) => (
      <CaseStudyCard key={study.id} study={study} index={index} />
    ))}
  </div>
);

const CaseStudies = () => {
  const [activeFilter, setActiveFilter] = useState<CaseStudyFilterId>("all");

  const filteredStudies = getCaseStudiesForFilter(activeFilter);

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
