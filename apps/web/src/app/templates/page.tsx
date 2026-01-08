import { TemplateCard } from "@/components/template-card"
import { getTemplates } from "@/lib/api"

export default async function TemplatesPage() {
  const templates = await getTemplates()

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="mb-10 text-center">
        <h1 className="text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Premium UI Templates
        </h1>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Production-ready templates to jumpstart your next project. 
          Built with Modern Web Technologies.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {templates.map((template) => (
          <TemplateCard key={template.id} template={{
              id: template.id,
              title: template.title,
              slug: template.slug,
              description: template.description,
              category: template.category?.name || "Uncategorized",
              price: template.isFree ? "Free" : `$${template.price}`,
              image: template.thumbnailUrl,
              tags: template.technologies
          }} />
        ))}
      </div>
    </div>
  )
}
