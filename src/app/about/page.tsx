import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import {
  ArrowRight,
  Linkedin,
  Mail,
  MapPin,
  Users,
  Target,
  Sparkles,
  CheckCircle2,
  Cpu,
  Cloud,
  Wifi,
  Shield,
  Layers,
  Zap,
  AlertCircle
} from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-28 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">
              About Edge Pulsar
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Chip-to-Edge Expertise
              <span className="block text-primary mt-2">Technical Advisory & Implementation</span>
            </h1>

            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Two hands-on engineering leaders with 45+ years of combined hands‑on experience designing, 
              building, and integrating chip‑to‑edge systems.
            </p>
          </div>
        </div>
      </section>

      {/* Positioning Statement - MOVED UP */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Positioning</h2>
              <p className="text-lg text-muted-foreground">
                Bridging silicon, edge, and cloud domains
              </p>
            </div>

            <div className="p-8 bg-primary/5 rounded-lg border-l-4 border-primary">
              <p className="text-lg text-muted-foreground leading-relaxed">
                We are a <strong className="text-foreground">chip‑to‑edge technical advisor and builder</strong>. 
                We combine architecture guidance with hands‑on implementation—aligning silicon choices, embedded software, 
                connectivity, security, and cloud integration into coherent, production‑oriented systems that reduce 
                integration risk and accelerate delivery.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-4 gap-6 pt-8">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Hands-On Founders</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">3</div>
                <p className="text-muted-foreground">Edge Layers Covered</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-muted-foreground">Core Industries Served</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">5</div>
                <p className="text-muted-foreground">Decades Combined Experience</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                An expert-led model that prioritizes depth over scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Expert-Led Throughout</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Both founders remain hands-on throughout every engagement—leading architecture decisions,
                  technology selection, and technical oversight. When specialized capabilities are needed,
                  we leverage trusted partners while maintaining architecture authority.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Zap className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Architecture + Implementation</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We combine strategic advisory with hands‑on delivery—providing architecture guidance backed 
                  by working implementations, validated patterns, and production‑oriented reference designs 
                  that accelerate your path to deployment.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Focused Engagement Scope</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on four core industries where our chip-to-cloud expertise delivers maximum impact.
                  When projects require capabilities beyond our core, we engage trusted partners rather than
                  diluting our focus.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">European + Global Perspective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Headquartered in France with experience across Europe and North America—we understand EU
                  regulatory requirements (CRA, GDPR, NIS2) and global market dynamics.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section id="founders" className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Leadership</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              45+ years combined experience in chip-to-cloud systems—from embedded firmware to edge deployment
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Riadh Berhouma */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 space-y-6">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/professional-business-portrait-technology-executiv.png"
                      alt="Riadh Berhouma"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Riadh Berhouma</h3>
                    <p className="text-primary font-semibold">CEO & Co-Founder</p>
                    <p className="text-sm text-muted-foreground">Embedded Systems Architect</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://linkedin.com/in/riadh-berhouma-b9b4b01" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">20+ Years Experience</Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Two decades across semiconductors and automotive—specializing in connected devices, embedded 
                      platforms, and IoT at scale. Technical leader with proven expertise in UWB localization, LTE/5G 
                      connectivity, and certification to mass production for tier-1 manufacturers.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Cpu className="h-5 w-5 text-primary" />
                      Core Expertise
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Automotive IoT & connected vehicles</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">UWB positioning systems</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">LTE/5G cellular connectivity</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Embedded platform architecture</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Product lifecycle management</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">FCC/CE/PTCRB certification</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>

            {/* Mazen Neifer */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                <div className="bg-gradient-to-br from-primary/5 to-transparent p-8 space-y-6">
                  <div className="w-48 h-48 mx-auto rounded-2xl overflow-hidden border-4 border-white shadow-xl">
                    <Image
                      src="/professional-business-portrait-technology-cto-exec.png"
                      alt="Mazen Neifer"
                      width={192}
                      height={192}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="text-center space-y-2">
                    <h3 className="text-2xl font-bold">Mazen Neifer</h3>
                    <p className="text-primary font-semibold">CTO & Co-Founder</p>
                    <p className="text-sm text-muted-foreground">Cloud & Embedded Systems Architect</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://linkedin.com/in/mazen-neifer" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">25+ Years Experience</Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Twenty-five years across cloud, real-time embedded, and telecom systems—specializing in resilient 
                      IoT and edge platforms at scale. Technical leader with expertise in microservices/Kubernetes, 
                      AWS migrations, DSP/RTOS, and real-time edge systems.
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-semibold text-lg flex items-center gap-2">
                      <Cloud className="h-5 w-5 text-primary" />
                      Core Expertise
                    </h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">AWS cloud architecture & IoT services</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Real-time embedded systems (DSP/RTOS)</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">High-availability system design</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Microservices & Kubernetes</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">DevOps & CI/CD pipelines</span>
                      </li>
                      <li className="flex items-start gap-2 text-sm">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-muted-foreground">Cloud migration strategies</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </Card>
          </div>

          {/* Combined Strength */}
          <div className="mt-16 max-w-4xl mx-auto">
            <Card className="p-8 text-center bg-gradient-to-br from-primary/5 to-transparent border-2">
              <h3 className="text-2xl font-bold mb-4">Complementary Technical Expertise</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Our combined expertise spans the complete chip-to-cloud technology stack—from embedded firmware and 
                cellular connectivity protocols through cloud-native architectures and distributed data pipelines. 
                This integrated capability eliminates the architectural discontinuities that typically emerge in 
                multi-vendor integration efforts.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="text-sm">Embedded Systems</Badge>
                <Badge variant="secondary" className="text-sm">Cellular IoT</Badge>
                <Badge variant="secondary" className="text-sm">Cloud Architecture</Badge>
                <Badge variant="secondary" className="text-sm">Security Frameworks</Badge>
                <Badge variant="secondary" className="text-sm">Regulatory Compliance</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Our Story - MOVED DOWN */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Why we founded Edge Pulsar
              </p>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Across semiconductors, automotive, and cloud infrastructure, we repeatedly saw the same pattern: 
                individually robust components failing when integrated. Solutions presented as "cloud-ready" 
                often required substantial rework once real security, connectivity, and operational constraints 
                were taken into account.
              </p>

              <p>
                The core problem was not technology, but an{" "}
                <strong className="text-foreground">expertise gap between silicon, edge, and cloud domains</strong>.
                Chip vendors focus on silicon and low-level software; cloud teams focus on platforms and data. 
                Very few teams can credibly own the full stack end to end. That gap leads directly to cost overruns, 
                repeated architecture revisions, and elevated integration risk.
              </p>

              {/* Problem Cost Callout */}
              <div className="bg-primary/5 border-l-4 border-l-primary p-6 rounded-lg">
                <h4 className="font-bold text-lg mb-3 flex items-center gap-2 text-foreground">
                  <AlertCircle className="h-5 w-5 text-primary" />
                  Typical Cost Drivers We Eliminate
                </h4>
                <ul className="space-y-3 text-base">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">Extended evaluation cycles</span> on MCU and 
                      silicon selection, instead of starting from pre-validated architectures.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">Underused hardware acceleration</span> where 
                      generic gateway designs fail to leverage available NPU/GPU capabilities.
                    </span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      <span className="font-semibold text-foreground">Custom one-off integrations</span> that extend 
                      timelines, instead of reusing proven chip-to-cloud patterns.
                    </span>
                  </li>
                </ul>
              </div>

              <p>
                We founded Edge Pulsar as a technical advisory and solution delivery firm focused on closing this 
                end‑to‑end gap. We help device makers and industrial enterprises accelerate their chip‑to‑edge 
                initiatives by aligning silicon choices, embedded software, connectivity, security, and cloud 
                integration into coherent, production‑oriented architectures.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Accelerate Delivery with Pre‑Validated Architectures
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Reduce integration timelines and risk by deploying chip‑to‑cloud systems based on production‑oriented 
              architectures validated on real hardware.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Schedule Technical Discussion
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/services">Explore Technical Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
