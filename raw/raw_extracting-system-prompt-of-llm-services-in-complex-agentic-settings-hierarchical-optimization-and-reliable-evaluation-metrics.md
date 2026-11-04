# Extracting System Prompt of LLM Services in Complex (Agentic) Settings: Hierarchical Optimization and Reliable Evaluation Metrics

**Authors:** Not specified in the provided text.
**Date:** 2026-11-04 (based on the URL version v1)

## Summary

This paper addresses the challenge of extracting system prompts from increasingly complex Large Language Model (LLM) services, especially in agentic settings. Existing prompt extraction attacks are found to be substantially degraded due to the evolution of system prompts (longer, more structured, containing tool schemas, guardrails) and system-level constraints (observing only post-processed outputs, not raw responses).

To overcome these limitations, the authors propose **Extraction with Hierarchical Optimization (ExtraHerO)**. This method decomposes prompt extraction into a hierarchical reconstruction process guided by a pre-defined structural prompt template. It iteratively updates adversarial queries, leveraging feedback-template differences to observe diverse outputs and monitors information gain for early stopping or resetting the attack to balance effectiveness and efficiency.

Furthermore, the paper highlights the inadequacy of existing evaluation metrics for prompt fidelity, as they often neglect structural information. The proposed solution relies on global textual similarity while prioritizing structural keywords. A new system-level metric, **adversarial utility**, is also introduced to quantify the usefulness of prompt extraction for subsequent real-world downstream attacks.

Experimental results demonstrate the consistent superiority of ExtraHerO, showing significant average improvements in fidelity, functionality, and adversarial utility across both chatbots and agents compared to existing methods.

## Key Findings

*   **Problem:** Existing prompt extraction attacks are less effective on modern LLM services due to complex system prompts and restricted output observation.
*   **Solution:** **ExtraHerO** (Extraction with Hierarchical Optimization) is proposed, involving hierarchical reconstruction and iterative query updates.
*   **Methodology:** ExtraHerO uses structural prompt templates and feedback-template differences for optimization.
*   **Efficiency:** Information gain monitoring allows for early stopping or resetting of attacks.
*   **Evaluation:** New metrics are introduced for prompt fidelity (prioritizing structural keywords) and adversarial utility (measuring downstream attack potential).
*   **Results:** ExtraHerO shows consistent superiority in fidelity, functionality, and adversarial utility across various LLM applications.
