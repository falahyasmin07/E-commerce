import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
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
  Cloud,
} from "lucide-react"
import { CRACountdown } from "@/components/cra-countdown"
import { TechnologyPartnersCarousel } from "@/components/TechnologyPartnersCarousel"
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert"

export default function HomePage() {
  return (
    <div className="flex flex-col">
      {/* Compliance Alert */}
      <div className="bg-yellow-500/10 border-b border-yellow-500/20 text-yellow-700 dark:text-yellow-300 py-2 px-4 text-center text-sm font-medium">
        <Link href="/contact" className="hover:underline">
          <Info className="inline h-4 w-4 mr-2" />
          ⚠️ EU Compliance Deadlines: CRA Dec 2027 | NIS2 Enforced Oct 2024 → Assess Readiness
        </Link>
      </div>

      {/* HERO SECTION - Enhanced Visuals */}
      <section className="relative overflow-hidden py-20 md:py-32">
        {/* Dark blue base background */}
        <div className="absolute inset-0 bg-[#0a1628]" />


        {/* Chip image as background layer */}
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/microchip-closeup.jpg"
            alt="Modern microchip background"
            fill
            className="object-cover mix-blend-screen"
            priority
          />
        </div>

        {/* Gradient overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a1628]/90 via-[#1a2744]/70 to-[#0a1628]/90 animate-gradient-x" />

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#4a6ea808_1px,transparent_1px),linear-gradient(to_bottom,#4a6ea808_1px,transparent_1px)] bg-[size:4rem_4rem]" />

        {/* Main Content */}
        <div className="container mx-auto relative z-10">
          <div className="max-w-4xl mx-auto animate-fade-in-up">
            <div className="space-y-6 text-center">
              <div className="space-y-4">
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight text-white drop-shadow-lg">
                  Accelerate Chip-to-Cloud:{" "}
                  <span className="block">Technology Advisory with Founder-Led Expertise</span>
                </h1>
              </div>
              {/* Animated Pulse CTA */}
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button
                  asChild
                  size="lg"
                  className="text-base px-8 py-6 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-600 text-white hover:from-blue-600 hover:to-cyan-700 shadow-xl shadow-blue-500/20 animate-pulse"
                >
                  <Link href="/contact">
                    Start Discovery
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
              <p className="text-sm text-blue-200/70 mt-2 text-center">
                Get your strategic assessment and architecture roadmap
              </p>
              <div className="flex justify-center pt-2">
                <Link href="/services" className="text-blue-100/80 hover:text-white hover:underline text-base">
                  Explore Four-Pillar Methodology
                </Link>
              </div>
            </div>
            {/* Animated scroll-down indicator */}
            <div className="flex justify-center mt-12">
              <ArrowRight className="animate-bounce h-8 w-8 text-blue-400 rotate-90" />
            </div>
          </div>
        </div>
      </section>

      {/* Edge Pulsar Mission Section - Lighter Gray Theme */}
<section className="py-16 px-6 bg-gradient-to-br from-gray-100 via-slate-50 to-blue-50 relative overflow-hidden border-y border-gray-200">
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
    <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight text-gray-900">
      Our Mission
    </h2>

    {/* Mission statement - covers both offers */}
    <p className="text-xl md:text-2xl leading-relaxed max-w-4xl mx-auto font-medium mb-6 text-gray-800">
      Empower <span className="font-semibold text-gray-900">device makers</span> and 
      <span className="font-semibold text-gray-900"> industrial enterprises</span> to accelerate their chip-to-cloud journey—from 
      silicon development to edge infrastructure integration—with 
      <span className="font-bold text-blue-600"> secure, production-ready cloud architectures</span>.
    </p>

    {/* Supporting text */}
    <p className="text-lg text-gray-700 max-w-3xl mx-auto leading-relaxed">
      Most consultancies master either hardware or cloud—not both. We bridge that critical gap with 
      founder-led expertise across embedded systems, industrial IoT, security frameworks, and cloud platforms.
    </p>
    </div>

    {/* Visual divider with founder credential badge */}
    <div className="flex justify-center mt-10">
      <div className="inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full border-2 border-blue-200 shadow-md hover:shadow-lg hover:border-blue-300 transition-all">
        <Lightbulb className="w-5 h-5 text-blue-600" />
        <span className="text-sm font-semibold text-gray-900">40+ Years Combined Founder Expertise</span>
      </div>
    </div>
  </div>
</section>


     {/* Two Core Consulting Offers - Improved */}
    <section className="py-16 px-6 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Two Core Consulting Offers
          </h2>
          <p className="text-lg text-gray-700 max-w-3xl mx-auto">
            Specialized chip-to-cloud consulting tailored to your market segment
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-stretch">
          
          {/* Offer 1: Silicon-to-Cloud Acceleration - WITH ILLUSTRATION BACKGROUND */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
            
            {/* Background Illustration Section */}
            <div className="relative h-48 overflow-hidden">
              {/* Background Image */}
              <Image
                src="silicon-to-cloud.png"  // Your generated illustration
                alt="Silicon to Cloud Illustration"
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient Overlay - lighter for illustrations */}
              <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/80 via-blue-500/75 to-blue-600/80" />
              
              {/* Icon Flow Overlay */}
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <Cpu className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Chip</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Network className="w-14 h-14 text-cyan-50 drop-shadow-lg" />
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

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="inline-block bg-cyan-100 text-cyan-700 px-3 py-1 rounded-full text-sm font-semibold">
                  For Device & Chip Makers
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Silicon-to-Cloud Acceleration
              </h3>

              <p className="text-gray-700 mb-6 flex-grow">
                Accelerate your journey from concept to production with founder-led reference design development, 
                security-first embedded solutions, and production-ready architecture blueprints.
              </p>

              <div className="mb-6 text-gray-700 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>First-time-right architecture</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compress development cycles</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-cyan-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Compliance built in — CRA, FCC, CE certifications Accelerated</span>
                </div>
              </div>

              <Link href="/services#silicon-to-scale" className="inline-flex items-center text-cyan-600 font-semibold hover:text-cyan-700 mt-auto group">
                Explore Silicon-to-Cloud Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>

          {/* Offer 2: Edge Infrastructure Integration - WITH ILLUSTRATION BACKGROUND */}
          <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 flex flex-col overflow-hidden">
            
            {/* Background Illustration Section */}
            <div className="relative h-48 overflow-hidden">
              {/* Background Image */}
              <Image
                src="edge-infrastructure.png"  // Your generated illustration
                alt="Edge Infrastructure Illustration"
                fill
                className="object-cover"
                priority
              />
              
              {/* Gradient Overlay - lighter for illustrations */}
              <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 via-indigo-500/75 to-purple-600/80" />
              
              {/* Icon Flow Overlay */}
              <div className="relative h-full flex items-center justify-center z-10">
                <div className="flex items-center gap-4">
                  <div className="flex flex-col items-center">
                    <Factory className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Edge</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Network className="w-14 h-14 text-purple-50 drop-shadow-lg" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Integrate</span>
                  </div>
                  <ArrowRight className="w-10 h-10 text-white/80 drop-shadow-lg" />
                  <div className="flex flex-col items-center">
                    <Cloud className="w-16 h-16 text-white drop-shadow-lg animate-pulse" />
                    <span className="text-xs text-white/90 mt-1 font-semibold drop-shadow">Cloud</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="p-8 flex flex-col flex-grow">
              <div className="mb-4">
                <span className="inline-block bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm font-semibold">
                  For Industrial Operators
                </span>
              </div>

              <h3 className="text-2xl font-bold text-gray-900 mb-3">
                Edge Infrastructure Integration
              </h3>

              <p className="text-gray-700 mb-6 flex-grow">
                Bridge OT and IT through secure, scalable integration across manufacturing, energy systems, 
                and critical infrastructure—enabling real-time data flow and intelligent automation.
              </p>

              <div className="mb-6 text-gray-700 space-y-2">
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Reduce downtime and boost efficiency</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Real-time visibility and insights</span>
                </div>
                <div className="flex items-start">
                  <CheckCircle2 className="w-5 h-5 text-purple-600 mr-2 flex-shrink-0 mt-0.5" />
                  <span>Secure, compliant OT/IT convergence</span>
                </div>
              </div>

              <Link href="/services#ot-to-cloud" className="inline-flex items-center text-purple-600 font-semibold hover:text-purple-700 mt-auto group">
                Explore Edge Infrastructure Services
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>


      {/* Four Pillars Preview */}
      <section className="py-8 bg-muted/50">
        <div className="container mx-auto">
          <div className="flex justify-center gap-8 flex-wrap text-center">
            <Link href="#innovate" className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300 dark:hover:text-[#7C3AED]">
              <Zap className="h-6 w-6 text-[#7C3AED]" />
              <span>Innovate</span>
            </Link>
            <Link href="#orchestrate" className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300 dark:hover:text-[#7C3AED]">
              <Network className="h-6 w-6 text-[#7C3AED]" />
              <span>Orchestrate</span>
            </Link>
            <Link href="#secure" className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300 dark:hover:text-[#7C3AED]">
              <Shield className="h-6 w-6 text-[#7C3AED]" />
              <span>Secure</span>
            </Link>
            <Link href="#respond" className="flex items-center space-x-2 text-lg font-medium text-gray-700 hover:text-[#7C3AED] dark:text-gray-300 dark:hover:text-[#7C3AED]">
              <Target className="h-6 w-6 text-[#7C3AED]" />
              <span>Respond</span>
            </Link>
          </div>
        </div>
      </section>

      {/* Three Core Outcomes */}
      <section className="py-24 md:py-32 bg-muted/30">
        <div className="container max-w-6xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-balance">Three Core Outcomes</h2>
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
                  Compressed development cycles through validated architecture and systematic advisory approach—avoiding
                  common pitfalls that extend typical projects to 18-24 months.
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
                  Founder-led consulting with comprehensive blueprints preventing common integration failures and costly
                  rework in multi-vendor chip-to-cloud projects.
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
                  IEC 62443, GDPR, and EU Cyber Resilience Act (CRA) compliance through design-time controls and
                  systematic security frameworks—accelerating certification processes.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center pt-16">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/services">
                Explore Our Approach
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Industries We Serve - Updated to 4 Industries */}
      <section className="py-16 px-6 bg-white border-y border-gray-200">
        <div className="container mx-auto max-w-6xl">
          <h3 className="text-3xl font-bold text-gray-900 text-center mb-3">
            Industries We Serve
          </h3>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Deep chip-to-cloud expertise focused on four technology-driven industries 
            where our founders have proven track records
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
                  OT-to-cloud integration
                </p>
              </div>
            </Link>

            {/* 3. Energy / Smart Infrastructure - NEW */}
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

      {/* Four Pillars */}
      <section className="py-24 md:py-32">
        <div className="container max-w-7xl mx-auto">
          <div className="text-center space-y-4 mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-balance">Four Pillars</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Comprehensive chip-to-cloud methodology spanning innovation to operations
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5 lg:gap-6">
            {/* Innovate / Accelerate Pillar */}
            <div className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-250 ease-in-out border-l-4 border-[#0EA5E9] bg-[#0EA5E9]/[0.08] min-h-[320px] flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0EA5E9]/[0.05] transition-transform duration-250 ease-in-out group-hover:rotate-6 mb-4">
                  <Rocket className="h-8 w-8 text-[#0EA5E9] stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mt-4 whitespace-nowrap">Innovate / Accelerate</h3>
                <p className="text-[#1F2937]/90 leading-relaxed">
                  Validate technology choices through rapid PoCs, critical modules, and architecture blueprints (4-6 weeks).
                </p>
              </div>
              <Link href="#innovate-detail" className="text-[#0EA5E9] hover:underline flex items-center justify-center mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Orchestrate / Scale Pillar */}
            <div className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-250 ease-in-out border-l-4 border-[#8B5CF6] bg-[#8B5CF6]/[0.08] min-h-[320px] flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#8B5CF6]/[0.05] transition-transform duration-250 ease-in-out group-hover:rotate-6 mb-4">
                  <Layers className="h-8 w-8 text-[#8B5CF6] stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mt-4">Orchestrate / Scale</h3>
                <p className="text-[#1F2937]/90 leading-relaxed">
                  Scale from pilot to production with zero-touch provisioning, multi-vendor governance, and automated operations.
                </p>
              </div>
              <Link href="#orchestrate-detail" className="text-[#8B5CF6] hover:underline flex items-center justify-center mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Secure / Harden Pillar */}
            <div className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-250 ease-in-out border-l-4 border-[#EF4444] bg-[#EF4444]/[0.08] min-h-[320px] flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#EF4444]/[0.05] transition-transform duration-250 ease-in-out group-hover:rotate-6 mb-4">
                  <ShieldCheck className="h-8 w-8 text-[#EF4444] stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mt-4">Secure / Harden</h3>
                <p className="text-[#1F2937]/90 leading-relaxed">
                  Security-by-design from device to cloud (GDPR, CRA/NIS2 compliance).
                </p>
              </div>
              <Link href="#secure-detail" className="text-[#EF4444] hover:underline flex items-center justify-center mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>

            {/* Sense / Respond Pillar */}
            <div className="group relative bg-white p-8 rounded-xl shadow-sm hover:shadow-xl hover:scale-[1.03] transition-all duration-250 ease-in-out border-l-4 border-[#10B981] bg-[#10B981]/[0.08] min-h-[320px] flex flex-col justify-between">
              <div className="flex flex-col items-center text-center">
                <div className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#10B981]/[0.05] transition-transform duration-250 ease-in-out group-hover:rotate-6 mb-4">
                  <Radar className="h-8 w-8 text-[#10B981] stroke-[2px]" />
                </div>
                <h3 className="text-2xl font-bold text-[#1F2937] mt-4">Sense / Respond</h3>
                <p className="text-[#1F2937]/90 leading-relaxed">
                  Close the loop from sensor data to automated decision with edge analytics, predictive ML, and sensor-to-decision automation.
                </p>
              </div>
              <Link href="#respond-detail" className="text-[#10B981] hover:underline flex items-center justify-center mt-4">
                Learn More <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </div>
          </div>
          <div className="text-center pt-16">
            <Button asChild size="lg" className="text-base px-8">
              <Link href="/services">
                Explore Our Services
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Technology Stack & Expertise */}
      {/* Technology Stack & Expertise - SAFE VERSION */}
      <section className="py-20 md:py-32 bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-6xl mx-auto space-y-12">
            <div className="text-center space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold">Technology Stack & Expertise</h2>
              <p className="text-lg text-gray-700 max-w-3xl mx-auto">
                Deep expertise across the full chip-to-cloud technology stack—built from real-world experience.
              </p>
            </div>

            {/* Technology Categories Grid - SAFE */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-5xl mx-auto">
              
              {/* Embedded Platforms */}
              <div className="text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-blue-100">
                  <Cpu className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Embedded Platforms</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>ARM Cortex-M/A</p>
                  <p>Qualcomm</p>
                  <p>NXP • STMicro</p>
                  <p>Sequans</p>
                </div>
              </div>

              {/* Connectivity */}
              <div className="text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-purple-100">
                  <Network className="h-8 w-8 text-purple-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Connectivity</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>Wi-Fi • BLE</p>
                  <p>UWB</p>
                  <p>Cellular (LTE-M/NB-IoT)</p>
                  <p>LoRaWAN</p>
                </div>
              </div>

              {/* Cloud Infrastructure */}
              <div className="text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-green-100">
                  <Cloud className="h-8 w-8 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Cloud Platforms</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>AWS IoT Core</p>
                  <p>OVH</p>
                  <p>Edge Computing</p>
                </div>
              </div>

              {/* Security & Compliance */}
              <div className="text-center space-y-4">
                <div className="inline-flex h-16 w-16 items-center justify-center rounded-2xl bg-red-100">
                  <ShieldCheck className="h-8 w-8 text-red-600" />
                </div>
                <h3 className="text-lg font-bold text-gray-900">Security</h3>
                <div className="space-y-1 text-sm text-gray-600">
                  <p>CRA Compliance</p>
                  <p>NIS2 Framework</p>
                  <p>Secure Boot • TLS</p>
                </div>
              </div>

            </div>

            {/* Optional: Add experience note */}
            <div className="text-center pt-8">
              <p className="text-sm text-gray-500">
                Technologies our founders have used to ship production systems
              </p>
            </div>

            {/* CTA */}
            <div className="text-center pt-4">
              <Button asChild variant="outline" size="lg">
                <Link href="/about#tech-stack">
                  View Full Technology Capabilities
                </Link>
              </Button>
            </div>
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
                Founder-led consulting from strategic assessment through implementation
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#7C3AED]/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <Lightbulb className="w-8 h-8 text-[#7C3AED] stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Strategic Advisory First</h3>
                <p className="text-gray-700">
                  Every engagement begins with founder-led strategic assessment—understanding your business
                  objectives, technical constraints, regulatory requirements (including CRA compliance), and market
                  requirements before defining architecture and implementation roadmap.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#7C3AED]/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <Cpu className="w-8 h-8 text-[#7C3AED] stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Expert Implementation</h3>
                <p className="text-gray-700">
                  Founder-supervised delivery teams execute the architecture with daily oversight—ensuring decisions
                  made during advisory phase are implemented correctly with continuous technical validation.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-md transition-shadow duration-200">
                <div className="flex justify-center mb-6">
                  <div className="w-16 h-16 flex items-center justify-center bg-[#7C3AED]/10 rounded-full group-hover:scale-115 transition-transform duration-200 ease-in-out">
                    <TrendingUp className="w-8 h-8 text-[#7C3AED] stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">Continuous Guidance</h3>
                <p className="text-gray-700">
                  From initial assessment through pilot deployment, founders remain engaged—providing ongoing
                  strategic guidance, architectural oversight, and technical escalation throughout your chip-to-cloud
                  journey.
                </p>
              </div>
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
                <h3 className="text-xl font-bold text-gray-900 mb-3">40 Years Combined Expertise</h3>
                <p className="text-gray-700 mb-4">
                  Chip-to-cloud technology leadership across embedded systems, connectivity, cloud infrastructure,
                  security, and Edge AI—delivering multi-continent consulting programs for tier-1 industrials,
                  automotive, and logistics clients.
                </p>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-sm text-center hover:shadow-lg hover:scale-[1.02] transition-all duration-250 ease-in-out">
                <div className="flex justify-center mb-6">
                  <div className="w-14 h-14 flex items-center justify-center bg-[#7C3AED]/10 rounded-lg">
                    <Layers className="w-8 h-8 text-[#7C3AED] stroke-[2px]" />
                  </div>
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-3">Production-Ready Deliverables</h3>
                <p className="text-gray-700 mb-4">
                  Every consulting engagement delivers production-ready blueprints, validated methodologies, and
                  Lab-tested implementations—eliminating ambiguity and providing board-ready documentation for confident
                  decision-making.
                </p>
                <ul className="text-sm text-gray-600 space-y-1 text-left mx-auto max-w-xs">
                  <li>✓ Architecture blueprints</li>
                  <li>✓ Security frameworks</li>
                  <li>✓ Reference implementations</li>
                </ul>
              </div>
            </div>

            <div className="text-center space-y-6 pt-4">
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button asChild size="lg">
                  <Link href="/about">Meet the Founders</Link>
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
            Ready to Accelerate Your Chip-to-Cloud Journey?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Start with a comprehensive strategic assessment to validate your architecture, technology choices, and
            roadmap—or explore our complete range of consulting services including pilot builds, Lab validation days,
            and CRA compliance workshops.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button
              asChild
              className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-200"
            >
              <Link href="/contact">
                Request Strategic Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button
              asChild
              variant="outline"
              className="border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-4 rounded-lg transition-all duration-200"
            >
              <Link href="/services">Explore All Services</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
