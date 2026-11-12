import type { ReactNode } from "react"
import { SiteRootLayout } from "@/components/site-root-layout"
import { siteMetadata } from "@/lib/site-metadata"
import "../globals.css"

export const metadata = siteMetadata("sq")

export default function AlbanianLayout({ children }: { children: ReactNode }) {
  return <SiteRootLayout language="sq">{children}</SiteRootLayout>
}
