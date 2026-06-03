import { prisma } from "@/lib/prisma"

/**
 * Smoke test: can we create a blog post in the current tenant's database?
 * Creates (or reuses) a test author, then inserts a draft post.
 * Run: node --env-file=.env node_modules/tsx/dist/cli.mjs scripts/test-create-blog.ts
 */
async function main() {
  const stamp = Date.now()
  const slug = `test-blog-${stamp}`

  const author = await prisma.author.upsert({
    where: { slug: "test-author" },
    update: {},
    create: { name: "Test Author", slug: "test-author" },
  })

  const post = await prisma.post.create({
    data: {
      title: `Test blog ${stamp}`,
      slug,
      content: "Hello world — this is a smoke-test blog post.",
      excerpt: "smoke test",
      published: false,
      author: { connect: { id: author.id } },
    },
  })

  console.log("✅ Blog created:")
  console.log({ id: post.id, slug: post.slug, authorId: post.authorId })
}

main()
  .catch((err) => {
    console.error("❌ Failed to create blog:")
    console.error(err)
    process.exitCode = 1
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
