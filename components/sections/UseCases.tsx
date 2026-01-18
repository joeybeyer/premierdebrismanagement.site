import { type FC } from 'react'
import Link from 'next/link'
import { Hammer, Home, Trash2, Building2, TreePine, ArrowRight } from 'lucide-react'

const useCases = [
  {
    icon: Hammer,
    title: 'Construction Dumpster',
    description: 'Perfect for new builds, remodels, and contractor jobs. Handles lumber, drywall, concrete, and more.',
    href: '/construction-dumpster/',
    sizes: '30-40 yard',
  },
  {
    icon: Home,
    title: 'Roofing Dumpster',
    description: 'Ideal for shingle tear-offs and roof replacements. Can handle heavy roofing materials safely.',
    href: '/roofing-dumpster/',
    sizes: '20-30 yard',
  },
  {
    icon: Building2,
    title: 'Renovation Dumpster',
    description: 'From bathroom updates to whole-house remodels. Handles mixed debris from renovation projects.',
    href: '/renovation-dumpster/',
    sizes: '20-30 yard',
  },
  {
    icon: Trash2,
    title: 'Estate Cleanout',
    description: 'Clear out homes, storage units, or garages. Great for downsizing or estate settlements.',
    href: '/estate-cleanout-dumpster/',
    sizes: '20-30 yard',
  },
  {
    icon: TreePine,
    title: 'Demolition Dumpster',
    description: 'For tear-downs and major demolition projects. Our largest containers for big jobs.',
    href: '/demolition-dumpster/',
    sizes: '30-40 yard',
  },
]

export const UseCases: FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            Dumpster Rentals for Every Project
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Whether you're a homeowner tackling a weekend project or a contractor managing a job site, we have the right dumpster for you.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {useCases.map((useCase) => (
            <Link
              key={useCase.title}
              href={useCase.href}
              className="group bg-white rounded-xl p-6 shadow-sm border border-slate-200 hover:border-amber-500 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4 group-hover:bg-amber-500 transition-colors">
                <useCase.icon className="w-6 h-6 text-amber-600 group-hover:text-white transition-colors" />
              </div>
              <h3 className="font-outfit text-xl font-bold text-slate-900 mb-2">
                {useCase.title}
              </h3>
              <p className="text-slate-600 mb-4">{useCase.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-sm text-slate-500">
                  Recommended: {useCase.sizes}
                </span>
                <ArrowRight className="w-5 h-5 text-amber-600 group-hover:translate-x-1 transition-transform" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
