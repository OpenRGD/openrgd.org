export const dynamic = 'force-dynamic'

export async function GET() {
  const body = [
    'Contact: https://openrgd.org/security',
    'Expires: 2027-03-27T00:00:00Z',
    'Preferred-Languages: en',
    'Canonical: https://openrgd.org/.well-known/security.txt',
    'Policy: https://openrgd.org/security',
    '',
  ].join('\n')

  return new Response(body, {
    status: 200,
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'public, max-age=3600, s-maxage=3600',
    },
  })
}
