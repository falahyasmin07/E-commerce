import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto py-12 px-4">
        {/* Center the entire grid and limit its width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img src="/logo_edgepulsar.png" alt="Edge Pulsar Logo" className="h-8 w-8" />
              <span className="text-lg font-bold">Edge Pulsar</span>
            </Link>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chip-to-Cloud Solution Provider & Integrator
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services#embedded-core" className="text-muted-foreground hover:text-primary transition-colors">
                  Embedded Core
                </Link>
              </li>
              <li>
                <Link href="/services#industrial-edge" className="text-muted-foreground hover:text-primary transition-colors">
                  Industrial Edge
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  View All Services
                </Link>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/about#founders" className="text-muted-foreground hover:text-primary transition-colors">
                  Our Team
                </Link>
              </li>
              <li>
                <Link href="/industries" className="text-muted-foreground hover:text-primary transition-colors">
                  Industries
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contact</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="mailto:contact@edgepulsar.com" className="text-muted-foreground hover:text-primary transition-colors">
                  contact@edgepulsar.com
                </a>
              </li>
              <li className="text-muted-foreground">Headquartered in France</li>
              <li>
                <Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">
                  Get in Touch
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright - Centered */}
        <div className="mt-12 pt-8 border-t border-border/40 text-center text-sm text-muted-foreground max-w-6xl mx-auto">
          <p>
            &copy; {new Date().getFullYear()} Edge Pulsar. Chip-to-Cloud Solution Provider & Integrator. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
