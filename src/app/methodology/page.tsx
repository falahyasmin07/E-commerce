"use client";

import React from "react";
import Link from "next/link";
import {
  CheckCircle2,
  ShieldCheck,
  Settings,
  Code,
  Search,
  Rocket,
  Lightbulb,
  Activity,
  Cpu,
  Server,
  ArrowRight,
  FileText,
  Package,
  Users,
  Cloud
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MethodologyPage() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-teal-100 selection:text-teal-900">
      
      {/* HERO */}
      <section className="relative pt-32 pb-24 bg-white border-b border-slate-200">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-slate-300 text-slate-600 bg-slate-50 px-4 py-1 text-sm uppercase tracking-widest">Our Process</Badge>
          <h1 className="text-4xl md:text-6xl font-bold text-slate-900 mb-8">
            Engineering That Ships <br/>
            <span className="text-slate-500">Built on Proven Patterns</span>
          </h1>
          <p className="text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-12">
             Edge projects often fail due to integration complexity. We bridge the gap between prototype and production with a rigorous, governance-first framework.
          </p>
        </div>
      </section>

      {/* FOUR PILLARS FRAMEWORK - CLEAN 2x2 GRID DESIGN */}
      <section className="py-24 bg-slate-50">
         <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center mb-20">
               <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">The Four Pillars Framework</h2>
               <p className="text-lg text-slate-600 max-w-3xl mx-auto">
                 A comprehensive methodology designed to minimize risk and accelerate deployment. We don't just build features; we engineer resilient systems.
               </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               {/* PILLAR 1: INNOVATE */}
               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-400 to-teal-600" />
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-teal-50 rounded-xl flex items-center justify-center text-teal-600 group-hover:scale-110 transition-transform">
                        <Lightbulb className="w-7 h-7" />
                     </div>
                     <span className="text-6xl font-bold text-slate-100 -mt-4 -mr-4 opacity-50 group-hover:opacity-100 transition-opacity select-none">01</span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Innovate</h3>
                  <p className="text-sm font-bold text-teal-600 uppercase tracking-widest mb-4">Rapid PoC & Validation</p>
                  <p className="text-slate-600 leading-relaxed mb-8 min-h-[3rem]">
                    Accelerate development with validated reference designs. We ensure you build on a solid foundation, not an exploratory prototype.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                     <ul className="space-y-3">
                        {["Rapid Lab validation & prototyping", "Firmware & cloud blueprints", "Tech stack & BOM selection"].map((item, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-teal-500 mr-3 mt-0.5 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* PILLAR 2: ORCHESTRATE */}
               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-400 to-indigo-600" />
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform">
                        <Settings className="w-7 h-7" />
                     </div>
                     <span className="text-6xl font-bold text-slate-100 -mt-4 -mr-4 opacity-50 group-hover:opacity-100 transition-opacity select-none">02</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Orchestrate</h3>
                  <p className="text-sm font-bold text-indigo-600 uppercase tracking-widest mb-4">Multi-Vendor Automation</p>
                  <p className="text-slate-600 leading-relaxed mb-8 min-h-[3rem]">
                    Eliminate integration failures. We coordinate chips, connectivity, and cloud platforms into a unified, automated fleet.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                     <ul className="space-y-3">
                        {["Zero-touch provisioning workflows", "Secure device onboarding", "Policy management at scale"].map((item, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-indigo-500 mr-3 mt-0.5 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* PILLAR 3: SECURE */}
               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-rose-400 to-rose-600" />
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-rose-50 rounded-xl flex items-center justify-center text-rose-600 group-hover:scale-110 transition-transform">
                        <ShieldCheck className="w-7 h-7" />
                     </div>
                     <span className="text-6xl font-bold text-slate-100 -mt-4 -mr-4 opacity-50 group-hover:opacity-100 transition-opacity select-none">03</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Secure</h3>
                  <p className="text-sm font-bold text-rose-600 uppercase tracking-widest mb-4">Security-by-Design</p>
                  <p className="text-slate-600 leading-relaxed mb-8 min-h-[3rem]">
                    Compliance architected from the start. We align your architecture with CRA, NIS2, and IEC 62443 standards.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                     <ul className="space-y-3">
                        {["Hardware Root of Trust & Secure Boot", "Certificate lifecycle management", "Audit-ready documentation"].map((item, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-rose-500 mr-3 mt-0.5 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>

               {/* PILLAR 4: RESPOND */}
               <div className="bg-white rounded-2xl p-8 border border-slate-200 shadow-sm hover:shadow-xl transition-all duration-300 group relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-sky-400 to-sky-600" />
                  <div className="flex justify-between items-start mb-6">
                     <div className="w-14 h-14 bg-sky-50 rounded-xl flex items-center justify-center text-sky-600 group-hover:scale-110 transition-transform">
                        <Activity className="w-7 h-7" />
                     </div>
                     <span className="text-6xl font-bold text-slate-100 -mt-4 -mr-4 opacity-50 group-hover:opacity-100 transition-opacity select-none">04</span>
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">Respond</h3>
                  <p className="text-sm font-bold text-sky-600 uppercase tracking-widest mb-4">Edge Data & AI</p>
                  <p className="text-slate-600 leading-relaxed mb-8 min-h-[3rem]">
                    Transform raw telemetry into action. We architect workflows that process data locally for real-time decisions.
                  </p>

                  <div className="bg-slate-50 rounded-xl p-5 border border-slate-100">
                     <ul className="space-y-3">
                        {["Sensor integration & data pipelines", "Local compute & AI inference", "Real-time analytics at the edge"].map((item, i) => (
                           <li key={i} className="flex items-start text-sm text-slate-700">
                              <CheckCircle2 className="w-4 h-4 text-sky-500 mr-3 mt-0.5 shrink-0" /> {item}
                           </li>
                        ))}
                     </ul>
                  </div>
               </div>
            </div>
         </div>
      </section>

      {/* THREE-PHASE PROCESS */}
      <section className="py-24 bg-white border-y border-slate-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Three-Phase Delivery Process</h2>
            <p className="text-slate-600">A structured path from concept to independent operation.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            <div className="hidden md:block absolute top-1/2 left-0 w-full h-1 bg-slate-100 -z-10 -translate-y-1/2" />

            {/* Phase 1 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-sm">1</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Discovery</h3>
              <p className="text-sm font-bold text-teal-600 mb-4 uppercase tracking-wide">Assessment</p>
              <p className="text-slate-600 text-sm mb-6">We audit your requirements, select the optimal silicon/cloud stack, and map out the compliance landscape.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Search className="w-4 h-4 text-teal-500"/> Tech Stack Rationale</li>
                 <li className="flex gap-2"><FileText className="w-4 h-4 text-teal-500"/> Architecture Blueprint</li>
              </ul>
            </div>

            {/* Phase 2 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-sm">2</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Build</h3>
              <p className="text-sm font-bold text-indigo-600 mb-4 uppercase tracking-wide">Agile</p>
              <p className="text-slate-600 text-sm mb-6">Iterative development of the reference implementation, including firmware, cloud infrastructure, and security hooks.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Code className="w-4 h-4 text-indigo-500"/> MVP Implementation</li>
                 <li className="flex gap-2"><ShieldCheck className="w-4 h-4 text-indigo-500"/> Security Hardening</li>
              </ul>
            </div>

            {/* Phase 3 */}
            <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-lg hover:-translate-y-1 transition-transform">
              <div className="w-12 h-12 bg-slate-900 text-white rounded-full flex items-center justify-center text-xl font-bold mb-6 border-4 border-white shadow-sm">3</div>
              <h3 className="text-2xl font-bold text-slate-900 mb-2">Scale</h3>
              <p className="text-sm font-bold text-sky-600 mb-4 uppercase tracking-wide">Handover</p>
              <p className="text-slate-600 text-sm mb-6">We move from pilot to production, optimizing for cost and transferring knowledge to your internal team.</p>
              <ul className="space-y-2 text-sm text-slate-600">
                 <li className="flex gap-2"><Rocket className="w-4 h-4 text-sky-500"/> Pilot Deployment</li>
                 <li className="flex gap-2"><Users className="w-4 h-4 text-sky-500"/> Team Training</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* DELIVERABLES - HIGH-LEVEL */}
      <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4 max-w-5xl">
         <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            We Don't Sell Advice. We Ship Accelerators.
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Proven, reusable blueprints that reduce your time-to-value. You don't get slideshows—you get <strong>git repos</strong> with battle-tested implementations.
            </p>
         </div>
         
         <Accordion type="single" collapsible className="w-full space-y-4">
            {[
            { 
               id: "device", 
               title: "Device Launch Kit", 
               icon: Cpu, 
               desc: "Everything you need to bring an IoT device to production. Pre-validated silicon choices, production-ready firmware baseline, and secure boot patterns—so you can focus on your product, not infrastructure.",
               includes: ["Reference Firmware", "Secure Boot Setup", "OTA Framework", "Low-Power Profiles", "Getting Started Guide"]
            },
            { 
               id: "edge", 
               title: "Industrial Edge Platform", 
               icon: Server, 
               desc: "Hardware-accelerated edge infrastructure ready to deploy. Run real-time AI on industrial gateways, bridge legacy protocols, and maintain compliance—without months of custom integration.",
               includes: ["Optimized OS Image", "Hardware Drivers", "AI Runtime", "Protocol Bridges", "Sample Applications"]
            },
            { 
               id: "ecosystem", 
               title: "Chip-to-Cloud Integration", 
               icon: Cloud, 
               desc: "Pre-validated reference architectures connecting silicon to cloud. AWS IoT Core and OVHcloud integrations ready to deploy—no custom middleware, no protocol guessing, no vendor finger-pointing.",
               includes: ["Reference Architectures", "Cloud Connectors (AWS/OVH)", "Secure Onboarding", "OTA Framework", "Zero-Trust Patterns"]
               },
            { 
               id: "compliance", 
               title: "Security & Compliance Package", 
               icon: ShieldCheck, 
               desc: "Audit-ready documentation and security frameworks for CRA, IEC 62443, and NIS2. Sleep better knowing your architecture meets regulatory requirements from day one.",
               includes: ["Security Architecture", "Threat Models", "Compliance Mappings", "Audit Evidence", "Certification Support"]
            },
            ].map((item) => (
            <AccordionItem key={item.id} value={item.id} className="border border-slate-200 rounded-lg bg-white px-2 shadow-sm hover:shadow-md transition-shadow">
               <AccordionTrigger className="hover:no-underline px-4 py-4">
                  <div className="flex items-center gap-4 text-left w-full">
                  <div className="w-10 h-10 bg-slate-100 rounded-lg flex items-center justify-center shrink-0 text-slate-600">
                     <item.icon className="w-5 h-5" />
                  </div>
                  <div className="flex-grow">
                     <h4 className="font-bold text-slate-900 text-base">{item.title}</h4>
                  </div>
                  </div>
               </AccordionTrigger>
               <AccordionContent className="px-4 pb-6 pt-2 sm:pl-[4.5rem]">
                  <p className="text-sm text-slate-600 leading-relaxed mb-4">{item.desc}</p>
                  <div className="bg-slate-50 rounded-lg p-4 border border-slate-100">
                  <div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">What You Get:</div>
                  <div className="flex flex-wrap gap-2">
                     {item.includes.map((inc, i) => (
                        <Badge key={i} variant="secondary" className="bg-white border border-slate-200 text-slate-600 text-xs">
                        {inc}
                        </Badge>
                     ))}
                  </div>
                  </div>
               </AccordionContent>
            </AccordionItem>
            ))}
         </Accordion>
      </div>
      </section>



      {/* CTA */}
      <section className="py-24 bg-slate-900 text-white text-center">
        <div className="container mx-auto px-4 max-w-3xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start with a solid foundation.</h2>
          <p className="text-slate-300 text-lg mb-10">
            Avoid the technical debt that kills IoT projects. Let's build it right the first time.
          </p>
          <Button size="lg" className="bg-white text-slate-900 hover:bg-teal-50 h-14 px-8 font-semibold rounded-full" asChild>
             <Link href="/contact">Book a Consultation</Link>
          </Button>
        </div>
      </section>

    </div>
  );
}
