import type { DumpsterSize } from '@/types'

export const DUMPSTER_SIZES: DumpsterSize[] = [
  {
    size: '10',
    name: '10 Yard Dumpster',
    slug: '10-yard-dumpster',
    dimensions: "12'L × 8'W × 3.5'H",
    height: '3.5 feet',
    capacity: '10 cubic yards',
    weight: '2-3 tons (4,000-6,000 lbs)',
    pickupLoads: 4,
    bestFor: [
      'Garage cleanout',
      'Small bathroom remodel',
      'Deck removal (up to 300 sq ft)',
      'Single room flooring removal',
      '250 sq ft roofing',
      'Small landscaping project',
      'Basement cleanout',
      'Attic cleanout',
    ],
    notIdealFor: [
      'Whole house renovation',
      'Large construction projects',
      'Commercial cleanouts',
      'Roofing over 1,500 sq ft',
    ],
    priceRange: { min: 299, max: 449 },
    rentalPeriod: '7 days',
    popularProjects: ['Garage cleanout', 'Small bathroom remodel', 'Deck removal'],
  },
  {
    size: '20',
    name: '20 Yard Dumpster',
    slug: '20-yard-dumpster',
    dimensions: "22'L × 8'W × 4.5'H",
    height: '4.5 feet',
    capacity: '20 cubic yards',
    weight: '4-6 tons (8,000-12,000 lbs)',
    pickupLoads: 8,
    bestFor: [
      'Medium home renovation',
      'Roofing up to 2,500 sq ft (25 squares)',
      'Estate cleanout',
      'Flooring removal (whole house)',
      'Kitchen remodel',
      'Bathroom remodel (multiple)',
      'Carpet removal (whole house)',
      'Medium landscaping',
    ],
    notIdealFor: [
      'Large commercial projects',
      'Full home demolition',
      'New construction debris',
      'Large-scale landscaping',
    ],
    priceRange: { min: 349, max: 549 },
    rentalPeriod: '7 days',
    popularProjects: ['Roofing project', 'Home renovation', 'Estate cleanout'],
  },
  {
    size: '30',
    name: '30 Yard Dumpster',
    slug: '30-yard-dumpster',
    dimensions: "22'L × 8'W × 6'H",
    height: '6 feet',
    capacity: '30 cubic yards',
    weight: '7-10 tons (14,000-20,000 lbs)',
    pickupLoads: 12,
    bestFor: [
      'Large home renovation',
      'New construction debris',
      'Commercial cleanout',
      'Large roofing project (3,500+ sq ft)',
      'Major landscaping',
      'Whole house cleanout',
      'Garage + basement cleanout',
      'Multiple room renovation',
    ],
    notIdealFor: [
      'Small residential driveways',
      'Tight access areas',
      'Minor cleanouts',
    ],
    priceRange: { min: 399, max: 649 },
    rentalPeriod: '7 days',
    popularProjects: ['Large renovation', 'Construction debris', 'Commercial cleanout'],
  },
  {
    size: '40',
    name: '40 Yard Dumpster',
    slug: '40-yard-dumpster',
    dimensions: "22'L × 8'W × 8'H",
    height: '8 feet',
    capacity: '40 cubic yards',
    weight: '10-12 tons (20,000-24,000 lbs)',
    pickupLoads: 16,
    bestFor: [
      'Commercial construction',
      'Full home demolition',
      'Industrial cleanup',
      'Large-scale renovation',
      'Commercial building cleanout',
      'Warehouse cleanout',
      'Major construction projects',
      'Foreclosure cleanouts',
    ],
    notIdealFor: [
      'Residential driveways',
      'Areas with height restrictions',
      'Small projects',
    ],
    priceRange: { min: 449, max: 799 },
    rentalPeriod: '7 days',
    popularProjects: ['Commercial construction', 'Demolition', 'Industrial cleanup'],
  },
]

export const getSizeBySlug = (slug: string): DumpsterSize | undefined => {
  return DUMPSTER_SIZES.find((size) => size.slug === slug)
}

export const formatPrice = (size: DumpsterSize): string => {
  return `$${size.priceRange.min}-$${size.priceRange.max}`
}

export const getOtherSizes = (currentSize: string): DumpsterSize[] => {
  return DUMPSTER_SIZES.filter((size) => size.size !== currentSize)
}
