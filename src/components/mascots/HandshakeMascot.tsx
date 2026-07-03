import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const HandshakeMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="partner · 1:1" status="не изпълнител, а партньор">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Партньорство">
        {/* subtle agreement pulse behind the clasp */}
        <motion.circle
          cx="100"
          cy="108"
          r="30"
          fill={ACCENT}
          opacity="0.1"
          animate={reduceMotion ? undefined : { scale: [0.85, 1.1, 0.85], opacity: [0.14, 0.05, 0.14] }}
          transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 108px" }}
        />

        {/* left arm */}
        <g transform="rotate(-20 100 109)">
          <rect x="24" y="98" width="80" height="22" rx="11" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />
          {/* cuff */}
          <line x1="30" y1="103" x2="30" y2="115" stroke={FG} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* right arm (accent) */}
        <g transform="rotate(20 100 109)">
          <rect x="96" y="98" width="80" height="22" rx="11" fill={ACCENT} stroke={FG} strokeWidth="3.5" />
          {/* cuff */}
          <line x1="170" y1="103" x2="170" y2="115" stroke={FG} strokeWidth="3.5" strokeLinecap="round" />
        </g>

        {/* the clasp — gentle squeeze */}
        <motion.g
          animate={reduceMotion ? undefined : { scale: [1, 0.94, 1] }}
          transition={reduceMotion ? undefined : { duration: 2.6, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 109px" }}
        >
          <rect x="82" y="88" width="36" height="42" rx="12" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />
          <line x1="100" y1="96" x2="100" y2="122" stroke={FG} strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
        </motion.g>

        {/* sparkles */}
        <g fill={FG}>
          <motion.circle cx="66" cy="66" r="3" animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2] }} transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, delay: 0.3 }} />
          <motion.circle cx="136" cy="72" r="3" animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2] }} transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, delay: 1 }} />
        </g>
      </svg>
    </MascotFrame>
  );
};

export default HandshakeMascot;
