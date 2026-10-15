import Page from '../components/Page'
import Button from '../components/Button'
import useDocumentTitle from '../hooks/useDocumentTitle'
import './NotFound.css'

export default function NotFound() {
  useDocumentTitle('Page not found — Margin')

  return (
    <Page>
      <div className="container notfound">
        <p className="page-eyebrow">404</p>
        <h1 className="t-page-title">This page is still a draft.</h1>
        <p className="page-lede notfound-lede">
          The link may be old, or the story may have moved. Everything we have published is one
          click away.
        </p>
        <div className="notfound-actions">
          <Button to="/" size="lg">
            Back to the homepage
          </Button>
          <Button to="/topics" variant="outline" size="lg">
            Browse topics
          </Button>
        </div>
      </div>
    </Page>
  )
}
