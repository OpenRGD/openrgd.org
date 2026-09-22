import { type NextRequest } from 'next/server'
import { canonicalSiteUrl, isCanonicalHost } from '@/lib/seo/routes'

export const dynamic = 'force-dynamic'

export function GET(request: NextRequest) {
  const hostname=request.headers.get('host') || ''

  const body=isCanonicalHost(hostname)
    ? [
        'User-agent: *',
        'Allow: /',
        '',
        'User-agent: OAI-SearchBot',
        'Allow: /',
        '',
        'Sitemap: ' + canonicalSiteUrl + '/sitemap.xml',
        '',
      ].join('\n')
    : [
        'User-agent: *',
        'Disallow: /',
        '',
      ].join('\n')

  return new Response(body,{
    status:200,
    headers:{
      'Content-Type':'text/plain; charset=utf-8',
      'Cache-Control':'public, max-age=0, s-maxage=300',
    },
  })
}
