import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

interface GearProps {
  cx: number;
  cy: number;
  r: number;
  teeth?: number;
  color: string;
  fill: string;
}

/** A simple cog: ring + evenly spaced rounded teeth. */
const Gear = ({ cx, cy, r, teeth = 8, color, fill }: GearProps) => {
  const toothW = 8;
  const toothH = 10;
  return (
    <g>
      {Array.from({ length: teeth }).map((_, i) => {
        const angle = (i / teeth) * 360;
        return (
          <rect
            key={i}
            x={cx - toothW / 2}
            y={cy - r - toothH + 3}
            width={toothW}
            height={toothH}
            rx={2}
            fill={color}
            transform={`rotate(${angle} ${cx} ${cy})`}
          />
        );
      })}
      <circle cx={cx} cy={cy} r={r} fill={fill} stroke={color} strokeWidth="3.5" />
      <circle cx={cx} cy={cy} r={r * 0.34} fill="hsl(var(--card))" stroke={color} strokeWidth="3" />
    </g>
  );
};

const GearMascot = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();

  return (
    <MascotFrame className={className} tag="uptime · 99.9%" status="спокойствие след старта" bob={false}>
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Техническа поддръжка">
        {/* big gear */}
        <motion.g
          style={{ transformOrigin: "84px 90px" }}
          animate={reduceMotion ? undefined : { rotate: 360 }}
          transition={reduceMotion ? undefined : { duration: 14, repeat: Infinity, ease: "linear" }}
        >
          <Gear cx={84} cy={90} r={38} teeth={9} color={FG} fill="hsl(var(--background))" />
        </motion.g>

        {/* small accent gear, counter-rotating */}
        <motion.g
          style={{ transformOrigin: "138px 128px" }}
          animate={reduceMotion ? undefined : { rotate: -360 }}
          transition={reduceMotion ? undefined : { duration: 9, repeat: Infinity, ease: "linear" }}
        >
          <Gear cx={138} cy={128} r={24} teeth={7} color={ACCENT} fill="hsl(var(--background))" />
        </motion.g>
      </svg>
    </MascotFrame>
  );
};

export default GearMascot;
