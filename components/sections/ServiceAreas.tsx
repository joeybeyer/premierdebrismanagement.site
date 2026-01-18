import { type FC } from 'react'
import Link from 'next/link'
import { MapPin, ArrowRight } from 'lucide-react'
import { CITIES, getCitiesByTier } from '@/content/cities'

export const ServiceAreas: FC = () => {
  const tier1Cities = getCitiesByTier(1)
  const tier2Cities = getCitiesByTier(2)

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dumpster Rental Service Areas
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We provide dumpster rental services across major metropolitan areas. Same-day delivery available in most locations.
          </p>
        </div>

        {/* Primary Markets */}
        <div className="mb-12">
          <h3 className="font-outfit text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-amber-500" />
            Primary Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tier1Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/`}
                className="group bg-slate-50 rounded-lg p-4 hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all"
              >
                <div className="font-semibold text-slate-900 group-hover:text-amber-700">
                  {city.name}
                </div>
                <div className="text-sm text-slate-500">{city.stateAbbr}</div>
              </Link>
            ))}
          </div>
        </div>

        {/* Secondary Markets */}
        <div>
          <h3 className="font-outfit text-xl font-semibold text-slate-900 mb-6 flex items-center gap-2">
            <MapPin className="w-5 h-5 text-slate-400" />
            Additional Service Areas
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {tier2Cities.map((city) => (
              <Link
                key={city.slug}
                href={`/${city.slug}/`}
                className="group bg-slate-50 rounded-lg p-4 hover:bg-amber-50 hover:border-amber-500 border-2 border-transparent transition-all"
              >
                <div className="font-semibold text-slate-900 group-hover:text-amber-700">
                  {city.name}
                </div>
                <div className="text-sm text-slate-500">{city.stateAbbr}</div>
              </Link>
            ))}
          </div>
        </div>

        <div className="mt-8 text-center">
          <Link
            href="/service-areas/"
            className="inline-flex items-center gap-2 text-amber-600 hover:text-amber-700 font-semibold"
          >
            View All Service Areas
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  )
}
