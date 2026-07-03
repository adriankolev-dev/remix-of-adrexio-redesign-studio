import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useSpring,
  useMotionValueEvent,
  useReducedMotion,
} from "framer-motion";
import { ArrowUp } from "lucide-react";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

const BackToTop = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const pathLength = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
    restDelta: 0.001,
  });
  const [isVisible, setIsVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (value) => {
    setIsVisible(value > 0.06);
  });

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: reduceMotion ? "auto" : "smooth" });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          type="button"
          onClick={scrollToTop}
          aria-label="Върни се нагоре"
          initial={{ opacity: 0, y: 14, scale: 0.9 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 14, scale: 0.9 }}
          transition={{ duration: 0.35, ease: EASE_OUT }}
          className="group layer-shadow fixed bottom-24 right-6 z-50 grid h-14 w-14 place-items-center rounded-full border border-border bg-card/90 backdrop-blur transition-colors duration-300 hover:border-primary/40 lg:bottom-8 lg:right-8"
        >
          {/* Circular scroll-progress ring */}
          <svg
            className="pointer-events-none absolute inset-0 h-full w-full -rotate-90"
            viewBox="0 0 56 56"
            aria-hidden
          >
            <circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="hsl(var(--border))"
              strokeWidth="1.5"
            />
            <motion.circle
              cx="28"
              cy="28"
              r="25"
              fill="none"
              stroke="hsl(var(--primary))"
              strokeWidth="2"
              strokeLinecap="round"
              style={{ pathLength: reduceMotion ? scrollYProgress : pathLength }}
            />
          </svg>

          <ArrowUp
            className="h-5 w-5 text-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:text-primary"
            strokeWidth={1.75}
          />

          {/* Mono meta label on hover — editorial touch */}
          <span className="font-mono-meta pointer-events-none absolute right-full mr-3 whitespace-nowrap text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            нагоре
          </span>
        </motion.button>
      )}
    </AnimatePresence>
  );
};

export default BackToTop;
