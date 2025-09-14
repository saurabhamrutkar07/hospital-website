import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Leaf, Droplets, Flame, Wind, Mountain, Sun, Moon, Heart } from "lucide-react"

const services = [
  {
    icon: Leaf,
    title: "Panchakarma",
    description:
      "Complete detoxification and rejuvenation therapy using five traditional cleansing procedures to eliminate toxins.",
  },
  {
    icon: Droplets,
    title: "Abhyanga",
    description: "Therapeutic full-body oil massage using warm herbal oils to improve circulation and reduce stress.",
  },
  {
    icon: Flame,
    title: "Agni Therapy",
    description: "Digestive fire enhancement treatments to improve metabolism and overall digestive health.",
  },
  {
    icon: Wind,
    title: "Pranayama",
    description: "Breathing techniques and yoga therapy to balance the nervous system and enhance vitality.",
  },
  {
    icon: Mountain,
    title: "Herbal Medicine",
    description: "Customized herbal formulations using pure, organic ingredients for various health conditions.",
  },
  {
    icon: Sun,
    title: "Lifestyle Counseling",
    description: "Personalized guidance on diet, daily routines, and lifestyle changes based on your constitution.",
  },
  {
    icon: Moon,
    title: "Meditation Therapy",
    description: "Guided meditation and mindfulness practices to achieve mental clarity and emotional balance.",
  },
  {
    icon: Heart,
    title: "Pulse Diagnosis",
    description: "Traditional Ayurvedic diagnosis through pulse reading to understand your unique health patterns.",
  },
]

export function ServicesSection() {
  return (
    <section id="services" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Our Ayurvedic Treatments</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Discover authentic Ayurvedic therapies and treatments designed to restore your natural balance and promote
            lasting wellness through time-honored healing traditions.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {services.map((service, index) => {
            const IconComponent = service.icon
            return (
              <Card key={index} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
                <CardHeader className="text-center pb-4">
                  <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit group-hover:bg-primary/20 transition-colors">
                    <IconComponent className="h-8 w-8 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center leading-relaxed">{service.description}</CardDescription>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
