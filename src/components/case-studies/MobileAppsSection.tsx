import { motion } from "framer-motion";
import { ExternalLink, Star, Download, Smartphone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { mobileApps } from "@/data/mobileApps";

const MobileAppsSection = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-background to-card">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Smartphone className="w-4 h-4" />
            <span className="text-sm font-medium">Мобилни приложения</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Приложения, в които <span className="text-gradient">участвахме</span>
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Нашият екип е създал или допринесъл за разработката на тези мобилни приложения, достъпни в App Store.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mobileApps.map((app, index) => (
            <motion.article
              key={app.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative"
            >
              <div className="relative overflow-hidden rounded-2xl border border-border bg-card transition-all duration-500 hover:border-primary/50 hover:shadow-xl hover:shadow-primary/5">
                {/* App Screenshot */}
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img
                    src={app.image}
                    alt={app.name}
                    className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/60 to-transparent" />
                </div>

                {/* Content */}
                <div className="p-6 -mt-12 relative z-10">
                  {/* Category & Rating */}
                  <div className="flex items-center justify-between mb-3">
                    <span className={`inline-block rounded-full bg-background/80 px-3 py-1 text-xs font-medium uppercase tracking-wider backdrop-blur-sm ${app.accentColor}`}>
                      {app.category}
                    </span>
                    {app.rating && (
                      <div className="flex items-center gap-1 text-yellow-500">
                        <Star className="w-4 h-4 fill-current" />
                        <span className="text-sm font-medium">{app.rating}</span>
                      </div>
                    )}
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-display font-bold text-foreground mb-1">
                    {app.name}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-3">
                    {app.subtitle}
                  </p>

                  {/* Description */}
                  <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
                    {app.description}
                  </p>

                  {/* Contribution Badge & Downloads */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs bg-primary/10 text-primary px-3 py-1.5 rounded-full">
                      {app.contribution}
                    </span>
                    {app.downloads && (
                      <div className="flex items-center gap-1 text-muted-foreground text-xs">
                        <Download className="w-3 h-3" />
                        {app.downloads}
                      </div>
                    )}
                  </div>

                  {/* App Store Button */}
                  <Button
                    variant="outline"
                    size="sm"
                    className="w-full group/btn"
                    asChild
                  >
                    <a
                      href={app.appStoreUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="w-4 h-4 mr-2 transition-transform group-hover/btn:translate-x-0.5" />
                      Вижте в App Store
                    </a>
                  </Button>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MobileAppsSection;
