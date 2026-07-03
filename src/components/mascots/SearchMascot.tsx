import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";
const MUTED = "hsl(var(--muted))";

const SearchMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="index · rank #1" status="намерени в Google & AI">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="SEO оптимизация">
        {/* rising bars */}
        <rect x="46" y="118" width="20" height="34" rx="4" fill={MUTED} />
        <rect x="74" y="98" width="20" height="54" rx="4" fill={MUTED} />
        <rect x="102" y="76" width="20" height="76" rx="4" fill={ACCENT} />

        {/* baseline */}
        <line x1="40" y1="152" x2="150" y2="152" stroke={FG} strokeWidth="3" strokeLinecap="round" />

        {/* magnifier — gently scans across */}
        <motion.g
          animate={reduceMotion ? undefined : { x: [0, -14, 0], y: [0, 6, 0] }}
          transition={reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
        >
          <circle cx="118" cy="74" r="30" fill="hsl(var(--background))" stroke={FG} strokeWidth="4" />
          <circle cx="118" cy="74" r="30" fill={ACCENT} opacity="0.08" />
          <line x1="140" y1="96" x2="160" y2="116" stroke={FG} strokeWidth="6" strokeLinecap="round" />
          {/* checkmark inside */}
          <path d="M106 74 L115 84 L132 62" stroke={ACCENT} strokeWidth="4.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
        </motion.g>
      </svg>
    </MascotFrame>
  );
};

export default SearchMascot;
