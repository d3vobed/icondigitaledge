# IconDigitalEdge — Digital Marketing Agency Website

A premium dark-themed agency website for **IconDigitalEdge**, built with Next.js 16, TypeScript, and Tailwind CSS 4.

Marketing · Technology · Design — one growth system.

## Tech Stack

- **Framework:** Next.js 16 (App Router) + TypeScript
- **Styling:** Tailwind CSS 4 with custom brand tokens (teal `#24aeb0` on near-black)
- **Animations:** Framer Motion (count-up stats, scroll reveals, carousels, mega-menu)
- **Fonts:** Space Grotesk (display) + Inter (body) via `next/font`
- **Icons:** Lucide React

## Sections

| Section | Description |
|---|---|
| Hero | Centered headline with teal radial glow + dual pill CTAs |
| Stats bar | Animated count-up numbers with bordered grid |
| Global Partner | 6 location cards (USA, UK, Canada, Nigeria, Ghana, Kenya) with flags |
| Testimonials | Auto-rotating carousel with client wordmarks |
| Services | Marketing / Technology / Design tab switcher with 17 services |
| Case Studies | Result-focused cards with metric highlights |
| Why Choose Us | 6 value propositions |
| Business Types | Startups · Growing · Enterprise · NGOs |
| Awards | Partner badges & recognition |
| Blog | "Insights From the Team" cards |
| CTA Banner | Full-bleed teal banner with team photo blend |
| Footer | 5-column sitemap with socials and partner badges |

## Getting Started

```bash
bun install
bun run dev     # http://localhost:3000
```

## Build

```bash
bun run build   # production build
bun run start   # serve production build
```

## Project Structure

```
src/
├── app/
│   ├── layout.tsx        # fonts + metadata
│   ├── page.tsx          # homepage (assembles all sections)
│   └── globals.css       # Tailwind 4 theme tokens + brand utilities
└── components/site/
    ├── navbar.tsx        # sticky nav with mega-menu + mobile drawer
    ├── hero.tsx
    ├── stats-bar.tsx     # count-up statistics
    ├── global-partner.tsx
    ├── testimonials.tsx
    ├── services.tsx      # tabbed service grid
    ├── case-studies.tsx
    ├── about-card.tsx
    ├── why-choose.tsx
    ├── business-types.tsx
    ├── awards.tsx
    ├── blog-section.tsx
    ├── cta-banner.tsx
    ├── footer.tsx
    └── ui.tsx            # logo, pill buttons, section headings
```

## Deployment

Deployed on Vercel. Connect the repo in the Vercel dashboard or use the CLI:

```bash
vercel --prod
```
