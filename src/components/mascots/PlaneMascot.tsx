import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const PlaneMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="inbox · 24h" status="пишете ни — отговаряме бързо">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Съобщение">
        {/* dotted flight trail */}
        <path
          d="M40 150 Q 70 150 90 120 T 130 78"
          stroke={ACCENT}
          strokeWidth="3"
          strokeLinecap="round"
          strokeDasharray="1 12"
          fill="none"
        />

        {/* paper plane — gentle glide */}
        <motion.g
          animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, -8, 0] }}
          transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path d="M150 52 L108 132 L98 96 L60 84 Z" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" strokeLinejoin="round" />
          <path d="M150 52 L98 96 L108 132 Z" fill={ACCENT} />
          <path d="M150 52 L98 96" stroke={FG} strokeWidth="3.5" strokeLinejoin="round" />
        </motion.g>
      </svg>
    </MascotFrame>
  );
};

export default PlaneMascot;
