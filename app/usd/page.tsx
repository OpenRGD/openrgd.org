import type { Metadata } from 'next'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import FormatComparison from '@/components/format-comparison'

export const metadata: Metadata = {
  title: 'USD / OpenUSD',
  description: 'OpenUSD is a scalable scene-description and composition system; UsdPhysics extends it with rigid bodies, joints and simulation-oriented physics schemas.',
  alternates: { canonical: '/usd' },
}

export default function UsdPage() {
  return (
    <ConceptPage
      eyebrow="USD / OPENUSD"
      title="A composable scene description system, not just another robot file."
      lead="Universal Scene Description is designed to interchange, compose and non-destructively augment complex scene description. In robotics, UsdPhysics adds rigid-body and joint semantics useful for simulation and digital-world pipelines."
      sources={[
        { label: 'OpenUSD — Introduction to USD', href: 'https://openusd.org/24.08/intro.html' },
        { label: 'OpenUSD — USD FAQ and file formats', href: 'https://openusd.org/dev/usdfaq.html' },
        { label: 'OpenUSD — UsdPhysics schema', href: 'https://openusd.org/dev/api/usd_physics_page_front.html' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
      ]}
      related={[
        { href: '/robot-description-formats', title: 'Robot Description Formats', copy: 'Compare USD with URDF, SDF and RGD.' },
        { href: '/rgd', title: 'RGD', copy: 'Semantic embodiment context that can coexist with scene description.' },
        { href: '/robot-description', title: 'Robot Description', copy: 'Why structural and scene evidence are not the whole semantic story.' },
      ]}
    >
      <ConceptSection kicker="SCENEGRAPH" title="USD is fundamentally about scalable scene description and composition.">
        <p>
          OpenUSD was created to robustly interchange and augment complex 3D scenes assembled from many assets.
          Its composition model supports references, variants and sparse overrides while presenting a unified hierarchical scenegraph.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FILE ENCODINGS" title="USD is a system with multiple native encodings.">
        <ConceptGrid
          items={[
            { label: '01', title: '.usda', copy: 'Human-readable UTF-8 text representation.' },
            { label: '02', title: '.usdc', copy: 'Binary Crate representation designed for efficient access.' },
            { label: '03', title: '.usd', copy: 'Generic extension that can contain either native representation.' },
            { label: '04', title: 'References', copy: 'Assets can be composed from other layers instead of flattened into one file.' },
            { label: '05', title: 'Variants', copy: 'Different configurations can coexist as composable scene opinions.' },
            { label: '06', title: 'Time-sampled data', copy: 'Scene description can include time-varying values.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="USD PHYSICS" title="Robotics gains rigid bodies, collisions and joints without turning USD into a robot-only format.">
        <p>
          UsdPhysics provides schemas for rigid bodies, colliders, physical materials, joints and simulation scenes.
          That makes USD particularly useful in rich simulation, synthetic-data and digital-twin workflows.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD BOUNDARY" title="OpenRGD does not pretend its lightweight parser is a full USD engine.">
        <p>
          The current OpenRGD USDA importer intentionally supports a narrow auditable subset.
          It does not compose layers, resolve references or payloads, evaluate variants or replace the OpenUSD SDK.
          A source requiring those semantics should use a future full OpenUSD adapter.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARE" title="USD and RGD are complementary when scene context meets semantic embodiment.">
        <FormatComparison />
      </ConceptSection>
    </ConceptPage>
  )
}
