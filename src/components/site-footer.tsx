import Link from "next/link"
import { Mail, MapPin, Phone } from "lucide-react"

export function SiteFooter() {
  return (
    <footer className="bg-[#04060A] border-t border-slate-800 pt-20 pb-10 text-slate-300 font-sans">
      <div className="container mx-auto px-6 max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/" className="inline-block mb-6">
              <span className="text-2xl font-bold text-white tracking-tight font-heading">Edge Pulsar</span>
            </Link>
            <p className="text-slate-400 mb-8 max-w-sm leading-relaxed font-body">
              The industrial infrastructure partner for intelligent machines.
            </p>
            <div className="space-y-4">
              <a href="mailto:contact@edgepulsar.com" className="flex items-center gap-3 hover:text-white transition-colors group">
                <Mail className="w-5 h-5 text-blue-500 group-hover:text-blue-400" strokeWidth={1.5} />
                <span className="text-sm">contact@edgepulsar.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" strokeWidth={1.5} />
                <span className="text-sm text-slate-400">
                  Paris, France<br />
                  Serving industrial clients across Europe
                </span>
              </div>
            </div>
          </div>

          {/* Segments Column */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6 font-heading">Target Segments</h3>
            <ul className="space-y-4">
              <li><Link href="/industries#iot" className="text-sm hover:text-blue-400 transition-colors">IoT Makers</Link></li>
              <li><Link href="/industries#edge" className="text-sm hover:text-blue-400 transition-colors">Edge Infrastructure</Link></li>
              <li><Link href="/industries#robotics" className="text-sm hover:text-blue-400 transition-colors">Robotics Integration</Link></li>
              <li><Link href="/services" className="text-sm hover:text-blue-400 transition-colors">All Services</Link></li>
            </ul>
          </div>

          {/* Expertise Column */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6 font-heading">Expertise</h3>
            <ul className="space-y-4">
              <li><Link href="/expertise/cybersecurity" className="text-sm hover:text-blue-400 transition-colors">Cybersecurity & CRA</Link></li>
              <li><Link href="/expertise/cellular-iot" className="text-sm hover:text-blue-400 transition-colors">Cellular IoT</Link></li>
              <li><Link href="/expertise/bsp-firmware" className="text-sm hover:text-blue-400 transition-colors">BSP & Firmware</Link></li>
              <li><Link href="/expertise" className="text-sm hover:text-blue-400 transition-colors">View All Expertise</Link></li>
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-white font-bold tracking-wider uppercase text-sm mb-6 font-heading">Company</h3>
            <ul className="space-y-4">
              <li><Link href="/about" className="text-sm hover:text-blue-400 transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="text-sm hover:text-blue-400 transition-colors">Our Methodology</Link></li>
              <li><Link href="/contact" className="text-sm hover:text-blue-400 transition-colors">Contact</Link></li>
              <li><Link href="/resources" className="text-sm hover:text-blue-400 transition-colors">Resources</Link></li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-xs text-slate-500">
            © {new Date().getFullYear()} Edge Pulsar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Terms of Service</Link>
            <Link href="/legal" className="text-xs text-slate-500 hover:text-slate-300 transition-colors">Mentions Légales</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
