import { type FC } from 'react'
import { Check, Clock, Shield } from 'lucide-react'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { Button } from '@/components/ui/Button'
import Link from 'next/link'

interface HeroProps {
  title: string
  subtitle?: string
  showKeyTakeaways?: boolean
}

export const Hero: FC<HeroProps> = ({
  title,
  subtitle,
  showKeyTakeaways = true,
}) => {
  return (
    <section className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <h1 className="font-outfit text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
            {title}
          </h1>
          {subtitle && (
            <p className="text-xl text-slate-300 mb-8">{subtitle}</p>
          )}

          {showKeyTakeaways && (
            <div className="bg-white/10 backdrop-blur rounded-xl p-6 mb-8">
              <h2 className="font-outfit font-semibold text-lg mb-4">
                Key Takeaways
              </h2>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Clock className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Same-day delivery available in 50+ metros nationwide</span>
                </li>
                <li className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>Transparent pricing from $299 (10 yard) to $799 (40 yard)</span>
                </li>
                <li className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-amber-400 mt-0.5 flex-shrink-0" />
                  <span>7-day standard rental with flexible extension options</span>
                </li>
              </ul>
            </div>
          )}

          <div className="flex flex-col sm:flex-row gap-4">
            <PhoneButton size="lg" />
            <Link href="#sizes">
              <Button variant="outline" size="lg" className="w-full sm:w-auto border-white text-white hover:bg-white hover:text-slate-900">
                View Dumpster Sizes
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
