import { Link } from 'react-router-dom'
import Page from '../components/Page'
import Band from '../components/Band'
import Button from '../components/Button'
import Chip from '../components/Chip'
import MembershipTeaser from '../components/MembershipTeaser'
import StoryCard from '../components/StoryCard'
import HeroArt from '../components/HeroArt'
import { IconArrowRight } from '../components/Icons'
import {
  getStoryBySlug,
  latestStories,
  stories,
  topics,
  topicPath,
} from '../data/content'
import './Home.css'

export default function Home() {
  const featured = getStoryBySlug('the-quiet-cost-of-a-fast-city')
  const trending = [...stories]
    .filter((s) => s.trending)
    .sort((a, b) => a.trending - b.trending)
    .slice(0, 6)
  const feed = latestStories().filter((s) => s.slug !== featured.slug).slice(0, 6)

  return (
    <Page>
      {/* -- Hero: oversized headline, one pill CTA, illustration --------- */}
      <section className="hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h1 className="t-hero">Think out loud.</h1>
            <p className="hero-sub">
              Margin is a home for essays, reporting, and ideas in progress — writing that takes
              its time, from people who take theirs seriously.
            </p>
            <div className="hero-actions">
              <Button to="/write" size="lg">
                Get started
              </Button>
              <a className="hero-secondary" href="#latest">
                Start reading
                <IconArrowRight size={18} />
              </a>
            </div>
          </div>

          <HeroArt />
        </div>
      </section>

      <div className="container">
        <div className="rule rule--strong" />
      </div>

      {/* -- Trending: numerals instead of chrome -------------------------- */}
      <section className="container trending">
        <h2 className="t-section trending-heading">Trending on Margin</h2>
        <ol className="trending-grid">
          {trending.map((story, i) => (
            <li key={story.slug}>
              <StoryCard story={story} variant="trending" index={i + 1} />
            </li>
          ))}
        </ol>
      </section>

      <div className="container">
        <div className="rule" />
      </div>

      {/* -- Feed + aside -------------------------------------------------- */}
      <section id="latest" className="container feed">
        <div className="feed-main">
          <h2 className="t-section feed-heading">Latest thinking</h2>

          <div className="feed-feature">
            <StoryCard story={featured} variant="feature" />
          </div>

          <div className="rule" />

          <div className="story-list">
            {feed.map((story) => (
              <StoryCard key={story.slug} story={story} />
            ))}
          </div>

          <div className="feed-more">
            <Button to="/topics" variant="outline" iconRight={<IconArrowRight size={16} />}>
              Browse every topic
            </Button>
          </div>
        </div>

        <aside className="feed-aside">
          <section className="aside-block">
            <h2 className="t-section aside-heading">Discover more of what matters to you</h2>
            <div className="chip-cloud">
              {topics.map((topic) => (
                <Chip key={topic.slug} to={topicPath(topic)} size="lg">
                  {topic.name}
                </Chip>
              ))}
            </div>
            <Link className="aside-more link-quiet" to="/topics">
              See all topics
            </Link>
          </section>

          <div className="rule rule--soft" />

          <div className="aside-block">
            <MembershipTeaser />
          </div>
        </aside>
      </section>

      {/* -- Ink band: the one high-contrast moment on the page ------------ */}
      <Band
        eyebrow="Start writing"
        title="Your next essay is one sentence away."
        sub="No templates, no growth hacks, no character limit. Open a blank page and find out what you actually think."
        primaryTo="/write"
        primaryLabel="Start writing"
        linkTo="/topics"
        linkLabel="Read the latest first"
      />
    </Page>
  )
}
