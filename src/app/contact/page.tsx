"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge, HeroBadge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight, Users } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formValues, setFormValues] = useState<Record<string, string>>({})
  const [text, setText] = useState("")
  const max = 255

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormValues(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleTextAreaChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value)
    handleChange(e)
  }

  const handleSelectChange = (id: string, value: string) => {
    setFormValues(prev => ({
      ...prev,
      [id]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)

    const baseUrl = "https://edgepulsar.com"
    const url = `${baseUrl}/actions/db_store.php`

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      })
      await response.json()
    } catch (error) {
      console.error("Error!", error)
    }

    setTimeout(() => setSubmitted(false), 50000)
  }

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-14 md:py-18 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-5">
						<HeroBadge variant="secondary">
							Contact Us
						</HeroBadge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Accelerate Your
              <span className="block text-primary mt-2">Chip-to-Edge Journey?</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
              Schedule a free discovery call with our technical experts to discuss your technical challenges,
              CRA compliance needs, or architecture questions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-3">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>We respond within 24 hours</span>
              </div>
              <span className="hidden sm:inline">•</span>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>No sales pitch, just technical discussion</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Discovery Call */}
      <section id="schedule" className="pt-8 pb-16 md:pt-10 md:pb-20 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="text-center space-y-3 mb-8">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Schedule a Free Discovery Call</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              30-minute technical discussion — no sales pitch, just honest
              conversation about your challenges and whether we can help.
            </p>
          </div>

          <div className="flex justify-center max-w-5xl mx-auto">
            {/* Contact Form */}
            <div className="w-full lg:w-[80%]">
              <Card className="border-2 mx-auto">
                <CardHeader className="space-y-2 pb-4">
                  <CardTitle className="text-2xl">General Inquiry</CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  {submitted ? (
                    <div className="py-10 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto">
                        We&apos;ve received your message. We will review it and respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first_name">First Name *</Label>
                          <Input id="first_name" placeholder="John" required onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name *</Label>
                          <Input id="last_name" placeholder="Doe" required onChange={handleChange} />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="john@company.com"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone_number">Phone Number (Optional)</Label>
                          <Input
                            id="phone_number"
                            placeholder="+33 1 23 45 67 89"
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company_name">Company Name *</Label>
                          <Input
                            id="company_name"
                            placeholder="Your Company Name"
                            required
                            onChange={handleChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input
                            id="title"
                            placeholder="CEO / CTO / Director / Manager..."
                            required
                            onChange={handleChange}
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="industry">Industry *</Label>
                          <Select
                            required
                            onValueChange={value => handleSelectChange("industry", value)}
                          >
                            <SelectTrigger id="industry">
                              <SelectValue placeholder="Select your industry" />
                            </SelectTrigger>
                            <SelectContent>
                              <SelectItem value="industrial">Industrial / Industry 4.0</SelectItem>
                              <SelectItem value="automotive">Automotive & Mobility</SelectItem>
                              <SelectItem value="semiconductor">Electronics / Semiconductor</SelectItem>
                              <SelectItem value="consumer-iot">Consumer IoT & Smart Home</SelectItem>
                              <SelectItem value="other">Other</SelectItem>
                            </SelectContent>
                          </Select>
                        </div>

                        <div className="space-y-2">
                        <Label htmlFor="timeline">Project Timeline (Optional)</Label>
                        <Select
                          onValueChange={value => handleSelectChange("timeline", value)}
                        >
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="When do you need to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (within 2 weeks)</SelectItem>
                            <SelectItem value="soon">Soon (1–2 months)</SelectItem>
                            <SelectItem value="planning">Planning (3–6 months)</SelectItem>
                            <SelectItem value="exploring">Exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>
                      </div>

                      

                      <div className="flex flex-col space-y-2">
                        <div className="space-y-2">
                          <Label htmlFor="message">Tell us about your challenge *</Label>
                          <Textarea
                            id="message"
                            value={text}
                            onChange={handleTextAreaChange}
                            placeholder="What specific technical challenge or compliance requirement brings you to Edge Pulsar?"
                            rows={5}
                            maxLength={max}
                            required
                          />
                        </div>
                        <div className="flex items-center justify-between text-[11px] text-muted-foreground mt-1">
                          <div className="flex items-center gap-1">
                            <CheckCircle2 className="h-3 w-3 text-primary" />
                            <span>We typically respond within 24 hours</span>
                          </div>
                          <span>
                            {text.length} / {max}
                          </span>
                        </div>
                      </div>

                      <p className="text-[11px] text-muted-foreground">
                        By submitting this form, you agree to our privacy policy. We&apos;ll never share your
                        information and will only use it to respond to your inquiry.
                      </p>

                      <Button type="submit" size="lg" className="w-full">
                        Send Message
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Happens Next */}
      <section className="py-16 md:py-24 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader className="pb-4">
                <CardTitle className="text-3xl text-center">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent className="pt-0">
                <div className="space-y-6">
                  <Step
                    number={1}
                    title="Initial Review (Within 24 hours)"
                    text="We review your inquiry to understand your technical challenge and determine if we're a good fit for your needs."
                  />
                  <Step
                    number={2}
                    title="Discovery Call (30 minutes)"
                    text="We schedule a technical discussion—no sales pitch, just honest conversation about your challenges and whether we have the specific expertise to solve your problem."
                  />
                  <Step
                    number={3}
                    title="Proposal & Scoping (If aligned)"
                    text="If we're a good match, we'll send a detailed proposal with scope, timeline, deliverables, and pricing—typically within 3–5 business days of our discovery call."
                  />
                </div>

                <div className="mt-8 pt-6 border-t text-center space-y-3">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Expert-Led From Day One</span>
                  </div>
                  <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
                    Not sure if we&apos;re the right fit? No problem—we&apos;re happy to point you in the right
                    direction even if we&apos;re not the best match for your specific needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Direct Contact Info */}
      <section className="py-8 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-3">
            <h3 className="text-lg font-semibold">Prefer to reach us directly?</h3>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
              <a
                href="mailto:contact@edgepulsar.com"
                className="hover:text-primary transition-colors"
              >
                contact@edgepulsar.com
              </a>
              <span className="hidden sm:inline">•</span>
              <span>France (CET timezone)</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

function Step(props: { number: number; title: string; text: string }) {
  const { number, title, text } = props
  return (
    <div className="flex items-start gap-4">
      <div className="flex-shrink-0 w-10 h-10 md:w-12 md:h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
        {number}
      </div>
      <div className="flex-1">
        <h4 className="font-semibold text-lg mb-1">{title}</h4>
        <p className="text-sm text-muted-foreground leading-relaxed">{text}</p>
      </div>
    </div>
  )
}
