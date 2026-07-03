import { type ReactNode } from "react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import { DURATION, EASE_OUT, inViewOnce } from "./motion";

type Direction = "up" | "left" | "right";

interface RevealProps {
  children: ReactNode;
  /** Delay before this layer settles into place. */
  delay?: number;
  /** Direction the layer assembles from. */
  direction?: Direction;
  className?: string;
  /** Play as soon as mounted instead of on scroll (used above the fold). */
  immediate?: boolean;
  as?: "div" | "span" | "li";
}

const offset: Record<Direction, { x?: number; y?: number }> = {
  up: { y: 26 },
  left: { x: -32 },
  right: { x: 32 },
};

/**
 * Reveal — the atomic "layer settling into place" primitive.
 * Respects prefers-reduced-motion by rendering statically.
 */
const Reveal = ({
  children,
  delay = 0,
  direction = "up",
  className,
  immediate = false,
  as = "div",
}: RevealProps) => {
  const reduceMotion = useReducedMotion();
  const MotionTag = motion[as];

  if (reduceMotion) {
    const StaticTag = as;
    return <StaticTag className={className}>{children}</StaticTag>;
  }

  const variants: Variants = {
    hidden: { opacity: 0, filter: "blur(6px)", ...offset[direction] },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: DURATION.base, ease: EASE_OUT, delay },
    },
  };

  const animationProps = immediate
    ? { initial: "hidden" as const, animate: "visible" as const }
    : { initial: "hidden" as const, whileInView: "visible" as const, viewport: inViewOnce };

  return (
    <MotionTag className={className} variants={variants} {...animationProps}>
      {children}
    </MotionTag>
  );
};

export default Reveal;
