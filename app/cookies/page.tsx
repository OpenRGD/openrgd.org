import { standardMetadata } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata = standardMetadata({
  title: 'Cookies',
  description: 'Cookie and local-storage information for openrgd.org, including essential processing and ECM consent preferences.',
  canonicalPath: '/cookies',
  robots: { index: false, follow: true },
})

export default function CookiesPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">COOKIES & STORAGE · EFFECTIVE 27 SEP 2026</p>
        <h1>Optional tracking is not required to use OpenRGD.</h1>
        <p>
          OpenRGD uses ECM as its consent-management layer. The public site starts analytics,
          advertising, ad-user-data and ad-personalization storage in a denied state.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CATEGORIES</p>
          <h2>Storage is separated by purpose.</h2>
        </div>
        <div className="content-card-grid">
          <article className="content-card">
            <h3>Necessary / security</h3>
            <p>
              Technical storage or request metadata may be used where necessary to deliver the
              website, protect it from abuse and maintain security. This category is not used for
              advertising personalization.
            </p>
          </article>
          <article className="content-card">
            <h3>Consent management</h3>
            <p>
              ECM may use cookies or browser storage to remember and apply the visitor&apos;s consent
              state. These identifiers exist to preserve privacy choices rather than to build an
              advertising profile.
            </p>
          </article>
          <article className="content-card">
            <h3>Optional analytics / advertising</h3>
            <p>
              These consent categories are initialized as denied. If optional integrations are
              configured in the future, they must remain governed by the visitor&apos;s consent choice.
            </p>
          </article>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CURRENT DEFAULT</p>
          <h2>The site is privacy-denied by default for optional storage.</h2>
        </div>
        <div className="data-list">
          <div className="data-row"><span>analytics_storage</span><strong>DENIED</strong><em>Default before consent update.</em></div>
          <div className="data-row"><span>ad_storage</span><strong>DENIED</strong><em>Default before consent update.</em></div>
          <div className="data-row"><span>ad_user_data</span><strong>DENIED</strong><em>Default before consent update.</em></div>
          <div className="data-row"><span>ad_personalization</span><strong>DENIED</strong><em>Default before consent update.</em></div>
          <div className="data-row"><span>functionality_storage</span><strong>GRANTED</strong><em>Used for functional site behavior where applicable.</em></div>
          <div className="data-row"><span>security_storage</span><strong>GRANTED</strong><em>Used for security-related behavior where applicable.</em></div>
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">TECHNICAL IDENTIFIERS</p>
          <h2>We do not hard-code invented cookie names into this policy.</h2>
        </div>
        <p className="content-note">
          ECM controls the current consent implementation and may evolve the exact cookie or local
          storage identifiers used to persist preferences. The live consent interface is the
          operational source for the categories and choices available on the current site. This
          page documents their purpose and default state without claiming stable identifiers that
          may change between CMP versions.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">CHANGE YOUR CHOICE</p>
          <h2>Consent can be changed after the first visit.</h2>
        </div>
        <p className="content-note">
          Use the ECM privacy/consent control exposed by the site to review or update optional
          choices. Withdrawal applies prospectively and does not affect processing that was lawful
          before the choice changed.
        </p>
        <div className="content-actions">
          <a className="button ghost" href="/privacy">Privacy information →</a>
          <a className="button ghost" href="https://www.ecm.plus" target="_blank" rel="noreferrer">ECM ↗</a>
        </div>
      </section>

      <section className="shell warning-panel">
        <span>NO DARK PATTERNS</span>
        <h2>Optional categories should remain optional.</h2>
        <p>
          OpenRGD content must remain accessible without requiring consent to analytics,
          advertising or personalization storage.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
