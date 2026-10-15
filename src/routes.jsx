import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Topics from './pages/Topics'
import Topic from './pages/Topic'
import Article from './pages/Article'
import Profile from './pages/Profile'
import Membership from './pages/Membership'
import About from './pages/About'
import Write from './pages/Write'
import NotFound from './pages/NotFound'

/**
 * Route table, kept separate from the router so the same tree can be
 * rendered server-side (see scripts/smoke.jsx) for verification.
 *
 * Static segments are declared before the dynamic `/@handle` routes; the
 * router ranks static paths higher, so `/topics` never resolves to a writer.
 *
 *   /                editorial homepage
 *   /topics          topic index
 *   /topic/:slug     topic feed
 *   /membership      membership offer — the green-accent moment
 *   /about           our story + every footer utility section
 *   /write           minimal composer
 *   /@:handle        writer profile
 *   /@:handle/:slug  reading view
 */
export default function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/topics" element={<Topics />} />
      <Route path="/topic/:slug" element={<Topic />} />
      <Route path="/membership" element={<Membership />} />
      <Route path="/about" element={<About />} />
      <Route path="/write" element={<Write />} />
      <Route path="/:handle" element={<Profile />} />
      <Route path="/:handle/:slug" element={<Article />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
  )
}
