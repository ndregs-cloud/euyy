import { BrowserRouter } from 'react-router-dom'
import ScrollToTop from './components/ScrollToTop'
import AppRoutes from './routes'

export default function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <AppRoutes />
    </BrowserRouter>
  )
}
