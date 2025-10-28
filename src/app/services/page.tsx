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
        {/* Background gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-700" />
        
        {/* Decorative blur elements - subtler */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 bg-cyan-400 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-blue-300 rounded-full blur-3xl"></div>
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
                Edge Pulsar combines strategic technology advisory with hands-on implementation expertise—delivering
                chip-to-cloud solutions through a structured consulting methodology.
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
              Framework
            </Link>
            <Link href="#entry-offers" className="text-sm font-medium hover:text-primary whitespace-nowrap">
              Get Started
            </Link>
          </div>
        </div>
      </section>

    {/* Two Core Consulting Offers - PERFECT ALIGNMENT */}
    <section id="two-core-offers" className="py-20 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="space-y-16">
          <div className="text-center space-y-4 max-w-3xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold">Two Core Consulting Offers</h2>
            <p className="text-lg text-muted-foreground">
              Specialized chip-to-cloud consulting tailored to your market segment
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto lg:grid-rows-1">
            
            {/* Silicon-to-Scale */}
            <div id="silicon-to-scale" className="scroll-mt-20">
              <Card className="border-2 border-innovate/20 h-full flex flex-col">
                {/* ADD MIN-HEIGHT HERE */}
                <CardHeader className="space-y-4 pb-8 min-h-[300x]">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-innovate/10 flex items-center justify-center">
                      <Cpu className="h-6 w-6 text-innovate" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">Silicon-to-Cloud Acceleration</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>For:</strong> Device and chip makers accelerating from prototype to production.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
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
                    <strong>Advisory & Implementation:</strong> Strategic technology consulting combined with hands-on
                    delivery—reference design development, secure embedded solutions, connectivity integration, chipset
                    optimization, cloud enablement, and comprehensive architecture blueprints. We compress your path from
                    silicon selection to market-ready products through systematic advisory and founder-led execution.
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-1">
                  <div className="grid grid-rows-[1fr_auto_auto] gap-6 flex-1">
                    <div>
                      <h3 className="font-bold text-lg mb-4">What We Do:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Conduct strategic assessment and define chip-to-cloud architecture
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Validate technology choices through rapid PoCs and Lab testing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Develop critical embedded modules and connectivity frameworks
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Integrate secure boot, OTA, and device management
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Enable multi-cloud connectivity (AWS, OVH)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Accelerate certification (FCC, CE, CRA compliance)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Deliver production-ready reference designs
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-4">Outcomes:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Accelerated development cycles from concept to production
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            First-time-right implementations reducing costly redesigns
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Compliance and certification acceleration (including CRA)
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-innovate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Production-ready reference designs for customer adoption
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <Button asChild className="w-full sm:w-auto">
                        <Link href="/contact">
                          Schedule Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* OT-to-Cloud */}
            <div id="ot-to-cloud" className="scroll-mt-20">
              <Card className="border-2 border-orchestrate/20 h-full flex flex-col">
                {/* ADD SAME MIN-HEIGHT HERE */}
                <CardHeader className="space-y-4 pb-8 min-h-[300px]">
                  <div className="flex items-center gap-3">
                    <div className="h-12 w-12 rounded-lg bg-orchestrate/10 flex items-center justify-center">
                      <Factory className="h-6 w-6 text-orchestrate" />
                    </div>
                    <CardTitle className="text-2xl md:text-3xl">Edge Infrastructure Integration</CardTitle>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>For:</strong> Industrial operators and enterprises seeking seamless OT/IT convergence.
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="outline" className="bg-[#8B5CF6]/10 text-[#8B5CF6] border-[#8B5CF6]/30">
                      <Settings className="w-3 h-3 mr-1" />
                      Orchestrate
                    </Badge>
                    <Badge variant="outline" className="bg-[#10B981]/10 text-[#10B981] border-[#10B981]/30">
                      <Activity className="w-3 h-3 mr-1" />
                      Sense
                    </Badge>
                    <Badge variant="outline" className="bg-[#EF4444]/10 text-[#EF4444] border-[#EF4444]/30">
                      <ShieldCheck className="w-3 h-3 mr-1" />
                      Secure
                    </Badge>
                  </div>
                  <p className="text-muted-foreground">
                    <strong>Advisory & Implementation:</strong> Bridging the gap between operational technology (OT) and
                    information technology (IT) through secure, scalable, and resilient integration solutions. We enable
                    real-time data flow from factory floor equipment, energy management systems, and building automation to cloud platforms for advanced analytics, predictive maintenance, and intelligent automation—optimizing both production efficiency and energy consumption.
                  </p>
                </CardHeader>
                
                <CardContent className="flex flex-col flex-1">
                  <div className="grid grid-rows-[1fr_auto_auto] gap-6 flex-1">
                    <div>
                      <h3 className="font-bold text-lg mb-4">What We Do:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Assess existing OT infrastructure and define integration strategy
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Design secure data pipelines from industrial edge to cloud
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Design data pipelines factory floor to cloud using industrial protocols
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Develop edge computing solutions for real-time processing
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Integrate with cloud platforms for data ingestion and analytics
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Establish robust security measures for OT/IT convergence
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <CheckCircle2 className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Provide operational dashboards and monitoring solutions
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h3 className="font-bold text-lg mb-4">Outcomes:</h3>
                      <ul className="space-y-3">
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Enhanced operational efficiency and reduced downtime
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Improved data visibility and actionable insights from OT data
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Secure and compliant OT/IT infrastructure
                          </span>
                        </li>
                        <li className="flex items-start gap-2">
                          <ArrowRight className="h-5 w-5 text-orchestrate flex-shrink-0 mt-0.5" />
                          <span className="text-sm text-muted-foreground">
                            Foundation for advanced industrial automation and AI applications
                          </span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <Button asChild className="w-full sm:w-auto">
                        <Link href="/contact">
                          Schedule Consultation
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                      </Button>
                    </div>
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

     {/* Four Pillars Framework - UPDATED VERSION */}
      <section id="four-pillars-framework" className="py-20 md:py-32 bg-gray-50 scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="max-w-7xl mx-auto space-y-12">
            
            {/* Updated Header */}
            <div className="text-center space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">Four Pillars Framework</h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our technical delivery methodology applied across both consulting offers. 
                All clients receive a pillar-based approach—emphasis varies by engagement type.
              </p>
            </div>

            <Accordion type="single" collapsible className="w-full space-y-4">
              
              {/* Pillar 1: Innovate / Accelerate - UPDATED */}
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
                    
                    {/* Updated "What It Means" */}
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 text-lg">What It Means:</h4>
                      <p className="text-gray-700 leading-relaxed">
                        Transform innovation into implementation—from rapid PoC validation to production-ready 
                        reference designs and complete solution architecture. Scope flexes based on your needs: 
                        quick feasibility studies, critical module development, or full reference implementations 
                        for market-ready products.
                      </p>
                    </div>
                    
                    {/* Updated "What We Do" */}
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

                    {/* NEW: Right-Sized Engagement Callout */}
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

                    {/* NEW: Offer-Specific Context */}
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
                            <Factory className="w-4 h-4" />
                            Edge Infrastructure Integration
                          </p>
                          <p className="text-sm text-gray-700">
                            Lighter application—validating OT protocol integration 
                            and data pipeline feasibility before full deployment.
                          </p>
                        </div>
                      </div>
                    </div>
                    
                    {/* Updated Example Outcomes */}
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


              {/* Pillar 2: Orchestrate / Scale - UPDATED */}
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

                    {/* NEW: Offer-Specific Context */}
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
                            <Factory className="w-4 h-4" />
                            Edge Infrastructure Integration
                          </p>
                          <p className="text-sm text-gray-700">
                            Primary pillar—bringing manufacturing floor data to the cloud, 
                            automating device deployment across facilities, and coordinating 
                            hardware/software vendors.
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


              {/* Pillar 3: Secure / Harden - UPDATED */}
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

                    {/* NEW: Offer-Specific Context */}
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
                            <Factory className="w-4 h-4" />
                            Edge Infrastructure Integration
                          </p>
                          <p className="text-sm text-gray-700">
                            IEC 62443 industrial security, NIS2 compliance, and secure 
                            OT/IT convergence for critical infrastructure.
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


              {/* Pillar 4: Sense / Respond - UPDATED */}
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
                          <span className="text-gray-700">Edge analytics architectures processing sensor data locally for low-latency decisions</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Predictive ML pipelines for anomaly detection, failure prediction, and optimization</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Sensor-to-decision automation frameworks triggering actions based on real-time data</span>
                        </li>
                        <li className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-[#10B981] flex-shrink-0 mt-0.5" />
                          <span className="text-gray-700">Time-series data pipelines capturing, storing, and analyzing operational telemetry</span>
                        </li>
                      </ul>
                    </div>

                    {/* NEW: Offer-Specific Context */}
                    <div className="bg-gray-50 p-6 rounded-lg border border-gray-200">
                      <h4 className="font-semibold text-gray-900 mb-3 text-base">How This Applies by Offer:</h4>
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <p className="text-sm font-semibold text-cyan-600 mb-2 flex items-center gap-2">
                            <Cpu className="w-4 h-4" />
                            Silicon-to-Cloud Acceleration
                          </p>
                          <p className="text-sm text-gray-700">
                            Optional—edge analytics and ML integration when devices require 
                            intelligent local decision-making capabilities.
                          </p>
                        </div>
                        <div>
                          <p className="text-sm font-semibold text-purple-600 mb-2 flex items-center gap-2">
                            <Factory className="w-4 h-4" />
                            Edge Infrastructure Integration
                          </p>
                          <p className="text-sm text-gray-700">
                            Primary pillar—predictive maintenance, real-time analytics, 
                            and sensor-to-decision automation for operational intelligence.
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

                  {/* OT-to-Cloud Integration */}
                  <Card className="border-l-4 border-[#8B5CF6]">
                    <CardHeader>
                      <div className="w-12 h-12 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg mb-4">
                        <Factory className="w-6 h-6 text-[#8B5CF6]" />
                      </div>
                      <CardTitle className="text-xl">OT-to-Cloud Integration</CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Industrial Data Pipelines</h4>
                        <p className="text-sm text-muted-foreground">
                          Secure data flow from factory floor to cloud—MQTT, OPC UA protocol 
                          integration with real-time data ingestion and transformation.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Edge Computing Architecture</h4>
                        <p className="text-sm text-muted-foreground">
                          Local data processing and aggregation—reducing bandwidth, enabling 
                          real-time decisions, and optimizing cloud costs.
                        </p>
                      </div>
                      <div>
                        <h4 className="font-semibold text-sm mb-2">Network Segmentation Consulting</h4>
                        <p className="text-sm text-muted-foreground">
                          OT/IT network segregation strategies—firewall rules, DMZ design, and 
                          secure gateway architecture for industrial connectivity.
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
                        Comprehensive chip-to-cloud documentation
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Comprehensive chip-to-cloud architecture documentation eliminating guesswork and integration 
                      risks—answering the critical questions your engineering and business teams need to move forward 
                      with confidence and secure budget approval.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Technology Selection Rationale:</strong> Which chipset, 
                          connectivity option, and cloud platform to choose—with cost, performance, and scalability 
                          tradeoffs clearly documented for decision-making
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Integration Specifications:</strong> Exact API contracts, 
                          data formats, and interface definitions enabling multiple vendors to build compatible components 
                          without constant coordination meetings
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Performance Requirements:</strong> Device-to-cloud data flow 
                          diagrams with latency targets, bandwidth requirements, and throughput specifications ensuring 
                          the system meets real-world operational needs
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Scaling Roadmap:</strong> Step-by-step evolution plan from 
                          pilot (10s of devices) to initial production (100s) to full scale (1000s+) with trigger points 
                          and infrastructure requirements at each stage
                        </span>
                      </li>
                    </ul>
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
                      <h3 className="text-xl md:text-2xl font-bold">Security & Compliance Framework</h3>
                      <p className="text-sm text-muted-foreground">
                        CRA, ISO 27001, GDPR compliance mapping
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Comprehensive security architecture integrated with industry-leading security tools and partner 
                      expertise—mapping your chip-to-cloud system to compliance standards (CRA, ISO 27001, GDPR) 
                      with coordinated security validation and audit-ready documentation.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Layered Security Architecture:</strong> Defense-in-depth 
                          design across device (secure boot, TPM), transport (TLS/mTLS), and cloud (IAM, encryption at rest)—
                          integrating security controls at each layer
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Compliance Documentation:</strong> Security 
                          control mapping to CRA essential requirements (EU market access), NIS2 security 
                          measures (industrial operators), and GDPR (data privacy) with traceability matrices
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Security Tool Integration:</strong> Coordinated deployment 
                          of partner security tools (penetration testing, vulnerability scanning, code analysis) with 
                          consolidated reporting and remediation tracking
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#EF4444] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Audit-Ready Evidence:</strong> Security documentation 
                          package with test results, tool outputs, compliance matrices, and remediation records enabling 
                          smooth certification audits
                        </span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 3. Operations Playbook */}
              <AccordionItem value="operations" className="border-2 border-[#8B5CF6]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#8B5CF6]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#8B5CF6]/10 rounded-lg flex-shrink-0">
                      <Settings className="w-6 h-6 md:w-7 md:h-7 text-[#8B5CF6]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold">Operations Playbook</h3>
                      <p className="text-sm text-muted-foreground">
                        Deployment, updates, incident response procedures
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      Step-by-step operational procedures for the people who will run your system daily—
                      covering deployment, updates, incident response, and recovery so your team operates 
                      confidently without depending on expensive consultants for routine operations.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Pre-Deployment Checklists:</strong> Quality gates 
                          before releasing to production—testing requirements, security scans, performance validation 
                          preventing rushed deployments that cause outages
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Controlled Rollout Procedures:</strong> Phased deployment 
                          strategies (start with 5%, expand to 25%, then 100%) with automated health monitoring catching 
                          issues before they impact entire fleet
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Rollback Plans:</strong> When updates fail, automated 
                          rollback procedures with clear error thresholds (e.g., rollback if >5% devices fail connection) 
                          minimizing downtime
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Incident Response Templates:</strong> Post-mortem structure, 
                          root cause analysis framework, and continuous improvement tracking converting incidents into 
                          learning opportunities
                        </span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

              {/* 4. Program Coordination */}
              <AccordionItem value="program" className="border-2 border-[#10B981]/20 rounded-lg overflow-hidden bg-white">
                <AccordionTrigger className="px-6 md:px-8 py-6 hover:no-underline hover:bg-[#10B981]/5">
                  <div className="flex items-center gap-4 text-left w-full">
                    <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center bg-[#10B981]/10 rounded-lg flex-shrink-0">
                      <Users className="w-6 h-6 md:w-7 md:h-7 text-[#10B981]" />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-xl md:text-2xl font-bold">Program Coordination Framework</h3>
                      <p className="text-sm text-muted-foreground">
                        Multi-vendor integration management
                      </p>
                    </div>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 md:px-8 pb-8">
                  <div className="space-y-4 pt-4">
                    <p className="text-muted-foreground">
                      When multiple vendors contribute to your IoT system (chipmaker, connectivity provider, cloud platform), 
                      clear coordination frameworks prevent integration chaos—defining ownership boundaries, interface 
                      contracts, and change management ensuring everyone stays aligned.
                    </p>
                    <ul className="space-y-3">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Responsibility Matrix:</strong> RACI definitions answering 
                          "who owns what"—eliminating finger-pointing when issues arise by clearly documenting which 
                          vendor is responsible, accountable, consulted, or informed
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Interface Specifications:</strong> API contracts and data 
                          format standards enabling vendors to build compatible components independently, reducing constant 
                          coordination meetings and blocking dependencies
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Change Control Process:</strong> Formal procedures for 
                          proposing, reviewing, and approving changes preventing "surprise" updates that break integrations 
                          and derail timelines
                        </span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                        <span className="text-sm text-muted-foreground">
                          <strong className="text-foreground">Vendor Performance Tracking:</strong> Scorecard methodologies 
                          measuring delivery timeliness, quality metrics, and responsiveness enabling data-driven vendor 
                          management decisions
                        </span>
                      </li>
                    </ul>
                  </div>
                </AccordionContent>
              </AccordionItem>

            </Accordion>

            {/* CTA */}
            <div className="text-center">
              <Button asChild size="lg" variant="outline">
                <Link href="/resources">Request Sample Blueprint</Link>
              </Button>
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


      {/* Three-Phase Consulting Methodology - ENHANCED VISUAL VERSION */}
<section id="consulting-methodology" className="py-20 md:py-32 scroll-mt-20">
  <div className="container mx-auto px-4">
    <div className="max-w-7xl mx-auto space-y-16">
      <div className="text-center space-y-4">
        <h2 className="text-3xl md:text-4xl font-bold">Three-Phase Consulting Methodology</h2>
        <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
          Structured engagement process from strategic assessment to production deployment
        </p>
      </div>

      {/* Grid with Arrow Connectors */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 relative">
        
        {/* Arrow Connector 1→2 (Hidden on mobile) */}
        <div className="hidden md:block absolute top-32 left-[33.33%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowRight className="h-8 w-8 text-[#8B5CF6]/40" strokeWidth={2.5} />
        </div>
        
        {/* Arrow Connector 2→3 (Hidden on mobile) */}
        <div className="hidden md:block absolute top-32 left-[66.66%] transform -translate-x-1/2 -translate-y-1/2 z-10">
          <ArrowRight className="h-8 w-8 text-[#10B981]/40" strokeWidth={2.5} />
        </div>

        {/* Phase 1: Discovery */}
        <Card className="border-l-4 border-[#06B6D4] hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              {/* Enhanced Icon Badge with Ring */}
              <div className="w-14 h-14 rounded-full bg-[#06B6D4]/10 flex items-center justify-center ring-4 ring-[#06B6D4]/20">
                <Search className="h-7 w-7 text-[#06B6D4]" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Discovery Phase</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">4-6 weeks • Strategic validation</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-base">What Happens:</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Comprehensive assessment of your current state, technical requirements, and compliance needs—
                answering the critical question: "Should we build this, and if yes, how?" This phase delivers
                the blueprint and business case needed to secure executive approval and budget.
              </p>
              {/* Enhanced List with Better Contrast */}
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Chip-to-cloud readiness assessment evaluating current architecture gaps</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">CRA compliance gap analysis with 12-24 month remediation roadmap</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Architecture blueprint with technology selection rationale</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Business case with ROI projections, cost analysis, and risk assessment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#06B6D4] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Implementation roadmap with phase priorities and resource requirements</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#06B6D4]/5 p-4 rounded-lg border-l-4 border-[#06B6D4]">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#06B6D4]" />
                Quality Gate: Go/No-Go Decision
              </h4>
              <p className="text-sm text-muted-foreground">
                Executive sign-off on architecture blueprint, CRA compliance roadmap, and business case—
                providing clear go/no-go decision point before committing to full implementation.
                Many clients stop here with validated blueprint for internal development.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Phase 2: Build */}
        <Card className="border-l-4 border-[#8B5CF6] hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              {/* Enhanced Icon Badge with Ring */}
              <div className="w-14 h-14 rounded-full bg-[#8B5CF6]/10 flex items-center justify-center ring-4 ring-[#8B5CF6]/20">
                <Code className="h-7 w-7 text-[#8B5CF6]" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Build Phase</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">12-20 weeks • Agile implementation</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-base">What Happens:</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Hands-on development of critical system components your team can't build alone—reference
                firmware, cloud integrations, security implementations. Delivered in 2-week sprints with
                working demos ensuring alignment and reducing late-stage surprises.
              </p>
              {/* Enhanced List with Better Contrast */}
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Bi-weekly sprint demos with working code, not PowerPoint slides</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Critical module development (device firmware, connectivity, cloud integration)</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Continuous integration setup with automated testing and quality checks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Operations Playbooks documenting deployment and incident response procedures</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#8B5CF6] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Security Framework with compliance mapping and audit-ready documentation</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#8B5CF6]/5 p-4 rounded-lg border-l-4 border-[#8B5CF6]">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#8B5CF6]" />
                Quality Gate: Implementation Verification
              </h4>
              <p className="text-sm text-muted-foreground">
                Functional demos validated against blueprint specifications, test coverage exceeding 80%,
                security verification completed, integration testing passed. Ensures what we built actually
                works before moving to production pilots—catching issues in controlled environment.
              </p>
            </div>
          </CardContent>
        </Card>

        {/* Phase 3: Pilot-to-Scale */}
        <Card className="border-l-4 border-[#10B981] hover:shadow-lg transition-shadow">
          <CardHeader>
            <div className="flex items-center gap-3 mb-4">
              {/* Enhanced Icon Badge with Ring */}
              <div className="w-14 h-14 rounded-full bg-[#10B981]/10 flex items-center justify-center ring-4 ring-[#10B981]/20">
                <Rocket className="h-7 w-7 text-[#10B981]" strokeWidth={2.5} />
              </div>
              <div>
                <CardTitle className="text-2xl">Pilot-to-Scale Phase</CardTitle>
                <p className="text-sm text-muted-foreground font-medium">8-12 weeks • Production validation</p>
              </div>
            </div>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h4 className="font-semibold mb-3 text-base">What Happens:</h4>
              <p className="text-muted-foreground mb-4 text-sm">
                Real-world pilot deployment with actual devices, users, and operational conditions—
                validating the system performs as designed and your team can operate it independently.
                Ends with complete handoff enabling confident scaling to thousands of devices.
              </p>
              {/* Enhanced List with Better Contrast */}
              <ul className="space-y-2 text-sm">
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Pilot deployment with 10-100 devices in real operational environment</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Performance verification: latency, throughput, reliability metrics validated</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Operational validation: Your team runs daily operations with our support</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Complete documentation handoff: Architecture, Operations, Security frameworks</span>
                </li>
                <li className="flex items-start gap-2">
                  <CheckCircle2 className="h-4 w-4 text-[#10B981] flex-shrink-0 mt-0.5" />
                  <span className="font-medium">Team training on operations, troubleshooting, and incident response</span>
                </li>
              </ul>
            </div>

            <div className="bg-[#10B981]/5 p-4 rounded-lg border-l-4 border-[#10B981]">
              <h4 className="font-semibold text-sm mb-2 flex items-center gap-2">
                <ShieldCheck className="h-4 w-4 text-[#10B981]" />
                Quality Gate: Production Readiness
              </h4>
              <p className="text-sm text-muted-foreground">
                Pilot success metrics achieved (uptime >99%, performance within targets), operations runbooks
                validated through real incidents, acceptance criteria met, your team operating independently.
                Sign-off confirms you're ready to scale to full production without ongoing consultant dependency.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>

      <div className="text-center">
        <Button asChild variant="outline" size="lg">
          <Link href="/resources">Download Process Overview PDF</Link>
        </Button>
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
