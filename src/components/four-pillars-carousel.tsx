'use client'

import { Rocket, Settings, ShieldCheck, Activity } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    id: "innovate",
    title: "Innovate / Accelerate",
    icon: <Rocket className="w-12 h-12" />,
    summary: "PoC to production, reference-ready, fast.",
    bullets: [
      "Rapid PoC: 4-6 weeks feasibility",
      "Reference design: Firmware + cloud",
      "Blueprints: Integration and roadmaps",
      "Key modules: Fastest working prototype",
    ],
    offers: {
      "Silicon-to-Cloud": "Full journey from PoC to launch-ready.",
      "Resilient Edge": "SLOs and resilience patterns before scale."
    },
    tagline: "Start small or scale—all engagements right-sized.",
    gradient: "from-cyan-500/90 to-blue-500/90",
    bgImage: "/images/innovate-bg.jpg", // Your image path
    iconBg: "bg-white/90",
    iconColor: "text-cyan-600",
    textColor: "text-cyan-800"
  },
  {
    id: "orchestrate",
    title: "Orchestrate / Scale",
    icon: <Settings className="w-12 h-12" />,
    summary: "Pilot to fleet, automated and coordinated.",
    bullets: [
      "Zero-touch provisioning workflows",
      "Multi-vendor governance frameworks",
      "Automated ops playbooks",
      "Fleet management at scale",
    ],
    offers: {
      "Silicon-to-Cloud": "Pilot to 10,000+ devices zero-touch.",
      "Resilient Edge": "Automated edge operations & policies."
    },
    tagline: "Built-in scale from pilot to rollout.",
    gradient: "from-purple-500/90 to-indigo-500/90",
    bgImage: "/images/orchestrate-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-purple-600",
    textColor: "text-purple-800"
  },
  {
    id: "secure",
    title: "Secure / Harden",
    icon: <ShieldCheck className="w-12 h-12" />,
    summary: "Security by design, audit-ready from day one.",
    bullets: [
      "Compliance frameworks (CRA, NIS2, IEC62443)",
      "Secure boot, key & certificate management",
      "Audit trails for every layer",
      "Threat modeling integrated",
    ],
    offers: {
      "Silicon-to-Cloud": "Compliance mapped chip to cloud.",
      "Resilient Edge": "Continuous evidence and SOC telemetry."
    },
    tagline: "Audit-ready at every stage.",
    gradient: "from-red-500/90 to-pink-500/90",
    bgImage: "/images/secure-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-red-600",
    textColor: "text-red-800"
  },
  {
    id: "sense",
    title: "Sense / Respond",
    icon: <Activity className="w-12 h-12" />,
    summary: "From sensor to action, real-time automation.",
    bullets: [
      "Edge analytics & feature extraction",
      "Predictive ML pipelines",
      "Trigger matrices & rollback policies",
      "Time-series telemetry for SOC",
    ],
    offers: {
      "Silicon-to-Cloud": "Smart endpoints with local intelligence.",
      "Resilient Edge": "Closed-loop ops without cloud needed."
    },
    tagline: "Continuous automation with minimal human input.",
    gradient: "from-green-500/90 to-emerald-500/90",
    bgImage: "/images/sense-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-green-600",
    textColor: "text-green-800"
  },
]

export default function FourPillarsGrid() {
  return (
    <section id="four-pillars-framework" className="py-20 md:py-32 bg-gray-50 scroll-mt-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-4xl md:text-5xl font-bold mb-8">Four Pillars Framework</h2>
        <p className="text-center text-lg text-muted-foreground mb-12 max-w-3xl mx-auto">
          One delivery approach, two offers—Silicon-to-Cloud and Resilient Edge.
        </p>

        {/* Desktop Grid */}
        <div className="hidden md:grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {pillars.map(pillar => (
            <div 
              key={pillar.id} 
              className="bg-white rounded-xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 flex flex-col h-full"
            >
              {/* Header with Background Image */}
              <div className="relative h-48 overflow-hidden">
                {/* Background Image */}
                <Image
                  src={pillar.bgImage}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
                
                {/* Gradient Overlay */}
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient}`} />
                
                {/* Content on top */}
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div className="flex items-center justify-between">
                    <div className={`${pillar.iconBg} rounded-full p-3 ${pillar.iconColor}`}>
                      {pillar.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">
                    {pillar.title}
                  </h3>
                </div>
              </div>
              
              {/* Card Content */}
              <div className="p-6 flex flex-col flex-grow">
                <p className={`${pillar.textColor} mb-4 font-semibold min-h-[48px]`}>
                  {pillar.summary}
                </p>
                
                <ul className="list-disc pl-5 space-y-2 text-sm mb-6 flex-grow text-gray-700">
                  {pillar.bullets.map((text, i) => (<li key={i}>{text}</li>))}
                </ul>
                
                <div className="text-xs text-gray-600 mt-auto border-t pt-4">
                  <div className="space-y-2">
                    <p className="min-h-[32px]">
                      <strong className={pillar.textColor}>Silicon-to-Cloud:</strong> {pillar.offers["Silicon-to-Cloud"]}
                    </p>
                    <p className="min-h-[32px]">
                      <strong className={pillar.textColor}>Resilient Edge:</strong> {pillar.offers["Resilient Edge"]}
                    </p>
                  </div>
                  <p className="italic mt-3 text-gray-500">{pillar.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile Scroll */}
        <div className="md:hidden flex space-x-4 overflow-x-auto no-scrollbar snap-x snap-mandatory px-2">
          {pillars.map(pillar => (
            <div 
              key={pillar.id} 
              className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden shadow-xl snap-center flex flex-col"
            >
              {/* Header with Background Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={pillar.bgImage}
                  alt={pillar.title}
                  fill
                  className="object-cover"
                />
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient}`} />
                <div className="relative h-full p-6 flex flex-col justify-between text-white">
                  <div className={`${pillar.iconBg} rounded-full p-3 ${pillar.iconColor} w-fit`}>
                    {pillar.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-white drop-shadow-lg">{pillar.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex flex-col flex-grow">
                <p className={`${pillar.textColor} mb-4 font-semibold`}>{pillar.summary}</p>
                <ul className="list-disc pl-5 space-y-2 text-sm mb-6 flex-grow text-gray-700">
                  {pillar.bullets.map((text, i) => (<li key={i}>{text}</li>))}
                </ul>
                <div className="text-xs text-gray-600 border-t pt-4">
                  <div className="space-y-2">
                    <p><strong className={pillar.textColor}>Silicon-to-Cloud:</strong> {pillar.offers["Silicon-to-Cloud"]}</p>
                    <p><strong className={pillar.textColor}>Resilient Edge:</strong> {pillar.offers["Resilient Edge"]}</p>
                  </div>
                  <p className="italic mt-3 text-gray-500">{pillar.tagline}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <style jsx>{`
          .no-scrollbar::-webkit-scrollbar { display: none; }
          .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
        `}</style>
      </div>
    </section>
  )
}
