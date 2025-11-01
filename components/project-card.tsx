import Image from "next/image"
import Link from "next/link"
import { Badge } from "@/components/ui/badge"

interface ProjectCardProps {
  slug: string
  title: string
  category: string
  cover: string
}

export default function ProjectCard({ slug, title, category, cover }: ProjectCardProps) {
  return (
    <Link href={`/projects/${slug}`} className="group block">
      <div className="polaroid-frame">
        <div className="relative aspect-[4/3] overflow-hidden bg-muted">
          <Image
            src={cover || "/placeholder.svg"}
            alt={title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-brand-deep-orange/90 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
            <span className="text-white font-medium text-lg">View Case Study</span>
          </div>
        </div>
        <div className="mt-4 space-y-2">
          <h3 className="font-script text-2xl text-ink">{title}</h3>
          <Badge variant="outline" className="border-brand-deep-orange text-brand-deep-orange">
            {category}
          </Badge>
        </div>
      </div>
    </Link>
  )
}
