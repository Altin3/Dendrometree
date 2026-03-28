import { Layers, Database, Globe, Cpu } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"

const capabilities = [
  {
    icon: Layers,
    title: "Multi-Layer Analysis",
    description: "Complex spatial analysis combining terrain, vegetation, hydrology, and infrastructure data.",
  },
  {
    icon: Database,
    title: "Data Management",
    description: "Enterprise-grade geodatabase solutions for organizing, storing, and sharing geospatial assets.",
  },
  {
    icon: Globe,
    title: "Web Mapping",
    description: "Interactive web maps and dashboards for real-time forest monitoring and stakeholder access.",
  },
  {
    icon: Cpu,
    title: "AI Integration",
    description: "Machine learning models for automated feature extraction and predictive forest modeling.",
  },
]

export function GISCapabilities() {
  return (
    <section id="gis" className="py-24 bg-[oklch(0.13_0.03_195)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">Technology</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-white text-balance">
              Advanced GIS & Mapping Capabilities
            </h2>
            <p className="mt-6 text-lg text-gray-300 leading-relaxed text-pretty">
              Our geospatial technology stack combines industry-leading GIS software with custom 
              solutions tailored to forestry applications. From satellite imagery processing to 
              3D terrain modeling, we deliver insights that drive better forest management decisions.
            </p>
            
            <div className="mt-10 space-y-6">
              {capabilities.map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="h-6 w-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-[family-name:var(--font-heading)] font-semibold text-white">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-sm text-gray-400">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10">
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">Discuss Your GIS Needs</Link>
              </Button>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square rounded-2xl border border-primary/20 overflow-hidden bg-[oklch(0.16_0.03_195)]">
              <div className="absolute inset-0 p-8">
                {/* Simulated Map Grid */}
                <div className="relative w-full h-full">
                  <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
                    {Array.from({ length: 16 }).map((_, i) => (
                      <div key={i} className="border border-primary/10" />
                    ))}
                  </div>
                  
                  {/* Map Elements */}
                  <div className="absolute top-1/4 left-1/4 w-32 h-24 rounded-lg bg-primary/20 border border-primary/30" />
                  <div className="absolute top-1/2 right-1/4 w-24 h-32 rounded-lg bg-primary/15 border border-primary/25" />
                  <div className="absolute bottom-1/4 left-1/3 w-20 h-20 rounded-full bg-primary/25 border border-primary/40" />
                  
                  {/* Coordinate Lines */}
                  <div className="absolute top-0 left-1/2 w-px h-full bg-primary/20" />
                  <div className="absolute top-1/2 left-0 w-full h-px bg-primary/20" />
                  
                  {/* Legend */}
                  <div className="absolute bottom-4 left-4 bg-black/40 backdrop-blur rounded-lg p-3 text-xs text-gray-300">
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded bg-primary/40" />
                      <span>Forest Cover</span>
                    </div>
                    <div className="flex items-center gap-2 mb-2">
                      <div className="w-3 h-3 rounded bg-primary/60" />
                      <span>Protected Areas</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 rounded-full bg-primary/80" />
                      <span>Sample Points</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Decorative */}
            <div className="absolute -top-6 -right-6 w-32 h-32 border border-primary/10 rounded-full" />
            <div className="absolute -bottom-6 -left-6 w-24 h-24 border border-primary/20 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
