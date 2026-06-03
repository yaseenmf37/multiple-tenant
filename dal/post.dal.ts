import { prisma } from "@/lib/prisma"
import type { Prisma } from "@/app/generated/prisma/client"
import { PostFindUniqueArgs } from "@/app/generated/prisma/models"

const POST_DETAIL_INCLUDE = {
  author: {
    select: { id: true, name: true, slug: true, avatarUrl: true, userId: true },
  },
  categories: { select: { id: true, name: true, slug: true } },
  tags: { select: { id: true, name: true, slug: true } },
} satisfies Prisma.PostInclude

export type PostDetail = Prisma.PostGetPayload<{
  include: typeof POST_DETAIL_INCLUDE
}>

const POST_LIST_INCLUDE = {
  author: { select: { id: true, name: true, slug: true } },
  categories: { select: { id: true, name: true, slug: true } },
  tags: { select: { id: true, name: true } },
} satisfies Prisma.PostInclude

export type PostListFilters = {
  search?: string
  published?: boolean
  authorId?: string
  categoryId?: string
  categorySlug?: string
  tagId?: string
}

export type PostListItem = Prisma.PostGetPayload<{
  include: typeof POST_LIST_INCLUDE
}>

export const postDal = {
  findById(id: string) {
    return prisma.post.findUnique({
      where: { id },
      include: POST_DETAIL_INCLUDE,
    })
  },

  findBySlug({ ...props }: PostFindUniqueArgs) {
    return prisma.post.findUnique({
      ...props,
      include: POST_DETAIL_INCLUDE,
    })
  },

  list(
    args: { skip?: number; take?: number; filters?: PostListFilters } = {},
  ): Promise<PostListItem[]> {
    const where = buildWhere(args.filters)
    return prisma.post.findMany({
      where,
      include: POST_LIST_INCLUDE,
      orderBy: [{ publishedAt: "desc" }, { createdAt: "desc" }],
      skip: args.skip,
      take: args.take,
    })
  },

  count(filters?: PostListFilters) {
    return prisma.post.count({ where: buildWhere(filters) })
  },
}

function buildWhere(filters?: PostListFilters): Prisma.PostWhereInput {
  if (!filters) return {}
  const where: Prisma.PostWhereInput = {}

  if (filters.search) {
    where.OR = [
      { title: { contains: filters.search, mode: "insensitive" } },
      { excerpt: { contains: filters.search, mode: "insensitive" } },
    ]
  }
  if (filters.published !== undefined) where.published = filters.published
  if (filters.authorId) where.authorId = filters.authorId
  if (filters.categoryId)
    where.categories = { some: { id: filters.categoryId } }
  else if (filters.categorySlug)
    where.categories = { some: { slug: filters.categorySlug } }
  if (filters.tagId) where.tags = { some: { id: filters.tagId } }

  return where
}
