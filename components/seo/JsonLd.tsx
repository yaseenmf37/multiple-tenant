type SchemaObject = Record<string, unknown>;

interface JsonLdProps {
    data: SchemaObject | SchemaObject[];
}

/**
 * Server Component for JSON-LD structured data.
 * Place in Server Components or layouts — never in 'use client' files.
 */
export function JsonLd({ data }: JsonLdProps) {
    const schemas = Array.isArray(data) ? data : [data];

    return (
        <>
            {schemas.map((schema, index) => (
                <script
                    key={`schema-${index}`}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
                />
            ))}
        </>
    );
}
