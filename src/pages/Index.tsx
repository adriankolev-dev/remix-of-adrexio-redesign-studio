import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import GoogleReviewsSection from "@/components/GoogleReviewsSection";
import PricingTeaser from "@/components/pricing/PricingTeaser";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getLocalBusinessSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  // LocalBusiness is an Organization subtype and shares ORG_ID with it, so
  // emitting both put two conflicting definitions of the same entity in one
  // graph. The local variant carries everything the plain one did plus address,
  // phone and areaServed, so it is the one that stays.
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [getLocalBusinessSchema(), getWebSiteSchema()],
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Изработка на сайт и онлайн магазин в София | Adrexio"
        description="Уеб студио в София. Изработка на сайтове и онлайн магазини от нулата — без шаблони. 24 реализирани проекта. Вижте цени, срокове и реални резултати."
        keywords="уеб разработка, уеб дизайн, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, уебсайт София, уеб студио България, разработка на сайтове, мобилни приложения iOS Android"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <WorkSection />
      <ResultsSection />
      <ProblemSolutionSection />
      <ProcessSection />
      <ServicesSection />
      <WhyUsSection />
      <TestimonialsSection />
      <GoogleReviewsSection />
      <PricingTeaser />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
