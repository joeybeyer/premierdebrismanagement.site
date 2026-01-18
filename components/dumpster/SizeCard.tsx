import { type FC } from 'react'
import Link from 'next/link'
import { Check, ArrowRight } from 'lucide-react'
import { formatPrice } from '@/content/sizes'
import type { DumpsterSize } from '@/types'

interface SizeCardProps {
  size: DumpsterSize
  featured?: boolean
}

export const SizeCard: FC<SizeCardProps> = ({ size, featured = false }) => {
  return (
    <div
      className={`bg-white rounded-xl p-6 border-2 transition-all ${
        featured
          ? 'border-amber-500 shadow-lg'
          : 'border-slate-200 hover:border-amber-500'
      }`}
    >
      {featured && (
        <div className="bg-amber-500 text-slate-900 text-xs font-bold px-3 py-1 rounded-full inline-block mb-4">
          Most Popular
        </div>
      )}
      <div className="flex justify-between items-start mb-4">
        <h3 className="font-outfit text-2xl font-bold text-slate-900">
          {size.size} Yard
        </h3>
        <span className="text-amber-600 font-bold text-lg">
          {formatPrice(size)}
        </span>
      </div>
      <p className="text-slate-500 text-sm mb-2">{size.dimensions}</p>
      <p className="text-slate-600 mb-4">
        Holds {size.pickupLoads} pickup truck loads ({size.weight})
      </p>
      <div className="mb-6">
        <p className="font-semibold text-slate-900 mb-2">Best For:</p>
        <ul className="space-y-2">
          {size.bestFor.slice(0, 4).map((use) => (
            <li key={use} className="flex items-center gap-2 text-sm text-slate-600">
              <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
              {use}
            </li>
          ))}
        </ul>
      </div>
      <Link
        href={`/${size.slug}/`}
        className="block text-center bg-amber-500 text-slate-900 font-bold py-3 rounded-lg hover:bg-amber-400 transition-colors"
      >
        View Details
        <ArrowRight className="w-4 h-4 inline ml-2" />
      </Link>
    </div>
  )
}
