import type { Testimonial } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mike R.',
    location: 'Bakersfield, CA',
    rating: 5,
    text: 'Used Premier Debris for our kitchen remodel in Rosedale. The 20-yard dumpster was delivered right on time and picked up the day we called. No hidden fees, exactly what they quoted. Will use again.',
    projectType: 'Kitchen Remodel',
    date: '2024-01',
  },
  {
    name: 'Sarah T.',
    location: 'Bakersfield, CA',
    rating: 5,
    text: 'Needed a dumpster for a roofing project in Seven Oaks ASAP. They delivered same-day and the driver was super helpful in placing it exactly where we needed. Great service!',
    projectType: 'Roofing',
    date: '2024-02',
  },
  {
    name: 'James L.',
    location: 'Delano, CA',
    rating: 5,
    text: 'Cleaned out my parents\' estate and the 30-yard dumpster was perfect. The team was respectful and professional. Pickup was seamless. Highly recommend for Kern County.',
    projectType: 'Estate Cleanout',
    date: '2024-01',
  },
  {
    name: 'Linda K.',
    location: 'Bakersfield, CA',
    rating: 5,
    text: 'As a contractor working throughout Bakersfield, I\'ve used many dumpster services. Premier Debris is now my go-to. Reliable, fair pricing, and they actually answer the phone.',
    projectType: 'Construction',
    date: '2024-03',
  },
  {
    name: 'David M.',
    location: 'Tehachapi, CA',
    rating: 5,
    text: 'Even delivered to Tehachapi without any issues. Great communication and the dumpster was exactly what we needed for our cabin renovation project. Very professional.',
    projectType: 'Renovation',
    date: '2024-02',
  },
  {
    name: 'Jennifer S.',
    location: 'Bakersfield, CA',
    rating: 5,
    text: 'First time renting a dumpster and they made it so easy. The 10-yard was perfect for our garage cleanout in Southwest Bakersfield. Delivered and picked up without any issues. Very happy!',
    projectType: 'Garage Cleanout',
    date: '2024-03',
  },
]

export const getTestimonialsByLocation = (location: string): Testimonial[] => {
  return TESTIMONIALS.filter((t) => t.location.toLowerCase().includes(location.toLowerCase()))
}

export const getTestimonialsByProject = (projectType: string): Testimonial[] => {
  return TESTIMONIALS.filter((t) => t.projectType.toLowerCase().includes(projectType.toLowerCase()))
}
