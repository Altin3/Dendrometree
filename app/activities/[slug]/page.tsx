import type { Metadata } from "next"
import { ActivityDetail } from "@/components/activities/activity-detail"
import { activityUrl, getPublishedActivities, getPublishedActivity } from "@/lib/activities"

type Props = { params: Promise<{ slug: string }> }

export function generateStaticParams() {
  return getPublishedActivities().map(({ slug }) => ({ slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const activity = getPublishedActivity(slug)
  if (!activity) return { title: "Activity not found | DENDROMETREE" }
  return {
    title: `${activity.title.en} | DENDROMETREE`,
    description: activity.summary.en,
    alternates: {
      languages: {
        "sq-AL": activityUrl("sq", slug),
        "en-US": activityUrl("en", slug),
      },
    },
  }
}

export default async function ActivityPage({ params }: Props) {
  const { slug } = await params
  return <ActivityDetail language="en" slug={slug} />
}
