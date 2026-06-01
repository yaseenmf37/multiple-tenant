// ============================================================
// Single source of truth for every href used across the app.
// Components must import from here instead of hard-coding paths,
// and link via <LocalizedLink href={ROUTES.X} /> rather than next/link.
// Locale is carried by the subdomain (en./hy.), so paths are not
// prefixed with the locale.
// ============================================================

export const ROUTES = {
  HOME: "/",
  FEATURES: "/features",
  SOLUTIONS: "/solutions",
  PRICING: "/pricing",
  ABOUT: "/about",
  BLOG: "/blog",
  BLOG_ARTICLE: "/blog/article",
  CONTACT: "/contact",
} as const;

/** External / non-router targets (mail, tel, placeholders, socials). */
export const EXTERNAL = {
  EMAIL: "mailto:hello@suvio.com",
  PHONE: "tel:+18005550100",
  BOOK_MEETING: "#",
  OPEN_ROLES: "#",
  PRIVACY: "#",
  TERMS: "#",
  STATUS: "#",
  SOCIAL_INSTAGRAM: "#",
  SOCIAL_LINKEDIN: "#",
  SOCIAL_X: "#",
  SOCIAL_YOUTUBE: "#",
  SHARE_X: "#",
  SHARE_LINKEDIN: "#",
} as const;

/** Solutions page in-page anchors. */
export const ANCHORS = {
  BOUTIQUE: "#boutique",
  CHAIN: "#chain",
  LODGE: "#lodge",
  RESORT: "#resort",
} as const;

export type AppRoute = (typeof ROUTES)[keyof typeof ROUTES];
