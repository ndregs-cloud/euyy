import { Link } from 'react-router-dom'
import Page from '../components/Page'
import CoverArt from '../components/CoverArt'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { formatCount, storiesByTopic, topicPath, topics } from '../data/content'
import './Topics.css'

/**
 * Topic index. The one place the site groups content into containers, and
 * only because an index of subjects genuinely needs separation — the cells
 * stay flat: hairline edge, standard 4px radius, no shadow.
 */
export default function Topics() {
  useDocumentTitle('Topics — Margin')

  return (
    <Page>
      <div className="container">
        <header className="page-head">
          <p className="page-eyebrow">Browse</p>
          <h1 className="t-page-title">Topics</h1>
          <p className="page-lede">
            Seven subjects and the people who keep writing about them. Follow a topic to put it at
            the top of your reading — nothing else about the order is optimised.
          </p>
        </header>
      </div>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      <div className="container topics-body">
        <ul className="topic-grid">
          {topics.map((topic, i) => {
            const list = storiesByTopic(topic.slug)
            return (
              <li key={topic.slug}>
                <Link className="topic-cell" to={topicPath(topic)}>
                  <span className="topic-cell-art" aria-hidden="true">
                    <CoverArt variant={i} />
                  </span>
                  <span className="topic-cell-text">
                    <span className="topic-cell-name">{topic.name}</span>
                    <span className="topic-cell-blurb">{topic.blurb}</span>
                    <span className="t-meta topic-cell-meta">
                      {list.length} {list.length === 1 ? 'story' : 'stories'} ·{' '}
                      {formatCount(topic.followers)} followers
                    </span>
                  </span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </Page>
  )
}
