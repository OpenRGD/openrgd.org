import registry from '@/data/research/theses/registry.v1.json'

export const dynamic='force-static'

export async function GET(){
  return Response.json(registry,{
    headers:{
      'Cache-Control':'public, max-age=300, s-maxage=3600',
      'X-Robots-Tag':'noindex, follow',
    },
  })
}
