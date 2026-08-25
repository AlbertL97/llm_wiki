# Free-Energy-Gated Plasticity for Real-Time Online Motor Learning in Physical Human--Robot Interaction

**Authors:** Not specified in the provided text.
**Date:** 2026-08-25 (based on the URL and prompt instructions for 'Last updated')

## Abstract:
Fully online embodied learning requires synaptic adaptation to acquire new behaviors while preserving previously learned dynamics during ongoing interaction. We extend the Predictive-Coding-inspired Variational Recurrent Neural Network (PV-RNN) to continuously adapt its synaptic weights and propose Free-Energy-Gated Plasticity (FEGP), which regulates the effective learning rate according to variational free energy.

## Key Findings & Methodology:

*   **Problem:** Online embodied learning in robots needs to adapt to new tasks while retaining old ones without external supervision or extensive pre-training.
*   **Proposed Solution:** Free-Energy-Gated Plasticity (FEGP), an extension of the Variational Recurrent Neural Network (PV-RNN).
*   **Mechanism:** FEGP controls the rate of synaptic weight adaptation by using variational free energy as a gating signal.
*   **Application:** Tested in real-time physical human-robot interaction scenarios.
*   **Results:**
    *   A randomly initialized network learned three distinct cyclic motor patterns without offline pretraining.
    *   FEGP demonstrated significant improvements in acquiring a diverse set of motor skills (repertoire coverage).
    *   FEGP showed superior retention of previously learned patterns, even after they were no longer actively being learned.
    *   Controlled experiments (10 randomized teaching streams, 5 network initializations per stream) confirmed FEGP's effectiveness.
    *   Comparisons with a constant learning rate and temporally disorganized replay showed that FEGP's performance was superior.
*   **Conclusion:** The temporal allocation of plasticity, relative to the model-environment mismatch, is crucial for maintaining learned behaviors during continuous online learning, rather than just the average learning rate or its distribution.

## Significance:
This research contributes to more adaptive and robust robot learning in interactive environments, potentially leading to more intuitive and seamless human-robot collaboration by enabling robots to learn and adapt continuously and efficiently.