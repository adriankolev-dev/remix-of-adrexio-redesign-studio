import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import CookieConsent from "@/components/CookieConsent";
import Index from "./pages/Index";
import Services from "./pages/Services";
import ServicesDemo from "./pages/ServicesDemo";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import CaseStudies from "./pages/CaseStudies";
import CaseStudyDetail from "./pages/CaseStudyDetail";
import Contact from "./pages/Contact";
import ProjectInquiry from "./pages/ProjectInquiry";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Affiliate from "./pages/Affiliate";
import NotFound from "./pages/NotFound";

// Service landing pages
import WebDevelopment from "./pages/services/WebDevelopment";
import AIImplementation from "./pages/services/AIImplementation";
import MobileApps from "./pages/services/MobileApps";
import UIUXDesign from "./pages/services/UIUXDesign";
import SEO from "./pages/services/SEO";
import DigitalMarketing from "./pages/services/DigitalMarketing";
import TechnicalSupport from "./pages/services/TechnicalSupport";

const queryClient = new QueryClient();

const App = () => (
  <ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <ScrollToTop />
          <BackToTop />
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/services" element={<Services />} />
            <Route path="/services-demo" element={<ServicesDemo />} />
            <Route path="/services/web-development" element={<WebDevelopment />} />
            <Route path="/services/ai-implementation" element={<AIImplementation />} />
            <Route path="/services/mobile-apps" element={<MobileApps />} />
            <Route path="/services/ui-ux-design" element={<UIUXDesign />} />
            <Route path="/services/seo" element={<SEO />} />
            <Route path="/services/digital-marketing" element={<DigitalMarketing />} />
            <Route path="/services/technical-support" element={<TechnicalSupport />} />
            <Route path="/pricing" element={<Pricing />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies" element={<CaseStudies />} />
            <Route path="/case-studies/:id" element={<CaseStudyDetail />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/contacts" element={<Contact />} />
            <Route path="/project-inquiry" element={<ProjectInquiry />} />
            <Route path="/privacy" element={<Privacy />} />
            <Route path="/terms" element={<Terms />} />
            <Route path="/affiliate" element={<Affiliate />} />
            
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
);

export default App;
