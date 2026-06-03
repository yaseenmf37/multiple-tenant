// Types
export * from './types';

// Config
export { siteConfig, getDefaultSEO } from './config';
export type { SiteConfig } from './config';

// Builders
export { SEOBuilder, createSEO, quickMetadata } from './metadata-builder';
export {
    SchemaBuilder,
    createSchema,
    buildSchemaFromSEO,
} from './schema-builder';

// Utils
export {
    mergeDeep,
    formatKeywords,
    absoluteUrl,
    truncateDescription,
    stripHtml,
    getNestedValue,
} from './utils';
