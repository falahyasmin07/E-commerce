import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ArrowRight, FileText, BookOpen, Video, Download, ExternalLink, Calendar, ShieldCheck, GitBranch, BarChart3 } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export default function ResourcesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 via-background to-background">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <Badge variant="secondary">Resources & Insights</Badge>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight text-balance">
              Knowledge Hub for Technology Leaders
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed text-pretty">
              Expert insights, guides, and resources to help you navigate chip-to-cloud challenges and CRA compliance
              requirements.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Resource - CRA Guide */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-2xl bg-gradient-to-br from-cra-accent/10 via-cra-accent/5 to-background border-2 border-cra-accent/20">
            <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-cra-accent/10 to-transparent" />
            <div className="relative p-8 md:p-12">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="space-y-6">
                  <Badge className="bg-cra-accent/10 text-cra-accent border-cra-accent/20">Featured Guide</Badge>
                  <h2 className="text-3xl md:text-4xl font-bold text-balance">
                    The Complete Guide to EU Cyber Resilience Act Compliance
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    A comprehensive 50-page guide covering everything device makers need to know about CRA compliance,
                    from initial assessment through certification.
                  </p>
                  <ul className="space-y-3">
                    {[
                      "Understanding CRA requirements and timelines",
                      "Security-by-design implementation frameworks",
                      "Vulnerability management best practices",
                      "Conformity assessment and certification process",
                    ].map((item, index) => (
                      <li key={index} className="flex items-start gap-3">
                        <ArrowRight className="h-5 w-5 text-cra-accent flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Button asChild size="lg" className="bg-cra-accent hover:bg-cra-accent/90">
                    <Link href="/contact">
                      <Download className="mr-2 h-4 w-4" />
                      Download Free Guide
                    </Link>
                  </Button>
                </div>
                <div className="flex items-center justify-center">
                  <div className="text-center space-y-4 p-12 bg-cra-accent/5 rounded-xl border border-cra-accent/20">
                    <FileText className="h-32 w-32 text-cra-accent mx-auto" />
                    <p className="text-lg font-semibold">50+ Pages</p>
                    <p className="text-sm text-muted-foreground">PDF Format</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Consulting Artifacts Overview */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Executive Consulting Artifacts Overview</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Gain clarity and accelerate decision-making with our production-ready consulting deliverables.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <ShieldCheck className="h-10 w-10 text-pillar-secure mb-3" />
                <CardTitle className="text-xl">Security Framework</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Detailed security advisory deliverable with IEC 62443 control mapping, ISO 27001 ISMS documentation,
                  GDPR controls, CRA essential requirements, and threat modeling.
                </p>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Key Components:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-secure flex-shrink-0 mt-0.5" />
                      <span>Defense-in-depth architecture</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-secure flex-shrink-0 mt-0.5" />
                      <span>CRA compliance controls</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-secure flex-shrink-0 mt-0.5" />
                      <span>Threat modeling (STRIDE)</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/solutions#blueprints">Learn More</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <GitBranch className="h-10 w-10 text-pillar-orchestrate mb-3" />
                <CardTitle className="text-xl">Integration Blueprint</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Strategic architecture consulting deliverable with component selection rationale, interface
                  specifications, data flows, operational requirements, and a 3-year technology roadmap.
                </p>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Key Components:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-orchestrate flex-shrink-0 mt-0.5" />
                      <span>MCU/MPU selection</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-orchestrate flex-shrink-0 mt-0.5" />
                      <span>API schemas & data formats</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-orchestrate flex-shrink-0 mt-0.5" />
                      <span>Telemetry paths & latency budgets</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/solutions#blueprints">Learn More</Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-pillar-innovate mb-3" />
                <CardTitle className="text-xl">Operations Playbook</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Operational excellence consulting deliverable with deployment procedures, progressive rollout
                  strategies, rollback triggers, and incident response protocols.
                </p>
                <div className="pt-4 border-t">
                  <h4 className="font-semibold mb-2">Key Components:</h4>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-innovate flex-shrink-0 mt-0.5" />
                      <span>Deployment checklists</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-innovate flex-shrink-0 mt-0.5" />
                      <span>Rollback procedures</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <ArrowRight className="h-4 w-4 text-pillar-innovate flex-shrink-0 mt-0.5" />
                      <span>Incident response</span>
                    </li>
                  </ul>
                </div>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/solutions#blueprints">Learn More</Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Downloadable Assets */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Downloadable Assets</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Access our collection of free guides, templates, and whitepapers.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="flex flex-col">
              <CardHeader>
                <FileText className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">CRA Compliance Checklist</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  A practical checklist to assess your product's readiness for the EU Cyber Resilience Act.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Checklist
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <BookOpen className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">IoT Security Best Practices Guide</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Comprehensive guide on implementing security-by-design for connected devices.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Guide
                  </Link>
                </Button>
              </div>
            </Card>

            <Card className="flex flex-col">
              <CardHeader>
                <Video className="h-10 w-10 text-primary mb-3" />
                <CardTitle className="text-xl">OT-to-Cloud Integration Whitepaper</CardTitle>
              </CardHeader>
              <CardContent className="flex-1 space-y-4">
                <p className="text-muted-foreground leading-relaxed">
                  Explore strategies for seamless and secure integration of operational technology with cloud platforms.
                </p>
              </CardContent>
              <div className="p-6 pt-0">
                <Button asChild className="w-full">
                  <Link href="/contact">
                    <Download className="mr-2 h-4 w-4" />
                    Download Whitepaper
                  </Link>
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Blog & Insights */}
      <section className="py-20 md:py-32 bg-gradient-to-b from-muted/30 to-background">
        <div className="container">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Latest Insights</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto text-pretty">
              Expert perspectives on technology trends, compliance updates, and industry developments
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-8">
            {[
              {
                badge: "CRA Compliance",
                title: "Understanding the CRA Timeline: What Device Makers Need to Know",
                desc: "A detailed breakdown of the EU Cyber Resilience Act implementation timeline and key milestones for compliance.",
                color: "cra-accent",
              },
              {
                badge: "Industrial IoT",
                title: "OT-to-Cloud Integration: Lessons from Manufacturing Leaders",
                desc: "Best practices and common pitfalls when connecting operational technology to cloud platforms.",
                color: "pillar-orchestrate",
              },
              {
                badge: "Silicon Strategy",
                title: "Accelerating Chip Platform Adoption: A Framework for Success",
                desc: "Strategic approaches to building developer ecosystems and accelerating time-to-market for new chips.",
                color: "pillar-innovate",
              },
            ].map((article, index) => (
              <div
                key={index}
                className="relative pl-6 py-6 border-l-2 border-muted hover:border-primary/50 transition-colors"
              >
                <Badge variant="secondary" className="mb-3">
                  {article.badge}
                </Badge>
                <h3 className="text-xl font-bold mb-3 text-balance">{article.title}</h3>
                <p className="text-muted-foreground leading-relaxed mb-4">{article.desc}</p>
                <Button variant="ghost" asChild>
                  <Link href="/contact">
                    Read Article
                    <ExternalLink className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 md:py-32">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-4">
              <Calendar className="h-12 w-12 text-primary" />
              <h2 className="text-3xl md:text-4xl font-bold">Stay Informed</h2>
            </div>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Subscribe to our monthly newsletter for the latest insights on technology trends, CRA compliance updates,
              and industry best practices.
            </p>
            <Button asChild size="lg">
              <Link href="/contact">
                Subscribe to Newsletter
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
