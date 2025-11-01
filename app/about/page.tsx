import Image from "next/image"
import Link from "next/link"
import SectionWrapper from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"

export default function AboutPage() {
  const skills = ["Photoshop", "Illustrator", "InDesign", "Premiere Pro", "After Effects", "Figma"]
  const interests = ["Typography", "Film Photography", "Art Exhibitions", "Vintage Design", "Travel"]

  return (
    <main>
      <SectionWrapper variant="cream" pad="lg">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-start mb-20">
            <div className="relative aspect-[3/4] max-w-md mx-auto">
              <Image
                src="/graphic-designer-portrait-creative-professional.jpg"
                alt="Ameli van Zyl"
                fill
                className="object-cover rounded-lg shadow-2xl"
              />
            </div>
            <div className="space-y-6">
              <h1 className="font-script text-5xl md:text-6xl text-brand-deep-orange text-balance">About Me</h1>
              <div className="space-y-4 text-lg leading-relaxed text-muted">
                <p>
                  I'm Ameli van Zyl, a graphic designer based in South Africa with a passion for creating visual
                  identities that tell compelling stories. My work spans brand identity, editorial design, motion
                  graphics, and illustration.
                </p>
                <p>
                  I believe great design is more than aesthetics—it's about solving problems, communicating ideas, and
                  creating emotional connections. Whether I'm crafting a brand system from scratch or designing an
                  editorial spread, I approach every project with curiosity and attention to detail.
                </p>
                <p>
                  Currently pursuing my BA in Graphic Design at EDUVOS, I'm constantly learning and pushing the
                  boundaries of what's possible in visual communication.
                </p>
              </div>
            </div>
          </div>

          {/* Experience */}
          <div className="space-y-8 mb-20">
            <h2 className="font-script text-4xl text-brand-deep-orange">Experience</h2>
            <div className="space-y-6">
              <div className="border-l-4 border-brand-deep-orange pl-6 py-2">
                <h3 className="font-script text-2xl text-ink mb-1">Lead Designer</h3>
                <p className="text-brand-deep-orange font-medium mb-2">Jimmy's Burger Bar • 2024–Present</p>
                <p className="text-muted leading-relaxed">
                  Developing comprehensive brand identity including logo design, packaging, social media content, and
                  in-store graphics. Created motion graphics for digital campaigns that increased engagement by 65%.
                </p>
              </div>
              <div className="border-l-4 border-brand-deep-orange pl-6 py-2">
                <h3 className="font-script text-2xl text-ink mb-1">Brand Designer</h3>
                <p className="text-brand-deep-orange font-medium mb-2">JJ Glassworks • 2025–Present</p>
                <p className="text-muted leading-relaxed">
                  Leading brand refresh project to modernize visual identity while maintaining artisan heritage.
                  Directing photography and creating brand guidelines for consistent application across all touchpoints.
                </p>
              </div>
            </div>
          </div>

          {/* Skills */}
          <div className="space-y-8 mb-20">
            <h2 className="font-script text-4xl text-brand-deep-orange">Software & Skills</h2>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill) => (
                <Badge
                  key={skill}
                  variant="outline"
                  className="border-2 border-brand-deep-orange text-brand-deep-orange px-4 py-2 text-base"
                >
                  {skill}
                </Badge>
              ))}
            </div>
          </div>

          {/* Education */}
          <div className="space-y-8 mb-20">
            <h2 className="font-script text-4xl text-brand-deep-orange">Education</h2>
            <div className="border-l-4 border-brand-deep-orange pl-6 py-2">
              <h3 className="font-script text-2xl text-ink mb-1">BA Graphic Design</h3>
              <p className="text-brand-deep-orange font-medium mb-2">EDUVOS • 2023–Present</p>
              <p className="text-muted leading-relaxed">
                Comprehensive design education covering typography, branding, editorial design, digital media, and
                design theory. Focus on conceptual thinking and professional practice.
              </p>
            </div>
          </div>

          {/* Interests */}
          <div className="space-y-8 mb-12">
            <h2 className="font-script text-4xl text-brand-deep-orange">Beyond Design</h2>
            <p className="text-lg text-muted leading-relaxed">
              When I'm not designing, you'll find me exploring vintage markets for typographic inspiration, shooting
              film photography, or visiting art exhibitions. I'm fascinated by the intersection of analog and digital
              design, and I love discovering how historical design movements influence contemporary work.
            </p>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <Badge
                  key={interest}
                  className="bg-brand-deep-orange/10 text-brand-deep-orange px-4 py-2 text-base hover:bg-brand-deep-orange hover:text-white transition-colors"
                >
                  {interest}
                </Badge>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="text-center py-12 border-t border-border">
            <h3 className="font-script text-3xl text-brand-deep-orange mb-6">Let's work together</h3>
            <Button asChild size="lg" className="bg-brand-deep-orange hover:bg-brand-warm-red text-white">
              <Link href="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
