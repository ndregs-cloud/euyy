import Page from '../components/Page'
import Chip from '../components/Chip'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './About.css'

const SECTIONS = [
  {
    id: 'about',
    title: 'About',
    blocks: [
      {
        type: 'p',
        text: 'Margin began as a shared document between six writers who kept emailing each other drafts that were too long for a newsletter and too personal for a publication. The document grew, then it needed a name, and then it needed a front door.',
      },
      {
        type: 'p',
        text: 'There is no ranking algorithm here. Stories appear in reverse chronological order inside the topics you follow, and nothing is promoted because it performs. We think that is a feature; we are aware that it is an unfashionable one.',
      },
      {
        type: 'p',
        text: 'We are funded by members, not advertisers, which is the only reason the reading experience can stay this quiet.',
      },
    ],
  },
  {
    id: 'help',
    title: 'Help',
    blocks: [
      {
        type: 'p',
        text: 'Something broken, missing, or confusing? Write to us and a person will answer — usually the same day, always without a ticket number.',
      },
      {
        type: 'p',
        text: 'Note that this build is a design prototype: there is no backend, so nothing you type is stored, and no account actions actually complete.',
      },
    ],
  },
  {
    id: 'terms',
    title: 'Terms',
    blocks: [
      {
        type: 'p',
        text: 'You keep everything you write. We ask for the right to publish it on Margin and to display it in the places readers expect to find it — topic pages, writer profiles, and email to people who follow you.',
      },
      {
        type: 'p',
        text: 'We do not license your work to anyone else, and we do not use it to train models. If you delete a story, it is deleted.',
      },
    ],
  },
  {
    id: 'privacy',
    title: 'Privacy',
    blocks: [
      {
        type: 'p',
        text: 'We store an email address, the stories you publish, and the topics you follow. That is the whole list. There are no third-party trackers, no ad identifiers, and no data brokers.',
      },
      {
        type: 'p',
        text: 'Reading is measured only in aggregate, because member reading time is how writers are paid. Individual reading histories are never sold or shared.',
      },
    ],
  },
  {
    id: 'status',
    title: 'Status',
    blocks: [
      {
        type: 'p',
        text: 'Everything is running. This prototype ships as one static bundle with no server dependencies, so its uptime is a function of the host and nothing else.',
      },
    ],
  },
  {
    id: 'careers',
    title: 'Careers',
    blocks: [
      {
        type: 'p',
        text: 'We are six people and we are not hiring. When that changes we will say so here first, and we will publish the salary band in the listing.',
      },
    ],
  },
  {
    id: 'blog',
    title: 'Blog',
    blocks: [
      {
        type: 'p',
        text: 'We write about Margin in the same place everyone else writes: on Margin. Product decisions, payment breakdowns, and the occasional apology all appear under the Design and Work topics.',
      },
    ],
  },
  {
    id: 'rules',
    title: 'Rules',
    blocks: [
      { type: 'p', text: 'Five rules, in order of how often they get broken:' },
      {
        type: 'list',
        items: [
          'Say the thing. If your argument needs a paragraph of throat-clearing, cut the paragraph.',
          'Cite your sources, including the ones that inconvenience you.',
          'No rage-bait, no engagement farming, no “one weird trick”.',
          'Correct yourself visibly. Edits get a note; retractions get a headline.',
          'Attack ideas, not the people holding them.',
        ],
      },
    ],
  },
]

/**
 * Our story + the footer's utility sections, each addressable by hash so
 * every footer link resolves to real content instead of a dead anchor.
 */
export default function About() {
  useDocumentTitle('Our story — Margin')

  return (
    <Page>
      <div className="container">
        <header className="page-head">
          <p className="page-eyebrow">Our story</p>
          <h1 className="t-page-title">A place to think out loud.</h1>
          <p className="page-lede">
            Margin is a small publication with an old-fashioned premise: that people write better
            when they are paid, and read better when nothing is shouting.
          </p>
        </header>
      </div>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      <div className="container container--read about">
        <nav className="about-nav" aria-label="Sections">
          {SECTIONS.map((s) => (
            <Chip key={s.id} href={`#${s.id}`} size="sm">
              {s.title}
            </Chip>
          ))}
        </nav>

        {SECTIONS.map((section) => (
          <section className="about-section" id={section.id} key={section.id}>
            <h2 className="t-h2 about-title">{section.title}</h2>
            <div className="about-body">
              {section.blocks.map((block, i) =>
                block.type === 'list' ? (
                  <ul className="about-list" key={i}>
                    {block.items.map((item) => (
                      <li key={item}>{item}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="about-p" key={i}>
                    {block.text}
                  </p>
                ),
              )}
            </div>
          </section>
        ))}
      </div>
    </Page>
  )
}
