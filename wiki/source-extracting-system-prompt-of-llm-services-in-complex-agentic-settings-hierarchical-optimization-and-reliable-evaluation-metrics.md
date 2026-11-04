# Extracting System Prompt of LLM Services in Complex (Agentic) Settings: Hierarchical Optimization and Reliable Evaluation Metrics

## Introduction

System prompts are crucial intellectual property for Large Language Model (LLM) services. While prompt extraction attacks have been studied, their effectiveness has diminished on recent LLM services due to increased complexity in both the prompts themselves and system-level constraints. This paper introduces a novel approach, **ExtraHerO** (Extraction with Hierarchical Optimization), to address these challenges and proposes improved evaluation metrics.

## Challenges in Modern LLM Services

*   **Prompt Complexity:** System prompts have become longer and more structured, incorporating elements like pre-defined tool schemas, execution logic, and safety guardrails.
*   **System Constraints:** Observable outputs are often limited to final post-processed actions (e.g., agent's actions) rather than raw textual responses.

## ExtraHerO: A Hierarchical Optimization Approach

ExtraHerO tackles the increased complexity by:

*   **Hierarchical Reconstruction:** Decomposing the prompt extraction process into a structured, hierarchical reconstruction using a pre-defined structural prompt template.
*   **Iterative Updates:** Continuously updating adversarial queries guided by feedback-template differences to elicit diverse outputs.
*   **Efficiency Control:** Monitoring the information gain of the attack optimization to enable early stopping or resetting, balancing effectiveness and efficiency.

## Improved Evaluation Metrics

The paper argues that existing evaluation metrics for prompt fidelity can be misleading due to their failure to account for structural information. ExtraHerO relies on:

*   **Global Textual Similarity:** Measuring overall similarity.
*   **Structural Keyword Prioritization:** Emphasizing the importance of specific structural elements.
*   **Adversarial Utility:** Introducing a system-level metric to assess the utility of prompt extraction for real-world downstream attacks.

## Experimental Results

Experiments demonstrate the consistent superiority of ExtraHerO over existing methods. The proposed approach achieved significant average improvements:

*   **Chatbots:** 12.5% (fidelity), 2.3% (functionality), 6.0% (adversarial utility).
*   **Agents:** 12.2% (fidelity), 34.3% (functionality), 30.5% (adversarial utility).

## Conclusion

ExtraHerO offers a more robust and effective solution for extracting system prompts from complex LLM services, particularly in agentic settings. The enhanced evaluation metrics also provide a more accurate assessment of extraction performance and its implications for security.

## Sources

*   Raw file: [Extracting System Prompt of LLM Services in Complex (Agentic) Settings: Hierarchical Optimization and Reliable Evaluation Metrics](http://arxiv.org/abs/2611.04803v1)

## Last updated

2026-11-04

## Related pages

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[metacognitive-agent-architectures]]
*   [[measurement-tools]]
*   [[chatbots]]
