import { standardMetadata } from '@/lib/seo/provenance'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { WorkStatus } from '@/components/work-page'

export const metadata = standardMetadata({
  title: 'Research',
  description: 'OpenRGD research tracks and embodiment experiments: world models, RGD Physics, Chronograf, motion, SO-101, ethics and multi-robot coordination.',
  canonicalPath: '/research',
})

const foundational = [
  ['/research/methodology','Research Methodology','RESEARCH FOUNDATION','research','Question-first protocols, experimental controls, pre-registration and provenance for five planned studies.'],
  ['/research/theses','Research Thesis Register','RESEARCH','research','19 falsifiable theses; five evidence-bounded dossiers on Cognition, Life, memory, calibration and voice latency.'],
  ['/physical-ai','Physical AI','RESEARCH','research','Perception, reasoning, simulation, control and safety when actions become physical.'],
  ['/physical-ai-stack','Physical AI Stack','AUTHORITY','research','A vendor-neutral map from data and simulation through models, embodiment, safety and hardware.'],
  ['/embodied-ai','Embodied AI','RESEARCH','research','How morphology, sensing and action change the intelligence problem.'],
  ['/vla','Vision-Language-Action','AUTHORITY','research','How multimodal models become robot actions and what changes across embodiments.'],
  ['/research/world-models','World Models / WAM','RESEARCH','research','Observed, belief, predicted and desired state as a speculative planning layer above reflex control.'],
  ['/research/rgd-physics','RGD Physics','RESEARCH','research','Physical and causal semantics as a candidate substrate for prediction and feasibility checking.'],
  ['/research/robot-chronograf','Robot Chronograf','FORMALIZATION CANDIDATE','candidate','Clock domains, uncertainty and anchored temporal evidence for embodied systems.'],
  ['/research/ethics-decision-trace','Ethics & DecisionTrace','CANDIDATE','candidate','Structured policy outcomes, evidence bindings and forensic ethical artifacts.'],
]

const experiments = [
  ['/research/so101-embodiment-lab','SO-101 Embodiment Lab','EXPERIMENTAL','experimental','Operator-confirmed teleoperation and smoke replay, machine-readable evidence and repeatable lab protocol.'],
  ['/lerobot','LeRobot + SO-101','EVIDENCE REFERENCE','experimental','Calibration, teleoperation, dataset provenance, ACT / SmolVLA evaluation and latency methodology.'],
  ['/research/motion-quality','Motion Quality','EXPERIMENTAL','experimental','Smoothness, trajectories and motion-layer experimentation outside the canonical standard.'],
  ['/research/rgd-mesh','RGD Mesh','RESEARCH','research','Identity, pairing, permissions and state/intent exchange for multi-robot systems.'],
]

function Cards({items}:{items:string[][]}) {
  return (
    <div className="work-index-grid research-work-grid">
      {items.map(([href,title,status,tone,copy])=>(
        <a href={href} className="work-index-card" key={href}>
          <div><span>RESEARCH</span><WorkStatus label={status} tone={tone as 'research'|'candidate'|'experimental'} /></div>
          <h3>{title}</h3>
          <p>{copy}</p>
          <strong>Open →</strong>
        </a>
      ))}
    </div>
  )
}

export default function ResearchPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">RESEARCH</p>
        <h1>Embodiment, intelligence and interoperable physical systems.</h1>
        <p>
          This area separates frontier research and physical experiments from accepted architecture.
          Every track carries its maturity explicitly so exploratory work can be documented without being mistaken for a shipped standard.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">FOUNDATIONAL RESEARCH</p>
          <h2>Questions that may shape future OpenRGD contracts.</h2>
        </div>
        <Cards items={foundational}/>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">PHYSICAL + SYSTEM EXPERIMENTS</p>
          <h2>Pressure-test ideas against real bodies and implementation constraints.</h2>
        </div>
        <Cards items={experiments}/>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">PUBLIC NOTES</p>
          <h2>From research to an auditable engineering record.</h2>
        </div>
        <div className="content-card-grid">
          <a className="content-card" href="/robot-description"><h3>Robot Description</h3><p>The semantic gap between source formats and embodied AI context.</p></a>
          <a className="content-card" href="/interoperability"><h3>Interoperability</h3><p>Explicit ownership across descriptions, semantic context, middleware and runtimes.</p></a>
          <a className="content-card" href="/blog"><h3>Engineering Notes</h3><p>Development updates, research notes and specification changes.</p></a>
          <a className="content-card" href="/research/theses"><h3>Thesis Register</h3><p>Hypotheses, counter-hypotheses, falsification and what our code or physical experiments actually demonstrate.</p></a>
          <a className="content-card" href="/research/methodology"><h3>Research Methodology</h3><p>Five research questions and evidence protocols: from study design to repeatable data and independently checkable results.</p></a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
