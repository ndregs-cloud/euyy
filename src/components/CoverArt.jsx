import './CoverArt.css'

/**
 * CoverArt — flat, generated cover artwork.
 *
 * No photography and no illustration library: six deterministic abstract
 * compositions drawn from the token palette only (paper tones, ink, and the
 * single green accent). They stay quiet so the typography keeps the hierarchy.
 */

const PAPER_SUNK = 'var(--color-paper-sunk)'
const PAPER_DEEP = 'var(--color-paper-deep)'
const SURFACE_ALT = 'var(--color-surface-alt)'
const INK = 'var(--color-ink)'
const INK_SOFT = 'var(--color-ink-soft)'
const GREEN = 'var(--color-green)'
const GREEN_DEEP = 'var(--color-green-deep)'

function Rings() {
  return (
    <>
      <rect width="120" height="120" fill={PAPER_SUNK} />
      <circle cx="78" cy="44" r="42" fill="none" stroke={INK} strokeWidth="1.5" opacity="0.3" />
      <circle cx="78" cy="44" r="28" fill="none" stroke={INK} strokeWidth="1.5" opacity="0.55" />
      <circle cx="78" cy="44" r="14" fill={INK} />
      <circle cx="30" cy="92" r="11" fill={GREEN} />
      <rect x="52" y="88" width="56" height="1.5" fill={INK} opacity="0.25" />
    </>
  )
}

function Columns() {
  const bars = [
    { x: 16, h: 54, fill: INK_SOFT, o: 0.85 },
    { x: 34, h: 86, fill: INK, o: 1 },
    { x: 52, h: 38, fill: GREEN, o: 1 },
    { x: 70, h: 70, fill: INK_SOFT, o: 0.5 },
    { x: 88, h: 98, fill: INK, o: 0.8 },
  ]
  return (
    <>
      <rect width="120" height="120" fill={SURFACE_ALT} />
      {bars.map((b) => (
        <rect
          key={b.x}
          x={b.x}
          y={108 - b.h}
          width="12"
          height={b.h}
          rx="2"
          fill={b.fill}
          opacity={b.o}
        />
      ))}
      <rect x="12" y="108" width="96" height="1.5" fill={INK} opacity="0.3" />
    </>
  )
}

function Dots() {
  const cells = []
  const special = { '2-2': INK, '3-1': INK, '1-3': GREEN }
  for (let row = 0; row < 5; row += 1) {
    for (let col = 0; col < 5; col += 1) {
      const key = `${col}-${row}`
      cells.push(
        <circle
          key={key}
          cx={24 + col * 18}
          cy={24 + row * 18}
          r="4.5"
          fill={special[key] || INK}
          opacity={special[key] ? 1 : 0.2}
        />,
      )
    }
  }
  return (
    <>
      <rect width="120" height="120" fill={PAPER_DEEP} />
      {cells}
    </>
  )
}

function Split() {
  return (
    <>
      <rect width="120" height="120" fill={PAPER_SUNK} />
      <path d="M0 120 120 0v120Z" fill={INK} opacity="0.92" />
      <circle cx="34" cy="34" r="15" fill={GREEN} />
      <rect x="0.75" y="0.75" width="118.5" height="118.5" fill="none" stroke={INK} opacity="0.25" />
    </>
  )
}

function Lines() {
  const widths = [84, 76, 84, 60, 84, 42]
  return (
    <>
      <rect width="120" height="120" fill={SURFACE_ALT} />
      <rect x="18" y="20" width="54" height="9" rx="3" fill={INK} />
      <rect x="18" y="36" width="84" height="4" rx="2" fill={INK} opacity="0.18" />
      {widths.map((w, i) => (
        <rect
          key={i}
          x="18"
          y={54 + i * 10}
          width={w}
          height="4"
          rx="2"
          fill={i === 3 ? GREEN : INK}
          opacity={i === 3 ? 0.9 : 0.16}
        />
      ))}
      <rect x="18" y="106" width="30" height="4" rx="2" fill={INK_SOFT} opacity="0.45" />
    </>
  )
}

function Blocks() {
  const cells = [
    { x: 15, y: 15, fill: INK, o: 0.14 },
    { x: 47, y: 15, fill: GREEN_DEEP, o: 0.85 },
    { x: 79, y: 15, fill: INK, o: 0.35 },
    { x: 15, y: 47, fill: INK, o: 0.6 },
    { x: 47, y: 47, fill: 'none', stroke: INK, o: 0.5 },
    { x: 79, y: 47, fill: INK, o: 0.2 },
    { x: 15, y: 79, fill: GREEN, o: 0.9 },
    { x: 47, y: 79, fill: INK, o: 0.18 },
    { x: 79, y: 79, fill: INK_SOFT, o: 0.55 },
  ]
  return (
    <>
      <rect width="120" height="120" fill={PAPER_DEEP} />
      {cells.map((c) => (
        <rect
          key={`${c.x}-${c.y}`}
          x={c.x}
          y={c.y}
          width="26"
          height="26"
          rx="3"
          fill={c.fill}
          stroke={c.stroke || 'none'}
          strokeWidth={c.stroke ? 1.5 : 0}
          opacity={c.o}
        />
      ))}
    </>
  )
}

function Horizon() {
  return (
    <>
      <rect width="120" height="120" fill={PAPER_SUNK} />
      <circle cx="58" cy="54" r="26" fill={GREEN} />
      <circle cx="98" cy="28" r="6" fill={INK} opacity="0.3" />
      <rect x="0" y="78" width="120" height="42" fill={INK} opacity="0.92" />
      <rect x="0" y="72" width="120" height="1.5" fill={INK} opacity="0.4" />
    </>
  )
}

const VARIANTS = [Rings, Columns, Dots, Split, Lines, Blocks, Horizon]

export default function CoverArt({ variant = 0, className = '' }) {
  const Art = VARIANTS[((variant % VARIANTS.length) + VARIANTS.length) % VARIANTS.length]
  return (
    <svg
      className={`cover-art ${className}`}
      viewBox="0 0 120 120"
      preserveAspectRatio="xMidYMid slice"
      aria-hidden="true"
      focusable="false"
    >
      <Art />
    </svg>
  )
}
