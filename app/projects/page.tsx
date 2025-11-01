"use client"

import { useState } from "react"
import SectionWrapper from "@/components/section-wrapper"
import ProjectCard from "@/components/project-card"
import { Button } from "@/components/ui/button"
import projects from "@/src/data/projects.json"

const categories = ["All", "Brand Identity", "Editorial & Print", "Motion & Video", "Brand Refresh"]

export default function ProjectsPage() {
  const [activeFilter, setActiveFilter] = useState("All")

  const filteredProjects =
    activeFilter === "All" ? projects : projects.filter((project) => project.category === activeFilter)

  return (
    <main>
      <SectionWrapper variant="cream" pad="md">
        <div className="text-center space-y-6">
          <h1 className="font-script text-5xl md:text-7xl text-brand-deep-orange text-balance">Projects</h1>
          <p className="text-lg text-muted max-w-2xl mx-auto">
            A collection of brand identities, editorial designs, and creative work that brings ideas to life.
          </p>
        </div>
      </SectionWrapper>

      <SectionWrapper variant="cream" pad="lg" className="pt-0">
        <div className="space-y-12">
          {/* Filters */}
          <div className="flex flex-wrap justify-center gap-3">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeFilter === category ? "default" : "outline"}
                onClick={() => setActiveFilter(category)}
                className={
                  activeFilter === category
                    ? "bg-brand-deep-orange hover:bg-brand-warm-red text-white"
                    : "border-brand-deep-orange text-brand-deep-orange hover:bg-brand-deep-orange hover:text-white"
                }
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Project Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((project) => (
              <ProjectCard
                key={project.slug}
                slug={project.slug}
                title={project.title}
                category={project.category}
                cover={project.cover}
              />
            ))}
          </div>

          {filteredProjects.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted text-lg">No projects found in this category.</p>
            </div>
          )}
        </div>
      </SectionWrapper>
    </main>
  )
}
