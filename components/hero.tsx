import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ArrowRight, TreePine, Map, BarChart3 } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[oklch(0.13_0.03_195)]">
      {/* Logo Background */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.08] pointer-events-none">
        <Image
          src="/logo.jpeg"
          alt=""
          width={800}
          height={800}
          className="max-w-4xl object-contain"
          style={{ width: '80vw', height: 'auto' }}
          priority
        />
      </div>
      
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-64 h-64 border border-primary/30 rounded-full" />
        <div className="absolute bottom-20 right-10 w-96 h-96 border border-primary/20 rounded-full" />
        <div className="absolute top-1/2 left-1/3 w-48 h-48 border border-primary/20 rounded-full" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-24 pb-16">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">
              <TreePine className="h-4 w-4" />
              <span className="text-sm font-medium">Sustainable Forest Management</span>
            </div>
            
            <h1 className="font-[family-name:var(--font-heading)] text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight text-balance">
              Expert Forestry & GIS Solutions
            </h1>
            
            <p className="mt-6 text-lg text-gray-300 max-w-xl leading-relaxed text-pretty">
              Precision forest inventory, advanced GIS mapping, and sustainable management plans. 
              We help municipalities, agencies, and landowners make data-driven decisions for their forests.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <Button size="lg" asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
                <Link href="#contact">
                  Get a Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="border-gray-600 text-white hover:bg-white/10">
                <Link href="#services">
                  Explore Services
                </Link>
              </Button>
            </div>

            <div className="mt-12 grid grid-cols-3 gap-6">
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">10+</div>
                <div className="text-sm text-gray-400">Projects Completed</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">5+</div>
                <div className="text-sm text-gray-400">Years Experience</div>
              </div>
              <div className="text-center lg:text-left">
                <div className="text-3xl font-bold text-primary">100K+</div>
                <div className="text-sm text-gray-400">Hectares Mapped</div>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              {/* Main Circle */}
              <div className="absolute inset-0 rounded-full border-2 border-primary/30 animate-pulse" />
              <div className="absolute inset-8 rounded-full border border-primary/20" />
              <div className="absolute inset-16 rounded-full bg-primary/5 flex items-center justify-center">
                <div className="grid grid-cols-2 gap-6 p-8">
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur">
                    <TreePine className="h-8 w-8 text-primary" />
                    <span className="text-xs text-gray-300">Inventory</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur">
                    <Map className="h-8 w-8 text-primary" />
                    <span className="text-xs text-gray-300">GIS</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur">
                    <BarChart3 className="h-8 w-8 text-primary" />
                    <span className="text-xs text-gray-300">Analytics</span>
                  </div>
                  <div className="flex flex-col items-center gap-2 p-4 rounded-xl bg-white/5 backdrop-blur">
                    <svg className="h-8 w-8 text-primary" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <circle cx="12" cy="12" r="10" />
                      <path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20" />
                      <path d="M2 12h20" />
                    </svg>
                    <span className="text-xs text-gray-300">Remote Sensing</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Fade */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent" />
    </section>
  )
}
