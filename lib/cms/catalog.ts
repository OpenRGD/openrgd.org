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


export type RobotAssertion = {
  id: string
  robot_model_id: string
  robot_variant_id: string | null
  property_key: string
  raw_value: string
  normalized_value_jsonb: unknown
  value_type: string | null
  unit: string | null
  conditions: string | null
  evidence_type: string
  verification_status: string
  independently_tested: boolean
  source_url: string | null
  verified_at: string | null
  valid_from: string | null
  valid_to: string | null
  metadata_jsonb: Record<string, unknown> | null
}

export async function listRobotAssertions(robotModelId: string, limit = 100): Promise<RobotAssertion[]> {
  const supabase = createContentClient()
  const { data, error } = await supabase
    .schema('catalog')
    .from('robot_assertions')
    .select('id,robot_model_id,robot_variant_id,property_key,raw_value,normalized_value_jsonb,value_type,unit,conditions,evidence_type,verification_status,independently_tested,source_url,verified_at,valid_from,valid_to,metadata_jsonb')
    .eq('robot_model_id', robotModelId)
    .order('property_key', { ascending: true })
    .limit(limit)

  if (error) throw error
  return (data || []) as RobotAssertion[]
}


export type CatalogSiteMetadata = {
  metadata_jsonb: Record<string, unknown>
  updated_at: string | null
}

export async function getCatalogSiteMetadata(
  entryId: string
): Promise<CatalogSiteMetadata | null> {
  const supabase = createContentClient()

  const { data, error } = await supabase
    .schema('catalog')
    .from('site_entries')
    .select('metadata_jsonb,updated_at')
    .eq('id', entryId)
    .maybeSingle()

  if (error) throw error
  if (!data) return null

  return {
    metadata_jsonb:
      data.metadata_jsonb && typeof data.metadata_jsonb === 'object' && !Array.isArray(data.metadata_jsonb)
        ? data.metadata_jsonb as Record<string, unknown>
        : {},
    updated_at: typeof data.updated_at === 'string' ? data.updated_at : null,
  }
}
