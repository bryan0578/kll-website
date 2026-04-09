"use client"

import Link from "next/link"
import { Phone, Menu, Leaf } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useState } from "react"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/services", label: "Services" },
    { href: "/about", label: "About" },
    { href: "/gallery", label: "Gallery" },
    { href: "/contact", label: "Contact" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 md:px-6 flex h-20 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Leaf className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold tracking-tight text-primary">Kentucky Lawn & Leaf</span>
          </Link>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:flex items-center gap-4">
          <a href="tel:513-703-8159" className="flex items-center gap-2 text-sm font-medium hover:text-primary transition-colors">
            <Phone className="h-4 w-4" />
            <span>(513) 703-8159</span>
          </a>
          <Link href="/contact" className={buttonVariants()}>
            Get Free Quote
          </Link>
        </div>

        {/* Mobile Nav */}
        <div className="md:hidden flex items-center gap-4">
          <a href="tel:513-703-8159" className="text-primary">
            <Phone className="h-6 w-6" />
            <span className="sr-only">Call us</span>
          </a>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger className={buttonVariants({ variant: "ghost", size: "icon", className: "md:hidden" })}>
              <Menu className="h-6 w-6" />
              <span className="sr-only">Toggle menu</span>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col gap-6 mt-8">
                {navLinks.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="text-lg font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                ))}
                <div className="flex flex-col gap-4 mt-4 pt-4 border-t">
                  <a href="tel:513-703-8159" className="flex items-center gap-2 text-lg font-medium">
                    <Phone className="h-5 w-5 text-primary" />
                    <span>(513) 703-8159</span>
                  </a>
                  <Link href="/contact" onClick={() => setIsOpen(false)} className={buttonVariants({ className: "w-full" })}>
                    Get Free Quote
                  </Link>
                </div>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
