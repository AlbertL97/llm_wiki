# UniGuard: Multi-View Guardrail Learning for Cross-Interface Safety Generalization

This paper introduces UniGuard, a training framework designed to enhance the safety and reliability of AI guardrails by enabling them to generalize across different interaction interfaces. Traditional guardrails often struggle when safety cases are presented in formats other than their training data, such as conversations or agent trajectories. UniGuard addresses this by learning interface-invariant safety representations from multiple views of the same safety case.

## Key Findings:

*   **Problem:** Existing AI guardrails are brittle and fail when safety cases appear in different interface formats (e.g., conversational, agentic) than their training data.
*   **Solution:** UniGuard proposes a multi-view learning framework that trains guardrails on semantically aligned representations of safety cases across various interfaces.
*   **Dataset:** The authors constructed the UniGuard-FT dataset, transforming 1,000 safety cases into prompt, response, multi-turn conversation, agent-trace, and multi-agent-trace views.
*   **Training:** The UniGuard model utilizes classification, supervised contrastive learning, and asymmetric confidence calibration losses.
*   **Performance:** UniGuard-0.6B showed substantial improvements (45.12 F1 points average) on unseen-interface benchmarks compared to its baseline, along with a significant reduction in calibration error (35.41 points).
*   **Efficiency:** Despite being a small model (0.6B parameters) trained on synthetic data, UniGuard-0.6B achieved competitive performance with much larger models like Claude-Sonnet-4.5 and GPT-5.2.

## Sources:

*   UniGuard: Multi-View Guardrail Learning for Cross-Interface Safety Generalization (arXiv:2610.30742v1)

## Last updated:

2026-10-25

## Related pages:

*   [[human-ai-interaction]]
*   [[trust]]
*   [[chatbots]]
*   [[explainability]]