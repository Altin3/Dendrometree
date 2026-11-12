import Link from "next/link"
import { ArrowLeft, ArrowRight, Newspaper } from "lucide-react"
import { ActivityCard } from "@/components/activities/activity-card"
import { activityUrl, getPublishedActivities, Language } from "@/lib/activities"

const copy = {
  sq: {
    eyebrow: "DENDROMETREE / Aktualitete",
    title: "Aktivitetet dhe Lajmet",
    description: "Njoftime, projekte dhe përditësime nga puna jonë në pylltari, inventarizim pyjor, GIS dhe teknologji të matjes.",
    emptyTitle: "Publikimet janë në përgatitje",
    emptyDescription: "Së shpejti këtu do të gjeni aktivitetet dhe projektet e kompanisë.",
    home: "Kthehu në faqen kryesore",
    switchLanguage: "English",
  },
  en: {
    eyebrow: "DENDROMETREE / Updates",
    title: "Activities & News",
    description: "Company news, project highlights, and updates from our work in forestry, forest inventory, GIS, and surveying technology.",
    emptyTitle: "Updates are coming soon",
    emptyDescription: "Company activities and project news will appear here as they are published.",
    home: "Back to home",
    switchLanguage: "Shqip",
  },
} as const

export function ActivityList({ language }: { language: Language }) {
  const t = copy[language]
  const articles = getPublishedActivities()
  const otherLanguage = language === "sq" ? "en" : "sq"

  return (
    <main lang={language} className="min-h-screen bg-background text-foreground">
      <div className="border-b border-border bg-[oklch(0.13_0.03_195)] px-4 pb-20 pt-28 text-white sm:px-6 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {t.home}
            </Link>
            <Link href={activityUrl(otherLanguage)} hrefLang={otherLanguage} className="rounded-full border border-white/30 px-4 py-2 text-sm text-white hover:bg-white/10">
              {t.switchLanguage}
            </Link>
          </div>
          <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">{t.eyebrow}</span>
          <h1 className="mt-5 max-w-3xl font-[family-name:var(--font-heading)] text-4xl font-bold sm:text-5xl">{t.title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">{t.description}</p>
        </div>
      </div>
      <section className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8" aria-label={t.title}>
        {articles.length > 0 ? (
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {articles.map((activity) => (
              <ActivityCard key={activity.slug} activity={activity} language={language} />
            ))}
          </div>
        ) : (
          <div className="mx-auto max-w-2xl rounded-2xl border border-border bg-card p-10 text-center sm:p-16">
            <Newspaper className="mx-auto h-12 w-12 text-primary" aria-hidden="true" />
            <h2 className="mt-5 font-[family-name:var(--font-heading)] text-2xl font-bold">{t.emptyTitle}</h2>
            <p className="mt-3 leading-7 text-muted-foreground">{t.emptyDescription}</p>
            <Link href="/" className="mt-6 inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              {t.home} <ArrowRight className="h-4 w-4" aria-hidden="true" />
            </Link>
          </div>
        )}
      </section>
    </main>
  )
}
