import type { MetadataRoute } from 'next'
import { listCatalogEntries } from '@/lib/cms/catalog'
import { canonicalUrl, indexableStaticRoutes } from '@/lib/seo/routes'
import { blogPosts } from '@/lib/blog/posts'

export const revalidate = 3600

function entityLastModified(entityData: Record<string,unknown>): Date | undefined {
  const raw=entityData.updated_at
  if (typeof raw !== 'string') return undefined

  const parsed=new Date(raw)
  return Number.isNaN(parsed.getTime()) ? undefined : parsed
}

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const [robots,organizations]=await Promise.all([
    listCatalogEntries('robot_model',250).catch(()=>[]),
    listCatalogEntries('organization',250).catch(()=>[]),
  ])

  const staticEntries: MetadataRoute.Sitemap=indexableStaticRoutes.map((pathname)=>({
    url:canonicalUrl(pathname),
  }))

  const blogEntries: MetadataRoute.Sitemap=blogPosts.map((post)=>({
    url:canonicalUrl('/blog/'+post.slug),
    lastModified:new Date(post.modifiedAt+'T00:00:00Z'),
  }))

  const robotEntries: MetadataRoute.Sitemap=robots.map((entry)=>({
    url:canonicalUrl('/robots/'+entry.slug),
    lastModified:entityLastModified(entry.entity_data),
  }))

  const organizationEntries: MetadataRoute.Sitemap=organizations.map((entry)=>({
    url:canonicalUrl('/organizations/'+entry.slug),
    lastModified:entityLastModified(entry.entity_data),
  }))

  return [
    ...staticEntries,
    ...blogEntries,
    ...robotEntries,
    ...organizationEntries,
  ]
}
