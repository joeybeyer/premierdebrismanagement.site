import { type Metadata } from 'next'
import Link from 'next/link'
import { Trash2, Check, ArrowRight } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Estate Cleanout Dumpster Rental | Dumpsters for Home & Storage Cleanouts',
  description: 'Rent a dumpster for estate cleanouts, home decluttering, and storage unit clearouts. 20-30 yard containers with same-day delivery available.',
}

const faqs = [
  {
    q: 'What size dumpster do I need for an estate cleanout?',
    a: 'For most estate cleanouts, a 20-yard dumpster handles a 2-3 bedroom home. For larger homes (4+ bedrooms) or homes with significant accumulation, a 30-yard dumpster is recommended. We can help you estimate based on your specific situation.',
  },
  {
    q: 'Can I throw away furniture in an estate cleanout dumpster?',
    a: 'Yes, furniture like sofas, mattresses, tables, chairs, and dressers can all go in the dumpster. We can handle household items, clothing, books, and general clutter. Electronics and appliances are also accepted with some restrictions.',
  },
  {
    q: 'How long does an estate cleanout typically take?',
    a: 'Most estate cleanouts take 2-5 days depending on the size of the home and amount of items. Our standard 7-day rental period accommodates most cleanout projects. Extensions are available if you need more time.',
  },
  {
    q: 'Do you offer dumpster rental for storage unit cleanouts?',
    a: 'Yes, our 10 and 20-yard dumpsters are perfect for storage unit cleanouts. We can deliver to the storage facility (with their permission) or to your home. A 10-yard often works for a single large unit.',
  },
]

export default function EstateCleanoutDumpsterPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Estate Cleanout Dumpster', href: '/estate-cleanout-dumpster/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-14 h-14 bg-amber-100 rounded-xl flex items-center justify-center">
                <Trash2 className="w-7 h-7 text-amber-600" />
              </div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900">
                Estate Cleanout Dumpster
              </h1>
            </div>

            <KeyTakeaways
              items={[
                'Recommended sizes: 20-yard (2-3 bedroom) or 30-yard (4+ bedroom)',
                'Perfect for: estate settlements, downsizing, foreclosure cleanouts',
                'Accepts furniture, household items, clothing, and general debris',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                Clearing out a family home, downsizing, or handling an estate settlement is
                already emotionally challenging without worrying about debris removal.{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides compassionate, reliable dumpster rental service for estate cleanouts
                of all sizes. Our containers can handle decades of accumulated belongings
                efficiently.
              </p>
              <p>
                For most homes, a{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard dumpster
                </Link>{' '}
                provides ample capacity for furniture, household items, and general debris.
                For larger estates or homes with significant accumulation, our{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard dumpster
                </Link>{' '}
                can handle the full cleanout without needing a swap.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>

          {/* Use Cases */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Common Estate Cleanout Situations
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Estate Settlement
                </h3>
                <p className="text-slate-600 text-sm">
                  After a family member passes, there's often a home full of belongings to
                  sort through. Our dumpsters make it easy to clear items that won't be
                  kept or donated.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Downsizing
                </h3>
                <p className="text-slate-600 text-sm">
                  Moving to a smaller home or assisted living? A dumpster helps you quickly
                  clear decades of accumulated items that won't fit in your new space.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Foreclosure Cleanout
                </h3>
                <p className="text-slate-600 text-sm">
                  Banks and property managers trust us to clear abandoned properties quickly.
                  We handle full cleanouts from furniture to yard debris.
                </p>
              </div>
              <div className="bg-slate-50 rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold text-slate-900 mb-3">
                  Hoarding Situation
                </h3>
                <p className="text-slate-600 text-sm">
                  For homes with significant accumulation, our larger dumpsters and swap-out
                  service help tackle even the most challenging cleanout projects.
                </p>
              </div>
            </div>
          </div>

          {/* What Goes In */}
          <div className="mb-12">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              What Can Go in an Estate Cleanout Dumpster
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                'Furniture (sofas, beds, tables)',
                'Mattresses and box springs',
                'Clothing and textiles',
                'Books and papers',
                'Kitchen items and dishes',
                'Small appliances',
                'Yard tools and equipment',
                'Household decorations',
                'General household junk',
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
                href="/renovation-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  Renovation Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For home remodels after cleanout</p>
              </Link>
              <Link
                href="/20-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  20 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">Most popular for estate cleanouts</p>
              </Link>
              <Link
                href="/30-yard-dumpster/"
                className="bg-slate-50 rounded-xl p-6 hover:bg-amber-50 transition-colors group"
              >
                <h3 className="font-semibold text-slate-900 mb-2 flex items-center justify-between">
                  30 Yard Dumpster
                  <ArrowRight className="w-5 h-5 text-slate-400 group-hover:text-amber-500" />
                </h3>
                <p className="text-sm text-slate-600">For larger homes and heavy accumulation</p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <FAQ faqs={faqs} title="Estate Cleanout Dumpster FAQs" />
      <CTA />
    </>
  )
}
