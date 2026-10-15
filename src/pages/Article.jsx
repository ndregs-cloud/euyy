import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import Page from '../components/Page'
import Avatar from '../components/Avatar'
import Badge from '../components/Badge'
import Button from '../components/Button'
import Chip from '../components/Chip'
import CoverArt from '../components/CoverArt'
import Inline from '../components/Inline'
import StoryCard from '../components/StoryCard'
import NotFound from './NotFound'
import {
  IconBookmark,
  IconCheck,
  IconClap,
  IconResponse,
  IconShare,
  IconStar,
} from '../components/Icons'
import useDocumentTitle from '../hooks/useDocumentTitle'
import {
  authorPath,
  formatDate,
  formatCount,
  getAuthor,
  getStory,
  getTopic,
  latestStories,
  storiesByAuthor,
  topicPath,
} from '../data/content'
import './Article.css'

function Block({ block }) {
  switch (block.type) {
    case 'h2':
      return (
        <h2 className="prose-h2">
          <Inline text={block.text} />
        </h2>
      )
    case 'quote':
      return (
        <blockquote className="prose-quote">
          <Inline text={block.text} />
        </blockquote>
      )
    case 'list':
      return (
        <ul className="prose-list">
          {block.items.map((item, i) => (
            <li key={i}>
              <Inline text={item} />
            </li>
          ))}
        </ul>
      )
    case 'figure':
      return (
        <figure className="prose-figure">
          <div className="prose-figure-art">
            <CoverArt variant={block.cover} />
          </div>
          {block.caption ? (
            <figcaption className="prose-caption">
              <Inline text={block.caption} />
            </figcaption>
          ) : null}
        </figure>
      )
    case 'rule':
      return (
        <div className="prose-sep" aria-hidden="true">
          <span />
          <span />
          <span />
        </div>
      )
    default:
      return (
        <p className="prose-p">
          <Inline text={block.text} />
        </p>
      )
  }
}

/**
 * Reading view. A single measure, no chrome, no sidebar: the spec's warm
 * paper canvas at its most literal. Long-form prose uses the high-emphasis
 * ink (#242424) at reading scale rather than the 14px UI body token.
 */
export default function Article() {
  const { handle, slug } = useParams()
  const story = getStory(handle, slug)

  const [following, setFollowing] = useState(false)
  const [clapped, setClapped] = useState(false)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)

  useDocumentTitle(story ? `${story.title} — ${getAuthor(story.author)?.name}` : 'Not found')

  if (!story) return <NotFound />

  const handleShare = async () => {
    try {
      await navigator.clipboard.writeText(window.location.href)
    } catch {
      /* clipboard unavailable — the confirmation simply does not appear */
    }
    setCopied(true)
    window.setTimeout(() => setCopied(false), 2200)
  }

  const author = getAuthor(story.author)
  const topic = getTopic(story.topic)
  const byAuthor = storiesByAuthor(author.handle).filter((s) => s.slug !== story.slug).slice(0, 2)
  const inTopic = latestStories()
    .filter((s) => s.topic === story.topic && s.slug !== story.slug)
    .slice(0, 3)

  return (
    <Page>
      <article className="article">
        <div className="container container--read">
          <header className="article-head">
            {topic ? (
              <Link className="article-topic" to={topicPath(topic)}>
                {topic.name}
              </Link>
            ) : null}

            <h1 className="t-article-title">{story.title}</h1>
            <p className="article-dek">{story.dek}</p>

            <div className="article-byline">
              <Avatar name={author.name} tone={author.avatarTone} size={42} />
              <div className="article-byline-text">
                <div className="article-byline-row">
                  <Link className="link-ink article-byline-name" to={authorPath(author)}>
                    {author.name}
                  </Link>
                  <Button
                    variant="quiet"
                    size="sm"
                    active={following}
                    onClick={() => setFollowing((f) => !f)}
                    aria-pressed={following}
                  >
                    {following ? 'Following' : 'Follow'}
                  </Button>
                </div>
                <div className="article-meta">
                  <span>{formatDate(story.date)}</span>
                  <span className="article-sep" aria-hidden="true">
                    ·
                  </span>
                  <span>{story.readTime} min read</span>
                  {story.memberOnly ? (
                    <span className="article-member">
                      <IconStar size={13} filled />
                      Member-only
                    </span>
                  ) : null}
                </div>
              </div>

              <button
                type="button"
                className={`icon-btn${saved ? ' is-active' : ''}`}
                onClick={() => setSaved((s) => !s)}
                aria-pressed={saved}
                aria-label={saved ? 'Remove from your list' : 'Save to your list'}
              >
                <IconBookmark size={22} filled={saved} />
              </button>
            </div>
          </header>

          <div className="prose">
            {story.body.map((block, i) => (
              <Block key={i} block={block} />
            ))}
          </div>

          <footer className="article-end">
            <div className="article-tags">
              <Chip to={topicPath(topic)} size="sm">
                {topic?.name}
              </Chip>
              <Chip to="/topics" size="sm">
                Long reads
              </Chip>
              <Chip to={authorPath(author)} size="sm">
                {author.name.split(' ')[0]}
              </Chip>
            </div>

            <div className="article-actions">
              <Button
                variant="outline"
                size="sm"
                active={clapped}
                onClick={() => setClapped((c) => !c)}
                aria-pressed={clapped}
                icon={<IconClap size={18} />}
              >
                {formatCount(story.claps + (clapped ? 1 : 0))}
              </Button>

              <a className="article-action-link" href="#responses">
                <IconResponse size={18} />
                {formatCount(story.responses)}
              </a>

              <div className="article-actions-right">
                {copied ? <span className="article-copied">Link copied</span> : null}
                <button
                  type="button"
                  className={`icon-btn${copied ? ' is-active' : ''}`}
                  aria-label={copied ? 'Link copied to clipboard' : 'Copy link to this story'}
                  onClick={handleShare}
                >
                  {copied ? <IconCheck size={20} /> : <IconShare size={20} />}
                </button>
              </div>
            </div>

            <section className="article-author">
              <Avatar name={author.name} tone={author.avatarTone} size={56} />
              <div className="article-author-text">
                <div className="article-author-row">
                  <h2 className="t-h3">
                    <Link className="link-ink" to={authorPath(author)}>
                      {author.name}
                    </Link>
                  </h2>
                  <Button
                    variant="outline"
                    size="sm"
                    active={following}
                    onClick={() => setFollowing((f) => !f)}
                    aria-pressed={following}
                  >
                    {following ? 'Following' : 'Follow'}
                  </Button>
                </div>
                <p className="t-body">{author.bio}</p>
                <p className="t-meta">
                  {formatCount(author.followers)} followers · {author.location}
                </p>
              </div>
            </section>
          </footer>
        </div>

        <div className="container">
          <div className="rule article-rule" />
        </div>

        <div className="container container--read article-more">
          {byAuthor.length ? (
            <section className="article-more-block">
              <h2 className="t-section article-more-heading">More from {author.name}</h2>
              <div className="story-list">
                {byAuthor.map((s) => (
                  <StoryCard key={s.slug} story={s} variant="feed" />
                ))}
              </div>
            </section>
          ) : null}

          {inTopic.length ? (
            <section className="article-more-block" id="responses">
              <h2 className="t-section article-more-heading">
                More in {topic?.name}
                <Badge variant="outline" className="article-more-count">
                  {formatCount(topic.followers)} followers
                </Badge>
              </h2>
              <div className="story-list">
                {inTopic.map((s) => (
                  <StoryCard key={s.slug} story={s} variant="feed" />
                ))}
              </div>
            </section>
          ) : null}
        </div>
      </article>
    </Page>
  )
}
