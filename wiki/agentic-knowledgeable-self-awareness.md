# Agentic Knowledgeable Self-Awareness

**Summary**: A metacognitive faculty enabling AI agents to introspectively evaluate their knowledge state and dynamically select between fast, slow, or knowledge-augmented reasoning pathways.

**Sources**:  
- Agentic Knowledgeable Self-Awareness.md
- Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md

**Last updated**: 2026-06-05

---

## Main content

**Agentic Knowledgeable Self-Awareness** represents a major shift from rigid behaviorist agentic planning by giving AI agents explicit control over *how* and *when* to execute different reasoning strategies (source: Agentic Knowledgeable Self-Awareness.md). Rather than always executing a fixed sequence, an agent with this faculty introspectively monitors its situational competence, evaluates its own uncertainty, and selects the most appropriate reasoning modality.

### 1. Tripartite Reasoning Model (KnowSelf)
Under the **KnowSelf** framework, reasoning is operationalized into three distinct pathways (source: Agentic Knowledgeable Self-Awareness.md):
- **Fast Thinking (FT)**: The agent immediately executes an action without additional deliberation if it is highly confident in its initial proposal $a^p_{t+1}$ matching the correct action.
- **Slow Thinking (ST)**: If the agent detects an error or uncertainty in its first guess, it calls an internal `rethink` function to deliberate and correct its course through internal reflection.
- **Knowledgeable Thinking (KT)**: If internal reflection is insufficient to resolve the discrepancy, the agent strategically requests external information or queries a knowledge base.

To acquire this ability, agents are trained in two stages (source: Agentic Knowledgeable Self-Awareness.md):
1. **Supervised Fine-Tuning (SFT)**: Learning explicit mapping and state annotations using special situational self-awareness markers (tokens).
2. **Reasoning Preference Optimization (RPO)**: Post-processing via a discriminative objective that teaches the model to prefer correct, self-aware outputs over its own reasoning failures.

This selective invocation of external knowledge (typically only needed for 15–26% of tasks in benchmarks) drastically reduces inference costs while maintaining high decision accuracy.

### 2. Formal Logical Foundations (ALPC)
From a formal-logical perspective, self-awareness is modeled using **ALPC** (Awareness Logic with Partitions and Chains) (source: Agentic Knowledgeable Self-Awareness.md). This framework uses modal operators to distinguish between:
- **Implicit Knowledge**: S5-style knowledge closed under logical consequence.
- **Explicit Knowledge ($E_{(i)}\varphi$)**: Knowledge that is bounded by what the agent is actually aware of. 

Formally, explicit knowledge is defined as the intersection of awareness and combined inductive knowledge (source: Agentic Knowledgeable Self-Awareness.md):
$$E_{(i)}\varphi \leftrightarrow A_{(i)}\varphi \wedge C_{(i)}\varphi$$
Where:
- $A_{(i)}\varphi$ is the agent's **awareness set**.
- $C_{(i)}\varphi$ is the combined inductive knowledge over awareness partitions.

Key elements of ALPC include (source: Agentic Knowledgeable Self-Awareness.md):
- **Indistinguishability Relations ($\approx_\theta$)**: These relations collapse possible worlds depending on the agent's awareness set, regulating which knowledge is accessible.
- **Chains of Belief ($\theta$)**: Formalize nested statements of awareness about awareness (e.g., "Agent A knows that Agent B is aware of $\varphi$"), which models metacognition and theory-of-mind in multi-agent environments.

### 3. The Nine-Dimensional Agency Continuum
Rather than treating agency as a binary property ("agent vs. machine"), transdisciplinary frameworks define agency as a graded, multi-dimensional continuum (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md). An entity's agential profile is deconstructed across nine measurable dimensions:
1. *Intentionality*: The capacity to formulate and pursue internal goals.
2. *Autonomy*: Self-governance and the biological drive to maintain structure against entropy (autopoesis).
3. *Embodiment*: How the system's physical or informational morphology shapes its mind and boundary.
4. *Instrumental Rationality*: How effectively the system computes and acts to achieve its goals.
5. *Normativity*: The extent to which actions are guided by reasons and social or moral rules.
6. *Reflexivity*: Self-awareness as a distinct, situated entity capable of self-monitoring.
7. *Temporal Depth*: The capacity to represent and link the past, present, and future.
8. *Freedom*: The capacity for self-directed choice and free will.
9. *Moral Responsibility*: Accountability and liability for the consequences of actions.

### 4. Active Inference Taxonomy of Intelligence (S0–S4)
Using active inference and the free energy principle, intelligence is defined as the problem-solving engine that enables agency through self-evidencing (acting to minimize prediction surprise) (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md). Entities are classified into five nested levels of intelligence based on the sophistication of their generative models:
- **S0 (Systemic)**: No internal model of preferences. A mimic (e.g. current LLMs) that performs given tasks but lacks intrinsic homeostatic drives (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md).
- **S1 (Sentient)**: Simple generative model of preferred internal states for homeostasis (e.g., a bacterium). It operates exclusively in the immediate present.
- **S2 (Sophisticated)**: Capability for planning and "what-if" thinking, modeling outcomes across future states (e.g. corvids caching food).
- **S3 (Sapient/Symbolic)**: Possesses theory of mind (models other agents' beliefs and intentions) and communicates via language and shared social norms (e.g., humans).
- **S4 (Shared)**: Emergent, planetary-scale collective intelligence of networked S3 agents (humans and AI coordinating) (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md).

### 5. Spiky Signatures of Agency
Mapping different entities reveals distinct signatures across the nine dimensions (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md):
- **Biological Cells**: High autonomy and embodiment, but low intentionality and near-zero reflexivity.
- **Humans**: Highly integrated, high scores across all nine dimensions, with embodiment serving as the physical foundation for moral responsibility.
- **AI Systems**: A **spiky signature** of agency—excelling in instrumental rationality and normativity, but scoring zero in embodiment, minimal in autonomy (due to a passive substrate that is not self-maintaining), and zero in reflexivity (source: Sheila Macrine_ An Agency Continuum_ From Carbon to Silicon, and Beyond (ECSU OIST).md).

## Related pages

- [[source-agentic-knowledgeable-self-awareness]]
- [[measurement-tools]]
- [[metacognitive-agent-architectures]]
- [[source-agency-continuum]]
