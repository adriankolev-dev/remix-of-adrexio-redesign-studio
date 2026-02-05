import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Brain,
  Smartphone, 
  Palette, 
  Search, 
  Megaphone, 
  Wrench,
  ArrowRight,
  LucideIcon
} from "lucide-react";
import { useRef, MouseEvent } from "react";

interface Service {
  icon: LucideIcon;
  title: string;
  subtitle: string;
  description: string;
  href: string;
  color: string;
  gradient: string;
}

const services: Service[] = [
  {
    icon: Globe,
    title: "Уеб сайт разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове за вашия бизнес и неговият растеж",
    href: "/services/web-development",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    icon: Brain,
    title: "AI Implementation",
    subtitle: "Изкуствен интелект",
    description: "Автоматизация и AI решения за оптимизация на бизнес процесите",
    href: "/services/ai-implementation",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/20 to-pink-500/20"
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "Иновативни приложения за iOS и Android",
    href: "/services/mobile-apps",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    subtitle: "& Стратегия",
    description: "Интуитивен дизайн за отлично потребителско изживяване",
    href: "/services/ui-ux-design",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    icon: Search,
    title: "SEO и GEO оптимизация",
    subtitle: "Search & AI Optimization",
    description: "Подобряване на видимостта в Google и AI търсачките",
    href: "/services/seo",
    color: "from-yellow-500 to-amber-500",
    gradient: "from-yellow-500/20 to-amber-500/20"
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието ви",
    href: "/services/digital-marketing",
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-500/20 to-blue-500/20"
  },
  {
    icon: Wrench,
    title: "Техническа поддръжка",
    subtitle: "Support & Maintenance",
    description: "Постоянна техническа поддръжка и актуализации",
    href: "/services/technical-support",
    color: "from-gray-500 to-slate-500",
    gradient: "from-gray-500/20 to-slate-500/20"
  }
];

// 3D Tilt Card with mouse tracking
const TiltCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  // Smooth spring animations
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), {
    stiffness: 300,
    damping: 30
  });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), {
    stiffness: 300,
    damping: 30
  });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseXPos = (e.clientX - centerX) / (rect.width / 2);
    const mouseYPos = (e.clientY - centerY) / (rect.height / 2);

    mouseX.set(mouseXPos);
    mouseY.set(mouseYPos);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, scale: 0.8, y: 50 }}
      whileInView={{ opacity: 1, scale: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      style={{
        perspective: 1000,
      }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="group"
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        whileHover={{ scale: 1.05, z: 50 }}
        transition={{ type: "spring", stiffness: 300, damping: 20 }}
        className="relative"
      >
        <Link
          to={service.href}
          className="block relative overflow-hidden rounded-2xl border-gradient p-6 bg-card/80 backdrop-blur-sm h-full"
          style={{
            transform: "translateZ(50px)",
          }}
        >
          {/* Animated gradient background */}
          <motion.div
            className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-100`}
            transition={{ duration: 0.4 }}
          />

          {/* Spotlight effect following mouse */}
          <motion.div
            className="absolute inset-0 opacity-0 group-hover:opacity-30"
            style={{
              background: `radial-gradient(circle at ${useTransform(
                mouseX,
                [-0.5, 0.5],
                ["0%", "100%"]
              )}% ${useTransform(mouseY, [-0.5, 0.5], ["0%", "100%"])}%, rgba(255,255,255,0.3) 0%, transparent 50%)`,
            }}
          />

          {/* Content */}
          <div className="relative z-10" style={{ transform: "translateZ(75px)" }}>
            {/* Icon with depth */}
            <motion.div
              className={`inline-flex p-4 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}
              whileHover={{
                rotateZ: 360,
                scale: 1.1,
              }}
              transition={{ duration: 0.6 }}
              style={{ transform: "translateZ(100px)" }}
            >
              <service.icon className="w-8 h-8 text-primary" />
            </motion.div>

            {/* Title */}
            <h3 className="text-xl font-display font-bold mb-1 group-hover:text-primary transition-colors">
              {service.title}
            </h3>
            <p className="text-xs text-muted-foreground mb-3">{service.subtitle}</p>

            {/* Description */}
            <p className="text-sm text-muted-foreground leading-relaxed mb-4">
              {service.description}
            </p>

            {/* CTA */}
            <motion.div
              className="flex items-center gap-2 text-sm font-medium text-primary"
              whileHover={{ x: 5 }}
            >
              <span>Научете повече</span>
              <ArrowRight size={16} />
            </motion.div>
          </div>

          {/* Corner accent */}
          <motion.div
            className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${service.color} opacity-20 rounded-bl-full`}
            initial={{ scale: 0, originX: 1, originY: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
          />
        </Link>
      </motion.div>
    </motion.div>
  );
};

// Magnetic interaction effect
const MagneticCard = ({ service, index }: { service: Service; index: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 300, damping: 30 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const distance = Math.sqrt(
      Math.pow(e.clientX - centerX, 2) + Math.pow(e.clientY - centerY, 2)
    );

    if (distance < 150) {
      const magnetStrength = 0.3;
      x.set((e.clientX - centerX) * magnetStrength);
      y.set((e.clientY - centerY) * magnetStrength);
    } else {
      x.set(0);
      y.set(0);
    }
  };

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.08, duration: 0.5 }}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => {
        x.set(0);
        y.set(0);
      }}
      style={{ x: springX, y: springY }}
      className="group"
    >
      <Link
        to={service.href}
        className="block p-6 rounded-2xl border-gradient bg-card/50 backdrop-blur-sm hover:border-primary/50 transition-all"
      >
        <motion.div
          className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${service.gradient} mb-4`}
          whileHover={{ scale: 1.1, rotate: 5 }}
        >
          <service.icon className="w-6 h-6 text-primary" />
        </motion.div>

        <h3 className="text-lg font-display font-bold mb-1 group-hover:text-primary transition-colors">
          {service.title}
        </h3>
        <p className="text-xs text-muted-foreground mb-3">{service.subtitle}</p>
        <p className="text-sm text-muted-foreground">{service.description}</p>
      </Link>
    </motion.div>
  );
};

// Main component with both styles
const InteractiveServicesGrid = ({ style = "tilt" }: { style?: "tilt" | "magnetic" }) => {
  const CardComponent = style === "tilt" ? TiltCard : MagneticCard;

  return (
    <section className="py-24 bg-gradient-to-b from-background to-card/30 relative overflow-hidden">
      {/* Animated mesh gradient */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "linear",
          }}
          style={{
            backgroundImage: `
              radial-gradient(circle at 20% 50%, rgba(var(--primary-rgb), 0.1) 0%, transparent 50%),
              radial-gradient(circle at 80% 80%, rgba(var(--accent-rgb), 0.1) 0%, transparent 50%),
              radial-gradient(circle at 40% 20%, rgba(var(--primary-rgb), 0.05) 0%, transparent 50%)
            `,
            backgroundSize: "200% 200%",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <motion.h2
            className="text-4xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
          >
            Интерактивни{" "}
            <span className="text-gradient">дигитални решения</span>
          </motion.h2>
          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
          >
            Преместете мишката над картите за интерактивен 3D ефект
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
          {services.map((service, index) => (
            <CardComponent key={index} service={service} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveServicesGrid;
