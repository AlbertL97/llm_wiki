# Source Summary: Teaching a Large Language Model Tutor to Withhold the Answer

## Overview

This paper presents a system designed to make Large Language Model (LLM) tutors more effective by teaching them to strategically withhold answers. The core innovation lies in a 
'supervisor architecture' and an 
'evidence-driven tuning method' that enforce a contract for answer withholding. This approach aims to prevent students from becoming overly reliant on direct answers during practice, thereby improving their performance on subsequent assessments.

## Key Findings

*   **The Challenge of Answer Withholding:** LLMs can struggle to reliably withhold answers, especially under pressure from a frustrated student, which can negatively impact learning outcomes.
*   **Supervisor Architecture:** A novel architecture is proposed that includes a policy core to set help limits, a code detector, and an LLM judge to enforce a per-turn contract for answer withholding.
*   **Evidence-Driven Tuning:** An automated evaluation method using scripted student personas and a stronger LLM for re-scoring is developed to tune the withholding behavior without human subjects.
*   **Iterative Improvement:** The tuning process identified an "over-help ladder" of issues, allowing for systematic fixes and improvements.
*   **Successful Implementation:** The system achieved full compliance with its defined criteria for answer withholding.

## Related Concepts

*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[trust]]
*   [[measurement-tools]]
*   [[persuasion-and-influence]]

## Sources

*   Teaching a Large Language Model Tutor to Withhold the Answer: A Supervisor Architecture and an Evidence-Driven Method for Tuning Socratic Behavior. [raw/teaching-a-large-language-model-tutor-to-withhold-the-answer.md]

## Last updated

2026-08-13