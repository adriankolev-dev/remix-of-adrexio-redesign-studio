import { useState } from "react";
import { AnimatePresence, motion, useAnimationControls, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";
import AdrexchoArt from "./AdrexchoArt";

const EASE_OUT = [0.16, 1, 0.3, 1] as const;

/**
 * The art is square, with the legs running from 75% down. Showing the top 82%
 * cuts mid-leg, so the cut reads as an edge he is standing behind rather than
 * as a cropped picture.
 */
const ART_W = 104;
const ART_H = ART_W;
const RISE = 9; // extra body revealed when he pops up on hover
const BOX_H = Math.round(ART_H * 0.82) + RISE;

const LINES = [
  "Здрасти, аз съм Адрексчо 👋",
  "Стигна до долу. Уважавам!",
  "Натисни пак — обичам вниманието.",
  "Сайт ли ти трябва? Горе има бутон.",
];

/**
 * AdrexchoPeek — the studio mascot peeking over the footer's top edge. Lives in
 * a zero-height strip pinned to the footer's top so it never takes layout space
 * from the section above; the clip box does the hiding, so the cut always lands
 * on the hairline no matter what page it is.
 */
const AdrexchoPeek = ({ className }: { className?: string }) => {
  const reduceMotion = useReducedMotion();
  const wave = useAnimationControls();
  const [active, setActive] = useState(false);
  const [line, setLine] = useState(0);

  const handleClick = () => {
    setActive(true);
    setLine((l) => (l + 1) % LINES.length);
    if (!reduceMotion) {
      wave.start({ rotate: [0, -5, 3, 0] }, { duration: 0.65, ease: "easeInOut" });
    }
  };

  return (
    <div className={cn("pointer-events-none absolute inset-x-0 top-0 z-20 h-0", className)}>
      <div className="relative">
        <div className="absolute bottom-0 right-0 flex items-end">
          <AnimatePresence>
            {active && (
              <motion.span
                role="status"
                initial={{ opacity: 0, y: 6, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 6, scale: 0.94 }}
                transition={{ duration: 0.24, ease: EASE_OUT }}
                className="layer-shadow mb-8 mr-2 hidden origin-bottom-right whitespace-nowrap rounded-full border border-border bg-card px-3.5 py-2 text-xs font-medium text-foreground sm:block"
              >
                {LINES[line]}
              </motion.span>
            )}
          </AnimatePresence>

          <button
            type="button"
            aria-label="Адрексчо — маскотът на adrexio"
            onMouseEnter={() => setActive(true)}
            onMouseLeave={() => setActive(false)}
            onFocus={() => setActive(true)}
            onBlur={() => setActive(false)}
            onClick={handleClick}
            className="pointer-events-auto relative block origin-bottom scale-90 overflow-hidden rounded-sm ring-offset-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary sm:scale-100"
            style={{ width: ART_W, height: BOX_H }}
          >
            {/* Two nested layers so the idle bob and the hover rise never fight
                over `y` — a shared value would snap when the bob keyframes
                restart on mouse-leave. */}
            <motion.span
              className="absolute left-0 block w-full"
              style={{ top: RISE }}
              animate={reduceMotion ? { y: 0 } : { y: [0, -3, 0] }}
              transition={
                reduceMotion ? undefined : { duration: 4.5, repeat: Infinity, ease: "easeInOut" }
              }
            >
              <motion.span
                className="block w-full"
                animate={{ y: active ? -RISE : 0 }}
                transition={{ duration: 0.32, ease: EASE_OUT }}
              >
                <motion.span
                  className="block w-full"
                  animate={wave}
                  style={{ transformOrigin: "50% 100%" }}
                >
                  <AdrexchoArt className="block h-auto w-full" />
                </motion.span>
              </motion.span>
            </motion.span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdrexchoPeek;
