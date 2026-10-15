import { useState } from 'react'
import Page from '../components/Page'
import Badge from '../components/Badge'
import Band from '../components/Band'
import Button from '../components/Button'
import { IconCheck } from '../components/Icons'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './Membership.css'

const PLANS = [
  {
    id: 'annual',
    name: 'Annual',
    price: '$50',
    cadence: '/year',
    note: 'Works out to $4.17 a month',
    badge: 'Two months free',
  },
  {
    id: 'monthly',
    name: 'Monthly',
    price: '$5',
    cadence: '/month',
    note: 'Cancel any time, no phone call required',
    badge: null,
  },
]

const INCLUDED = [
  'Every story on Margin, including the member-only ones.',
  'Your subscription pays the writers you read, by the minute you spend.',
  'No promoted posts, no engagement-ranked feed, no infinite scroll.',
  'One email a week: the essays worth your Sunday morning.',
]

const FAQ = [
  {
    q: 'Where does the money go?',
    a: 'Most of it goes to writers, distributed by member reading time. The rest keeps the site running — hosting, payments, and two people answering email.',
  },
  {
    q: 'Do writers pay to publish?',
    a: 'No, and they never will. Publishing is free. Membership pays writers; it does not charge them.',
  },
  {
    q: 'Can I cancel?',
    a: 'Yes, in two clicks, from your account page. You keep access until the end of the period you paid for.',
  },
]

/**
 * Membership — the page where the green accent earns its keep. Brand green
 * is reserved for commitment moments, so it appears here as the filled CTA
 * and nowhere else in the product chrome.
 */
export default function Membership() {
  const [plan, setPlan] = useState('annual')
  const [started, setStarted] = useState(false)

  useDocumentTitle('Membership — Margin')

  return (
    <Page>
      <div className="container">
        <header className="page-head">
          <p className="page-eyebrow">Membership</p>
          <h1 className="t-page-title">Pay the writers, not the ads.</h1>
          <p className="page-lede">
            One subscription, every story, and the money follows the reading — so the people who
            wrote what you loved are the people it pays.
          </p>
        </header>
      </div>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      <div className="container container--read membership">
        <fieldset className="plans">
          <legend className="t-section plans-legend">Choose a plan</legend>

          {PLANS.map((p) => (
            <label
              key={p.id}
              className={`plan${plan === p.id ? ' is-selected' : ''}`}
              htmlFor={`plan-${p.id}`}
            >
              <input
                id={`plan-${p.id}`}
                type="radio"
                name="plan"
                value={p.id}
                checked={plan === p.id}
                onChange={() => setPlan(p.id)}
              />
              <span className="plan-radio" aria-hidden="true" />
              <span className="plan-text">
                <span className="plan-name">
                  {p.name}
                  {p.badge ? <Badge variant="accent">{p.badge}</Badge> : null}
                </span>
                <span className="plan-note">{p.note}</span>
              </span>
              <span className="plan-price">
                {p.price}
                <span className="plan-cadence">{p.cadence}</span>
              </span>
            </label>
          ))}
        </fieldset>

        <div className="membership-cta">
          <Button variant="accent" size="lg" onClick={() => setStarted(true)}>
            Get unlimited access
          </Button>
          <p className="t-meta membership-note">
            {started
              ? 'This is where checkout would open. No payment is taken in the prototype.'
              : 'Prototype only — no payment is taken and nothing is stored.'}
          </p>
        </div>

        <div className="rule" />

        <section className="membership-block">
          <h2 className="t-section membership-heading">What’s included</h2>
          <ul className="included">
            {INCLUDED.map((item) => (
              <li key={item}>
                <span className="included-check" aria-hidden="true">
                  <IconCheck size={15} />
                </span>
                {item}
              </li>
            ))}
          </ul>
        </section>

        <div className="rule" />

        <section className="membership-block">
          <h2 className="t-section membership-heading">Questions</h2>
          <dl className="faq">
            {FAQ.map((item) => (
              <div key={item.q}>
                <dt>{item.q}</dt>
                <dd>{item.a}</dd>
              </div>
            ))}
          </dl>
        </section>
      </div>

      <Band
        eyebrow="Writers"
        title="Reading is what keeps the writing coming."
        sub="Member reading time is how writers get paid. Every minute you spend on a story counts toward someone’s rent."
        primaryTo="/write"
        primaryLabel="Start writing"
        linkTo="/topics"
        linkLabel="See what members are reading"
      />
    </Page>
  )
}
