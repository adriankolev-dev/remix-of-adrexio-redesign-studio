import { useParams, Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import Reveal from "@/components/editorial/Reveal";
import CTASection from "@/components/CTASection";
import {
  CASE_STUDY_SERVICE_LINK,
  CASE_STUDY_SERVICE_PATH_DEFAULT,
  RESULT_KIND_LABEL,
  getCaseStudyById,
  getCaseStudyTitle,
  getPortfolioOrder,
  type CaseStudyResult,
} from "@/data/caseStudies";
import { getBreadcrumbSchema, getPublisherSchema } from "@/lib/structuredData";
import { scrollToTop } from "@/lib/lenis";
import { useEffect, type ReactNode } from "react";

/** One chapter of the story: label on the left, content on the right, on a hairline. */
const Chapter = ({ label, children }: { label: string; children: ReactNode }) => (
  <Reveal>
    <div className="grid gap-5 border-t border-border py-10 lg:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:gap-16 md:py-12">
      <h2 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
        {label}
      </h2>
      <div>{children}</div>
    </div>
  </Reveal>
);

const CaseStudyDetail = () => {
  const { id } = useParams<{ id: string }>();
  const study = getCaseStudyById(id || "");

  const ordered = getPortfolioOrder();
  const currentIndex = ordered.findIndex((s) => s.id === id);
  const prevStudy = currentIndex > 0 ? ordered[currentIndex - 1] : null;
  const nextStudy =
    currentIndex >= 0 && currentIndex < ordered.length - 1 ? ordered[currentIndex + 1] : null;

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
            inLanguage: "bg-BG",
            author: { "@type": "Organization", name: "Adrexio", url: baseUrl },
            publisher: getPublisherSchema(),
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id": `${baseUrl}/case-studies/${study.id}`,
            },
            articleSection: study.category,
            keywords: `${study.title}, ${study.category}, ${study.technologies.join(", ")}, уеб разработка, case study`,
          },
          getBreadcrumbSchema([
            { name: "Начало", url: baseUrl },
            { name: "Проекти", url: `${baseUrl}/case-studies` },
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
          <h1 className="title-lg">Проектът не е намерен</h1>
          <p className="mt-4 text-muted-foreground">
            Няма такъв проект или вече е махнат от сайта.
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

  const ourResults = study.results.filter((r) => r.kind !== "client");
  const clientResults = study.results.filter((r) => r.kind === "client");
  const servicePath = study.servicePath ?? CASE_STUDY_SERVICE_PATH_DEFAULT;

  const renderMetrics = (items: CaseStudyResult[]) => (
    <dl
      className={`mt-5 grid grid-cols-1 border-l border-t border-border ${
        items.length >= 3 ? "sm:grid-cols-3" : items.length === 2 ? "sm:grid-cols-2" : "sm:max-w-sm"
      }`}
    >
      {items.map((result) => (
        <div key={result.label} className="border-b border-r border-border p-5 md:p-7">
          <dt className="text-[2.25rem] font-black leading-none tracking-[-0.045em] text-foreground md:text-5xl">
            {result.metric}
          </dt>
          <dd className="mt-3 text-sm text-muted-foreground">{result.label}</dd>
        </div>
      ))}
    </dl>
  );

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={getCaseStudyTitle(study)}
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
      <section className="bg-background pb-10 pt-32 md:pt-40">
        <div className="container mx-auto px-6">
          <Reveal immediate>
            <Link
              to="/case-studies"
              className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-4 w-4" />
              Всички проекти
            </Link>
          </Reveal>

          <Reveal immediate delay={0.06}>
            <div className="mt-10 flex flex-wrap items-center gap-3">
              <p className="eyebrow">{study.category}</p>
              {!study.isPublic && (
                <span className="inline-flex items-center gap-1.5 rounded-full border border-border px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                  <Lock className="h-3 w-3" />
                  Вътрешна система
                </span>
              )}
            </div>
            <h1
              className={`${study.title.length > 22 ? "title-page-long" : "title-page"} mt-5 text-balance text-foreground`}
            >
              {study.title}
            </h1>
          </Reveal>

          <Reveal immediate delay={0.12}>
            <div className="mt-10 grid gap-6 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
              <div className="order-2 flex flex-wrap gap-3 lg:order-1">
                {study.isPublic && study.url ? (
                  <Button variant="ink" size="lg" asChild>
                    <a href={study.url} target="_blank" rel="noopener noreferrer">
                      Към сайта
                      <ArrowUpRight />
                    </a>
                  </Button>
                ) : null}
                <Button variant="line" size="lg" asChild>
                  <Link to="/contact">Обсъди проект</Link>
                </Button>
              </div>
              <p className="order-1 max-w-xl text-base leading-relaxed text-muted-foreground md:text-[1.1rem] lg:order-2">
                {study.subtitle}
              </p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Main screenshot, framed in the grey panel the cards use */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <Reveal>
            <div className="rounded-md bg-secondary p-3 md:p-5">
              <img
                src={study.image}
                alt={`${study.title} уебсайт`}
                width={1600}
                height={1000}
                decoding="async"
                className="block h-auto w-full rounded-[0.25rem]"
              />
            </div>
          </Reveal>
        </div>
      </section>

      {/* Results: our numbers only; the client's own figures sit under „За клиента“ */}
      {ourResults.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6 space-y-12">
            {(["measured", "delivered"] as const).map((kind) => {
              const group = ourResults.filter((r) => r.kind === kind);
              if (group.length === 0) return null;
              return (
                <Reveal key={kind}>
                  <p className="eyebrow">{RESULT_KIND_LABEL[kind]}</p>
                  {renderMetrics(group)}
                </Reveal>
              );
            })}
          </div>
        </section>
      )}

      {/* Proof: screenshots behind the numbers above */}
      {study.proof && study.proof.length > 0 && (
        <section className="pb-16 md:pb-24">
          <div className="container mx-auto px-6">
            <Reveal>
              <p className="eyebrow">Проверено в PageSpeed Insights</p>
            </Reveal>
            <div className="mt-5 grid gap-4 md:grid-cols-2">
              {study.proof.map((item, i) => (
                <Reveal key={item.image} delay={i * 0.06}>
                  <figure className="rounded-md bg-secondary p-3">
                    <img
                      src={item.image}
                      alt={item.alt}
                      width={1200}
                      height={934}
                      loading="lazy"
                      decoding="async"
                      className="block h-auto w-full rounded-[0.25rem] bg-white"
                    />
                    <figcaption className="px-1 pb-1 pt-3 text-sm text-muted-foreground">{item.caption}</figcaption>
                  </figure>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* The story, chapter by chapter */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <Chapter label="За клиента">
            <p className="text-lg leading-relaxed text-muted-foreground">{study.overview}</p>
            {clientResults.length > 0 && (
              <div className="mt-8">
                <p className="eyebrow">{RESULT_KIND_LABEL.client}</p>
                {renderMetrics(clientResults)}
              </div>
            )}
          </Chapter>

          <Chapter label={study.challengeTitle ?? "Задачата"}>
            <p className="text-lg leading-relaxed text-muted-foreground">{study.challenge}</p>
          </Chapter>

          <Chapter label={study.solutionTitle ?? "Какво направихме"}>
            <ul className="border-t border-border">
              {study.solution.map((item, i) => (
                <li key={i} className="border-b border-border py-4 leading-relaxed text-muted-foreground">
                  {item}
                </li>
              ))}
            </ul>
          </Chapter>

          {study.detail && (
            <Chapter label={study.detailTitle ?? "Най-сложната част"}>
              <p className="text-lg leading-relaxed text-muted-foreground">{study.detail}</p>
            </Chapter>
          )}

          <Chapter label="С какво е направено">
            <ul className="flex flex-wrap gap-2.5">
              {study.technologies.map((tech) => (
                <li
                  key={tech}
                  className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                >
                  {tech}
                </li>
              ))}
            </ul>
          </Chapter>

          {study.internalNote && (
            <Reveal>
              <div className="flex items-start gap-3 rounded-md bg-secondary p-5 text-sm text-muted-foreground">
                <Lock className="mt-0.5 h-4 w-4 shrink-0 text-foreground" />
                {study.internalNote}
              </div>
            </Reveal>
          )}

          {study.cta && (
            <Reveal>
              <p className="mt-10 border-t border-border pt-10 text-xl font-semibold leading-snug tracking-[-0.02em] text-foreground md:text-2xl">
                {study.cta}{" "}
                <Link
                  to={servicePath}
                  className="underline decoration-border decoration-2 underline-offset-4 transition-colors hover:decoration-foreground"
                >
                  {CASE_STUDY_SERVICE_LINK[servicePath] ?? CASE_STUDY_SERVICE_LINK[CASE_STUDY_SERVICE_PATH_DEFAULT]}
                </Link>
              </p>
            </Reveal>
          )}
        </div>
      </section>

      {/* Previous / next */}
      <section className="pb-16 md:pb-24">
        <div className="container mx-auto px-6">
          <div className="grid border-l border-t border-border sm:grid-cols-2">
            {prevStudy ? (
              <Link
                to={`/case-studies/${prevStudy.id}`}
                className="group flex flex-col gap-6 border-b border-r border-border p-7 transition-colors hover:bg-secondary/60 md:p-9"
              >
                <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                  <ArrowLeft className="h-4 w-4" />
                  Предишен
                </span>
                <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
                  {prevStudy.title}
                </span>
              </Link>
            ) : (
              <div className="hidden border-b border-r border-border sm:block" />
            )}
            {nextStudy ? (
              <Link
                to={`/case-studies/${nextStudy.id}`}
                className="group flex flex-col items-end gap-6 border-b border-r border-border p-7 text-right transition-colors hover:bg-secondary/60 md:p-9"
              >
                <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-muted-foreground">
                  Следващ
                  <ArrowRight className="h-4 w-4" />
                </span>
                <span className="text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-3xl">
                  {nextStudy.title}
                </span>
              </Link>
            ) : (
              <div className="hidden border-b border-r border-border sm:block" />
            )}
          </div>
        </div>
      </section>

      <CTASection />
      <Footer />
    </main>
  );
};

export default CaseStudyDetail;
