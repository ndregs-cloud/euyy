import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

/* Arimo is a Helvetica-metric face bundled as a fallback: it sits after
   Helvetica Neue in the token stacks, so machines that have the real thing
   use it and everyone else still gets the intended proportions. */
import '@fontsource/arimo/latin-400.css'
import '@fontsource/arimo/latin-500.css'
import '@fontsource/arimo/latin-600.css'
import '@fontsource/arimo/latin-700.css'
import '@fontsource/arimo/latin-ext-400.css'
import '@fontsource/arimo/latin-ext-500.css'
import '@fontsource/arimo/latin-ext-600.css'
import '@fontsource/arimo/latin-ext-700.css'

import './styles/tokens.css'
import './styles/base.css'
import './styles/patterns.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
