# Source Summary: Design and Evaluation of Epira: An Automated Interview System for Case Investigation and Contact Tracing

**Last updated:** 2026-11-21

## Overview

This paper presents Epira, an innovative automated interview system designed to improve the efficiency and effectiveness of case investigation and contact tracing. Epira leverages a protocol-controlled Large Language Model (LLM) to ensure adherence to established protocols while providing a more natural conversational experience than traditional web forms.

## Key Findings

*   **Improved Data Completeness:** Epira significantly outperformed open-ended interviewers in capturing required fields and ground-truth contacts during simulated case investigations.
*   **Protocol Control is Key:** The study highlights that enforcing a structured protocol within the LLM interaction was more critical for data completeness than the choice of LLM backend (local vs. cloud).
*   **Favorable User Experience:** In a study with human volunteers, Epira achieved 100% completion rates and received high ratings for usability (mean SUS of 82.95) and trust (mean trust of 3.85).
*   **Privacy-Preserving Potential:** The system demonstrated similar performance with both local and cloud LLM deployments, suggesting potential for privacy-preserving applications using local models.
*   **Adaptability:** Epira can be adapted to new diseases by simply uploading new questionnaires.

## Methodology

*   **System Design:** Epira combines LLM dialogue with a rule-based controller to enforce protocol adherence, manage safety handoffs, and structure case records.
*   **Study 1 (Simulated Cases):** Evaluated Epira and open-ended conditions using simulated measles and gonorrhea cases to measure field and contact recovery rates.
*   **Study 2 (Volunteer Study):** Assessed completion, usability, acceptability, and trust with 72 volunteers in a 2x2 disease-by-model interview.

## Implications

Epira offers a promising solution for public health initiatives that require efficient and reliable data collection through interviews. Its design addresses limitations of existing methods by balancing conversational AI with necessary procedural control, leading to better outcomes and user acceptance.

## Sources

*   [raw/design-and-evaluation-of-epira-an-automated-interview-system-for-case-investigation-and-contact-tracing.md]

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[trust]]
*   [[measurement-tools]]
*   [[medical-ai]]