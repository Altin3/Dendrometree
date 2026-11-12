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
      icon: [
        { url: "/icon-light-32x32.png", media: "(prefers-color-scheme: light)" },
        { url: "/icon-dark-32x32.png", media: "(prefers-color-scheme: dark)" },
        { url: "/icon.svg", type: "image/svg+xml" },
      ],
      apple: "/apple-icon.png",
    },
  }
}
