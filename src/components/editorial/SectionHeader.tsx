import type { ReactNode } from "react";
import Reveal from "./Reveal";
import SectionEyebrow from "./SectionEyebrow";
import HandNote from "./HandNote";

interface SectionHeaderProps {
  index?: string;
  label: string;
  title: ReactNode;
  description?: string;
  /** Optional handwritten aside shown under the header. */
  note?: ReactNode;
  align?: "left" | "center";
  className?: string;
}

const SectionHeader = ({
  index,
  label,
  title,
  description,
  note,
  align = "left",
  className = "",
}: SectionHeaderProps) => {
  const alignClass = align === "center" ? "mx-auto text-center items-center" : "text-left";

  return (
    <div className={`mb-14 max-w-3xl ${alignClass} ${className}`}>
      <Reveal>
        <SectionEyebrow label={label} index={index} />
      </Reveal>
      <Reveal delay={0.08}>
        <h2 className="mt-6 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
          {title}
        </h2>
      </Reveal>
      {description && (
        <Reveal delay={0.16}>
          <p className="mt-5 text-lg leading-relaxed text-muted-foreground">{description}</p>
        </Reveal>
      )}
      {note && (
        <HandNote
          className={align === "center" ? "mt-6 flex flex-col items-center" : "mt-6"}
          rotate={-3}
        >
          {note}
        </HandNote>
      )}
    </div>
  );
};

export default SectionHeader;
