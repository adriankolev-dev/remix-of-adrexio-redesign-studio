import { CASE_STUDY_FILTERS, type CaseStudyFilterId } from "@/data/caseStudies";

interface CaseStudyFiltersProps {
  activeFilter: CaseStudyFilterId;
  onFilterChange: (filter: CaseStudyFilterId) => void;
}

const CaseStudyFilters = ({ activeFilter, onFilterChange }: CaseStudyFiltersProps) => {
  return (
    <div>
      <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
        {CASE_STUDY_FILTERS.map((filter) => {
          const isActive = activeFilter === filter.id;
          return (
            <button
              key={filter.id}
              type="button"
              onClick={() => onFilterChange(filter.id)}
              aria-pressed={isActive}
              className={`h-10 shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-5 text-[0.72rem] font-bold uppercase tracking-[0.06em] transition-colors ${
                isActive
                  ? "border-foreground bg-foreground text-background"
                  : "border-border text-foreground hover:border-foreground"
              }`}
            >
              {filter.label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default CaseStudyFilters;
