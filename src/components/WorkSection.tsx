import { Link } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";
import { getFeaturedCaseStudies } from "@/data/caseStudies";
import { prefetchCaseStudy } from "@/lib/prefetchRoute";

const featured = getFeaturedCaseStudies();

const WorkSection = () => (
  <section id="work" className="bg-background pb-16 pt-10 md:pb-24 md:pt-14">
    <div className="container mx-auto px-6">
      <SectionHeader
        title="Част от проектите."
        description="Сайтове и онлайн магазини, изградени от нулата. Всеки има своя страница с решенията и резултатите."
        action={
          <Button variant="line" size="default" asChild>
            <Link to="/case-studies">
              Всички проекти
              <ArrowUpRight />
            </Link>
          </Button>
        }
      />

      <div className="grid gap-4 md:grid-cols-2">
        {featured.map((study, i) => (
          <Reveal key={study.id} delay={(i % 2) * 0.06}>
            <Link
              to={`/case-studies/${study.id}`}
              onMouseEnter={prefetchCaseStudy}
              onFocus={prefetchCaseStudy}
              className="group flex h-full flex-col gap-5 rounded-md bg-secondary p-3 transition-colors hover:bg-secondary/70 sm:flex-row sm:items-stretch md:p-4"
            >
              {/* Natural aspect ratio: the screenshots vary (16:10, 16:9, 1.9:1) and none get cropped. */}
              <div className="relative self-start overflow-hidden rounded-[0.25rem] bg-muted sm:w-[52%] sm:shrink-0">
                <img
                  src={study.image}
                  alt={study.title}
                  width={1600}
                  height={1000}
                  loading="lazy"
                  decoding="async"
                  className="block h-auto w-full transition-transform duration-700 group-hover:scale-[1.03]"
                />
              </div>

              <div className="flex min-w-0 flex-1 flex-col justify-between gap-6 px-1 pb-1 sm:py-1">
                <div>
                  <span className="text-xs font-semibold tabular-nums text-muted-foreground">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-2 text-2xl font-semibold leading-tight tracking-[-0.03em] text-foreground md:text-[1.7rem]">
                    {study.title}
                  </h3>
                  <p className="mt-1 text-sm text-muted-foreground">{study.category}</p>
                </div>
                <span className="inline-flex items-center gap-2 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-foreground">
                  Виж проекта
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                  />
                </span>
              </div>
            </Link>
          </Reveal>
        ))}
      </div>
    </div>
  </section>
);

export default WorkSection;
