import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TreeVolumeCalculator } from "@/components/tree-volume-calculator"

export const metadata: Metadata = {
  title: "Tree Volume Calculator | DENDROMETREE",
  description: "Estimate tree volume from DBH, height, and a generic form factor.",
  alternates: {
    languages: { "sq-AL": "/kalkulatori-i-vellimit", "en-US": "/en/tree-volume-calculator" },
  },
}
export default function TreeCalculatorEn() {
  return <><Header language="en" alternateHref="/kalkulatori-i-vellimit" /><main className="pt-24"><TreeVolumeCalculator language="en" /></main><Footer language="en" /></>
}
