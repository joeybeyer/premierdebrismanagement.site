export interface DumpsterSize {
  size: '10' | '20' | '30' | '40'
  name: string
  slug: string
  dimensions: string
  height: string
  capacity: string
  weight: string
  pickupLoads: number
  bestFor: string[]
  notIdealFor: string[]
  priceRange: {
    min: number
    max: number
  }
  rentalPeriod: string
  popularProjects: string[]
}

export interface Neighborhood {
  name: string
  slug: string
  zipCodes: string[]
  landmarks?: string[]
}

export interface City {
  name: string
  state: string
  stateAbbr: string
  slug: string
  tier: 1 | 2 | 3
  population?: number
  neighborhoods: Neighborhood[]
  permitInfo?: string
  localNotes?: string
}

export interface Lead {
  id: string
  name: string
  phone: string
  email: string
  zip: string
  size: DumpsterSize['size']
  projectType: string
  deliveryDate: string
  source: string
  timestamp: string
}

export interface FAQ {
  question: string
  answer: string
}

export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  projectType: string
  date: string
}
