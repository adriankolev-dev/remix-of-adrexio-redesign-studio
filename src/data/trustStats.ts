import { GOOGLE_RATING, GOOGLE_REVIEW_COUNT } from "@/data/googleReviews";

/**
 * Numbers the service pages are allowed to show.
 *
 * The stat rows used to carry invented outcome claims — "+300% средно
 * увеличение на трафика", "95% клиенти с ръст", "100% доверие и качество" —
 * which nothing in this repo or any client report backs up. Unverifiable
 * averages are an E-E-A-T liability rather than a selling point, and under
 * Bulgarian consumer law an unsubstantiated performance claim is a real
 * exposure. Everything below is derived from data that actually exists.
 *
 * Add a claim here only when it can be pointed at a source.
 */
export const TRUST_STATS = {
  response: { value: "24ч", label: "Отговор на запитване" },
  rating: {
    value: GOOGLE_RATING.toFixed(1),
    label: `Среден рейтинг от ${GOOGLE_REVIEW_COUNT} Google ревюта`,
  },
  freeConsultation: { value: "Безплатна", label: "Първоначална консултация" },
} as const;

/** The default row for a service page: speed, reputation, no-risk first step. No project counts. */
export const SERVICE_TRUST_STATS = [
  TRUST_STATS.response,
  TRUST_STATS.rating,
  TRUST_STATS.freeConsultation,
];
