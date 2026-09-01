# Skills Marketplace — Quick Reference

**Live Site:** https://skills-marketplace-rho.vercel.app  
**GitHub:** https://github.com/diamitani/skills-marketplace  
**Local Path:** ~/repos/skills-marketplace

---

## Quick Commands

```bash
# Development
cd ~/repos/skills-marketplace
npm run dev              # Start dev server (http://localhost:3000)

# Build
npm run build            # Build for production
npm start                # Preview production build

# Deploy
git add -A && git commit -m "Update" && git push    # Auto-deploys via Vercel

# Manual deploy
vercel --prod --scope gptpat
```

---

## Key Features

- ✓ 61 AI agent skills
- ✓ 7 categories with filtering
- ✓ Real-time search
- ✓ Premium dark theme
- ✓ Fully responsive
- ✓ Static export (fast CDN delivery)

---

## Design Tokens

```css
--accent-primary: #2563EB    /* Cobalt blue */
--bg-primary: #0a0a0f         /* OLED dark */
--bg-card: #1a1a24            /* Elevated surface */
--text-primary: #f5f5f7       /* Near white */
--text-secondary: #a1a1aa     /* Gray */
```

---

## Adding New Skills

1. Update `~/Desktop/pat_skills_catalog.csv`
2. Re-run data export:
   ```bash
   python3 /tmp/process_skills.py
   ```
3. Commit and push:
   ```bash
   cd ~/repos/skills-marketplace
   git add public/data/skills.json
   git commit -m "Update skills data"
   git push
   ```

Vercel auto-deploys in ~46 seconds.

---

## Repository Structure

```
skills-marketplace/
├── public/data/skills.json          # Skills data
├── src/app/
│   ├── page.tsx                     # Main marketplace
│   ├── page.module.css              # Styles
│   └── globals.css                  # Design tokens
└── README.md                        # Documentation
```

---

## Tech Stack

- Next.js 16.3.4
- TypeScript
- CSS Modules
- Vercel

---

## Stats

- **Skills:** 61
- **Categories:** 7
- **Lines of Code:** 1,197
- **Build Time:** ~2.5s
- **Deploy Time:** ~46s

---

Built: 2026-09-01  
Framework: ROSTR
