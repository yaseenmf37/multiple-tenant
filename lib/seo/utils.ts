/**
 * Check if value is a plain object
 */
function isObject(item: unknown): item is Record<string, unknown> {
    return Boolean(item && typeof item === 'object' && !Array.isArray(item));
}

/**
 * Deep merge objects
 */
export function mergeDeep<T extends Record<string, unknown>>(
    target: T,
    ...sources: Array<Partial<T>>
): T {
    if (!sources.length) return target;
    const source = sources.shift();

    if (isObject(target) && isObject(source)) {
        for (const key in source) {
            if (Object.prototype.hasOwnProperty.call(source, key)) {
                const sourceValue = source[key];
                const targetValue = target[key];

                if (isObject(sourceValue) && isObject(targetValue)) {
                    target[key as keyof T] = mergeDeep(
                        { ...targetValue } as Record<string, unknown>,
                        sourceValue as Record<string, unknown>
                    ) as T[keyof T];
                } else if (sourceValue !== undefined) {
                    target[key as keyof T] = sourceValue as T[keyof T];
                }
            }
        }
    }

    return mergeDeep(target, ...sources);
}

/**
 * Format keywords to array
 */
export function formatKeywords(keywords?: string | string[]): string[] {
    if (!keywords) return [];
    if (Array.isArray(keywords)) return keywords;
    return keywords.split(',').map((k) => k.trim());
}

/**
 * Generate absolute URL
 */
export function absoluteUrl(path: string, baseUrl?: string): string {
    const base = baseUrl || process.env.NEXT_PUBLIC_SITE_URL || '';
    if (path.startsWith('http')) return path;
    return `${base}${path.startsWith('/') ? path : `/${path}`}`;
}

/**
 * Truncate text for meta descriptions
 */
export function truncateDescription(text: string, maxLength = 160): string {
    if (text.length <= maxLength) return text;
    return text.slice(0, maxLength - 3).trim() + '...';
}

/**
 * Strip HTML tags from text
 */
export function stripHtml(html: string): string {
    return html.replace(/<[^>]*>/g, '');
}

/**
 * Safely get nested property from object
 */
export function getNestedValue<T>(
    obj: Record<string, unknown>,
    path: string,
    defaultValue?: T
): T | undefined {
    const keys = path.split('.');
    let result: unknown = obj;

    for (const key of keys) {
        if (result === null || result === undefined) {
            return defaultValue;
        }
        result = (result as Record<string, unknown>)[key];
    }

    return (result as T) ?? defaultValue;
}
