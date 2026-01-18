import type { Testimonial } from '@/types'

export const TESTIMONIALS: Testimonial[] = [
  {
    name: 'Mike R.',
    location: 'Houston, TX',
    rating: 5,
    text: 'Used Premier Debris for our kitchen remodel. The 20-yard dumpster was delivered right on time and picked up the day we called. No hidden fees, exactly what they quoted. Will use again.',
    projectType: 'Kitchen Remodel',
    date: '2024-01',
  },
  {
    name: 'Sarah T.',
    location: 'Phoenix, AZ',
    rating: 5,
    text: 'Needed a dumpster for a roofing project ASAP. They delivered same-day and the driver was super helpful in placing it exactly where we needed. Great service!',
    projectType: 'Roofing',
    date: '2024-02',
  },
  {
    name: 'James L.',
    location: 'Dallas, TX',
    rating: 5,
    text: 'Cleaned out my parents\' estate and the 30-yard dumpster was perfect. The team was respectful and professional. Pickup was seamless. Highly recommend.',
    projectType: 'Estate Cleanout',
    date: '2024-01',
  },
  {
    name: 'Linda K.',
    location: 'Atlanta, GA',
    rating: 5,
    text: 'As a contractor, I\'ve used many dumpster services. Premier Debris is now my go-to. Reliable, fair pricing, and they actually answer the phone. That\'s rare these days.',
    projectType: 'Construction',
    date: '2024-03',
  },
  {
    name: 'David M.',
    location: 'Miami, FL',
    rating: 5,
    text: 'Post-hurricane cleanup required multiple dumpsters over several weeks. Premier Debris worked with us on scheduling and pricing. True professionals when we needed them most.',
    projectType: 'Storm Cleanup',
    date: '2024-02',
  },
  {
    name: 'Jennifer S.',
    location: 'Tampa, FL',
    rating: 5,
    text: 'First time renting a dumpster and they made it so easy. The 10-yard was perfect for our garage cleanout. Delivered and picked up without any issues. Very happy!',
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
