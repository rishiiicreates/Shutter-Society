# 🗺️ IMPLEMENTATION PLAN

> Week-by-week build plan. Each week has a clear deliverable you can demo.

---

## 📅 Overview Timeline

```
Week 1   ── Foundation + Setup
Week 2   ── Hero Section (complete)
Week 3   ── Storytelling Scroll
Week 4   ── Portfolio Wall
Week 5   ── Project Case Study Pages
Week 6   ── Behind The Edit
Week 7   ── Services + Stats + Testimonials
Week 8   ── Contact + Polish Pass
Week 9   ── QA + Performance + Deploy
Week 10  ── Launch + Post-launch fixes
```

---

## Week 1 — Foundation & Global Systems

**Goal:** Everything works, nothing is visible. Infrastructure only.

### Tasks
- [ ] Init Next.js 14 App Router project
- [ ] Install all dependencies (see TECH_STACK.md)
- [ ] Configure Tailwind custom tokens
- [ ] Set up `globals.css` (CSS vars, grain, reset)
- [ ] Create folder structure per WORKFLOW.md
- [ ] Register GSAP plugins (`ScrollTrigger`, `SplitText`, `DrawSVG`, `CustomEase`)
- [ ] Set up Lenis in `layout.tsx` + connect to ScrollTrigger
- [ ] Build `CursorProvider` with 5 states
- [ ] Build `CursorDot` + `CursorRing` components with lerp
- [ ] Build `PageTransition` wrapper (Framer Motion `AnimatePresence`)
- [ ] Build `Navbar` (minimal, transparent, fixed)
- [ ] Deploy skeleton to Vercel (hello world)

**Deliverable:** Smooth scroll + custom cursor working. Nothing else.

---

## Week 2 — Hero Section

**Goal:** The first 5 seconds should already make someone say "damn."

### Tasks
- [ ] `<video>` autoplay muted loop background
- [ ] Poster image fallback (mobile / slow connection)
- [ ] Film grain overlay (CSS animated noise)
- [ ] Camera HUD overlay component: REC, 4K, BAT, timestamp
- [ ] HUD ticker: REC dot pulses red, timestamp ticks
- [ ] Corner frame brackets (top-left, top-right, bottom-left, bottom-right)
- [ ] Hero headline with `SplitText` word/char reveal on load
- [ ] Mouse-reactive parallax (track cursor → shift background layers)
- [ ] Scroll-triggered zoom (scale transform on scroll)
- [ ] CTA buttons: "View Work" + "Book a Call"
- [ ] Cursor state: PLAY over video, CLICK over buttons
- [ ] Scroll indicator (animated chevron)
- [ ] Mobile: static poster, minimal HUD

**Deliverable:** Full Hero demo, desktop + mobile. Client can see it.

---

## Week 3 — Storytelling Scroll Section

**Goal:** Scrolling through this section feels like a short film.

### Tasks
- [ ] Pin section container (GSAP `pin: true`)
- [ ] Scene 1 reveal: "Every brand has a story."
- [ ] Scene 2 reveal: "Most stories are ignored."
- [ ] Scene 3 reveal: "We make people stop scrolling."
- [ ] Character-by-character text reveal (SplitText + stagger)
- [ ] Layered parallax (background vs text vs overlay)
- [ ] Scene crossfade transition (opacity + blur)
- [ ] Subtle ambient light shift between scenes (radial gradient moves)
- [ ] Mobile: stacked scenes, scroll reveal via IntersectionObserver

**Deliverable:** Storytelling section live. First-time scroll should feel like cinema.

---

## Week 4 — Interactive Portfolio Wall

**Goal:** Portfolio that feels like Netflix × Pinterest × Adobe Showcase.

### Tasks
- [ ] Floating masonry layout (randomized sizes via JS seed)
- [ ] 12 placeholder thumbnails with Next.js `<Image>`
- [ ] Hover: thumbnail scale + depth shadow
- [ ] Hover: video preview autoplay (muted, 3s loop)
- [ ] Hover: cursor → PLAY state
- [ ] Depth parallax (multiple z layers move at different speeds on cursor)
- [ ] Category filter tabs (All, Commercial, Reels, Brand, YouTube, Podcasts, Events)
- [ ] Filter animation: `layout` prop from Framer Motion
- [ ] Click → navigate to case study
- [ ] Lazy load below-the-fold thumbnails

**Deliverable:** Portfolio wall interactive demo. Should feel premium.

---

## Week 5 — Featured Project Case Study Pages

**Goal:** Each project page tells the full story of a production.

### Tasks
- [ ] Dynamic route `/work/[slug]`
- [ ] JSON/MDX data schema for projects
- [ ] Seed 2 example projects
- [ ] Project hero: fullscreen media + title reveal
- [ ] Project metadata: Client, Goal, Deliverables
- [ ] Challenge → Solution → Process → Results narrative layout
- [ ] Before/After slider (drag to reveal, touch supported)
- [ ] Timeline breakdown component (GSAP scrub on scroll)
- [ ] Related projects at bottom
- [ ] Page enter/exit transition (film wipe)

**Deliverable:** 2 full case study pages navigable from portfolio.

---

## Week 6 — Behind The Edit Section

**Goal:** Make editors look elite. Viewers feel they're watching an edit happen.

### Tasks
- [ ] Full-width dark UI layout (NLE-inspired)
- [ ] Left panel: "Media Library" thumbnails
- [ ] Center: preview window (video loop or image)
- [ ] Bottom: timeline track (scrubs with scroll)
- [ ] Right: effects panel labels
- [ ] Scroll-scrubbed timeline playhead
- [ ] Clips animate in (clip-path wipe) as scroll progresses
- [ ] Labels appear in sequence: RAW → CUT → GRADE → EXPORT
- [ ] Center preview filter transitions (desaturated → graded) on scroll
- [ ] Audio waveform decoration (SVG)

**Deliverable:** Behind The Edit section fully scroll-animated.

---

## Week 7 — Services + Stats + Testimonials

**Goal:** Three sections in one week — they're simpler visually but must feel premium.

### Services
- [ ] 7 service cards in responsive grid
- [ ] Animated SVG icon per service
- [ ] Mini looping video per card (muted, autoplay on hover)
- [ ] Color Grading hover: flat → cinematic filter demo
- [ ] Staggered scroll-in reveal

### Stats
- [ ] 4 stats with odometer counter animation
- [ ] Scroll-triggered (IntersectionObserver + GSAP)
- [ ] Large Bebas Neue numbers

### Testimonials
- [ ] Chat bubble layout (iMessage style)
- [ ] Avatar circles
- [ ] Stagger scroll reveal
- [ ] Horizontal scroll on mobile

**Deliverable:** All three sections live and polished.

---

## Week 8 — Contact Section + Global Polish Pass

**Goal:** Memorable last impression + everything feels cohesive.

### Contact
- [ ] Clapperboard visual container
- [ ] Form fields: Name, Brand, Budget, Deadline, Vision
- [ ] Form validation (react-hook-form)
- [ ] Submit button: "Roll Camera →"
- [ ] Success state animation
- [ ] API route or Resend/Formspree integration

### Polish Pass
- [ ] Review all animation timings (nothing should feel rushed or slow)
- [ ] Check all cursor state transitions
- [ ] Ensure film grain is consistent across all sections
- [ ] Typography consistency audit
- [ ] Color consistency audit
- [ ] 404 page ("SCENE NOT FOUND")
- [ ] Preloader screen (clapperboard snap)
- [ ] OG meta tags for all pages

**Deliverable:** Full website end-to-end, polished. Ready for QA.

---

## Week 9 — QA, Performance, Optimization

**Goal:** Ship something that's both beautiful AND fast.

### QA Tasks
- [ ] Chrome, Firefox, Safari, Edge
- [ ] iOS Safari, Android Chrome
- [ ] `prefers-reduced-motion` fallbacks
- [ ] Touch device: no custom cursor, no hover-only interactions
- [ ] Keyboard navigation (Tab order, focus rings)
- [ ] All links/buttons functional
- [ ] Form submission tested

### Performance
- [ ] Lighthouse audit (target: 90+ Performance)
- [ ] GSAP cleanup on unmount (no memory leaks)
- [ ] Three.js dispose on unmount
- [ ] Images: all WebP, correct sizes
- [ ] Videos: compressed (use Handbrake/FFmpeg for showreel)
- [ ] Code split heavy components (Three.js, R3F)
- [ ] Lazy import R3F canvas

### Final Deploy
- [ ] Production build test
- [ ] Vercel production deploy
- [ ] Custom domain + SSL
- [ ] Analytics (optional: Vercel Analytics or GA4)

**Deliverable:** Production-ready. Lighthouse 90+.

---

## Week 10 — Launch

**Goal:** Ship it.

- [ ] Final client/personal review
- [ ] Screenshot/record launch video
- [ ] Post on LinkedIn (process + result)
- [ ] Post on Twitter/X
- [ ] Share on relevant communities (Design communities, Awwwards submission)
- [ ] Monitor for bugs in first 48 hours
- [ ] Hotfixes if needed

---

## 📌 Key Milestones

| Milestone | Target Week | Status |
|-----------|-------------|--------|
| Foundation live on Vercel | Week 1 | ⏳ |
| Hero section demo | Week 2 | ⏳ |
| First half complete (Hero + Story + Portfolio) | Week 4 | ⏳ |
| Full website (all sections) | Week 8 | ⏳ |
| Production deploy | Week 9 | ⏳ |
| Public launch | Week 10 | ⏳ |

---

## 🔧 Component Build Order (Dependency Graph)

```
1. globals.css + Tailwind config
2. CursorProvider + CursorDot + CursorRing
3. useLenis hook + GSAP registration
4. PageTransition wrapper
5. RootLayout (wraps 2 + 3 + 4)
6. Navbar
7. Hero (depends on: Cursor + GSAP + Video)
8. FilmGrain (reused across all sections)
9. StoryScroll (depends on: GSAP ScrollTrigger)
10. PortfolioWall (depends on: cursor PLAY state)
11. VideoPreview (used in PortfolioWall + Services)
12. /work/[slug] dynamic page (depends on: project data schema)
13. BeforeAfterSlider (standalone component)
14. BehindTheEdit (depends on: GSAP scrub)
15. Services (depends on: VideoPreview)
16. Stats (depends on: GSAP counter)
17. Testimonials (standalone)
18. Contact (depends on: react-hook-form)
19. 404 page
20. Preloader
```
