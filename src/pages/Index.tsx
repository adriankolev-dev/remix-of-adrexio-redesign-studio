import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import WorkSection from "@/components/WorkSection";
import ServicesSection from "@/components/ServicesSection";
import AutomationSection from "@/components/AutomationSection";
import StudioSection from "@/components/StudioSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
// Hidden for now, kept for later use.
// import TestimonialsSection from "@/components/TestimonialsSection";
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
        title="Adrexio — уеб студио в София за сайтове и онлайн магазини"
        description="Уеб студио в София от 2019 г. Сайтове от €599, онлайн магазини от €1.299, SEO и AI интеграции. Плащане на два етапа, 5,0 в Google."
        keywords="уеб разработка, уеб дизайн, онлайн магазини, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, уебсайт София, уеб студио България, разработка на сайтове"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <StudioSection />
      <WorkSection />
      <ServicesSection />
      <AutomationSection />
      <ProblemSolutionSection />
      <ProcessSection />
      <WhyUsSection />
      {/* <TestimonialsSection /> */}
      <GoogleReviewsSection />
      <PricingTeaser />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
