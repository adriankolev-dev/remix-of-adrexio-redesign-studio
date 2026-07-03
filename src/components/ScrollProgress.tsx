import { motion, useScroll, useSpring, useReducedMotion } from "framer-motion";

const ScrollProgress = () => {
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 140,
    damping: 30,
    mass: 0.3,
    restDelta: 0.001,
  });

  return (
    <div className="fixed inset-x-0 top-0 z-[100] h-px bg-border/40" aria-hidden>
      <motion.div
        className="h-full origin-left bg-primary shadow-[0_0_10px_hsl(var(--primary)/0.65)]"
        style={{ scaleX: reduceMotion ? scrollYProgress : scaleX }}
      />
    </div>
  );
};

export default ScrollProgress;
