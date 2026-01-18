# SEO-STRATEGY.md - SEO & Content Strategy

## Core Philosophy

```
Performance + Structure + Signal Clarity = AI Era Ranking
```

**Key Insight:** Physical distance is only 3% of the proximity equation. Relevance score overrides distance decay.

**Speed Targets:**
- Page load: <100ms = 80% AI Overview win rate
- AI Overview ranking: 3 days with proper setup
- Research Company method: 1 hour to AI Overview ranking

---

## Site Architecture

### Hub & Spoke Model

```
HOMEPAGE (Authority Hub)
│
├── /dumpster-rental/                 # Main Service Hub (Tier 1)
│
├── SIZE PAGES (Tier 1) ─────────────────────────────────
│   ├── /10-yard-dumpster/
│   ├── /20-yard-dumpster/
│   ├── /30-yard-dumpster/
│   └── /40-yard-dumpster/
│
├── USE CASE PAGES (Tier 1) ──────────────────────────────
│   ├── /construction-dumpster/
│   ├── /roofing-dumpster/
│   ├── /renovation-dumpster/
│   ├── /estate-cleanout-dumpster/
│   └── /demolition-dumpster/
│
├── CITY HUBS (Tier 1) ───────────────────────────────────
│   ├── /houston/
│   │   ├── /houston/heights/         # Neighborhood (Tier 2)
│   │   ├── /houston/memorial/
│   │   └── /houston/galleria/
│   ├── /phoenix/
│   ├── /dallas/
│   └── ... (more cities)
│
└── BLOG / PAA CONTENT (Tier 3) ──────────────────────────
    ├── /blog/how-to-choose-dumpster-size/
    ├── /blog/dumpster-permit-guide/
    └── ... (supporting content)
```

### Critical Rule: Never Create City + Service Combo Pages

```
❌ BAD:  /houston-dumpster-rental/        # Dilutes authority
❌ BAD:  /20-yard-dumpster-houston/       # Keyword stuffing
✅ GOOD: /houston/ + /20-yard-dumpster/   # Hub & spoke
```

---

## Internal Linking Formula

### The Golden Rule

```
1 UP + 2-3 ACROSS = Money
```

**1 UP:** Link to parent hub in first paragraph (above fold)
**2-3 ACROSS:** Link to sibling pages and related content

### Link Placement Rules

1. **Link within first 80-100 words** — Critical for BERT confidence
2. **Use contextual links** — Inside paragraphs, not buttons/nav
3. **Descriptive anchor text** — Never "click here" or "read more"
4. **One anchor = One page** — Don't use same anchor for different pages

### Examples by Page Type

**Neighborhood Page (/houston/heights/):**
```
In first paragraph:
- 1 UP: Link to /houston/ ("dumpster rental in Houston")

In body:
- ACROSS: Link to /houston/memorial/ ("nearby Memorial area")
- ACROSS: Link to /houston/montrose/ ("adjacent Montrose neighborhood")
- ACROSS: Link to /20-yard-dumpster/ ("20 yard dumpster for renovation")
```

**Size Page (/20-yard-dumpster/):**
```
In first paragraph:
- 1 UP: Link to homepage or /dumpster-rental/

In body:
- ACROSS: Link to /10-yard-dumpster/ ("smaller 10 yard option")
- ACROSS: Link to /30-yard-dumpster/ ("larger 30 yard container")
- ACROSS: Link to /renovation-dumpster/ ("home renovation projects")
```

### Anchor Text Distribution

| Type | Percentage | Example |
|------|------------|---------|
| Branded | 40-50% | "Premier Debris Management" |
| Generic | 20-30% | "our dumpster services", "learn more" |
| Partial Match | 15-20% | "professional dumpster rental" |
| Exact Match | 5-10% | "20 yard dumpster rental" |
| Long Tail | 5-10% | "construction dumpster rental Houston" |

---

## Content Hierarchy for BERT

### Element Confidence Levels

| Element | Confidence | Use For |
|---------|------------|---------|
| **Tables** | EXTREME | Size comparisons, pricing, specs |
| **Lists (ul/ol)** | Very High | Key takeaways, features, benefits |
| **H2/H3 Headings** | High | Service + Geo (within 2 tokens) |
| **Definition Lists (dt)** | High | FAQs, glossary (rarely used = opportunity) |

### Key Takeaways Format

Add immediately after every H1:

```html
<div class="key-takeaways">
  <h2>Key Takeaways</h2>
  <ul>
    <li>Same-day delivery available in 50+ metros</li>
    <li>10 yard dumpsters start at $299, 40 yard at $449</li>
    <li>7-day rental period included, extensions available</li>
  </ul>
</div>
```

**Results:** This format has achieved 9,000+ snippets and 12,000+ AI Overviews.

### Size Comparison Table (Homepage)

```html
<table>
  <thead>
    <tr>
      <th>Size</th>
      <th>Dimensions</th>
      <th>Capacity</th>
      <th>Best For</th>
      <th>Price</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>10 Yard</td>
      <td>12'L × 8'W × 3.5'H</td>
      <td>4 pickup loads</td>
      <td>Garage cleanout, small bathroom remodel</td>
      <td>$299-$449</td>
    </tr>
    <!-- Continue for all sizes -->
  </tbody>
</table>
```

---

## Information Gain Requirements

Per Google Patent #11,366,956, content must be genuinely unique.

### Neighborhood Page Requirements (80% Unique)

Every neighborhood page MUST include:

1. **Local permit requirements** — Specific to that area
2. **HOA considerations** — If applicable
3. **Common project types** — What locals actually do
4. **Local landmarks/roads** — For relevance signals
5. **Zip codes served** — Geographic specificity
6. **Microclimate factors** — If relevant (humidity, weather)

### Example: /houston/heights/

```markdown
## Dumpster Rental in Houston Heights

The Houston Heights historic district has specific requirements for 
dumpster placement. [Link to /houston/ in first sentence]

### Heights Permit Requirements
Houston Heights is a designated historic district under City of Houston 
Ordinance 2010-796. Dumpsters placed on public streets require a 
Right-of-Way permit from Houston Public Works (allow 3-5 business days).

### Navigating Heights HOA Rules
Many Heights neighborhoods, particularly in the Historic Heights East 
and West subdivisions, have HOA restrictions on dumpster visibility. 
Most require:
- Placement in driveway, not street
- Maximum 7-day rental
- Notification to HOA before delivery

### Popular Heights Projects
The Houston Heights sees significant renovation activity due to its 
historic bungalow stock. Our most common Heights deliveries:
- Kitchen and bath remodels in Norhill area
- Garage conversions near Heights Boulevard
- Foundation repairs (pier and beam common here)
- Backyard additions in Houston Heights West

### Service Area
We deliver 10, 20, 30, and 40 yard dumpsters throughout Houston Heights, 
including zip codes 77008, 77009, and 77007. Delivery available on 
Heights Boulevard, Yale Street, Studewood, and all residential streets.
```

---

## FAQ Strategy

### Always Add Geo to Questions

Even if the original PAA doesn't have geo, add it:

```
❌ "How much does a 20 yard dumpster cost?"
✅ "How much does a 20 yard dumpster cost in Houston?"

❌ "What fits in a 10 yard dumpster?"
✅ "What fits in a 10 yard dumpster for a Houston home cleanout?"
```

### FAQ Schema Implementation

Only add FAQPage schema where FAQ content actually exists:

```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    {
      "@type": "Question",
      "name": "How much does a 20 yard dumpster rental cost in Houston?",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "20 yard dumpster rentals in Houston typically range from $349 to $549, depending on rental duration and debris type. This includes delivery, pickup, and disposal of up to 4 tons of debris."
      }
    }
  ]
}
```

### High-Priority FAQ Topics

1. **Pricing questions** (highest search volume)
   - "How much does a [size] yard dumpster cost in [city]?"
   - "What's the cheapest dumpster rental in [city]?"

2. **Size selection questions**
   - "What size dumpster for a [project type]?"
   - "What fits in a [size] yard dumpster?"

3. **Process questions**
   - "How long can I keep a dumpster?"
   - "Do I need a permit for a dumpster in [city]?"

4. **Prohibited items**
   - "What can't go in a dumpster?"
   - "Can I put [material] in a dumpster?"

---

## Schema Implementation

### Schema by Page Type

| Page Type | Schema Types |
|-----------|--------------|
| Homepage | LocalBusiness, Organization |
| Size Pages | Product, Offer |
| Use Case Pages | Service |
| City Hubs | Service + areaServed |
| Neighborhood Pages | Service + areaServed (specific) |
| All Pages with FAQ | FAQPage (where content exists) |
| All Pages | BreadcrumbList |

### LocalBusiness Schema (Homepage)

```json
{
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://premierdebrismanagement.site/#business",
  "name": "Premier Debris Management",
  "description": "Professional dumpster rental services for construction, renovation, and cleanout projects nationwide.",
  "url": "https://premierdebrismanagement.site",
  "telephone": "+18885550199",
  "priceRange": "$$",
  "areaServed": {
    "@type": "Country",
    "name": "United States"
  },
  "serviceType": [
    "Dumpster Rental",
    "Roll-Off Container Rental",
    "Construction Debris Removal",
    "Residential Waste Removal"
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Dumpster Sizes",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "10 Yard Dumpster Rental"
        }
      }
    ]
  }
}
```

### Product Schema (Size Pages)

```json
{
  "@context": "https://schema.org",
  "@type": "Product",
  "name": "20 Yard Dumpster Rental",
  "description": "20 yard roll-off dumpster rental for medium renovation projects, roofing up to 25 squares, and estate cleanouts. Holds approximately 8 pickup truck loads.",
  "url": "https://premierdebrismanagement.site/20-yard-dumpster/",
  "image": "https://premierdebrismanagement.site/images/20-yard-dumpster.webp",
  "brand": {
    "@id": "https://premierdebrismanagement.site/#business"
  },
  "offers": {
    "@type": "Offer",
    "price": "349",
    "priceCurrency": "USD",
    "priceValidUntil": "2025-12-31",
    "availability": "https://schema.org/InStock",
    "url": "https://premierdebrismanagement.site/20-yard-dumpster/"
  }
}
```

---

## AI Overview Strategy

### Grounding Box Requirements

For fastest AI Overview ranking:

- **File size:** <10KB total
- **Load time:** <50ms
- **Structure:** Pure HTML, no external CSS/JS
- **H1:** Exact target query
- **First 100 chars:** Direct answer
- **Schema:** Inline JSON-LD

### Trinity Loop

```
Website → NotebookLM (Audio) → YouTube
    ↑_________________________________↓
```

1. Create content on website
2. Feed to NotebookLM, generate audio podcast
3. Upload podcast to YouTube with link back
4. Each channel reinforces the others

### Research Company Strategy (For Competitive Terms)

For high-volume keywords like "best dumpster rental companies":

1. **Create research company** (e.g., "Dumpster Industry Research")
2. **Publish "research report"** (listicle disguised as academic content)
3. **5,000+ words**, formal tone, methodology section
4. **Press release** announcing the research
5. **Amplify on LinkedIn Pulse** (ChatGPT cites LinkedIn)

---

## Content Freshness Strategy

### Identifying High-Impression Underperformers

1. Open Google Search Console → Performance Report
2. Filter by Pages
3. Sort by Impressions (highest first)
4. Look for pages with high impressions but low CTR (<3%)
5. Identify pages ranking positions 5-20
6. Export top 10-20 pages for refresh priority

### Content Refresh Checklist

| Element | Action | Priority |
|---------|--------|----------|
| Title Tag | Add power words, current year | HIGH |
| Meta Description | Rewrite with clear value prop | HIGH |
| H1 Heading | Align with search intent | HIGH |
| Introduction | Rewrite first 100 words | HIGH |
| Internal Links | Add in first 100 words | HIGH |
| Outdated Info | Update prices, stats, dates | MEDIUM |
| Content Gaps | Add missing subtopics | MEDIUM |
| Images | Add/update with alt text | MEDIUM |
| Schema | Add or update | LOW |

---

## Keyword Targets

### Head Terms (High Volume, High Competition)

| Keyword | Monthly Volume | Difficulty | Target Page |
|---------|----------------|------------|-------------|
| dumpster rental | 135,000 | High | /dumpster-rental/ |
| dumpster rental near me | 90,000 | High | Homepage + Cities |
| rent a dumpster | 33,000 | Medium | /dumpster-rental/ |
| roll off dumpster | 22,000 | Medium | /dumpster-rental/ |

### Size Keywords (Medium Volume, Medium Competition)

| Keyword | Monthly Volume | Target Page |
|---------|----------------|-------------|
| 10 yard dumpster | 8,100 | /10-yard-dumpster/ |
| 20 yard dumpster | 9,900 | /20-yard-dumpster/ |
| 30 yard dumpster | 6,600 | /30-yard-dumpster/ |
| 40 yard dumpster | 5,400 | /40-yard-dumpster/ |

### Use Case Keywords (Medium Volume, Lower Competition)

| Keyword | Monthly Volume | Target Page |
|---------|----------------|-------------|
| construction dumpster | 5,400 | /construction-dumpster/ |
| roofing dumpster | 2,400 | /roofing-dumpster/ |
| dumpster for home renovation | 1,300 | /renovation-dumpster/ |
| estate cleanout dumpster | 720 | /estate-cleanout-dumpster/ |

### Local Keywords (Long-Tail, Lower Competition)

| Keyword Pattern | Example | Target Page |
|-----------------|---------|-------------|
| dumpster rental [city] | dumpster rental houston | /houston/ |
| [city] dumpster rental prices | houston dumpster rental prices | /houston/ |
| [size] yard dumpster [city] | 20 yard dumpster houston | /houston/ |
| dumpster rental [neighborhood] | dumpster rental heights | /houston/heights/ |

---

## Link Building Strategy

### Priority Tactics

| Tactic | Purpose | Effort |
|--------|---------|--------|
| Press Release | Authority + AI citation | Low |
| Local Citations | NAP consistency + relevance | Low |
| Chamber of Commerce | Local authority | Medium |
| Contractor Directories | Industry relevance | Medium |
| Guest Posts | Topical authority | High |

### Press Release Strategy

- **Frequency:** 1-2 per month
- **Cost:** ~$80 via ABNewswire
- **Topics:**
  - New city launch
  - Service expansion
  - Company milestones
  - Industry insights

### Citation Building

Ensure consistent NAP across:
- Google Business Profile
- Yelp (critical for AI recommendations)
- Facebook Business
- Apple Maps
- Bing Places
- Industry directories (waste management, construction)

---

## Measurement & KPIs

### Weekly Metrics

- Organic sessions (GA4)
- Phone calls from organic (Ringba)
- Form submissions (GA4 events)
- Keyword rankings (GSC)

### Monthly Metrics

- Pages indexed (GSC)
- AI Overview appearances
- Referring domains
- Domain authority trend

### Quarterly Goals

| Quarter | Metric | Target |
|---------|--------|--------|
| Q1 | Pages indexed | 100+ |
| Q1 | Organic sessions | 2,000/mo |
| Q2 | Keywords ranking top 10 | 50+ |
| Q2 | Monthly calls from organic | 100+ |
| Q3 | AI Overview appearances | 20+ queries |
| Q4 | Organic revenue contribution | 50%+ |

---

## Do's and Don'ts

### DO ✅

- Add geo to EVERY PAA and FAQ
- Create page-specific schema
- Put bullet summaries at TOP of pages
- Link within first 80-100 words
- Use contextual links in paragraphs
- Upload real photos (not AI-generated)
- Use tables for comparisons (EXTREME confidence)
- Update high-impression underperformers first

### DO NOT ❌

- Create City + Service combo pages
- Use sidebars/footers for primary links
- Put same schema on every page
- Use Gemini for content (SynthID watermarking)
- Use generic anchor text ("click here")
- Ignore Yelp (critical for AI recommendations)
- Create orphan pages
- Bury important links at bottom
