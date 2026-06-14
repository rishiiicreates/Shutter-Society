# ✅ TODO — Content Group Website

> Mark items with `[x]` as you complete them. Organized by priority and section.

---

## 🔧 Phase 0 — Project Setup

- [ ] Initialize Next.js 14 project with TypeScript and App Router
- [ ] Configure Tailwind CSS with custom theme tokens
- [ ] Set up ESLint + Prettier + Husky pre-commit hooks
- [ ] Install all core dependencies (GSAP, Framer Motion, Lenis, R3F)
- [ ] Set up folder structure (see WORKFLOW.md)
- [ ] Configure `next/font` for Bebas Neue, Inter, Space Mono
- [ ] Create global CSS variables (colors, spacing, grain overlay)
- [ ] Set up Lenis smooth scroll + GSAP ScrollTrigger integration
- [ ] Build `CursorProvider` context with cursor state management
- [ ] Create `PageTransition` wrapper with Framer Motion
- [ ] Set up layout: `RootLayout` with cursor, smooth scroll, transition layer
- [ ] Initialize GitHub repo with branch protection rules
- [ ] Set up Vercel project and connect GitHub

---

## 🎬 Section 1 — Hero Landing

- [ ] Fullscreen `<video>` autoplay muted loop showreel background
- [ ] Headline text: "We Don't Just Shoot Content. We Create Attention."
- [ ] Dynamic text reveal animation (SplitText + GSAP stagger)
- [ ] Mouse-reactive background parallax (track cursor X/Y)
- [ ] Smooth zoom on scroll (GSAP ScrollTrigger scale transform)
- [ ] Film grain overlay (CSS noise texture, animated)
- [ ] Camera HUD overlay: REC●, 4K 60FPS, BAT 87%, timestamp
- [ ] HUD elements flicker / pulse animation
- [ ] CTA buttons: "View Work" + "Book a Call"
- [ ] CTA hover effect (cursor changes to CLICK state)
- [ ] Mobile fallback (static image if video fails to load)
- [ ] Scroll indicator arrow (animated bounce)

---

## 📖 Section 2 — Storytelling Scroll

- [ ] Pinned scroll container (GSAP ScrollTrigger `pin: true`)
- [ ] 3 scenes with scroll-triggered reveal:
  - [ ] Scene 1: "Every brand has a story."
  - [ ] Scene 2: "Most stories are ignored."
  - [ ] Scene 3: "We make people stop scrolling."
- [ ] Layered parallax: background image moves slower than text
- [ ] Cinematic reveal: text appears character by character
- [ ] Ambient dark background with subtle light shifts between scenes
- [ ] Scene transition: blur dissolve or crossfade
- [ ] Mobile: stack scenes vertically with intersection observer

---

## 🖼️ Section 3 — Interactive Portfolio Wall

- [ ] Floating masonry layout (CSS Grid + JS randomized sizing)
- [ ] 12–20 placeholder thumbnails (use Next.js `<Image>`)
- [ ] Hover: thumbnail scale-up + video preview auto-play
- [ ] Hover: cursor changes to PLAY state
- [ ] Hover: depth effect (z-index + box-shadow depth)
- [ ] Category filter tabs: Commercial, Reels, Brand, YouTube, etc.
- [ ] Filter animation: fade + layout shift (Framer Motion `layout`)
- [ ] Click: navigate to project case study page
- [ ] Lazy load thumbnails below the fold

---

## 📄 Section 4 — Featured Project Pages (Dynamic Route)

- [ ] Create dynamic route: `/work/[slug]`
- [ ] Project data structure (JSON or MDX)
- [ ] Project hero: fullscreen image/video + title overlay
- [ ] Client / Goal / Deliverables info block
- [ ] Challenge → Solution → Process → Results narrative
- [ ] Before/After slider component (drag to reveal)
- [ ] Timeline breakdown component (scroll-animated)
- [ ] Related projects section at bottom
- [ ] Page transition in/out (film wipe or blur dissolve)

---

## 🎛️ Section 5 — Behind The Edit

- [ ] Editing software UI layout: left panel, center preview, bottom timeline
- [ ] Scroll-scrubbed timeline animation (GSAP ScrollTrigger scrub)
- [ ] Timeline clips appear as user scrolls (DrawSVG or clip-path)
- [ ] Raw clip → color graded final (CSS filter transition or blend mode)
- [ ] Audio waveform decoration (SVG animated)
- [ ] Effects labels: "CUT", "TRANSITION", "GRADE", "EXPORT" appearing in sequence
- [ ] Center preview: video loop or image sequence swap
- [ ] Ambient dark UI feel: inspired by DaVinci Resolve / Premiere Pro

---

## 🧩 Section 6 — Services

- [ ] 7 service cards: Production, Editing, Motion Graphics, Color Grading, Creative Direction, Thumbnail Design, Short-form Strategy
- [ ] Each card: animated icon + looping mini video preview
- [ ] Hover: video preview plays, dynamic lighting glow
- [ ] "Color Grading" hover: flat → cinematic filter demo
- [ ] Staggered reveal animation on scroll enter
- [ ] Mobile: horizontal scroll carousel

---

## 📊 Section 7 — Stats / Social Proof

- [ ] 4 animated counter stats:
  - [ ] 120M+ views generated
  - [ ] 500+ videos delivered
  - [ ] 70+ brands served
  - [ ] 4 countries reached
- [ ] Odometer-style number roll animation (GSAP or CountUp.js)
- [ ] Trigger animation on scroll enter (IntersectionObserver)
- [ ] Minimalist layout: large number, small label
- [ ] Optional: world map with highlighted countries

---

## 💬 Section 8 — Testimonials

- [ ] Chat-style message bubble layout
- [ ] Staggered entrance animation (bottom up)
- [ ] "Posted 2 hrs ago" style timestamp labels
- [ ] Avatar placeholder with initials
- [ ] Horizontal scroll or auto-cycling carousel on mobile
- [ ] Optional: video testimonial embed (React Player)

---

## 📷 Section 9 — Contact (Camera Slateboard)

- [ ] Clapperboard / slateboard visual design
- [ ] Form fields styled as slateboard lines: Name, Brand, Budget, Deadline, Vision
- [ ] Submit button: "Roll Camera →"
- [ ] Input focus: camera aperture ring animation
- [ ] Form validation (react-hook-form)
- [ ] Success state: "Lights. Camera. Action." with countdown animation
- [ ] Connect to backend (Resend API / Formspree / custom Next.js API route)

---

## 🖱️ Global — Custom Cursor

- [ ] `CursorDot` component: small filled dot
- [ ] `CursorRing` component: larger hollow ring
- [ ] Smooth lerp follow with `requestAnimationFrame`
- [ ] Stretch/elongate on fast movement
- [ ] State changes: DEFAULT → PLAY → EXPLORE → CLICK → DRAG
- [ ] Cursor text label rendering (PLAY, EXPLORE, CLICK)
- [ ] Hide default OS cursor globally (`cursor: none`)
- [ ] Disable on touch devices

---

## 🌊 Global — Animations & Transitions

- [ ] Lenis smooth scroll initialized in `layout.tsx`
- [ ] GSAP context cleanup on unmount (prevent memory leaks)
- [ ] Page transition overlay (Framer Motion `AnimatePresence`)
- [ ] Film shutter open on page enter
- [ ] Light leak wipe on page exit
- [ ] `prefers-reduced-motion` media query respected

---

## 📱 Responsive / Mobile

- [ ] Hero: static poster image fallback for video
- [ ] Portfolio: single column grid
- [ ] Services: horizontal scroll carousel
- [ ] Storytelling: stacked scenes, no pinning
- [ ] HUD overlay: hidden on small screens
- [ ] Custom cursor: disabled on touch
- [ ] Navigation: hamburger menu with fullscreen overlay

---

## 🚀 Performance & SEO

- [ ] All images via `next/image` with proper `alt` text
- [ ] Videos: `loading="lazy"` for non-hero
- [ ] Open Graph meta tags for all pages
- [ ] Sitemap generation (`next-sitemap`)
- [ ] Font subset loading (only glyphs used)
- [ ] GSAP killed on component unmount
- [ ] Three.js renderer disposal on unmount
- [ ] Lighthouse score: target 90+ Performance

---

## 🧪 Testing & QA

- [ ] Cross-browser test: Chrome, Firefox, Safari, Edge
- [ ] Mobile test: iOS Safari, Android Chrome
- [ ] Animation smoke test at 60fps (Chrome DevTools)
- [ ] Form submission end-to-end test
- [ ] 404 page design (cinematic "SCENE NOT FOUND")
- [ ] Loading skeleton / preloader screen

---

## 🚢 Deployment

- [ ] Push to GitHub main branch
- [ ] Verify Vercel auto-deploy
- [ ] Set environment variables in Vercel dashboard
- [ ] Configure custom domain + SSL
- [ ] Test production build for animation regressions
- [ ] Share preview link with client
