// Structured Data (JSON-LD) helpers for SEO

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Adrexio",
  url: "https://www.adrexio.com",
  logo: {
    "@type": "ImageObject",
    "url": "https://www.adrexio.com/favicon.svg",
    "width": 512,
    "height": 512
  },
  description: "Създаваме бързи и оптимизирани уебсайтове, мобилни приложения и дигитални решения, които помагат на бизнеса да расте в дигиталната ера.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "София",
    addressCountry: "BG",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+359-896-173-743",
    contactType: "customer service",
    email: "hello@adrexio.com",
    areaServed: "BG",
    availableLanguage: "Bulgarian",
  },
  sameAs: [
    "https://www.linkedin.com/company/adrexio/",
    "https://www.instagram.com/adrexio_/",
    "https://www.facebook.com/profile.php?id=61587315031705",
  ],
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "Adrexio",
  url: "https://www.adrexio.com",
  description: "Модерни уебсайтове и дигитални решения за бизнеса",
  inLanguage: "bg-BG",
  potentialAction: {
    "@type": "SearchAction",
    target: "https://www.adrexio.com/search?q={search_term_string}",
    "query-input": "required name=search_term_string",
  },
});

export const getServiceSchema = (serviceName: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: serviceName,
  provider: {
    "@type": "Organization",
    name: "Adrexio",
  },
  description: description,
  areaServed: {
    "@type": "Country",
    name: "България",
  },
});

export const getBreadcrumbSchema = (items: Array<{ name: string; url: string }>) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": "https://www.adrexio.com",
  name: "Adrexio",
  image: "https://www.adrexio.com/favicon.svg",
  logo: {
    "@type": "ImageObject",
    "url": "https://www.adrexio.com/favicon.svg",
    "width": 512,
    "height": 512
  },
  description: "Уеб дизайн и разработка, мобилни приложения, SEO и GEO оптимизация",
  address: {
    "@type": "PostalAddress",
    addressLocality: "София",
    addressCountry: "BG",
  },
  telephone: "+359-896-173-743",
  email: "hello@adrexio.com",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "България",
  },
});

export const getFAQSchema = (faqs: Array<{ question: string; answer: string }>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});
