import { blogPosts } from '@/lib/blog/posts'

export const dynamic = 'force-static'

export async function GET() {
  const base = 'https://openrgd.org'
  const body = {
    version: 'https://jsonfeed.org/version/1.1',
    title: 'OpenRGD Engineering Journal',
    home_page_url: base + '/blog',
    feed_url: base + '/feed.json',
    description: 'Source-backed engineering notes, architecture decisions, specification updates and research logs from OpenRGD.',
    language: 'en',
    authors: [
      {
        name: 'OpenRGD',
        url: base,
      },
    ],
    items: [...blogPosts]
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt))
      .map((post) => ({
        id: base + '/blog/' + post.slug,
        url: base + '/blog/' + post.slug,
        title: post.title,
        summary: post.description,
        content_text: post.lead,
        date_published: post.publishedAt + 'T00:00:00Z',
        date_modified: (post.modifiedAt || post.publishedAt) + 'T00:00:00Z',
        tags: [post.category, 'OpenRGD', 'robotics'],
      })),
  }

  return Response.json(body, {
    status: 200,
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
