"use client"

import { useEffect, useState } from "react"

const stats = [
  { value: "20 days", label: "saved", subtext: "on daily builds." },
  { value: "98%", label: "faster", subtext: "time to market." },
  { value: "300%", label: "increase", subtext: "in developer productivity." },
  { value: "6x", label: "faster", subtext: "to build + deploy." },
]

const companies = ["Netflix", "TripAdvisor", "Box", "eBay"]

export function StatsSection() {
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  return (
    <section className="py-20 px-4 border-t border-border/40">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className={`p-8 border border-border/40 rounded-lg bg-card/20 transition-all duration-700 hover:bg-card/40 ${
                mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
              } delay-[${index * 100}ms]`}
            >
              <div className="text-3xl md:text-4xl font-bold mb-2 text-foreground">{stat.value}</div>
              <div className="text-foreground font-medium mb-1">{stat.label}</div>
              <div className="text-sm text-muted-foreground">{stat.subtext}</div>

              <div className="mt-6 pt-6 border-t border-border/20">
                <div className="text-lg font-semibold text-muted-foreground">{companies[index]}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
