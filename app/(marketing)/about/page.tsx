import { type Metadata } from 'next'
import Link from 'next/link'
import { Shield, Clock, Truck, Users } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { CTA } from '@/components/sections/CTA'

export const metadata: Metadata = {
  title: 'About Us | Premier Debris Management',
  description: 'Learn about Premier Debris Management - your trusted partner for dumpster rental services. Professional, reliable service across 50+ metros.',
}

export default function AboutPage() {
  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'About Us', href: '/about/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
              About Premier Debris Management
            </h1>

            <div className="prose-content">
              <p className="text-xl text-slate-600 mb-8">
                Premier Debris Management is your trusted partner for professional{' '}
                <Link href="/" className="text-amber-600 hover:text-amber-700">
                  dumpster rental services
                </Link>
                . We connect homeowners, contractors, and property managers with reliable
                roll-off container solutions across the United States.
              </p>

              <h2>Our Mission</h2>
              <p>
                We believe waste removal shouldn't be complicated. Our mission is to provide
                straightforward, reliable dumpster rental services with transparent pricing,
                on-time delivery, and exceptional customer service. When you call Premier
                Debris Management, you get a real person who understands your project needs.
              </p>

              <h2>What Sets Us Apart</h2>
              <p>
                In an industry often plagued by hidden fees and unreliable service, we've
                built our reputation on doing things differently. Our pricing is transparent,
                our delivery windows are honored, and our team is responsive when you need help.
              </p>
            </div>
          </div>

          {/* Values */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            <div className="bg-slate-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">
                Transparent Pricing
              </h3>
              <p className="text-slate-600 text-sm">
                No hidden fees or surprise charges. The price we quote is the price you pay.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">
                Same-Day Delivery
              </h3>
              <p className="text-slate-600 text-sm">
                Need it today? Call before noon for same-day delivery in most service areas.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Truck className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">
                Reliable Service
              </h3>
              <p className="text-slate-600 text-sm">
                We show up when we say we will. Your time matters, and we respect it.
              </p>
            </div>

            <div className="bg-slate-50 rounded-xl p-6">
              <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-outfit text-lg font-bold text-slate-900 mb-2">
                Real Support
              </h3>
              <p className="text-slate-600 text-sm">
                Call and reach a real person who can help. No phone trees or endless holds.
              </p>
            </div>
          </div>

          {/* Services Summary */}
          <div className="mt-16">
            <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
              Our Services
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Dumpster Sizes</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>
                    <Link href="/10-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                      10 Yard Dumpster
                    </Link>{' '}
                    - Small cleanouts
                  </li>
                  <li>
                    <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                      20 Yard Dumpster
                    </Link>{' '}
                    - Medium projects
                  </li>
                  <li>
                    <Link href="/30-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                      30 Yard Dumpster
                    </Link>{' '}
                    - Large renovations
                  </li>
                  <li>
                    <Link href="/40-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                      40 Yard Dumpster
                    </Link>{' '}
                    - Commercial/Demo
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="font-semibold text-slate-900 mb-3">Project Types</h3>
                <ul className="space-y-2 text-slate-600">
                  <li>
                    <Link href="/construction-dumpster/" className="text-amber-600 hover:text-amber-700">
                      Construction
                    </Link>
                  </li>
                  <li>
                    <Link href="/roofing-dumpster/" className="text-amber-600 hover:text-amber-700">
                      Roofing
                    </Link>
                  </li>
                  <li>
                    <Link href="/renovation-dumpster/" className="text-amber-600 hover:text-amber-700">
                      Renovation
                    </Link>
                  </li>
                  <li>
                    <Link href="/estate-cleanout-dumpster/" className="text-amber-600 hover:text-amber-700">
                      Estate Cleanouts
                    </Link>
                  </li>
                  <li>
                    <Link href="/demolition-dumpster/" className="text-amber-600 hover:text-amber-700">
                      Demolition
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CTA />
    </>
  )
}
