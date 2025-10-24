import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import { ArrowRight, Cpu, Factory, Car, CheckCircle2, Users, Layers, Zap, Shield, Lightbulb } from "lucide-react"

export default function IndustriesPage() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-background" />
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative">
          <div className="max-w-4xl mx-auto text-center space-y-6">
            <Badge variant="secondary" className="mb-4">Industries We Serve</Badge>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              Deep Chip-to-Cloud Expertise
              <span className="block text-primary mt-2">Where It Matters Most</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              Our founders' 45+ years combined experience in embedded systems, connectivity, and cloud architecture 
              delivers proven results across four core industries.
            </p>
          </div>
        </div>
      </section>

      {/* Industry Grid - 4 Industries in 2x2 */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">

            {/* 3. Semiconductors & Electronics */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/semiconductor-chip-wafer-manufacturing-close-up.png"
                  alt="Semiconductor manufacturing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Cpu className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Semiconductors & Electronics</h3>
                      <p className="text-white/80 text-sm">Silicon-to-scale acceleration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Accelerate time-to-market with production-ready reference designs, secure embedded solutions, 
                  and cloud connectivity—helping chipmakers and device manufacturers scale from prototype to production 
                  while meeting CRA compliance requirements.
                </p>
                
                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold text-sm">Key Challenges We Address:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Reference design development and ecosystem enablement</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Secure boot, hardware root-of-trust, and CRA compliance</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Certification readiness (FCC, CE, radio approvals)</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Reference Design</Badge>
                    <Badge variant="secondary" className="text-xs">CRA Compliance</Badge>
                    <Badge variant="secondary" className="text-xs">Ecosystem Development</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Automotive & Mobility */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/connected-car-autonomous-vehicle-technology-dashbo.png"
                  alt="Automotive technology"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Car className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Automotive & Mobility</h3>
                      <p className="text-white/80 text-sm">Connected vehicle platforms</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Accelerate automotive connectivity projects from concept to deployment—20+ years shipping connected 
                  vehicle platforms for tier-1 suppliers. Specializing in embedded architecture, cellular integration, 
                  and cloud connectivity through strategic advisory and hands-on technical consulting.
                </p>

                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold text-sm">Key Challenges We Address:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Platform architecture and connectivity technology selection</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Embedded systems strategy and cellular/V2X connectivity</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Cloud platform architecture and device-to-cloud security</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Connected Vehicles</Badge>
                    <Badge variant="secondary" className="text-xs">Fractional CTO</Badge>
                    <Badge variant="secondary" className="text-xs">V2X Integration</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            {/* 1. Manufacturing & Industry 4.0 */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/industrial-factory-automation-robots-manufacturing.png"
                  alt="Industrial manufacturing"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Factory className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Manufacturing & Industry 4.0</h3>
                      <p className="text-white/80 text-sm">OT-to-cloud integration</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Converging OT and IT through secure, multi-layered architecture. Deploy edge-to-cloud integration 
                  that captures real-time telemetry from production equipment and industrial controls—enabling predictive 
                  maintenance, process optimization, and autonomous operations.
                </p>
                
                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold text-sm">Key Challenges We Address:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Secure sensor-to-cloud connectivity with embedded gateway design</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Multi-protocol integration (OPC UA, Modbus, PROFINET)</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Real-time analytics and digital twin capabilities</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">IoT Architecture</Badge>
                    <Badge variant="secondary" className="text-xs">Edge Computing</Badge>
                    <Badge variant="secondary" className="text-xs">Predictive Maintenance</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Energy & Smart Infrastructure */}
            <Card className="group hover:shadow-2xl transition-all duration-300 border-2 hover:border-primary/50 overflow-hidden flex flex-col">
              <div className="relative h-64 overflow-hidden">
                <Image
                  src="/energy-smart-grid-renewable-infrastructure.png"
                  alt="Energy infrastructure"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="h-12 w-12 rounded-lg bg-white/10 backdrop-blur-sm flex items-center justify-center border border-white/20">
                      <Lightbulb className="h-6 w-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Energy & Smart Infrastructure</h3>
                      <p className="text-white/80 text-sm">Smart grid and building automation</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <CardContent className="p-6 flex flex-col flex-1">
                <p className="text-muted-foreground leading-relaxed flex-grow">
                  Transform energy infrastructure through secure OT-IT integration. Enable real-time data flow from smart 
                  meters, energy management systems, and building automation to cloud platforms for advanced analytics, 
                  demand response, and sustainability optimization.
                </p>

                <div className="space-y-3 mt-6">
                  <h4 className="font-semibold text-sm">Key Challenges We Address:</h4>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Smart grid deployment with real-time monitoring</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Building automation (HVAC, lighting, security) integration</span>
                    </li>
                    <li className="flex items-start gap-2 text-sm">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-muted-foreground">Energy consumption optimization and sustainability analytics</span>
                    </li>
                  </ul>
                </div>

                <div className="pt-4 border-t mt-auto">
                  <div className="flex flex-wrap gap-2">
                    <Badge variant="secondary" className="text-xs">Smart Grid</Badge>
                    <Badge variant="secondary" className="text-xs">Energy Management</Badge>
                    <Badge variant="secondary" className="text-xs">Building Automation</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            

          </div>
        </div>
      </section>

      {/* Why These Four Industries Section */}
      <section className="py-20 bg-gradient-to-br from-primary/5 to-background">
        <div className="container mx-auto px-4 max-w-6xl">
          
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why These Four Industries?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Focused expertise where our founders&apos; 45+ years combined experience delivers{' '}
              <span className="text-innovate font-semibold">proven results from day one</span>
            </p>
          </div>

          {/* 4 Pillars Grid */}
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            
            {/* 1. Proven Founder Experience */}
            <Card className="border-2 border-innovate/20 hover:border-innovate/50 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-innovate/10 flex items-center justify-center flex-shrink-0">
                    <Users className="h-6 w-6 text-innovate" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Proven Founder Experience
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>Riadh&apos;s 20+ years</strong> in automotive IoT and embedded systems 
                      (Valeo, Sequans) combined with <strong>Mazen&apos;s 25+ years</strong> in cloud 
                      and telecom (NXP, Nestwave) directly map to these four industries—
                      <span className="text-innovate font-medium">no learning curves, immediate impact</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 2. Common Technical Foundation */}
            <Card className="border-2 border-innovate/20 hover:border-innovate/50 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-innovate/10 flex items-center justify-center flex-shrink-0">
                    <Layers className="h-6 w-6 text-innovate" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Common Technical Foundation
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      All four industries share core requirements: <strong>embedded systems, 
                      connectivity (cellular, BLE, Wi-Fi), cloud architecture, and CRA/NIS2 
                      compliance</strong>—enabling proven patterns and{' '}
                      <span className="text-innovate font-medium">maximum delivery efficiency</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 3. Reusable Accelerators */}
            <Card className="border-2 border-innovate/20 hover:border-innovate/50 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-innovate/10 flex items-center justify-center flex-shrink-0">
                    <Zap className="h-6 w-6 text-innovate" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Reusable Accelerators
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      Reference implementations, security frameworks, and integration patterns 
                      developed for one industry <strong>accelerate delivery across all four</strong>—
                      <span className="text-innovate font-medium">maximizing value while maintaining quality</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* 4. Regulatory Alignment */}
            <Card className="border-2 border-innovate/20 hover:border-innovate/50 transition-colors duration-200">
              <CardContent className="p-6">
                <div className="flex items-start gap-4">
                  <div className="h-12 w-12 rounded-lg bg-innovate/10 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-6 w-6 text-innovate" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold mb-2">
                      Regulatory Alignment
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      <strong>CRA compliance, secure boot, OTA updates, and certificate 
                      management</strong> requirements are consistent across these sectors—
                      <span className="text-innovate font-medium">enabling focused expertise 
                      rather than fragmented regulations</span>.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>

          </div>

        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5" />
        <div className="container mx-auto relative px-4">
          <div className="max-w-3xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-bold">
              Building Connected Systems in These Industries?
            </h2>
            <p className="text-xl text-muted-foreground leading-relaxed">
              If you&apos;re working on Industrial IoT, energy infrastructure, connected vehicles, or chip-to-market projects—
              let&apos;s discuss how our focused expertise can accelerate your chip-to-cloud journey.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
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

            {/* Subtle note with left border */}
            <div className="mt-12 max-w-4xl mx-auto">
              <div className="border-l-4 border-innovate/30 pl-6 py-4 text-left">
                <p className="text-muted-foreground leading-relaxed">
                  <strong className="text-foreground">Note:</strong> While we&apos;ve delivered projects 
                  in logistics and consumer IoT, we focus our consulting on these four 
                  core industries where our founders have the deepest direct experience—from Valeo&apos;s 
                  connected car platform to Sequans&apos; 5G chipsets to industrial edge solutions.{' '}
                  <Link href="/contact" className="text-innovate hover:underline font-medium">
                    Contact us
                  </Link>{' '}
                  if your project spans related sectors.
                </p>
              </div>
            </div>

          </div>
        </div>
      </section>

    </div>
  )
}
