import { standardMetadata } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata = standardMetadata({
  title: 'Privacy',
  description: 'Privacy information for visitors to openrgd.org, including website delivery, consent management, retention and data-subject rights.',
  canonicalPath: '/privacy',
  robots: { index: false, follow: true },
})

export default function PrivacyPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">PRIVACY · EFFECTIVE 27 SEP 2026</p>
        <h1>Privacy information for openrgd.org.</h1>
        <p>
          This notice describes the limited personal-data processing involved in operating the
          public OpenRGD website. The site currently has no user accounts, contact form or newsletter.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CONTROLLER & CONTACT</p>
          <h2>OpenRGD is currently operated as an open project.</h2>
        </div>
        <p className="content-note">
          For this public website, the current controller and privacy contact is
          <strong> Pasquale Ranieri</strong>, the project steward identified by the canonical
          OpenRGD governance record. OpenRGD is not presented on this website as a separate legal
          entity. If a dedicated legal entity becomes the controller, this notice will be updated.
        </p>
        <p className="content-note">
          To request a private privacy contact channel, open a minimal GitHub issue containing only
          <strong> [PRIVACY CONTACT REQUEST]</strong>. Do not place personal data or request details
          in the public issue.
        </p>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/issues/new?title=%5BPRIVACY%20CONTACT%20REQUEST%5D" target="_blank" rel="noreferrer">Request privacy contact ↗</a>
          <a className="button ghost" href="/governance">Governance →</a>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">WHAT IS PROCESSED</p>
          <h2>The site is intentionally data-light.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card">
            <h3>Website delivery & security</h3>
            <p>
              Requests to the site may generate technical data such as IP address, user agent,
              requested URL, timestamp, response status and security/operational logs needed to
              deliver and protect the service.
            </p>
          </article>
          <article className="content-card">
            <h3>Consent preferences</h3>
            <p>
              ECM is used as the consent-management layer. It may store or process the choices
              needed to remember and apply privacy preferences across visits.
            </p>
          </article>
          <article className="content-card">
            <h3>External links</h3>
            <p>
              Following links to GitHub or other external primary sources causes the destination
              service to process the request under its own privacy terms.
            </p>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">PURPOSES & LEGAL BASES</p>
          <h2>Processing is limited to operating the site and honoring privacy choices.</h2>
        </div>
        <div className="data-list">
          <div className="data-row">
            <span>Site delivery, availability and abuse prevention</span>
            <strong>LEGITIMATE INTEREST</strong>
            <em>GDPR Art. 6(1)(f), where applicable.</em>
          </div>
          <div className="data-row">
            <span>Recording and applying privacy choices</span>
            <strong>COMPLIANCE / LEGITIMATE INTEREST</strong>
            <em>GDPR Art. 6(1)(c) and/or 6(1)(f), as applicable to the processing.</em>
          </div>
          <div className="data-row">
            <span>Optional analytics or advertising storage</span>
            <strong>CONSENT</strong>
            <em>GDPR Art. 6(1)(a) where optional processing is configured and enabled.</em>
          </div>
        </div>
        <p className="content-note">
          The public site initializes analytics and advertising consent states as denied.
          Optional categories are not required to read OpenRGD content.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">TECHNICAL PROVIDERS</p>
          <h2>Infrastructure providers receive only the data needed for their role.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card">
            <h3>Vercel</h3>
            <p>
              OpenRGD.org is deployed on Vercel infrastructure, which provides hosting, edge
              delivery and operational/security services.
            </p>
          </article>
          <article className="content-card">
            <h3>ECM</h3>
            <p>
              ECM at ecm.plus supplies the consent-management script and preference layer used by
              this site.
            </p>
          </article>
          <article className="content-card">
            <h3>GitHub</h3>
            <p>
              GitHub hosts the canonical OpenRGD source and external contribution/disclosure
              surfaces. Data is sent to GitHub when a visitor follows those links.
            </p>
          </article>
        </div>
        <p className="content-note">
          Technical providers may process data from infrastructure outside the visitor&apos;s
          country. Where the GDPR applies, relevant provider transfer mechanisms and applicable
          safeguards govern those transfers.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">RETENTION</p>
          <h2>Data is kept only as long as needed for its stated purpose.</h2>
        </div>
        <p className="content-note">
          Operational and security logs follow the retention settings of the hosting/infrastructure
          services and are retained only as needed for delivery, reliability, security and incident
          investigation. Consent records/preferences are kept only for the period needed to remember,
          apply and, where required, demonstrate the user&apos;s choices, and may be refreshed when
          those choices change or expire.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">YOUR RIGHTS</p>
          <h2>GDPR rights remain available where they apply.</h2>
        </div>
        <p className="content-note">
          Depending on the circumstances, individuals may request access, rectification, erasure,
          restriction, portability or object to processing. Consent can be withdrawn at any time
          for future optional processing without affecting processing already carried out lawfully.
          A complaint may also be lodged with the competent supervisory authority; in Italy this is
          the Garante per la protezione dei dati personali.
        </p>
        <div className="content-actions">
          <a className="button ghost" href="https://www.garanteprivacy.it/" target="_blank" rel="noreferrer">Italian Data Protection Authority ↗</a>
          <a className="button ghost" href="/cookies">Cookie information →</a>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">AUTOMATED DECISIONS</p>
          <h2>The public website does not make decisions about visitors.</h2>
        </div>
        <p className="content-note">
          OpenRGD.org does not use visitor data for automated decision-making or profiling that
          produces legal or similarly significant effects.
        </p>
      </section>

      <section className="shell warning-panel">
        <span>CHANGE CONTROL</span>
        <h2>This notice follows the actual public website, not planned features.</h2>
        <p>
          If OpenRGD later adds accounts, forms, newsletters, analytics, advertising or a dedicated
          legal entity, this notice and the consent configuration must be updated before those changes
          become the new privacy baseline.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
