import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projects = [
  {
    title: "Regional Forest Inventory",
    category: "Municipal",
    description: "Comprehensive inventory of 25,000 hectares for regional planning authority, including species mapping and growth projections.",
    stats: "25,000 ha",
  },
  {
    title: "Carbon Credit Assessment",
    category: "Private",
    description: "Detailed carbon sequestration analysis and verification documentation for forest carbon credit certification.",
    stats: "50K tonnes CO2",
  },
  {
    title: "Wildfire Risk Mapping",
    category: "Agency",
    description: "GIS-based wildfire risk assessment and fuel management planning across multi-jurisdictional forest lands.",
    stats: "100,000 ha",
  },
]

export function Projects() {
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Case Studies</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
              Featured projects
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            A selection of recent projects showcasing our expertise across different forest types and client needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] bg-[oklch(0.16_0.03_195)] relative overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl font-bold text-primary font-[family-name:var(--font-heading)]">
                      {project.stats}
                    </div>
                    <div className="text-sm text-gray-400 mt-1">{project.category}</div>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
              <CardContent className="p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">{project.category}</span>
                    <h3 className="mt-2 font-[family-name:var(--font-heading)] text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground group-hover:text-primary transition-colors shrink-0" />
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
