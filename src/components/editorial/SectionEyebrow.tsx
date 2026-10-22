interface SectionEyebrowProps {
  label: string;
  /** Two-digit index rendered as a construction marker, e.g. "01". */
  index?: string;
  className?: string;
}

/**
 * SectionEyebrow — a mono, uppercase meta-label with an optional index.
 * This is the "design-tool voice": it frames each section like a labelled
 * layer on the canvas rather than a decorative badge.
 */
const SectionEyebrow = ({ label, index, className }: SectionEyebrowProps) => {
  return (
    <div className={`flex items-center gap-3 ${className ?? ""}`}>
      {index && (
        <span className="eyebrow text-foreground">{index}</span>
      )}
      <span className="eyebrow">{label}</span>
    </div>
  );
};

export default SectionEyebrow;
