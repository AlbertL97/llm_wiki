# Source Summary: How Developers Experience Debugging Unfamiliar Codebases with Code Tours Generated and Evaluated by Local LLMs

## Overview

This research investigates the human-AI interaction dynamics involved when developers use Large Language Model (LLM) generated code tours to debug unfamiliar codebases. The study examines developer preferences for the characteristics of these AI-authored tours and their calibration of trust towards them. It also critically assesses the reliability of LLMs themselves in evaluating the quality of these generated tours.

## Key Findings

*   **Developer Preferences:** Developers favor code tours that dynamically adjust detail with code length, avoid redundancy, are easily scannable, and employ a guiding tone. However, some preferences can conflict, such as the preferred mood of the language used.
*   **Trust Dynamics:** A significant finding is that developers exhibit differential trust based on their perception of whether a description is human-written versus AI-generated. Descriptions perceived as human-written were trusted more.
*   **Limitations of Stack Traces:** The study highlights that standard debugging aids like stack traces are often insufficient for identifying all steps developers deem relevant when navigating complex code.
*   **LLM Evaluation Unreliability:** The LLMs used to evaluate the generated code tours demonstrated significant unreliability. Common issues identified include sycophancy (agreeing with flawed inputs), confabulation (generating false but plausible information), and general incoherence.
*   **Implications for AI Development:** The research underscores the necessity for future work in fine-tuning LLMs for specific tasks like code tour generation, personalizing AI outputs to user needs, improving step selection beyond basic diagnostics, and crucially, developing methods for calibrating human trust in AI systems to ensure appropriate use and prevent over-reliance or under-utilization.

## Sources

*   [How Developers Experience Debugging Unfamiliar Codebases with Code Tours Generated and Evaluated by Local LLMs](http://arxiv.org/abs/2607.26987v1)

## Last updated

2026-07-30

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[explainability]]
*   [[qualitative-methods]]