import { motion, useReducedMotion } from "framer-motion";
import MascotFrame from "./MascotFrame";

interface RobotMascotProps {
  className?: string;
  /** "lost" = unplugged 404 buddy with x_x eyes. */
  variant?: "default" | "lost";
}

const FG = "hsl(var(--foreground))";
const ACCENT = "hsl(var(--primary))";

const RobotMascot = ({ className, variant = "default" }: RobotMascotProps) => {
  const reduceMotion = useReducedMotion();
  const lost = variant === "lost";

  return (
    <MascotFrame
      className={className}
      tag={lost ? "404 · offline" : "AI · online"}
      status={lost ? "връзката прекъсна…" : "думам, значи автоматизирам"}
    >
      <svg viewBox="0 0 200 200" className="h-full w-full" fill="none" role="img" aria-label="Робот">
        {/* antenna */}
        <line x1="100" y1="30" x2="100" y2="52" stroke={FG} strokeWidth="3" strokeLinecap="round" />
        <motion.circle
          cx="100"
          cy="24"
          r="6"
          fill={lost ? "hsl(var(--muted-foreground))" : ACCENT}
          animate={reduceMotion || lost ? undefined : { opacity: [1, 0.35, 1], scale: [1, 1.25, 1] }}
          transition={reduceMotion || lost ? undefined : { duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
          style={{ transformOrigin: "100px 24px" }}
        />

        {/* head */}
        <rect x="44" y="52" width="112" height="92" rx="26" fill="hsl(var(--background))" stroke={FG} strokeWidth="3.5" />

        {/* side ears */}
        <rect x="30" y="86" width="12" height="30" rx="6" fill={FG} />
        <rect x="158" y="86" width="12" height="30" rx="6" fill={FG} />

        {/* eyes */}
        {lost ? (
          <g stroke={FG} strokeWidth="4" strokeLinecap="round">
            <line x1="70" y1="84" x2="86" y2="100" />
            <line x1="86" y1="84" x2="70" y2="100" />
            <line x1="114" y1="84" x2="130" y2="100" />
            <line x1="130" y1="84" x2="114" y2="100" />
          </g>
        ) : (
          <motion.g
            style={{ transformOrigin: "100px 92px" }}
            animate={reduceMotion ? undefined : { scaleY: [1, 1, 0.1, 1] }}
            transition={reduceMotion ? undefined : { duration: 4, repeat: Infinity, times: [0, 0.86, 0.92, 0.98], ease: "easeInOut" }}
          >
            <circle cx="78" cy="92" r="10" fill={ACCENT} />
            <circle cx="122" cy="92" r="10" fill={ACCENT} />
          </motion.g>
        )}

        {/* mouth */}
        <path
          d={lost ? "M78 126 Q 100 116 122 126" : "M76 120 Q 100 132 124 120"}
          stroke={FG}
          strokeWidth="3"
          strokeLinecap="round"
          fill="none"
        />

        {/* neck + shoulders */}
        <line x1="100" y1="144" x2="100" y2="158" stroke={FG} strokeWidth="3" strokeLinecap="round" />
        <path d="M56 178 Q 56 160 100 160 Q 144 160 144 178" stroke={FG} strokeWidth="3.5" strokeLinecap="round" fill="none" />
      </svg>
    </MascotFrame>
  );
};

export default RobotMascot;
