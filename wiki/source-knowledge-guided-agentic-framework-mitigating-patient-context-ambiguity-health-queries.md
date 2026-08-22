# Source Summary: A knowledge-guided agentic framework for mitigating patient-context ambiguity in health queries

This paper presents a novel **knowledge-guided agentic framework** designed to enhance the accuracy and safety of healthcare chatbots when responding to underspecified patient queries. Recognizing that chatbots often lack crucial patient-specific context (such as symptoms, diagnoses, medications, or allergies), the framework acts as an intermediary. It intelligently queries the patient for necessary information using a task-specific knowledge graph to guide its questions, thereby creating a more informed prompt for the downstream language model. Evaluations demonstrate significant improvements in accuracy for both diagnosis retrieval and dietary safety classification tasks compared to traditional direct answering methods.

## Key Findings

*   **Ambiguity in Health Queries:** Patients frequently submit vague health queries to chatbots, leading to potential misunderstandings and inaccurate AI responses due to missing personal health context.
*   **Agentic Framework for Clarification:** A proposed framework proactively addresses this by:
    *   Analyzing the initial query.
    *   Leveraging a knowledge graph to generate hypotheses.
    *   Identifying and requesting specific missing patient information.
    *   Formulating a comprehensive prompt for the final AI response.
*   **Empirical Validation:** The framework was tested on five different language models across two benchmarks (diagnosis retrieval and dietary safety classification).
*   **Performance Gains:** The framework resulted in substantial increases in accuracy, including over 57.1 percentage points in Top-1 accuracy for diagnosis retrieval and improved accuracy and correlation coefficients in dietary safety classification.

## Sources

*   [A knowledge-guided agentic framework for mitigating patient-context ambiguity in health queries](http://arxiv.org/abs/2608.19875v1)

## Last updated

2026-08-22

## Related pages

*   [[medical-ai]]
*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[trust]]