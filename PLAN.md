# PLAN.md - Implementation Roadmap

## Project Timeline

**Total Duration:** 4 weeks  
**Launch Target:** MVP in 2 weeks, full launch in 4 weeks

---

## Phase 1: Foundation (Days 1-3)

### Day 1: Project Setup

- [ ] Initialize Next.js 14 project with TypeScript
- [ ] Configure Tailwind CSS with custom design tokens
- [ ] Set up folder structure per SPEC.md
- [ ] Install dependencies (react-hook-form, zod, lucide-react)
- [ ] Configure ESLint + Prettier
- [ ] Set up environment variables
- [ ] Initialize Git repository

```bash
npx create-next-app@latest premierdebrismanagement --typescript --tailwind --app
cd premierdebrismanagement
npm install react-hook-form zod @hookform/resolvers lucide-react
```

### Day 2: Design System

- [ ] Create `lib/utils.ts` with cn() helper
- [ ] Build base UI components:
  - [ ] Button (primary, secondary, outline variants)
  - [ ] Input (with label, error states)
  - [ ] Select (custom dropdown)
  - [ ] Card (with variants)
  - [ ] Badge (sizes, colors)
- [ ] Set up Google Fonts (Outfit + Inter)
- [ ] Create color palette CSS variables
- [ ] Build responsive container component

### Day 3: Layout Components

- [ ] Header component with:
  - [ ] Logo
  - [ ] Navigation (Desktop)
  - [ ] Phone button (prominent)
  - [ ] Mobile menu (hamburger)
- [ ] Footer component with:
  - [ ] Service links
  - [ ] City links (top 5)
  - [ ] Contact info
  - [ ] Legal links
- [ ] Breadcrumbs component
- [ ] KeyTakeaways component (for SEO)

---

## Phase 2: Core Pages (Days 4-7)

### Day 4: Homepage

- [ ] Hero section with:
  - [ ] H1: "Dumpster Rental Services"
  - [ ] Key takeaways (3 bullet points)
  - [ ] Primary CTA (phone button)
  - [ ] Secondary CTA (quote form trigger)
- [ ] Size comparison table (CRITICAL for BERT)
- [ ] Use case cards (link to problem pages)
- [ ] Service areas preview
- [ ] Testimonials section
- [ ] FAQ section with schema
- [ ] Final CTA section

### Day 5: Size Pages (4 pages)

Create template, then generate for each size:

- [ ] `/10-yard-dumpster/`
- [ ] `/20-yard-dumpster/`
- [ ] `/30-yard-dumpster/`
- [ ] `/40-yard-dumpster/`

Each page includes:
- [ ] Key takeaways with specific facts
- [ ] Link to homepage in first 100 words
- [ ] Cross-links to other sizes
- [ ] "What fits" section with list
- [ ] Best projects section
- [ ] Pricing information
- [ ] FAQ with schema
- [ ] CTA section

### Day 6: Use Case Pages (5 pages)

- [ ] `/construction-dumpster/`
- [ ] `/roofing-dumpster/`
- [ ] `/renovation-dumpster/`
- [ ] `/estate-cleanout-dumpster/`
- [ ] `/demolition-dumpster/`

Each page includes:
- [ ] Problem-focused H1
- [ ] Key takeaways
- [ ] Size recommendations table
- [ ] Project-specific content
- [ ] FAQ with schema
- [ ] CTA section

### Day 7: Quote Form & Lead API

- [ ] QuoteForm component with:
  - [ ] Name, phone, email, zip
  - [ ] Dumpster size selection
  - [ ] Project type selection
  - [ ] Delivery date selection
  - [ ] Validation with Zod
- [ ] Lead API route (`/api/lead`)
- [ ] Webhook integration
- [ ] Thank you page
- [ ] Form tracking (GTM events)

---

## Phase 3: Location Pages (Days 8-12)

### Day 8: City Template & Data

- [ ] Create city data structure (`content/cities.json`)
- [ ] Build dynamic city page template
- [ ] Implement `generateStaticParams` for SSG
- [ ] City hub page structure:
  - [ ] H1: "Dumpster Rental in [City], [State]"
  - [ ] Key takeaways (city-specific)
  - [ ] Link to `/dumpster-rental/` in first 100 words
  - [ ] Size links
  - [ ] Local content section (80% unique)
  - [ ] Neighborhood links (2-3 only)
  - [ ] Local FAQ with geo
  - [ ] CTA section

### Day 9: Tier 1 Cities (5 cities)

- [ ] `/houston/`
- [ ] `/phoenix/`
- [ ] `/dallas/`
- [ ] `/atlanta/`
- [ ] `/miami/`

Each with:
- [ ] City-specific permit info
- [ ] Local disposal regulations
- [ ] Popular project types
- [ ] 3-4 neighborhood links
- [ ] Local FAQ (geo in every question)

### Day 10: Tier 2 Cities (5 cities)

- [ ] `/tampa/`
- [ ] `/san-antonio/`
- [ ] `/austin/`
- [ ] `/charlotte/`
- [ ] `/denver/`

### Day 11: Neighborhood Pages (Priority)

Create 3-4 neighborhoods for each Tier 1 city:

**Houston:**
- [ ] `/houston/heights/`
- [ ] `/houston/memorial/`
- [ ] `/houston/galleria/`
- [ ] `/houston/montrose/`

**Phoenix:**
- [ ] `/phoenix/scottsdale/`
- [ ] `/phoenix/chandler/`
- [ ] `/phoenix/tempe/`

(Continue for other Tier 1 cities)

### Day 12: Neighborhood Content

- [ ] Write 80% unique content for each neighborhood
- [ ] Add local landmarks, roads, zip codes
- [ ] Include neighborhood-specific permit info
- [ ] Create local FAQs
- [ ] Implement internal linking (1 UP + 2-3 ACROSS)

---

## Phase 4: SEO & Schema (Days 13-15)

### Day 13: Schema Implementation

- [ ] LocalBusiness schema (homepage)
- [ ] Product schema (size pages)
- [ ] Service schema (city pages)
- [ ] FAQPage schema (all pages with FAQ)
- [ ] BreadcrumbList schema (all pages)
- [ ] Validate with Rich Results Test

### Day 14: Technical SEO

- [ ] Generate sitemap.xml dynamically
- [ ] Create robots.txt
- [ ] Implement canonical URLs
- [ ] Add Open Graph tags
- [ ] Add Twitter Card tags
- [ ] Configure meta descriptions (unique per page)
- [ ] Set up redirects (if migrating)

### Day 15: Internal Linking Audit

- [ ] Verify every page links within first 80-100 words
- [ ] Check anchor text distribution
- [ ] Ensure no orphan pages
- [ ] Verify 1 UP + 2-3 ACROSS formula
- [ ] Add related content links
- [ ] Cross-link size pages

---

## Phase 5: Integration & Testing (Days 16-18)

### Day 16: Call Tracking Setup

- [ ] Configure Ringba campaign
- [ ] Set up Retreaver (if using for publishers)
- [ ] Implement dynamic number insertion
- [ ] Test click-to-call on mobile
- [ ] Verify call attribution
- [ ] Set up call webhook

### Day 17: Analytics Setup

- [ ] Install Google Analytics 4
- [ ] Configure Google Tag Manager
- [ ] Set up conversion tracking:
  - [ ] Phone calls (click-to-call)
  - [ ] Form submissions
  - [ ] Page views
- [ ] Create goals/events
- [ ] Test data collection

### Day 18: QA & Testing

- [ ] Test all forms
- [ ] Test phone buttons (desktop + mobile)
- [ ] Verify all internal links
- [ ] Check 404 handling
- [ ] Mobile responsive testing (all breakpoints)
- [ ] Cross-browser testing (Chrome, Safari, Firefox)
- [ ] Page speed audit (target <3s)
- [ ] Accessibility audit (basic a11y)

---

## Phase 6: Launch (Days 19-21)

### Day 19: Pre-Launch Checklist

- [ ] Final content review
- [ ] Spell check all pages
- [ ] Verify tracking number is correct
- [ ] Test form submission → webhook flow
- [ ] Check all meta tags
- [ ] Validate all schema
- [ ] Take pre-launch screenshots

### Day 20: Deployment

- [ ] Build production bundle
- [ ] Upload to DirectAdmin server
- [ ] Configure PM2
- [ ] Set up SSL certificate
- [ ] Configure Cloudflare DNS
- [ ] Test live site
- [ ] Monitor for errors

### Day 21: Post-Launch

- [ ] Submit sitemap to Google Search Console
- [ ] Request indexing for priority pages
- [ ] Set up uptime monitoring
- [ ] Monitor GA4 for traffic
- [ ] Monitor Ringba for calls
- [ ] Fix any immediate issues

---

## Phase 7: Optimization (Days 22-28)

### Week 4: Iteration

- [ ] Analyze initial traffic data
- [ ] A/B test CTA button copy
- [ ] Optimize underperforming pages
- [ ] Add more city/neighborhood pages
- [ ] Create blog content (PAA targeting)
- [ ] Build backlinks (press release, citations)
- [ ] Monitor rankings
- [ ] Adjust based on call data

---

## Content Requirements

### Homepage
- Word count: 1,500-2,000 words
- Sections: Hero, Sizes, Use Cases, Areas, FAQ, CTA

### Size Pages (each)
- Word count: 800-1,200 words
- Unique content: 70%+

### Use Case Pages (each)
- Word count: 1,000-1,500 words
- Unique content: 80%+

### City Hub Pages (each)
- Word count: 1,000-1,500 words
- Unique content: 80%+

### Neighborhood Pages (each)
- Word count: 600-800 words
- Unique content: 80%+ (CRITICAL)

---

## SEO Milestones

| Milestone | Target Date | Metric |
|-----------|-------------|--------|
| Indexed | Day 25 | All pages in Google |
| First organic traffic | Day 30 | >100 sessions |
| First call from organic | Week 5 | 1+ calls |
| Page 1 rankings (long-tail) | Week 6 | 5+ keywords |
| 100 monthly calls | Month 3 | Revenue target |

---

## Resource Allocation

### Development
- Setup & components: 40%
- Page templates: 30%
- Integration & testing: 20%
- Optimization: 10%

### Content
- City pages: 40%
- Neighborhood pages: 30%
- Size/use case pages: 20%
- Homepage & marketing: 10%

---

## Risk Mitigation

| Risk | Mitigation |
|------|------------|
| Delayed content | Start content Day 1, parallel with dev |
| Call tracking issues | Test thoroughly before launch |
| Poor initial rankings | Focus on long-tail, add content weekly |
| Low conversion | A/B test CTAs, optimize forms |
| Technical issues | Staging environment, rollback plan |

---

## Success Criteria

### MVP (Week 2)
- [ ] Homepage live
- [ ] All 4 size pages live
- [ ] 5 city hubs live
- [ ] Phone tracking working
- [ ] Form submissions working

### Full Launch (Week 4)
- [ ] All use case pages live
- [ ] 10+ city pages live
- [ ] 20+ neighborhood pages live
- [ ] All schema validated
- [ ] GA4 + GTM tracking verified
- [ ] First organic impressions in GSC

### Month 1
- [ ] 500+ organic sessions
- [ ] 10+ calls from organic
- [ ] 20+ keywords ranking
- [ ] 50+ pages indexed
