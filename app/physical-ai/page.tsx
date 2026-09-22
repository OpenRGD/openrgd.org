import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptFlow, ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'
import { getCatalogEntry } from '@/lib/cms/catalog'

export const dynamic = 'force-dynamic'

const citationRecord: CitationRecordData = {
  maturity: 'AUTHORITY EXPLAINER',
  lastVerified: '22 Sep 2026',
  lastVerifiedIso: '2026-09-22',
  sourceVersion: 'Current NVIDIA Physical AI materials + OpenRGD architecture',
  evidenceBoundary: 'Vendor-neutral concept explainer; OpenRGD does not claim ownership of the Physical AI category or replace models, simulators or controllers.',
  pageUrl: 'https://openrgd.org/physical-ai',
  canonicalSource: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md',
}

export const metadata: Metadata = referenceMetadata({
  title: 'Physical AI',
  description: 'Physical AI connects perception, reasoning, simulation, control and safety so autonomous machines can act in the physical world.',
  canonicalPath: '/physical-ai',
  record: citationRecord,
})

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'TechArticle',
  headline: 'Physical AI — From digital intelligence to physical action',
  mainEntityOfPage: 'https://openrgd.org/physical-ai',
  inLanguage: 'en',
  publisher: { '@type': 'Organization', name: 'OpenRGD', url: 'https://openrgd.org' },
}

export default async function PhysicalAIPage() {
  const entry = await getCatalogEntry('technology', 'physical-ai').catch(() => null)

  return (
    <ConceptPage
      eyebrow="PHYSICAL AI"
      title="Intelligence becomes physical when actions have consequences."
      lead={entry?.summary || 'AI systems that perceive, reason and act in the physical world through autonomous machines and robots.'}
      jsonLd={jsonLd}
      citationRecord={citationRecord}
      sources={[
        { label: 'NVIDIA — What is Physical AI?', href: 'https://www.nvidia.com/en-gb/glossary/generative-physical-ai/' },
        { label: 'NVIDIA Robotics Platform', href: 'https://www.nvidia.com/en-us/industries/robotics/' },
        { label: 'OpenRGD — Canonical architecture', href: 'https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md' },
      ]}
      related={[
        { href: '/physical-ai-stack', title: 'Physical AI Stack', copy: 'Map training, simulation, VLA, embodiment, safety, runtime and hardware responsibilities.' },
        { href: '/vla', title: 'Vision-Language-Action Models', copy: 'Understand the model layer that connects multimodal context to physical action.' },
        { href: '/robot-safety-architecture', title: 'Robot Safety Architecture', copy: 'See why safe physical execution spans more than the AI model.' },
      ]}
    >
      <ConceptSection kicker="FROM MODEL TO MACHINE" title="The loop is no longer purely informational.">
        <p>
          In a digital-only system, a wrong prediction may produce a bad answer. In a physical system,
          a wrong prediction can produce a wrong motion. Physical AI therefore joins perception,
          spatial understanding, reasoning, planning, control and safety into one embodied loop.
        </p>
        <p>
          NVIDIA describes Physical AI as the ability of autonomous systems to perceive, understand,
          reason and perform actions in the physical world. Simulation and synthetic data become important
          because a robot cannot safely learn every edge case by trial and error on real hardware.
        </p>
      </ConceptSection>

      <ConceptSection kicker="SYSTEM STACK" title="Physical AI is not one model.">
        <ConceptGrid
          items={[
            { label: '01', title: 'Perception', copy: 'Cameras, depth, LiDAR, force, proprioception and other sensor streams.' },
            { label: '02', title: 'World representation', copy: 'Spatial state, objects, topology, uncertainty and modelled dynamics.' },
            { label: '03', title: 'Reasoning and policy', copy: 'Task decomposition, VLA policies, planners and learned action strategies.' },
            { label: '04', title: 'Simulation', copy: 'Physics-based environments for training, validation and synthetic evidence.' },
            { label: '05', title: 'Control', copy: 'Trajectories, force, locomotion and low-level execution interfaces.' },
            { label: '06', title: 'Safety', copy: 'Operational envelopes, deterministic limits, fallback and execution gating.' },
          ]}
        />
      </ConceptSection>

      <ConceptSection kicker="WHY OPENRGD" title="A policy needs to know what body it is acting through.">
        <p>
          A general AI model can reason about a task while still lacking a trustworthy, machine-readable
          representation of the specific robot body in front of it: joints, limits, sensors, capabilities,
          operational constraints, provenance and lifecycle state.
        </p>
        <p>
          OpenRGD targets this grounding problem. It does not replace the model, simulator, controller or runtime.
          It provides a semantic description layer that can be validated before information flows toward physical execution.
        </p>
        <ConceptFlow items={['Perception / model', 'ActionIntent', 'OpenRGD grounding', 'Safety boundary', 'Body Adapter', 'Hardware']} />
      </ConceptSection>

      <ConceptSection kicker="BOUNDARY" title="Knowing the body is not permission to move it.">
        <p>
          OpenRGD deliberately separates semantic context from actuation authority. The canonical toolchain is non-actuating,
          and a valid profile does not prove physical compatibility or operational safety. Physical execution remains an explicit downstream responsibility.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
