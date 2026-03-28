import Link from "next/link"
import Image from "next/image"

const footerLinks = {
  services: [
    { label: "Forest Inventory", href: "#services" },
    { label: "Management Plans", href: "#services" },
    { label: "GIS & Mapping", href: "#gis" },
    { label: "Remote Sensing", href: "#services" },
    { label: "Consulting", href: "#services" },
  ],
  company: [
    { label: "About Us", href: "#about" },
    { label: "Our Process", href: "#process" },
    { label: "Case Studies", href: "#projects" },
    { label: "Contact", href: "#contact" },
  ],
  resources: [
    { label: "Privacy Policy", href: "#" },
    { label: "Terms of Service", href: "#" },
  ],
}

export function Footer() {
  return (
    <footer className="bg-[oklch(0.13_0.03_195)] text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/logo.jpeg"
                alt="DENDROMETREE"
                width={48}
                height={48}
                className="rounded-full"
                style={{ width: 48, height: 48 }}
              />
              <span className="font-[family-name:var(--font-heading)] text-xl font-semibold tracking-wide">
                DENDROMETREE
              </span>
            </Link>
            <p className="mt-6 text-gray-400 max-w-sm leading-relaxed">
              Expert forestry consulting, GIS mapping, and sustainable forest management 
              solutions for a greener future.
            </p>
            <p className="mt-6 text-sm text-gray-500">
              dendrometree@hotmail.com
            </p>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4">
              Services
            </h4>
            <ul className="space-y-3">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4">
              Company
            </h4>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-[family-name:var(--font-heading)] font-semibold text-white mb-4">
              Legal
            </h4>
            <ul className="space-y-3">
              {footerLinks.resources.map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="text-sm text-gray-400 hover:text-primary transition-colors">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-gray-500">
              &copy; {new Date().getFullYear()} DENDROMETREE. All rights reserved.
            </p>
            <p className="text-sm text-gray-500">
              Sustainable forestry for a better tomorrow.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
