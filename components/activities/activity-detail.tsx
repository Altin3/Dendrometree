import Image from "next/image"
import Link from "next/link"
import { ArrowLeft, CalendarDays, Mountain, Layers3, Trees, Leaf, MapPinned, CheckCircle2 } from "lucide-react"
import { notFound } from "next/navigation"
import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { activityUrl, formatActivityDate, getPublishedActivity, type Language, type Activity } from "@/lib/activities"

const statIcons = { area: Mountain, plots: Layers3, trees: Trees, species: Leaf }

function StatCard({ stat, language }: { stat: NonNullable<Activity["stats"]>[number]; language: Language }) {
  const Icon = statIcons[stat.icon as keyof typeof statIcons] ?? Trees
  return (
    <div className="flex items-center gap-4 rounded-xl border border-emerald-900/10 bg-emerald-50/70 px-4 py-5 shadow-sm sm:px-6">
      <Icon className="h-9 w-9 shrink-0 text-emerald-700" aria-hidden="true" />
      <div><div className="font-[family-name:var(--font-heading)] text-2xl font-bold text-emerald-950">{stat.value}</div>
      <div className="mt-1 text-sm leading-5 text-emerald-950/75">{stat.label[language]}</div></div>
    </div>
  )
}

export function ActivityDetail({ language, slug }: { language: Language; slug: string }) {
  const activity = getPublishedActivity(slug)
  if (!activity) notFound()

  const otherLanguage: Language = language === "sq" ? "en" : "sq"
  const charts = activity.images?.filter((image) => image.kind === "chart") ?? []
  const photos = activity.images?.filter((image) => image.kind !== "chart") ?? []
  const featured = activity.stats && activity.stats.length > 0

  return (
    <>
      <Header language={language} alternateHref={activityUrl(otherLanguage, activity.slug)} />
      <main lang={language} className="min-h-screen bg-background text-foreground">
        <article>
          <header className="relative isolate overflow-hidden bg-[oklch(0.13_0.03_195)] px-4 pb-16 pt-32 text-white sm:px-6 sm:pb-20 sm:pt-40 lg:px-8">
            {activity.coverImage && (
              <Image
                src={activity.coverImage}
                alt=""
                fill
                sizes="100vw"
                className="object-cover"
                priority
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-r from-[#09251e]/95 via-[#09251e]/75 to-[#09251e]/25" aria-hidden="true" />
            <div className="relative mx-auto max-w-7xl">
              <Link href={activityUrl(language)} className="mb-8 inline-flex items-center gap-2 text-sm text-white/80 hover:text-white">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" /> {language === "sq" ? "Aktivitetet dhe lajmet" : "Activities & News"}
              </Link>
              <div className="max-w-4xl">
                <span className="inline-flex rounded-full bg-emerald-700 px-4 py-1.5 text-xs font-semibold uppercase tracking-wider text-white">{activity.category[language]}</span>
                <h1 className="mt-5 font-[family-name:var(--font-heading)] text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{activity.title[language]}</h1>
                <div className="mt-7 flex flex-wrap items-center gap-3 text-sm text-white/85">
                  <span className="inline-flex items-center gap-2"><CalendarDays className="h-4 w-4" aria-hidden="true" /><time dateTime={activity.date}>{formatActivityDate(activity.date, language)}</time></span>
                  <span className="hidden text-white/50 sm:inline">|</span>
                  <span>DENDROMETREE</span>
                </div>
              </div>
            </div>
          </header>

          <div className="mx-auto max-w-7xl px-4 pb-20 pt-12 sm:px-6 lg:px-8">
            <p className="max-w-5xl text-lg leading-8 text-foreground sm:text-xl">{activity.paragraphs[language][0]}</p>

            {featured && (
              <div className="mt-9 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {activity.stats?.map((stat) => <StatCard key={stat.value} stat={stat} language={language} />)}
              </div>
            )}

            <p className="mt-9 max-w-5xl text-base leading-8 text-muted-foreground sm:text-lg">
              {activity.paragraphs[language][featured ? 1 : 0]}
            </p>

            {charts.length > 0 && (
              <section className="mt-16" aria-labelledby="forest-species">
                <div className="mb-8 flex items-center gap-3">
                  <MapPinned className="h-7 w-7 text-emerald-700" aria-hidden="true" />
                  <h2 id="forest-species" className="font-[family-name:var(--font-heading)] text-2xl font-bold text-emerald-950 sm:text-3xl">
                    {language === "sq" ? "Përbërja e llojeve drunore sipas njësive menaxhuese" : "Tree species composition by forest management unit"}
                  </h2>
                </div>

                <div className="grid gap-6 lg:grid-cols-2">
                  {charts.map((image, index) => (
                    <div key={image.src} className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
                      <div className="px-5 pb-2 pt-6 sm:px-7">
                        <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground">
                          {index === 0 ? "NJM Vërbesh–Kashtanjevë" : "NJM V. Vrh–Kriva Reka–Kamenicë"}
                        </h3>
                        <p className="mt-3 text-sm leading-7 text-muted-foreground">{activity.paragraphs[language][index + 2]}</p>
                      </div>
                      <div className="relative aspect-[1.7] w-full">
                        <Image src={image.src} alt={image.alt[language]} fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-contain" />
                      </div>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {photos.length > 0 && (
              <section className="mt-16" aria-labelledby="field-gallery">
                <h2 id="field-gallery" className="mb-7 font-[family-name:var(--font-heading)] text-2xl font-bold text-emerald-950 sm:text-3xl">
                  {language === "sq" ? "Inventarizimi në terren – Ekipi dhe matjet" : "Field forest inventory – Our team and measurements"}
                </h2>
                <div className="grid items-stretch gap-5 md:grid-cols-2">
                  {photos.map((photo, index) => (
                    <figure key={photo.src} className="overflow-hidden rounded-xl border border-border bg-card shadow-sm">
                      <div className="relative h-80 bg-muted sm:h-96">
                        <Image src={photo.src} alt={photo.alt[language]} fill sizes="(max-width: 768px) 100vw, 50vw" className={index === 0 ? "object-cover object-[center_58%]" : "object-cover"} />
                      </div>
                      <figcaption className="px-5 py-4 text-sm leading-6 text-muted-foreground">{photo.alt[language]}</figcaption>
                    </figure>
                  ))}
                </div>
              </section>
            )}

            <div className="mt-14 rounded-2xl border border-emerald-900/10 bg-emerald-50 px-6 py-8 sm:px-10">
              <h2 className="flex items-center gap-3 font-[family-name:var(--font-heading)] text-xl font-bold text-emerald-950">
                <CheckCircle2 className="h-6 w-6 shrink-0 text-emerald-700" aria-hidden="true" />
                {language === "sq" ? "Të dhëna për menaxhim të qëndrueshëm" : "Data for sustainable forest management"}
              </h2>
              <p className="mt-4 text-base leading-8 text-emerald-950/90">
                {activity.paragraphs[language][activity.paragraphs[language].length - 2] ?? activity.summary[language]}
              </p>
              <p className="mt-5 font-semibold text-emerald-900">{activity.paragraphs[language][activity.paragraphs[language].length - 1]}</p>
            </div>

            <div className="mt-12 border-t border-border pt-8">
              <Link href={activityUrl(language)} className="inline-flex items-center gap-2 font-semibold text-primary hover:underline">
                <ArrowLeft className="h-4 w-4" aria-hidden="true" />{language === "sq" ? "Kthehu te aktivitetet" : "Back to activities"}
              </Link>
            </div>
          </div>
        </article>
      </main>
      <Footer language={language} />
    </>
  )
}
