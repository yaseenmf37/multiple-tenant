import { categoryDal } from "@/dal/category.dal"
import { safe } from "@/lib/errors"
import type { Result } from "@/lib/result"

export const categoryService = {
  publicList(
    args: { search?: string } = {},
  ): Promise<Result<Awaited<ReturnType<typeof categoryDal.list>>>> {
    return safe(() => categoryDal.list(args))
  },
}
