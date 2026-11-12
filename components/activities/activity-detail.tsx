import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays } from "lucide-react"
import { notFound } from "next/navigation"
import { activityUrl, formatActivityDate, getPublishedActivity, Language } from "@/lib/activities"

export function ActivityDetail({ language, slug }: { language: Language; slug: string }) {
  const activity = getPublishedActivity(slug)
  if (!activity) notFound()

  const otherLanguage = language === "sq" ? "en" : "sq"
  return (
    <main lang={language} className="min-h-screen bg-background pb-24 text-foreground">
      <article>
        <header className="bg-[oklch(0.13_0.03_195)] px-4 pb-16 pt-28 text-white sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl">
            <div className="mb-10 flex items-center justify-between gap-4">
              <Link href={activityUrl(language)} className="inline-flex items-center gap-2 text-sm text-white/75 hover:text-white">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />
                {language === "sq" ? "Të gjitha aktivitetet" : "All activities"}
              </Link>
              <Link href={activityUrl(otherLanguage, activity.slug)} hrefLang={otherLanguage} className="rounded-full border border-white/30 px-4 py-2 text-sm hover:bg-white/10">
                {language === "sq" ? "English" : "Shqip"}
              </Link>
            </div>
            <span className="text-sm font-semibold uppercase tracking-widest text-emerald-300">{activity.category[language]}</span>
            <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight sm:text-5xl">
              {activity.title[language]}
            </h1>
            <p className="mt-6 max-w-3xl text-lg leading-8 text-white/75">{activity.summary[language]}</p>
            <div className="mt-8 flex items-center gap-2 text-sm text-white/65">
              <CalendarDays className="h-4 w-4" aria-hidden="true" />
              <time dateTime={activity.date}>{formatActivityDate(activity.date, language)}</time>
            </div>
          </div>
        </header>
        <div className="mx-auto max-w-4xl px-4 pt-12 sm:px-6 lg:px-8">
          {activity.coverImage && (
            <div className="relative mb-12 aspect-[16/9] overflow-hidden rounded-xl bg-muted">
              <Image src={activity.coverImage} alt={activity.title[language]} fill sizes="(max-width: 1024px) 100vw, 900px" priority className="object-cover" />
            </div>
          )}
          <div className="space-y-6 text-lg leading-9 text-foreground/85">
            {activity.paragraphs[language].map((paragraph, index) => <p key={index}>{paragraph}</p>)}
          </div>
          {activity.images && activity.images.length > 0 && (
            <div className="mt-12 grid gap-6 sm:grid-cols-2">
              {activity.images.map((image) => (
                <figure key={image.src}>
                  <div className="relative aspect-[4/3] overflow-hidden rounded-lg bg-muted">
                    <Image src={image.src} alt={image.alt[language]} fill sizes="(max-width: 640px) 100vw, 50vw" className="object-cover" />
                  </div>
                  <figcaption className="mt-2 text-sm text-muted-foreground">{image.alt[language]}</figcaption>
                </figure>
              ))}
            </div>
          )}
          <div className="mt-14 border-t border-border pt-8">
            <Link href={activityUrl(language)} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
              <ArrowLeft className="h-4 w-4" aria-hidden="true" />
              {language === "sq" ? "Kthehu te aktivitetet" : "Back to activities"}
            </Link>
          </div>
        </div>
      </article>
    </main>
  )
}
