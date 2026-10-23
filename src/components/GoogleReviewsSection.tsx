import { useCallback, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowRight, ArrowUpRight, Star } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEWS_URL,
  googleReviews,
  type GoogleReview,
} from "@/data/googleReviews";
import { prefetchCaseStudy } from "@/lib/prefetchRoute";

// Longer than this and the quote is clamped behind a "read all" toggle.
const LONG_REVIEW = 260;

const StarRow = () => (
  <span className="flex items-center gap-0.5" aria-label="5 от 5 звезди">
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={12} className="fill-foreground text-foreground" aria-hidden />
    ))}
  </span>
);

const ReviewCard = ({ review }: { review: GoogleReview }) => {
  const [open, setOpen] = useState(false);
  const long = review.text.length > LONG_REVIEW;

  return (
    <article className="flex h-full flex-col rounded-md bg-secondary p-5 md:p-6">
      <header className="flex gap-4">
        {review.photo && (
          <img
            src={review.photo}
            alt={review.author}
            width={320}
            height={320}
            loading="lazy"
            decoding="async"
            className="h-24 w-24 shrink-0 rounded-[0.25rem] bg-muted object-cover md:h-28 md:w-28"
          />
        )}
        <div className="min-w-0 flex-1 pt-1">
          <p className="text-[0.8rem] font-bold uppercase tracking-[0.06em] text-foreground">
            {review.author}
          </p>
          <p className="mt-1 truncate text-sm text-muted-foreground">
            {review.role ?? "Ревю в Google"}
          </p>
          <div className="mt-3">
            <StarRow />
          </div>
        </div>
        <span
          className="-mt-1 shrink-0 text-5xl font-black leading-none text-primary"
          aria-hidden
        >
          “
        </span>
      </header>

      <div className="mt-5 border-t border-border pt-5">
        <blockquote
          className={`text-[0.98rem] leading-relaxed text-foreground ${
            long && !open ? "line-clamp-6" : ""
          }`}
        >
          „{review.text}“
        </blockquote>
        {long && (
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            className="mt-3 text-[0.7rem] font-bold uppercase tracking-[0.06em] text-muted-foreground underline-offset-4 transition-colors hover:text-foreground hover:underline"
          >
            {open ? "Скрий" : "Цялото ревю"}
          </button>
        )}
      </div>

      {review.projectId && (
        <Link
          to={`/case-studies/${review.projectId}`}
          onMouseEnter={prefetchCaseStudy}
          onFocus={prefetchCaseStudy}
          className="group mt-auto inline-flex items-center gap-2 pt-6 text-[0.72rem] font-bold uppercase tracking-[0.06em] text-foreground"
        >
          Виж проекта
          <ArrowUpRight
            size={14}
            className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
          />
        </Link>
      )}
    </article>
  );
};

const GoogleReviewsSection = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [progress, setProgress] = useState(0);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);

  const sync = useCallback((a: CarouselApi) => {
    if (!a) return;
    setProgress(Math.max(0, Math.min(1, a.scrollProgress())));
    setCanPrev(a.canScrollPrev());
    setCanNext(a.canScrollNext());
  }, []);

  useEffect(() => {
    if (!api) return;
    sync(api);
    api.on("scroll", sync).on("reInit", sync).on("select", sync);
    return () => {
      api.off("scroll", sync).off("reInit", sync).off("select", sync);
    };
  }, [api, sync]);

  return (
    <section className="overflow-hidden bg-background py-16 md:py-24">
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Отзиви."
          description={`${GOOGLE_RATING.toFixed(1)} от 5 в Google. Ето какво пишат клиентите ни.`}
          action={
            <Button variant="line" size="default" asChild>
              <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                Всички в Google
                <ArrowUpRight />
              </a>
            </Button>
          }
        />

        <Reveal>
          {/* The track bleeds past the container to the right edge of the screen. */}
          <div className="mr-[calc(50%-50vw)]">
            <Carousel opts={{ align: "start", containScroll: "trimSnaps" }} setApi={setApi}>
              <CarouselContent className="-ml-4">
                {googleReviews.map((review) => (
                  <CarouselItem
                    key={review.author}
                    className="basis-[86%] pl-4 sm:basis-[60%] md:basis-[44%] lg:basis-[34%] xl:basis-[29%]"
                  >
                    <ReviewCard review={review} />
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

          <div className="mt-10 flex items-center gap-6">
            <div className="relative h-px flex-1 bg-border" aria-hidden>
              <div
                className="absolute inset-y-0 left-0 bg-foreground transition-[width] duration-200"
                style={{ width: `${Math.max(12, progress * 100)}%` }}
              />
            </div>
            <div className="flex gap-2">
              <button
                type="button"
                onClick={() => api?.scrollPrev()}
                disabled={!canPrev}
                aria-label="Предишни отзиви"
                className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowLeft size={18} />
              </button>
              <button
                type="button"
                onClick={() => api?.scrollNext()}
                disabled={!canNext}
                aria-label="Следващи отзиви"
                className="grid h-12 w-12 place-items-center rounded-full border-[1.5px] border-foreground text-foreground transition-colors hover:bg-foreground hover:text-background disabled:pointer-events-none disabled:opacity-25"
              >
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
