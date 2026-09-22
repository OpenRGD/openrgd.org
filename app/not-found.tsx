import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export default function NotFound() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">404 · NOT FOUND</p>
        <h1>This node is not in the graph.</h1>
        <p>
          The requested OpenRGD page does not exist, was moved, or is not part of the public surface.
        </p>
        <div className="content-actions">
          <a className="button primary" href="/">OpenRGD home</a>
          <a className="button ghost" href="/standards">Standards</a>
          <a className="button ghost" href="/docs">Developers</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
