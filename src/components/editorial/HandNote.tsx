import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

type Arrow = "none" | "down-left" | "down-right" | "up-right";

interface HandNoteProps {
  children: ReactNode;
  /** Optional little doodle arrow that points from the note toward the content. */
  arrow?: Arrow;
  /** Tilt in degrees — small values keep it tasteful. */
  rotate?: number;
  /** Muted foreground-toned note instead of the default cyan accent. */
  tone?: "primary" | "foreground";
  className?: string;
  size?: "sm" | "md" | "lg";
}

const sizeMap = {
  sm: "text-lg",
  md: "text-2xl",
  lg: "text-3xl md:text-4xl",
};

const arrowPaths: Record<Exclude<Arrow, "none">, string> = {
  // gentle curved strokes with a small arrowhead
  "down-left": "M96 6 C 60 12, 24 20, 6 40 M6 40 L 20 34 M6 40 L 14 26",
  "down-right": "M4 6 C 40 12, 76 20, 94 40 M94 40 L 80 34 M94 40 L 86 26",
  "up-right": "M4 40 C 40 30, 70 24, 94 6 M94 6 L 82 10 M94 6 L 88 18",
};

/**
 * HandNote — the studio's handwritten "marker voice". A small Caveat aside used
 * as a margin annotation, with an optional doodle arrow. Kept deliberately
 * sparse so it stays charming rather than decorative noise.
 */
const HandNote = ({
  children,
  arrow = "none",
  rotate = -4,
  tone = "primary",
  className,
  size = "md",
}: HandNoteProps) => {
  const reduceMotion = useReducedMotion();

  return (
    <motion.div
      initial={reduceMotion ? undefined : { opacity: 0, y: 8, rotate: rotate * 1.6 }}
      whileInView={reduceMotion ? undefined : { opacity: 1, y: 0, rotate }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
      style={{ rotate: reduceMotion ? rotate : undefined }}
      className={cn("pointer-events-none select-none", className)}
    >
      <p
        className={cn(
          "font-hand leading-tight",
          sizeMap[size],
          tone === "primary" ? "text-primary" : "text-foreground",
        )}
      >
        {children}
      </p>
      {arrow !== "none" && (
        <svg
          className={cn(
            "mt-1 h-8 w-24 overflow-visible",
            arrow === "down-left" ? "mr-auto" : "ml-auto",
          )}
          viewBox="0 0 100 46"
          fill="none"
          aria-hidden
        >
          <path
            d={arrowPaths[arrow]}
            stroke="hsl(var(--primary))"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </motion.div>
  );
};

export default HandNote;
