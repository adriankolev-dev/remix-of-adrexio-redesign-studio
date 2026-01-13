import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, ExternalLink } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const caseStudies = [
  {
    id: "boom-bg",
    title: "BOOM.BG",
    category: "E-commerce & Логистика",
    description: "Автоматизация на логистични процеси за водеща българска платформа. Разработихме цялостна система за управление на доставки и поръчки.",
    challenge: "BOOM.BG имаше нужда от модерна система за автоматизация на логистичните процеси, която да интегрира всички аспекти на веригата за доставки.",
    solution: "Изградихме цялостна уеб платформа с реално време проследяване, автоматични нотификации и интеграция с куриерски услуги.",
    results: [
      { metric: "50%", label: "По-бърза обработка" },
      { metric: "3x", label: "Увеличена ефективност" },
      { metric: "99.9%", label: "Uptime" }
    ],
    technologies: ["React", "Node.js", "PostgreSQL", "AWS"],
    gradient: "from-orange-500/20 to-red-500/20"
  },
  {
    id: "super-credit",
    title: "SuperCredit",
    category: "Финанси & Кредитиране",
    description: "Модерен корпоративен сайт за кредитна компания с фокус върху потребителското доверие и конверсия.",
    challenge: "SuperCredit търсеха надежден партньор за уеб сайт, който да вдъхва доверие на клиентите и да увеличи онлайн заявките.",
    solution: "Създадохме изчистен, професионален дизайн с ясна структура, бързо зареждане и оптимизация за мобилни устройства.",
    results: [
      { metric: "+180%", label: "Онлайн заявки" },
      { metric: "2.5s", label: "Време за зареждане" },
      { metric: "+45%", label: "Конверсия" }
    ],
    technologies: ["React", "TypeScript", "Tailwind", "Vite"],
    gradient: "from-blue-500/20 to-cyan-500/20"
  },
  {
    id: "athleticiq",
    title: "AthleticiqApp",
    category: "Фитнес & Мобилни приложения",
    description: "Модерен уебсайт за иновативно фитнес приложение с интуитивен дизайн и SEO оптимизация.",
    challenge: "AthleticiqApp имаха нужда от landing page, който да представи приложението им атрактивно и да увеличи изтеглянията.",
    solution: "Разработихме модерен, интуитивен сайт с анимации, интеграция с App Store/Google Play и оптимизация за търсачки.",
    results: [
      { metric: "+250%", label: "Изтегляния" },
      { metric: "Top 3", label: "SEO класиране" },
      { metric: "4.8★", label: "App Store рейтинг" }
    ],
    technologies: ["React", "Framer Motion", "SEO", "Analytics"],
    gradient: "from-green-500/20 to-emerald-500/20"
  },
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    category: "Красота & Услуги",
    description: "Елегантен уебсайт за козметичен салон с онлайн резервации и галерия с резултати.",
    challenge: "Body Aesthetics искаха сайт, който да отразява елегантността на услугите им и да улесни клиентите при резервации.",
    solution: "Създадохме стилен дизайн с галерия преди/след, онлайн календар за резервации и интеграция със социалните мрежи.",
    results: [
      { metric: "+120%", label: "Резервации" },
      { metric: "5/5", label: "Клиентска оценка" },
      { metric: "-60%", label: "Телефонни обаждания" }
    ],
    technologies: ["React", "Booking System", "CMS", "SEO"],
    gradient: "from-pink-500/20 to-purple-500/20"
  },
  {
    id: "amelia-diva",
    title: "Amelia Diva",
    category: "Красота & Брандинг",
    description: "Модерен уеб сайт с пълна брандинг идентичност за студио за красота.",
    challenge: "Amelia Diva търсеха креативен екип, който да изгради цялостна онлайн идентичност за техния нов бизнес.",
    solution: "Разработихме логото, цветовата палитра и уебсайт с модерен дизайн, галерия и контактна форма.",
    results: [
      { metric: "100%", label: "Brand identity" },
      { metric: "+90%", label: "Нови клиенти" },
      { metric: "On time", label: "Доставка" }
    ],
    technologies: ["Branding", "React", "UI/UX", "Social Media"],
    gradient: "from-amber-500/20 to-yellow-500/20"
  }
];

const CaseStudies = () => {
  return (
    <main className="min-h-screen bg-background">
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-16 relative overflow-hidden">
        <div className="absolute top-1/4 left-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center mb-16"
          >
            <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
              Case Studies
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Успехът през очите на <span className="text-gradient">експертите</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Разгледайте нашите успешни проекти и научете как помогнахме на бизнесите да постигнат дигитален растеж.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies Grid */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-12 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.div
                key={study.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient rounded-2xl overflow-hidden group"
              >
                <div className={`p-8 md:p-12 bg-gradient-to-br ${study.gradient}`}>
                  <div className="grid lg:grid-cols-2 gap-8">
                    {/* Left - Info */}
                    <div>
                      <span className="text-primary text-sm font-medium uppercase tracking-wider mb-2 block">
                        {study.category}
                      </span>
                      <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 group-hover:text-primary transition-colors">
                        {study.title}
                      </h2>
                      <p className="text-muted-foreground mb-6 leading-relaxed">
                        {study.description}
                      </p>

                      {/* Challenge & Solution */}
                      <div className="space-y-4 mb-6">
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-1">Предизвикателство</h4>
                          <p className="text-muted-foreground text-sm">{study.challenge}</p>
                        </div>
                        <div>
                          <h4 className="font-semibold text-sm text-primary mb-1">Решение</h4>
                          <p className="text-muted-foreground text-sm">{study.solution}</p>
                        </div>
                      </div>

                      {/* Technologies */}
                      <div className="flex flex-wrap gap-2 mb-6">
                        {study.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 rounded-full bg-background/50 text-foreground text-xs border border-border"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Right - Results */}
                    <div className="flex flex-col justify-center">
                      <h3 className="font-display font-semibold text-lg mb-6 flex items-center gap-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        Резултати
                      </h3>
                      <div className="grid grid-cols-3 gap-4">
                        {study.results.map((result, i) => (
                          <div key={i} className="text-center p-4 rounded-xl bg-background/50 border border-border">
                            <div className="text-2xl md:text-3xl font-display font-bold text-gradient mb-1">
                              {result.metric}
                            </div>
                            <div className="text-xs text-muted-foreground">
                              {result.label}
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Summary */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Нашите <span className="text-gradient">постижения</span>
            </h2>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            {[
              { icon: Users, value: "30+", label: "Доволни клиенти" },
              { icon: ExternalLink, value: "50+", label: "Завършени проекта" },
              { icon: TrendingUp, value: "+150%", label: "Среден растеж" },
              { icon: Clock, value: "< 2сек", label: "Време за зареждане" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient p-6 rounded-xl text-center"
              >
                <stat.icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-3xl font-display font-bold text-gradient mb-1">
                  {stat.value}
                </div>
                <div className="text-sm text-muted-foreground">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
              Искате подобни резултати?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас и нека обсъдим как можем да помогнем на вашия бизнес да постигне дигитален успех.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Започнете проект
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/services">
                  Нашите услуги
                  <ArrowUpRight size={18} />
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default CaseStudies;
