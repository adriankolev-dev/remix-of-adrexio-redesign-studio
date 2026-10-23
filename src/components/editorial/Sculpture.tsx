import { useRef } from "react";
import {
  motion,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import fragmented from "@/assets/sculptures/fragmented-1024.webp";
import fragmentedSmall from "@/assets/sculptures/fragmented-640.webp";
import layered from "@/assets/sculptures/layered-1024.webp";
import layeredSmall from "@/assets/sculptures/layered-640.webp";
import rawPolished from "@/assets/sculptures/raw-polished-1024.webp";
import rawPolishedSmall from "@/assets/sculptures/raw-polished-640.webp";

/**
 * The three stones that extend the hero „A“: one per idea, never two side by side.
 * - fragmented: separate services that make one system (/services)
 * - layered: disciplines stacked into one result (homepage process)
 * - raw-polished: rough work under a simple surface (/about)
 */
// `shadow`: where the floor shadow sits, in % of the square image. The stones fill
// only part of their canvas, so it follows each stone's measured bottom edge and
// centre rather than the image box. Resting stones get a tight contact shadow like
// the hero „A“; floating ones a wider, softer one with a gap.
const STONES = {
  fragmented: {
    src: fragmented,
    small: fragmentedSmall,
    shadow: { top: 94, center: 51, width: 52, height: 6, opacity: 0.16 },
  },
  layered: {
    src: layered,
    small: layeredSmall,
    shadow: { top: 96.5, center: 50.6, width: 44, height: 5.5, opacity: 0.2 },
  },
  "raw-polished": {
    src: rawPolished,
    small: rawPolishedSmall,
    shadow: { top: 88.5, center: 53, width: 62, height: 7, opacity: 0.32 },
  },
} as const;

interface SculptureProps {
  stone: keyof typeof STONES;
  /** Rendered width hint for the browser; the images are square. */
  sizes: string;
  className?: string;
  /** Drift a little against the scroll. Off under reduced motion. */
  drift?: boolean;
}

/** Decorative only: hidden from assistive tech, lazy, with fixed dimensions so nothing shifts. */
const Sculpture = ({
  stone,
  sizes,
  className = "",
  drift = false,
}: SculptureProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const reduceMotion = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["6%", "-6%"]);
  const { src, small, shadow } = STONES[stone];

  return (
    <div ref={ref} className={className} aria-hidden>
      <div className="relative">
        <span
          className="pointer-events-none absolute -translate-x-1/2 rounded-[50%] blur-[6px]"
          style={{
            top: `${shadow.top}%`,
            left: `${shadow.center}%`,
            width: `${shadow.width}%`,
            height: `${shadow.height}%`,
            background: `radial-gradient(closest-side, hsl(var(--stone-shadow) / ${shadow.opacity}), transparent)`,
          }}
        />
        <motion.img
          src={src}
          srcSet={`${small} 640w, ${src} 1024w`}
          sizes={sizes}
          alt=""
          width={1024}
          height={1024}
          loading="lazy"
          decoding="async"
          className="pointer-events-none relative block h-auto w-full select-none"
          style={drift && !reduceMotion ? { y } : undefined}
        />
      </div>
    </div>
  );
};

export default Sculpture;
