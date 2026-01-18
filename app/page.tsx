import Link from 'next/link'
import { Hero } from '@/components/sections/Hero'
import { SizeComparison } from '@/components/sections/SizeComparison'
import { UseCases } from '@/components/sections/UseCases'
import { ServiceAreas } from '@/components/sections/ServiceAreas'
import { Testimonials } from '@/components/sections/Testimonials'
import { FAQ } from '@/components/sections/FAQ'
import { CTA } from '@/components/sections/CTA'
import { Schema } from '@/components/seo/Schema'
import { generateFAQSchema } from '@/lib/schema'
import { GENERAL_FAQS } from '@/content/faqs'

export default function HomePage() {
  return (
    <>
      <Schema data={generateFAQSchema(GENERAL_FAQS)} />

      <Hero
        title="Dumpster Rental Services"
        subtitle="Professional roll-off dumpster rentals for construction, renovation, and cleanout projects. Same-day delivery available throughout Kern County."
      />

      {/* Intro paragraph with internal links - critical for SEO */}
      <section className="py-12 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto prose-content">
            <p>
              Premier Debris Management provides reliable{' '}
              <Link href="/dumpster-rental/" className="text-amber-600 hover:text-amber-700">
                dumpster rental services
              </Link>{' '}
              for homeowners, contractors, and property managers throughout Bakersfield and Kern County, California.
              Whether you need a compact{' '}
              <Link href="/10-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                10-yard dumpster
              </Link>{' '}
              for a garage cleanout or a large{' '}
              <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                40-yard container
              </Link>{' '}
              for commercial construction, we have the right size for your project.
            </p>
            <p>
              We proudly serve{' '}
              <Link href="/bakersfield/" className="text-amber-600 hover:text-amber-700">
                Bakersfield
              </Link>{' '}
              and the surrounding Kern County area including{' '}
              <Link href="/delano/" className="text-amber-600 hover:text-amber-700">
                Delano
              </Link>,{' '}
              <Link href="/tehachapi/" className="text-amber-600 hover:text-amber-700">
                Tehachapi
              </Link>,{' '}
              <Link href="/shafter/" className="text-amber-600 hover:text-amber-700">
                Shafter
              </Link>, and more with same-day delivery available when you call before noon.
            </p>
          </div>
        </div>
      </section>

      <SizeComparison />
      <UseCases />
      <ServiceAreas />
      <Testimonials />
      <FAQ faqs={GENERAL_FAQS} />
      <CTA />
    </>
  )
}
