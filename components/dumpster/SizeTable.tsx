import { type FC } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { DUMPSTER_SIZES, formatPrice } from '@/content/sizes'

export const SizeTable: FC = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse min-w-[700px]">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="p-4 text-left font-outfit font-semibold">Size</th>
            <th className="p-4 text-left font-outfit font-semibold">Dimensions</th>
            <th className="p-4 text-left font-outfit font-semibold">Capacity</th>
            <th className="p-4 text-left font-outfit font-semibold">Best For</th>
            <th className="p-4 text-left font-outfit font-semibold">Price</th>
            <th className="p-4"></th>
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
                {size.pickupLoads} pickup loads
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
              <td className="p-4">
                <Link
                  href={`/${size.slug}/`}
                  className="inline-flex items-center gap-1 text-amber-600 hover:text-amber-700 font-semibold whitespace-nowrap"
                >
                  Details
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
