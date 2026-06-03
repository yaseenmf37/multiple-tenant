import { SEOData, SEOImage } from "./types"

export const siteConfig = {
  name: "Vesta",
  companyName: "Vesta Web Agency",
  tagline: "Headless Magento 2 Experts | React & Next.js E-Commerce",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://vesta-web.com",

  defaultTitle:
    "Vesta — Headless Magento 2 Agency | React & Next.js E-Commerce",
  defaultDescription:
    "We build blazing-fast, SEO-optimized headless Magento 2 storefronts with React and Next.js. Expert Magento 2 development, performance optimization, migrations, and 24/7 support.",
  defaultKeywords: [
    "Magento 2 agency",
    "headless Magento 2",
    "Magento 2 development",
    "React e-commerce",
    "Next.js Magento",
    "Magento 2 performance optimization",
    "Magento 1 to 2 migration",
    "headless commerce",
    "Hyva Magento",
    "Magento 2 support",
  ],

  logo: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vesta-web.com"}/logo.png`,
  defaultImage: {
    url: `${process.env.NEXT_PUBLIC_SITE_URL || "https://vesta-web.com"}/og-image.jpg`,
    width: 1200,
    height: 630,
    alt: "Vesta — Headless Magento 2 Agency",
  } as SEOImage,

  locale: "en_US",
  social: {
    twitter: undefined,
    linkedin: "https://www.linkedin.com/company/vesta-web",
    github: undefined,
  },

  business: {
    email: "info@vesta-web.com",
    type: "ProfessionalService" as const,
    serviceArea: "Worldwide",
    languages: ["English"],
    foundingYear: 2023,
    specialties: [
      "Headless Magento 2 Development",
      "Full Magento 2 Support",
      "Magento 2 Performance Optimization",
      "Magento 1 to 2 Migration",
    ],
  },

  themeColor: "#E46003",

  verification: {
    google: process.env.GOOGLE_SITE_VERIFICATION || "",
  },
} as const

export type SiteConfig = typeof siteConfig

export function getDefaultSEO(): SEOData {
  return {
    title: siteConfig.defaultTitle,
    description: siteConfig.defaultDescription,
    keywords: [...siteConfig.defaultKeywords],
    url: siteConfig.url,
    openGraph: {
      type: "website",
      siteName: siteConfig.name,
      locale: siteConfig.locale,
      images: [siteConfig.defaultImage],
    },
    twitter: {
      card: "summary_large_image",
      site: siteConfig.social.twitter,
      creator: siteConfig.social.twitter,
    },
    robots: {
      index: true,
      follow: true,
      maxImagePreview: "large",
      maxSnippet: -1,
      maxVideoPreview: -1,
    },
  }
}
