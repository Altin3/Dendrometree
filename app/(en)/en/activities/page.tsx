import type { Metadata } from "next"
import { ActivityList } from "@/components/activities/activity-list"

export const metadata: Metadata = {
  title: "Activities & News | DENDROMETREE",
  description: "Activities, company news and project updates from DENDROMETREE in forestry, forest inventory and GIS.",
  alternates: { languages: { "sq-AL": "/aktivitetet", "en-US": "/en/activities" } },
}

export default function ActivitiesPage() {
  return <ActivityList language="en" />
}
