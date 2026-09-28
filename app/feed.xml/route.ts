import { blogPosts } from '@/lib/blog/posts'

export const dynamic = 'force-static'

function xmlEscape(value: string): string {
  return value
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&apos;')
}

function rfc822(value: string): string {
  return new Date(value + 'T00:00:00Z').toUTCString()
}

export async function GET() {
  const base = 'https://openrgd.org'
  const latest = [...blogPosts]
    .map((post) => post.modifiedAt || post.publishedAt)
    .sort()
    .at(-1) || '2026-09-27'

  const items = [...blogPosts]
    .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
    .map((post) => {
      const url = base + '/blog/' + post.slug
      return [
        '<item>',
        '<title>' + xmlEscape(post.title) + '</title>',
        '<link>' + url + '</link>',
        '<guid isPermaLink="true">' + url + '</guid>',
        '<pubDate>' + rfc822(post.publishedAt) + '</pubDate>',
        '<category>' + xmlEscape(post.category) + '</category>',
        '<description>' + xmlEscape(post.description) + '</description>',
        '</item>',
      ].join('')
    })
    .join('')

  const body = [
    '<?xml version="1.0" encoding="UTF-8"?>',
    '<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">',
    '<channel>',
    '<title>OpenRGD Engineering Journal</title>',
    '<link>' + base + '/blog</link>',
    '<description>Source-backed engineering notes, architecture decisions, specification updates and research logs from OpenRGD.</description>',
    '<language>en</language>',
    '<lastBuildDate>' + rfc822(latest) + '</lastBuildDate>',
    '<atom:link href="' + base + '/feed.xml" rel="self" type="application/rss+xml" />',
    items,
    '</channel>',
    '</rss>',
  ].join('')

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'application/rss+xml; charset=utf-8',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
