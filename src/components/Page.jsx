import Navbar from './Navbar'
import Footer from './Footer'
import './Page.css'

/**
 * Page shell: navigation, content, footer. Every route uses it, so the warm
 * paper canvas and the flat chrome are consistent across the whole site.
 */
export default function Page({ children, className = '' }) {
  return (
    <div className="shell">
      <Navbar />
      <main id="main" className={`page ${className}`.trim()}>
        {children}
      </main>
      <Footer />
    </div>
  )
}
