import Link from "next/link"
import { Phone, Mail, MapPin, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "Contact Us & Request Quote | Kentucky Lawn and Leaf",
  description: "Contact Kentucky Lawn and Leaf for a free landscaping quote in Cincinnati and Northern Kentucky.",
}

export default function ContactPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Contact Us</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Ready to transform your outdoor space? Get in touch with us today for a free, no-obligation quote.
          </p>
        </div>
      </section>

      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h2 className="text-2xl font-bold tracking-tight mb-6">Get In Touch</h2>
              <p className="text-muted-foreground mb-8">
                We&apos;re here to answer any questions you have about our services. Reach out to us directly or fill out the form.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit shrink-0">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Phone</h3>
                  <p className="text-muted-foreground mb-1">Mon-Fri, 8am to 6pm</p>
                  <a href="tel:513-703-8159" className="text-lg font-medium hover:text-primary transition-colors">
                    (513) 703-8159
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit shrink-0">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Email</h3>
                  <p className="text-muted-foreground mb-1">We&apos;ll reply within 24 hours</p>
                  <a href="mailto:info@kentuckylawnandleaf.com" className="text-lg font-medium hover:text-primary transition-colors break-all">
                    info@kentuckylawnandleaf.com
                  </a>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit shrink-0">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Location</h3>
                  <p className="text-muted-foreground">
                    Newport, KY<br />
                    Serving Greater Cincinnati & NKY
                  </p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="bg-primary/10 p-3 rounded-full h-fit shrink-0">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-lg">Business Hours</h3>
                  <ul className="text-muted-foreground space-y-1">
                    <li className="flex justify-between"><span>Monday - Friday:</span> <span>8:00 AM - 6:00 PM</span></li>
                    <li className="flex justify-between"><span>Saturday:</span> <span>9:00 AM - 2:00 PM</span></li>
                    <li className="flex justify-between"><span>Sunday:</span> <span>Closed</span></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-muted/50 border-b">
                <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
                <CardDescription>
                  Please provide as much detail as possible about your project so we can give you an accurate estimate.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name <span className="text-destructive">*</span></Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name <span className="text-destructive">*</span></Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email address <span className="text-destructive">*</span></Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number <span className="text-destructive">*</span></Label>
                      <Input id="phone" type="tel" placeholder="(513) 555-0123" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address <span className="text-destructive">*</span></Label>
                    <Input id="address" placeholder="123 Main St, City, State, ZIP" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Primary Service Needed <span className="text-destructive">*</span></Label>
                    <select 
                      id="service" 
                      className="flex h-10 w-full items-center justify-between rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                      required
                      defaultValue=""
                    >
                      <option value="" disabled>Select a service...</option>
                      <option value="lawn-care">Lawn Care & Maintenance</option>
                      <option value="design">Landscape Design</option>
                      <option value="hardscaping">Hardscaping (Patios, Walls)</option>
                      <option value="mulch">Mulch Installation</option>
                      <option value="cleanup">Seasonal Cleanup</option>
                      <option value="other">Other</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Project Details <span className="text-destructive">*</span></Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us a bit about what you're looking for, timeline, and any specific requirements..." 
                      className="min-h-[150px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6">
                    Submit Request
                  </Button>
                  <p className="text-xs text-center text-muted-foreground">
                    By submitting this form, you agree to be contacted by Kentucky Lawn & Leaf regarding your inquiry. Your information will never be shared with third parties.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>

        </div>
      </Section>
    </>
  )
}
