import { Metadata } from "next"
import {
  SEOData,
  SEOBuilderOptions,
  SEORobots,
  SchemaType,
  SEOImage,
} from "./types"
import { siteConfig, getDefaultSEO } from "./config"
import { formatKeywords } from "./utils"

export class SEOBuilder {
  private data: Partial<SEOData>
  private options: SEOBuilderOptions

  constructor(options: Partial<SEOBuilderOptions> = {}) {
    this.options = {
      strategy: "static",
      mergeDefaults: true,
      includeOrgSchema: false,
      ...options,
    }
    this.data = this.options.mergeDefaults ? getDefaultSEO() : {}
  }

  // ==========================================
  // FLUENT SETTERS
  // ==========================================

  title(title: string): this {
    this.data.title = title
    return this
  }

  description(description: string): this {
    this.data.description = description
    return this
  }

  keywords(keywords: string | string[]): this {
    this.data.keywords = keywords
    return this
  }

  url(url: string): this {
    this.data.url = url
    this.data.canonical = url
    return this
  }

  image(
    image:
      | string
      | { url: string; width?: number; height?: number; alt?: string },
  ): this {
    const imageObj: SEOImage =
      typeof image === "string"
        ? { url: image, width: 1200, height: 630, alt: this.data.title }
        : image

    this.data.openGraph = { ...this.data.openGraph, images: [imageObj] }
    this.data.twitter = { ...this.data.twitter, image: imageObj.url }
    return this
  }

  pageName(name: string): this {
    this.data.pageName = name
    return this
  }

  schema(type: SchemaType, data?: Record<string, unknown>): this {
    this.data.schema = { type, data }
    return this
  }

  robots(robots: SEORobots): this {
    this.data.robots = { ...this.data.robots, ...robots }
    return this
  }

  noIndex(): this {
    this.data.robots = { ...this.data.robots, index: false }
    return this
  }

  noFollow(): this {
    this.data.robots = { ...this.data.robots, follow: false }
    return this
  }

  openGraph(og: SEOData["openGraph"]): this {
    this.data.openGraph = { ...this.data.openGraph, ...og }
    return this
  }

  twitter(twitter: SEOData["twitter"]): this {
    this.data.twitter = { ...this.data.twitter, ...twitter }
    return this
  }

  alternates(alternates: SEOData["alternates"]): this {
    this.data.alternates = alternates
    return this
  }

  // ==========================================
  // BUILD METHODS
  // ==========================================

  build(): SEOData {
    return this.data as SEOData
  }

  buildMetadata(): Metadata {
    const data = this.data
    const fullTitle = data.title ?? ""
    const keywords = formatKeywords(data.keywords)
    const ogType = data.openGraph?.type ?? "website"

    const metadata: Metadata = {
      title: fullTitle,
      description: data.description,
      keywords,
      authors: [{ name: data.author ?? siteConfig.companyName }],
      creator: siteConfig.name,
      publisher: siteConfig.companyName,
      alternates: {
        canonical: data.canonical ?? data.url,
        ...data.alternates,
      },
    }

    if (siteConfig.verification.google) {
      metadata.verification = { google: siteConfig.verification.google }
    }

    if (data.robots) {
      metadata.robots = {
        index: data.robots.index ?? true,
        follow: data.robots.follow ?? true,
        googleBot: {
          index: data.robots.index ?? true,
          follow: data.robots.follow ?? true,
          "max-video-preview": data.robots.maxVideoPreview ?? -1,
          "max-image-preview": data.robots.maxImagePreview ?? "large",
          "max-snippet": data.robots.maxSnippet ?? -1,
        },
      }
    }

    if (data.openGraph) {
      metadata.openGraph = {
        title: data.openGraph.title ?? fullTitle,
        description: data.openGraph.description ?? data.description,
        url: data.openGraph.url ?? data.url,
        siteName: data.openGraph.siteName ?? siteConfig.name,
        locale: data.openGraph.locale ?? siteConfig.locale,
        type: ogType,
        images: data.openGraph.images ?? [siteConfig.defaultImage],
      }
    }

    if (data.twitter) {
      const twitterSite = data.twitter.site ?? siteConfig.social.twitter
      const twitterCreator = data.twitter.creator ?? siteConfig.social.twitter

      metadata.twitter = {
        card: data.twitter.card ?? "summary_large_image",
        title: data.twitter.title ?? fullTitle,
        description: data.twitter.description ?? data.description,
        images: data.twitter.image ? [data.twitter.image] : undefined,
        ...(twitterSite ? { site: twitterSite } : {}),
        ...(twitterCreator ? { creator: twitterCreator } : {}),
      }
    }

    return metadata
  }
}

// ==========================================
// FACTORY FUNCTIONS
// ==========================================

export function createSEO(options?: Partial<SEOBuilderOptions>): SEOBuilder {
  return new SEOBuilder(options)
}

export function quickMetadata(
  title: string,
  description: string,
  url?: string,
): Metadata {
  return createSEO()
    .title(title)
    .description(description)
    .url(url ?? siteConfig.url)
    .buildMetadata()
}
