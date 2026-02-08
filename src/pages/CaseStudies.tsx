import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import MobileAppsSection from "@/components/case-studies/MobileAppsSection";
import { caseStudies, getCaseStudiesByCategory } from "@/data/caseStudies";

const CaseStudies = () => {
  const [activeCategory, setActiveCategory] = useState("Всички");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredStudies = useMemo(() => {
    let result = getCaseStudiesByCategory(activeCategory);
    
    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (study) =>
          study.title.toLowerCase().includes(query) ||
          study.subtitle.toLowerCase().includes(query) ||
          study.category.toLowerCase().includes(query) ||
          study.technologies.some((tech) => tech.toLowerCase().includes(query))
      );
    }
    
    return result;
  }, [activeCategory, searchQuery]);

  const isFiltering = activeCategory !== "Всички" || searchQuery.trim();

  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        {/* Animated background gradients */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl animate-pulse delay-700" />
        
        {/* Grid pattern overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(99,102,241,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(99,102,241,0.03)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <motion.span 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block"
            >
              Нашето портфолио
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-4xl md:text-6xl lg:text-7xl font-display font-bold mb-6"
            >
              Реални проекти,{" "}
              <span className="text-gradient inline-block">
                реални резултати
              </span>
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto leading-relaxed"
            >
              Разгледайте как помогнахме на бизнеси от различни индустрии да постигнат дигитален успех чрез иновативни решения и стратегическо мислене.
            </motion.p>
          </motion.div>

          {/* Filters */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <CaseStudyFilters
              activeCategory={activeCategory}
              onCategoryChange={setActiveCategory}
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
            />
          </motion.div>
        </div>
      </section>

      {/* All Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          {isFiltering && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                {activeCategory === "Всички" ? "Резултати от търсене" : activeCategory}
              </h2>
              <p className="text-muted-foreground text-lg">
                {filteredStudies.length} {filteredStudies.length === 1 ? "проект" : "проекта"}
              </p>
            </motion.div>
          )}

          {!isFiltering && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-12"
            >
              <h2 className="text-2xl md:text-3xl lg:text-4xl font-display font-bold mb-3">
                Всички <span className="text-gradient">проекти</span>
              </h2>
              <p className="text-muted-foreground text-lg">
                Пълното ни портфолио от завършени проекти
              </p>
            </motion.div>
          )}

          {filteredStudies.length > 0 ? (
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5 lg:gap-6 auto-rows-[200px] md:auto-rows-[240px] lg:auto-rows-[280px]" style={{ gridAutoFlow: 'dense' }}>
              {filteredStudies.map((study, index) => {
                // agma.bg pattern: Alternating large and small cards
                // Large cards every 5th position for balanced distribution
                const isFeatured = index % 5 === 0;
                
                return (
                  <div
                    key={study.id}
                    className={
                      isFeatured 
                        ? "col-span-2 row-span-2" 
                        : "col-span-1 row-span-1"
                    }
                  >
                    <CaseStudyCard 
                      study={study} 
                      index={index}
                      variant={isFeatured ? "featured" : "default"}
                    />
                  </div>
                );
              })}
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16"
            >
              <p className="text-muted-foreground text-lg mb-4">
                Няма намерени проекти за "{searchQuery}"
              </p>
              <Button
                variant="outline"
                onClick={() => {
                  setSearchQuery("");
                  setActiveCategory("Всички");
                }}
              >
                Изчисти филтрите
              </Button>
            </motion.div>
          )}
        </div>
      </section>

      {/* Mobile Apps Section */}
      {!isFiltering && <MobileAppsSection />}

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
              Нашата история на <span className="text-gradient">успеха</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Числа, които отразяват нашия ангажимент да доставяме изключителни резултати за всеки клиент.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "30+", label: "Доволни клиенти" },
              { icon: ExternalLink, value: "50+", label: "Завършени проекта" },
              { icon: TrendingUp, value: "+150%", label: "Среден растеж" },
              { icon: Clock, value: "< 2сек", label: "Време за зареждане" }
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
              Готови ли сте да станете следващата ни история на успеха?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Нека обсъдим как можем да помогнем на вашия бизнес да постигне подобни резултати. Свържете се с нас за безплатна консултация.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Започнете проект
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Разгледайте услугите ни
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
