// Case Study Data - Centralized for scalability
import bodyaestheticsImg from "@/assets/case-studies/bodyaesthetics.png";
import booomImg from "@/assets/case-studies/booom.png";
import athleticiqImg from "@/assets/case-studies/athleticiq.png";
import supercreditImg from "@/assets/case-studies/supercredit.png";

export interface CaseStudyResult {
  metric: string;
  label: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string | null;
  isPublic: boolean;
  isFeatured?: boolean;
  image: string;
  overview: string;
  challenge: string;
  solution: string[];
  results: CaseStudyResult[];
  technologies: string[];
  gradient: string;
  accentColor: string;
  internalNote?: string;
}

export const categories = [
  "Всички",
  "Електронна търговия",
  "Здраве & Красота",
  "Спортни технологии",
  "Финанси & FinTech",
];

export const caseStudies: CaseStudy[] = [
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    subtitle: "Премиум лазерен център за терапии за лице и тяло",
    category: "Здраве & Красота",
    url: "https://bodyaesthetics.bg/",
    isPublic: true,
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: true,
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
    isFeatured: false,
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

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return caseStudies.filter(study => study.isFeatured);
};

export const getCaseStudiesByCategory = (category: string): CaseStudy[] => {
  if (category === "Всички") return caseStudies;
  return caseStudies.filter(study => study.category === category);
};
