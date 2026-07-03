import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const MegaphoneMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  const wave = (delay: number) =>
    reduceMotion
      ? {}
      : {
          animate: { opacity: [0, 1, 0], scale: [0.8, 1, 1.1] },
          transition: { duration: 2.4, repeat: Infinity, ease: "easeOut", delay },
        };

  return (
    <MascotFrame className={className} tag="reach · growing" status="растеж, който се вижда">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Дигитален маркетинг">
        {/* megaphone body */}
        <path
          d="M46 90 L96 70 L96 128 L46 108 Z"
          fill="hsl(var(--background))"
          stroke={FG}
          strokeWidth="3.5"
          strokeLinejoin="round"
        />
        <rect x="34" y="90" width="14" height="18" rx="3" fill={FG} />
        {/* handle */}
        <path d="M62 112 L62 138 Q 62 146 70 146 L74 146" stroke={FG} strokeWidth="3.5" strokeLinecap="round" fill="none" />
        {/* accent band */}
        <rect x="96" y="70" width="10" height="58" rx="4" fill={ACCENT} />

        {/* sound waves */}
        <motion.path d="M118 84 Q 130 99 118 114" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" fill="none" style={{ transformOrigin: "118px 99px" }} {...wave(0)} />
        <motion.path d="M132 74 Q 152 99 132 124" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" fill="none" style={{ transformOrigin: "132px 99px" }} {...wave(0.4)} />
        <motion.path d="M146 64 Q 174 99 146 134" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" fill="none" style={{ transformOrigin: "146px 99px" }} {...wave(0.8)} />
      </svg>
    </MascotFrame>
  );
};

export default MegaphoneMascot;
