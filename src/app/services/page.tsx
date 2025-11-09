import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Image from "next/image"
import { 
  ArrowRight, 
  ArrowUp,
  CheckCircle2, 
  Cpu, 
  Factory, 
  FileCheck, 
  Rocket, 
  Shield, 
  Users, 
  Layers, 
  ShieldCheck, 
  Radar,
  Wifi,
  Cloud,
  Lock,
  Settings,
  BarChart3,
  Package,
  Code,
  Activity,
  Lightbulb,
  Zap,
  Search
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs"



export default function ServicesPage() {
  return (
    <div className="flex flex-col">
      
      {/* Enhanced Hero Section - Visual Below Text */}
     <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background gradient - Midnight Blue (matches homepage) */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628] via-blue-900 to-indigo-900" />
        
        {/* Decorative blur elements */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-500 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-400 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5 bg-[linear-gradient(to_right,white_1px,transparent_1px),linear-gradient(to_bottom,white_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Content Container */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Text Content - TOP */}
            <div className="text-center space-y-6">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30">
                Our Services
              </Badge>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white drop-shadow-lg">
                Founder-Led Technology Advisory & Implementation
              </h1>
              <p className="text-xl md:text-2xl text-white/90 leading-relaxed max-w-3xl mx-auto">
                Compress development cycles, build compliance in, and operate edge reliably.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            {/* Visual Flow - BELOW TEXT - Now Clearly Visible */}
            <div className="relative">
              {/* White background card for contrast */}
              <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 border border-white/20">
                <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-8">
                  
                  {/* Chip */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <Cpu className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow">Silicon</span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-10 h-10 text-white/80 rotate-90 md:rotate-0" />

                  {/* Edge */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-purple-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-purple-300/30">
                      <Settings className="w-12 h-12 text-purple-100 drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow">Edge</span>
                  </div>

                  {/* Arrow */}
                  <ArrowRight className="w-10 h-10 text-white/80 rotate-90 md:rotate-0" />

                  {/* Connectivity */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-cyan-400/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-cyan-300/30">
                      <Wifi className="w-12 h-12 text-cyan-100 drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow">Connectivity</span>
                  </div>


                  {/* Arrow */}
                  <ArrowRight className="w-10 h-10 text-white/80 rotate-90 md:rotate-0" />

                  {/* Cloud */}
                  <div className="flex flex-col items-center gap-2">
                    <div className="w-20 h-20 bg-white/20 rounded-2xl flex items-center justify-center backdrop-blur-sm border border-white/30">
                      <Cloud className="w-12 h-12 text-white drop-shadow-lg" />
                    </div>
                    <span className="text-sm font-semibold text-white drop-shadow">Cloud</span>
                  </div>

                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


      {/* Quick Navigation Bar */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b">
        <div className="container mx-auto px-4">
          <div className="flex justify-center items-center gap-4 md:gap-8 py-4 overflow-x-auto">
            <Link href="#two-core-offers" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Core Offers
            </Link>
            <Link href="#four-pillars-framework" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Four Pillars
            </Link>
            <Link href="#technical-capabilities" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Capabilities
            </Link>
            <Link href="#consulting-methodology" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Methodology
            </Link>
            <Link href="#entry-offers" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Get Started
            </Link>
          </div>
        </div>
      </section>

    {/* Two Core Consulting Offers - Enhanced with Visuals */}
{/* Two Core Consulting Offers - Option 1: Condensed Visible Content */}
<section id="two-core-offers" className="py-20 md:py-32 bg-gray-50 scroll-mt-20">
  <div className="container mx-auto px-4">
    <div className="space-y-16">
      <div className="text-center space-y-4 max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold">Two Core Consulting Offers</h2>
        <p className="text-lg text-muted-foreground">
          Specialized chip-to-cloud consulting tailored to your market segment
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
        
        {/* Offer 1: Silicon-to-Cloud Acceleration */}
        <div id="silicon-to-scale" className="scroll-mt-20">
          <Card className="border-2 border-cyan-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            
            {/* Background Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/silicon-to-cloud.png"
                alt="Silicon to Cloud Illustration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 via-blue-500/75 to-blue-600/80" />
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <Cpu className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Chip</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Wifi className="w-14 h-14 text-cyan-50 drop-shadow-lg" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Connect</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Cloud className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Cloud</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Header */}
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                  <Cpu className="h-6 w-6 text-cyan-600" />
                </div>
                <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                  For Device & Chip Makers
                </Badge>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl">Silicon-to-Cloud Acceleration</CardTitle>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-[#0EA5E9]/10 text-[#0EA5E9] border-[#0EA5E9]/30">
                  <Rocket className="w-3 h-3 mr-1" />
                  Innovate
                </Badge>
                <Badge variant="outline" className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30">
                  <Settings className="w-3 h-3 mr-1" />
                  Orchestrate
                </Badge>
                <Badge variant="outline" className="bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Secure
                </Badge>
              </div>

              <p className="text-muted-foreground">
                <strong>Advisory & Implementation:</strong> Strategic consulting with hands-on delivery—reference designs, secure embedded solutions, connectivity integration, and production-ready architectures.
              </p>
            </CardHeader>
            
            {/* Condensed Visible Content */}
            <CardContent className="flex flex-col flex-1 space-y-6">
              {/* What We Do */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  What We Do
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Strategic assessment & chip-to-cloud architecture definition</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Rapid PoCs, Lab testing & technology validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Embedded modules, connectivity frameworks & secure boot/OTA</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Multi-cloud connectivity (AWS, Azure, OVH)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Certification acceleration (FCC, CE, CRA) & production-ready designs</span>
                  </li>
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2"></span>
                  Key Outcomes
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Faster development cycles from concept to production</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">First-time-right implementations reducing costly redesigns</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Compliance-ready for CRA, FCC, CE certifications</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Offer 2: Resilient Edge */}
        <div id="resilient-edge" className="scroll-mt-20">
          <Card className="border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
            
            {/* Background Image Section */}
            <div className="relative h-48 overflow-hidden">
              <Image
                src="/edge-infrastructure.png"
                alt="Resilient Edge Illustration"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-indigo-500/75 to-purple-600/80" />
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <Radar className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Detect</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Zap className="w-14 h-14 text-purple-50 drop-shadow-lg" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Act</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <ShieldCheck className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Comply</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card Header */}
            <CardHeader className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                  <ShieldCheck className="h-6 w-6 text-purple-600" />
                </div>
                <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                  For Industrial Operators
                </Badge>
              </div>
              
              <CardTitle className="text-2xl md:text-3xl">Resilient Edge</CardTitle>
              
              <div className="flex flex-wrap gap-2">
                <Badge variant="outline" className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30">
                  <Activity className="w-3 h-3 mr-1" />
                  Observe
                </Badge>
                <Badge variant="outline" className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30">
                  <Zap className="w-3 h-3 mr-1" />
                  Respond
                </Badge>
                <Badge variant="outline" className="bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30">
                  <ShieldCheck className="w-3 h-3 mr-1" />
                  Comply
                </Badge>
              </div>

              <p className="text-muted-foreground">
                <strong>Edge Operations & Governance:</strong> Secure, reliable edge operations for critical industrial OT. 
                Keep production running, maintain continuous CRA/NIS2 compliance, and integrate with enterprise SOC—
                without rebuilds or complexity.
              </p>
            </CardHeader>
            
            {/* Condensed Visible Content */}
            <CardContent className="flex flex-col flex-1 space-y-6">
              {/* What We Do */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  What We Do
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">SLO definition, autonomous runbooks, and safe release governance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Continuous IEC 62443, CRA, and NIS2 evidence streaming from edge</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Unified observability linking operations, cybersecurity, and compliance</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">SOC-ready OT telemetry for enterprise or MSSP correlation</span>
                  </li>
                </ul>
              </div>

              {/* Outcomes */}
              <div>
                <h3 className="font-bold text-lg mb-3 flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                  Key Outcomes
                </h3>
                <ul className="space-y-2">
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Prevent production failures before they cascade into costly downtime</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Audit-ready compliance with continuous evidence validation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                    <span className="text-sm text-muted-foreground">Zero-downtime releases with founder-approved promotion gates</span>
                  </li>
                </ul>
              </div>

              {/* CTA Button */}
              <div className="mt-auto pt-4">
                <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>

      </div>

      {/* Industry Applications Cross-Link */}
      <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 max-w-5xl mx-auto">
        <div className="text-center space-y-4">
          <h3 className="text-2xl font-bold text-gray-900">Industry-Specific Applications</h3>
          <p className="text-gray-700">
            See how these consulting services apply to your specific industry—from automotive to 
            manufacturing, logistics to smart buildings.
          </p>
          <Button asChild variant="outline" size="lg">
            <Link href="/industries">
              Explore Industry Solutions
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>

      {/* Back to Top */}
      <div className="text-center">
        <Link href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
          <ArrowUp className="h-4 w-4 mr-2" />
          Back to Top
        </Link>
      </div>
    </div>
  </div>
</section>

     {/* Four Pillars Framework - FINAL CORRECTED VERSION */}
      <section id="four-pillars-framework" className="py-20 md:py-32 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Updated Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Four Pillars Framework</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                One delivery methodology applied to both offers—Silicon-to-Cloud (build) and Resilient Edge (run). 
                All clients benefit from the four pillars; emphasis shifts by engagement.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* Pillar 1: Innovate / Accelerate */}
              <AccordionItem value="innovate" className="border-2 border-[#0EA5E9]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#0EA5E9]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#0EA5E9]/10 rounded-xl flex-shrink-0">
                      <Rocket className="w-6 h-6 md:w-8 md:h-8 text-[#0EA5E9]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Innovate / Accelerate</h3>
                      <p className="text-sm text-[#0EA5E9] font-medium">
                        From rapid PoC validation to production-ready reference designs and complete solution architecture
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What It Means:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Transform innovation into implementation—from rapid PoC validation to production-ready 
                        reference designs and complete solution architecture. Scope flexes based on your needs: 
                        quick feasibility studies, critical module development, or full reference implementations 
                        for market-ready products.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            <strong>Rapid PoCs</strong> validating critical assumptions 
                            (typical 4-6 weeks for technology feasibility studies)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            <strong>Production-ready reference designs</strong> including secure firmware, 
                            connectivity stacks, and cloud integration (customized timeline based on complexity)
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            <strong>Architecture blueprints</strong> documenting integration patterns, 
                            vendor selections, and implementation roadmaps
                          </span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#0EA5E9] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">
                            <strong>Critical module implementations</strong> proving feasibility of 
                            complex integration points for your specific use case
                          </span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-blue-50 p-6 rounded-lg border-l-4 border-[#0EA5E9] mt-6">
                      <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                        <Lightbulb className="h-5 w-5 text-[#0EA5E9]" />
                        Right-Sized Engagement
                      </h4>
                      <p className="text-sm text-gray-700">
                        <strong>Your choice:</strong> Start with a focused PoC to validate feasibility, 
                        or engage directly for complete reference design development if requirements are 
                        well-defined. Many Silicon-to-Cloud clients begin with rapid validation, then 
                        expand into full solution implementation once technical risks are addressed.
                      </p>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-base">How This Applies by Offer:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Silicon-to-Cloud Acceleration
                          </p>
                          <p className="text-sm text-gray-700">
                            Primary pillar for device makers—from PoC validation through complete 
                            reference design development with production-ready implementations.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Resilient Edge
                          </p>
                          <p className="text-sm text-gray-700">
                            Lighter application: validating edge resilience patterns, SLO definitions, 
                            and compliance evidence pipelines before fleet-wide deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#0EA5E9]/5 p-6 rounded-lg border-l-4 border-[#0EA5E9]">
                      <p className="text-sm text-gray-700">
                        <strong className="text-gray-900">PoC Example:</strong> Automotive tier-1 validated 
                        cellular-to-AWS architecture in 5 weeks—confirming latency, security model, and OTA 
                        feasibility before $2M development commitment.
                      </p>
                      <p className="text-sm text-gray-700 mt-3">
                        <strong className="text-gray-900">Solution Example:</strong> Industrial equipment 
                        manufacturer developed complete reference design including secure embedded firmware, 
                        cellular connectivity stack, AWS IoT integration, and OTA framework over 16 weeks—enabling 
                        3 OEM customers to launch products 6 months faster.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pillar 2: Orchestrate / Scale */}
              <AccordionItem value="orchestrate" className="border-2 border-[#8B5CF6]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#8B5CF6]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#8B5CF6]/10 rounded-xl flex-shrink-0">
                      <Settings className="w-6 h-6 md:w-8 md:h-8 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Orchestrate / Scale</h3>
                      <p className="text-sm text-[#8B5CF6] font-medium">
                        Scale from pilot to production with zero-touch provisioning, multi-vendor governance, and automated operations
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What It Means:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Production-scale orchestration frameworks enabling seamless transition from pilot deployments 
                        to mass production. Implement zero-touch device provisioning, automated fleet management, and 
                        multi-vendor coordination that scales from hundreds to millions of devices.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Zero-touch provisioning workflows (device identity, secure bootstrap, cloud registration)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Multi-vendor governance frameworks coordinating distributed development teams</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Automated operations playbooks (deployment, monitoring, incident response)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Fleet management architectures for OTA updates and configuration management at scale</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-base">How This Applies by Offer:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Silicon-to-Cloud Acceleration
                          </p>
                          <p className="text-sm text-gray-700">
                            Zero-touch device provisioning, fleet management architecture, 
                            and production-scale operations for device deployments.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Resilient Edge
                          </p>
                          <p className="text-sm text-gray-700">
                            Primary pillar—autonomous edge operations with SLO governance, 
                            fleet-wide policy deployment, and SOC integration for industrial OT.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#8B5CF6]/5 p-6 rounded-lg border-l-4 border-[#8B5CF6]">
                      <p className="text-sm text-gray-700">
                        <strong className="text-gray-900">Example Outcome:</strong> Industrial IoT platform scaled 
                        from 500-device pilot to 50K deployment using zero-touch provisioning architecture—reducing 
                        per-device setup from 45 minutes to 90 seconds while coordinating 3 hardware vendors and 
                        2 cloud integration partners.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pillar 3: Secure / Harden */}
              <AccordionItem value="secure" className="border-2 border-[#EF4444]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#EF4444]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#EF4444]/10 rounded-xl flex-shrink-0">
                      <ShieldCheck className="w-6 h-6 md:w-8 md:h-8 text-[#EF4444]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Secure / Harden</h3>
                      <p className="text-sm text-[#EF4444] font-medium">
                        Security-by-design from device to cloud (GDPR, CRA/NIS2 compliance)
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What It Means:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Security embedded in architecture decisions from day one, not retrofitted after development. 
                        Implement defense-in-depth across device, transport, and cloud layers while building compliance 
                        into development processes to meet EU Cyber Resilience Act (CRA), NIS2, and GDPR requirements.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">CRA compliance roadmaps mapping regulatory requirements to architecture decisions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Security frameworks (secure boot, hardware root-of-trust, cryptographic key management)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Threat modeling and vulnerability assessment integrated into design phase</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#EF4444] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Security incident response workflows and vulnerability disclosure processes</span>
                        </li>
                      </ul>
                    </div>

                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-base">How This Applies by Offer:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Silicon-to-Cloud Acceleration
                          </p>
                          <p className="text-sm text-gray-700">
                            Security-by-design with CRA compliance, secure boot implementation, 
                            and device certificate management for connected products.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Resilient Edge
                          </p>
                          <p className="text-sm text-gray-700">
                            IEC 62443 and NIS2 compliance, continuous evidence streaming, 
                            and SOC-ready telemetry for critical industrial OT.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#EF4444]/5 p-6 rounded-lg border-l-4 border-[#EF4444]">
                      <p className="text-sm text-gray-700">
                        <strong className="text-gray-900">Example Outcome:</strong> Semiconductor company preparing 
                        CRA-compliant reference design received security architecture defining secure boot chain, 
                        OTA update verification, and vulnerability disclosure process—enabling ecosystem partners 
                        to inherit compliance foundation and accelerate CE marking by 6 months.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* Pillar 4: Sense / Respond - CORRECTED */}
              <AccordionItem value="sense" className="border-2 border-[#10B981]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#10B981]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-16 md:h-16 flex items-center justify-center bg-[#10B981]/10 rounded-xl flex-shrink-0">
                      <Activity className="w-6 h-6 md:w-8 md:h-8 text-[#10B981]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold text-gray-900">Sense / Respond</h3>
                      <p className="text-sm text-[#10B981] font-medium">
                        Close the loop from sensor data to automated decision with edge analytics, predictive ML, and sensor-to-decision automation
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-6 pt-4">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What It Means:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Transform raw sensor data into automated actions through intelligent edge processing and 
                        cloud-based analytics. Implement closed-loop systems where devices sense conditions, analyze 
                        patterns, predict outcomes, and trigger automated responses—enabling predictive maintenance, 
                        real-time optimization, and autonomous operations.
                      </p>
                    </div>
                    
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What We Do:</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Edge analytics patterns for low-latency decisions (signal processing, feature extraction, threshold rules)</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Predictive ML pipelines with model selection, drift monitoring, and retraining workflows</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Sensor-to-decision frameworks: trigger matrices, action policies, and rollback safeguards</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Time-series data pipelines for telemetry capture, retention strategy, and SOC correlation</span>
                        </li>
                      </ul>
                    </div>

                    {/* CORRECTED: Changed "Edge Infrastructure Integration" to "Resilient Edge" and Factory icon to ShieldCheck */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-base">How This Applies by Offer:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Silicon-to-Cloud Acceleration
                          </p>
                          <p className="text-sm text-gray-700">
                            Optional—edge analytics and ML when devices need intelligent local decisions 
                            (predictive maintenance, anomaly detection, energy optimization).
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                            <ShieldCheck className="w-4 h-4" />
                            Resilient Edge
                          </p>
                          <p className="text-sm text-gray-700">
                            Primary pillar—closed-loop operations with anomaly detection, policy-driven actions, 
                            and failover without cloud dependency to keep production running.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    <div className="bg-[#10B981]/5 p-6 rounded-lg border-l-4 border-[#10B981]">
                      <p className="text-sm text-gray-700">
                        <strong className="text-gray-900">Example Outcome:</strong> Industrial equipment manufacturer 
                        implemented predictive maintenance using edge vibration analysis and cloud ML models—detecting 
                        bearing failures 72 hours before breakdown, reducing unplanned downtime 35% and enabling 
                        just-in-time parts ordering.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>
          </div>
        </div>
      </section>


     {/* Core Technical Capabilities - BY SERVICE TYPE */}
      <section id="technical-capabilities" className="py-20 md:py-32 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Core Technical Capabilities</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Technologies we&apos;ve used in production chip-to-cloud deployments—validated through 
                real-world implementations, not aspirational lists
              </p>
            </div>

            {/* Tabbed Capabilities */}
            <Tabs defaultValue="core-platform" className="w-full">
              <TabsList className="grid w-full grid-cols-2 h-auto">
                <TabsTrigger value="core-platform" className="py-3">Core Platform Stack</TabsTrigger>
                <TabsTrigger value="specialized" className="py-3">Specialized Services</TabsTrigger>
              </TabsList>

              {/* Tab 1: Core Platform Stack (3 cards - what everyone needs) */}
              <TabsContent value="core-platform" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Embedded Systems */}
                  <Card className="border-l-4 border-[#0EA5E9]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0EA5E9]/10 rounded-lg mb-4">
                        <Cpu className="w-6 h-6 text-[#0EA5E9]" />
                      </div>
                      <CardTitle className="text-xl">Embedded Systems</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">NXP i.MX RT Secure MCU</h4>
                        <p className="text-sm text-muted-foreground">
                          Secure embedded systems consulting with HAB (High Assurance Boot), hardware 
                          root-of-trust, verified boot chain, and CRA-aligned security architecture.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">ARM Cortex-M/A Platforms</h4>
                        <p className="text-sm text-muted-foreground">
                          Architecture consulting for ARM-based embedded systems—RTOS integration 
                          (FreeRTOS, Zephyr), power optimization, and secure firmware development.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Connectivity */}
                  <Card className="border-l-4 border-[#8B5CF6]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg mb-4">
                        <Wifi className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <CardTitle className="text-xl">Connectivity</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Cellular IoT Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          LTE-M, NB-IoT, and 4G/5G connectivity consulting—carrier certification 
                          support, power optimization, and network protocol implementation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">UWB Positioning Systems</h4>
                        <p className="text-sm text-muted-foreground">
                          Ultra-wideband integration consulting for precise indoor/outdoor positioning 
                          (±10 cm accuracy) and secure ranging for asset tracking applications.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">BLE, Wi-Fi, LoRaWAN</h4>
                        <p className="text-sm text-muted-foreground">
                          Short-range and LPWAN connectivity architecture—protocol selection, 
                          network topology design, and gateway integration.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Cloud Platforms */}
                  <Card className="border-l-4 border-[#0EA5E9]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#0EA5E9]/10 rounded-lg mb-4">
                        <Cloud className="w-6 h-6 text-[#0EA5E9]" />
                      </div>
                      <CardTitle className="text-xl">Cloud Platforms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">AWS IoT Core Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Device provisioning with AWS IoT Core thing registry, device shadows, and 
                          rules engine—zero-touch onboarding and secure credential management.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">OVHcloud EU Infrastructure</h4>
                        <p className="text-sm text-muted-foreground">
                          EU data residency consulting for GDPR-aligned architectures—cost-effective 
                          European cloud connectivity for device fleets requiring data sovereignty.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Vendor Lock-In Mitigation</h4>
                        <p className="text-sm text-muted-foreground">
                          Architecture patterns preventing cloud lock-in—abstraction layers enabling 
                          migration flexibility as business needs evolve.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                </div>
              </TabsContent>

              {/* Tab 2: Specialized Services (3 cards - advanced/specific needs) */}
              <TabsContent value="specialized" className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  
                  {/* Security Foundations */}
                  <Card className="border-l-4 border-[#EF4444]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#EF4444]/10 rounded-lg mb-4">
                        <Lock className="w-6 h-6 text-[#EF4444]" />
                      </div>
                      <CardTitle className="text-xl">Security Foundations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Device Certificate Management</h4>
                        <p className="text-sm text-muted-foreground">
                          X.509 certificate provisioning with lifecycle management—expiration 
                          monitoring, automated rotation, and secure credential injection.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Secure Boot & OTA Updates</h4>
                        <p className="text-sm text-muted-foreground">
                          Hardware root-of-trust and verified boot chain implementation—protecting 
                          against unauthorized code execution with secure OTA firmware distribution.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Industrial Security (IEC 62443)</h4>
                        <p className="text-sm text-muted-foreground">
                          Security-by-design consulting for industrial OT environments—network segmentation, 
                          encrypted transport, and secure credential management for OT-to-cloud connectivity.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Resilient Edge Operations */}
                  <Card className="border-l-4 border-[#8B5CF6]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg mb-4">
                        <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <CardTitle className="text-xl">Resilient Edge Operations</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">SLO & Runbook Enablement</h4>
                        <p className="text-sm text-muted-foreground">
                          Define uptime targets, MTTR commitments, and autonomous response policies—
                          creating runbooks that trigger actions before failures cascade.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Continuous Compliance Evidence</h4>
                        <p className="text-sm text-muted-foreground">
                          IEC 62443, CRA, and NIS2 validation streaming from edge nodes—firmware integrity, 
                          SBOM tracking, and audit-ready reporting for regulatory deadlines.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Fleet Policy Governance</h4>
                        <p className="text-sm text-muted-foreground">
                          Canary rollouts, promotion gates, and automated rollback—enabling zero-downtime 
                          releases with health checks and SLO-based approval workflows.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">SOC-Ready Observability</h4>
                        <p className="text-sm text-muted-foreground">
                          Unified dashboards linking operational health, cybersecurity posture, and compliance—
                          standardized OT telemetry for enterprise or MSSP SOC integration.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                  {/* Data & Insights */}
                  <Card className="border-l-4 border-[#10B981]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#10B981]/10 rounded-lg mb-4">
                        <BarChart3 className="w-6 h-6 text-[#10B981]" />
                      </div>
                      <CardTitle className="text-xl">Data & Insights</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Business Visibility Dashboards</h4>
                        <p className="text-sm text-muted-foreground">
                          Executive dashboards for device fleet monitoring—connection success rates, 
                          operational costs, and real-time KPIs enabling data-driven decisions.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Time-Series Data Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Telemetry data storage and query optimization—InfluxDB, TimescaleDB 
                          consulting for high-volume sensor data.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Edge Analytics Consulting</h4>
                        <p className="text-sm text-muted-foreground">
                          Local decision-making for latency-sensitive use cases—predictive 
                          analytics deployment requiring sub-second response times.
                        </p>
                      </div>
                    </CardContent>
                  </Card>

                </div>
              </TabsContent>

            </Tabs>

            {/* Validation Approach */}
            <Card className="mt-12 p-8 bg-primary/5 border-2 border-primary/20 max-w-4xl mx-auto">
              <div className="text-center space-y-4">
                <div className="flex items-center justify-center gap-3 mb-4">
                  <Shield className="h-8 w-8 text-primary" />
                  <h3 className="text-2xl font-bold">Validation Before Production</h3>
                </div>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  We validate critical architectures with proof-of-concept testing on development 
                  hardware before recommending production deployment—catching integration conflicts 
                  in controlled environments, not during customer pilots.
                </p>
                <p className="text-sm text-muted-foreground">
                  This reduces integration risk without requiring elaborate lab infrastructure—
                  focusing validation efforts on the specific technical decisions affecting your project.
                </p>
              </div>
            </Card>

            {/* Back to Top */}
            <div className="text-center">
              <Link href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Link>
            </div>

          </div>
        </div>
      </section>

      {/* Production-Ready Deliverables - ACCORDION VERSION */}
      <section id="deliverables" className="py-20 md:py-32 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Header */}
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Production-Ready Deliverables</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Every consulting engagement delivers production-ready documentation eliminating integration 
                ambiguity—developed through founder-led strategic advisory process
              </p>
            </div>

           {/* Accordion Deliverables - IMPROVED */}
          <Accordion type="single" collapsible className="w-full space-y-4">
            
            {/* 1. Architecture Decision Records (ADRs) */}
            <AccordionItem value="blueprint" className="border-2 border-primary/20 rounded-lg overflow-hidden bg-white">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-primary/5">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                    <Package className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold">Architecture Decision Records</h3>
                    <p className="text-sm text-muted-foreground">
                      Documented rationale for every major technical choice
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-8">
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Comprehensive technical documentation answering "why we chose X over Y"—eliminating second-guessing, 
                    enabling confident execution, and securing stakeholder buy-in with clear cost-benefit trade-offs.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Technology selection rationale:</strong> Chipset, connectivity, 
                        cloud platform choices with documented cost, performance, and vendor lock-in tradeoffs
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Integration specifications:</strong> API contracts, data schemas, 
                        and interface standards enabling parallel vendor work without constant coordination
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Performance requirements:</strong> Latency targets, bandwidth budgets, 
                        throughput specs with measurement criteria and acceptance thresholds
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Scaling roadmap:</strong> Pilot → 100s → 1000s+ devices with 
                        infrastructure triggers and cost projections at each stage
                      </span>
                    </li>
                  </ul>
                  
                  {/* Offer Context */}
                  <div className="bg-blue-50 p-4 rounded-lg border-l-4 border-primary mt-4">
                    <p className="text-xs text-gray-700">
                      <strong>Primary deliverable for Silicon-to-Cloud:</strong> Enables device makers to move from concept 
                      to production with validated architecture. Also used in Resilient Edge for documenting edge governance patterns.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 2. Security & Compliance Framework */}
            <AccordionItem value="security" className="border-2 border-[#EF4444]/20 rounded-lg overflow-hidden bg-white">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#EF4444]/5">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#EF4444]/10 rounded-lg flex-shrink-0">
                    <ShieldCheck className="w-6 h-6 md:w-7 md:h-7 text-[#EF4444]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold">Security & Compliance Frameworks</h3>
                    <p className="text-sm text-muted-foreground">
                      Audit-ready CRA, IEC 62443, and NIS2 evidence
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-8">
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Security architecture mapped to regulatory requirements with continuous evidence generation—
                    preventing "compliance retrofit" failures and enabling smooth audits for EU market access.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Defense-in-depth architecture:</strong> Security controls at 
                        device (secure boot, TPM), transport (TLS/mTLS), and cloud (IAM, encryption) layers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Compliance mapping:</strong> CRA essential requirements, 
                        IEC 62443 security levels, NIS2 measures with traceability matrices and evidence links
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">SBOM & vulnerability tracking:</strong> Software bill of materials 
                        with automated CVE monitoring and patching workflows
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Audit-ready evidence packets:</strong> Test results, scan outputs, 
                        compliance matrices, and remediation records for certification bodies
                      </span>
                    </li>
                  </ul>
                  
                  {/* Offer Context */}
                  <div className="bg-red-50 p-4 rounded-lg border-l-4 border-[#EF4444] mt-4">
                    <p className="text-xs text-gray-700">
                      <strong>Both offers:</strong> Silicon-to-Cloud (CRA, CE marking) and Resilient Edge (IEC 62443, NIS2 for industrial OT). 
                      Continuous evidence streaming is primary for Resilient Edge.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 3. Operations Runbooks */}
            <AccordionItem value="operations" className="border-2 border-[#8B5CF6]/20 rounded-lg overflow-hidden bg-white">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#8B5CF6]/5">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg flex-shrink-0">
                    <Settings className="w-6 h-6 md:w-7 md:h-7 text-[#8B5CF6]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold">Operations Runbooks & SLO Definitions</h3>
                    <p className="text-sm text-muted-foreground">
                      Deployment, rollout, rollback, and incident response procedures
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-8">
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    Step-by-step operational procedures enabling autonomous execution without constant consultant dependency—
                    covering deployment gates, canary rollouts, automated rollback, and incident response.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">SLO definitions:</strong> Uptime targets, MTTR commitments, 
                        and error budgets with measurement criteria and escalation triggers
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Canary deployment procedures:</strong> Phased rollout (5% → 25% → 100%) 
                        with automated health checks and promotion gates
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Automated rollback policies:</strong> Error thresholds (e.g., >5% failure rate) 
                        triggering automatic reversion with notification workflows
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Incident response templates:</strong> Post-mortem structure, 
                        root cause analysis, and continuous improvement tracking
                      </span>
                    </li>
                  </ul>
                  
                  {/* Offer Context */}
                  <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-[#8B5CF6] mt-4">
                    <p className="text-xs text-gray-700">
                      <strong>Primary deliverable for Resilient Edge:</strong> SLO governance and autonomous runbooks are core to 
                      edge operations. Silicon-to-Cloud uses simplified deployment checklists for device rollouts.
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

            {/* 4. Multi-Vendor Coordination Framework */}
            <AccordionItem value="program" className="border-2 border-[#10B981]/20 rounded-lg overflow-hidden bg-white">
              <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#10B981]/5">
                <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                    <Users className="w-6 h-6 md:w-7 md:h-7 text-[#10B981]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl md:text-2xl font-bold">Multi-Vendor Coordination Framework</h3>
                    <p className="text-sm text-muted-foreground">
                      RACI matrices and interface contracts for distributed teams
                    </p>
                  </div>
                </div>
              </AccordionTrigger>
              <AccordionContent className="px-6 md:px-8 pb-8">
                <div className="space-y-4 pt-4">
                  <p className="text-muted-foreground">
                    When multiple vendors contribute components (chipmaker, connectivity provider, cloud platform), 
                    clear coordination frameworks prevent integration chaos—defining ownership and change control.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">RACI responsibility matrix:</strong> Who owns what—eliminating 
                        finger-pointing with clear Responsible, Accountable, Consulted, Informed definitions
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Interface contracts:</strong> API specifications and data standards 
                        enabling parallel work without blocking dependencies
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Change control process:</strong> Formal approval workflows preventing 
                        "surprise" updates that break integrations
                      </span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">
                        <strong className="text-foreground">Vendor performance scorecards:</strong> Delivery timeliness, quality metrics, 
                        and responsiveness tracking for data-driven vendor management
                      </span>
                    </li>
                  </ul>
                  
                  {/* Offer Context */}
                  <div className="bg-green-50 p-4 rounded-lg border-l-4 border-[#10B981] mt-4">
                    <p className="text-xs text-gray-700">
                      <strong>Both offers:</strong> Silicon-to-Cloud (coordinating chipmakers, connectivity providers, cloud platforms) and 
                      Resilient Edge (coordinating OT vendors, edge hardware suppliers, SOC integration partners).
                    </p>
                  </div>
                </div>
              </AccordionContent>
            </AccordionItem>

          </Accordion>

            {/* CTA */}
            {/*<div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Request Sample Blueprint</Link>
              </Button>
            </div>*/}

            {/* Back to Top */}
            <div className="text-center">
              <Link href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Link>
            </div>

          </div>
        </div>
      </section>


      {/* Three-Phase Delivery Process - IMPROVED */}
<section id="consulting-methodology" className="py-20 md:py-32 scroll-mt-20">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto space-y-16">
      
      {/* Header */}
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Three-Phase Delivery Process</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Fixed-price engagement with clear deliverables and go/no-go gates at each phase
        </p>
      </div>

      {/* Visual Timeline - NEW */}
      <div className="flex items-center justify-center gap-4 py-8 max-w-4xl mx-auto">
        <div className="flex-1 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-100 to-cyan-200 flex items-center justify-center mb-3 mx-auto ring-4 ring-cyan-200/50">
            <div className="text-center">
              <span className="block font-bold text-2xl text-cyan-600">1</span>
              <span className="block text-xs text-cyan-700">Discovery</span>
            </div>
          </div>
          <p className="text-sm font-semibold">4-6 weeks</p>
          <p className="text-xs text-muted-foreground">Fixed price</p>
        </div>
        <ArrowRight className="text-muted-foreground w-8 h-8 flex-shrink-0" />
        <div className="flex-1 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-purple-100 to-purple-200 flex items-center justify-center mb-3 mx-auto ring-4 ring-purple-200/50">
            <div className="text-center">
              <span className="block font-bold text-2xl text-purple-600">2</span>
              <span className="block text-xs text-purple-700">Build</span>
            </div>
          </div>
          <p className="text-sm font-semibold">12-20 weeks</p>
          <p className="text-xs text-muted-foreground">Fixed milestones</p>
        </div>
        <ArrowRight className="text-muted-foreground w-8 h-8 flex-shrink-0" />
        <div className="flex-1 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-green-100 to-green-200 flex items-center justify-center mb-3 mx-auto ring-4 ring-green-200/50">
            <div className="text-center">
              <span className="block font-bold text-2xl text-green-600">3</span>
              <span className="block text-xs text-green-700">Deploy</span>
            </div>
          </div>
          <p className="text-sm font-semibold">8-12 weeks</p>
          <p className="text-xs text-muted-foreground">Fixed scope</p>
        </div>
      </div>

      {/* Phase Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
        
        {/* Arrow Connector 1→2 */}
        <div className="hidden md:block absolute top-32 left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowRight className="h-8 w-8 text-purple-400/40" strokeWidth={2.5} />
        </div>
        
        {/* Arrow Connector 2→3 */}
        <div className="hidden md:block absolute top-32 left-[66.66%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowRight className="h-8 w-8 text-green-400/40" strokeWidth={2.5} />
        </div>

        {/* Phase 1: Discovery & Validation */}
        <Card className="border-l-4 border-cyan-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-cyan-100 flex items-center justify-center ring-4 ring-cyan-200/50">
                <Search className="h-7 w-7 text-cyan-600" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Discovery</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">4-6 weeks • Fixed price</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            {/* Removed "What Happens" paragraph - goes straight to deliverables */}
            <h4 className="font-semibold text-base">Core Deliverables:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Architecture decision records</strong> with tech stack rationale</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Compliance gap analysis</strong> (CRA/IEC 62443/NIS2)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Business case</strong> with ROI projections</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-0.5" />
                <span><strong>Implementation roadmap</strong> with phases & resources</span>
              </li>
            </ul>

            <div className="bg-cyan-50 p-4 rounded-lg border-l-4 border-cyan-500 mt-4">
              <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-cyan-600" />
                Go/No-Go Gate
              </p>
              <p className="text-xs text-muted-foreground">
                Executive sign-off on validated blueprint. Many clients stop here for internal dev.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Phase 2: Build & Validate */}
        <Card className="border-l-4 border-purple-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-purple-100 flex items-center justify-center ring-4 ring-purple-200/50">
                <Code className="h-7 w-7 text-purple-600" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Build</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">12-20 weeks • Fixed milestones</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h4 className="font-semibold text-base">Core Deliverables:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Bi-weekly demos</strong> with working code</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Reference implementations</strong> (firmware, policies, integrations)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>CI/CD pipelines</strong> with automated testing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Operations runbooks</strong> for deployment & incidents</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-0.5" />
                <span><strong>Security frameworks</strong> with audit evidence</span>
              </li>
            </ul>

            <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500 mt-4">
              <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-purple-600" />
                Implementation Gate
              </p>
              <p className="text-xs text-muted-foreground">
                Functional demos validated, >80% test coverage, security verified.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Phase 3: Deploy & Handoff */}
        <Card className="border-l-4 border-green-500 hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center ring-4 ring-green-200/50">
                <Rocket className="h-7 w-7 text-green-600" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Deploy</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">8-12 weeks • Fixed scope</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-4">
            <h4 className="font-semibold text-base">Core Deliverables:</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Pilot deployment</strong> (10-100 devices/nodes)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Performance validation</strong> against SLO targets</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Operational handoff</strong> with shadowing</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Documentation transfer</strong> (ADRs, runbooks, compliance)</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                <span><strong>Team training</strong> on operations & troubleshooting</span>
              </li>
            </ul>

            <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500 mt-4">
              <p className="text-sm font-semibold mb-1 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-green-600" />
                Production Gate
              </p>
              <p className="text-xs text-muted-foreground">
                Pilot metrics achieved, your team operates independently—ready to scale.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* CTA */}
      <div className="text-center pt-8">
        <Button asChild size="lg">
          <Link href="/contact">Schedule Discovery Phase →</Link>
        </Button>
        <p className="text-sm text-muted-foreground mt-3">
          30-minute consultation with both founders • No commitment required
        </p>
      </div>
    </div>
  </div>
</section>

      {/* Founder Accountability */}
      <section id="founder-accountability" className="py-20 md:py-32 bg-muted/30 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto space-y-12">
            
            {/* Section Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Founder-Led Throughout</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Unlike large consultancies where partners sell then disappear, both Edge Pulsar founders 
                remain accountable from initial consultation through final handoff—no bait-and-switch with 
                junior staff.
              </p>
            </div>

            {/* The Model Explanation */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              
              {/* Left: How Most Consultancies Work */}
              <Card className="border-2 border-destructive/20 bg-destructive/5">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">❌</span>
                    Traditional Consulting Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Sales Phase</p>
                        <p>Senior partner presents, promises their involvement</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Delivery Phase</p>
                        <p>Junior consultants (1-3 years exp) do actual work, partners vanish</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Issue Resolution</p>
                        <p>Juniors escalate, slow response, learning on your project</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold">4</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Result</p>
                        <p>Paying partner rates for junior delivery, generic PowerPoint solutions</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Right: Edge Pulsar Model */}
              <Card className="border-2 border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="text-xl flex items-center gap-2">
                    <span className="text-2xl">✅</span>
                    Edge Pulsar Founder Model
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-3 text-sm text-muted-foreground">
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">1</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Initial Consultation</p>
                        <p>Both founders on discovery call, technical assessment begins immediately</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">2</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Delivery Phase</p>
                        <p>Founders architect and lead; specialists code under daily founder oversight</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">3</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Issue Resolution</p>
                        <p>Direct founder access via Slack/email, same-day response on critical issues</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <span className="text-xs font-bold text-primary">4</span>
                      </div>
                      <div>
                        <p className="font-semibold text-foreground">Result</p>
                        <p>25+ years expertise on every decision, working code with audit-ready docs</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

            </div>

            {/* Accountability Guarantees */}
            <div className="bg-gradient-to-br from-primary/5 to-background p-8 rounded-xl border-2 border-primary/20">
              <h3 className="text-2xl font-bold mb-6 text-center">Founder Accountability Guarantees</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Same Founders, Start to Finish</p>
                    <p className="text-sm text-muted-foreground">
                      Both founders named in contract, attend all strategic meetings, maintain client relationship 
                      throughout engagement—no staff rotation
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Direct Communication Channel</p>
                    <p className="text-sm text-muted-foreground">
                      Founders accessible via Slack/email for technical decisions—no filtering through account 
                      managers or junior consultants
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Code Review by Founders</p>
                    <p className="text-sm text-muted-foreground">
                      When implementation specialists contribute, every critical module reviewed and approved 
                      by founders—quality gated by 25+ year veterans
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="h-6 w-6 text-primary flex-shrink-0 mt-1" />
                  <div>
                    <p className="font-semibold mb-1">Post-Engagement Advisory</p>
                    <p className="text-sm text-muted-foreground">
                      After handoff, founders remain available for architectural questions and escalations—
                      no abrupt consultant departure
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Who You're Working With */}
            <div className="text-center space-y-6">
              <h3 className="text-2xl font-bold">Meet the Founders</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Riadh Berhouma</p>
                      <p className="text-sm text-muted-foreground">CEO & Co-founder</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      20+ years embedded systems, automotive IoT, product leadership at global tech firms
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/about#riadh">View Full Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
                <Card>
                  <CardContent className="p-6 space-y-3">
                    <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                      <Users className="w-10 h-10 text-primary" />
                    </div>
                    <div>
                      <p className="font-bold text-lg">Mazen Neifer</p>
                      <p className="text-sm text-muted-foreground">CTO & Co-founder</p>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      25+ years cloud, embedded systems, telecom architecture at enterprise scale
                    </p>
                    <Button asChild variant="outline" size="sm" className="w-full">
                      <Link href="/about#mazen">View Full Profile</Link>
                    </Button>
                  </CardContent>
                </Card>
              </div>
            </div>

          </div>
        </div>
      </section>


      <section id="get-started" className="py-20 md:py-32 bg-gradient-to-br from-primary/5 to-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto space-y-12">
            
            {/* Heading */}
            <div className="text-center space-y-6">
              <h2 className="text-3xl md:text-4xl font-bold">Let's Start the Conversation</h2>
              <p className="text-xl text-muted-foreground">
                Schedule a consultation with our founders to discuss your chip-to-cloud objectives, 
                technical challenges, and engagement approach. Every project is founder-led from day one.
              </p>
            </div>

            {/* Single Card */}
            <Card className="border-2 border-primary/20 max-w-2xl mx-auto">
              <CardContent className="p-8 md:p-12 space-y-8">
                <div className="flex items-center gap-4">
                  <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Rocket className="w-8 h-8 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold mb-2">Schedule Founder Consultation</h3>
                    <p className="text-muted-foreground">30-minute initial discussion</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We'll assess your current state, understand your technical requirements, and recommend 
                    the optimal engagement approach—from strategic validation to full implementation.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct access to both founders (no sales team)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Customized engagement scope and timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Transparent fixed-price proposal</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>All projects follow our proven three-phase methodology</span>
                    </li>
                  </ul>
                </div>

                <Button asChild className="w-full" size="lg">
                  <Link href="/contact">
                    Schedule Consultation
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </CardContent>
            </Card>

            {/* Optional: Small CRA urgency note */}
            <div className="max-w-2xl mx-auto bg-secure/5 border border-secure/20 rounded-lg p-6">
              <div className="flex items-start gap-4">
                <Shield className="w-6 h-6 text-secure flex-shrink-0 mt-1" />
                <div>
                  <p className="font-semibold text-secure mb-2">Time-Sensitive CRA Compliance?</p>
                  <p className="text-sm text-muted-foreground mb-3">
                    If you're facing an urgent CRA audit or December 2027 deadline, we offer 
                    1-day workshops for rapid compliance assessment.
                  </p>
                  <Button asChild variant="outline" size="sm" className="border-secure/30 text-secure hover:bg-secure/10">
                    <Link href="/contact?service=cra">Book CRA Workshop</Link>
                  </Button>
                </div>
              </div>
            </div>

            {/* Back to Top */}
            <div className="text-center pt-8">
              <Link href="#" className="inline-flex items-center text-sm text-muted-foreground hover:text-primary">
                <ArrowUp className="h-4 w-4 mr-2" />
                Back to Top
              </Link>
            </div>

          </div>
        </div>
      </section>
    </div>
  )
}
