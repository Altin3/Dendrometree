import { siteCopy, type SiteLanguage } from "@/lib/site-i18n"
import Image from "next/image"
import { CheckCircle2 } from "lucide-react"



export function About({ language }: { language: SiteLanguage }) {
  const t = siteCopy[language].about
  const highlights = t.highlights
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.eyebrow}</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
              {t.title}
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.p1}
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              {t.p2}
            </p>
            
            <div className="mt-10 grid sm:grid-cols-2 gap-4">
              {highlights.map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle2 className="h-5 w-5 text-primary shrink-0 mt-0.5" />
                  <span className="text-sm text-foreground">{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="aspect-[4/3] rounded-2xl bg-[oklch(0.16_0.03_195)] overflow-hidden">
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="inline-flex items-center justify-center w-24 h-24 rounded-full overflow-hidden border-2 border-primary/30 mb-6">
                    <Image
                      src="/logo.jpeg"
                      alt="DENDROMETREE"
                      width={96}
                      height={96}
                      className="object-cover"
                      style={{ width: '100%', height: '100%' }}
                    />
                  </div>
                  <blockquote className="text-white/90 text-lg italic">
                    “{t.quote}”
                  </blockquote>
                  <p className="mt-4 text-primary font-medium">
                    {t.team}
                  </p>
                </div>
              </div>
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-full" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-full" />
          </div>
        </div>
      </div>
    </section>
  )
}
