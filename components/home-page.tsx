import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { ActivitiesPreview } from "@/components/activities/activities-preview"
import { GISCapabilities } from "@/components/gis-capabilities"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"
import type { SiteLanguage } from "@/lib/site-i18n"

export function HomePage({ language }: { language: SiteLanguage }) {
  return (
    <main>
      <Header language={language} />
      <Hero language={language} />
      <Services language={language} />
      <About language={language} />
      <Process language={language} />
      <Projects language={language} />
      <ActivitiesPreview language={language} />
      <GISCapabilities language={language} />
      <Contact language={language} />
      <Footer language={language} />
    </main>
  )
}
