import { type Metadata } from 'next'
import Link from 'next/link'
import { Home, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Roofing Dumpster Rental | Dumpsters for Shingle & Roof Replacement',
  description: 'Rent a dumpster for your roofing project. 20-30 yard containers perfect for shingle tear-offs and roof replacements. Same-day delivery available.',
}

const faqs = [
  {
    q: 'What size dumpster do I need for a roofing project?',
    a: 'For most residential roofing projects, a 20-yard dumpster handles homes up to 2,500 sq ft (25 roofing squares). For larger homes or when removing multiple layers of shingles, a 30-yard dumpster is recommended. Contact us with your roof size for a specific recommendation.',
  },
  {
    q: 'How many squares of shingles fit in a 20-yard dumpster?',
    a: 'A 20-yard dumpster typically holds 25-30 squares of standard asphalt shingles (one layer removal). If you\'re removing multiple layers or have a larger roof, consider upgrading to a 30-yard dumpster.',
  },
  {
    q: 'Can I throw away old roof decking in the dumpster?',
    a: 'Yes, plywood and OSB roof decking can go in your roofing dumpster along with shingles, underlayment, flashing, and other roofing materials. Just be mindful of weight limits as wet wood can be heavy.',
  },
  {
    q: 'Do you deliver dumpsters directly to roofing contractors?',
    a: 'Yes, we work with many roofing contractors and offer job site delivery with flexible scheduling. We can time delivery to arrive just before your tear-off begins and pick up as soon as you\'re done.',
  },
]

export default function RoofingDumpsterPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Roofing Dumpster', href: '/roofing-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Home className="w-7 h-7 text-amber-600" />
              </div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Roofing Dumpster Rental
              </h1>
            </div>

            <KeyTakeaways
              items={[
                'Recommended sizes: 20-yard (up to 25 squares) or 30-yard (larger roofs)',
                '20-yard holds approximately 25-30 squares of shingles',
                'Same-day delivery for urgent roofing tear-offs',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                When you're replacing a roof, you need a dumpster that can handle heavy roofing
                materials and arrive on time.{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides reliable roofing dumpster rentals for homeowners and professional
                roofing contractors. Our dumpsters are designed for the heavy weight of asphalt
                shingles, underlayment, and roofing debris.
              </p>
              <p>
                For most residential roofing projects, a{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard dumpster
                </Link>{' '}
                provides the perfect balance of capacity and footprint. For larger homes or
                multi-layer tear-offs, our{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard dumpster
                </Link>{' '}
                offers extra capacity without taking up too much space.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Size Guide */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Roofing Dumpster Size Guide
            </h2>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="bg-slate-900 text-white">
                    <th className="p-4 text-left">Roof Size</th>
                    <th className="p-4 text-left">Layers</th>
                    <th className="p-4 text-left">Recommended Dumpster</th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white">
                    <td className="p-4 border-b">Up to 1,500 sq ft</td>
                    <td className="p-4 border-b">Single layer</td>
                    <td className="p-4 border-b font-semibold text-amber-600">
                      <Link href="/20-yard-dumpster/">20 Yard</Link>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border-b">1,500 - 2,500 sq ft</td>
                    <td className="p-4 border-b">Single layer</td>
                    <td className="p-4 border-b font-semibold text-amber-600">
                      <Link href="/20-yard-dumpster/">20 Yard</Link>
                    </td>
                  </tr>
                  <tr className="bg-white">
                    <td className="p-4 border-b">Up to 2,000 sq ft</td>
                    <td className="p-4 border-b">Multiple layers</td>
                    <td className="p-4 border-b font-semibold text-amber-600">
                      <Link href="/30-yard-dumpster/">30 Yard</Link>
                    </td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="p-4 border-b">2,500+ sq ft</td>
                    <td className="p-4 border-b">Any</td>
                    <td className="p-4 border-b font-semibold text-amber-600">
                      <Link href="/30-yard-dumpster/">30 Yard</Link>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* What Goes In */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              What Can Go in a Roofing Dumpster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Asphalt shingles',
                'Wood shingles and shakes',
                'Roof felt and underlayment',
                'Flashing and drip edge',
                'Plywood and OSB decking',
                'Gutters and downspouts',
                'Roofing nails',
                'Ridge vents',
                'Old skylights',
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
                href="/20-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  20 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">Most popular for roofing projects</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Roofing Dumpster FAQs" />
      <CTA />
    </>
  )
}
