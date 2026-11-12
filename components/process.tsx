import { siteCopy, type SiteLanguage } from "@/lib/site-i18n"


export function Process({ language }: { language: SiteLanguage }) {
  const t = siteCopy[language].process
  const steps = t.steps.map((item,index)=>({...item,number:String(index+1).padStart(2,"0")}))
  return (
    <section id="process" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.eyebrow}</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t.description}
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={step.number} className="relative">
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden lg:block absolute top-8 left-full w-full h-px bg-border -translate-x-4" />
              )}
              
              <div className="relative">
                <div className="text-6xl font-bold text-primary/10 font-[family-name:var(--font-heading)]">
                  {step.number}
                </div>
                <h3 className="mt-2 font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-3 text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
