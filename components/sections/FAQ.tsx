'use client'

import { useState, type FC } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'
import type { FAQItem } from '@/content/faqs'

interface FAQProps {
  faqs: FAQItem[]
  title?: string
  description?: string
}

export const FAQ: FC<FAQProps> = ({
  faqs,
  title = 'Frequently Asked Questions',
  description,
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(0)

  return (
    <section className="py-16 lg:py-24 bg-slate-50">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            {title}
          </h2>
          {description && (
            <p className="text-lg text-slate-600">{description}</p>
          )}
        </div>

        <div className="space-y-4">
          {faqs.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-slate-200 overflow-hidden"
            >
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between gap-4"
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
              >
                <span className="font-semibold text-slate-900">{faq.q}</span>
                <ChevronDown
                  className={cn(
                    'w-5 h-5 text-slate-500 transition-transform flex-shrink-0',
                    openIndex === i && 'rotate-180'
                  )}
                />
              </button>
              <div
                className={cn(
                  'px-6 overflow-hidden transition-all',
                  openIndex === i ? 'pb-4 max-h-96' : 'max-h-0'
                )}
              >
                <p className="text-slate-600">{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
