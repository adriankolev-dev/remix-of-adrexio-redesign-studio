/**
 * Adrexcho — the studio's own character, drawn flat in brand colours.
 *
 * Deliberately uses only the theme-stable tokens: --primary, --ink and
 * --ink-foreground read the same in light, dark and inside `.layer-dark`. The
 * art overlaps whatever section precedes the footer while inheriting the
 * footer's tokens, so anything built on --foreground would vanish on the dark
 * CTA sections.
 *
 * Composed on a 200×200 grid: shapes float above y=48, the body sits between
 * y=42 and y=150, the legs run y=150→198. A clip anywhere around y=164 cuts
 * mid-leg, which is what lets him peek over an edge.
 */
const CYAN = "hsl(var(--primary))";
const INK = "hsl(var(--ink))";
const LIGHT = "hsl(var(--ink-foreground))";

const AdrexchoArt = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 200 200" className={className} fill="none" aria-hidden focusable="false">
    {/* floating shapes — the character's signature confetti, trimmed to three */}
    <path
      d="M 127.5,18.3 Q 130,14 132.5,18.3 L 138.5,28.7 Q 141,33 136,33 L 124,33 Q 119,33 121.5,28.7 Z"
      fill={CYAN}
    />
    <rect x="54" y="34" width="14" height="14" rx="4" fill={CYAN} opacity="0.5" />
    <circle cx="172" cy="74" r="6.5" fill={CYAN} opacity="0.45" />

    {/* legs + feet (the part an edge clips through) */}
    <g stroke={INK} strokeWidth="11" strokeLinecap="round">
      <path d="M 82,150 L 78,180" />
      <path d="M 118,150 L 124,180" />
    </g>
    <ellipse cx="74" cy="188" rx="15" ry="8" fill={INK} />
    <ellipse cx="128" cy="188" rx="15" ry="8" fill={INK} />

    {/* lowered arm, behind the body */}
    <path d="M 150,126 C 160,132 168,138 172,145" stroke={INK} strokeWidth="9" strokeLinecap="round" />
    <ellipse cx="176" cy="151" rx="11" ry="9" fill={INK} />

    {/* raised arm, mid-wave */}
    <path d="M 50,122 C 38,116 30,106 27,94" stroke={INK} strokeWidth="9" strokeLinecap="round" />
    <ellipse cx="24" cy="84" rx="12" ry="10" fill={INK} transform="rotate(-20 24 84)" />
    <path d="M 18,77 L 12,69" stroke={INK} strokeWidth="7" strokeLinecap="round" />

    {/* body — rounded triangle */}
    <path
      d="M 87.5,62.5 Q 100,42 112.5,62.5 L 153.5,129.5 Q 166,150 142,150 L 58,150 Q 34,150 46.5,129.5 Z"
      fill={CYAN}
    />

    {/* visor */}
    <path
      d="M 91.8,92.6 Q 100,80 108.2,92.6 L 129.8,125.4 Q 138,138 123,138 L 77,138 Q 62,138 70.2,125.4 Z"
      fill={INK}
    />

    {/* eyes — two arches, the character's whole expression */}
    <g stroke={LIGHT} strokeWidth="6" strokeLinecap="round">
      <path d="M 81,122 Q 88,109 95,122" />
      <path d="M 105,122 Q 112,109 119,122" />
    </g>
  </svg>
);

export default AdrexchoArt;
