"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X, ChevronDown } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  {
    label: "Services",
    href: "/services",
    dropdown: [
      { label: "Services Overview", href: "/services" },
      { label: "Consulting", href: "/services/consulting" },
      { label: "Development", href: "/services/development" },
      { label: "Integration", href: "/services/integration" },
      { label: "Security & Compliance", href: "/services/security" },
      { label: "Maintenance & Support", href: "/services/maintenance" },
    ]
  },
  {
    label: "Expertise",
    href: "/expertise",
    dropdown: [
      { label: "Expertise Hub", href: "/expertise" },
      { label: "Cybersecurity & CRA", href: "/expertise/cybersecurity" },
      { label: "Cellular IoT", href: "/expertise/cellular-iot" },
      { label: "Embedded AI", href: "/expertise/embedded-ai" },
      { label: "BSP & Firmware", href: "/expertise/bsp-firmware" },
      { label: "Industrial Protocols", href: "/expertise/industrial-protocols" },
      { label: "Cloud Integration", href: "/expertise/cloud-integration" },
    ]
  },
  {
    label: "Industries",
    href: "/industries",
    dropdown: [
      { label: "Industries Hub", href: "/industries" },
      { label: "Industrial Automation", href: "/industries/automation" },
      { label: "Logistics & Warehousing", href: "/industries/logistics" },
      { label: "Health & Life Sciences", href: "/industries/health" },
    ]
  },
  { label: "Methodology", href: "/methodology" },
  { label: "Resources", href: "/resources" },
  { label: "About Us", href: "/about" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full bg-[#06113C]/90 backdrop-blur-md border-b border-white/10 transition-all font-sans">
      <div className="container mx-auto flex h-20 items-center justify-between px-6">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
          <div className="relative h-9 w-9 overflow-hidden rounded-none">
             <img src="/logo_edgepulsar.png" alt="Edge Pulsar Logo" className="object-cover h-full w-full" />
          </div>
          <span className="text-xl font-bold text-white tracking-tight font-heading">Edge Pulsar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <div key={link.label} className="relative group h-20 flex items-center">
              {link.dropdown ? (
                <div className="flex items-center cursor-pointer">
                  <span className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors flex items-center gap-1",
                    pathname.startsWith(link.href) ? "text-blue-400" : "text-slate-300 group-hover:text-white"
                  )}>
                    {link.label}
                    <ChevronDown className="w-4 h-4 opacity-50 group-hover:opacity-100 transition-transform group-hover:rotate-180" />
                  </span>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 w-64 bg-[#070B14] border border-slate-800 shadow-2xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 transform origin-top -translate-y-2 group-hover:translate-y-0">
                    <div className="p-2 flex flex-col">
                      {link.dropdown.map((sublink, idx) => (
                        <Link 
                          key={sublink.href} 
                          href={sublink.href}
                          className={cn(
                            "px-4 py-3 text-sm transition-colors hover:bg-slate-800",
                            idx === 0 ? "font-bold text-white border-b border-slate-800 mb-1" : "text-slate-300 hover:text-white font-medium"
                          )}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                </div>
              ) : (
                <Link
                  href={link.href}
                  className={cn(
                    "text-sm font-semibold tracking-wide uppercase transition-colors",
                    pathname === link.href ? "text-blue-400" : "text-slate-300 hover:text-white"
                  )}
                >
                  {link.label}
                </Link>
              )}
            </div>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-6">
          <Button asChild size="default" className="rounded-none bg-blue-600 hover:bg-blue-700 hover:-translate-y-[1px] text-white font-bold tracking-wide uppercase transition-all shadow-none">
            <Link href="/contact">Contact</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="lg:hidden text-white hover:bg-white/10" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-[#06113C] absolute top-20 left-0 w-full shadow-2xl animate-in slide-in-from-top-5 pb-6">
          <nav className="container flex flex-col px-6">
            {NAV_LINKS.map((link) => (
              <div key={link.label} className="flex flex-col border-b border-slate-800/50">
                {link.dropdown ? (
                  <div className="py-4">
                    <span className="text-sm font-bold text-slate-400 tracking-wider uppercase mb-2 block">{link.label}</span>
                    <div className="flex flex-col pl-4 border-l border-slate-800 space-y-3">
                      {link.dropdown.map(sublink => (
                        <Link 
                          key={sublink.href} 
                          href={sublink.href}
                          className="text-base text-slate-200 hover:text-white font-medium"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {sublink.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ) : (
                  <Link
                    href={link.href}
                    className="py-4 text-base font-bold text-slate-200 tracking-wide uppercase hover:text-white"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {link.label}
                  </Link>
                )}
              </div>
            ))}
            
            <div className="pt-6">
              <Button asChild className="w-full rounded-none bg-blue-600 hover:bg-blue-700 text-white font-bold tracking-wide uppercase py-6">
                <Link href="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link>
              </Button>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
