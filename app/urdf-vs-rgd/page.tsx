import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { FormatVsRgdPage } from '@/components/format-vs-rgd-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE COMPARISON',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'ROS URDF documentation + OpenRGD Import Guide / Runtime Boundary',
  evidenceBoundary: 'Complementary-layer comparison; not a winner/loser ranking and not a claim that RGD replaces URDF.',
  pageUrl: 'https://openrgd.org/urdf-vs-rgd',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF vs RGD',
  description: 'URDF and RGD solve different layers of robot description: structural robot modeling versus semantic embodiment and operational context.',
  canonicalPath: '/urdf-vs-rgd',
  record: citationRecord,
})

export default function UrdfVsRgdPage() {
  return (
    <FormatVsRgdPage
      formatName="URDF"
      formatHref="/urdf"
      eyebrow="URDF VS RGD"
      title="Robot structure and semantic embodiment are complementary layers."
      lead="URDF is strong at describing links, joints and physical robot structure. RGD consumes source-supported body evidence and adds identity, provenance, operational constraints, capability semantics and lifecycle context."
      leftLabel="URDF"
      matrix={[
        { dimension: 'Primary responsibility', left: 'Robot model structure for ROS-centric tooling.', rgd: 'Semantic embodiment and machine-readable grounding context.' },
        { dimension: 'Core representation', left: 'XML links, joints and related physical/model properties.', rgd: 'Modular graph/profile across explicit semantic domains.' },
        { dimension: 'Kinematics', left: 'First-class: topology, axes, joint types and limits.', rgd: 'Can preserve/import kinematic evidence inside Foundation.' },
        { dimension: 'Identity', left: 'Robot model name and file/model identity.', rgd: 'Canonical profile identity, manifests and integrity commitments.' },
        { dimension: 'Operational semantics', left: 'Mostly outside the core format responsibility.', rgd: 'Operation domain for runtime constraints and safety context.' },
        { dimension: 'Capabilities', left: 'Usually expressed elsewhere in the stack.', rgd: 'Agency domain for declared capability and action semantics.' },
        { dimension: 'Provenance', left: 'Not a central cross-domain provenance model.', rgd: 'Source evidence and derivation boundaries are explicit.' },
        { dimension: 'Actuation', left: 'URDF itself does not authorize hardware execution.', rgd: 'RGD also does not authorize hardware execution.' },
      ]}
      overlap={[
        'Link and joint topology.',
        'Joint types, axes and source-authored limits.',
        'Inertial mass and inertia when present.',
        'Dynamics and mimic relationships when supported by the source.',
        'Names and structural relationships used to identify body elements.',
      ]}
      rgdAdds={[
        'Canonical source-tree identity and integrity verification.',
        'Separation between imported evidence and later enrichment.',
        'Operational envelopes and machine-readable safety context.',
        'Declared capabilities and action semantics.',
        'Lifecycle, adaptation and continuity context.',
        'Explicit boundary between cognition, planning and physical execution.',
      ]}
      rgdDoesNotReplace={[
        'URDF-based ROS robot-model workflows.',
        'robot_state_publisher and tooling that expects URDF.',
        'Mesh/geometry asset handling already expressed through the URDF ecosystem.',
        'ROS middleware or ros2_control.',
        'A hardware driver or embodied runtime.',
      ]}
      useTogether={[
        'You already maintain a URDF as the canonical structural robot model.',
        'AI or planning systems need body context beyond links and joints.',
        'You want to preserve exact source provenance instead of manually copying facts.',
        'You need to distinguish source evidence from safety/capability enrichment.',
        'You want deterministic static exports while keeping runtime ownership downstream.',
      ]}
      flow={['URDF source', 'rgd import', 'Partial Foundation evidence', 'Explicit enrichment', 'rgd check / boot', 'Downstream runtime']}
      sources={[
        { label: 'ROS 2 — URDF documentation', href: 'https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/URDF-Main.html' },
        { label: 'ROS — urdf package documentation', href: 'https://docs.ros.org/en/rolling/p/urdf' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
        { label: 'OpenRGD — Runtime Boundary', href: 'https://github.com/OpenRGD/openrgd/blob/main/docs/reconciliation/RUNTIME_BOUNDARY.md' },
      ]}
      citationRecord={citationRecord}
    />
  )
}
