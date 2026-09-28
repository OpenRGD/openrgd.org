'use client'

import { useMemo, useRef, useState } from 'react'

type DomainKey = 'core' | 'foundation' | 'operation' | 'agency' | 'volition' | 'evolution' | 'ether'

const domains: Array<{
  key: DomainKey
  code: string
  label: string
  maturity: string
  tone: string
  summary: string
  modules: string[]
}> = [
  {
    key: 'core',
    code: '00',
    label: 'Core',
    maturity: 'coordination',
    tone: 'neutral',
    summary: 'Coordination, manifests and kernel metadata that bind the robot graph into a coherent source tree.',
    modules: ['kernel', 'manifest', 'identity', 'integrity'],
  },
  {
    key: 'foundation',
    code: '01',
    label: 'Foundation',
    maturity: 'stable',
    tone: 'stable',
    summary: 'Physical body and hardware reality: structure, joints, inertials, actuation evidence and source provenance.',
    modules: ['description', 'actuation', 'sensors', 'hardware'],
  },
  {
    key: 'operation',
    code: '02',
    label: 'Operation',
    maturity: 'stable',
    tone: 'stable',
    summary: 'Runtime constraints and physiological operation: limits, safety boundaries and operating conditions.',
    modules: ['limits', 'safety', 'state', 'constraints'],
  },
  {
    key: 'agency',
    code: '03',
    label: 'Agency',
    maturity: 'experimental',
    tone: 'experimental',
    summary: 'Capabilities, action interfaces and world-model context used to describe what the embodied system can do.',
    modules: ['capabilities', 'actions', 'world model', 'skills'],
  },
  {
    key: 'volition',
    code: '04',
    label: 'Volition',
    maturity: 'experimental',
    tone: 'experimental',
    summary: 'Values, alignment and decision-governance context for machine-readable behavioral boundaries.',
    modules: ['values', 'governance', 'alignment', 'decision trace'],
  },
  {
    key: 'evolution',
    code: '05',
    label: 'Evolution',
    maturity: 'proposal',
    tone: 'proposal',
    summary: 'Lifecycle, wear, adaptation and continuity across changes to the robot body and its learned state.',
    modules: ['lifecycle', 'wear', 'adaptation', 'continuity'],
  },
  {
    key: 'ether',
    code: '06',
    label: 'Ether',
    maturity: 'proposal',
    tone: 'proposal',
    summary: 'Collective, social and inter-agent protocols for robots operating as part of larger systems.',
    modules: ['mesh', 'pairing', 'time', 'coordination'],
  },
]

export default function DomainExplorer() {
  const [activeKey, setActiveKey] = useState<DomainKey>('foundation')
  const tabRefs = useRef<Array<HTMLButtonElement | null>>([])
  const active = useMemo(() => domains.find((domain) => domain.key === activeKey) || domains[1], [activeKey])
  const activeIndex = domains.findIndex((domain) => domain.key === active.key)

  const activateIndex = (index: number) => {
    const safeIndex = (index + domains.length) % domains.length
    setActiveKey(domains[safeIndex].key)
    tabRefs.current[safeIndex]?.focus()
  }

  const onTabKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>, index: number) => {
    if (event.key === 'ArrowRight' || event.key === 'ArrowDown') {
      event.preventDefault()
      activateIndex(index + 1)
      return
    }
    if (event.key === 'ArrowLeft' || event.key === 'ArrowUp') {
      event.preventDefault()
      activateIndex(index - 1)
      return
    }
    if (event.key === 'Home') {
      event.preventDefault()
      activateIndex(0)
      return
    }
    if (event.key === 'End') {
      event.preventDefault()
      activateIndex(domains.length - 1)
    }
  }

  return (
    <div className="hero-graph explorer intro intro-5" data-tilt role="region" aria-label="Interactive OpenRGD domain explorer">
      <div className="graph-glow" aria-hidden="true" />
      <div className="window-bar">
        <span>openrgd.graph / domains</span>
        <span className="window-state"><i /> INTERACTIVE</span>
      </div>

      <div className="explorer-body">
        <div className="explorer-rail" role="tablist" aria-label="OpenRGD semantic domains">
          {domains.map((domain) => (
            <button
              key={domain.key}
              ref={(node) => { tabRefs.current[domains.findIndex((item) => item.key === domain.key)] = node }}
              id={'domain-tab-' + domain.key}
              type="button"
              role="tab"
              aria-selected={activeKey === domain.key}
              aria-controls={'domain-panel-' + domain.key}
              tabIndex={activeKey === domain.key ? 0 : -1}
              className={'explorer-tab ' + (activeKey === domain.key ? 'active' : '')}
              onClick={() => setActiveKey(domain.key)}
              onKeyDown={(event) => onTabKeyDown(event, domains.findIndex((item) => item.key === domain.key))}
            >
              <span>{domain.code}</span>
              <strong>{domain.label}</strong>
            </button>
          ))}
        </div>

        <div
          className="explorer-detail"
          role="tabpanel"
          id={'domain-panel-' + active.key}
          aria-labelledby={'domain-tab-' + active.key}
          tabIndex={0}
          data-active-index={activeIndex}
        >
          <div className="explorer-detail-head">
            <div>
              <span className="explorer-code">{active.code}</span>
              <h2>{active.label}</h2>
            </div>
            <span className={'maturity ' + active.tone}>{active.maturity}</span>
          </div>

          <p>{active.summary}</p>

          <div className="explorer-modules">
            {active.modules.map((module, index) => (
              <div className="explorer-module" key={module}>
                <span>{String(index + 1).padStart(2, '0')}</span>
                <strong>{module}</strong>
              </div>
            ))}
          </div>

          <div className="explorer-foot">
            <span>semantic domain</span>
            <strong>{active.code}_{active.key}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
