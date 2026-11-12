"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Menu, X } from "lucide-react"
import { siteCopy, sectionHref, homeHref, type SiteLanguage } from "@/lib/site-i18n"
export function Header({language,alternateHref}:{language:SiteLanguage;alternateHref?:string}){
 const [open,setOpen]=useState(false)
 const t=siteCopy[language].nav
 const other:SiteLanguage=language==="sq"?"en":"sq"
 const links=[[t.services,"services"],[t.about,"about"],[t.process,"process"],[t.projects,"projects"],[t.gis,"gis"]]
 const switchHref=alternateHref??homeHref(other)
 return <header className="fixed inset-x-0 top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
  <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-3 px-4 sm:px-6 lg:px-8">
   <Link href={homeHref(language)} className="flex shrink-0 items-center gap-2"><Image src="/logo.jpeg" alt="DENDROMETREE" width={38} height={38} className="rounded-full"/><span className="text-base font-semibold text-foreground sm:text-lg">DENDROMETREE</span></Link>
   <nav className="hidden items-center gap-4 lg:flex">{links.map(([label,section])=><Link key={section} href={sectionHref(language,section)} className="text-sm font-medium text-muted-foreground hover:text-primary">{label}</Link>)}<Link href={language==="sq"?"/aktivitetet":"/en/activities"} className="text-sm font-medium text-muted-foreground hover:text-primary">{t.activities}</Link></nav>
   <div className="hidden items-center gap-3 lg:flex"><div className="flex items-center rounded-full border border-border p-1" aria-label="Gjuha / Language">{language==="sq"?<span aria-current="page" className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">SQ</span>:<Link href={switchHref} hrefLang="sq" className="px-3 py-1 text-xs font-semibold">SQ</Link>}{language==="en"?<span aria-current="page" className="rounded-full bg-primary px-3 py-1 text-xs font-bold text-primary-foreground">EN</span>:<Link href={switchHref} hrefLang="en" className="px-3 py-1 text-xs font-semibold">EN</Link>}</div><Link href={sectionHref(language,"contact")} className="rounded-lg bg-primary px-4 py-2 text-sm font-semibold text-primary-foreground">{t.contactUs}</Link></div>
   <div className="flex items-center gap-2 lg:hidden"><Link href={switchHref} hrefLang={other} className="rounded-md border border-border px-3 py-2 text-sm font-semibold text-primary">{other.toUpperCase()}</Link><button type="button" onClick={()=>setOpen(!open)} aria-expanded={open} aria-label={open?"Close menu":"Open menu"} className="p-2">{open?<X/>:<Menu/>}</button></div>
  </div>
  {open&&<nav className="flex flex-col border-t border-border bg-background px-5 py-4 lg:hidden">{links.map(([label,section])=><Link key={section} href={sectionHref(language,section)} onClick={()=>setOpen(false)} className="px-3 py-2 text-sm">{label}</Link>)}<Link href={language==="sq"?"/aktivitetet":"/en/activities"} onClick={()=>setOpen(false)} className="px-3 py-2 text-sm">{t.activities}</Link><Link href={sectionHref(language,"contact")} onClick={()=>setOpen(false)} className="px-3 py-2 font-semibold text-primary">{t.contactUs}</Link></nav>}
 </header>
}
