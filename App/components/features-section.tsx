"use client"

import { Card } from "@/components/ui/card"
import { Zap, Palette, Code, Wand2, Layers, Rocket } from "lucide-react"
import { useEffect, useState } from "react"

const features = [
  {
    icon: Zap,
    title: "Lightning Fast API",
    description: "Get design templates instantly with our optimized API endpoints. Sub-5ms response times guaranteed.",
    color: "text-yellow-400",
  },
  {
    icon: Palette,
    title: "Interactive Wizards",
    description: "Step-by-step guided interfaces with smooth animations and intuitive user flows.",
    color: "text-purple-400",
  },
  {
    icon: Code,
    title: "Pure JavaScript",
    description: "No framework dependencies. Clean, vanilla JavaScript code that works everywhere.",
    color: "text-blue-400",
  },
  {
    icon: Wand2,
    title: "Animated Components",
    description: "Beautiful CSS animations and micro-interactions that bring your UI to life.",
    color: "text-emerald-400",
  },
  {
    icon: Layers,
    title: "Modular Design",
    description: "Mix and match components to create unique designs tailored to your needs.",
    color: "text-orange-400",
  },
  {
    icon: Rocket,
    title: "Production Ready",
    description: "Battle-tested templates used by thousands of developers in production apps.",
    color: "text-red-400",
  },
]

export function FeaturesSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section id="features" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">Faster iteration. More innovation.</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto text-pretty">
            The platform for rapid progress. Let your team focus on shipping features instead of managing design systems
            with automated workflows and integrated collaboration.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Card
              key={index}
              className={`p-6 bg-card/50 border-border hover:bg-card/80 transition-all duration-500 glow-effect ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 100}ms` }}
            >
              <feature.icon className={`w-12 h-12 ${feature.color} mb-4`} />
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground text-pretty">{feature.description}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
