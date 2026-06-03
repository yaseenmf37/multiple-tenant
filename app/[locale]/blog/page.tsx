import type { Metadata } from "next"
import { Suspense } from "react"
import BlogList from "@/components/modules/BlogList"
import { BlogFilters } from "@/components/modules/BlogFilters"
import { JsonLd } from "@/components/seo"
import { Eyebrow } from "@/components/ui/eyebrow"
import { createSchema, createSEO, siteConfig } from "@/lib/seo"
import { getPublicPosts } from "@/actions/post.actions"
import { getPublicCategoriesAction } from "@/actions/category.actions"
// 🧪 TEST POSTS fallback — see lib/blog/test-posts.ts. Remove when the DB has posts.
import { TEST_POSTS } from "@/lib/blog/test-posts"

export const metadata: Metadata = createSEO()
  .title("Blog")
  .description(
    "Insights, guides, and stories from the Suvio team on running a modern, multi-tenant hospitality platform.",
  )
  .url(`${siteConfig.url}/blog`)
  .keywords([
    "Suvio blog",
    "hotel platform articles",
    "hospitality guides",
    "direct bookings",
    "hotel management tips",
  ])
  .openGraph({ type: "website" })
  .buildMetadata()

interface BlogPageProps {
  searchParams: Promise<{ category?: string }>
}

export default async function BlogPage({ searchParams }: BlogPageProps) {
  const { category } = await searchParams

  const [postsResult, categoriesResult] = await Promise.all([
    getPublicPosts({
      published: true,
      ...(category ? { categorySlug: category } : {}),
    }),
    getPublicCategoriesAction(),
  ])

  const realPosts = postsResult.success ? postsResult.data.posts : []
  // 🧪 TEST POSTS: while there are no real posts, show the two static demo
  // posts (lib/blog/test-posts.ts) so the page isn't empty. Delete this line
  // (and the import) once the database has posts.
  const posts = realPosts.length > 0 ? realPosts : TEST_POSTS

  const categories = categoriesResult.success ? categoriesResult.data : []

  const schemas = createSchema()
    .webPage({
      title: "Blog | Suvio",
      description:
        "Insights, guides, and stories from the Suvio team on running a modern, multi-tenant hospitality platform.",
      url: `${siteConfig.url}/blog`,
    })
    .breadcrumb([
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog` },
    ])
    .build()

  return (
    <main>
      <JsonLd data={schemas} />

      {/* HERO */}
      <section className="bg-cream border-b border-solid border-line">
        <div
          className="container text-center"
          style={{ paddingBlock: "clamp(44px,5vw,72px)" }}
        >
          <Eyebrow center>The Suvio blog</Eyebrow>
          <h1
            className="display mt-[16px] max-w-[700px] mx-auto"
            style={{ fontSize: "clamp(32px,4.4vw,52px)" }}
          >
            Ideas for running a better hotel
          </h1>
          <p className="lead mt-[16px] max-w-[560px] mx-auto">
            Insights, guides, and stories from the Suvio team on direct
            bookings, hospitality, and growing on one platform.
          </p>
        </div>
      </section>

      {/* LIST */}
      <section className="section">
        <div className="container">
          <Suspense>
            <BlogFilters categories={categories} activeCategory={category} />
          </Suspense>

          <BlogList posts={posts} />
        </div>
      </section>
    </main>
  )
}
