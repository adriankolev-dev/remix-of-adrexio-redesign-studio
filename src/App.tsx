import { lazy, Suspense } from "react";
import useSmoothScroll from "@/hooks/use-smooth-scroll";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/components/ThemeProvider";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgress from "@/components/ScrollProgress";
import BackToTop from "@/components/BackToTop";
import FloatingContact from "@/components/FloatingContact";
import CookieConsent from "@/components/CookieConsent";
import RouteFallback from "@/components/RouteFallback";
import Index from "./pages/Index";

const Services = lazy(() => import("./pages/Services"));
const ServicesDemo = lazy(() => import("./pages/ServicesDemo"));
const Pricing = lazy(() => import("./pages/Pricing"));
const About = lazy(() => import("./pages/About"));
const CaseStudies = lazy(() => import("./pages/CaseStudies"));
const CaseStudyDetail = lazy(() => import("./pages/CaseStudyDetail"));
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));
const Contact = lazy(() => import("./pages/Contact"));
const ProjectInquiry = lazy(() => import("./pages/ProjectInquiry"));
const Privacy = lazy(() => import("./pages/Privacy"));
const Terms = lazy(() => import("./pages/Terms"));
const Affiliate = lazy(() => import("./pages/Affiliate"));
const NotFound = lazy(() => import("./pages/NotFound"));
const WebDevelopment = lazy(() => import("./pages/services/WebDevelopment"));
const AIImplementation = lazy(() => import("./pages/services/AIImplementation"));
const MobileApps = lazy(() => import("./pages/services/MobileApps"));
const UIUXDesign = lazy(() => import("./pages/services/UIUXDesign"));
const SEO = lazy(() => import("./pages/services/SEO"));
const DigitalMarketing = lazy(() => import("./pages/services/DigitalMarketing"));
const TechnicalSupport = lazy(() => import("./pages/services/TechnicalSupport"));

const queryClient = new QueryClient();

const App = () => {
  useSmoothScroll();

  return (
  <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <ScrollProgress />
          <ScrollToTop />
          <BackToTop />
          <FloatingContact />
          <Suspense fallback={<RouteFallback />}>
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
              <Route path="/blog" element={<Blog />} />
              <Route path="/blog/:slug" element={<BlogPost />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/contacts" element={<Contact />} />
              <Route path="/project-inquiry" element={<ProjectInquiry />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              <Route path="/affiliate" element={<Affiliate />} />

              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Suspense>
          <CookieConsent />
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </ThemeProvider>
  );
};

export default App;
