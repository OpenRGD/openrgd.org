import DomainExplorer from '@/components/domain-explorer'
import SharedKnowledge from '@/components/shared-knowledge'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

const domains = [
  { code: '00', name: 'Core', copy: 'Coordination, manifests and kernel metadata.', maturity: 'foundation' },
  { code: '01', name: 'Foundation', copy: 'Physical body, hardware reality and structural evidence.', maturity: 'stable' },
  { code: '02', name: 'Operation', copy: 'Runtime constraints, safety and physiological operation.', maturity: 'stable' },
  { code: '03', name: 'Agency', copy: 'Capabilities, world model and action interfaces.', maturity: 'experimental' },
  { code: '04', name: 'Volition', copy: 'Values, alignment and decision governance.', maturity: 'experimental' },
  { code: '05', name: 'Evolution', copy: 'Lifecycle, wear, adaptation and continuity.', maturity: 'proposal' },
  { code: '06', name: 'Ether', copy: 'Collective, social and inter-agent protocols.', maturity: 'proposal' },
] as const

const boundary = [
  'CognitionProposal',
  'ActionIntent',
  'Somatic Translator',
  'CapabilityPlan',
  'Operation Safety Gate',
  'DecisionTrace',
  'Body Adapter',
  'Hardware',
]

const status = [
  ['Standard bundle', '0.2.0', 'DRAFT'],
  ['Python toolchain', '0.1.1', 'ALPHA'],
  ['Agent contracts', '0.1.0', 'CANDIDATE'],
]

const terminalText =
  '$ rgd init Robot\n' +
  '$ cd Robot\n\n' +
  '$ rgd import robot.urdf --out partial-robot\n' +
  '✓ foundation evidence extracted\n\n' +
  '$ rgd hash\n' +
  'OPENRGD_SOURCE_TREE_SHA256_V1\n' +
  '9d0f…a71c\n\n' +
  '$ rgd check --output json\n' +
  '{ "integrity": "verified" }\n\n' +
  '$ rgd boot --output json\n' +
  '{ "execution_authorized": false }'

export default async function HomePage() {
  return (
    <main>
      <SiteHeader intro />

      <section className="hero shell">
        <div className="hero-copy">
          <div className="eyebrow intro intro-2"><span className="pulse" />ROBOT GRAPH DEFINITION</div>
          <h1 className="intro intro-3">A machine-readable<span>standard for cognitive embodiment.</span></h1>
          <p className="hero-lead intro intro-4">
            OpenRGD gives AI systems a structured way to understand a robot body,
            its operational limits, capabilities, lifecycle and relationships with other agents.
          </p>
          <div className="hero-actions intro intro-5">
            <a className="button primary" href="https://github.com/OpenRGD/openrgd/tree/main/spec" target="_blank" rel="noreferrer">Read the specification <span>↗</span></a>
            <a className="button ghost" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Inspect the source</a>
          </div>
          <div className="principles intro intro-6">
            <span>OPEN STANDARD</span><span>MACHINE READABLE</span><span>NON-ACTUATING BY DESIGN</span>
          </div>
        </div>

        <DomainExplorer />
      </section>

      <section className="status-strip" data-reveal>
        <div className="shell status-grid">
          {status.map(([label, version, state]) => (
            <div className="status-item" key={label}><span>{label}</span><strong>{version}</strong><em>{state}</em></div>
          ))}
        </div>
      </section>

      <section className="section shell" id="architecture">
        <div className="section-heading" data-reveal>
          <div><p className="kicker">WHY OPENRGD</p><h2>The missing semantic layer between AI and robots.</h2></div>
          <p>Robot description formats are excellent at describing geometry, joints and simulation state. AI systems need more: explicit capability, operational boundaries, provenance and lifecycle context.</p>
        </div>
        <div className="feature-grid">
          <article className="feature" data-reveal><span className="feature-index">01</span><h3>Beyond geometry</h3><p>Describe what a body is, what it can do, what constrains it and where that knowledge came from.</p></article>
          <article className="feature" data-reveal><span className="feature-index">02</span><h3>Grounded AI context</h3><p>Compile robot knowledge into deterministic, machine-readable context without silently authorizing physical execution.</p></article>
          <article className="feature" data-reveal><span className="feature-index">03</span><h3>Interoperability boundary</h3><p>Keep semantic description, middleware export and embodied runtime responsibilities explicit and independently verifiable.</p></article>
        </div>
      </section>

      <section className="section shell" id="domains">
        <div className="section-heading compact" data-reveal>
          <div><p className="kicker">CANONICAL DOMAIN MODEL</p><h2>One robot. Seven semantic domains.</h2></div>
          <p>Each domain carries its own authority and maturity instead of hiding assumptions inside one monolithic robot description.</p>
        </div>
        <div className="domain-stack" data-reveal>
          {domains.map((domain) => (
            <article className="domain" key={domain.code}>
              <div className="domain-code">{domain.code}</div>
              <div className="domain-body"><h3>{domain.name}</h3><p>{domain.copy}</p></div>
              <span className={'maturity ' + domain.maturity}>{domain.maturity}</span>
            </article>
          ))}
        </div>
      </section>


      <section className="section shell technology-context" id="technology-context">
        <div className="section-heading compact" data-reveal>
          <div>
            <p className="kicker">TECHNOLOGY CONTEXT</p>
            <h2>OpenRGD sits inside a larger embodied systems stack.</h2>
          </div>
          <p>
            These concepts explain why a machine-readable embodiment layer matters and where OpenRGD stops.
          </p>
        </div>

        <div className="technology-context-grid" data-reveal>
          {[
            ['/physical-ai', 'PHYSICAL AI', 'From perception and simulation to real-world action.'],
            ['/embodied-ai', 'EMBODIED AI', 'Why body and environment change the intelligence problem.'],
            ['/robot-description', 'ROBOT DESCRIPTION', 'From links and joints to semantic embodiment context.'],
            ['/interoperability', 'INTEROPERABILITY', 'Explicit contracts between descriptions, middleware, runtime and hardware.'],
          ].map(([href, title, copy]) => (
            <a className="technology-context-card" href={href} key={href}>
              <span>{title}</span>
              <p>{copy}</p>
              <strong>Explore →</strong>
            </a>
          ))}
        </div>
      </section>


      <section className="section shell formats-home">
        <div className="section-heading compact" data-reveal>
          <div>
            <p className="kicker">DESCRIPTION FORMATS</p>
            <h2>One robot can exist across several description layers.</h2>
          </div>
          <p>
            URDF, USD, SDF and RGD overlap on physical facts, but each has a different center of responsibility.
          </p>
        </div>
        <div className="formats-home-grid" data-reveal>
          {[
            ['/urdf', 'URDF', 'Robot structure'],
            ['/usd', 'USD', 'Composable scenes'],
            ['/sdf', 'SDF', 'Simulation worlds'],
            ['/rgd', 'RGD', 'Semantic embodiment'],
          ].map(([href, title, copy]) => (
            <a href={href} className="formats-home-card" key={href}>
              <span>{title}</span>
              <strong>{copy}</strong>
            </a>
          ))}
        </div>
        <div className="formats-home-link">
          <a href="/robot-description-formats">Compare all formats →</a>
        </div>
      </section>

      <SharedKnowledge />


      <section className="section ecosystem-directory" id="ecosystem">
        <div className="shell">
          <div className="section-heading compact" data-reveal>
            <div>
              <p className="kicker">OPENRGD ECOSYSTEM</p>
              <h2>One standard. Multiple specialized surfaces.</h2>
            </div>
            <p>
              OpenRGD.org is the public knowledge and specification hub. Dedicated tools and services
              live on focused subdomains so each surface can evolve independently.
            </p>
          </div>

          <div className="subdomain-grid" data-reveal>
            {[
              ['docs', 'Documentation', 'Reference material, guides and technical documentation.'],
              ['forge', 'Forge', 'Authoring and build-oriented tooling around OpenRGD artifacts.'],
              ['sim', 'Simulation', 'Simulation-oriented tools and experiment surfaces.'],
              ['viz', 'Visualization', 'Graph, structure and robot-state visualization.'],
              ['api', 'API', 'Programmatic access and machine-facing interfaces.'],
              ['civilization', 'Civilization', 'Collective, social and multi-agent experimentation.'],
              ['studio', 'Studio', 'Authenticated engineering environment for OpenRGD projects.'],
              ['vulnerabilities', 'Vulnerabilities', 'Security and vulnerability reporting surface.'],
              ['plugins', 'Plugins', 'Extension and integration ecosystem.'],
              ['physics', 'Physics', 'Physics-oriented models, tooling and experiments.'],
              ['market', 'Market', 'Ecosystem discovery and future distribution surface.'],
            ].map(([subdomain, title, description]) => (
              <a
                key={subdomain}
                className="subdomain-card"
                href={'https://' + subdomain + '.openrgd.org'}
                target="_blank"
                rel="noreferrer"
              >
                <div className="subdomain-card-top">
                  <span>{subdomain}.openrgd.org</span>
                  <i>↗</i>
                </div>
                <h3>{title}</h3>
                <p>{description}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell workflow" id="workflow">
        <div className="terminal" data-reveal>
          <div className="terminal-top"><span>openrgd / terminal</span><span className="terminal-lights">● ● ●</span></div>
          <pre><code>{terminalText}</code></pre>
        </div>
        <div className="workflow-copy" data-reveal>
          <p className="kicker">EVIDENCE → CONTEXT</p>
          <h2>Import what the source proves. Invent nothing.</h2>
          <p>OpenRGD can extract source-supported body evidence from URDF and USDA, preserve provenance and compile a deterministic non-actuating grounding context.</p>
          <div className="mini-flow">
            {['URDF / USD','IMPORT','RGD GRAPH','VERIFY','COMPILE'].map((item,index)=>(
              <div className="mini-flow-row" key={item}><span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong>{index<4?<i>→</i>:null}</div>
            ))}
          </div>
        </div>
      </section>

      <section className="section boundary-section" id="boundary">
        <div className="shell">
          <div className="section-heading" data-reveal>
            <div><p className="kicker">RUNTIME BOUNDARY</p><h2>Semantic intelligence stops before physical authority begins.</h2></div>
            <p>OpenRGD deliberately separates cognitive proposals from actuation. Runtime safety and body control remain explicit downstream responsibilities.</p>
          </div>
          <div className="boundary-flow" data-reveal>
            {boundary.map((item,index)=>(
              <div className="boundary-step" key={item}>
                <span>{String(index+1).padStart(2,'0')}</span><strong>{item}</strong>
                {index===0?<em>COGNITION</em>:null}{index===boundary.length-1?<em>PHYSICAL</em>:null}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="section-heading compact" data-reveal>
          <div><p className="kicker">OPEN ECOSYSTEM</p><h2>Built to connect, not to replace everything.</h2></div>
          <p>OpenRGD is a semantic standard and toolchain root. It can coexist with robot description formats, middleware and physical runtimes.</p>
        </div>
        <div className="ecosystem-grid" data-reveal>
          <article><span>01</span><h3>Robot descriptions</h3><p>URDF and supported OpenUSD evidence can enter the graph without losing provenance.</p></article>
          <article><span>02</span><h3>Static exports</h3><p>Deterministic outputs can target middleware configuration without crossing the actuation boundary.</p></article>
          <article><span>03</span><h3>Contracts</h3><p>Cross-component interfaces expose maturity, provenance and explicit responsibility.</p></article>
          <article><span>04</span><h3>Shared knowledge</h3><p>Canonical robot facts can be reused across documentation, research and ecosystem tooling.</p></article>
        </div>
      </section>

      <section className="cta shell" data-reveal>
        <p className="kicker">OPEN SOURCE · MIT LICENSE</p>
        <h2>Inspect the standard. Challenge the assumptions. Build on the graph.</h2>
        <div className="hero-actions centered">
          <a className="button primary" href="https://github.com/OpenRGD/openrgd" target="_blank" rel="noreferrer">Open the repository ↗</a>
          <a className="button ghost" href="https://github.com/OpenRGD/openrgd/blob/main/CONTRIBUTING.md" target="_blank" rel="noreferrer">Contribution guide</a>
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
