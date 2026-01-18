import { type FC } from 'react'
import { Star, Quote } from 'lucide-react'
import { TESTIMONIALS } from '@/content/testimonials'

export const Testimonials: FC = () => {
  return (
    <section className="py-16 lg:py-24 bg-slate-900 text-white">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-outfit text-3xl md:text-4xl font-bold mb-4">
            What Our Customers Say
          </h2>
          <p className="text-lg text-slate-300 max-w-2xl mx-auto">
            Join thousands of satisfied customers who trust Premier Debris Management for their dumpster rental needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {TESTIMONIALS.slice(0, 6).map((testimonial, i) => (
            <div
              key={i}
              className="bg-slate-800 rounded-xl p-6 relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-slate-700" />
              <div className="flex items-center gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, j) => (
                  <Star
                    key={j}
                    className="w-4 h-4 text-amber-400 fill-amber-400"
                  />
                ))}
              </div>
              <p className="text-slate-300 mb-4">{testimonial.text}</p>
              <div className="border-t border-slate-700 pt-4">
                <div className="font-semibold">{testimonial.name}</div>
                <div className="text-sm text-slate-400">
                  {testimonial.location} - {testimonial.projectType}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
