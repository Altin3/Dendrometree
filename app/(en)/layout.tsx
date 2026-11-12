import type { ReactNode } from "react"
import { SiteRootLayout } from "@/components/site-root-layout"
import { siteMetadata } from "@/lib/site-metadata"
import "../globals.css"

export const metadata = siteMetadata("en")

export default function EnglishLayout({ children }: { children: ReactNode }) {
  return <SiteRootLayout language="en">{children}</SiteRootLayout>
}
