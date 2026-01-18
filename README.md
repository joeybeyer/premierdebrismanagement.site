# Premier Debris Management

**Domain:** premierdebrismanagement.site  
**Vertical:** Dumpster Rental Services  
**Business Model:** Pay-Per-Call Lead Generation  
**Target Markets:** National (Top 50 MSAs)

---

## Project Overview

Premier Debris Management is a lead generation property in the dumpster rental vertical, targeting homeowners, contractors, and property managers needing roll-off dumpster rentals for construction, renovation, cleanout, and demolition projects. The site monetizes through pay-per-call arbitrage, routing qualified calls to vetted dumpster rental operators nationwide.

### Revenue Model

| Metric | Value |
|--------|-------|
| Avg. Inbound Call Value | $15-16 |
| Publisher Payout | $10-11 |
| Net Margin | ~30% |
| Target Monthly Calls | 500+ |

### Buyer Network
- Channel Edge Media (Nathan)
- Prime Dumpster
- Judah's call center network
- Local/regional dumpster operators

---

## Quick Start

```bash
# Clone repository
git clone [repo-url]
cd premierdebrismanagement

# Install dependencies
npm install

# Set environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

### Required Environment Variables

```env
# Call Tracking
RINGBA_ACCOUNT_ID=
RINGBA_CAMPAIGN_ID=
RETREAVER_API_KEY=
NEXT_PUBLIC_TRACKING_NUMBER=

# Analytics
GA4_MEASUREMENT_ID=
GTM_CONTAINER_ID=

# CRM Integration
WEBHOOK_URL=
```

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Hosting | DirectAdmin / VPS |
| CDN | Cloudflare |
| Call Tracking | Ringba (buyer) / Retreaver (publisher) |
| Analytics | GA4 + GTM |
| Forms | React Hook Form + Server Actions |
| Schema | JSON-LD (LocalBusiness, Service, FAQ, Product) |

---

## Project Structure

```
premierdebrismanagement/
├── app/
│   ├── layout.tsx                    # Root layout with schema
│   ├── page.tsx                      # Homepage
│   ├── (services)/
│   │   ├── dumpster-rental/
│   │   │   └── page.tsx              # Main service hub
│   │   ├── 10-yard-dumpster/
│   │   ├── 20-yard-dumpster/
│   │   ├── 30-yard-dumpster/
│   │   └── 40-yard-dumpster/
│   ├── (use-cases)/
│   │   ├── construction-dumpster/
│   │   ├── roofing-dumpster/
│   │   ├── home-renovation-dumpster/
│   │   ├── estate-cleanout-dumpster/
│   │   └── demolition-dumpster/
│   ├── (locations)/
│   │   ├── [city]/
│   │   │   └── page.tsx              # City hub pages
│   │   └── [city]/[neighborhood]/
│   │       └── page.tsx              # Neighborhood pages
│   ├── about/
│   ├── contact/
│   ├── pricing/
│   └── api/
│       ├── lead/
│       └── webhook/
├── components/
│   ├── ui/                           # Design system
│   ├── forms/                        # Lead capture
│   ├── layout/                       # Header, Footer, Nav
│   ├── sections/                     # Page sections
│   └── dumpster/                     # Size cards, comparisons
├── lib/
│   ├── tracking.ts                   # Ringba/Retreaver integration
│   ├── schema.ts                     # JSON-LD generators
│   ├── cities.ts                     # City/geo utilities
│   └── utils.ts
├── content/
│   ├── cities.json                   # City data for programmatic pages
│   ├── services.json                 # Service definitions
│   └── sizes.json                    # Dumpster size specs
├── public/
│   ├── images/
│   │   ├── dumpsters/                # Size-specific images
│   │   └── projects/                 # Use case images
│   └── icons/
└── docs/
    ├── CLAUDE.md
    ├── SPEC.md
    ├── PLAN.md
    ├── BRAND.md
    └── SEO-STRATEGY.md
```

---

## Core Services (Dumpster Sizes)

| Size | Dimensions | Capacity | Best For | Avg. Price |
|------|------------|----------|----------|------------|
| 10 Yard | 12'L × 8'W × 3.5'H | 4 pickup loads | Small cleanouts, garage cleanup | $300-450 |
| 20 Yard | 22'L × 8'W × 4.5'H | 8 pickup loads | Renovation, roofing (up to 25 sq) | $350-550 |
| 30 Yard | 22'L × 8'W × 6'H | 12 pickup loads | Large renovation, construction | $400-650 |
| 40 Yard | 22'L × 8'W × 8'H | 16 pickup loads | Commercial, demolition, new build | $450-800 |

---

## Use Cases (Problem Pages)

1. **Construction Dumpster Rental** — New builds, contractors, job sites
2. **Roofing Dumpster Rental** — Shingle tear-off, roof replacement
3. **Home Renovation Dumpster** — Kitchen/bath remodel, whole-house reno
4. **Estate Cleanout Dumpster** — Hoarding, foreclosure, inherited property
5. **Demolition Dumpster** — Deck removal, shed teardown, structural demo
6. **Yard Waste Dumpster** — Landscaping, tree removal, brush clearing

---

## Target Markets (Phase 1)

### Tier 1 (High-Volume)
- Houston, TX
- Phoenix, AZ
- Dallas, TX
- Atlanta, GA
- Miami, FL

### Tier 2 (Secondary)
- Tampa, FL
- San Antonio, TX
- Austin, TX
- Charlotte, NC
- Denver, CO

### Tier 3 (Opportunistic)
- Markets with weak local competition
- Storm-affected regions (seasonal)
- Areas with active construction booms

---

## Call Routing Architecture

```
                    ┌─────────────────┐
                    │   User Lands    │
                    │   on Website    │
                    └────────┬────────┘
                             │
                    ┌────────▼────────┐
                    │  Click-to-Call  │
                    │  or Form Submit │
                    └────────┬────────┘
                             │
              ┌──────────────┼──────────────┐
              │              │              │
     ┌────────▼───────┐ ┌────▼────┐ ┌───────▼───────┐
     │   Retreaver    │ │   IVR   │ │    Webhook    │
     │  (Publisher)   │ │ Qualify │ │   (Lead DB)   │
     └────────┬───────┘ └────┬────┘ └───────────────┘
              │              │
              └──────┬───────┘
                     │
            ┌────────▼────────┐
            │     Ringba      │
            │  (Buyer Router) │
            └────────┬────────┘
                     │
        ┌────────────┼────────────┐
        │            │            │
   ┌────▼────┐  ┌────▼────┐  ┌────▼────┐
   │ Nathan  │  │  Prime  │  │ Judah's │
   │ (CEM)   │  │Dumpster │  │ Network │
   └─────────┘  └─────────┘  └─────────┘
```

---

## Conversion Goals

| Action | Priority | Value |
|--------|----------|-------|
| Phone Call (90+ sec) | Primary | $15-16 |
| Form Submission | Secondary | $8-10 |
| Quote Request | Secondary | $5-8 |
| Email Capture | Tertiary | $0.50 |

---

## Key Commands

```bash
# Development
npm run dev              # Start dev server
npm run build            # Production build
npm run start            # Start production server

# Code Quality
npm run lint             # ESLint
npm run type-check       # TypeScript
npm run format           # Prettier

# Deployment
npm run deploy           # Build + upload to DirectAdmin
```

---

## Documentation

| Document | Purpose |
|----------|---------|
| [CLAUDE.md](./docs/CLAUDE.md) | AI assistant instructions |
| [SPEC.md](./docs/SPEC.md) | Technical specification |
| [PLAN.md](./docs/PLAN.md) | Implementation roadmap |
| [BRAND.md](./docs/BRAND.md) | Brand identity guide |
| [SEO-STRATEGY.md](./docs/SEO-STRATEGY.md) | SEO & content strategy |

---

## Related Properties

- DumpsterChamps.com (flagship)
- PortableToiletsChamp.com (portable sanitation)
- SeologicAgency.com (agency)

---

## License

Proprietary - All Rights Reserved

*Part of Joseph's Lead Gen Portfolio*
