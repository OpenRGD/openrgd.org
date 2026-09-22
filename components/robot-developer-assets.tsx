type DeveloperAsset = {
  kind?: string
  label?: string
  format?: string
  url?: string
  source_owner?: string
  source_ref?: string
  status?: string
  notes?: string
}

function humanize(value: string): string {
  return value
    .replaceAll('_',' ')
    .replace(/\b\w/g,(char)=>char.toUpperCase())
}

export default function RobotDeveloperAssets({
  metadata,
}: {
  metadata: Record<string,unknown>
}) {
  const raw=metadata.developer_assets
  const assets=Array.isArray(raw)
    ? raw.filter((item): item is DeveloperAsset => Boolean(item) && typeof item === 'object')
    : []

  if (!assets.length) return null

  const verifiedAt=typeof metadata.developer_assets_verified_at === 'string'
    ? metadata.developer_assets_verified_at
    : null
  const policy=typeof metadata.developer_assets_policy === 'string'
    ? metadata.developer_assets_policy
    : null

  return (
    <section className="shell robot-developer-assets">
      <div className="content-section-head">
        <p className="kicker">DEVELOPER ASSETS</p>
        <h2>Official integration surfaces for this robot.</h2>
        <p className="content-note">
          Only official manufacturer-owned or manufacturer-published resources are listed. Availability and developer access may be variant-specific; an official repository is not evidence that every commercial configuration exposes the same development surface.
        </p>
      </div>

      <div className="developer-asset-grid">
        {assets.map((asset,index)=>(
          <a
            href={asset.url || '#'}
            target="_blank"
            rel="noreferrer"
            key={(asset.url || asset.label || String(index))}
          >
            <div className="developer-asset-top">
              <span>{asset.kind ? humanize(asset.kind) : 'Asset'}</span>
              <i>{asset.status ? humanize(asset.status) : 'Official'}</i>
            </div>
            <h3>{asset.label || 'Developer asset'}</h3>
            <p>{asset.format || 'Official resource'}</p>
            {asset.notes ? <small className="developer-asset-note">{asset.notes}</small> : null}
            <div className="developer-asset-meta">
              {asset.source_owner ? <small>{asset.source_owner}</small> : null}
              {asset.source_ref ? <code>{asset.source_ref.slice(0,12)}</code> : null}
            </div>
          </a>
        ))}
      </div>

      <div className="developer-assets-provenance">
        <span>POLICY {policy || 'official-source-only'}</span>
        {verifiedAt ? <span>LAST VERIFIED {verifiedAt}</span> : null}
      </div>
    </section>
  )
}
