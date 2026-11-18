import template from '@/docs/research/templates/run-manifest.template.json'
export const dynamic='force-static'
export async function GET(){
  return Response.json(template,{headers:{'Cache-Control':'public, max-age=300, s-maxage=3600','X-Robots-Tag':'noindex, follow'}})
}
