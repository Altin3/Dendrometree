import Image from "next/image"
import Link from "next/link"
import { ArrowUpRight, TreePine } from "lucide-react"
import { Activity, Language, activityUrl, formatActivityDate } from "@/lib/activities"

export function ActivityCard({ activity, language }: { activity: Activity; language: Language }) {
  return (
    <Link
      href={activityUrl(language, activity.slug)}
      className="group block overflow-hidden rounded-xl border border-border bg-card transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
    >
      <div className="relative flex aspect-[16/10] items-center justify-center overflow-hidden bg-[oklch(0.16_0.03_195)]">
        {activity.coverImage ? (
          <Image
            src={activity.coverImage}
            alt={activity.title[language]}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        ) : (
          <div className="flex flex-col items-center gap-3 text-primary">
            <TreePine className="h-14 w-14 opacity-70" aria-hidden="true" />
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-white/70">DENDROMETREE</span>
          </div>
        )}
      </div>
      <div className="space-y-3 p-6">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
          <span className="font-semibold uppercase tracking-wide text-primary">{activity.category[language]}</span>
          <time dateTime={activity.date} className="text-muted-foreground">
            {formatActivityDate(activity.date, language)}
          </time>
        </div>
        <div className="flex items-start justify-between gap-4">
          <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold leading-snug text-foreground transition-colors group-hover:text-primary">
            {activity.title[language]}
          </h3>
          <ArrowUpRight className="mt-1 h-5 w-5 shrink-0 text-primary" aria-hidden="true" />
        </div>
        <p className="line-clamp-3 text-sm leading-7 text-muted-foreground">{activity.summary[language]}</p>
        <span className="inline-block pt-2 text-sm font-semibold text-primary">
          {language === "sq" ? "Lexo më shumë" : "Read more"} →
        </span>
      </div>
    </Link>
  )
}
