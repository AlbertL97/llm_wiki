# Source: Active interaction strategy generation for human-robot collaboration based on trust

**Summary**: Proposing a trust-based framework for human-robot collaboration that evaluates robot performance via a visual language model and generates optimal strategies using decision trees to maximize HRC efficiency.

**Sources**:  
- raw/Active interaction strategy generation for human-robot collaboration based on trust.md

**Last updated**: 2026-06-07

---

## Main content

### Overview
This study proposes an **active interaction strategy generation** framework for human-robot collaboration (HRC) based on dynamic trust estimation, aiming to optimize HRC efficiency while maintaining high safety and success rates (source: Active interaction strategy generation for human-robot collaboration based on trust.md).

### Core Methodology
1. **Trust-Based Process Modeling**: The HRC process is modeled as a tree mapping different robot actions (grasping, non-grasping) and the probability of human intervention.
2. **VLM-Based Performance Evaluation**: A Visual Language Model (VLM) monitors the collaborative workspace to identify HRC subscenes (e.g., successful grasp, object collision, object dropped) from camera frames. It uses causal subscene sequencing to resolve visual ambiguities.
3. **Dynamic Trust Calculation**: The evaluation results from the VLM are passed to a computational trust model that calculates the human's current trust level in real time.
4. **Active Strategy Selection**: The robot calculates the optimal strategy for the next step based on the human's trust level. If trust is low, it adopts cooperative or transparent actions to rebuild trust; if high, it prioritizes independent efficiency, successfully reducing HRC execution time in experiments (source: Active interaction strategy generation for human-robot collaboration based on trust.md).

## Related pages

- [[human-robot-interaction]]\n- [[trust]]\n- [[measurement-tools]]\n- [[mind-perception]]\n