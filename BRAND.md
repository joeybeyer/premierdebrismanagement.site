# BRAND.md - Brand Identity Guide

## Brand Philosophy

**Premier Debris Management** positions itself as the reliable, professional choice for dumpster rental services. We're not just renting containers—we're solving problems and removing obstacles from people's projects.

### Core Promise
> "Your project. Your timeline. Our dumpster. Delivered."

### Brand Personality
- **Reliable** — We show up when we say we will
- **Professional** — Clean trucks, clear pricing, courteous drivers
- **Efficient** — No wasted time, no hidden fees
- **Local** — We know your city, your neighborhoods, your needs

---

## Visual Identity

### Logo Concept

The Premier Debris Management logo combines industrial strength with clean professionalism:

- **Mark:** Stylized dumpster silhouette or abstract container shape
- **Wordmark:** "Premier Debris Management" in Outfit Bold
- **Tagline:** "Dumpster Rental Services" in Inter Regular

### Color Palette

#### Primary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Charcoal** | `#1a1a1a` | 26, 26, 26 | Headers, primary text, footer |
| **Slate 900** | `#0f172a` | 15, 23, 42 | Dark backgrounds, nav |
| **Amber 500** | `#f59e0b` | 245, 158, 11 | CTAs, buttons, highlights |

#### Secondary Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Slate 800** | `#1e293b` | 30, 41, 59 | Cards on dark, secondary bg |
| **Amber 400** | `#fbbf24` | 251, 191, 36 | Hover states |
| **Orange 500** | `#f97316` | 249, 115, 22 | Urgency, "same day" badges |
| **Orange 600** | `#ea580c` | 234, 88, 12 | Emergency CTAs |

#### Brand Orange (Dumpster Color)

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Brand Orange** | `#ee7a1c` | 238, 122, 28 | Dumpster imagery, brand accent |
| **Brand Orange Dark** | `#df5f12` | 223, 95, 18 | Shadows on dumpsters |

#### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Slate 100** | `#f1f5f9` | 241, 245, 249 | Light backgrounds |
| **Slate 200** | `#e2e8f0` | 226, 232, 240 | Borders, dividers |
| **Slate 300** | `#cbd5e1` | 203, 213, 225 | Disabled states |
| **Slate 500** | `#64748b` | 100, 116, 139 | Secondary text |
| **White** | `#ffffff` | 255, 255, 255 | Cards, backgrounds |

#### Semantic Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Success** | `#10b981` | 16, 185, 129 | Availability, confirmation |
| **Warning** | `#f59e0b` | 245, 158, 11 | Caution, limited availability |
| **Error** | `#ef4444` | 239, 68, 68 | Errors, sold out |
| **Info** | `#3b82f6` | 59, 130, 246 | Information callouts |

### Color Usage Guidelines

```css
/* Backgrounds */
.bg-light { background: #f1f5f9; }      /* Main content areas */
.bg-dark { background: #0f172a; }       /* Hero, footer, CTAs */
.bg-card { background: #ffffff; }       /* Cards on light bg */
.bg-card-dark { background: #1e293b; }  /* Cards on dark bg */

/* Text */
.text-primary { color: #1a1a1a; }       /* Headers, important */
.text-secondary { color: #64748b; }     /* Body, descriptions */
.text-on-dark { color: #ffffff; }       /* Text on dark bg */
.text-accent { color: #f59e0b; }        /* Links, highlights */

/* CTAs */
.btn-primary { 
  background: #f59e0b; 
  color: #1a1a1a; 
}
.btn-primary:hover { 
  background: #fbbf24; 
}
.btn-secondary { 
  background: #1e293b; 
  color: #ffffff; 
}
.btn-urgent { 
  background: #ea580c; 
  color: #ffffff; 
}
```

---

## Typography

### Font Families

**Display/Headings:** Outfit  
Google Fonts: `https://fonts.google.com/specimen/Outfit`

**Body/UI:** Inter  
Google Fonts: `https://fonts.google.com/specimen/Inter`

### Type Scale

| Element | Font | Size | Weight | Line Height | Letter Spacing |
|---------|------|------|--------|-------------|----------------|
| H1 | Outfit | 48px | 800 | 56px (1.17) | -0.02em |
| H2 | Outfit | 36px | 700 | 44px (1.22) | -0.01em |
| H3 | Outfit | 24px | 600 | 32px (1.33) | 0 |
| H4 | Outfit | 20px | 600 | 28px (1.4) | 0 |
| Body Large | Inter | 18px | 400 | 28px (1.55) | 0 |
| Body | Inter | 16px | 400 | 24px (1.5) | 0 |
| Body Small | Inter | 14px | 400 | 20px (1.43) | 0 |
| Caption | Inter | 12px | 500 | 16px (1.33) | 0.02em |
| Button | Inter | 16px | 600 | 24px (1.5) | 0.01em |

### Typography CSS

```css
/* Headings */
h1 {
  font-family: 'Outfit', sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 1.17;
  letter-spacing: -0.02em;
  color: #1a1a1a;
}

h2 {
  font-family: 'Outfit', sans-serif;
  font-size: 36px;
  font-weight: 700;
  line-height: 1.22;
  letter-spacing: -0.01em;
  color: #1a1a1a;
}

h3 {
  font-family: 'Outfit', sans-serif;
  font-size: 24px;
  font-weight: 600;
  line-height: 1.33;
  color: #1a1a1a;
}

/* Body */
body {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 400;
  line-height: 1.5;
  color: #64748b;
}

/* CTA Buttons */
.btn {
  font-family: 'Inter', sans-serif;
  font-size: 16px;
  font-weight: 600;
  line-height: 1.5;
  letter-spacing: 0.01em;
}
```

---

## Voice & Tone

### Brand Voice

**Clear, not clever.** We speak directly and avoid jargon. Our customers are busy—they want answers, not wordplay.

**Confident, not arrogant.** We know our business. We don't need to boast or make claims we can't back up.

**Helpful, not pushy.** We guide customers to the right solution. We don't pressure them into upsells.

**Professional, not corporate.** We're friendly and approachable while maintaining expertise.

### Writing Guidelines

#### We Say / We Don't Say

| ✅ We Say | ❌ We Don't Say |
|-----------|-----------------|
| "Get a free quote" | "Request a consultation" |
| "Same-day delivery" | "Expedited service options" |
| "Clear pricing" | "Competitive rates" |
| "Your dumpster arrives tomorrow" | "Delivery will be facilitated" |
| "Call now" | "Reach out to our team" |
| "10 yard dumpster" | "Compact waste container" |

#### Headlines (Ogilvy Principles)

David Ogilvy: "On average, five times as many people read the headline as read the body copy."

**Formula 1: Benefit + Specificity**
- "Same-Day Dumpster Delivery in Houston—Guaranteed Before 5PM"
- "20 Yard Dumpsters Starting at $349—All-Inclusive Pricing"

**Formula 2: Problem + Solution**
- "Renovation Debris Piling Up? Get a Dumpster Delivered Tomorrow"
- "Roofing Project? The Right Size Dumpster for Your Shingle Tear-Off"

**Formula 3: How-To**
- "How to Choose the Right Dumpster Size for Your Project"
- "How Houston Contractors Save 30% on Waste Removal"

**Formula 4: News/Announcement**
- "Now Serving Phoenix Metro—Same-Day Delivery Available"
- "New: Weekend Delivery Now Available in Dallas"

#### Body Copy Guidelines

1. **Lead with the benefit** — Don't bury the value proposition
2. **Use specific numbers** — "$349" not "affordable," "24-hour delivery" not "fast"
3. **One idea per paragraph** — Easy to scan
4. **Short sentences** — 15-20 words average
5. **Active voice** — "We deliver" not "Delivery is provided"
6. **Address the reader** — Use "you" and "your"

#### CTA Guidelines

**Primary CTAs (high commitment):**
- "Call Now: (888) 555-0199"
- "Get Your Free Quote"
- "Reserve Your Dumpster"

**Secondary CTAs (low commitment):**
- "See Pricing"
- "Compare Sizes"
- "View Service Areas"

**Urgency CTAs (when appropriate):**
- "Same-Day Delivery Available—Call Now"
- "Limited Availability This Week"

---

## Imagery

### Photography Style

**Dumpster Photography:**
- Bright orange dumpsters (brand color #ee7a1c)
- Clean, professional appearance
- Sunny days, blue skies
- Real job sites (residential driveways, construction sites)
- Workers in orange safety vests (when present)

**Project Photography:**
- Before/after renovation shots
- Roofing projects in progress
- Cleanout scenes (organized, not chaotic)
- Construction sites (professional, active)

**Do NOT Use:**
- AI-generated images for hero/product shots
- Stock photos with watermarks
- Overflowing, messy dumpsters
- Bad weather conditions
- Unprofessional-looking equipment

### Image Specifications

| Type | Dimensions | Format | Max Size |
|------|------------|--------|----------|
| Hero | 1920 × 1080 | WebP | 200KB |
| Product Card | 800 × 600 | WebP | 100KB |
| Thumbnail | 400 × 300 | WebP | 50KB |
| Icon | 64 × 64 | SVG | 5KB |

### Alt Text Guidelines

Follow this formula:
```
[Size] yard [color] dumpster [context] [location/project type]
```

Examples:
- "20 yard orange dumpster on residential driveway for home renovation"
- "40 yard roll-off container at commercial construction site in Houston"
- "10 yard dumpster filled with yard waste debris"

---

## UI Components

### Buttons

```
Primary Button:
- Background: Amber 500 (#f59e0b)
- Text: Charcoal (#1a1a1a)
- Hover: Amber 400 (#fbbf24)
- Padding: 16px 32px
- Border Radius: 12px
- Font: Inter 600 16px

Secondary Button:
- Background: Slate 800 (#1e293b)
- Text: White (#ffffff)
- Hover: Slate 700 (#334155)
- Padding: 16px 32px
- Border Radius: 12px

Outline Button:
- Background: Transparent
- Border: 2px Amber 500
- Text: Amber 500
- Hover: Fill Amber 500, Text Charcoal
```

### Cards

```
Service Card:
- Background: White
- Border: 1px Slate 200
- Border Radius: 16px
- Shadow: 0 4px 6px rgba(0,0,0,0.05)
- Padding: 24px
- Hover: Border Amber 500, Shadow increased

Size Card:
- Background: Slate 900
- Text: White
- Border Radius: 16px
- Padding: 32px
- Accent: Amber 500 for pricing
```

### Forms

```
Input Field:
- Background: White
- Border: 1px Slate 300
- Border Radius: 8px
- Padding: 12px 16px
- Focus: Border Amber 500, Ring 2px Amber 100
- Error: Border Error (#ef4444)

Label:
- Font: Inter 500 14px
- Color: Slate 700
- Margin Bottom: 6px
```

---

## Spacing System

Use Tailwind's default scale, favoring these values:

| Token | Value | Use Case |
|-------|-------|----------|
| 4 | 16px | Small gaps, icon spacing |
| 6 | 24px | Card padding, form gaps |
| 8 | 32px | Section internal spacing |
| 12 | 48px | Between sections |
| 16 | 64px | Major section breaks |
| 24 | 96px | Hero padding, page sections |

### Section Spacing

```css
/* Hero Section */
.hero { padding: 96px 0; }

/* Content Sections */
.section { padding: 64px 0; }

/* Cards Grid */
.cards { gap: 24px; }

/* Form Fields */
.form-group { margin-bottom: 16px; }
```

---

## Responsive Breakpoints

| Breakpoint | Width | Target |
|------------|-------|--------|
| `sm` | 640px | Large phones |
| `md` | 768px | Tablets |
| `lg` | 1024px | Small laptops |
| `xl` | 1280px | Desktops |
| `2xl` | 1536px | Large desktops |

### Mobile-First Approach

```css
/* Base: Mobile */
.hero h1 { font-size: 32px; }

/* Tablet and up */
@media (min-width: 768px) {
  .hero h1 { font-size: 40px; }
}

/* Desktop and up */
@media (min-width: 1024px) {
  .hero h1 { font-size: 48px; }
}
```

---

## Iconography

### Icon Library

Use **Lucide React** for consistent, clean icons.

### Common Icons

| Icon | Usage |
|------|-------|
| `Phone` | Call buttons, contact |
| `Truck` | Delivery, service |
| `Package` | Dumpster/container |
| `MapPin` | Locations, service areas |
| `Clock` | Same-day, scheduling |
| `Check` | Features, benefits |
| `ChevronRight` | Links, navigation |
| `Menu` | Mobile navigation |
| `X` | Close, dismiss |

### Icon Sizing

| Context | Size |
|---------|------|
| Inline with text | 16px (w-4 h-4) |
| Button icon | 20px (w-5 h-5) |
| Card icon | 24px (w-6 h-6) |
| Feature icon | 32px (w-8 h-8) |
| Hero icon | 48px (w-12 h-12) |

---

## Motion & Animation

### Principles

- **Purposeful** — Animation should guide attention, not distract
- **Quick** — 150-300ms for most interactions
- **Smooth** — Use ease-out for entering, ease-in for exiting

### Common Animations

```css
/* Hover lift */
.card:hover {
  transform: translateY(-4px);
  transition: transform 200ms ease-out;
}

/* Button press */
.btn:active {
  transform: scale(0.98);
  transition: transform 100ms ease-out;
}

/* Fade in */
.fade-in {
  animation: fadeIn 300ms ease-out;
}

@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}
```

### Page Transitions

Keep page transitions minimal for performance. Focus animation on:
- Hero content stagger
- Card hover states
- Form feedback
- Mobile menu open/close

---

## Accessibility

### Minimum Requirements

- Color contrast ratio: 4.5:1 for text
- Focus states visible on all interactive elements
- Alt text on all images
- Semantic HTML (proper heading hierarchy)
- Keyboard navigable
- Screen reader friendly

### Focus States

```css
/* Visible focus ring */
:focus-visible {
  outline: 2px solid #f59e0b;
  outline-offset: 2px;
}

/* Remove default, add custom */
button:focus {
  outline: none;
  box-shadow: 0 0 0 3px rgba(245, 158, 11, 0.3);
}
```
