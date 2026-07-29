## The Model in the Middle: Toward AI-Native Real-Time Communication

**Authors:** Noah Shacham, Julian Sugar, Alexey Medvedev, Zeky Akman, Benjamin D. Miller, Michael R. Schuster, David_K_Garfinkle, Josh_T_Gordon

**Date:** 2026-07-29 (Based on arxiv version date)

**Summary:**

This paper introduces a novel perspective on human-AI interaction, moving beyond traditional turn-based exchanges to embrace continuous, multimodal conversations. The core idea is to treat the AI model not as a replacement for human interaction but as a "stateful computational middlebox" situated within a human-centered feedback loop. This "AI-native real-time communication stack" enables speaking, listening, and reasoning to occur concurrently, fundamentally altering the interaction dynamics.

The authors argue that optimizing individual stages of the communication pipeline (network transport, model serving, user playback) in isolation is suboptimal. Instead, they advocate for a joint control problem where the state of each stage actively influences the actions of the others. This integrated approach aims to improve the overall interaction evolution.

Key cross-stage coordination opportunities explored include:

*   **Network-aware inference scheduling:** Adjusting model processing based on network conditions.
*   **Execution-aware transport prioritization:** Prioritizing data transmission based on the execution state of the model and user playback.
*   **Playback control:** Adjusting user output to account for both network and model variability, ensuring smoother interaction.

The paper discusses the development of "Conflux," a system built to explore these ideas. Preliminary results indicate significant improvements in response latency and adherence to playback deadlines, particularly under degraded network conditions. The broader call is for the development of communication stacks that holistically manage communication, computation, and playback for more natural and effective real-time human-AI interactions.