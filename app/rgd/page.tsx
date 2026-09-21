import type { Metadata } from 'next'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import FormatComparison from '@/components/format-comparison'

export const metadata: Metadata = {
  title: 'RGD — Robot Graph Definition',
  description: 'RGD is the modular semantic embodiment representation defined by OpenRGD, complementing structural and simulation-oriented robot description formats.',
  alternates: { canonical: '/rgd' },
}

export default function RgdPage() {
  return (
    <ConceptPage
      eyebrow="RGD"
      title="Robot Graph Definition: semantic embodiment as machine-readable context."
      lead="RGD is the modular representation defined by OpenRGD for describing a robot body, its operational limits, capabilities, provenance, lifecycle and higher-level semantic context."
      sources={[
        { label: 'OpenRGD — README', href: 'https://github.com/OpenRGD/openrgd' },
        { label: 'OpenRGD — Canonical structure', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
        { label: 'OpenRGD — Versioning', href: 'https://github.com/OpenRGD/openrgd/blob/main/VERSIONING.md' },
      ]}
      related={[
        { href: '/openrgd', title: 'OpenRGD', copy: 'The project, standard, toolchain and governance ecosystem around RGD.' },
        { href: '/robot-description-formats', title: 'Robot Description Formats', copy: 'See RGD beside URDF, USD and SDF.' },
        { href: '/urdf-vs-rgd', title: 'URDF vs RGD', copy: 'Structural robot description compared with semantic embodiment.' },
        { href: '/architecture', title: 'Architecture', copy: 'Explore the seven semantic domains and authority model.' },
      ]}
    >
      <ConceptSection kicker="RGD VS OPENRGD" title="The representation and the ecosystem are related, but not identical.">
        <p>
          OpenRGD is the open standard, canonical repository, tooling, governance model and interoperability work.
          RGD — Robot Graph Definition — is the machine-readable graph/profile representation that the standard defines.
        </p>
      </ConceptSection>

      <ConceptSection kicker="SEMANTIC SCOPE" title="RGD starts where a conventional robot description often stops.">
        <ConceptGrid
          items={[
            { label: '00', title: 'Core', copy: 'Identity, coordination, manifests and kernel metadata.' },
            { label: '01', title: 'Foundation', copy: 'Physical body, structure, hardware and source-supported evidence.' },
            { label: '02', title: 'Operation', copy: 'Operational limits, runtime constraints and safety context.' },
            { label: '03', title: 'Agency', copy: 'Declared capabilities, world-model context and action semantics.' },
            { label: '04', title: 'Volition', copy: 'Values, alignment and decision-governance context.' },
            { label: '05–06', title: 'Evolution + Ether', copy: 'Lifecycle, adaptation, continuity and collective/inter-agent semantics.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="SOURCE EVIDENCE" title="RGD can ingest evidence without pretending the source knows more than it does.">
        <p>
          The current OpenRGD toolchain can import supported evidence from URDF and a narrow USDA subset into partial Foundation modules.
          Identity, safety, governance, cognition and hardware authorization are not inferred from those files.
        </p>
      </ConceptSection>

      <ConceptSection kicker="NON-ACTUATING" title="A valid graph is context, not motion authority.">
        <p>
          The canonical repository deliberately does not ship a physical runtime.
          Integrity checks, compilation and boot produce validated context and derived artifacts,
          but physical execution remains the responsibility of downstream runtimes and body adapters.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARE" title="RGD is designed to sit beside, not erase, established description formats.">
        <FormatComparison />
      </ConceptSection>
    </ConceptPage>
  )
}
