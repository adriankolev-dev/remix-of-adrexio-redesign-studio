/**
 * Single source of truth for pricing across the Adrexio website.
 */

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
    note: "Еднократна инвестиция · 50/50 плащане",
  },
  {
    index: "02",
    name: "Онлайн магазини",
    fromLabel: PRICING.ecommerce.fromLabel,
    description:
      "Крайната цена зависи от брой продукти, платежни системи, интеграции и персонализирана функционалност.",
    note: "Еднократна инвестиция · 50/50 плащане",
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
    detail: "Форми, бронирания, потребителски акаунти, custom логика.",
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
