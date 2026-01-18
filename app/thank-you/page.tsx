import { type Metadata } from 'next'
import Link from 'next/link'
import { Check } from 'lucide-react'
import { PhoneButton } from '@/components/ui/PhoneButton'

export const metadata: Metadata = {
  title: 'Thank You',
  description: 'Thank you for your dumpster rental request. We will contact you shortly.',
  robots: {
    index: false,
    follow: false,
  },
}

export default function ThankYouPage() {
  return (
    <section className="py-24 bg-white">
      <div className="mx-auto max-w-xl px-4 text-center">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-8">
          <Check className="w-10 h-10 text-green-500" />
        </div>

        <h1 className="font-outfit text-4xl font-bold text-slate-900 mb-4">
          Thank You!
        </h1>

        <p className="text-xl text-slate-600 mb-8">
          We've received your dumpster rental request and will contact you shortly
          with pricing and availability.
        </p>

        <div className="bg-slate-50 rounded-xl p-6 mb-8">
          <h2 className="font-semibold text-slate-900 mb-2">
            Need Immediate Assistance?
          </h2>
          <p className="text-slate-600 mb-4">
            Call us now to speak with a dumpster rental specialist:
          </p>
          <PhoneButton size="lg" />
        </div>

        <div className="text-slate-500">
          <Link href="/" className="text-amber-600 hover:text-amber-700 font-semibold">
            Return to Homepage
          </Link>
        </div>
      </div>
    </section>
  )
}
