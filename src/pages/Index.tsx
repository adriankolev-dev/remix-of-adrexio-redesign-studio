import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ClientLogos from "@/components/ClientLogos";
import ServicesSection from "@/components/ServicesSection";
import ResultsSection from "@/components/ResultsSection";
import ProblemSolutionSection from "@/components/ProblemSolutionSection";
import ProcessSection from "@/components/ProcessSection";
import WhyUsSection from "@/components/WhyUsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import PricingSection from "@/components/PricingSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getOrganizationSchema, getWebSiteSchema } from "@/lib/structuredData";

const Index = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      getOrganizationSchema(),
      getWebSiteSchema(),
    ],
  };

  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="Adrexio - Модерни уебсайтове и дигитални решения | София, България"
        description="Уеб разработка, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация и дигитален маркетинг в София. Бързи и оптимизирани дигитални решения за вашия бизнес."
        keywords="уеб разработка, уеб дизайн, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, уебсайт София, уеб студио България, разработка на сайтове, мобилни приложения iOS Android"
        structuredData={structuredData}
      />
      <Navbar />
      <Hero />
      <ClientLogos />
      <ServicesSection />
      <ProblemSolutionSection />
      <ResultsSection />
      <ProcessSection />
      <WhyUsSection />
      <TestimonialsSection />
      <PricingSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
