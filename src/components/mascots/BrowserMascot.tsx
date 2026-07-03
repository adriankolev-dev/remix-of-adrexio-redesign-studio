import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";
const MUTED = "hsl(var(--muted-foreground))";

const BrowserMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="localhost · 200 OK" status="изградено от нулата">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Браузър">
        {/* window */}
        <rect x="30" y="42" width="140" height="112" rx="14" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />

        {/* chrome bar */}
        <line x1="30" y1="66" x2="170" y2="66" stroke={FG} strokeWidth="3" />
        <circle cx="44" cy="54" r="3.4" fill={MUTED} />
        <circle cx="56" cy="54" r="3.4" fill={MUTED} />
        <circle cx="68" cy="54" r="3.4" fill={ACCENT} />
        <rect x="86" y="50" width="76" height="9" rx="4.5" fill="hsl(var(--muted))" />

        {/* content layout lines */}
        <rect x="44" y="82" width="52" height="9" rx="4.5" fill={ACCENT} />
        <rect x="44" y="100" width="112" height="7" rx="3.5" fill="hsl(var(--muted))" />
        <rect x="44" y="114" width="96" height="7" rx="3.5" fill="hsl(var(--muted))" />

        {/* blinking caret */}
        <motion.rect
          x="142"
          y="112"
          width="4"
          height="12"
          rx="1"
          fill={ACCENT}
          animate={reduceMotion ? undefined : { opacity: [1, 1, 0, 0] }}
          transition={reduceMotion ? undefined : { duration: 1.1, repeat: Infinity, times: [0, 0.5, 0.5, 1] }}
        />

        {/* button */}
        <rect x="44" y="130" width="44" height="14" rx="7" fill={FG} />

        {/* cursor arrow */}
        <motion.g
          animate={reduceMotion ? undefined : { x: [0, -6, 0], y: [0, -4, 0] }}
          transition={reduceMotion ? undefined : { duration: 3.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M150 132 L150 168 L159 159 L165 172 L171 169 L165 156 L177 156 Z"
            fill="hsl(var(--background))"
            stroke={FG}
            strokeWidth="3"
            strokeLinejoin="round"
          />
        </motion.g>
      </svg>
    </MascotFrame>
  );
};

export default BrowserMascot;
