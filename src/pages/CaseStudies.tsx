import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CaseStudyCard from "@/components/case-studies/CaseStudyCard";
import CaseStudyFilters from "@/components/case-studies/CaseStudyFilters";
import FeaturedCaseStudies from "@/components/case-studies/FeaturedCaseStudies";
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

  // Hide featured section when filtering
  const showFeatured = activeCategory === "Всички" && !searchQuery.trim();

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
            className="text-center mb-12"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Нашето портфолио
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Реални проекти, <span className="text-gradient">реални резултати</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Разгледайте как помогнахме на бизнеси от различни индустрии да постигнат дигитален успех чрез иновативни решения и стратегическо мислене.
            </p>
          </motion.div>

          {/* Filters */}
          <CaseStudyFilters
            activeCategory={activeCategory}
            onCategoryChange={setActiveCategory}
            searchQuery={searchQuery}
            onSearchChange={setSearchQuery}
          />
        </div>
      </section>

      {/* Featured Section */}
      {showFeatured && (
        <section className="pb-8">
          <div className="container mx-auto px-6">
            <FeaturedCaseStudies />
          </div>
        </section>
      )}

      {/* All Projects Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          {!showFeatured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="mb-8"
            >
              <h2 className="text-2xl font-display font-bold mb-2">
                {activeCategory === "Всички" ? "Резултати от търсене" : activeCategory}
              </h2>
              <p className="text-muted-foreground">
                {filteredStudies.length} {filteredStudies.length === 1 ? "проект" : "проекта"}
              </p>
            </motion.div>
          )}

          {showFeatured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
                Всички <span className="text-gradient">проекти</span>
              </h2>
              <p className="text-muted-foreground">
                Пълното ни портфолио от завършени проекти
              </p>
            </motion.div>
          )}

          {filteredStudies.length > 0 ? (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {filteredStudies.map((study, index) => (
                <CaseStudyCard key={study.id} study={study} index={index} />
              ))}
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
