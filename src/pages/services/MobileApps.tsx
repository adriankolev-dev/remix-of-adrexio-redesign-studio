import { 
  Smartphone, 
  Zap, 
  Shield, 
  RefreshCw,
  Award,
  Users,
  Clock,
  TrendingUp,
  Code,
  HeartHandshake,
  Bell,
  Fingerprint
} from "lucide-react";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";

const MobileApps = () => {
  return (
    <ServiceLandingTemplate
      seoTitle="Мобилни приложения - Adrexio | iOS и Android разработка в София"
      seoDescription="Професионална разработка на мобилни приложения за iOS и Android в София. Native и cross-platform решения с отлично потребителско изживяване."
      seoKeywords="мобилни приложения, iOS приложение, Android приложение, разработка приложения София, mobile app development, React Native, Flutter"
      serviceName="Мобилни приложения"
      heroTitle="Вашият бизнес в джоба"
      heroHighlight="на всеки клиент."
      heroSubtitle="Създаваме иновативни мобилни приложения за iOS и Android, които предоставят изключително потребителско изживяване и реални бизнес резултати."
      heroCTAText="ЗАПОЧНИ СВОЯ ПРОЕКТ"
      
      stats={[
        { value: "20+", label: "Мобилни приложения" },
        { value: "4.8★", label: "Средна оценка" },
        { value: "50K+", label: "Общо изтегляния" }
      ]}
      
      introTitle="Защо да инвестирате в мобилно приложение?"
      introDescription="Мобилните приложения са най-директният начин да достигнете до вашите клиенти. С над 6 милиарда смартфон потребители по света, присъствието в App Store и Google Play е не просто предимство – то е необходимост за модерния бизнес."
      
      featuresTitle="Какво включва мобилната разработка?"
      featuresSubtitle="Пълен спектър от услуги"
      features={[
        {
          title: "Native iOS приложения",
          description: "Високопроизводителни приложения, написани на Swift за iPhone и iPad."
        },
        {
          title: "Native Android приложения",
          description: "Оптимизирани приложения за цялата Android екосистема."
        },
        {
          title: "Cross-platform решения",
          description: "React Native и Flutter приложения за едновременно покритие на iOS и Android."
        },
        {
          title: "Push известия",
          description: "Персонализирани push съобщения за ангажиране на потребителите."
        },
        {
          title: "Офлайн функционалност",
          description: "Приложения, които работят безпроблемно дори без интернет връзка."
        },
        {
          title: "Интеграции с хардуер",
          description: "Камера, GPS, биометрични данни и други функции на устройството."
        }
      ]}
      
      benefitsTitle="Какви ползи ще получите?"
      benefitsSubtitle="Реални резултати"
      benefits={[
        {
          icon: TrendingUp,
          title: "Повишена ангажираност",
          description: "До 3 пъти повече взаимодействие в сравнение с уеб."
        },
        {
          icon: Bell,
          title: "Директен достъп",
          description: "Push известия достигат до клиентите моментално."
        },
        {
          icon: Users,
          title: "Лоялност на клиентите",
          description: "Персонализирано изживяване изгражда дълготрайни връзки."
        },
        {
          icon: Fingerprint,
          title: "Сигурност",
          description: "Биометрична защита и криптирани данни."
        }
      ]}
      
      processTitle="Как създаваме мобилни приложения?"
      processSubtitle="Нашият процес"
      steps={[
        {
          number: "1",
          title: "Discovery и стратегия",
          description: "Анализираме целевата аудитория, конкуренцията и бизнес целите, за да определим оптималната стратегия за вашето приложение."
        },
        {
          number: "2",
          title: "UX/UI дизайн",
          description: "Създаваме интуитивен потребителски интерфейс, следвайки Human Interface Guidelines и Material Design принципите."
        },
        {
          number: "3",
          title: "Разработка и интеграции",
          description: "Пишем чист, тестван код с всички необходими backend интеграции и API връзки."
        },
        {
          number: "4",
          title: "QA и тестване",
          description: "Тестваме на реални устройства, провеждаме бета тестове и оптимизираме производителността."
        },
        {
          number: "5",
          title: "Публикуване и маркетинг",
          description: "Публикуваме в App Store и Google Play с оптимизирано ASO за максимална видимост."
        }
      ]}
      
      technologiesTitle="Технологии за мобилна разработка"
      technologies={[
        { name: "Swift" },
        { name: "Kotlin" },
        { name: "React Native" },
        { name: "Flutter" },
        { name: "Firebase" },
        { name: "GraphQL" },
        { name: "REST API" },
        { name: "Push Notifications" },
        { name: "In-App Purchases" },
        { name: "Analytics" }
      ]}
      
      useCasesTitle="За кого са подходящи?"
      useCasesSubtitle="Индустрии и приложения"
      useCases={[
        {
          title: "E-commerce",
          description: "Мобилни магазини с бързо пазаруване и сигурни плащания."
        },
        {
          title: "Фитнес и здраве",
          description: "Приложения за проследяване на тренировки, хранене и здраве."
        },
        {
          title: "On-demand услуги",
          description: "Доставки, транспорт, резервации – всичко на един клик."
        },
        {
          title: "Социални мрежи",
          description: "Платформи за общуване, споделяне и networking."
        },
        {
          title: "FinTech",
          description: "Мобилно банкиране, плащания и управление на финанси."
        },
        {
          title: "Образование",
          description: "E-learning платформи и интерактивни учебни приложения."
        }
      ]}
      
      whyChooseUsTitle="Защо да изберете нас?"
      whyChooseUsSubtitle="Нашите предимства"
      whyChooseUs={[
        {
          icon: Award,
          title: "Доказан опит",
          description: "Над 20 успешни мобилни проекта с десетки хиляди изтегляния."
        },
        {
          icon: Code,
          title: "Технологична експертиза",
          description: "Екип от сертифицирани iOS и Android разработчици."
        },
        {
          icon: RefreshCw,
          title: "Agile подход",
          description: "Гъвкава методология с редовни релийзи и обратна връзка."
        },
        {
          icon: Shield,
          title: "Сигурност",
          description: "Криптиране, сигурни API и спазване на GDPR."
        },
        {
          icon: Zap,
          title: "Производителност",
          description: "Оптимизирани приложения с бързо зареждане."
        },
        {
          icon: HeartHandshake,
          title: "Дългосрочна поддръжка",
          description: "Актуализации за нови версии на iOS и Android."
        }
      ]}
      
      faqTitle="Често задавани въпроси"
      faqs={[
        {
          question: "Native или Cross-platform – кое е по-добро?",
          answer: "Зависи от вашите нужди. Native приложенията предлагат най-добра производителност, докато cross-platform (React Native, Flutter) намаляват времето и разходите за разработка с до 40%. Ще ви консултираме кой подход е оптимален за вас."
        },
        {
          question: "Колко време отнема разработката на мобилно приложение?",
          answer: "MVP версия може да бъде готова за 2-3 месеца. Пълнофункционално приложение обикновено отнема 4-6 месеца в зависимост от сложността и функционалностите."
        },
        {
          question: "Колко струва разработката на мобилно приложение?",
          answer: "Цената зависи от платформите, функционалностите и сложността на дизайна. След безплатна консултация ще ви предоставим детайлна оферта с ясни етапи и срокове."
        },
        {
          question: "Помагате ли с публикуването в App Store и Google Play?",
          answer: "Да, поемаме целия процес по публикуване, включително подготовка на скрийншоти, описания, ASO оптимизация и комуникация с Apple/Google при нужда от ревизии."
        },
        {
          question: "Какво се случва след публикуването?",
          answer: "Предлагаме месечни пакети за поддръжка, които включват актуализации, мониторинг, bug fixes и добавяне на нови функционалности."
        },
        {
          question: "Можете ли да интегрирате приложението с нашата съществуваща система?",
          answer: "Абсолютно. Имаме богат опит в интегриране с ERP системи, CRM платформи, платежни системи и custom backend решения."
        }
      ]}
      
      ctaTitle="Готови да създадете вашето мобилно приложение?"
      ctaSubtitle="Свържете се с нас за безплатна консултация и нека обсъдим как да реализираме вашата идея."
    />
  );
};

export default MobileApps;
