# 🎨 UI/UX — Design System & Interaction Specs

---

## 🎨 Color Palette

| Token | Hex | Usage |
|-------|-----|-------|
| `--color-bg` | `#0A0A0A` | Primary background — near black |
| `--color-surface` | `#111111` | Card/panel backgrounds |
| `--color-surface-2` | `#1A1A1A` | Elevated surfaces |
| `--color-border` | `#2A2A2A` | Subtle dividers |
| `--color-text-primary` | `#F5F5F0` | Primary text — warm white |
| `--color-text-secondary` | `#888884` | Secondary/muted text |
| `--color-accent` | `#FF3B00` | REC indicator, CTA accent — film red |
| `--color-accent-gold` | `#C9A84C` | Premium badge highlights |
| `--color-hud` | `#00FF88` | Camera HUD text — terminal green |
| `--color-grain` | `rgba(255,255,255,0.03)` | Film grain base |

```css
/* globals.css */
:root {
  --color-bg: #0A0A0A;
  --color-surface: #111111;
  --color-surface-2: #1A1A1A;
  --color-border: #2A2A2A;
  --color-text-primary: #F5F5F0;
  --color-text-secondary: #888884;
  --color-accent: #FF3B00;
  --color-accent-gold: #C9A84C;
  --color-hud: #00FF88;
}
```

---

## 🔤 Typography

### Font Roles

| Role | Font | Weight | Usage |
|------|------|--------|-------|
| **Display** | Bebas Neue | 400 | Hero headlines, section numbers |
| **Body** | DM Sans | 300–500 | Paragraphs, descriptions |
| **UI / HUD** | Space Mono | 400 | Camera overlay, timestamps, tags |
| **Accent Serif** | Playfair Display | 400 Italic | Pull quotes, testimonials |

### Type Scale

```css
/* Hero headline */
font-size: clamp(60px, 10vw, 140px);
font-family: 'Bebas Neue';
letter-spacing: 0.02em;
line-height: 0.9;

/* Section headline */
font-size: clamp(36px, 5vw, 72px);
font-family: 'Bebas Neue';

/* Body text */
font-size: clamp(14px, 1.5vw, 18px);
font-family: 'DM Sans';
font-weight: 300;
line-height: 1.7;

/* HUD / Mono */
font-size: 11px;
font-family: 'Space Mono';
letter-spacing: 0.1em;
text-transform: uppercase;

/* Testimonial */
font-size: clamp(16px, 2vw, 22px);
font-family: 'Playfair Display';
font-style: italic;
```

---

## 🖱️ Cursor Design

### States

```
DEFAULT:   ○ small ring (20px) + • dot (4px center)
PLAY:      ● filled circle (48px) + "PLAY" white text inside
EXPLORE:   ○ ring (36px) + "EXPLORE" inside
CLICK:     ● filled white (24px), no text, quick scale pulse
DRAG:      ↔ stretched oval, "DRAG" inside
```

### CSS Spec

```css
.cursor-dot {
  width: 6px;
  height: 6px;
  background: var(--color-text-primary);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9999;
  transition: transform 0.1s ease;
}

.cursor-ring {
  width: 36px;
  height: 36px;
  border: 1.5px solid rgba(245, 245, 240, 0.6);
  border-radius: 50%;
  position: fixed;
  pointer-events: none;
  z-index: 9998;
  /* Lerp applied via JS, not CSS transition */
}
```

### Lerp Implementation (JS)

```ts
let currentX = 0, currentY = 0;
let targetX = 0, targetY = 0;

const LERP_FACTOR = 0.12; // Ring follows slower than dot

function animate() {
  currentX += (targetX - currentX) * LERP_FACTOR;
  currentY += (targetY - currentY) * LERP_FACTOR;
  ring.style.transform = `translate(${currentX}px, ${currentY}px)`;
  requestAnimationFrame(animate);
}
```

---

## 🎞️ Film Grain Overlay

```css
/* Animated SVG noise texture */
.film-grain {
  position: fixed;
  inset: 0;
  pointer-events: none;
  z-index: 100;
  opacity: 0.04;
  background-image: url('/images/grain.png');
  background-size: 180px 180px;
  animation: grain 0.5s steps(1) infinite;
}

@keyframes grain {
  0%, 100% { background-position: 0 0; }
  20% { background-position: -30px -20px; }
  40% { background-position: -60px 10px; }
  60% { background-position: 15px -40px; }
  80% { background-position: -45px 30px; }
}
```

---

## 🎥 Camera HUD Overlay

```
┌──────────────────────────────────────────┐
│ REC ●          ·           4K 60FPS      │
│                                          │
│  ┌─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┐  │
│  │                                   │  │
│  │                                   │  │
│  │         [VIDEO CONTENT]           │  │
│  │                                   │  │
│  │                                   │  │
│  └─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ─ ┘  │
│                                          │
│ BAT ████████░ 87%     00:01:34:22 TC    │
└──────────────────────────────────────────┘
```

HUD text: `Space Mono` | Color: `#00FF88` | Opacity: `0.75`
REC dot: `#FF3B00`, pulses at 1s interval

---

## 🔘 Button Design

### Primary CTA
```css
.btn-primary {
  background: var(--color-text-primary);
  color: var(--color-bg);
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  padding: 16px 32px;
  border: none;
  cursor: none; /* custom cursor handles it */
}

.btn-primary:hover {
  background: var(--color-accent);
  color: #fff;
  transition: background 0.2s ease;
}
```

### Ghost / Secondary
```css
.btn-ghost {
  background: transparent;
  color: var(--color-text-primary);
  border: 1px solid var(--color-border);
  padding: 15px 31px;
  font-family: 'Space Mono';
  font-size: 12px;
  letter-spacing: 0.15em;
}
```

---

## 📐 Spacing System

```css
--space-1:  4px
--space-2:  8px
--space-3:  12px
--space-4:  16px
--space-6:  24px
--space-8:  32px
--space-12: 48px
--space-16: 64px
--space-24: 96px
--space-32: 128px
```

Section padding: `padding: var(--space-32) var(--space-8)` (desktop)

---

## 🔀 Page Transitions

### Entry Animation (Film Shutter Open)
```
Timeline (0.8s):
0.0s → Full black overlay covers screen
0.2s → Overlay slides up (Y: 0 → -100%)
0.5s → Page content fades in (opacity: 0 → 1)
0.8s → Complete
```

### Exit Animation (Light Leak Wipe)
```
Timeline (0.5s):
0.0s → White flash (opacity: 0 → 1), very fast (0.1s)
0.1s → White overlay slides out right
0.3s → Black overlay slides in from left
0.5s → Next page starts entering
```

---

## 📱 Responsive Breakpoints

```css
sm:  640px    /* Mobile landscape */
md:  768px    /* Tablet */
lg:  1024px   /* Desktop */
xl:  1280px   /* Large desktop */
2xl: 1536px   /* Wide */
```

### Mobile Adaptations
- Custom cursor: disabled (`@media (pointer: coarse)`)
- Video hero: poster image fallback
- Pinned sections: converted to stacked intersecting sections
- Portfolio wall: 2-column then 1-column grid
- Services: horizontal scroll snap
- HUD overlay: hidden on `< md`

---

## ✨ Micro-Interaction Catalog

| Element | Trigger | Animation |
|---------|---------|-----------|
| Nav links | Hover | Underline slides in from left (1px line) |
| Portfolio thumbnail | Hover | Scale 1.05 + video plays + glow shadow |
| Service card | Hover | Background shifts + icon animates |
| CTA button | Hover | Background fills from bottom (clip-path) |
| Stats counter | Scroll in | Odometer roll from 0 |
| Testimonial | Scroll in | Slide up + fade in, staggered |
| Form fields | Focus | Aperture ring glow |
| Form submit | Click | Camera aperture closes → opens |
| Story scenes | Scroll | Characters reveal word by word |
| Timeline clips | Scroll | Clip-path wipe left to right |

---

## 🎭 Animation Easing Reference

```js
// Film-like easing — fast start, slow end
CustomEase.create("filmEase", "0.16, 1, 0.3, 1");

// Bounce snap (for timeline clips)
CustomEase.create("snapIn", "0.34, 1.56, 0.64, 1");

// Smooth reveal (text)
CustomEase.create("revealEase", "0.4, 0, 0, 1");

// Standard GSAP reference
power2.out    // smooth deceleration
power3.inOut  // acceleration + deceleration
expo.out      // aggressive snap to end
```

---

## 🌑 Visual Atmosphere Rules

1. **Background is never pure `#000`** — use `#0A0A0A` for depth
2. **Every surface has a subtle border** — `1px solid rgba(255,255,255,0.05)`
3. **Light comes from above** — gradients flow top to bottom
4. **Text is never pure white** — use `#F5F5F0` for warmth
5. **Accent red is used sparingly** — only for REC dot, key CTAs
6. **Gold is reserved for premium badges / awards** — use 1–2 times max
7. **Vignette on all fullscreen video/images** — radial gradient overlay
8. **No sharp corners on cards** — `border-radius: 4px` minimum
9. **Depth via blur, not borders** — use `backdrop-filter` on overlays
10. **Typography is the design** — when in doubt, make the text bigger
