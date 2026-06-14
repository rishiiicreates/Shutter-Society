# 📐 SCOPE — What We're Building, What We're Not

---

## ✅ In Scope — Version 1.0

These must ship for the project to be considered complete.

### Pages
- [x] Home page (all 9 sections on one page)
- [x] Dynamic project case study pages (`/work/[slug]`)
- [x] 404 page ("SCENE NOT FOUND")

### Sections
- [x] Hero — fullscreen video, HUD overlay, text reveal, CTA buttons
- [x] Storytelling Scroll — pinned 3-scene parallax narrative
- [x] Interactive Portfolio Wall — floating masonry, hover video, category filter
- [x] Featured Project Pages — case study layout, Before/After slider
- [x] Behind The Edit — scroll-scrubbed NLE-style timeline
- [x] Services — 7 cards with hover interactions
- [x] Stats — animated odometer counters
- [x] Testimonials — chat-bubble layout
- [x] Contact — clapperboard form

### Global
- [x] Custom cursor (5 states)
- [x] Lenis smooth scroll
- [x] Film grain overlay
- [x] Page transitions (film wipe / light leak)
- [x] GSAP ScrollTrigger animations
- [x] Camera HUD overlay on Hero
- [x] Navbar (minimal, transparent)
- [x] Mobile responsive (all sections adapted)
- [x] `prefers-reduced-motion` respected
- [x] Open Graph meta tags
- [x] Deployed to Vercel with custom domain

### Data
- [x] 2–3 seeded project case studies (placeholder content)
- [x] All placeholder text/images professional quality
- [x] Contact form connected to email (Resend or Formspree)

---

## 🔶 Stretch Goals — Version 1.1 (Post-Launch)

Ship these if v1.0 is ahead of schedule, or as fast-follow updates.

- [ ] 3D floating cinema camera in Hero (React Three Fiber)
- [ ] Konami code Easter egg (hidden reel)
- [ ] Preloader screen (clapperboard snap animation)
- [ ] Horizontal ticker tape below Stats
- [ ] WhatsApp-style voice note testimonials
- [ ] Director's chair background in Contact (name fills dynamically)
- [ ] Scroll-reactive film burn effect on fast scroll
- [ ] Film reel 3D portfolio concept (alternative portfolio view)
- [ ] Blog section (2–3 initial articles for SEO)
- [ ] Careers page

---

## ❌ Out of Scope — Version 1.0

These are explicitly excluded from v1.0 to keep scope tight.

| Feature | Reason |
|---------|--------|
| CMS integration (Sanity, Contentful) | Adds weeks. Use JSON/MDX for now. |
| User accounts / login | Not needed for portfolio |
| E-commerce / payment | Not a services booking site |
| AI thumbnail generator interaction | Requires API + significant build time |
| Multi-language support (i18n) | Overkill for v1 |
| Dark / light mode toggle | Site is dark-only by design decision |
| Analytics dashboard | Use Vercel Analytics (zero config) |
| Video hosting (own server) | Use Cloudflare Stream or Vimeo embeds |
| Backend server (Node/Express) | Next.js API routes are sufficient |
| Mobile app | Web only |
| Podcast player | Separate product idea |
| Full blog with search | Post-launch SEO play |
| Automated sitemap | Nice but not critical for v1 |

---

## 🔢 Version Roadmap

```
v1.0  ──  Core 9-section site + case studies + contact
v1.1  ──  3D hero, preloader, Easter eggs, polish
v1.2  ──  Blog section, SEO optimization, sitemap
v1.3  ──  CMS integration, client-editable content
v2.0  ──  Full redesign with new concept (editing software UI)
```

---

## 📊 Scope Metrics

| Category | Count |
|----------|-------|
| Total pages | 5–8 (home + 2-5 case studies + 404) |
| Total sections | 9 |
| Total components | ~30 |
| Animations | ~40 distinct animations |
| Custom cursor states | 5 |
| Service cards | 7 |
| Portfolio categories | 7 |
| Stats | 4 |
| Week estimate (solo dev) | 8–10 weeks |
| Week estimate (team of 2) | 4–6 weeks |

---

## ⚠️ Assumptions & Dependencies

| Assumption | If Wrong, Impact |
|------------|-----------------|
| Client provides showreel video | Must use stock video placeholder |
| Client provides project thumbnails | Must use gradient/color placeholders |
| Client provides real testimonials | Use fictional placeholder copy |
| Domain name is available | Need alternate domain |
| Vercel free tier is sufficient | Upgrade if video bandwidth is high |
| No CMS needed for v1 | If client wants to edit content, add Sanity |

---

## 🚦 Go / No-Go Criteria for Launch

Before shipping v1.0, all of these must be true:

- [ ] All 9 sections visible and animated on desktop
- [ ] All 9 sections functional on mobile
- [ ] Contact form submits and sends email
- [ ] At least 1 full case study page navigable from portfolio
- [ ] Custom cursor working on all sections
- [ ] Page transitions working between pages
- [ ] Lighthouse Performance score ≥ 85
- [ ] No console errors in production
- [ ] Tested on Chrome, Safari, Firefox
- [ ] Tested on iOS Safari and Android Chrome
- [ ] Custom domain working with SSL

---

## 🧩 Definition of "Done" Per Section

Each section is considered done when:
1. Visible at target breakpoints (desktop + mobile)
2. Animations trigger correctly on scroll/hover
3. No janky frames (consistent 60fps)
4. Cursor state changes where specified
5. `prefers-reduced-motion` fallback exists
6. No layout shift (CLS = 0)
