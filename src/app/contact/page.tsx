"use client"

import type React from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { CheckCircle2, ArrowRight, Rocket, ShieldCheck, Lightbulb, Handshake, Clock, Users } from "lucide-react"
import { useState } from "react"
import { InlineWidget } from "react-calendly"

const entryPoints = [
  {
    icon: Rocket,
    title: "Project-Based Consulting",
    duration: "4-20 weeks",
    description: "Fixed-scope engagements for specific technology challenges like CRA compliance, secure boot implementation, or OT-to-cloud architecture.",
    benefits: [
      "Direct founder involvement throughout",
      "Production-ready deliverables",
      "Clear scope, timeline, and budget"
    ],
    cta: "Define a Project",
  },
  {
    icon: ShieldCheck,
    title: "Embedded Engineering Lead",
    duration: "3-12 months",
    description: "Part-time, hands-on leadership to guide your team, establish best practices, and accelerate your silicon-to-scale journey.",
    benefits: [
      "Senior technical leadership on demand",
      "Knowledge transfer to your team",
      "Flexible engagement (8-20 hrs/week)"
    ],
    cta: "Embed an Expert",
  },
  {
    icon: Lightbulb,
    title: "Technology Advisory Retainer",
    duration: "Ongoing",
    description: "Ongoing strategic guidance on technology roadmaps, architecture decisions, and navigating EU regulations (CRA, NIS2).",
    benefits: [
      "Regular strategic check-ins",
      "Architecture review on demand",
      "Priority response times"
    ],
    cta: "Secure an Advisor",
  },
  {
    icon: Handshake,
    title: "Executive & Team Workshops",
    duration: "1-3 days",
    description: "Targeted training sessions on topics like the EU Cyber Resilience Act, Security-by-Design, or custom technology deep-dives.",
    benefits: [
      "Customized to your industry",
      "Hands-on technical exercises",
      "Delivered by founders"
    ],
    cta: "Book a Workshop",
  },
]

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [formValues, setFormValues] = useState({});
  const [text, setText] = useState('');
  const max = 255;

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormValues((prev) => ({
      ...prev,
     [id]: value,
    }))
  }

  const handleTextAreaChange = (e) => {
    setText(e.target.value);
    handleChange(e);
  }
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);

    const baseUrl = "https://edgepulsar.com";
    const url = `${baseUrl}/actions/db_store.php`;

    try {
      const response = await fetch(url, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formValues),
      });

      const result = await response.json();
      console.log('Success!', result);
    } catch (error) {
      console.error('Error!', error);
    }

    setTimeout(() => setSubmitted(false), 50000);
  };

  return (
    <div className="flex flex-col">
      {/* Hero Section - UPDATED */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Contact Us</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight">
              Ready to Accelerate Your
              <span className="block text-primary mt-2">Chip-to-Cloud Journey?</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Schedule a free discovery call with our founders to discuss your technical challenges, 
              CRA compliance needs, or architecture questions.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 text-sm text-muted-foreground pt-4">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4 text-primary" />
                <span>Founders respond within 24 hours</span>
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

      {/* Four Consulting Entry Points - ENHANCED */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto">
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Four Consulting Entry Points</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                We offer flexible engagement models to meet you where you are. Choose the path that 
                best fits your immediate needs and long-term goals.
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {entryPoints.map((point) => (
                <Card key={point.title} className="border-2 flex flex-col hover:border-primary/50 transition-colors">
                  <CardHeader className="flex-row items-start gap-4">
                    <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <point.icon className="h-6 w-6 text-primary" />
                    </div>
                    <div className="flex-1">
                      <CardTitle className="mb-2">{point.title}</CardTitle>
                      <Badge variant="secondary" className="text-xs">
                        <Clock className="h-3 w-3 mr-1" />
                        {point.duration}
                      </Badge>
                    </div>
                  </CardHeader>
                  <CardContent className="flex-grow space-y-4">
                    <p className="text-muted-foreground">{point.description}</p>
                    <ul className="space-y-2">
                      {point.benefits.map((benefit, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                          <span className="text-muted-foreground">{benefit}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                  <div className="p-6 pt-0">
                    <Button variant="outline" className="w-full" asChild>
                      <a href="#schedule">
                        {point.cta}
                        <ArrowRight className="ml-2 h-4 w-4" />
                      </a>
                    </Button>
                  </div>
                </Card>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* Schedule Discovery Call - UPDATED */}
      <section id="schedule" className="py-20 md:py-32 flex items-center justify-center">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Schedule a Free Discovery Call</h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              30-minute technical discussion with one of our founders—no sales pitch, just honest 
              conversation about your challenges and whether we can help.
            </p>
          </div>
          <div className="flex justify-center max-w-6xl mx-auto">
            {/* Calendly Embed */}
            {/*<div className="rounded-lg border-2 overflow-hidden min-h-[700px]">
              <InlineWidget 
                url="https://calendly.com/edgepulsar/30min" 
                styles={{ height: "100%", width: "100%" }} 
              />
            </div>*/}

            {/* Contact Form - ENHANCED */}
            <div>
              <Card className="border-2 mx-auto">
                <CardHeader>
                  <CardTitle className="text-2xl">General Inquiry</CardTitle>
                  <p className="text-muted-foreground">
                    For questions not related to scheduling, use the form below. We respond within 24 hours.
                  </p>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <div className="flex justify-center">
                        <div className="h-16 w-16 rounded-full bg-green-500/10 flex items-center justify-center">
                          <CheckCircle2 className="h-8 w-8 text-green-500" />
                        </div>
                      </div>
                      <h3 className="text-xl font-bold">Thank You!</h3>
                      <p className="text-muted-foreground">
                        We've received your message. One of our founders will review it and respond within 24 hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="first_name">First Name *</Label>
                          <Input id="first_name" placeholder="John" required onChange={handleChange}/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="last_name">Last Name *</Label>
                          <Input id="last_name" placeholder="Doe" required onChange={handleChange}/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Work Email *</Label>
                          <Input id="email" type="email" placeholder="john@company.com" required onChange={handleChange}/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone_number">Phone Number *</Label>
                          <Input id="phone_number" placeholder="+331234567890" required onChange={handleChange}/>
                        </div>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="company_name">Company Name *</Label>
                          <Input id="company_name" placeholder="Your Company Name" required onChange={handleChange}/>
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="title">Title *</Label>
                          <Input id="title" placeholder="CEO/CTO/Director/Manager/..." required onChange={handleChange}/>
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="industry">Industry *</Label>
                        <Select required>
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
                        <Label htmlFor="inquiryType">What brings you here? *</Label>
                        <Select required>
                          <SelectTrigger id="inquiryType">
                            <SelectValue placeholder="Select primary interest" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="cra-compliance">CRA Compliance Support</SelectItem>
                            <SelectItem value="silicon-to-scale">Silicon-to-Scale Acceleration</SelectItem>
                            <SelectItem value="ot-to-cloud">OT-to-Cloud Integration</SelectItem>
                            <SelectItem value="architecture">Architecture Review</SelectItem>
                            <SelectItem value="workshop">Workshop / Training</SelectItem>
                            <SelectItem value="partnership">Partnership Opportunity</SelectItem>
                            <SelectItem value="general">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="timeline">Project Timeline</Label>
                        <Select>
                          <SelectTrigger id="timeline">
                            <SelectValue placeholder="When do you need to start?" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="urgent">Urgent (within 2 weeks)</SelectItem>
                            <SelectItem value="soon">Soon (1-2 months)</SelectItem>
                            <SelectItem value="planning">Planning (3-6 months)</SelectItem>
                            <SelectItem value="exploring">Exploring options</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="textarea-with-counter" style={{ display: 'flex', flexDirection: 'column' }}>
                        <div className="space-y-2">
                          <Label htmlFor="message">Tell us about your challenge *</Label>
                          <Textarea value={text}
                            id="message"
                            placeholder="What specific technical challenge or compliance requirement brings you to Edge Pulsar?"
                            rows={5} maxLength={max}
                            required onChange={handleTextAreaChange}
                          />
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'flex-end', fontSize: '12px', color: '#555' }}> {text.length} / {max} </div>
                      </div>

                      <p className="text-xs text-muted-foreground">
                        By submitting this form, you agree to our privacy policy. We'll never share your 
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

      {/* What Happens Next - NEW SECTION */}
      <section className="py-20 md:py-32 bg-muted/20">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto">
            <Card className="border-2 border-primary/20 bg-gradient-to-br from-primary/5 to-transparent">
              <CardHeader>
                <CardTitle className="text-3xl text-center">What Happens Next?</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      1
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Founder Review (Within 24 hours)</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        One of our founders personally reviews your inquiry to understand your technical 
                        challenge and determine if we're a good fit for your needs.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      2
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Discovery Call (30 minutes)</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        We schedule a technical discussion—no sales pitch, just honest conversation about 
                        your challenges and whether we have the specific expertise to solve your problem.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-lg">
                      3
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-lg mb-2">Proposal & Scoping (If aligned)</h4>
                      <p className="text-muted-foreground leading-relaxed">
                        If we're a good match, we'll send a detailed proposal with scope, timeline, 
                        deliverables, and pricing—typically within 3-5 business days of our discovery call.
                      </p>
                    </div>
                  </div>
                </div>

                <div className="mt-10 pt-8 border-t text-center space-y-4">
                  <div className="flex items-center justify-center gap-2 text-primary">
                    <Users className="h-5 w-5" />
                    <span className="font-semibold">Founder-Led From Day One</span>
                  </div>
                  <p className="text-muted-foreground max-w-2xl mx-auto">
                    Not sure if we're the right fit? No problem—we're happy to point you in the right 
                    direction even if we're not the best match for your specific needs.
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  )
}
