import { 
  Search, 
  TrendingUp, 
  BarChart3, 
  Globe,
  Award,
  Users,
  Clock,
  Target,
  FileText,
  Link as LinkIcon,
  MapPin,
  Zap,
  Settings,
  Edit,
  Shield,
  Sparkles,
  Code,
  Table,
  Eye,
  Building2,
  TrendingDown,
  Video,
  BarChart
} from "lucide-react";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";
import { motion } from "framer-motion";

const SEO = () => {
  return (
    <ServiceLandingTemplate
      seoTitle="SEO и GEO оптимизация - Adrexio | Google и AI търсене, София"
      seoDescription="SEO и GEO оптимизация в София. Традиционен SEO за Google + GEO за AI търсачки като ChatGPT и Perplexity. Пълна оптимизация за всички търсачки."
      seoKeywords="SEO оптимизация, GEO оптимизация, SEO София, AI търсене, ChatGPT оптимизация, позиции Google, органичен трафик, SEO услуги България, технически SEO, on-page SEO, линк билдинг"
      serviceName="SEO и GEO оптимизация"
      heroTitle="Бъдете #1 в Google и AI търсачките."
      heroHighlight="Повече трафик, повече клиенти."
      heroSubtitle="Традиционен SEO за Google + GEO оптимизация за ChatGPT, Perplexity и Google SGE. Пълна оптимизация за всички търсачки."
      heroCTAText="БЕЗПЛАТЕН SEO И GEO АНАЛИЗ"
      
      stats={[
        { value: "+300%", label: "Средно увеличение на трафика" },
        { value: "Top 3", label: "Позиции за ключови думи" },
        { value: "95%", label: "Клиенти с ръст" }
      ]}
      
      introTitle="Защо SEO и GEO са най-важната инвестиция за вашия бизнес?"
      introDescription="75% от потребителите никога не скролват под първата страница в Google. Ако не сте там, просто не съществувате за тях. С нарастването на AI търсачките като ChatGPT и Perplexity, GEO оптимизацията става все по-важна. SEO и GEO не са разход – това е инвестиция с най-висока възвръщаемост в дигиталния маркетинг."
      
      featuresTitle="Какво включва нашата SEO и GEO услуга?"
      featuresSubtitle="Пълен спектър SEO + GEO оптимизация"
      features={[
        {
          title: "Технически SEO одит",
          description: "Задълбочен анализ на сайта за технически проблеми, които пречат на индексирането."
        },
        {
          title: "On-Page оптимизация",
          description: "Оптимизация на съдържание, мета тагове, заглавия и вътрешни връзки."
        },
        {
          title: "Keyword Research",
          description: "Проучване на ключови думи с висок потенциал и ниска конкуренция."
        },
        {
          title: "Link Building",
          description: "Изграждане на качествен backlink профил от авторитетни сайтове."
        },
        {
          title: "Local SEO",
          description: "Оптимизация за местни търсения и Google My Business."
        },
        {
          title: "Content Strategy",
          description: "Стратегия за съдържание, което класира и конвертира."
        }
      ]}
      
      benefitsTitle="Какви резултати ще постигнете?"
      benefitsSubtitle="Измерими ползи"
      benefits={[
        {
          icon: TrendingUp,
          title: "+300% органичен трафик",
          description: "Средно увеличение на трафика в първите 6 месеца."
        },
        {
          icon: Target,
          title: "По-качествени leads",
          description: "Органичният трафик конвертира 5x по-добре от платения."
        },
        {
          icon: Clock,
          title: "Дългосрочни резултати",
          description: "За разлика от рекламите, SEO работи и след като спрете да плащате."
        },
        {
          icon: BarChart3,
          title: "ROI до 1200%",
          description: "SEO има най-висока възвръщаемост сред маркетинг каналите."
        }
      ]}
      
      processTitle="Нашият SEO процес"
      processSubtitle="Доказана методология"
      steps={[
        {
          number: "1",
          title: "SEO одит и анализ",
          description: "Провеждаме цялостен одит на сайта, анализираме конкуренцията и идентифицираме възможностите за растеж."
        },
        {
          number: "2",
          title: "Keyword стратегия",
          description: "Проучваме и приоритизираме ключови думи с най-висок потенциал за вашия бизнес."
        },
        {
          number: "3",
          title: "Техническа оптимизация",
          description: "Поправяме техническите проблеми – скорост, мобилна версия, структурирани данни, crawlability."
        },
        {
          number: "4",
          title: "On-Page SEO",
          description: "Оптимизираме съдържанието, мета таговете, заглавията и вътрешните връзки."
        },
        {
          number: "5",
          title: "Link Building",
          description: "Изграждаме качествени backlinks чрез guest posting, digital PR и outreach кампании."
        },
        {
          number: "6",
          title: "Мониторинг и отчети",
          description: "Следим резултатите, предоставяме месечни отчети и адаптираме стратегията."
        }
      ]}
      
      technologiesTitle="Инструменти, които използваме"
      technologies={[
        { name: "Ahrefs" },
        { name: "SEMrush" },
        { name: "Screaming Frog" },
        { name: "Google Search Console" },
        { name: "Google Analytics 4" },
        { name: "Surfer SEO" },
        { name: "Moz" },
        { name: "Majestic" },
        { name: "Schema Markup" },
        { name: "PageSpeed Insights" }
      ]}
      
      useCasesTitle="За кого е подходящо?"
      useCasesSubtitle="SEO за всеки бизнес"
      useCases={[
        {
          title: "E-commerce магазини",
          description: "Product SEO за повече продажби от органично търсене."
        },
        {
          title: "Локални бизнеси",
          description: "Local SEO за доминиране в местните резултати."
        },
        {
          title: "B2B компании",
          description: "Content-driven SEO за генериране на качествени leads."
        },
        {
          title: "SaaS продукти",
          description: "Programmatic и content SEO за скалируем растеж."
        },
        {
          title: "Стартъпи",
          description: "Изграждане на органично присъствие от нулата."
        },
        {
          title: "Медии и блогове",
          description: "Максимизиране на трафика и приходите от реклами."
        }
      ]}
      
      whyChooseUsTitle="Защо да изберете нас?"
      whyChooseUsSubtitle="Нашите предимства"
      whyChooseUs={[
        {
          icon: Award,
          title: "Доказани резултати",
          description: "95% от клиентите ни отчитат значителен ръст в трафика."
        },
        {
          icon: FileText,
          title: "Прозрачност",
          description: "Детайлни месечни отчети с всички метрики и действия."
        },
        {
          icon: LinkIcon,
          title: "Качествен Link Building",
          description: "Само white-hat техники от авторитетни сайтове."
        },
        {
          icon: Globe,
          title: "Международен опит",
          description: "Опит с многоезични и международни SEO кампании."
        },
        {
          icon: Zap,
          title: "Бързи резултати",
          description: "Първи резултати в рамките на 2-3 месеца."
        },
        {
          icon: MapPin,
          title: "Local SEO експертиза",
          description: "Специализирани в местно SEO за български бизнеси."
        }
      ]}
      
      faqTitle="Често задавани въпроси"
      faqs={[
        {
          question: "Колко време отнема да видя резултати от SEO?",
          answer: "SEO е дългосрочна стратегия. Обикновено първите значителни резултати се виждат след 3-6 месеца, като пълният ефект се проявява след 6-12 месеца. Времето зависи от конкуренцията във вашата ниша и текущото състояние на сайта."
        },
        {
          question: "Гарантирате ли позиции в Google?",
          answer: "Никой не може да гарантира конкретни позиции, тъй като Google актуализира алгоритъма си постоянно. Но можем да гарантираме, че използваме доказани техники и работим за постигане на най-добрите възможни резултати за вашия бизнес."
        },
        {
          question: "Колко струва SEO услугата?",
          answer: "Цената зависи от обхвата – размер на сайта, конкуренция в нишата, текущо състояние и цели. Предлагаме пакети от базова оптимизация до пълна SEO стратегия с link building и content marketing."
        },
        {
          question: "Каква е разликата между SEO и Google Ads?",
          answer: "Google Ads носи моментален трафик, но спира когато спрете да плащате. SEO изисква повече време, но осигурява устойчив, безплатен трафик в дългосрочен план. Оптималната стратегия често комбинира двете."
        },
        {
          question: "Правите ли SEO за международни сайтове?",
          answer: "Да, имаме опит с многоезични сайтове и международно SEO, включително hreflang оптимизация, локализация на съдържание и изграждане на международен backlink профил."
        },
        {
          question: "Какви отчети предоставяте?",
          answer: "Предоставяме месечни отчети с ключови метрики – позиции на ключови думи, органичен трафик, backlinks, технически здраве на сайта и препоръки за следващия период."
        }
      ]}
      
      ctaTitle="Готови да доминирате в Google и AI търсачките?"
      ctaSubtitle="Заявете безплатен SEO и GEO одит на вашия сайт и разберете потенциала си за растеж."
      customSectionBeforeCTA={
        <section className="py-24 bg-gradient-to-b from-card to-background">
          <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">
              Подготовка за <span className="text-gradient">AI Търсене</span>
            </h2>
            <p className="text-lg text-muted-foreground">
              Стратегическа карта за GEO (Generative Engine Optimization)
            </p>
            <p className="text-sm text-muted-foreground mt-4 max-w-2xl mx-auto">
              С нарастването на AI търсачките като ChatGPT, Perplexity и Google SGE, 
              оптимизацията за генеративни търсачки става все по-важна. GEO ви помага 
              да бъдете видими в отговорите на AI асистентите.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Technical Skeleton */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Settings className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">Технически скелет</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Code className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">JSON-LD (Schema):</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Преведи данните на езика на роботите. Структурирани данни за по-добро разбиране от AI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <FileText className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">FAQPage Schema:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Най-прекият път към директен отговор в чата. Оптимизирай за въпроси, не за ключови думи.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Zap className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">SSR Rendering:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Подавай чист HTML, не карай бота да чака JavaScript. Server-side rendering за по-добро индексиране.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Robots.txt:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Разреши достъп на ботовете на OpenAI, Google и Bing. Не блокирай AI crawlers.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Content */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Edit className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">Съдържание</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Target className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">BLUF Метод:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Отговорът най-отпред, детайлите после. Bottom Line Up Front за по-бързо разбиране.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Table className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Структура:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Използвай HTML таблици и списъци за данни. Структурирано съдържание е по-лесно за AI.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Eye className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Контекст:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Всяка секция трябва да има смисъл самостоятелно. Независими блокове съдържание.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingUp className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Information Gain:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Добави уникални данни, които ги няма другаде. Ексклузивна информация за по-висок ранг.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Authority E-E-A-T */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Shield className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">Авторитет (E-E-A-T)</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <Users className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Реални автори:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Биографии с линкове към LinkedIn/социални профили. Доверие чрез прозрачност.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Award className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Личен опит:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Използвай фрази като "От нашите тестове...", "Ние открихме...". Първо лице за автентичност.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Building2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Brand Identity:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Страница "За нас" с пълни контакти и история. Изграждане на бранд авторитет.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Globe className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Споменавания:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Изгради присъствие на бранда извън сайта си. PR и медийно покритие.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>

            {/* Future & Zero Click */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="bg-card border border-border rounded-2xl p-6 hover:border-primary/50 transition-colors"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 rounded-xl bg-muted flex items-center justify-center">
                  <Sparkles className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-display font-bold">Бъдеще & Нулев клик</h3>
              </div>
              <ul className="space-y-4">
                <li className="flex items-start gap-3">
                  <BarChart className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Share of Voice:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Целта е брандът да бъде споменат в отговора на AI. Видимост в AI отговорите.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Search className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Сценарии:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Оптимизирай за дълги въпроси и казуси, не за ключови думи. Контекстуални заявки.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <Video className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Мултимедия:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Собствени снимки и видео с пълна транскрипция. Rich media за по-добро разбиране.
                    </p>
                  </div>
                </li>
                <li className="flex items-start gap-3">
                  <TrendingDown className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-foreground">Метрики:</strong>
                    <p className="text-sm text-muted-foreground mt-1">
                      Следи "Търсене по бранд" и "Директен трафик" за успех. Новые метрики за GEO.
                    </p>
                  </div>
                </li>
              </ul>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <p className="text-muted-foreground text-sm max-w-2xl mx-auto">
              GEO оптимизацията е следващата стъпка в SEO. Докато традиционният SEO се фокусира 
              върху класиране в резултатите от търсенето, GEO ви помага да бъдете включени в 
              отговорите на AI асистентите като ChatGPT, Perplexity и Google SGE.
            </p>
          </motion.div>
          </motion.div>
        </div>
      </section>
      }
    />
  );
};

export default SEO;
