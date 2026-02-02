import { motion } from "framer-motion";
import { useState } from "react";
import { 
  Globe, 
  Brain,
  Smartphone, 
  Palette, 
  Search, 
  Megaphone, 
  Wrench,
  LucideIcon
} from "lucide-react";
import { cn } from "@/lib/utils";

interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  color: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Уеб сайт разработка",
    description: "Модерни сайтове за вашия бизнес",
    color: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "AI Implementation",
    description: "Изкуствен интелект и автоматизация",
    color: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    description: "iOS и Android приложения",
    color: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    description: "Интуитивен дизайн и стратегия",
    color: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Search,
    title: "SEO и GEO",
    description: "Оптимизация за търсачки",
    color: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    description: "Растеж и онлайн присъствие",
    color: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: Wrench,
    title: "Поддръжка",
    description: "Техническа поддръжка 24/7",
    color: "from-gray-500/20 to-slate-500/20"
  }
];

const InteractiveServicesCircle = () => {
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredService, setHoveredService] = useState<number | null>(null);

  // Calculate positions in a circle
  const radius = 180;
  const centerX = 0;
  const centerY = 0;
  const angleStep = (2 * Math.PI) / services.length;

  const getServicePosition = (index: number) => {
    const angle = index * angleStep - Math.PI / 2; // Start from top
    const x = centerX + radius * Math.cos(angle);
    const y = centerY + radius * Math.sin(angle);
    return { x, y, angle };
  };

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/50 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Нашите услуги
          </span>
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
            Пълен спектър от <span className="text-gradient">дигитални решения</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Интерактивно разгледайте нашите услуги и открийте как можем да помогнем на вашия бизнес
          </p>
        </motion.div>

        <div className="relative max-w-4xl mx-auto">
          {/* Main Circle Container */}
          <div className="relative w-full aspect-square flex items-center justify-center">
            {/* Center Info Card */}
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              viewport={{ once: true }}
              className="absolute z-10 w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-primary/20 via-primary/10 to-accent/20 border-2 border-primary/30 backdrop-blur-sm flex items-center justify-center flex-col p-6 text-center"
            >
              <div className="text-4xl md:text-5xl font-display font-bold text-gradient mb-2">
                {services.length}
              </div>
              <div className="text-sm md:text-base text-muted-foreground font-medium">
                Професионални услуги
              </div>
              <div className="text-xs text-muted-foreground mt-1">
                За всеки бизнес
              </div>
            </motion.div>

            {/* Service Items in Circle */}
            {services.map((service, index) => {
              const { x, y, angle } = getServicePosition(index);
              const isSelected = selectedService === index;
              const isHovered = hoveredService === index;

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ 
                    opacity: 1, 
                    scale: 1,
                    x: x,
                    y: y
                  }}
                  transition={{ 
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100
                  }}
                  whileHover={{ scale: 1.15, zIndex: 20 }}
                  className="absolute left-1/2 top-1/2 origin-center"
                  style={{
                    transform: `translate(calc(-50% + ${x}px), calc(-50% + ${y}px))`
                  }}
                  onMouseEnter={() => {
                    setHoveredService(index);
                    setSelectedService(index);
                  }}
                  onMouseLeave={() => {
                    setHoveredService(null);
                    if (!isSelected) {
                      setSelectedService(null);
                    }
                  }}
                  onClick={() => setSelectedService(isSelected ? null : index)}
                >
                  <motion.div
                    className={cn(
                      "relative w-20 h-20 md:w-24 md:h-24 rounded-2xl bg-gradient-to-br",
                      service.color,
                      "border-2 border-primary/30 backdrop-blur-sm",
                      "cursor-pointer transition-all duration-300",
                      isSelected && "border-primary shadow-lg shadow-primary/30",
                      isHovered && "shadow-xl shadow-primary/40"
                    )}
                    whileHover={{ rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 flex items-center justify-center">
                      <service.icon 
                        className={cn(
                          "w-8 h-8 md:w-10 md:h-10 text-primary transition-transform",
                          isHovered && "scale-110"
                        )} 
                      />
                    </div>

                    {/* Tooltip/Info Card */}
                    {(isHovered || isSelected) && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.9 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.9 }}
                        className={cn(
                          "absolute z-30 w-56 p-4 rounded-xl border-gradient bg-card shadow-xl",
                          "backdrop-blur-sm",
                          angle > Math.PI / 2 && angle < (3 * Math.PI) / 2 
                            ? "right-full mr-4" 
                            : "left-full ml-4",
                          y < 0 ? "top-0" : "bottom-0"
                        )}
                      >
                        <div className="flex items-start gap-3">
                          <div className={cn(
                            "p-2 rounded-lg bg-gradient-to-br",
                            service.color
                          )}>
                            <service.icon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <h3 className="font-display font-bold text-sm mb-1">
                              {service.title}
                            </h3>
                            <p className="text-xs text-muted-foreground">
                              {service.description}
                            </p>
                          </div>
                        </div>
                      </motion.div>
                    )}

                  </motion.div>
                </motion.div>
              );
            })}

            {/* Decorative Circles */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
              <div className="w-full h-full border border-primary/10 rounded-full" />
              <div className="absolute w-[60%] h-[60%] border border-primary/5 rounded-full" />
              <div className="absolute w-[30%] h-[30%] border border-primary/5 rounded-full" />
            </div>
          </div>

          {/* Selected Service Details (Mobile/Tablet) */}
          {selectedService !== null && (() => {
            const selected = services[selectedService];
            const SelectedIcon = selected.icon;
            return (
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="mt-12 md:hidden"
              >
                <div className="border-gradient p-6 rounded-xl bg-card">
                  <div className="flex items-start gap-4">
                    <div className={cn(
                      "p-3 rounded-xl bg-gradient-to-br",
                      selected.color
                    )}>
                      <SelectedIcon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-display font-bold text-lg mb-2">
                        {selected.title}
                      </h3>
                      <p className="text-muted-foreground text-sm">
                        {selected.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })()}

          {/* Instructions */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-sm text-muted-foreground">
              Преместете мишката върху услугите, за да видите повече детайли
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesCircle;
