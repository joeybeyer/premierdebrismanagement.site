# CLAUDE.md - AI Assistant Instructions

## Project Context

**Premier Debris Management** is a pay-per-call lead generation website in the **dumpster rental** vertical. The site generates revenue by capturing qualified phone calls from homeowners, contractors, and property managers needing roll-off dumpster rentals, routing them to vetted operators.

**Owner:** Joseph (SeologicAgency.com portfolio)  
**Business Model:** Pay-per-call arbitrage ($15-16 in, $10-11 out)  
**Sister Site:** DumpsterChamps.com  
**Tech Stack:** Next.js 14 + Tailwind CSS + Cloudflare  

---

## Code Conventions

### Framework & Patterns

- **Next.js 14** with App Router (NOT Pages Router)
- **TypeScript** strict mode enabled
- **Tailwind CSS** for styling (no CSS modules, no styled-components)
- **Server Components** by default; use `'use client'` only when necessary
- **Server Actions** for form handling (no API routes for forms)

### File Naming

```
components/ui/Button.tsx                    # PascalCase for components
lib/tracking.ts                             # camelCase for utilities
app/(services)/20-yard-dumpster/page.tsx    # kebab-case for routes
```

### Component Structure

```tsx
// 1. Imports
import { type FC } from 'react'
import { cn } from '@/lib/utils'

// 2. Types
interface DumpsterCardProps {
  size: '10' | '20' | '30' | '40'
  price: string
}

// 3. Component
export const DumpsterCard: FC<DumpsterCardProps> = ({ size, price }) => {
  return (
    <div className={cn(
      'rounded-xl border-2 p-6 transition-all hover:border-amber-500',
      'bg-white shadow-lg'
    )}>
      <h3 className="text-2xl font-bold text-slate-900">{size} Yard Dumpster</h3>
      <p className="text-amber-600 font-semibold">{price}</p>
    </div>
  )
}
```

### Import Order

```tsx
// 1. React/Next
import { useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'

// 2. Third-party
import { motion } from 'framer-motion'

// 3. Internal components
import { Button } from '@/components/ui/Button'
import { DumpsterCard } from '@/components/dumpster/DumpsterCard'

// 4. Utilities/types
import { cn } from '@/lib/utils'
import type { DumpsterSize } from '@/types'
```

---

## Design System

### Brand Colors

```css
/* Primary - Industrial Authority */
--charcoal: #1a1a1a;              /* Headers, primary text */
--slate-900: #0f172a;             /* Dark backgrounds */
--slate-800: #1e293b;             /* Cards, sections */

/* Accent - Action Orange (matches dumpster color) */
--amber-500: #f59e0b;             /* CTAs, highlights */
--amber-400: #fbbf24;             /* Hover states */
--orange-500: #f97316;            /* Urgency indicators */
--orange-600: #ea580c;            /* Emergency/same-day CTAs */

/* Brand Orange (dumpster color) */
--brand-orange: #ee7a1c;          /* Primary brand, dumpster imagery */
--brand-orange-dark: #df5f12;     /* Darker accent */

/* Neutral */
--slate-100: #f1f5f9;             /* Light backgrounds */
--slate-200: #e2e8f0;             /* Borders, dividers */
--slate-500: #64748b;             /* Secondary text */
--white: #ffffff;                 /* Cards on dark */

/* Semantic */
--success: #10b981;               /* Availability, confirmation */
--warning: #f59e0b;               /* Caution states */
--error: #ef4444;                 /* Error, sold out */
```

### Typography

```css
/* Display/Headings: Outfit (Google Fonts) */
font-family: 'Outfit', system-ui, sans-serif;

/* Body: Inter */
font-family: 'Inter', system-ui, sans-serif;

/* Hierarchy */
H1: 48px/56px, font-weight: 800, letter-spacing: -0.02em
H2: 36px/44px, font-weight: 700, letter-spacing: -0.01em
H3: 24px/32px, font-weight: 600
H4: 20px/28px, font-weight: 600
Body: 16px/24px, font-weight: 400
Small: 14px/20px, font-weight: 400
```

---

## Phone Number Handling

### CRITICAL REQUIREMENTS

1. **NEVER hardcode phone numbers** — Always use Ringba/Retreaver tracking numbers
2. **Numbers must be dynamic** — Loaded from environment or campaign API
3. **Click-to-call format**: `tel:+1XXXXXXXXXX`
4. **Display format**: `(XXX) XXX-XXXX`

### Implementation

```tsx
// lib/tracking.ts
export const getTrackingNumber = () => {
  return process.env.NEXT_PUBLIC_TRACKING_NUMBER || '(888) 555-0199'
}

export const formatPhoneForTel = (phone: string) => {
  const digits = phone.replace(/\D/g, '')
  return `tel:+1${digits}`
}

// components/PhoneButton.tsx
'use client'

import { getTrackingNumber, formatPhoneForTel } from '@/lib/tracking'

export const PhoneButton = () => {
  const number = getTrackingNumber()
  
  return (
    <a 
      href={formatPhoneForTel(number)}
      className="inline-flex items-center gap-2 bg-amber-500 text-slate-900 px-8 py-4 rounded-xl font-bold text-lg hover:bg-amber-400 transition-colors"
    >
      <PhoneIcon className="w-5 h-5" />
      Call Now: {number}
    </a>
  )
}
```

---

## SEO Implementation Rules

### Page Structure Priority (from SEO Skill)

```
1. PAGE STRUCTURE (most important)
2. SITE STRUCTURE
3. CONTENT (distant third)
```

> "A page with good structure and thin content will outrank a page with poor structure and good content."

### Content Hierarchy for BERT

| Element | Confidence | Use For |
|---------|------------|---------|
| Tables | EXTREME | Dumpster size comparisons, pricing |
| Lists | Very High | Key takeaways at TOP of page |
| H2/H3 | High | Service + Geo within 2 tokens |
| `<dt>` | High | FAQ definitions (rarely used = opportunity) |

### Site Architecture (Hub & Spoke)

```
HOMEPAGE (hub)
├── /dumpster-rental/           # Main service hub (Tier 1)
├── /10-yard-dumpster/          # Size pages (Tier 1)
├── /20-yard-dumpster/
├── /30-yard-dumpster/
├── /40-yard-dumpster/
├── /construction-dumpster/     # Use case pages (Tier 1)
├── /roofing-dumpster/
├── /houston/                   # City hubs (Tier 1)
│   ├── /houston/heights/       # Neighborhood (Tier 2)
│   └── /houston/memorial/
└── /blog/                      # Supporting content (Tier 3)
```

### CRITICAL: Never Create City + Service Combo Pages

```
❌ BAD:  /houston-dumpster-rental/
✅ GOOD: /houston/ (city hub) + /dumpster-rental/ (service page)
```

### Internal Linking Formula

```
1 UP + 2-3 ACROSS = Money
```

- **1 UP**: Link to City Hub or Homepage in first paragraph
- **2-3 ACROSS**: Link to related size pages or use cases
- **2-3 ACROSS**: Link to neighboring areas (not all)

### Link Placement Rules

1. **Link within first 80-100 words** (critical for BERT)
2. **Use contextual links** (not button/nav links)
3. **Descriptive anchor text** (not "click here")
4. **One anchor = One page** (don't use same anchor for different pages)

### Anchor Text Distribution

| Type | Percentage | Example |
|------|------------|---------|
| Branded | 40-50% | "Premier Debris Management" |
| Generic | 20-30% | "our dumpsters", "get a quote" |
| Partial Match | 15-20% | "roll-off dumpster rental services" |
| Exact Match | 5-10% | "20 yard dumpster rental" |
| Long Tail | 5-10% | "construction dumpster rental in Houston" |

---

## Schema Markup

### Required Schema by Page Type

```typescript
// lib/schema.ts

// Homepage - LocalBusiness
export const generateLocalBusinessSchema = () => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://premierdebrismanagement.site/#business",
  "name": "Premier Debris Management",
  "description": "Professional dumpster rental services for construction, renovation, and cleanout projects",
  "url": "https://premierdebrismanagement.site",
  "telephone": process.env.NEXT_PUBLIC_TRACKING_NUMBER,
  "priceRange": "$$",
  "areaServed": "United States",
  "serviceType": [
    "Dumpster Rental",
    "Roll-Off Container Rental",
    "Construction Debris Removal",
    "Residential Dumpster Service"
  ]
})

// Size Pages - Product schema
export const generateDumpsterProductSchema = (size: {
  name: string
  size: string
  dimensions: string
  price: string
  url: string
}) => ({
  "@context": "https://schema.org",
  "@type": "Product",
  "name": `${size.size} Yard Dumpster Rental`,
  "description": size.name,
  "url": size.url,
  "offers": {
    "@type": "Offer",
    "price": size.price.replace(/[^0-9]/g, ''),
    "priceCurrency": "USD",
    "availability": "https://schema.org/InStock"
  },
  "brand": {
    "@id": "https://premierdebrismanagement.site/#business"
  }
})

// City Pages - Service + areaServed
export const generateCityServiceSchema = (city: string, state: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  "serviceType": "Dumpster Rental",
  "areaServed": {
    "@type": "City",
    "name": city,
    "containedInPlace": {
      "@type": "State",
      "name": state
    }
  },
  "provider": {
    "@id": "https://premierdebrismanagement.site/#business"
  }
})

// FAQ schema - only where FAQ content exists
export const generateFAQSchema = (faqs: Array<{q: string, a: string}>) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": faqs.map(faq => ({
    "@type": "Question",
    "name": faq.q,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": faq.a
    }
  }))
})
```

---

## Page Templates

### Homepage Structure

```
H1: Dumpster Rental Services | Premier Debris Management

[Key Takeaways - 3 bullets with specific facts]
  • Same-day delivery available in 50+ metros
  • Transparent pricing from $299 (10 yard) to $699 (40 yard)
  • 7-day standard rental, extensions available

[Size Comparison Table - EXTREME BERT confidence]
| Size | Dimensions | Capacity | Best For | Price |

[Link to /dumpster-rental/ in first 100 words]

[Use Case Cards - link to problem pages]
[City Coverage - link to city hubs]
[FAQ Section with schema]
[CTA Section]
```

### Size Page Structure (e.g., /20-yard-dumpster/)

```
H1: 20 Yard Dumpster Rental

[Key Takeaways]
  • Holds 8 pickup truck loads (approx. 6 tons)
  • Ideal for: roofing up to 25 squares, medium renovation
  • Dimensions: 22'L × 8'W × 4.5'H

[Link UP to homepage in first paragraph]
[Link ACROSS to 10-yard and 30-yard pages]

[Pricing Table]
[What Fits in a 20 Yard Dumpster - list]
[Best Projects for 20 Yard - contextual content]
[FAQ with schema]
[CTA]
```

### City Hub Structure (e.g., /houston/)

```
H1: Dumpster Rental in Houston, TX

[Key Takeaways - city-specific]
  • Same-day delivery throughout Greater Houston
  • Serving 45+ Houston neighborhoods
  • No hidden fees, permit assistance available

[Link to /dumpster-rental/ in first 100 words]
[Link to size pages]

[Houston-Specific Content - 80% unique]
  • Local permit requirements
  • HOA considerations
  • Houston disposal regulations
  • Popular project types in Houston

[Neighborhood Links - 2-3 only, neighboring areas]
  • /houston/heights/
  • /houston/memorial/
  • /houston/galleria/

[Local FAQ with geo in every question]
[CTA]
```

### Neighborhood Page (e.g., /houston/heights/)

```
H1: Dumpster Rental in Houston Heights

[1 UP link to /houston/ in first paragraph]
[2-3 ACROSS to neighboring areas: Montrose, Garden Oaks]

[80% Unique Content Required:]
  • Heights-specific permit info
  • Historic district considerations
  • Common project types in Heights
  • Local landmarks, streets for relevance
  
[FAQ with Heights + dumpster rental in every Q]
[CTA]
```

---

## Content Requirements

### Key Takeaways (Every Page)

Add immediately after H1:

```html
<div class="key-takeaways">
  <h2>Key Takeaways</h2>
  <ul>
    <li>Specific fact with number</li>
    <li>Specific fact with number</li>
    <li>Specific fact with number</li>
  </ul>
</div>
```

### Information Gain (Neighborhood Pages)

Per Google Patent #11,366,956, each page needs 80% unique content:

- Local permit requirements
- HOA/neighborhood considerations
- Common project types in that area
- Local disposal regulations
- Landmarks, roads, zip codes for relevance
- Microclimate factors (if applicable)

### FAQs - Always Add Geo

Even if the original question doesn't have geo, add it:

```
❌ "How much does a 20 yard dumpster cost?"
✅ "How much does a 20 yard dumpster cost in Houston?"
```

---

## Image Guidelines

### Requirements

- Use **real photos** of dumpsters (bright orange, brand color #ee7a1c)
- No AI-generated images for hero/product shots
- Photos from target S2 cells preferred (real locations)
- Workers in orange safety vests when present
- Sunny days, blue skies, professional settings

### Image Specs

```
Hero: 1920×1080, WebP, <200KB
Cards: 800×600, WebP, <100KB
Thumbnails: 400×300, WebP, <50KB
```

### Alt Text Formula

```
[Size] yard [color] dumpster [location context] [project type]

Examples:
"20 yard orange dumpster on residential driveway for renovation project"
"40 yard roll-off container at Houston construction site"
```

---

## Dumpster Size Data

```typescript
// content/sizes.ts
export const DUMPSTER_SIZES = [
  {
    size: '10',
    name: '10 Yard Dumpster',
    dimensions: "12'L × 8'W × 3.5'H",
    capacity: '4 pickup truck loads',
    weight: '2-3 tons',
    bestFor: ['Garage cleanout', 'Small bathroom remodel', 'Deck removal', '250 sq ft roofing'],
    price: '$299-$449',
    slug: '10-yard-dumpster'
  },
  {
    size: '20',
    name: '20 Yard Dumpster',
    dimensions: "22'L × 8'W × 4.5'H",
    capacity: '8 pickup truck loads',
    weight: '4-6 tons',
    bestFor: ['Medium renovation', 'Roofing up to 25 squares', 'Estate cleanout', 'Flooring removal'],
    price: '$349-$549',
    slug: '20-yard-dumpster'
  },
  {
    size: '30',
    name: '30 Yard Dumpster',
    dimensions: "22'L × 8'W × 6'H",
    capacity: '12 pickup truck loads',
    weight: '7-10 tons',
    bestFor: ['Large renovation', 'New construction debris', 'Commercial cleanout', 'Major landscaping'],
    price: '$399-$649',
    slug: '30-yard-dumpster'
  },
  {
    size: '40',
    name: '40 Yard Dumpster',
    dimensions: "22'L × 8'W × 8'H",
    capacity: '16 pickup truck loads',
    weight: '10-12 tons',
    bestFor: ['Commercial construction', 'Demolition', 'Industrial cleanup', 'Large-scale renovation'],
    price: '$449-$799',
    slug: '40-yard-dumpster'
  }
]
```

---

## Deployment Notes

### DirectAdmin Server

```bash
# Build locally, upload source (not .next folder)
npm run build

# Upload via SSH/SFTP to:
/home/[user]/domains/premierdebrismanagement.site/public_html/

# Build on server
cd /home/[user]/domains/premierdebrismanagement.site/public_html/
npm install
npm run build

# PM2 process management
pm2 start npm --name "premier-debris" -- start
pm2 save
```

### Cloudflare Setup

- DNS proxied through Cloudflare
- SSL: Full (strict)
- Caching: Standard
- Grounding Box Worker for AI Overview targeting

---

## Testing Checklist

Before deployment:

- [ ] All phone numbers use tracking number (not hardcoded)
- [ ] Schema validates in Google Rich Results Test
- [ ] Mobile responsive (test all breakpoints)
- [ ] Page speed <3s on mobile
- [ ] All internal links work
- [ ] CTAs visible above fold
- [ ] Forms submit correctly
- [ ] Analytics/GTM firing

---

## Common Mistakes to Avoid

1. **Hardcoding phone numbers** — Always use environment variable
2. **City+Service combo URLs** — Use hub pages instead
3. **Generic anchor text** — Use descriptive, varied anchors
4. **Same schema on every page** — Page-specific schema only
5. **Burying links at bottom** — Link in first 80-100 words
6. **AI-generated hero images** — Use real photos
7. **Missing geo in FAQs** — Add city to every question
8. **Orphan pages** — Every page needs 3+ internal links
