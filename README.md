# AI Skills Marketplace

**Professional AI agent skills for development, automation, design, and business operations.**

Live site: **https://skills-marketplace-rho.vercel.app**

---

## Overview

A premium SaaS marketplace showcasing 61 production-grade AI agent skills built with the ROSTR framework. Features category filtering, search functionality, and a modern dark theme inspired by agensi.io.

---

## Features

- **61 Professional Skills** — Covering AI/Agent Frameworks, Design, Sales & Marketing, Project Management, and more
- **Category Filtering** — Browse by domain: AI/Agent Framework, Design & Visualization, Sales & Marketing, Templates & Documentation, etc.
- **Search Functionality** — Find skills by name or description
- **Premium Design** — Dark theme with animated gradient orbs, hover effects, and responsive layout
- **Responsive** — Optimized for desktop, tablet, and mobile
- **Static Export** — Fast, CDN-ready deployment

---

## Tech Stack

- **Next.js 16.3.4** — React framework with static export
- **TypeScript** — Type-safe development
- **CSS Modules** — Scoped styling with design tokens
- **Vercel** — Production deployment

---

## Categories

| Category | Skills |
|----------|--------|
| Other | 29 |
| Templates & Documentation | 9 |
| AI/Agent Framework | 7 |
| Design & Visualization | 6 |
| Sales & Marketing | 5 |
| Project Management | 4 |
| Music Industry | 1 |

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

## Project Structure

```
skills-marketplace/
├── public/
│   └── data/
│       └── skills.json          # Skills data (61 entries)
├── src/
│   └── app/
│       ├── globals.css          # Global styles & design tokens
│       ├── layout.tsx           # Root layout
│       ├── page.tsx             # Main marketplace page
│       └── page.module.css      # Component styles
├── next.config.ts               # Next.js configuration (static export)
├── tsconfig.json                # TypeScript configuration
└── package.json                 # Dependencies
```

---

## Design System

### Colors
- **Primary Accent:** `#2563EB` (Cobalt blue)
- **Background:** `#0a0a0f` (Deep dark)
- **Card Background:** `#1a1a24` (Elevated surface)
- **Text Primary:** `#f5f5f7` (Near white)
- **Text Secondary:** `#a1a1aa` (Medium gray)

### Typography
- **Headings:** System font stack, -0.02em tracking, 800 weight
- **Body:** System font stack, 1.6 line-height

### Components
- **Card Hover:** 4px lift, border glow, shadow
- **Gradient Orbs:** Animated floating backgrounds
- **Category Badges:** Uppercase, letter-spaced, outlined

---

## Data Source

Skills are sourced from `pat_skills_catalog.csv` and filtered to exclude company-specific entries. Each skill includes:

- Name
- Description
- Category
- GitHub repository link
- Repository name
- File size

---

## Deployment

The site is deployed to Vercel with automatic deployments on push to `main`:

```bash
# Deploy to production
vercel --prod --scope gptpat
```

**Live URL:** https://skills-marketplace-rho.vercel.app

---

## ROSTR Framework

Skills are built using the **ROSTR** (Runtime, Orchestration, State, Tools, Reference) framework for production-grade multi-agent systems:

- **PAL** — Prompt Abstraction Layer
- **RAG DAL** — Retrieval-Augmented Generation Dynamic Acquisition Layer
- **NPAO** — Navigate, Prioritize, Allocate, Orchestrate
- **Rostr Hub** — Agent Operating System with Persistent Reference Architecture

Learn more: [ROSTR Paper](https://rostr-paper.vercel.app)

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
