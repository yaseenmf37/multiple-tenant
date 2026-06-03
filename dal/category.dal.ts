import { prisma } from "@/lib/prisma"
import type { Prisma } from "@/app/generated/prisma/client"

export type CategoryDetail = Prisma.CategoryGetPayload<{
  select: {
    id: true
    name: true
    slug: true
    description: true
    featuredImage: true
    metaDescription: true
    metaTitle: true
  }
}>

export const categoryDal = {
  findById(id: string) {
    return prisma.category.findUnique({ where: { id } })
  },

  findBySlug(slug: string) {
    return prisma.category.findUnique({ where: { slug } })
  },

  list(args?: { skip?: number; take?: number; search?: string }) {
    const where: Prisma.CategoryWhereInput = args?.search
      ? { name: { contains: args.search, mode: "insensitive" } }
      : {}
    return prisma.category.findMany({
      where,
      orderBy: { name: "asc" },
      skip: args?.skip,
      take: args?.take,
    })
  },

  count(search?: string) {
    return prisma.category.count({
      where: search ? { name: { contains: search, mode: "insensitive" } } : {},
    })
  },
}
