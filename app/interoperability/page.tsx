import type { Metadata } from 'next'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

export const metadata: Metadata = {
  title: 'Interoperability',
  description: 'OpenRGD interoperability separates robot descriptions, semantic grounding, static exports, middleware, runtimes and hardware ownership.',
  alternates: { canonical: '/interoperability' },
}

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Robot Interoperability — Explicit boundaries instead of hidden assumptions',
  mainEntityOfPage: 'https://openrgd.org/interoperability',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default function InteroperabilityPage() {
  return (
    <ConceptPage
      eyebrow="INTEROPERABILITY"
      title="Interoperability is not one universal file format."
      lead="A robust robotics stack needs explicit contracts between description, semantics, middleware, runtime execution and physical hardware. OpenRGD targets the semantic layer between them."
      jsonLd={jsonLd}
      sources={[
        { label: 'OpenRGD — Static Export Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_EXPORT.md' },
        { label: 'ros2_control — Hardware Components', href: 'https://control.ros.org/kilted/doc/ros2_control/hardware_interface/doc/hardware_components_userdoc.html' },
        { label: 'OpenUSD — UsdPhysics schema', href: 'https://openusd.org/dev/api/usd_physics_page_front.html' },
      ]}
      related={[
        { href: '/robot-description', title: 'Robot Description', copy: 'The source formats that provide structural and physical evidence.' },
        { href: '/spec', title: 'OpenRGD Specification', copy: 'The normative model that defines semantic responsibility and maturity.' },
        { href: '/docs', title: 'Toolchain', copy: 'Import, verify, compile and export without crossing the actuation boundary.' },
      ]}
    >
      <ConceptSection kicker="LAYERED INTEROPERABILITY" title="Different systems own different truths.">
        <p>
          URDF can describe robot topology. OpenUSD can describe rich scene and physics information.
          ros2_control owns hardware abstraction and control lifecycle. A physical runtime owns execution.
          Treating one of those layers as if it silently owns all the others creates hidden assumptions.
        </p>
        <ConceptFlow items={['Source description', 'OpenRGD semantic graph', 'Static export', 'Middleware', 'Embodied runtime', 'Hardware']} />
      </ConceptSection>

      <ConceptSection kicker="OPENRGD ROLE" title="Bridge semantics without swallowing the stack.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Import', copy: 'Extract source-supported evidence from supported description formats.' },
            { label: '02', title: 'Normalize', copy: 'Represent facts and semantics under explicit units, domains and provenance.' },
            { label: '03', title: 'Validate', copy: 'Verify integrity and selected modules before building derived artifacts.' },
            { label: '04', title: 'Compile', copy: 'Produce deterministic machine-readable context from the selected graph.' },
            { label: '05', title: 'Export', copy: 'Generate static interoperability configuration for supported targets.' },
            { label: '06', title: 'Stop', copy: 'Do not silently cross from configuration into actuation.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="ROS 2" title="Static export is configuration, not runtime ownership.">
        <p>
          The current OpenRGD ROS 2 export produces deterministic configuration artifacts and an export manifest.
          Hardware Xacro is emitted only when required HAL evidence is complete. Otherwise the export is explicitly configuration-only.
        </p>
        <p>
          ros2_control remains responsible for its own hardware components, command/state interfaces and lifecycle.
          OpenRGD does not launch the controller manager or write to device buses from the canonical repository.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FAIL CLOSED" title="Interoperability should preserve uncertainty.">
        <p>
          Imported robot descriptions cannot inherit hardware bindings merely because joint names happen to match a seed.
          Missing evidence is reported as missing evidence. Unsupported OpenUSD composition semantics are not approximated silently.
          This makes interoperability narrower, but auditable.
        </p>
      </ConceptSection>

      <ConceptSection kicker="DESIGN PRINCIPLE" title="Connect systems by contract, not by implication.">
        <p>
          OpenRGD is useful when the boundaries are visible: what came from a source file, what was enriched,
          what was validated, what was exported, and which downstream component is responsible for physical execution.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
