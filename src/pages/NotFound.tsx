import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Reveal from "@/components/editorial/Reveal";
import stone from "@/assets/hero-stone-800.webp";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="flex min-h-screen flex-col bg-background">
      <Navbar />
      <div className="container mx-auto flex flex-1 flex-col justify-center px-6 pb-16 pt-32">
        <Reveal immediate>
          <p className="eyebrow">Грешка 404</p>
          <p className="title-page mt-6 select-none" aria-hidden>
            404<span className="text-primary">.</span>
          </p>
        </Reveal>

        <Reveal immediate delay={0.1}>
          <div className="mt-10 grid gap-8 border-t border-border pt-8 lg:grid-cols-[minmax(0,1.3fr)_minmax(0,1fr)] lg:gap-16">
            <div>
              <h1 className="text-2xl font-semibold tracking-[-0.03em] text-foreground md:text-4xl">
                Тази страница я няма на картата.
              </h1>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button variant="ink" size="lg" asChild>
                  <Link to="/">
                    Към началото
                    <ArrowUpRight />
                  </Link>
                </Button>
                <Button variant="line" size="lg" onClick={() => window.history.back()}>
                  <ArrowLeft />
                  Назад
                </Button>
              </div>
            </div>
            <div>
              <p className="max-w-md text-base leading-relaxed text-muted-foreground md:text-[1.1rem]">
                Страницата, която търсите, не съществува или е била преместена. Да ви върнем на
                позната територия.
              </p>
              <img src={stone} alt="" aria-hidden width={800} height={418} className="mt-8 w-48 md:w-56" />
            </div>
          </div>
        </Reveal>
      </div>
    </main>
  );
};

export default NotFound;
