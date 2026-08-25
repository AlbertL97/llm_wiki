# Source Summary: Free-Energy-Gated Plasticity for Real-Time Online Motor Learning in Physical Human--Robot Interaction

## Introduction
This paper addresses the challenge of enabling robots to learn new motor behaviors in real-time during physical interaction with humans, while simultaneously retaining previously acquired skills. The research proposes a novel learning mechanism called Free-Energy-Gated Plasticity (FEGP) to achieve this continuous online adaptation.

## Key Findings

*   **Novel Learning Mechanism:** The study introduces Free-Energy-Gated Plasticity (FEGP), an enhancement to the Predictive-Coding-inspired Variational Recurrent Neural Network (PV-RNN). FEGP dynamically adjusts the rate of synaptic weight updates based on variational free energy.
*   **Online Motor Learning:** Through experiments in real-time physical human-robot interaction, a network employing FEGP successfully acquired three distinct cyclic motor patterns without requiring offline pretraining or explicit task boundary signals.
*   **Improved Performance Metrics:** Controlled experiments demonstrated that FEGP significantly boosted both the coverage of learned motor repertoires and the retention of previously acquired patterns. This retention remained effective even when the learned patterns were no longer in the immediate observation window.
*   **Comparison to Other Methods:** FEGP outperformed alternative approaches, including using a constant learning rate (matched to the average FEGP rate) and replaying learned data with disrupted temporal order. This highlights the importance of the timing of plasticity relative to environmental interaction.
*   **Core Insight:** The research concludes that the temporal scheduling of plasticity, particularly in relation to discrepancies between the robot's model and the environment's behavior, is critical for maintaining learned dynamics during ongoing online learning.

## Significance for Human-AI/Robot Interaction
This work has direct implications for creating more adaptable and resilient AI and robotic systems that can learn and evolve alongside human interaction. The ability to continuously acquire new skills while reliably retaining old ones is fundamental for long-term, naturalistic human-robot collaboration and the development of more sophisticated interactive agents.

## Sources

*   Free-Energy-Gated Plasticity for Real-Time Online Motor Learning in Physical Human--Robot Interaction (arxiv.org/abs/2608.23000v1)

## Last updated
2026-08-25

## Related pages

*   [[human-robot-interaction]]
*   [[trust]]
*   [[anthropomorphism]]