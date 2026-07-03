import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";
const MUTED = "hsl(var(--muted))";

const PhoneMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="app · v1.0" status="iOS & Android">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Мобилно приложение">
        {/* phone body */}
        <rect x="66" y="26" width="68" height="148" rx="18" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />
        {/* notch */}
        <rect x="88" y="34" width="24" height="5" rx="2.5" fill={FG} />
        {/* home line */}
        <rect x="88" y="162" width="24" height="4" rx="2" fill={MUTED} />

        {/* incoming chat bubble (left) */}
        <rect x="76" y="52" width="42" height="20" rx="9" fill={MUTED} />
        {/* outgoing accent bubble (right) */}
        <motion.rect
          x="98"
          y="80"
          width="36"
          height="20"
          rx="9"
          fill={ACCENT}
          animate={reduceMotion ? undefined : { scale: [0.9, 1, 1], opacity: [0, 1, 1] }}
          transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, ease: "easeOut", times: [0, 0.3, 1] }}
          style={{ transformOrigin: "116px 90px" }}
        />

        {/* typing dots */}
        <g fill={FG}>
          <motion.circle cx="84" cy="118" r="3.4" animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }} transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, delay: 0 }} />
          <motion.circle cx="96" cy="118" r="3.4" animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }} transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, delay: 0.2 }} />
          <motion.circle cx="108" cy="118" r="3.4" animate={reduceMotion ? undefined : { opacity: [0.3, 1, 0.3] }} transition={reduceMotion ? undefined : { duration: 1.2, repeat: Infinity, delay: 0.4 }} />
        </g>

        {/* bottom nav hint */}
        <line x1="76" y1="140" x2="124" y2="140" stroke={MUTED} strokeWidth="3" strokeLinecap="round" />
      </svg>
    </MascotFrame>
  );
};

export default PhoneMascot;
