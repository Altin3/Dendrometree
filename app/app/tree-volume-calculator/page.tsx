import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { TreeVolumeCalculator } from '@/components/tree-volume-calculator'

export default function TreeVolumeCalculatorPage() {
  return (
    <>
      <Header />
      <main className="pt-24">
        <TreeVolumeCalculator />
      </main>
      <Footer />
    </>
  )
}
