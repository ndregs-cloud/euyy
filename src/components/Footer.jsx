import { Link } from 'react-router-dom'
import Logo from './Logo'
import './Footer.css'

const EXPLORE = [
  { to: '/', label: 'Home' },
  { to: '/topics', label: 'Topics' },
  { to: '/membership', label: 'Membership' },
  { to: '/write', label: 'Write' },
]

/* Trust-signal utility links. Each resolves to a real section of /about. */
const UTILITY = ['About', 'Help', 'Terms', 'Privacy', 'Status', 'Careers', 'Blog', 'Rules']

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-accent" aria-hidden="true" />
      <div className="container footer-inner">
        <div className="footer-brand">
          <Logo size="sm" />
          <p className="footer-note">
            A home for essays, reporting, and ideas in progress. Written by people, read on paper.
          </p>
          <p className="footer-legal">
            © {new Date().getFullYear()} Margin. A design-system prototype: the editorial voice and
            utility links are illustrative.
          </p>
        </div>

        <div className="footer-columns">
          <nav className="footer-group" aria-label="Explore">
            <h2 className="footer-heading">Explore</h2>
            <ul className="footer-list">
              {EXPLORE.map((item) => (
                <li key={item.to}>
                  <Link className="footer-link" to={item.to}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="footer-group" aria-label="About Margin">
            <h2 className="footer-heading">Margin</h2>
            <ul className="footer-list footer-list--wrap">
              {UTILITY.map((item) => (
                <li key={item}>
                  <Link
                    className="footer-link"
                    to={`/about#${item.toLowerCase()}`}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </footer>
  )
}
