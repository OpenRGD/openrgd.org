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

const socialImage = {
  url: '/opengraph-image',
  width: 1200,
  height: 630,
  alt: 'OpenRGD — Robot Graph Definition',
}

export function standardMetadata({
  title,
  description,
  canonicalPath,
  robots,
}: {
  title: string
  description: string
  canonicalPath: string
  robots?: Metadata['robots']
}): Metadata {
  const url = canonicalPath === '/'
    ? 'https://openrgd.org'
    : 'https://openrgd.org' + canonicalPath

  return {
    title,
    description,
    alternates: { canonical: canonicalPath },
    robots,
    openGraph: {
      type: 'website',
      siteName: 'OpenRGD',
      locale: 'en_US',
      title,
      description,
      url,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
  }
}

export function articleMetadata({
  title,
  description,
  canonicalPath,
  publishedTime,
  modifiedTime,
}: {
  title: string
  description: string
  canonicalPath: string
  publishedTime: string
  modifiedTime?: string
}): Metadata {
  const url = canonicalPath === '/'
    ? 'https://openrgd.org'
    : 'https://openrgd.org' + canonicalPath

  const base = standardMetadata({ title, description, canonicalPath })

  return {
    ...base,
    openGraph: {
      type: 'article',
      siteName: 'OpenRGD',
      locale: 'en_US',
      title,
      description,
      url,
      publishedTime,
      modifiedTime: modifiedTime || publishedTime,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
    },
  }
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
  const base=standardMetadata({ title, description, canonicalPath })

  return {
    ...base,
    openGraph: {
      type: 'article',
      siteName: 'OpenRGD',
      locale: 'en_US',
      title,
      description,
      url: record.pageUrl,
      modifiedTime: record.lastVerifiedIso,
      images: [socialImage],
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: ['/opengraph-image'],
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
