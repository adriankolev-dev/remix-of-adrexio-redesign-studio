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
  Zap
} from "lucide-react";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";

const SEO = () => {
  return (
    <ServiceLandingTemplate
      heroTitle="Бъдете #1 в Google."
      heroHighlight="Повече трафик, повече клиенти."
      heroSubtitle="Увеличете органичния трафик и конверсиите с доказани SEO стратегии. Изкачете се на върха на търсачките и останете там."
      heroCTAText="БЕЗПЛАТЕН SEO АНАЛИЗ"
      
      stats={[
        { value: "+300%", label: "Средно увеличение на трафика" },
        { value: "Top 3", label: "Позиции за ключови думи" },
        { value: "95%", label: "Клиенти с ръст" }
      ]}
      
      introTitle="Защо SEO е най-важната инвестиция за вашия бизнес?"
      introDescription="75% от потребителите никога не скролват под първата страница в Google. Ако не сте там, просто не съществувате за тях. SEO не е разход – това е инвестиция с най-висока възвръщаемост в дигиталния маркетинг."
      
      featuresTitle="Какво включва нашата SEO услуга?"
      featuresSubtitle="Пълен спектър SEO"
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
      
      ctaTitle="Готови да доминирате в Google?"
      ctaSubtitle="Заявете безплатен SEO одит на вашия сайт и разберете потенциала си за растеж."
    />
  );
};

export default SEO;
