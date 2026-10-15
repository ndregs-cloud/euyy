import Badge from './Badge'
import Button from './Button'
import './MembershipTeaser.css'

/**
 * Membership teaser — the one grouped container in a sidebar, and the only
 * place the green accent takes a filled action. Grouping is justified here:
 * it has to read as a separate moment from the topic list above it.
 */
export default function MembershipTeaser({ id = 'membership', compact = false }) {
  return (
    <section className="membership-teaser" id={id}>
      <Badge variant="accent">Membership</Badge>
      <h2 className="t-h3 membership-teaser-title">
        Unlimited access, and the writers get paid.
      </h2>
      {compact ? null : (
        <p className="t-body">
          One subscription funds the people whose work you keep coming back to. No ads, no
          promoted feeds, nothing optimised against your attention.
        </p>
      )}
      <Button to="/membership" variant="accent">
        Get unlimited access
      </Button>
    </section>
  )
}
