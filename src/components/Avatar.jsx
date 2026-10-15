import './Avatar.css'

/* Muted, warmed tones only — the palette stays editorial, so avatars never
   introduce a competing accent colour. */
const TONES = [
  { bg: 'var(--color-paper-deep)', fg: 'var(--color-ink)' },
  { bg: '#d8d0bb', fg: 'var(--color-ink)' },
  { bg: '#cbc2ab', fg: 'var(--color-ink)' },
  { bg: '#dce5d6', fg: 'var(--color-green-deep)' },
  { bg: 'var(--color-ink)', fg: 'var(--color-paper)' },
]

/** Two initials at readable sizes, one below 26px where two would crowd. */
const initials = (name = '', max = 2) =>
  name
    .split(/\s+/)
    .filter(Boolean)
    .slice(0, max)
    .map((w) => w[0])
    .join('')
    .toUpperCase()

/**
 * Flat initial-avatar. No photo library, no ring, no shadow — a warm disc
 * with ink initials that sits quietly next to a byline.
 */
export default function Avatar({ name, tone = 0, size = 24, className = '' }) {
  const t = TONES[tone % TONES.length]
  return (
    <span
      className={`avatar ${className}`}
      style={{
        width: size,
        height: size,
        backgroundColor: t.bg,
        color: t.fg,
        fontSize: Math.max(10, Math.round(size * 0.42)),
      }}
      aria-hidden="true"
    >
      {initials(name, size < 26 ? 1 : 2)}
    </span>
  )
}
