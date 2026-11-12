import { siteCopy, type SiteLanguage } from "@/lib/site-i18n"
import Image from "next/image"
import { ArrowUpRight } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const projectAssets = [{stats:"25,000 ha"},{stats:"50K tonnes CO2"},{stats:"1.000.000 ha",image:"/Forest-Fires.PNG"}]

export function Projects({ language }: { language: SiteLanguage }) {
  const t = siteCopy[language].projects
  const projects = t.cards.map((item,index)=>({...item,...projectAssets[index]}))
  return (
    <section id="projects" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.eyebrow}</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t.title}
            </h2>
          </div>
          <p className="text-muted-foreground max-w-md text-pretty">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {projects.map((project) => (
            <Card key={project.title} className="group overflow-hidden border-border hover:shadow-lg transition-all duration-300">
              <div className="aspect-[16/10] relative overflow-hidden bg-[oklch(0.16_0.03_195)]">
                {project.image ? (
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover"
                  />
                ) : (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-4xl font-bold text-primary font-[family-name:var(--font-heading)]">
                        {project.stats}
                      </div>
                      <div className="text-sm text-gray-400 mt-1">{project.category}</div>
                    </div>
                  </div>
                )}
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
