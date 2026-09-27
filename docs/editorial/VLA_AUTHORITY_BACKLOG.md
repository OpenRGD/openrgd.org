# VLA Authority — Living Research & Content Backlog

Status: **ACTIVE**
Owner surface: `openrgd.org`
Backlog version: **1.0**
Last review: **2026-09-27**

## Purpose

This is the operational backlog for continuous Vision-Language-Action coverage on OpenRGD.

The goal is not to maximize page count. The goal is to convert useful new knowledge into the right public surface while keeping evidence, maturity and provenance explicit.

The system consumes four kinds of signal:

1. **Search signal** — Search Console queries, impressions and emerging user language.
2. **Upstream signal** — new model cards, papers, releases, datasets and benchmarks from primary sources.
3. **OpenRGD signal** — new architecture decisions, contracts, research notes and canonical changes.
4. **Experimental signal** — measurements and failures produced by OpenRGD hardware/software experiments.

## Content lanes

| Lane | Role | Typical surface |
|---|---|---|
| Reference | Stable concepts and definitions | `/vla/*` |
| Entity | Living model/dataset/benchmark records | `/vla/models/*` and future registries |
| Comparison | Distinct conceptual or technical contrasts | `/vla/vla-vs-*` |
| Experiment | Original OpenRGD evidence | `/research/*` or dedicated lab page |
| Journal | Decision, result or engineering narrative | `/blog/*` |

## Status vocabulary

- `PUBLISHED` — live and indexable.
- `SIGNAL` — worth tracking; not enough evidence or intent separation yet.
- `RESEARCH_READY` — distinct intent and primary sources are sufficient to draft.
- `NEEDS_OWN_DATA` — should not be published as an OpenRGD claim until we run the experiment.
- `RUNNING` — protocol/data collection in progress.
- `EVIDENCE_READY` — evidence exists and the public artifact can be drafted.
- `REVIEW` — draft exists and is being checked.
- `REFRESH_DUE` — published but upstream evidence materially changed.
- `PARKED` — useful idea, but publishing now would duplicate or thin another surface.

## Publication gates

### Reference / comparison

A public reference page requires:

- a distinct user/search intent;
- primary sources for externally sourced claims;
- explicit `lastVerified`, source version and evidence boundary;
- no invented values for undocumented model behavior;
- meaningful internal links to parent, siblings and OpenRGD architecture;
- canonical URL, indexability, social metadata and structured data;
- enough substance to stand alone without duplicating another page.

### Entity

A VLA model entity requires:

- official project/model card/repository/paper where available;
- exact model/version identity;
- architecture and action representation only when source-supported;
- license/availability stated only when confirmed;
- benchmark claims kept in their original protocol context;
- an explicit distinction between vendor claims and OpenRGD measurements.

### Original experiment

An OpenRGD experiment requires before publication:

- protocol written before interpreting the result;
- exact robot, cameras, calibration state and control mode;
- exact repository commits, package/model versions and dataset revision;
- raw trial records or reproducible aggregate derivation;
- matched conditions for comparisons;
- failures and exclusions reported, not silently removed;
- for task-success comparisons, default **>=20 matched trials per condition** unless the protocol justifies another sample size;
- no generalization claim beyond the tested embodiment/task/environment;
- a clear boundary between measured evidence and interpretation.

## Live published core

| ID | Priority | Surface | Status | Primary intent |
|---|---|---|---|---|
| VLA-001 | P0 | `/vla` | PUBLISHED | vision language action model / vla model |
| VLA-002 | P0 | `/vla/models` | PUBLISHED | vla models |
| VLA-003 | P0 | `/vla/how-vla-models-work` | PUBLISHED | how vla models work |
| VLA-004 | P0 | `/vla/action-representation` | PUBLISHED | vla action representation |
| VLA-005 | P0 | `/vla/vla-vs-vlm` | PUBLISHED | vla vs vlm |
| VLA-006 | P0 | `/vla/vla-vs-world-model` | PUBLISHED | vla vs world model |
| VLA-007 | P0 | `/blog/vla-actionintent-runtime-boundary` | PUBLISHED | VLA actuator/runtime authority |

## Next authority surfaces

| ID | Priority | Candidate surface | Status | Publication trigger |
|---|---|---|---|---|
| VLA-010 | P0 | `/vla/datasets` | RESEARCH_READY | Map major VLA/robot-learning datasets with provenance, embodiments and action-space caveats. |
| VLA-011 | P0 | `/vla/benchmarks` | RESEARCH_READY | Separate simulation, real-robot and cross-embodiment evaluation protocols; avoid synthetic leaderboard. |
| VLA-012 | P0 | `/vla/inference-latency` | NEEDS_OWN_DATA | Publish source-backed architecture first only if useful; promote strongly after OpenRGD latency measurements. |
| VLA-013 | P0 | `/vla/embodiment` | RESEARCH_READY | Explain embodiment conditioning, proprioception, morphology and action-space portability. |
| VLA-014 | P1 | `/vla/training-and-finetuning` | SIGNAL | Publish when training recipes can be compared without collapsing incompatible protocols. |
| VLA-015 | P1 | `/vla/evaluation` | RESEARCH_READY | Evaluation methodology, uncertainty, repeated trials, OOD/generalization and source-specific metrics. |
| VLA-016 | P1 | `/vla/on-device` | SIGNAL | Promote when on-device/local VLA query signal grows or OpenRGD measures local deployment. |
| VLA-017 | P1 | `/vla/safety` | SIGNAL | Must remain model/runtime/safety-boundary aware; avoid generic “AI safety” copy. |
| VLA-018 | P2 | dedicated action-chunking page | PARKED | Keep inside action representation until query demand or experiment depth justifies a standalone page. |
| VLA-019 | P2 | dedicated asynchronous-inference page | PARKED | Keep inside latency/action pages until original measurements or search signal justify separation. |

## Model entity backlog

| ID | Priority | Candidate surface | Status | Why it matters |
|---|---|---|---|---|
| VLA-E20 | P0 | `/vla/models/smolvla` | RESEARCH_READY | Direct connection to LeRobot and SO-101; ideal bridge to original experiments. |
| VLA-E21 | P1 | `/vla/models/openvla` | RESEARCH_READY | Foundational open VLA reference and useful action-tokenization history. |
| VLA-E22 | P1 | `/vla/models/gemini-robotics` | RESEARCH_READY | Multi-embodiment and on-device reference with current official model cards. |
| VLA-E23 | P1 | `/vla/models/gr00t` | RESEARCH_READY | Humanoid VLA + world-model objective convergence. |
| VLA-E24 | P1 | `/vla/models/pi0` | RESEARCH_READY | Continuous action expert / flow matching and open-world manipulation lineage. |
| VLA-E25 | P2 | `/vla/models/octo` | SIGNAL | Historically useful open generalist policy; publish if it adds distinct search/reference value. |

## OpenRGD original-evidence backlog

| ID | Priority | Experiment | Status | Required output |
|---|---|---|---|---|
| VLA-X100 | P0 | SmolVLA + SO-101 reproducible baseline | NEEDS_OWN_DATA | Exact setup, dataset, model revision, task protocol, trial table and failures. |
| VLA-X101 | P0 | SO-101 VLA dataset capture/data card | NEEDS_OWN_DATA | Camera layout, frequencies, action/state schema, episode QA and dataset provenance. |
| VLA-X102 | P0 | Synchronous vs asynchronous SmolVLA inference | NEEDS_OWN_DATA | Matched task, latency distribution, throughput, success and stale-action behavior. |
| VLA-X103 | P0 | End-to-end VLA latency decomposition | NEEDS_OWN_DATA | Capture → preprocess → model → action decode → runtime → command timing. |
| VLA-X104 | P1 | Action-chunk horizon vs correction ability | NEEDS_OWN_DATA | Matched perturbation protocol and recovery metrics. |
| VLA-X105 | P1 | Camera/viewpoint ablation on SO-101 | NEEDS_OWN_DATA | Same task/model with controlled camera changes. |
| VLA-X106 | P1 | VLA perturbation robustness | NEEDS_OWN_DATA | Object displacement/occlusion/interruption trials with explicit failure classes. |
| VLA-X107 | P0 | VLA failure taxonomy on physical SO-101 | NEEDS_OWN_DATA | Reproducible failure categories with representative traces and counts. |
| VLA-X108 | P0 | VLA output → OpenRGD ActionIntent mapping | NEEDS_OWN_DATA | Concrete schema mapping, loss of information analysis and runtime-boundary trace. |
| VLA-X109 | P1 | SmolVLA vs ACT under one matched protocol | NEEDS_OWN_DATA | Same hardware/data/task/evaluation; no cross-paper benchmark comparison. |
| VLA-X110 | P2 | Cross-embodiment transfer | SIGNAL | Requires a second sufficiently different embodiment and a controlled adaptation protocol. |

## Journal outputs unlocked by evidence

| ID | Depends on | Candidate story |
|---|---|---|
| VLA-J200 | VLA-X100 | Running SmolVLA on a real SO-101: reproducible baseline |
| VLA-J201 | VLA-X107 | What actually fails first when a VLA controls a small real robot |
| VLA-J202 | VLA-X102 | Async VLA inference: throughput gain versus stale-action risk |
| VLA-J203 | VLA-X108 | From VLA output to ActionIntent: what survives the boundary |
| VLA-J204 | VLA-X103 | Where VLA latency really lives in an embodied loop |
| VLA-J205 | VLA-X109 | SmolVLA vs ACT on one robot, one dataset and one protocol |

## Freshness rules

- Model/entity pages: event-driven refresh plus a **45-day stale review**.
- VLA reference pages: event-driven refresh plus a **90-day stale review**.
- Experiments: immutable result snapshots; corrections append provenance rather than rewriting the original result silently.
- A new official model card, major repository release, benchmark protocol revision or OpenRGD architecture change immediately marks affected pages `REFRESH_DUE`.

## Search-signal rules

Search volume is not the only gate.

A query may enter the backlog even at very low impressions when:

- it maps tightly to OpenRGD's real expertise;
- the current page is already being discovered for the term;
- the topic connects to work we are actively measuring or implementing;
- publishing would strengthen the knowledge graph rather than create a thin page.

Priority increases when query impressions repeat, position improves, multiple related queries appear, or Search Console begins discovering sibling pages.

## Current primary-source watchlist

- Google DeepMind — Gemini Robotics / On-Device model cards
- NVIDIA Research — GR00T family
- Physical Intelligence — π-family
- OpenVLA project/repository
- Hugging Face LeRobot / SmolVLA
- Open X-Embodiment and successor robot-dataset work
- major VLA evaluation suites and real-robot benchmark protocols

## Operating loop

```text
Search / upstream / OpenRGD / experiment signal
                ↓
            BACKLOG
                ↓
     classify content lane
                ↓
       collect evidence
                ↓
         publication gate
                ↓
 reference / entity / experiment / journal
                ↓
     internal linking + sitemap
                ↓
         Search Console signal
                └──────────────→ BACKLOG
```

This file is a working editorial control surface. It is not normative OpenRGD architecture.
