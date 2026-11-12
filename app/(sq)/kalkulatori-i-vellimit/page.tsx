import type { Metadata } from "next"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { TreeVolumeCalculator } from "@/components/tree-volume-calculator"

export const metadata: Metadata = {
  title: "Llogaritësi i vëllimit të drurit | DENDROMETREE",
  description: "Llogaritja orientuese e vëllimit të drurit sipas diametrit dhe lartësisë.",
  alternates: {
    languages: { "sq-AL": "/kalkulatori-i-vellimit", "en-US": "/en/tree-volume-calculator" },
  },
}
export default function TreeCalculatorSq() {
  return <><Header language="sq" alternateHref="/en/tree-volume-calculator" /><main className="pt-24"><TreeVolumeCalculator language="sq" /></main><Footer language="sq" /></>
}
