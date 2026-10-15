/**
 * Dump one route's rendered markup so the DOM can be reviewed without a
 * browser: node .smoke/dump.js "/@nadia/the-quiet-cost-of-a-fast-city"
 */
import { renderToStaticMarkup } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRoutes from '../src/routes'

const path = process.argv[2] || '/'

const html = renderToStaticMarkup(
  <StaticRouter location={path}>
    <AppRoutes />
  </StaticRouter>,
)

// light pretty-printing: one tag per line for readability
const pretty = html
  .replace(/></g, '>\n<')
  .split('\n')
  .map((line, i) => line)
  .join('\n')

console.log(pretty)
