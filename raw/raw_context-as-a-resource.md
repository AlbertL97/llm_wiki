# Authors:
[Not specified in the provided text]

# Date:
2026-11-13 (v1)

# Comprehensive Summary:

The paper "Context as a Resource" addresses the challenge of managing concurrent tasks for personal AI agents, which often leads to human attention exhaustion due to separate agent sessions. The proposed solution is an always-on personal agent system accessed through a single, continuous interface.

**Problem:**

*   Managing concurrent tasks in separate agent sessions quickly exhausts human attention.
*   Funneling interleaved dialogues and external events into one linear session with identical frozen backbone weights causes cross-topic constraint bleed and head-of-line stalling.
*   Traditional router-ticket hierarchies suffer from lossy prose handoffs, heavy routing overhead, and blind merges, leading to reduced true-conflict merge success rates (33.3% mean).

**Solution: ClonAct Architecture**

*   A routerless architecture that virtualizes context blocks directly.
*   Key components:
    *   Pluggable single-pass non-generative Context MMU.
    *   In-place Context Cells.
    *   Footprint-aware Synaptic Bus with an isolated trial merge gate.
    *   Wave-flushed Shared Trunk.

**Findings & Results:**

*   The portable trial merge gate improves true-conflict merges from 33.3% to 63.3% across programmatic multi-stream benchmarks and three model families.
*   ClonAct's routerless virtualization achieves this ceiling with 45.9% fewer prompt tokens.
*   It prevents compact-model router collapse.
*   Under continuous surge streams, ClonAct matches top completion rates (95.0%) with the lowest median wait time and zero timed-out status checks.

**Keywords:** Context management, AI agents, concurrent tasks, attention management, architecture, routerless, virtualization, multi-stream processing, efficiency, performance.
