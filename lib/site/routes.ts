import type { CatalogEntry } from '@/lib/cms/catalog'

export function catalogHref(entry: Pick<CatalogEntry, 'entity_kind' | 'slug'>): string {
  if (entry.entity_kind === 'robot_model') return '/robots/' + entry.slug
  if (entry.entity_kind === 'organization') return '/organizations/' + entry.slug
  if (entry.entity_kind === 'technology') {
    if (entry.slug === 'physical-ai' || entry.slug === 'embodied-ai') return '/' + entry.slug
    return '/technologies/' + entry.slug
  }
  return '/applications/' + entry.slug
}
