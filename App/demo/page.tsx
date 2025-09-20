"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Play, Eye } from "lucide-react"

const demoTemplates = [
  {
    id: "wizard-login",
    name: "Animated Login Wizard",
    description: "Multi-step authentication with smooth transitions",
  },
  {
    id: "interactive-dashboard",
    name: "Interactive Dashboard",
    description: "Real-time data visualization with animated charts",
  },
]

export default function DemoPage() {
  const [selectedTemplate, setSelectedTemplate] = useState("")
  const [templateCode, setTemplateCode] = useState<any>(null)
  const [loading, setLoading] = useState(false)

  const fetchTemplate = async (templateId: string) => {
    setLoading(true)
    try {
      const response = await fetch(`/api/templates?id=${templateId}`, {
        headers: {
          Authorization: "Bearer demo-api-key-12345",
        },
      })
      const data = await response.json()
      setTemplateCode(data.template)
      setSelectedTemplate(templateId)
    } catch (error) {
      console.error("Error fetching template:", error)
    }
    setLoading(false)
  }

  const renderTemplate = () => {
    if (!templateCode) return null

    return (
      <div className="mt-8">
        <div className="flex gap-4 mb-4">
          <Button
            variant="outline"
            onClick={() => {
              const newWindow = window.open("", "_blank")
              if (newWindow) {
                newWindow.document.write(`
                  <!DOCTYPE html>
                  <html>
                    <head>
                      <style>${templateCode.css}</style>
                    </head>
                    <body>
                      ${templateCode.html}
                      <script>${templateCode.js}</script>
                    </body>
                  </html>
                `)
              }
            }}
          >
            <Eye className="w-4 h-4 mr-2" />
            Preview in New Window
          </Button>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          <Card className="p-4">
            <h3 className="font-semibold mb-2">HTML</h3>
            <pre className="text-xs overflow-auto max-h-40 bg-muted p-2 rounded">
              <code>{templateCode.html}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-2">CSS</h3>
            <pre className="text-xs overflow-auto max-h-40 bg-muted p-2 rounded">
              <code>{templateCode.css}</code>
            </pre>
          </Card>

          <Card className="p-4">
            <h3 className="font-semibold mb-2">JavaScript</h3>
            <pre className="text-xs overflow-auto max-h-40 bg-muted p-2 rounded">
              <code>{templateCode.js}</code>
            </pre>
          </Card>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background pt-20 px-4">
      <div className="container mx-auto py-12">
        <div className="text-center mb-12">
          <Badge className="mb-4">Live Demo</Badge>
          <h1 className="text-4xl font-bold mb-4">Try DesignEase API</h1>
          <p className="text-xl text-muted-foreground">Test our interactive templates with real JavaScript code</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          {demoTemplates.map((template) => (
            <Card key={template.id} className="p-6">
              <h3 className="text-xl font-semibold mb-2">{template.name}</h3>
              <p className="text-muted-foreground mb-4">{template.description}</p>
              <Button onClick={() => fetchTemplate(template.id)} disabled={loading} className="w-full">
                <Play className="w-4 h-4 mr-2" />
                {loading && selectedTemplate === template.id ? "Loading..." : "Load Template"}
              </Button>
            </Card>
          ))}
        </div>

        {renderTemplate()}
      </div>
    </div>
  )
}
