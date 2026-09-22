import type { RobotAssertion } from '@/lib/cms/catalog'

function humanize(value: string): string {
  return value
    .toLowerCase()
    .replaceAll('_',' ')
    .replace(/\b\w/g,(char)=>char.toUpperCase())
}

function formatDate(value: string | null | undefined): string {
  if (!value) return 'Not recorded'
  const date = new Date(value)
  if (Number.isNaN(date.getTime())) return value
  return new Intl.DateTimeFormat('en-GB',{day:'numeric',month:'short',year:'numeric'}).format(date)
}

function formatNormalized(value: unknown): string | null {
  if (value === null || value === undefined) return null
  if (typeof value !== 'object') return String(value)
  if (Array.isArray(value)) return value.map(formatNormalized).filter(Boolean).join(' · ')

  const record=value as Record<string,unknown>
  if (typeof record.number === 'number') {
    return [record.number, typeof record.unit === 'string' ? record.unit : null].filter(Boolean).join(' ')
  }
  if (typeof record.integer === 'number') return String(record.integer)
  if (typeof record.approx === 'number') {
    return ['≈',record.approx,typeof record.unit === 'string' ? record.unit : null].filter(Boolean).join(' ')
  }
  if (typeof record.min === 'number' && typeof record.max === 'number') {
    return [record.min,'–',record.max,typeof record.unit === 'string' ? record.unit : null].filter(Boolean).join(' ')
  }
  if (typeof record.rating === 'string') return record.rating

  return Object.entries(record)
    .filter(([,v])=>['string','number','boolean'].includes(typeof v))
    .slice(0,4)
    .map(([k,v])=>`${humanize(k)}: ${String(v)}`)
    .join(' · ') || null
}

export default function RobotEvidencePanel({
  assertions,
  metadata,
  modelUpdatedAt,
}: {
  assertions: RobotAssertion[]
  metadata: Record<string,unknown>
  modelUpdatedAt?: string | null
}) {
  const sourceUrls = Array.from(new Set(
    assertions.map(a=>a.source_url).filter((v):v is string=>Boolean(v))
  ))
  const verifiedDates = assertions.map(a=>a.verified_at).filter((v):v is string=>Boolean(v))
  const lastVerified = verifiedDates.sort().at(-1)
    || (typeof metadata.verified_at === 'string' ? metadata.verified_at : null)
    || modelUpdatedAt
    || null
  const independentCount = assertions.filter(a=>a.independently_tested).length

  return (
    <section className="shell evidence-section">
      <div className="content-section-head">
        <p className="kicker">EVIDENCE & PROVENANCE</p>
        <h2>Every claim should show where it came from.</h2>
        <p className="content-note">
          Verification records source review, not independent physical testing. Evidence status and independent testing are intentionally separate.
        </p>
      </div>

      <div className="evidence-summary">
        <div><span>ASSERTIONS</span><strong>{assertions.length}</strong></div>
        <div><span>PRIMARY SOURCES</span><strong>{sourceUrls.length}</strong></div>
        <div><span>LAST VERIFIED</span><strong>{formatDate(lastVerified)}</strong></div>
        <div><span>INDEPENDENTLY TESTED</span><strong>{independentCount ? `${independentCount} recorded` : 'No evidence recorded'}</strong></div>
      </div>

      {assertions.length ? (
        <div className="evidence-ledger">
          <div className="evidence-ledger-head">
            <span>CLAIM</span>
            <span>NORMALIZED VALUE</span>
            <span>EVIDENCE</span>
            <span>VERIFICATION</span>
            <span>SOURCE</span>
          </div>
          {assertions.map((assertion)=>(
            <div className="evidence-ledger-row" key={assertion.id}>
              <strong>{humanize(assertion.property_key)}</strong>
              <span>{formatNormalized(assertion.normalized_value_jsonb) || 'Source claim recorded'}</span>
              <span>{humanize(assertion.evidence_type)}</span>
              <span>
                {humanize(assertion.verification_status)}
                {assertion.verified_at ? <small>{formatDate(assertion.verified_at)}</small> : null}
              </span>
              <span>
                {assertion.source_url ? (
                  <a href={assertion.source_url} target="_blank" rel="noreferrer">Primary source ↗</a>
                ) : 'Not linked'}
                <small>{assertion.independently_tested ? 'Independent test recorded' : 'Not independently tested'}</small>
              </span>
            </div>
          ))}
        </div>
      ) : (
        <div className="evidence-empty">
          No assertion-level evidence is currently published for this robot.
        </div>
      )}

      <div className="evidence-method-link">
        <a href="/robot-identity-provenance">How OpenRGD.org treats identity, evidence and provenance →</a>
      </div>
    </section>
  )
}
