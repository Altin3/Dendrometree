import { TreePine, Map, Satellite, ClipboardList, FileText, Users } from "lucide-react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"

const services = [
  {
    icon: TreePine,
    title: "Forest Inventory",
    description: "Comprehensive field measurements and statistical analysis to quantify forest resources, species composition, and stand characteristics.",
  },
  {
    icon: FileText,
    title: "Management Plans",
    description: "Strategic long-term forest management plans that balance ecological sustainability, economic returns, and regulatory compliance.",
  },
  {
    icon: Map,
    title: "GIS & Mapping",
    description: "Advanced geospatial analysis, custom mapping solutions, and spatial data management for informed decision-making.",
  },
  {
    icon: Satellite,
    title: "Remote Sensing",
    description: "Satellite and aerial imagery analysis for forest health monitoring, change detection, and landscape-scale assessments.",
  },
  {
    icon: ClipboardList,
    title: "Field Data Collection",
    description: "Professional field crews equipped with modern technology for accurate, efficient data collection across any terrain.",
  },
  {
    icon: Users,
    title: "Consulting Services",
    description: "Expert guidance on forest certification, carbon credits, biodiversity conservation, and sustainable harvesting practices.",
  },
]

export function Services() {
  return (
    <section id="services" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">What We Do</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            Our collection of services spans the full scope of forest management
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            From initial inventory to long-term planning, we provide comprehensive solutions tailored to your specific needs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <Card key={service.title} className="group hover:shadow-lg transition-shadow duration-300 border-border">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <service.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="font-[family-name:var(--font-heading)] text-xl text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-muted-foreground leading-relaxed">
                  {service.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
