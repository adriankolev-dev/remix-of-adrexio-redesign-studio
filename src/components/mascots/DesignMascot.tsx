import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const DesignMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="artboard · 1x" status="дизайн, който помнят">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="UI/UX дизайн">
        {/* artboard frame */}
        <rect x="34" y="40" width="132" height="120" rx="12" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" strokeDasharray="2 8" />

        {/* selected shape — circle with handles */}
        <circle cx="82" cy="86" r="26" fill="none" stroke={FG} strokeWidth="3.5" />
        <rect x="52" y="56" width="60" height="60" rx="2" fill="none" stroke={ACCENT} strokeWidth="2" strokeDasharray="4 4" />
        {[
          [52, 56],
          [112, 56],
          [52, 116],
          [112, 116],
        ].map(([x, y]) => (
          <rect key={`${x}-${y}`} x={x - 4} y={y - 4} width="8" height="8" rx="1.5" fill="hsl(var(--background))" stroke={ACCENT} strokeWidth="2" />
        ))}

        {/* square block */}
        <rect x="112" y="96" width="40" height="40" rx="8" fill={ACCENT} opacity="0.9" />

        {/* cursor arrow */}
        <motion.g
          animate={reduceMotion ? undefined : { x: [0, 8, 0], y: [0, 6, 0] }}
          transition={reduceMotion ? undefined : { duration: 3.6, repeat: Infinity, ease: "easeInOut" }}
        >
          <path
            d="M104 118 L104 154 L113 145 L119 158 L125 155 L119 142 L131 142 Z"
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

export default DesignMascot;
