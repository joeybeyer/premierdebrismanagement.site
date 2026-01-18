import Link from 'next/link'
import { PhoneButton } from '@/components/ui/PhoneButton'

export default function NotFound() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-xl px-4 text-center">
        <h1 className="font-outfit text-6xl font-bold text-slate-900 mb-4">404</h1>
        <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-slate-600 mb-8">
          Sorry, we couldn't find the page you're looking for. It may have been moved or
          doesn't exist.
        </p>

        <div className="space-y-4">
          <div>
            <Link
              href="/"
              className="inline-block bg-amber-500 text-slate-900 font-bold px-8 py-4 rounded-xl hover:bg-amber-400 transition-colors"
            >
              Return Home
            </Link>
          </div>

          <p className="text-slate-500">or</p>

          <PhoneButton variant="outline" size="lg" />
        </div>

        <div className="mt-12 text-left bg-slate-50 rounded-xl p-6">
          <h3 className="font-semibold text-slate-900 mb-3">Popular Pages</h3>
          <ul className="space-y-2">
            <li>
              <Link href="/dumpster-rental/" className="text-amber-600 hover:text-amber-700">
                Dumpster Rental Services
              </Link>
            </li>
            <li>
              <Link href="/20-yard-dumpster/" className="text-amber-600 hover:text-amber-700">
                20 Yard Dumpster (Most Popular)
              </Link>
            </li>
            <li>
              <Link href="/service-areas/" className="text-amber-600 hover:text-amber-700">
                Service Areas
              </Link>
            </li>
            <li>
              <Link href="/contact/" className="text-amber-600 hover:text-amber-700">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}
