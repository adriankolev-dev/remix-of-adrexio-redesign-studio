import blob0 from "@/assets/mockup/blob-0.webp";
import blob1 from "@/assets/mockup/blob-1.webp";
import blob2 from "@/assets/mockup/blob-2.webp";
import { cn } from "@/lib/utils";

/** Mobile screenshots of the live client sites, keyed by case study id (file name). */
const MOBILE_SHOTS = import.meta.glob<string>("/src/assets/case-studies/mobile/*.webp", {
  eager: true,
  import: "default",
});

export const getMobileShot = (id: string): string | undefined =>
  MOBILE_SHOTS[`/src/assets/case-studies/mobile/${id}.webp`];

export type StageTone = "light" | "dark";

/**
 * Organic shapes for the brand-blue accent behind the devices, in a 400×300 box.
 * Cards cycle through them so a grid of projects doesn't repeat one shape.
 */
const BLOBS: { className: string }[] = [
  { className: "-left-[7%] top-[8%] w-[60%]" }, // left, rising behind the laptop
  { className: "-right-[7%] -top-[8%] w-[60%]" }, // right, behind the far edge and the phone
  { className: "-left-[5%] -top-[12%] w-[66%]" }, // high on the left, behind the screen
];
const BLOB_IMAGES = [blob0, blob1, blob2];

interface DeviceMockupProps {
  desktop: string;
  mobile?: string;
  alt: string;
  tone?: StageTone;
  /** Picks the accent shape; pass the card's index. */
  variant?: number;
  /** Wider 16:9 stage for full-width placements (project page, featured card). */
  wide?: boolean;
  className?: string;
}

/**
 * A laptop with the desktop screenshot and, when there is one, a phone with the
 * mobile screenshot, on a lit stage with a soft brand-blue shape behind them.
 * Pure CSS and inline SVG, so it scales with the card.
 */
const DeviceMockup = ({ desktop, mobile, alt, tone = "light", variant = 0, wide = false, className }: DeviceMockupProps) => {
  const dark = tone === "dark";
  const blob = BLOBS[variant % BLOBS.length];

  return (
    <div
      className={cn(
        "relative isolate overflow-hidden rounded-[0.25rem]",
        dark ? "bg-[#0b0c0f]" : "bg-[#f3f7fa]",
        className,
      )}
    >
      {/* key light from above */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-20"
        style={{
          background: dark
            ? "radial-gradient(70% 60% at 45% 0%, rgba(255,255,255,0.13), transparent 70%)"
            : "radial-gradient(80% 70% at 50% 10%, #ffffff 0%, rgba(255,255,255,0) 70%), linear-gradient(180deg, #f6f9fb 0%, #e8eef3 100%)",
        }}
      />

      {/* Brand accent, pre-rendered (see src/assets/mockup): a live SVG blur on every
          card was costly to paint. The image covers the 400×300 shape box plus
          100 units of glow on each side, hence the -25% / -33.3% / 150% placement. */}
      <div aria-hidden className={cn("pointer-events-none absolute -z-10 aspect-[4/3]", blob.className)}>
        <img
          src={BLOB_IMAGES[variant % BLOB_IMAGES.length]}
          alt=""
          width={960}
          height={800}
          loading="lazy"
          decoding="async"
          className={cn("absolute left-[-25%] top-[-33.333%] w-[150%] max-w-none", dark && "opacity-50")}
        />
      </div>

      <div className={cn("relative flex items-center px-[7%]", wide ? "aspect-[16/9]" : "aspect-[3/2]")}>
        {/* Laptop */}
        <div
          className={cn(
            "relative transition-transform duration-700 ease-out",
            mobile
              ? wide ? "ml-[14%] w-[60%]" : "ml-[1%] w-[72%]"
              : wide ? "mx-auto w-[66%]" : "mx-auto w-[80%]",
          )}
        >
          {/* floor shadow */}
          <div
            aria-hidden
            className={cn(
              "absolute -bottom-[6%] left-[2%] right-[2%] h-[12%] rounded-[50%] blur-2xl",
              dark ? "bg-black/80" : "bg-[#0b2a3a]/30",
            )}
          />
          {/* lid */}
          <div
            className={cn(
              "relative rounded-t-[0.9rem] p-[1.8%] pb-[2.4%]",
              dark
                ? "bg-[#17181b] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.08)]"
                : "bg-[#1b1c1f] shadow-[inset_0_0_0_1px_rgba(255,255,255,0.10),0_30px_60px_-30px_rgba(11,42,58,0.55)]",
            )}
          >
            <span aria-hidden className="absolute left-1/2 top-[0.7%] h-[1.1%] w-[1.1%] -translate-x-1/2 rounded-full bg-[#2b2d31]" />
            <div className="aspect-[16/10] overflow-hidden rounded-[2px] bg-black">
              <img
                src={desktop}
                alt={alt}
                width={1600}
                height={1000}
                loading="lazy"
                decoding="async"
                className="block h-full w-full object-cover object-top"
              />
            </div>
          </div>
          {/* base */}
          <div
            className="relative -mx-[7%] aspect-[100/2.6] rounded-b-[0.75rem]"
            style={{
              background: dark
                ? "linear-gradient(180deg,#c9ccd2 0%,#8d9097 55%,#5d6066 100%)"
                : "linear-gradient(180deg,#eef0f3 0%,#b9bcc3 55%,#8a8e96 100%)",
            }}
          >
            <span aria-hidden className="absolute left-1/2 top-0 h-[45%] w-[15%] -translate-x-1/2 rounded-b-md bg-black/15" />
          </div>

        {/* Phone: in front of the laptop, over the screen's right edge and a little below the base */}
        {mobile && (
          <div className="absolute -bottom-[7%] -right-[19%] z-10 w-[25%] transition-transform duration-700 ease-out group-hover:-translate-y-2">
            <div
              aria-hidden
              className={cn(
                "absolute -bottom-[3%] left-[8%] right-[8%] h-[6%] rounded-[50%] blur-xl",
                dark ? "bg-black/90" : "bg-[#0b2a3a]/40",
              )}
            />
            <div className="relative rounded-[18%/8.5%] bg-[#0e0f11] p-[4.5%] shadow-[inset_0_0_0_1.5px_rgba(255,255,255,0.14),0_24px_40px_-14px_rgba(11,42,58,0.55)]">
              <div className="relative aspect-[390/844] overflow-hidden rounded-[14%/6.6%] bg-black">
                <img
                  src={mobile}
                  alt=""
                  aria-hidden
                  loading="lazy"
                  decoding="async"
                  className="block h-full w-full object-cover object-top"
                />
                <span aria-hidden className="absolute left-1/2 top-[1.6%] h-[3.2%] w-[32%] -translate-x-1/2 rounded-full bg-black" />
              </div>
            </div>
          </div>
        )}
        </div>
      </div>
    </div>
  );
};

export default DeviceMockup;
