"use client"

import type React from "react"

import { useState } from "react"
import SectionWrapper from "@/components/section-wrapper"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Linkedin } from "lucide-react"

export default function ContactPage() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success">("idle")

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setFormState("submitting")

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1500))
    setFormState("success")

    // Reset after 3 seconds
    setTimeout(() => setFormState("idle"), 3000)
  }

  return (
    <main>
      <SectionWrapper variant="cream" pad="lg">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h1 className="font-script text-5xl md:text-7xl text-brand-deep-orange mb-6 text-balance">
              Let's work together
            </h1>
            <p className="text-xl text-muted leading-relaxed max-w-2xl mx-auto">
              Have a project in mind? I'd love to hear about it. Fill out the form below or reach out directly via email
              or LinkedIn.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    required
                    placeholder="Your name"
                    className="border-brand-deep-orange/30 focus:border-brand-deep-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="your.email@example.com"
                    className="border-brand-deep-orange/30 focus:border-brand-deep-orange"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="message">Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    required
                    placeholder="Tell me about your project..."
                    rows={6}
                    className="border-brand-deep-orange/30 focus:border-brand-deep-orange resize-none"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  disabled={formState !== "idle"}
                  className="w-full bg-brand-deep-orange hover:bg-brand-warm-red text-white"
                >
                  {formState === "idle" && "Send Message"}
                  {formState === "submitting" && "Sending..."}
                  {formState === "success" && "✓ Message Sent!"}
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <h3 className="font-script text-3xl text-brand-deep-orange mb-6">Get in touch</h3>
                <p className="text-muted leading-relaxed mb-8">
                  I'm always open to discussing new projects, creative ideas, or opportunities to be part of your
                  vision. Whether you need a complete brand identity or help with a specific design challenge, let's
                  talk.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:hello@amelivanzyl.com"
                  className="flex items-center gap-3 text-ink hover:text-brand-deep-orange transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange transition-colors">
                    <Mail className="w-5 h-5 text-brand-deep-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">Email</p>
                    <p className="font-medium">hello@amelivanzyl.com</p>
                  </div>
                </a>

                <a
                  href="https://linkedin.com/in/amelivanzyl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-ink hover:text-brand-deep-orange transition-colors group"
                >
                  <div className="w-12 h-12 bg-brand-deep-orange/10 rounded-full flex items-center justify-center group-hover:bg-brand-deep-orange transition-colors">
                    <Linkedin className="w-5 h-5 text-brand-deep-orange group-hover:text-white transition-colors" />
                  </div>
                  <div>
                    <p className="text-sm text-muted">LinkedIn</p>
                    <p className="font-medium">linkedin.com/in/amelivanzyl</p>
                  </div>
                </a>
              </div>

              <div className="pt-8 border-t border-border">
                <h4 className="font-script text-2xl text-brand-deep-orange mb-4">Response Time</h4>
                <p className="text-muted leading-relaxed">
                  I typically respond to inquiries within 24-48 hours. For urgent projects, please mention that in your
                  message.
                </p>
              </div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </main>
  )
}
