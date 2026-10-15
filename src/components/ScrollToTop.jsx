import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Scroll restoration: new routes start at the top, hash routes scroll to the
 * section they name. No scroll-linked animations anywhere in the app — the
 * system keeps motion restrained and almost invisible.
 */
export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const el = document.getElementById(hash.slice(1))
      if (el) {
        el.scrollIntoView({ block: 'start' })
        return
      }
    }
    // `instant` overrides the document's smooth scrolling, so a route change
    // jumps to the top instead of gliding up the whole previous page.
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' })
  }, [pathname, hash])

  return null
}
