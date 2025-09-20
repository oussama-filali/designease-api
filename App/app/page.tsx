import { Header } from '../components/header'
import { HeroSection } from '../components/hero-section'
import { FeaturesSection } from '../components/features-section'
import { StatsSection } from '../components/stats-section'
import { TemplatesSection } from '../components/templates-section'
import { Footer } from '../components/footer'

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <HeroSection />
        <FeaturesSection />
        <StatsSection />
        <TemplatesSection />
      </main>
      <Footer />
    </>
  )
}