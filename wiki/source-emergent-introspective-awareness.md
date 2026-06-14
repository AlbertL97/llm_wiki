# Source: Emergent Introspective Awareness in Large Language Models

**Summary**: A summary page for the Anthropic paper "Emergent Introspective Awareness in Large Language Models" by Jack Lindsey. The study uses activation steering (concept injection) to causally demonstrate that language models possess functional awareness and control of their own internal representations.

**Sources**:  
- Emergent Introspective Awareness in Large Language Models.md

**Last updated**: 2026-06-04

---

## Main content

This study evaluates whether Large Language Models (LLMs) are aware of their own internal representations by applying **concept injection** (activation steering) to manipulate hidden states and observing how these modifications affect the model's self-reports (source: Emergent Introspective Awareness in Large Language Models.md).

Key empirical findings and experimental structures include:
- **Introspection Criteria**: The paper formalizes a framework consisting of four criteria to distinguish genuine model introspection from confabulations: Accuracy, Grounding, Internality, and Metacognitive Representation (source: Emergent Introspective Awareness in Large Language Models.md).
- **Injected thoughts**: Concept vectors extracted from lowercase text prompts (such as "poetry" or "origami") are injected into the residual stream (source: Emergent Introspective Awareness in Large Language Models.md). Capable models (such as Claude Opus 4 and 4.1) detect the injection immediately (~20% success rate at optimal depth and strength), identifying the concept before it surfaces in their outputs (source: Emergent Introspective Awareness in Large Language Models.md).
- **Distinguishing thoughts from text**: Models maintain the ability to transcribe text inputs while reporting separate thoughts injected over the same token positions (source: Emergent Introspective Awareness in Large Language Models.md).
- **Prefill detection**: Models verify their authorship of past outputs by reading their own activations prior to their previous response (source: Emergent Introspective Awareness in Large Language Models.md). An artificial prefill is disavowed, but accepting it can be retroactively induced by injecting the corresponding concept vector prior to the prefill (source: Emergent Introspective Awareness in Large Language Models.md).
- **Intentional control**: Models demonstrate control over their representations, modulating (reducing or increasing) the activation strength of a concept in their residual stream when instructed or incentivized to think or not think about it (source: Emergent Introspective Awareness in Large Language Models.md).

Across all experiments, the most capable models (Claude Opus 4 and 4.1) perform the best, suggesting introspective awareness correlates with general model capability (source: Emergent Introspective Awareness in Large Language Models.md).

## Related pages

- [[introspective-awareness]]
- [[measurement-tools]]
