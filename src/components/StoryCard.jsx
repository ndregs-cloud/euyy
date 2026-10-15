import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import CoverArt from './CoverArt'
import { IconBookmark, IconStar } from './Icons'
import {
  authorPath,
  formatDate,
  getAuthor,
  getTopic,
  storyPath,
  topicPath,
} from '../data/content'
import './StoryCard.css'

/**
 * StoryCard — the feed unit.
 *
 * Flat and open: no box, no shadow, hairline separators only. Hierarchy is
 * carried by the title, the dek sits in reading gray, and metadata is one
 * quiet line. `variant` controls scale, not decoration.
 *
 *   feed      — thumbnail at right, the default stream unit
 *   trending  — oversized numeral, no thumbnail
 *   compact   — byline and title only, for rails and sidebars
 */
export default function StoryCard({
  story,
  variant = 'feed',
  index = null,
  showCover = variant === 'feed' || variant === 'feature',
  showDek = variant === 'feed' || variant === 'feature',
  showSave = variant === 'feed',
}) {
  const author = getAuthor(story.author)
  const topic = getTopic(story.topic)
  const [saved, setSaved] = useState(false)
  const path = storyPath(story)

  return (
    <article className={`story story--${variant}`}>
      {index != null ? (
        <span className="story-index" aria-hidden="true">
          {String(index).padStart(2, '0')}
        </span>
      ) : null}

      <div className="story-body">
        <div className="story-byline">
          <Avatar
            name={author?.name}
            tone={author?.avatarTone}
            size={variant === 'feature' ? 24 : variant === 'feed' ? 22 : 18}
          />
          <Link className="link-ink story-byline-name" to={authorPath(author)}>
            {author?.name}
          </Link>
          {topic ? (
            <>
              <span className="story-sep" aria-hidden="true">
                ·
              </span>
              <Link className="link-quiet" to={topicPath(topic)}>
                {topic.name}
              </Link>
            </>
          ) : null}
        </div>

        <h3 className="story-title">
          <Link className="link-ink" to={path}>
            {story.title}
          </Link>
        </h3>

        {showDek && story.dek ? <p className="story-dek">{story.dek}</p> : null}

        <div className="story-meta">
          <span>{formatDate(story.date)}</span>
          <span className="story-sep" aria-hidden="true">
            ·
          </span>
          <span>{story.readTime} min read</span>
          {story.memberOnly ? (
            <span className="story-member">
              <IconStar size={13} filled />
              <span>Member-only</span>
            </span>
          ) : null}

          {showSave ? (
            <button
              type="button"
              className={`story-save${saved ? ' is-saved' : ''}`}
              onClick={() => setSaved((s) => !s)}
              aria-pressed={saved}
              aria-label={saved ? `Remove ${story.title} from your list` : `Save ${story.title} to your list`}
            >
              <IconBookmark size={18} filled={saved} />
            </button>
          ) : null}
        </div>
      </div>

      {showCover ? (
        <Link className="story-cover" to={path} tabIndex={-1} aria-hidden="true">
          <CoverArt variant={story.cover} />
        </Link>
      ) : null}
    </article>
  )
}
