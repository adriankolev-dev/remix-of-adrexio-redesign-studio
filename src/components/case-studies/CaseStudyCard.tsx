import { Link } from "react-router-dom";
import { ArrowUpRight, Lock } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";
import Reveal from "@/components/editorial/Reveal";

interface CaseStudyCardProps {
  study: CaseStudy;
  index: number;
  variant?: "default" | "featured";
}

const CaseStudyCard = ({ study, index }: CaseStudyCardProps) => {
  return (
    <Reveal delay={(index % 3) * 0.06}>
      <Link to={`/case-studies/${study.id}`} className="group block">
        {/* Framed screenshot */}
        <div className="relative overflow-hidden rounded-xl border border-border bg-secondary">
          <div className="aspect-[4/3] overflow-hidden">
            <img
              src={study.image}
              alt={study.title}
              loading="lazy"
              className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.04]"
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
        <div className="mt-4 flex items-start justify-between gap-4">
          <div className="min-w-0">
            <div className="font-mono-meta text-[0.6rem] uppercase tracking-[0.14em] text-primary">
              {study.category}
            </div>
            <h3 className="font-display mt-1.5 truncate text-lg font-semibold tracking-tight text-foreground">
              {study.title}
            </h3>
            <p className="mt-1 truncate text-sm text-muted-foreground">{study.subtitle}</p>
          </div>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-muted-foreground transition-all duration-300 group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-primary" />
        </div>
      </Link>
    </Reveal>
  );
};

export default CaseStudyCard;
