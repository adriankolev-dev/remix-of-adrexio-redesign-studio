import { motion } from "framer-motion";
import { categories } from "@/data/caseStudies";

interface CaseStudyFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const CaseStudyFilters = ({ activeCategory, onCategoryChange }: CaseStudyFiltersProps) => {
  return (
    <div className="border-b border-border pb-5">
      <div className="-mb-px flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {categories.map((category) => {
          const isActive = activeCategory === category;
          return (
            <button
              key={category}
              type="button"
              onClick={() => onCategoryChange(category)}
              className={`relative shrink-0 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {category}
              {isActive && (
                <motion.span
                  layoutId="cs-filter-underline"
                  className="absolute inset-x-3 bottom-0 h-[2px] bg-primary"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyFilters;
