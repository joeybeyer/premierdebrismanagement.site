import type { City, Neighborhood } from '@/types'

export const CITIES: City[] = [
  {
    name: 'Houston',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'houston',
    tier: 1,
    population: 2300000,
    permitInfo: 'Street placement requires Right-of-Way permit from Houston Public Works (3-5 business days). Driveway placement typically permit-free.',
    localNotes: 'Large metro with active construction. Historic districts (Heights, Montrose) have additional HOA restrictions.',
    neighborhoods: [
      { name: 'Houston Heights', slug: 'heights', zipCodes: ['77008', '77009', '77007'], landmarks: ['Heights Boulevard', 'White Oak Bayou'] },
      { name: 'Memorial', slug: 'memorial', zipCodes: ['77024', '77079'], landmarks: ['Memorial Park', 'Memorial City Mall'] },
      { name: 'Galleria', slug: 'galleria', zipCodes: ['77056', '77057'], landmarks: ['The Galleria', 'Post Oak Boulevard'] },
      { name: 'Montrose', slug: 'montrose', zipCodes: ['77006', '77019'], landmarks: ['Museum District', 'Westheimer Road'] },
      { name: 'Katy', slug: 'katy', zipCodes: ['77449', '77450', '77493', '77494'], landmarks: ['Katy Mills', 'La Centerra'] },
      { name: 'Sugar Land', slug: 'sugar-land', zipCodes: ['77478', '77479', '77498'], landmarks: ['Sugar Land Town Square', 'First Colony'] },
      { name: 'The Woodlands', slug: 'woodlands', zipCodes: ['77380', '77381', '77382', '77384', '77385'], landmarks: ['The Woodlands Mall', 'Market Street'] },
    ],
  },
  {
    name: 'Phoenix',
    state: 'Arizona',
    stateAbbr: 'AZ',
    slug: 'phoenix',
    tier: 1,
    population: 1600000,
    permitInfo: 'Permit required for street placement. Contact Phoenix Street Transportation (602-262-6235).',
    localNotes: 'Hot climate affects debris types. Popular for roofing and landscaping projects.',
    neighborhoods: [
      { name: 'Scottsdale', slug: 'scottsdale', zipCodes: ['85251', '85254', '85257', '85260'], landmarks: ['Old Town Scottsdale', 'Scottsdale Fashion Square'] },
      { name: 'Chandler', slug: 'chandler', zipCodes: ['85224', '85225', '85226', '85248'], landmarks: ['Chandler Fashion Center', 'Downtown Chandler'] },
      { name: 'Tempe', slug: 'tempe', zipCodes: ['85281', '85282', '85283', '85284'], landmarks: ['Arizona State University', 'Tempe Town Lake'] },
      { name: 'Gilbert', slug: 'gilbert', zipCodes: ['85233', '85234', '85295', '85296'], landmarks: ['Gilbert Heritage District', 'San Tan Village'] },
      { name: 'Mesa', slug: 'mesa', zipCodes: ['85201', '85202', '85203', '85204'], landmarks: ['Downtown Mesa', 'Mesa Arts Center'] },
    ],
  },
  {
    name: 'Dallas',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'dallas',
    tier: 1,
    population: 1300000,
    permitInfo: 'Street Use Permit required from Dallas Public Works. Apply online at dallascityhall.com.',
    localNotes: 'Strong construction market. Uptown and Highland Park have strict HOA requirements.',
    neighborhoods: [
      { name: 'Uptown', slug: 'uptown', zipCodes: ['75201', '75204'], landmarks: ['West Village', 'Katy Trail'] },
      { name: 'Highland Park', slug: 'highland-park', zipCodes: ['75205'], landmarks: ['Highland Park Village', 'SMU'] },
      { name: 'Plano', slug: 'plano', zipCodes: ['75023', '75024', '75025', '75074', '75075'], landmarks: ['Legacy West', 'The Shops at Legacy'] },
      { name: 'Frisco', slug: 'frisco', zipCodes: ['75033', '75034', '75035'], landmarks: ['The Star', 'Stonebriar Centre'] },
      { name: 'Richardson', slug: 'richardson', zipCodes: ['75080', '75081', '75082'], landmarks: ['CityLine', 'Telecom Corridor'] },
    ],
  },
  {
    name: 'Atlanta',
    state: 'Georgia',
    stateAbbr: 'GA',
    slug: 'atlanta',
    tier: 1,
    population: 500000,
    permitInfo: 'ROW permit required for street placement from Atlanta Department of Transportation.',
    localNotes: 'Tree canopy regulations may affect placement. Buckhead and Midtown see heavy renovation activity.',
    neighborhoods: [
      { name: 'Buckhead', slug: 'buckhead', zipCodes: ['30305', '30324', '30326'], landmarks: ['Lenox Square', 'Phipps Plaza'] },
      { name: 'Midtown', slug: 'midtown', zipCodes: ['30308', '30309'], landmarks: ['Piedmont Park', 'Colony Square'] },
      { name: 'Decatur', slug: 'decatur', zipCodes: ['30030', '30033'], landmarks: ['Decatur Square', 'Agnes Scott College'] },
      { name: 'Sandy Springs', slug: 'sandy-springs', zipCodes: ['30328', '30342', '30350'], landmarks: ['City Springs', 'Perimeter Mall'] },
      { name: 'Marietta', slug: 'marietta', zipCodes: ['30060', '30062', '30064', '30066', '30067'], landmarks: ['Marietta Square', 'The Avenue'] },
    ],
  },
  {
    name: 'Miami',
    state: 'Florida',
    stateAbbr: 'FL',
    slug: 'miami',
    tier: 1,
    population: 440000,
    permitInfo: 'Contact City of Miami Public Works for ROW permit. Most residential placements on private property allowed.',
    localNotes: 'Hurricane season (June-November) creates surge in debris removal demand. Coral Gables has strict aesthetic requirements.',
    neighborhoods: [
      { name: 'Miami Beach', slug: 'miami-beach', zipCodes: ['33139', '33140', '33141'], landmarks: ['South Beach', 'Lincoln Road'] },
      { name: 'Coral Gables', slug: 'coral-gables', zipCodes: ['33134', '33146'], landmarks: ['Miracle Mile', 'Venetian Pool'] },
      { name: 'Brickell', slug: 'brickell', zipCodes: ['33129', '33131'], landmarks: ['Brickell City Centre', 'Mary Brickell Village'] },
      { name: 'Coconut Grove', slug: 'coconut-grove', zipCodes: ['33133'], landmarks: ['CocoWalk', 'Vizcaya'] },
      { name: 'Hialeah', slug: 'hialeah', zipCodes: ['33010', '33012', '33013', '33014', '33015', '33016'], landmarks: ['Westland Mall', 'Hialeah Park'] },
    ],
  },
  {
    name: 'Tampa',
    state: 'Florida',
    stateAbbr: 'FL',
    slug: 'tampa',
    tier: 2,
    population: 400000,
    neighborhoods: [
      { name: 'South Tampa', slug: 'south-tampa', zipCodes: ['33606', '33609', '33611'], landmarks: ['Hyde Park', 'Bayshore Boulevard'] },
      { name: 'Brandon', slug: 'brandon', zipCodes: ['33510', '33511'], landmarks: ['Westfield Brandon', 'Brandon Town Center'] },
      { name: 'Clearwater', slug: 'clearwater', zipCodes: ['33755', '33756', '33759', '33760'], landmarks: ['Clearwater Beach', 'Cleveland Street'] },
      { name: 'St. Petersburg', slug: 'st-petersburg', zipCodes: ['33701', '33702', '33703', '33704'], landmarks: ['Downtown St. Pete', 'The Pier'] },
    ],
  },
  {
    name: 'San Antonio',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'san-antonio',
    tier: 2,
    population: 1500000,
    neighborhoods: [
      { name: 'Alamo Heights', slug: 'alamo-heights', zipCodes: ['78209'], landmarks: ['The Quarry', 'Lincoln Heights'] },
      { name: 'Stone Oak', slug: 'stone-oak', zipCodes: ['78258', '78259'], landmarks: ['The Rim', 'Stone Oak Park'] },
      { name: 'Boerne', slug: 'boerne', zipCodes: ['78006', '78015'], landmarks: ['Historic Downtown Boerne', 'Cibolo Creek'] },
    ],
  },
  {
    name: 'Austin',
    state: 'Texas',
    stateAbbr: 'TX',
    slug: 'austin',
    tier: 2,
    population: 1000000,
    neighborhoods: [
      { name: 'Round Rock', slug: 'round-rock', zipCodes: ['78664', '78665', '78681'], landmarks: ['Round Rock Premium Outlets', 'Old Settlers Park'] },
      { name: 'Cedar Park', slug: 'cedar-park', zipCodes: ['78613'], landmarks: ['1890 Ranch', 'H-E-B Center'] },
      { name: 'Pflugerville', slug: 'pflugerville', zipCodes: ['78660'], landmarks: ['Stone Hill Town Center', 'Lake Pflugerville'] },
      { name: 'Westlake', slug: 'westlake', zipCodes: ['78746'], landmarks: ['Davenport Village', 'Barton Creek'] },
    ],
  },
  {
    name: 'Charlotte',
    state: 'North Carolina',
    stateAbbr: 'NC',
    slug: 'charlotte',
    tier: 2,
    population: 900000,
    neighborhoods: [
      { name: 'South End', slug: 'south-end', zipCodes: ['28203'], landmarks: ['South End Historic District', 'Atherton Mill'] },
      { name: 'Myers Park', slug: 'myers-park', zipCodes: ['28207', '28209'], landmarks: ['Queens University', 'Freedom Park'] },
      { name: 'Ballantyne', slug: 'ballantyne', zipCodes: ['28277'], landmarks: ['Ballantyne Village', 'StoneCrest'] },
    ],
  },
  {
    name: 'Denver',
    state: 'Colorado',
    stateAbbr: 'CO',
    slug: 'denver',
    tier: 2,
    population: 700000,
    neighborhoods: [
      { name: 'Cherry Creek', slug: 'cherry-creek', zipCodes: ['80206', '80246'], landmarks: ['Cherry Creek Shopping Center', 'Cherry Creek Trail'] },
      { name: 'Highlands', slug: 'highlands', zipCodes: ['80211'], landmarks: ['LoHi', 'Highlands Square'] },
      { name: 'Aurora', slug: 'aurora', zipCodes: ['80010', '80011', '80012', '80013', '80014', '80015', '80016', '80017'], landmarks: ['Southlands', 'Town Center at Aurora'] },
      { name: 'Lakewood', slug: 'lakewood', zipCodes: ['80214', '80215', '80226', '80227', '80228'], landmarks: ['Belmar', 'Colorado Mills'] },
    ],
  },
]

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
