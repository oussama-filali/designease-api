import Link from "next/link"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Eye, Download } from "lucide-react"

export interface Template {
  id: string
  title: string
  slug: string
  description: string
  category: string
  price: string
  image: string
  tags: string[]
}

interface TemplateCardProps {
  template: Template
}

export function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden transition-all hover:shadow-md group">
      <div className="aspect-video w-full bg-muted overflow-hidden relative">
          <img 
            src={template.image} 
            alt={template.title} 
            className="w-full h-full object-cover transition-transform group-hover:scale-105"
          />
      </div>
      <CardHeader>
        <div className="flex items-center justify-between">
            <Badge variant="outline">{template.category}</Badge>
            <span className="font-bold text-lg">{template.price}</span>
        </div>
        <CardTitle className="mt-2 text-xl">
            <Link href={`/templates/${template.slug}`} className="hover:underline">
                {template.title}
            </Link>
        </CardTitle>
        <CardDescription className="line-clamp-2">
          {template.description.replace(/###/g, '').replace(/\*\*/g, '')}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex-1">
        <div className="flex flex-wrap gap-2">
          {template.tags.slice(0, 3).map((tag) => (
            <Badge key={tag} variant="secondary" className="text-xs">
              {tag}
            </Badge>
          ))}
          {template.tags.length > 3 && (
              <Badge variant="secondary" className="text-xs">+{template.tags.length - 3}</Badge>
          )}
        </div>
      </CardContent>
      <CardFooter>
        <Button asChild className="w-full">
            <Link href={`/templates/${template.slug}`}>
                <Eye className="mr-2 h-4 w-4" /> View Details
            </Link>
        </Button>
      </CardFooter>
    </Card>
  )
}
