import 'server-only'
import { createContentClient } from '@/lib/supabase/content'
import { siteCode } from '@/lib/site/config'

export type CatalogEntry = {
  entry_id: string
  entity_kind: 'organization' | 'robot_model' | 'technology' | 'application'
  entity_id: string
  slug: string
  title: string
  summary: string | null
  featured: boolean
  published_at: string | null
  entity_data: Record<string, unknown>
}

export async function listCatalogEntries(kind?: CatalogEntry['entity_kind'], limit = 50): Promise<CatalogEntry[]> {
  const supabase = createContentClient()
  const { data, error } = await supabase
    .schema('cms')
    .rpc('fn_list_catalog_entries', {
      p_site_code: siteCode,
      p_entity_kind: kind || null,
      p_limit: limit,
      p_offset: 0,
    })

  if (error) throw error
  return (data || []) as CatalogEntry[]
}

export async function getCatalogEntry(kind: CatalogEntry['entity_kind'], slug: string): Promise<CatalogEntry | null> {
  const supabase = createContentClient()
  const { data, error } = await supabase
    .schema('cms')
    .rpc('fn_get_catalog_entry', {
      p_site_code: siteCode,
      p_entity_kind: kind,
      p_slug: slug,
    })

  if (error) throw error
  if (!data || typeof data !== 'object') return null
  return data as CatalogEntry
}
