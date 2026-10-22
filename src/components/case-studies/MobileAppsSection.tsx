import { ArrowUpRight, Star, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import Reveal from "@/components/editorial/Reveal";
import SectionHeader from "@/components/editorial/SectionHeader";
import { mobileApps } from "@/data/mobileApps";

const MobileAppsSection = () => {
  return (
    <section
      id="mobile-apps"
      className="bg-background py-16 md:py-24"
    >
      <div className="container mx-auto px-6">
        <SectionHeader
          title="Мобилни приложения."
          description="Някои от тях направихме изцяло, по други работихме по отделни части. Всички са в App Store."
        />

        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {mobileApps.map((app, index) => (
            <Reveal key={app.id} delay={(index % 3) * 0.06}>
              <article className="group h-full">
                <div className="flex h-full flex-col rounded-md bg-secondary p-3 md:p-4">
                  <div className="relative aspect-[16/10] overflow-hidden rounded-[0.25rem] bg-muted">
                    <img
                      src={app.image}
                      alt={app.name}
                      loading="lazy"
                      className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.03]"
                    />
                  </div>

                  <div className="flex flex-1 flex-col px-1 pb-1 pt-5 md:px-2">
                    <div className="mb-3 flex items-center justify-between gap-3">
                      <span className="eyebrow">{app.category}</span>
                      {app.rating && (
                        <div className="flex items-center gap-1 text-foreground">
                          <Star className="h-3.5 w-3.5 fill-current" />
                          <span className="text-xs font-semibold">{app.rating}</span>
                        </div>
                      )}
                    </div>

                    <h3 className="text-2xl font-semibold tracking-[-0.03em] text-foreground">
                      {app.name}
                    </h3>
                    <p className="mt-1 text-sm text-muted-foreground">{app.subtitle}</p>
                    <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                      {app.description}
                    </p>

                    <div className="mt-auto flex items-center justify-between gap-3 pt-4">
                      <span className="text-[0.66rem] font-bold uppercase tracking-[0.08em] text-muted-foreground">
                        {app.contribution}
                      </span>
                      {app.downloads && (
                        <div className="flex items-center gap-1 text-muted-foreground">
                          <Download className="h-3 w-3" />
                          <span className="text-xs font-semibold">{app.downloads}</span>
                        </div>
                      )}
                    </div>

                    <Button variant="line" size="sm" className="mt-5 w-full" asChild>
                      <a
                        href={app.appStoreUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Вижте в App Store
                        <ArrowUpRight />
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
