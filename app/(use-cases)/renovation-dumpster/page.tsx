import { type Metadata } from 'next'
import Link from 'next/link'
import { Building2, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Renovation Dumpster Rental | Dumpsters for Home Remodels',
  description: 'Rent a dumpster for home renovations, kitchen remodels, and bathroom updates. 20-30 yard containers with same-day delivery. Call for instant pricing.',
}

const faqs = [
  {
    q: 'What size dumpster do I need for a home renovation?',
    a: 'For a single room renovation like a bathroom or kitchen, a 10-20 yard dumpster usually works well. For multi-room renovations or whole-house remodels, a 20-30 yard dumpster provides adequate capacity. Call us with your project details for a specific recommendation.',
  },
  {
    q: 'Can I put old appliances in a renovation dumpster?',
    a: 'Yes, most appliances like dishwashers, stoves, and washers/dryers can go in our dumpsters. However, refrigerators and air conditioners require Freon removal first. We can arrange for proper disposal of these items separately.',
  },
  {
    q: 'How long do I need a dumpster for a renovation project?',
    a: 'Our standard 7-day rental works for most renovation projects. For longer remodels, we offer flexible extensions. Many customers keep the dumpster for the full project duration and call for pickup when they\'re done.',
  },
  {
    q: 'Can I throw away old cabinets and countertops?',
    a: 'Yes, cabinets, countertops, flooring, drywall, and other renovation materials are all acceptable. The dumpster is perfect for the mixed debris typical of home renovation projects.',
  },
]

export default function RenovationDumpsterPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Renovation Dumpster', href: '/renovation-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Building2 className="w-7 h-7 text-amber-600" />
              </div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Renovation Dumpster Rental
              </h1>
            </div>

            <KeyTakeaways
              items={[
                'Recommended sizes: 20-yard for kitchens/baths, 30-yard for whole house',
                'Perfect for mixed debris: drywall, flooring, cabinets, fixtures',
                '7-day rental with flexible extensions for longer projects',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                Home renovations generate a surprising amount of debris. From demolition day
                through final cleanup,{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides the dumpster rentals you need to keep your renovation project on track.
                Our roll-off containers handle everything from old cabinets and countertops to
                flooring, drywall, and fixtures.
              </p>
              <p>
                For kitchen and bathroom remodels, a{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard dumpster
                </Link>{' '}
                provides ample capacity. For larger whole-house renovations, step up to a{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard dumpster
                </Link>
                . If you're doing a small single-room project, our{' '}
                <Link href="/10-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  10-yard dumpster
                </Link>{' '}
                may be all you need.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Project Size Guide */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Renovation Project Size Guide
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Small Renovation
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>Single bathroom remodel</li>
                  <li>Small kitchen update</li>
                  <li>One room flooring</li>
                </ul>
                <Link
                  href="/10-yard-dumpster/"
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  10-20 Yard Recommended
                </Link>
              </div>
              <div className="bg-amber-50 border-2 border-amber-500 rounded-xl p-6">
                <div className="text-xs font-bold text-amber-600 mb-2">MOST COMMON</div>
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Medium Renovation
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>Full kitchen remodel</li>
                  <li>Multiple bathrooms</li>
                  <li>Whole house flooring</li>
                </ul>
                <Link
                  href="/20-yard-dumpster/"
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  20 Yard Recommended
                </Link>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Large Renovation
                </h3>
                <ul className="space-y-2 text-sm text-slate-600 mb-4">
                  <li>Whole house remodel</li>
                  <li>Gut renovation</li>
                  <li>Addition project</li>
                </ul>
                <Link
                  href="/30-yard-dumpster/"
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  30 Yard Recommended
                </Link>
              </div>
            </div>
          </div>

          {/* What Goes In */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              What Can Go in a Renovation Dumpster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Cabinets and countertops',
                'Drywall and plaster',
                'Flooring (tile, wood, carpet)',
                'Fixtures and hardware',
                'Doors and windows',
                'Toilets and sinks',
                'Old appliances',
                'Trim and molding',
                'General construction debris',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/construction-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Construction Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For new builds and contractor jobs</p>
              </Link>
              <Link
                href="/estate-cleanout-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Estate Cleanout
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For clearing out homes and storage</p>
              </Link>
              <Link
                href="/20-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  20 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">Most popular for renovations</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Renovation Dumpster FAQs" />
      <CTA />
    </>
  )
}
