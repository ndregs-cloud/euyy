/**
 * Line icons. 1.5px strokes, currentColor, no fills unless noted — the
 * system is flat, so icons stay hairline-thin and ink-coloured.
 */

const base = (size) => ({
  width: size,
  height: size,
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.5,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
  'aria-hidden': 'true',
  focusable: 'false',
})

export function IconArrowRight({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M4 12h15" />
      <path d="m13 6 6 6-6 6" />
    </svg>
  )
}

export function IconArrowUpRight({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M7 17 17 7" />
      <path d="M8 7h9v9" />
    </svg>
  )
}

export function IconStar({ size = 16, filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? 'currentColor' : 'none'} strokeWidth={filled ? 0 : 1.5}>
      <path d="m12 3.6 2.5 5.3 5.6.8-4.1 4 1 5.7-5-2.7-5 2.7 1-5.7-4.1-4 5.6-.8z" />
    </svg>
  )
}

export function IconBookmark({ size = 20, filled = false }) {
  return (
    <svg {...base(size)} fill={filled ? 'currentColor' : 'none'}>
      <path d="M6.5 4.5h11v15l-5.5-4-5.5 4z" />
    </svg>
  )
}

export function IconResponse({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M20 12c0 3.9-3.6 7-8 7-1 0-2-.2-2.9-.5L4.5 20l1.2-3.3C4.6 15.4 4 13.8 4 12c0-3.9 3.6-7 8-7s8 3.1 8 7Z" />
    </svg>
  )
}

export function IconClap({ size = 20 }) {
  return (
    <svg {...base(size)}>
      {/* open hand: three fingers, then pinky, palm and thumb in one stroke */}
      <path d="M7.9 12.4V6.6a1.4 1.4 0 0 1 2.8 0v5" />
      <path d="M10.7 11.6V5.4a1.4 1.4 0 0 1 2.8 0v6.2" />
      <path d="M13.5 12V7.1a1.4 1.4 0 0 1 2.8 0v6.4" />
      <path d="M16.3 13.6v-1.7a1.4 1.4 0 0 1 2.8 0v3.9c0 2.9-2.4 5.2-5.3 5.2h-1c-2.3 0-3.9-1-5.1-2.8l-2-3.2a1.4 1.4 0 0 1 2.2-1.7l1.5 1.9" />
      {/* applause ticks */}
      <path d="M5 6.6 3.6 5.3M8.1 4.7 7.5 2.9M11.7 4.5l.1-1.9" />
    </svg>
  )
}

export function IconShare({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 15.5V4" />
      <path d="m8 7.5 4-3.5 4 3.5" />
      <path d="M5.5 13v6.5h13V13" />
    </svg>
  )
}

export function IconSearch({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <circle cx="11" cy="11" r="6.2" />
      <path d="m15.6 15.6 4 4" />
    </svg>
  )
}

export function IconPlus({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 5v14M5 12h14" />
    </svg>
  )
}

export function IconCheck({ size = 16 }) {
  return (
    <svg {...base(size)}>
      <path d="m4.5 12.5 5 5 10-11" />
    </svg>
  )
}

export function IconPin({ size = 16 }) {
  return (
    <svg {...base(size)}>
      <path d="M12 21s6.5-6.1 6.5-11a6.5 6.5 0 0 0-13 0C5.5 14.9 12 21 12 21Z" />
      <circle cx="12" cy="10" r="2.3" />
    </svg>
  )
}

export function IconCalendar({ size = 16 }) {
  return (
    <svg {...base(size)}>
      <rect x="4" y="5.5" width="16" height="14.5" rx="2" />
      <path d="M4 10h16M9 3.5v4M15 3.5v4" />
    </svg>
  )
}

export function IconPen({ size = 20 }) {
  return (
    <svg {...base(size)}>
      <path d="M4.5 19.5h4l10-10a2.5 2.5 0 0 0-3.5-3.5l-10 10z" />
      <path d="m13.5 7 3.5 3.5" />
    </svg>
  )
}
