import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowRight, Box, CreditCard, Layout } from "lucide-react"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col">
      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center space-y-10 py-24 px-4 text-center md:py-32 bg-primary/5">
        <h1 className="text-4xl font-extrabold tracking-tight sm:text-6xl max-w-4xl">
          Build faster with <span className="text-primary">DesignEase</span>
        </h1>
        <p className="max-w-2xl text-lg text-muted-foreground sm:text-xl">
          The ultimate collection of production-ready SaaS templates, UI kits, and components. 
          Stop reinventing the wheel.
        </p>
        <div className="flex gap-4">
          <Link href="/templates">
            <Button size="lg" className="gap-2">
              Browse Templates <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
          <Button variant="outline" size="lg">
            View Documentation
          </Button>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto py-24 px-4">
        <div className="grid gap-8 md:grid-cols-3">
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Layout className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Production Ready</h3>
                <p className="text-muted-foreground">
                    Copy-paste layouts optimized for SEO, speed, and conversion.
                </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <Box className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">Modern Stack</h3>
                <p className="text-muted-foreground">
                    Built with Next.js 14, React Server Components, and Tailwind CSS.
                </p>
            </div>
            <div className="flex flex-col items-center text-center space-y-4 p-6 rounded-lg border bg-card">
                <div className="p-3 rounded-full bg-primary/10 text-primary">
                    <CreditCard className="h-6 w-6" />
                </div>
                <h3 className="text-xl font-bold">One-time Payment</h3>
                <p className="text-muted-foreground">
                    Own the code forever. No recurring monthly subscriptions.
                </p>
            </div>
        </div>
      </section>
    </main>
  )
}
