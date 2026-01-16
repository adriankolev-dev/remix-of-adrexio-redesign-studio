import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, ArrowUpRight, TrendingUp, Clock, Users, ExternalLink, CheckCircle, Target, Lightbulb, BarChart3, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Import screenshots
import bodyaestheticsImg from "@/assets/case-studies/bodyaesthetics.png";
import booomImg from "@/assets/case-studies/booom.png";
import athleticiqImg from "@/assets/case-studies/athleticiq.png";
import supercreditImg from "@/assets/case-studies/supercredit.png";

const caseStudies = [
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    subtitle: "Премиум лазерен център за терапии за лице и тяло",
    category: "Здраве & Красота",
    url: "https://bodyaesthetics.bg/",
    isPublic: true,
    image: bodyaestheticsImg,
    overview: "Body Aesthetics е водещ медицински козметичен лазерен център в България, предлагащ най-високия клас неинвазивни естетични процедури. От 2018 г. насам изграждат доверие с хиляди клиенти чрез експертни грижи и най-съвременни технологии.",
    challenge: "Клиниката имаше нужда от модерен, вдъхващ доверие уебсайт, който да представи премиум услугите им, да изгради авторитет в конкурентната индустрия за красота и да позволи безпроблемно онлайн резервиране. Предишният им сайт не успяваше да предаде изискаността и професионализма на услугите им.",
    solution: [
      "Създадохме елегантен, луксозен уебсайт, отразяващ премиум характера на услугите",
      "Внедрихме система за онлайн резервации, интегрирана с техния график",
      "Изградихме подробни страници за услуги с детайлна информация за процедурите",
      "Разработихме онлайн магазин за ваучери за подарък и продукти",
      "Оптимизирахме за SEO, за да привлечем локален трафик от търсачките"
    ],
    results: [
      { metric: "+185%", label: "Онлайн резервации" },
      { metric: "4.9★", label: "Google рейтинг" },
      { metric: "+120%", label: "Органичен трафик" }
    ],
    technologies: ["WordPress", "WooCommerce", "Booking система", "SEO"],
    gradient: "from-amber-500/20 to-yellow-500/20",
    accentColor: "text-amber-500"
  },
  {
    id: "booom-bg",
    title: "Booom.bg",
    subtitle: "E-commerce платформа с бърза доставка",
    category: "Електронна търговия",
    url: "https://booom.bg/",
    isPublic: true,
    image: booomImg,
    overview: "Booom.bg е динамична българска e-commerce платформа, предлагаща разнообразие от продукти с фокус върху отлично клиентско обслужване, включително плащане при доставка и 14-дневно право на връщане.",
    challenge: "Клиентът имаше нужда от надеждна, високопроизводителна онлайн платформа, която да обработва нарастващ продуктов инвентар, да осигурява отлично потребителско изживяване и да изгражда доверие чрез прозрачни политики и бързи доставки.",
    solution: [
      "Изградихме пълнофункционален WooCommerce магазин с интуитивна навигация",
      "Внедрихме търсене и филтриране на продукти за лесно разглеждане",
      "Създадохме елементи за изграждане на доверие, подчертаващи доставка и връщане",
      "Оптимизирахме процеса на поръчка за максимална конверсия",
      "Интегрирахме проследяване на куриерски услуги и известия"
    ],
    results: [
      { metric: "+210%", label: "Ръст в продажбите" },
      { metric: "3 дни", label: "Средна доставка" },
      { metric: "98%", label: "Удовлетвореност" }
    ],
    technologies: ["WordPress", "WooCommerce", "Платежен портал", "Куриерски API"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-500"
  },
  {
    id: "athleticiq",
    title: "Athletic IQ",
    subtitle: "Приложение за спортни тренировки за младежи",
    category: "Спортни технологии",
    url: "https://athleticiqapp.com/",
    isPublic: true,
    image: athleticiqImg,
    overview: "Athletic IQ е иновативно фитнес приложение, създадено да трансформира начина, по който младите атлети тренират. С над 4 500 активни млади спортисти и 30+ игрови програми за тренировки, то превръща фитнеса в игра, а не в изтощение.",
    challenge: "Athletic IQ имаше нужда от завладяващ landing page, който да резонира както с родителите, така и с младите атлети, ясно да комуникира уникалния геймифициран подход към фитнеса и да увеличи изтеглянията на приложението на конкурентния британски пазар за младежки спорт.",
    solution: [
      "Създадохме динамичен, енергичен уебсайт с впечатляващи визии и анимации",
      "Разработихме завладяващо послание, насочено към британския младежки пазар",
      "Внедрихме интеграция с App Store и Google Play за лесно изтегляне",
      "Изградихме портал за треньори и регистрационни форми",
      "Оптимизирахме за mobile-first изживяване"
    ],
    results: [
      { metric: "4.5K+", label: "Активни атлети" },
      { metric: "35 мин", label: "Средна сесия" },
      { metric: "+280%", label: "Изтегляния" }
    ],
    technologies: ["WordPress", "Custom Design", "App интеграция", "Analytics"],
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-500"
  },
  {
    id: "super-credit",
    title: "SuperCredit",
    subtitle: "Вътрешна система за управление на кредити",
    category: "Финанси & FinTech",
    url: null,
    isPublic: false,
    image: supercreditImg,
    overview: "SuperCredit е водеща българска кредитна брокерска компания, помагаща на клиентите да намерят най-добрите оферти за ипотечни, потребителски и инвестиционни кредити. С над 2 600 обслужени клиенти и 900+ млн. лв. обработени кредити, те са надеждно име във финансовите услуги.",
    challenge: "SuperCredit се нуждаеше от вътрешна система за оптимизиране на работните процеси по обработка на заеми, сигурно управление на клиентски данни, проследяване на статуса на заявленията и подобряване на комуникацията между членовете на екипа. Съществуващите ръчни процеси забавяха операциите.",
    solution: [
      "Разработихме сигурна вътрешна платформа за управление, достъпна само за служители",
      "Създадохме база данни с клиенти с разширено търсене и филтриране",
      "Изградихме проследяване на кредитни заявления с актуализации на статус и известия",
      "Внедрихме контрол на достъпа базиран на роли за сигурност на данните",
      "Интегрирахме табло за отчети и анализ на представянето"
    ],
    results: [
      { metric: "+65%", label: "Скорост на обработка" },
      { metric: "2600+", label: "Управлявани клиенти" },
      { metric: "100%", label: "Сигурност на данните" }
    ],
    technologies: ["React", "TypeScript", "Supabase", "Role-Based Access"],
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-500",
    internalNote: "Това е вътрешна система, достъпна само за служители на SuperCredit."
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
              Нашето портфолио
            </span>
            <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
              Реални проекти, <span className="text-gradient">реални резултати</span>
            </h1>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Разгледайте как помогнахме на бизнеси от различни индустрии да постигнат дигитален успех чрез иновативни решения и стратегическо мислене.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="pb-24">
        <div className="container mx-auto px-6">
          <div className="space-y-24 max-w-6xl mx-auto">
            {caseStudies.map((study, index) => (
              <motion.article
                key={study.id}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6 }}
                className="relative"
              >
                {/* Case Study Number */}
                <div className="absolute -left-4 md:-left-12 top-0 text-8xl font-display font-bold text-primary/10 select-none hidden lg:block">
                  {String(index + 1).padStart(2, '0')}
                </div>

                <div className="border-gradient rounded-2xl overflow-hidden">
                  <div className={`bg-gradient-to-br ${study.gradient}`}>
                    {/* Header */}
                    <div className="p-8 md:p-12 pb-0">
                      <div className="flex flex-wrap items-center gap-3 mb-4">
                        <span className={`text-sm font-medium uppercase tracking-wider ${study.accentColor}`}>
                          {study.category}
                        </span>
                        {!study.isPublic && (
                          <span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-muted text-muted-foreground text-xs">
                            <Lock className="w-3 h-3" />
                            Вътрешна система
                          </span>
                        )}
                      </div>
                      <h2 className="text-3xl md:text-5xl font-display font-bold mb-2">
                        {study.title}
                      </h2>
                      <p className="text-lg text-muted-foreground">
                        {study.subtitle}
                      </p>
                    </div>

                    {/* Screenshot */}
                    <div className="p-8 md:p-12 pt-8">
                      <div className="relative rounded-xl overflow-hidden border border-border shadow-2xl">
                        <img
                          src={study.image}
                          alt={`${study.title} уебсайт`}
                          className="w-full h-auto"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
                      </div>
                    </div>

                    {/* Content Grid */}
                    <div className="p-8 md:p-12 pt-0 grid lg:grid-cols-2 gap-12">
                      {/* Left Column */}
                      <div className="space-y-8">
                        {/* Overview */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <Target className={`w-5 h-5 ${study.accentColor}`} />
                            Преглед
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.overview}
                          </p>
                        </div>

                        {/* Challenge */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <Lightbulb className={`w-5 h-5 ${study.accentColor}`} />
                            Предизвикателството
                          </h3>
                          <p className="text-muted-foreground leading-relaxed">
                            {study.challenge}
                          </p>
                        </div>

                        {/* Solution */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-3">
                            <CheckCircle className={`w-5 h-5 ${study.accentColor}`} />
                            Нашето решение
                          </h3>
                          <ul className="space-y-2">
                            {study.solution.map((item, i) => (
                              <li key={i} className="flex items-start gap-2 text-muted-foreground">
                                <ArrowRight className={`w-4 h-4 mt-1 flex-shrink-0 ${study.accentColor}`} />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>

                      {/* Right Column */}
                      <div className="space-y-8">
                        {/* Results */}
                        <div>
                          <h3 className="flex items-center gap-2 font-display font-semibold text-lg mb-4">
                            <BarChart3 className={`w-5 h-5 ${study.accentColor}`} />
                            Ключови резултати
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

                        {/* Technologies */}
                        <div>
                          <h3 className="font-display font-semibold text-sm text-muted-foreground uppercase tracking-wider mb-3">
                            Използвани технологии
                          </h3>
                          <div className="flex flex-wrap gap-2">
                            {study.technologies.map((tech) => (
                              <span
                                key={tech}
                                className="px-3 py-1.5 rounded-full bg-background/50 text-foreground text-sm border border-border"
                              >
                                {tech}
                              </span>
                            ))}
                          </div>
                        </div>

                        {/* Internal Note for SuperCredit */}
                        {study.internalNote && (
                          <div className="p-4 rounded-xl bg-muted/50 border border-border">
                            <p className="text-sm text-muted-foreground flex items-start gap-2">
                              <Lock className="w-4 h-4 mt-0.5 flex-shrink-0" />
                              {study.internalNote}
                            </p>
                          </div>
                        )}

                        {/* CTA Button */}
                        <div className="pt-4">
                          {study.isPublic && study.url ? (
                            <Button variant="hero" size="lg" asChild className="w-full sm:w-auto">
                              <a href={study.url} target="_blank" rel="noopener noreferrer">
                                Посетете проекта
                                <ExternalLink size={18} />
                              </a>
                            </Button>
                          ) : (
                            <Button variant="heroOutline" size="lg" asChild className="w-full sm:w-auto">
                              <Link to="/contact">
                                Обсъдете вашия проект
                                <ArrowRight size={18} />
                              </Link>
                            </Button>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.article>
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
              Нашата история на <span className="text-gradient">успеха</span>
            </h2>
            <p className="text-muted-foreground max-w-xl mx-auto">
              Числа, които отразяват нашия ангажимент да доставяме изключителни резултати за всеки клиент.
            </p>
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
              Готови ли сте да станете следващата ни история на успеха?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Нека обсъдим как можем да помогнем на вашия бизнес да постигне подобни резултати. Свържете се с нас за безплатна консултация.
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
                  Разгледайте услугите ни
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
