export const canonicalSiteUrl = 'https://openrgd.org'

export const indexableStaticRoutes = [
  '/',
  '/openrgd',
  '/architecture',
  '/architecture/runtime-boundary',
  '/architecture/agent-contracts',
  '/architecture/somatic-translation',
  '/architecture/synapses',
  '/architecture/time-memory',
  '/standards',
  '/spec',
  '/rgd',
  '/docs',
  '/docs/import-urdf',
  '/docs/import-usd',
  '/docs/validation',
  '/docs/export-ros2',
  '/robots',
  '/organizations',
  '/research',
  '/physical-ai',
  '/embodied-ai',
  '/physical-ai-stack',
  '/vla',
  '/robot-safety-architecture',
  '/research/world-models',
  '/research/rgd-physics',
  '/research/robot-chronograf',
  '/research/so101-embodiment-lab',
  '/research/motion-quality',
  '/research/ethics-decision-trace',
  '/research/rgd-mesh',
  '/robot-description',
  '/robot-description-formats',
  '/interoperability',
  '/urdf',
  '/usd',
  '/sdf',
  '/mjcf',
  '/urdf-vs-rgd',
  '/usd-vs-rgd',
  '/sdf-vs-rgd',
  '/urdf-vs-sdf',
  '/urdf-vs-usd',
  '/urdf-vs-mjcf',
  '/robot-ontology',
  '/robot-knowledge-graph',
  '/robot-capability-model',
  '/robot-identity-provenance',
  '/blog',
] as const

export function canonicalUrl(pathname: string): string {
  return pathname === '/'
    ? canonicalSiteUrl
    : canonicalSiteUrl + pathname
}

export function isCanonicalHost(hostname: string): boolean {
  const host=hostname.toLowerCase().split(':')[0]
  return host === 'openrgd.org' || host === 'www.openrgd.org'
}
