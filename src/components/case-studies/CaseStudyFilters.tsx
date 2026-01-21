import { motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { categories } from "@/data/caseStudies";

interface CaseStudyFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
}

const CaseStudyFilters = ({
  activeCategory,
  onCategoryChange,
  searchQuery,
  onSearchChange,
}: CaseStudyFiltersProps) => {
  return (
    <div className="mb-8 sm:mb-12 space-y-4 sm:space-y-6">
      {/* Search */}
      <div className="relative max-w-md mx-auto">
        <Search className="absolute left-3 sm:left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input
          type="text"
          placeholder="Търсене по име или категория..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-9 sm:pl-11 pr-8 sm:pr-10 h-10 sm:h-12 bg-card border-border focus:border-primary text-sm sm:text-base"
        />
        {searchQuery && (
          <button
            onClick={() => onSearchChange("")}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        )}
      </div>

      {/* Category filters */}
      {/* Mobile: Dropdown */}
      <div className="sm:hidden">
        <Select value={activeCategory} onValueChange={onCategoryChange}>
          <SelectTrigger className="w-full h-11 bg-card border-border focus:border-primary">
            <SelectValue placeholder="Изберете категория" />
          </SelectTrigger>
          <SelectContent>
            {categories.map((category) => (
              <SelectItem key={category} value={category}>
                {category}
              </SelectItem>
            ))}
          </SelectContent>
        </Select>
      </div>

      {/* Desktop: Button filters */}
      <div className="hidden sm:flex flex-wrap justify-center gap-2">
        {categories.map((category) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-5 py-2.5 text-sm font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground"
            }`}
          >
            {category}
          </motion.button>
        ))}
      </div>
    </div>
  );
};

export default CaseStudyFilters;
