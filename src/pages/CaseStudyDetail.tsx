import { useParams, Link } from "react-router-dom";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Lock,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import { getCaseStudyById, caseStudies } from "@/data/caseStudies";
import { getBreadcrumbSchema } from "@/lib/structuredData";
import { scrollToTop } from "@/lib/lenis";
import { useEffect } from "react";

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = getCaseStudyById(id || "");

  const currentIndex = caseStudies.findIndex((s) => s.id === id);
  const prevStudy = currentIndex > 0 ? caseStudies[currentIndex - 1] : null;
  const nextStudy =
    currentIndex < caseStudies.length - 1 ? caseStudies[currentIndex + 1] : null;

  const truncateDescription = (text: string, maxLength: number = 145): string => {
    if (text.length <= maxLength) return text;
    const truncated = text.substring(0, maxLength);
    const lastSpace = truncated.lastIndexOf(" ");
    return lastSpace > 0 ? truncated.substring(0, lastSpace) + "..." : truncated + "...";
  };

  useEffect(() => {
    scrollToTop(true);
  }, [id]);

  const baseUrl = "https://www.adrexio.com";
  const structuredData = study
    ? {
        "@context": "https://schema.org",
        "@graph": [
          {
            "@type": "Article",
            "@id": `${baseUrl}/case-studies/${study.id}`,
            headline: `${study.title} - ${study.subtitle}`,
            description: truncateDescription(study.overview, 160),
            image: study.image?.startsWith("http")
              ? study.image
              : study.image?.startsWith("/")
                ? `${baseUrl}${study.image}`
                : `${baseUrl}/${study.image}`,
            datePublished: new Date().toISOString(),
            dateModified: new Date().toISOString(),
            author: { "@type": "Organization", name: "Adrexio", url: baseUrl },
            publisher: {
              "@type": "Organization",
              name: "Adrexio",
              logo: {
                "@type": "ImageObject",
                url: `${baseUrl}/favicon.svg`,
                width: 512,
                height: 512,
              },
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/case-studies/${study.id}`,
            },
            articleSection: study.category,
            keywords: `${study.title}, ${study.category}, ${study.technologies.join(", ")}, уеб разработка, case study`,
          },
          getBreadcrumbSchema([
            { name: "Начало", url: baseUrl },
            { name: "Case Studies", url: `${baseUrl}/case-studies` },
            { name: study.title, url: `${baseUrl}/case-studies/${study.id}` },
          ]),
        ],
      }
    : null;

  if (!study) {
    return (
      <main className="min-h-screen bg-background">
        <Navbar />
        <div className="container mx-auto px-6 py-40 text-center">
          <h1 className="font-display text-4xl font-bold">Проектът не е намерен</h1>
          <p className="mt-4 text-muted-foreground">
            Този проект не съществува или е бил премахнат.
          </p>
          <Button variant="ink" className="mt-8" asChild>
            <Link to="/case-studies">
              <ArrowLeft className="h-4 w-4" />
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

      {/* Hero */}
      <section className="relative overflow-hidden bg-background pt-32 pb-12 md:pt-40">
        <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-60" aria-hidden />
        <div className="container relative z-10 mx-auto px-6">
          <Reveal immediate>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              <ArrowLeft className="h-4 w-4" />
              Назад към портфолио
            </Link>
          </Reveal>

          <div className="mt-8 max-w-4xl">
            <Reveal immediate delay={0.06}>
              <div className="flex flex-wrap items-center gap-3">
                <SectionEyebrow label={study.category} />
                {!study.isPublic && (
                  <span className="font-mono-meta inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    <Lock className="h-3 w-3" />
                    Вътрешна система
                  </span>
                )}
              </div>
            </Reveal>
            <Reveal immediate delay={0.12}>
              <h1 className="font-display text-display-sm mt-6 font-bold text-foreground">
                {study.title}
              </h1>
            </Reveal>
            <Reveal immediate delay={0.18}>
              <p className="mt-4 text-xl text-muted-foreground">{study.subtitle}</p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Main screenshot */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="overflow-hidden rounded-2xl border border-border shadow-2xl">
              <img src={study.image} alt={`${study.title} уебсайт`} className="h-auto w-full" />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-x-10 border-t border-border sm:grid-cols-3">
            {study.results.map((result, i) => (
              <Reveal key={i} delay={i * 0.06}>
                <div className="border-b border-border py-8 sm:border-b-0">
                  <div className="font-display text-4xl font-bold tracking-tight text-foreground md:text-5xl">
                    {result.metric}
                  </div>
                  <div className="font-mono-meta mt-2 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    {result.label}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="pb-16">
        <div className="container mx-auto px-6">
          <div className="mx-auto max-w-3xl">
            <Reveal>
              <div className="border-t border-border py-10">
                <SectionEyebrow label="Преглед" index="01" />
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {study.overview}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-border py-10">
                <SectionEyebrow label="Предизвикателството" index="02" />
                <p className="mt-5 text-lg leading-relaxed text-muted-foreground">
                  {study.challenge}
                </p>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-border py-10">
                <SectionEyebrow label="Нашето решение" index="03" />
                <ul className="mt-6 space-y-4">
                  {study.solution.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground">
                      <ArrowRight className="mt-1 h-4 w-4 shrink-0 text-primary" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>

            <Reveal>
              <div className="border-t border-border py-10">
                <SectionEyebrow label="Използвани технологии" index="04" />
                <div className="mt-6 flex flex-wrap gap-x-8 gap-y-4">
                  {study.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="font-mono-meta text-sm uppercase tracking-[0.14em] text-foreground/80"
                    >
                      <span className="mr-2 text-primary">/</span>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>

            {study.internalNote && (
              <Reveal>
                <div className="mt-4 flex items-start gap-3 border-l-2 border-primary bg-secondary/40 p-5 text-sm text-muted-foreground">
                  <Lock className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                  {study.internalNote}
                </div>
              </Reveal>
            )}

            {/* CTA */}
            <div className="mt-12 flex flex-col gap-4 sm:flex-row">
              {study.isPublic && study.url ? (
                <Button variant="ink" size="lg" asChild>
                  <a href={study.url} target="_blank" rel="noopener noreferrer">
                    Посетете проекта
                    <ExternalLink className="h-4 w-4" />
                  </a>
                </Button>
              ) : null}
              <Button variant="line" size="lg" asChild>
                <Link to="/contact">
                  Започнете подобен проект
                  <ArrowRight className="h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation */}
      <section className="border-t border-border py-12">
        <div className="container mx-auto px-6">
          <div className="mx-auto flex max-w-4xl items-center justify-between">
            {prevStudy ? (
              <Link
                to={`/case-studies/${prevStudy.id}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary/50">
                  <ChevronLeft className="h-5 w-5" />
                </div>
                <div className="hidden sm:block">
                  <div className="font-mono-meta text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Предишен
                  </div>
                  <div className="font-medium text-foreground">{prevStudy.title}</div>
                </div>
              </Link>
            ) : (
              <div />
            )}

            <Link
              to="/case-studies"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Нашите проекти
            </Link>

            {nextStudy ? (
              <Link
                to={`/case-studies/${nextStudy.id}`}
                className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
              >
                <div className="hidden text-right sm:block">
                  <div className="font-mono-meta text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                    Следващ
                  </div>
                  <div className="font-medium text-foreground">{nextStudy.title}</div>
                </div>
                <div className="flex h-10 w-10 items-center justify-center rounded-full border border-border transition-colors group-hover:border-primary/50">
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
