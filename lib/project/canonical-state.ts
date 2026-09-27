export const canonicalState = {
  repository: 'https://github.com/OpenRGD/openrgd',
  snapshotSha: 'afe1a831b950a4e6560f0285a0103fc4eaa343b7',
  snapshotDate: '2026-09-27',
  standard: {
    version: '0.2.0',
    maturity: 'Draft',
    integrityProfile: 'OPENRGD_SOURCE_TREE_SHA256_V1',
    integrityHash: 'sha256:c049dc3fb91c19e668ef0d35b9b40d9052caf1a458b1a108d58b1896189dd5f9',
  },
  kernelProfile: {
    version: '0.1.0',
  },
  toolchain: {
    version: '0.1.1',
    maturity: 'Working alpha',
    nextProposedCandidate: '0.2.0rc1',
    nextProposedTag: 'toolchain-v0.2.0-rc.1',
  },
  agentContracts: {
    version: '0.1.0',
    maturity: 'candidate',
    normative: false,
  },
} as const

export function canonicalPermalink(path = ''): string {
  const suffix = path ? '/' + path.replace(/^\//, '') : ''
  return canonicalState.repository + '/blob/' + canonicalState.snapshotSha + suffix
}

export function canonicalTreePermalink(path = ''): string {
  const suffix = path ? '/' + path.replace(/^\//, '') : ''
  return canonicalState.repository + '/tree/' + canonicalState.snapshotSha + suffix
}
