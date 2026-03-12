# Website Desa Suluun Tiga

Official website for **Desa Suluun Tiga** — a village in Minahasa Selatan district, North Sulawesi Province, Indonesia. This platform serves as the primary digital gateway for residents and the general public to access village information, news & events, and community services.

---

## Table of Contents

1. [Project Overview](#project-overview)
2. [Features](#features)
3. [Technology Stack](#technology-stack)
4. [System Architecture](#system-architecture)
5. [Project Structure](#project-structure)
6. [Installation](#installation)
7. [Configuration](#configuration)
8. [Usage](#usage)
9. [Development Guide](#development-guide)
10. [Future Improvements](#future-improvements)

---

## Project Overview

### Purpose

Desa Suluun Tiga needed a transparent, easily accessible digital presence to serve its community. Before this website existed, residents had no centralised source for official village news, historical records, or a formal channel to submit complaints to the village government.

### Problem It Solves

| Problem | Solution |
|---|---|
| No central source for village news & events | Announcements page with photo galleries per event |
| Village history not documented online | Dedicated information section covering founding, government lineage, and village expansion |
| No structured complaint channel for residents | WhatsApp-based complaint system with clear instructions |
| Population data not publicly visible | Live population statistics dashboard on the home page |

### Who It Is For

- **Village residents** — stay informed about events, announcements, and services
- **Village government staff** — communicate with the community digitally
- **Prospective visitors and researchers** — learn about the village's history and demographics

---

## Features

- 🏠 **Home Page** — Hero banner, village organisation structure, population statistics, quick-access links, embedded map, and contact information
- 📖 **Village Information** — Four dedicated sub-pages:
  - Village Founding History (*Sejarah Perintisan Desa*)
  - Government History (*Sejarah Pemerintahan*) — leadership timeline from 1785 to present
  - Village Expansion (*Pemekaran Desa*)
  - Village Gallery (*Galeri Desa*)
- 📣 **Announcements & Events** — Event listing with per-event photo galleries (e.g., social aid distribution, village meetings, food security programmes)
- 📝 **Community Complaints** — WhatsApp-integrated complaint submission with step-by-step instructions
- 📊 **Population Statistics** — Real-time population table covering total residents, gender breakdown, births, deaths, newcomers, and departures
- 🔍 **SEO & Sitemap** — Auto-generated `sitemap.xml` and `robots.txt` via `next-sitemap`
- 📱 **Responsive Design** — Mobile-first layout with a collapsible navigation menu

---

## Technology Stack

### Frontend

| Technology | Version | Purpose |
|---|---|---|
| [Next.js](https://nextjs.org/) | ^15.4.3 | React framework with App Router (SSR/SSG) |
| [React](https://react.dev/) | 19.1.0 | UI component library |
| [TypeScript](https://www.typescriptlang.org/) | ^5 | Static typing |
| [Tailwind CSS](https://tailwindcss.com/) | ^4.1.11 | Utility-first CSS framework |
| [Lucide React](https://lucide.dev/) | ^0.525.0 | Icon library |

### Build & Tooling

| Tool | Purpose |
|---|---|
| [PostCSS](https://postcss.org/) + `@tailwindcss/postcss` | CSS processing |
| [next-sitemap](https://github.com/iamvishnusankar/next-sitemap) | Sitemap & robots.txt generation |
| [Turbopack](https://turbo.build/pack) | Fast development bundler (used via `next dev --turbopack`) |

### Hosting & External Services

| Service | Purpose |
|---|---|
| [Vercel](https://vercel.com/) | Deployment and hosting (`https://suluuntiga.vercel.app/`) |
| Google Maps (embedded iframe) | Village location map |
| WhatsApp | Community complaint channel |

> **No database or backend API** — all content (announcements, history, statistics) is stored directly in TypeScript data files within the source code.

---

## System Architecture

```
Browser (Client)
       │
       ▼
  Vercel CDN / Edge Network
       │
       ▼
  Next.js 15 App (App Router)
  ┌────────────────────────────────────────┐
  │  Layout (Navigation + Footer)          │
  │  ┌──────────────────────────────────┐  │
  │  │  Pages (Server Components)       │  │
  │  │  ├── / (Home)                    │  │
  │  │  ├── /information/*              │  │
  │  │  ├── /announcements/[id]         │  │
  │  │  └── /complaints                 │  │
  │  └──────────────────────────────────┘  │
  │  Shared Components (Client/Server)     │
  │  Static Assets (/public)              │
  └────────────────────────────────────────┘
       │
       ▼
  Static Data Files (TypeScript)
  (announcements/data.ts, inline component data)
```

### How Components Interact

1. `layout.tsx` wraps every page with the sticky `<Navigation>` and `<Footer>` components.
2. Each route folder (`/information`, `/announcements`, `/complaints`) contains a `page.tsx` that composes domain-specific components.
3. Reusable UI primitives live in `src/app/shared/` and are imported by any page.
4. Announcement detail pages (`/announcements/[id]`) use a `data.ts` file as a static data source and are rendered at build time.
5. `next-sitemap` runs as a post-build step to generate `sitemap.xml` and `robots.txt` in the `/public` directory.

---

## Project Structure

```
website-desa-suluun-tiga/
├── public/                        # Static assets served directly
│   ├── gallery/                   # Village gallery images
│   ├── announcement/              # Event photo images
│   ├── logo.jpg                   # Village logo
│   ├── logo.ico                   # Favicon
│   ├── struktur.jpg               # Organisation structure image
│   ├── sitemap.xml                # Auto-generated sitemap (post-build)
│   └── sitemap-0.xml
│
├── src/
│   └── app/                       # Next.js App Router root
│       ├── layout.tsx             # Root layout (Navigation + Footer + metadata)
│       ├── page.tsx               # Home page
│       ├── global.css             # Global styles (Tailwind base imports)
│       │
│       ├── shared/                # Reusable components used across multiple pages
│       │   ├── navigation.tsx     # Sticky top navigation with mobile menu
│       │   ├── footer.tsx         # Site footer with contact info and links
│       │   ├── hero-section.tsx   # Reusable hero banner component
│       │   ├── announcement-card.tsx       # Card component for event listings
│       │   ├── contact-info-section.tsx    # Contact details grid
│       │   ├── map-section.tsx             # Embedded Google Maps section
│       │   ├── organization-structure.tsx  # Village org chart component
│       │   ├── quick-links-section.tsx     # Quick-access card links
│       │   └── village-statistic-section.tsx  # Population statistics table & charts
│       │
│       ├── information/           # Village information section
│       │   ├── page.tsx           # Information landing page with quick nav
│       │   ├── establishment/
│       │   │   └── page.tsx       # Village founding history page
│       │   ├── government/
│       │   │   └── page.tsx       # Government leadership history page
│       │   ├── expansion/
│       │   │   └── page.tsx       # Village expansion history page
│       │   ├── gallery/
│       │   │   └── page.tsx       # Village photo gallery page
│       │   └── components/        # Components specific to the information section
│       │       ├── establishment-section.tsx
│       │       ├── expansion-section.tsx
│       │       ├── gallery-grid.tsx
│       │       ├── government-section.tsx
│       │       └── pioneering-section.tsx
│       │
│       ├── announcements/         # News & events section
│       │   ├── page.tsx           # Announcements listing page
│       │   ├── data.ts            # Static event data (titles, descriptions, photo lists)
│       │   ├── [id]/
│       │   │   └── page.tsx       # Dynamic event detail page with photo gallery
│       │   └── components/
│       │       ├── event-gallery-card.tsx   # Individual event card
│       │       └── event-photo-gallery.tsx  # Full-screen photo gallery modal
│       │
│       └── complaints/            # Community complaints section
│           ├── page.tsx           # Complaints page
│           └── components/
│               ├── whatsapp-section.tsx    # WhatsApp contact card
│               └── instruction-section.tsx # Step-by-step complaint instructions
│
├── next.config.ts                 # Next.js configuration
├── next-sitemap.config.js         # Sitemap generation configuration
├── postcss.config.mjs             # PostCSS configuration (Tailwind CSS plugin)
├── tsconfig.json                  # TypeScript configuration
└── package.json                   # Project metadata and scripts
```

---

## Installation

### Requirements

| Requirement | Version |
|---|---|
| [Node.js](https://nodejs.org/) | 18.x or later (20.x recommended) |
| npm | 9.x or later |

### Steps

1. **Clone the repository**

   ```bash
   git clone https://github.com/reyimanuel/website-desa-suluun-tiga.git
   cd website-desa-suluun-tiga
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm run dev
   ```

4. **Open in browser**

   Navigate to [http://localhost:3000](http://localhost:3000).

### Build for Production

```bash
npm run build   # Compiles and generates sitemap
npm run start   # Starts the production server
```

---

## Configuration

### `next-sitemap.config.js`

Controls automatic sitemap and `robots.txt` generation after each build.

| Key | Value | Description |
|---|---|---|
| `siteUrl` | `https://suluuntiga.vercel.app/` | Base URL used in generated sitemap |
| `generateRobotsTxt` | `true` | Generates `robots.txt` alongside the sitemap |

```js
// next-sitemap.config.js
module.exports = {
    siteUrl: 'https://suluuntiga.vercel.app/',
    generateRobotsTxt: true,
};
```

### `next.config.ts`

Standard Next.js configuration file. No custom options are currently set.

### Environment Variables

This project does not require any environment variables for local development. All data is sourced from static TypeScript files.

---

## Usage

### Viewing the Website

Open [https://suluuntiga.vercel.app/](https://suluuntiga.vercel.app/) in any browser.

### Navigation

| Page | URL | Description |
|---|---|---|
| Home | `/` | Village overview, stats, contacts |
| Information | `/information` | Hub page linking to all information sub-pages |
| Founding History | `/information/establishment` | History of how the village was established |
| Government History | `/information/government` | Leadership timeline from 1785 onward |
| Village Expansion | `/information/expansion` | Details on the village's administrative expansion |
| Gallery | `/information/gallery` | Photo gallery of the village |
| Announcements | `/announcements` | List of all news and events |
| Event Detail | `/announcements/[id]` | Individual event page with photo slideshow |
| Complaints | `/complaints` | Submit a complaint or suggestion via WhatsApp |

### Adding a New Announcement

All announcement data is stored in `src/app/announcements/data.ts`. To add a new event:

1. Add a new entry to the `events` object using a unique URL-safe key.
2. Supply the `title`, `description`, and an array of `photos`.
3. Place the corresponding images in `public/announcement/`.

```typescript
// src/app/announcements/data.ts
export const events = {
    "nama-event-baru": {
        title: "Judul Event",
        description: "Deskripsi singkat event",
        photos: [
            { id: "1", src: "/announcement/nama-event-baru-1.jpg", alt: "Foto 1" },
        ],
    },
    // ...existing events
}
```

The event will automatically appear on the `/announcements` listing page, and its detail page will be accessible at `/announcements/nama-event-baru`.

### Updating Village Statistics

Population data is hardcoded in `src/app/shared/village-statistic-section.tsx` inside the `reportData` object. Update the `month`, `year`, `initialPopulation`, `changes`, and `finalPopulation` fields to reflect the latest figures.

---

## Development Guide

### Available Scripts

| Script | Command | Description |
|---|---|---|
| Development | `npm run dev` | Starts Next.js with Turbopack HMR on `localhost:3000` |
| Build | `npm run build` | Production build + sitemap generation |
| Start | `npm run start` | Serves the production build |
| Lint | `npm run lint` | Runs Next.js ESLint rules |

### Coding Conventions

- **Language**: TypeScript — all components and data files must be `.tsx` / `.ts`.
- **Styling**: Tailwind CSS utility classes only — no separate `.css` files per component.
- **Components**: Functional components with named exports (e.g., `export function MyComponent()`).
- **Client components**: Add `"use client"` at the top of the file only when the component uses React hooks or browser APIs (e.g., `useState`).
- **Data**: Static content lives in colocated `data.ts` files or directly in the component file. There is no external API or database.
- **Images**: Place all images in the relevant `/public` subdirectory and reference them with absolute paths starting with `/`.

### Contributing

1. Fork the repository and create a feature branch:

   ```bash
   git checkout -b feature/your-feature-name
   ```

2. Make your changes following the coding conventions above.
3. Lint your changes:

   ```bash
   npm run lint
   ```

4. Commit with a clear message and open a pull request against the `main` branch.

### Running Tests

There is currently no automated test suite in this project. Manual testing against a local development server (`npm run dev`) is the recommended approach before submitting a pull request.

---

## Future Improvements

- 🗄️ **CMS Integration** — Connect to a headless CMS (e.g., Sanity, Contentful) so village staff can update announcements and statistics without touching code.
- 🔐 **Admin Panel** — A password-protected dashboard for managing content.
- 🌐 **Multi-language Support** — Full English/Indonesian language toggle (currently primarily Indonesian).
- 📋 **Online Forms** — Replace the WhatsApp complaint system with an in-app form with server-side submission and email notifications.
- 🔔 **Push Notifications** — Notify residents of new announcements via browser push notifications.
- ♿ **Accessibility Audit** — WCAG 2.1 compliance review and improvements.

---

© 2025 Desa Suluun Tiga. All rights reserved.
