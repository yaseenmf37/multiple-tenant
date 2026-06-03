// Public app routes used by the blog system. Locale is carried by the
// subdomain (en./hy.) so these paths stay locale-agnostic — the [locale]
// segment exists only internally (see proxy.ts).
export const APP_ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  BLOG: "/blog",
  BLOG_DETAIL: (slug: string) => `/blog/${slug}`,
  CONTACT: "/contact",
} as const
