import { getTemplate } from '@/lib/api';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { TemplateAccessControl } from '@/components/template-access-control';
import { Mail, ShieldCheck, Zap } from 'lucide-react';

export default async function TemplateDetailPage(props: { params: Promise<{ slug: string }> }) {
  const params = await props.params;
  const template = await getTemplate(params.slug);

  if (!template) {
    notFound();
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link href="/templates" className="text-muted-foreground hover:text-foreground mb-4 inline-block">
        ← Back to Templates
      </Link>
      
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Left Column: Image & Tech (Span 2) */}
        <div className="lg:col-span-2">
          <div className="rounded-xl overflow-hidden border bg-card text-card-foreground shadow-sm mb-8 aspect-video relative">
             <img 
               src={template.thumbnailUrl} 
               alt={template.title}
               className="object-cover w-full h-full"
             />
          </div>

          <div className="prose dark:prose-invert max-w-none mb-12">
             <h2 className="text-3xl font-bold mb-6">Documentation & Overview</h2>
             
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8 not-prose">
                <div className="p-6 bg-blue-50 dark:bg-blue-950/20 rounded-xl">
                   <Zap className="h-8 w-8 text-blue-600 mb-2" />
                   <h3 className="font-semibold text-lg mb-2">Save 50+ Hours</h3>
                   <p className="text-sm text-muted-foreground">Skip the groundwork. This template comes with pre-configured routing, animations, and responsive layouts so you can focus on content.</p>
                </div>
                <div className="p-6 bg-purple-50 dark:bg-purple-950/20 rounded-xl">
                   <ShieldCheck className="h-8 w-8 text-purple-600 mb-2" />
                   <h3 className="font-semibold text-lg mb-2">Production Ready</h3>
                   <p className="text-sm text-muted-foreground">Type-safe code, SEO optimized structure, and best practices for performance out of the box.</p>
                </div>
             </div>

             <div dangerouslySetInnerHTML={{ __html: template.description.replace(/\n/g, '<br/>') }} />
             
             <div className="mt-12 pt-8 border-t">
               <h3 className="text-2xl font-bold mb-4">Need Customization?</h3>
               <p className="mb-4">
                 We offer professional customization services to adapt this template to your specific brand identity.
               </p>
               <div className="flex flex-col sm:flex-row gap-4 p-6 bg-muted rounded-xl items-center">
                  <div className="flex-1">
                      <h4 className="font-semibold text-lg flex items-center gap-2">
                        <Mail className="h-5 w-5" /> Contact Support / Sales
                      </h4>
                      <p className="text-sm text-muted-foreground">For enterprise licenses or custom implementation questions.</p>
                  </div>
                  <Button variant="secondary" asChild>
                    <a href="mailto:contact@designease.com">Contact Us</a>
                  </Button>
               </div>
             </div>
          </div>
        </div>

        {/* Right Column: Actions & Access Control (Sticky) */}
        <div className="space-y-8">
           <div className="sticky top-24">
              <div className="mb-6">
                {template.category && <Badge variant="outline" className="mb-2">{template.category.name}</Badge>}
                <h1 className="text-3xl font-bold tracking-tight mb-2">{template.title}</h1>
                <p className="text-2xl font-bold text-primary">
                    {template.isFree ? 'Free' : `$${template.price}`}
                </p>
              </div>

              {/* ACTION COMPONENT */}
              <TemplateAccessControl 
                 fileUrl={template.fileUrl} 
                 previewUrl={template.previewUrl || ''} 
                 isFree={template.isFree} 
              />
              
              <div className="mt-8 space-y-4">
                <h3 className="font-semibold text-sm uppercase tracking-wide text-muted-foreground">Tech Stack</h3>
                <div className="flex flex-wrap gap-2">
                  {template.technologies.map((tech) => (
                    <Badge key={tech} variant="secondary">{tech}</Badge>
                  ))}
                </div>
                
                <div className="p-4 bg-muted rounded-lg text-sm space-y-2 mt-4">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Framework</span>
                    <span className="font-medium">{template.technologies[0]}</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Styling</span>
                    <span className="font-medium">{template.technologies.includes('Tailwind') ? 'Tailwind CSS' : 'CSS Modules'}</span>
                  </div>
                   <div className="flex justify-between">
                    <span className="text-muted-foreground">Version</span>
                    <span className="font-medium">v1.0.0</span>
                  </div>
                </div>
              </div>

               {template.previewUrl && (
                  <Button asChild variant="outline" size="lg" className="w-full mt-4">
                    <a href={template.previewUrl} target="_blank" rel="noopener noreferrer">Live Preview</a>
                  </Button>
              )}
           </div>
        </div>
      </div>
    </div>
  );
}
