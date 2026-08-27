import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";
import { cancelFrame, frame } from "framer-motion";
import { setLenis } from "@/lib/lenis";

/**
 * Drive Lenis from Framer Motion's frame loop so `useScroll` / `useTransform`
 * read the same timestamp Lenis writes. Two competing rAF loops is what
 * makes the page hitch while section animations still look fine.
 */
const useSmoothScroll = () => {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const coarsePointer = window.matchMedia("(pointer: coarse)").matches;
    if (reduceMotion || coarsePointer) return;

    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 2,
    });

    setLenis(lenis);

    const update = ({ timestamp }: { timestamp: number }) => {
      lenis.raf(timestamp);
    };

    frame.update(update, true);

    return () => {
      cancelFrame(update);
      lenis.destroy();
      setLenis(null);
    };
  }, []);
};

export default useSmoothScroll;
