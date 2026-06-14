# 🛠️ Tech Stack

Complete technology decisions for the Content Group cinematic website.

---

## 🧱 Core Framework

### Next.js 14 (App Router)
- **Why:** SSR + SSG hybrid, built-in routing, image optimization, perfect for portfolio-style pages
- **Router:** App Router (`/app` directory)
- **Rendering:** Mix of SSG (portfolio pages) + CSR (interactive sections)
- **Version:** `^14.2.x`

### TypeScript
- **Why:** Type safety on animation state, props, cursor context, scroll values
- Strict mode enabled

### Tailwind CSS v3
- **Why:** Utility-first, pairs perfectly with GSAP for dynamic class toggling
- Custom config: extend with film-inspired tokens (grain, reel, shutter)

---

## 🎞️ Animation Libraries

### GSAP (GreenSock Animation Platform)
- **Why:** Industry standard for cinematic, timeline-based animations
- **Plugins used:**
  - `ScrollTrigger` — pin sections, scrub timelines on scroll
  - `ScrollSmoother` — alternative smooth scroll (paired with Lenis)
  - `SplitText` — character/word-level text reveals
  - `DrawSVG` — animating SVG lines (camera HUD elements)
  - `CustomEase` — film-like easing curves
- **Version:** `^3.12.x`

```bash
npm install gsap
```

### Framer Motion
- **Why:** React-native declarative animations, page transitions, layout animations
- **Used for:**
  - Page transition overlays (film shutter, light leak)
  - Hover micro-interactions on service cards
  - Stagger reveals on testimonial cards
- **Version:** `^11.x`

```bash
npm install framer-motion
```

---

## 🌐 3D & WebGL

### React Three Fiber (R3F)
- **Why:** Three.js as React components — cleaner, declarative, composable
- **Used for:**
  - Floating cinema camera model
  - Particle systems (light bokeh, film grain simulation)
  - Lens flare interactions on cursor
- **Version:** `^8.x`

```bash
npm install @react-three/fiber three
```

### @react-three/drei
- **Why:** Helper abstractions for R3F (OrbitControls, useGLTF, Environment, etc.)

```bash
npm install @react-three/drei
```

### Spline (Optional / Selective)
- **Why:** No-code 3D scene editor — good for importing a pre-built cinema camera
- **Use case:** Hero section 3D camera model
- **Integration:** `@splinetool/react-spline`

---

## 📜 Scroll Engine

### Lenis
- **Why:** Best-in-class smooth scroll, lightweight, no jank
- Replaces browser default scroll entirely
- Integrates with GSAP ScrollTrigger via `lenis.on('scroll', ScrollTrigger.update)`
- **Version:** `^1.1.x`

```bash
npm install lenis
```

---

## 🖱️ Custom Cursor

### Custom built (no library)
- Built with React Context + `useRef` + `requestAnimationFrame`
- Cursor states: `DEFAULT`, `PLAY`, `EXPLORE`, `CLICK`, `DRAG`
- Lerp (linear interpolation) for smooth follow
- Ring + dot pattern with stretch on movement

---

## 🎥 Video Handling

### Next.js `<video>` tag (native)
- For hero autoplay muted showreel
- Lazy loaded below fold

### React Player (optional)
- For case study embedded videos / YouTube previews
- **Version:** `^2.x`

```bash
npm install react-player
```

---

## 🖼️ Image Optimization

### Next.js `<Image>`
- Built-in optimization, WebP conversion, lazy load
- Used for all portfolio thumbnails

### Sharp
- Next.js peer dependency for image processing

---

## 🎨 UI Component Utilities

### clsx + tailwind-merge
- Dynamic class name composition

```bash
npm install clsx tailwind-merge
```

### Lucide React
- Minimal icon set for HUD overlays (battery, rec dot, settings)

```bash
npm install lucide-react
```

---

## 🔤 Fonts

| Role | Font | Source |
|------|------|--------|
| Display / Hero | `Bebas Neue` | Google Fonts |
| Body | `Inter` or `DM Sans` | Google Fonts |
| Mono / HUD | `Space Mono` | Google Fonts |
| Accent Serif | `Playfair Display` | Google Fonts (optional) |

Load via `next/font/google` for zero layout shift.

---

## 🧪 Dev Tools

| Tool | Purpose |
|------|---------|
| ESLint | Linting (Next.js config) |
| Prettier | Code formatting |
| Husky + lint-staged | Pre-commit hooks |
| Storybook (optional) | Component isolation |

---

## 📦 Package Overview

```json
{
  "dependencies": {
    "next": "^14.2.0",
    "react": "^18.3.0",
    "react-dom": "^18.3.0",
    "typescript": "^5.4.0",
    "tailwindcss": "^3.4.0",
    "gsap": "^3.12.0",
    "framer-motion": "^11.0.0",
    "@react-three/fiber": "^8.0.0",
    "@react-three/drei": "^9.0.0",
    "three": "^0.165.0",
    "lenis": "^1.1.0",
    "clsx": "^2.1.0",
    "tailwind-merge": "^2.3.0",
    "lucide-react": "^0.390.0",
    "react-player": "^2.16.0"
  }
}
```

---

## 🚀 Deployment

| Platform | Use |
|----------|-----|
| **Vercel** | Primary deployment (native Next.js support) |
| **Cloudflare CDN** | Asset caching for video/images |
| **GitHub Actions** | CI/CD pipeline |

---

## ⚠️ Performance Targets

| Metric | Target |
|--------|--------|
| LCP | < 2.5s |
| FID | < 100ms |
| CLS | < 0.1 |
| FPS (animations) | 60fps constant |
| Bundle Size (JS) | < 400kb gzipped |
