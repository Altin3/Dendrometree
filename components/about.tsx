import Image from "next/image"
import { CheckCircle2 } from "lucide-react"

const highlights = [
  "Certified professional foresters with advanced degrees",
  "State-of-the-art GIS and remote sensing capabilities",
  "Proven track record with public and private clients",
  "Commitment to sustainable forestry practices",
  "ISO-certified quality management processes",
  "Regional expertise across diverse forest ecosystems",
]

export function About() {
  return (
    <section id="about" className="py-24 bg-muted/50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-sm font-medium text-primary uppercase tracking-wider">About Us</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
              A trusted partner in sustainable forest management
            </h2>
            <p className="mt-6 text-lg text-muted-foreground leading-relaxed text-pretty">
              DENDROMETREE is a specialized forestry consulting firm delivering expert solutions in 
              forest inventory, GIS mapping, and sustainable management planning. Founded by experienced 
              foresters and geospatial professionals, we combine deep ecological knowledge with 
              cutting-edge technology.
            </p>
            <p className="mt-4 text-lg text-muted-foreground leading-relaxed text-pretty">
              Our mission is to help landowners, municipalities, and organizations make informed 
              decisions that balance environmental stewardship with economic viability. We believe 
              that well-managed forests are essential to our planet&apos;s future.
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
                    &ldquo;Our approach combines scientific rigor with practical solutions, 
                    ensuring every project delivers measurable results.&rdquo;
                  </blockquote>
                  <p className="mt-4 text-primary font-medium">
                    DENDROMETREE Team
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
