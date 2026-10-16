import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { standardMetadata } from '@/lib/seo/provenance'
import { blogPosts } from '@/lib/blog/posts'

export const metadata = standardMetadata({
  title: 'Blog',
  description: 'Source-backed engineering notes, architecture decisions, specification updates and research logs from OpenRGD.',
  canonicalPath: '/blog',
})

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value + 'T00:00:00Z'))
}

export default function BlogPage() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Blog',
    '@id': 'https://openrgd.org/blog#blog',
    url: 'https://openrgd.org/blog',
    name: 'OpenRGD Blog',
    description: 'Source-backed engineering notes, architecture decisions, specification updates and research logs from OpenRGD.',
    inLanguage: 'en',
    publisher: { '@id': 'https://openrgd.org/#organization' },
    blogPost: blogPosts.map((post) => ({
      '@type': 'BlogPosting',
      headline: post.title,
      url: 'https://openrgd.org/blog/' + post.slug,
      datePublished: post.publishedAt,
      dateModified: post.modifiedAt,
    })),
  }

  return (
    <main className="blog-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <section className="blog-hero shell">
        <p className="kicker">OPENRGD BLOG · ENGINEERING JOURNAL</p>
        <h1>Architecture decisions, evidence and experiments.</h1>
        <p>
          Source-backed notes from the OpenRGD standard, toolchain and embodiment work.
          The blog records why decisions exist, what the current evidence supports and
          where the project deliberately keeps boundaries open.
        </p>
      </section>

      <section className="shell blog-principles" aria-label="Editorial principles">
        <div>
          <span>01</span>
          <strong>Source-backed</strong>
          <p>Claims link back to canonical OpenRGD material or primary sources.</p>
        </div>
        <div>
          <span>02</span>
          <strong>Boundary-aware</strong>
          <p>Implemented, adopted, candidate and experimental work stay distinguishable.</p>
        </div>
        <div>
          <span>03</span>
          <strong>No filler</strong>
          <p>Posts document engineering decisions, methods and research rather than generic robotics news.</p>
        </div>
      </section>

      <section className="shell blog-index-section">
        <div className="blog-index-heading">
          <div>
            <p className="kicker">ENGINEERING NOTES</p>
            <h2>Published architecture, methodology and bounded field evidence.</h2>
          </div>
          <span>{String(blogPosts.length).padStart(2, '0')} ARTICLES</span>
        </div>

        <div className="blog-card-grid">
          {blogPosts.map((post, index) => (
            <a className="blog-card" href={'/blog/' + post.slug} key={post.slug}>
              <div className="blog-card-top">
                <span>{String(index + 1).padStart(2, '0')}</span>
                <span>{post.category.toUpperCase()}</span>
              </div>
              <h2>{post.title}</h2>
              <p>{post.description}</p>
              <div className="blog-card-meta">
                <span>{formatDate(post.publishedAt)}</span>
                <span>{post.readTime}</span>
                <strong>READ →</strong>
              </div>
            </a>
          ))}
        </div>
      </section>

      <section className="shell blog-editorial-boundary">
        <span>EDITORIAL BOUNDARY</span>
        <p>
          Blog posts explain current OpenRGD work but do not override the canonical specification,
          accepted contracts or repository authority model. When narrative text and normative material differ,
          the canonical source remains authoritative.
        </p>
      </section>

      <SiteFooter />
    </main>
  )
}
