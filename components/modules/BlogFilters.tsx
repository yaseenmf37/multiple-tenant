"use client"

import { useState } from "react"
import { useRouter, useSearchParams, usePathname } from "next/navigation"
import { cn } from "@/lib/utils"

interface Category {
  id: string
  name: string
  slug: string
}

interface BlogFiltersProps {
  categories: Category[]
  activeCategory?: string
}

const pill =
  "px-4 py-2 rounded-full text-[13px] font-semibold border transition-all duration-200 cursor-pointer"

export function BlogFilters({ categories, activeCategory }: BlogFiltersProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const [active, setActive] = useState(activeCategory ?? "")

  function select(slug: string) {
    const next = slug === active ? "" : slug
    setActive(next)
    const params = new URLSearchParams(searchParams.toString())
    if (next) {
      params.set("category", next)
    } else {
      params.delete("category")
    }
    router.push(`${pathname}?${params.toString()}`, { scroll: false })
  }

  return (
    <div className="flex flex-wrap gap-2 mb-12 justify-center">
      <button
        onClick={() => select("")}
        className={cn(
          pill,
          active === ""
            ? "bg-brand-600 text-white border-brand-600"
            : "bg-white text-muted border-line-2 hover:border-brand-600 hover:text-brand-700",
        )}
      >
        All
      </button>
      {categories.map((cat) => (
        <button
          key={`category-${cat.id}`}
          onClick={() => select(cat.slug)}
          className={cn(
            pill,
            active === cat.slug
              ? "bg-brand-600 text-white border-brand-600"
              : "bg-white text-muted border-line-2 hover:border-brand-600 hover:text-brand-700",
          )}
        >
          {cat.name}
        </button>
      ))}
    </div>
  )
}
