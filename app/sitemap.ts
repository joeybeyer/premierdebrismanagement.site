import { MetadataRoute } from 'next'
import { DUMPSTER_SIZES } from '@/content/sizes'
import { CITIES, getAllNeighborhoodParams } from '@/content/cities'

const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://premierdebrismanagement.site'

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date()

  // Static pages
  const staticPages: MetadataRoute.Sitemap = [
    {
      url: BASE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
    },
    {
      url: `${BASE_URL}/dumpster-rental/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9,
    },
    {
      url: `${BASE_URL}/about/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
    {
      url: `${BASE_URL}/contact/`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${BASE_URL}/service-areas/`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8,
    },
  ]

  // Size pages
  const sizePages: MetadataRoute.Sitemap = DUMPSTER_SIZES.map((size) => ({
    url: `${BASE_URL}/${size.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.9,
  }))

  // Use case pages
  const useCasePages: MetadataRoute.Sitemap = [
    'construction-dumpster',
    'roofing-dumpster',
    'renovation-dumpster',
    'estate-cleanout-dumpster',
    'demolition-dumpster',
  ].map((slug) => ({
    url: `${BASE_URL}/${slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }))

  // City pages
  const cityPages: MetadataRoute.Sitemap = CITIES.map((city) => ({
    url: `${BASE_URL}/${city.slug}/`,
    lastModified: now,
    changeFrequency: 'weekly' as const,
    priority: city.tier === 1 ? 0.9 : 0.8,
  }))

  // Neighborhood pages
  const neighborhoodParams = getAllNeighborhoodParams()
  const neighborhoodPages: MetadataRoute.Sitemap = neighborhoodParams.map(
    ({ city, neighborhood }) => ({
      url: `${BASE_URL}/${city}/${neighborhood}/`,
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    })
  )

  return [
    ...staticPages,
    ...sizePages,
    ...useCasePages,
    ...cityPages,
    ...neighborhoodPages,
  ]
}
