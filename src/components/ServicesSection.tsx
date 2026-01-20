import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Search, 
  Megaphone, 
  Wrench,
  ArrowUpRight 
} from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Уеб разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове за вашия бизнес и неговият растеж.",
    href: "/services/web-development"
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "Иновативни приложения за iOS и Android.",
    href: "/services/mobile-apps"
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    subtitle: "& Стратегия",
    description: "Интуитивен дизайн за отлично потребителско изживяване.",
    href: "/services/ui-ux-design"
  },
  {
    icon: Search,
    title: "SEO",
    subtitle: "Оптимизация",
    description: "Подобряване на видимостта в търсачките за повече органичен трафик.",
    href: "/services/seo"
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието ви.",
    href: "/services/digital-marketing"
  },
  {
    icon: Wrench,
    title: "Поддръжка",
    subtitle: "Support & Maintenance",
    description: "Постоянна техническа поддръжка и актуализации за безпроблемна работа.",
    href: "/services/technical-support"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const ServicesSection = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      
      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
            Какво правим?
          </span>
          <h2 className="text-3xl md:text-5xl font-display font-bold">
            Услуги, които{" "}
            <span className="text-gradient">трансформират</span> бизнеса ви
          </h2>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {services.map((service, index) => (
            <motion.div key={index} variants={itemVariants}>
              <Link
                to={service.href}
                className="group block h-full border-gradient p-6 rounded-xl transition-all duration-300 hover:scale-[1.02] hover:shadow-xl hover:shadow-primary/10"
              >
                <div className="flex items-start gap-4">
                  <div className="p-3 rounded-lg bg-gradient-to-br from-primary/20 to-accent/10 group-hover:from-primary/30 group-hover:to-accent/20 transition-colors">
                    <service.icon size={24} className="text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-display font-semibold text-lg text-foreground group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </span>
                  </div>
                  <ArrowUpRight 
                    size={20} 
                    className="text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all" 
                  />
                </div>
                <p className="mt-4 text-muted-foreground text-sm leading-relaxed">
                  {service.description}
                </p>
              </Link>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ServicesSection;
