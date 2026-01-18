import type { City, Neighborhood } from '@/types'

export const CITIES: City[] = [
  {
    name: 'Bakersfield',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'bakersfield',
    tier: 1,
    population: 403500,
    permitInfo: 'Street placement may require an encroachment permit from the City of Bakersfield Public Works Department. Driveway placement on private property typically does not require a permit.',
    localNotes: 'Hot, dry climate year-round makes Bakersfield ideal for construction and renovation projects. Oil industry and agriculture drive commercial dumpster demand. Growing residential areas see steady renovation activity.',
    neighborhoods: [
      { name: 'Downtown Bakersfield', slug: 'downtown', zipCodes: ['93301', '93304'], landmarks: ['Fox Theater', 'Bakersfield Museum of Art', '18th Street'] },
      { name: 'Rosedale', slug: 'rosedale', zipCodes: ['93312', '93314'], landmarks: ['Rosedale Highway', 'Valley Plaza Mall'] },
      { name: 'Seven Oaks', slug: 'seven-oaks', zipCodes: ['93311'], landmarks: ['Seven Oaks Country Club', 'Stockdale Highway'] },
      { name: 'Oleander-Sunset', slug: 'oleander-sunset', zipCodes: ['93305', '93306'], landmarks: ['Bakersfield College', 'Panorama Drive'] },
      { name: 'Westchester', slug: 'westchester', zipCodes: ['93309'], landmarks: ['Westchester area', 'California Avenue'] },
      { name: 'Riverlakes', slug: 'riverlakes', zipCodes: ['93312'], landmarks: ['Riverlakes Ranch', 'Riverlakes Golf Course'] },
      { name: 'Stockdale', slug: 'stockdale', zipCodes: ['93309', '93311'], landmarks: ['Stockdale Highway', 'Marketplace'] },
      { name: 'East Bakersfield', slug: 'east-bakersfield', zipCodes: ['93305', '93307'], landmarks: ['Union Avenue', 'Kern Medical'] },
      { name: 'Southwest Bakersfield', slug: 'southwest', zipCodes: ['93304', '93309'], landmarks: ['Panama Lane', 'Gosford Road'] },
      { name: 'Northwest Bakersfield', slug: 'northwest', zipCodes: ['93312', '93314'], landmarks: ['Coffee Road', 'Olive Drive'] },
    ],
  },
  {
    name: 'Delano',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'delano',
    tier: 2,
    population: 53500,
    permitInfo: 'Contact City of Delano for street placement permits. Private property placement typically allowed without permit.',
    localNotes: 'Agricultural hub north of Bakersfield. Growing residential development creates steady demand for renovation and cleanout dumpsters.',
    neighborhoods: [
      { name: 'Central Delano', slug: 'central-delano', zipCodes: ['93215'], landmarks: ['Main Street', 'Delano City Hall'] },
      { name: 'North Delano', slug: 'north-delano', zipCodes: ['93215'], landmarks: ['Cecil Avenue', 'Delano Regional Medical Center'] },
    ],
  },
  {
    name: 'Wasco',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'wasco',
    tier: 2,
    population: 27500,
    permitInfo: 'Contact City of Wasco for permit requirements.',
    localNotes: 'Rose-growing capital with agricultural economy. Residential projects and farm cleanouts drive dumpster demand.',
    neighborhoods: [
      { name: 'Central Wasco', slug: 'central-wasco', zipCodes: ['93280'], landmarks: ['7th Street', 'Wasco City Hall'] },
    ],
  },
  {
    name: 'Shafter',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'shafter',
    tier: 2,
    population: 21000,
    permitInfo: 'Contact City of Shafter Public Works for permit information.',
    localNotes: 'Growing bedroom community northwest of Bakersfield. New construction and home renovation projects increasing.',
    neighborhoods: [
      { name: 'Central Shafter', slug: 'central-shafter', zipCodes: ['93263'], landmarks: ['Lerdo Highway', 'Minter Field'] },
    ],
  },
  {
    name: 'Tehachapi',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'tehachapi',
    tier: 2,
    population: 12000,
    permitInfo: 'Mountain community may have specific placement requirements. Contact City of Tehachapi.',
    localNotes: 'Mountain community with cooler climate. Popular retirement and second-home area driving renovation activity.',
    neighborhoods: [
      { name: 'Downtown Tehachapi', slug: 'downtown-tehachapi', zipCodes: ['93561'], landmarks: ['Tehachapi Boulevard', 'Railroad Museum'] },
      { name: 'Bear Valley Springs', slug: 'bear-valley-springs', zipCodes: ['93561'], landmarks: ['Bear Valley Springs', 'Gated community'] },
    ],
  },
  {
    name: 'Arvin',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'arvin',
    tier: 2,
    population: 21500,
    permitInfo: 'Contact City of Arvin for permit requirements.',
    localNotes: 'Agricultural community south of Bakersfield. Residential growth creating demand for construction and cleanout services.',
    neighborhoods: [
      { name: 'Central Arvin', slug: 'central-arvin', zipCodes: ['93203'], landmarks: ['Bear Mountain Boulevard', 'Arvin High School'] },
    ],
  },
  {
    name: 'Taft',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'taft',
    tier: 2,
    population: 9500,
    permitInfo: 'Contact City of Taft for permit requirements.',
    localNotes: 'Oil industry town west of Bakersfield. Industrial and residential dumpster needs from energy sector activity.',
    neighborhoods: [
      { name: 'Central Taft', slug: 'central-taft', zipCodes: ['93268'], landmarks: ['Center Street', 'West Side Museum'] },
    ],
  },
  {
    name: 'McFarland',
    state: 'California',
    stateAbbr: 'CA',
    slug: 'mcfarland',
    tier: 2,
    population: 15500,
    permitInfo: 'Contact City of McFarland for permit information.',
    localNotes: 'Agricultural community between Bakersfield and Delano. Featured in the movie "McFarland USA."',
    neighborhoods: [
      { name: 'Central McFarland', slug: 'central-mcfarland', zipCodes: ['93250'], landmarks: ['Kern Avenue', 'McFarland City Park'] },
    ],
  },
]

// Utility functions
export const getCityBySlug = (slug: string): City | undefined => {
  return CITIES.find((city) => city.slug === slug)
}

export const getNeighborhoodBySlug = (citySlug: string, neighborhoodSlug: string): Neighborhood | undefined => {
  const city = getCityBySlug(citySlug)
  return city?.neighborhoods.find((n) => n.slug === neighborhoodSlug)
}

export const getCitiesByTier = (tier: 1 | 2 | 3): City[] => {
  return CITIES.filter((city) => city.tier === tier)
}

export const getAllCitySlugs = (): string[] => {
  return CITIES.map((city) => city.slug)
}

export const getAllNeighborhoodParams = (): { city: string; neighborhood: string }[] => {
  const params: { city: string; neighborhood: string }[] = []
  CITIES.forEach((city) => {
    city.neighborhoods.forEach((neighborhood) => {
      params.push({ city: city.slug, neighborhood: neighborhood.slug })
    })
  })
  return params
}

export const formatCityState = (city: City): string => {
  return `${city.name}, ${city.stateAbbr}`
}
