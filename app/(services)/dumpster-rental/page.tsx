import { type Metadata } from 'next'
import Link from 'next/link'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { KeyTakeaways } from '@/components/seo/KeyTakeaways'
import { SizeComparison } from '@/components/sections/SizeComparison'
import { UseCases } from '@/components/sections/UseCases'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { GENERAL_FAQS } from '@/content/faqs'

export const metadata: Metadata = {
  title: 'Dumpster Rental Services | Roll-Off Container Rentals',
  description: 'Professional dumpster rental services for construction, renovation, and cleanout projects. 10-40 yard containers with same-day delivery. Transparent pricing from $299.',
}

export default function DumpsterRentalPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Dumpster Rental', href: '/dumpster-rental/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              Dumpster Rental Services
            </h1>

            <KeyTakeaways
              items={[
                'Sizes from 10-40 yards to fit any project',
                'Same-day delivery available in 50+ metros',
                'Transparent pricing from $299-$799 with no hidden fees',
              ]}
            />

            <div className="prose-content mb-8">
              <p>
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  Premier Debris Management
                </Link>{' '}
                provides reliable roll-off dumpster rental services for homeowners,
                contractors, and property managers. Whether you're tackling a weekend
                cleanout or managing a large construction project, we have the right
                size container delivered when you need it.
              </p>
              <p>
                Our dumpster rental service includes delivery, pickup, and a standard
                7-day rental period. Choose from four sizes: a compact{' '}
                <Link href="/10-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  10-yard dumpster
                </Link>{' '}
                for small projects, the popular{' '}
                <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  20-yard container
                </Link>{' '}
                for medium renovations, a spacious{' '}
                <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  30-yard roll-off
                </Link>{' '}
                for large jobs, or our biggest{' '}
                <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                  40-yard dumpster
                </Link>{' '}
                for commercial and demolition projects.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <PhoneButton size="lg" />
            </div>
          </div>
        </div>
      </section>

      <SizeComparison />

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="font-outfit text-3xl font-bold text-slate-900 mb-6">
              How Dumpster Rental Works
            </h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Call for a Quote</h3>
                  <p className="text-slate-600">
                    Tell us about your project and location. We'll recommend the right
                    size and give you an instant price with no hidden fees.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Schedule Delivery</h3>
                  <p className="text-slate-600">
                    Pick your delivery date. Same-day delivery available when you call
                    before noon. We'll place the dumpster exactly where you need it.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">Fill It Up</h3>
                  <p className="text-slate-600">
                    Load your debris at your own pace. Standard rental is 7 days, with
                    extensions available if you need more time.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-amber-500 rounded-full flex items-center justify-center text-white font-bold flex-shrink-0">
                  4
                </div>
                <div>
                  <h3 className="font-semibold text-slate-900 mb-1">We Pick It Up</h3>
                  <p className="text-slate-600">
                    Call us when you're done (or when your rental period ends) and we'll
                    pick up the dumpster and haul away your debris.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <UseCases />
      <FAQ faqs={GENERAL_FAQS} />
      <CTA />
    </>
  )
}
