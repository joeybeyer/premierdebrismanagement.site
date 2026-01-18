import { type Metadata } from 'next'
import { Phone, Mail, Clock, MapPin } from 'lucide-react'
import { Breadcrumbs } from '@/components/seo/Breadcrumbs'
import { QuoteForm } from '@/components/forms/QuoteForm'
import { PhoneButton } from '@/components/ui/PhoneButton'
import { getTrackingNumber, formatPhoneForTel } from '@/lib/tracking'

export const metadata: Metadata = {
  title: 'Contact Us | Get a Dumpster Rental Quote',
  description: 'Contact Premier Debris Management for dumpster rental quotes. Call for instant pricing or fill out our form. Same-day delivery available.',
}

export default function ContactPage() {
  const phone = getTrackingNumber()

  return (
    <>
      <div className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumbs items={[{ name: 'Contact', href: '/contact/' }]} />
        </div>
      </div>

      <section className="py-12 lg:py-16 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <div>
              <h1 className="font-outfit text-4xl md:text-5xl font-extrabold text-slate-900 mb-6">
                Contact Us
              </h1>
              <p className="text-xl text-slate-600 mb-8">
                Ready to rent a dumpster? Call us for instant pricing or fill out the form
                and we'll get back to you within an hour during business hours.
              </p>

              <div className="space-y-6 mb-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Call Us</h3>
                    <a
                      href={formatPhoneForTel(phone)}
                      className="text-2xl font-bold text-amber-600 hover:text-amber-700"
                    >
                      {phone}
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      Best for immediate quotes and same-day delivery
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Email Us</h3>
                    <a
                      href="mailto:info@premierdebrismanagement.site"
                      className="text-amber-600 hover:text-amber-700"
                    >
                      info@premierdebrismanagement.site
                    </a>
                    <p className="text-sm text-slate-500 mt-1">
                      We respond within 1 business hour
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Clock className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Business Hours</h3>
                    <p className="text-slate-600">
                      Monday - Friday: 7:00 AM - 7:00 PM
                      <br />
                      Saturday: 8:00 AM - 5:00 PM
                      <br />
                      Sunday: 9:00 AM - 3:00 PM
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900 text-white rounded-xl p-6">
                <h3 className="font-outfit text-lg font-bold mb-2">
                  Need a Dumpster Today?
                </h3>
                <p className="text-slate-300 mb-4">
                  For same-day delivery, call us before noon. We'll get your dumpster
                  delivered the same day in most service areas.
                </p>
                <PhoneButton variant="primary" size="lg" />
              </div>

              {/* Location */}
              <div className="mt-8">
                <div className="flex items-start gap-4 mb-4">
                  <div className="w-12 h-12 bg-amber-100 rounded-lg flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-amber-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-slate-900 mb-1">Our Location</h3>
                    <p className="text-slate-600">
                      1901 Truxtun Ave
                      <br />
                      Bakersfield, CA 93301
                    </p>
                  </div>
                </div>
                <div className="rounded-xl overflow-hidden border border-slate-200">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26026.391768271507!2d-119.0238264!3d35.3730402!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80ea69992fd81f43%3A0x5ffd6659f9c8ce47!2sPremier%20Debris%20Management!5e0!3m2!1sen!2sus!4v1768708352892!5m2!1sen!2sus"
                    width="100%"
                    height="300"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Premier Debris Management Location"
                  />
                </div>
              </div>
            </div>

            {/* Quote Form */}
            <div>
              <div className="bg-slate-50 rounded-xl p-6 lg:p-8">
                <h2 className="font-outfit text-2xl font-bold text-slate-900 mb-6">
                  Get a Free Quote
                </h2>
                <QuoteForm />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
