# Provenance-Aware Belief Updating in Human-AI Feedback Loops

## Main Findings

This paper introduces Latent Quotient Evidence Training (LQET), a novel objective for improving how AI models update their beliefs in repeated human-AI interaction scenarios. Traditionally, AI might over-emphasize information that is simply repeated frequently. LQET addresses this by enabling AI to understand and utilize the **provenance** (origin and history) of information, rather than just counting how many times a report appears. This ensures that belief updates are driven by genuine new evidence, not just the recurrence of old evidence.

## Key Concepts

*   **Provenance-Aware Belief Updating:** The core idea is to use the lineage of data (who or what provided it, how it was processed) to guide belief changes, not just the raw data itself.
*   **Human-AI Feedback Loops:** The research focuses on scenarios where humans and AI interact iteratively, with AI outputs potentially feeding back into the system.
*   **Latent Quotient Evidence Training (LQET):** A specific training method developed to achieve provenance-aware updating. It combines Bayesian supervision with constraints to ensure stability and consistency in belief updates.
*   **Distinguishing Novelty from Repetition:** LQET aims to prevent AI from mistaking repeated information for independent corroboration, which can lead to skewed beliefs.

## Evaluation and Results

*   **Reduced Error and Drift:** LQET significantly reduced the Root Mean Squared Error (RMSE) in updating beliefs based on new evidence (41-44%) and dramatically decreased the drift in model predictions over multiple interaction steps (89-91% reduction after eight relays).
*   **Model Agnostic:** The improvements were observed across different language model architectures (Qwen3-4B, Phi-4-mini).
*   **Closed-Loop Simulation:** The effectiveness was demonstrated in a simulated interactive environment, showing that LQET leads to more responsive and evidence-based AI behavior.

## Impact

This work proposes a method to build more **dynamic** and **reliable** human-AI systems. By correctly weighting evidence based on its origin and novelty, AI can become a more trustworthy partner in complex interactions, ensuring that its learning and decision-making are grounded in actual new insights rather than mere repetition.

## Sources

*   `provenance-aware-belief-updating-in-human-ai-feedback-loops.md`

## Last updated

2026-10-13

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[metacognitive-agent-architectures]]
*   [[persuasion-and-influence]]
*   [[explainability]]