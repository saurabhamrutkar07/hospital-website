"use client"

import { Button } from "@/components/ui/button"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    comment:
      "The Panchakarma treatment completely transformed my health. I feel more energetic and balanced than I have in years. The doctors truly understand the ancient art of healing.",
    treatment: "Panchakarma Detox",
  },
  {
    name: "James Mitchell",
    rating: 5,
    comment:
      "After struggling with chronic stress, the combination of herbal medicine and meditation therapy has given me a new lease on life. The holistic approach really works.",
    treatment: "Stress Management",
  },
  {
    name: "Anita Patel",
    rating: 5,
    comment:
      "The Abhyanga massage therapy helped relieve my joint pain naturally. The therapists are skilled and the herbal oils they use are of the highest quality.",
    treatment: "Abhyanga Therapy",
  },
  {
    name: "Robert Kim",
    rating: 5,
    comment:
      "The pulse diagnosis was incredibly accurate. The doctor identified issues I didn't even know I had and created a personalized treatment plan that has improved my overall health.",
    treatment: "Pulse Diagnosis",
  },
  {
    name: "Maya Gupta",
    rating: 5,
    comment:
      "The lifestyle counseling and dietary recommendations have completely changed how I approach wellness. I now understand my body's needs and how to maintain balance naturally.",
    treatment: "Lifestyle Counseling",
  },
  {
    name: "Thomas Anderson",
    rating: 5,
    comment:
      "The herbal medicines prescribed for my digestive issues worked better than anything I'd tried before. The natural approach to healing is truly remarkable.",
    treatment: "Digestive Health",
  },
]

export function TestimonialsSection() {
  return (
    <section id="testimonials" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Healing Stories from Our Patients</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Discover how our authentic Ayurvedic treatments have transformed lives and restored natural balance for
            thousands of patients on their wellness journey.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow duration-300">
              <CardContent className="p-6 h-full flex flex-col">
                <div className="flex items-center mb-4">
                  <div className="flex space-x-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>

                <div className="flex-1">
                  <Quote className="h-8 w-8 text-primary/20 mb-3" />
                  <p className="text-muted-foreground leading-relaxed mb-4">"{testimonial.comment}"</p>
                </div>

                <div className="border-t border-border pt-4">
                  <div className="font-semibold text-foreground">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.treatment}</div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">Ready to begin your natural healing journey?</p>
          <Button
            size="lg"
            onClick={() => {
              const element = document.getElementById("contact")
              if (element) {
                element.scrollIntoView({ behavior: "smooth" })
              }
            }}
          >
            Book Your Consultation
          </Button>
        </div>
      </div>
    </section>
  )
}
