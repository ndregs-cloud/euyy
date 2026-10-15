import { useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'
import Button from './Button'
import { authorPath } from '../data/content'
import './WriterRow.css'

/**
 * Writer row for sidebars: avatar, name, one line of bio, and a quiet
 * follow control. Follow state is local — nothing here pretends to persist.
 */
export default function WriterRow({ author, showBio = true }) {
  const [following, setFollowing] = useState(false)

  return (
    <div className="writer-row">
      <Link className="writer-row-avatar" to={authorPath(author)} aria-hidden="true" tabIndex={-1}>
        <Avatar name={author.name} tone={author.avatarTone} size={36} />
      </Link>

      <div className="writer-row-text">
        <Link className="link-ink writer-row-name" to={authorPath(author)}>
          {author.name}
        </Link>
        {showBio ? <p className="writer-row-bio">{author.bio}</p> : null}
      </div>

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
  )
}
