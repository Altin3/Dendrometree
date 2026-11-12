import { Inter, Space_Grotesk } from "next/font/google"
import { Analytics } from "@vercel/analytics/next"
import type { ReactNode } from "react"
import type { SiteLanguage } from "@/lib/site-i18n"

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" })
const spaceGrotesk = Space_Grotesk({ subsets: ["latin"], variable: "--font-space-grotesk" })

export function SiteRootLayout({ children, language }: { children: ReactNode; language: SiteLanguage }) {
  return (
    <html lang={language}>
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans antialiased`}>
        {children}
        <Analytics />
      </body>
    </html>
  )
}
