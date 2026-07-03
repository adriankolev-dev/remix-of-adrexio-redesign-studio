import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const Coin = ({ cx, cy, accent = false }: { cx: number; cy: number; accent?: boolean }) => (
  <g>
    <ellipse cx={cx} cy={cy} rx="30" ry="11" fill={accent ? ACCENT : "hsl(var(--background))"} stroke={FG} strokeWidth="3.5" />
    <text
      x={cx}
      y={cy + 4}
      textAnchor="middle"
      fontFamily="'JetBrains Mono', monospace"
      fontSize="12"
      fontWeight="700"
      fill={accent ? "hsl(var(--primary-foreground))" : FG}
    >
      %
    </text>
  </g>
);

const RewardMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="payout · 20%" status="печелите за всяка препоръка">
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Партньорска програма">
        {/* stacked coins */}
        <Coin cx={100} cy={146} />
        <Coin cx={100} cy={124} />
        {/* top accent coin drops in */}
        <motion.g
          animate={reduceMotion ? undefined : { y: [-14, 0, 0], opacity: [0, 1, 1] }}
          transition={reduceMotion ? undefined : { duration: 3, repeat: Infinity, times: [0, 0.35, 1], ease: "easeOut" }}
        >
          <Coin cx={100} cy={102} accent />
        </motion.g>

        {/* rising arrow */}
        <path d="M100 88 L100 52" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" />
        <path d="M88 64 L100 50 L112 64" stroke={ACCENT} strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />

        {/* sparkles */}
        <g fill={FG}>
          <motion.circle cx="60" cy="70" r="3" animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2] }} transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, delay: 0.2 }} />
          <motion.circle cx="142" cy="86" r="3" animate={reduceMotion ? undefined : { opacity: [0.2, 1, 0.2] }} transition={reduceMotion ? undefined : { duration: 2, repeat: Infinity, delay: 0.9 }} />
        </g>
      </svg>
    </MascotFrame>
  );
};

export default RewardMascot;
