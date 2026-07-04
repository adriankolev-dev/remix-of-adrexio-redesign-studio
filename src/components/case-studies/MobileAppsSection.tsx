import { ExternalLink, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { mobileApps } from "@/data/mobileApps";

const MobileAppsSection = () => {
  return (
    <section className="relative overflow-hidden border-t border-border bg-background py-24 md:py-32">
      <div className="canvas-grid canvas-grid-fade pointer-events-none absolute inset-0 opacity-50" aria-hidden />

      <div className="container relative z-10 mx-auto px-6">
        <SectionHeader
          label="Мобилни приложения"
          title={
            <>
              Приложения, в които{" "}
              <span className="accent-mark">участвахме</span>.
            </>
          }
          description="Нашият екип е създал или допринесъл за разработката на тези мобилни приложения, достъпни в App Store."
          note="на живо в App Store"
        />

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {mobileApps.map((app, index) => (
            <Reveal key={app.id} delay={(index % 3) * 0.06}>
              <article className="group">
                <div className="overflow-hidden rounded-xl border border-border bg-card transition-colors duration-300 hover:border-primary/40">
                  <div className="relative aspect-[16/10] overflow-hidden bg-secondary">
                    <img
                      src={app.image}
                      alt={app.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="p-6">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="font-mono-meta text-[0.6rem] uppercase tracking-[0.14em] text-primary">
                        {app.category}
                      </span>
                      {app.rating && (
                        <div className="flex items-center gap-1 text-primary">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span className="font-mono-meta text-[0.62rem]">{app.rating}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="font-display text-xl font-semibold tracking-tight text-foreground">
                      {app.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{app.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {app.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between gap-3">
                      <span className="font-mono-meta text-[0.58rem] uppercase tracking-[0.12em] text-muted-foreground">
                        {app.contribution}
                      </span>
                      {app.downloads && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Download className="h-3 w-3" />
                          <span className="font-mono-meta text-[0.58rem]">{app.downloads}</span>
                        </div>
                      )}
                    </div>

                    <Button variant="line" size="sm" className="mt-5 w-full" asChild>
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <ExternalLink className="mr-2 h-4 w-4" />
                        Вижте в App Store
                      </a>
                    </Button>
                  </div>
                </div>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
