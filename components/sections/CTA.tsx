import { type FC } from 'react'
import { Phone, Clock, Truck } from 'lucide-react'
import { PhoneButton } from '@/components/ui/PhoneButton'

interface CTAProps {
  title?: string
  subtitle?: string
}

export const CTA: FC<CTAProps> = ({
  title = 'Ready to Get Started?',
  subtitle = 'Call now for instant pricing and same-day delivery availability.',
}) => {
  return (
    <section className="py-16 lg:py-24 bg-gradient-to-br from-amber-500 to-orange-500">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          <p className="text-xl text-slate-800 mb-8 max-w-2xl mx-auto">
            {subtitle}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-12">
            <PhoneButton
              variant="secondary"
              size="lg"
              className="w-full sm:w-auto"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-3xl mx-auto">
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Clock className="w-6 h-6 text-slate-900" />
              </div>
              <div className="font-semibold text-slate-900">Same-Day Delivery</div>
              <div className="text-sm text-slate-700">When you call before noon</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Phone className="w-6 h-6 text-slate-900" />
              </div>
              <div className="font-semibold text-slate-900">Instant Quotes</div>
              <div className="text-sm text-slate-700">No waiting, no hassle</div>
            </div>
            <div className="flex flex-col items-center">
              <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mb-3">
                <Truck className="w-6 h-6 text-slate-900" />
              </div>
              <div className="font-semibold text-slate-900">Flexible Pickup</div>
              <div className="text-sm text-slate-700">We work with your schedule</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
