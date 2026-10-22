import { blogCategories } from "@/data/blog";

interface BlogFiltersProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const BlogFilters = ({ activeCategory, onCategoryChange }: BlogFiltersProps) => (
  <div className="flex gap-2 overflow-x-auto [-ms-overflow-style:none] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
    {blogCategories.map((category) => {
      const isActive = activeCategory === category;
      return (
        <button
          key={category}
          type="button"
          onClick={() => onCategoryChange(category)}
          aria-pressed={isActive}
          className={`h-10 shrink-0 whitespace-nowrap rounded-full border-[1.5px] px-5 text-[0.72rem] font-bold uppercase tracking-[0.06em] transition-colors ${
            isActive
              ? "border-foreground bg-foreground text-background"
              : "border-border text-foreground hover:border-foreground"
          }`}
        >
          {category}
        </button>
      );
    })}
  </div>
);

export default BlogFilters;
