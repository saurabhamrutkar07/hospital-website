import { HeroSection } from "@/components/hero-section"
import { ServicesSection } from "@/components/services-section"
import { AboutSection } from "@/components/about-section"
import { ContactSection } from "@/components/contact-section"
import { TestimonialsSection } from "@/components/testimonials-section"
import { StickyNavigation } from "@/components/sticky-navigation"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <StickyNavigation />
      <HeroSection />
      <ServicesSection />
      <AboutSection />
      <ContactSection />
      <TestimonialsSection />
    </main>
  )
}
