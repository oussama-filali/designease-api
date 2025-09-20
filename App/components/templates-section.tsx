"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Eye, Code, ExternalLink } from "lucide-react"
import { useEffect, useState } from "react"

interface Template {
  id: string
  name: string
  description: string
  category: string
  html?: string
  css?: string
  js?: string
}

const templates = [
  {
    id: 1,
    title: "Multi-Step Login Wizard",
    description: "Pure JavaScript authentication flow with step indicators and smooth transitions.",
    category: "Wizard",
    preview: "/login-wizard-interface.jpg",
    language: "JavaScript",
    tags: ["Wizard", "Auth", "Vanilla JS"],
  },
  {
    id: 2,
    title: "Interactive Dashboard",
    description: "Real-time dashboard with animated charts and responsive grid layout.",
    category: "Dashboard",
    preview: "/modern-dashboard.png",
    language: "JavaScript",
    tags: ["Charts", "Animation", "CSS Grid"],
  },
  {
    id: 3,
    title: "Form Builder Wizard",
    description: "Dynamic form creation tool with drag-and-drop and live preview.",
    category: "Wizard",
    preview: "/form-builder-interface.png",
    language: "JavaScript",
    tags: ["Forms", "Builder", "Wizard"],
  },
  {
    id: 4,
    title: "Onboarding Flow",
    description: "Guided user onboarding with progress tracking and micro-animations.",
    category: "Wizard",
    preview: "/onboarding-flow-interface.jpg",
    language: "JavaScript",
    tags: ["Onboarding", "Progress", "UX"],
  },
  {
    id: 5,
    title: "Payment Wizard",
    description: "Multi-step checkout process with validation and payment integration.",
    category: "Wizard",
    preview: "/payment-checkout-interface.png",
    language: "JavaScript",
    tags: ["Payment", "Checkout", "Wizard"],
  },
  {
    id: 6,
    title: "File Upload Manager",
    description: "Advanced file upload with progress tracking and preview functionality.",
    category: "Upload",
    preview: "/file-upload-interface.jpg",
    language: "JavaScript",
    tags: ["Upload", "Progress", "Files"],
  },
]

export function TemplatesSection() {
  const [mounted, setMounted] = useState(false)
  const [selectedCategory, setSelectedCategory] = useState("All")

  const categories = ["All", "Wizard", "Dashboard", "Upload"]

  useEffect(() => {
    setMounted(true)
  }, [])

  const filteredTemplates =
    selectedCategory === "All" ? templates : templates.filter((template) => template.category === selectedCategory)

  return (
    <section id="templates" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Find your Template</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            Jumpstart your app development process with pre-built JavaScript solutions featuring interactive wizards and
            animations.
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "ghost"}
              size="sm"
              onClick={() => setSelectedCategory(category)}
              className={`transition-all duration-200 ${
                selectedCategory === category
                  ? "bg-foreground text-background hover:bg-foreground/90"
                  : "text-muted-foreground hover:text-foreground hover:bg-muted/50"
              }`}
            >
              {category}
            </Button>
          ))}
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTemplates.map((template, index) => (
            <Card
              key={template.id}
              className={`overflow-hidden bg-card/20 border-border/40 hover:bg-card/40 hover:border-border/60 transition-all duration-300 group ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <div className="relative overflow-hidden">
                <img
                  src={template.preview || "/placeholder.svg"}
                  alt={template.title}
                  className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <div className="flex gap-2">
                    <Button size="sm" variant="secondary">
                      <Eye className="w-4 h-4 mr-2" />
                      Preview
                    </Button>
                    <Button size="sm" className="bg-foreground text-background hover:bg-foreground/90">
                      <Code className="w-4 h-4 mr-2" />
                      Get Code
                    </Button>
                  </div>
                </div>
              </div>

              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <Badge variant="secondary" className="bg-muted/50 text-foreground">
                    {template.language}
                  </Badge>
                  <ExternalLink className="w-4 h-4 text-muted-foreground" />
                </div>

                <h3 className="text-xl font-semibold mb-2">{template.title}</h3>
                <p className="text-muted-foreground mb-4 text-pretty leading-relaxed">{template.description}</p>

                <div className="flex flex-wrap gap-1">
                  {template.tags.map((tag) => (
                    <Badge key={tag} variant="outline" className="text-xs border-border/40">
                      {tag}
                    </Badge>
                  ))}
                </div>
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 bg-transparent">
            View All Templates
          </Button>
        </div>
      </div>
    </section>
  )
}
