"use client"
import { siteCopy, type SiteLanguage } from "@/lib/site-i18n"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Mail, Phone, MapPin } from "lucide-react"

export function Contact({ language }: { language: SiteLanguage }) {
  const t = siteCopy[language].contact
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission
    console.log("[v0] Form submitted:", formData)
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-sm font-medium text-primary uppercase tracking-wider">{t.eyebrow}</span>
          <h2 className="mt-4 font-[family-name:var(--font-heading)] text-3xl sm:text-4xl font-bold text-foreground text-balance">
            {t.title}
          </h2>
          <p className="mt-4 text-lg text-muted-foreground text-pretty">
            {t.description}
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2 space-y-8">
            <div>
              <h3 className="font-[family-name:var(--font-heading)] text-xl font-semibold text-foreground mb-6">
                {t.information}
              </h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.email}</div>
                    <a href="mailto:dendrometree@hotmail.com" className="text-foreground hover:text-primary transition-colors">
                      dendrometree@hotmail.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.phone}</div>
                    <a href="tel:" className="text-foreground hover:text-primary transition-colors">
                      (+383 45 563836)
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">{t.office}</div>
                    <address className="not-italic text-foreground">
                      {t.officePlace}
                    </address>
                  </div>
                </div>
              </div>
            </div>

            <div className="p-6 rounded-xl bg-muted border border-border">
              <h4 className="font-[family-name:var(--font-heading)] font-semibold text-foreground mb-2">
                {t.responseTitle}
              </h4>
              <p className="text-sm text-muted-foreground">
                {t.responseText}
              </p>
            </div>
          </div>

          <div className="lg:col-span-3">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                    {t.name}
                  </label>
                  <Input
                    id="name"
                    type="text"
                    placeholder={t.namePlaceholder}
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                    {t.emailAddress}
                  </label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="john@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                  />
                </div>
              </div>

              <div>
                <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                  {t.organization}
                </label>
                <Input
                  id="organization"
                  type="text"
                  placeholder={language === "sq" ? "Kompania ose komuna juaj" : "Your company or municipality"}
                  value={formData.organization}
                  onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                  {t.details}
                </label>
                <Textarea
                  id="message"
                  placeholder={t.detailsPlaceholder}
                  rows={6}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" size="lg" className="w-full sm:w-auto">
                {t.send}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
