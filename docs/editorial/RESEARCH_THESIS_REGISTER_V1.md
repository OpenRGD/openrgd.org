# OpenRGD Research Thesis Register — v1

**Status:** RESEARCH / NON-NORMATIVE  
**As of:** 2026-11-18  
**Canonical website:** https://openrgd.org/research/theses  
**Machine-readable public register:** https://openrgd.org/research/theses/registry.json

## Aim

These are research hypotheses, not declarations of unprecedented invention or accepted standard requirements. Each thesis has a counter-hypothesis, a clear possible falsifier, current evidence, limitations and a prospective experiment.

Only T01, T06, T07, T11 and T17 have long-form public dossiers in the initial release. All others stay in the machine-readable register and a single public index rather than generating thin SEO pages.

## Contribution / prior-art boundary

Existing literature already addresses independent agent authorization, reconstructable memory, provenance and metrological traceability. OpenRGD's possible contribution is the specific cross-layer composition, versioned contracts, reproducible negative tests, and eventual physical embodiment. Claim novelty only at the scope supported by comparison.

## Evidence levels

- **Architecture proposal:** ideas, RFCs and unaccepted design handoffs.
- **Candidate conformance:** offline tests and candidate records, without live trusted authorization.
- **Offline software:** validated implementation/synthetic tests, not a physical measurement.
- **Operator-measured:** hardware/session measurements reported by the operator; raw artifacts may still be unavailable.

## Publication gates

1. A thesis is *falsifiable*: competing explanation and possible counterexample are explicit.
2. All sources are pinned or identified by review date; upstream literature is distinguished from project evidence.
3. Tests on source branches do not imply main, normative adoption, deployment or actuator authority.
4. Data without public raw traces is marked operator-reported; success percentage, p95 or generalization cannot be invented.
5. Human, device and private robot-instance data are sanitized; no raw audio/video, credentials or private identifiers.
6. Every claim change must update the source reference, test status, limitations and Last Verified metadata.
7. New individual SEO page requires substantial unique research content and a real evidence or methodology increment.

## Initial thesis index

| ID | Area | Priority | Public dossier | Thesis |
|---|---|---|---|---|
| T01 | Cognition & Agency | P0 | Yes | Autonomous cognition does not require autonomous actuator authority. |
| T02 | Cognition & Agency | P1 | Not yet | Admitting a goal does not authorize its effects. |
| T03 | Cognition & Agency | P1 | Not yet | Agent autonomy needs aggregate resource accounting across goals. |
| T04 | Cognition & Agency | P1 | Not yet | Abstention, pause and uncertainty handling are positive cognitive capabilities. |
| T05 | Cognition & Agency | P1 | Not yet | Task completion is not proof that a cognitive conclusion is true. |
| T06 | Life & Memory | P0 | Yes | Robot history and robot memory should not be the same mutable object. |
| T07 | Life & Memory | P0 | Yes | Life identity should survive changes in model and runtime without inventing continuity. |
| T08 | Life & Memory | P1 | Not yet | An experience can change meaning without changing its original record. |
| T09 | Life & Memory | P1 | Not yet | Robotic events need source time and knowledge/verification time as distinct claims. |
| T10 | Physical Evidence | P1 | Not yet | Sensor observation should not be overwritten by its interpretation. |
| T11 | Physical Evidence | P0 | Yes | A valid calibration record is not proof that a physical robot is calibrated. |
| T12 | Physical Evidence | P1 | Not yet | Content integrity is not authorship, correctness or physical truth. |
| T13 | Physical Evidence | P1 | Not yet | Robot capability is contextual rather than a universal Boolean. |
| T14 | Embodied Intelligence | P1 | Not yet | A VLA prediction should not be final motor authority. |
| T15 | Embodied Intelligence | P2 | Not yet | World-model providers should be replaceable without changing agent identity or actuator authority. |
| T16 | Embodied Intelligence | P2 | Not yet | The value of a world model should be assessed by improved physical decisions. |
| T17 | Human–Robot Interaction | P0 | Yes | Embodied conversational latency is not equal to TTS inference time. |
| T18 | Human–Robot Interaction | P2 | Not yet | Expressive robot output does not prove subjective emotion. |
| T19 | Cross-Cutting | P1 | Not yet | Reliable embodied autonomy requires separating observation, belief, proposal, capability and authorization. |

## Data owner and governance

The website register is editorial/research material. It does not modify the OpenRGD Canonical Core, promote schemas, create Life identities or define robot effect permissions.

## Initial high-signal source pins

- COG–CORE-B opt-in draft PR #6 head: `a2526ba414409cc92641dc95bbddd6564317fcc4` (candidate, ten CI matrix jobs green in most recent complete run; no device integration).
- Core-B draft PR #11 head: `55a034ceb1cdaab8bed6848fcdde85c9436bc9e0`.
- Core-C draft PR #13 head: `fa5e8ff713a28b69b7d39b2c18e8c9e0f6c72ee0`.
- CAL-0.2 merged commit: `81700401e2fa6d370a86b6c1f5a48802bc5f1fc7`.
- VOICE-0.5A merged main commit: `22fe6384f6fd24ad46b8135de38d5f002611efef` (operator-measured fixed-text CPU trial + three real voice turns).

## Next gate

Publish five substantial dossiers and the registry on OpenRGD.org. Then prioritize a controlled physical T17 audio-onset measurement and a stronger independent trust/identity test for T01/T07; do not treat publication as experimental acceptance.
