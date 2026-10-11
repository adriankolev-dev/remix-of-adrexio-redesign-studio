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

const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => {
  return (
    <Reveal delay={(index % 2) * 0.08}>
      <Link
        to={`/case-studies/${study.id}`}
        className="group block"
        onMouseEnter={prefetchCaseStudy}
        onFocus={prefetchCaseStudy}
      >
        {/* Framed screenshot */}
        <div className="relative overflow-hidden rounded-2xl border border-border bg-secondary shadow-sm transition-shadow duration-500 group-hover:shadow-lg">
          <div className="aspect-[16/10] overflow-hidden">
            <img
              src={study.image}
              alt={study.title}
              width={1600}
              height={1000}
              loading="lazy"
              decoding="async"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
            />
          </div>
          {!study.isPublic && (
            <span className="font-mono-meta absolute left-3 top-3 inline-flex items-center gap-1.5 rounded-full border border-border bg-background/80 px-2.5 py-1 text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground backdrop-blur-sm">
              <Lock className="h-2.5 w-2.5" />
              Вътрешна
            </span>
          )}
        </div>

        {/* Caption below — editorial, not overlaid */}
        <div className="mt-5 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono-meta text-[0.6rem] uppercase tracking-[0.14em] text-primary">
              {study.category}
            </div>
            <h3 className="font-display mt-2 text-xl font-semibold md:text-2xl tracking-tight text-foreground">
              {study.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground md:text-base">{study.subtitle}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </Link>
    </Reveal>
  );
};

export default CaseStudyCard;
