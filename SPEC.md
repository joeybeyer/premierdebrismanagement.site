# SPEC.md - Technical Specification

## Overview

Premier Debris Management is a Next.js 14 lead generation website for the dumpster rental vertical. This document outlines the technical architecture, components, and implementation requirements.

---

## Tech Stack

| Category | Technology | Version |
|----------|------------|---------|
| Framework | Next.js | 14.x (App Router) |
| Language | TypeScript | 5.x |
| Styling | Tailwind CSS | 3.x |
| Forms | React Hook Form | 7.x |
| Validation | Zod | 3.x |
| Icons | Lucide React | Latest |
| Analytics | GA4 + GTM | - |
| Call Tracking | Ringba / Retreaver | - |
| Hosting | DirectAdmin VPS | Ubuntu 22.04 |
| CDN | Cloudflare | - |
| Process Manager | PM2 | Latest |

---

## Architecture

### App Router Structure

```
app/
├── layout.tsx                      # Root layout
├── page.tsx                        # Homepage
├── globals.css                     # Global styles
├── (marketing)/                    # Marketing pages group
│   ├── about/page.tsx
│   ├── contact/page.tsx
│   └── pricing/page.tsx
├── (services)/                     # Service pages group
│   ├── dumpster-rental/page.tsx    # Main service hub
│   ├── 10-yard-dumpster/page.tsx
│   ├── 20-yard-dumpster/page.tsx
│   ├── 30-yard-dumpster/page.tsx
│   └── 40-yard-dumpster/page.tsx
├── (use-cases)/                    # Use case pages group
│   ├── construction-dumpster/page.tsx
│   ├── roofing-dumpster/page.tsx
│   ├── renovation-dumpster/page.tsx
│   ├── estate-cleanout-dumpster/page.tsx
│   └── demolition-dumpster/page.tsx
├── (locations)/                    # Dynamic city pages
│   ├── [city]/
│   │   ├── page.tsx                # City hub
│   │   └── [neighborhood]/
│   │       └── page.tsx            # Neighborhood page
│   └── sitemap.ts                  # Dynamic sitemap
└── api/
    ├── lead/route.ts               # Lead submission
    └── webhook/route.ts            # Ringba/Retreaver webhooks
```

### Component Architecture

```
components/
├── ui/                             # Base UI components
│   ├── Button.tsx
│   ├── Card.tsx
│   ├── Input.tsx
│   ├── Select.tsx
│   ├── Badge.tsx
│   ├── Modal.tsx
│   └── index.ts
├── layout/                         # Layout components
│   ├── Header.tsx
│   ├── Footer.tsx
│   ├── Navigation.tsx
│   ├── MobileMenu.tsx
│   └── index.ts
├── forms/                          # Form components
│   ├── QuoteForm.tsx
│   ├── ContactForm.tsx
│   ├── CallbackForm.tsx
│   └── index.ts
├── sections/                       # Page sections
│   ├── Hero.tsx
│   ├── SizeComparison.tsx
│   ├── UseCases.tsx
│   ├── ServiceAreas.tsx
│   ├── Testimonials.tsx
│   ├── FAQ.tsx
│   ├── CTA.tsx
│   └── index.ts
├── dumpster/                       # Dumpster-specific
│   ├── SizeCard.tsx
│   ├── SizeTable.tsx
│   ├── PricingCard.tsx
│   ├── CapacityVisual.tsx
│   └── index.ts
└── seo/                            # SEO components
    ├── Schema.tsx
    ├── KeyTakeaways.tsx
    ├── Breadcrumbs.tsx
    └── index.ts
```

---

## Core Components

### 1. Root Layout

```tsx
// app/layout.tsx
import { Outfit, Inter } from 'next/font/google'
import { Header } from '@/components/layout/Header'
import { Footer } from '@/components/layout/Footer'
import { Schema } from '@/components/seo/Schema'
import { generateLocalBusinessSchema } from '@/lib/schema'
import './globals.css'

const outfit = Outfit({ 
  subsets: ['latin'],
  variable: '--font-outfit'
})

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter'
})

export const metadata = {
  title: {
    default: 'Premier Debris Management | Dumpster Rental Services',
    template: '%s | Premier Debris Management'
  },
  description: 'Professional dumpster rental services for construction, renovation, and cleanout projects. Same-day delivery available.',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${inter.variable}`}>
      <head>
        <Schema data={generateLocalBusinessSchema()} />
      </head>
      <body className="font-inter antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  )
}
```

### 2. Phone Button Component

```tsx
// components/ui/PhoneButton.tsx
'use client'

import { Phone } from 'lucide-react'
import { cn } from '@/lib/utils'

interface PhoneButtonProps {
  variant?: 'primary' | 'secondary' | 'outline'
  size?: 'sm' | 'md' | 'lg'
  showIcon?: boolean
  className?: string
}

export const PhoneButton = ({ 
  variant = 'primary',
  size = 'md',
  showIcon = true,
  className
}: PhoneButtonProps) => {
  const number = process.env.NEXT_PUBLIC_TRACKING_NUMBER || '(888) 555-0199'
  const digits = number.replace(/\D/g, '')
  
  return (
    <a 
      href={`tel:+1${digits}`}
      className={cn(
        'inline-flex items-center justify-center gap-2 font-bold rounded-xl transition-all',
        // Variants
        variant === 'primary' && 'bg-amber-500 text-slate-900 hover:bg-amber-400',
        variant === 'secondary' && 'bg-slate-800 text-white hover:bg-slate-700',
        variant === 'outline' && 'border-2 border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-slate-900',
        // Sizes
        size === 'sm' && 'px-4 py-2 text-sm',
        size === 'md' && 'px-6 py-3 text-base',
        size === 'lg' && 'px-8 py-4 text-lg',
        className
      )}
    >
      {showIcon && <Phone className={cn(
        size === 'sm' && 'w-4 h-4',
        size === 'md' && 'w-5 h-5',
        size === 'lg' && 'w-6 h-6'
      )} />}
      {number}
    </a>
  )
}
```

### 3. Size Comparison Table

```tsx
// components/dumpster/SizeTable.tsx
import { DUMPSTER_SIZES } from '@/content/sizes'
import { Check } from 'lucide-react'
import Link from 'next/link'

export const SizeTable = () => {
  return (
    <div className="overflow-x-auto">
      <table className="w-full border-collapse">
        <thead>
          <tr className="bg-slate-900 text-white">
            <th className="p-4 text-left">Size</th>
            <th className="p-4 text-left">Dimensions</th>
            <th className="p-4 text-left">Capacity</th>
            <th className="p-4 text-left">Best For</th>
            <th className="p-4 text-left">Price</th>
            <th className="p-4"></th>
          </tr>
        </thead>
        <tbody>
          {DUMPSTER_SIZES.map((size, i) => (
            <tr 
              key={size.size} 
              className={i % 2 === 0 ? 'bg-white' : 'bg-slate-50'}
            >
              <td className="p-4 font-bold text-lg">{size.size} Yard</td>
              <td className="p-4 text-slate-600">{size.dimensions}</td>
              <td className="p-4 text-slate-600">{size.capacity}</td>
              <td className="p-4">
                <ul className="space-y-1">
                  {size.bestFor.slice(0, 2).map(use => (
                    <li key={use} className="flex items-center gap-2 text-sm">
                      <Check className="w-4 h-4 text-green-500" />
                      {use}
                    </li>
                  ))}
                </ul>
              </td>
              <td className="p-4 font-bold text-amber-600">{size.price}</td>
              <td className="p-4">
                <Link 
                  href={`/${size.slug}/`}
                  className="text-amber-600 hover:text-amber-700 font-semibold"
                >
                  Learn More →
                </Link>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
```

### 4. Quote Form

```tsx
// components/forms/QuoteForm.tsx
'use client'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { z } from 'zod'
import { Button } from '@/components/ui/Button'
import { Input } from '@/components/ui/Input'
import { Select } from '@/components/ui/Select'

const quoteSchema = z.object({
  name: z.string().min(2, 'Name is required'),
  phone: z.string().min(10, 'Valid phone required'),
  email: z.string().email('Valid email required'),
  zip: z.string().min(5, 'Valid zip code required'),
  size: z.enum(['10', '20', '30', '40']),
  projectType: z.string().min(1, 'Select project type'),
  deliveryDate: z.string().min(1, 'Select delivery date'),
})

type QuoteFormData = z.infer<typeof quoteSchema>

export const QuoteForm = () => {
  const { register, handleSubmit, formState: { errors, isSubmitting } } = useForm<QuoteFormData>({
    resolver: zodResolver(quoteSchema)
  })
  
  const onSubmit = async (data: QuoteFormData) => {
    const response = await fetch('/api/lead', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data)
    })
    
    if (response.ok) {
      // Track conversion, redirect to thank you
      window.location.href = '/thank-you'
    }
  }
  
  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
      <Input 
        label="Full Name"
        {...register('name')}
        error={errors.name?.message}
      />
      
      <Input 
        label="Phone Number"
        type="tel"
        {...register('phone')}
        error={errors.phone?.message}
      />
      
      <Input 
        label="Email"
        type="email"
        {...register('email')}
        error={errors.email?.message}
      />
      
      <Input 
        label="Zip Code"
        {...register('zip')}
        error={errors.zip?.message}
      />
      
      <Select 
        label="Dumpster Size"
        {...register('size')}
        options={[
          { value: '10', label: '10 Yard ($299-$449)' },
          { value: '20', label: '20 Yard ($349-$549)' },
          { value: '30', label: '30 Yard ($399-$649)' },
          { value: '40', label: '40 Yard ($449-$799)' },
        ]}
        error={errors.size?.message}
      />
      
      <Select 
        label="Project Type"
        {...register('projectType')}
        options={[
          { value: 'renovation', label: 'Home Renovation' },
          { value: 'roofing', label: 'Roofing Project' },
          { value: 'construction', label: 'Construction' },
          { value: 'cleanout', label: 'Estate/Home Cleanout' },
          { value: 'demolition', label: 'Demolition' },
          { value: 'landscaping', label: 'Landscaping/Yard Work' },
          { value: 'other', label: 'Other' },
        ]}
        error={errors.projectType?.message}
      />
      
      <Select 
        label="Delivery Date"
        {...register('deliveryDate')}
        options={[
          { value: 'asap', label: 'ASAP / Same Day' },
          { value: 'tomorrow', label: 'Tomorrow' },
          { value: 'this-week', label: 'This Week' },
          { value: 'next-week', label: 'Next Week' },
          { value: 'flexible', label: 'Flexible' },
        ]}
        error={errors.deliveryDate?.message}
      />
      
      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full"
        size="lg"
      >
        {isSubmitting ? 'Submitting...' : 'Get Free Quote'}
      </Button>
      
      <p className="text-center text-sm text-slate-500">
        Or call us directly: <PhoneButton variant="link" />
      </p>
    </form>
  )
}
```

---

## API Routes

### Lead Submission

```typescript
// app/api/lead/route.ts
import { NextRequest, NextResponse } from 'next/server'
import { z } from 'zod'

const leadSchema = z.object({
  name: z.string(),
  phone: z.string(),
  email: z.string().email(),
  zip: z.string(),
  size: z.enum(['10', '20', '30', '40']),
  projectType: z.string(),
  deliveryDate: z.string(),
})

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()
    const data = leadSchema.parse(body)
    
    // Send to webhook (CRM, Ringba, etc.)
    if (process.env.WEBHOOK_URL) {
      await fetch(process.env.WEBHOOK_URL, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...data,
          source: 'premierdebrismanagement.site',
          timestamp: new Date().toISOString(),
          ip: request.headers.get('x-forwarded-for'),
          userAgent: request.headers.get('user-agent'),
        })
      })
    }
    
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error('Lead submission error:', error)
    return NextResponse.json(
      { error: 'Invalid submission' },
      { status: 400 }
    )
  }
}
```

### Webhook Handler

```typescript
// app/api/webhook/route.ts
import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  const body = await request.json()
  
  // Handle Ringba/Retreaver call events
  const { event, callId, duration, disposition } = body
  
  // Log or process call data
  console.log('Call webhook:', { event, callId, duration, disposition })
  
  return NextResponse.json({ received: true })
}
```

---

## Data Types

```typescript
// types/index.ts

export interface DumpsterSize {
  size: '10' | '20' | '30' | '40'
  name: string
  dimensions: string
  capacity: string
  weight: string
  bestFor: string[]
  price: string
  slug: string
}

export interface City {
  name: string
  state: string
  slug: string
  neighborhoods: Neighborhood[]
  population?: number
  tier: 1 | 2 | 3
}

export interface Neighborhood {
  name: string
  slug: string
  zipCodes: string[]
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
```

---

## Environment Variables

```env
# .env.local

# Call Tracking (REQUIRED)
NEXT_PUBLIC_TRACKING_NUMBER=(888) 555-0199
RINGBA_ACCOUNT_ID=
RINGBA_CAMPAIGN_ID=
RETREAVER_API_KEY=

# Analytics
NEXT_PUBLIC_GA4_ID=G-XXXXXXXXXX
NEXT_PUBLIC_GTM_ID=GTM-XXXXXXX

# Webhooks
WEBHOOK_URL=https://hooks.example.com/lead

# Site Config
NEXT_PUBLIC_SITE_URL=https://premierdebrismanagement.site
NEXT_PUBLIC_SITE_NAME=Premier Debris Management
```

---

## Performance Targets

| Metric | Target | Tool |
|--------|--------|------|
| LCP | < 2.5s | Lighthouse |
| FID | < 100ms | Lighthouse |
| CLS | < 0.1 | Lighthouse |
| TTI | < 3.0s | Lighthouse |
| Page Size | < 500KB | DevTools |
| Requests | < 30 | DevTools |

### Optimization Strategies

1. **Images**: WebP format, lazy loading, responsive sizes
2. **Fonts**: `next/font` with display swap
3. **Components**: Dynamic imports for below-fold
4. **Caching**: Cloudflare CDN, static generation where possible
5. **Bundle**: Tree shaking, code splitting by route

---

## Testing Requirements

### Unit Tests

- Schema generation functions
- Form validation
- Utility functions

### Integration Tests

- Lead submission flow
- Phone button tracking
- Form → API → Webhook chain

### E2E Tests

- Homepage to lead submission
- Size page navigation
- City page rendering
- Mobile responsive behavior

---

## Deployment

### Build Process

```bash
# Local build
npm run build

# Check for errors
npm run type-check
npm run lint

# Test production build
npm run start
```

### DirectAdmin Deployment

```bash
# 1. SSH into server
ssh user@server

# 2. Navigate to domain
cd ~/domains/premierdebrismanagement.site/public_html

# 3. Pull latest code
git pull origin main

# 4. Install dependencies
npm ci --production

# 5. Build
npm run build

# 6. Restart PM2
pm2 restart premier-debris
```

### PM2 Configuration

```javascript
// ecosystem.config.js
module.exports = {
  apps: [{
    name: 'premier-debris',
    script: 'npm',
    args: 'start',
    cwd: '/home/user/domains/premierdebrismanagement.site/public_html',
    env: {
      NODE_ENV: 'production',
      PORT: 3000
    }
  }]
}
```

---

## Monitoring

- **Uptime**: UptimeRobot or similar
- **Errors**: Sentry (optional)
- **Analytics**: GA4 + GTM
- **Call Tracking**: Ringba dashboard
- **Search Console**: Google Search Console
