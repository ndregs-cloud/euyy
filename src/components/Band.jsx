import { Link } from 'react-router-dom'
import Button from './Button'
import './Band.css'

/**
 * Band — the single high-contrast moment on a page: a flat ink ground, paper
 * type, an inverted pill CTA and one green dot. No gradient, no shadow, no
 * decoration; the contrast alone does the work.
 */
export default function Band({
  eyebrow,
  title,
  sub,
  primaryTo,
  primaryLabel,
  linkTo,
  linkLabel,
  id,
}) {
  return (
    <section className="band" id={id}>
      <div className="container band-inner">
        {eyebrow ? (
          <p className="band-eyebrow">
            <span className="band-dot" aria-hidden="true" />
            {eyebrow}
          </p>
        ) : null}
        <h2 className="band-title">{title}</h2>
        {sub ? <p className="band-sub">{sub}</p> : null}
        {primaryTo || linkTo ? (
          <div className="band-actions">
            {primaryTo ? (
              <Button to={primaryTo} variant="invert" size="lg">
                {primaryLabel}
              </Button>
            ) : null}
            {linkTo ? (
              <Link className="band-link" to={linkTo}>
                {linkLabel}
              </Link>
            ) : null}
          </div>
        ) : null}
      </div>
    </section>
  )
}
