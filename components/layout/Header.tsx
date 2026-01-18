'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Menu, X, ChevronDown } from 'lucide-react'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { cn } from '@/lib/utils'

const navigation = [
  {
    name: 'Dumpster Sizes',
    href: '#',
    children: [
      { name: '10 Yard Dumpster', href: '/10-yard-dumpster/' },
      { name: '20 Yard Dumpster', href: '/20-yard-dumpster/' },
      { name: '30 Yard Dumpster', href: '/30-yard-dumpster/' },
      { name: '40 Yard Dumpster', href: '/40-yard-dumpster/' },
    ],
  },
  {
    name: 'Services',
    href: '#',
    children: [
      { name: 'Construction Dumpster', href: '/construction-dumpster/' },
      { name: 'Roofing Dumpster', href: '/roofing-dumpster/' },
      { name: 'Renovation Dumpster', href: '/renovation-dumpster/' },
      { name: 'Estate Cleanout', href: '/estate-cleanout-dumpster/' },
      { name: 'Demolition Dumpster', href: '/demolition-dumpster/' },
    ],
  },
  { name: 'Service Areas', href: '/service-areas/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
]

export const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-200">
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-brand-orange rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xl">P</span>
            </div>
            <div className="hidden sm:block">
              <span className="font-outfit font-bold text-lg text-slate-900">
                Premier Debris
              </span>
              <span className="block text-xs text-slate-500 -mt-1">
                Management
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex lg:items-center lg:gap-6">
            {navigation.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.children && setOpenDropdown(item.name)}
                onMouseLeave={() => setOpenDropdown(null)}
              >
                {item.children ? (
                  <button
                    className={cn(
                      'flex items-center gap-1 text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors',
                      openDropdown === item.name && 'text-slate-900'
                    )}
                  >
                    {item.name}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <Link
                    href={item.href}
                    className="text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors"
                  >
                    {item.name}
                  </Link>
                )}

                {/* Dropdown */}
                {item.children && openDropdown === item.name && (
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg border border-slate-200 py-2">
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-4 py-2 text-sm text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="flex items-center gap-4">
            <PhoneButton size="sm" className="hidden sm:inline-flex" />
            <button
              className="lg:hidden p-2 text-slate-600 hover:text-slate-900"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-200">
          <div className="px-4 py-4 space-y-2">
            {navigation.map((item) => (
              <div key={item.name}>
                {item.children ? (
                  <div className="space-y-1">
                    <span className="block px-3 py-2 text-sm font-semibold text-slate-900">
                      {item.name}
                    </span>
                    {item.children.map((child) => (
                      <Link
                        key={child.name}
                        href={child.href}
                        className="block px-6 py-2 text-sm text-slate-600 hover:bg-slate-50"
                        onClick={() => setMobileMenuOpen(false)}
                      >
                        {child.name}
                      </Link>
                    ))}
                  </div>
                ) : (
                  <Link
                    href={item.href}
                    className="block px-3 py-2 text-sm font-medium text-slate-600 hover:bg-slate-50"
                    onClick={() => setMobileMenuOpen(false)}
                  >
                    {item.name}
                  </Link>
                )}
              </div>
            ))}
            <div className="pt-4 border-t border-slate-200">
              <PhoneButton size="lg" className="w-full" />
            </div>
          </div>
        </div>
      )}
    </header>
  )
}
