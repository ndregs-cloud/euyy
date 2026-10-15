import './HeroArt.css'

const INK = 'var(--color-ink)'
const GREEN = 'var(--color-green)'
const PAPER = 'var(--color-paper)'
const SURFACE_ALT = 'var(--color-surface-alt)'
const PAPER_SUNK = 'var(--color-paper-sunk)'

/**
 * HeroArt — the branded homepage illustration.
 *
 * Illustration-led rather than product-screenshot-led: a stack of flat pages
 * on a warm ground, one green accent line, an ink pill echoing the primary
 * CTA, and a caret mid-sentence. Drawn from tokens only, so it can never
 * drift from the palette.
 */
export default function HeroArt({ className = '' }) {
  const bodyLines = [
    { y: 292, w: 238 },
    { y: 312, w: 212 },
    { y: 332, w: 238 },
    { y: 352, w: 166 },
    { y: 372, w: 238 },
    { y: 392, w: 118 },
  ]

  return (
    <svg
      className={`hero-art ${className}`}
      viewBox="0 0 600 500"
      role="img"
      aria-label="Illustration of stacked pages with an essay in progress"
    >
      {/* warm ground */}
      <circle cx="392" cy="248" r="204" fill={PAPER_SUNK} />

      {/* loose ink square, top left */}
      <g transform="rotate(-7 88 116)">
        <rect
          x="62"
          y="90"
          width="52"
          height="52"
          rx="4"
          fill="none"
          stroke={INK}
          strokeWidth="1.5"
          opacity="0.32"
        />
      </g>

      {/* page stack */}
      <g transform="rotate(-8 300 262)">
        <rect
          x="150"
          y="80"
          width="300"
          height="380"
          rx="4"
          fill={SURFACE_ALT}
          stroke={INK}
          strokeWidth="1"
          opacity="0.9"
          strokeOpacity="0.26"
        />
      </g>
      <g transform="rotate(5 320 272)">
        <rect
          x="170"
          y="96"
          width="300"
          height="380"
          rx="4"
          fill={SURFACE_ALT}
          stroke={INK}
          strokeWidth="1"
          strokeOpacity="0.42"
        />
      </g>

      {/* front page */}
      <rect
        x="140"
        y="116"
        width="310"
        height="374"
        rx="4"
        fill={SURFACE_ALT}
        stroke={INK}
        strokeWidth="1.5"
      />

      {/* eyebrow */}
      <rect x="176" y="156" width="44" height="7" rx="3.5" fill={GREEN} />

      {/* oversized headline: two bars, the second lighter */}
      <rect x="176" y="180" width="198" height="16" rx="3" fill={INK} />
      <rect x="176" y="206" width="140" height="16" rx="3" fill={INK} opacity="0.82" />

      {/* byline */}
      <circle cx="185" cy="250" r="9" fill={INK} opacity="0.78" />
      <rect x="202" y="246" width="78" height="8" rx="4" fill={INK} opacity="0.22" />
      <rect x="176" y="274" width="238" height="1" fill={INK} opacity="0.14" />

      {/* body copy, one accent line, caret mid-sentence */}
      {bodyLines.map((l, i) => (
        <rect
          key={l.y}
          x="176"
          y={l.y}
          width={l.w}
          height="6"
          rx="3"
          fill={i === 3 ? GREEN : INK}
          opacity={i === 3 ? 0.85 : 0.16}
        />
      ))}
      <rect x="300" y="386" width="2" height="17" fill={INK} opacity="0.85" />

      {/* pill CTA echo */}
      <rect x="176" y="426" width="96" height="26" rx="13" fill={INK} />
      <rect x="192" y="437" width="64" height="4" rx="2" fill={PAPER} opacity="0.92" />

      {/* overlapping ink ring, bottom left */}
      <circle
        cx="112"
        cy="410"
        r="46"
        fill="none"
        stroke={INK}
        strokeWidth="2"
        opacity="0.78"
      />

      {/* single green dot, top right */}
      <circle cx="486" cy="112" r="13" fill={GREEN} />
    </svg>
  )
}
