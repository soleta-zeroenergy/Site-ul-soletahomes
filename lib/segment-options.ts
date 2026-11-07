/* ─── Shared "who are you" segment options ────────────────────────────────── */
/* Used by both the general contact form (lib/contact-schema.ts) and the      */
/* Private Offer form (lib/offer-schema.ts) so the two forms stay in sync.    */
/* Wording follows the audience categories already established on the site   */
/* (see app/professionals/page.tsx and lib/content/professionals.ts), plus   */
/* "Private client" for individual buyers, who are not covered by any of     */
/* the four professional categories but make up the rest of the site.       */

export const CLIENT_SEGMENTS = [
  "Private client",
  "Independent architect",
  "Property developer",
  "Hospitality & tourism operator",
  "Strategic partner",
  "Other",
] as const;

export type ClientSegment = (typeof CLIENT_SEGMENTS)[number];
