# Source Summary: Context as a Resource

This paper introduces **ClonAct**, a novel routerless architecture designed to improve the efficiency and effectiveness of personal AI agents handling concurrent tasks. The core problem addressed is human attention exhaustion stemming from managing multiple agent sessions or dealing with the limitations of linear session processing, which can lead to constraint bleed and stalling. ClonAct tackles this by directly virtualizing context blocks through components like a Context MMU and an isolated trial merge gate, avoiding the inefficiencies of traditional router-ticket hierarchies.

## Key Findings:

*   **Improved Conflict Resolution:** The proposed isolated trial merge gate significantly boosts the success rate of resolving true-conflict merges from 33.3% to 63.3% in multi-stream benchmarks.
*   **Enhanced Efficiency:** ClonAct's routerless virtualization achieves high performance with substantially fewer prompt tokens (45.9% less) compared to previous methods.
*   **Robustness:** The architecture prevents collapse in compact models and maintains top completion rates (95.0%) under continuous surge streams, while minimizing wait times and eliminating timeouts.
*   **Architecture Components:** The system comprises a pluggable Context MMU, in-place Context Cells, a Synaptic Bus with an isolated trial merge gate, and a Shared Trunk.

## Sources:

*   [Context as a Resource](http://arxiv.org/abs/2611.26346v1)

## Last updated:

2026-11-20

## Related pages:

*   [[human-ai-interaction]]
*   [[metacognitive-agent-architectures]]
*   [[chatbots]]
