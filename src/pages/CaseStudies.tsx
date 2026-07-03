import { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight } from "lucide-react";
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
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";

const summaryStats = [
  { value: "30+", label: "Доволни клиенти" },
  { value: "50+", label: "Завършени проекта" },
  { value: "+150%", label: "Среден растеж" },
  { value: "< 2 сек", label: "Време за зареждане" },
];

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("Всички");

  const filteredStudies = getCaseStudiesByCategory(activeCategory);
  const isFiltering = activeCategory !== "Всички";

  const publicStudies = caseStudies.filter((s) => s.isPublic);
  const structuredData = [
    {
      "@context": "https://schema.org",
      "@type": "CollectionPage",
      name: "Портфолио — Adrexio",
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
      { name: "Портфолио", url: "https://www.adrexio.com/case-studies" },
    ]),
  ];

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Портфолио — реални проекти на Adrexio"
        description="Разгледайте реални проекти на Adrexio — уебсайтове, мобилни приложения, UI/UX дизайн и дигитални решения, изградени от нулата за бизнеси от различни индустрии."
        keywords="портфолио, проекти, case studies, уеб дизайн, уебсайтове, мобилни приложения, Adrexio, България"
        structuredData={structuredData}
      />
      <Navbar />

      <PageIntro
        index="01"
        label="Портфолио"
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
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
          />
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="mb-10 border-t border-border pt-8">
            <span className="font-mono-meta text-[0.62rem] uppercase tracking-[0.16em] text-primary">
              {isFiltering ? activeCategory : "Всички проекти"}
            </span>
            <h2 className="font-display mt-3 text-2xl font-bold tracking-tight text-foreground md:text-3xl">
              {filteredStudies.length}{" "}
              {filteredStudies.length === 1 ? "проект" : "проекта"} в портфолиото
            </h2>
          </div>

          {filteredStudies.length > 0 ? (
            <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex flex-col items-center border-t border-border py-16 text-center"
            >
              <RobotMascot variant="lost" className="mb-8 max-w-[220px]" />
              <p className="mb-4 text-lg text-muted-foreground">
                Няма проекти в тази категория
              </p>
              <Button variant="line" onClick={() => setActiveCategory("Всички")}>
                Виж всички проекти
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Apps Section */}
      {!isFiltering && <MobileAppsSection />}

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
            description="Числа, които отразяват ангажимента ни да доставяме изключителни резултати за всеки клиент."
          />

          <div className="grid grid-cols-2 border-t border-border sm:grid-cols-4">
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
                  Започни проект
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
