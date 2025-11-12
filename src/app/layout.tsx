import type React from "react"
import type { Metadata } from "next"
import { Geist, Geist_Mono } from "next/font/google"
import { SiteHeader } from "@/components/site-header"
import { SiteFooter } from "@/components/site-footer"
import "./globals.css"

const _geist = Geist({ subsets: ["latin"] })
const _geistMono = Geist_Mono({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "Edge Pulsar | Technology Advisory & Consulting Firm",
  description:
    "Edge Pulsar is a technology consulting firm specializing in chip-to-cloud advisory, implementation, and EU Cyber Resilience Act (CRA) compliance for device makers, chip companies, and industrial enterprises.",
  generator: "v0.app",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
	  <head>
        <link rel="icon" type="image/png" href="favicon.png" />
      </head>
      <body className={`font-sans antialiased`}>
        <SiteHeader />
        <main>{children}</main>
        <SiteFooter />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.EdgePulsarCRA = {
                position: 'bottom-right',
                triggerDelay: 30000,
                popupText: "⚡ Check Your CRA Compliance in 2 Minutes",
                buttonText: "CRA Compliance Check",
                leadCaptureEnabled: true,
                calendarLink: "https://calendly.com/edge-pulsar/cra-consultation"
              };
            `,
          }}
        />
        <script src="https://cdn.edgepulsar.com/cra-widget.js" async />
      </body>
    </html>
  )
}
