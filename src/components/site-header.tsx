"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Menu } from "lucide-react"
import { useState } from "react"

export function SiteHeader() {
  const pathname = usePathname()
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-start">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <img src="/logo_edgepulsar.png" alt="Logo" className="h-10 w-10" />
            <span className="text-xl font-bold text-foreground">Edge Pulsar</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center justify-center flex-grow gap-6">
          <Link
            href="/"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            href="/services"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/services" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            Services
          </Link>
          <Link
            href="/industries"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/industries" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            Industries
          </Link>
          <Link
            href="/about"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/about" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          {/*<Link href="/resources" className="text-sm font-medium hover:text-primary transition-colors">
            Resources
          </Link>*/}
          <Link
            href="/contact"
            className={cn(
              "text-sm font-medium hover:text-primary transition-colors",
              pathname === "/contact" ? "text-blue-600 font-semibold" : "text-muted-foreground"
            )}
          >
            Contact
          </Link>
        </nav>

        <div className="flex items-center gap-4">
          <Button asChild className="hidden md:inline-flex">
            <Link href="/#mission">Start Discovery</Link>
          </Button>

          <Button variant="ghost" size="icon" className="md:hidden" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            <Menu className="h-5 w-5" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden border-t border-border/40 bg-background">
          <nav className="container flex flex-col items-center gap-4 py-4">
            <Link
              href="/"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/services"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/services" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </Link>
            <Link
              href="/industries"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/industries" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </Link>
            <Link
              href="/about"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/about" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="/contact"
              className={cn(
                "text-sm font-medium hover:text-primary transition-colors",
                pathname === "/contact" ? "text-blue-600 font-semibold" : "text-muted-foreground"
              )}
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button asChild className="w-full">
              <Link href="/#mission">Start Discovery</Link>
            </Button>
          </nav>
        </div>
      )}
    </header>
  )
}
