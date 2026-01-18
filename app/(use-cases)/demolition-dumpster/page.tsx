import { type Metadata } from 'next'
import Link from 'next/link'
import { TreePine, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Demolition Dumpster Rental | Roll-Off Containers for Demo Projects',
  description: 'Rent a demolition dumpster for tear-downs and major demo work. 30-40 yard containers built for heavy debris. Same-day delivery available.',
}

const faqs = [
  {
    q: 'What size dumpster do I need for demolition?',
    a: 'For most demolition projects, a 30 or 40-yard dumpster is recommended. A 30-yard works well for partial demolitions and garage/shed tear-downs. For full home demolitions or commercial demo, a 40-yard (or multiple containers) is typically needed.',
  },
  {
    q: 'Can I put concrete and brick in a demolition dumpster?',
    a: 'Yes, but heavy materials like concrete, brick, and stone have weight limits. For large amounts of heavy debris, we recommend a separate "clean load" dumpster for concrete/masonry to avoid overage charges. Contact us to discuss your project.',
  },
  {
    q: 'Do you offer multiple dumpsters for large demolition projects?',
    a: 'Yes, for large demolition projects we can provide multiple dumpsters with scheduled swaps. Many demo contractors keep 2-3 dumpsters on site - one for mixed debris and one or more for heavy materials like concrete.',
  },
  {
    q: 'What permits do I need for demolition debris removal?',
    a: 'Dumpster permits vary by location. If placed on your property (driveway), typically no permit is needed. Street placement may require a permit. The demolition itself requires separate permits from your local building department.',
  },
]

export default function DemolitionDumpsterPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Demolition Dumpster', href: '/demolition-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <TreePine className="w-7 h-7 text-amber-600" />
              </div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Demolition Dumpster Rental
              </h1>
            </div>

            <KeyTakeaways
              items={[
                'Recommended sizes: 30-40 yard for most demolition projects',
                'Heavy-duty containers built for concrete, brick, and lumber',
                'Multiple dumpster service available for large demo jobs',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                Demolition projects generate massive amounts of heavy debris that require
                serious container capacity.{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides heavy-duty roll-off dumpsters built to handle the demands of
                tear-downs, structural demolitions, and major renovation projects.
              </p>
              <p>
                For garage or shed demolitions and partial home tear-downs, a{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard dumpster
                </Link>{' '}
                typically provides adequate capacity. For full home demolitions or commercial
                projects, our{' '}
                <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  40-yard container
                </Link>{' '}
                offers maximum capacity, or we can arrange multiple dumpsters with scheduled swaps.
              </p>
            </div>

            <div className="bg-orange-50 border-l-4 border-orange-500 rounded-r-lg p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-2">Heavy Material Note</h3>
              <p className="text-sm text-slate-600">
                Concrete, brick, stone, and dirt are extremely heavy. For best pricing, we
                recommend separating heavy materials into a dedicated "clean load" dumpster.
                Contact us to discuss your demolition project.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Demolition Types */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Demolition Project Types
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Residential Demolition
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Full home tear-down</li>
                  <li>Garage or shed demolition</li>
                  <li>Pool removal</li>
                  <li>Deck and patio demolition</li>
                </ul>
                <p className="mt-3 text-amber-600 font-semibold">30-40 yard recommended</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Commercial Demolition
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Building tear-down</li>
                  <li>Interior gut-out</li>
                  <li>Warehouse clearance</li>
                  <li>Strip mall demolition</li>
                </ul>
                <p className="mt-3 text-amber-600 font-semibold">Multiple 40-yard containers</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Concrete & Masonry
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Driveway removal</li>
                  <li>Foundation demolition</li>
                  <li>Retaining wall removal</li>
                  <li>Concrete slab breakup</li>
                </ul>
                <p className="mt-3 text-amber-600 font-semibold">Dedicated heavy load dumpster</p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Interior Demo
                </h3>
                <ul className="space-y-2 text-sm text-slate-600">
                  <li>Gut renovation</li>
                  <li>Wall removal</li>
                  <li>Ceiling tear-out</li>
                  <li>Floor removal</li>
                </ul>
                <p className="mt-3 text-amber-600 font-semibold">20-30 yard typically sufficient</p>
              </div>
            </div>
          </div>

          {/* What Goes In */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              What Can Go in a Demolition Dumpster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Lumber and framing',
                'Drywall and plaster',
                'Concrete and brick',
                'Roofing materials',
                'Siding and trim',
                'Windows and doors',
                'Metal and rebar',
                'Flooring materials',
                'General demo debris',
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
                <p className="text-sm text-slate-600">For rebuilding after demo</p>
              </Link>
              <Link
                href="/40-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  40 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">Maximum capacity for large demos</p>
              </Link>
              <Link
                href="/30-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  30 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For garage and shed demo</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Demolition Dumpster FAQs" />
      <CTA />
    </>
  )
}
