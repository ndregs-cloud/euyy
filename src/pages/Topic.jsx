import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Page from '../components/Page'
import Button from '../components/Button'
import Chip from '../components/Chip'
import MembershipTeaser from '../components/MembershipTeaser'
import StoryCard from '../components/StoryCard'
import WriterRow from '../components/WriterRow'
import NotFound from './NotFound'
import useDocumentTitle from '../hooks/useDocumentTitle'
import {
  authors,
  formatCount,
  getTopic,
  storiesByTopic,
  topicPath,
  topics,
} from '../data/content'
import './Topic.css'

/**
 * Topic feed: an oversized subject header, the story stream, and a quiet
 * aside of writers and related topics. Same split as the homepage, so the
 * reading rhythm carries across the site.
 */
export default function Topic() {
  const { slug } = useParams()
  const topic = getTopic(slug)
  const [following, setFollowing] = useState(false)

  useDocumentTitle(topic ? `${topic.name} — Margin` : 'Not found')

  if (!topic) return <NotFound />

  const list = storiesByTopic(topic.slug)
  const writers = authors.filter((a) => list.some((s) => s.author === a.handle))
  const related = topics.filter((t) => t.slug !== topic.slug)
  const totalClaps = list.reduce((sum, s) => sum + s.claps, 0)

  return (
    <Page>
      <div className="container">
        <header className="page-head page-head--wide">
          <p className="page-eyebrow">Topic</p>
          <h1 className="t-page-title">{topic.name}</h1>
          <p className="page-lede topic-lede">{topic.blurb}</p>
          <div className="topic-head-meta">
            <span className="t-meta">
              {formatCount(topic.followers)} followers · {list.length}{' '}
              {list.length === 1 ? 'story' : 'stories'} · {formatCount(totalClaps)} claps
            </span>
            <Button
              variant={following ? 'primary' : 'outline'}
              active={false}
              onClick={() => setFollowing((f) => !f)}
              aria-pressed={following}
            >
              {following ? 'Following' : 'Follow'}
            </Button>
          </div>
        </header>
      </div>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      <div className="container split">
        <main className="split-main">
          <div className="section-head">
            <h2 className="t-section">Latest in {topic.name}</h2>
            <Link className="section-head-link link-quiet" to="/topics">
              All topics
            </Link>
          </div>

          {list.length ? (
            <div className="story-list">
              {list.map((story) => (
                <StoryCard key={story.slug} story={story} />
              ))}
            </div>
          ) : (
            <p className="empty-state">
              Nothing published in {topic.name} yet. It is an open invitation.
            </p>
          )}

          <div className="center-actions">
            <Button to="/write" variant="outline">
              Write the next one
            </Button>
          </div>
        </main>

        <aside className="split-aside">
          <section className="aside-block">
            <h2 className="t-section aside-heading">Writers to follow</h2>
            {writers.length ? (
              <div className="writer-list">
                {writers.map((author) => (
                  <WriterRow key={author.handle} author={author} />
                ))}
              </div>
            ) : (
              <p className="t-body">No regular writers in this topic yet.</p>
            )}
          </section>

          <div className="rule rule--soft" />

          <section className="aside-block">
            <h2 className="t-section aside-heading">Related topics</h2>
            <div className="chip-cloud">
              {related.map((t) => (
                <Chip key={t.slug} to={topicPath(t)}>
                  {t.name}
                </Chip>
              ))}
            </div>
          </section>

          <div className="rule rule--soft" />

          <div className="aside-block">
            <MembershipTeaser compact />
          </div>
        </aside>
      </div>
    </Page>
  )
}
