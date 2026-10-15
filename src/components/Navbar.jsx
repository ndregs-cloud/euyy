import { NavLink } from 'react-router-dom'
import Logo from './Logo'
import Button from './Button'
import './Navbar.css'

const LINKS = [
  { to: '/topics', label: 'Topics' },
  { to: '/membership', label: 'Membership' },
  { to: '/about', label: 'Our story' },
]

/**
 * Minimal top navigation: dark wordmark, three plain text links, and a single
 * high-emphasis ink pill on the right. It sits on the same warm paper as the
 * page — no translucent bar, no blur, no shadow, not sticky.
 */
export default function Navbar() {
  return (
    <header className="nav">
      <div className="container nav-inner">
        <Logo />

        <nav className="nav-links" aria-label="Primary">
          {LINKS.map((link) => (
            <NavLink
              key={link.to}
              to={link.to}
              className={({ isActive }) => `nav-link${isActive ? ' is-active' : ''}`}
            >
              {link.label}
            </NavLink>
          ))}
        </nav>

        <div className="nav-actions">
          <Button to="/write" size="sm">
            Get started
          </Button>
        </div>
      </div>
    </header>
  )
}
