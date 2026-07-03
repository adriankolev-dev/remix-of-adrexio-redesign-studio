import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { ArrowLeft, Home } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import RobotMascot from "@/components/mascots/RobotMascot";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("404 Error: User attempted to access non-existent route:", location.pathname);
  }, [location.pathname]);

  return (
    <main className="relative flex min-h-screen items-center overflow-hidden bg-background">
      <div className="canvas-grid canvas-grid-fade absolute inset-0 opacity-60" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
          <div className="max-w-3xl">
          <Reveal immediate>
            <SectionEyebrow label="Грешка" index="404" />
          </Reveal>

          <Reveal immediate delay={0.08}>
            <p className="font-display mt-6 select-none text-[26vw] font-bold leading-[0.8] tracking-tighter text-foreground/10 md:text-[16rem]">
              404
            </p>
          </Reveal>

          <Reveal immediate delay={0.16}>
            <h1 className="font-display mt-2 text-3xl font-bold tracking-tight text-foreground md:text-5xl">
              Тази страница я <span className="accent-mark">няма на картата.</span>
            </h1>
          </Reveal>

          <Reveal immediate delay={0.24}>
            <p className="mt-6 max-w-md text-lg leading-relaxed text-muted-foreground">
              Страницата, която търсите, не съществува или е била преместена. Да ви върнем на
              позната територия.
            </p>
          </Reveal>

          <Reveal immediate delay={0.32}>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button variant="ink" size="lg" asChild>
                <Link to="/">
                  <Home size={18} />
                  Към началото
                </Link>
              </Button>
              <Button variant="line" size="lg" onClick={() => window.history.back()}>
                <ArrowLeft size={18} />
                Назад
              </Button>
            </div>
          </Reveal>
          </div>

          <Reveal immediate delay={0.2} className="hidden lg:block">
            <RobotMascot variant="lost" />
          </Reveal>
        </div>
      </div>
    </main>
  );
};

export default NotFound;
