import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";
import { ArrowRight, Linkedin, Mail, MapPin, Users, Target, Sparkles, CheckCircle2, Cpu, Cloud, Wifi, Shield } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">About Edge Pulsar</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Founder-Led
              <span className="block text-primary mt-2">Chip-to-Cloud Expertise</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Two industry veterans bringing 40+ years combined experience directly to your chip-to-cloud challenges—
              no junior consultants, no delegation, just proven expertise.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story - NEW, UNIQUE CONTENT */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Why two chip-to-cloud veterans decided to do consulting differently
              </p>
            </div>

            <div className="space-y-8 text-lg text-muted-foreground leading-relaxed">
              <p>
                Throughout our careers spanning semiconductors, automotive, and cloud infrastructure, we kept 
                seeing the same expensive failures repeat: chip makers 
                advertising "cloud-ready" silicon where firmware secure boot conflicts with cloud certificate 
                provisioning—discovered only during pilot deployment, device makers realizing their 
                power budget can't support both cellular connectivity and edge ML processing, and industrial 
                companies stuck with fragmented vendor ecosystems where 
                EU Cyber Resilience Act compliance becomes a last-minute €500K crisis.
              </p>
              
              <p>
                The problem wasn't lack of technology—it was the <strong className="text-foreground">knowledge gap 
                between silicon and cloud</strong>. Semiconductor companies excel at chip design but lack cloud 
                integration expertise. Cloud consultancies understand AWS but can't write embedded firmware. This 
                gap costs companies millions in delays, failed reference designs, and integration rework.
              </p>

              <p>
                We founded Edge Pulsar to bridge this divide—bringing embedded systems, connectivity, and cloud 
                expertise under one roof, delivered directly by founders who've shipped production systems from 
                silicon evaluation kits to cloud-scale deployments. 
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid md:grid-cols-3 gap-6 pt-8">
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">40+</div>
                <p className="text-muted-foreground">Years Combined Experience</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">4</div>
                <p className="text-muted-foreground">Core Industries Served</p>
              </Card>
              <Card className="text-center p-6">
                <div className="text-4xl font-bold text-primary mb-2">2</div>
                <p className="text-muted-foreground">Hands-On Founders</p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* What Makes Us Different - UNIQUE POSITIONING */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">What Makes Us Different</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We chose a founder-led model that prioritizes depth over scale
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Founders Deliver, Not Delegate</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Both founders remain hands-on throughout every engagement. You're not passed to junior consultants 
                  after the sales pitch—you get 40+ years of experience on every technical decision.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Target className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Proven Production Experience</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We've shipped systems at scale, not just written PowerPoint. Every architecture pattern we recommend 
                  has been battle-tested in production deployments with real devices and real users.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Honest Technology Scoping</h3>
                <p className="text-muted-foreground leading-relaxed">
                  We focus on 4 core industries where our chip-to-cloud expertise delivers maximum impact. When projects 
                  need specialized capabilities beyond our core, we bring in trusted partners rather than overpromising.
                </p>
              </Card>

              <Card className="p-8 space-y-4 border-2 hover:border-primary/50 transition-colors">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Sparkles className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">European + Global Perspective</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Headquartered in France with experience across Europe and North America—we understand both EU 
                  regulatory requirements (CRA, GDPR, NIS2) and global market dynamics.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Why Founders Stay Hands-On - REFRAMED FOR SCALABILITY */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Our Founder-Led Model</h2>
              <p className="text-lg text-muted-foreground">
                Strategic leverage through proven accelerators and selective partnerships
              </p>
            </div>

            <Card className="p-8 md:p-12 bg-gradient-to-br from-primary/5 to-transparent border-2">
              <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                <p>
                  As a founder-led consultancy, both founders remain directly involved in strategic architecture 
                  decisions, technology selection, and critical implementation guidance throughout every engagement. 
                  This ensures senior-level expertise drives outcomes—not just sales presentations.
                </p>
                
                <p>
                  To scale our impact while maintaining quality, we leverage <strong className="text-foreground">proven 
                  accelerators</strong> (reference designs, validated architecture patterns, security frameworks) and 
                  <strong className="text-foreground"> strategic partnerships</strong> with domain specialists for 
                  specialized capabilities (regulatory certification, manufacturing operations, security audits) while 
                  retaining architecture authority.
                </p>

                <div className="grid md:grid-cols-3 gap-6 py-6">
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">100%</div>
                    <p className="text-sm">Founder involvement in strategic planning and architecture decisions</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">Proven</div>
                    <p className="text-sm">Reusable accelerators compress delivery timelines by 40-60%</p>
                  </div>
                  <div className="space-y-2">
                    <div className="text-3xl font-bold text-primary">Selective</div>
                    <p className="text-sm">Vetted specialist network for capabilities beyond core expertise</p>
                  </div>
                </div>

                <p>
                  This model allows us to serve clients at scale through standardized methodologies and battle-tested 
                  patterns, while founders provide strategic oversight and technical authority throughout—ensuring 
                  45+ years of chip-to-cloud experience guides every critical decision.
                </p>
              </div>
            </Card>

            {/* How We Scale Quality - NEW */}
            <div className="grid md:grid-cols-2 gap-6 mt-8">
              <Card className="p-6 space-y-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <CheckCircle2 className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Proven Accelerators</h3>
                <p className="text-muted-foreground">
                  Reusable reference implementations, validated architecture patterns, and security frameworks 
                  developed from production deployments—reducing discovery and integration time by 40-60%.
                </p>
              </Card>

              <Card className="p-6 space-y-4">
                <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Users className="h-5 w-5 text-primary" />
                </div>
                <h3 className="text-xl font-bold">Strategic Partnerships</h3>
                <p className="text-muted-foreground">
                  Vetted network of domain specialists (certification labs, security auditors, manufacturing experts) 
                  extends our capabilities while founders maintain architecture authority and strategic oversight.
                </p>
              </Card>
            </div>
          </div>
        </div>
        
      </section>

      {/* Founders Section - REDESIGNED */}
      <section id="founders" className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold">Meet the Founders</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              40+ years combined experience in chip-to-cloud systems—from embedded firmware to cloud-scale deployment
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-16">
            {/* Riadh Berhouma */}
            <Card className="overflow-hidden border-2">
              <div className="grid md:grid-cols-[300px_1fr] gap-8">
                {/* Profile Image & Contact */}
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
                    <p className="text-sm text-muted-foreground">Embedded Systems Expert</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="mailto:riadh@edgepulsar.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Expertise Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">20+ Years Experience</Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Two decades across semiconductors and automotive—specializing in connected devices, embedded 
                      platforms, and IoT at scale. Product Owner with proven expertise in UWB localization, LTE/5G 
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
                {/* Profile Image & Contact */}
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
                    <p className="text-sm text-muted-foreground">Cloud Architecture Expert</p>
                  </div>
                  <div className="flex flex-col gap-2">
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="h-4 w-4 mr-2" />
                        LinkedIn
                      </a>
                    </Button>
                    <Button variant="outline" size="sm" asChild className="w-full">
                      <a href="mailto:mazen@edgepulsar.com">
                        <Mail className="h-4 w-4 mr-2" />
                        Email
                      </a>
                    </Button>
                  </div>
                </div>

                {/* Expertise Content */}
                <div className="p-8 space-y-6">
                  <div>
                    <Badge variant="secondary" className="mb-4">25+ Years Experience</Badge>
                    <p className="text-muted-foreground leading-relaxed">
                      Quarter-century across cloud, real-time embedded, and telecom systems—specializing in resilient 
                      IoT and edge platforms at scale. Technical Leader with expertise in microservices/Kubernetes, 
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
              <h3 className="text-2xl font-bold mb-4">The Complete Stack</h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                Together, we cover the entire chip-to-cloud journey—from embedded firmware and 
                cellular connectivity through cloud architecture and data pipelines. This breadth eliminates 
                the integration gaps that plague multi-vendor projects.
              </p>
              <div className="flex flex-wrap gap-3 justify-center">
                <Badge variant="secondary" className="text-sm">Embedded Systems</Badge>
                <Badge variant="secondary" className="text-sm">Cellular IoT</Badge>
                <Badge variant="secondary" className="text-sm">Cloud Architecture</Badge>
                <Badge variant="secondary" className="text-sm">Security</Badge>
                <Badge variant="secondary" className="text-sm">CRA Compliance</Badge>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Technology Stack - SIMPLIFIED, ONLY PROVEN */}
      <section id="tech-stack" className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Core Technology Stack</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Technologies we've used in production—not aspirational lists
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Embedded Systems */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cpu className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Embedded Systems</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>NXP i.MX RT series (secure boot, hardware root-of-trust)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>ARM Cortex-M/A architectures</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>RTOS (FreeRTOS, Zephyr)</span>
                  </li>
                </ul>
              </Card>

              {/* Connectivity */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Wifi className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Connectivity</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Cellular IoT (LTE-M, NB-IoT, 4G/5G)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>UWB positioning systems</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>BLE, Wi-Fi, LoRaWAN</span>
                  </li>
                </ul>
              </Card>

              {/* Cloud & Data */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Cloud className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Cloud & Data</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>AWS IoT Core, Kinesis, Lambda</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>OVHcloud (EU data residency)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Time-series databases for telemetry</span>
                  </li>
                </ul>
              </Card>

              {/* Industrial Integration */}
              <Card className="p-6 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold">Industrial Integration</h3>
                </div>
                <ul className="space-y-2 text-sm text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>OT-to-cloud data pipelines</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>MQTT, COAP</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>Real-time data ingestion</span>
                  </li>
                </ul>
              </Card>
            </div>

          </div>
        </div>
      </section>

      {/* Location & CTA */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <div className="flex items-center justify-center gap-3 mb-4">
              <MapPin className="h-6 w-6 text-primary" />
              <Badge variant="secondary">Headquartered in France</Badge>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold">
              Ready to Work with Founder-Led Expertise?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Let's discuss your chip-to-cloud challenges and how our hands-on, founder-led approach 
              can accelerate your project.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
              <Button asChild size="lg" className="text-lg px-8">
                <Link href="/contact">
                  Schedule Discovery Call
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg px-8">
                <Link href="/services">Explore Our Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
