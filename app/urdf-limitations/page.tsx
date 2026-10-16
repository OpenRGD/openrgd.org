import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'REFERENCE LIMITS MAP',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'Current ROS 2 / ros2_control / SDFormat references',
  evidenceBoundary: 'Describes responsibility and expressiveness boundaries, not defects. Extensions and downstream tools may add capabilities beyond portable URDF core.',
  pageUrl: 'https://openrgd.org/urdf-limitations',
}

export const metadata: Metadata = referenceMetadata({
  title: 'URDF Limitations',
  description: 'URDF limitations and boundaries: tree kinematics, simulation extensions, control semantics, scene composition, provenance and higher-level robot capabilities.',
  canonicalPath: '/urdf-limitations',
  record: citationRecord,
})

export default function UrdfLimitationsPage() {
  return (
    <ConceptPage
      eyebrow="URDF LIMITATIONS"
      title="URDF is strong because its responsibility is narrow."
      lead="URDF is an effective robot-structure format in ROS, but it is not a universal scene, simulation, control, provenance or semantic-capability model. Real systems therefore compose it with Xacro, Gazebo extensions, ros2_control and target-native formats."
      citationRecord={citationRecord}
      sources={[
        {label:'ros2_control — joint kinematics',href:'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/joints_userdoc.html'},
        {label:'ros2_control — hardware interfaces',href:'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/hardware_interface_types_userdoc.html'},
        {label:'SDFormat — URDF extensions',href:'https://sdformat.org/tutorials/specification/sdformat_urdf_extensions/'},
        {label:'MuJoCo — Modeling',href:'https://mujoco.readthedocs.io/en/stable/modeling.html'},
      ]}
      related={[
        {href:'/urdf',title:'URDF',copy:'Start with URDF strengths and intended responsibility.'},
        {href:'/xacro',title:'Xacro',copy:'See how ROS projects add reusable generation around URDF.'},
        {href:'/robot-description-formats',title:'Robot Description Formats',copy:'Compare formats that own wider simulation or scene responsibilities.'},
      ]}
    >
      <ConceptSection kicker="CORE BOUNDARIES" title="The important limitations are ownership boundaries.">
        <ConceptGrid items={[
          {label:'01',title:'Tree-oriented kinematics',copy:'URDF is naturally built around parent/child links and joints; closed mechanisms need target-specific handling or extensions.'},
          {label:'02',title:'Robot model, not a whole world',copy:'URDF centers on one robot description rather than lights, actors, nested worlds and complete simulation context.'},
          {label:'03',title:'No native macro language',copy:'Configurable robots commonly use Xacro as a preprocessing layer.'},
          {label:'04',title:'Simulator semantics are external',copy:'Gazebo properties are commonly carried through extension tags and converted into SDFormat semantics.'},
          {label:'05',title:'Hardware control is an extension layer',copy:'ros2_control adds hardware plugins plus state and command interfaces to URDF-oriented workflows.'},
          {label:'06',title:'No semantic embodiment graph',copy:'Capabilities, claim provenance, lifecycle, governance and model authority are outside normal URDF responsibility.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="CLOSED CHAINS" title="Physical mechanisms can exceed the simple URDF tree.">
        <p>
          Current ros2_control documentation describes URDF as the default ROS kinematic description and notes the serial-chain limitation apart from
          mimic-style relationships. Simulation integrations can add workarounds, but those behaviors belong to the consuming stack rather than one
          universally portable URDF interpretation.
        </p>
      </ConceptSection>

      <ConceptSection kicker="EXTENSIONS" title="A file ending in .urdf can contain semantics another parser will ignore.">
        <p>
          Gazebo extension tags, transmissions and ros2_control blocks are useful, but they create an interoperability question:
          does the next consumer understand, transform, ignore or reject them? A loss-aware pipeline should report that explicitly.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
