import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import FormatComparison from '@/components/format-comparison'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE EXPLAINER',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'ROS 2 Rolling URDF documentation + OpenRGD Import Guide',
  evidenceBoundary: 'Reference explainer; OpenRGD imports only source-supported URDF evidence and does not infer identity, safety, cognition or hardware authorization.',
  pageUrl: 'https://openrgd.org/urdf',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF',
  description: 'URDF is an XML format for representing robot models in ROS, centered on links, joints, geometry and physical properties.',
  canonicalPath: '/urdf',
  record: citationRecord,
})

export default function UrdfPage() {
  return (
    <ConceptPage
      eyebrow="URDF"
      title="A compact structural model for robots."
      lead="URDF — Unified Robot Description Format — is an XML format used in ROS to represent a robot model, including its links, joints, geometry and selected physical properties."
      citationRecord={citationRecord}
      sources={[
        { label: 'ROS 2 — URDF documentation', href: 'https://docs.ros.org/en/rolling/Tutorials/Intermediate/URDF/URDF-Main.html' },
        { label: 'ROS — urdf package documentation', href: 'https://docs.ros.org/en/rolling/p/urdf' },
        { label: 'OpenRGD — Import Guide', href: 'https://github.com/OpenRGD/openrgd/blob/main/GUIDE_IMPORT.md' },
      ]}
      related={[
        { href: '/robot-description-formats', title: 'Robot Description Formats', copy: 'Compare URDF with Xacro, USD, SDF, MJCF and RGD by responsibility.' },
        { href: '/xacro', title: 'Xacro', copy: 'Understand the macro and preprocessing layer that commonly generates URDF.' },
        { href: '/urdf-limitations', title: 'URDF Limitations', copy: 'See where portable URDF core stops and extensions begin.' },
        { href: '/urdf-vs-sdf', title: 'URDF vs SDF', copy: 'Robot-model structure versus simulation-oriented model and world description.' },
        { href: '/urdf-vs-usd', title: 'URDF vs USD', copy: 'Robot-model structure versus scalable scene composition.' },
        { href: '/urdf-vs-mjcf', title: 'URDF vs MJCF', copy: 'Portable robot modeling versus MuJoCo-native dynamics.' },
        { href: '/interoperability', title: 'Interoperability', copy: 'Where URDF fits in a layered robotics stack.' },
        { href: '/robot-description-inspector', title: 'Robot Description Inspector', copy: 'Inspect source evidence and extension signals locally.' },
      ]}
    >
      <ConceptSection kicker="CORE MODEL" title="Links and joints define the robot tree.">
        <p>
          ROS documentation describes URDF as a file format for specifying robot geometry and organization.
          The URDF model is built around links and joints, with XML elements for visual, collision, inertial
          and joint properties.
        </p>
      </ConceptSection>

      <ConceptSection kicker="STRENGTHS" title="Simple, inspectable and deeply integrated into ROS workflows.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Kinematic structure', copy: 'Parent/child relationships and joint topology are explicit.' },
            { label: '02', title: 'Geometry', copy: 'Visual and collision geometry can be attached to robot links.' },
            { label: '03', title: 'Inertials', copy: 'Mass and inertia can be authored for physical links.' },
            { label: '04', title: 'Joint limits', copy: 'Joint type, axis, limits, dynamics and mimic relationships can be represented.' },
            { label: '05', title: 'ROS ecosystem', copy: 'URDF integrates naturally with robot_state_publisher and many ROS tools.' },
            { label: '06', title: 'Human readability', copy: 'XML structure is relatively direct to inspect and generate.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="BOUNDARY" title="URDF is not trying to describe the whole embodied intelligence stack.">
        <p>
          URDF does not natively answer every question an AI system may need about capabilities, provenance,
          lifecycle, governance or higher-level operational semantics. That is not a defect; it reflects the format’s primary responsibility.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD IMPORT" title="URDF is treated as evidence, not as a complete robot constitution.">
        <p>
          The OpenRGD importer preserves supported topology, inertials, limits, dynamics and mimic relationships.
          Missing values remain missing. It does not invent identity, safety policy, cognition, HAL bindings or actuation permission.
        </p>
      </ConceptSection>

      <ConceptSection kicker="COMPARE" title="URDF and RGD solve different layers of the problem.">
        <FormatComparison />
      </ConceptSection>
    </ConceptPage>
  )
}
