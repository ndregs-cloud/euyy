import './Badge.css'

/**
 * Badges: simple and understated, standard 4px radius, no shadow.
 *   neutral — quiet warm fill for meta labels
 *   outline — hairline ink edge on paper
 *   accent  — green wash, reserved for membership / positive moments
 *   ink     — solid ink, used at most once per view
 */
export default function Badge({ variant = 'neutral', icon = null, className = '', children }) {
  const classes = ['badge', `badge--${variant}`, className].filter(Boolean).join(' ')
  return (
    <span className={classes}>
      {icon ? <span className="badge-icon">{icon}</span> : null}
      {children}
    </span>
  )
}
