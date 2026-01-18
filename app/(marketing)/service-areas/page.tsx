import { type Metadata } from 'next'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTA } from '@/components/sections/CTA'
import { CITIES, getCitiesByTier } from '@/content/cities'

export const metadata: Metadata = {
  title: 'Service Areas | Dumpster Rental Locations',
  description: 'Premier Debris Management serves 50+ metros across the US. Find dumpster rental service in your area. Same-day delivery available.',
}

export default function ServiceAreasPage() {
  const tier1 = getCitiesByTier(1)
  const tier2 = getCitiesByTier(2)

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Service Areas', href: '/service-areas/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mb-12">
            <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Dumpster Rental Service Areas
            </h1>
            <p className="text-xl text-slate-600">
              <Link href="/" className="text-amber-600 hover:text-amber-700">
                Premier Debris Management
              </Link>{' '}
              provides dumpster rental services across major metropolitan areas in the
              United States. Select your city below to learn about local service,
              pricing, and availability.
            </p>
          </div>

          {/* Primary Markets */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-amber-500" />
              Primary Service Areas
            </h2>
            <p className="text-slate-600 mb-6">
              Same-day delivery guaranteed in these major metros
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier1.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="bg-white border-2 border-slate-200 rounded-xl p-6 hover:border-amber-500 transition-all group"
                >
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-outfit text-xl font-bold text-slate-900 group-hover:text-amber-700">
                        {city.name}, {city.stateAbbr}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {city.neighborhoods.length} neighborhoods served
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {city.neighborhoods.slice(0, 3).map((n) => (
                      <span
                        key={n.slug}
                        className="text-xs bg-slate-100 px-2 py-1 rounded text-slate-600"
                      >
                        {n.name}
                      </span>
                    ))}
                    {city.neighborhoods.length > 3 && (
                      <span className="text-xs bg-amber-100 px-2 py-1 rounded text-amber-700">
                        +{city.neighborhoods.length - 3} more
                      </span>
                    )}
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* Secondary Markets */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-2 flex items-center gap-2">
              <MapPin className="w-6 h-6 text-slate-400" />
              Additional Service Areas
            </h2>
            <p className="text-slate-600 mb-6">
              Next-day delivery available in these growing markets
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {tier2.map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
                >
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="font-outfit text-lg font-bold text-slate-900 group-hover:text-amber-700">
                        {city.name}, {city.stateAbbr}
                      </h3>
                      <p className="text-sm text-slate-500">
                        {city.neighborhoods.length} neighborhoods served
                      </p>
                    </div>
                    <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500 transition-colors" />
                  </div>
                </Link>
              ))}
            </div>
          </div>

          {/* All Cities List */}
          <div className="bg-slate-50 rounded-xl p-8">
            <h2 className="font-outfit text-xl font-bold text-slate-900 mb-6">
              All Service Areas A-Z
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-4">
              {CITIES.sort((a, b) => a.name.localeCompare(b.name)).map((city) => (
                <Link
                  key={city.slug}
                  href={`/${city.slug}/`}
                  className="text-slate-600 hover:text-amber-600"
                >
                  {city.name}, {city.stateAbbr}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <CTA title="Don't See Your Area?" subtitle="Call us - we may still be able to help or refer you to a trusted local provider." />
    </>
  )
}
