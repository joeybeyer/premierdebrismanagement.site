import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { Schema } from '@/components/seo/Schema'
import { SizeTable } from '@/components/dumpster/SizeTable'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { getCityBySlug, getAllCitySlugs, formatCityState } from '@/content/cities'
import { getCityFAQs } from '@/content/faqs'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema'

interface CityPageProps {
  params: { city: string }
}

export async function generateStaticParams() {
  return getAllCitySlugs().map((city) => ({ city }))
}

export async function generateMetadata({ params }: CityPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  if (!city) return {}

  return {
    title: `Dumpster Rental in ${city.name}, ${city.stateAbbr} | Same-Day Delivery`,
    description: `Rent a dumpster in ${city.name}, ${city.stateAbbr}. 10-40 yard roll-off containers with same-day delivery. Serving ${city.neighborhoods.length}+ ${city.name} neighborhoods. Call for instant pricing.`,
  }
}

export default function CityPage({ params }: CityPageProps) {
  const city = getCityBySlug(params.city)

  if (!city) {
    notFound()
  }

  const cityFAQs = getCityFAQs(city.name)

  return (
    <>
      <Schema data={generateServiceSchema(city.name, city.state)} />
      <Schema data={generateFAQSchema(cityFAQs)} />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: formatCityState(city), href: `/${city.slug}/` }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-amber-500" />
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Dumpster Rental in {city.name}, {city.stateAbbr}
              </h1>
            </div>

            <KeyTakeaways
              items={[
                `Same-day delivery throughout Greater ${city.name}`,
                `Serving ${city.neighborhoods.length}+ ${city.name} neighborhoods`,
                'No hidden fees, transparent pricing from $299-$799',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides reliable{' '}
                <Link href="/dumpster-rental/" className="text-amber-600 hover:text-amber-700">
                  dumpster rental services
                </Link>{' '}
                throughout {city.name}, {city.state} and the surrounding metro area. Whether
                you're a homeowner tackling a renovation project or a contractor managing
                multiple job sites, we have the right size dumpster for your needs with
                same-day delivery available.
              </p>
              <p>
                From a compact{' '}
                <Link href="/10-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  10-yard dumpster
                </Link>{' '}
                for garage cleanouts to a large{' '}
                <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  40-yard container
                </Link>{' '}
                for commercial construction, we serve all of {city.name} with professional,
                on-time service.
              </p>
            </div>

            {city.permitInfo && (
              <div className="bg-blue-50 border-l-4 border-blue-500 rounded-r-lg p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-2">
                  {city.name} Permit Information
                </h3>
                <p className="text-sm text-slate-600">{city.permitInfo}</p>
              </div>
            )}

            {city.localNotes && (
              <div className="bg-slate-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-2">Local Notes</h3>
                <p className="text-sm text-slate-600">{city.localNotes}</p>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Size Table */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Dumpster Sizes Available in {city.name}
            </h2>
            <SizeTable />
          </div>

          {/* Neighborhoods */}
          {city.neighborhoods.length > 0 && (
            <div className="mb-12">
              <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
                {city.name} Neighborhoods We Serve
              </h2>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {city.neighborhoods.map((neighborhood) => (
                  <Link
                    key={neighborhood.slug}
                    href={`/${city.slug}/${neighborhood.slug}/`}
                    className="bg-slate-50 rounded-lg p-4 hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all group"
                  >
                    <div className="font-semibold text-slate-900 group-hover:text-amber-700 flex items-center justify-between">
                      {neighborhood.name}
                      <ArrowRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" />
                    </div>
                    <div className="text-sm text-slate-500">
                      {neighborhood.zipCodes.slice(0, 2).join(', ')}
                      {neighborhood.zipCodes.length > 2 && '...'}
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Services */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Dumpster Rental Services in {city.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: 'Construction Dumpster', href: '/construction-dumpster/', desc: 'For job sites and new builds' },
                { name: 'Roofing Dumpster', href: '/roofing-dumpster/', desc: 'For shingle tear-offs' },
                { name: 'Renovation Dumpster', href: '/renovation-dumpster/', desc: 'For home remodels' },
                { name: 'Estate Cleanout', href: '/estate-cleanout-dumpster/', desc: 'For clearing homes' },
                { name: 'Demolition Dumpster', href: '/demolition-dumpster/', desc: 'For tear-downs' },
              ].map((service) => (
                <Link
                  key={service.href}
                  href={service.href}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
                >
                  <h3 className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
                    {service.name}
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                  </h3>
                  <p className="text-sm text-slate-600">{service.desc}</p>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={cityFAQs} title={`Dumpster Rental FAQs for ${city.name}`} />
      <CTA title={`Get a Dumpster in ${city.name} Today`} />
    </>
  )
}
