import type { ReactNode } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MascotFrameProps {
  /** Mono meta tag, top-left (e.g. "AI · online"). */
  tag: string;
  /** Small status line in the footer bar. */
  status: string;
  /** The SVG artwork. Should be a single <svg viewBox="0 0 200 200"> element. */
  children: ReactNode;
  /** Disable the gentle idle bob (e.g. when the art has its own motion). */
  bob?: boolean;
  className?: string;
}

/**
 * MascotFrame — the shared "framed glyph" shell for the studio's line-art
 * accents. Same card language as the hero layers: rounded border, blueprint
 * grid, a mono tag and a hairline status bar with a pulsing dot. Keeps every
 * mascot in one visual family so the site feels playful but coherent.
 */
const MascotFrame = ({ tag, status, children, bob = true, className }: MascotFrameProps) => {
  const reduceMotion = useReducedMotion();
  const animateBob = bob && !reduceMotion;

  return (
    <div className={cn("relative mx-auto w-full max-w-[340px]", className)}>
      <div className="layer-shadow relative overflow-hidden rounded-2xl border border-border bg-card">
        <div className="canvas-grid absolute inset-0 opacity-50" aria-hidden />

        <span className="font-mono-meta absolute left-4 top-4 z-10 inline-flex items-center gap-1.5 text-[0.6rem] uppercase tracking-[0.18em] text-muted-foreground">
          <span className="h-1.5 w-1.5 rounded-full bg-primary" />
          {tag}
        </span>

        <div className="relative flex aspect-square items-center justify-center p-8">
          <motion.div
            className="h-full w-full"
            animate={animateBob ? { y: [0, -10, 0] } : undefined}
            transition={
              animateBob ? { duration: 5, repeat: Infinity, ease: "easeInOut" } : undefined
            }
          >
            {children}
          </motion.div>
        </div>

        <div className="flex items-center gap-2 border-t border-border px-4 py-3">
          <span className="font-mono-meta text-[0.58rem] uppercase tracking-[0.16em] text-muted-foreground">
            {status}
          </span>
          <motion.span
            className="ml-auto h-1.5 w-1.5 shrink-0 rounded-full bg-primary"
            animate={reduceMotion ? undefined : { opacity: [1, 0.3, 1] }}
            transition={reduceMotion ? undefined : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MascotFrame;
