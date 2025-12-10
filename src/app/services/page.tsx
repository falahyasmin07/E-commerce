"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowUp,
  CheckCircle2,
  Cpu,
  Cloud,
  Wifi,
  ShieldCheck,
  Server,
  Database,
  Layers,
  LucideIcon,
  ArrowUpRight,
  Settings,
  Zap,
  Network,
  Smartphone,
  Lock,
  Rocket,
  Factory,
  BarChart3,
  Code,
  Activity,
  Car,
  Lightbulb
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { cn } from "@/lib/utils";
import FourPillarsCarousel from "@/components/four-pillars-carousel";
import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

// --- COMPONENTS (Reused) ---

interface FeatureSectionProps {
  id: string;
  title: string;
  tag: string;
  tagColor: "teal" | "sky" | "indigo";
  category: string;
  description: string;
  features: Array<{ title: string; description: string }>;
  outcomes: string[];
  imageSrc: string;
  icon: LucideIcon;
  reversed?: boolean;
}

const FeatureSection = ({
  id,
  title,
  tag,
  tagColor,
  category,
  description,
  features,
  outcomes,
  imageSrc,
  icon: Icon,
  reversed = false
}: FeatureSectionProps) => {
  const styles = {
    teal: { badge: "bg-teal-100 text-teal-800 border-teal-200", iconBg: "bg-teal-50 text-teal-600", check: "text-teal-600" },
    sky: { badge: "bg-sky-100 text-sky-800 border-sky-200", iconBg: "bg-sky-50 text-sky-600", check: "text-sky-600" },
    indigo: { badge: "bg-indigo-100 text-indigo-800 border-indigo-200", iconBg: "bg-indigo-50 text-indigo-600", check: "text-indigo-600" },
  };
  const currentStyle = styles[tagColor];

  return (
    <div id={id} className={`scroll-mt-24 py-12 md:py-24 ${reversed ? "bg-slate-50" : "bg-white"}`}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className={`flex flex-col lg:flex-row items-center gap-12 lg:gap-20 ${reversed ? "lg:flex-row-reverse" : ""}`}>
          <div className="lg:w-1/2 space-y-8">
            <div className="space-y-4">
               <div className="flex items-center gap-3">
                  <span className={`inline-flex items-center justify-center w-10 h-10 rounded-lg ${currentStyle.iconBg}`}>
                     <Icon className="w-5 h-5" />
                  </span>
                  <Badge variant="outline" className={`font-mono text-[10px] uppercase tracking-widest px-2 py-1 ${currentStyle.badge}`}>{tag}</Badge>
               </div>
               <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                 {title} <span className="block text-slate-400 text-xl font-medium mt-1">{category}</span>
               </h3>
            </div>
            <p className="text-lg text-slate-600 leading-relaxed border-l-4 pl-6 py-2 border-slate-200">{description}</p>
            <div className="grid grid-cols-1 gap-4">
               {features.map((feat, i) => (
                  <div key={i} className="flex items-start gap-2 text-sm">
                     <CheckCircle2 className={`w-5 h-5 shrink-0 ${currentStyle.check} mt-0.5`} />
                     <span className="text-slate-700">
                       <strong>{feat.title}:</strong> {feat.description}
                     </span>
                  </div>
               ))}
            </div>
            <div className="pt-4">
               <div className="bg-white border border-slate-100 shadow-sm rounded-xl p-5">
                  <h4 className="text-xs font-bold uppercase text-slate-400 mb-3 tracking-wider">Key Outcomes</h4>
                  <div className="space-y-2">
                     {outcomes.map((out, i) => (
                        <div key={i} className="flex items-center gap-2 text-sm text-slate-600">
                           <ArrowRight className="w-4 h-4 text-slate-300" /> {out}
                        </div>
                     ))}
                  </div>
               </div>
            </div>
          </div>
          <div className="lg:w-1/2 w-full">
             <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl border border-slate-100 group">
                <div className="absolute inset-0 bg-slate-900/10 group-hover:bg-transparent transition-colors duration-500 z-10" />
                <Image src={imageSrc} alt={title} fill className="object-cover transform group-hover:scale-105 transition-transform duration-700" />
             </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface TechCardProps {
  title: string;
  icon: LucideIcon;
  description: string;
  stack: string[];
  color: "teal" | "sky" | "indigo" | "rose" | "violet" | "emerald";
  className?: string;
}

const TechCard = ({ title, icon: Icon, description, stack, color, className }: TechCardProps) => {
  const styles = {
    teal: { border: "border-t-teal-500", icon: "text-teal-600 bg-teal-50", badge: "hover:border-teal-200 hover:bg-teal-50" },
    sky: { border: "border-t-sky-500", icon: "text-sky-600 bg-sky-50", badge: "hover:border-sky-200 hover:bg-sky-50" },
    indigo: { border: "border-t-indigo-500", icon: "text-indigo-600 bg-indigo-50", badge: "hover:border-indigo-200 hover:bg-indigo-50" },
    rose: { border: "border-t-rose-500", icon: "text-rose-600 bg-rose-50", badge: "hover:border-rose-200 hover:bg-rose-50" },
    violet: { border: "border-t-violet-500", icon: "text-violet-600 bg-violet-50", badge: "hover:border-violet-200 hover:bg-violet-50" },
    emerald: { border: "border-t-emerald-500", icon: "text-emerald-600 bg-emerald-50", badge: "hover:border-emerald-200 hover:bg-emerald-50" },
  };
  const currentStyle = styles[color];

  return (
    <div className={cn("flex flex-col p-6 md:p-8 rounded-xl bg-white border border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 group border-t-4", currentStyle.border, className)}>
      <div className="flex justify-between items-start mb-6">
        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${currentStyle.icon} transition-transform group-hover:scale-110`}>
          <Icon className="w-6 h-6" />
        </div>
      </div>
      <h3 className="text-lg font-bold text-slate-900 mb-3">{title}</h3>
      <p className="text-sm text-slate-600 leading-relaxed mb-8 flex-grow">{description}</p>
      <div className="flex flex-wrap gap-2 mt-auto pt-6 border-t border-slate-50">
        {stack.map((tech) => (
          <Badge key={tech} variant="secondary" className={`bg-white border border-slate-200 text-slate-600 font-medium px-2.5 py-1 transition-colors ${currentStyle.badge}`}>{tech}</Badge>
        ))}
      </div>
    </div>
  );
};

// --- MAIN PAGE COMPONENT ---

export default function ServicesPage() {
  const [activeSection, setActiveSection] = useState("");

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        });
      },
      { threshold: 0.2, rootMargin: "-100px 0px -50% 0px" }
    );
    const sections = document.querySelectorAll("section[id], div[id]");
    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  const handleScrollTo = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.querySelector(id);
    if (element) element.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  return (
    <div className="min-h-screen bg-slate-50 font-sans selection:bg-sky-100 selection:text-sky-900">
      
      {/* HERO */}
      <section className="relative pt-24 pb-20 lg:pt-32 lg:pb-24 overflow-hidden border-b border-slate-200 bg-white">
        <div className="container relative z-10 mx-auto px-4 text-center max-w-4xl">
          <Badge variant="outline" className="mb-6 border-slate-300 text-slate-600 bg-slate-50 px-4 py-1 text-sm shadow-sm">Services & Capabilities</Badge>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-slate-900 mb-6">
            Chip-to-Edge <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-sky-600 to-indigo-600">Technical Advisor & Builder</span>
          </h1>
          <p className="text-lg md:text-xl text-slate-600 leading-relaxed max-w-2xl mx-auto mb-10">
            Strategic advisory and hands-on implementation—from silicon selection to cloud integration. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 shadow-lg h-12 px-8" asChild><Link href="/contact">Schedule Discovery Call</Link></Button>
          </div>
        </div>
      </section>

      {/* STICKY NAV - FIXED */}
      <div className="sticky top-20 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-sm">
        <div className="container mx-auto px-4 flex justify-center items-center gap-8 py-4 overflow-x-auto no-scrollbar">
          {[
            { label: "IoT Core", href: "#iot-core" },
            { label: "Near Edge", href: "#near-edge" },
            { label: "Far Edge", href: "#far-edge" },
            { label: "Tech Stack", href: "#technical-capabilities" },
          ].map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              onClick={(e) => handleScrollTo(e, link.href)}
              className={cn(
                "text-sm font-medium whitespace-nowrap transition-colors px-3 py-1 rounded-full",
                activeSection === link.href.replace("#", "")
                  ? "bg-slate-900 text-white shadow-sm"
                  : "text-slate-500 hover:text-slate-900"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>


      {/* THREE CORE OFFERS - Z-PATTERN WITH ALIGNED CONTENT */}
      <div className="flex flex-col">
        <FeatureSection 
          id="iot-core" 
          title="IoT Core" 
          tag="Embedded Systems" 
          tagColor="teal" 
          category="Device Edge"
          description="Accelerate device launches with validated chip-to-cloud patterns. Pre-qualified silicon choices, production-ready BSP kits, and secure boot frameworks—eliminate trial-and-error and ship faster."
          imageSrc="/silicon-to-cloud.png" 
          icon={Cpu}
          features={[
            { title: "Pre-validated silicon", description: "ARM Cortex-M, RISC-V, NXP, STM32—no guesswork" },
            { title: "Production-ready BSP", description: "Zephyr RTOS, secure boot, OTA patterns included" },
            { title: "Real battery life", description: "Low-power optimization that delivers datasheet promises" },
            { title: "CRA compliance", description: "Security by design, not bolted on" }
          ]}
          outcomes={["Faster path to mass production", "Production-ready from day one with secure, compliant architecture"]}
        />
        
        <FeatureSection 
          id="near-edge" 
          title="Near Edge" 
          tag="Edge Computing" 
          tagColor="sky" 
          category="Local Edge"
          description="Silicon-optimized edge platforms that extract full NPU/GPU potential. Run real-time AI (30fps object detection) on industrial gateways while bridging MQTT, OPC-UA, and Modbus—IEC 62443 and NIS2 compliant from day one."
          imageSrc="/edge-infrastructure.png" 
          icon={Server} 
          reversed={true}
          features={[
            { title: "Hardware acceleration unlocked", description: "NPU/GPU drivers for 10x faster AI inference" },
            { title: "Real-time edge AI", description: "Object detection (YOLO, MobileNet) on industrial-grade hardware" },
            { title: "Protocol bridging", description: "MQTT, OPC-UA, Modbus—unified data fabric" },
            { title: "Industrial hardening", description: "IEC 62443 & NIS2 via secure Linux (Yocto)" }
          ]}
          outcomes={["Correct hardware topology selected first time", "Compliance-ready architectures reducing project risk"]}
        />
        
        <FeatureSection 
          id="far-edge" 
          title="Far Edge" 
          tag="Cloud Integration" 
          tagColor="indigo" 
          category="Cloud Edge"
          description="Connect silicon to cloud with pre-validated reference architectures. AWS IoT Core and OVHcloud integrations ready to deploy—no custom middleware, no protocol guessing, no vendor finger-pointing."
          imageSrc="/cloud-integration.png" 
          icon={Cloud}
          features={[
            { title: "Reference architectures", description: "Chip-optimized patterns validated from silicon to cloud" },
            { title: "Pre-integrated cloud connectors", description: "AWS IoT Core, OVHcloud—ready to deploy" },
            { title: "Secure device onboarding", description: "Zero-trust patterns with TPM, secure enclaves" },
            { title: "OTA foundations", description: "Firmware update frameworks built in, not bolted on" }
          ]}
          outcomes={["Connect devices in weeks, not months", "No custom middleware or protocol integration overhead"]}
        />
      </div>

     {/* INDUSTRIES TRANSITION - LIGHT */}
    <section className="py-20 bg-white border-y border-slate-200 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-slate-50 to-white" />
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-slate-300 text-slate-700 bg-slate-50 px-4 py-1.5 text-sm">
            Industry Applications
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">
            These Patterns, Applied to <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 to-sky-600">Your Industry</span>
          </h2>
          <p className="text-lg text-slate-600 leading-relaxed mb-10 max-w-2xl mx-auto">
            From semiconductors to smart infrastructure, we translate chip-to-cloud expertise into industry-specific solutions. See how our approach solves real-world challenges.
          </p>
          
          <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-12 px-8 rounded-full shadow-lg" asChild>
            <Link href="/industries" className="flex items-center gap-2">
              Explore All Industries <ArrowUpRight className="w-5 h-5" />
            </Link>
          </Button>
        </div>
      </div>
    </section>



      {/* TECH CAPABILITIES (Bento Grid) */}
    <section id="technical-capabilities" className="py-24 bg-slate-50 border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-16 md:text-center max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Production-Grade Tech Stack</h2>
          <p className="text-lg text-slate-600 leading-relaxed">Production-proven technologies across every edge layer.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          
          {/* Row 1: Embedded Platforms, Wireless, Cellular */}
          <TechCard 
            title="Embedded Platforms" 
            icon={Cpu} 
            color="teal" 
            description="Silicon foundations for IoT, edge AI, and industrial applications." 
            stack={[
              "ARM Cortex-M/A",
              "RISC-V",
              "Tensilica",
              "Low-Power SoCs",
              "Edge AI Accelerators",
              "DSP"
            ]} 
          />
          
          <TechCard 
            title="Wireless Connectivity" 
            icon={Wifi} 
            color="sky" 
            description="Short-range and mesh protocols for local device communication." 
            stack={[
              "Wi-Fi",
              "Bluetooth",
              "BLE",
              "UWB",
              "Matter / Thread",
              "Zigbee"
            ]} 
          />
          
          <TechCard 
            title="Cellular IoT" 
            icon={Layers} 
            color="indigo" 
            description="Global wide-area connectivity with carrier pre-certification." 
            stack={[
              "LTE-M / NB-IoT",
              "5G RedCap",
              "LoRaWAN",
              "eSIM / iSIM"
            ]} 
          />
          
          {/* Row 2: Signal Processing, Security, Edge AI */}
          <TechCard 
            title="Signal Processing" 
            icon={Activity} 
            color="violet" 
            description="Real-time DSP algorithms for audio, sensor fusion, and communications." 
            stack={[
              "Algorithms",
              "Audio Processing",
              "Sensor Fusion",
              "Fixed/Floating Point",
              "CMSIS-DSP"
            ]} 
          />
          
          <TechCard 
            title="Security & Compliance" 
            icon={ShieldCheck} 
            color="rose" 
            description="Zero-trust architecture with hardware-backed security and regulatory compliance." 
            stack={[
              "Secure Boot",
              "TLS",
              "Hardware RoT/TPM 2.0",
              "CRA Compliance",
              "NIS2 Framework",
              "IEC 62443"
            ]} 
          />
          
          <TechCard 
            title="Edge AI & Data" 
            icon={Database} 
            color="emerald" 
            description="Real-time inference and time-series processing at the edge to reduce cloud costs." 
            stack={[
              "Edge Impulse",
              "TensorFlow",
              "PyTorch",
              "NumPy / Pandas",
              "ONNX"
            ]} 
          />
          
          {/* Row 3: Near Edge (left half) and Far Edge (right half) */}
          <div className="md:col-span-1 lg:col-span-3 xl:col-span-3">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              
              {/* Near Edge Stack */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-purple-500 border-x border-b border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group focus:outline-none">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Server className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Near Edge Stack</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Gateway, Performance, AI, Connectivity. Hardware-accelerated edge platforms for industrial sites.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                  {[
                    "Yocto/Buildroot",
                    "NXP i.MX/Jetson",
                    "Docker/K3s",
                    "TensorFlow Lite",
                    "ONNX Runtime",
                    "OPC-UA/Modbus",
                    "MQTT/CoAP",
                    "Mender.io OTA",
                  ].map(t => (
                    <Badge key={t} variant="secondary" className="bg-white border border-slate-200 text-slate-600 hover:border-purple-200 hover:bg-purple-50 font-medium px-2.5 py-1 text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              
              {/* Far Edge Stack */}
              <div className="bg-white rounded-xl p-6 border-t-4 border-indigo-500 border-x border-b border-slate-200 shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col group focus:outline-none">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Cloud className="w-6 h-6" />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-lg font-bold text-slate-900 mb-2">Far Edge Stack</h3>
                    <p className="text-slate-600 text-sm leading-relaxed">
                      Platform, Scale, Data Management. Cloud-native infrastructure for connected ecosystems.
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-50">
                  {[
                    "AWS IoT Core",
                    "OVHcloud",
                    "Terraform/Helm",
                    "Kafka/RabbitMQ",
                    "InfluxDB/Grafana",
                    "HAProxy",
                    "Thingsboard",
                    "Python",
                    "C/C++",
                    "LwM2M/gRPC"
                  ].map(t => (
                    <Badge key={t} variant="secondary" className="bg-white border border-slate-200 text-slate-600 hover:border-indigo-200 hover:bg-indigo-50 font-medium px-2.5 py-1 text-xs">
                      {t}
                    </Badge>
                  ))}
                </div>
              </div>
              
            </div>
          </div>
          
        </div>
      </div>
    </section>




    {/* METHODOLOGY TEASER */}
    <section className="py-20 bg-slate-900 text-white overflow-hidden relative">
      <div className="absolute inset-0 opacity-10 bg-[url('/grid-pattern.svg')] bg-center" />
      <div className="container mx-auto px-4 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold mb-4">
            <span className="text-teal-400 whitespace-nowrap">How we build</span> matters as much as what we deliver.
          </h2>
          <p className="text-slate-300 text-lg leading-relaxed">
            Our Four Pillars Framework delivers secure, scalable solutions with engineering 
            discipline at every layer.
          </p>
        </div>
        <Button size="lg" className="bg-teal-500 text-white hover:bg-teal-400 h-14 px-8 text-lg rounded-full shadow-[0_0_20px_rgba(20,184,166,0.3)] shrink-0" asChild>
          <Link href="/methodology" className="flex items-center gap-2">
            Explore Our Methodology <ArrowRight className="w-5 h-5"/>
          </Link>
        </Button>
      </div>
    </section>

     {/* CTA */}
    <section className="py-24 bg-gradient-to-br from-slate-50 to-white text-center border-t border-slate-200">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-6">Start with a solid foundation.</h2>
        <p className="text-slate-600 text-lg mb-10">
          Avoid the technical debt that kills IoT projects. Let's build it right the first time.
        </p>
        <Button size="lg" className="bg-slate-900 text-white hover:bg-slate-800 h-14 px-8 font-semibold rounded-full shadow-lg" asChild>
          <Link href="/contact">Book a Consultation</Link>
        </Button>
      </div>
    </section>

    </div>
  );
}
