import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Star, MapPin, Phone, Mail, Clock, ShieldCheck, Leaf, Calendar, ThumbsUp } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Section } from "@/components/ui/section"

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0 bg-black">
          <Image
            src="https://picsum.photos/seed/landscaping-hero/1920/1080"
            alt="Beautifully landscaped yard"
            fill
            className="object-cover opacity-60"
            priority
            referrerPolicy="no-referrer"
          />
        </div>
        <div className="container relative z-10 mx-auto px-4 md:px-6 text-center text-white">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6 drop-shadow-lg">
            Transform Your Outdoor Space
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-[800px] mx-auto mb-10 text-gray-100 drop-shadow-md">
            Professional landscaping and lawn care services for Cincinnati and Northern Kentucky. We bring your vision to life.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link href="#quote" className={buttonVariants({ size: "lg", className: "text-lg px-8 py-6 w-full sm:w-auto" })}>
              Get a Free Quote
            </Link>
            <Link href="/services" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 py-6 w-full sm:w-auto bg-white/10 hover:bg-white/20 text-white border-white/50" })}>
              Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <Section className="bg-muted/50">
        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Our Landscaping Services</h2>
          <p className="text-lg text-muted-foreground">
            From regular lawn maintenance to complete landscape redesigns, we have the expertise to make your property shine.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {[
            {
              title: "Lawn Care & Maintenance",
              description: "Regular mowing, edging, and trimming to keep your lawn looking pristine all season long.",
              icon: Leaf,
              image: "https://picsum.photos/seed/lawncare/600/400"
            },
            {
              title: "Landscape Design",
              description: "Custom landscape designs tailored to your property, preferences, and local climate.",
              icon: Star,
              image: "https://picsum.photos/seed/design/600/400"
            },
            {
              title: "Mulch Installation",
              description: "Premium mulch delivery and installation to protect plants and enhance curb appeal.",
              icon: CheckCircle2,
              image: "https://picsum.photos/seed/mulch/600/400"
            },
            {
              title: "Hardscaping",
              description: "Patios, walkways, retaining walls, and fire pits built to last and impress.",
              icon: ShieldCheck,
              image: "https://picsum.photos/seed/hardscape/600/400"
            },
            {
              title: "Seasonal Cleanups",
              description: "Spring and fall cleanups to prepare your yard for the changing seasons.",
              icon: Calendar,
              image: "https://picsum.photos/seed/cleanup/600/400"
            },
            {
              title: "Tree & Shrub Care",
              description: "Professional pruning and trimming to maintain plant health and shape.",
              icon: ThumbsUp,
              image: "https://picsum.photos/seed/trees/600/400"
            }
          ].map((service, index) => (
            <Card key={index} className="overflow-hidden group flex flex-col">
              <div className="relative h-48 w-full overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
              </div>
              <CardHeader>
                <div className="flex items-center gap-3 mb-2">
                  <div className="p-2 bg-primary/10 rounded-lg">
                    <service.icon className="h-5 w-5 text-primary" />
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="flex-1">
                <CardDescription className="text-base">{service.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
        <div className="mt-12 text-center">
          <Link href="/services" className={buttonVariants({ variant: "outline", size: "lg", className: "group" })}>
            View All Services <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>

      {/* Why Choose Us */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Why Choose Kentucky Lawn & Leaf?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We are a locally owned and operated landscaping company dedicated to providing top-tier service to our neighbors in Cincinnati and Northern Kentucky.
            </p>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { title: "Years of Experience", desc: "Expert knowledge of local flora and soil.", icon: Star },
                { title: "Licensed & Insured", desc: "Full protection for your peace of mind.", icon: ShieldCheck },
                { title: "Reliable Scheduling", desc: "We show up when we say we will.", icon: Clock },
                { title: "Quality Workmanship", desc: "Attention to detail on every project.", icon: ThumbsUp },
              ].map((feature, i) => (
                <div key={i} className="flex gap-4">
                  <div className="mt-1 bg-primary/10 p-2 rounded-full h-fit">
                    <feature.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-2xl">
            <Image
              src="https://picsum.photos/seed/teamwork/800/1000"
              alt="Landscaping team at work"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </div>
      </Section>

      {/* Featured Projects */}
      <Section className="bg-secondary text-secondary-foreground">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div className="max-w-[600px]">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">Featured Projects</h2>
            <p className="text-secondary-foreground/80 text-lg">
              Take a look at some of our recent landscaping transformations in the Cincinnati area.
            </p>
          </div>
          <Link href="/gallery" className={buttonVariants({ variant: "outline", className: "bg-transparent border-secondary-foreground/20 hover:bg-secondary-foreground/10" })}>
            View Full Gallery
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {[1, 2, 3, 4].map((i) => (
            <div key={i} className="group relative aspect-square overflow-hidden rounded-xl bg-muted">
              <Image
                src={`https://picsum.photos/seed/project${i}/600/600`}
                alt={`Featured project ${i}`}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <h3 className="text-white font-semibold text-lg">Project Title {i}</h3>
                <p className="text-white/80 text-sm">Cincinnati, OH</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Testimonials */}
      <Section>
        <div className="text-center max-w-[800px] mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">What Our Clients Say</h2>
          <p className="text-lg text-muted-foreground">
            Don&apos;t just take our word for it. Read what your neighbors have to say about our services.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              name: "Sarah Jenkins",
              location: "Newport, KY",
              text: "Kentucky Lawn & Leaf completely transformed our backyard. Their team was professional, on time, and the new patio looks amazing. Highly recommend!"
            },
            {
              name: "Michael Chen",
              location: "Cincinnati, OH",
              text: "We've been using them for weekly lawn maintenance for two years now. They are incredibly reliable and our grass has never looked healthier."
            },
            {
              name: "Emily Rodriguez",
              location: "Covington, KY",
              text: "The spring cleanup and mulch installation was flawless. They paid attention to every detail and left the property spotless. Great value for the price."
            }
          ].map((testimonial, i) => (
            <Card key={i} className="bg-muted/50 border-none">
              <CardContent className="pt-6">
                <div className="flex gap-1 mb-4">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="h-5 w-5 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-6 italic">&quot;{testimonial.text}&quot;</p>
                <div>
                  <p className="font-semibold">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Service Area */}
      <Section className="bg-muted/30 border-y">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 relative h-[400px] rounded-2xl overflow-hidden bg-muted flex items-center justify-center">
             {/* Placeholder for a map or service area graphic */}
             <Image
                src="https://picsum.photos/seed/map/800/600"
                alt="Service Area Map"
                fill
                className="object-cover opacity-80"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 mix-blend-multiply"></div>
              <div className="relative z-10 bg-background/90 backdrop-blur p-6 rounded-xl shadow-lg text-center">
                <MapPin className="h-10 w-10 text-primary mx-auto mb-2" />
                <h3 className="font-bold text-xl">Based in Newport, KY</h3>
              </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Proudly Serving the Tri-State Area</h2>
            <p className="text-lg text-muted-foreground mb-8">
              We provide premium landscaping services to residential and commercial properties across Cincinnati and Northern Kentucky.
            </p>
            <div className="grid grid-cols-2 gap-x-4 gap-y-3">
              {[
                "Cincinnati, OH",
                "Newport, KY",
                "Covington, KY",
                "Fort Thomas, KY",
                "Florence, KY",
                "Hyde Park, OH",
                "Oakley, OH",
                "Anderson Township, OH"
              ].map((city) => (
                <div key={city} className="flex items-center gap-2">
                  <CheckCircle2 className="h-4 w-4 text-primary" />
                  <span>{city}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* FAQ & Contact Form Section */}
      <Section id="quote">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* FAQ */}
          <div>
            <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
            <Accordion className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger>Do you offer free estimates?</AccordionTrigger>
                <AccordionContent>
                  Yes, we offer free, no-obligation estimates for all of our landscaping and lawn care services. Just fill out the form or give us a call to schedule a visit.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Are you licensed and insured?</AccordionTrigger>
                <AccordionContent>
                  Absolutely. Kentucky Lawn & Leaf is fully licensed and carries comprehensive liability insurance to protect your property and our workers.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>What is your service area?</AccordionTrigger>
                <AccordionContent>
                  We are based in Newport, KY and serve the greater Cincinnati area and Northern Kentucky, including Covington, Fort Thomas, Florence, and surrounding neighborhoods.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger>Do you provide commercial landscaping?</AccordionTrigger>
                <AccordionContent>
                  Yes, we service both residential homes and commercial properties, including HOAs, apartment complexes, and retail centers.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-12 p-6 bg-primary/5 rounded-xl border border-primary/10">
              <h3 className="font-semibold text-xl mb-4">Direct Contact</h3>
              <div className="space-y-4">
                <a href="tel:513-703-8159" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="bg-background p-2 rounded-full shadow-sm">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">(513) 703-8159</span>
                </a>
                <a href="mailto:info@kentuckylawnandleaf.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                  <div className="bg-background p-2 rounded-full shadow-sm">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <span className="text-lg font-medium">info@kentuckylawnandleaf.com</span>
                </a>
              </div>
            </div>
          </div>

          {/* Quote Form */}
          <div>
            <Card className="shadow-lg border-primary/20">
              <CardHeader className="bg-muted/50 border-b">
                <CardTitle className="text-2xl">Request a Free Quote</CardTitle>
                <CardDescription>
                  Fill out the form below and we&apos;ll get back to you within 24 hours to discuss your project.
                </CardDescription>
              </CardHeader>
              <CardContent className="pt-6">
                <form className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="first-name">First name</Label>
                      <Input id="first-name" placeholder="John" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="last-name">Last name</Label>
                      <Input id="last-name" placeholder="Doe" required />
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="email">Email</Label>
                      <Input id="email" type="email" placeholder="john@example.com" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone number</Label>
                      <Input id="phone" type="tel" placeholder="(513) 555-0123" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="address">Property Address</Label>
                    <Input id="address" placeholder="123 Main St, City, State, ZIP" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service Needed</Label>
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
                    <Label htmlFor="message">Project Details</Label>
                    <Textarea 
                      id="message" 
                      placeholder="Tell us a bit about what you&apos;re looking for..." 
                      className="min-h-[120px]"
                      required
                    />
                  </div>

                  <Button type="submit" className="w-full text-lg py-6 mt-2">
                    Submit Request
                  </Button>
                  <p className="text-xs text-center text-muted-foreground mt-4">
                    By submitting this form, you agree to be contacted by Kentucky Lawn & Leaf regarding your inquiry.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </Section>

      {/* Final CTA Banner */}
      <section className="bg-primary text-primary-foreground py-16 md:py-20">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">Ready to upgrade your curb appeal?</h2>
          <p className="text-lg md:text-xl text-primary-foreground/90 mb-8 max-w-[600px] mx-auto">
            Contact us today for a free consultation and estimate. Let&apos;s create the outdoor space you&apos;ve always wanted.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:513-703-8159" className={buttonVariants({ size: "lg", variant: "secondary", className: "text-lg px-8 py-6 w-full sm:w-auto" })}>
              Call (513) 703-8159
            </a>
            <Link href="#quote" className={buttonVariants({ size: "lg", variant: "outline", className: "text-lg px-8 py-6 w-full sm:w-auto bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary" })}>
              Request a Quote
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
