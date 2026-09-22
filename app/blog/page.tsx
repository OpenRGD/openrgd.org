import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Blog',
  description: 'Engineering notes, research updates, specification changes and development logs from OpenRGD.',
  alternates: { canonical: '/blog' },
  robots: { index: false, follow: true },
}

export default function BlogPage() {
  return (
    <main className="blog-page">
      <SiteHeader />

      <section className="blog-hero shell">
        <p className="kicker">OPENRGD BLOG</p>
        <h1>Engineering notes from the embodiment graph.</h1>
        <p>
          Specification changes, architecture decisions, experiments, interoperability work
          and research notes from the OpenRGD ecosystem.
        </p>
      </section>

      <section className="shell blog-empty">
        <div>
          <span>01</span>
          <strong>Specification</strong>
          <p>Normative changes, design rationale and compatibility notes.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Engineering</strong>
          <p>Runtime boundaries, adapters, imports, exports and implementation work.</p>
        </div>
        <div>
          <span>03</span>
          <strong>Research</strong>
          <p>Embodied AI, Physical AI, interoperability and robot intelligence.</p>
        </div>
      </section>

      <section className="shell blog-status">
        <span>EDITORIAL PIPELINE</span>
        <p>No filler posts. The blog will publish source-backed engineering and research updates as they are ready.</p>
      </section>
      <SiteFooter />
    </main>
  )
}
