import Image from "next/image"
import Link from "next/link"
import {siteCopy,homeHref,sectionHref,type SiteLanguage} from "@/lib/site-i18n"
export function Footer({language}:{language:SiteLanguage}){
 const t=siteCopy[language].footer
 const serviceIds=["services","services","gis","services","services"]
 const companyUrls=[sectionHref(language,"about"),sectionHref(language,"process"),sectionHref(language,"projects"),language==="sq"?"/aktivitetet":"/en/activities",sectionHref(language,"contact")]
 return <footer className="bg-[oklch(0.13_0.03_195)] text-white"><div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
 <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-5">
  <div className="lg:col-span-2"><Link href={homeHref(language)} className="flex items-center gap-3"><Image src="/logo.jpeg" alt="DENDROMETREE" width={48} height={48} className="rounded-full"/><strong className="text-xl">DENDROMETREE</strong></Link><p className="mt-6 max-w-sm text-gray-400">{t.description}</p><a href="mailto:dendrometree@hotmail.com" className="mt-6 block text-sm text-gray-400">dendrometree@hotmail.com</a></div>
  <div><h2 className="mb-4 font-semibold">{t.services}</h2><ul className="space-y-3">{t.serviceLinks.map((label,i)=><li key={label}><Link href={sectionHref(language,serviceIds[i])} className="text-sm text-gray-400 hover:text-primary">{label}</Link></li>)}</ul></div>
  <div><h2 className="mb-4 font-semibold">{t.company}</h2><ul className="space-y-3">{t.companyLinks.map((label,i)=><li key={label}><Link href={companyUrls[i]} className="text-sm text-gray-400 hover:text-primary">{label}</Link></li>)}</ul></div>
  <div><h2 className="mb-4 font-semibold">{language==="sq"?"Gjuha":"Language"}</h2><Link href="/" hrefLang="sq" className="block py-1 text-sm text-gray-400">Shqip</Link><Link href="/en" hrefLang="en" className="block py-1 text-sm text-gray-400">English</Link></div>
 </div><div className="mt-12 flex flex-col justify-between gap-3 border-t border-gray-800 pt-8 text-sm text-gray-500 md:flex-row"><span>© {new Date().getFullYear()} DENDROMETREE. {t.copyright}</span><span>{t.slogan}</span></div>
 </div></footer>
}
