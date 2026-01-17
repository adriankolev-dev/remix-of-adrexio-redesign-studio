import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: "default" | "featured";
}

const CaseStudyCard = ({ study, index, variant = "default" }: CaseStudyCardProps) => {
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group relative"
    >
      <Link to={`/case-studies/${study.id}`}>
        <div
          className={`relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5 ${
            isFeatured ? "aspect-[16/10]" : "aspect-[4/3]"
          }`}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <img
              src={study.image}
              alt={study.title}
              className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />
            {/* Overlay gradient */}
            <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
          </div>

          {/* Content */}
          <div className="absolute inset-0 flex flex-col justify-end p-6">
            {/* Category badge */}
            <div className="mb-3 flex items-center gap-2">
              <span
                className={`inline-block rounded-full px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm ${study.accentColor} bg-background/80`}
              >
                {study.category}
              </span>
              {!study.isPublic && (
                <span className="inline-flex items-center gap-1 rounded-full bg-muted/80 px-2 py-1 text-xs text-muted-foreground backdrop-blur-sm">
                  <Lock className="h-3 w-3" />
                  Вътрешна
                </span>
              )}
            </div>

            {/* Title & Subtitle */}
            <h3
              className={`font-display font-bold leading-tight text-foreground ${
                isFeatured ? "text-2xl md:text-3xl" : "text-xl"
              }`}
            >
              {study.title}
            </h3>
            <p className="mt-1 line-clamp-2 text-sm text-muted-foreground">
              {study.subtitle}
            </p>

            {/* Results preview (featured only) */}
            {isFeatured && (
              <div className="mt-4 flex gap-4">
                {study.results.slice(0, 3).map((result, i) => (
                  <div key={i} className="text-center">
                    <div className="text-lg font-bold text-gradient">
                      {result.metric}
                    </div>
                    <div className="text-xs text-muted-foreground">
                      {result.label}
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* Arrow indicator */}
            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-primary/10 text-primary opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 group-hover:bg-primary group-hover:text-primary-foreground">
              <ArrowUpRight className="h-5 w-5" />
            </div>
          </div>
        </div>
      </Link>
    </motion.article>
  );
};

export default CaseStudyCard;
