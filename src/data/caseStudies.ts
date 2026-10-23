// Case Study Data - Centralized for scalability
import koleffHouseImg from "@/assets/case-studies/koleff-house.webp";
import oraqorImg from "@/assets/case-studies/oraqor.webp";
import riactImg from "@/assets/case-studies/riact.webp";
import bodyaestheticsImg from "@/assets/case-studies/bodyaesthetics.webp";
import athleticiqImg from "@/assets/case-studies/athleticiq.webp";
import supercreditImg from "@/assets/case-studies/supercredit.webp";
import scaleherImg from "@/assets/case-studies/scaleher.webp";
import mystorytravelImg from "@/assets/case-studies/mystorytravel.webp";
import viajesabulgariaImg from "@/assets/case-studies/viajesabulgaria.webp";
import rimskatastenaImg from "@/assets/case-studies/rimskatastena.webp";
import globalstreetartImg from "@/assets/case-studies/globalstreetart.webp";
import webxoticImg from "@/assets/case-studies/webxotic.webp";
import bitcoinempiresImg from "@/assets/case-studies/bitcoinempires.webp";
import nfclogoImg from "@/assets/case-studies/nfclogo.webp";
import ameliadivaImg from "@/assets/case-studies/ameliadiva.webp";
import tajmahalImg from "@/assets/case-studies/tajmahal.webp";
import amadentImg from "@/assets/case-studies/amadent.webp";
import drmariaraykovaImg from "@/assets/case-studies/drmariaraykova.webp";
import boasImg from "@/assets/case-studies/boas.webp";
import bulbiochemImg from "@/assets/case-studies/bulbiochem.webp";
import fmlbdImg from "@/assets/case-studies/fml-bd.webp";
import koniImg from "@/assets/case-studies/koni.webp";
import koniiHuImg from "@/assets/case-studies/konii-hu.webp";
import mehannaImg from "@/assets/case-studies/mehana.webp";
import legendsVillasImg from "@/assets/case-studies/legends.webp";
import breezypointvillasImg from "@/assets/case-studies/breezypointvillas.webp";
import zdravecImg from "@/assets/case-studies/zdravec.webp";
import wexelImg from "@/assets/case-studies/wexel.webp";
import nutritionExpertImg from "@/assets/case-studies/nutrition-expert.webp";
import firescapeImg from "@/assets/case-studies/firescape.webp";
import curlyImg from "@/assets/case-studies/curly.webp";
import curlyPagespeedMobileImg from "@/assets/case-studies/curly-pagespeed-mobile.webp";
import curlyPagespeedDesktopImg from "@/assets/case-studies/curly-pagespeed-desktop.webp";
/**
 * What a number on a case study page stands for:
 * - measured: measured after our work (PageSpeed, a count we checked)
 * - delivered: what we built or moved (pages, integrations, migrated orders)
 * - client: a fact about the client's business, shown apart so it doesn't
 *   read as our result
 */
export type CaseStudyResultKind = "measured" | "delivered" | "client";

export interface CaseStudyResult {
  metric: string;
  label: string;
  kind: CaseStudyResultKind;
}

export const RESULT_KIND_LABEL: Record<CaseStudyResultKind, string> = {
  measured: "Измерено",
  delivered: "Какво реализирахме",
  client: "Данни на клиента",
};

/** A screenshot that backs up a claim on the page, e.g. a PageSpeed report. */
export interface CaseStudyProof {
  image: string;
  alt: string;
  caption: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  url: string | null;
  isPublic: boolean;
  image: string;
  overview: string;
  challenge: string;
  /** Heading over `challenge`; defaults to „Задачата“. */
  challengeTitle?: string;
  solution: string[];
  /** Heading over `solution`; defaults to „Какво направихме“. */
  solutionTitle?: string;
  /** The technically or design-wise hardest part, for projects that had one. */
  detail?: string;
  detailTitle?: string;
  /** Closing line above the contact buttons, written for this project. */
  cta?: string;
  /** Service page the closing line links to; defaults to /services/web-development. */
  servicePath?: string;
  results: CaseStudyResult[];
  technologies: string[];
  gradient: string;
  accentColor: string;
  internalNote?: string;
  proof?: CaseStudyProof[];
}

export type CaseStudyKind = "web" | "shop" | "app";
export type CaseStudyFilterId = "all" | "web" | "shop" | "app";

export const CASE_STUDY_FILTERS: { id: CaseStudyFilterId; label: string }[] = [
  { id: "all", label: "Всички" },
  { id: "web", label: "Уеб сайтове" },
  { id: "shop", label: "Магазини" },
  { id: "app", label: "Приложения" },
];

export const caseStudies: CaseStudy[] = [
  // CURLY
  {
    id: "curly",
    title: "CURly",
    subtitle: "Меню от 189 позиции, онлайн поръчки и резервации по маси за ресторант в Габрово",
    category: "Ресторантьорство",
    url: "https://eat-curly.com/",
    isPublic: true,
    image: curlyImg,
    overview: "CURly е ресторант в Габрово, на ул. „Дунав“ 5 в Scientia House: суши, бургери, паста и коктейлен бар. Направихме сайта от нулата на WordPress и WooCommerce. От него гостите поръчват за доставка или за вземане, плащат с карта и запазват маса.",
    challengeTitle: "Откъде започнахме",
    challenge: "Имаше прототип без нито една истинска снимка и две менюта в PDF с около 190 позиции. Гостът трябваше да намира ястието от телефона си за секунди и оттам да поръчва или да запазва маса. Екипът на ресторанта искаше сам да сменя менюто, обедите и събитията, без да звъни на програмист.",
    solution: [
      "Пренесохме двете PDF менюта на ръка в три раздела (кухня, суши и бар), с грамаж, цена и 14-те алергена от европейския списък за всяко ястие.",
      "Поръчката работи за доставка и за вземане от място: с минимална сума, отстъпка при вземане и плащане с карта през Stripe.",
      "Обедното меню за деня, вечерите със сет меню и запитванията за празници екипът редактира сам от админ панела.",
      "Темата е писана за CURly, с българския шрифт Sofia Sans, без jQuery и без page builder. На компютър основното съдържание се показва за 0,7 секунди, на телефон за 2,1.",
      "Структурираните данни описват ресторанта и събитията, за да показва Google адреса, работното време и програмата. Има cookie банер и общи условия."
    ],
    detailTitle: "Как работят резервациите",
    detail: "Гостът въвежда дата, час и брой хора, а системата сама го разпределя по маса в залата, в сепаретата или на терасата. Всяка маса се пази два часа. Ако гостът не дойде до 15 минути, резервацията се отбелязва като неявяване.",
    results: [
      { metric: "98", label: "PageSpeed на телефон (97 на компютър)", kind: "measured" },
      { metric: "100", label: "Достъпност, добри практики и SEO в PageSpeed", kind: "measured" },
      { metric: "189", label: "Позиции в менюто, пренесени от PDF", kind: "delivered" }
    ],
    technologies: ["WordPress", "WooCommerce", "Собствена тема", "Stripe", "Резервации", "SEO"],
    cta: "Менюто на вашия ресторант още е в PDF? Пренасяме го по същия начин, с поръчки, плащане с карта и резервации, които екипът ви управлява сам.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-emerald-700/20 to-lime-600/20",
    accentColor: "text-emerald-600",
    proof: [
      {
        image: curlyPagespeedMobileImg,
        alt: "PageSpeed Insights за eat-curly.com на телефон: производителност 98, достъпност 100, добри практики 100, SEO 100",
        caption: "Телефон: 98 · 100 · 100 · 100",
      },
      {
        image: curlyPagespeedDesktopImg,
        alt: "PageSpeed Insights за eat-curly.com на компютър: производителност 97, достъпност 100, добри практики 100, SEO 100",
        caption: "Компютър: 97 · 100 · 100 · 100",
      },
    ],
  },
  // NUTRITION EXPERT
  {
    id: "nutrition-expert",
    title: "Nutrition Expert",
    subtitle: "Онлайн магазин на WordPress и WooCommerce за български бранд за хималайски шиладжит",
    category: "Електронна търговия",
    url: "https://nutrition-expert.bg/",
    isPublic: true,
    image: nutritionExpertImg,
    overview: "Nutrition Expert е български бранд за хранителни добавки със слоган „Put yourself first“. Първият му продукт е шиладжит: 30 g пречистена смола от Хималаите, 50 порции по 600 mg. Направихме магазина на WordPress и WooCommerce, със собствена тема и плъгин за съдържанието.",
    challengeTitle: "Задачата",
    challenge: "Брандът пуска първия си продукт и искаше магазин, който се купува лесно от телефон и който екипът поддържа сам. Сайтът трябваше да е готов за реклами в Meta и Google от първия ден и да може да побере нови продукти по-късно.",
    solution: [
      "Състав, хранителни стойности, дозировка и съхранение са отделни полета на продукта. От тях се пълнят началната страница, страницата „Какво има вътре“ и продуктовата страница, така че цифрите навсякъде са едни и същи.",
      "Текстовете, снимките и видеото на началната страница се сменят от Customizer. Въпросите са отделен тип съдържание: екипът отбелязва кои да излизат на началната страница, а на /faq/ се виждат всички, по групи.",
      "Количката се отваря отстрани, без презареждане. Целият JavaScript е около 8 KB, без jQuery.",
      "Контактната форма записва съобщенията в админ панела и ги праща по имейл. Бисквитките и правните страници са с Complianz, а Meta Pixel и GA4 тръгват след съгласие на посетителя.",
      "До старта посетителите виждат страница „Скоро отваряме“ с обратно броене, а екипът вижда истинския сайт."
    ],
    detailTitle: "Продуктовата страница",
    detail: "Продуктовата страница е писана отделно от стандартната на WooCommerce: галерия, състав, начин на приемане, доставка и връщане. Когато посетителят превърти надолу, бутонът за поръчка остава закачен в долната част на екрана, така че на телефон поръчката е на едно докосване.",
    results: [
      { metric: "0", label: "Грешки за достъпност (axe, WCAG 2 AA) на 9-те основни страници", kind: "measured" },
      { metric: "12", label: "Заявки и около 310 KB при първо зареждане на началната страница", kind: "measured" },
      { metric: "50", label: "Порции по 600 mg в една опаковка", kind: "client" }
    ],
    technologies: ["WordPress", "WooCommerce", "Собствена тема", "Complianz", "PixelYourSite", "SEO"],
    cta: "Пускате собствен продукт? Правим магазина, който екипът ви поддържа сам и който е готов за реклами от първия ден.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-orange-500/20 to-amber-700/20",
    accentColor: "text-orange-600"
  },
  // FIRESCAPE PARTNERS
  {
    id: "firescape-partners",
    title: "Firescape Partners",
    subtitle: "Собствена WordPress тема с референции от обекти и магазин за пожарогасители на два езика",
    category: "Индустрия",
    url: "https://firescapepartners.com/",
    isPublic: true,
    image: firescapeImg,
    overview: "Файърскейп Партнърс проектират пожарната безопасност на сгради, подготвят документацията, правят надзор и доставят оборудване. Направихме им сайт на WordPress със собствена тема: услуги, реални обекти и WooCommerce магазин за пожарогасители, на български и английски.",
    challengeTitle: "Какво трябваше да побере сайтът",
    challenge: "Фирмата има две много различни публики: инвеститори, които търсят проектант и надзор, и всеки, на когото му трябва пожарогасител. Сайтът трябваше да обслужва и двете, без купувачът на пожарогасител да се губи в нормативи, а инвеститорът в количка. Освен това фирмата има финансиране по ПКИП и сайтът трябваше да носи логата на ЕС и на програмата.",
    solution: [
      "Темата е писана за Файърскейп. Услугите, обектите и отзивите са отделни типове съдържание, които екипът добавя от админ панела.",
      "Обектите са подредени по вид (жилищни сгради, хотели, промишлени обекти) и всеки има своя страница.",
      "Магазинът има собствени хедър и футър, за да не се смесва с инженерната част. В него се продават прахови и CO₂ пожарогасители, с количка, поръчка и доставка.",
      "Двата езика са с TranslatePress, а бисквитките и правните страници са с Complianz.",
      "Добавихме блок с логата на ЕС и ПКИП, както изисква програмата.",
      "Началната страница, контактите и цифрите за екипа се сменят от Customizer, без да се пипа код."
    ],
    results: [
      { metric: "3", label: "Вида съдържание, които екипът поддържа сам", kind: "delivered" },
      { metric: "BG/EN", label: "Сайт и магазин на два езика", kind: "delivered" },
      { metric: "10+", label: "Години опит на Файърскейп", kind: "client" }
    ],
    technologies: ["WordPress", "WooCommerce", "Собствена тема", "TranslatePress", "Complianz", "GDPR"],
    cta: "Продавате и услуги, и продукти? Можем да ги съберем в един сайт така, че всеки клиент да стига до своята част.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-orange-500/20 to-red-600/20",
    accentColor: "text-orange-500"
  },
  // KOLEFF HOUSE
  {
    id: "koleff-house",
    title: "Koleff House",
    subtitle: "Сайт на Next.js със стаи, цени и запитване за дати за къща за гости в Твърдица",
    category: "Туризъм & Хотели",
    url: "https://koleff-house.com/",
    isPublic: true,
    image: koleffHouseImg,
    overview: "Koleff House е къща за гости в Твърдица, област Сливен, на 6 км от язовир Жребчево. Побира до 14 души и има басейн, оборудвана кухня, зала и двор с барбекю. Направихме сайта на Next.js.",
    challenge: "Къщата се дава и цялата, и по стаи. Сайтът трябваше да показва двата варианта с цената на нощувка и от всяка страница да води до запитване за свободни дати.",
    solution: [
      "Сайтът е на Next.js с React и TypeScript, затова страниците се отварят бързо и Google ги чете без JavaScript.",
      "Цялата къща и стаите са на една страница, всеки вариант със своята цена и с това, което включва.",
      "Отделни страници за галерията, за честите въпроси и за контактите.",
      "Бутонът „Запитай за дати“ стои в горното меню на всяка страница.",
      "SEO-то е насочено към търсения за Твърдица, Сливен и Жребчево."
    ],
    results: [
      { metric: "Next.js", label: "Сайт на React и TypeScript", kind: "delivered" },
      { metric: "14", label: "Гости в цялата къща", kind: "client" }
    ],
    technologies: ["Next.js", "React", "TypeScript", "SEO", "Форма за запитване"],
    gradient: "from-blue-500/20 to-indigo-500/20",
    accentColor: "text-blue-500"
  },
  // KONI JEWELLERY
  {
    id: "koni-jewellery",
    title: "Koni Jewellery",
    subtitle: "Магазин за бижута, писан от нулата на Symfony, с куриер, маркетплейси и имейл кампании",
    category: "Електронна търговия",
    url: "https://konii.ro/",
    isPublic: true,
    image: koniImg,
    overview: "Koni Jewellery прави на ръка бижута от сребро и злато и ги продава онлайн. Магазинът konii.ro не е на WordPress: написахме го от нулата на Symfony, заедно с админ панела, в който екипът води продукти, поръчки, доставки и производство.",
    challengeTitle: "Какво трябваше да прави магазинът",
    challenge: "Освен витрината екипът искаше в една система да има всичко, което иначе стои по таблици: наличности, които съвпадат с другите канали за продажба, товарителници към куриера, поръчки за изработка към работилницата и разходите. Магазинът трябваше да работи и на други езици, защото марката продава извън Румъния.",
    solution: [
      "Магазинът и админ панелът са на Symfony и MySQL. Търсенето и филтрите минават през Elasticsearch, а имейлите, импортът и синхронизациите се изпълняват на опашка през Symfony Messenger, за да не бавят сайта.",
      "Плащане с карта през Stripe и Revolut. Товарителницата за Sameday се създава от самата поръчка, а при въвеждане на адреса сайтът подсказва областта и града.",
      "Продуктите и наличностите се синхронизират с EasySales, през който марката продава в маркетплейси.",
      "Имейл кампаниите предлагат на всеки клиент бижута от категориите и таговете на предишните му поръчки и пропускат това, което вече е купил.",
      "Отстъпки на стъпки според сумата на поръчката, ваучери за подарък, аутлет, колекции, отзиви със снимки, вход с Facebook и профили за партньори.",
      "В админ панела са и поръчките за изработка към работилницата, разходите и статистиката.",
      "Кодът има преводи на седем езика: румънски, унгарски, полски, немски, английски, български и словенски."
    ],
    detailTitle: "Най-сложната част",
    detail: "Синхронизацията с EasySales. Една и съща наличност се продава в магазина и в маркетплейсите, затова всяка промяна в продукт или количество тръгва като задача на опашка. EasySales ограничава броя на заявките, така че синхронизацията чете кога лимитът се нулира, изчаква и продължава оттам, където е спряла.",
    results: [
      { metric: "Symfony", label: "Магазин и админ панел, писани от нулата", kind: "delivered" },
      { metric: "5", label: "Връзки: Stripe, Revolut, Sameday, EasySales, Facebook", kind: "delivered" },
      { metric: "7", label: "Езика в преводите", kind: "delivered" }
    ],
    technologies: ["Symfony", "PHP", "MySQL", "Elasticsearch", "Stripe", "Revolut", "Sameday", "EasySales"],
    cta: "Магазинът ви е надраснал WooCommerce или трябва да говори с куриер, склад и маркетплейси? Такава система можем да напишем и за вас.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-rose-400/20 to-pink-500/20",
    accentColor: "text-rose-400"
  },
  // KONI JEWELLERY УНГАРИЯ
  {
    id: "koni-jewellery-hu",
    title: "Koni Jewellery Унгария",
    subtitle: "Отделен WooCommerce магазин на унгарски, с търсачка за подарък и цени във форинти",
    category: "Електронна търговия",
    url: "https://konii.net/",
    isPublic: true,
    image: koniiHuImg,
    overview: "Koni Jewellery продава бижута от сребро 925 с перли, седеф и естествени камъни, изработени на ръка. Марката вече имаше румънски магазин (konii.ro). За пазара в Унгария направихме отделен магазин на WordPress и WooCommerce, изцяло на унгарски и с цени във форинти.",
    challengeTitle: "Нов пазар, непозната марка",
    challenge: "Над 180 модела трябваше да стигнат до унгарски купувачи, които не познават марката. Имената на бижутата са на румънски, отзивите бяха събрани в румънския магазин, а доставката, правните страници и поводите за подарък (имен ден, бал, Ден на жената) трябваше да са местни.",
    solution: [
      "Темата е собствена, без page builder. Менюто подрежда бижутата по вид, по камък (15 вида: аметист, тюркоаз, лабрадорит и други) и по повод за подарък.",
      "На началната страница има търсачка за подарък: купувачът избира за кого е и бюджета (под 15 000, 25 000 или 40 000 Ft) и вижда само подходящите бижута.",
      "Отзивите от румънския магазин са преведени на унгарски и показани с бележка откъде идват: 835 отзива със средна оценка 5.0.",
      "Любими продукти, клиентски профил, ваучер за подарък и таблица за размера на пръстена.",
      "Изскачащият прозорец „Mystery discount“ дава случайна отстъпка срещу имейл, а кодът работи само с този имейл. Абонатите за бюлетина получават 10% за първата поръчка.",
      "Безплатна доставка над 25 000 Ft, 14 дни за връщане и 2 години гаранция, всяко описано на своя страница.",
      "За Google: Rank Math и структурирани данни за онлайн магазин."
    ],
    results: [
      { metric: "15", label: "Вида камъни във филтрите", kind: "delivered" },
      { metric: "835", label: "Отзива от румънския магазин, преведени на унгарски", kind: "delivered" },
      { metric: "180+", label: "Модела бижута", kind: "client" }
    ],
    technologies: ["WordPress", "WooCommerce", "Собствена тема", "Rank Math SEO", "Schema.org"],
    cta: "Излизате на нов пазар със същия каталог? Правим отделен магазин на местния език, с местни цени, доставка и правни страници.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-stone-500/20 to-zinc-400/20",
    accentColor: "text-stone-600"
  },
  // БИО МАГАЗИН ЗДРАВЕЦ
  {
    id: "zdravec",
    title: "Био Магазин ЗдравеЦ",
    subtitle: "WooCommerce магазин с над 2000 био продукта, двойни цени и конструктор за подаръчни кошници",
    category: "Здраве & Красота",
    url: "https://zdravecbg.com/",
    isPublic: true,
    image: zdravecImg,
    overview: "Био Магазин ЗдравеЦ продава онлайн био храни, натурална козметика, билки, тинктури и хранителни добавки, с доставка в цяла България. Направихме магазина на WordPress и WooCommerce, с дизайн в Breakdance.",
    challengeTitle: "Какво трябваше да решим",
    challenge: "Каталогът е над 2000 продукта и трябваше да се подреди така, че човек да стига до тинктура или до безглутенова паста през менюто, без да търси. Подаръчните кошници са запазената марка на магазина и собствениците искаха купувачите да ги сглобяват сами. А заради еврото всяка цена трябваше да се вижда и в евро, и в лева.",
    solution: [
      "Менюто има четири раздела (Здраве, Подаръци, Козметика, Храни) и под тях 37 подкатегории, от тинктури и пробиотици до безглутенови храни и детска козметика.",
      "С „Създай своя кошница“ купувачът сам сглобява подаръка от продукти по избор. До нея са готовите кошници, подаръчните комплекти и ваучерите.",
      "Всяка цена се показва в евро и в лева по фиксирания курс 1,95583, като левовата се смята сама.",
      "Търсенето е в горната лента на всяка страница.",
      "Сайтът е ускорен с WP Rocket."
    ],
    results: [
      { metric: "37", label: "Подкатегории в четири раздела", kind: "delivered" },
      { metric: "EUR/BGN", label: "Двойни цени по официалния курс", kind: "delivered" },
      { metric: "2000+", label: "Продукта в каталога", kind: "client" }
    ],
    technologies: ["WordPress", "WooCommerce", "Breakdance", "WP Rocket", "Цени в EUR и BGN"],
    cta: "Имате хиляди продукти и не знаете как да ги подредите? Започваме от менюто и категориите, преди дизайна.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-emerald-500/20 to-lime-500/20",
    accentColor: "text-emerald-600"
  },
  // AMELIA DIVA
  {
    id: "amelia-diva",
    title: "Amelia Diva",
    subtitle: "20 959 поръчки, нито една оставена назад: нов WooCommerce магазин за консумативи за мигли и вежди, сменен за една вечер",
    category: "Електронна търговия",
    url: "https://ameliadiva.com/",
    isPublic: true,
    image: ameliadivaImg,
    overview: "Amelia Diva продава професионални консумативи за мигли, вежди, ламиниране, микроблейдинг и маникюр на салони и специалисти. Направихме им нов магазин на WordPress и WooCommerce с дизайн в Breakdance и го пуснахме на мястото на стария, като пренесохме продуктите, поръчките и клиентите.",
    challengeTitle: "Защо смяната беше рискова",
    challenge: "Каталогът е голям: над 800 продукта и около 3 500 варианта по извивка, дебелина и дължина. Старият сайт имаше дублирани продукти, варианти с цени в лева и разхвърляни категории. Магазинът продава всеки ден, затова при смяната не биваше да се загуби нито една поръчка, а клиентите трябваше да влизат със старата си парола. Склад и фактури се водят в Microinvest и новият сайт трябваше да работи с него от първия ден.",
    solution: [
      "Каталогът е подреден в шест раздела (мигли, вежди, маникюр и педикюр, консумативи, оборудване и ликвидация) и до три нива категории, всяко със свой адрес.",
      "В магазина се филтрира по извивка, дебелина, цвят, техника и марка: Nagaraku, Yumi Lashes, Lovely, Vetus, IBeauty и собствената марка Amelia Diva.",
      "Сравнихме стария и новия сайт продукт по продукт: обединихме дублите, оправихме вариантите и цените и минахме изцяло на евро.",
      "Сайтът е свързан с Microinvest, така че продуктите и поръчките стигат до склада сами. Има и каталог за Facebook реклами, който се обновява всеки ден.",
      "Направихме собствени плъгини за промоциите, купоните за партньори, минималната поръчка и седемте имейла към клиента, включително „Готова за получаване“ при вземане от място."
    ],
    detailTitle: "Как пренесохме поръчките",
    detail: "Пренесохме 20 959 поръчки от последните две години, заедно с товарителниците на Еконт и регистрираните клиенти с паролите им, така че никой не трябваше да прави нов профил. След това сравнихме всяка поръчка в двата сайта по номер, статус и сума. Самото превключване от стария към новия сайт стана за една вечер.",
    results: [
      { metric: "20 959", label: "Пренесени поръчки, проверени една по една", kind: "delivered" },
      { metric: "813", label: "Продукта и около 3 500 варианта, изчистени от дубли", kind: "delivered" },
      { metric: "1 вечер", label: "Преминаване от стария към новия сайт", kind: "delivered" }
    ],
    technologies: ["WordPress", "WooCommerce", "Breakdance", "Собствени плъгини", "Microinvest", "Еконт"],
    cta: "Магазинът ви продава всеки ден и се притеснявате от смяната? Можем да я направим като тук: с пренесени поръчки, клиенти и пароли.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-rose-400/20 to-amber-400/20",
    accentColor: "text-rose-400"
  },
  // SCALE'HER
  {
    id: "scaleher",
    title: "SCALE'HER",
    subtitle: "Затворена платформа с роли, календар и криптиран чат за европейска акселераторска програма",
    category: "Технологии",
    url: null,
    isPublic: false,
    image: scaleherImg,
    overview: "SCALE'HER е проект, финансиран от Европейския съюз, който помага на стартъпи, водени от жени, да растат в дигиталните и deep tech сектори. Програмата е 6 месеца обучение и още 3 месеца менторство. Направихме затворената платформа, в която основателките, менторите и екипът на проекта работят през цялата програма.",
    challengeTitle: "Много хора, една програма",
    challenge: "Участниците са от различни държави, а програмата има много части: модули с материали, задания със срокове, уебинари, срещи с ментори и финално състезание пред жури. Всичко трябваше да е на едно място, а всеки да вижда само своето: основателката своята програма, менторът своите срещи, екипът цялата картина.",
    solution: [
      "Ролите са три: администратор, ментор и основателка. Всяка има свое табло и свое меню.",
      "Екипът създава кохорти и програми, пише модулите в редактор със снимки и видео и задава задания със срокове. Платформата сама праща напомняния за сроковете и дневен бюлетин по имейл.",
      "В календара са уебинарите, панелите, уъркшопите и менторските срещи, всички в часовата зона на участника.",
      "Основателките пишат на менторите и на екипа в чата. Съобщенията се пазят в базата криптирани с AES-GCM. Има и общи файлове, анкети и отчети за напредъка.",
      "Във Founder Toolbox са работната тетрадка на програмата, обученията и полезните връзки."
    ],
    detailTitle: "Финалът",
    detail: "За финала направихме Blind Pitch: журито оценява 12-те финалистки, без да знае коя е коя. Основателките представят идеите си с изкривен глас през Voicemod, а в платформата има страница, която обяснява как да го настроят. В Confession Room имат 24 часа, за да запишат видео отговорите си.",
    results: [
      { metric: "3", label: "Роли: администратор, ментор, основателка", kind: "delivered" },
      { metric: "6 + 3 мес.", label: "Обучение и менторство на едно място", kind: "client" },
      { metric: "ЕС", label: "Проект по програма на EISMEA, 2025–2027", kind: "client" }
    ],
    technologies: ["React", "TypeScript", "Supabase", "Имейл известия", "Криптиран чат", "Достъп по роли"],
    cta: "Имате програма, курс или общност, която живее в имейли и таблици? Затворена платформа с роли може да събере всичко на едно място.",
    gradient: "from-fuchsia-500/20 to-pink-500/20",
    accentColor: "text-fuchsia-500",
    internalNote: "Платформата е затворена: достъп имат само участничките в програмата, менторите и екипът. Публичният сайт на проекта е scale-her-project.eu."
  },
  // MY STORY TRAVEL
  {
    id: "my-story-travel",
    title: "My Story Travel",
    subtitle: "Нова тема, попълнени страници и миграция от WordPress 4.9 на 6.9 за агенция за авторски пътувания",
    category: "Туризъм & Пътувания",
    url: "https://mystory-travel.com/",
    isPublic: true,
    image: mystorytravelImg,
    overview: "My Story Travel е българска агенция, която сама измисля маршрутите си из България и Балканите. През 2019 г. спечели наградата Best Creative Travel Agency на Creative Tourism Awards. Направихме нов сайт на английски, на WordPress и с тема, писана за агенцията, и го преместихме на съвременна версия на сървъра. За Испания и Латинска Америка агенцията има марката Viajes a Bulgaria, чийто сайт също е наш.",
    challengeTitle: "В какво състояние беше старият сайт",
    challenge: "Старият сайт беше на WordPress 4.9 и Divi от 2018 г. и спираше да работи на PHP 8. Пет от единадесетте страници с видове пътувания бяха празни, на началната страница стоеше демо текст от темата, а годината на наградата се разминаваше между две страници. Новият сайт трябваше да запази адресите, които Google вече познава.",
    solution: [
      "Написахме нова тема, без page builder. Заглавията са със серифен шрифт, а на всяка страница водят снимките от България.",
      "Пътуванията са разделени на 11 вида и всеки вид е на отделна страница. Петте празни страници попълнихме с текстове, които агенцията вече имаше на други места в сайта.",
      "Три готови маршрута с програма по дни и нова страница Destinations за България и Балканите.",
      "Формата за запитване пази всяко съобщение в админ панела и го праща на имейла на агенцията, със съгласие по GDPR.",
      "Банер за бисквитки с Complianz. Видеото от YouTube се зарежда чак след натискане на play.",
      "Всички стари адреси са запазени, а премахнатите страници пренасочват с 301. За SEO има заглавия и описания, Open Graph, schema.org и sitemap.",
      "Преместихме сайта на WordPress 6.9 и PHP 8.3, като старият сайт и базата му останаха като резервно копие."
    ],
    results: [
      { metric: "0", label: "Изгубени стари адреси след миграцията", kind: "measured" },
      { metric: "6.9", label: "WordPress, от версия 4.9", kind: "delivered" },
      { metric: "11", label: "Вида пътувания, всеки със своя страница", kind: "delivered" }
    ],
    technologies: ["WordPress", "Собствена тема", "PHP 8.3", "Complianz", "Schema.org", "GDPR"],
    cta: "Сайтът ви е на стара версия на WordPress и хостингът вече иска PHP 8? Местим го, без да губим адресите, които Google познава.",
    gradient: "from-red-600/20 to-amber-500/20",
    accentColor: "text-red-600"
  },
  // VIAJES A BULGARIA
  {
    id: "viajes-a-bulgaria",
    title: "Viajes a Bulgaria",
    subtitle: "Сайт на испански с въпросник за пътуване по поръчка и записване на видеоразговор",
    category: "Туризъм & Пътувания",
    url: "https://viajesabulgaria.es/",
    isPublic: true,
    image: viajesabulgariaImg,
    overview: "Viajes a Bulgaria е марката на My Story Travel за туристи от Испания и Латинска Америка. Агенцията прави пътувания из България повече от 20 години, а вече и из Балканите, за групи и по поръчка. Направихме нов сайт на испански, на WordPress, с тема, писана за марката.",
    challengeTitle: "Какво трябваше да предаде сайтът",
    challenge: "Агенцията продава преживявания: срещи с местни хора, работилници, храна, вино. Сайтът трябваше да ги покаже още от първия екран. Всяко запитване е различно, затова клиентът трябваше лесно да опише пътуването, което иска, или направо да си запише разговор с агенцията.",
    solution: [
      "И тук темата е собствена, без page builder. Началната страница започва с видео от България на цял екран, а заглавията са с шрифта Antic Didone.",
      "Пътуванията са в девет вида: културни, в природата, творчески, гастрономически, MICE, mindful, фестивали, археологически и фотографски.",
      "За пътуване по поръчка има кратък въпросник: колко души сте, кога, за колко дни, какъв тип пътуване и какво си представяте.",
      "Формите са наши, със защита от спам, която не кара посетителя да решава капча.",
      "Видеоразговор с агенцията се записва директно от сайта през календара на Brevo. Пак през Brevo работи бюлетинът, с потвърждение при абониране и при отписване.",
      "Сайтът има блог, SEO настройки с Rank Math и правни страници според испанските изисквания."
    ],
    results: [
      { metric: "9", label: "Вида пътувания, всеки със своя страница", kind: "delivered" },
      { metric: "ES", label: "Сайт изцяло на испански", kind: "delivered" },
      { metric: "20+", label: "Години опит на агенцията", kind: "client" }
    ],
    technologies: ["WordPress", "Собствена тема", "Видео фон", "Brevo", "Rank Math SEO", "GDPR"],
    cta: "Работите с клиенти от чужбина? Правим сайта на техния език, с форми и записване на разговор, които следват начина, по който продавате.",
    gradient: "from-sky-600/20 to-emerald-600/20",
    accentColor: "text-sky-600"
  },
  // РИМСКАТА СТЕНА
  {
    id: "rimskata-stena",
    title: "МЦ „Римската стена“",
    subtitle: "Нов WordPress сайт с 20+ собствени блока за първия специализиран венозен център в България",
    category: "Медицина & Дентална",
    url: "https://rimskatastena.bg/",
    isPublic: true,
    image: rimskatastenaImg,
    overview: "Медицински център „Римската стена“ в София лекува разширени вени от 2003 г. и е първият самостоятелен венозен център в България. Тук е направена първата лазерна аблация в София, а лечението води д-р Анастасов. Старият сайт беше на PHP 5.6 и собствена система отпреди години. Направихме нов сайт на WordPress, с тема, писана за центъра.",
    challengeTitle: "Пациентите питат едно и също",
    challenge: "Хората идват притеснени и с едни и същи въпроси: нужно ли е лечение, кой метод, боли ли, колко струва. Сайтът трябваше да отговаря спокойно и точно, с думите на лекаря, и да води към записване на преглед. Старият сайт имаше еднакви заглавия, липсващи описания и никакви структурирани данни, а адресите му вече бяха в Google и не биваше да се изгубят.",
    solution: [
      "Темата има над 20 собствени блока: hero, симптоми, методи, цени, въпроси, екип, преди и след, видео мнения. Центърът редактира всяка страница сам, без page builder.",
      "Всеки метод на лечение има своя страница: лазерна аблация, TEVLA, склеротерапия, мини-флебектомия. Текстовете и редът на въпросите са по указанията на д-р Анастасов.",
      "На началната страница пациентът отмята симптомите си и те се прикачват към заявката за преглед.",
      "Ценоразписът, екипът, апаратурата и снимките от центъра са истински, заснети от фотограф.",
      "За Google: структурирани данни за клиниката, лекарите, статиите и въпросите, Rank Math и 301 пренасочване от всеки стар адрес към новия.",
      "Снимките са в WebP, за да зарежда сайтът бързо и на телефон."
    ],
    results: [
      { metric: "20+", label: "Собствени блока за съдържание", kind: "delivered" },
      { metric: "2003", label: "От тази година центърът лекува вени", kind: "client" },
      { metric: "5.0", label: "Оценка в Google", kind: "client" }
    ],
    technologies: ["WordPress", "Собствена тема", "ACF", "Rank Math SEO", "Schema.org", "Hostinger"],
    cta: "Медицинска практика сте и пациентите задават едни и същи въпроси по телефона? Сайтът може да им отговаря с думите на лекаря.",
    gradient: "from-emerald-600/20 to-teal-500/20",
    accentColor: "text-emerald-600"
  },
  // ORAQOR
  {
    id: "oraqor",
    title: "Oraqor",
    subtitle: "Маркетингов сайт за HR платформа с два модула, Pulse и Navigator",
    category: "Технологии",
    url: "https://www.oraqor.com/",
    isPublic: true,
    image: oraqorImg,
    overview: "Oraqor е платформа, с която компаниите измерват ангажираността на служителите и я свързват с резултатите им. Има два модула: Pulse показва къде в екипа има проблем, а Navigator свързва хората с целите на компанията. Работихме по части от oraqor.com, някои от които са достъпни само за клиентите на платформата.",
    challenge: "Продуктът се продава на HR директори и ръководители, които първо искат цифри. Сайтът трябваше да обясни двата модула поотделно и да доведе до заявка за демо.",
    solution: [
      "Pulse и Navigator имат отделни страници.",
      "На началната страница са данните, с които Oraqor описва проблема: колко от разходите за заплати отиват напразно и колко губят фирмите, когато целите се разминават.",
      "Бутонът „Book a Demo“ е в горното меню на всяка страница, до цените.",
      "Има раздели за блог, подкаст и ресурси и вход към самата платформа."
    ],
    results: [
      { metric: "2", label: "Модула, всеки със своя страница", kind: "delivered" },
      { metric: "34%", label: "От разходите за заплати отиват напразно (данни на Oraqor)", kind: "client" },
      { metric: "20–30%", label: "От приходите губят фирмите при разминаване с целите (данни на Oraqor)", kind: "client" }
    ],
    technologies: ["React", "TypeScript", "Webflow", "UI/UX дизайн"],
    cta: "Продавате софтуер на фирми? Сайтът трябва да обясни продукта така, че демото да е следващата логична стъпка.",
    servicePath: "/services/ui-ux-design",
    gradient: "from-blue-500/20 to-cyan-500/20",
    accentColor: "text-blue-500"
  },
  // RIACT
  {
    id: "riact",
    title: "RiACT",
    subtitle: "Технически сайт за датска платформа, с която индустриалните роботи се настройват без програмиране",
    category: "Технологии",
    url: "https://www.riact.ai/",
    isPublic: true,
    image: riactImg,
    overview: "RiACT е датска компания, която прави RiFLEX: софтуер за управление на индустриални роботи и коботи чрез готови умения, без всичко да се програмира от нулата. Работи с роботи и машини от различни производители. Работихме по части от riact.ai, някои от които са затворени за външни потребители.",
    challenge: "Сайтът го четат производители и системни интегратори. Те искат да видят с кои роботи работи RiFLEX, какви готови приложения има и в кои заводи вече се използва.",
    solution: [
      "Трите готови приложения (Machine Tending, Pick & Place и Palletizing) имат свои секции.",
      "Три стъпки, Connect, Configure и Run, обясняват как роботът влиза в работа.",
      "Партньорите и съвместимите машини са на една схема в раздела Ecosystem.",
      "Казусите от клиенти и партньори, като LHM, DOBOT и Universal Robots, са в отделен раздел.",
      "Разработчиците заявяват бета достъп до RiFLEX Developer през отделна форма."
    ],
    results: [
      { metric: "3", label: "Готови приложения със свои секции", kind: "delivered" },
      { metric: "50%", label: "По-малко инженерно време (по данни на RiACT)", kind: "client" },
      { metric: "3x", label: "По-бърза пренастройка (по данни на RiACT)", kind: "client" }
    ],
    technologies: ["Next.js", "Webflow", "API интеграции", "UI/UX дизайн"],
    cta: "Продуктът ви е технически и трудно се обяснява? Започваме от въпросите, които задава купувачът, и подреждаме сайта по тях.",
    servicePath: "/services/ui-ux-design",
    gradient: "from-slate-600/20 to-gray-600/20",
    accentColor: "text-slate-500"
  },
  // THE MEHANNA GROUP
  {
    id: "mehanna-group",
    title: "The Mehanna Group",
    subtitle: "Портал за регистрация, поръчки и статуси за компания за академични консултации",
    category: "Образование",
    url: "https://signup.mehannagroup.com",
    isPublic: true,
    image: mehannaImg,
    overview: "The Mehanna Group помагат на студенти от различни държави с научни трудове, подготовка за изпити и кандидатстване в университет. Работят с мрежа от над 60 експерти. Направихме портала, през който студентите се регистрират, пускат поръчки и следят докъде е стигнала работата.",
    challenge: "Всяка поръчка минава през няколко души: студентът описва задачата, екипът я дава на експерт, експертът качва готовите файлове. Порталът трябваше да пази тази връзка, да приема плащания и да показва на студента докъде е стигнала работата, без той да пише имейли.",
    solution: [
      "Студентите се регистрират и пускат поръчки от личен профил.",
      "Плащането е онлайн, а файловете се качват към конкретната поръчка.",
      "Всяка поръчка има статус, който студентът вижда в профила си.",
      "Преработихме админ панела, в който екипът обработва запитванията."
    ],
    results: [
      { metric: "60+", label: "Експерти в мрежата", kind: "client" }
    ],
    technologies: ["Next.js", "TypeScript", "Интеграции", "Онлайн плащания", "Собствено API"],
    cta: "Клиентите ви звънят само за да питат докъде сте стигнали? Портал със статуси им отговаря вместо вас.",
    gradient: "from-indigo-500/20 to-purple-600/20",
    accentColor: "text-indigo-500"
  },
  // SUPERCREDIT
  {
    id: "super-credit",
    title: "SuperCredit",
    subtitle: "Вътрешна система за кредитен брокер, от първата среща до нотариуса, със сравнение на банкови оферти чрез AI",
    category: "Финанси & FinTech",
    url: null,
    isPublic: false,
    image: supercreditImg,
    overview: "SuperCredit е кредитен брокер: помага на клиентите да изберат ипотечен, потребителски или инвестиционен кредит измежду офертите на няколко банки. Направихме вътрешната им система, в която консултантите, партньорите и кредитните инспектори водят всеки кредит от първото запитване до усвояването.",
    challenge: "Един кредит минава през много ръце: партньор праща клиента, консултант го среща, банките връщат оферти, после идват документите за имота, одобрението и нотариусът. Системата трябваше да показва на всеки участник докъде е стигнал всеки кредит. Офертите от банките пристигат като файлове в различен вид, а клиентът иска да ги види една до друга.",
    solution: [
      "Всеки кредит минава през 16 статуса: от „изпратен от партньор за консултация“ през оферта, предварително и окончателно одобрение до сделка при нотариус и усвояване. Пазим историята на всяка смяна и коментарите по кредита.",
      "Ролите са четири: администратор, мениджър, партньор и кредитен инспектор. Всеки вижда само това, до което ролята му дава достъп.",
      "Клиентската база се търси с филтри и може да се зареди наведнъж от файл.",
      "Банките, служителите им и шаблоните за оферти са записи, които екипът поддържа сам.",
      "Документите се качват към кредита и се пазят в Amazon S3.",
      "Справките и показателите са събрани на една страница.",
      "Интерфейсът е на Next.js, сървърът на NestJS, базата е MySQL."
    ],
    detailTitle: "Сравнителната оферта",
    detail: "Консултантът качва офертите от банките такива, каквито са дошли. Системата ги праща на модела GPT-4o на OpenAI, който вади от всяка кредитната сума, срока, лихвата, ГПР, месечната вноска, таксите за сметка и за усвояване, застраховките и крайното оскъпяване. От тези данни се сглобява сравнителна оферта за клиента. Обработката върви на заден план, а ако от някой файл не се извлекат данни, системата казва от кой.",
    results: [
      { metric: "16", label: "Статуса по пътя на един кредит", kind: "delivered" },
      { metric: "4", label: "Роли с различен достъп", kind: "delivered" },
      { metric: "2 600+", label: "Обслужени клиенти на SuperCredit", kind: "client" }
    ],
    technologies: ["Next.js", "NestJS", "TypeScript", "MySQL", "OpenAI GPT-4o", "Amazon S3", "Достъп по роли"],
    cta: "Екипът ви преписва данни от оферти или документи на ръка? Тази част може да я върши модел, а системата да пази историята.",
    servicePath: "/services/ai-implementation",
    gradient: "from-orange-500/20 to-amber-500/20",
    accentColor: "text-orange-500",
    internalNote: "Системата е вътрешна и достъп до нея имат само служителите и партньорите на SuperCredit."
  },
  // FML-BD
  {
    id: "fml-bd",
    title: "Freight Management Ltd.",
    subtitle: "Корпоративен сайт на WordPress за логистична компания от Дака",
    category: "Логистика",
    url: "https://fml-bd.com/",
    isPublic: true,
    image: fmlbdImg,
    overview: "Freight Management Ltd. (FML) е логистична компания от Дака, Бангладеш, която работи от 1996 г. Превозва товари по въздух, море и суша, обмитява ги и ги складира. За тях изградихме fml-bd.com на WordPress.",
    challenge: "FML имат седем услуги, от въздушен превоз до митническо обслужване, и клиенти по целия свят. Сайтът трябваше да ги представи една по една и да събира запитвания за оферта.",
    solution: [
      "Седемте услуги са на отделни страници: въздушен, морски, мултимодален и сухопътен превоз, митническо обслужване, складиране и логистика от край до край.",
      "„Get a Quote“ е отделна страница с форма, а WhatsApp и телефонът се виждат на всяка страница.",
      "Разделът Insights & Knowledge Hub е за статиите на екипа. Има и страница за кариери.",
      "Сайтът е на темата Logistica, със страници, подредени в Elementor."
    ],
    results: [
      { metric: "7", label: "Услуги, всяка със своя страница", kind: "delivered" },
      { metric: "1996", label: "Година на основаване", kind: "client" },
      { metric: "25 000+", label: "Пратки, обработени от FML", kind: "client" }
    ],
    technologies: ["WordPress", "Elementor", "Тема Logistica", "WhatsApp"],
    cta: "Нужен ви е корпоративен сайт, в който всяка услуга има своя страница и форма за оферта?",
    gradient: "from-blue-600/20 to-indigo-600/20",
    accentColor: "text-blue-500"
  },
  // GLOBAL STREET ART
  {
    id: "global-street-art",
    title: "Global Street Art",
    subtitle: "Headless WordPress и Next.js на шест езика за компания за ръчно рисувана реклама",
    category: "Изкуство & Култура",
    url: "https://www.globalstreetart.com/",
    isPublic: true,
    image: globalstreetartImg,
    overview: "Global Street Art рисува на ръка реклами и стенописи по сгради за брандове и прави проекти за публично изкуство. Работим по сайта им от 2023 г. Екипът пише в WordPress, а сайтът, който виждат посетителите, е на Next.js.",
    challengeTitle: "Защо headless",
    challenge: "Портфолиото е стотици проекти със снимки и видео, а екипът публикува сам. Искаха да пишат в редактора на WordPress, както са свикнали, а сайтът да се отваря бързо и да изглежда точно като в редактора. Аудиторията е международна, затова сайтът е на шест езика.",
    solution: [
      "Съдържанието се пише с блоковия редактор на WordPress, а Next.js го взима през GraphQL.",
      "Шест езика: английски, испански, френски, немски, португалски и италиански.",
      "Портфолиото е разделено на рисувана реклама, публично изкуство и lifestyle, с търсене по целия сайт.",
      "Снимките се пазят в Amazon S3 и се сервират през CloudFront, а сайтът е на AWS Amplify.",
      "При преминаването към новия сайт пренасочихме 78 стари адреса от портфолиото.",
      "Формите за абонамент са на Klaviyo, а грешен адрес води до собствена 404 страница."
    ],
    detailTitle: "Най-сложната част",
    detail: "Всеки блок от Gutenberg, всяко поле от Lazy Blocks и всеки вграден пост от Instagram трябваше да се показва в React така, както изглежда в WordPress, на телефон и на компютър. Написахме собствен рендер за блоковете и голяма част от работата след пускането е точно това: шрифтове, бутони и карусели, които се държат еднакво и в двата свята.",
    results: [
      { metric: "6", label: "Езика на сайта", kind: "delivered" },
      { metric: "78", label: "Пренасочени стари адреси", kind: "delivered" },
      { metric: "3000+", label: "Творби на публични места", kind: "client" }
    ],
    technologies: ["Next.js", "Headless WordPress", "GraphQL", "AWS Amplify", "Amazon S3", "CloudFront", "Klaviyo"],
    cta: "Искате да пишете в WordPress, а сайтът да е бърз като приложение? Headless има смисъл при много съдържание и ще ви кажем честно дали вашият случай е такъв.",
    gradient: "from-rose-500/20 to-pink-500/20",
    accentColor: "text-rose-500"
  },
  // WEBXOTIC
  {
    id: "webxotic",
    title: "Webxotic",
    subtitle: "Сайт на собствена WordPress тема с обяви за работа за студио за мобилни игри",
    category: "Гейминг & Развлечения",
    url: "https://webxotic.com/",
    isPublic: true,
    image: webxoticImg,
    overview: "Webxotic LLC е студио за мобилни игри на Unity, с 3D анимация и AI визуализации. Направихме сайта им на WordPress, с тема, писана за студиото. На същата тема работи и сайтът на тяхната игра Bitcoin Empires.",
    challenge: "Студиото искаше сайтът да показва визуалния стил на игрите и да помага да намират хора. Обявите за работа трябваше да се публикуват от екипа, без разработчик.",
    solution: [
      "Темата е собствена, с видео на заден план на началната страница.",
      "Обявите за работа са отделен тип съдържание: всяка има своя страница, а кандидатите пишат през страницата „Кариери“.",
      "Страница с услугите на студиото и форма за оферта, плюс страница за поддръжка на играчите.",
      "Бутоните водят към Bitcoin Empires в App Store и Google Play."
    ],
    results: [
      { metric: "2", label: "Сайта на една тема: студиото и Bitcoin Empires", kind: "delivered" }
    ],
    technologies: ["WordPress", "Собствена тема", "Видео", "Обяви за работа"],
    cta: "Имате няколко продукта под една марка? Една тема може да обслужва всички сайтове, а всеки да си има своето лице.",
    gradient: "from-cyan-500/20 to-blue-500/20",
    accentColor: "text-cyan-500"
  },
  // BITCOIN EMPIRES
  {
    id: "bitcoin-empires",
    title: "Bitcoin Empires",
    subtitle: "Сайт с класации, резерви по държави и ръководство за мобилна икономическа стратегия",
    category: "Гейминг & Развлечения",
    url: "https://bitcoinempires.io/",
    isPublic: true,
    image: bitcoinempiresImg,
    overview: "Bitcoin Empires е мобилна икономическа стратегия на студио Webxotic. В играта има неограничена валута и точно 21 милиона монети, които не могат да станат повече. Сайтът на играта е на WordPress и работи на темата, която написахме за Webxotic.",
    challenge: "Механиката е необичайна и новият играч трябва да я разбере, преди да изтегли играта. Активните играчи пък искат да виждат класирането си. Сайтът трябваше да обслужва и двете групи, на английски и на испански.",
    solution: [
      "Началната страница обяснява механиката на части: ограничените монети, работата на глобалния пазар и търговията, която предстои.",
      "Класациите и статистиката се зареждат от сървъра на играта.",
      "Отделна страница показва резервите по държави.",
      "Ръководство за нови играчи и галерия със статусите, които се печелят в играта.",
      "Испанската версия е с TranslatePress, а бутоните водят към App Store и Google Play."
    ],
    results: [
      { metric: "2", label: "Езика: английски и испански", kind: "delivered" },
      { metric: "21M", label: "Монети в играта, без да стават повече", kind: "client" }
    ],
    technologies: ["WordPress", "Собствена тема", "API на играта", "TranslatePress"],
    cta: "Играта или приложението ви има сложна механика? Сайтът може да я обясни, преди потребителят да стигне до магазина.",
    gradient: "from-yellow-500/20 to-orange-500/20",
    accentColor: "text-yellow-500"
  },
  // BODY AESTHETICS
  {
    id: "body-aesthetics",
    title: "Body Aesthetics",
    subtitle: "Нов сайт на Breakdance, магазин за пакети, собствени плъгини и SEO по данни от Search Console за лазерен център в София",
    category: "Здраве & Красота",
    url: "https://bodyaesthetics.bg/",
    isPublic: true,
    image: bodyaestheticsImg,
    overview: "Body Aesthetics е медицински козметичен център в Стрелбище, София. Правят лазерна епилация с GentleLase Pro и GentleMax Pro Plus, Morpheus8, NuEra Tight, EmSculpt Neo, Forma, Hydrafacial и подмладяване с Nd:Yag. Направихме им нов сайт с магазин за пакети и ваучери, на български и английски, и продължаваме да водим SEO-то му.",
    challengeTitle: "С какво дойде клиентът",
    challenge: "Процедурите са седем и всяка има свои показания, подготовка и цени по зони. Хората сравняват няколко центъра, преди да изберат, и искат да видят цената и гаранцията веднага. Центърът продава пакети и ваучери онлайн и пуска промоции с начална и крайна дата, а екипът трябваше да ги сменя сам.",
    solution: [
      "Новият дизайн е в Breakdance. От всяка страница менюто води до процедурите, цените, промоциите и магазина.",
      "Всяка процедура има своя страница с показания, цени по зони и гаранция. Ценоразписът е един и се вгражда в страниците чрез наш плъгин, за да не се поддържат цени на няколко места.",
      "Магазинът на WooCommerce продава промо пакети и ваучери. Написахме собствен изглед на магазина с AJAX филтри и инфографика за всеки продукт.",
      "За промоциите: лента с брояч, която се скрива сама след крайната дата, етикет „ПРОМО“ върху продуктите от избрани категории и плъгин, който сменя цените на много продукти наведнъж и ги връща след края на кампанията.",
      "Английската версия е с TranslatePress, а имейлите за поръчка са в цветовете на центъра.",
      "Плаващ бутон „Обади се“ на всяка страница. Отзивите от Google и сертификатите са на видно място.",
      "Блогът е пренесен от стария сайт заедно със снимките, а старите адреси на снимките пренасочват с 301."
    ],
    detailTitle: "SEO след пускането",
    detail: "Написахме скриптове, които обхождат всички адреси от sitemap-а, теглят данни от Search Console и подреждат страниците по това къде има най-голям шанс за кликове: позиции от 11 до 20 и нисък CTR. Всяка промяна в заглавия, описания, честите въпроси и структурираните данни минава първо като преглед, после се качва с лог и може да се върне с една команда.",
    results: [
      { metric: "7", label: "Процедури, всяка със своя страница", kind: "delivered" },
      { metric: "BG/EN", label: "Сайт и магазин на два езика", kind: "delivered" },
      { metric: "174", label: "Отзива в Google, оценка „Отлично“", kind: "client" }
    ],
    technologies: ["WordPress", "Breakdance", "WooCommerce", "Собствени плъгини", "TranslatePress", "Yoast SEO", "WP Rocket", "Search Console API"],
    cta: "Клиника или салон сте и цените ви се сменят с всяка промоция? Можем да направим така, че екипът да ги сменя на едно място, а SEO-то да се води по данни.",
    servicePath: "/services/seo",
    gradient: "from-amber-500/20 to-yellow-500/20",
    accentColor: "text-amber-500"
  },
  // ATHLETIC IQ
  {
    id: "athleticiq",
    title: "Athletic IQ",
    subtitle: "Сайт на WordPress с регистрация за треньори и магазин за екипировка за британско фитнес приложение за деца",
    category: "Спортни технологии",
    url: "https://athleticiqapp.com/",
    isPublic: true,
    image: athleticiqImg,
    overview: "Athletic IQ е британско приложение за деца и тийнейджъри от 8 до 18 години, в което тренировките са построени като игра. Направихме сайта athleticiqapp.com на WordPress: страниците за приложението, регистрацията на треньори и магазина за екипировка.",
    challenge: "Сайтът го четат родители, деца и треньори и всеки търси различно нещо. Родителят иска да разбере какво точно прави приложението, детето дали е забавно, а треньорът как да влезе в своя портал.",
    solution: [
      "Дизайнът е в Breakdance и е мислен първо за телефон.",
      "Бутоните водят към приложението в App Store и Google Play.",
      "Треньорите имат регистрация и вход към своя портал.",
      "Магазинът на WooCommerce продава екипировката на Athletic IQ. Тя се прави по поръчка два пъти в месеца, затова сроковете и безплатната доставка в Обединеното кралство са в лента най-горе.",
      "Блог за статиите на екипа."
    ],
    results: [
      { metric: "WooCommerce", label: "Магазин за екипировка по поръчка", kind: "delivered" },
      { metric: "4.5K+", label: "Активни млади спортисти (данни на Athletic IQ)", kind: "client" },
      { metric: "35 мин", label: "Средна тренировка в приложението", kind: "client" }
    ],
    technologies: ["WordPress", "Breakdance", "WooCommerce", "Връзка с приложението"],
    cta: "Имате приложение и ви трябва сайт, който да го представя на родители, клубове или фирми? Започваме от това кой чете и какво пита.",
    gradient: "from-green-500/20 to-emerald-500/20",
    accentColor: "text-green-500"
  },
  // NFC LOGO
  {
    id: "nfc-logo",
    title: "NFC Logo",
    subtitle: "Сайт на два езика, който обяснява NFC чипа в текстилно лого и показва клубовете, които го ползват",
    category: "Технологии",
    url: "https://nfclogo.com/",
    isPublic: true,
    image: nfclogoImg,
    overview: "NFC Logo вграждат NFC чип в текстилни лога за екипи, дрехи и аксесоари. Логото се сканира с телефон и отваря линк, който собственикът може да сменя колкото пъти иска. Изградихме nfclogo.com на WordPress, на български и английски.",
    challenge: "Повечето хора не знаят какво е NFC. Сайтът трябваше да обясни технологията с примери и да покаже кои клубове и марки вече носят такива лога.",
    solution: [
      "Началната страница отговаря подред на три въпроса: какво е лого, какво е NFC и какво е NFC лого. След това обяснява как логото помага срещу фалшификати.",
      "Клиентите са показани поотделно: ВК Левски София, ФК Славия, FC Amigo Northwest и BUTNOT.",
      "Английската версия е с TranslatePress.",
      "Сайтът работи на темата, която написахме за Webxotic, пренастроена за NFC Logo."
    ],
    results: [
      { metric: "4", label: "Клиентски страници", kind: "delivered" },
      { metric: "BG/EN", label: "Два езика", kind: "delivered" }
    ],
    technologies: ["WordPress", "Собствена тема", "TranslatePress"],
    cta: "Продуктът ви е нов и хората не знаят какво е? Сайтът трябва първо да го обясни и чак след това да продава.",
    gradient: "from-sky-500/20 to-cyan-500/20",
    accentColor: "text-sky-500"
  },
  // WEXEL COATINGS
  {
    id: "wexel-coatings",
    title: "Wexel Coatings",
    subtitle: "B2B каталог на WooCommerce за производител на антикорозионни бои, на два езика",
    category: "Индустрия",
    url: "https://wexelcoatings.com/",
    isPublic: true,
    image: wexelImg,
    overview: "Wexel® произвежда индустриални бои и системи за защита на метал от корозия: алкидни, епоксидни и акрил-полиуретанови покрития и разтворители. Направихме им каталог на WordPress и WooCommerce, на български и английски, за фирми в България и в чужбина.",
    challenge: "Купувачите са технолози и снабдители. Те търсят по вид покритие и искат техническите данни, преди да поискат оферта.",
    solution: [
      "Каталогът е разделен на четири линии: алкидни, епоксидни, акрил-полиуретани и разтворители.",
      "Всеки продукт има страница с описание, технически данни и приложение.",
      "Фирмите искат оферта през форма за контакт.",
      "Сайтът е на WordPress, с тема Bodoni и страници в Elementor. Английската версия е с TranslatePress."
    ],
    results: [
      { metric: "4", label: "Продуктови линии в каталога", kind: "delivered" },
      { metric: "BG/EN", label: "Два езика", kind: "delivered" }
    ],
    technologies: ["WordPress", "WooCommerce", "Elementor", "TranslatePress"],
    cta: "Продавате технически продукти на фирми? Започваме от каталога и характеристиките, защото по тях купувачът решава.",
    gradient: "from-amber-500/20 to-zinc-700/20",
    accentColor: "text-amber-500"
  },
  // TAJ MAHAL
  {
    id: "taj-mahal",
    title: "Taj Mahal",
    subtitle: "Онлайн меню, поръчки за вкъщи и резервации за индийски ресторант в София",
    category: "Ресторантьорство",
    url: "https://tajmahal.bg/",
    isPublic: true,
    image: tajmahalImg,
    overview: "Taj Mahal е индийски ресторант на ул. „11-ти Август“ 11 в София, отворен от 2002 г. Направихме сайта на WordPress, с онлайн меню, поръчки за вкъщи и резервации, на български и английски.",
    challenge: "Менюто е голямо: 20 категории, от тандури и биряни до веган и детско меню. Ресторантът искаше гостите да поръчват направо от сайта и да виждат промоциите за вземане от място.",
    solution: [
      "Менюто е разделено на 20 категории.",
      "Поръчката минава през WooCommerce, с профил за редовните клиенти.",
      "Отделни страници за резервация на маса и за промоциите.",
      "Английската версия е с TranslatePress."
    ],
    results: [
      { metric: "20", label: "Категории в менюто", kind: "delivered" },
      { metric: "2002", label: "От тази година ресторантът работи", kind: "client" }
    ],
    technologies: ["WordPress", "WooCommerce", "Elementor", "TranslatePress", "Резервации"],
    cta: "Поръчките ви идват през платформи с комисиона? Могат да идват и през вашия собствен сайт.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-orange-500/20 to-red-500/20",
    accentColor: "text-orange-500"
  },
  // АМА ДЕНТ
  {
    id: "amadent",
    title: "АМА Дент",
    subtitle: "Сайт на WordPress за медико-дентален център с 25 услуги в пет направления",
    category: "Медицина & Дентална",
    url: "https://amadent.bg/",
    isPublic: true,
    image: amadentImg,
    overview: "Медико-дентален център АМА в София работи от 1991 г. Освен обща дентална медицина има ортодонтия с Invisalign, лицево-челюстна и орална хирургия. Сайтът amadent.bg е на WordPress и го направихме ние.",
    challenge: "Услугите са 25, в пет направления. Пациентът трябваше да намери своя проблем без медицински термини и да види кой лекар го лекува.",
    solution: [
      "Услугите са подредени в пет направления: ортодонтия, дентално лечение, лицево-челюстна хирургия, орална хирургия и естетика.",
      "Отделни страници за екипа, за технологиите в центъра и за Invisalign.",
      "Пациентите могат да запишат онлайн ортодонтска консултация по видео с д-р Ива Джорова.",
      "Телефонът е в горната лента и от телефон се набира с едно докосване.",
      "Сайтът е на WordPress с Elementor."
    ],
    results: [
      { metric: "25", label: "Услуги в пет направления", kind: "delivered" },
      { metric: "1991", label: "Година на основаване", kind: "client" }
    ],
    technologies: ["WordPress", "Elementor", "Google Site Kit"],
    cta: "Практиката ви има много услуги и пациентите се губят в тях? Подреждаме ги по това, с което човек идва.",
    gradient: "from-teal-500/20 to-cyan-500/20",
    accentColor: "text-teal-500"
  },
  // Д-Р МАРИЯ РАЙКОВА
  {
    id: "drmariaraykova",
    title: "Д-р Мария Райкова",
    subtitle: "Сайт на Next.js на три езика с онлайн записване за акушер-гинеколог в София",
    category: "Медицина & Дентална",
    url: "https://drmariaraykova.com/",
    isPublic: true,
    image: drmariaraykovaImg,
    overview: "Д-р Мария Райкова е акушер-гинеколог в София. На сайта ѝ пациентките виждат с какво може да им помогне, четат наръчник и отговори на честите въпроси и записват час през Superdoc. Направихме сайта на Next.js, на български, английски и испански.",
    challengeTitle: "Какво беше важно",
    challenge: "Пациентките трябваше бързо да разберат с какво се занимава д-р Райкова и да стигат до записване. Сайтът трябваше да се намира в Google и на трите езика и да не обещава нищо, което практиката не предлага.",
    solution: [
      "Страници за услугите, за лекаря, за контакти, наръчник и често задавани въпроси.",
      "Трите езика са с next-intl, всеки със свои адреси.",
      "Часът се записва през Superdoc, а бутоните за обаждане и за адреса на кабинета се виждат веднага.",
      "Политика за GDPR, cookie съгласие и структурирани данни за практиката.",
      "SEO за търсения в София и превю с картинка, когато някой сподели линк към сайта.",
      "Сайтът е на Next.js с Tailwind CSS и се хоства на Netlify."
    ],
    results: [
      { metric: "3", label: "Езика: български, английски, испански", kind: "delivered" },
      { metric: "Superdoc", label: "Записване на час онлайн", kind: "delivered" }
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "next-intl", "SEO", "Netlify"],
    cta: "Лекар сте и пациентите ви говорят няколко езика? Сайтът може да ги посреща на техния и да ги води направо до записване.",
    gradient: "from-rose-400/20 to-pink-500/20",
    accentColor: "text-rose-400"
  },
  // БОАО
  {
    id: "boas",
    title: "БОАО",
    subtitle: "Сайт на WordPress с онлайн молба за членство за сдружение на ортодонти",
    category: "Организации",
    url: "https://boasbg.org/",
    isPublic: true,
    image: boasImg,
    overview: "Българското ортодонтско алайнер общество (БОАО) е сдружение с нестопанска цел на ортодонти, които лекуват с алайнери. Изградихме сайта им boasbg.org на WordPress.",
    challenge: "Сдружението искаше нови членове да кандидатстват онлайн, а събитията да се обявяват на едно място.",
    solution: [
      "Молбата за членство се попълва и изпраща от сайта, с приемане на устава.",
      "Уставът, членският внос и това, което дава членството, са на отделни страници.",
      "Събитията са разделени на предстоящи и минали, а новините са в блог.",
      "Партньорите и асоциираните общества са показани с логата си.",
      "Сайтът е на WordPress с Elementor."
    ],
    results: [],
    technologies: ["WordPress", "Elementor", "All in One SEO", "Форма за членство"],
    cta: "Сдружение или организация сте и кандидатурите идват по имейл? Онлайн молба и календар на събитията спестяват кореспонденция.",
    gradient: "from-emerald-500/20 to-teal-500/20",
    accentColor: "text-emerald-500"
  },
  // BULMAT / BULBIOCHEM
  {
    id: "bulbiochem",
    title: "Bulmat / BulBioChem",
    subtitle: "B2B сайт с каталог и магазин за антикорозионни и битумни продукти",
    category: "Индустрия",
    url: "https://bulbiochem.bg/",
    isPublic: true,
    image: bulbiochemImg,
    overview: "Bulmat подбира и доставя антикорозионна защита за индустриални обекти. Специалността им са битумните продукти и течните бои за електростатично боядисване. Направихме сайта bulbiochem.bg на WordPress, с каталог и WooCommerce магазин.",
    challenge: "Клиентите са фирми, които търсят защита за конкретен обект и първо искат техническите характеристики. Каталогът трябваше да е подреден по вид продукт, а всяко запитване да стига до правилния човек.",
    solution: [
      "Каталогът показва техническите характеристики на всеки продукт.",
      "Фирмите поръчват директно през WooCommerce магазина.",
      "Формата за запитване разпределя въпросите по теми."
    ],
    results: [],
    technologies: ["WordPress", "WooCommerce", "Продуктов каталог"],
    cta: "Продавате на фирми и всяко запитване е различно? Форма, която разпределя въпросите по теми, ги праща направо при човека, който може да отговори.",
    servicePath: "/services/onlajn-magazin",
    gradient: "from-slate-500/20 to-zinc-500/20",
    accentColor: "text-slate-400"
  },
  // THE LEGENDS VILLAS
  {
    id: "legends-villas",
    title: "The Legends Villas",
    subtitle: "Сайт за две къщи за гости и зала за ритрийти, който разказва историята на едно малко село",
    category: "Туризъм & Хотели",
    url: "https://thelegends-villas.bg/",
    isPublic: true,
    image: legendsVillasImg,
    overview: "The Legends Villas са две къщи за гости, Къща Легенди и Къща Сър Коев, и обща зала за събития, наречена Плевнята, в село с около 15 къщи. Направихме сайта на WordPress.",
    challenge: "Собствениците искаха сайтът да разказва историята на мястото и на семейството им. Освен къщите трябваше да представи Плевнята за ритрийти и обучения и програмата „Аз съм местен“, с която свързват гостите с хората от района.",
    solution: [
      "Къща Легенди и Къща Сър Коев са представени поотделно, със снимки и описание.",
      "Плевнята има страница за събития и ритрийти.",
      "Отделни страници за програмата „Аз съм местен“, за региона, за цените и условията и галерия.",
      "Текстовете разказват за селото и за семейството, като историята на прабаба Стойка, която съобщавала новините от мястото на днешната Плевня.",
      "Сайтът е на WordPress с Elementor."
    ],
    results: [
      { metric: "2", label: "Къщи за гости", kind: "client" },
      { metric: "1", label: "Зала за събития", kind: "client" }
    ],
    technologies: ["WordPress", "Elementor"],
    cta: "Мястото ви има история? Сайтът може да я разкаже така, че гостът да иска да дойде заради нея.",
    gradient: "from-forest-500/20 to-green-600/20",
    accentColor: "text-green-600"
  },
  // BREEZY POINT VILLAS
  {
    id: "breezy-point-villas",
    title: "Breezy Point Villas",
    subtitle: "Сайт с резервации и календар за три частни вили в Нуса Дуа, Бали",
    category: "Туризъм & Хотели",
    url: "https://breezypointvillas.com/",
    isPublic: true,
    image: breezypointvillasImg,
    overview: "Breezy Point Villas са три частни вили в Нуса Дуа, Бали: Elora, Emerald и Flamboyant. Всяка има собствен басейн и градина. Сайтът е на WordPress и е за гости от чужбина.",
    challenge: "Собствениците искаха гостите да резервират директно от сайта и да виждат разликите между трите вили.",
    solution: [
      "Elora, Emerald и Flamboyant са на отделни страници, със снимки и подробности.",
      "Календарът показва свободните дати, а резервацията става онлайн.",
      "Допълнителните услуги (масаж, закуска, частен готвач) са описани отделно.",
      "Страница за това какво да се види и прави на острова."
    ],
    results: [
      { metric: "Онлайн", label: "Резервации с календар", kind: "delivered" },
      { metric: "3", label: "Частни вили", kind: "client" }
    ],
    technologies: ["WordPress", "Резервации с календар"],
    cta: "Отдавате вила или апартамент и плащате комисиона на платформите? Част от резервациите могат да идват директно през вашия сайт.",
    gradient: "from-teal-400/20 to-cyan-500/20",
    accentColor: "text-teal-400"
  }
];

export const getCaseStudyById = (id: string): CaseStudy | undefined => {
  return caseStudies.find(study => study.id === id);
};

/**
 * Service wording per industry, used to build case-study page titles.
 *
 * Titles used to lead with the client's brand ("Koni Jewellery - Ръчно
 * изработени бижута"), so 24 of the site's 45 pages competed for other
 * companies' names — searches the client's own site always wins, and which in
 * Search Console produced impressions at position 9 with a 0% click rate.
 * Leading with the service puts these pages behind Adrexio's own queries while
 * the client name still identifies the project.
 *
 * scripts/prerender.mjs parses this map, so keep it a flat object literal.
 */
export const CASE_STUDY_SERVICE_LABEL: Record<string, string> = {
  "Електронна търговия": "Изработка на онлайн магазин",
  "Медицина & Дентална": "Изработка на сайт за медицински кабинет",
  "Здраве & Красота": "Изработка на сайт за здраве и красота",
  "Туризъм & Хотели": "Изработка на сайт за хотел и къща за гости",
  "Туризъм & Пътувания": "Изработка на сайт за туристическа агенция",
  "Ресторантьорство": "Изработка на сайт за ресторант",
  "Индустрия": "Изработка на корпоративен сайт",
  "Логистика": "Изработка на корпоративен сайт",
  "Технологии": "Уеб платформа от нулата",
  "Спортни технологии": "Изработка на дигитална платформа",
  "Финанси & FinTech": "Изработка на финансова платформа",
  "Гейминг & Развлечения": "Изработка на сайт за гейминг студио",
  "Изкуство & Култура": "Изработка на сайт за творческа компания",
  "Образование": "Изработка на сайт за образователни услуги",
  "Организации": "Изработка на сайт за организация",
};

export const CASE_STUDY_SERVICE_LABEL_DEFAULT = "Изработка на сайт";

/**
 * Link text for the service page a case study's closing line points to.
 * scripts/prerender.mjs parses this map, so keep it a flat object literal.
 */
export const CASE_STUDY_SERVICE_LINK: Record<string, string> = {
  "/services/web-development": "Какво включва изработката на сайт",
  "/services/onlajn-magazin": "Какво включва изработката на онлайн магазин",
  "/services/seo": "Как водим SEO",
  "/services/ui-ux-design": "Как работим по UI/UX дизайн",
  "/services/ai-implementation": "Как внедряваме AI в работата на екипа",
};

export const CASE_STUDY_SERVICE_PATH_DEFAULT = "/services/web-development";

/** Page title for a case study: service and niche first, client name second. */
export const getCaseStudyTitle = (study: Pick<CaseStudy, "title" | "category">): string => {
  const label = CASE_STUDY_SERVICE_LABEL[study.category] ?? CASE_STUDY_SERVICE_LABEL_DEFAULT;
  return `${label} — казус ${study.title} | Adrexio`;
};

/** Counted 1:1 from entries in this file, including the private SuperCredit case study. */
export const PORTFOLIO_PROJECT_COUNT = caseStudies.length;

/** Unique clients — one company per case study in this file. */
export const PORTFOLIO_CLIENT_COUNT = new Set(caseStudies.map((s) => s.title)).size;

/** Projects on the homepage „Част от проектите“ grid, in this order (two per row). */
export const FEATURED_IDS = [
  "my-story-travel",
  "viajes-a-bulgaria",
  "global-street-art",
  "body-aesthetics",
  "koni-jewellery-hu",
  "firescape-partners",
] as const;

/**
 * Order of the /case-studies grid and the previous/next links on case study
 * pages. Projects missing from this list follow in source order.
 */
export const PORTFOLIO_ORDER = [
  "body-aesthetics",
  "amelia-diva",
  "scaleher",
  "koni-jewellery-hu",
  "my-story-travel",
  "viajes-a-bulgaria",
  "rimskata-stena",
  "zdravec",
  "nutrition-expert",
  "firescape-partners",
  "drmariaraykova",
  "koni-jewellery",
  "koleff-house",
  "bulbiochem",
  "wexel-coatings",
  "amadent",
  "boas",
  "legends-villas",
  "breezy-point-villas",
  "curly",
  "bitcoin-empires",
  "webxotic",
  "nfc-logo",
  "taj-mahal",
  "global-street-art",
  "super-credit",
  "fml-bd",
  "athleticiq",
  "riact",
  "mehanna-group",
  "oraqor",
] as const;


const SHOP_IDS = new Set([
  "curly",
  "nutrition-expert",
  "koni-jewellery",
  "koni-jewellery-hu",
  "firescape-partners",
  "zdravec",
  "amelia-diva",
  "bulbiochem",
]);

const APP_IDS = new Set(["athleticiq"]);

export const getCaseStudyKind = (id: string): CaseStudyKind => {
  if (APP_IDS.has(id)) return "app";
  if (SHOP_IDS.has(id)) return "shop";
  return "web";
};

const sortByPortfolioOrder = (studies: CaseStudy[]): CaseStudy[] => {
  const rank = new Map<string, number>(PORTFOLIO_ORDER.map((id, i) => [id, i]));
  return [...studies].sort(
    (a, b) => (rank.get(a.id) ?? Infinity) - (rank.get(b.id) ?? Infinity),
  );
};

export const getFeaturedCaseStudies = (): CaseStudy[] => {
  return FEATURED_IDS.map((id) => getCaseStudyById(id)).filter(
    (study): study is CaseStudy => Boolean(study),
  );
};

/** Every case study, AthleticIQ included, in PORTFOLIO_ORDER. */
export const getPortfolioOrder = (): CaseStudy[] => sortByPortfolioOrder(caseStudies);

export const getCaseStudiesForFilter = (filter: CaseStudyFilterId): CaseStudy[] => {
  if (filter === "all") return getPortfolioOrder();
  return sortByPortfolioOrder(caseStudies.filter((s) => getCaseStudyKind(s.id) === filter));
};
