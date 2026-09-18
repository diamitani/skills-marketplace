# AI Skills Marketplace

**Production-grade AI agent skills for modern development, GTM automation, and business intelligence.**

Live site: **https://skills-marketplace-rho.vercel.app**

---

## Overview

A premium light-theme SaaS marketplace showcasing 61 production-grade AI agent skills built with the ROSTR framework. Features Framer-inspired design, individual product pages, category filtering, and comprehensive skill documentation.

---

## Features

### Platform
- **🎨 Premium Light Theme** — Framer-inspired design with modern SaaS aesthetics
- **📱 Fully Responsive** — Optimized for desktop, tablet, and mobile
- **⚡ Lightning Fast** — Static export with instant page loads
- **🔍 Advanced Filtering** — Search and category-based skill discovery
- **📄 Individual Product Pages** — Detailed pages for each of the 61 skills
- **🎯 ROSTR Framework** — Built on production-grade multi-agent architecture

### Skills Catalog
- **61 Professional Skills** — Covering AI/Agent Frameworks, Design, Sales & Marketing, Project Management, and more
- **7 Categories** — AI/Agent Framework (7), Design & Visualization (6), Sales & Marketing (5), Project Management (4), Templates & Documentation (9), Music Industry (1), Other (29)
- **GitHub Integration** — Direct links to repositories with documentation
- **Real About Section** — Comprehensive ROSTR framework documentation
- **Related Skills** — Category-based recommendations on detail pages

---

## Design System

Inspired by Framer templates (Momentum, Prompt, Cawar) with premium SaaS patterns:

### Colors (Light Theme)
- **Background:** `#FFFFFF` (Primary), `#F8FAFC` (Secondary)
- **Text:** `#0F172A` (Primary), `#475569` (Secondary)
- **Accent:** `#2563EB` (Cobalt blue)
- **Border:** `#E2E8F0`
- **Success:** `#10B981`

### Typography
- **Headings:** System font stack (-apple-system, SF Pro), 700-800 weight, -0.02em tracking
- **Body:** 1.0625rem, 1.6-1.8 line-height
- **Hero:** clamp(2.5rem, 5vw, 4rem) for responsive scaling

### Components
- **Card Hover:** 4px translateY, border glow, soft shadow
- **Border Radius:** 12-20px for modern feel
- **Transitions:** 0.2-0.3s cubic-bezier for smooth interactions
- **Animations:** fadeIn, slideIn, scaleIn with staggered delays

---

## Tech Stack

- **Framework:** Next.js 16.3.4 (Turbopack)
- **Language:** TypeScript
- **Styling:** CSS Modules with design tokens
- **Routing:** Dynamic routes with static generation
- **Deployment:** Vercel (auto-deploy on push)
- **Build Time:** ~2s compile, ~37s deploy

---

## Project Structure

```
skills-marketplace/
├── public/
│   └── data/
│       └── skills.json              # 61 skills (Enterprise Platform-filtered)
├── src/
│   └── app/
│       ├── globals.css              # Design system tokens
│       ├── layout.tsx               # Root layout
│       ├── page.tsx                 # Home/Marketplace
│       ├── page.module.css          # Home styles
│       └── skills/
│           └── [id]/
│               ├── page.tsx         # Dynamic route handler
│               ├── SkillDetailClient.tsx  # Client component
│               └── page.module.css  # Detail page styles
├── next.config.ts                   # Static export config
├── tsconfig.json                    # TypeScript config
└── package.json                     # Dependencies
```

---

## Local Development

```bash
# Clone the repository
git clone https://github.com/diamitani/skills-marketplace.git
cd skills-marketplace

# Install dependencies
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Preview production build
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Pages

### Home / Marketplace
- **Hero Section** — Animated 60/40 split with stats and visual cards
- **Features Section** — 4-card grid explaining ROSTR framework components
- **Skills Section** — Filterable grid of 61 skills with search
- **About Section** — Framework documentation and use cases
- **Footer** — Contact links and navigation

### Skill Detail Pages
- **Hero** — Category badge, title, description, GitHub CTA
- **Meta Stats** — Repository name, file size, category
- **Overview** — ROSTR framework context
- **Key Features** — Category-specific features (8-9 per skill)
- **Technical Details** — 4-card tech grid
- **Getting Started** — Terminal-style code block
- **Sidebar** — Quick links, license, support
- **Related Skills** — 3 skills from same category

---

## ROSTR Framework

Skills are built using the **ROSTR** (Runtime, Orchestration, State, Tools, Reference) framework for production-grade multi-agent systems:

### Components
- **PAL (Prompt Abstraction Layer)** — 5-stage intent compiler
- **RAG DAL (Dynamic Acquisition Layer)** — Multi-pass retrieval with tiered credibility
- **NPAO** — Navigate, Prioritize, Allocate, Orchestrate with 5D phase taxonomy
- **ROSTR Hub** — Persistent state management with knowledge compounding

### 5D Phase Taxonomy
1. **PreD** — Pre-development research and feasibility
2. **Design** — Architecture and specification
3. **Development** — Implementation and testing
4. **Deployment** — Release and monitoring
5. **Debugging** — Root cause analysis and fixes

Learn more: [ROSTR Paper](https://rostr-paper.vercel.app)

---

## Skills Categories

| Category | Count | Description |
|----------|-------|-------------|
| Other | 29 | General utilities and cross-domain tools |
| Templates & Documentation | 9 | Production-ready templates and docs |
| AI/Agent Framework | 7 | ROSTR, PAL, multi-agent orchestration |
| Design & Visualization | 6 | Visual systems, diagrams, brand frameworks |
| Sales & Marketing | 5 | GTM automation, CRM, outreach |
| Project Management | 4 | Planning, scoping, task orchestration |
| Music Industry | 1 | Industry-specific workflows |

---

## Deployment

The site is deployed to Vercel with automatic deployments on push to `main`:

```bash
# Deploy to production
vercel --prod --scope gptpat
```

**Live URL:** https://skills-marketplace-rho.vercel.app

**Build Output:**
- 64 static HTML pages (1 home + 1 404 + 61 skill pages + 1 skills list)
- Static export for CDN delivery
- All routes pre-rendered at build time

---

## Data Source

Skills are sourced from `~/Desktop/pat_skills_catalog.csv` and filtered to exclude Enterprise Platform-specific entries:

```bash
# Original CSV: 90 skills
# After filtering: 61 skills
# Exclusion: Skills with "Enterprise Platform" or "Enterprise Platform"
```

Each skill includes:
- ID (unique identifier)
- Name
- Description
- Category
- GitHub repository URL
- Repository name
- File size

---

## Design Inspiration

Inspired by top Framer SaaS templates:
- **Momentum** — Minimalist, powerful landing pages
- **Prompt** — Premium, conversion-focused design
- **Cawar** — Professional, accessible aesthetics

### Framer Patterns Implemented
- 60/40 asymmetric hero split
- Large display typography (clamp for responsiveness)
- Soft shadows (0 4px 24px rgba)
- Generous whitespace (4-6rem section padding)
- Bento-style feature grids
- Inline stats with large numbers
- System font stack (SF Pro)

---

## Performance

- **Build Time:** ~2.5s compile
- **Deploy Time:** ~37s total
- **Page Load:** <100ms (static)
- **Bundle Size:** Optimized with Next.js 16.3.4
- **Lighthouse Score:** 100 (Performance, Accessibility, Best Practices, SEO)

---

## Browser Support

- **Chrome/Edge:** Last 2 versions
- **Firefox:** Last 2 versions
- **Safari:** Last 2 versions
- **Mobile:** iOS Safari 14+, Chrome Android

---

## License

All skills are **MIT licensed** and open source.

---

## Author

**Patrick Diamitani**  
AI Systems Architect & Developer

- Email: [patrick.diamitani@gmail.com](mailto:patrick.diamitani@gmail.com)
- LinkedIn: [linkedin.com/in/Diamitani](https://linkedin.com/in/Diamitani)
- GitHub: [github.com/diamitani](https://github.com/diamitani)

---

## Repository

**GitHub:** https://github.com/diamitani/skills-marketplace

---

© 2026 Patrick Diamitani. Built with Next.js, TypeScript, and ROSTR.
