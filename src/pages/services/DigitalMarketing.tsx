import { 
  Megaphone, 
  Target, 
  BarChart3, 
  TrendingUp,
  Award,
  Users,
  DollarSign,
  Zap,
  Mail,
  Share2,
  Video,
  MousePointer
} from "lucide-react";
import ServiceLandingTemplate from "@/components/ServiceLandingTemplate";

const DigitalMarketing = () => {
  return (
    <ServiceLandingTemplate
      seoTitle="Дигитален маркетинг - Adrexio | Google Ads, Facebook реклами, София"
      seoDescription="Професионален дигитален маркетинг в София. Google Ads, Facebook/Instagram реклами, email маркетинг и социални мрежи за растеж на вашия бизнес."
      seoKeywords="дигитален маркетинг, Google Ads, Facebook реклами, Instagram реклами, email маркетинг, социални мрежи, дигитален маркетинг София"
      serviceName="Дигитален маркетинг"
      heroTitle="Маркетинг, който"
      heroHighlight="генерира приходи."
      heroSubtitle="Стратегически дигитален маркетинг, който достига правилните хора в правилния момент. Повече leads, повече продажби, повече растеж."
      heroCTAText="БЕЗПЛАТНА КОНСУЛТАЦИЯ"
      
      stats={[
        { value: "3.5x", label: "Средна възвръщаемост" },
        { value: "+200%", label: "Увеличение на трафика" },
        { value: "100%", label: "Доверие и качество" }
      ]}
      
      introTitle="Защо вашият бизнес се нуждае от професионален дигитален маркетинг?"
      introDescription="Дигиталният маркетинг не е лукс – това е необходимост за оцеляване в съвременния бизнес свят. Но да харчите бюджет без стратегия е като да хвърляте пари на вятъра. Ние превръщаме всеки похарчен лев в измерими резултати."
      
      featuresTitle="Какво включват нашите услуги?"
      featuresSubtitle="Пълен маркетинг микс"
      features={[
        {
          title: "Google Ads (PPC)",
          description: "Search, Display, Shopping и YouTube кампании с оптимизирана цена на клик."
        },
        {
          title: "Facebook & Instagram Ads",
          description: "Таргетирани социални реклами с прецизна сегментация на аудиторията."
        },
        {
          title: "Social Media Management",
          description: "Създаване на съдържание, планиране и управление на социалните мрежи."
        },
        {
          title: "Email Marketing",
          description: "Автоматизирани имейл кампании за nurturing и конверсия на leads."
        },
        {
          title: "Content Marketing",
          description: "Стратегическо съдържание, което привлича и ангажира аудиторията."
        },
        {
          title: "Analytics & Reporting",
          description: "Подробен анализ на данните за оптимизиране на резултатите."
        }
      ]}
      
      benefitsTitle="Какви резултати ще постигнете?"
      benefitsSubtitle="Измерими ползи"
      benefits={[
        {
          icon: TrendingUp,
          title: "3.5x ROAS",
          description: "Средна възвръщаемост на рекламните разходи."
        },
        {
          icon: Target,
          title: "Прецизно таргетиране",
          description: "Достигаме точно хората, които искат да купят."
        },
        {
          icon: DollarSign,
          title: "Оптимизирани разходи",
          description: "Намаляваме цената на придобиване на клиент."
        },
        {
          icon: BarChart3,
          title: "Скалируемост",
          description: "Увеличаваме бюджета само когато работи."
        }
      ]}
      
      processTitle="Как работим?"
      processSubtitle="Нашият маркетинг процес"
      steps={[
        {
          number: "1",
          title: "Стратегия и планиране",
          description: "Анализираме бизнеса, конкуренцията и целевата аудитория. Дефинираме KPIs и създаваме детайлен маркетинг план."
        },
        {
          number: "2",
          title: "Аудитория и таргетиране",
          description: "Създаваме детайлни buyer personas и настройваме прецизно таргетиране за всеки канал."
        },
        {
          number: "3",
          title: "Креативи и съдържание",
          description: "Разработваме рекламни материали, копита и визуални елементи, които грабват вниманието."
        },
        {
          number: "4",
          title: "Стартиране и A/B тестване",
          description: "Пускаме кампаниите с множество вариации и тестваме какво работи най-добре."
        },
        {
          number: "5",
          title: "Оптимизация",
          description: "Непрекъснато оптимизираме въз основа на данните – bidding, аудитории, креативи."
        },
        {
          number: "6",
          title: "Отчети и мащабиране",
          description: "Предоставяме детайлни отчети и скалираме успешните кампании."
        }
      ]}
      
      technologiesTitle="Платформи, с които работим"
      technologies={[
        { name: "Google Ads" },
        { name: "Meta Ads" },
        { name: "LinkedIn Ads" },
        { name: "TikTok Ads" },
        { name: "Google Analytics 4" },
        { name: "Mailchimp" },
        { name: "Klaviyo" },
        { name: "HubSpot" },
        { name: "Hootsuite" },
        { name: "Canva Pro" }
      ]}
      
      useCasesTitle="За кого е подходящо?"
      useCasesSubtitle="Индустрии и сценарии"
      useCases={[
        {
          title: "E-commerce",
          description: "Shopping кампании и ретаргетинг за максимални продажби."
        },
        {
          title: "B2B компании",
          description: "LinkedIn Ads и lead generation кампании за качествени leads."
        },
        {
          title: "Локални бизнеси",
          description: "Geo-targeted реклами за привличане на местни клиенти."
        },
        {
          title: "SaaS продукти",
          description: "Trial signups и user acquisition с оптимизирана CAC."
        },
        {
          title: "Стартъпи",
          description: "Growth marketing за бързо скалиране с ограничен бюджет."
        },
        {
          title: "Събития и обучения",
          description: "Кампании за регистрации и продажба на билети."
        }
      ]}
      
      whyChooseUsTitle="Защо да изберете нас?"
      whyChooseUsSubtitle="Нашите предимства"
      whyChooseUs={[
        {
          icon: Award,
          title: "Сертифицирани експерти",
          description: "Google и Meta сертифицирани специалисти."
        },
        {
          icon: BarChart3,
          title: "Data-Driven подход",
          description: "Всяко решение е базирано на данни, не на предположения."
        },
        {
          icon: Zap,
          title: "Бърза реакция",
          description: "Постоянен мониторинг и бързи корекции."
        },
        {
          icon: Users,
          title: "Dedicated екип",
          description: "Персонален account manager за вашия проект."
        },
        {
          icon: MousePointer,
          title: "Фокус върху конверсии",
          description: "Не само кликове – реални резултати за бизнеса."
        },
        {
          icon: Share2,
          title: "Omnichannel стратегия",
          description: "Интегриран подход през всички канали."
        }
      ]}
      
      faqTitle="Често задавани въпроси"
      faqs={[
        {
          question: "Какъв бюджет е нужен за ефективен дигитален маркетинг?",
          answer: "Минималният препоръчителен рекламен бюджет е 500-1000 € на месец за един канал. Оптималните резултати обаче се постигат с бюджети от 2000+ €, които позволяват достатъчно данни за оптимизация и тестване."
        },
        {
          question: "Колко бързо ще видя резултати?",
          answer: "При платена реклама първите резултати се виждат веднага. Оптимизацията обаче отнема 2-4 седмици, тъй като алгоритмите се нуждаят от данни за обучение. Стабилни резултати очаквайте след 1-2 месеца."
        },
        {
          question: "Какво включва управлението на кампании?",
          answer: "Пълното управление включва: стратегия, създаване на креативи и копита, настройка на кампании, A/B тестване, ежедневен мониторинг, оптимизация, месечни отчети и стратегически препоръки."
        },
        {
          question: "Работите ли с малки бизнеси?",
          answer: "Да! Имаме специални пакети за малки бизнеси и стартъпи, които искат да започнат с по-ограничен бюджет, но да растат постепенно."
        },
        {
          question: "Как измервате успеха на кампаниите?",
          answer: "Измерваме конкретни бизнес метрики според целите – ROAS (възвръщаемост), CPA (цена на придобиване), брой leads, продажби, трафик, engagement rate. Предоставяме прозрачни месечни отчети с всички данни."
        },
        {
          question: "Мога ли да видя какво харчите за реклама?",
          answer: "Абсолютно. Имате пълен достъп до рекламните акаунти и виждате всяка похарчена стотинка. Нашата такса за управление е отделна от рекламния бюджет."
        }
      ]}
      
      ctaTitle="Готови да увеличите продажбите си?"
      ctaSubtitle="Заявете безплатна маркетинг консултация и анализ на текущите ви кампании."
    />
  );
};

export default DigitalMarketing;
