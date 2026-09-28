# OpenRGD SEO Opportunity Map

Status: ACTIVE
Version: 1.0
Research date: 2026-09-28
Current indexable baseline: 73 URLs

## Purpose

This map identifies where OpenRGD can grow organic authority without turning the site into a generic robotics publication.

It is an opportunity map, not a keyword-volume report. Search-potential and competition labels are qualitative and are based on current SERP structure, freshness, source landscape, OpenRGD's existing coverage, and the project's ability to produce first-party evidence.

The core rule is:

**Prefer topics where OpenRGD can contribute a better representation, stronger provenance, a working tool, or original embodied evidence.**

## Opportunity classes

- **Reference** — durable definitions, architecture and comparison pages.
- **Entity / Data** — robots, organizations, models, datasets, standards and evidence-linked records.
- **Tool** — validator, inspector, converter, graph or machine-readable utility.
- **Experiment** — original OpenRGD hardware/software measurements.
- **Journal** — engineering narrative unlocked by a decision or experiment.

## Priority model

- **P0** — execute now / already active.
- **P1** — high-value expansion after the current P0 queue.
- **P2** — important authority layer but not a near-term growth engine.
- **P3** — strategic category creation or research; low immediate search demand.
- **Avoid** — do not create a standalone SEO vertical unless project evidence changes.

Search potential is qualitative: LOW / MEDIUM / HIGH / VERY HIGH.
Competition is qualitative: LOW / MEDIUM / HIGH / VERY HIGH.

---

## 1. Vision-Language-Action models

Priority: **P0 — ACTIVE**
Search potential: **VERY HIGH / growing**
Competition: **HIGH**
OpenRGD fit: **5/5**
Evidence advantage: **5/5**

### Existing ownership

- /vla
- /vla/models
- /vla/how-vla-models-work
- /vla/action-representation
- /vla/vla-vs-vlm
- /vla/vla-vs-world-model
- /blog/vla-actionintent-runtime-boundary

### Next opportunities

- /vla/datasets
- /vla/benchmarks
- /vla/evaluation
- /vla/embodiment
- /vla/inference-latency
- /vla/on-device
- model entities: SmolVLA, OpenVLA, Gemini Robotics, GR00T, pi0 / pi0.5

### Why OpenRGD can win

The search topic is becoming crowded, but most pages stop at model architecture or benchmark summary. OpenRGD owns a differentiated downstream question: **how model output is grounded in a concrete body, capability model, runtime authority and evidence chain.**

Original SO-101/LeRobot experiments create a stronger moat than generic model summaries.

---

## 2. LeRobot + SO-101 + real-world robot learning

Priority: **P0**
Search potential: **HIGH / growing**
Competition: **MEDIUM**
OpenRGD fit: **5/5**
Evidence advantage: **5/5**

### Current coverage

- /research/so101-embodiment-lab

Current coverage is strategically good but too small to represent the amount of first-party work already available.

### Search / user intents

- LeRobot SO-101
- SO-101 setup / calibration
- SO-101 teleoperation
- LeRobot record dataset
- LeRobot dataset format
- train ACT / SmolVLA on SO-101
- asynchronous inference
- real-robot policy evaluation
- camera setup / observation timing

### Recommended assets

**Reference**
- LeRobot for real-world robot learning
- SO-101 as an embodiment / experimental platform
- LeRobotDataset: observations, actions, episodes and provenance

**Experiment**
- reproducible SO-101 baseline
- dataset capture data card
- synchronous vs asynchronous inference
- end-to-end latency decomposition
- camera/viewpoint ablation
- physical failure taxonomy
- ACT vs SmolVLA under one matched protocol
- VLA output -> OpenRGD ActionIntent mapping

### Publishing boundary

Do not duplicate Hugging Face assembly/setup documentation. Publish what OpenRGD can add: commissioning evidence, reproducibility, failure modes, runtime boundaries, timing and embodiment semantics.

---

## 3. Robot description formats + loss-aware interoperability

Priority: **P0**
Search potential: **VERY HIGH**
Competition: **MEDIUM-HIGH**
OpenRGD fit: **5/5**
Evidence advantage: **4/5**

### Existing ownership

OpenRGD already has one of its strongest clusters:

- /robot-description
- /robot-description-formats
- /urdf
- /usd
- /sdf
- /mjcf
- /urdf-vs-rgd
- /usd-vs-rgd
- /sdf-vs-rgd
- /urdf-vs-sdf
- /urdf-vs-usd
- /urdf-vs-mjcf
- /interoperability
- importer/exporter documentation

### Missing high-intent surfaces

- Xacro
- URDF vs Xacro
- MJCF vs USD
- SDF vs USD
- SDF vs MJCF
- robot description format comparison matrix
- URDF limitations
- closed kinematic chains across formats
- sensors / transmissions / ros2_control across formats
- robot-description source-of-truth workflows

### Conversion intents

- URDF to MJCF
- URDF to USD
- URDF to SDF
- MJCF to URDF
- USD to URDF
- Xacro to URDF

### Strategic tool opportunity

A generic converter alone is not enough: competitors already provide browser converters and viewers.

OpenRGD's differentiated tool would be **loss-aware conversion / evidence inspection**:

source file
-> extracted facts
-> unsupported facts
-> inferred / not inferred
-> transformation losses
-> provenance
-> target artifact

A conversion-loss report fits the OpenRGD philosophy better than promising lossless interchange.

---

## 4. Robot entities + developer assets

Priority: **P0 / P1**
Search potential: **HIGH long-tail**
Competition: **MEDIUM**
OpenRGD fit: **5/5**
Evidence advantage: **5/5**

### Existing entities

Only a small number of robot entities are currently public.

The Unitree G1 SERP shows strong practical intent around:

- G1 URDF
- G1 MJCF
- ROS / ROS 2 description
- model variants / DoF
- simulation assets
- developer repositories

### Recommended entity expansion

Start with robots that have strong public developer evidence:

- Unitree G1 / H1 / Go2
- SO-101
- Franka FR3
- ALOHA / ALOHA 2
- Universal Robots UR5e
- Franka Panda
- Kinova Gen3
- selected industrial / humanoid systems with verifiable source assets

### Entity template should expose

- model / variant identity
- manufacturer
- source-backed dimensions and DoF
- official URDF / MJCF / USD assets
- ROS / ROS 2 packages
- SDKs and official repositories
- evidence type / verified date
- independent-testing state
- supported simulations
- source licenses
- OpenRGD interpretation separated from source claims

Do not mass-generate manufacturer pages without evidence.

---

## 5. Robot ontology + task representation + capability semantics

Priority: **P1**
Search potential: **MEDIUM**
Competition: **LOW-MEDIUM, mostly standards / academic**
OpenRGD fit: **5/5**
Evidence advantage: **4/5**

### Existing ownership

- /robot-ontology
- /robot-capability-model

These pages are already credible but can become a larger reference cluster.

### Strong external anchors

- IEEE 1872 — Ontologies for Robotics and Automation
- IEEE 1872.1-2024 — Robot Task Representation
- IEEE 1872.2 — Autonomous Robotics Ontology
- NIST ontology work
- capability-ontology research distinguishing advertised vs operational capability

### Candidate pages

- robot task representation
- robot capability ontology
- capability vs skill vs task vs action vs affordance
- advertised capability vs operational capability
- task requirements vs embodiment resources
- robot ontology vs knowledge graph
- IEEE 1872 family map
- semantic interoperability for heterogeneous robot fleets

### Why this matters

This is a smaller search market than VLA, but the SERP is sparse and authority-heavy. A source-backed OpenRGD reference layer can become highly defensible and citation-friendly.

---

## 6. Robot knowledge graphs

Priority: **P1**
Search potential: **MEDIUM / emerging**
Competition: **LOW-MEDIUM**
OpenRGD fit: **5/5**
Evidence advantage: **5/5**

### Existing ownership

- /robot-knowledge-graph
- robot + organization catalog
- claim-level evidence model

### Opportunity

Current research increasingly connects robots, tasks, actions, skills, objects and datasets through graphs. Dedicated robot-learning sites are also beginning to expose interactive knowledge graphs.

OpenRGD can build an actual public graph from its evidence model rather than writing only an explainer.

### Candidate assets

- robot knowledge graph explorer
- robot -> manufacturer -> source asset graph
- robot -> capability -> task graph
- robot -> dataset -> policy -> paper relations
- assertion/evidence provenance graph
- example graph queries
- downloadable graph snapshot / JSON

This is both SEO and link-earning infrastructure.

---

## 7. World models for robotics

Priority: **P1**
Search potential: **HIGH / rapidly growing**
Competition: **HIGH and increasing**
OpenRGD fit: **4/5**
Evidence advantage: **3/5 today; higher after runtime experiments**

### Current issue

/research/world-models is currently a research note, not a complete authority surface.

The 2026 search landscape now includes dedicated world-model knowledge hubs and several recent surveys.

### Recommended positioning

Do not compete as another generic "What is a world model?" site.

Own **world models for embodied execution**:

- world models for robotics
- action-conditioned world models
- world-action models (WAM)
- world model vs VLA
- world model vs simulator
- predictive state vs observed / belief / desired state
- uncertainty in robot world models
- world-model evaluation for action quality
- asynchronous world models vs deterministic reflex/runtime loops

OpenRGD's runtime-boundary architecture is the differentiator.

---

## 8. Physical AI + Embodied AI

Priority: **P1 umbrella**
Search potential: **VERY HIGH**
Competition: **VERY HIGH**
OpenRGD fit: **4/5**
Evidence advantage: **3/5**

### Existing ownership

- /physical-ai
- /physical-ai-stack
- /embodied-ai

### Strategy

Keep these pages as strong umbrella hubs.

Do not expand into generic "Physical AI companies", news, investment or broad trend content.

Only create child pages where OpenRGD has architectural depth:

- Physical AI vs Embodied AI
- Physical AI vs traditional robotics
- Physical AI data / model / runtime stack
- embodiment grounding
- policy-to-hardware authority
- Physical AI evaluation
- data and provenance in Physical AI

Broad SERPs are already occupied by major vendors and large editorial sites. OpenRGD should win on system boundaries, not generic definition copy.

---

## 9. Robot safety architecture + AI robot security

Priority: **P1**
Search potential: **MEDIUM-HIGH / growing**
Competition: **MEDIUM-HIGH, trust-sensitive**
OpenRGD fit: **5/5**
Evidence advantage: **4/5**

### Existing ownership

- /robot-safety-architecture
- /architecture/runtime-boundary
- /security
- VLA runtime-boundary article

### Candidate pages

- semantic safety vs functional safety
- AI robot safety architecture
- VLA safety boundary
- model confidence vs operational safety
- robot AI attack surface
- perception / model manipulation risks
- runtime safety vs model policy
- robot safety standards map

### Boundary

This cluster must remain standards- and source-heavy.

Never imply OpenRGD certification or replace ISO/IEC/IEEE safety processes. Distinguish semantic policy checks, cybersecurity, deterministic runtime constraints and certified functional safety.

---

## 10. Robot identity + provenance + digital passport

Priority: **P1 / P2**
Search potential: **MEDIUM today, strategic upside**
Competition: **LOW for robotics-specific framing**
OpenRGD fit: **5/5**
Evidence advantage: **5/5**

### Existing ownership

- /robot-identity-provenance
- claim-level evidence model
- integrity model
- model / variant / profile / physical-instance distinctions

### Candidate pages

- robot digital identity
- robot provenance
- model vs variant vs physical instance
- robot configuration identity
- evidence levels for robot specifications
- manufacturer claim vs independently tested
- robot lifecycle identity
- robot passport

### Digital Product Passport angle

EU DPP infrastructure is now operational and emphasizes unique identifiers, lifecycle information, interoperable machine-readable data and semantic definitions.

Do **not** claim that an OpenRGD robot profile is legally an EU Digital Product Passport.

A useful future page is:

**Robot Digital Passport vs EU Digital Product Passport**

explaining overlap, non-equivalence and possible interoperability concepts.

---

## 11. Robotics standards + semantic interoperability map

Priority: **P2**
Search potential: **MEDIUM**
Competition: **MEDIUM, institutional**
OpenRGD fit: **5/5**
Evidence advantage: **4/5**

### Candidate map

- IEEE 1872
- IEEE 1872.1
- IEEE 1872.2
- IEEE robot-map standards
- ROS / URDF references
- SDFormat
- OpenUSD / robotics
- relevant ISO robot-safety families
- ontology / task / map / semantic standards

### Goal

Not to reproduce standards text.

Build a source-backed navigation layer explaining:

what the standard owns
-> what it does not own
-> relationship to description / ontology / task / runtime
-> OpenRGD compatibility boundary

This can become a durable citation and research hub.

---

## 12. ROS 2 + OpenRGD developer interoperability

Priority: **P2**
Search potential: **MEDIUM developer intent**
Competition: **HIGH in generic ROS content**
OpenRGD fit: **4/5**
Evidence advantage: **4/5**

### Existing ownership

- /docs/import-urdf
- /docs/import-usd
- /docs/export-ros2
- /docs/validation
- /rgd

### Candidate expansion

- OpenRGD + ROS 2 architecture
- URDF -> RGD -> static ROS 2 configuration
- ros2_control mapping
- robot_state_publisher / description boundary
- HAL binding completeness
- imported body vs commissioned hardware
- static export validation
- source-tree integrity in deployment pipelines

Avoid generic ROS tutorials.

---

## 13. Robot datasets + evaluation infrastructure

Priority: **P1 inside VLA/LeRobot; P2 as standalone hub**
Search potential: **HIGH**
Competition: **MEDIUM-HIGH**
OpenRGD fit: **4/5**
Evidence advantage: **5/5 once experiments are public**

### Candidate graph

robot
-> dataset
-> task
-> policy
-> benchmark
-> embodiment
-> paper
-> result
-> evidence

This should emerge from the knowledge graph rather than become another unstructured list of datasets.

The strongest near-term use is inside VLA and LeRobot.

---

## 14. Multi-robot / RGD Mesh / time / Chronograf

Priority: **P3**
Search potential: **LOW-MEDIUM**
Competition: **LOW**
OpenRGD fit: **5/5**
Evidence advantage: **4/5**

These are strategically important OpenRGD research areas but should not receive large SEO investment yet.

Publish when a concrete contract, protocol, demo or experiment creates evidence.

Candidate future intents:

- multi-robot semantic interoperability
- robot identity pairing
- robot time synchronization semantics
- uncertainty-aware event timing
- multi-robot intent exchange

---

## 15. DecisionTrace / ethics / governance semantics

Priority: **P3**
Search potential: **LOW**
Competition: **LOW-MEDIUM**
OpenRGD fit: **4/5**
Evidence advantage: **3/5**

Keep as research and architecture material until there is a stable contract or external search signal.

Avoid generic "robot ethics" SEO content.

---

# Cross-cutting SEO product opportunities

## A. Loss-aware robot-description inspector

Priority: **P0 product opportunity**

Input:
- URDF / Xacro / MJCF / SDF / USD

Output:
- facts extracted
- unsupported facts
- unknown values
- transformation losses
- source provenance
- target-format compatibility
- OpenRGD importability

Potentially more defensible than another static converter.

## B. Robot developer-asset index

Priority: **P0 / P1**

For each robot:
- official description assets
- SDK
- ROS packages
- simulation models
- model variants
- licenses
- source freshness
- evidence state

High long-tail search potential.

## C. Robot knowledge graph explorer

Priority: **P1**

Interactive and downloadable graph of:
robots, organizations, assets, formats, capabilities, datasets, policies, papers and evidence.

## D. Evidence-aware comparison engine

Priority: **P1**

Compare robot/model claims while preserving:
- source
- conditions
- verification status
- independently tested flag
- date / version

This is an OpenRGD-specific moat.

---

# Recommended execution order

## Growth Wave A — Robot Description Authority

**Do next.**

1. Xacro reference
2. URDF limitations
3. robot-description master comparison
4. URDF -> MJCF
5. URDF -> USD
6. URDF -> SDF
7. format-loss matrix
8. ros2_control / transmission boundary
9. loss-aware inspection tool design

Why first:
- strong existing internal authority;
- clear evergreen developer demand;
- no laboratory work required;
- highly linkable;
- direct connection to the canonical import/export toolchain.

## Growth Wave B — LeRobot / SO-101 Evidence

Run in parallel with physical work.

1. expand SO-101 lab
2. reproducible commissioning record
3. LeRobot dataset data card
4. latency baseline
5. synchronous vs asynchronous inference
6. SmolVLA baseline
7. failure taxonomy
8. ACT vs SmolVLA matched evaluation

Why:
- strong search growth;
- OpenRGD owns the hardware and workflow;
- first-party evidence creates a moat.

## Growth Wave C — Semantic Robotics Authority

1. IEEE 1872 family map
2. Robot Task Representation
3. Capability vs Skill vs Task vs Action vs Affordance
4. advertised vs operational capability
5. robot ontology vs knowledge graph
6. capability grounding for VLA / heterogeneous robots

Why:
- low SERP saturation;
- strong academic/standards citations;
- near-perfect OpenRGD positioning.

## Growth Wave D — Robot Entity Expansion

Start with 10–20 evidence-rich developer profiles, not hundreds of thin pages.

First candidates:
- Unitree G1 deep developer asset wave
- SO-101
- Franka FR3
- ALOHA / ALOHA 2
- UR5e
- Panda
- selected Unitree / industrial entities with official public assets

## Growth Wave E — World Models + Physical AI bridge

Only after the first four waves are moving.

Focus on embodied prediction and runtime integration, not broad AI definitions.

---

# What not to build

Do not allocate SEO effort to:

- generic robotics news;
- "best robots 2026" listicles;
- broad AI glossary pages unrelated to embodiment;
- generic company lists;
- robot-price pages as a primary strategy;
- mass-generated manufacturer/entity pages without claim-level evidence;
- duplicated pages for singular/plural keyword variants;
- rewritten vendor product pages;
- generic Physical AI trend content with no OpenRGD-specific architecture;
- safety claims that imply certification;
- DPP pages that imply regulatory equivalence without legal basis.

---

# Current strategic conclusion

The highest-value OpenRGD organic moat is not one keyword.

It is the intersection:

**robot description + semantic embodiment + evidence + capability + learned policy + runtime boundary + real hardware**

The strongest near-term growth path is therefore:

Robot Description / Interoperability
-> LeRobot / SO-101 evidence
-> VLA
-> Ontology / Capability
-> Robot entity knowledge
-> Knowledge Graph
-> World Models / Physical AI

This creates a connected topical graph rather than isolated SEO pages.

## External signals used for this map

Primary / authoritative signals include:

- IEEE 1872 / 1872.1 robotics ontology and task-representation work
- NIST robotics ontology publications
- Hugging Face LeRobot / SO-101 documentation
- current OpenVLA / VLA research
- recent robotics world-model surveys
- European Commission Digital Product Passport infrastructure
- IEEE Robotics and Automation Society material on AI-era robot safety

SERP observations were also used to identify active competition in robot-description conversion, Physical AI, VLA and world-model knowledge hubs.
