# 🔬 RESEARCH PLAN — References, Inspiration & Library Deep-Dives

---

## 🌐 Reference Websites to Study

> Study these sites before building each section. Understand their scroll, cursor, and motion logic — don't copy, use as technical reference.

### Premium Agency / Studio Sites
| Site | What to Study |
|------|--------------|
| [locomotive.ca](https://locomotive.ca) | Smooth scroll, page transitions, dark theme |
| [activetheory.net](https://activetheory.net) | WebGL, fullscreen cinematics, cursor |
| [hello-monday.com](https://hellomonday.com) | Scroll storytelling, premium type |
| [strv.com](https://www.strv.com) | Portfolio wall interaction, case studies |
| [resn.co.nz](https://resn.co.nz) | Experimental web, WebGL, cursor effects |
| [obys.agency](https://obys.agency) | Dark luxury, typography-as-design |
| [aristidebenoist.com](https://aristidebenoist.com) | Portfolio, scroll animations, cursor |

### Video / Film Production Sites
| Site | What to Study |
|------|--------------|
| [a-b.studio](https://a-b.studio) | Cinematographers portfolio |
| [northernpictures.com.au](https://northernpictures.com.au) | Film production company aesthetic |
| [versus.work](https://versus.work) | Motion + video studio, dark theme |
| [garden.film](https://garden.film) | Film company, fullscreen video |

### For Specific Sections
| Site | Section |
|------|---------|
| Netflix (UI) | Portfolio wall depth + hover |
| Pinterest (layout) | Masonry floating thumbnails |
| [awwwards.com](https://awwwards.com) | Hall of fame sites gallery |
| DaVinci Resolve (UI) | Behind The Edit NLE layout |
| Adobe Premiere Pro (UI) | Timeline component design |
| iMessage / WhatsApp (UI) | Testimonials bubble design |

---

## 📚 Library Documentation to Read

### GSAP
- [ ] [GSAP ScrollTrigger docs](https://gsap.com/docs/v3/Plugins/ScrollTrigger/)
  - Focus: `pin`, `scrub`, `markers`, `batch`
- [ ] [GSAP SplitText docs](https://gsap.com/docs/v3/Plugins/SplitText/)
  - Focus: `chars`, `words`, `lines` + stagger
- [ ] [GSAP CustomEase](https://gsap.com/docs/v3/Eases/CustomEase/)
  - Create the film easing curve
- [ ] [GSAP Context](https://gsap.com/docs/v3/GSAP/gsap.context()/)
  - Essential for React cleanup

### Framer Motion
- [ ] [AnimatePresence](https://www.framer.com/motion/animate-presence/)
  - Page transition on route change
- [ ] [layout prop](https://www.framer.com/motion/layout-animations/)
  - Portfolio filter animation
- [ ] [useScroll + useTransform](https://www.framer.com/motion/use-scroll/)
  - Parallax alternative to GSAP

### Lenis
- [ ] [Lenis GitHub README](https://github.com/darkroomengineering/lenis)
  - Setup, options, ScrollTrigger integration

### React Three Fiber
- [ ] [R3F Getting Started](https://docs.pmnd.rs/react-three-fiber/getting-started/introduction)
- [ ] [useGLTF (drei)](https://github.com/pmndrs/drei#useGLTF)
  - Load the camera .glb model
- [ ] [Environment (drei)](https://github.com/pmndrs/drei#environment)
  - Cinematic lighting on 3D model
- [ ] [Three.js Memory Management](https://threejs.org/docs/#manual/en/introduction/How-to-dispose-of-objects)
  - Critical for performance

### Next.js
- [ ] [next/image](https://nextjs.org/docs/app/api-reference/components/image)
  - Optimization, blur placeholder, sizes prop
- [ ] [next/font](https://nextjs.org/docs/app/building-your-application/optimizing/fonts)
  - Zero layout shift fonts
- [ ] [Dynamic routes](https://nextjs.org/docs/app/building-your-application/routing/dynamic-routes)
  - `/work/[slug]` case study pages
- [ ] [Route Handlers](https://nextjs.org/docs/app/building-your-application/routing/route-handlers)
  - Contact form API route

---

## 🎞️ Technical Techniques to Research

### Film Grain Effect Options
| Approach | Pros | Cons |
|----------|------|------|
| CSS `url(grain.png)` animated | Simple, fast | Needs asset |
| SVG `<feTurbulence>` filter | No asset needed | Can be slow |
| Canvas-based grain | Full control | JS overhead |
| Three.js shader grain | Best quality | Complex |

**Decision:** Start with CSS animated PNG. Upgrade to SVG filter if needed.

```bash
# Research: "CSS film grain overlay animated" + "SVG feTurbulence noise"
```

### Smooth Scroll + GSAP Integration
Research the exact pattern:
```ts
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => lenis.raf(time * 1000));
gsap.ticker.lagSmoothing(0);
```

### Custom Cursor with Lerp
Research `requestAnimationFrame` lerp vs GSAP `quickTo`:
```ts
// GSAP quickTo approach (likely smoother)
const xTo = gsap.quickTo(cursor, "x", { duration: 0.6, ease: "power3" });
const yTo = gsap.quickTo(cursor, "y", { duration: 0.6, ease: "power3" });
window.addEventListener("mousemove", (e) => { xTo(e.clientX); yTo(e.clientY); });
```

### Before/After Slider
Research: clip-path approach vs transform approach
- `clip-path: inset(0 X% 0 0)` — GPU accelerated, smooth
- CSS `resize` — native but ugly
- JS `mousedown` drag tracking — full control

### Scroll-Scrubbed Timeline
```js
gsap.to(timeline, {
  scrollTrigger: {
    trigger: ".edit-section",
    start: "top top",
    end: "bottom bottom",
    scrub: 1,  // 1 second smoothing
    pin: true,
  },
  width: "100%", // timeline progress bar
})
```

### Video Preview on Hover (Performance)
- Don't autoload all videos — use `data-src` and load on hover
- `video.src = hoverSrc; video.play()`
- Use `<source>` with WebM + MP4 fallback
- Clip previews: max 5s, loop, muted

---

## 🎨 Design Inspiration Sources

### Awwwards Categories to Browse
- [Sites of the Year](https://www.awwwards.com/websites/sites_of_the_year/)
- [Dark theme sites](https://www.awwwards.com/websites/dark-design/)
- [Video background sites](https://www.awwwards.com/websites/video/)
- [Motion/animation sites](https://www.awwwards.com/websites/motion/)

### Dribbble Search Queries
- "video production agency website dark"
- "cinema portfolio website ui"
- "film production site scroll animation"
- "editing software ui concept"
- "camera hud ui overlay"

### Pinterest Boards to Build
Create boards for:
- "Dark luxury web design"
- "Camera HUD UI reference"
- "Film grain textures"
- "Clapperboard / film prop design"
- "NLE / Video editing UI screenshots"

### Behance Search Queries
- "film production website concept"
- "creative agency dark website"
- "video editor portfolio"

---

## 🔊 Audio / Video Research

### Showreel Placeholder Content
- Source from Pexels Videos (free): `pexels.com/video-search/`
  - Search: "drone cinematic", "product ad", "interview"
- Source from Coverr (free): `coverr.co`
- Format: H.264, 1080p, compressed to < 10MB for web

### Background Music Research (Optional)
- Cinematic ambient for preloader or transitions
- Sources: Artlist, Epidemic Sound, Pixabay (free)
- Keep under 30s loops

---

## ⚡ Performance Research

### Tools to Use
| Tool | Purpose |
|------|---------|
| Chrome DevTools Performance | Frame rate profiling |
| Lighthouse | Overall score |
| WebPageTest | Real-world load time |
| Chrome DevTools Memory | Heap snapshot, leak detection |
| `stats.js` (Three.js) | 3D FPS monitoring in dev |

### Key Questions to Answer
- [ ] Does Lenis hurt Lighthouse performance score? (Known issue — research solution)
- [ ] How to code-split Three.js canvas without flash?
- [ ] What's the best way to lazy-load GSAP plugins?
- [ ] Should SplitText be done client-side or with Framer Motion instead?

---

## 📖 Articles to Read

- [ ] "Building Smooth Page Transitions in Next.js with Framer Motion"
- [ ] "GSAP ScrollTrigger + Lenis: The Complete Integration Guide"
- [ ] "How to Build a Custom Cursor in React"
- [ ] "Three.js Performance Tips for Production"
- [ ] "CSS Film Grain Texture Techniques"
- [ ] "Masonry Layout in CSS: All the Modern Approaches"
- [ ] "WebGL Scroll Effects: How Award-Winning Sites Do It"
