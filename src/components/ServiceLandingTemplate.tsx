import { Link } from "react-router-dom";
import { LucideIcon, ArrowUpRight, Phone } from "lucide-react";
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
import CTASection from "@/components/CTASection";
import Reveal from "@/components/editorial/Reveal";
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
  heroCTAText = "Свържи се с нас",
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
    serviceName ? getServiceSchema(serviceName, seoDescription || heroSubtitle, serviceUrl) : null,
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

      <PageIntro
        label={serviceName || "Услуга"}
        title={
          <>
            {heroTitle} {heroHighlight}
          </>
        }
        description={heroSubtitle}
        actions={
          <>
            <Button variant="ink" size="lg" asChild>
              <Link to="/contact">
                {heroCTAText}
                <ArrowUpRight />
              </Link>
            </Button>
            <Button variant="line" size="lg" asChild>
              <a href="tel:+359896173743">
                <Phone />
                +359 896 173 743
              </a>
            </Button>
          </>
        }
        meta={stats}
      />

      {/* Introduction */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title={introTitle} description={introDescription} className="mb-0 md:mb-0" />
        </div>
      </section>

      {showDesignedForSection && <DesignedForSection />}

      {/* Features: hairline grid, three across */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader
            title={featuresTitle}
            description={featuresSubtitle}
            action={
              <Button variant="line" size="default" asChild>
                <Link to="/case-studies">
                  Виж проектите
                  <ArrowUpRight />
                </Link>
              </Button>
            }
          />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {features.map((feature, i) => (
              <Reveal as="li" key={feature.title} delay={(i % 3) * 0.05} className="border-t border-border pb-10 pt-6">
                <span className="text-xs font-semibold tabular-nums text-muted-foreground">{num(i)}</span>
                <h3 className="mt-5 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {feature.title}
                </h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">
                  {feature.description}
                </p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Benefits: the ink band */}
      <section className="layer-dark py-20 md:py-28">
        <div className="container mx-auto px-6">
          <SectionHeader bare title={benefitsTitle} description={benefitsSubtitle} />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-4">
            {benefits.map((benefit, i) => (
              <Reveal as="li" key={benefit.title} delay={(i % 4) * 0.05} className="border-t border-border pb-10 pt-6">
                <benefit.icon className="h-6 w-6 text-primary" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">
                  {benefit.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{benefit.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* Process: big grey numerals in columns, like the homepage */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title={processTitle} description={processSubtitle} />
          <ol
            className={`grid gap-x-8 sm:grid-cols-2 ${
              steps.length === 5 ? "lg:grid-cols-5" : steps.length === 3 ? "lg:grid-cols-3" : "lg:grid-cols-4"
            }`}
          >
            {steps.map((step, i) => (
              <Reveal as="li" key={step.title} delay={i * 0.05} className="border-t border-border pb-10 pt-6">
                <span className="block text-6xl font-black leading-none tracking-[-0.05em] text-foreground/15">
                  {step.number.padStart(2, "0")}
                </span>
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">{step.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{step.description}</p>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      {/* Technologies: outlined pills */}
      {technologies && technologies.length > 0 && (
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title={technologiesTitle || "Технологии."} />
            <Reveal>
              <ul className="flex flex-wrap gap-2.5">
                {technologies.map((tech) => (
                  <li
                    key={tech.name}
                    className="rounded-full border border-border px-5 py-2.5 text-sm font-medium text-foreground"
                  >
                    {tech.name}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </section>
      )}

      {customSectionAfterTechnologies}

      {/* Use cases: numbered rows */}
      {useCases.length > 0 && (
        <section className="bg-background py-16 md:py-24">
          <div className="container mx-auto px-6">
            <SectionHeader title={useCasesTitle} description={useCasesSubtitle} />
            <div className="border-t border-border">
              {useCases.map((useCase, i) => (
                <Reveal key={useCase.title} delay={(i % 3) * 0.05}>
                  <div className="grid gap-3 border-b border-border py-7 md:grid-cols-[4rem_minmax(0,1fr)_minmax(0,1.2fr)] md:gap-8">
                    <span className="text-xs font-semibold tabular-nums text-muted-foreground md:pt-2">{num(i)}</span>
                    <h3 className="text-xl font-semibold tracking-[-0.03em] text-foreground md:text-2xl">
                      {useCase.title}
                    </h3>
                    <p className="text-[0.95rem] leading-relaxed text-muted-foreground md:pt-1">
                      {useCase.description}
                    </p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Why choose us: hairline grid */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title={whyChooseUsTitle} description={whyChooseUsSubtitle} />
          <ul className="grid gap-x-8 sm:grid-cols-2 lg:grid-cols-3">
            {whyChooseUs.map((item, i) => (
              <Reveal as="li" key={item.title} delay={(i % 3) * 0.05} className="border-t border-border pb-10 pt-6">
                <item.icon className="h-6 w-6 text-foreground" strokeWidth={1.75} aria-hidden />
                <h3 className="mt-8 text-xl font-semibold tracking-[-0.03em] text-foreground">{item.title}</h3>
                <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{item.description}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* FAQ: hairline accordion */}
      <section className="bg-background py-16 md:py-24">
        <div className="container mx-auto px-6">
          <SectionHeader title={faqTitle} />
          <Accordion type="single" collapsible className="border-t border-border">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`faq-${index}`} className="border-b border-border">
                <AccordionTrigger className="py-6 text-left text-lg font-semibold tracking-[-0.02em] hover:no-underline md:text-xl">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="max-w-3xl pb-6 text-base leading-relaxed text-muted-foreground">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {customSectionBeforeCTA}

      <CTASection
        lead={ctaTitle}
        text={ctaSubtitle}
        secondary={{ label: "+359 896 173 743", href: "tel:+359896173743" }}
      />

      {/* Custom Section (optional) */}
      {customSection}

      <Footer />
    </main>
  );
};

export default ServiceLandingTemplate;
