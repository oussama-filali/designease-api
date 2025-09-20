"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Play } from "lucide-react"
import { useEffect, useState } from "react"

export function HeroSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="pt-32 pb-20 px-4">
      <div className="container mx-auto text-center max-w-5xl">
        <div
          className={`transition-all duration-1000 ${mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          <div className="inline-flex items-center px-3 py-1 rounded-full bg-muted/50 border border-border/50 mb-8 text-sm">
            <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
            Interactive Wizards & Animations Available
          </div>

          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-balance leading-tight">
            The complete platform to build <span className="text-muted-foreground">exceptional UI</span>
          </h1>

          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
            Access premium JavaScript templates with interactive wizards and animations. Build faster with our powerful
            API designed for developers.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-16">
            <Button size="lg" className="bg-foreground text-background hover:bg-foreground/90 px-8">
              Get API Access
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
            <Button size="lg" variant="outline" className="border-border/50 hover:bg-muted/50 px-8 bg-transparent">
              <Play className="w-4 h-4 mr-2" />
              View Demo
            </Button>
          </div>

          <div className="text-center">
            <p className="text-sm text-muted-foreground mb-6">Trusted by developers at</p>
            <div className="flex items-center justify-center gap-8 opacity-60">
              <div className="text-lg font-semibold">Netflix</div>
              <div className="text-lg font-semibold">Spotify</div>
              <div className="text-lg font-semibold">Airbnb</div>
              <div className="text-lg font-semibold">Uber</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
