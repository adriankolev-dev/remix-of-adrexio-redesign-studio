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
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="relative max-w-xl mx-auto"
      >
        <Search className="absolute left-4 sm:left-5 top-1/2 h-5 w-5 -translate-y-1/2 text-muted-foreground pointer-events-none" />
        <Input
          type="text"
          placeholder="Търсене по име или категория..."
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
          className="pl-11 sm:pl-14 pr-10 sm:pr-12 h-12 sm:h-14 bg-card border-border focus:border-primary text-sm sm:text-base rounded-2xl shadow-lg focus:shadow-xl focus:shadow-primary/10 transition-all duration-300"
        />
        {searchQuery && (
          <motion.button
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            onClick={() => onSearchChange("")}
            className="absolute right-3 sm:right-4 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors p-1 hover:bg-muted rounded-full"
          >
            <X className="h-4 w-4" />
          </motion.button>
        )}
      </motion.div>

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
      <div className="hidden sm:flex flex-wrap justify-center gap-2 md:gap-3">
        {categories.map((category, index) => (
          <motion.button
            key={category}
            onClick={() => onCategoryChange(category)}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.05, duration: 0.4 }}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.98 }}
            className={`rounded-full px-5 md:px-6 py-2.5 md:py-3 text-sm md:text-base font-medium transition-all duration-300 ${
              activeCategory === category
                ? "bg-primary text-primary-foreground shadow-xl shadow-primary/30 scale-105"
                : "bg-card text-muted-foreground border border-border hover:border-primary/50 hover:text-foreground hover:shadow-lg"
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
