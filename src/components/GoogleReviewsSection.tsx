import { ArrowRight, Star } from "lucide-react";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Button } from "@/components/ui/button";
import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  GOOGLE_REVIEWS_URL,
  googleReviews,
} from "@/data/googleReviews";

const GoogleGIcon = () => (
  <svg viewBox="0 0 24 24" className="h-5 w-5 shrink-0" aria-hidden>
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
    />
  </svg>
);

const StarRow = () => (
  <span className="flex items-center gap-0.5" aria-hidden>
    {Array.from({ length: 5 }).map((_, i) => (
      <Star key={i} size={16} className="fill-amber-400 text-amber-400" />
    ))}
  </span>
);

const GoogleReviewsSection = () => {
  return (
    <section className="border-t border-border bg-muted/20 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1.15fr)] lg:items-center lg:gap-16">
          <div>
            <Reveal>
              <SectionEyebrow label="Google ревюта" index="09" />
            </Reveal>
            <Reveal delay={0.06}>
              <div className="mt-8 flex items-end gap-4">
                <span className="font-display text-6xl font-bold tabular-nums tracking-tight text-foreground md:text-7xl">
                  {GOOGLE_RATING.toFixed(1)}
                </span>
                <div className="mb-2 space-y-2">
                  <StarRow />
                  <p className="text-sm text-muted-foreground">
                    На базата на{" "}
                    <strong className="font-semibold text-foreground">{GOOGLE_REVIEW_COUNT}</strong>{" "}
                    ревюта
                  </p>
                </div>
              </div>
            </Reveal>
            <Reveal delay={0.12}>
              <div className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
                <GoogleGIcon />
                <span>Google reviews</span>
              </div>
            </Reveal>
            <Reveal delay={0.18}>
              <Button variant="line" size="default" className="mt-8" asChild>
                <a href={GOOGLE_REVIEWS_URL} target="_blank" rel="noopener noreferrer">
                  Виж всички в Google
                  <ArrowRight size={16} />
                </a>
              </Button>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="relative">
              <Carousel
                opts={{
                  align: "start",
                  loop: googleReviews.length > 1,
                }}
                className="w-full"
              >
                <div className="flex items-center gap-3">
                  {googleReviews.length > 1 && (
                    <CarouselPrevious
                      variant="outline"
                      className="static h-9 w-9 shrink-0 translate-y-0 border-border bg-card hover:bg-card/80"
                    />
                  )}
                  <div className="min-w-0 flex-1">
                    <CarouselContent className="-ml-3 md:-ml-4">
                      {googleReviews.map((review) => (
                        <CarouselItem
                          key={review.author}
                          className="basis-full pl-3 md:pl-4"
                        >
                          <article className="layer-shadow flex h-full flex-col rounded-[1.25rem] border border-border bg-card p-6 md:p-8">
                            <StarRow />
                            <p className="mt-5 flex-1 text-base leading-relaxed text-foreground/90">
                              „{review.text}"
                            </p>
                            <footer className="mt-6 border-t border-border/60 pt-4">
                              <p className="text-sm font-medium text-foreground">{review.author}</p>
                            </footer>
                          </article>
                        </CarouselItem>
                      ))}
                    </CarouselContent>
                  </div>
                  {googleReviews.length > 1 && (
                    <CarouselNext
                      variant="outline"
                      className="static h-9 w-9 shrink-0 translate-y-0 border-border bg-card hover:bg-card/80"
                    />
                  )}
                </div>
              </Carousel>
              <p className="font-mono-meta mt-6 text-[0.62rem] uppercase tracking-[0.14em] text-muted-foreground">
                Нашите 5-звездни Google ревюта
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviewsSection;
