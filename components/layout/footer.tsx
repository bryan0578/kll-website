import Link from "next/link"
import { Leaf, Phone, Mail, MapPin, Facebook, Instagram, Twitter } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t">
      <div className="container mx-auto px-4 md:px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
          
          {/* Brand & About */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2">
              <Leaf className="h-6 w-6 text-primary" />
              <span className="text-xl font-bold tracking-tight">Kentucky Lawn & Leaf</span>
            </Link>
            <p className="text-muted-foreground text-sm leading-relaxed">
              Professional landscaping and lawn care services for Cincinnati and Northern Kentucky. We bring your outdoor vision to life with quality workmanship and reliable service.
            </p>
            <div className="flex items-center gap-4 mt-2">
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-5 w-5" />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-5 w-5" />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-primary transition-colors">
                <Twitter className="h-5 w-5" />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Quick Links</h3>
            <nav className="flex flex-col gap-3 text-sm text-muted-foreground">
              <Link href="/" className="hover:text-primary transition-colors">Home</Link>
              <Link href="/services" className="hover:text-primary transition-colors">Our Services</Link>
              <Link href="/about" className="hover:text-primary transition-colors">About Us</Link>
              <Link href="/gallery" className="hover:text-primary transition-colors">Project Gallery</Link>
              <Link href="/contact" className="hover:text-primary transition-colors">Contact & Quote</Link>
            </nav>
          </div>

          {/* Services */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Our Services</h3>
            <ul className="flex flex-col gap-3 text-sm text-muted-foreground">
              <li>Lawn Care & Maintenance</li>
              <li>Landscape Design</li>
              <li>Mulch Installation</li>
              <li>Hardscaping</li>
              <li>Seasonal Cleanups</li>
              <li>Tree & Shrub Trimming</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold text-lg">Contact Us</h3>
            <div className="flex flex-col gap-3 text-sm text-muted-foreground">
              <a href="tel:513-703-8159" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Phone className="h-4 w-4 shrink-0" />
                <span>(513) 703-8159</span>
              </a>
              <a href="mailto:info@kentuckylawnandleaf.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <Mail className="h-4 w-4 shrink-0" />
                <span>info@kentuckylawnandleaf.com</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="h-4 w-4 shrink-0 mt-0.5" />
                <span>Newport, KY<br/>Serving Cincinnati & NKY</span>
              </div>
            </div>
          </div>

        </div>
        
        <div className="border-t mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Kentucky Lawn and Leaf. All rights reserved.</p>
          <div className="flex items-center gap-4">
            <Link href="#" className="hover:text-primary transition-colors">Privacy Policy</Link>
            <Link href="#" className="hover:text-primary transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
