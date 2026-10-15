# Margin

An editorial publishing site built end-to-end on the **Medium design system**: warm paper canvas, oversized display type, flat surfaces, and a single black pill CTA per view.

The publication is called *Margin* rather than Medium — the design language is reproduced faithfully, the brand is not impersonated. Renaming is one component (`src/components/Logo.jsx`) and one line in `index.html`.

```bash
npm install
npm run dev      # http://localhost:5173, bound to 0.0.0.0
npm run build    # production bundle in dist/
npm run smoke    # renders every route server-side and asserts the output
```

Stack: **Vite 8 · React 19 · React Router 7 · plain CSS with custom properties**. No UI kit, no CSS framework — the design system *is* the stylesheet.

---

## What's here

| Route | Page | Notes |
| --- | --- | --- |
| `/` | Homepage | Oversized hero, trending block, feed + aside, one ink band |
| `/topics` | Topic index | The only place content is grouped into containers |
| `/topic/:slug` | Topic feed | Stream plus writers-to-follow and related topics |
| `/@:handle` | Writer profile | Tabbed Latest / Top / About |
| `/@:handle/:slug` | Reading view | Single measure, no chrome, full end matter |
| `/membership` | Membership | Where the green accent takes a filled action |
| `/about` | Our story | Also hosts every footer utility section by hash |
| `/write` | Composer | Borderless display-scale inputs |
| `*` | Not found | Editorial 404 |

Static segments are declared before the dynamic `/@handle` routes in `src/routes.jsx`; the router ranks static paths higher, so `/topics` never resolves to a writer.

---

## How the spec maps to code

`src/styles/tokens.css` is the single source of truth. **No component hard-codes a hex value, font size, or spacing number.**

### Colour

| Role | Token | Value | Where it actually appears |
| --- | --- | --- | --- |
| Primary action | `--color-ink` | `#191919` | Pill CTA fill, ink band, high-contrast rings |
| Brand accent | `--color-green` | `#1A8917` | Wordmark dot, eyebrow dots, list markers, filled membership CTA |
| Accent (pressed/hover) | `--color-green-deep` | `#156D12` | Green text, green CTA hover, active clap |
| Surface | `--color-paper` | `#F7F4ED` | Page background everywhere |
| Text | `--color-reading-gray` | `#6B6B6B` | UI body copy, deks, metadata |
| Strong text | `--color-logo-ink` | `#242424` | Wordmark, headings, long-form prose |
| Link | `--color-link` | `#1A73E8` | Inline links and the focus ring — nothing else |
| On ink | `--color-on-ink` | `#FFFFFF` | Text on ink buttons and the band |

Derived neutrals (`--color-surface-alt`, `--color-paper-sunk`, `--color-paper-deep`, `--color-ink-soft`) are all warmed toward the paper. No cool grays and no new hues were introduced. Hairlines are ink at low alpha (`--color-line*`), which is how the system separates surfaces without elevation.

**Accent discipline.** Green is reserved for brand moments and commitment actions: the wordmark dot, eyebrow dots, list markers, and the filled membership CTA. Blue is reserved for links and focus, so a blue thing always means "go somewhere". Everything else is ink, paper, and gray.

### Typography

```css
--font-display: 'Söhne', 'Sohne', 'Helvetica Neue', Helvetica, Arimo, 'Segoe UI', Arial, sans-serif;
--font-body:    'Helvetica Neue', Helvetica, Arimo, 'Segoe UI', Arial, sans-serif;
```

Söhne and Helvetica Neue are licensed faces that cannot be bundled, so **Arimo** (Helvetica-metric, from npm) is loaded as a fallback *behind* them: machines with the real fonts use the real fonts, everyone else still gets the intended proportions.

| Role | Token | Size | Weight |
| --- | --- | --- | --- |
| Hero headline | `--text-hero` | `clamp(48px, 8.4vw, 120px)` | 500 |
| Page title | `--text-page-title` | `clamp(36px, 5.2vw, 72px)` | 500 |
| Article title | `--text-article-title` | `clamp(30px, 4vw, 48px)` | 500 |
| Section heading | `.t-section` | 16px | 600 |
| Lede | `--text-lede` | `clamp(18px, 1.5vw, 24px)` | 400 |
| UI body | `--text-14` | 14px (observed) | 400 |
| Long-form prose | `--text-read` | `clamp(18px, 1.25vw, 20px)` | 400, 1.72 leading |
| Meta / caption | `--text-13` | 13px | 400 |

Hierarchy comes from scale and weight only. Headings tighten slightly (`--tracking-hero: -0.03em`); no small-caps, no letterspaced eyebrows — section labels stay normal case, matching the observed "Trending on Medium" treatment.

### Spacing, radius, depth

- **Spacing** on a 4px base: `--space-1` … `--space-32`, with `--section-y: clamp(48px, 6.5vw, 96px)` for the large vertical gaps that give the pages their calm.
- **Radius**: `--radius-micro` / `--radius-standard` = 4px for every rectilinear container; `--radius-pill` = **1386px** (the observed CTA value) for buttons and chips only. The contrast between the pill and everything rectilinear is deliberate.
- **Depth**: `--shadow-none` is used everywhere. Separation is a hairline or whitespace. The only "ring" treatments are solid ink borders (`.plan.is-selected`, `.btn--primary`) and the blue focus outline.
- **Layout**: `--container: 1192px` for editorial spreads, `--container-read: 728px` for the reading measure, `--gutter: clamp(20px, 4vw, 48px)`.

### Motion

`--motion-fast: 110ms` and `--motion: 170ms` drive colour and border transitions only. Hover feedback is a slight darkening, a wash, or an underline — never a transform, scale, or glow. `prefers-reduced-motion` collapses all transitions and disables smooth scrolling.

---

## Intentional interpretations

Places where the spec was silent, and the decision made:

1. **No dark mode.** The supplied evidence is light-only, so `color-scheme: light` is declared and no dark palette exists. Nothing in the CSS would survive a naive inversion.
2. **Long-form prose uses `#242424`, not `#6B6B6B`.** The observed body token (14px / `#6B6B6B`) is homepage *UI* copy. Sustained reading at 20px uses the documented high-emphasis ink; `#6B6B6B` remains for deks, metadata, and interface copy.
3. **Focus ring is blue, 2px, offset 2px.** Not directly evidenced; it matches the link colour and reads clearly on paper. The global rule deliberately does not set `border-radius`, so pill buttons keep their pill outline on focus.
4. **Flat generated artwork instead of photography.** `CoverArt` (six abstract compositions) and `HeroArt` (the stacked-pages hero illustration) are drawn inline from token colours only, so imagery can never drift from the palette. This keeps the illustration-led hero the spec describes without shipping image assets.
5. **Avatars are initial discs** in warmed neutrals plus one ink inversion — a photo library would have introduced arbitrary colour into every layout.
6. **Containers are rare.** Cards appear only where grouping genuinely earns it: the topic index, the membership teaser, the author card at the end of an article. Everything else is open sections with hairlines.
7. **The nav is not sticky** and has no search field. Neither was evidenced, and both would add chrome the system explicitly avoids. On mobile the nav collapses to wordmark + one pill CTA.
8. **One ink band per page** is allowed as the single high-contrast moment; it stays flat — no gradient, no blur, no overlay treatment.

---

## Structure

```
src/
  styles/       tokens.css (design system) · base.css (reset + primitives) · patterns.css (shared page patterns)
  components/   Logo, Button, Chip, Badge, Avatar, StoryCard, WriterRow, CoverArt, HeroArt,
                Navbar, Footer, Band, MembershipTeaser, Inline, Icons, Page, ScrollToTop
  pages/        Home, Topics, Topic, Article, Profile, Membership, About, Write, NotFound
  data/         content.js — writers, topics, stories, and the derived lookup helpers
  hooks/        useDocumentTitle
  routes.jsx    route table (shared by the app and the render smoke test)
scripts/        smoke.jsx (assert every route renders) · dump.jsx (print rendered markup)
```

Each component owns a plain CSS file next to it; class names are global and prefixed by component, which keeps the cascade readable without a build-time CSS layer.

### Content model

`src/data/content.js` holds ten stories across seven topics and five writers. Article bodies are block arrays (`p`, `h2`, `quote`, `list`, `figure`, `rule`) rendered by `components/Inline.jsx`, which supports exactly three inline forms: `**strong**`, `*emphasis*`, and `[label](/path)`. It is deliberately not Markdown — a larger inline surface would turn body copy into its own styling system.

---

## Verification

There is no browser in this environment, so rendering is verified server-side:

```bash
npm run smoke
```

It renders all fourteen route cases through `StaticRouter`, asserts that expected copy is present, and fails on any crash or on the strings `undefined`, `NaN`, and `[object Object]` leaking into markup. It caught a missing `useParams` import in the profile page that the production build could not see. `npm run build` additionally confirms the bundle compiles (≈334 kB JS, ≈50 kB CSS before gzip).
