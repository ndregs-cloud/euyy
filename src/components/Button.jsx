import { Link } from 'react-router-dom'
import './Button.css'

/**
 * Buttons and button-like controls.
 *
 *   variant="primary"  ink pill, white text — the single highest-emphasis
 *                      action on a page. No shadow, solid ink border.
 *   variant="accent"   green pill — reserved for brand/commitment moments
 *                      (membership, follow, subscribe).
 *   variant="outline"  hairline ink pill on paper — secondary actions that
 *                      must never outshout the primary.
 *   variant="quiet"    text-only control, wash on hover.
 *
 * Renders a router Link for `to`, an anchor for `href`, otherwise a button.
 */
export default function Button({
  as,
  to,
  href,
  variant = 'primary',
  size = 'md',
  active = false,
  full = false,
  icon = null,
  iconRight = null,
  className = '',
  children,
  ...rest
}) {
  const classes = [
    'btn',
    `btn--${variant}`,
    `btn--${size}`,
    full ? 'btn--full' : '',
    active ? 'is-active' : '',
    className,
  ]
    .filter(Boolean)
    .join(' ')

  const content = (
    <>
      {icon ? <span className="btn-icon">{icon}</span> : null}
      <span className="btn-label">{children}</span>
      {iconRight ? <span className="btn-icon">{iconRight}</span> : null}
    </>
  )

  const Component = as || (to ? Link : href ? 'a' : 'button')
  const extra = href && !to ? { href } : to ? { to } : {}

  return (
    <Component
      className={classes}
      {...extra}
      {...(Component === 'button' && !rest.type ? { type: 'button' } : {})}
      {...rest}
    >
      {content}
    </Component>
  )
}
