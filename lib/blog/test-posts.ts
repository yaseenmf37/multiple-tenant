// ============================================================================
// 🧪 TEST / DEMO BLOG POSTS  — added on request.
// ----------------------------------------------------------------------------
// These are TWO hard-coded static posts. They are shown ONLY as a fallback
// while the database has no posts (DB not connected / empty), so the blog
// isn't blank. As soon as real posts exist in the DB, these disappear
// automatically.
//
// 👉 To EDIT the demo content: change the two objects in TEST_POSTS below.
// 👉 To REMOVE them entirely: delete this file and the `TEST_POSTS` fallbacks
//    in:
//      - app/[locale]/blog/page.tsx
//      - app/[locale]/blog/[slug]/page.tsx
//
// Note: `readingTime` is a number (minutes) and `content` is an HTML string
// (the Tiptap renderer accepts HTML).
// ============================================================================

import type { PostDetail } from "@/dal/post.dal"

// A single demo author reused by both posts.
const TEST_AUTHOR = {
  id: "test-author",
  name: "Suvio Team",
  slug: "suvio-team",
  avatarUrl: null,
  userId: null,
}

export const TEST_POSTS = [
  // ───────────────────────── TEST POST #1 ─────────────────────────
  {
    id: "test-post-1",
    title: "Welcome to the Suvio blog",
    slug: "welcome-to-the-suvio-blog",
    excerpt:
      "A quick hello from the team — what to expect here, and how Suvio helps every property grow direct bookings.",
    content: `
      <h2>Hello from Suvio 👋</h2>
      <p>This is a <strong>static demo post</strong>. It only shows while the
      database is empty, so you can see how an article looks end to end.</p>
      <p>On this blog we’ll share practical ideas on direct bookings, hotel
      operations, and getting the most out of a multi-tenant platform.</p>
      <ul>
        <li>Beautiful, branded booking sites for every property</li>
        <li>One dashboard to manage them all</li>
        <li>Commission-free direct reservations</li>
      </ul>
      <p>Replace this post with your own once the database is connected.</p>
    `,
    externalId: null,
    published: true,
    publishedAt: new Date("2026-05-18T10:00:00Z"),
    featuredImage: null,
    featuredImageAlt: null,
    viewCount: 0,
    readingTime: 3,
    metaTitle: null,
    metaDescription:
      "A quick hello from the Suvio team and what to expect on the blog.",
    ogImageUrl: null,
    canonicalUrl: null,
    noIndex: false,
    createdAt: new Date("2026-05-18T10:00:00Z"),
    updatedAt: new Date("2026-05-18T10:00:00Z"),
    authorId: TEST_AUTHOR.id,
    author: TEST_AUTHOR,
    categories: [{ id: "test-cat-news", name: "News", slug: "news" }],
    tags: [{ id: "test-tag-suvio", name: "Suvio", slug: "suvio" }],
  },

  // ───────────────────────── TEST POST #2 ─────────────────────────
  {
    id: "test-post-2",
    title: "5 ways to grow direct bookings",
    slug: "5-ways-to-grow-direct-bookings",
    excerpt:
      "Small, high-leverage changes that move guests from marketplaces to your own branded booking site.",
    content: `
      <h2>Keep more of every reservation</h2>
      <p>This is the <strong>second static demo post</strong>. Here are a few
      proven levers for growing commission-free direct bookings:</p>
      <ol>
        <li>Make your own site the easiest place to book</li>
        <li>Match the price, then add a perk guests can’t get elsewhere</li>
        <li>Remove friction at checkout</li>
        <li>Capture the email and use it well</li>
        <li>Lead with strong, fast-loading photography</li>
      </ol>
      <blockquote>Speed and clarity beat discounts.</blockquote>
      <p>Edit or delete this demo post in <code>lib/blog/test-posts.ts</code>.</p>
    `,
    externalId: null,
    published: true,
    publishedAt: new Date("2026-05-25T09:00:00Z"),
    featuredImage: null,
    featuredImageAlt: null,
    viewCount: 0,
    readingTime: 6,
    metaTitle: null,
    metaDescription:
      "Five practical, high-leverage ways to grow commission-free direct bookings.",
    ogImageUrl: null,
    canonicalUrl: null,
    noIndex: false,
    createdAt: new Date("2026-05-25T09:00:00Z"),
    updatedAt: new Date("2026-05-25T09:00:00Z"),
    authorId: TEST_AUTHOR.id,
    author: TEST_AUTHOR,
    categories: [
      { id: "test-cat-direct", name: "Direct bookings", slug: "direct-bookings" },
    ],
    tags: [{ id: "test-tag-growth", name: "Growth", slug: "growth" }],
  },
] as unknown as PostDetail[]

/** Find a single demo post by slug (used by the blog detail page fallback). */
export function getTestPostBySlug(slug: string): PostDetail | null {
  return TEST_POSTS.find((p) => p.slug === slug) ?? null
}
