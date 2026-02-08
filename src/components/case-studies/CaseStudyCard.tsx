import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import { useState } from "react";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: "default" | "featured";
}

const CaseStudyCard = ({ study, index, variant = "default" }: CaseStudyCardProps) => {
  const [isHovered, setIsHovered] = useState(false);
  const isFeatured = variant === "featured";

  return (
    <motion.article
      initial={{ opacity: 0, y: 50, scale: 0.95 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-80px", amount: 0.3 }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.05,
        ease: [0.22, 1, 0.36, 1] // Custom easing for smooth effect
      }}
      className="group relative h-full"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
    >
      <Link to={`/case-studies/${study.id}`} className="block h-full">
        <motion.div 
          className="relative overflow-hidden rounded-3xl bg-card h-full w-full"
          whileHover={{ 
            y: -12,
            transition: { duration: 0.4, ease: "easeOut" }
          }}
          style={{
            boxShadow: isHovered 
              ? "0 30px 60px -12px rgba(99, 102, 241, 0.3)" 
              : "0 10px 20px -3px rgba(0, 0, 0, 0.15)"
          }}
        >
          {/* Image */}
          <div className="absolute inset-0">
            <motion.img
              src={study.image}
              alt={study.title}
              className="h-full w-full object-cover object-top"
              animate={{
                scale: isHovered ? 1.1 : 1,
                filter: isHovered ? "brightness(1.1)" : "brightness(1)"
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
            {/* Darker overlay for better text readability */}
            <motion.div 
              className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"
              animate={{
                opacity: isHovered ? 0.95 : 0.85
              }}
              transition={{ duration: 0.7 }}
            />
          </div>

          {/* Category badge - Always visible at top */}
          <motion.div 
            className={`absolute z-10 flex items-center gap-2 ${
              isFeatured ? "top-5 left-5" : "top-3 left-3 md:top-4 md:left-4"
            }`}
            animate={{
              y: isHovered ? -3 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <span
              className={`inline-block rounded-full backdrop-blur-md bg-white shadow-xl font-bold uppercase tracking-wider ${
                isFeatured 
                  ? "px-4 py-2.5 text-xs" 
                  : "px-3 py-1.5 text-[10px] md:text-xs"
              } ${study.accentColor}`}
            >
              {study.category}
            </span>
            {!study.isPublic && (
              <span className={`inline-flex items-center gap-1.5 rounded-full bg-black/70 backdrop-blur-md shadow-xl font-semibold text-white ${
                isFeatured 
                  ? "px-3 py-2.5 text-xs" 
                  : "px-2 py-1.5 text-[10px] md:text-xs"
              }`}>
                <Lock className={isFeatured ? "h-3 w-3" : "h-2.5 w-2.5 md:h-3 md:w-3"} />
                Вътрешна
              </span>
            )}
          </motion.div>

          {/* Arrow indicator - Always visible but changes on hover */}
          <motion.div 
            className={`absolute z-10 flex items-center justify-center rounded-full backdrop-blur-md shadow-xl ${
              isFeatured 
                ? "right-5 top-5 h-12 w-12" 
                : "right-3 top-3 md:right-4 md:top-4 h-9 w-9 md:h-10 md:w-10"
            }`}
            animate={{
              backgroundColor: isHovered ? "rgb(99, 102, 241)" : "rgba(255, 255, 255, 0.15)",
              scale: isHovered ? 1.15 : 1,
              rotate: isHovered ? 45 : 0,
              y: isHovered ? -3 : 0
            }}
            transition={{ duration: 0.5, ease: "easeOut" }}
          >
            <ArrowUpRight className={isFeatured ? "h-5 w-5 text-white" : "h-4 w-4 md:h-5 md:w-5 text-white"} />
          </motion.div>

          {/* Content - Slides up on hover */}
          <div className="absolute inset-0 flex flex-col justify-end p-4 md:p-5 lg:p-6">
            {/* Title & Subtitle */}
            <motion.div
              animate={{
                y: isHovered ? -8 : 0
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <h3 className={`font-display font-bold leading-tight text-white mb-2 ${
                isFeatured 
                  ? "text-xl md:text-2xl lg:text-3xl" 
                  : "text-base md:text-lg lg:text-xl"
              }`}>
                {study.title}
              </h3>
              <motion.p 
                className={`text-gray-200 line-clamp-2 ${
                  isFeatured 
                    ? "text-sm md:text-base" 
                    : "text-xs md:text-sm"
                }`}
                animate={{
                  opacity: isHovered ? 1 : 0,
                  y: isHovered ? 0 : 8
                }}
                transition={{ duration: 0.7, delay: 0.075, ease: "easeOut" }}
              >
                {study.subtitle}
              </motion.p>
            </motion.div>

            {/* Subtle bottom line indicator */}
            <motion.div 
              className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
              animate={{
                scaleX: isHovered ? 1 : 0
              }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      </Link>
    </motion.article>
  );
};

export default CaseStudyCard;
