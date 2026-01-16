import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, ExternalLink, CheckCircle, Target, Lightbulb, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import screenshots
import bodyaestheticsImg from "@/assets/case-studies/bodyaesthetics.png";
import booomImg from "@/assets/case-studies/booom.png";
import athleticiqImg from "@/assets/case-studies/athleticiq.png";
import supercreditImg from "@/assets/case-studies/supercredit.png";

const caseStudies = [
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    subtitle: "Premium Laser Center for Face & Body Treatments",
    category: "Healthcare & Beauty",
    url: "https://bodyaesthetics.bg/",
    isPublic: true,
    image: bodyaestheticsImg,
    overview: "Body Aesthetics is a leading medical cosmetic laser center in Bulgaria, offering high-class non-invasive aesthetic procedures. Since 2018, they've built trust with thousands of clients through expert care and cutting-edge technology.",
    challenge: "The clinic needed a modern, trustworthy website that would showcase their premium services, establish credibility in the competitive beauty industry, and enable seamless online booking. Their previous site failed to convey the sophistication and professionalism of their services.",
    solution: [
      "Designed an elegant, luxurious website reflecting the premium nature of their services",
      "Implemented online booking system integrated with their schedule",
      "Created comprehensive service pages with detailed treatment information",
      "Built an e-commerce store for gift vouchers and products",
      "Optimized for SEO to capture local search traffic"
    ],
    results: [
      { metric: "+185%", label: "Online Bookings" },
      { metric: "4.9★", label: "Google Rating" },
      { metric: "+120%", label: "Organic Traffic" }
    ],
    technologies: ["WordPress", "WooCommerce", "Custom Booking", "SEO"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    accentColor: "text-amber-500"
  },
  {
    id: "booom-bg",
    title: "Booom.bg",
    subtitle: "E-commerce Platform with Fast Delivery",
    category: "E-commerce & Retail",
    url: "https://booom.bg/",
    isPublic: true,
    image: booomImg,
    overview: "Booom.bg is a dynamic Bulgarian e-commerce platform offering a diverse range of products with a focus on exceptional customer service, including payment on delivery and a 14-day return policy.",
    challenge: "The client needed a reliable, high-performance online store that could handle growing product inventory, provide excellent user experience, and build customer trust through transparent policies and fast delivery times.",
    solution: [
      "Built a fully-featured WooCommerce store with intuitive navigation",
      "Implemented product search and filtering for easy browsing",
      "Created trust-building elements highlighting delivery and return policies",
      "Optimized checkout flow for maximum conversion",
      "Integrated courier service tracking and notifications"
    ],
    results: [
      { metric: "+210%", label: "Sales Growth" },
      { metric: "3 days", label: "Avg. Delivery" },
      { metric: "98%", label: "Satisfaction" }
    ],
    technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Courier API"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-500"
  },
  {
    id: "athleticiq",
    title: "Athletic IQ",
    subtitle: "Youth Sports Training App",
    category: "Sports Tech & Mobile Apps",
    url: "https://athleticiqapp.com/",
    isPublic: true,
    image: athleticiqImg,
    overview: "Athletic IQ is an innovative fitness app designed to transform how young athletes train. With 4,500+ active youth athletes and 30+ game-based training programs, it makes fitness feel like a game rather than a grind.",
    challenge: "Athletic IQ needed a compelling landing page that would resonate with both parents and young athletes, clearly communicate the app's unique gamified approach to fitness, and drive app downloads in the competitive UK youth sports market.",
    solution: [
      "Designed a dynamic, energetic website with bold visuals and animations",
      "Created compelling messaging targeting the UK youth market (8.5M potential users)",
      "Implemented App Store and Google Play integration for seamless downloads",
      "Built coach login portal and sign-up flows",
      "Optimized for mobile-first experience"
    ],
    results: [
      { metric: "4.5K+", label: "Active Athletes" },
      { metric: "35 min", label: "Avg. Session" },
      { metric: "+280%", label: "Downloads" }
    ],
    technologies: ["WordPress", "Custom Design", "App Integration", "Analytics"],
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-500"
  },
  {
    id: "super-credit",
    title: "SuperCredit",
    subtitle: "Internal Credit Management System",
    category: "Finance & FinTech",
    url: null,
    isPublic: false,
    image: supercreditImg,
    overview: "SuperCredit is a leading Bulgarian credit brokerage company helping clients find the best mortgage, consumer, and investment loan offers. With 2,600+ served clients and 900M+ BGN in processed loans, they're a trusted name in financial services.",
    challenge: "SuperCredit required an internal system to streamline their loan processing workflows, manage client data securely, track application status, and improve communication between team members. The existing manual processes were slowing down operations.",
    solution: [
      "Developed a secure, employee-only internal management platform",
      "Created comprehensive client database with advanced search and filtering",
      "Built loan application tracking with status updates and notifications",
      "Implemented role-based access control for data security",
      "Integrated reporting dashboard for performance analytics"
    ],
    results: [
      { metric: "+65%", label: "Processing Speed" },
      { metric: "2600+", label: "Clients Managed" },
      { metric: "100%", label: "Data Security" }
    ],
    technologies: ["React", "TypeScript", "Supabase", "Role-Based Access"],
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-500",
    internalNote: "This is an internal system accessible only to SuperCredit employees."
  }
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Our Portfolio
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Real Projects, <span className="text-gradient">Real Results</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Explore how we've helped businesses across different industries achieve digital success through innovative solutions and strategic thinking.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Case Study Number */}
                <div className="absolute -left-4 md:-left-12 top-0 text-8xl font-display font-bold text-primary/10 select-none hidden lg:block">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="border-gradient rounded-2xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${study.gradient}`}>
                    {/* Header */}
                    <div className="p-8 md:p-12 pb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-sm font-medium uppercase tracking-wider ${study.accentColor}`}>
                          {study.category}
                        </span>
                        {!study.isPublic && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            <Lock className="w-3 h-3" />
                            Internal System
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
                        {study.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Screenshot */}
                    <div className="p-8 md:p-12 pt-8">
                      <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
                        <img
                          src={study.image}
                          alt={`${study.title} website screenshot`}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-8 md:p-12 pt-0 grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Overview */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <Target className={`w-5 h-5 ${study.accentColor}`} />
                            Overview
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.overview}
                          </p>
                        </div>

                        {/* Challenge */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <Lightbulb className={`w-5 h-5 ${study.accentColor}`} />
                            The Challenge
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <CheckCircle className={`w-5 h-5 ${study.accentColor}`} />
                            Our Solution
                          </h3>
                          <ul className="space-y-2">
                            {study.solution.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <ArrowRight className={`w-4 h-4 mt-1 flex-shrink-0 ${study.accentColor}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* Results */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-4">
                            <BarChart3 className={`w-5 h-5 ${study.accentColor}`} />
                            Key Results
                          </h3>
                          <div className="grid grid-cols-3 gap-4">
                            {study.results.map((result, i) => (
                              <div key={i} className="text-center p-4 rounded-xl bg-background/50 border border-border">
                                <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                                  {result.metric}
                                </div>
                                <div className="text-xs text-muted-foreground">
                                  {result.label}
                                </div>
                              </div>
                            ))}
                          </div>
                        </div>

                        {/* Technologies */}
                        <div>
                          <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                            Technologies Used
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full bg-background/50 text-foreground text-sm border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Internal Note for SuperCredit */}
                        {study.internalNote && (
                          <div className="p-4 rounded-xl bg-muted/50 border border-border">
                            <p className="text-sm text-muted-foreground flex items-start gap-2">
                              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {study.internalNote}
                            </p>
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-4">
                          {study.isPublic && study.url ? (
                            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                              <a href={study.url} target="_blank" rel="noopener noreferrer">
                                Visit Live Project
                                <ExternalLink size={18} />
                              </a>
                            </Button>
                          ) : (
                            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                              <Link to="/contact">
                                Discuss Your Project
                                <ArrowRight size={18} />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Our Track Record of <span className="text-gradient">Excellence</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Numbers that reflect our commitment to delivering exceptional results for every client.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "30+", label: "Happy Clients" },
              { icon: ExternalLink, value: "50+", label: "Projects Delivered" },
              { icon: TrendingUp, value: "+150%", label: "Average Growth" },
              { icon: Clock, value: "< 2s", label: "Load Time" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Ready to Become Our Next Success Story?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Let's discuss how we can help your business achieve similar results. Get in touch for a free consultation.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Start Your Project
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Explore Our Services
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudies;
