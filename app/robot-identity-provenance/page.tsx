import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE EXPLAINER + IMPLEMENTED SITE EVIDENCE MODEL',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'OpenRGD 0.2.0 integrity model + catalog assertion evidence model',
  evidenceBoundary: 'Source review, normalization and independent testing remain distinct evidence states.',
  pageUrl: 'https://openrgd.org/robot-identity-provenance',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/EVIDENCE_SCOPE.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'Robot Identity & Provenance',
  description: 'Robot identity and provenance separate the entity being described from configuration identity, source evidence, verification state and derived interpretation.',
  canonicalPath: '/robot-identity-provenance',
  record: citationRecord,
})

const jsonLd = {
  '@context':'https://schema.org',
  '@type':'TechArticle',
  headline:'Robot Identity and Provenance — Evidence for machine-readable embodiment',
  mainEntityOfPage:'https://openrgd.org/robot-identity-provenance',
  inLanguage:'en',
  publisher:{'@type':'Organization',name:'OpenRGD',url:'https://openrgd.org'},
}

export default function RobotIdentityProvenancePage() {
  return (
    <ConceptPage
      eyebrow="ROBOT IDENTITY + PROVENANCE"
      title="A robot claim is useful only when you know which robot it describes and where the claim came from."
      lead="Identity answers what entity or configuration is being described. Provenance records the source, evidence path, verification state and derivation behind the claims attached to that identity."
      jsonLd={jsonLd}
      citationRecord={citationRecord}
      sources={[
        {label:'W3C — PROV-O: The PROV Ontology',href:'https://www.w3.org/TR/prov-o/'},
        {label:'OpenRGD — Canonical README',href:'https://github.com/OpenRGD/openrgd'},
        {label:'OpenRGD — Agent Contracts provenance',href:'https://github.com/OpenRGD/openrgd/blob/main/contracts/agent/v0.1.0/PROVENANCE.md'},
        {label:'OpenRGD — Evidence Scope',href:'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/EVIDENCE_SCOPE.md'},
        {label:'OpenRGD — Import Guide',href:'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md'},
      ]}
      related={[
        {href:'/robot-knowledge-graph',title:'Robot Knowledge Graph',copy:'Connect identity, claims, evidence and relationships into a queryable graph.'},
        {href:'/robot-capability-model',title:'Robot Capability Model',copy:'Capabilities require evidence tied to the actual embodiment being described.'},
        {href:'/robots',title:'Robot Knowledge',copy:'Inspect evidence-backed robot entities on OpenRGD.org.'},
      ]}
    >
      <ConceptSection kicker="IDENTITY LAYERS" title="Model identity, configuration identity and physical-instance identity are not the same thing.">
        <ConceptGrid items={[
          {label:'01',title:'Model identity',copy:'The commercial or canonical robot model, such as a Unitree G1 or a Comau Racer-5-0.80 COBOT.'},
          {label:'02',title:'Variant / configuration',copy:'A specific option set, edition or hardware configuration can change DoF, compute, sensors or payload.'},
          {label:'03',title:'Profile identity',copy:'An OpenRGD profile has its own identity and integrity commitment for the exact machine-readable configuration being evaluated.'},
          {label:'04',title:'Physical instance',copy:'A real deployed robot may additionally need serial, calibration, firmware and lifecycle identity beyond the generic model.'},
          {label:'05',title:'Source identity',copy:'Evidence must retain which document, manufacturer page, dataset or artifact produced the assertion.'},
          {label:'06',title:'Temporal identity',copy:'Claims can change over time, so valid-from, valid-to and verification dates matter.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="PROVENANCE PIPELINE" title="Preserve the path from evidence to interpretation.">
        <ConceptFlow items={['Primary source','Raw assertion','Normalization','Verification state','Canonical entity','Site-specific interpretation','Derived RGD context']}/>
        <p>
          The critical rule is non-retroactivity: later interpretation should not silently rewrite the historical evidence that supported an earlier claim.
          OpenRGD’s reconciliation work applies the same principle to recovered artifacts and candidate contracts.
        </p>
      </ConceptSection>

      <ConceptSection kicker="VERIFIED ≠ INDEPENDENTLY TESTED" title="Evidence quality needs more than one boolean.">
        <p>
          A manufacturer-stated specification can be accurately captured and source-reviewed without being independently measured.
          OpenRGD.org therefore keeps evidence type, verification status and independent testing as separate fields.
          This prevents a reviewed product-page claim from being presented as laboratory validation.
        </p>
      </ConceptSection>

      <ConceptSection kicker="CONTENT IDENTITY" title="A hash proves which content you have — not who approved it or whether it is correct.">
        <p>
          The canonical OpenRGD repository uses <code>OPENRGD_SOURCE_TREE_SHA256_V1</code> to commit the selected modular source tree.
          Repository guidance explicitly separates content identity from authorship, governance acceptance, compatibility and physical safety.
          The same distinction is useful for robot data: integrity is one layer of trust, not the whole trust model.
        </p>
      </ConceptSection>

      <ConceptSection kicker="IMPORT PROVENANCE" title="Source-derived robot evidence should stay distinguishable from later enrichment.">
        <p>
          The current OpenRGD importers record source filename, format, byte length and SHA-256 while extracting only supported Foundation evidence.
          Identity, safety policy, cognition and hardware authorization are not inferred from URDF or USDA.
          Later enrichment is therefore a separate operation with a separate provenance story.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD.ORG EVIDENCE MODEL" title="Entity pages can expose claims instead of hiding them behind a polished specification table.">
        <p>
          The OpenRGD.org catalog stores robot assertions separately from the canonical robot row.
          An assertion can carry its property, normalized value, evidence type, verification state, source URL,
          verification date, validity window and whether independent testing is recorded.
          The public robot pages now surface that distinction directly.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
