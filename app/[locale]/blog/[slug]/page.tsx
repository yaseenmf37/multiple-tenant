import { getPostBySlugAction, getPublicPosts } from "@/actions/post.actions"
import { ScrollToTop } from "@/components/modules/ScrollToTop"
import { JsonLd } from "@/components/seo"
import { TiptapRenderer } from "@/components/tiptapEditor/tiptap-renderer"
import { Button } from "@/components/ui/button"
import { Chip } from "@/components/ui/chip"
import { Placeholder } from "@/components/ui/placeholder"
import { createSchema, createSEO, siteConfig } from "@/lib/seo"
import { APP_ROUTES } from "@/lib/appRoutes"
// 🧪 TEST POSTS fallback — see lib/blog/test-posts.ts. Remove when the DB has posts.
import { TEST_POSTS, getTestPostBySlug } from "@/lib/blog/test-posts"
import { ArrowLeftIcon, CalendarIcon, ClockIcon } from "lucide-react"
import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"

type Props = { params: Promise<{ locale: string; slug: string }> }

export async function generateStaticParams() {
  const result = await getPublicPosts({ published: true, pageSize: 1000 })
  const realPosts = result.success
    ? result.data.posts.filter((post) => !post.noIndex)
    : []
  // 🧪 TEST POSTS fallback — prerender the demo slugs while the DB has no posts.
  const source = realPosts.length > 0 ? realPosts : TEST_POSTS
  return source.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const result = await getPostBySlugAction(slug)

  // 🧪 TEST POSTS fallback (lib/blog/test-posts.ts)
  const post =
    result.success && result.data ? result.data : getTestPostBySlug(slug)

  if (!post) {
    return { title: "Post Not Found" }
  }

  const url = `${siteConfig.url}/blog/${post.slug}`

  const builder = createSEO()
    .title(post.metaTitle ?? post.title)
    .description(
      post.metaDescription ?? post.excerpt ?? siteConfig.defaultDescription,
    )
    .url(post.canonicalUrl ?? url)

  if (post.featuredImage) {
    builder.image({
      url: post.ogImageUrl ?? post.featuredImage,
      width: 1200,
      height: 630,
      alt: post.featuredImageAlt ?? post.title,
    })
  }

  if (post.noIndex) builder.noIndex()

  const metadata = builder.buildMetadata()

  return {
    ...metadata,
    openGraph: metadata.openGraph
      ? {
          ...metadata.openGraph,
          type: "article",
          url: post.canonicalUrl ?? url,
          publishedTime: (post.publishedAt ?? post.createdAt).toISOString(),
          modifiedTime: post.updatedAt?.toISOString(),
          authors: [post.author.name],
          tags: post.tags.map((t) => t.name),
        }
      : undefined,
  }
}

const page = async ({ params }: Props) => {
  const { slug } = await params

  const postResult = await getPostBySlugAction(slug)

  // 🧪 TEST POSTS fallback (lib/blog/test-posts.ts) — used while the DB is empty.
  const post = postResult.success ? postResult.data : getTestPostBySlug(slug)

  if (!post) notFound()

  const url = `${siteConfig.url}/blog/${slug}`

  const relatedPostsResult = await getPublicPosts({
    tagId: post?.tags.at(0)?.id,
    pageSize: 5,
  })
  const realRelated = relatedPostsResult.success
    ? relatedPostsResult.data.posts.filter((p) => p.id !== post?.id)
    : []
  // 🧪 TEST POSTS fallback for the "More articles" section.
  const relatedPosts =
    realRelated.length > 0
      ? realRelated
      : TEST_POSTS.filter((p) => p.id !== post?.id)

  const canonical = post?.canonicalUrl ?? url

  const schemas = createSchema()
    .blogPosting({
      headline: post!.title,
      description:
        post!.excerpt ?? post!.metaDescription ?? siteConfig.defaultDescription,
      url: canonical,
      author: post!.author.name,
      publishedTime: (post!.publishedAt ?? post!.createdAt).toISOString(),
      modifiedTime: post!.updatedAt?.toISOString(),
      image: post!.ogImageUrl ?? post!.featuredImage ?? undefined,
      tags: post!.tags.map((t) => t.name),
    })
    .breadcrumb([
      { name: "Home", url: siteConfig.url },
      { name: "Blog", url: `${siteConfig.url}/blog` },
      { name: post?.title ?? "Article", url: canonical },
    ])
    .webPage({
      title: post!.title,
      description:
        post?.excerpt ?? post?.metaDescription ?? siteConfig.defaultDescription,
      url: post?.canonicalUrl ?? url,
    })
    .build()

  return (
    <main>
      {!post?.noIndex ? <JsonLd data={schemas} /> : null}
      <ScrollToTop trigger={slug} />

      {/* HEADER */}
      <section className="bg-cream border-b border-solid border-line">
        <div
          className="container text-center max-w-[820px]"
          style={{ paddingBlock: "clamp(40px,5vw,64px)" }}
        >
          <Link
            href={APP_ROUTES.BLOG}
            className="inline-flex items-center gap-2 text-[14px] font-semibold mb-[22px] text-brand-700 hover:text-brand-800 transition-colors"
          >
            <ArrowLeftIcon className="w-4 h-4" /> Back to blog
          </Link>

          {post?.categories.length ? (
            <div className="flex items-center justify-center gap-2 mb-[16px]">
              {post.categories.map((category) => (
                <Chip key={`blog-category-${category.id}`} variant="ink">
                  {category.name}
                </Chip>
              ))}
            </div>
          ) : null}

          <h1
            className="display mx-auto max-w-[720px]"
            style={{ fontSize: "clamp(30px,4vw,50px)" }}
          >
            {post?.title}
          </h1>

          <div className="flex items-center justify-center gap-5 mt-[20px] text-muted text-[14px]">
            <span className="flex items-center gap-1.5">
              <CalendarIcon className="w-4 h-4" />
              {post?.createdAt ? new Date(post.createdAt).toDateString() : "-"}
            </span>
            <span className="flex items-center gap-1.5">
              <ClockIcon className="w-4 h-4" />
              {post?.readingTime ?? "-"}
            </span>
          </div>
        </div>
      </section>

      {/* FEATURED IMAGE */}
      {post?.featuredImage ? (
        <div className="container mt-[40px] max-w-[960px]">
          <div
            className="card relative overflow-hidden p-0"
            style={{ height: "clamp(240px,34vw,440px)" }}
          >
            <Image
              src={post.featuredImage}
              alt={post.featuredImageAlt ?? ""}
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      ) : null}

      {/* CONTENT */}
      <div className="container max-w-[760px] py-[clamp(40px,6vw,72px)]">
        {post?.content ? (
          <TiptapRenderer content={post.content} />
        ) : (
          <p className="text-muted">This post has no content yet.</p>
        )}

        {/* CTA */}
        <div
          className="mt-16 p-8 text-center text-white bg-ink"
          style={{ borderRadius: "var(--radius)" }}
        >
          <h3 className="text-white font-extrabold text-2xl mb-2 tracking-[-.02em]">
            Ready to launch your booking site?
          </h3>
          <p className="text-white/60 mb-6">
            Give every property its own branded site on one platform.
          </p>
          <Button
            asChild
            variant="plain"
            size="lg"
            className="bg-white text-brand-700 border-white"
          >
            <Link href={APP_ROUTES.CONTACT}>Get in touch</Link>
          </Button>
        </div>
      </div>

      {/* RELATED */}
      {relatedPosts.length > 0 && (
        <section className="section bg-cream">
          <div className="container">
            <h2
              className="display mb-[32px]"
              style={{ fontSize: "clamp(22px,2.6vw,32px)" }}
            >
              More articles
            </h2>
            <div className="grid sm:grid-cols-3 gap-6">
              {relatedPosts.map((p) => (
                <Link
                  key={p.id}
                  href={APP_ROUTES.BLOG_DETAIL(p.slug)}
                  scroll
                  className="card card-hover group overflow-hidden flex flex-col"
                >
                  <div className="relative w-full h-40 overflow-hidden">
                    {p.featuredImage ? (
                      <Image
                        src={p.featuredImage}
                        alt={p.featuredImageAlt ?? ""}
                        width={600}
                        height={400}
                        className="size-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    ) : (
                      <Placeholder label="// cover" className="h-full w-full" />
                    )}
                  </div>
                  <div className="p-5">
                    <p className="text-[12.5px] text-muted mb-2">
                      {new Date(p.createdAt).toDateString()} · {p.readingTime}
                    </p>
                    <h4 className="font-bold text-ink text-[15px] leading-snug group-hover:text-brand-700 transition-colors line-clamp-2">
                      {p.title}
                    </h4>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </main>
  )
}

export default page
