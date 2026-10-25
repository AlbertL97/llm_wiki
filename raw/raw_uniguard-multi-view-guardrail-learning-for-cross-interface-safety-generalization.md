# UniGuard: Multi-View Guardrail Learning for Cross-Interface Safety Generalization

**Authors:** Not explicitly mentioned in the provided text, assume listed on arXiv.
**Date:** 2026-10-25 (based on provided update date, actual paper date may differ)

## Comprehensive Summary:

This research addresses a critical limitation in current AI safety guardrails: their tendency to fail when encountering safety cases presented through interfaces different from those they were trained on. Traditional guardrails often learn from fixed prompt or response formats, becoming unreliable when faced with conversational turns, agent trajectories, multi-agent interactions, or policy-conditioned inputs.

To overcome this, the paper proposes **UniGuard**, a training framework designed to learn **interface-invariant safety representations**. This is achieved by leveraging multiple semantically aligned views of the same safety case during training.

Key contributions and findings include:

*   **UniGuard Framework:** A training paradigm that learns robust safety representations applicable across diverse interaction interfaces.
*   **UniGuard-FT Dataset:** A new dataset constructed by transforming 1,000 public safety cases into five distinct views: prompt, response, multi-turn conversation, agent-trace, and multi-agent-trace.
*   **Training Methodology:** UniGuard employs a combination of classification, supervised contrastive learning, and asymmetric confidence calibration losses to optimize its safety representations.
*   **Performance Gains:** When evaluated on unseen-interface benchmarks (ATBench, PolicyGuardBench, and DynaBench), UniGuard-0.6B demonstrated significant improvements, achieving an average of 45.12 F1 points higher than its pretrained guardrail counterpart.
*   **Calibration Improvement:** The framework also reduced expected calibration error by 35.41 points, indicating more reliable confidence estimates.
*   **Efficiency and Competitiveness:** Notably, UniGuard-0.6B, a relatively small model (0.6 billion parameters) trained solely on synthetic data, performs competitively with much larger and more sophisticated models like Claude-Sonnet-4.5 and GPT-5.2.

This work has direct implications for ensuring the safety and trustworthiness of AI systems in various human-AI and human-robot interaction contexts, particularly those involving dynamic or complex conversational and agentic behaviors.