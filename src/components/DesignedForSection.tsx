import { motion } from "framer-motion";

const CATEGORIES = [
  { id: "tl", label: "Стартъпи", position: "top-left" },
  { id: "bl", label: "Фрийлансъри", position: "bottom-left" },
  { id: "tr", label: "Онлайн бизнеси", position: "top-right" },
  { id: "br", label: "Брандове", position: "bottom-right" },
] as const;

export default function DesignedForSection() {
  return (
    <section className="relative py-24 overflow-hidden bg-background">
      {/* Deep dark gradient overlay for extra depth */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/30 via-transparent to-card/20 pointer-events-none" />

      <div className="container relative z-10 mx-auto px-6">
        {/* Main title */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-3xl font-bold tracking-tight text-white md:text-4xl lg:text-5xl font-display mb-16"
        >
          За кого е подходящо?
        </motion.h2>

        {/* Desktop: grid with center + connecting lines + categories */}
        <div className="relative min-h-[420px] md:min-h-[480px] lg:min-h-[520px]">
          {/* Central celestial element - visible on all breakpoints */}
          <div className="absolute left-1/2 top-1/2 z-20 flex h-0 w-0 -translate-x-1/2 -translate-y-1/2 items-center justify-center md:top-1/2">
            <div className="relative flex h-[180px] w-[180px] items-center justify-center md:h-[220px] md:w-[220px] lg:h-[260px] lg:w-[260px]">
              {/* Outer glow / nebula particles */}
              <motion.div
                animate={{ opacity: [0.3, 0.6, 0.3] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute inset-0 rounded-full bg-primary/20 blur-3xl"
              />
              {/* Shimmer particles around sphere */}
              {[...Array(12)].map((_, i) => {
                const angle = (i / 12) * 360 * (Math.PI / 180);
                const r = 42;
                const x = 50 + r * Math.cos(angle);
                const y = 50 + r * Math.sin(angle);
                return (
                  <motion.div
                    key={i}
                    animate={{ opacity: [0.2, 0.5, 0.2] }}
                    transition={{
                      duration: 2 + (i % 3) * 0.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: i * 0.1,
                    }}
                    className="absolute h-1 w-1 rounded-full bg-primary/60"
                    style={{
                      left: `${x}%`,
                      top: `${y}%`,
                      transform: "translate(-50%, -50%)",
                    }}
                  />
                );
              })}
              {/* Main sphere */}
              <motion.div
                animate={{
                  boxShadow: [
                    "0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.25)",
                    "0 0 60px hsl(var(--primary) / 0.6), 0 0 120px hsl(var(--primary) / 0.3)",
                    "0 0 40px hsl(var(--primary) / 0.5), 0 0 80px hsl(var(--primary) / 0.25)",
                  ],
                }}
                transition={{
                  duration: 2.5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="relative h-20 w-20 rounded-full bg-gradient-to-br from-primary to-primary/80 shadow-[0_0_40px_hsl(var(--primary)/0.5)] md:h-24 md:w-24 lg:h-28 lg:w-28"
              />
              {/* Orbiting arc + small sphere */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute inset-0 flex items-center justify-center"
              >
                <svg
                  className="absolute h-full w-full text-primary"
                  viewBox="0 0 100 100"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="0.5"
                  strokeLinecap="round"
                >
                  <defs>
                    <linearGradient
                      id="orbitGradient"
                      x1="0%"
                      y1="0%"
                      x2="100%"
                      y2="100%"
                    >
                      <stop
                        offset="0%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity="0.8"
                      />
                      <stop
                        offset="100%"
                        stopColor="hsl(var(--primary))"
                        stopOpacity="0.2"
                      />
                    </linearGradient>
                  </defs>
                  <circle
                    cx="50"
                    cy="50"
                    r="42"
                    stroke="url(#orbitGradient)"
                    strokeDasharray="4 2"
                    opacity="0.8"
                  />
                </svg>
                <div className="absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1 rounded-full bg-primary shadow-[0_0_12px_hsl(var(--primary))] md:h-4 md:w-4" />
              </motion.div>
            </div>
          </div>

          {/* Connecting lines: center → bend → bullet; bend points toward each label */}
          <svg
            className="absolute inset-0 h-full w-full pointer-events-none opacity-70 hidden sm:block"
            viewBox="0 0 100 100"
            preserveAspectRatio="xMidYMid meet"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="hsl(var(--primary) / 0.4)" />
                <stop offset="50%" stopColor="hsl(var(--primary))" />
                <stop offset="100%" stopColor="hsl(var(--primary) / 0.4)" />
              </linearGradient>
              <filter id="lineGlow">
                <feGaussianBlur stdDeviation="0.5" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            {/* Center (50,50). Labels at top-[22%]/bottom-[22%] → y=22,78. Bullet at start: left x≈5, right x≈95 */}
            {/* Top-left: center → bend (26,22) → bullet (5,22) — last segment horizontal toward bullet */}
            <path
              d="M 50 50 L 26 22 L 5 22"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lineGlow)"
            />
            {/* Bottom-left: center → bend (26,78) → bullet (5,78) */}
            <path
              d="M 50 50 L 26 78 L 5 78"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lineGlow)"
            />
            {/* Top-right: center → bend (74,22) → bullet (95,22) */}
            <path
              d="M 50 50 L 74 22 L 95 22"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lineGlow)"
            />
            {/* Bottom-right: center → bend (74,78) → bullet (95,78) */}
            <path
              d="M 50 50 L 74 78 L 95 78"
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.4"
              strokeLinecap="round"
              strokeLinejoin="round"
              filter="url(#lineGlow)"
            />
          </svg>

          {/* Category labels - desktop: corners (hidden on mobile) */}
          <div className="absolute left-0 top-[22%] hidden items-center gap-2 sm:flex sm:gap-3">
            <CategoryItem label={CATEGORIES[0].label} />
          </div>
          <div className="absolute left-0 bottom-[22%] hidden items-center gap-2 sm:flex sm:gap-3">
            <CategoryItem label={CATEGORIES[1].label} />
          </div>
          <div className="absolute right-0 top-[22%] hidden items-center gap-2 sm:flex sm:gap-3 sm:justify-end">
            <CategoryItem label={CATEGORIES[2].label} />
          </div>
          <div className="absolute right-0 bottom-[22%] hidden items-center gap-2 sm:flex sm:gap-3 sm:justify-end">
            <CategoryItem label={CATEGORIES[3].label} />
          </div>
        </div>

        {/* Mobile: stacked categories below center */}
        <div className="mt-8 flex flex-col gap-6 sm:hidden max-w-xs mx-auto">
          {CATEGORIES.map((cat) => (
            <div
              key={cat.id}
              className="flex items-center justify-center gap-2"
            >
              <CategoryItem label={cat.label} />
            </div>
          ))}
        </div>

        {/* Bottom caption */}
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center text-sm text-muted-foreground md:text-base mt-16 max-w-xl mx-auto"
        >
          И за всеки, който иска да превърне хаоса в работеща система.
        </motion.p>
      </div>
    </section>
  );
}

function CategoryItem({ label }: { label: string }) {
  return (
    <motion.div
      className="group flex cursor-default items-center gap-2 sm:gap-3"
      whileHover={{ scale: 1.02 }}
    >
      <span
        className="h-2 w-2 flex-shrink-0 rounded-full bg-primary shadow-[0_0_8px_hsl(var(--primary))] transition-shadow duration-200 group-hover:shadow-[0_0_14px_hsl(var(--primary)),0_0_20px_hsl(var(--primary)/0.6)]"
        aria-hidden
      />
      <span className="font-display font-medium text-white whitespace-nowrap text-sm sm:text-base transition-all duration-200 group-hover:[text-shadow:0_0_12px_hsl(var(--primary)/0.8)]">
        {label}
      </span>
    </motion.div>
  );
}
