import { useState } from 'react'
import { useParams } from 'react-router-dom'
import Page from '../components/Page'
import Avatar from '../components/Avatar'
import Button from '../components/Button'
import Chip from '../components/Chip'
import MembershipTeaser from '../components/MembershipTeaser'
import StoryCard from '../components/StoryCard'
import NotFound from './NotFound'
import { IconCalendar, IconCheck, IconPin, IconShare } from '../components/Icons'
import useDocumentTitle from '../hooks/useDocumentTitle'
import {
  formatCount,
  getAuthor,
  getTopic,
  storiesByAuthor,
  topicPath,
} from '../data/content'
import './Profile.css'

const TABS = [
  { id: 'latest', label: 'Latest' },
  { id: 'top', label: 'Top' },
  { id: 'about', label: 'About' },
]

/**
 * Writer profile. The header carries the identity at display scale; the
 * stream below is the same feed unit used everywhere else, so a profile
 * never needs its own visual language.
 */
export default function Profile() {
  const { handle } = useParams()
  const author = getAuthor(handle)

  const [tab, setTab] = useState('latest')
  const [following, setFollowing] = useState(false)
  const [copied, setCopied] = useState(false)

  useDocumentTitle(author ? `${author.name} (@${author.handle}) — Margin` : 'Not found')

  if (!author) return <NotFound />

  const all = storiesByAuthor(author.handle)
  const visible = tab === 'top' ? [...all].sort((a, b) => b.claps - a.claps) : all
  const writtenTopics = [...new Set(all.map((s) => s.topic))]
    .map(getTopic)
    .filter(Boolean)
    .sort((a, b) => a.name.localeCompare(b.name))
  const totalClaps = all.reduce((sum, s) => sum + s.claps, 0)

  const share = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* clipboard unavailable */
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  return (
    <Page>
      <header className="container profile-head">
        <Avatar name={author.name} tone={author.avatarTone} size={88} />

        <div className="profile-head-text">
          <h1 className="profile-name">{author.name}</h1>
          <p className="profile-handle">@{author.handle}</p>
          <p className="profile-bio">{author.bio}</p>

          <ul className="profile-facts">
            <li>
              <IconPin size={15} />
              {author.location}
            </li>
            <li>
              <IconCalendar size={15} />
              Joined {author.joined}
            </li>
            <li>
              <strong>{formatCount(author.followers)}</strong> Followers
            </li>
            <li>
              <strong>{formatCount(author.following)}</strong> Following
            </li>
          </ul>

          <div className="page-actions">
            <Button
              variant={following ? 'primary' : 'outline'}
              onClick={() => setFollowing((f) => !f)}
              aria-pressed={following}
            >
              {following ? 'Following' : 'Follow'}
            </Button>
            <Button
              variant="outline"
              onClick={share}
              icon={copied ? <IconCheck size={16} /> : <IconShare size={16} />}
            >
              {copied ? 'Link copied' : 'Share'}
            </Button>
          </div>
        </div>
      </header>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      <div className="container split">
        <main className="split-main">
          <div className="tabs" role="tablist" aria-label="Profile sections">
            {TABS.map((t) => (
              <button
                key={t.id}
                type="button"
                role="tab"
                id={`tab-${t.id}`}
                aria-selected={tab === t.id}
                aria-controls={`panel-${t.id}`}
                className={`tab${tab === t.id ? ' is-active' : ''}`}
                onClick={() => setTab(t.id)}
              >
                {t.label}
              </button>
            ))}
          </div>

          <div
            className="tab-panel"
            role="tabpanel"
            id={`panel-${tab}`}
            aria-labelledby={`tab-${tab}`}
          >
            {tab === 'about' ? (
              <div className="profile-about">
                {author.longBio.map((para, i) => (
                  <p className="profile-about-p" key={i}>
                    {para}
                  </p>
                ))}

                <dl className="profile-stats">
                  <div>
                    <dt>Stories</dt>
                    <dd>{all.length}</dd>
                  </div>
                  <div>
                    <dt>Claps</dt>
                    <dd>{formatCount(totalClaps)}</dd>
                  </div>
                  <div>
                    <dt>Topics</dt>
                    <dd>{writtenTopics.length}</dd>
                  </div>
                  <div>
                    <dt>Longest read</dt>
                    <dd>{Math.max(...all.map((s) => s.readTime), 0)} min</dd>
                  </div>
                </dl>

                <h2 className="t-section profile-about-heading">Writes about</h2>
                <div className="chip-cloud">
                  {writtenTopics.map((t) => (
                    <Chip key={t.slug} to={topicPath(t)}>
                      {t.name}
                    </Chip>
                  ))}
                </div>
              </div>
            ) : visible.length ? (
              <div className="story-list">
                {visible.map((story) => (
                  <StoryCard key={story.slug} story={story} />
                ))}
              </div>
            ) : (
              <p className="empty-state">Nothing published here yet.</p>
            )}
          </div>
        </main>

        <aside className="split-aside">
          <section className="aside-block">
            <h2 className="t-section aside-heading">Writes about</h2>
            <div className="chip-cloud">
              {writtenTopics.map((t) => (
                <Chip key={t.slug} to={topicPath(t)} size="sm">
                  {t.name}
                </Chip>
              ))}
            </div>
          </section>

          <div className="rule rule--soft" />

          <section className="aside-block">
            <h2 className="t-section aside-heading">In numbers</h2>
            <dl className="profile-mini-stats">
              <div>
                <dt>Stories</dt>
                <dd>{all.length}</dd>
              </div>
              <div>
                <dt>Followers</dt>
                <dd>{formatCount(author.followers)}</dd>
              </div>
              <div>
                <dt>Claps</dt>
                <dd>{formatCount(totalClaps)}</dd>
              </div>
            </dl>
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
