"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight, Phone } from "lucide-react"

export function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact")
    if (element) {
      element.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-primary/5 to-secondary/10">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero-hospital.png"
          alt="Ayurvedic healing center"
          className="w-full h-full object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-background/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-balance mb-6">
            Natural Healing, <span className="text-primary">Ancient Wisdom</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground text-pretty mb-8 max-w-2xl mx-auto leading-relaxed">
            Experience the time-tested healing power of Ayurveda with personalized treatments, natural remedies, and
            holistic wellness approaches that restore balance to your mind, body, and spirit.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="text-lg px-8 py-6 group" onClick={scrollToContact}>
              Book Consultation
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>

            <Button variant="outline" size="lg" className="text-lg px-8 py-6 bg-transparent">
              <Phone className="mr-2 h-5 w-5" />
              Call: (555) 123-4567
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16 pt-8 border-t border-border">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">30+</div>
              <div className="text-sm text-muted-foreground">Years of Practice</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">15+</div>
              <div className="text-sm text-muted-foreground">Ayurvedic Doctors</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">10K+</div>
              <div className="text-sm text-muted-foreground">Healed Patients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">100%</div>
              <div className="text-sm text-muted-foreground">Natural Treatments</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
