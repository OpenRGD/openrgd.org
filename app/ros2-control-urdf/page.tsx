import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'ROS 2 CONTROL REFERENCE',
  lastVerified: '16 Oct 2026',
  lastVerifiedIso: '2026-10-16',
  sourceVersion: 'ros2_control Kilted / Rolling documentation',
  evidenceBoundary: 'A ros2_control description declares hardware interfaces; it does not prove the device is connected, calibrated or safe to command.',
  pageUrl: 'https://openrgd.org/ros2-control-urdf',
  canonicalSource: 'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/hardware_interface_types_userdoc.html',
}

export const metadata: Metadata = referenceMetadata({
  title: 'ros2_control URDF',
  description: 'How ros2_control uses URDF for hardware plugins, state and command interfaces, sensors, GPIOs and transmissions — and where description stops before physical execution.',
  canonicalPath: '/ros2-control-urdf',
  record: citationRecord,
})

export default function Ros2ControlUrdfPage() {
  return (
    <ConceptPage
      eyebrow="ROS2_CONTROL + URDF"
      title="A ros2_control block describes an interface contract; the hardware plugin still owns physical I/O."
      lead="ros2_control extends robot-description workflows with hardware components, plugins, command interfaces, state interfaces, sensors and GPIOs. URDF content is parsed into HardwareInfo while a loaded hardware component performs actual read/write behavior."
      citationRecord={citationRecord}
      sources={[
        {label:'ros2_control — hardware interface types',href:'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/hardware_interface_types_userdoc.html'},
        {label:'ros2_control — hardware components',href:'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/hardware_components_userdoc.html'},
        {label:'ros2_control — joints and transmissions',href:'https://control.ros.org/master/doc/ros2_control/hardware_interface/doc/joints_userdoc.html'},
        {label:'OpenRGD — ROS 2 export',href:'/docs/export-ros2'},
      ]}
      related={[
        {href:'/docs/export-ros2',title:'OpenRGD ROS 2 Export',copy:'See how OpenRGD emits static configuration without actuating hardware.'},
        {href:'/urdf-limitations',title:'URDF Limitations',copy:'Separate portable URDF core from control extensions.'},
        {href:'/architecture/runtime-boundary',title:'Runtime Boundary',copy:'Follow authority from semantic context toward hardware.'},
      ]}
    >
      <ConceptSection kicker="DESCRIPTION" title="ros2_control turns robot-description metadata into a typed hardware contract.">
        <ConceptGrid items={[
          {label:'01',title:'Hardware plugin',copy:'The hardware element identifies the plugin class that implements the component.'},
          {label:'02',title:'Command interfaces',copy:'Declare values controllers may command, such as position, velocity or effort.'},
          {label:'03',title:'State interfaces',copy:'Declare values hardware exposes back to controllers and broadcasters.'},
          {label:'04',title:'Sensors',copy:'Group read-only state interfaces for hardware sensors.'},
          {label:'05',title:'GPIO',copy:'Represent additional digital or analog hardware interfaces.'},
          {label:'06',title:'Transmissions',copy:'Describe actuator-to-joint mappings when the hardware component uses them.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="RUNTIME" title="The XML is configuration; the plugin performs read and write.">
        <ConceptFlow items={['URDF + ros2_control','HardwareInfo','Hardware plugin','read()','Controllers','write()','Physical device']}/>
        <p>Official ros2_control tutorials describe a real-time read/update/write loop. Parsing a hardware definition is not the same event as commanding hardware.</p>
      </ConceptSection>
    </ConceptPage>
  )
}
