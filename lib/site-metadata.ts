import type { Metadata } from "next"
import { SiteLanguage, siteCopy } from "@/lib/site-i18n"

export function siteMetadata(language: SiteLanguage): Metadata {
  return {
    title: siteCopy[language].metadata.title,
    description: siteCopy[language].metadata.description,
    metadataBase: new URL("https://www.dendrometree.com"),
    alternates: {
      canonical: language === "sq" ? "/" : "/en",
      languages: { "sq-AL": "/", "en-US": "/en", "x-default": "/" },
    },
    icons: {
      icon: [{ url: "/icon.svg?v=dendro-2", type: "image/svg+xml", sizes: "any" },
             { url: "/logo.jpeg?v=dendro-2", type: "image/jpeg" }],
      shortcut: "/icon.svg?v=dendro-2",
      apple: "/logo.jpeg?v=dendro-2",
    },
  }
}
