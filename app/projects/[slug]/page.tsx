import { notFound } from "next/navigation"
import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowLeft, ArrowRight } from "lucide-react"
import projects from "@/src/data/projects.json"

export function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }))
}

export default function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const projectIndex = projects.findIndex((p) => p.slug === params.slug)
  if (projectIndex === -1) notFound()

  const project = projects[projectIndex]
  const prevProject = projects[projectIndex - 1]
  const nextProject = projects[projectIndex + 1]

  return (
    <main>
      {/* Hero Banner */}
      <div className="relative h-[60vh] bg-brand-deep-orange">
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 to-transparent" />
        <div className="container mx-auto px-4 h-full flex items-center justify-center">
          <div className="text-center text-white space-y-4 max-w-4xl">
            <h1 className="font-script text-5xl md:text-7xl text-balance">{project.title}</h1>
            <div className="flex flex-wrap items-center justify-center gap-4 text-lg">
              <span>{project.role}</span>
              <span>•</span>
              <span>{project.year}</span>
              <span>•</span>
              <Badge variant="outline" className="border-white text-white">
                {project.category}
              </Badge>
            </div>
          </div>
        </div>
      </div>

      {/* Overview */}
      <SectionWrapper variant="cream" pad="lg">
        <div className="max-w-4xl mx-auto space-y-12">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Problem</h3>
              <p className="text-muted leading-relaxed">{project.overview.problem}</p>
            </div>
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Approach</h3>
              <p className="text-muted leading-relaxed">{project.overview.approach}</p>
            </div>
            <div>
              <h3 className="font-script text-2xl text-brand-deep-orange mb-3">Outcome</h3>
              <p className="text-muted leading-relaxed">{project.overview.outcome}</p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* Gallery */}
      <SectionWrapper variant="cream" pad="lg" className="pt-0">
        <div className="max-w-6xl mx-auto space-y-8">
          {project.gallery.map((image, index) => (
            <div
              key={index}
              className={index % 3 === 0 ? "w-full" : index % 3 === 1 ? "grid md:grid-cols-2 gap-8" : ""}
            >
              {index % 3 === 1 && index + 1 < project.gallery.length ? (
                <>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={image || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 1}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                  <div className="relative aspect-[4/3]">
                    <Image
                      src={project.gallery[index + 1] || "/placeholder.svg"}
                      alt={`${project.title} - Image ${index + 2}`}
                      fill
                      className="object-cover rounded-lg shadow-lg"
                    />
                  </div>
                </>
              ) : index % 3 === 0 ? (
                <div className="relative aspect-[16/9]">
                  <Image
                    src={image || "/placeholder.svg"}
                    alt={`${project.title} - Image ${index + 1}`}
                    fill
                    className="object-cover rounded-lg shadow-lg"
                  />
                </div>
              ) : null}
            </div>
          ))}
        </div>
      </SectionWrapper>

      {/* Credits */}
      {project.credits && (
        <SectionWrapper variant="orange" pad="md">
          <div className="max-w-4xl mx-auto">
            <h3 className="font-script text-3xl mb-6 text-center">Credits</h3>
            <ul className="space-y-2 text-center">
              {project.credits.map((credit, index) => (
                <li key={index} className="text-bg-cream/90">
                  {credit}
                </li>
              ))}
            </ul>
          </div>
        </SectionWrapper>
      )}

      {/* Next/Prev Navigation */}
      <div className="sticky bottom-0 bg-ink text-white py-4 border-t border-muted">
        <div className="container mx-auto px-4 flex justify-between items-center">
          {prevProject ? (
            <Button asChild variant="ghost" className="text-white hover:text-brand-deep-orange hover:bg-white/10">
              <Link href={`/projects/${prevProject.slug}`} className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" />
                <span className="hidden md:inline">{prevProject.title}</span>
                <span className="md:hidden">Previous</span>
              </Link>
            </Button>
          ) : (
            <div />
          )}
          {nextProject ? (
            <Button asChild variant="ghost" className="text-white hover:text-brand-deep-orange hover:bg-white/10">
              <Link href={`/projects/${nextProject.slug}`} className="flex items-center gap-2">
                <span className="hidden md:inline">{nextProject.title}</span>
                <span className="md:hidden">Next</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  )
}
