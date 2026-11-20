## FLUID: Flexible, Evidence-Grounded Situated Task Guidance

**Authors:** Anonymous

**Date:** 2026-11-17 (v1 submission date)

**Abstract:**
Real-time task guidance is inherently flexible: when an agent guides a user through a task, multiple responses and timings can be appropriate, and sometimes the best action is to remain silent. Existing benchmarks often miss this flexibility by treating synthesized dialogues as fixed targets for what to say and when to say it. We introduce FLUID (Flexible, Evidence-Grounded Situated Task Guidance), a unified framework for modeling, evaluating, and enabling flexible interaction in multimodal task guidance. Using naturally occurring human-human guidance from WTaG and HoloAssist, FLUID grounds interventions in their supporting evidence, necessity, and timing flexibility, and uses this representation both to evaluate flexible guidance and to build a real-time agent for task guidance. Our agent achieves the strongest overall balance of response correctness, intervention precision, timely guidance, and response latency among evaluated systems, while still leaving room for improvement in avoiding speech overlap. Together, FLUID moves situated task guidance beyond rigid reference matching toward more natural and adaptive human-AI interaction.

**Key Findings and Contributions:**

*   **Problem:** Existing task guidance systems and benchmarks lack flexibility, treating synthesized dialogues as fixed targets for responses and timing.
*   **Solution:** Introduction of FLUID (Flexible, Evidence-Grounded Situated Task Guidance) framework.
*   **FLUID Framework Components:**
    *   **Modeling:** Captures flexibility in responses and timing.
    *   **Evaluation:** Assesses flexible guidance based on evidence, necessity, and timing.
    *   **Enabling Flexible Interaction:** Builds a real-time agent for adaptive task guidance.
*   **Data Source:** Utilizes naturally occurring human-human guidance from WTaG and HoloAssist datasets.
*   **Agent Performance:** The FLUID agent demonstrates a strong balance in response correctness, intervention precision, timely guidance, and response latency compared to other evaluated systems.
*   **Future Work:** Areas for improvement include better avoidance of speech overlap.
*   **Impact:** Moves situated task guidance towards more natural and adaptive human-AI interaction by departing from rigid reference matching.

**Project Page:** https://fluid-guidance.github.io