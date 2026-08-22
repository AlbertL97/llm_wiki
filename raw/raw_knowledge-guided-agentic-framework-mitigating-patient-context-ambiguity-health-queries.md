## A knowledge-guided agentic framework for mitigating patient-context ambiguity in health queries

**Authors:** N/A (ArXiv paper, authors not specified in the provided text)
**Date:** 2026-08-19 (v1)

**Abstract:** Patients often submit short, underspecified queries to healthcare chatbots that lack the patient-specific information needed to determine an appropriate response. Although these queries may be linguistically clear, they can support multiple plausible answers depending on undisclosed factors such as symptoms, diagnoses, medications, allergies, or dietary restrictions. A language model answering such a query directly may therefore rely on unsupported assumptions about the patient.

**Key Findings & Contributions:**

*   **Problem Identification:** Underspecified health queries to chatbots lead to potential inaccuracies due to missing patient-specific context (e.g., symptoms, diagnoses, medications, allergies).
*   **Proposed Solution:** A knowledge-guided agentic framework is introduced to proactively mitigate patient-context ambiguity before generating a final response.
*   **Framework Mechanism:**
    *   Operates between the patient and a downstream language model.
    *   Interprets the initial query.
    *   Utilizes a task-specific knowledge graph to construct plausible hypotheses.
    *   Identifies crucial missing patient-context variables.
    *   Asks targeted follow-up questions to gather necessary information.
    *   Combines the original query with the acquired context into a clarified prompt for the downstream model.
*   **Evaluation:** The framework was evaluated across five language models using two benchmarks:
    *   **Diagnosis Retrieval:** 1,034 symptom queries with clinically relevant evidence masked.
    *   **Dietary-Safety Classification:** 487 queries with decisive health context omitted.
*   **Performance Improvements:**
    *   **Diagnosis Retrieval:** Increased overall exact Top-1 accuracy by at least 57.1 percentage points and selective exact Recall@5 by at least 77.7 percentage points compared to direct prompting.
    *   **Dietary-Safety Classification:** Improved accuracy across all five models and achieved the highest Matthews correlation coefficient for four.
*   **Comparison:** The framework outperformed direct answering of underspecified queries and rephrasing without new information acquisition.

**Significance:** This work addresses a critical limitation in current healthcare chatbot interactions, aiming to improve the reliability and safety of AI-driven health advice by ensuring sufficient context is available.