import { getTrackingNumber } from './tracking'

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premierdebrismanagement.site'
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Premier Debris Management'

export const generateLocalBusinessSchema = () => ({
  '@context': 'https://schema.org',
  '@type': ['LocalBusiness', 'ProfessionalService'],
  '@id': `${SITE_URL}/#business`,
  name: SITE_NAME,
  description: 'Professional dumpster rental services for construction, renovation, and cleanout projects in Bakersfield and Kern County, CA. Same-day delivery available.',
  url: SITE_URL,
  telephone: getTrackingNumber(),
  priceRange: '$$',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '1901 Truxtun Ave',
    addressLocality: 'Bakersfield',
    addressRegion: 'CA',
    postalCode: '93301',
    addressCountry: 'US',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: 35.3733,
    longitude: -119.0187,
  },
  areaServed: [
    {
      '@type': 'City',
      name: 'Bakersfield',
      containedInPlace: { '@type': 'State', name: 'California' },
    },
    {
      '@type': 'AdministrativeArea',
      name: 'Kern County',
    },
  ],
  serviceType: [
    'Dumpster Rental',
    'Roll-Off Container Rental',
    'Construction Debris Removal',
    'Residential Dumpster Service',
  ],
})

export const generateProductSchema = (size: {
  name: string
  size: string
  dimensions: string
  price: string
  slug: string
}) => ({
  '@context': 'https://schema.org',
  '@type': 'Product',
  name: `${size.size} Yard Dumpster Rental`,
  description: `${size.name} - ${size.dimensions}. Perfect for your project needs.`,
  url: `${SITE_URL}/${size.slug}/`,
  offers: {
    '@type': 'Offer',
    price: size.price.replace(/[^0-9]/g, '').slice(0, -3) || '299',
    priceCurrency: 'USD',
    availability: 'https://schema.org/InStock',
  },
  brand: {
    '@id': `${SITE_URL}/#business`,
  },
})

export const generateServiceSchema = (city: string, state: string) => ({
  '@context': 'https://schema.org',
  '@type': 'Service',
  serviceType: 'Dumpster Rental',
  areaServed: {
    '@type': 'City',
    name: city,
    containedInPlace: {
      '@type': 'State',
      name: state,
    },
  },
  provider: {
    '@id': `${SITE_URL}/#business`,
  },
})

export const generateFAQSchema = (faqs: Array<{ q: string; a: string }>) => ({
  '@context': 'https://schema.org',
  '@type': 'FAQPage',
  mainEntity: faqs.map((faq) => ({
    '@type': 'Question',
    name: faq.q,
    acceptedAnswer: {
      '@type': 'Answer',
      text: faq.a,
    },
  })),
})

export const generateBreadcrumbSchema = (
  items: Array<{ name: string; url: string }>
) => ({
  '@context': 'https://schema.org',
  '@type': 'BreadcrumbList',
  itemListElement: items.map((item, index) => ({
    '@type': 'ListItem',
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
})
