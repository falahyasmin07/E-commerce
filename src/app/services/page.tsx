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
  Network,
  Smartphone,
  Search
} from "lucide-react"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import FourPillarsCarousel from "@/components/four-pillars-carousel"
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
            <div className="text-center space-y-8">
              <Badge className="bg-white/20 text-white border-white/30 hover:bg-white/30 text-sm px-4 py-1.5">
                Our Services
              </Badge>
              
              <div className="space-y-6">
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white drop-shadow-lg leading-tight">
                  Chip-to-Edge<br className="hidden md:block" /> Technical Advisor & Solution Builder
                </h1>                
                <div className="space-y-4 max-w-3xl mx-auto">
                  <p className="text-xl md:text-2xl text-white/95 leading-relaxed font-medium">
                    Strategic advisory and hands-on implementation—from chip selection to cloud integration
                  </p>
                  <p className="text-base md:text-lg text-white/75 leading-relaxed">
                    Accelerate development cycles, build security in, and deliver production-ready architectures.
                  </p>
                </div>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-2">
                <Button size="lg" asChild className="bg-white text-blue-600 hover:bg-gray-100 shadow-xl hover:shadow-2xl transition-all">
                  <Link href="/contact">
                    Schedule Discovery Call
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

      {/* Three Core Consulting Offers - Edge Continuum */}
      <section id="three-core-offers" className="py-20 md:py-32 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="space-y-16">
            
            {/* Section header */}
            <div className="text-center space-y-4 max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-bold">Three Core Consulting Offers</h2>
              <p className="text-lg text-muted-foreground">
                Comprehensive solutions spanning the edge continuum: IoT Core, Near Edge, and Far Edge
              </p>
            </div>

            {/* Grid of three offers */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
              
              {/* Offer 1: IoT Core (Device Edge) */}
              <div id="iot-core" className="scroll-mt-20">
                <Card className="border-2 border-cyan-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Background Image */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/silicon-to-cloud.png"
                      alt="IoT Core Device Edge Illustration"
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
                          <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Device</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-cyan-100 flex items-center justify-center">
                        <Cpu className="h-6 w-6 text-cyan-600" />
                      </div>
                      <Badge variant="secondary" className="bg-cyan-100 text-cyan-700">
                        Device Edge / IoT Makers
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl">IoT Core</CardTitle>

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
                      <strong>Silicon-to-device advisory:</strong> From MCU/SoC selection to secure connectivity, we help you design and launch ultra-efficient IoT devices at the extreme edge.
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                        What We Do
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Architecture for low-power, real-time IoT devices and embedded systems</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Rapid PoCs, lab testing, and technology validation to de‑risk platform and component choices</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Secure boot, OTA update design, and connectivity frameworks</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Cloud onboarding patterns and multi-cloud connectivity (AWS, OVH)</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-cyan-500 rounded-full mr-2" />
                        Key Outcomes
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Faster path from concept to certified device, with fewer redesigns and integration issues.</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-cyan-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Security and CRA/FCC/CE readiness from day one, reducing compliance risk and time‑to‑market</span>
                        </li>
                      </ul>
                    </div>

                  {/*  <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-cyan-600 hover:bg-cyan-700">
                        <Link href="/services#iot-core">
                          Explore IoT Core
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>*/}
                  </CardContent>
                </Card>
              </div>

              {/* Offer 2: Near Edge (Local Edge) */}
              <div id="near-edge" className="scroll-mt-20">
                <Card className="border-2 border-purple-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/edge-infrastructure.png"
                      alt="Near Edge Illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-indigo-500/75 to-purple-600/80" />
                    <div className="relative h-full flex items-center justify-center z-10">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <Network className="w-14 h-14 text-white drop-shadow-lg" />
                          <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Gateway</span>
                        </div>
                        <ArrowRight className="w-9 h-9 text-white/80 drop-shadow-lg" />
                        <div className="flex flex-col items-center">
                          <Zap className="w-14 h-14 text-cyan-50 drop-shadow-lg" />
                          <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Compute</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-purple-100 flex items-center justify-center">
                        <ShieldCheck className="h-6 w-6 text-purple-600" />
                      </div>
                      <Badge variant="secondary" className="bg-purple-100 text-purple-700">
                        On-Premise / Local Edge
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl">Near Edge</CardTitle>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30">
                        <Settings className="w-3 h-3 mr-1" />
                        Orchestrate
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
                      <strong>Local edge platforms:</strong> Architect and secure on-premise edge infrastructure for factories, facilities, and sites, with validated edge-to-cloud patterns.
                    </p>
                  </CardHeader>

                  <CardContent className="flex flex-col flex-1 space-y-6">
                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        What We Do
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Edge compute platform design (gateways, industrial PCs, rugged servers)</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">AI inference at the edge, data filtering, and local analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Security architectures aligned with NIS2/IEC 62443</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Integration with existing OT/IT systems and cloud platforms</span>
                        </li>
                      </ul>
                    </div>

                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-purple-500 rounded-full mr-2" />
                        Key Outcomes
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Right edge hardware and topology selected first time</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-purple-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">Compliance-ready architectures reducing project risk</span>
                        </li>
                      </ul>
                    </div>

                  {/*  <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-purple-600 hover:bg-purple-700">
                        <Link href="/services#near-edge">
                          Explore Near Edge
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div> */}
                  </CardContent>
                </Card>
              </div>

              {/* Offer 3: Far Edge (Chip Vendor Ecosystem) */}
              <div id="far-edge" className="scroll-mt-20">
                <Card className="border-2 border-slate-200 overflow-hidden hover:shadow-xl transition-all duration-300 h-full flex flex-col">
                  
                  {/* Background Image Section */}
                  <div className="relative h-48 overflow-hidden">
                    <Image
                      src="/cloud-integration.png"
                      alt="Far Edge Fleet Illustration"
                      fill
                      className="object-cover"
                      priority
                    />
                    <div className="absolute inset-0 bg-gradient-to-br from-slate-600/80 via-indigo-500/75 to-slate-700/80" />
                    <div className="relative h-full flex items-center justify-center z-10">
                      <div className="flex items-center gap-3">
                        <div className="flex flex-col items-center">
                          <Smartphone className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                          <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Devices</span>
                        </div>
                        <ArrowRight className="w-8 h-8 text-white/80 drop-shadow-lg" />
                        <div className="flex flex-col items-center">
                          <Cloud className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                          <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Cloud</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Card Header */}
                  <CardHeader className="space-y-4">
                    <div className="flex items-center gap-3">
                      <div className="h-12 w-12 rounded-lg bg-slate-100 flex items-center justify-center">
                        <Cloud className="h-6 w-6 text-slate-700" />
                      </div>
                      <Badge variant="secondary" className="bg-slate-100 text-slate-700">
                        Chip & Device Ecosystem
                      </Badge>
                    </div>

                    <CardTitle className="text-2xl md:text-3xl">Far Edge</CardTitle>

                    <div className="flex flex-wrap gap-2">
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300">
                        <Rocket className="w-3 h-3 mr-1" />
                        Enable
                      </Badge>
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300">
                        <Settings className="w-3 h-3 mr-1" />
                        Scale
                      </Badge>
                      <Badge variant="outline" className="bg-slate-100 text-slate-700 border-slate-300">
                        <ShieldCheck className="w-3 h-3 mr-1" />
                        Secure
                      </Badge>
                    </div>

                    <p className="text-muted-foreground">
                      <strong>Fleet-scale enablement:</strong> Chip‑to‑cloud expertise for chip vendors and device makers, with reference architectures and fleet management for distributed IoT deployments.
                    </p>
                  </CardHeader>

                  {/* Card Content */}
                  <CardContent className="flex flex-col flex-1 space-y-6">
                    {/* What We Do */}
                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-2" />
                        What We Do
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Chip‑optimized platforms and reference designs validated from silicon to cloud
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Fleet deployment patterns for OTA updates, provisioning at scale, and lifecycle management
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Ecosystem enablement with validated cloud integrations (AWS, OVH) and go‑to‑market support
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Hardware‑based security using secure enclaves, TPM, and strong key management
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* Key Outcomes */}
                    <div>
                      <h3 className="font-bold text-lg mb-3 flex items-center">
                        <span className="w-2 h-2 bg-slate-500 rounded-full mr-2" />
                        Key Outcomes
                      </h3>
                      <ul className="space-y-2">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Faster adoption across chip vendor and device maker ecosystems
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-4 w-4 text-slate-600 flex-shrink-0 mt-1" />
                          <span className="text-sm text-muted-foreground">
                            Repeatable fleet‑scale architectures for thousands of deployed devices
                          </span>
                        </li>
                      </ul>
                    </div>

                    {/* CTA */}
                  {/*  <div className="mt-auto pt-4">
                      <Button asChild className="w-full bg-slate-700 hover:bg-slate-800">
                        <Link href="/services#far-edge">
                          Explore Far Edge
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>*/}
                  </CardContent>
                </Card>
              </div>


            </div>

            {/* Industry Applications Cross-Link */}
            <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 rounded-xl border border-blue-200 max-w-5xl mx-auto">
              <div className="text-center space-y-4">
                <h3 className="text-2xl font-bold text-gray-900">Industry-Specific Applications</h3>
                <p className="text-gray-700">
                  See how these consulting services apply to your industry—from automotive and manufacturing to energy and electronics.
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


      <FourPillarsCarousel />


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

              {/* Tab 1: Core Platform Stack */}
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
                          network topology design, and device-to-cloud integration patterns.
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

              {/* Tab 2: Specialized Services */}
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

                  {/* Industrial Edge Platforms */}
                  <Card className="border-l-4 border-[#8B5CF6]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg mb-4">
                        <ShieldCheck className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <CardTitle className="text-xl">Industrial Edge Platforms</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Edge Platform Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Platform selection and architecture consulting for industrial edge deployments—
                          AI accelerators, ruggedized compute, and chip-level security integration.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Hardware-Backed Compliance</h4>
                        <p className="text-sm text-muted-foreground">
                          NIS2 and IEC 62443 compliance frameworks with chip-level security—firmware integrity, 
                          SBOM tracking, and audit-ready documentation for regulatory requirements.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">AI Inference Integration</h4>
                        <p className="text-sm text-muted-foreground">
                          AI accelerator selection and inference pipeline architecture—model optimization, 
                          edge deployment strategies, and cloud integration for ML workflows.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Multi-Vendor Coordination</h4>
                        <p className="text-sm text-muted-foreground">
                          Integration architecture across chip vendors, platform providers, and cloud services—
                          eliminating coordination failures in complex edge-to-cloud stacks.
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
                        <h4 className="font-semibold text-sm mb-2">Edge Analytics Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Local processing architecture for latency-sensitive use cases—edge analytics 
                          frameworks enabling real-time decision-making without cloud dependency.
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
                ambiguity—developed through collaborative strategic advisory process
              </p>
            </div>

            {/* Accordion Deliverables */}
            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* 1. Architecture Blueprint */}
              <AccordionItem value="blueprint" className="border-2 border-primary/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-primary/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-primary/10 rounded-lg flex-shrink-0">
                      <Package className="w-6 h-6 md:w-7 md:h-7 text-primary" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold">Architecture Blueprint</h3>
                      <p className="text-sm text-muted-foreground">
                        Documented rationale for every major technical choice
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Technical documentation explaining architecture decisions and technology choices—providing 
                      rationale for key selections and enabling informed stakeholder decisions with documented trade-offs.
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
                        <strong>Primary deliverable for Embedded Core:</strong> Enables device makers to move from concept 
                        to production with validated architecture. Also used in Industrial Edge for documenting edge governance patterns.
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
                        <strong>Both offers:</strong> Embedded Core (CRA, CE marking) and Industrial Edge (IEC 62443, NIS2 for industrial OT). 
                        Continuous evidence streaming is primary for Industrial Edge.
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 3. Deployment & Operations Frameworks */}
              <AccordionItem value="operations" className="border-2 border-[#8B5CF6]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#8B5CF6]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg flex-shrink-0">
                      <Settings className="w-6 h-6 md:w-7 md:h-7 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold">Deployment & Operations Frameworks</h3>
                      <p className="text-sm text-muted-foreground">
                        Rollout strategies, testing procedures, and operational guidelines
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Documented deployment strategies and operational procedures enabling your teams to execute rollouts 
                      independently—covering phased deployment, testing gates, and incident response frameworks.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Deployment strategy frameworks:</strong> Phased rollout patterns 
                          (pilot → staged → full production) with validation criteria at each gate
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Testing and validation procedures:</strong> Pre-deployment 
                          checklists, integration testing protocols, and acceptance criteria
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Rollback decision frameworks:</strong> Error threshold definitions 
                          and reversion procedures for failed deployments
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Operational documentation:</strong> Monitoring requirements, 
                          incident response templates, and post-deployment validation procedures
                        </span>
                      </li>
                    </ul>
                    
                    {/* Offer Context */}
                    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-[#8B5CF6] mt-4">
                      <p className="text-xs text-gray-700">
                        <strong>Primary deliverable for Industrial Edge:</strong> Deployment governance and operational 
                        frameworks for edge platforms. Embedded Core receives simplified deployment checklists.
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
                        <strong>Both offers:</strong> Embedded Core (coordinating chipmakers, connectivity providers, cloud platforms) and 
                        Industrial Edge (coordinating OT vendors, edge hardware suppliers, SOC integration partners).
                      </p>
                    </div>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

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

            {/* Visual Timeline */}
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
                    <span className="block text-xs text-green-700">Scale</span>
                  </div>
                </div>
                <p className="text-sm font-semibold">8-12 weeks</p>
                <p className="text-xs text-muted-foreground">Fixed scope</p>
              </div>
            </div>

            {/* Timeline Disclaimer */}
            <p className="text-sm text-muted-foreground text-center max-w-2xl mx-auto -mt-4 mb-8">
              Timelines shown are typical ranges and may vary based on project scope, technical 
              complexity, and client readiness. Exact duration agreed during Discovery phase.
            </p>

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
                      Executive sign-off on validated blueprint with clear go/no-go decision before full implementation.
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
                      <span><strong>Deployment frameworks</strong> and incident response procedures</span>
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
                      <CardTitle className="text-2xl">Scale</CardTitle>
                      <p className="text-sm text-muted-foreground font-medium">8-12 weeks • Fixed scope</p>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  <h4 className="font-semibold text-base">Core Deliverables:</h4>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Pilot deployment</strong> validation</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-green-600 flex-shrink-0 mt-0.5" />
                      <span><strong>Performance validation</strong> against defined acceptance criteria</span>
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
                30-minute consultation • No commitment required
              </p>
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
                Schedule a discovery call with our experts to discuss your 
                technical challenges, and engagement approach. Every project is expert-led from day one.
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
                    <h3 className="text-2xl font-bold mb-2">Schedule Expert Consultation</h3>
                    <p className="text-muted-foreground">30-minute technical discussion</p>
                  </div>
                </div>

                <div className="space-y-4">
                  <p className="text-muted-foreground">
                    We'll assess your requirements, understand your technical challenges, and recommend 
                    the optimal engagement approach—from strategic validation to full solution implementation.
                  </p>
                  
                  <ul className="space-y-3 text-sm text-muted-foreground">
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Direct access to senior experts (no sales filtering)</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Customized engagement scope and timeline</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Transparent pricing proposal tailored to your needs</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                      <span>Proven three-phase methodology (Discovery → Build → Scale)</span>
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
            {/*<div className="max-w-2xl mx-auto bg-secure/5 border border-secure/20 rounded-lg p-6">
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
            </div>*/}

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
