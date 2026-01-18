import { type Metadata } from 'next'
import Link from 'next/link'
import { Check, X, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { Schema } from '@/components/seo/Schema'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { getSizeBySlug, formatPrice, getOtherSizes } from '@/content/sizes'
import { SIZE_SPECIFIC_FAQS } from '@/content/faqs'
import { generateProductSchema, generateFAQSchema } from '@/lib/schema'

const size = getSizeBySlug('40-yard-dumpster')!
const otherSizes = getOtherSizes('40')

export const metadata: Metadata = {
  title: '40 Yard Dumpster Rental | Pricing, Dimensions & Uses',
  description: `Rent a 40 yard dumpster for ${formatPrice(size)}. Our largest container for commercial construction, demolition, and industrial cleanup. ${size.dimensions}.`,
}

export default function FortyYardDumpsterPage() {
  return (
    <>
      <Schema data={generateProductSchema({ ...size, price: formatPrice(size) })} />
      <Schema data={generateFAQSchema(SIZE_SPECIFIC_FAQS['40'])} />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: '40 Yard Dumpster', href: '/40-yard-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              40 Yard Dumpster Rental
            </h1>

            <KeyTakeaways
              items={[
                `Holds ${size.pickupLoads} pickup truck loads (approx. ${size.weight})`,
                `Ideal for: commercial construction, full home demolition, industrial cleanup`,
                `Dimensions: ${size.dimensions}`,
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                The 40-yard dumpster is the largest roll-off container offered by{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>
                . At 8 feet tall, this massive container is designed for commercial and
                industrial projects that generate significant volumes of debris. It's the
                preferred choice for{' '}
                <Link href="/demolition-dumpster/" className="text-amber-600 hover:text-amber-700">
                  demolition projects
                </Link>{' '}
                and large-scale{' '}
                <Link href="/construction-dumpster/" className="text-amber-600 hover:text-amber-700">
                  construction sites
                </Link>.
              </p>
              <p>
                Due to its size, the 40-yard dumpster is typically not suitable for
                residential driveways. For home projects, consider our{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard
                </Link>{' '}
                or{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard dumpsters
                </Link>{' '}
                which offer ample capacity while fitting in most driveways.
              </p>
            </div>

            {/* Pricing Card */}
            <div className="bg-slate-50 rounded-xl p-6 mb-12">
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
                <div>
                  <p className="text-slate-500 text-sm">40 Yard Dumpster Rental</p>
                  <p className="text-3xl font-bold text-amber-600">{formatPrice(size)}</p>
                  <p className="text-slate-500 text-sm">Includes {size.rentalPeriod} rental</p>
                </div>
                <PhoneButton size="lg" />
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                <div>
                  <p className="text-slate-500">Dimensions</p>
                  <p className="font-semibold">{size.dimensions}</p>
                </div>
                <div>
                  <p className="text-slate-500">Capacity</p>
                  <p className="font-semibold">{size.capacity}</p>
                </div>
                <div>
                  <p className="text-slate-500">Weight Limit</p>
                  <p className="font-semibold">{size.weight}</p>
                </div>
                <div>
                  <p className="text-slate-500">Rental Period</p>
                  <p className="font-semibold">{size.rentalPeriod}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Best For / Not Ideal For */}
          <div className="grid md:grid-cols-2 gap-8 mb-12">
            <div className="bg-green-50 rounded-xl p-6">
              <h2 className="font-outfit text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <Check className="w-6 h-6 text-green-600" />
                Best For
              </h2>
              <ul className="space-y-3">
                {size.bestFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-red-50 rounded-xl p-6">
              <h2 className="font-outfit text-xl font-bold text-slate-900 mb-4 flex items-center gap-2">
                <X className="w-6 h-6 text-red-600" />
                Not Ideal For
              </h2>
              <ul className="space-y-3">
                {size.notIdealFor.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <X className="w-5 h-5 text-red-500 mt-0.5 flex-shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Other Sizes */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Compare Other Sizes
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {otherSizes.map((s) => (
                <Link
                  key={s.slug}
                  href={`/${s.slug}/`}
                  className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-amber-500 transition-colors group"
                >
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="font-outfit text-xl font-bold text-slate-900">
                      {s.size} Yard
                    </h3>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <p className="text-amber-600 font-bold mb-2">{formatPrice(s)}</p>
                  <p className="text-sm text-slate-500">{s.dimensions}</p>
                  <p className="text-sm text-slate-600 mt-2">
                    Holds {s.pickupLoads} pickup truck loads
                  </p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={SIZE_SPECIFIC_FAQS['40']} title="40 Yard Dumpster FAQs" />
      <CTA />
    </>
  )
}
