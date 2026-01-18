export interface FAQItem {
  q: string
  a: string
}

export const GENERAL_FAQS: FAQItem[] = [
  {
    q: 'How much does it cost to rent a dumpster?',
    a: 'Dumpster rental prices typically range from $299 for a 10-yard dumpster to $799 for a 40-yard dumpster, depending on your location, rental duration, and the type of debris. Our standard rental period is 7 days with transparent pricing and no hidden fees.',
  },
  {
    q: 'What size dumpster do I need for my project?',
    a: 'The right dumpster size depends on your project scope. A 10-yard dumpster works well for garage cleanouts or small bathroom remodels. A 20-yard is ideal for medium renovations or roofing projects up to 25 squares. For large renovations or construction debris, a 30 or 40-yard dumpster is recommended.',
  },
  {
    q: 'How long can I keep the dumpster?',
    a: 'Our standard rental period is 7 days, which is sufficient for most residential projects. If you need more time, rental extensions are available for an additional daily fee. Just call us before your rental period ends to extend.',
  },
  {
    q: 'What can I put in a dumpster?',
    a: 'You can dispose of most construction debris, household junk, furniture, appliances, yard waste, and renovation materials. Prohibited items include hazardous waste, chemicals, paint, batteries, tires, and certain electronics. When in doubt, ask our team.',
  },
  {
    q: 'Do I need a permit for a dumpster?',
    a: 'If the dumpster is placed on your private property (driveway), typically no permit is required. However, if placement on a public street is necessary, a permit from your local municipality may be required. We can help guide you through the permit process.',
  },
  {
    q: 'How quickly can you deliver a dumpster?',
    a: 'We offer same-day delivery in most service areas when you call before noon. Next-day delivery is available for all orders. Our team will work with your schedule to find a delivery time that works for you.',
  },
]

export const SIZE_SPECIFIC_FAQS: Record<string, FAQItem[]> = {
  '10': [
    {
      q: 'What fits in a 10 yard dumpster?',
      a: 'A 10-yard dumpster holds approximately 4 pickup truck loads of debris. It\'s perfect for garage cleanouts, small bathroom remodels, deck removal up to 300 sq ft, or cleaning out a single room. The compact size fits easily in most driveways.',
    },
    {
      q: 'Is a 10 yard dumpster big enough for a bathroom remodel?',
      a: 'Yes, a 10-yard dumpster is typically sufficient for a single bathroom remodel, including old fixtures, tile, drywall, and flooring. For multiple bathroom renovations, consider upgrading to a 20-yard dumpster.',
    },
    {
      q: 'What are the dimensions of a 10 yard dumpster?',
      a: 'A 10-yard dumpster measures approximately 12 feet long, 8 feet wide, and 3.5 feet high. This compact size allows it to fit in most standard driveways without blocking access to your garage.',
    },
  ],
  '20': [
    {
      q: 'What fits in a 20 yard dumpster?',
      a: 'A 20-yard dumpster holds approximately 8 pickup truck loads of debris. It\'s ideal for medium home renovations, roofing projects up to 25 squares (2,500 sq ft), estate cleanouts, or whole-house flooring removal.',
    },
    {
      q: 'Is a 20 yard dumpster big enough for a roofing project?',
      a: 'A 20-yard dumpster can handle roofing debris from homes up to 2,500 square feet (approximately 25 roofing squares). For larger roofs or if you\'re removing multiple layers of shingles, a 30-yard dumpster is recommended.',
    },
    {
      q: 'What are the dimensions of a 20 yard dumpster?',
      a: 'A 20-yard dumpster measures approximately 22 feet long, 8 feet wide, and 4.5 feet high. The longer footprint requires adequate driveway space, but the moderate height makes loading easier than taller containers.',
    },
  ],
  '30': [
    {
      q: 'What fits in a 30 yard dumpster?',
      a: 'A 30-yard dumpster holds approximately 12 pickup truck loads of debris. It\'s perfect for large home renovations, new construction debris, commercial cleanouts, or major landscaping projects. It can handle whole-house cleanouts with ease.',
    },
    {
      q: 'Is a 30 yard dumpster good for construction debris?',
      a: 'Yes, a 30-yard dumpster is excellent for construction debris from new builds or major renovations. It can handle drywall, lumber, roofing materials, and general construction waste. For very large commercial projects, consider a 40-yard.',
    },
    {
      q: 'What are the dimensions of a 30 yard dumpster?',
      a: 'A 30-yard dumpster measures approximately 22 feet long, 8 feet wide, and 6 feet high. The 6-foot height provides significant capacity but may require a step stool for loading heavier items over the side walls.',
    },
  ],
  '40': [
    {
      q: 'What fits in a 40 yard dumpster?',
      a: 'A 40-yard dumpster holds approximately 16 pickup truck loads of debris. It\'s our largest size, ideal for commercial construction, full home demolitions, industrial cleanups, and large-scale renovation projects.',
    },
    {
      q: 'Is a 40 yard dumpster too big for residential use?',
      a: 'A 40-yard dumpster is typically larger than needed for most residential projects and may not fit in standard driveways due to its 8-foot height. It\'s best suited for commercial projects, demolitions, or large estate cleanouts with ample space.',
    },
    {
      q: 'What are the dimensions of a 40 yard dumpster?',
      a: 'A 40-yard dumpster measures approximately 22 feet long, 8 feet wide, and 8 feet high. Due to its height, it requires clearance for delivery trucks and is best placed on flat, open surfaces like parking lots or large driveways.',
    },
  ],
}

export const getCityFAQs = (cityName: string): FAQItem[] => [
  {
    q: `How much does dumpster rental cost in ${cityName}?`,
    a: `Dumpster rental prices in ${cityName} typically range from $299 for a 10-yard dumpster to $799 for a 40-yard dumpster. Prices may vary based on your specific location within ${cityName}, rental duration, and debris type. Contact us for an exact quote.`,
  },
  {
    q: `Do I need a permit for a dumpster in ${cityName}?`,
    a: `In ${cityName}, permits are typically not required when placing a dumpster on your private property (driveway). If street placement is necessary, you may need a right-of-way permit from the local public works department. We can help guide you through the process.`,
  },
  {
    q: `How fast can you deliver a dumpster in ${cityName}?`,
    a: `We offer same-day dumpster delivery throughout ${cityName} and surrounding areas when you call before noon. Next-day delivery is guaranteed for all orders. Our local drivers know the area well and will work with your schedule.`,
  },
  {
    q: `What areas in ${cityName} do you serve?`,
    a: `We provide dumpster rental services throughout ${cityName} and all surrounding neighborhoods and suburbs. Whether you're in the city center or outlying areas, we've got you covered with reliable delivery and pickup.`,
  },
]
