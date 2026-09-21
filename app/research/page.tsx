import type { Metadata } from 'next'
import SiteHeader from '@/components/site-header'
import SiteFooter from '@/components/site-footer'

export const metadata: Metadata = {
  title: 'Research',
  description: 'OpenRGD research topics: Physical AI, Embodied AI, robot description and engineering notes.',
  alternates: { canonical: '/research' },
}

const topics = [
  {
    href: '/physical-ai',
    eyebrow: 'PHYSICAL AI',
    title: 'Intelligence in the physical world',
    copy: 'Perception, reasoning, simulation, control and safety when model outputs become physical actions.',
  },
  {
    href: '/embodied-ai',
    eyebrow: 'EMBODIED AI',
    title: 'The body as part of the intelligence problem',
    copy: 'How morphology, sensing, actuation and environment shape perception-action loops and generalization.',
  },
  {
    href: '/robot-description',
    eyebrow: 'ROBOT DESCRIPTION',
    title: 'From structure to machine-readable embodiment',
    copy: 'What existing robot descriptions prove and what semantic context an AI system may still require.',
  },
  {
    href: '/interoperability',
    eyebrow: 'INTEROPERABILITY',
    title: 'Explicit boundaries between layers',
    copy: 'Description formats, semantic grounding, middleware, runtimes and hardware ownership.',
  },
  {
    href: '/blog',
    eyebrow: 'ENGINEERING NOTES',
    title: 'Development and specification updates',
    copy: 'Research notes, implementation decisions, specification changes and technical development logs.',
  },
]

export default function ResearchPage() {
  return (
    <main className="content-page">
      <SiteHeader />

      <section className="content-hero shell">
        <p className="kicker">RESEARCH</p>
        <h1>Embodiment, intelligence and interoperable physical systems.</h1>
        <p>
          Research on OpenRGD.org connects the standard to the broader problems it is intended to support:
          Physical AI, Embodied AI, robot representations and the interfaces between cognition and machines.
        </p>
      </section>

      <section className="shell content-section">
        <div className="research-grid">
          {topics.map((topic,index) => (
            <a className="research-card" href={topic.href} key={topic.href}>
              <div className="research-card-top">
                <span>{String(index + 1).padStart(2,'0')}</span>
                <i>{topic.eyebrow}</i>
              </div>
              <h2>{topic.title}</h2>
              <p>{topic.copy}</p>
              <strong>Explore →</strong>
            </a>
          ))}
        </div>
      </section>

      <SiteFooter />
    </main>
  )
}
