import { postDal, type PostListFilters } from "@/dal/post.dal"
import { NotFoundError, safe } from "@/lib/errors"
import type { Result } from "@/lib/result"

type PostListArgs = {
  filters?: PostListFilters
  page?: number
  pageSize?: number
}

export const postService = {
  getPublishedPostsCount() {
    return safe(async () => {
      return await postDal.count()
    })
  },

  publicList(args: PostListArgs): Promise<
    Result<{
      posts: Awaited<ReturnType<typeof postDal.list>>
      total: number
      page: number
      pageSize: number
    }>
  > {
    return safe(async () => {
      const page = Math.max(1, args.page ?? 1)
      const pageSize = Math.min(100, Math.max(1, args.pageSize ?? 20))
      const skip = (page - 1) * pageSize

      const [posts, total] = await Promise.all([
        postDal.list({
          skip,
          take: pageSize,
          filters: { ...args.filters, published: true },
        }),
        postDal.count(args.filters),
      ])

      return { posts, total, page, pageSize }
    })
  },

  getPublicPostBySlug(
    slug: string,
  ): Promise<Result<Awaited<ReturnType<typeof postDal.findBySlug>>>> {
    return safe(async () => {
      const post = await postDal.findBySlug({
        where: { slug, published: true },
      })
      if (!post) throw new NotFoundError("Post")
      return post
    })
  },
}
