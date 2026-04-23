# code & coffee

Landing page for code & coffee — a weekend-style community where people show up with a laptop, pick an idea they care about, and ship a first version together.

## Stack

- **Next.js 15** (App Router) with React 19 RC
- **TypeScript**
- **Tailwind CSS 3** for styling, with custom keyframes for marquees
- **Framer Motion** for scroll-linked reveals, staggered entrances, and hover/press interactions
- **next/font/google** loading Inter, Bricolage Grotesque, Manrope, and Gloria Hallelujah
- **Luma** checkout-button embed for session registration

## Getting started

```bash
pnpm install
pnpm dev          # http://localhost:3000
pnpm build        # production build
pnpm start        # run the built output
pnpm lint
```

If port 3000 is already in use, either free it (`lsof -ti:3000 | xargs /bin/kill`) or change the port in `package.json` (`"dev": "next dev -p 3001"`).

## Directory layout

```
site/
├── app/
│   ├── layout.tsx        # root layout, font loading, Luma script tag
│   ├── page.tsx          # homepage section ordering
│   ├── globals.css
│   └── about/page.tsx
├── components/
│   ├── Nav.tsx
│   ├── Footer.tsx
│   ├── Logo.tsx
│   ├── Marquee.tsx
│   ├── BackgroundVideo.tsx
│   ├── ScrollWords.tsx
│   └── sections/
│       ├── Hero.tsx
│       ├── Intro.tsx
│       ├── PriceBanner.tsx
│       ├── Disclaimer.tsx
│       ├── BuildSomething.tsx
│       ├── HowItWorks.tsx
│       ├── SessionPreviews.tsx
│       ├── Gallery.tsx
│       └── Faqs.tsx
├── lib/
│   └── motion.ts         # shared Framer Motion easing curve
├── public/
│   ├── frnds/            # portraits + brand illustrations used in marquees
│   └── video/            # hero + session-preview clips
├── tailwind.config.ts
├── next.config.js
├── tsconfig.json
└── package.json
```

## Page composition

`app/page.tsx` composes the homepage from section components in this order:

1. `Nav`
2. `Hero` — full-bleed background video with animated headline
3. `Intro` — positioning + value copy
4. `PriceBanner` — free/open banner with the Luma-powered **join a session** button
5. `Disclaimer` — scroll-linked word-by-word reveal on a disclaimer paragraph
6. `BuildSomething` — two infinite-marquee columns of brand illustrations next to a text column
7. `HowItWorks` — stepped hero copy + CTA to the FAQs
8. `SessionPreviews` — two rounded video frames showing session clips
9. `Faqs` — accordion
10. `Footer`

## Notable pieces

### Infinite marquees (`BuildSomething.tsx`)

Two vertical columns scroll in opposite directions at different speeds. Implementation is pure CSS via keyframes defined in `tailwind.config.ts`:

- `animate-marquee-up` and `animate-marquee-down` translate a doubled track from `0` → `-50%` (and the reverse) for a seamless loop.
- Per-column speed is set via the `--marquee-duration` CSS variable so each column can run at its own pace.
- Hovering a column pauses only that column via `group-hover:[animation-play-state:paused]`. The `motion-reduce` media query also pauses animation for accessibility.
- A linear-gradient mask fades tiles in/out at the top and bottom of each column.
- The duplicated (wrap-around) tiles are marked `aria-hidden` so screen readers don't see each image twice.

### Scroll-linked word reveal (`ScrollWords.tsx`)

Each word's color interpolates from `startColor` to `endColor` as the paragraph moves through the viewport, driven by Framer Motion's `useScroll` + `useTransform`. Used in `Disclaimer.tsx` to make the paragraph fade in word-by-word on scroll.

### Background video (`BackgroundVideo.tsx`)

Shared `<video>` wrapper used by the hero. Always `autoPlay muted loop playsInline preload="auto"` so it plays on every device without tripping browser autoplay policies. The component is absolutely positioned and `object-cover`s into its parent section.

### Session previews (`SessionPreviews.tsx`)

Two rounded `16:10` frames above the FAQs, each optionally wired to a video via a `videoSrc` prop. Videos use the same `autoPlay muted loop playsInline` pattern.

### Fonts

`app/layout.tsx` loads fonts via `next/font/google` and exposes them as CSS variables on `<html>`:

| Variable | Font | Primary use |
| --- | --- | --- |
| `--font-inter` | Inter | Large display headings |
| `--font-display` | Bricolage Grotesque | Alt display contexts |
| `--font-sans` | Manrope | Body |
| `--font-scribble` | Gloria Hallelujah | Captions / handwritten accents |

Use them via `font-sans`, `font-display`, `font-scribble` (Tailwind) or inline as `style={{ fontFamily: "var(--font-inter), Inter, system-ui, sans-serif" }}`.

### Luma registration

The **join a session** button in `PriceBanner.tsx` uses three pieces:

1. `href="https://luma.com/event/<event-id>"` — native fallback if JS fails.
2. `data-luma-action="checkout"` and `data-luma-event-id="<event-id>"` — attributes the Luma script hooks into.
3. `<Script src="https://embed.lu.ma/checkout-button.js" strategy="lazyOnload" />` mounted once in `app/layout.tsx`.

Swap the event id in both the `href` and `data-luma-event-id` when the event changes.

## Assets

- `public/frnds/` — portraits of community members plus the rotating `code & coffee` brand illustrations consumed by the marquees. Filenames with `&` must be URL-encoded (`%26`) in `src` strings, or renamed.
- `public/video/` — `cnc.mp4` is the hero background video. `session-preview-*.mp4` files are consumed by `SessionPreviews`. New clips should be H.264, ≤1600px wide, audio stripped (`-an`), and built with `-movflags +faststart` for progressive playback.

Transcoding a large source with ffmpeg:

```bash
ffmpeg -i input.mov \
  -vf "scale='min(1600,iw)':'-2',fps=30" \
  -c:v libx264 -preset fast -crf 28 -pix_fmt yuv420p \
  -movflags +faststart -an \
  site/public/video/your-clip.mp4
```

## Configuration

- **Tailwind** — custom `brand` palette, font families, and marquee keyframes in `tailwind.config.ts`. Content globs cover `app/` and `components/`.
- **TypeScript** — paths alias `@/*` to the project root (see `tsconfig.json`).
- **Next** — defaults, no custom server config; images loaded via plain `<img>` tags to keep the dependency surface small.

## Deploy

Any platform that runs Next.js 15 works. Vercel is the default target: point it at the `site/` directory as the project root; no special build settings are required beyond the standard `pnpm build` / `pnpm start` pair.
