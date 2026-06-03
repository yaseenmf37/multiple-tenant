import MotionElement from "./MotionElement"
import Image from "next/image"
import { ArrowRight, ClockIcon } from "lucide-react"
import Link from "next/link"
import { PostListItem } from "@/dal/post.dal"
import { Chip } from "@/components/ui/chip"
import { Placeholder } from "@/components/ui/placeholder"

interface BlogListProps {
  posts: PostListItem[]
}

export default function BlogList({ posts }: BlogListProps) {
  if (posts.length === 0) {
    return (
      <p className="text-center text-muted py-16">
        No articles yet — check back soon.
      </p>
    )
  }

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
      {posts.map((post, i) => (
        <MotionElement
          key={post.id}
          initial={{ y: 30, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4, delay: 0.06 * i }}
          className="card card-hover group overflow-hidden flex flex-col"
        >
          <div className="relative h-48 overflow-hidden">
            {post.featuredImage ? (
              <Image
                height={400}
                width={400}
                src={post.featuredImage}
                alt={post.featuredImageAlt ?? ""}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
            ) : (
              <Placeholder label="// cover" className="h-full w-full" />
            )}
            {post.categories.length > 0 && (
              <div className="absolute top-3 left-3 flex gap-1.5">
                {post.categories.slice(0, 2).map((category) => (
                  <Chip key={`category-badge-${category.id}`} variant="ink">
                    {category.name}
                  </Chip>
                ))}
              </div>
            )}
          </div>

          <div className="p-6 flex flex-col flex-1">
            <div className="flex items-center gap-3 text-[12.5px] text-muted mb-3">
              <span>{new Date(post.createdAt).toDateString()}</span>
              <span>·</span>
              <span className="flex items-center gap-1">
                <ClockIcon className="w-3.5 h-3.5" />
                {post.readingTime}
              </span>
            </div>

            <h2 className="font-bold text-ink text-[17px] leading-snug mb-2.5 group-hover:text-brand-700 transition-colors line-clamp-2">
              {post.title}
            </h2>
            <p className="text-muted text-[14px] leading-relaxed mb-5 line-clamp-3">
              {post.excerpt}
            </p>

            <Link
              href={`/blog/${post.slug}`}
              className="mt-auto inline-flex items-center gap-1.5 text-brand-700 text-sm font-semibold hover:gap-2.5 transition-all"
            >
              Read more <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </MotionElement>
      ))}
    </div>
  )
}
