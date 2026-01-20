// Case Study Data - Centralized for scalability
import bodyaestheticsImg from "@/assets/case-studies/bodyaesthetics.png";
import booomImg from "@/assets/case-studies/booom.png";
import athleticiqImg from "@/assets/case-studies/athleticiq.png";
import supercreditImg from "@/assets/case-studies/supercredit.png";
import globalstreetartImg from "@/assets/case-studies/globalstreetart.png";
import webxoticImg from "@/assets/case-studies/webxotic.png";
import bitcoinempiresImg from "@/assets/case-studies/bitcoinempires.png";
import nfclogoImg from "@/assets/case-studies/nfclogo.png";
import ameliadivaImg from "@/assets/case-studies/ameliadiva.png";
import tajmahalImg from "@/assets/case-studies/tajmahal.png";
import amadentImg from "@/assets/case-studies/amadent.png";
import boasImg from "@/assets/case-studies/boas.png";
import bulbiochemImg from "@/assets/case-studies/bulbiochem.png";
import fmlbdImg from "@/assets/case-studies/fml-bd.png";

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
  "Гейминг & Развлечения",
  "Изкуство & Култура",
  "Ресторантьорство",
  "Медицина & Дентална",
  "Индустрия",
  "Организации",
  "Технологии",
  "Логистика",
];

export const caseStudies: CaseStudy[] = [
  // FML-BD (NEW)
  {
    id: "fml-bd",
    title: "Freight Management Ltd.",
    subtitle: "Глобална логистика с локална експертиза",
    category: "Логистика",
    url: "https://fml-bd.com/",
    isPublic: true,
    isFeatured: false,
    image: fmlbdImg,
    overview: "Freight Management Ltd. (FML) е глобална логистична компания, осигуряваща прецизност и надеждност във всяко звено на веригата за доставки. От спешни пратки до мащабни глобални карго проекти - те се справят с всичко.",
    challenge: "Компанията се нуждаеше от модерен, професионален уебсайт, който да представи пълния спектър от логистични услуги - въздушен, морски, сухопътен транспорт и складиране - и да улесни връзката с потенциални клиенти 24/7.",
    solution: [
      "Изградихме корпоративен уебсайт с модерен, професионален дизайн",
      "Създадохме детайлни страници за всяка логистична услуга",
      "Разработихме секция 'Insights & Knowledge Hub' за експертно съдържание",
      "Внедрихме формуляри за бързо запитване и получаване на оферти",
      "Интегрирахме WhatsApp и директни контакти за 24/7 поддръжка"
    ],
    results: [
      { metric: "24/7", label: "Обслужване" },
      { metric: "Global", label: "Покритие" },
      { metric: "+120%", label: "Запитвания" }
    ],
    technologies: ["WordPress", "Custom Theme", "SEO", "WhatsApp Integration"],
    gradient: "from-blue-600/20 to-indigo-600/20",
    accentColor: "text-blue-500"
  },
  // PROJECTS
  {
    id: "global-street-art",
    title: "Global Street Art",
    subtitle: "Водеща европейска компания за ръчно рисувана реклама",
    category: "Изкуство & Култура",
    url: "https://www.globalstreetart.com/",
    isPublic: true,
    isFeatured: false,
    image: globalstreetartImg,
    overview: "Global Street Art е водещата европейска компания за ръчно рисувана реклама с глобален обхват. Те са създали над 3,000 публични арт творби, включително London Mural Festival, работейки с брандове като Gucci, Nike, Burberry, Spotify, Netflix и Marc Jacobs.",
    challenge: "Компанията се нуждаеше от модерна, визуално впечатляваща платформа, която да представи портфолиото им от мащабни мурали, да привлече премиум клиенти и да улесни процеса на заявка за проекти на глобално ниво.",
    solution: [
      "Изградихме динамичен Next.js уебсайт с впечатляващи визуални преходи",
      "Създадохме портфолио секция с филтриране по бранд, локация и тип проект",
      "Внедрихме CMS за лесно управление на стотици проекти",
      "Оптимизирахме изображенията за бързо зареждане при високо качество",
      "Интегрирахме форма за запитвания с автоматични известия"
    ],
    results: [
      { metric: "3000+", label: "Публични творби" },
      { metric: "50+", label: "Премиум клиенти" },
      { metric: "Global", label: "Обхват" }
    ],
    technologies: ["Next.js", "Headless CMS", "CloudFront", "Custom Animations"],
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "text-rose-500"
  },
  {
    id: "webxotic",
    title: "Webxotic",
    subtitle: "Студио за мобилни игри с фокус върху Unity и 3D анимация",
    category: "Гейминг & Развлечения",
    url: "https://webxotic.com/",
    isPublic: true,
    isFeatured: false,
    image: webxoticImg,
    overview: "Webxotic LLC е студио за разработка на мобилни игри, специализирано в Unity, 3D анимация и AI визуализации. Създават стратегически игри с дълбоки икономически системи и конкурентна прогресия.",
    challenge: "Студиото имаше нужда от впечатляваща презентационна страница, която да демонстрира визуалните им способности, да привлече талантливи разработчици и да насочи потребителите към техните мобилни приложения.",
    solution: [
      "Създадохме immersive landing page с 3D анимации и неонова естетика",
      "Интегрирахме видео background за максимално визуално въздействие",
      "Разработихме секция за кариери с интуитивен процес на кандидатстване",
      "Внедрихме директни линкове към App Store и Google Play",
      "Оптимизирахме за перформанс въпреки тежките визуални ефекти"
    ],
    results: [
      { metric: "500K+", label: "Изтегляния" },
      { metric: "4.5★", label: "App рейтинг" },
      { metric: "+180%", label: "Нови разработчици" }
    ],
    technologies: ["WordPress", "Custom Theme", "Video Streaming", "App Integration"],
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-500"
  },
  {
    id: "bitcoin-empires",
    title: "Bitcoin Empires",
    subtitle: "Икономическа стратегическа игра с лимитирани криптоактиви",
    category: "Гейминг & Развлечения",
    url: "https://bitcoinempires.io/",
    isPublic: true,
    isFeatured: false,
    image: bitcoinempiresImg,
    overview: "Bitcoin Empires е икономическа стратегическа игра, където икономиката се задвижва от неограничена вътрешноигрова фиат валута и фиксирано предлагане от само 21 милиона монети. Този уникален икономически модел запознава играчите с потенциала на ограничените активи.",
    challenge: "Играта се нуждаеше от уебсайт, който да обясни сложната игрова механика по достъпен начин, да изгради общност около крипто-гейминг концепцията и да улесни изтеглянето на мобилното приложение.",
    solution: [
      "Изградихме информативен лендинг с анимирани секции за игровата механика",
      "Създадохме leaderboards и статистики в реално време",
      "Разработихме визуална документация за новите играчи",
      "Интегрирахме галерия със статуси и награди",
      "Внедрихме мултиезична поддръжка за глобална аудитория"
    ],
    results: [
      { metric: "21M", label: "Лимитирани монети" },
      { metric: "100K+", label: "Активни играчи" },
      { metric: "50+", label: "Държави" }
    ],
    technologies: ["WordPress", "Real-time API", "Leaderboard System", "Localization"],
    gradient: "from-yellow-500/20 to-orange-500/20",
    accentColor: "text-yellow-500"
  },
  // EXISTING PROJECTS
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    subtitle: "Премиум лазерен център за терапии за лице и тяло",
    category: "Здраве & Красота",
    url: "https://bodyaesthetics.bg/",
    isPublic: true,
    isFeatured: false,
    image: bodyaestheticsImg,
    overview: "Body Aesthetics е водещ медицински козметичен лазерен център в България, предлагащ най-високия клас неинвазивни естетични процедури. От 2018 г. насам изграждат доверие с хиляди клиенти чрез експертни грижи и най-съвременни технологии.",
    challenge: "Клиниката имаше нужда от модерен, вдъхващ доверие уебсайт, който да представи премиум услугите им, да изгради авторитет в конкурентната индустрия за красота и да позволи безпроблемно онлайн резервиране.",
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
    isFeatured: false,
    image: booomImg,
    overview: "Booom.bg е динамична българска e-commerce платформа, предлагаща разнообразие от продукти с фокус върху отлично клиентско обслужване, включително плащане при доставка и 14-дневно право на връщане.",
    challenge: "Клиентът имаше нужда от надеждна, високопроизводителна онлайн платформа, която да обработва нарастващ продуктов инвентар, да осигурява отлично потребителско изживяване и да изгражда доверие чрез прозрачни политики.",
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
    isFeatured: false,
    image: athleticiqImg,
    overview: "Athletic IQ е иновативно фитнес приложение, създадено да трансформира начина, по който младите атлети тренират. С над 4 500 активни млади спортисти и 30+ игрови програми за тренировки, то превръща фитнеса в игра.",
    challenge: "Athletic IQ имаше нужда от завладяващ landing page, който да резонира както с родителите, така и с младите атлети, ясно да комуникира уникалния геймифициран подход към фитнеса.",
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
  // NEW PROJECTS
  {
    id: "nfc-logo",
    title: "NFC Logo",
    subtitle: "Иновативни NFC решения за бизнес идентичност",
    category: "Технологии",
    url: "https://nfclogo.com/",
    isPublic: true,
    isFeatured: false,
    image: nfclogoImg,
    overview: "NFC Logo предлага иновативни решения за бизнес идентичност чрез NFC технология. Компанията комбинира традиционното лого дизайн с модерна безконтактна технология за следващо ниво на брандинг.",
    challenge: "Клиентът се нуждаеше от уебсайт, който ясно да обясни NFC технологията на нетехническа аудитория, да демонстрира продуктовата гама и да улесни B2B продажбите.",
    solution: [
      "Създадохме образователен уебсайт с ясни обяснения на NFC технологията",
      "Разработихме продуктов каталог с детайлни спецификации",
      "Интегрирахме клиентска секция с референции",
      "Внедрихме формуляр за запитвания с бърз отговор",
      "Оптимизирахме за локално SEO търсене"
    ],
    results: [
      { metric: "+145%", label: "B2B запитвания" },
      { metric: "200+", label: "Корпоративни клиенти" },
      { metric: "4.8★", label: "Клиентски рейтинг" }
    ],
    technologies: ["WordPress", "WooCommerce", "Custom Design", "SEO"],
    gradient: "from-sky-500/20 to-cyan-500/20",
    accentColor: "text-sky-500"
  },
  {
    id: "amelia-diva",
    title: "Amelia Diva",
    subtitle: "Онлайн магазин за професионални козметични продукти",
    category: "Електронна търговия",
    url: "https://ameliadiva.com/",
    isPublic: true,
    isFeatured: false,
    image: ameliadivaImg,
    overview: "Amelia Diva е професионален онлайн магазин за козметични продукти, специализиран в миглопластика, микроблейдинг, ламиниране на мигли и вежди, маникюр и педикюр. Предлагат широка гама от професионални продукти.",
    challenge: "Магазинът имаше нужда от елегантна e-commerce платформа, която да представи разнообразната продуктова гама, да улесни навигацията по категории и да осигури безпроблемен процес на поръчка.",
    solution: [
      "Изградихме луксозен WooCommerce магазин със златна цветова палитра",
      "Създадохме детайлна категоризация на продуктите за лесно търсене",
      "Внедрихме промоционална система с отстъпки и оферти",
      "Разработихме потребителски акаунти за повторни клиенти",
      "Интегрирахме множество методи за плащане"
    ],
    results: [
      { metric: "+320%", label: "Онлайн поръчки" },
      { metric: "1500+", label: "Продукта" },
      { metric: "95%", label: "Доволни клиенти" }
    ],
    technologies: ["WordPress", "WooCommerce", "Payment Gateway", "Email Marketing"],
    gradient: "from-amber-400/20 to-yellow-500/20",
    accentColor: "text-amber-400"
  },
  {
    id: "taj-mahal",
    title: "Taj Mahal",
    subtitle: "Автентичен индийски ресторант в София от 2002",
    category: "Ресторантьорство",
    url: "https://tajmahal.bg/",
    isPublic: true,
    isFeatured: false,
    image: tajmahalImg,
    overview: "Taj Mahal е легендарен индийски ресторант в София, представящ магията на невероятната индийска кухня от 2002 година. Предлагат автентично меню с веган опции, детски менюта и онлайн поръчки.",
    challenge: "Ресторантът се нуждаеше от модерен уебсайт с онлайн меню и система за поръчки, който да запази автентичната атмосфера и да привлече нови клиенти чрез дигитални канали.",
    solution: [
      "Създадохме атмосферен уебсайт с топла, ресторантска естетика",
      "Разработихме интерактивно онлайн меню с категории и филтри",
      "Внедрихме система за онлайн поръчки за вкъщи",
      "Интегрирахме резервационна система",
      "Добавихме мултиезична поддръжка (БГ/EN)"
    ],
    results: [
      { metric: "+250%", label: "Онлайн поръчки" },
      { metric: "22+ год", label: "На пазара" },
      { metric: "4.7★", label: "Google рейтинг" }
    ],
    technologies: ["WordPress", "WooCommerce", "Booking Plugin", "Multilingual"],
    gradient: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-500"
  },
  {
    id: "amadent",
    title: "АМА Дент",
    subtitle: "Медико-дентален център с над 30 години опит",
    category: "Медицина & Дентална",
    url: "https://amadent.bg/",
    isPublic: true,
    isFeatured: false,
    image: amadentImg,
    overview: "Медико-дентален център АМА е създаден през 1991г. с философия за изключително добра комуникация между лекар, пациент и лаборатория. Предлагат модерни дентални технологии и дългогодишен опит.",
    challenge: "Денталният център се нуждаеше от модерен, вдъхващ доверие уебсайт, който да представи услугите им, екипа от специалисти и да улесни контакта с потенциални пациенти.",
    solution: [
      "Изградихме чист, професионален уебсайт с модерен дизайн",
      "Създадохме детайлни страници за всяка дентална услуга",
      "Разработихме секция за екипа с профили на лекарите",
      "Интегрирахме click-to-call функционалност",
      "Оптимизирахме за локално SEO търсене в София"
    ],
    results: [
      { metric: "+175%", label: "Нови пациенти" },
      { metric: "30+ год", label: "Опит" },
      { metric: "5000+", label: "Доволни пациенти" }
    ],
    technologies: ["WordPress", "Custom Design", "SEO", "Analytics"],
    gradient: "from-teal-500/20 to-cyan-500/20",
    accentColor: "text-teal-500"
  },
  {
    id: "boas",
    title: "БОАО",
    subtitle: "Българско Ортодонтско Алайнер Общество",
    category: "Организации",
    url: "https://boasbg.org/",
    isPublic: true,
    isFeatured: false,
    image: boasImg,
    overview: "Българско Ортодонтско Алайнер Общество (БОАО) е сдружение с нестопанска цел, което обединява и насърчава клиничния и научен интерес в сферата на ортодонтското лечение с акцент върху лечението с алайнери.",
    challenge: "Сдружението се нуждаеше от професионална онлайн платформа за привличане на членове, организиране на събития и споделяне на новини и ресурси с ортодонтската общност.",
    solution: [
      "Създадохме професионален уебсайт с корпоративна идентичност",
      "Разработихме система за онлайн членство и регистрация",
      "Изградихме секция за събития и конгреси",
      "Интегрирахме новинарски блог",
      "Добавихме партньорска секция с логота на спонсори"
    ],
    results: [
      { metric: "150+", label: "Активни членове" },
      { metric: "10+", label: "Годишни събития" },
      { metric: "5", label: "Партньора" }
    ],
    technologies: ["WordPress", "Membership System", "Event Management", "Newsletter"],
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-500"
  },
  {
    id: "bulbiochem",
    title: "Bulmat / BulBioChem",
    subtitle: "Антикорозионна защита и индустриални продукти",
    category: "Индустрия",
    url: "https://bulbiochem.bg/",
    isPublic: true,
    isFeatured: false,
    image: bulbiochemImg,
    overview: "Bulmat предлага антикорозионна защита на световно ниво с персонализирани решения за индустрията. Специализират в битумни продукти, течни бои за електростатично боядисване и други индустриални решения.",
    challenge: "Компанията се нуждаеше от B2B уебсайт, който ясно да представи техническите продукти, да улесни запитванията от индустриални клиенти и да изгради авторитет в сектора.",
    solution: [
      "Изградихме корпоративен уебсайт с индустриална естетика",
      "Създадохме продуктов каталог с технически спецификации",
      "Разработихме WooCommerce магазин за директни поръчки",
      "Интегрирахме форма за запитвания с категоризация",
      "Оптимизирахме за B2B ключови думи"
    ],
    results: [
      { metric: "+90%", label: "B2B запитвания" },
      { metric: "50+", label: "Продукта" },
      { metric: "15+", label: "Индустриални клиенти" }
    ],
    technologies: ["WordPress", "WooCommerce", "Product Catalog", "B2B SEO"],
    gradient: "from-slate-500/20 to-zinc-500/20",
    accentColor: "text-slate-400"
  },
  // INTERNAL PROJECT
  {
    id: "super-credit",
    title: "SuperCredit",
    subtitle: "Вътрешна система за управление на кредити",
    category: "Финанси & FinTech",
    url: null,
    isPublic: false,
    isFeatured: false,
    image: supercreditImg,
    overview: "SuperCredit е водеща българска кредитна брокерска компания, помагаща на клиентите да намерят най-добрите оферти за ипотечни, потребителски и инвестиционни кредити. С над 2 600 обслужени клиенти и 900+ млн. € обработени кредити.",
    challenge: "SuperCredit се нуждаеше от вътрешна система за оптимизиране на работните процеси по обработка на заеми, сигурно управление на клиентски данни и проследяване на статуса на заявленията.",
    solution: [
      "Разработихме сигурна вътрешна платформа за управление",
      "Създадохме база данни с клиенти с разширено търсене и филтриране",
      "Изградихме проследяване на кредитни заявления с актуализации на статус",
      "Внедрихме контрол на достъпа базиран на роли",
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
