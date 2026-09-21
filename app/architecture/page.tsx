import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'
import { WorkStatus } from '@/components/work-page'

export const metadata: Metadata = {
  title: 'Architecture',
  description: 'OpenRGD architecture: authority model, semantic domains, runtime boundaries, agent contracts, Synapses and temporal ownership.',
  alternates: { canonical: '/architecture' },
}

const domains = [
  ['00', 'Core', 'Coordination, manifests and kernel metadata.'],
  ['01', 'Foundation', 'Physical body, hardware reality and structural evidence.'],
  ['02', 'Operation', 'Operational envelopes, runtime constraints and safety.'],
  ['03', 'Agency', 'Capabilities, world model and action semantics.'],
  ['04', 'Volition', 'Values, alignment and decision governance.'],
  ['05', 'Evolution', 'Lifecycle, wear, adaptation and continuity.'],
  ['06', 'Ether', 'Collective, social and inter-agent protocols.'],
]

const boundary = ['CognitionProposal','ActionIntent','Somatic Translator','CapabilityPlan','Operation Safety Gate','DecisionTrace','Body Adapter','Hardware']

const modules = [
  ['/architecture/runtime-boundary','Runtime Boundary','ADOPTED','adopted','The canonical repository stops before physical embodied execution.'],
  ['/architecture/agent-contracts','Agent Contracts','CANDIDATE','candidate','Versioned interfaces between cognition, somatic translation, Chronons, memory and DecisionTrace.'],
  ['/architecture/somatic-translation','Somatic Translation','CANDIDATE','candidate','Hardware-agnostic translation from approved intent to typed capability plans.'],
  ['/architecture/synapses','Synapses','IMPLEMENTED','implemented','Deterministic static interoperability exports; ROS 2 is the active reference target.'],
  ['/architecture/time-memory','Time & Memory','CANDIDATE','candidate','Chronograf time, Chronon history and memory-as-projection ownership boundaries.'],
]

export default function ArchitecturePage() {
  return (
    <main className="content-page">
      <SiteHeader />
      <section className="content-hero shell">
        <p className="kicker">ARCHITECTURE</p>
        <h1>Authority, semantics and physical boundaries.</h1>
        <p>
          OpenRGD separates canonical source, derived artifacts, cognitive intent and physical execution so that each layer has explicit ownership.
        </p>
      </section>

      <section className="shell content-section">
        <div className="content-section-head">
          <p className="kicker">ARCHITECTURE MAP</p>
          <h2>Adopted boundaries and candidate contracts.</h2>
        </div>
        <div className="work-index-grid">
          {modules.map(([href,title,status,tone,copy])=>(
            <a href={href} className="work-index-card" key={href}>
              <div><span>ARCHITECTURE</span><WorkStatus label={status} tone={tone as 'adopted'|'implemented'|'candidate'} /></div>
              <h3>{title}</h3>
              <p>{copy}</p>
              <strong>Open →</strong>
            </a>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">AUTHORITY MODEL</p><h2>One source of truth. Derived artifacts stay derived.</h2></div>
        <div className="authority-stack">
          {[
            ['01', 'spec/manifest.jsonc', 'Standard version, integrity profile and domain maturity.'],
            ['02', 'spec/', 'Human-readable normative modular source.'],
            ['03', 'contracts/', 'Cross-component interfaces within declared maturity.'],
            ['04', 'standard/', 'Tracked strict-JSON leaf mirror — never independent authority.'],
            ['05', 'seeds/default/spec/', 'Derived default profile.'],
            ['06', 'generated outputs', 'Bundles, exports and robot workspaces remain derived products.'],
          ].map(([n,title,copy]) => (
            <div className="authority-row" key={n}><span>{n}</span><strong>{title}</strong><p>{copy}</p></div>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">SEVEN DOMAINS</p><h2>One robot, decomposed into explicit semantic responsibility.</h2></div>
        <div className="domain-stack">
          {domains.map(([code,name,copy]) => (
            <article className="domain" key={code}>
              <div className="domain-code">{code}</div>
              <div className="domain-body"><h3>{name}</h3><p>{copy}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="shell content-section">
        <div className="content-section-head"><p className="kicker">COGNITIVE → PHYSICAL</p><h2>Meaning can flow downstream without silently granting authority.</h2></div>
        <div className="architecture-flow">
          {boundary.map((item,index)=>(
            <div className="architecture-flow-step" key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong></div>
          ))}
        </div>
        <p className="content-note">
          ActionIntent is model-agnostic. CapabilityPlan remains hardware-agnostic. The Body Adapter owns device-level execution. DecisionTrace stores structured evidence, not private reasoning.
        </p>
      </section>

      <section className="shell content-cta">
        <p className="kicker">SOURCE</p>
        <h2>The architecture is defined by the repository, not by this website.</h2>
        <div className="content-actions">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd/blob/main/STRUCTURE.md" target="_blank" rel="noreferrer">Read STRUCTURE.md ↗</a>
          <a className="button ghost" href="/spec">Specification →</a>
        </div>
      </section>
      <SiteFooter />
    </main>
  )
}
