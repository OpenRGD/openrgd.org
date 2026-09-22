export type CitationRecordData = {
  maturity: string
  lastVerified: string
  sourceVersion: string
  evidenceBoundary: string
  canonicalSource?: string
}

export default function CitationRecord({ record }: { record: CitationRecordData }) {
  const rows = [
    ['MATURITY', record.maturity],
    ['LAST VERIFIED', record.lastVerified],
    ['SOURCE VERSION', record.sourceVersion],
    ['EVIDENCE BOUNDARY', record.evidenceBoundary],
  ]

  return (
    <section className="shell citation-record" aria-label="Citation record">
      <div className="citation-record-head">
        <span>CITATION RECORD</span>
        {record.canonicalSource ? (
          <a href={record.canonicalSource} target="_blank" rel="noreferrer">Canonical source ↗</a>
        ) : null}
      </div>
      <div className="citation-record-grid">
        {rows.map(([label,value])=>(
          <div key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </div>
        ))}
      </div>
    </section>
  )
}
