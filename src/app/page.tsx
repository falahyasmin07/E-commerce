import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge, HeroBadge } from "@/components/ui/badge";
import Image from "next/image"
import {
  ArrowRight,
  Zap,
  Network,
  Shield,
  Target,
  CheckCircle2,
  Clock,
  Lightbulb,
  Users,
  TrendingUp,
  Cpu,
  Factory,
  Info,
  Rocket,
  Layers,
  ShieldCheck,
  Radar,
  Car,
  Truck,
  Building,
  Wifi,
  Cloud,
  Smartphone,
  MousePointer2,
  ChevronDown,
  Server,
} from "lucide-react"

import { TechnologyPartnersCarousel } from "@/components/TechnologyPartnersCarousel"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Compliance Alert */}
      {/*<div className="bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-700 dark:text-yellow-300 py-2 px-4 text-center text-sm font-medium">
        <Link href="/contact" className="hover:underline">
          <Info className="inline h-4 w-4 mr-2" />
          ⚠️ EU Compliance Deadlines: CRA Dec 2027 | NIS2 in force → Assess Readiness Now
        </Link>
      </div>*/}

      {/* --- HERO SECTION --- */}
      <section className="relative overflow-hidden h-screen flex items-center">
        
        
        {/* 1. Dark Blue Base */}
        <div className="absolute inset-0 bg-[#0a1628]" />

        {/* 2. Chip Image Background Layer */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/microchip-closeup.jpg"
            alt="Silicon Architecture Background"
            fill
            className="object-cover mix-blend-screen"
            priority
          />
        </div>

        {/* 3. Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/95 via-[#1a2744]/80 to-[#0a1628]/95" />

        {/* 4. Tech Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a6ea808_1px,transparent_1px),linear-gradient(to_bottom,#4a6ea808_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

        {/* 5. Main Content */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-5xl mx-auto text-center">
						<HeroBadge className="bg-blue-500/10 text-blue-200">
							Industrialization & Integration Partner
						</HeroBadge>


            {/* Headline */}
            <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-tight text-white drop-shadow-2xl mb-8 animate-in fade-in slide-in-from-bottom-6 duration-1000">
              From Chip To Edge <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400 whitespace-nowrap">
                Smarter • Faster • Safer
              </span>
            </h1>


           {/* Subheadline */}
          <p className="text-lg md:text-2xl text-blue-100/80 leading-relaxed max-w-3xl mx-auto mb-10 animate-in fade-in slide-in-from-bottom-8 duration-1000 delay-100">
            Industrial-grade Edge & IoT
            <br className="hidden sm:block" />
            Integrated, optimized, and ready for production.
          </p>


            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-5 justify-center animate-in fade-in slide-in-from-bottom-10 duration-1000 delay-200">
              <Button
                asChild
                size="lg"
                className="text-lg h-14 px-8 bg-gradient-to-r from-blue-600 to-cyan-600 text-white hover:from-blue-500 hover:to-cyan-500 shadow-[0_0_30px_-5px_rgba(59,130,246,0.4)] border-0 rounded-full transition-all hover:scale-105"
              >
                <Link href="#mission">
                  Start Discovery
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              
              <Button 
                asChild 
                size="lg" 
                variant="outline" 
                className="text-lg h-14 px-8 border-blue-200/20 bg-white/5 text-blue-100 hover:bg-white/10 hover:text-white rounded-full backdrop-blur-sm"
              >
                <Link href="/services">
                  Explore Services
                </Link>
              </Button>
            </div>

            {/* Footer Links - Three Badge Style */}
            <div className="mt-12 flex flex-wrap justify-center gap-4 animate-in fade-in zoom-in duration-1000 delay-500">
              <Link 
                href="/services#iot-core" 
                className="inline-flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-500/10 px-5 py-2 text-sm font-medium text-blue-200 hover:bg-blue-500/20 hover:border-blue-400/40 backdrop-blur-sm transition-all"
              >
                <Cpu className="w-4 h-4" />
                IoT Core
              </Link>
              
              <Link 
                href="/services#near-edge" 
                className="inline-flex items-center gap-2 rounded-full border border-cyan-400/20 bg-cyan-500/10 px-5 py-2 text-sm font-medium text-cyan-200 hover:bg-cyan-500/20 hover:border-cyan-400/40 backdrop-blur-sm transition-all"
              >
                <Server className="w-4 h-4" />
                Near Edge
              </Link>
              
              <Link 
                href="/services#far-edge" 
                className="inline-flex items-center gap-2 rounded-full border border-teal-400/20 bg-teal-500/10 px-5 py-2 text-sm font-medium text-teal-200 hover:bg-teal-500/20 hover:border-teal-400/40 backdrop-blur-sm transition-all"
              >
                <Cloud className="w-4 h-4" />
                Far Edge
              </Link>
            </div>


          </div>
        </div>

      </section>


      {/* Edge Pulsar Mission Section - Lighter Gray Theme */}
      <section id="mission" className="py-16 px-6 bg-gradient-to-br from-gray-100 via-slate-50 to-blue-50 relative overflow-hidden border-y border-gray-200">
        {/* Decorative background elements - lighter */}
        <div className="absolute inset-0 opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 bg-blue-200 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-cyan-200 rounded-full blur-3xl"></div>
        </div>

        {/* Subtle dot pattern */}
        <div className="absolute inset-0 opacity-40 bg-[radial-gradient(circle_at_1px_1px,rgb(148_163_184_/_0.15)_1px,transparent_0)] bg-[size:24px_24px]" />

        <div className="max-w-5xl mx-auto relative z-10">
          <div className="text-center mb-8">
            {/* Icon row */}
            <div className="flex justify-center items-center gap-4 mb-6">
              <Cpu className="w-10 h-10 text-blue-600 animate-pulse" />
              <ArrowRight className="w-8 h-8 text-gray-400" />
              <Shield className="w-10 h-10 text-cyan-600" />
              <ArrowRight className="w-8 h-8 text-gray-400" />
              <Cloud className="w-10 h-10 text-blue-600 animate-pulse" />
            </div>

          {/* Mission headline */}
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Our Mission
          </h2>

          {/* Mission statement - covers both offers */}
          <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium mb-6 text-gray-800">
            Empower <span className="font-semibold text-gray-900">device makers</span> and 
            <span className="font-semibold text-gray-900"> industrial enterprises</span> to accelerate their chip-to-edge journey with 
            <span className="font-bold text-blue-600"> reference implementations and production-ready edge solutions</span> spanning embedded systems, connectivity, and secure cloud integration.
          </p>

          {/* Supporting text */}
          <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
            Most advisors master either hardware or cloud—not both. We bridge that critical gap with 
            deep expertise across embedded systems, edge computing, security frameworks, and secure cloud connectivity.
          </p>

          </div>
        </div>
      </section>

      {/* Three Core Consulting Offers - Complete Edge Continuum */}
      <section className="py-16 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Three Core Consulting Offers
            </h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              Comprehensive offers spanning the complete edge continuum
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
            
            {/* Offer 1: IoT Core (Device Edge / Extreme Edge) */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/silicon-to-cloud.png"
                  alt="IoT Core Device Edge Illustration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-teal-500/80 via-teal-600/75 to-cyan-600/80" />
                <div className="relative h-full flex items-center justify-center z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <Cpu className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Chip</span>
                    </div>
                    <ArrowRight className="w-8 h-8 text-white/80 drop-shadow-lg" />
                    <div className="flex flex-col items-center">
                      <Wifi className="w-12 h-12 text-white drop-shadow-lg" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Device</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block bg-teal-100 text-teal-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Device Edge / IoT Makers
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  IoT Core
                </h3>

                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  Accelerate device launches with validated chip-to-edge patterns. Pre-qualified silicon choices, production-ready BSP kits, and secure boot frameworks—eliminate trial-and-error and ship faster.
                </p>

                <div className="mb-4 text-gray-700 text-sm space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Microcontroller & SoC design:</strong> ARM Cortex-M, RISC-V, ultra-low-power platforms
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Real-time edge processing:</strong> On-device ML inference, sensor fusion
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Secure boot & connectivity:</strong> LoRa, BLE, Zigbee, cellular IoT (NB-IoT, LTE-M)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-teal-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>CRA compliance:</strong> Security by design for IoT devices
                    </span>
                  </div>
                </div>

                <Link href="/services#iot-core" className="inline-flex items-center text-teal-600 text-sm font-semibold hover:text-teal-700 mt-auto group">
                  Explore IoT Core Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Offer 2: Near Edge */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/edge-infrastructure.png"
                  alt="Near Edge Gateway Illustration"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-sky-400/80 via-sky-500/75 to-blue-500/80" />
                <div className="relative h-full flex items-center justify-center z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <Network className="w-12 h-12 text-white drop-shadow-lg" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Gateway</span>
                    </div>
                    <ArrowRight className="w-8 h-8 text-white/80 drop-shadow-lg" />
                    <div className="flex flex-col items-center">
                      <Zap className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Compute</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block bg-sky-100 text-sky-700 px-3 py-1 rounded-full text-sm font-semibold">
                    On-Premise / Local Edge
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Near Edge
                </h3>

                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  Local compute infrastructure for aggregation, advanced analytics, and edge AI at facility level. Ideal for factories, retail stores, hospitals, and local data centers.
                </p>

                <div className="mb-4 text-gray-700 text-sm space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Edge gateway architecture:</strong> Multi-protocol aggregation (MQTT, OPC-UA, Modbus)
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Local AI inference:</strong> GPU/NPU selection, model optimization, edge ML pipelines
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Ruggedized platforms:</strong> Industrial-grade edge servers, fanless systems
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-sky-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>IEC 62443 & NIS2:</strong> Chip-level security hardening, secure enclaves
                    </span>
                  </div>
                </div>

                <Link href="/services#near-edge" className="inline-flex items-center text-sky-600 text-sm font-semibold hover:text-sky-700 mt-auto group">
                  Explore Near Edge Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Offer 3: Far Edge - Chip-to-Cloud Integration */}
            <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
              
              <div className="relative h-40 overflow-hidden">
                <Image
                  src="/cloud-integration.png"
                  alt="Far Edge Chip to Cloud"
                  fill
                  className="object-cover"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-br from-blue-600/80 via-blue-700/75 to-blue-800/80" />
                <div className="relative h-full flex items-center justify-center z-10">
                  <div className="flex items-center gap-3">
                    <div className="flex flex-col items-center">
                      <Cpu className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Chip</span>
                    </div>
                    <ArrowRight className="w-8 h-8 text-white/80 drop-shadow-lg" />
                    <div className="flex flex-col items-center">
                      <Cloud className="w-14 h-14 text-white drop-shadow-lg animate-pulse" />
                      <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Cloud</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 flex flex-col flex-grow">
                <div className="mb-3">
                  <span className="inline-block bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-sm font-semibold">
                    Chip-to-Cloud Integration
                  </span>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2">
                  Far Edge
                </h3>

                <p className="text-gray-700 text-sm mb-4 flex-grow">
                  Connect silicon to cloud with pre-validated reference architectures. AWS IoT Core and OVHcloud integrations ready to deploy—no custom middleware.
                </p>

                <div className="mb-4 text-gray-700 text-sm space-y-2">
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Reference architectures:</strong> Chip-optimized patterns validated from silicon to cloud
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Pre-integrated cloud connectors:</strong> AWS IoT Core, OVHcloud—ready to deploy
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>Secure device onboarding:</strong> Zero-trust patterns with TPM, secure enclaves
                    </span>
                  </div>
                  <div className="flex items-start">
                    <CheckCircle2 className="w-4 h-4 text-blue-600 mr-2 flex-shrink-0 mt-0.5" />
                    <span>
                      <strong>OTA foundations:</strong> Firmware update frameworks built in, not bolted on
                    </span>
                  </div>
                </div>

                <Link href="/services#far-edge" className="inline-flex items-center text-blue-600 text-sm font-semibold hover:text-blue-700 mt-auto group">
                  Explore Far Edge Services
                  <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

          </div>

          {/* NEW CTA - Explore All Services */}
          <div className="text-center mt-12">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/services">
                Explore All Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>

        </div>
      </section>



      {/* Three Core Outcomes */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-balance">Three Core Outcomes</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Delivering measurable value through systematic consulting methodology
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center space-y-6">
              <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-innovate to-innovate/50 items-center justify-center shadow-lg mx-auto">
                <Clock className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Accelerated Time-to-Market</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Validated architectures and proven methodologies eliminate exploratory dead-ends—compressing the path from concept to production-ready design.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-orchestrate to-orchestrate/50 items-center justify-center shadow-lg mx-auto">
                <Network className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">De-Risked Integration</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Deep expertise across chip, connectivity, and cloud eliminates costly integration failures in complex multi-vendor architectures.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6">
              <div className="inline-flex h-16 w-16 rounded-2xl bg-gradient-to-br from-secure to-secure/50 items-center justify-center shadow-lg mx-auto">
                <Shield className="h-8 w-8 text-white" />
              </div>
              <div className="space-y-4">
                <h3 className="text-2xl font-bold">Security-by-Design</h3>
                <p className="text-muted-foreground leading-relaxed">
                  CRA and IEC 62443 compliance architected from the start—avoiding expensive late-stage security retrofits and certification delays.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-16">
            <Button asChild size="lg" className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200">
              <Link href="/methodology">
                Explore Our Methodology
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Updated to 4 Industries */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center mb-3">
            Industries We Serve
          </h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Deep chip-to-edge expertise focused on four technology-driven industries 
            where we have proven track records
          </p>

          {/* 4-Column Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
            
            {/* 1. Electronics / Semiconductor */}
            <Link href="/industries#electronics" className="flex flex-col items-center space-y-4 group cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Cpu className="w-10 h-10 text-blue-600 group-hover:text-blue-700" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  Electronics / Semiconductor
                </p>
                <p className="text-sm text-gray-600">
                  Silicon-to-scale acceleration
                </p>
              </div>
            </Link>

            {/* 2. Industry 4.0 */}
            <Link href="/industries#industry40" className="flex flex-col items-center space-y-4 group cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Factory className="w-10 h-10 text-blue-600 group-hover:text-blue-700" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  Industry 4.0
                </p>
                <p className="text-sm text-gray-600">
                  Edge resilience & compliance
                </p>
              </div>
            </Link>


            {/* 3. Energy / Smart Infrastructure */}
            <Link href="/industries#energy" className="flex flex-col items-center space-y-4 group cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Lightbulb className="w-10 h-10 text-blue-600 group-hover:text-blue-700" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  Energy / Smart Infrastructure
                </p>
                <p className="text-sm text-gray-600">
                  Smart grid & building automation
                </p>
              </div>
            </Link>

            {/* 4. Automotive */}
            <Link href="/industries#automotive" className="flex flex-col items-center space-y-4 group cursor-pointer p-6 rounded-2xl hover:bg-gray-50 transition-all duration-300">
              <div className="w-20 h-20 flex items-center justify-center bg-blue-50 rounded-2xl group-hover:bg-blue-100 group-hover:scale-110 transition-all duration-300">
                <Car className="w-10 h-10 text-blue-600 group-hover:text-blue-700" />
              </div>
              <div className="text-center">
                <p className="text-lg font-semibold text-gray-900 group-hover:text-blue-600 transition-colors mb-1">
                  Automotive
                </p>
                <p className="text-sm text-gray-600">
                  Connected vehicle platforms & telematics
                </p>
              </div>
            </Link>

          </div>

          {/* CTA */}
          <div className="text-center">
            <Link href="/industries" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center group">
              Learn Why These Four Industries
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </section>


      {/* How We Work */}
      <section className="py-20 md:py-32">
        <div className="container mx-auto">
          <div className="max-w-5xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">How We Work</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborative approach from strategic assessment through implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-teal-600/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <Lightbulb className="w-8 h-8 text-teal-600 stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Advisory First</h3>
                <p className="text-gray-700">
                  We start by understanding your business objectives, technical constraints, and compliance 
                  requirements before recommending an architecture approach.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-sky-600/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <Cpu className="w-8 h-8 text-sky-600 stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Implementation</h3>
                <p className="text-gray-700">
                  Our teams execute the agreed architecture with ongoing validation to ensure alignment 
                  with the strategic plan and continuous technical verification.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-blue-600/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <TrendingUp className="w-8 h-8 text-blue-600 stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Guidance</h3>
                <p className="text-gray-700">
                  We stay engaged throughout implementation, providing technical support and guidance 
                  as your project evolves and challenges arise.
                </p>
              </div>
            </div>

            {/* CTA to Methodology */}
            <div className="text-center pt-8">
              <Link 
                href="/methodology" 
                className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors group"
              >
                Learn About Our Four Pillars Methodology
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Edge Pulsar */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-4xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Why Edge Pulsar</h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-250 ease-in-out">
                <div className="flex justify-center mb-6 -space-x-4">
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Riadh Berhouma, CEO"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                  <Image
                    src="/placeholder-user.jpg"
                    alt="Mazen Neifer, CTO"
                    width={64}
                    height={64}
                    className="w-16 h-16 rounded-full border-4 border-white shadow-md"
                  />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Deep Technical Experience</h3>
                <p className="text-gray-700 mb-4">
                  Decades of combined experience across embedded systems, connectivity, cloud integration, 
                  security, and edge computing—working with industrial, automotive, and technology companies.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-250 ease-in-out">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-blue-600/10 rounded-lg">
                    <Layers className="w-8 h-8 text-blue-600 stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Production-Ready Deliverables</h3>
                <p className="text-gray-700 mb-4">
                  Our engagements deliver validated blueprints, security frameworks, and reference 
                  implementations that support confident technical decisions.
                </p>
              </div>
            </div>

            <div className="text-center space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg" variant="outline" className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 h-12 rounded-full transition-all duration-200">
                  <Link href="/about">Learn More About Us</Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Get Started */}
      <section className="py-16 px-6 bg-gray-50 text-center">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
            Ready to Accelerate Your Chip-to-Edge Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive strategic assessment to validate your architecture, technology choices, and
            roadmap—or explore our complete range of consulting.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              size="lg"
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 h-12 rounded-full shadow-lg hover:shadow-xl transition-all duration-200"
            >
              <Link href="/contact">
                Request Strategic Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 h-12 rounded-full transition-all duration-200"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
