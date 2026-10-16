import protocol from '@/data/research/so101/protocol.v1.json'

export const dynamic = 'force-static'

export async function GET() {
  return new Response(protocol.trial_columns.join(',') + '\n', {
    headers: {
      'Content-Type': 'text/csv; charset=utf-8',
      'Content-Disposition': 'attachment; filename="so101-trial-template.csv"',
      'Cache-Control': 'public, max-age=300, s-maxage=3600',
      'X-Robots-Tag': 'noindex, follow',
    },
  })
}
