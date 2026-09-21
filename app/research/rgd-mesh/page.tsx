import type { Metadata } from 'next'
import WorkPage, { WorkGrid, WorkSection } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'RGD Mesh',
  description: 'OpenRGD research into multi-robot identity, pairing, permissions, state and intent exchange.',
  alternates: { canonical: '/research/rgd-mesh' },
}

export default function RgdMeshPage() {
  return (
    <WorkPage
      eyebrow="RESEARCH · MULTI-ROBOT"
      title="A robot network should exchange intent without dissolving identity."
      lead="RGD Mesh research explores how embodied agents could pair, authorize information exchange and share selected state or intent while preserving robot identity and explicit permissions."
      status="RESEARCH"
      tone="research"
      boundary="OpenRGD/rgd-mesh is currently a reserved empty repository. The concepts documented here are research directions, not a released protocol or working mesh implementation."
      sources={[
        {label:'Reserved rgd-mesh repository',href:'https://github.com/OpenRGD/rgd-mesh'},
        {label:'Ether domain in canonical structure',href:'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md'},
      ]}
    >
      <WorkSection kicker="RESEARCH QUESTIONS" title="What should one robot be allowed to know about another?">
        <WorkGrid items={[
          {label:'01',title:'Identity',copy:'Each robot needs a stable identity independent from a transient network session.'},
          {label:'02',title:'Pairing',copy:'Relationships should be established explicitly rather than inferred from network reachability.'},
          {label:'03',title:'Permissions',copy:'Shared values, state and capabilities should be permissioned at a granular level.'},
          {label:'04',title:'State + intent',copy:'Dynamic state and future intent may both matter for safe multi-agent coordination.'},
          {label:'05',title:'Time alignment',copy:'Robot Chronograf can provide a common language for temporal uncertainty and event ordering.'},
          {label:'06',title:'Spatial alignment',copy:'Agents also need an explicit way to relate their local coordinate frames and shared space.'},
        ]}/>
      </WorkSection>

      <WorkSection kicker="ETHER" title="Collective behavior belongs above individual embodiment.">
        <p>
          The canonical Ether domain reserves space for inter-agent coordination, shared computation and collective protocols.
          RGD Mesh research asks what a minimal, inspectable transport and relationship model could look like without making the network itself the source of robot identity.
        </p>
      </WorkSection>
    </WorkPage>
  )
}
