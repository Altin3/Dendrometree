import entries from "@/content/activities.json"

export type Language = "sq" | "en"
export type LocalizedText = Record<Language, string>

export interface Activity {
  slug: string
  date: string
  status: "draft" | "published"
  category: LocalizedText
  title: LocalizedText
  summary: LocalizedText
  paragraphs: Record<Language, string[]>
  coverImage?: string | null
  images?: Array<{ src: string; alt: LocalizedText }>
}

const activities = entries as Activity[]

export function getPublishedActivities(): Activity[] {
  return activities
    .filter((activity) => activity.status === "published")
    .sort((a, b) => b.date.localeCompare(a.date))
}

export function getPublishedActivity(slug: string): Activity | undefined {
  return getPublishedActivities().find((activity) => activity.slug === slug)
}

export function activityUrl(language: Language, slug?: string): string {
  const base = language === "sq" ? "/aktivitetet" : "/en/activities"
  return slug ? `${base}/${encodeURIComponent(slug)}` : base
}

export function formatActivityDate(date: string, language: Language): string {
  return new Intl.DateTimeFormat(language === "sq" ? "sq-AL" : "en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  }).format(new Date(`${date}T12:00:00Z`))
}
