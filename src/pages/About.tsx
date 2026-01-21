import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { 
  Target, 
  Users, 
  Rocket, 
  Award,
  ArrowRight,
  CheckCircle,
  Code,
  Lightbulb,
  Heart
} from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { getOrganizationSchema } from "@/lib/structuredData";

const values = [
  {
    icon: Target,
    title: "Прецизност",
    description: "Всеки детайл има значение. Изграждаме решения с безкомпромисно внимание към качеството."
  },
  {
    icon: Lightbulb,
    title: "Иновация",
    description: "Използваме най-новите технологии и подходи за създаване на модерни дигитални продукти."
  },
  {
    icon: Users,
    title: "Партньорство",
    description: "Вярваме в дългосрочните отношения. Вашият успех е нашата мисия."
  },
  {
    icon: Heart,
    title: "Отдаденост",
    description: "Влагаме страст във всеки проект и се ангажираме с вашите бизнес цели."
  }
];

const stats = [
  { value: "50+", label: "Завършени проекта" },
  { value: "30+", label: "Доволни клиенти" },
  { value: "5/5", label: "Клиентска оценка" },
  { value: "7+", label: "Години опит" }
];

const team = [
  {
    name: "Екипът на Adrexio",
    role: "Уеб разработка & Дизайн",
    description: "Нашият екип от опитни разработчици и дизайнери работи заедно, за да създаде изключителни дигитални продукти.",
    skills: ["React", "Node.js", "UI/UX", "SEO", "Mobile Apps"]
  }
];

const About = () => {
  return (
    <main className="min-h-screen bg-background">
      <SEO
        title="За нас - Adrexio | Професионално уеб студио в София"
        description="Adrexio е уеб студио в София, специализирано в създаването на модерни уебсайтове, мобилни приложения и дигитални решения. Над 50+ завършени проекта, 30+ доволни клиенти."
        keywords="за нас Adrexio, уеб студио София, екип уеб разработка, история Adrexio, опит уеб дизайн"
        structuredData={getOrganizationSchema()}
      />
      <Navbar />

      {/* Hero */}
      <section className="pt-32 pb-24 relative overflow-hidden">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-6 relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <span className="text-primary text-sm font-medium uppercase tracking-wider mb-4 block">
                За нас
              </span>
              <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
                Ние сме <span className="text-gradient">Adrexio</span>
              </h1>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                Ние не просто създаваме софтуер – ние изграждаме основите за вашия дългосрочен дигитален успех чрез иновации и прецизност.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-8">
                В Adrexio вярваме, че успешните дигитални продукти се раждат от тясно сътрудничество и прецизно планиране. Нашият процес е оптимизиран, за да превърне вашата идея в работещо решение бързо и ефективно.
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Свържете се с нас
                  <ArrowRight size={18} />
                </Link>
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="relative"
            >
              <div className="grid grid-cols-2 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    className="border-gradient p-6 rounded-xl text-center"
                  >
                    <div className="text-4xl font-display font-bold text-gradient mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-6">
              Нашата <span className="text-gradient">мисия</span>
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Да помогнем на бизнеса да расте в дигиталната ера чрез създаване на бързи, оптимизирани и красиви уебсайтове и приложения, които превръщат посетителите в лоялни клиенти.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4">
                <Code className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Безкомпромисно качество
              </h3>
              <p className="text-muted-foreground text-sm">
                Всеки ред код е написан с внимание към детайла и най-добрите практики.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4">
                <Rocket className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Скорост на изпълнение
              </h3>
              <p className="text-muted-foreground text-sm">
                Използваме Agile методология за бърза и ефективна разработка.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">
                Гарантиран резултат
              </h3>
              <p className="text-muted-foreground text-sm">
                Плащате само след финално одобрение на проекта.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24">
        <div className="container mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-5xl font-display font-bold mb-4">
              Нашите <span className="text-gradient">ценности</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Принципите, които ни водят във всеки проект и взаимоотношение с клиенти.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-gradient p-6 rounded-xl text-center group hover:scale-105 transition-transform"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary/20 to-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display font-semibold text-lg mb-2">
                  {value.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* What we offer */}
      <section className="py-24 bg-gradient-to-b from-card to-background">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-display font-bold mb-6">
                Какво ви предлагаме?
              </h2>
              <ul className="space-y-4">
                {[
                  "Дизайн, ориентиран към потребителя (UX/UI) – Създаваме интерфейси, които са толкова лесни за ползване, че клиентите ви се влюбват в тях от първия клик.",
                  "Безкомпромисна скорост и сигурност – Разработваме стабилен код, който зарежда мигновено и защитава вашите данни.",
                  "Мащабируеми технологии – Използваме модерен технологичен стек, за да може вашият сайт или приложение да растат заедно с вашия бизнес."
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-4">
                    <CheckCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="border-gradient p-8 rounded-2xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center text-2xl font-display font-bold text-primary-foreground">
                  A
                </div>
                <div>
                  <h3 className="font-display font-bold text-xl">Екипът на Adrexio</h3>
                  <p className="text-muted-foreground text-sm">Уеб разработка & Дизайн</p>
                </div>
              </div>
              <p className="text-muted-foreground mb-6">
                Нашият екип от опитни разработчици и дизайнери работи заедно, за да създаде изключителни дигитални продукти, които надхвърлят очакванията.
              </p>
              <div className="flex flex-wrap gap-2">
                {["React", "Node.js", "UI/UX", "SEO", "Mobile Apps"].map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
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
              Готови да работим заедно?
            </h2>
            <p className="text-muted-foreground mb-8">
              Свържете се с нас за безплатна консултация и нека превърнем вашите идеи в реалност.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Button variant="hero" size="xl" asChild>
                <Link to="/contact">
                  Свържете се с нас
                  <ArrowRight size={18} />
                </Link>
              </Button>
              <Button variant="heroOutline" size="xl" asChild>
                <Link to="/case-studies">
                  Вижте проектите ни
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

export default About;
