import { Link } from 'react-router-dom'

/**
 * Inline — a tiny markup renderer for editorial copy.
 *
 * Supports the three things prose actually needs and nothing else:
 *   **strong**   *emphasis*   [label](/internal/path or https://external)
 *
 * Deliberately not markdown: no headings, no nesting, no HTML. Keeping the
 * surface this small is what stops the body copy from becoming a styling
 * system of its own.
 */
const TOKEN = /(\*\*[^*]+\*\*|\*[^*\s][^*]*\*|\[[^\]]+\]\([^)\s]+\))/g

function renderToken(part, key) {
  if (!part) return null

  const bold = part.match(/^\*\*([^*]+)\*\*$/)
  if (bold) return <strong key={key}>{bold[1]}</strong>

  const em = part.match(/^\*([^*]+)\*$/)
  if (em) return <em key={key}>{em[1]}</em>

  const link = part.match(/^\[([^\]]+)\]\(([^)\s]+)\)$/)
  if (link) {
    const [, label, href] = link
    const internal = href.startsWith('/') || href.startsWith('#')
    return internal ? (
      <Link className="prose-link" key={key} to={href}>
        {label}
      </Link>
    ) : (
      <a className="prose-link" key={key} href={href} target="_blank" rel="noreferrer noopener">
        {label}
      </a>
    )
  }

  return <span key={key}>{part}</span>
}

export default function Inline({ text }) {
  if (!text) return null
  return <>{String(text).split(TOKEN).map(renderToken)}</>
}
