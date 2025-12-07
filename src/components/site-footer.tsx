import Link from "next/link"
import { Cpu, Github, Linkedin, Twitter } from "lucide-react"


export function SiteFooter() {
  return (
    <footer className="bg-white text-slate-600 border-t border-slate-200 py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          
          {/* Brand Column */}
          <div className="col-span-1 md:col-span-1 space-y-4">
            <Link href="/" className="flex items-center space-x-2 text-slate-900">
             {/* <div className="w-8 h-8 bg-teal-500 rounded-lg flex items-center justify-center">
                <Cpu className="h-5 w-5 text-white" />
              </div> */}
               <div className="relative h-8 w-8 overflow-hidden rounded-lg">
                <img src="/logo_edgepulsar.png" alt="Edge Pulsar Logo" className="object-cover h-full w-full" />
               </div>
              <span className="text-lg font-bold text-slate-900 tracking-tight">Edge Pulsar</span>
            </Link>
            <p className="text-sm leading-relaxed">
              Chip-to-Edge Technical Advisor <br />& Solution Builder.
            </p>
          </div>


          {/* Navigation */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Company</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="hover:text-teal-600 transition-colors">About Us</Link></li>
              <li><Link href="/methodology" className="hover:text-teal-600 transition-colors">Our Methodology</Link></li>
            {/*  <li><Link href="/careers" className="hover:text-teal-600 transition-colors">Careers</Link></li>*/}
              <li><Link href="/contact" className="hover:text-teal-600 transition-colors">Contact</Link></li>
            </ul>
          </div>


          {/* Services */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Services</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/services#iot-core" className="hover:text-teal-600 transition-colors">IoT Core</Link></li>
              <li><Link href="/services#near-edge" className="hover:text-teal-600 transition-colors">Near Edge</Link></li>
              <li><Link href="/services#far-edge" className="hover:text-teal-600 transition-colors">Far Edge</Link></li>
           {/*     <li><Link href="/industries" className="hover:text-teal-600 transition-colors">Industries</Link></li>*/}
            </ul>
          </div>


          {/* Contact / Legal */}
          <div>
            <h3 className="text-slate-900 font-bold mb-4">Legal</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/privacy" className="hover:text-teal-600 transition-colors">Privacy Policy</Link></li>
              <li><Link href="/terms" className="hover:text-teal-600 transition-colors">Terms of Service</Link></li>
            </ul>
            
            <div className="flex gap-4 mt-6">
              <a href="https://www.linkedin.com/company/edge-pulsar" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
                <Linkedin className="w-4 h-4" />
              </a>
              {/*<a href="#" className="w-8 h-8 bg-slate-100 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition-all">
                <Twitter className="w-4 h-4" />
              </a>*/}
            </div>
          </div>
        </div>


        <div className="pt-8 border-t border-slate-200 text-center md:text-left text-sm text-slate-500">
          <p>&copy; {new Date().getFullYear()} Edge Pulsar SAS. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
