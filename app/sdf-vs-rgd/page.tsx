import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { FormatVsRgdPage } from '@/components/format-vs-rgd-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE COMPARISON',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'SDFormat specification + OpenRGD architecture',
  evidenceBoundary: 'Complementary-layer comparison; OpenRGD does not replace SDF worlds, simulator configuration or plugins.',
  pageUrl: 'https://openrgd.org/sdf-vs-rgd',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'SDF vs RGD',
  description: 'SDFormat and RGD address different layers: simulation-oriented robot/world description versus semantic embodiment and operational context.',
  canonicalPath: '/sdf-vs-rgd',
  record: citationRecord,
})

export default function SdfVsRgdPage() {
  return (
    <FormatVsRgdPage
      formatName="SDF / SDFormat"
      formatHref="/sdf"
      eyebrow="SDF VS RGD"
      title="Simulation description and semantic embodiment are different responsibilities."
      lead="SDFormat can describe robots, models, sensors, physics and entire simulated worlds. RGD focuses on the semantic identity and embodied context of the robot itself across physical, operational, capability and lifecycle domains."
      leftLabel="SDFORMAT"
      matrix={[
        { dimension: 'Primary responsibility', left: 'Simulation-oriented robot, model and world description.', rgd: 'Semantic embodiment and AI/runtime grounding context.' },
        { dimension: 'Core representation', left: 'XML models, links, joints, sensors, physics, plugins and worlds.', rgd: 'Modular graph/profile across seven semantic domains.' },
        { dimension: 'World description', left: 'First-class: models, scene, lights, physics and environment.', rgd: 'Not a world/simulator format.' },
        { dimension: 'Sensors / physics', left: 'Rich simulator-oriented declarations.', rgd: 'Can record embodiment evidence and constraints, not simulate them itself.' },
        { dimension: 'Robot identity', left: 'Model identity exists inside simulation description.', rgd: 'Canonical robot/profile identity and integrity are explicit.' },
        { dimension: 'Capabilities', left: 'May be represented indirectly through plugins/stack-specific semantics.', rgd: 'Explicit capability and action semantics belong to Agency.' },
        { dimension: 'Lifecycle', left: 'Not the primary focus of the format.', rgd: 'Evolution domain represents wear, adaptation and continuity.' },
        { dimension: 'Actuation', left: 'Simulation configuration is not real hardware authorization.', rgd: 'RGD context is likewise non-actuating.' },
      ]}
      overlap={[
        'Robot model structure, joints and physical properties.',
        'Sensor declarations can inform embodiment context.',
        'Simulation constraints may correspond to real operational limits when provenance is known.',
        'Both may describe the same robot at different layers of the stack.',
        'Both benefit from clear version and source ownership.',
      ]}
      rgdAdds={[
        'Cross-environment identity independent of one simulator world.',
        'Explicit provenance for physical facts and enrichment.',
        'Operational and safety context outside simulator-specific configuration.',
        'Capability and action semantics for AI systems.',
        'Lifecycle and continuity across physical changes.',
        'Execution-boundary semantics between planning and hardware.',
      ]}
      rgdDoesNotReplace={[
        'SDF world composition.',
        'Simulation physics settings and environment configuration.',
        'Simulator-specific plugins and sensor implementations.',
        'Gazebo or another simulator runtime.',
        'Middleware, controllers or real device drivers.',
      ]}
      useTogether={[
        'SDF is already the source of simulated robot/world configuration.',
        'The same embodiment must be represented consistently outside the simulator.',
        'AI systems need capabilities and constraints not encoded as simulator plugins.',
        'You want simulation assets and semantic identity to evolve independently.',
        'Provenance needs to distinguish simulated assumptions from verified physical evidence.',
      ]}
      flow={['SDF model/world', 'Evidence adapter', 'Physical/sensor evidence', 'RGD enrichment', 'Validated embodiment context', 'Simulation + physical runtime']}
      sources={[
        { label: 'SDFormat — Project', href: 'https://sdformat.org/' },
        { label: 'SDFormat — Specification', href: 'https://sdformat.org/spec' },
        { label: 'SDFormat — Model kinematics', href: 'https://sdformat.org/tutorials/specification/spec_model_kinematics/' },
        { label: 'OpenRGD — Architecture', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
      ]}
      citationRecord={citationRecord}
    />
  )
}
