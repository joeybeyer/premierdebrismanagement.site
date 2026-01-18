import { type FC } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { DUMPSTER_SIZES, formatPrice } from '@/content/sizes'

export const SizeComparison: FC = () => {
  return (
    <section id="sizes" className="py-16 lg:py-24 bg-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dumpster Sizes & Pricing
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Choose the right dumpster size for your project. All rentals include delivery, pickup, and 7 days of rental time.
          </p>
        </div>

        {/* Size Comparison Table - Critical for BERT */}
        <div className="overflow-x-auto mb-12">
          <table className="w-full border-collapse min-w-[800px]">
            <thead>
              <tr className="bg-slate-900 text-white">
                <th className="p-4 text-left font-outfit font-semibold">Size</th>
                <th className="p-4 text-left font-outfit font-semibold">Dimensions</th>
                <th className="p-4 text-left font-outfit font-semibold">Capacity</th>
                <th className="p-4 text-left font-outfit font-semibold">Best For</th>
                <th className="p-4 text-left font-outfit font-semibold">Price</th>
                <th className="p-4 text-center font-outfit font-semibold">Details</th>
              </tr>
            </thead>
            <tbody>
              {DUMPSTER_SIZES.map((size, i) => (
                <tr
                  key={size.size}
                  className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
                >
                  <td className="p-4 font-bold text-lg text-slate-900">
                    {size.size} Yard
                  </td>
                  <td className="p-4 text-slate-600">{size.dimensions}</td>
                  <td className="p-4 text-slate-600">
                    {size.pickupLoads} pickup truck loads
                  </td>
                  <td className="p-4">
                    <ul className="space-y-1">
                      {size.bestFor.slice(0, 2).map((use) => (
                        <li key={use} className="flex items-center gap-2 text-sm text-slate-600">
                          <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                          {use}
                        </li>
                      ))}
                    </ul>
                  </td>
                  <td className="p-4">
                    <span className="font-bold text-amber-600 text-lg">
                      {formatPrice(size)}
                    </span>
                  </td>
                  <td className="p-4 text-center">
                    <Link
                      href={`/${size.slug}/`}
                      className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold"
                    >
                      Learn More
                      <ArrowRight className="w-4 h-4" />
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Size Cards for Mobile */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:hidden">
          {DUMPSTER_SIZES.map((size) => (
            <div
              key={size.size}
              className="bg-white rounded-xl border-2 border-slate-200 p-6 hover:border-amber-500 transition-colors"
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-outfit text-2xl font-bold text-slate-900">
                  {size.size} Yard
                </h3>
                <span className="text-amber-600 font-bold text-lg">
                  {formatPrice(size)}
                </span>
              </div>
              <p className="text-slate-500 text-sm mb-3">{size.dimensions}</p>
              <p className="text-slate-600 mb-4">
                Holds {size.pickupLoads} pickup truck loads
              </p>
              <ul className="space-y-2 mb-6">
                {size.bestFor.slice(0, 3).map((use) => (
                  <li key={use} className="flex items-center gap-2 text-sm text-slate-600">
                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                    {use}
                  </li>
                ))}
              </ul>
              <Link
                href={`/${size.slug}/`}
                className="block text-center bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors"
              >
                View Details
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
