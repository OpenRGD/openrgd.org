import type { Metadata } from 'next'
import { referenceMetadata, type CitationRecordData } from '@/lib/seo/provenance'
import { ConceptGrid, ConceptPage, ConceptSection } from '@/components/concept-page'

const citationRecord: CitationRecordData = {
  maturity: 'VLA VS WORLD MODEL CONCEPT REFERENCE',
  lastVerified: '27 Sep 2026',
  lastVerifiedIso: '2026-09-27',
  sourceVersion: 'GR00T N1.5 + Physical Intelligence + OpenRGD world-model research',
  evidenceBoundary: 'Policy and world-model roles can be combined inside one architecture; this page distinguishes functional responsibilities, not mutually exclusive product categories.',
  pageUrl: 'https://openrgd.org/vla/vla-vs-world-model',
}

export const metadata: Metadata = referenceMetadata({
  title: 'VLA vs World Model',
  description: 'VLA vs world model: how Vision-Language-Action policies differ from predictive world models, how the two approaches can be combined, and where each fits in a robot architecture.',
  canonicalPath: '/vla/vla-vs-world-model',
  record: citationRecord,
})

export default function VlaVsWorldModelPage() {
  return (
    <ConceptPage
      eyebrow="VLA VS WORLD MODEL"
      title="A VLA chooses actions from context. A world model predicts how the world may change."
      lead="Vision-Language-Action policies and world models solve related but different problems: one maps embodied context toward action, while the other models state transitions or future consequences. Modern robot systems can train both capabilities together."
      citationRecord={citationRecord}
      sources={[
        {label:'NVIDIA Research — GR00T N1.5',href:'https://research.nvidia.com/labs/gear/gr00t-n1_5/'},
        {label:'Physical Intelligence — π0',href:'https://www.physicalintelligence.company/download/pi0.pdf'},
        {label:'OpenRGD — World Models research',href:'https://openrgd.org/research/world-models'},
        {label:'OpenRGD — RGD Physics research',href:'https://openrgd.org/research/rgd-physics'},
      ]}
      related={[
        {href:'/vla',title:'Vision-Language-Action Models',copy:'Return to the VLA pillar.'},
        {href:'/research/world-models',title:'World Models',copy:'Explore OpenRGD research on predictive embodied models.'},
        {href:'/research/rgd-physics',title:'RGD Physics',copy:'See the proposed causal and physics representation boundary.'},
      ]}
    >
      <ConceptSection kicker="SHORT ANSWER" title="Policy asks “what should I do?” World model asks “what happens if this occurs?”">
        <p>
          A VLA policy conditions on observations, language and often robot state to generate actions.
          A world model represents or predicts transitions: how the environment and robot state may evolve
          over time, potentially under candidate actions.
        </p>
      </ConceptSection>

      <ConceptSection kicker="FUNCTIONAL DIFFERENCE" title="The two roles optimize different outputs.">
        <ConceptGrid items={[
          {label:'VLA',title:'Primary output',copy:'Robot action, action token, action vector or action chunk.'},
          {label:'VLA',title:'Primary question',copy:'Given this observation, instruction and state, what action should the policy produce?'},
          {label:'VLA',title:'Typical training signal',copy:'Robot demonstrations and action-conditioned trajectory data.'},
          {label:'WORLD MODEL',title:'Primary output',copy:'Predicted next state, future latent representation, video, dynamics or transition estimate.'},
          {label:'WORLD MODEL',title:'Primary question',copy:'Given the current state and possibly an action, how is the world likely to evolve?'},
          {label:'WORLD MODEL',title:'Typical training signal',copy:'Temporal transitions, future observations, dynamics or predictive consistency.'},
        ]}/>
      </ConceptSection>

      <ConceptSection kicker="WHY COMBINE THEM" title="A policy can benefit from a model of consequences.">
        <p>
          Long-horizon robot behavior benefits from predicting whether an action will make progress, cause a collision,
          lose contact or move the scene into a harder state. A world model can provide that predictive structure while
          a policy remains responsible for selecting or generating the action.
        </p>
      </ConceptSection>

      <ConceptSection kicker="CURRENT CONVERGENCE" title="The boundary is already becoming architectural rather than model-level.">
        <p>
          NVIDIA GR00T N1.5 is a concrete example: it keeps flow-matching policy learning while adding Future Latent
          Representation Alignment, a predictive objective that aligns current representations with future target embeddings.
          The result is still a robot policy, but it learns an additional world-model-like representation of future state.
        </p>
      </ConceptSection>

      <ConceptSection kicker="WORLD ACTION MODELS" title="Some research increasingly treats prediction and action as one coupled problem.">
        <p>
          The field is moving toward architectures where learned dynamics, future prediction and policy generation
          share representations. That does not erase the conceptual distinction: prediction tells a system what may
          happen, while an action policy determines what the robot will attempt.
        </p>
      </ConceptSection>

      <ConceptSection kicker="OPENRGD VIEW" title="OpenRGD keeps the semantic roles separable even when one neural model implements both.">
        <p>
          OpenRGD research treats world-model state, physics context, cognition proposals and execution as distinct
          semantic responsibilities. A future implementation could use one foundation model for several of those jobs,
          but the graph can still record which evidence is predictive, which output is an intended action and which
          component owns physical execution.
        </p>
      </ConceptSection>
    </ConceptPage>
  )
}
