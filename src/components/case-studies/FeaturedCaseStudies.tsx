import { motion } from "framer-motion";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import CaseStudyCard from "./CaseStudyCard";

const FeaturedCaseStudies = () => {
  const featured = getFeaturedCaseStudies();

  if (featured.length === 0) return null;

  return (
    <section className="pb-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-8"
      >
        <h2 className="text-2xl md:text-3xl font-display font-bold mb-2">
          <span className="text-gradient">Избрани</span> проекти
        </h2>
        <p className="text-muted-foreground">
          Проектите, с които се гордеем най-много
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {featured.map((study, index) => (
          <CaseStudyCard
            key={study.id}
            study={study}
            index={index}
            variant="featured"
          />
        ))}
      </div>
    </section>
  );
};

export default FeaturedCaseStudies;
