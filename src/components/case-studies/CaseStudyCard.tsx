import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import Reveal from "@/components/editorial/Reveal";
import { prefetchCaseStudy } from "@/lib/prefetchRoute";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: "default" | "featured";
}

/** A grey panel with the screenshot at its own aspect ratio and the caption under it. */
const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => (
  <Reveal delay={(index % 2) * 0.06} className="h-full">
    <Link
      to={`/case-studies/${study.id}`}
      className="group flex h-full flex-col rounded-md bg-secondary p-3 transition-colors hover:bg-secondary/70 md:p-4"
      onMouseEnter={prefetchCaseStudy}
      onFocus={prefetchCaseStudy}
    >
      <div className="relative overflow-hidden rounded-[0.25rem] bg-muted">
        <img
          src={study.image}
          alt={study.title}
          width={1600}
          height={1000}
          loading="lazy"
          decoding="async"
          className="block h-auto w-full transition-transform duration-700 ease-out group-hover:scale-[1.03]"
        />
        {!study.isPublic && (
          <span className="absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1 text-[0.62rem] font-bold uppercase tracking-[0.08em] text-foreground backdrop-blur-sm">
            <Lock className="h-3 w-3" />
            Вътрешна
          </span>
        )}
      </div>

      <div className="flex flex-1 items-start justify-between gap-4 px-1 pb-2 pt-5 md:px-2">
        <div className="min-w-0">
          <p className="eyebrow">{study.category}</p>
          <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.7rem]">
            {study.title}
          </h3>
          <p className="mt-2 text-[0.95rem] leading-relaxed text-muted-foreground">{study.subtitle}</p>
        </div>
        <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-foreground transition-transform duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
      </div>
    </Link>
  </Reveal>
);

export default CaseStudyCard;
