import { motion } from "framer-motion";
import { CASE_STUDY_FILTERS, type CaseStudyFilterId } from "@/data/caseStudies";

interface CaseStudyFiltersProps {
  activeFilter: CaseStudyFilterId;
  onFilterChange: (filter: CaseStudyFilterId) => void;
}

const CaseStudyFilters = ({ activeFilter, onFilterChange }: CaseStudyFiltersProps) => {
  return (
    <div className="border-b border-border pb-5">
      <div className="-mb-px flex gap-1 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CASE_STUDY_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              className={`relative shrink-0 whitespace-nowrap px-3 py-2 text-sm font-medium transition-colors ${
                isActive ? "text-foreground" : "text-muted-foreground hover:text-foreground"
              }`}
            >
              {filter.label}
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
