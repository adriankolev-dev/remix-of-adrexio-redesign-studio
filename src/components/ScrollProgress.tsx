import { useEffect, useState } from "react";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { cn } from "@/lib/utils";

const ScrollProgress = () => {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      setScrollProgress(progress);
    };

    // Initial calculation
    updateScrollProgress();

    // Update on scroll
    window.addEventListener("scroll", updateScrollProgress, { passive: true });
    
    // Update on resize (in case content height changes)
    window.addEventListener("resize", updateScrollProgress, { passive: true });

    return () => {
      window.removeEventListener("scroll", updateScrollProgress);
      window.removeEventListener("resize", updateScrollProgress);
    };
  }, []);

  return (
    <div className="fixed top-0 left-0 right-0 z-[100] h-1">
      <ProgressPrimitive.Root
        className={cn("relative h-full w-full overflow-hidden bg-secondary/20")}
        value={scrollProgress}
      >
        <ProgressPrimitive.Indicator
          className="h-full w-full flex-1 transition-all duration-150 ease-out"
          style={{
            transform: `translateX(-${100 - (scrollProgress || 0)}%)`,
            background: `linear-gradient(
              90deg,
              hsl(var(--gradient-start)) 0%,
              hsl(var(--gradient-mid)) 50%,
              hsl(var(--gradient-end)) 100%
            )`,
          }}
        />
      </ProgressPrimitive.Root>
    </div>
  );
};

export default ScrollProgress;
