const steps = [
  {
    number: "01",
    title: "Initial Consultation",
    description: "We begin with a thorough discussion of your goals, timeline, and requirements to understand your unique forestry needs.",
  },
  {
    number: "02",
    title: "Project Planning",
    description: "Our team develops a detailed project plan including methodology, resource allocation, and deliverables timeline.",
  },
  {
    number: "03",
    title: "Data Collection",
    description: "Expert field crews and advanced remote sensing technologies gather comprehensive, accurate data from your forest.",
  },
  {
    number: "04",
    title: "Analysis & Reporting",
    description: "We process and analyze collected data, producing actionable insights, maps, and detailed management recommendations.",
  },
]

export function Process() {
  return (
    <section id="process" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">Our Approach</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            A systematic process for reliable results
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            Our proven methodology ensures every project is completed on time, within budget, and exceeds expectations.
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
