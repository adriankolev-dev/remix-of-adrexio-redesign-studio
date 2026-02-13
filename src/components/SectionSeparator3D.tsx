import { motion } from "framer-motion";

/** 3D extruded text effect via stacked text-shadow (depth layers) */
const textShadow3D = (steps = 10) =>
  Array.from({ length: steps }, (_, i) => {
    const n = i + 1;
    const alpha = 0.5 - (n / (steps + 1)) * 0.45;
    return `${n}px ${n}px 0 hsl(var(--primary) / ${alpha})`;
  }).join(", ");

/**
 * Lightweight 3D-style separator between sections.
 * Uses CSS 3D transforms and framer-motion (no Three.js).
 */
const SectionSeparator3D = () => {
  return (
    <section className="py-6 md:py-8 relative overflow-hidden" aria-hidden>
      <div className="container mx-auto px-6 flex justify-center items-center min-h-[100px]">
        <div
          className="relative w-28 h-28 md:w-32 md:h-32"
          style={{ perspective: "320px" }}
        >
          {/* 3D rotating box */}
          <motion.div
            className="absolute inset-0 rounded-xl border-2 border-primary/50 bg-primary/5 flex items-center justify-center"
            style={{
              transformStyle: "preserve-3d",
              boxShadow: "0 0 30px hsl(var(--primary) / 0.2)",
            }}
            animate={{
              rotateY: [0, 360],
              rotateX: [0, 25, 0],
            }}
            transition={{
              rotateY: { duration: 14, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 5, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          {/* Inner ring for depth */}
          <motion.div
            className="absolute inset-4 rounded-lg border border-primary/30 flex items-center justify-center"
            style={{ transformStyle: "preserve-3d" }}
            animate={{
              rotateY: [0, -360],
              rotateX: [0, -15, 0],
            }}
            transition={{
              rotateY: { duration: 11, repeat: Infinity, ease: "linear" },
              rotateX: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            }}
          />
          {/* ADREXIO + уеб разработка 3D text - centered inside the boxes */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-0.5 pointer-events-none"
            aria-hidden
          >
            <span
              className="font-display font-bold text-primary text-sm md:text-base uppercase tracking-[0.15em] select-none leading-tight"
              style={{
                textShadow: `${textShadow3D(8)}, 0 0 16px hsl(var(--primary) / 0.2)`,
                transform: "translateZ(0)",
              }}
            >
              ADREXIO
            </span>
            <span
              className="font-display font-semibold text-primary/90 text-[10px] md:text-xs select-none leading-tight"
              style={{
                textShadow: `${textShadow3D(8)}, 0 0 12px hsl(var(--primary) / 0.15)`,
                transform: "translateZ(0)",
              }}
            >
              уеб разработка
            </span>
          </div>
        </div>
      </div>
      <div
        className="absolute inset-x-0 bottom-0 h-6 pointer-events-none"
        style={{
          background: "linear-gradient(to bottom, transparent, hsl(var(--background)))",
        }}
      />
    </section>
  );
};

export default SectionSeparator3D;
