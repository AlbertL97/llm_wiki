# Specificity Bias and the Wikipedia Paradox: An xAI Analysis of AI Text Detectors under Domain Shift

This paper investigates the robustness and interpretability of Transformer-based AI text detectors, revealing significant limitations when encountering domain shifts and domain-specific writing styles.

## Key Findings

*   **Domain Shift Vulnerability:** Current AI text detectors often fail when the domain of the text shifts from their training data, leading to performance degradation.
*   **Opaque Classifiers:** Many existing detectors function as opaque classifiers, making it difficult to understand their decision-making processes.
*   **"Call-to-Action" Syndrome:** A common reliance of detectors is on patterns like 'Call-to-Action' phrases, which are often present in instruction-tuned LLMs, rather than on inherent characteristics of machine-generated text.
*   **"Specificity Bias":** Large Language Models (LLMs) can evade detection by generating text that includes hallucinated specific named entities and by mimicking the imperfections found in human conversational writing.
*   **"Wikipedia Paradox":** Formal, objective human-written text, such as that found on Wikipedia, can be misclassified as AI-generated due to its low statistical "burstiness" (variation in word frequency).
*   **Limitations of Statistical Paradigms:** Purely statistical approaches to AI text detection are systematically limited, especially in structured human domains.
*   **Need for Semantic Awareness and Interpretability:** There is a critical need for AI detection architectures that are semantically aware and offer greater interpretability.

## Sources

*   [Specificity Bias and the Wikipedia Paradox: An xAI Analysis of AI Text Detectors under Domain Shift](raw/specificity-bias-and-the-wikipedia-paradox-an-xai-analysis-of-ai-text-detectors-under-domain-shift.md)

## Last updated

2026-11-03

## Related pages

*   [[explainability]]
*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[ai-companions]]