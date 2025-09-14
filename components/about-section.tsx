import { Card, CardContent } from "@/components/ui/card"
import { Leaf, Users, Sun, MapPin } from "lucide-react"

export function AboutSection() {
  return (
    <section id="about" className="py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-balance mb-6">About Ayur Wellness Center</h2>

            <div className="space-y-6 text-muted-foreground leading-relaxed">
              <p className="text-lg">
                For over 30 years, Ayur Wellness Center has been a sanctuary of natural healing and holistic wellness.
                We are dedicated to preserving and practicing authentic Ayurvedic medicine to restore balance and
                vitality to your life.
              </p>

              <p>
                Our mission is to provide personalized Ayurvedic treatments that address the root cause of illness, not
                just symptoms. Through ancient wisdom combined with modern understanding, we guide each patient on their
                unique journey to optimal health.
              </p>

              <p>
                We believe in treating the whole person - mind, body, and spirit - using natural therapies, herbal
                medicines, and lifestyle guidance that have been proven effective for thousands of years.
              </p>
            </div>

            {/* Values */}
            <div className="grid grid-cols-2 gap-4 mt-8">
              <div className="flex items-center space-x-3">
                <Leaf className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">Natural Healing</span>
              </div>
              <div className="flex items-center space-x-3">
                <Users className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">Holistic Approach</span>
              </div>
              <div className="flex items-center space-x-3">
                <Sun className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">Ancient Wisdom</span>
              </div>
              <div className="flex items-center space-x-3">
                <MapPin className="h-6 w-6 text-primary flex-shrink-0" />
                <span className="font-medium">Personalized Care</span>
              </div>
            </div>
          </div>

          {/* Contact Info & Image */}
          <div className="space-y-6">
            <div className="relative">
              <img
                src="/modern-hospital-interior-with-doctors-and-nurses-i.jpg"
                alt="Ayurvedic wellness center"
                className="w-full h-80 object-cover rounded-lg shadow-lg"
              />
            </div>

            <Card>
              <CardContent className="p-6">
                <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
                <div className="space-y-3 text-muted-foreground">
                  <div>
                    <strong className="text-foreground">Address:</strong>
                    <br />
                    456 Wellness Boulevard
                    <br />
                    Healing Gardens, CA 90210
                  </div>
                  <div>
                    <strong className="text-foreground">Phone:</strong>
                    <br />
                    Main: (555) 123-4567
                    <br />
                    Consultation: (555) 456-7890
                  </div>
                  <div>
                    <strong className="text-foreground">Email:</strong>
                    <br />
                    info@ayurwellness.com
                  </div>
                  <div>
                    <strong className="text-foreground">Hours:</strong>
                    <br />
                    Mon-Sat: 8AM-7PM
                    <br />
                    Sunday: 9AM-5PM
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  )
}
