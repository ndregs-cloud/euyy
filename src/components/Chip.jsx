import { Link } from 'react-router-dom'
import './Chip.css'

/**
 * Topic chips. Pill-shaped but deliberately quiet: hairline ink border,
 * reading-gray text, transparent ground. They must never outshout the ink
 * pill CTA, which stays the only high-emphasis control on a page.
 */
export default function Chip({
  to,
  href,
  active = false,
  size = 'md',
  count = null,
  onClick,
  className = '',
  children,
}) {
  const classes = ['chip', `chip--${size}`, active ? 'is-active' : '', className]
    .filter(Boolean)
    .join(' ')

  const inner = (
    <>
      <span className="chip-label">{children}</span>
      {count != null ? <span className="chip-count">{count}</span> : null}
    </>
  )

  if (to) {
    return (
      <Link className={classes} to={to}>
        {inner}
      </Link>
    )
  }
  if (href) {
    return (
      <a className={classes} href={href}>
        {inner}
      </a>
    )
  }
  return (
    <button type="button" className={classes} onClick={onClick} aria-pressed={active}>
      {inner}
    </button>
  )
}
