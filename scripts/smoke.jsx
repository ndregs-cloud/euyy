/**
 * Render smoke test.
 *
 * There is no browser in this environment, so every route is rendered to a
 * string with StaticRouter. It catches the things a build cannot: undefined
 * lookups, bad data references, missing helpers, routes that crash.
 *
 *   npx vite build --ssr scripts/smoke.jsx --outDir .smoke && node .smoke/smoke.js
 */
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router'
import AppRoutes from '../src/routes'

const CASES = [
  { path: '/', expect: ['Think out loud.', 'Trending on Margin', 'Get started'] },
  { path: '/topics', expect: ['Topics', 'Technology', 'Culture'] },
  { path: '/topic/cities', expect: ['Cities', 'The quiet cost of a fast city'] },
  { path: '/topic/does-not-exist', expect: ['still a draft'] },
  { path: '/membership', expect: ['Pay the writers, not the ads.', 'Get unlimited access'] },
  { path: '/about', expect: ['A place to think out loud.', 'Rules'] },
  { path: '/write', expect: ['Tell your story…', 'Publish'] },
  { path: '/@nadia', expect: ['Nadia Raharjo', 'Followers'] },
  { path: '/@unknown-writer', expect: ['still a draft'] },
  {
    path: '/@nadia/the-quiet-cost-of-a-fast-city',
    expect: ['The quiet cost of a fast city', 'Speed is a subsidy', 'min read'],
  },
  {
    path: '/@tomas/you-do-not-need-a-better-note-app',
    expect: ['Capture is cheap now', 'Tomás Ferrer'],
  },
  {
    path: '/@amy/what-seabirds-know-about-sleep',
    expect: ['unihemispheric', 'Great frigatebirds'],
  },
  { path: '/@nadia/no-such-story', expect: ['still a draft'] },
  { path: '/some/random/place', expect: ['still a draft'] },
]

let failures = 0

for (const testCase of CASES) {
  try {
    const html = renderToString(
      <StaticRouter location={testCase.path}>
        <AppRoutes />
      </StaticRouter>,
    )

    const missing = testCase.expect.filter((needle) => !html.includes(needle))
    const smells = ['undefined', 'NaN', '[object Object]'].filter((s) => html.includes(s))

    if (missing.length || smells.length) {
      failures += 1
      console.log(`FAIL ${testCase.path}`)
      if (missing.length) console.log(`     missing: ${missing.join(', ')}`)
      if (smells.length) console.log(`     smells:  ${smells.join(', ')}`)
    } else {
      console.log(`ok   ${testCase.path}  (${html.length} chars)`)
    }
  } catch (err) {
    failures += 1
    console.log(`CRASH ${testCase.path}`)
    console.log(`      ${err.message}`)
  }
}

console.log(failures ? `\n${failures} failing case(s)` : '\nAll routes rendered cleanly.')
process.exit(failures ? 1 : 0)
