import type { Variants, Transition } from "framer-motion";

/**
 * Shared motion language for the Adrexio site.
 *
 * The unifying concept is "assembly by layers" — content does not merely
 * fade in, it composes into place the way a designer stacks layers in Figma.
 * Every animation on the site should draw from these primitives so the motion
 * reads as one coherent world rather than a pile of unrelated effects.
 */

// Signature easing — a confident, settled ease-out (no bounce, no gimmick).
export const EASE_OUT: Transition["ease"] = [0.16, 1, 0.3, 1];
export const EASE_IN_OUT: Transition["ease"] = [0.65, 0, 0.35, 1];

export const DURATION = {
  fast: 0.4,
  base: 0.7,
  slow: 1.1,
} as const;

/** Container that staggers its children into place, like layers landing one by one. */
export const layerStagger = (stagger = 0.08, delayChildren = 0): Variants => ({
  hidden: {},
  visible: {
    transition: { staggerChildren: stagger, delayChildren },
  },
});

/** A single layer settling into position: slight rise + depth + focus. */
export const layerIn: Variants = {
  hidden: { opacity: 0, y: 26, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
};

/** Layer that drops in from depth (z-axis feel) — used for stacked cards. */
export const layerDrop: Variants = {
  hidden: { opacity: 0, y: 40, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: DURATION.slow, ease: EASE_OUT },
  },
};

/** Horizontal assembly (from the side). */
export const layerInX = (from: "left" | "right" = "left"): Variants => ({
  hidden: { opacity: 0, x: from === "left" ? -32 : 32, filter: "blur(6px)" },
  visible: {
    opacity: 1,
    x: 0,
    filter: "blur(0px)",
    transition: { duration: DURATION.base, ease: EASE_OUT },
  },
});

/** A construction line that draws itself (blueprint cue). */
export const drawLine: Variants = {
  hidden: { scaleX: 0 },
  visible: {
    scaleX: 1,
    transition: { duration: DURATION.slow, ease: EASE_IN_OUT },
  },
};

/** Standard viewport config for scroll-triggered reveals. */
export const inViewOnce = { once: true, amount: 0.35, margin: "0px 0px -10% 0px" } as const;
