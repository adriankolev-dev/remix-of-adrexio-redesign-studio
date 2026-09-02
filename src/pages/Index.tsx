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
import {
  getLocalBusinessSchema,
  getOrganizationSchema,
  getWebSiteSchema,
} from "@/lib/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
      getLocalBusinessSchema(),
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Уебсайтове от нулата, не от шаблон | Adrexio"
        description="Уеб студио в София. Изграждаме сайтове и магазини от нулата — без шаблони. Дизайн, който се помни, и структура, която носи запитвания."
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
