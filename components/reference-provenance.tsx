import CitationRecord from '@/components/citation-record'
import { buildReferenceJsonLd, type CitationRecordData, type SourceRef } from '@/lib/seo/provenance'

export default function ReferenceProvenance({
  title,
  description,
  record,
  sources = [],
}: {
  title: string
  description: string
  record: CitationRecordData
  sources?: SourceRef[]
}) {
  const structuredData=buildReferenceJsonLd({
    title,
    description,
    record,
    sources,
  })

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <CitationRecord record={record} />
    </>
  )
}
