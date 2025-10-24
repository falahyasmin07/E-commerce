import Link from "next/link"

export function SiteFooter() {
  return (
    <footer className="border-t border-border/40 bg-muted/30">
      <div className="container mx-auto py-12 px-4">
        {/* Center the entire grid and limit its width */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {/* Brand Section */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded bg-primary" />
              <span className="text-lg font-bold">Edge Pulsar</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Chip-to-Cloud Technology Consulting | CRA Compliance Specialists
            </p>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-semibold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  Silicon-to-Scale Acceleration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  OT-to-Cloud Integration
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-muted-foreground hover:text-primary transition-colors">
                  CRA Compliance
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
                  Founders
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
              <li className="text-muted-foreground">contact@edgepulsar.com</li>
              <li className="text-muted-foreground">Based in France</li>
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
            &copy; {new Date().getFullYear()} Edge Pulsar. Technology Advisory & Consulting Firm. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
