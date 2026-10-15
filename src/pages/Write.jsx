import { useRef, useState } from 'react'
import Page from '../components/Page'
import Button from '../components/Button'
import Chip from '../components/Chip'
import useDocumentTitle from '../hooks/useDocumentTitle'
import { topics } from '../data/content'
import './Write.css'

const MAX_TOPICS = 3

/**
 * Composer. Borderless display-scale inputs on the same warm paper as the
 * reading view, so writing feels like the page rather than a form inside it.
 * Focus is indicated by the shared high-contrast blue ring — the only place
 * the site draws an outline around a field.
 */
export default function Write() {
  const [title, setTitle] = useState('')
  const [dek, setDek] = useState('')
  const [body, setBody] = useState('')
  const [picked, setPicked] = useState([])
  const [note, setNote] = useState(null)
  const titleRef = useRef(null)

  useDocumentTitle('Write — Margin')

  const words = body.trim() ? body.trim().split(/\s+/).length : 0
  const readTime = Math.max(1, Math.round(words / 220))

  const toggleTopic = (slug) => {
    setPicked((current) => {
      if (current.includes(slug)) return current.filter((s) => s !== slug)
      if (current.length >= MAX_TOPICS) return current
      return [...current, slug]
    })
  }

  const saveDraft = () =>
    setNote({ tone: 'ok', text: 'Draft saved in this browser. Nothing leaves the page.' })

  const publish = () => {
    if (!title.trim()) {
      setNote({ tone: 'warn', text: 'It needs a title first. One line is plenty.' })
      titleRef.current?.focus()
      return
    }
    setNote({
      tone: 'ok',
      text: `“${title.trim()}” is ready to go. Publishing is not wired up in this prototype — the composer is here to show how inputs, focus, and the pill CTA behave together.`,
    })
  }

  return (
    <Page>
      <div className="container container--read write">
        <div className="write-bar">
          <p className="page-eyebrow">New story</p>
          <div className="write-bar-actions">
            <Button variant="quiet" size="sm" onClick={saveDraft}>
              Save draft
            </Button>
            <Button size="sm" onClick={publish}>
              Publish
            </Button>
          </div>
        </div>

        <div className="rule" />

        <form
          className="write-form"
          onSubmit={(e) => {
            e.preventDefault()
            publish()
          }}
        >
          <label className="sr-only" htmlFor="write-title">
            Title
          </label>
          <input
            id="write-title"
            ref={titleRef}
            className="write-field write-title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            placeholder="Tell your story…"
            autoComplete="off"
          />

          <label className="sr-only" htmlFor="write-dek">
            Subtitle
          </label>
          <input
            id="write-dek"
            className="write-field write-dek"
            value={dek}
            onChange={(e) => setDek(e.target.value)}
            placeholder="Add the sentence that earns the click"
            autoComplete="off"
          />

          <div className="write-topics">
            <span className="t-meta">
              Topics · pick up to {MAX_TOPICS}
              {picked.length >= MAX_TOPICS ? ' (maximum reached)' : ''}
            </span>
            <div className="chip-cloud">
              {topics.map((topic) => (
                <Chip
                  key={topic.slug}
                  size="sm"
                  active={picked.includes(topic.slug)}
                  onClick={() => toggleTopic(topic.slug)}
                >
                  {topic.name}
                </Chip>
              ))}
            </div>
          </div>

          <label className="sr-only" htmlFor="write-body">
            Story
          </label>
          <textarea
            id="write-body"
            className="write-field write-body"
            rows={14}
            value={body}
            onChange={(e) => setBody(e.target.value)}
            placeholder="Start with the sentence you have been avoiding…"
          />

          <p className="t-meta write-hint">
            The body understands <strong>**strong**</strong>, <em>*emphasis*</em>, and{' '}
            <code>[links](/topics)</code> — the same three things the published stories use.
          </p>
        </form>

        {note ? (
          <p className={`write-note write-note--${note.tone}`} role="status">
            {note.text}
          </p>
        ) : null}

        <div className="write-foot">
          <span className="t-meta">
            {words} {words === 1 ? 'word' : 'words'} · {readTime} min read ·{' '}
            {picked.length} {picked.length === 1 ? 'topic' : 'topics'}
          </span>
          <span className="t-meta write-foot-right">Draft · only you can see this</span>
        </div>
      </div>
    </Page>
  )
}
