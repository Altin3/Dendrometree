import { siteCopy, type SiteLanguage } from "@/lib/site-i18n"
import Link from "next/link"
import { ArrowRight, Newspaper } from "lucide-react"
import { ActivityCard } from "@/components/activities/activity-card"
import { getPublishedActivities } from "@/lib/activities"

export function ActivitiesPreview({ language }: { language: SiteLanguage }) {
  const t = siteCopy[language].activities
  const activityRoute = language === "sq" ? "/aktivitetet" : "/en/activities"
  const activities = getPublishedActivities().slice(0, 3)
  return (
    <section id="activities" className="bg-background py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="text-sm font-semibold uppercase tracking-widest text-primary">{t.eyebrow}</span>
            <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl font-bold text-foreground sm:text-4xl">{t.title}</h2>
            <p className="mt-4 max-w-xl leading-7 text-muted-foreground">{t.description}</p>
          </div>
          <Link href={activityRoute} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
            {t.viewAll} <ArrowRight className="h-4 w-4" aria-hidden="true" />
          </Link>
        </div>
        {activities.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {activities.map((activity) => <ActivityCard key={activity.slug} activity={activity} language={language} />)}
          </div>
        ) : (
          <div className="flex flex-col gap-4 rounded-xl border border-border bg-muted/50 p-8 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <Newspaper className="h-8 w-8 shrink-0 text-primary" aria-hidden="true" />
              <p className="text-muted-foreground">{t.empty}</p>
            </div>
            <Link href={activityRoute} className="shrink-0 text-sm font-semibold text-primary hover:underline">{t.explore} →</Link>
          </div>
        )}
      </div>
    </section>
  )
}
