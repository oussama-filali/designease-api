"use client"

import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Copy, Check, Terminal, Key } from "lucide-react"
import { useState, useEffect } from "react"

const codeExample = `// Get a template with animations
fetch('https://api.designease.dev/v1/templates/wizard-login', {
  headers: {
    'Authorization': 'Bearer YOUR_API_KEY',
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  // Pure JavaScript template with animations
  const { html, css, js } = data.template;
  
  // Inject into your app
  document.body.innerHTML = html;
  document.head.appendChild(createStyleSheet(css));
  eval(js); // Execute interactive behaviors
});`

export function ApiSection() {
  const [copied, setCopied] = useState(false)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)
  }, [])

  const copyCode = () => {
    navigator.clipboard.writeText(codeExample)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="api" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
          >
            <Badge className="mb-4">
              <Terminal className="w-4 h-4 mr-2" />
              Developer API
            </Badge>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Make teamwork seamless. <span className="gradient-text">Tools for your team</span> and stakeholders to
              share feedback and iterate faster.
            </h2>

            <p className="text-xl text-muted-foreground mb-8 text-pretty">
              The platform for rapid progress. Let your team focus on shipping features instead of managing design
              systems with automated CI/CD, built-in testing, and integrated collaboration.
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>RESTful API with comprehensive documentation</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>Rate limiting: 1000 requests/hour on free tier</span>
              </div>
              <div className="flex items-center">
                <div className="w-2 h-2 bg-emerald-400 rounded-full mr-3"></div>
                <span>Real-time template updates and versioning</span>
              </div>
            </div>

            <Button size="lg" className="glow-effect">
              <Key className="w-5 h-5 mr-2" />
              Get Your API Key
            </Button>
          </div>

          <div
            className={`transition-all duration-700 ${mounted ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
          >
            <Card className="code-block p-6 relative">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <Button
                  size="sm"
                  variant="ghost"
                  onClick={copyCode}
                  className="text-muted-foreground hover:text-foreground"
                >
                  {copied ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                </Button>
              </div>

              <pre className="text-sm overflow-x-auto">
                <code className="text-muted-foreground">{codeExample}</code>
              </pre>
            </Card>

            {/* Interactive Demo */}
            <div className="mt-6 p-4 bg-secondary/30 rounded-lg border border-border">
              <div className="flex items-center justify-between mb-2">
                <span className="text-sm font-medium">Live API Status</span>
                <div className="flex items-center">
                  <div className="w-2 h-2 bg-emerald-400 rounded-full mr-2 pulse-glow"></div>
                  <span className="text-sm text-emerald-400">Online</span>
                </div>
              </div>
              <div className="text-xs text-muted-foreground">Response time: 4ms • Uptime: 99.9%</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
