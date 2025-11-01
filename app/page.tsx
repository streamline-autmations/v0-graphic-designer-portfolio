import HeroCarousel from "@/components/hero-carousel"
import SectionWrapper from "@/components/section-wrapper"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import Image from "next/image"
import { Palette, BookOpen, Video, Sparkles } from "lucide-react"
import projects from "@/src/data/projects.json"

export default function HomePage() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main>
      <HeroCarousel />

      {/* Intro Block */}
      <SectionWrapper variant="cream" pad="lg">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h2 className="font-script text-5xl md:text-6xl text-brand-deep-orange text-balance">
              Design that tells your story
            </h2>
            <p className="text-lg leading-relaxed text-muted">
              I'm a graphic designer passionate about creating visual identities that resonate. From bold brand systems
              to elegant editorial layouts, I craft designs that don't just look beautiful—they communicate, connect,
              and convert.
            </p>
            <Button asChild size="lg" className="bg-brand-deep-orange hover:bg-brand-warm-red text-white">
              <Link href="/projects">See My Work</Link>
            </Button>
          </div>
          <div className="relative aspect-[3/4] max-w-md mx-auto">
            <Image
              src="/graphic-designer-portrait-professional.jpg"
              alt="Ameli van Zyl"
              fill
              className="object-cover rounded-lg shadow-2xl"
            />
          </div>
        </div>
      </SectionWrapper>

      {/* Selected Projects */}
      <SectionWrapper variant="orange" pad="lg">
        <div className="space-y-12">
          <div className="text-center">
            <h2 className="font-script text-5xl md:text-6xl mb-4 text-balance">Selected Projects</h2>
            <p className="text-lg text-bg-cream/90">A curated collection of my recent work</p>
          </div>
          <div className="grid md:grid-cols-3 gap-8">
            {featuredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                cover={project.cover}
              />
            ))}
          </div>
          <div className="text-center">
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-white text-white hover:bg-white hover:text-brand-deep-orange bg-transparent"
            >
              <Link href="/projects">View All Projects</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>

      {/* Capabilities */}
      <SectionWrapper variant="cream" pad="lg">
        <div className="space-y-12">
          <h2 className="font-script text-5xl md:text-6xl text-center text-brand-deep-orange text-balance">
            What I Do
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange group-hover:scale-110 transition-all duration-300">
                <Palette className="w-10 h-10 text-brand-deep-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-script text-2xl text-ink">Brand Identity</h3>
              <p className="text-muted leading-relaxed">
                Crafting memorable visual systems that capture your brand's essence and resonate with your audience.
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange group-hover:scale-110 transition-all duration-300">
                <BookOpen className="w-10 h-10 text-brand-deep-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-script text-2xl text-ink">Editorial & Print</h3>
              <p className="text-muted leading-relaxed">
                Designing layouts that balance typography, imagery, and white space for compelling storytelling.
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange group-hover:scale-110 transition-all duration-300">
                <Video className="w-10 h-10 text-brand-deep-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-script text-2xl text-ink">Motion & Video</h3>
              <p className="text-muted leading-relaxed">
                Bringing brands to life through dynamic motion graphics and engaging video content.
              </p>
            </div>
            <div className="text-center space-y-4 group">
              <div className="w-20 h-20 mx-auto bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange group-hover:scale-110 transition-all duration-300">
                <Sparkles className="w-10 h-10 text-brand-deep-orange group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-script text-2xl text-ink">Illustration</h3>
              <p className="text-muted leading-relaxed">
                Creating custom illustrations that add personality and uniqueness to every project.
              </p>
            </div>
          </div>
        </div>
      </SectionWrapper>

      {/* CTA Band */}
      <SectionWrapper variant="orange" pad="md">
        <div className="text-center space-y-8">
          <h2 className="font-script text-5xl md:text-7xl text-balance">Let's create something memorable.</h2>
          <Button
            asChild
            size="lg"
            className="bg-white text-brand-deep-orange hover:bg-bg-cream font-medium px-8 py-6 text-lg"
          >
            <Link href="/contact">Get In Touch</Link>
          </Button>
        </div>
      </SectionWrapper>
    </main>
  )
}
