import evidence from '@/data/research/so101/evidence.json'

export const dynamic = 'force-static'

export async function GET() {
  return Response.json(evidence, {
    headers: {
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
