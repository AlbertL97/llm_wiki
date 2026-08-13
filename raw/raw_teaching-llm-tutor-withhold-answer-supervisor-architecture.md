# Teaching a Large Language Model Tutor to Withhold the Answer: A Supervisor Architecture and an Evidence-Driven Method for Tuning Socratic Behavior

**Authors:** Not specified in the provided snippet.
**Date:** 2026-08-13 (based on the URL v1 implies first version and the date in the prompt)

## Overview

This research addresses a critical challenge in AI tutoring: how to design Large Language Models (LLMs) that can effectively withhold answers to promote deeper learning, rather than simply providing solutions that might hinder long-term retention and understanding. The paper proposes a 
'supervisor architecture' and an 
'evidence-driven tuning method' to achieve this Socratic behavior in LLM tutors.

## Key Findings and Contributions

*   **Problem Statement:** LLM tutors, while capable of generating answers, often struggle with reliably withholding them, especially when faced with frustrated students. This can lead to superficial learning where students score well during practice but poorly on subsequent tests.
*   **Proposed Solution: Supervisor Architecture:** A multi-component system is introduced to enforce answer-withholding as a per-turn, machine-checkable contract. This architecture includes:
    *   A non-LLM policy core that sets a 'help ladder' or ceiling for assistance based on trusted learner state.
    *   A deterministic detector to strip solution code.
    *   A separate LLM 'judge' that verifies each 'risky' reply against the contract.
*   **Tuning Method: Evidence-Driven Evaluation:** An automated evaluation process is developed that does not require human subjects. Scripted student personas interact with the tutoring system, and their performance is re-scored by a stronger LLM. This process records the stated reasons for each rejection, allowing for targeted fixes.
*   **Discoveries through Tuning:** The tuning process revealed an interpretable 'over-help ladder' of failures, ranging from blatant solution leaks to over-citing general facts. Each fix exposed the next layer of the problem.
*   **Outcome:** The implemented tutor achieved full compliance with all four acceptance criteria for reliable answer-withholding.
*   **Reusability:** The proposed 'measure, diagnose, and fix' loop is offered as a reusable methodology for any LLM agent that needs to refuse a capability it possesses.

## Implications for AI Interaction

This work is highly relevant to human-AI interaction by focusing on the *pedagogical* aspect of AI communication. By forcing the AI to adopt a more Socratic and less direct approach, it impacts the user's learning experience and potentially their perception of the AI's helpfulness and intelligence. The research touches upon:

*   **Trust:** Ensuring the AI provides *valuable* help, even if it means withholding direct answers, can build trust in the AI's pedagogical efficacy.
*   **Chatbots:** Directly applies to the design and improvement of chatbot tutors.
*   **Measurement Tools:** Introduces novel methods for evaluating AI behavior in specific contexts.

## Limitations

*   The paper focuses on a specific tutoring application, and its direct applicability to other domains may vary.
*   The reliance on scripted student personas for evaluation might not fully capture the complexity and unpredictteness of real human student interactions.