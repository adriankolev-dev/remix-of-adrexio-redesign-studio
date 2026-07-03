import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";
const MUTED = "hsl(var(--muted))";

const ClipboardMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const rows = [78, 102, 126];

  return (
    <MascotFrame className={className} tag="brief · draft" status="разкажете ни за проекта">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Бриф за проект">
        {/* board */}
        <rect x="52" y="40" width="96" height="124" rx="12" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />
        {/* clip */}
        <rect x="84" y="30" width="32" height="18" rx="6" fill="hsl(var(--card))" stroke={FG} strokeWidth="3.5" />

        {rows.map((y, i) => (
          <g key={y}>
            {/* checkbox */}
            <rect x="66" y={y - 8} width="16" height="16" rx="4" fill="none" stroke={i === 2 ? ACCENT : FG} strokeWidth="3" />
            {i < 2 && (
              <path d={`M69 ${y} L74 ${y + 5} L82 ${y - 6}`} stroke={ACCENT} strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            )}
            {/* animated check on last row */}
            {i === 2 && (
              <motion.path
                d={`M69 ${y} L74 ${y + 5} L82 ${y - 6}`}
                stroke={ACCENT}
                strokeWidth="3"
                strokeLinecap="round"
                strokeLinejoin="round"
                fill="none"
                animate={reduceMotion ? undefined : { pathLength: [0, 1, 1, 0], opacity: [0, 1, 1, 0] }}
                transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, times: [0, 0.3, 0.8, 1], ease: "easeInOut" }}
              />
            )}
            {/* line */}
            <rect x="92" y={y - 4} width={i === 1 ? 40 : 46} height="7" rx="3.5" fill={MUTED} />
          </g>
        ))}
      </svg>
    </MascotFrame>
  );
};

export default ClipboardMascot;
