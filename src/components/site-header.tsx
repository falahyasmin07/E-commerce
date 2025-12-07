"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/utils";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/methodology", label: "Methodology" }, // Added for completeness
  { href: "/industries", label: "Industries" },
  { href: "/about", label: "About" },
];

export function SiteHeader() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/80 transition-all">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        
        {/* Logo Area */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <div className="relative h-8 w-8 overflow-hidden rounded-lg">
             <img src="/logo_edgepulsar.png" alt="Edge Pulsar Logo" className="object-cover h-full w-full" />
          </div>
          <span className="text-lg font-bold text-slate-900 tracking-tight">Edge Pulsar</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-indigo-600",
                pathname === link.href 
                  ? "text-indigo-600 font-semibold" 
                  : "text-slate-600"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden md:flex items-center gap-4">
          <Link 
            href="/contact" 
            className={cn(
              "text-sm font-medium transition-colors hover:text-indigo-600",
              pathname === "/contact" ? "text-indigo-600 font-semibold" : "text-slate-600"
            )}
          >
            Contact
          </Link>
          <Button asChild className="bg-slate-900 text-white hover:bg-slate-800 rounded-lg">
            <Link href="/#mission">Start Discovery</Link>
          </Button>
        </div>

        {/* Mobile Menu Toggle */}
        <Button 
          variant="ghost" 
          size="icon" 
          className="md:hidden text-slate-600" 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          <span className="sr-only">Toggle menu</span>
        </Button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-slate-200 bg-white absolute top-16 left-0 w-full shadow-lg animate-in slide-in-from-top-5">
          <nav className="container flex flex-col gap-2 p-6">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "text-base font-medium px-4 py-3 rounded-lg transition-colors",
                  pathname === link.href 
                    ? "bg-indigo-50 text-indigo-600" 
                    : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                )}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="h-px bg-slate-100 my-2" />
            <Link
               href="/contact"
               className={cn(
                 "text-base font-medium px-4 py-3 rounded-lg transition-colors",
                 pathname === "/contact" 
                   ? "bg-indigo-50 text-indigo-600" 
                   : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
               )}
               onClick={() => setMobileMenuOpen(false)}
            >
               Contact
            </Link>
            <Button asChild className="w-full mt-2 bg-slate-900 text-white rounded-lg">
              <Link href="/#mission" onClick={() => setMobileMenuOpen(false)}>Start Discovery</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
