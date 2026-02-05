import { motion, useScroll, useTransform } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Brain,
  Smartphone, 
  Palette, 
  Search, 
  Megaphone, 
  Wrench,
  ArrowUpRight,
  Sparkles
} from "lucide-react";
import { useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Уеб сайт разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове за вашия бизнес и неговият растеж.",
    href: "/services/web-development",
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Brain,
    title: "AI Implementation",
    subtitle: "Изкуствен интелект",
    description: "Автоматизация и AI решения за оптимизация на бизнес процесите.",
    href: "/services/ai-implementation",
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "Иновативни приложения за iOS и Android.",
    href: "/services/mobile-apps",
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    subtitle: "& Стратегия",
    description: "Интуитивен дизайн за отлично потребителско изживяване.",
    href: "/services/ui-ux-design",
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Search,
    title: "SEO и GEO оптимизация",
    subtitle: "Search & AI Optimization",
    description: "Подобряване на видимостта в Google и AI търсачките за повече органичен трафик.",
    href: "/services/seo",
    color: "from-yellow-500 to-amber-500",
    gradient: "from-yellow-500/10 to-amber-500/10"
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието ви.",
    href: "/services/digital-marketing",
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    icon: Wrench,
    title: "Поддръжка",
    subtitle: "Support & Maintenance",
    description: "Постоянна техническа поддръжка и актуализации за безпроблемна работа.",
    href: "/services/technical-support",
    color: "from-gray-500 to-slate-500",
    gradient: "from-gray-500/10 to-slate-500/10"
  }
];

// Enhanced Service Card with hover effects
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 30, scale: 0.9 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        delay: index * 0.1,
        duration: 0.5,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Glow effect on hover */}
      <motion.div
        className={`absolute -inset-1 rounded-xl bg-gradient-to-br ${service.gradient} opacity-0 blur-lg`}
        animate={{
          opacity: isHovered ? 0.6 : 0,
          scale: isHovered ? 1.02 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      <Link
        to={service.href}
        className="relative block h-full border-gradient p-6 rounded-xl transition-all duration-300 bg-card/50 backdrop-blur-sm overflow-hidden"
      >
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute inset-0" style={{
            backgroundImage: `radial-gradient(circle at 50% 50%, ${service.gradient.split(' ')[0].replace('from-', 'rgba(')} 0.05), transparent 50%)`,
            backgroundSize: '30px 30px'
          }} />
        </div>

        {/* Shine effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full"
          animate={{
            x: isHovered ? "200%" : "-100%"
          }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        <div className="relative z-10">
          {/* Icon and Header */}
          <div className="flex items-start gap-4 mb-4">
            <motion.div
              className={`p-3 rounded-lg bg-gradient-to-br ${service.gradient} relative`}
              whileHover={{
                scale: 1.1,
                rotate: [0, -10, 10, 0],
              }}
              transition={{ duration: 0.5 }}
            >
              {/* Particles on hover */}
              {isHovered && (
                <motion.div className="absolute inset-0">
                  {[...Array(8)].map((_, i) => (
                    <motion.div
                      key={i}
                      className={`absolute top-1/2 left-1/2 w-1 h-1 rounded-full bg-gradient-to-r ${service.color}`}
                      initial={{
                        x: 0,
                        y: 0,
                        scale: 0,
                        opacity: 1
                      }}
                      animate={{
                        x: Math.cos((i / 8) * Math.PI * 2) * 30,
                        y: Math.sin((i / 8) * Math.PI * 2) * 30,
                        scale: [0, 1, 0],
                        opacity: [1, 1, 0]
                      }}
                      transition={{
                        duration: 0.8,
                        ease: "easeOut",
                        times: [0, 0.5, 1]
                      }}
                    />
                  ))}
                </motion.div>
              )}
              <service.icon size={24} className="text-primary relative z-10" />
            </motion.div>

            <div className="flex-1">
              <motion.h3
                className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors mb-1"
                animate={{
                  x: isHovered ? 3 : 0
                }}
                transition={{ duration: 0.3 }}
              >
                {service.title}
              </motion.h3>
              <span className="text-sm text-muted-foreground">
                {service.subtitle}
              </span>
            </div>

            {/* Animated arrow */}
            <motion.div
              animate={{
                x: isHovered ? 3 : 0,
                y: isHovered ? -3 : 0,
                rotate: isHovered ? 45 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              <ArrowUpRight
                size={20}
                className="text-muted-foreground group-hover:text-primary transition-colors"
              />
            </motion.div>
          </div>

          {/* Description */}
          <motion.p
            className="text-muted-foreground text-sm leading-relaxed"
            animate={{
              x: isHovered ? 3 : 0
            }}
            transition={{ duration: 0.3, delay: 0.05 }}
          >
            {service.description}
          </motion.p>

          {/* Bottom accent line */}
          <motion.div
            className={`mt-4 h-1 rounded-full bg-gradient-to-r ${service.color}`}
            initial={{ scaleX: 0, originX: 0 }}
            animate={{
              scaleX: isHovered ? 1 : 0
            }}
            transition={{ duration: 0.3 }}
          />
        </div>
      </Link>
    </motion.div>
  );
};

const ServicesSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [50, -50]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={sectionRef} className="py-24 relative overflow-hidden">
      {/* Animated background decoration with parallax */}
      <motion.div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl"
        style={{ y, opacity }}
      />

      {/* Floating sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0, 1, 0],
              scale: [0, 1, 0],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 5,
              ease: "easeInOut"
            }}
          >
            <Sparkles className="w-4 h-4 text-primary" />
          </motion.div>
        ))}
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.span
            className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            Какво правим?
          </motion.span>

          <motion.h2
            className="text-3xl md:text-5xl font-display font-bold mb-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Услуги, които{" "}
            <span className="text-gradient relative inline-block">
              трансформират
              {/* Animated underline */}
              <motion.div
                className="absolute -bottom-1 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, delay: 0.5 }}
              />
            </span>
            {" "}бизнеса ви
          </motion.h2>

          <motion.p
            className="text-muted-foreground text-lg max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            От концепция до реализация - предлагаме цялостни решения за вашия дигитален успех
          </motion.p>
        </motion.div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <ServiceCard key={index} service={service} index={index} />
          ))}
        </div>

        {/* View All Services Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <Link to="/services">
            <motion.button
              className="group inline-flex items-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-primary/10 to-accent/10 border border-primary/20 font-medium hover:border-primary/50 transition-colors"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span>Всички услуги</span>
              <motion.div
                animate={{
                  x: [0, 5, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <ArrowUpRight className="w-5 h-5" />
              </motion.div>
            </motion.button>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
