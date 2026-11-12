import type { Metadata } from "next"
import { ActivityList } from "@/components/activities/activity-list"

export const metadata: Metadata = {
  title: "Aktivitetet dhe Lajmet | DENDROMETREE",
  description: "Aktivitete, lajme dhe projekte të DENDROMETREE nga pylltaria, inventarizimi pyjor dhe GIS.",
  alternates: { languages: { "sq-AL": "/aktivitetet", "en-US": "/activities" } },
}

export default function AktivitetetPage() {
  return <ActivityList language="sq" />
}
