import { useParams, Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Target,
  Lightbulb,
  CheckCircle,
  BarChart3,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getCaseStudyById, caseStudies } from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { useEffect } from "react";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const study = getCaseStudyById(id || "");

  // Get adjacent case studies for navigation
  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  // Truncate description for SEO (optimal length: 140-150 characters)
  const truncateDescription = (text: string, maxLength: number = 145): string => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(' ');
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + '...' : truncated + '...';
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [id]);

  // Generate structured data for SEO
  const baseUrl = "https://www.adrexio.com";
  const structuredData = study ? {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Article",
        "@id": `${baseUrl}/case-studies/${study.id}`,
        "headline": `${study.title} - ${study.subtitle}`,
        "description": truncateDescription(study.overview, 160),
        "image": study.image?.startsWith("http") 
          ? study.image 
          : study.image?.startsWith("/") 
          ? `${baseUrl}${study.image}`
          : `${baseUrl}/${study.image}`,
        "datePublished": new Date().toISOString(),
        "dateModified": new Date().toISOString(),
        "author": {
          "@type": "Organization",
          "name": "Adrexio",
          "url": baseUrl
        },
        "publisher": {
          "@type": "Organization",
          "name": "Adrexio",
          "logo": {
            "@type": "ImageObject",
            "url": `${baseUrl}/logo.svg`
          }
        },
        "mainEntityOfPage": {
          "@type": "WebPage",
          "@id": `${baseUrl}/case-studies/${study.id}`
        },
        "articleSection": study.category,
        "keywords": `${study.title}, ${study.category}, ${study.technologies.join(", ")}, уеб разработка, case study`
      },
      getBreadcrumbSchema([
        { name: "Начало", url: baseUrl },
        { name: "Case Studies", url: `${baseUrl}/case-studies` },
        { name: study.title, url: `${baseUrl}/case-studies/${study.id}` }
      ])
    ]
  } : null;

  if (!study) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-32 text-center">
          <h1 className="text-4xl font-display font-bold mb-4">
            Проектът не е намерен
          </h1>
          <p className="text-muted-foreground mb-8">
            Този проект не съществува или е бил премахнат.
          </p>
          <Button variant="hero" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Към проектите
            </Link>
          </Button>
        </div>
        <Footer />
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={
          study.id === "koleff-house"
            ? `${study.title} - Къща за гости Твърдица, Сливен | Next.js Уебсайт | Adrexio Case Study`
            : `${study.title} - ${study.subtitle} | Adrexio Case Study`
        }
        description={truncateDescription(study.overview)}
        keywords={
          study.id === "koleff-house"
            ? `${study.title}, къща за гости Твърдица, настаняване Сливен, Next.js уебсайт, Stefan Kolev, ${study.category}, уеб разработка, case study, ${study.technologies.join(", ")}`
            : `${study.title}, ${study.category}, уеб разработка, case study, ${study.technologies.join(", ")}`
        }
        image={study.image}
        type="article"
        noindex={!study.isPublic}
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-12 relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          {/* Breadcrumb */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-8"
          >
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад към портфолио
            </Link>
          </motion.div>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="max-w-4xl"
          >
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span
                className={`text-sm font-medium uppercase tracking-wider ${study.accentColor}`}
              >
                {study.category}
              </span>
              {!study.isPublic && (
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                  <Lock className="w-3 h-3" />
                  Вътрешна система
                </span>
              )}
            </div>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
              {study.title}
            </h1>
            <p className="text-xl text-muted-foreground">{study.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Main Screenshot */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className={`relative rounded-2xl overflow-hidden border-gradient bg-gradient-to-br ${study.gradient}`}
          >
            <div className="p-4 md:p-8">
              <div className="rounded-xl overflow-hidden border border-border shadow-2xl">
                <img
                  src={study.image}
                  alt={`${study.title} уебсайт`}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Results Highlight */}
      <section className="py-12">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {study.results.map((result, i) => (
              <div
                key={i}
                className="text-center p-8 rounded-2xl border-gradient"
              >
                <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                  {result.metric}
                </div>
                <div className="text-muted-foreground">{result.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Left Column */}
            <div className="space-y-12">
              {/* Overview */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="flex items-center gap-3 font-display font-bold text-2xl mb-4">
                  <div
                    className={`p-2 rounded-lg bg-primary/10 ${study.accentColor}`}
                  >
                    <Target className="w-5 h-5" />
                  </div>
                  Преглед
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {study.overview}
                </p>
              </motion.div>

              {/* Challenge */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="flex items-center gap-3 font-display font-bold text-2xl mb-4">
                  <div
                    className={`p-2 rounded-lg bg-primary/10 ${study.accentColor}`}
                  >
                    <Lightbulb className="w-5 h-5" />
                  </div>
                  Предизвикателството
                </h2>
                <p className="text-muted-foreground leading-relaxed text-lg">
                  {study.challenge}
                </p>
              </motion.div>
            </div>

            {/* Right Column */}
            <div className="space-y-12">
              {/* Solution */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="flex items-center gap-3 font-display font-bold text-2xl mb-4">
                  <div
                    className={`p-2 rounded-lg bg-primary/10 ${study.accentColor}`}
                  >
                    <CheckCircle className="w-5 h-5" />
                  </div>
                  Нашето решение
                </h2>
                <ul className="space-y-4">
                  {study.solution.map((item, i) => (
                    <motion.li
                      key={i}
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex items-start gap-3"
                    >
                      <div
                        className={`mt-1 flex-shrink-0 w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center ${study.accentColor}`}
                      >
                        <ArrowRight className="w-3 h-3" />
                      </div>
                      <span className="text-muted-foreground">{item}</span>
                    </motion.li>
                  ))}
                </ul>
              </motion.div>

              {/* Technologies */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
              >
                <h2 className="flex items-center gap-3 font-display font-bold text-2xl mb-4">
                  <div
                    className={`p-2 rounded-lg bg-primary/10 ${study.accentColor}`}
                  >
                    <BarChart3 className="w-5 h-5" />
                  </div>
                  Използвани технологии
                </h2>
                <div className="flex flex-wrap gap-2">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-4 py-2 rounded-full bg-card text-foreground text-sm border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </motion.div>

              {/* Internal Note */}
              {study.internalNote && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="p-6 rounded-2xl bg-muted/50 border border-border"
                >
                  <p className="text-sm text-muted-foreground flex items-start gap-3">
                    <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                    {study.internalNote}
                  </p>
                </motion.div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              {study.isPublic && study.url ? (
                <Button variant="hero" size="lg" asChild>
                  <a href={study.url} target="_blank" rel="noopener noreferrer">
                    Посетете проекта
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              <Button variant="heroOutline" size="lg" asChild>
                <Link to="/contact">
                  Започнете подобен проект
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-t border-border">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between max-w-4xl mx-auto">
            {prevStudy ? (
              <Link
                to={`/case-studies/${prevStudy.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:border-primary/50 transition-colors">
                  <ChevronLeft className="h-5 w-5" />
                </div>
                <div className="hidden sm:block">
                  <div className="text-xs text-muted-foreground">Предишен</div>
                  <div className="font-medium">{prevStudy.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/case-studies"
              className="text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              Нашите проекти
            </Link>

            {nextStudy ? (
              <Link
                to={`/case-studies/${nextStudy.id}`}
                className="group flex items-center gap-3 text-muted-foreground hover:text-foreground transition-colors"
              >
                <div className="hidden sm:block text-right">
                  <div className="text-xs text-muted-foreground">Следващ</div>
                  <div className="font-medium">{nextStudy.title}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border group-hover:border-primary/50 transition-colors">
                  <ChevronRight className="h-5 w-5" />
                </div>
              </Link>
            ) : (
              <div />
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudyDetail;
