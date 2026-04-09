import Image from "next/image"
import Link from "next/link"
import { Button, buttonVariants } from "@/components/ui/button"
import { Section } from "@/components/ui/section"

export const metadata = {
  title: "Project Gallery | Kentucky Lawn and Leaf",
  description: "View our portfolio of landscaping, lawn care, and hardscaping projects in Cincinnati and Northern Kentucky.",
}

const projects = [
  { id: 1, category: "Hardscaping", title: "Custom Stone Patio", location: "Newport, KY", image: "https://picsum.photos/seed/gallery1/800/600" },
  { id: 2, category: "Landscape Design", title: "Front Yard Transformation", location: "Cincinnati, OH", image: "https://picsum.photos/seed/gallery2/800/600" },
  { id: 3, category: "Lawn Care", title: "Complete Lawn Restoration", location: "Covington, KY", image: "https://picsum.photos/seed/gallery3/800/600" },
  { id: 4, category: "Hardscaping", title: "Retaining Wall & Fire Pit", location: "Fort Thomas, KY", image: "https://picsum.photos/seed/gallery4/800/600" },
  { id: 5, category: "Mulch", title: "Spring Bed Refresh", location: "Florence, KY", image: "https://picsum.photos/seed/gallery5/800/600" },
  { id: 6, category: "Landscape Design", title: "Native Plant Garden", location: "Hyde Park, OH", image: "https://picsum.photos/seed/gallery6/800/600" },
  { id: 7, category: "Tree Care", title: "Shrub Pruning & Shaping", location: "Oakley, OH", image: "https://picsum.photos/seed/gallery7/800/600" },
  { id: 8, category: "Hardscaping", title: "Paver Walkway", location: "Anderson Township, OH", image: "https://picsum.photos/seed/gallery8/800/600" },
  { id: 9, category: "Seasonal", title: "Fall Leaf Cleanup", location: "Newport, KY", image: "https://picsum.photos/seed/gallery9/800/600" },
]

export default function GalleryPage() {
  return (
    <>
      {/* Page Header */}
      <section className="bg-muted py-16 md:py-24 border-b">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-4">Project Gallery</h1>
          <p className="text-lg text-muted-foreground max-w-[700px] mx-auto">
            Take a look at some of our recent work. We take pride in every project, big or small.
          </p>
        </div>
      </section>

      {/* Gallery Grid */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <div key={project.id} className="group relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted shadow-sm">
              <Image
                src={project.image}
                alt={project.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                <span className="text-primary font-medium text-sm mb-1">{project.category}</span>
                <h3 className="text-white font-bold text-xl mb-1">{project.title}</h3>
                <p className="text-white/80 text-sm">{project.location}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <section className="bg-primary text-primary-foreground py-16">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <h2 className="text-3xl font-bold tracking-tight mb-6">Inspired by what you see?</h2>
          <Link href="/contact" className={buttonVariants({ size: "lg", variant: "secondary" })}>
            Start Your Project
          </Link>
        </div>
      </section>
    </>
  )
}
