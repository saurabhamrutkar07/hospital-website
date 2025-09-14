"use client"
import type React from "react"
import emailjs from "emailjs-com"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle, Send, AlertCircle } from "lucide-react"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY


const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
const phoneRegex = /^[6-9][0-9]{9,12}$/
const nameMessageRegex = /^[a-zA-Z0-9\s.,'-]+$/
const nameRegex = /^[A-Za-z\s]+$/

export function ContactSection() {
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const [validationErrors, setValidationErrors] = useState<{ [key: string]: string }>({})
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  })
  

  console.log('This is process env',process.env.NODE_ENV)

  const validateField = (name: string, value: string): string => {
    switch (name) {
      case "name":
        if (!value.trim()) return "Name is required"
        if (!nameRegex.test(value)) return "Name should only contain letters and spaces"
        return ""
      case "email":
        if (!value.trim()) return "Email is required"
        if (!emailRegex.test(value)) return "Please enter a valid email address"
        return ""
      case "phone":
        if (!value.trim()) return "Phone number is required"
        if (!phoneRegex.test(value)) return "Please enter a valid phone number (10-13 digits starting with 6-9)"
        return ""
      case "message":
        if (!value.trim()) return "Message is required"
        if (!nameMessageRegex.test(value)) return "Message contains invalid characters"
        return ""
      default:
        return ""
    }
  }

  const validateForm = (): boolean => {
    const errors: { [key: string]: string } = {}

    Object.keys(formData).forEach((key) => {
      const error = validateField(key, formData[key as keyof typeof formData])
      if (error) {
        errors[key] = error
      }
    })

    setValidationErrors(errors)
    return Object.keys(errors).length === 0
  }

  const handleSubmit = async (e: React.FormEvent) => {
    console.log("This is form data", formData)
    e.preventDefault()

    setError(null)

    if (!validateForm()) {
      return
    }

    setIsLoading(true)

    try {
      const response = await emailjs.send(
        serviceId,
        templateId,
        {
          title: "Contact-Form",
          name: formData.name,
          email: formData.email,
          phone: formData.phone,
          message: formData.message,
        },
        publicKey,
      )
      console.log("Email sent successfully", response)
      setIsSubmitted(true)
      // setFormData({ name: "", email: "", phone: "", message: "" })
    } catch (error) {
      console.log("Error in sending email: ", error)
      setError("Failed to send your message. Please try again or contact us directly.")
    } finally {
      setIsLoading(false)
    }

    // Reset form after 3 seconds
    setTimeout(() => {
      if (isSubmitted) {
        setIsSubmitted(false)
        setFormData({ name: "", email: "", phone: "", message: "" })
      }
    }, 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target

    if (error) {
      setError(null)
    }

    if (validationErrors[name]) {
      setValidationErrors((prev) => ({
        ...prev,
        [name]: "",
      }))
    }

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleBlur = (e: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    const error = validateField(name, value)

    setValidationErrors((prev) => ({
      ...prev,
      [name]: error,
    }))
  }

  return (
    <section id="contact" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance mb-4">Get in Touch</h2>
          <p className="text-lg text-muted-foreground text-pretty max-w-2xl mx-auto leading-relaxed">
            Have questions about our services or need to schedule an appointment? We're here to help and will respond to
            your inquiry promptly.
          </p>
        </div>

        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl text-center">Contact Us</CardTitle>
              <CardDescription className="text-center">
                Fill out the form below and we'll get back to you within 24 hours
              </CardDescription>
            </CardHeader>
            <CardContent>
              {isSubmitted ? (
                <div className="text-center py-8">
                  <CheckCircle className="h-16 w-16 text-primary mx-auto mb-4" />
                  <h3 className="text-xl font-semibold mb-2">Thank You!</h3>
                  <p className="text-muted-foreground">
                    Your message has been sent successfully. We'll contact you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  {error && (
                    <div className="flex items-center gap-2 p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
                      <AlertCircle className="h-4 w-4 flex-shrink-0" />
                      <span>{error}</span>
                    </div>
                  )}

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="Enter your full name"
                        required
                        disabled={isLoading}
                        className={validationErrors.name ? "border-red-500 focus:border-red-500" : ""}
                      />
                      {validationErrors.name && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {validationErrors.name}
                        </p>
                      )}
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        name="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        placeholder="9876543210"
                        required
                        disabled={isLoading}
                        className={validationErrors.phone ? "border-red-500 focus:border-red-500" : ""}
                      />
                      {validationErrors.phone && (
                        <p className="text-sm text-red-600 flex items-center gap-1">
                          <AlertCircle className="h-3 w-3" />
                          {validationErrors.phone}
                        </p>
                      )}
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="your.email@example.com"
                      required
                      disabled={isLoading}
                      className={validationErrors.email ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {validationErrors.email && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {validationErrors.email}
                      </p>
                    )}
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onBlur={handleBlur}
                      placeholder="Please describe how we can help you..."
                      rows={5}
                      required
                      disabled={isLoading}
                      className={validationErrors.message ? "border-red-500 focus:border-red-500" : ""}
                    />
                    {validationErrors.message && (
                      <p className="text-sm text-red-600 flex items-center gap-1">
                        <AlertCircle className="h-3 w-3" />
                        {validationErrors.message}
                      </p>
                    )}
                  </div>

                  <Button type="submit" className="w-full text-lg py-6" disabled={isLoading}>
                    <Send className="mr-2 h-5 w-5" />
                    {isLoading ? "Sending..." : "Send Message"}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
// adding comment for temp purpose 



