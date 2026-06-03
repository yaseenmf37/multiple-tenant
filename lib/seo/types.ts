// ============================================
// BASE SEO TYPES
// ============================================

export type RenderingStrategy = 'static' | 'dynamic' | 'client' | 'hybrid';

export type SchemaType =
    | 'WebPage'
    | 'WebSite'
    | 'Organization'
    | 'ProfessionalService'
    | 'Article'
    | 'BlogPosting'
    | 'FAQPage'
    | 'CollectionPage'
    | 'ContactPage'
    | 'AboutPage'
    | 'Service'
    | 'HowTo'
    | 'Review'
    | 'WebApplication'
    | 'SoftwareApplication'
    | 'BreadcrumbList';

export type OpenGraphType =
    | 'website'
    | 'article'
    | 'profile'
    | 'video.movie'
    | 'video.episode'
    | 'music.song';

export interface SEOImage {
    url: string;
    width?: number;
    height?: number;
    alt?: string;
    type?: string;
}

export interface SEORobots {
    index?: boolean;
    follow?: boolean;
    noarchive?: boolean;
    nosnippet?: boolean;
    noimageindex?: boolean;
    maxSnippet?: number;
    maxImagePreview?: 'none' | 'standard' | 'large';
    maxVideoPreview?: number;
}

export interface SEOSchema {
    type: SchemaType;
    data?: Record<string, unknown>;
}

// ============================================
// MAIN SEO OBJECT
// ============================================

export interface SEOData {
    title: string;
    description: string;
    keywords?: string | string[];
    author?: string;

    url?: string;
    canonical?: string;

    openGraph?: {
        type?: OpenGraphType;
        title?: string;
        description?: string;
        url?: string;
        siteName?: string;
        locale?: string;
        images?: SEOImage[];
    };

    twitter?: {
        card?: 'summary' | 'summary_large_image' | 'app' | 'player';
        site?: string;
        creator?: string;
        title?: string;
        description?: string;
        image?: string;
    };

    robots?: SEORobots;

    schema?: SEOSchema;

    pageName?: string;

    alternates?: {
        canonical?: string;
        languages?: Record<string, string>;
    };
}

// ============================================
// PAGE-SPECIFIC SEO TYPES
// ============================================

export interface ServiceSEO extends SEOData {
    schema: {
        type: 'Service';
        data: {
            name: string;
            description: string;
            serviceType: string;
            areaServed?: string;
        };
    };
}

export interface ArticleSEO extends SEOData {
    schema: {
        type: 'Article' | 'BlogPosting';
        data: {
            headline: string;
            author: string;
            publishedTime: string;
            modifiedTime?: string;
            section?: string;
            tags?: string[];
            image?: string;
        };
    };
}

export interface FAQSEO extends SEOData {
    schema: {
        type: 'FAQPage';
        data: {
            questions: Array<{
                question: string;
                answer: string;
            }>;
        };
    };
}

export interface CaseStudySEO extends SEOData {
    schema: {
        type: 'Article';
        data: {
            headline: string;
            author: string;
            publishedTime: string;
            modifiedTime?: string;
            about?: string;
            image?: string;
        };
    };
}

// ============================================
// BUILDER OPTIONS
// ============================================

export interface SEOBuilderOptions {
    strategy: RenderingStrategy;
    mergeDefaults?: boolean;
    includeOrgSchema?: boolean;
    breadcrumbs?: Array<{ name: string; url: string }>;
}

// ============================================
// BREADCRUMB
// ============================================

export interface BreadcrumbItem {
    name: string;
    url: string;
}
