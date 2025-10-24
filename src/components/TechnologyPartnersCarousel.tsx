"use client"

import React, { useCallback, useEffect, useState } from "react"
import Image from "next/image"
import useEmblaCarousel from "embla-carousel-react"
import Autoplay from "embla-carousel-autoplay"
import { cn } from "@/lib/utils"

type PartnerLogo = {
  src: string
  alt: string
  name: string
}

const partnerLogos: PartnerLogo[] = [
  { src: "/logos/nvidia-logo.jpg", alt: "NVIDIA Logo", name: "NVIDIA" },
  { src: "/logos/nxp-semiconductors-logo.jpg", alt: "NXP Semiconductors Logo", name: "NXP Semiconductors" },
  { src: "/logos/sequans-communications-logo.jpg", alt: "Sequans Communications Logo", name: "Sequans Communications" },
  { src: "/logos/siemens-logo.jpg", alt: "Siemens Logo", name: "Siemens" },
  { src: "/logos/aws-amazon-web-services-logo.jpg", alt: "AWS Logo", name: "Amazon Web Services" },
  { src: "/logos/databricks-logo.jpg", alt: "Databricks Logo", name: "Databricks" },
  { src: "/logos/ovhcloud-logo.jpg", alt: "OVHcloud Logo", name: "OVHcloud" },
]

export function TechnologyPartnersCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 3000, stopOnInteraction: false })])
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null)

  const onSelect = useCallback(() => {
    // Optional: Add any logic needed on slide change
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    emblaApi.on("select", onSelect)
    emblaApi.on("reInit", onSelect)
  }, [emblaApi, onSelect])

  return (
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex -ml-4">
        {partnerLogos.map((partner, index) => (
          <div
            key={index}
            className="relative flex-none pl-4"
            style={{ flex: "0 0 50%" }} // Default to 2 logos per view on mobile
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <div
              className={cn(
                "group relative flex flex-col items-center justify-center p-4 md:p-6 rounded-xl border-2 bg-background/80 backdrop-blur-sm h-40 md:h-48 transition-all duration-300 ease-in-out",
                "hover:shadow-lg hover:border-primary/50",
                hoveredIndex === index ? "scale-105" : ""
              )}
            >
              <div className="relative h-16 w-32 mb-3">
                <Image
                  src={partner.src}
                  alt={partner.alt}
                  fill
                  className={cn(
                    "object-contain transition-all duration-300 ease-in-out",
                    hoveredIndex === index ? "grayscale-0" : "grayscale"
                  )}
                />
              </div>
              <p className="text-sm font-semibold text-center text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                {partner.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
