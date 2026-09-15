/**
 * Single source of truth for pricing across the Adrexio website.
 */

/** Canonical payment wording — use this string everywhere, do not paraphrase. */
export const PAYMENT_COPY =
  "50/50: половината при старт, половината след като видите резултата и преди публикуване.";

export const PRICING = {
  website: {
    from: 690,
    label: "690",
    fromLabel: "от €690",
  },
  ecommerce: {
    from: 1900,
    label: "1.900",
    fromLabel: "от €1.900",
  },
  maintenance: {
    from: 99,
    label: "99",
    fromLabel: "от €99 / месец",
  },
  affiliate: {
    commissionPct: 20,
    exampleProject: 1900,
  },
} as const;

export const PRICING_SERVICES = [
  {
    index: "01",
    name: "Уеб сайтове",
    fromLabel: PRICING.website.fromLabel,
    description:
      "Всеки сайт е изграден от нулата — без шаблони. Цената зависи от обхвата, дизайна и функционалността.",
    note: "Еднократна инвестиция · 50/50",
  },
  {
    index: "02",
    name: "Онлайн магазини",
    fromLabel: PRICING.ecommerce.fromLabel,
    description:
      "Крайната цена зависи от брой продукти, платежни системи, интеграции и персонализирана функционалност.",
    note: "Еднократна инвестиция · 50/50",
  },
  {
    index: "03",
    name: "Поддръжка и развитие",
    fromLabel: PRICING.maintenance.fromLabel,
    description:
      "Хостинг, сигурност, актуализации и дребни промени. За по-сложно развитие — по договаряне.",
    note: "Месечен абонамент · без дългосрочен договор",
  },
] as const;

/**
 * Delivery times, stated as ranges rather than promises of a single date.
 * Same numbers the pricing FAQ already gives, structured so they can be
 * scanned on the page and read by crawlers instead of buried in prose.
 */
export const PRICING_TIMELINE = [
  {
    name: "Презентационен / фирмен сайт",
    duration: "2–3 седмици",
    detail: "От одобрен бриф до публикуване, при навреме подадено съдържание и до два кръга корекции.",
  },
  {
    name: "Онлайн магазин",
    duration: "4–6 седмици",
    detail: "Включва продуктов каталог, платежни и доставни интеграции и тестови поръчки преди старта.",
  },
  {
    name: "Персонализирано решение",
    duration: "по договаряне",
    detail: "Платформи със собствена логика, потребителски акаунти или интеграции с външни системи.",
  },
] as const;

/**
 * What the one-time project price does and does not cover. Written down because
 * it is the question that turns a quote into a dispute later.
 */
export const PRICING_SCOPE = {
  included: [
    "Дизайн от нулата — без купен шаблон",
    "Адаптивна версия за телефон, таблет и десктоп",
    "Техническа SEO основа и структурирани данни",
    "CMS, през който редактирате съдържанието сами",
    "Настройка на домейна и публикуване",
    "Гаранционна поддръжка след старта",
    "Пълна собственост върху кода и дизайна след финалното плащане",
  ],
  excluded: [
    "Хостинг — организираме го вместо вас, но не е част от еднократната цена",
    "Копирайтинг и професионална фотография, освен ако не са в обхвата",
    "Лицензи за платени шрифтове, плъгини или стокови изображения",
    "Рекламен бюджет за Google Ads и Meta",
    "Месечна поддръжка след гаранционния период",
  ],
} as const;

export const PRICING_FACTORS = [
  {
    label: "Обхват и брой страници",
    detail: "Колко страници, секции и съдържание трябва да се изградят.",
  },
  {
    label: "Дизайн и UX",
    detail: "Персонализиран дизайн от нулата или адаптиране на съществуващ.",
  },
  {
    label: "Персонализирана функционалност",
    detail: "Форми, бронирания, потребителски акаунти, собствена логика.",
  },
  {
    label: "Онлайн магазин",
    detail: "Брой продукти, платежни и доставни системи, инвентар, интеграции.",
  },
  {
    label: "Интеграции с външни системи",
    detail: "CRM, ERP, имейл маркетинг, трети страни.",
  },
  {
    label: "SEO и съдържание",
    detail: "Копирайтинг, структуриране, техническо SEO, GEO оптимизация.",
  },
  {
    label: "Миграция на съдържание",
    detail: "Пренасяне на данни, продукти или статии от съществуваща система.",
  },
  {
    label: "Поддръжка и развитие",
    detail: "Какво се случва след старта — поддръжка, растеж, нови функции.",
  },
] as const;
