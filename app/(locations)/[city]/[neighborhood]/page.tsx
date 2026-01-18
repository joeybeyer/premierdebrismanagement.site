import { type Metadata } from 'next'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { Schema } from '@/components/seo/Schema'
import { SizeTable } from '@/components/dumpster/SizeTable'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'
import {
  getCityBySlug,
  getNeighborhoodBySlug,
  getAllNeighborhoodParams,
  formatCityState,
} from '@/content/cities'
import { generateServiceSchema, generateFAQSchema } from '@/lib/schema'

interface NeighborhoodPageProps {
  params: { city: string; neighborhood: string }
}

export async function generateStaticParams() {
  return getAllNeighborhoodParams()
}

export async function generateMetadata({
  params,
}: NeighborhoodPageProps): Promise<Metadata> {
  const city = getCityBySlug(params.city)
  const neighborhood = getNeighborhoodBySlug(params.city, params.neighborhood)

  if (!city || !neighborhood) return {}

  return {
    title: `Dumpster Rental in ${neighborhood.name}, ${city.name} | Local Service`,
    description: `Rent a dumpster in ${neighborhood.name}, ${city.name}. Serving zip codes ${neighborhood.zipCodes.join(', ')}. Same-day delivery available. Call for instant pricing.`,
  }
}

export default function NeighborhoodPage({ params }: NeighborhoodPageProps) {
  const city = getCityBySlug(params.city)
  const neighborhood = getNeighborhoodBySlug(params.city, params.neighborhood)

  if (!city || !neighborhood) {
    notFound()
  }

  // Get neighboring areas for cross-links
  const neighboringAreas = city.neighborhoods
    .filter((n) => n.slug !== neighborhood.slug)
    .slice(0, 3)

  const faqs = [
    {
      q: `How much does dumpster rental cost in ${neighborhood.name}?`,
      a: `Dumpster rental prices in ${neighborhood.name} range from $299 for a 10-yard container to $799 for a 40-yard dumpster. Prices may vary based on the specific location, rental duration, and debris type. Contact us for an exact quote for your ${neighborhood.name} address.`,
    },
    {
      q: `Do you offer same-day delivery to ${neighborhood.name}?`,
      a: `Yes, we offer same-day dumpster delivery to ${neighborhood.name} and throughout ${city.name} when you call before noon. Next-day delivery is guaranteed for all orders in the ${neighborhood.zipCodes[0]} area.`,
    },
    {
      q: `Do I need a permit for a dumpster in ${neighborhood.name}?`,
      a: `If placing the dumpster on your private property (driveway) in ${neighborhood.name}, typically no permit is required. For street placement, you may need a permit from ${city.name} public works. ${city.permitInfo || 'Contact us for guidance on local requirements.'}`,
    },
    {
      q: `What zip codes do you serve in ${neighborhood.name}?`,
      a: `We serve all of ${neighborhood.name} including zip codes ${neighborhood.zipCodes.join(', ')}. We also serve neighboring areas like ${neighboringAreas.map((n) => n.name).join(', ')}.`,
    },
  ]

  return (
    <>
      <Schema data={generateServiceSchema(neighborhood.name, city.state)} />
      <Schema data={generateFAQSchema(faqs)} />

      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs
            items={[
              { name: formatCityState(city), href: `/${city.slug}/` },
              { name: neighborhood.name, href: `/${city.slug}/${neighborhood.slug}/` },
            ]}
          />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="w-8 h-8 text-amber-500" />
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Dumpster Rental in {neighborhood.name}
              </h1>
            </div>

            <KeyTakeaways
              items={[
                `Same-day delivery available in ${neighborhood.name}`,
                `Serving zip codes: ${neighborhood.zipCodes.join(', ')}`,
                'Transparent pricing with no hidden fees',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                Looking for reliable dumpster rental in {neighborhood.name}?{' '}
                <Link href={`/${city.slug}/`} className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management serves all of {city.name}
                </Link>
                , including {neighborhood.name} and surrounding neighborhoods. We provide
                fast, professional service with{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  dumpster rentals
                </Link>{' '}
                ranging from 10 to 40 yards.
              </p>
              <p>
                Whether you're renovating a home near{' '}
                {neighborhood.landmarks?.[0] || neighborhood.name} or managing a construction
                project in the {neighborhood.zipCodes[0]} area, we have the right size
                container for your needs. Our{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard dumpsters
                </Link>{' '}
                are popular in {neighborhood.name} for home renovations and roofing projects.
              </p>
            </div>

            {/* Zip Codes */}
            <div className="bg-slate-50 rounded-xl p-6 mb-8">
              <h3 className="font-semibold text-slate-900 mb-3">
                Zip Codes Served in {neighborhood.name}
              </h3>
              <div className="flex flex-wrap gap-2">
                {neighborhood.zipCodes.map((zip) => (
                  <span
                    key={zip}
                    className="bg-white px-3 py-1 rounded-full text-sm font-medium text-slate-700 border"
                  >
                    {zip}
                  </span>
                ))}
              </div>
            </div>

            {/* Landmarks */}
            {neighborhood.landmarks && neighborhood.landmarks.length > 0 && (
              <div className="bg-amber-50 rounded-xl p-6 mb-8">
                <h3 className="font-semibold text-slate-900 mb-3">
                  Local Landmarks Near Our Service Area
                </h3>
                <ul className="grid grid-cols-2 gap-2">
                  {neighborhood.landmarks.map((landmark) => (
                    <li key={landmark} className="text-sm text-slate-600">
                      {landmark}
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Size Table */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Dumpster Sizes Available in {neighborhood.name}
            </h2>
            <SizeTable />
          </div>

          {/* Neighboring Areas */}
          {neighboringAreas.length > 0 && (
            <div className="mb-12">
              <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
                Nearby Areas We Serve
              </h2>
              <div className="grid md:grid-cols-3 gap-4">
                {neighboringAreas.map((area) => (
                  <Link
                    key={area.slug}
                    href={`/${city.slug}/${area.slug}/`}
                    className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
                  >
                    <h3 className="font-semibold text-slate-900 mb-1 flex items-center justify-between">
                      {area.name}
                      <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                    </h3>
                    <p className="text-sm text-slate-500">
                      {area.zipCodes.slice(0, 2).join(', ')}
                    </p>
                  </Link>
                ))}
              </div>
              <div className="mt-4">
                <Link
                  href={`/${city.slug}/`}
                  className="text-amber-600 hover:text-amber-700 font-semibold inline-flex items-center gap-1"
                >
                  View all {city.name} neighborhoods
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          )}

          {/* Services */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Popular Services in {neighborhood.name}
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                { name: '20 Yard Dumpster', href: '/20-yard-dumpster/', desc: 'Most popular for home projects' },
                { name: 'Roofing Dumpster', href: '/roofing-dumpster/', desc: 'For shingle tear-offs' },
                { name: 'Renovation Dumpster', href: '/renovation-dumpster/', desc: 'For home remodels' },
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

      <FAQ faqs={faqs} title={`Dumpster Rental FAQs for ${neighborhood.name}`} />
      <CTA title={`Get a Dumpster in ${neighborhood.name} Today`} />
    </>
  )
}
