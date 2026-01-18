import Link from 'next/link'
import { Phone, Mail, MapPin } from 'lucide-react'
import { getTrackingNumber, formatPhoneForTel } from '@/lib/tracking'

const footerLinks = {
  sizes: [
    { name: '10 Yard Dumpster', href: '/10-yard-dumpster/' },
    { name: '20 Yard Dumpster', href: '/20-yard-dumpster/' },
    { name: '30 Yard Dumpster', href: '/30-yard-dumpster/' },
    { name: '40 Yard Dumpster', href: '/40-yard-dumpster/' },
  ],
  services: [
    { name: 'Construction Dumpster', href: '/construction-dumpster/' },
    { name: 'Roofing Dumpster', href: '/roofing-dumpster/' },
    { name: 'Renovation Dumpster', href: '/renovation-dumpster/' },
    { name: 'Estate Cleanout', href: '/estate-cleanout-dumpster/' },
    { name: 'Demolition Dumpster', href: '/demolition-dumpster/' },
  ],
  locations: [
    { name: 'Houston, TX', href: '/houston/' },
    { name: 'Phoenix, AZ', href: '/phoenix/' },
    { name: 'Dallas, TX', href: '/dallas/' },
    { name: 'Atlanta, GA', href: '/atlanta/' },
    { name: 'Miami, FL', href: '/miami/' },
  ],
  company: [
    { name: 'About Us', href: '/about/' },
    { name: 'Contact', href: '/contact/' },
    { name: 'Service Areas', href: '/service-areas/' },
  ],
}

export const Footer = () => {
  const phone = getTrackingNumber()

  return (
    <footer className="bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-xl">P</span>
              </div>
              <div>
                <span className="font-outfit font-bold text-lg">Premier Debris</span>
                <span className="block text-xs text-slate-400 -mt-1">Management</span>
              </div>
            </div>
            <p className="text-slate-400 text-sm mb-4">
              Professional dumpster rental services for construction, renovation, and cleanout projects.
            </p>
            <div className="space-y-2">
              <a
                href={formatPhoneForTel(phone)}
                className="flex items-center gap-2 text-amber-400 hover:text-amber-300"
              >
                <Phone className="w-4 h-4" />
                {phone}
              </a>
              <a
                href="mailto:info@premierdebrismanagement.site"
                className="flex items-center gap-2 text-slate-400 hover:text-white"
              >
                <Mail className="w-4 h-4" />
                info@premierdebrismanagement.site
              </a>
            </div>
          </div>

          {/* Dumpster Sizes */}
          <div>
            <h3 className="font-outfit font-semibold mb-4">Dumpster Sizes</h3>
            <ul className="space-y-2">
              {footerLinks.sizes.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-outfit font-semibold mb-4">Services</h3>
            <ul className="space-y-2">
              {footerLinks.services.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Locations */}
          <div>
            <h3 className="font-outfit font-semibold mb-4">Service Areas</h3>
            <ul className="space-y-2">
              {footerLinks.locations.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-outfit font-semibold mb-4">Company</h3>
            <ul className="space-y-2">
              {footerLinks.company.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-slate-400 hover:text-white text-sm transition-colors"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 pt-8 border-t border-slate-800">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-slate-400 text-sm">
              &copy; {new Date().getFullYear()} Premier Debris Management. All rights reserved.
            </p>
            <div className="flex gap-6">
              <Link
                href="/privacy/"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms/"
                className="text-slate-400 hover:text-white text-sm transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
