import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { articleMetadata } from '@/lib/seo/provenance'
import { blogPosts, getBlogPost } from '@/lib/blog/posts'

export const dynamicParams = false

export function generateStaticParams() {
  return blogPosts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) return {}

  return articleMetadata({
    title: post.title,
    description: post.description,
    canonicalPath: '/blog/' + post.slug,
    publishedTime: post.publishedAt,
    modifiedTime: post.modifiedAt,
  })
}

function formatDate(value: string): string {
  return new Intl.DateTimeFormat('en', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    timeZone: 'UTC',
  }).format(new Date(value + 'T00:00:00Z'))
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getBlogPost(slug)
  if (!post) notFound()

  const url = 'https://openrgd.org/blog/' + post.slug
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: post.title,
    description: post.description,
    url,
    mainEntityOfPage: url,
    datePublished: post.publishedAt,
    dateModified: post.modifiedAt,
    inLanguage: 'en',
    author: {
      '@type': 'Organization',
      name: 'OpenRGD',
      url: 'https://openrgd.org',
    },
    publisher: {
      '@id': 'https://openrgd.org/#organization',
    },
    image: 'https://openrgd.org/opengraph-image',
    citation: post.sources.map((source) =>
      source.href.startsWith('/') ? 'https://openrgd.org' + source.href : source.href
    ),
  }

  return (
    <main className="blog-article-page">
      <SiteHeader />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="shell blog-article">
        <header className="blog-article-header">
          <p className="kicker">{post.category.toUpperCase()} · OPENRGD BLOG</p>
          <h1>{post.title}</h1>
          <p className="blog-article-lead">{post.lead}</p>
          <div className="blog-article-meta">
            <span>{formatDate(post.publishedAt)}</span>
            <span>{post.readTime}</span>
            <span>OpenRGD</span>
          </div>
        </header>

        <div className="blog-article-layout">
          <aside className="blog-article-toc" aria-label="Article contents">
            <span>CONTENTS</span>
            {post.sections.map((section, index) => (
              <a key={section.id} href={'#' + section.id}>
                <i>{String(index + 1).padStart(2, '0')}</i>
                {section.title}
              </a>
            ))}
          </aside>

          <div className="blog-article-body">
            {post.sections.map((section, index) => (
              <section id={section.id} key={section.id} className="blog-article-section">
                <p className="kicker">SECTION {String(index + 1).padStart(2, '0')}</p>
                <h2>{section.title}</h2>

                {section.paragraphs.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}

                {section.bullets ? (
                  <ul>
                    {section.bullets.map((item) => <li key={item}>{item}</li>)}
                  </ul>
                ) : null}

                {section.code ? (
                  <div className="blog-code-block">
                    <span>{section.code.label}</span>
                    <pre><code>{section.code.value}</code></pre>
                  </div>
                ) : null}

                {section.note ? (
                  <div className="blog-note">
                    <span>BOUNDARY</span>
                    <p>{section.note}</p>
                  </div>
                ) : null}
              </section>
            ))}

            <section className="blog-sources">
              <p className="kicker">SOURCES & PRIMARY CONTEXT</p>
              <h2>Read the underlying material.</h2>
              <div>
                {post.sources.map((source) => (
                  <a key={source.href} href={source.href}>
                    <span>{source.label}</span>
                    <strong>{source.href.startsWith('/') ? 'OPENRGD' : 'SOURCE'} ↗</strong>
                  </a>
                ))}
              </div>
            </section>

            <section className="blog-related">
              <p className="kicker">CONTINUE</p>
              <div>
                {post.related.map((item) => (
                  <a key={item.href} href={item.href}>
                    <span>{item.label}</span>
                    <strong>READ →</strong>
                  </a>
                ))}
              </div>
            </section>
          </div>
        </div>
      </article>

      <SiteFooter />
    </main>
  )
}
