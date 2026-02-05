import { motion, useScroll, useTransform, useSpring } from "framer-motion";
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
  CheckCircle,
  Sparkles,
  TrendingUp,
  Zap
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getServiceSchema } from "@/lib/structuredData";
import { useRef, useState } from "react";

const services = [
  {
    icon: Globe,
    title: "Уеб сайт разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове за вашия бизнес и неговият растеж. Създаваме бързи, отзивчиви и SEO-оптимизирани уебсайтове.",
    href: "/services/web-development",
    features: [
      "Корпоративни уебсайтове",
      "Лендинг страници",
      "E-commerce магазини",
      "Web приложения"
    ],
    color: "from-blue-500 to-cyan-500",
    gradient: "from-blue-500/10 to-cyan-500/10"
  },
  {
    icon: Brain,
    title: "AI Implementation",
    subtitle: "Изкуствен интелект",
    description: "Автоматизация и AI решения за оптимизация на бизнес процесите. Чатботове, машинно обучение и интелигентни системи.",
    href: "/services/ai-implementation",
    features: [
      "Чатботове и виртуални асистенти",
      "Автоматизация на процеси",
      "Машинно обучение",
      "AI аналитика"
    ],
    color: "from-purple-500 to-pink-500",
    gradient: "from-purple-500/10 to-pink-500/10"
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "Иновативни приложения за iOS и Android, които предоставят отлично потребителско изживяване.",
    href: "/services/mobile-apps",
    features: [
      "Native iOS приложения",
      "Native Android приложения",
      "Cross-platform решения",
      "PWA приложения"
    ],
    color: "from-green-500 to-emerald-500",
    gradient: "from-green-500/10 to-emerald-500/10"
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    subtitle: "& Стратегия",
    description: "Интуитивен дизайн за отлично потребителско изживяване, базиран на задълбочен анализ и изследване.",
    href: "/services/ui-ux-design",
    features: [
      "Потребителско проучване",
      "Wireframing и прототипиране",
      "Визуален дизайн",
      "Design Systems"
    ],
    color: "from-orange-500 to-red-500",
    gradient: "from-orange-500/10 to-red-500/10"
  },
  {
    icon: Search,
    title: "SEO и GEO оптимизация",
    subtitle: "Search Engine & AI Optimization",
    description: "Подобряване на видимостта в Google и AI търсачките за повече органичен трафик и по-добри позиции.",
    href: "/services/seo",
    features: [
      "Технически SEO одит",
      "On-page оптимизация",
      "Линк билдинг",
      "Местно SEO"
    ],
    color: "from-yellow-500 to-amber-500",
    gradient: "from-yellow-500/10 to-amber-500/10"
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието ви чрез ефективни маркетинг кампании.",
    href: "/services/digital-marketing",
    features: [
      "Google Ads кампании",
      "Facebook/Instagram реклами",
      "Email маркетинг",
      "Социални мрежи"
    ],
    color: "from-indigo-500 to-blue-500",
    gradient: "from-indigo-500/10 to-blue-500/10"
  },
  {
    icon: Wrench,
    title: "Техническа поддръжка",
    subtitle: "Support & Maintenance",
    description: "Постоянна техническа поддръжка и актуализации за безпроблемна работа на вашия сайт.",
    href: "/services/technical-support",
    features: [
      "24/7 мониторинг",
      "Редовни актуализации",
      "Бекъпи и сигурност",
      "Производителност"
    ],
    color: "from-gray-500 to-slate-500",
    gradient: "from-gray-500/10 to-slate-500/10"
  }
];

// Service Card Component with advanced animations
const ServiceCard = ({ service, index }: { service: typeof services[0]; index: number }) => {
  const [isHovered, setIsHovered] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  return (
    <motion.div
      ref={cardRef}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ 
        delay: index * 0.1,
        duration: 0.6,
        ease: [0.21, 0.47, 0.32, 0.98]
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative h-full"
    >
      {/* Animated background gradient on hover */}
      <motion.div
        className={`absolute inset-0 rounded-2xl bg-gradient-to-br ${service.gradient} opacity-0 blur-xl`}
        animate={{
          opacity: isHovered ? 1 : 0,
          scale: isHovered ? 1.05 : 1
        }}
        transition={{ duration: 0.3 }}
      />

      {/* Main card */}
      <motion.div
        className="relative border-gradient p-6 rounded-2xl h-full flex flex-col bg-card/50 backdrop-blur-sm overflow-hidden"
        whileHover={{ 
          y: -8,
          transition: { duration: 0.3, ease: "easeOut" }
        }}
      >
        {/* Shine effect on hover */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent"
          initial={{ x: "-100%" }}
          animate={{ x: isHovered ? "100%" : "-100%" }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
        />

        {/* Icon with 3D transform */}
        <div className="flex items-start gap-3 mb-4 relative z-10">
          <motion.div
            className={`p-3 rounded-xl bg-gradient-to-br ${service.gradient} relative overflow-hidden`}
            whileHover={{ 
              scale: 1.1,
              rotate: [0, -5, 5, 0],
              transition: { duration: 0.5 }
            }}
          >
            {/* Particle effect */}
            {isHovered && (
              <>
                {[...Array(6)].map((_, i) => (
                  <motion.div
                    key={i}
                    className={`absolute w-1 h-1 rounded-full bg-gradient-to-r ${service.color}`}
                    initial={{ 
                      x: 0, 
                      y: 0, 
                      opacity: 1,
                      scale: 0
                    }}
                    animate={{
                      x: Math.cos((i / 6) * Math.PI * 2) * 40,
                      y: Math.sin((i / 6) * Math.PI * 2) * 40,
                      opacity: 0,
                      scale: 1
                    }}
                    transition={{ 
                      duration: 0.8,
                      ease: "easeOut"
                    }}
                  />
                ))}
              </>
            )}
            <service.icon className="w-6 h-6 text-primary relative z-10" />
          </motion.div>
          
          <div className="flex-1 min-w-0">
            <motion.h3 
              className="text-lg font-display font-bold mb-1"
              animate={{
                x: isHovered ? 3 : 0
              }}
              transition={{ duration: 0.3 }}
            >
              {service.title}
            </motion.h3>
            <span className="text-xs text-muted-foreground">
              {service.subtitle}
            </span>
          </div>

          {/* Animated arrow */}
          <motion.div
            animate={{
              x: isHovered ? 5 : 0,
              y: isHovered ? -5 : 0
            }}
            transition={{ duration: 0.3 }}
          >
            <ArrowRight 
              size={20} 
              className="text-primary opacity-0 group-hover:opacity-100 transition-opacity" 
            />
          </motion.div>
        </div>

        {/* Description with stagger animation */}
        <motion.p 
          className="text-sm text-muted-foreground mb-4 leading-relaxed flex-1"
          animate={{
            x: isHovered ? 3 : 0
          }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          {service.description}
        </motion.p>

        {/* Features list with stagger */}
        <ul className="space-y-2 mb-4">
          {service.features.map((feature, i) => (
            <motion.li
              key={i}
              className="flex items-center gap-2 text-xs"
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 + i * 0.05 }}
            >
              <motion.div
                animate={{
                  scale: isHovered ? [1, 1.2, 1] : 1,
                  rotate: isHovered ? [0, 360] : 0
                }}
                transition={{ 
                  duration: 0.5,
                  delay: i * 0.05
                }}
              >
                <CheckCircle size={14} className="text-primary shrink-0" />
              </motion.div>
              <span className="text-foreground">{feature}</span>
            </motion.li>
          ))}
        </ul>

        {/* CTA Button with hover effect */}
        <Link to={service.href} className="mt-auto">
          <motion.div
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            <Button 
              variant="outline" 
              size="sm" 
              className="w-full group-hover:border-primary/50 relative overflow-hidden"
            >
              <motion.span
                className="relative z-10 flex items-center justify-center gap-2"
                animate={{
                  x: isHovered ? 3 : 0
                }}
              >
                Научете повече
                <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
              </motion.span>
              
              {/* Button background animation */}
              <motion.div
                className={`absolute inset-0 bg-gradient-to-r ${service.gradient}`}
                initial={{ x: "-100%" }}
                animate={{ x: isHovered ? "0%" : "-100%" }}
                transition={{ duration: 0.3 }}
              />
            </Button>
          </motion.div>
        </Link>
      </motion.div>
    </motion.div>
  );
};

// Floating background elements
const FloatingElement = ({ delay = 0 }: { delay?: number }) => (
  <motion.div
    className="absolute w-64 h-64 rounded-full"
    style={{
      background: "radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%)",
    }}
    animate={{
      y: [0, -30, 0],
      x: [0, 20, 0],
      scale: [1, 1.1, 1],
      opacity: [0.3, 0.5, 0.3]
    }}
    transition={{
      duration: 8,
      delay,
      repeat: Infinity,
      ease: "easeInOut"
    }}
  />
);

const Services = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y1 = useTransform(smoothProgress, [0, 1], [0, -100]);
  const y2 = useTransform(smoothProgress, [0, 1], [0, 100]);
  const opacity = useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0]);

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": services.map((service) => getServiceSchema(service.title, service.description)),
  };

  return (
    <main className="min-h-screen bg-background" ref={containerRef}>
      <SEO
        title="Услуги - Adrexio | Уеб сайт разработка, Мобилни приложения, SEO и GEO, Дигитален маркетинг"
        description="Уеб сайт разработка, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг и техническа поддръжка в София."
        keywords="уеб сайт разработка услуги, мобилни приложения, UI/UX дизайн, SEO и GEO оптимизация, дигитален маркетинг, техническа поддръжка, уеб студио услуги София"
        structuredData={structuredData}
      />
      <Navbar />

      {/* Hero Section with Parallax */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        {/* Animated background decorations with parallax */}
        <motion.div 
          className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl"
          style={{ y: y1, opacity }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl"
          style={{ y: y2, opacity }}
        />
        
        {/* Floating elements */}
        <div className="absolute top-20 left-1/4">
          <FloatingElement delay={0} />
        </div>
        <div className="absolute top-40 right-1/3">
          <FloatingElement delay={2} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          {/* Header with stagger animation */}
          <div className="text-center mb-16">
            <motion.span 
              className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Нашите услуги
            </motion.span>
            
            <motion.h1 
              className="text-4xl md:text-6xl font-display font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              Всичко, от което{" "}
              <span className="text-gradient relative inline-block">
                имате нужда
                {/* Animated underline */}
                <motion.div
                  className="absolute -bottom-2 left-0 right-0 h-1 bg-gradient-to-r from-primary to-accent rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.8, delay: 0.5 }}
                />
              </span>
            </motion.h1>
            
            <motion.p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              Предлагаме пълен спектър от дигитални услуги за развитието на вашия бизнес онлайн.
            </motion.p>

            {/* Animated stats */}
            <motion.div
              className="flex flex-wrap justify-center gap-8 mt-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
            >
              {[
                { icon: Sparkles, value: "7+", label: "Услуги" },
                { icon: TrendingUp, value: "100%", label: "Растеж" },
                { icon: Zap, value: "24/7", label: "Поддръжка" }
              ].map((stat, i) => (
                <motion.div
                  key={i}
                  className="flex items-center gap-3 px-6 py-3 rounded-full bg-card/50 backdrop-blur-sm border border-primary/10"
                  whileHover={{ 
                    scale: 1.05,
                    borderColor: "rgba(var(--primary-rgb), 0.3)"
                  }}
                  transition={{ duration: 0.2 }}
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: i * 0.2
                    }}
                  >
                    <stat.icon className="w-5 h-5 text-primary" />
                  </motion.div>
                  <div className="text-left">
                    <div className="text-xl font-bold">{stat.value}</div>
                    <div className="text-xs text-muted-foreground">{stat.label}</div>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section with scroll animation */}
      <section className="py-24 bg-gradient-to-b from-card to-background relative overflow-hidden">
        {/* Background animation */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full"
            animate={{
              rotate: [0, 360],
            }}
            transition={{
              duration: 50,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="absolute top-0 left-1/2 w-1 h-full bg-gradient-to-b from-transparent via-primary/5 to-transparent" />
            <div className="absolute top-1/2 left-0 w-full h-1 bg-gradient-to-r from-transparent via-primary/5 to-transparent" />
          </motion.div>
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl mx-auto text-center"
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                type: "spring",
                stiffness: 200,
                damping: 20,
                delay: 0.2
              }}
              className="inline-block mb-6"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-primary to-accent rounded-full blur-2xl opacity-50" />
                <Sparkles className="w-16 h-16 text-primary relative z-10" />
              </div>
            </motion.div>

            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Готови да започнете?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за безплатна консултация и нека обсъдим как можем да помогнем на вашия бизнес.
            </p>
            
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button variant="hero" size="xl" asChild className="relative group overflow-hidden">
                <Link to="/contact">
                  <motion.span
                    className="relative z-10 flex items-center gap-2"
                    animate={{
                      x: [0, 3, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  >
                    Направете запитване
                    <ArrowRight size={18} />
                  </motion.span>
                  
                  {/* Animated background */}
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-primary/20 to-accent/20"
                    animate={{
                      x: ["-100%", "100%"],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                  />
                </Link>
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
