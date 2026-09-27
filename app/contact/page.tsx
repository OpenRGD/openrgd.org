import { standardMetadata } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata = standardMetadata({
  title: 'Contact OpenRGD',
  description: 'Contact and routing information for OpenRGD project questions, contributions, security, privacy and conduct concerns.',
  canonicalPath: '/contact',
  robots: { index: false, follow: true },
})

export default function ContactPage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell" id="contact">
        <p className="kicker">CONTACT OPENRGD</p>
        <h1>Use the right channel so the request reaches the right authority.</h1>
        <p>
          OpenRGD does not currently publish a general project email address. Public technical work stays
          in the canonical GitHub record; sensitive matters use a minimal public request only to establish a private channel.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-card-grid">
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/discussions" target="_blank" rel="noreferrer"><h3>General technical question</h3><p>GitHub Discussions.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues" target="_blank" rel="noreferrer"><h3>Bug or bounded task</h3><p>GitHub Issues.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues/new?template=rfc.md" target="_blank" rel="noreferrer"><h3>Normative proposal</h3><p>Open an RFC with evidence, compatibility and validation plan.</p></a>
          <a className="content-card" href="/security"><h3>Security</h3><p>Use the private vulnerability path or request a private security channel.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues/new?title=%5BPRIVACY%20CONTACT%20REQUEST%5D" target="_blank" rel="noreferrer"><h3>Privacy</h3><p>Open only a minimal [PRIVACY CONTACT REQUEST]; do not publish personal details.</p></a>
          <a className="content-card" href="https://github.com/OpenRGD/openrgd/issues/new?title=%5BCONDUCT%20CONTACT%20REQUEST%5D" target="_blank" rel="noreferrer"><h3>Conduct concern</h3><p>Request a private conduct-reporting channel without posting the report publicly.</p></a>
        </div>
      </section>

      <section className="shell content-split">
        <article>
          <p className="kicker">CURRENT STEWARD</p>
          <h2>Pasquale Ranieri · @phate6872</h2>
          <p>The canonical governance file identifies the current steward. Project authority remains defined by governance and repository evidence rather than by private conversation.</p>
        </article>
        <article>
          <p className="kicker">PUBLIC RECORD</p>
          <h2>Technical decisions should remain inspectable.</h2>
          <p>When a matter is not sensitive, prefer Discussions, Issues, RFCs and pull requests so future contributors can recover the evidence and decision history.</p>
        </article>
      </section>

      <SiteFooter />
    </main>
  )
}
