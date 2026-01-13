import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Globe, 
  Smartphone, 
  Palette, 
  Search, 
  Megaphone, 
  Wrench,
  ArrowRight,
  CheckCircle
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  {
    icon: Globe,
    title: "Уеб разработка",
    subtitle: "Web Development",
    description: "Модерни сайтове за вашия бизнес и неговият растеж. Създаваме бързи, отзивчиви и SEO-оптимизирани уебсайтове.",
    features: [
      "Корпоративни уебсайтове",
      "Лендинг страници",
      "E-commerce магазини",
      "Web приложения"
    ]
  },
  {
    icon: Smartphone,
    title: "Мобилни приложения",
    subtitle: "Mobile Apps",
    description: "Иновативни приложения за iOS и Android, които предоставят отлично потребителско изживяване.",
    features: [
      "Native iOS приложения",
      "Native Android приложения",
      "Cross-platform решения",
      "PWA приложения"
    ]
  },
  {
    icon: Palette,
    title: "UI/UX Дизайн",
    subtitle: "& Стратегия",
    description: "Интуитивен дизайн за отлично потребителско изживяване, базиран на задълбочен анализ и изследване.",
    features: [
      "Потребителско проучване",
      "Wireframing и прототипиране",
      "Визуален дизайн",
      "Design Systems"
    ]
  },
  {
    icon: Search,
    title: "SEO оптимизация",
    subtitle: "Search Engine Optimization",
    description: "Подобряване на видимостта в търсачките за повече органичен трафик и по-добри позиции.",
    features: [
      "Технически SEO одит",
      "On-page оптимизация",
      "Линк билдинг",
      "Местно SEO"
    ]
  },
  {
    icon: Megaphone,
    title: "Дигитален маркетинг",
    subtitle: "Digital Marketing",
    description: "Стратегии за растеж и увеличаване на онлайн присъствието ви чрез ефективни маркетинг кампании.",
    features: [
      "Google Ads кампании",
      "Facebook/Instagram реклами",
      "Email маркетинг",
      "Социални мрежи"
    ]
  },
  {
    icon: Wrench,
    title: "Техническа поддръжка",
    subtitle: "Support & Maintenance",
    description: "Постоянна техническа поддръжка и актуализации за безпроблемна работа на вашия сайт.",
    features: [
      "24/7 мониторинг",
      "Редовни актуализации",
      "Бекъпи и сигурност",
      "Производителност"
    ]
  }
];

const Services = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      <section className="pt-32 pb-24 relative overflow-hidden">
        {/* Background decoration */}
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Нашите услуги
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Всичко, от което <span className="text-gradient">имате нужда</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Предлагаме пълен спектър от дигитални услуги за развитието на вашия бизнес онлайн.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient p-8 rounded-2xl group hover:scale-[1.02] transition-transform"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="p-4 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-display font-bold mb-1">
                      {service.title}
                    </h3>
                    <span className="text-sm text-muted-foreground">
                      {service.subtitle}
                    </span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>

                <ul className="space-y-3 mb-6">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-sm">
                      <CheckCircle size={16} className="text-primary" />
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>

                <Button variant="outline" size="lg" asChild className="w-full group-hover:border-primary/50">
                  <Link to="/contact">
                    Научете повече
                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Готови да започнете?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за безплатна консултация и нека обсъдим как можем да помогнем на вашия бизнес.
            </p>
            <Button variant="hero" size="xl" asChild>
              <Link to="/contact">
                Направете запитване
                <ArrowRight size={18} />
              </Link>
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default Services;
