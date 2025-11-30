'use client'

import { Rocket, Settings, ShieldCheck, Zap } from "lucide-react"
import Image from "next/image"

const pillars = [
  {
    id: "innovate",
    title: "Innovate",
    icon: <Rocket className="w-12 h-12" />,
    summary: "Rapid PoC validation and reference design acceleration",
    bullets: [
      "Rapid PoC builds with Lab validation",
      "Reference design frameworks (firmware + cloud)",
      "Technology stack validation and blueprints",
      "Production-ready architecture documentation",
    ],
    offers: {
      "Embedded Core": "PoC to production-ready reference designs",
      "Industrial Edge": "Platform validation and architecture blueprints"
    },
    tagline: "Validated architectures, not exploratory prototypes",
    gradient: "from-cyan-500/90 to-blue-500/90",
    bgImage: "/images/innovate-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-cyan-600",
    textColor: "text-cyan-800"
  },
  {
    id: "orchestrate",
    title: "Orchestrate",
    icon: <Settings className="w-12 h-12" />,
    summary: "Multi-vendor coordination and deployment automation",
    bullets: [
      "Zero-touch device provisioning workflows",
      "Multi-vendor integration frameworks",
      "Deployment automation and rollout strategies",
      "Fleet management architecture at scale",
    ],
    offers: {
      "Embedded Core": "Device provisioning and cloud connectivity automation",
      "Industrial Edge": "Edge platform orchestration and policy governance"
    },
    tagline: "Eliminate multi-vendor integration failures",
    gradient: "from-purple-500/90 to-indigo-500/90",
    bgImage: "/images/orchestrate-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-purple-600",
    textColor: "text-purple-800"
  },
  {
    id: "secure",
    title: "Secure",
    icon: <ShieldCheck className="w-12 h-12" />,
    summary: "Security-by-design with compliance built in",
    bullets: [
      "CRA and NIS2/IEC 62443 compliance frameworks",
      "Chip-level security (secure boot, crypto, root of trust)",
      "Certificate lifecycle management",
      "Security architecture documentation for auditors",
    ],
    offers: {
      "Embedded Core": "CRA compliance and secure boot implementation",
      "Industrial Edge": "Hardware-backed security meeting NIS2/IEC 62443"
    },
    tagline: "Compliance architected from the start, not retrofitted",
    gradient: "from-red-500/90 to-pink-500/90",
    bgImage: "/images/secure-bg.jpg",
    iconBg: "bg-white/90",
    iconColor: "text-red-600",
    textColor: "text-red-800"
  },
  {
    id: "respond",
    title: "Respond",
    icon: <Zap className="w-12 h-12" />,
    summary: "Edge data processing and intelligent response workflows",
    bullets: [
      "Sensor integration and edge data pipelines",
      "Local compute and AI inference architecture",
      "Edge-to-cloud data synchronization",
      "Real-time processing and analytics frameworks",
    ],
    offers: {
      "Embedded Core": "Sensor-to-cloud data workflows with edge processing",
      "Industrial Edge": "AI inference pipelines and edge analytics platforms"
    },
    tagline: "Architect data-to-action workflows at the edge",
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
          Comprehensive methodology spanning both Embedded Core and Industrial Edge
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
                      <strong className={pillar.textColor}>Embedded Core:</strong> {pillar.offers["Embedded Core"]}
                    </p>
                    <p className="min-h-[32px]">
                      <strong className={pillar.textColor}>Industrial Edge:</strong> {pillar.offers["Industrial Edge"]}
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
                    <p><strong className={pillar.textColor}>Embedded Core:</strong> {pillar.offers["Embedded Core"]}</p>
                    <p><strong className={pillar.textColor}>Industrial Edge:</strong> {pillar.offers["Industrial Edge"]}</p>
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
