import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { Services } from "@/components/services"
import { About } from "@/components/about"
import { Process } from "@/components/process"
import { Projects } from "@/components/projects"
import { GISCapabilities } from "@/components/gis-capabilities"
import { Contact } from "@/components/contact"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <Services />
      <About />
      <Process />
      <Projects />
      <GISCapabilities />
      <Contact />
      <Footer />
    </main>
  )
}
