import { SEOData, BreadcrumbItem } from "./types"
import { siteConfig } from "./config"

type SchemaObject = Record<string, unknown>

/**
 * Schema Builder — JSON-LD structured data for Vesta Web Agency
 */
export class SchemaBuilder {
  private schemas: SchemaObject[] = []

  // ==========================================
  // ORGANIZATION SCHEMAS
  // ==========================================

  organization(): this {
    const sameAs: string[] = [
      siteConfig.social.linkedin,
      siteConfig.social.github,
    ].filter((string): string is NonNullable<typeof string> => string != null)

    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": `${siteConfig.url}/#organization`,
      name: siteConfig.companyName,
      url: siteConfig.url,
      logo: {
        "@type": "ImageObject",
        url: siteConfig.logo,
      },
      description: siteConfig.defaultDescription,
      foundingDate: String(siteConfig.business.foundingYear),
      contactPoint: {
        "@type": "ContactPoint",
        email: siteConfig.business.email,
        contactType: "customer support",
        availableLanguage: siteConfig.business.languages,
      },
      knowsAbout: siteConfig.business.specialties,
      ...(sameAs.length ? { sameAs } : {}),
    })
    return this
  }

  /**
   * ProfessionalService schema — best fit for a fully-remote web agency
   */
  professionalService(): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "ProfessionalService",
      "@id": `${siteConfig.url}/#professionalservice`,
      name: siteConfig.companyName,
      url: siteConfig.url,
      logo: siteConfig.logo,
      email: siteConfig.business.email,
      description: siteConfig.defaultDescription,
      areaServed: siteConfig.business.serviceArea,
      knowsAbout: siteConfig.business.specialties,
      hasOfferCatalog: {
        "@type": "OfferCatalog",
        name: "Magento 2 Services",
        itemListElement: siteConfig.business.specialties.map((s) => ({
          "@type": "Offer",
          itemOffered: {
            "@type": "Service",
            name: s,
          },
        })),
      },
    })
    return this
  }

  // ==========================================
  // PAGE SCHEMAS
  // ==========================================

  website(): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "WebSite",
      "@id": `${siteConfig.url}/#website`,
      url: siteConfig.url,
      name: siteConfig.name,
      description: siteConfig.defaultDescription,
      publisher: { "@id": `${siteConfig.url}/#organization` },
    })
    return this
  }

  webPage(data: { title: string; description: string; url: string }): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "@id": `${data.url}/#webpage`,
      url: data.url,
      name: data.title,
      description: data.description,
      isPartOf: { "@id": `${siteConfig.url}/#website` },
      publisher: { "@id": `${siteConfig.url}/#organization` },
    })
    return this
  }

  // ==========================================
  // SERVICE SCHEMAS
  // ==========================================

  service(data: {
    name: string
    description: string
    serviceType?: string
    url?: string
    areaServed?: string
  }): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.name,
      description: data.description,
      ...(data.serviceType ? { serviceType: data.serviceType } : {}),
      ...(data.url ? { url: data.url } : {}),
      areaServed: data.areaServed ?? siteConfig.business.serviceArea,
      provider: { "@id": `${siteConfig.url}/#organization` },
    })
    return this
  }

  webApplication(data: {
    name: string
    description: string
    url: string
    applicationCategory?: string
    operatingSystem?: string
  }): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "WebApplication",
      name: data.name,
      description: data.description,
      url: data.url,
      applicationCategory: data.applicationCategory ?? "BusinessApplication",
      operatingSystem: data.operatingSystem ?? "Any",
      provider: { "@id": `${siteConfig.url}/#organization` },
    })
    return this
  }

  // ==========================================
  // CONTENT SCHEMAS
  // ==========================================

  article(data: {
    headline: string
    description: string
    url: string
    author: string
    publishedTime: string
    modifiedTime?: string
    image?: string
    section?: string
    tags?: string[]
  }): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "Article",
      headline: data.headline,
      description: data.description,
      url: data.url,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime ?? data.publishedTime,
      ...(data.image ? { image: data.image } : {}),
      author: {
        "@type": "Person",
        name: data.author,
      },
      publisher: {
        "@id": `${siteConfig.url}/#organization`,
        name: siteConfig.companyName,
        logo: {
          "@type": "ImageObject",
          url: siteConfig.logo,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${data.url}/#webpage`,
      },
      ...(data.section ? { articleSection: data.section } : {}),
      ...(data.tags ? { keywords: data.tags.join(", ") } : {}),
    })
    return this
  }

  blogPosting(data: {
    headline: string
    description: string
    url: string
    author: string
    publishedTime: string
    modifiedTime?: string
    image?: string
    tags?: string[]
  }): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "BlogPosting",
      headline: data.headline,
      description: data.description,
      url: data.url,
      datePublished: data.publishedTime,
      dateModified: data.modifiedTime ?? data.publishedTime,
      ...(data.image ? { image: data.image } : {}),
      author: {
        "@type": "Person",
        name: data.author,
      },
      publisher: {
        "@type": "Organization",
        name: siteConfig.companyName,
        logo: {
          "@type": "ImageObject",
          url: siteConfig.logo,
        },
      },
      mainEntityOfPage: {
        "@type": "WebPage",
        "@id": `${data.url}/#webpage`,
      },
      ...(data.tags ? { keywords: data.tags.join(", ") } : {}),
    })
    return this
  }

  faq(questions: Array<{ question: string; answer: string }>): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: questions.map((q) => ({
        "@type": "Question",
        name: q.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: q.answer,
        },
      })),
    })
    return this
  }

  breadcrumb(items: BreadcrumbItem[]): this {
    this.schemas.push({
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      itemListElement: items.map((item, index) => ({
        "@type": "ListItem",
        position: index + 1,
        name: item.name,
        item: item.url,
      })),
    })
    return this
  }

  // ==========================================
  // CUSTOM SCHEMA
  // ==========================================

  custom(schema: SchemaObject): this {
    this.schemas.push({
      "@context": "https://schema.org",
      ...schema,
    })
    return this
  }

  // ==========================================
  // BUILD
  // ==========================================

  build(): SchemaObject[] {
    return this.schemas
  }

  buildSingle(): SchemaObject | null {
    return this.schemas[0] ?? null
  }

  toJSON(): string {
    return JSON.stringify(
      this.schemas.length === 1 ? this.schemas[0] : this.schemas,
    )
  }
}

export function createSchema(): SchemaBuilder {
  return new SchemaBuilder()
}

export function buildSchemaFromSEO(seo: SEOData): SchemaObject | null {
  if (!seo.schema) return null

  const builder = createSchema()

  switch (seo.schema.type) {
    case "WebPage":
      builder.webPage({
        title: seo.title,
        description: seo.description,
        url: seo.url ?? siteConfig.url,
      })
      break

    case "Service": {
      const d = seo.schema.data as
        | {
            name?: string
            description?: string
            serviceType?: string
            areaServed?: string
          }
        | undefined
      builder.service({
        name: d?.name ?? seo.title,
        description: d?.description ?? seo.description,
        serviceType: d?.serviceType,
        url: seo.url,
        areaServed: d?.areaServed,
      })
      break
    }

    case "BlogPosting": {
      const d = seo.schema.data as
        | {
            headline?: string
            author?: string
            publishedTime?: string
            modifiedTime?: string
            image?: string
            tags?: string[]
          }
        | undefined
      if (d?.publishedTime) {
        builder.blogPosting({
          headline: d.headline ?? seo.title,
          description: seo.description,
          url: seo.url ?? siteConfig.url,
          author: d.author ?? siteConfig.name,
          publishedTime: d.publishedTime,
          modifiedTime: d.modifiedTime,
          image: d.image,
          tags: d.tags,
        })
      }
      break
    }

    case "Article": {
      const d = seo.schema.data as
        | {
            headline?: string
            author?: string
            publishedTime?: string
            modifiedTime?: string
            image?: string
            section?: string
            tags?: string[]
          }
        | undefined
      if (d?.publishedTime) {
        builder.article({
          headline: d.headline ?? seo.title,
          description: seo.description,
          url: seo.url ?? siteConfig.url,
          author: d.author ?? siteConfig.name,
          publishedTime: d.publishedTime,
          modifiedTime: d.modifiedTime,
          image: d.image,
          section: d.section,
          tags: d.tags,
        })
      }
      break
    }

    case "FAQPage": {
      const d = seo.schema.data as
        | { questions?: Array<{ question: string; answer: string }> }
        | undefined
      builder.faq(d?.questions ?? [])
      break
    }

    default:
      if (seo.schema.data) {
        builder.custom({
          "@type": seo.schema.type,
          ...seo.schema.data,
        })
      }
  }

  return builder.buildSingle()
}
