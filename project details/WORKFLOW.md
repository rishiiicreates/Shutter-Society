# 🔄 WORKFLOW — Development Process

---

## 📁 Folder Structure

```
content-group-website/
├── app/
│   ├── layout.tsx              # Root layout: cursor, lenis, page transitions
│   ├── page.tsx                # Home (all 9 sections)
│   ├── work/
│   │   └── [slug]/
│   │       └── page.tsx        # Dynamic project case study
│   ├── services/
│   │   └── page.tsx
│   └── contact/
│       └── page.tsx
│
├── components/
│   ├── cursor/
│   │   ├── CursorDot.tsx
│   │   ├── CursorRing.tsx
│   │   └── CursorProvider.tsx
│   ├── sections/
│   │   ├── Hero.tsx
│   │   ├── StoryScroll.tsx
│   │   ├── PortfolioWall.tsx
│   │   ├── BehindTheEdit.tsx
│   │   ├── Services.tsx
│   │   ├── Stats.tsx
│   │   ├── Testimonials.tsx
│   │   └── Contact.tsx
│   ├── ui/
│   │   ├── Button.tsx
│   │   ├── HUDOverlay.tsx
│   │   ├── FilmGrain.tsx
│   │   ├── BeforeAfterSlider.tsx
│   │   ├── VideoPreview.tsx
│   │   └── PageTransition.tsx
│   └── layout/
│       ├── Navbar.tsx
│       └── Footer.tsx
│
├── hooks/
│   ├── useLenis.ts             # Smooth scroll setup
│   ├── useGSAP.ts              # GSAP context + cleanup
│   ├── useCursor.ts            # Cursor state hook
│   └── useScrollProgress.ts    # Scroll % tracker
│
├── lib/
│   ├── gsap.ts                 # GSAP plugin registration
│   ├── projects.ts             # Portfolio data (typed)
│   └── constants.ts            # Site config, colors, text
│
├── public/
│   ├── videos/
│   │   └── showreel.mp4
│   ├── images/
│   │   └── portfolio/
│   └── models/
│       └── camera.glb          # 3D camera model for hero
│
├── styles/
│   └── globals.css             # Grain overlay, CSS vars, reset
│
├── types/
│   └── index.ts                # Shared TypeScript types
│
└── content/
    └── projects/               # MDX or JSON for case studies
        ├── project-1.json
        └── project-2.json
```

---

## 🌿 Git Branching Strategy

```
main                    # Production — always deployable
├── dev                 # Integration branch
│   ├── feat/hero       # Hero section
│   ├── feat/portfolio  # Portfolio wall
│   ├── feat/cursor     # Custom cursor
│   ├── feat/scroll     # Storytelling scroll
│   ├── feat/services   # Services section
│   ├── feat/contact    # Contact form
│   └── fix/...         # Bug fixes
```

### Branch Rules
- Never commit directly to `main`
- Merge `feat/*` → `dev` → `main`
- Each section = one feature branch
- PR required for `dev` → `main`

---

## 🏃 Sprint Structure (2-Week Sprints)

### Sprint 1 — Foundation
- Project setup, dependencies, folder structure
- Global: Lenis smooth scroll, GSAP setup, Tailwind tokens
- Custom cursor (all states)
- Navbar + page transition framework
- Hero section (80% complete)

### Sprint 2 — Hero + Story
- Hero section (100%): video, HUD, text reveal, mouse parallax
- Storytelling scroll section (pinned, 3 scenes)
- Film grain overlay system
- Mobile responsiveness for Hero + Story

### Sprint 3 — Portfolio
- Portfolio wall layout (floating masonry)
- Thumbnail hover interactions
- Video preview on hover
- Category filter system

### Sprint 4 — Project Pages + Behind The Edit
- Dynamic `/work/[slug]` pages
- Before/After slider component
- Timeline breakdown animation
- Behind The Edit scroll-scrubbed UI

### Sprint 5 — Services + Stats + Testimonials
- Services section (7 cards, hover effects)
- Stats section (odometer counters)
- Testimonials (chat-style layout)

### Sprint 6 — Contact + Polish
- Contact clapperboard form
- Form validation + API route
- Global polish: animation timing review
- Performance audit (Lighthouse)
- Cross-browser QA

### Sprint 7 — Deploy + Launch
- Final QA pass
- Vercel production deploy
- Domain setup
- Launch

---

## ⚙️ Development Commands

```bash
# Development
npm run dev              # Start dev server (localhost:3000)

# Build
npm run build            # Production build
npm run start            # Preview production build locally

# Linting
npm run lint             # ESLint check
npm run lint:fix         # Auto-fix lint errors

# Type checking
npm run type-check       # tsc --noEmit
```

---

## 📋 Daily Dev Ritual

1. Pull latest from `dev`
2. Create/switch to feature branch
3. Build the feature
4. Test on both desktop and mobile viewport
5. Test with `prefers-reduced-motion: reduce`
6. Commit with meaningful message: `feat(hero): add film grain overlay`
7. Push and open PR to `dev`

---

## 🧹 Commit Message Convention

```
feat(section):   New feature
fix(section):    Bug fix
style(section):  CSS/visual change
refactor:        Code refactor
perf:            Performance improvement
docs:            Documentation update
chore:           Config, deps, setup
```

Examples:
```
feat(hero): add mouse-reactive parallax background
fix(cursor): remove lag on cursor state switch
perf(portfolio): lazy load video previews
style(services): fix hover glow on color grading card
```

---

## 🔌 Environment Variables

Create `.env.local`:

```env
# Email / Contact form
RESEND_API_KEY=re_xxxxx

# Analytics (optional)
NEXT_PUBLIC_GA_ID=G-XXXXXX

# Spline (if used)
NEXT_PUBLIC_SPLINE_SCENE=https://prod.spline.design/xxxxx/scene.splinecode
```

---

## 🚨 Known Pitfalls to Avoid

| Pitfall | Solution |
|---------|----------|
| GSAP ScrollTrigger memory leak | Always call `ctx.revert()` in `useEffect` cleanup |
| Three.js memory leak | Dispose geometry, material, renderer on unmount |
| Lenis + ScrollTrigger conflict | Use `lenis.on('scroll', ScrollTrigger.update)` |
| Video autoplay blocked | Always set `muted`, `playsInline`, `autoPlay` |
| Font flash (FOUT) | Use `next/font` with `display: swap` |
| Cursor flicker on state change | Debounce cursor state updates |
| Scroll pinning on mobile | Disable pin on mobile, use intersection observer |
