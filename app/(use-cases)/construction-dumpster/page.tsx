import { type Metadata } from 'next'
import Link from 'next/link'
import { Hammer, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { SizeTable } from '@/components/dumpster/SizeTable'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Construction Dumpster Rental | Roll-Off Containers for Job Sites',
  description: 'Rent construction dumpsters for new builds, remodels, and contractor jobs. 30-40 yard containers available with same-day delivery. Call for instant pricing.',
}

const faqs = [
  {
    q: 'What size dumpster do I need for construction debris?',
    a: 'For most construction projects, a 30 or 40-yard dumpster is recommended. A 30-yard handles large residential projects and medium commercial jobs, while a 40-yard is ideal for major construction sites and demolition. For smaller remodels, a 20-yard may suffice.',
  },
  {
    q: 'Can I put concrete in a construction dumpster?',
    a: 'Yes, concrete and other heavy construction materials like brick, stone, and asphalt can go in our dumpsters. However, due to the weight, you may need a separate "clean load" dumpster for heavy materials, or you\'ll need to stay within weight limits. Contact us to discuss your specific needs.',
  },
  {
    q: 'How long can I keep a construction dumpster?',
    a: 'Our standard rental period is 7 days, which works well for most construction projects. For longer projects, we offer flexible rental extensions. Many contractors keep dumpsters on site for the duration of the project with scheduled pickups and swaps.',
  },
  {
    q: 'Do you offer dumpster swaps for ongoing construction projects?',
    a: 'Yes, we offer swap-out service for ongoing construction projects. When your dumpster is full, call us and we\'ll swap it for an empty one, typically within 24 hours. This keeps your job site clean and productive.',
  },
]

export default function ConstructionDumpsterPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Construction Dumpster', href: '/construction-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Hammer className="w-7 h-7 text-amber-600" />
              </div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Construction Dumpster Rental
              </h1>
            </div>

            <KeyTakeaways
              items={[
                'Recommended sizes: 30-40 yard for most construction projects',
                'Same-day delivery available for urgent job site needs',
                'Swap-out service available for ongoing projects',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides reliable construction dumpster rentals for contractors, builders, and
                construction companies. Our roll-off containers are built to handle the heavy
                debris common on job sites, including lumber, drywall, concrete, roofing
                materials, and mixed construction waste.
              </p>
              <p>
                For new construction and large remodels, we recommend our{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard
                </Link>{' '}
                or{' '}
                <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  40-yard dumpsters
                </Link>
                . These sizes provide maximum capacity to keep your site clean without frequent
                pickups. For smaller renovation projects, a{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard dumpster
                </Link>{' '}
                often works well.
              </p>
            </div>

            <div className="bg-slate-900 text-white rounded-xl p-6 mb-12">
              <h2 className="font-outfit text-xl font-bold mb-4">
                Contractor Accounts Available
              </h2>
              <p className="text-slate-300 mb-4">
                For contractors with ongoing dumpster needs, we offer priority scheduling,
                volume discounts, and flexible billing options.
              </p>
              <PhoneButton variant="primary" size="lg" />
            </div>
          </div>

          {/* What Goes In */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              What Can Go in a Construction Dumpster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Lumber and wood scraps',
                'Drywall and sheetrock',
                'Concrete and masonry',
                'Roofing shingles',
                'Metal and siding',
                'Windows and doors',
                'Flooring materials',
                'Insulation',
                'General construction debris',
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 bg-slate-50 rounded-lg p-4">
                  <Check className="w-5 h-5 text-green-500 flex-shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Size Comparison */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Dumpster Sizes for Construction Projects
            </h2>
            <SizeTable />
          </div>

          {/* Related Services */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Related Services
            </h2>
            <div className="grid md:grid-cols-3 gap-4">
              <Link
                href="/roofing-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Roofing Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For shingle tear-offs and roof replacements</p>
              </Link>
              <Link
                href="/renovation-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Renovation Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For home remodels and updates</p>
              </Link>
              <Link
                href="/demolition-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Demolition Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For tear-downs and major demo work</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Construction Dumpster FAQs" />
      <CTA />
    </>
  )
}
