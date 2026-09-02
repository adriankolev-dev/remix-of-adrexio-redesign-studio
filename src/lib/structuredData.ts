// Structured Data (JSON-LD) helpers for SEO

import {
  GOOGLE_RATING,
  GOOGLE_REVIEW_COUNT,
  googleReviews,
} from "@/data/googleReviews";

export const SITE_URL = "https://www.adrexio.com";
export const ORG_ID = `${SITE_URL}/#organization`;
export const WEBSITE_ID = `${SITE_URL}/#website`;

const LOGO = {
  "@type": "ImageObject" as const,
  url: `${SITE_URL}/og-image.png`,
  width: 1200,
  height: 630,
};

const SOCIAL = [
  "https://www.linkedin.com/company/adrexio/",
  "https://www.instagram.com/adrexio_/",
  "https://www.facebook.com/profile.php?id=61587315031705",
];

const ADDRESS = {
  "@type": "PostalAddress" as const,
  addressLocality: "София",
  addressCountry: "BG",
};

export const getOrganizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": ORG_ID,
  name: "Adrexio",
  url: SITE_URL,
  logo: LOGO,
  image: LOGO.url,
  description:
    "Създаваме бързи и оптимизирани уебсайтове, мобилни приложения и дигитални решения, които помагат на бизнеса да расте онлайн.",
  address: ADDRESS,
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+359-896-173-743",
    contactType: "customer service",
    email: "hello@adrexio.com",
    areaServed: "BG",
    availableLanguage: "Bulgarian",
  },
  sameAs: SOCIAL,
});

export const getWebSiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": WEBSITE_ID,
  name: "Adrexio",
  url: SITE_URL,
  description: "Уеб студио в София. Сайтове и магазини от нулата.",
  inLanguage: "bg-BG",
  publisher: { "@id": ORG_ID },
});

export const getServiceSchema = (serviceName: string, description: string, url?: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: serviceName,
  name: serviceName,
  description,
  ...(url ? { url } : {}),
  provider: {
    "@type": "Organization",
    "@id": ORG_ID,
    name: "Adrexio",
    url: SITE_URL,
  },
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

export const getAggregateRatingSchema = () => ({
  "@type": "AggregateRating" as const,
  ratingValue: GOOGLE_RATING.toFixed(1),
  bestRating: "5",
  worstRating: "1",
  ratingCount: GOOGLE_REVIEW_COUNT,
  reviewCount: GOOGLE_REVIEW_COUNT,
});

export const getGoogleReviewSchemas = () =>
  googleReviews.map((review) => ({
    "@type": "Review" as const,
    author: {
      "@type": "Person" as const,
      name: review.author,
    },
    reviewRating: {
      "@type": "Rating" as const,
      ratingValue: review.rating,
      bestRating: 5,
      worstRating: 1,
    },
    reviewBody: review.text,
  }));

export const getLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": ORG_ID,
  name: "Adrexio",
  url: SITE_URL,
  image: LOGO.url,
  logo: LOGO,
  description: "Уеб дизайн и разработка, мобилни приложения, SEO и GEO оптимизация",
  address: ADDRESS,
  telephone: "+359-896-173-743",
  email: "hello@adrexio.com",
  priceRange: "$$",
  areaServed: {
    "@type": "Country",
    name: "България",
  },
  sameAs: SOCIAL,
  aggregateRating: getAggregateRatingSchema(),
  review: getGoogleReviewSchemas(),
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

export const getPublisherSchema = () => ({
  "@type": "Organization" as const,
  "@id": ORG_ID,
  name: "Adrexio",
  url: SITE_URL,
  logo: LOGO,
});
