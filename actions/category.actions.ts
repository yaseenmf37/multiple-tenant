"use server"

import { categoryService } from "@/services/category.service"
import { mapErrorToResult } from "@/lib/errors"
import { type Result } from "@/lib/result"
import type { categoryDal } from "@/dal/category.dal"

export async function getPublicCategoriesAction(): Promise<
  Result<Awaited<ReturnType<typeof categoryDal.list>>>
> {
  try {
    return categoryService.publicList()
  } catch (e) {
    return mapErrorToResult(e)
  }
}
