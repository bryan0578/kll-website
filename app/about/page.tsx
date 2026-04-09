import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Award, Users, ShieldCheck } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "About Us | Kentucky Lawn and Leaf",
  description: "Learn about Kentucky Lawn and Leaf, your trusted local landscaping experts in Cincinnati and Northern Kentucky.",
}

export default function AboutPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">About Us</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            We are a locally owned landscaping company dedicated to transforming outdoor spaces in the Tri-State area.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative h-[500px] rounded-2xl overflow-hidden shadow-xl order-2 lg:order-1">
            <Image
              src="https://picsum.photos/seed/about-team/800/1000"
              alt="Kentucky Lawn and Leaf Team"
              fill
              className="object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-3xl font-bold tracking-tight mb-6">Our Story</h2>
            <div className="space-y-4 text-lg text-muted-foreground">
              <p>
                Founded in Newport, Kentucky, Kentucky Lawn & Leaf started with a simple mission: to provide reliable, high-quality landscaping services to our neighbors in Cincinnati and Northern Kentucky.
              </p>
              <p>
                What began as a small lawn mowing operation has grown into a full-service landscaping company. We pride ourselves on our deep understanding of the local climate, soil conditions, and native plants, allowing us to create outdoor spaces that thrive year-round.
              </p>
              <p>
                We believe that your outdoor space is an extension of your home. Whether it&apos;s a quiet backyard retreat or a welcoming front yard, we approach every project with the same level of care and attention to detail as if it were our own property.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Core Values */}
      <Section className="bg-muted/30">
        <div className="text-center max-w-[800px] mx-auto mb-12">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Our Core Values</h2>
          <p className="text-lg text-muted-foreground">
            These principles guide everything we do, from the first phone call to the final walkthrough.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            {
              title: "Quality Workmanship",
              description: "We don't cut corners. We use premium materials and proven techniques to ensure lasting results.",
              icon: Award
            },
            {
              title: "Reliability",
              description: "We respect your time. When we schedule a service, you can count on us to be there.",
              icon: CheckCircle2
            },
            {
              title: "Customer Focus",
              description: "Communication is key. We listen to your needs and keep you informed throughout the project.",
              icon: Users
            }
          ].map((value, i) => (
            <div key={i} className="bg-background p-8 rounded-2xl shadow-sm border text-center">
              <div className="mx-auto w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mb-6">
                <value.icon className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-xl font-bold mb-3">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Trust Signals */}
      <Section>
        <div className="bg-primary/5 rounded-3xl p-8 md:p-12 border border-primary/10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-bold tracking-tight mb-4">Fully Licensed & Insured</h2>
              <p className="text-lg text-muted-foreground mb-6">
                Your peace of mind is important to us. Kentucky Lawn & Leaf is fully licensed to operate in Ohio and Kentucky, and we carry comprehensive liability and workers&apos; compensation insurance.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">General Liability Insurance</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Workers&apos; Compensation</span>
                </li>
                <li className="flex items-center gap-3">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                  <span className="font-medium">Local Business Licenses</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-center">
               <div className="grid grid-cols-2 gap-4 w-full max-w-[400px]">
                  <div className="bg-background p-6 rounded-xl shadow-sm border text-center flex flex-col items-center justify-center aspect-square">
                    <span className="text-4xl font-bold text-primary mb-2">10+</span>
                    <span className="text-sm font-medium text-muted-foreground">Years Experience</span>
                  </div>
                  <div className="bg-background p-6 rounded-xl shadow-sm border text-center flex flex-col items-center justify-center aspect-square">
                    <span className="text-4xl font-bold text-primary mb-2">500+</span>
                    <span className="text-sm font-medium text-muted-foreground">Happy Clients</span>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Ready to work with us?</h2>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Get a Free Quote
          </Link>
        </div>
      </section>
    </>
  )
}
