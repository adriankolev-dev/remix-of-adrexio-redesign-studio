import { Link } from "react-router-dom";
import { LucideIcon, ArrowRight, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import DesignedForSection from "@/components/DesignedForSection";
import PageIntro from "@/components/editorial/PageIntro";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import SectionHeader from "@/components/editorial/SectionHeader";
import { useLocation } from "react-router-dom";
import { getServiceSchema, getFAQSchema, getBreadcrumbSchema } from "@/lib/structuredData";

interface ServiceFeature {
  title: string;
  description: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

interface Benefit {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Technology {
  name: string;
  icon?: string;
}

interface UseCase {
  title: string;
  description: string;
}

interface FAQ {
  question: string;
  answer: string;
}

interface WhyChooseUs {
  icon: LucideIcon;
  title: string;
  description: string;
}

export interface ServiceLandingProps {
  // SEO
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  serviceName?: string;

  // Hero section
  heroTitle: string;
  heroHighlight: string;
  heroSubtitle: string;
  heroCTAText?: string;
  /** Optional visual accent shown beside the hero copy on large screens. */
  heroAside?: React.ReactNode;

  // Stats
  stats: { value: string; label: string }[];

  // Introduction section
  introTitle: string;
  introDescription: string;
  introImage?: string;

  // What you get / Features section
  featuresTitle: string;
  featuresSubtitle: string;
  features: ServiceFeature[];

  // Benefits section
  benefitsTitle: string;
  benefitsSubtitle: string;
  benefits: Benefit[];

  // Process section
  processTitle: string;
  processSubtitle: string;
  steps: ProcessStep[];

  // Technologies section (optional)
  technologiesTitle?: string;
  technologies?: Technology[];

  // Use cases section
  useCasesTitle: string;
  useCasesSubtitle: string;
  useCases: UseCase[];

  // Why choose us section
  whyChooseUsTitle: string;
  whyChooseUsSubtitle: string;
  whyChooseUs: WhyChooseUs[];

  // FAQ section
  faqTitle: string;
  faqs: FAQ[];

  // CTA section
  ctaTitle: string;
  ctaSubtitle: string;

  // Optional: show "Designed For" / Проектиран за section (e.g. Web Development only)
  showDesignedForSection?: boolean;

  // Optional custom section before CTA
  customSectionBeforeCTA?: React.ReactNode;

  // Optional section between Technologies and Use Cases / Why Choose Us (e.g. 3D separator)
  customSectionAfterTechnologies?: React.ReactNode;

  // Optional custom section before Footer
  customSection?: React.ReactNode;
}

const num = (i: number) => String(i + 1).padStart(2, "0");

const ServiceLandingTemplate = ({
  seoTitle,
  seoDescription,
  seoKeywords,
  serviceName,
  heroTitle,
  heroHighlight,
  heroSubtitle,
  heroCTAText = "Започни своя проект",
  heroAside,
  stats,
  introTitle,
  introDescription,
  featuresTitle,
  featuresSubtitle,
  features,
  benefitsTitle,
  benefitsSubtitle,
  benefits,
  processTitle,
  processSubtitle,
  steps,
  technologiesTitle,
  technologies,
  useCasesTitle,
  useCasesSubtitle,
  useCases,
  whyChooseUsTitle,
  whyChooseUsSubtitle,
  whyChooseUs,
  faqTitle,
  faqs,
  ctaTitle,
  ctaSubtitle,
  showDesignedForSection = false,
  customSectionBeforeCTA,
  customSectionAfterTechnologies,
  customSection,
}: ServiceLandingProps) => {
  const location = useLocation();
  const serviceUrl = `https://www.adrexio.com${location.pathname.replace(/\/$/, "")}`;

  const structuredData = [
    serviceName ? getServiceSchema(serviceName, seoDescription || heroSubtitle) : null,
    faqs && faqs.length > 0 ? getFAQSchema(faqs) : null,
    getBreadcrumbSchema([
      { name: "Начало", url: "https://www.adrexio.com/" },
      { name: "Услуги", url: "https://www.adrexio.com/services" },
      { name: serviceName || heroTitle, url: serviceUrl },
    ]),
  ].filter(Boolean);

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title={seoTitle}
        description={seoDescription}
        keywords={seoKeywords}
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero — shared editorial intro */}
      <PageIntro
        index="01"
        label={serviceName || "Услуга"}
        title={
          <>
            {heroTitle} <span className="accent-mark">{heroHighlight}</span>
          </>
        }
        description={heroSubtitle}
        actions={
          <>
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                {heroCTAText}
                <ArrowRight size={18} />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <a href="tel:+359896173743">
                <Phone size={18} />
                +359 896 173 743
              </a>
            </Button>
          </>
        }
        meta={stats}
        aside={heroAside}
      />

      {/* Introduction — two-column editorial statement */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-20">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <SectionEyebrow label="Какво получавате" index="02" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                  {introTitle}
                </h2>
              </Reveal>
            </div>
            <Reveal delay={0.12} className="lg:pt-2">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl md:leading-relaxed">
                {introDescription}
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      {/* Designed For — only when enabled */}
      {showDesignedForSection && <DesignedForSection />}

      {/* Features — full-width numbered index, hairlines, no cards */}
      <section className="relative bg-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="03" label={featuresSubtitle} title={featuresTitle} />

          <div className="border-t border-border">
            {features.map((feature, i) => (
              <Reveal key={feature.title} delay={(i % 3) * 0.05}>
                <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-6 md:gap-8 md:py-7">
                  <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">{num(i)}</span>
                  <div>
                    <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                      {feature.title}
                    </h3>
                    <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.16} className="mt-12">
            <Button variant="line" size="lg" asChild>
              <Link to="/case-studies">
                Разгледай портфолиото ни
                <ArrowRight size={18} />
              </Link>
            </Button>
          </Reveal>
        </div>
      </section>

      {/* Benefits — dark layer band with big numbered outcomes */}
      <section className="layer-dark relative overflow-hidden py-24 md:py-32">
        <div className="canvas-grid absolute inset-0 opacity-[0.06]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6">
          <SectionHeader index="04" label={benefitsSubtitle} title={benefitsTitle} />

          <div className="grid gap-x-10 border-t border-border sm:grid-cols-2">
            {benefits.map((benefit, i) => (
              <Reveal key={benefit.title} delay={(i % 2) * 0.06}>
                <div className="flex gap-5 border-b border-border py-8 md:py-9">
                  <benefit.icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                  <div>
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {benefit.title}
                    </h3>
                    <p className="mt-2 max-w-md text-base leading-relaxed text-muted-foreground">
                      {benefit.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Process — vertical timeline with oversized ghost numbers */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="05" label={processSubtitle} title={processTitle} />

          <div className="border-t border-border">
            {steps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.04}>
                <div className="grid grid-cols-[auto_1fr] items-start gap-5 border-b border-border py-8 md:gap-10 md:py-10">
                  <span className="font-display text-4xl font-bold leading-none text-foreground/10 md:text-6xl">
                    {step.number.padStart(2, "0")}
                  </span>
                  <div className="pt-1">
                    <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                      {step.title}
                    </h3>
                    <p className="mt-2 max-w-2xl text-base leading-relaxed text-muted-foreground">
                      {step.description}
                    </p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Technologies — mono tag row on a hairline */}
      {technologies && technologies.length > 0 && (
        <section className="relative bg-secondary/30 py-24 md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeader
              index="06"
              label="Технологии"
              title={technologiesTitle || "Технологии, които използваме"}
            />
            <div className="flex flex-wrap gap-x-8 gap-y-4 border-t border-border pt-10">
              {technologies.map((tech, i) => (
                <Reveal key={tech.name} delay={(i % 6) * 0.04}>
                  <span className="font-mono-meta text-sm uppercase tracking-[0.14em] text-foreground/80">
                    <span className="mr-2 text-primary">/</span>
                    {tech.name}
                  </span>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Optional section after technologies (e.g. 3D separator) */}
      {customSectionAfterTechnologies}

      {/* Use Cases — numbered index (only when provided) */}
      {useCases.length > 0 && (
        <section className="relative bg-background py-24 md:py-32">
          <div className="container mx-auto px-6">
            <SectionHeader index="07" label={useCasesSubtitle} title={useCasesTitle} />
            <div className="border-t border-border">
              {useCases.map((useCase, i) => (
                <Reveal key={useCase.title} delay={(i % 3) * 0.05}>
                  <div className="grid grid-cols-[auto_1fr] gap-5 border-b border-border py-6 md:gap-8 md:py-7">
                    <span className="font-mono-meta pt-1 text-[0.7rem] text-primary">{num(i)}</span>
                    <div>
                      <h3 className="text-lg font-semibold tracking-tight text-foreground md:text-xl">
                        {useCase.title}
                      </h3>
                      <p className="mt-1.5 max-w-2xl text-sm leading-relaxed text-muted-foreground md:text-base">
                        {useCase.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why Choose Us — sticky heading + numbered manifest */}
      <section className="relative bg-secondary/30 py-24 md:py-32">
        <div className="container mx-auto px-6">
          <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:gap-24">
            <div className="lg:sticky lg:top-32 lg:self-start">
              <Reveal>
                <SectionEyebrow label={whyChooseUsSubtitle} index="08" />
              </Reveal>
              <Reveal delay={0.08}>
                <h2 className="font-display mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
                  {whyChooseUsTitle}
                </h2>
              </Reveal>
            </div>

            <div className="border-t border-border">
              {whyChooseUs.map((item, i) => (
                <Reveal key={item.title} delay={i * 0.05}>
                  <div className="flex gap-5 border-b border-border py-7 md:py-8">
                    <item.icon className="mt-1 h-6 w-6 shrink-0 text-primary" strokeWidth={1.75} />
                    <div>
                      <h3 className="text-xl font-semibold tracking-tight text-foreground md:text-2xl">
                        {item.title}
                      </h3>
                      <p className="mt-2 max-w-lg text-base leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ — hairline accordion */}
      <section className="relative bg-background py-24 md:py-32">
        <div className="container mx-auto px-6">
          <SectionHeader index="09" label="FAQ" title={faqTitle} />
          <div className="mx-auto max-w-3xl border-t border-border">
            <Accordion type="single" collapsible>
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border">
                  <AccordionTrigger className="py-6 text-left font-display text-base font-semibold hover:text-primary hover:no-underline md:text-lg">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="pb-6 text-base leading-relaxed text-muted-foreground">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Custom Section Before CTA (optional — e.g. pricing / projects) */}
      {customSectionBeforeCTA}

      {/* CTA — dark layer band */}
      <section className="layer-dark relative overflow-hidden py-28 md:py-36">
        <div className="canvas-grid absolute inset-0 opacity-[0.07]" aria-hidden />
        <div className="container relative z-10 mx-auto px-6 text-center">
          <Reveal>
            <SectionEyebrow label="Следваща стъпка" index="10" className="justify-center" />
          </Reveal>
          <Reveal delay={0.08}>
            <h2 className="font-display text-display-sm mx-auto mt-8 max-w-3xl font-bold text-foreground">
              {ctaTitle}
            </h2>
          </Reveal>
          <Reveal delay={0.16}>
            <p className="mx-auto mt-6 max-w-xl text-lg text-muted-foreground">{ctaSubtitle}</p>
          </Reveal>
          <Reveal delay={0.24}>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button variant="accent" size="xl" asChild>
                <Link to="/contact">
                  Започни сега
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button
                variant="line"
                size="xl"
                asChild
                className="border-foreground/25 text-foreground hover:border-foreground/50"
              >
                <a href="tel:+359896173743">
                  <Phone size={18} />
                  +359 896 173 743
                </a>
              </Button>
            </div>
          </Reveal>
        </div>
      </section>

      {/* Custom Section (optional) */}
      {customSection}

      <Footer />
    </main>
  );
};

export default ServiceLandingTemplate;
