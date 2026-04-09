import Image from "next/image"
import Link from "next/link"
import { CheckCircle2, Leaf, Star, ShieldCheck, Calendar, ThumbsUp, ArrowRight } from "lucide-react"
import { Button, buttonVariants } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "Our Services | Kentucky Lawn and Leaf",
  description: "Explore our comprehensive landscaping and lawn care services in Cincinnati and Northern Kentucky.",
}

const services = [
  {
    id: "lawn-care",
    title: "Lawn Care & Maintenance",
    description: "Keep your lawn looking its best year-round with our comprehensive maintenance programs. We offer weekly or bi-weekly mowing, edging, trimming, and blowing to ensure a pristine appearance.",
    features: ["Precision mowing and edging", "Weed control and fertilization", "Aeration and overseeding", "Pest control"],
    icon: Leaf,
    image: "https://picsum.photos/seed/lawncare-detail/800/600"
  },
  {
    id: "landscape-design",
    title: "Landscape Design & Installation",
    description: "Transform your outdoor space with our custom landscape design services. We work with you to select the perfect plants, trees, and features that thrive in the local climate and match your aesthetic.",
    features: ["Custom 3D design plans", "Native plant selection", "Sod installation", "Garden bed creation"],
    icon: Star,
    image: "https://picsum.photos/seed/design-detail/800/600"
  },
  {
    id: "hardscaping",
    title: "Hardscaping",
    description: "Expand your living space outdoors with beautiful, durable hardscaping. From elegant patios to functional retaining walls, our expert stonework adds lasting value to your property.",
    features: ["Paver patios and walkways", "Retaining and seating walls", "Fire pits and outdoor kitchens", "Stone veneer"],
    icon: ShieldCheck,
    image: "https://picsum.photos/seed/hardscape-detail/800/600"
  },
  {
    id: "mulch",
    title: "Mulch & Pine Straw Installation",
    description: "Refresh your garden beds with premium mulch or pine straw. Not only does it instantly boost curb appeal, but it also helps retain moisture, regulate soil temperature, and suppress weeds.",
    features: ["Premium hardwood mulch", "Pine straw installation", "Bed edging and preparation", "Weed barrier installation"],
    icon: CheckCircle2,
    image: "https://picsum.photos/seed/mulch-detail/800/600"
  },
  {
    id: "seasonal-cleanups",
    title: "Seasonal Cleanups",
    description: "Prepare your property for the changing seasons. Our comprehensive cleanups remove debris, leaves, and dead growth, ensuring your landscape is healthy and ready for what&apos;s next.",
    features: ["Fall leaf removal", "Spring bed preparation", "Perennial cutbacks", "Debris hauling"],
    icon: Calendar,
    image: "https://picsum.photos/seed/cleanup-detail/800/600"
  },
  {
    id: "tree-care",
    title: "Tree & Shrub Care",
    description: "Maintain the health and shape of your trees and shrubs with professional pruning and trimming. Proper care encourages healthy growth and prevents property damage.",
    features: ["Structural pruning", "Hedge trimming and shaping", "Small tree removal", "Stump grinding"],
    icon: ThumbsUp,
    image: "https://picsum.photos/seed/trees-detail/800/600"
  }
]

export default function ServicesPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Our Services</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Comprehensive landscaping and lawn care solutions tailored to your property&apos;s unique needs in the Cincinnati and Northern Kentucky area.
          </p>
        </div>
      </section>

      {/* Services List */}
      <Section>
        <div className="space-y-20">
          {services.map((service, index) => (
            <div key={service.id} id={service.id} className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={index % 2 !== 0 ? 'lg:order-2' : 'lg:order-1'}>
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-3 bg-primary/10 rounded-xl">
                    <service.icon className="h-6 w-6 text-primary" />
                  </div>
                  <h2 className="text-3xl font-bold tracking-tight">{service.title}</h2>
                </div>
                <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                  {service.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/contact?service=${service.id}`} className={buttonVariants()}>
                  Request a Quote <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </div>
              <div className={`relative h-[400px] rounded-2xl overflow-hidden shadow-xl ${index % 2 !== 0 ? 'lg:order-1' : 'lg:order-2'}`}>
                <Image
                  src={service.image}
                  alt={service.title}
                  fill
                  className="object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA Section */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-4">Don&apos;t see what you&apos;re looking for?</h2>
          <p className="text-lg text-primary-foreground/90 mb-8 max-w-[600px] mx-auto">
            We offer custom landscaping solutions. Contact us to discuss your specific project needs.
          </p>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Contact Us Today
          </Link>
        </div>
      </section>
    </>
  )
}
