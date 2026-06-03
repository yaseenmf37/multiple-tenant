"use server"

import { postService } from "@/services/post.service"
import { mapErrorToResult } from "@/lib/errors"
import { type Result } from "@/lib/result"
import type { postDal } from "@/dal/post.dal"
import { cache } from "react"

export type PostFilters = {
  search?: string
  published?: boolean
  authorId?: string
  categoryId?: string
  categorySlug?: string
  tagId?: string
  page?: number
  pageSize?: number
}

type PostListResult = {
  posts: Awaited<ReturnType<typeof postDal.list>>
  total: number
  page: number
  pageSize: number
}

export async function getPublicPosts(
  filters?: Partial<PostFilters>,
): Promise<Result<PostListResult>> {
  try {
    return postService.publicList({
      filters: {
        search: filters?.search,
        published: filters?.published,
        authorId: filters?.authorId,
        categoryId: filters?.categoryId,
        categorySlug: filters?.categorySlug,
        tagId: filters?.tagId,
      },
      page: filters?.page,
      pageSize: filters?.pageSize,
    })
  } catch (e) {
    return mapErrorToResult(e)
  }
}

export const getPostBySlugAction = cache(
  async (
    slug: string,
  ): Promise<Result<Awaited<ReturnType<typeof postDal.findBySlug>>>> => {
    try {
      return postService.getPublicPostBySlug(slug)
    } catch (e) {
      return mapErrorToResult(e)
    }
  },
)
