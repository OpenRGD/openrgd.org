import type { Metadata } from 'next'
import { FormatVsRgdPage } from '@/components/format-vs-rgd-page'

export const metadata: Metadata = {
  title: 'USD vs RGD',
  description: 'OpenUSD and RGD address different responsibilities: composed scene description and physics versus semantic embodiment, provenance and operational context.',
  alternates: { canonical: '/usd-vs-rgd' },
}

export default function UsdVsRgdPage() {
  return (
    <FormatVsRgdPage
      formatName="USD / OpenUSD"
      formatHref="/usd"
      eyebrow="USD VS RGD"
      title="Scene composition and semantic embodiment should stay distinct."
      lead="OpenUSD is designed for scalable, composable scene description. RGD focuses on what an embodied AI or runtime needs to know about a specific robot body, its provenance, capabilities, constraints and lifecycle."
      leftLabel="OPENUSD"
      matrix={[
        { dimension: 'Primary responsibility', left: 'Composable scene description across complex assets and layers.', rgd: 'Semantic embodiment and robot grounding context.' },
        { dimension: 'Core representation', left: 'Hierarchical scenegraph with composition arcs and authored opinions.', rgd: 'Modular semantic graph/profile with domain authority.' },
        { dimension: 'Scene composition', left: 'First-class references, variants, payloads and layered composition.', rgd: 'Not a replacement for USD composition.' },
        { dimension: 'Physics', left: 'UsdPhysics schemas for bodies, colliders, joints and simulation scenes.', rgd: 'Can carry physical evidence and constraints without being a physics engine.' },
        { dimension: 'Robot-specific identity', left: 'Possible through authored scene data, but not the central standard purpose.', rgd: 'Canonical robot/profile identity is explicit.' },
        { dimension: 'Capabilities / governance', left: 'Not intrinsic robot capability/governance semantics.', rgd: 'Agency and Volition domains make those responsibilities explicit.' },
        { dimension: 'Provenance', left: 'USD layers preserve authored scene opinions and composition provenance.', rgd: 'Adds evidence provenance specific to embodiment and enrichment boundaries.' },
        { dimension: 'Runtime authority', left: 'Scene description is not hardware permission.', rgd: 'Semantic context is also not hardware permission.' },
      ]}
      overlap={[
        'Physical joint/body facts may exist in both representations.',
        'Units and source-authored physical properties can inform RGD Foundation.',
        'Robot and environment assets can be linked to the same real physical system.',
        'Simulation pipelines may consume scene data while AI pipelines consume RGD context.',
        'Both benefit from deterministic, inspectable source boundaries.',
      ]}
      rgdAdds={[
        'Robot-centric semantic identity across non-scene domains.',
        'Explicit imported-evidence versus enriched-knowledge distinction.',
        'Operational safety and runtime constraint context.',
        'Capability and action semantics for AI/planning systems.',
        'Lifecycle and continuity semantics.',
        'Canonical cognitive-to-physical execution boundary.',
      ]}
      rgdDoesNotReplace={[
        'USD references, payloads, variants and layer composition.',
        'Full OpenUSD SDK semantics.',
        'UsdPhysics simulation schema implementation.',
        'Rendering, asset pipelines or DCC scene workflows.',
        'A simulator, middleware layer or runtime.',
      ]}
      useTogether={[
        'The robot already exists as a USD/OpenUSD asset in simulation or digital-twin workflows.',
        'The same robot needs machine-readable semantic context for AI systems.',
        'You want scene composition to remain in USD while embodiment semantics remain inspectable elsewhere.',
        'A full OpenUSD adapter can extract authoritative body evidence before semantic enrichment.',
        'Simulation state and semantic profile need independent versioning and ownership.',
      ]}
      flow={['OpenUSD scene', 'Full/narrow source adapter', 'Foundation evidence', 'RGD semantic enrichment', 'Validated context', 'Simulator / runtime']}
      sources={[
        { label: 'OpenUSD — Introduction', href: 'https://openusd.org/24.08/intro.html' },
        { label: 'OpenUSD — USD FAQ', href: 'https://openusd.org/dev/usdfaq.html' },
        { label: 'OpenUSD — UsdPhysics', href: 'https://openusd.org/dev/api/usd_physics_page_front.html' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
      ]}
    />
  )
}
