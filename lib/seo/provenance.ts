import type { Metadata } from 'next'

export type SourceRef = {
  label: string
  href: string
}

export type CitationRecordData = {
  maturity: string
  lastVerified: string
  lastVerifiedIso: string
  sourceVersion: string
  evidenceBoundary: string
  pageUrl: string
  canonicalSource?: string
}

export function referenceMetadata({
  title,
  description,
  canonicalPath,
  record,
}: {
  title: string
  description: string
  canonicalPath: string
  record: CitationRecordData
}): Metadata {
  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    openGraph: {
      type: 'article',
      title,
      description,
      url: record.pageUrl,
      modifiedTime: record.lastVerifiedIso,
    },
    other: {
      'openrgd:maturity': record.maturity,
      'openrgd:last_verified': record.lastVerifiedIso,
      'openrgd:source_version': record.sourceVersion,
      'openrgd:evidence_boundary': record.evidenceBoundary,
    },
  }
}

export function buildReferenceJsonLd({
  title,
  description,
  record,
  sources,
  base,
}: {
  title: string
  description: string
  record: CitationRecordData
  sources: SourceRef[]
  base?: Record<string, unknown>
}): Record<string, unknown> {
  const sourceUrls = Array.from(new Set([
    ...sources.map((source) => source.href),
    ...(record.canonicalSource ? [record.canonicalSource] : []),
  ]))

  return {
    '@context': 'https://schema.org',
    '@type': 'TechArticle',
    headline: title,
    description,
    mainEntityOfPage: record.pageUrl,
    url: record.pageUrl,
    inLanguage: 'en',
    publisher: {
      '@type': 'Organization',
      name: 'OpenRGD',
      url: 'https://openrgd.org',
    },
    ...base,
    dateModified: record.lastVerifiedIso,
    version: record.sourceVersion,
    citation: sourceUrls,
    isBasedOn: sourceUrls,
    additionalProperty: [
      {
        '@type': 'PropertyValue',
        name: 'OpenRGD maturity',
        value: record.maturity,
      },
      {
        '@type': 'PropertyValue',
        name: 'Evidence boundary',
        value: record.evidenceBoundary,
      },
      {
        '@type': 'PropertyValue',
        name: 'Last verified',
        value: record.lastVerifiedIso,
      },
    ],
  }
}
