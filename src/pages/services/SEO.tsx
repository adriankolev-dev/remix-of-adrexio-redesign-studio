import {
  Search,
  TrendingUp,
  BarChart3,
  Globe,
  Award,
  Clock,
  Target,
  FileText,
  Link as LinkIcon,
  MapPin,
  Zap,
} from "lucide-react";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";
import SearchMascot from "@/components/mascots/SearchMascot";
import Reveal from "@/components/editorial/Reveal";
import SectionEyebrow from "@/components/editorial/SectionEyebrow";
import SectionHeader from "@/components/editorial/SectionHeader";

const geoGroups = [
  {
    label: "Технически скелет",
    items: [
      {
        term: "JSON-LD (Schema)",
        description:
          "Превеждаме данните на езика на роботите. Структурирани данни за по-добро разбиране от AI.",
      },
      {
        term: "FAQPage Schema",
        description:
          "Най-прекият път към директен отговор в чата. Оптимизация за въпроси, не за ключови думи.",
      },
      {
        term: "SSR Rendering",
        description:
          "Подаваме чист HTML, вместо да караме бота да чака JavaScript. По-добро индексиране.",
      },
      {
        term: "Robots.txt",
        description:
          "Разрешаваме достъп на ботовете на OpenAI, Google и Bing. Не блокираме AI crawlers.",
      },
    ],
  },
  {
    label: "Съдържание",
    items: [
      {
        term: "BLUF метод",
        description:
          "Отговорът най-отпред, детайлите после. Bottom Line Up Front за по-бързо разбиране.",
      },
      {
        term: "Структура",
        description:
          "HTML таблици и списъци за данни. Структурираното съдържание е по-лесно за AI.",
      },
      {
        term: "Контекст",
        description: "Всяка секция има смисъл самостоятелно. Независими блокове съдържание.",
      },
      {
        term: "Information Gain",
        description: "Уникални данни, които ги няма другаде. Ексклузивност за по-висок ранг.",
      },
    ],
  },
  {
    label: "Авторитет (E-E-A-T)",
    items: [
      {
        term: "Реални автори",
        description: "Биографии с линкове към LinkedIn и социални профили. Доверие чрез прозрачност.",
      },
      {
        term: "Личен опит",
        description: 'Фрази като „От нашите тестове…", „Ние открихме…". Първо лице за автентичност.',
      },
      {
        term: "Brand Identity",
        description:
          "Страница «За нас» с пълни контакти и история. Изграждане на бранд авторитет.",
      },
      {
        term: "Споменавания",
        description: "Присъствие на бранда извън сайта. PR и медийно покритие.",
      },
    ],
  },
  {
    label: "Бъдеще и нулев клик",
    items: [
      {
        term: "Share of Voice",
        description: "Целта е брандът да бъде споменат в отговора на AI. Видимост в AI отговорите.",
      },
      {
        term: "Сценарии",
        description: "Оптимизация за дълги въпроси и казуси, не за ключови думи. Контекстуални заявки.",
      },
      {
        term: "Мултимедия",
        description: "Собствени снимки и видео с пълна транскрипция. Rich media за по-добро разбиране.",
      },
      {
        term: "Метрики",
        description: 'Следим „търсене по бранд" и „директен трафик" като сигнали за успех.',
      },
    ],
  },
];

const SEO = () => {
  const geoSection = (
    <section className="relative bg-background py-24 md:py-32">
      <div className="container mx-auto px-6">
        <SectionHeader
          index="11"
          label="Generative Engine Optimization"
          title="Подготовка за AI търсене"
        />

        <Reveal className="-mt-6 mb-14">
          <p className="max-w-2xl text-lg leading-relaxed text-muted-foreground">
            С нарастването на AI търсачките като ChatGPT, Perplexity и Google SGE, оптимизацията за
            генеративни търсачки става все по-важна. GEO ви помага да бъдете видими в отговорите на AI
            асистентите.
          </p>
        </Reveal>

        <div className="grid gap-x-16 gap-y-4 md:grid-cols-2">
          {geoGroups.map((group, gi) => (
            <div key={group.label} className="py-8">
              <Reveal>
                <SectionEyebrow label={group.label} index={String(gi + 1).padStart(2, "0")} />
              </Reveal>
              <div className="mt-6 border-t border-border">
                {group.items.map((item, i) => (
                  <Reveal key={item.term} delay={i * 0.04}>
                    <div className="border-b border-border py-4">
                      <h4 className="font-display text-base font-semibold text-foreground">
                        {item.term}
                      </h4>
                      <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                        {item.description}
                      </p>
                    </div>
                  </Reveal>
                ))}
              </div>
            </div>
          ))}
        </div>

        <Reveal delay={0.1} className="mt-14">
          <p className="max-w-2xl text-sm leading-relaxed text-muted-foreground">
            GEO оптимизацията е следващата стъпка в SEO. Докато традиционният SEO се фокусира върху
            класиране в резултатите от търсенето, GEO ви помага да бъдете включени в отговорите на AI
            асистентите като ChatGPT, Perplexity и Google SGE.
          </p>
        </Reveal>
      </div>
    </section>
  );

  return (
    <ServiceLandingTemplate
      seoTitle="SEO и GEO оптимизация - Adrexio | Google и AI търсене, София"
      seoDescription="SEO и GEO оптимизация в София. Традиционен SEO за Google + GEO за AI търсачки като ChatGPT и Perplexity. Пълна оптимизация за всички търсачки."
      seoKeywords="SEO оптимизация, GEO оптимизация, SEO София, AI търсене, ChatGPT оптимизация, позиции Google, органичен трафик, SEO услуги България, технически SEO, on-page SEO, линк билдинг"
      serviceName="SEO и GEO оптимизация"
      heroTitle="Бъдете #1 в Google и AI търсачките."
      heroHighlight="Повече трафик, повече клиенти."
      heroSubtitle="Традиционен SEO за Google + GEO оптимизация за ChatGPT, Perplexity и Google SGE. Пълна оптимизация за всички търсачки."
      heroCTAText="Безплатен SEO и GEO анализ"
      heroAside={<SearchMascot />}
      stats={[
        { value: "+300%", label: "Средно увеличение на трафика" },
        { value: "Top 3", label: "Позиции за ключови думи" },
        { value: "95%", label: "Клиенти с ръст" },
      ]}
      introTitle="Защо SEO и GEO са най-важната инвестиция за вашия бизнес?"
      introDescription="75% от потребителите никога не скролват под първата страница в Google. Ако не сте там, просто не съществувате за тях. С нарастването на AI търсачките като ChatGPT и Perplexity, GEO оптимизацията става все по-важна. SEO и GEO не са разход — това е инвестиция с най-висока възвръщаемост в дигиталния маркетинг."
      featuresTitle="Какво включва нашата SEO и GEO услуга?"
      featuresSubtitle="Пълен спектър SEO + GEO оптимизация"
      features={[
        {
          title: "Технически SEO одит",
          description:
            "Задълбочен анализ на сайта за технически проблеми, които пречат на индексирането.",
        },
        {
          title: "On-Page оптимизация",
          description: "Оптимизация на съдържание, мета тагове, заглавия и вътрешни връзки.",
        },
        {
          title: "Keyword Research",
          description: "Проучване на ключови думи с висок потенциал и ниска конкуренция.",
        },
        {
          title: "Link Building",
          description: "Изграждане на качествен backlink профил от авторитетни сайтове.",
        },
        {
          title: "Local SEO",
          description: "Оптимизация за местни търсения и Google My Business.",
        },
        {
          title: "Content Strategy",
          description: "Стратегия за съдържание, което класира и конвертира.",
        },
      ]}
      benefitsTitle="Какви резултати ще постигнете?"
      benefitsSubtitle="Измерими ползи"
      benefits={[
        {
          icon: TrendingUp,
          title: "+300% органичен трафик",
          description: "Средно увеличение на трафика в първите 6 месеца.",
        },
        {
          icon: Target,
          title: "По-качествени leads",
          description: "Органичният трафик конвертира 5x по-добре от платения.",
        },
        {
          icon: Clock,
          title: "Дългосрочни резултати",
          description: "За разлика от рекламите, SEO работи и след като спрете да плащате.",
        },
        {
          icon: BarChart3,
          title: "ROI до 1200%",
          description: "SEO има най-висока възвръщаемост сред маркетинг каналите.",
        },
      ]}
      processTitle="Нашият SEO процес"
      processSubtitle="Доказана методология"
      steps={[
        {
          number: "1",
          title: "SEO одит и анализ",
          description:
            "Провеждаме цялостен одит на сайта, анализираме конкуренцията и идентифицираме възможностите за растеж.",
        },
        {
          number: "2",
          title: "Keyword стратегия",
          description: "Проучваме и приоритизираме ключови думи с най-висок потенциал за вашия бизнес.",
        },
        {
          number: "3",
          title: "Техническа оптимизация",
          description:
            "Поправяме техническите проблеми — скорост, мобилна версия, структурирани данни, crawlability.",
        },
        {
          number: "4",
          title: "On-Page SEO",
          description: "Оптимизираме съдържанието, мета таговете, заглавията и вътрешните връзки.",
        },
        {
          number: "5",
          title: "Link Building",
          description:
            "Изграждаме качествени backlinks чрез guest posting, digital PR и outreach кампании.",
        },
        {
          number: "6",
          title: "Мониторинг и отчети",
          description: "Следим резултатите, предоставяме месечни отчети и адаптираме стратегията.",
        },
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
        { name: "PageSpeed Insights" },
      ]}
      useCasesTitle="За кого е подходящо?"
      useCasesSubtitle="SEO за всеки бизнес"
      useCases={[
        {
          title: "E-commerce магазини",
          description: "Product SEO за повече продажби от органично търсене.",
        },
        {
          title: "Локални бизнеси",
          description: "Local SEO за доминиране в местните резултати.",
        },
        {
          title: "B2B компании",
          description: "Content-driven SEO за генериране на качествени leads.",
        },
        {
          title: "SaaS продукти",
          description: "Programmatic и content SEO за скалируем растеж.",
        },
        {
          title: "Стартъпи",
          description: "Изграждане на органично присъствие от нулата.",
        },
        {
          title: "Медии и блогове",
          description: "Максимизиране на трафика и приходите от реклами.",
        },
      ]}
      whyChooseUsTitle="Защо да изберете нас?"
      whyChooseUsSubtitle="Нашите предимства"
      whyChooseUs={[
        {
          icon: Award,
          title: "Доказани резултати",
          description: "95% от клиентите ни отчитат значителен ръст в трафика.",
        },
        {
          icon: FileText,
          title: "Прозрачност",
          description: "Детайлни месечни отчети с всички метрики и действия.",
        },
        {
          icon: LinkIcon,
          title: "Качествен Link Building",
          description: "Само white-hat техники от авторитетни сайтове.",
        },
        {
          icon: Globe,
          title: "Международен опит",
          description: "Опит с многоезични и международни SEO кампании.",
        },
        {
          icon: Zap,
          title: "Бързи резултати",
          description: "Първи резултати в рамките на 2-3 месеца.",
        },
        {
          icon: MapPin,
          title: "Local SEO експертиза",
          description: "Специализирани в местно SEO за български бизнеси.",
        },
      ]}
      faqTitle="Често задавани въпроси"
      faqs={[
        {
          question: "Колко време отнема да видя резултати от SEO?",
          answer:
            "SEO е дългосрочна стратегия. Обикновено първите значителни резултати се виждат след 3-6 месеца, като пълният ефект се проявява след 6-12 месеца. Времето зависи от конкуренцията във вашата ниша и текущото състояние на сайта.",
        },
        {
          question: "Гарантирате ли позиции в Google?",
          answer:
            "Никой не може да гарантира конкретни позиции, тъй като Google актуализира алгоритъма си постоянно. Но можем да гарантираме, че използваме доказани техники и работим за постигане на най-добрите възможни резултати за вашия бизнес.",
        },
        {
          question: "Колко струва SEO услугата?",
          answer:
            "Цената зависи от обхвата — размер на сайта, конкуренция в нишата, текущо състояние и цели. Предлагаме пакети от базова оптимизация до пълна SEO стратегия с link building и content marketing.",
        },
        {
          question: "Каква е разликата между SEO и Google Ads?",
          answer:
            "Google Ads носи моментален трафик, но спира когато спрете да плащате. SEO изисква повече време, но осигурява устойчив, безплатен трафик в дългосрочен план. Оптималната стратегия често комбинира двете.",
        },
        {
          question: "Правите ли SEO за международни сайтове?",
          answer:
            "Да, имаме опит с многоезични сайтове и международно SEO, включително hreflang оптимизация, локализация на съдържание и изграждане на международен backlink профил.",
        },
        {
          question: "Какви отчети предоставяте?",
          answer:
            "Предоставяме месечни отчети с ключови метрики — позиции на ключови думи, органичен трафик, backlinks, технически здраве на сайта и препоръки за следващия период.",
        },
      ]}
      ctaTitle="Готови да доминирате в Google и AI търсачките?"
      ctaSubtitle="Заявете безплатен SEO и GEO одит на вашия сайт и разберете потенциала си за растеж."
      customSectionBeforeCTA={geoSection}
    />
  );
};

export default SEO;
