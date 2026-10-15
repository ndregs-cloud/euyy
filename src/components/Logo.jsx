import { Link } from 'react-router-dom'
import './Logo.css'

/**
 * Wordmark. Dark ink, tight display tracking, and a single green dot — the
 * one place the brand accent appears in the navigation chrome.
 */
export default function Logo({ to = '/', size = 'md', label = 'Margin home' }) {
  return (
    <Link className={`logo logo--${size}`} to={to} aria-label={label}>
      <span className="logo-word">Margin</span>
      <span className="logo-dot" aria-hidden="true" />
    </Link>
  )
}
