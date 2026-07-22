# Source Summary: Prompt Design at Scale

## Overview

This paper presents findings from two controlled experiments investigating the impact of prompt design decisions on the performance of Large Language Models (LLMs). Specifically, the research examines how formatting, the number of instructions, and context length influence instruction adherence and the propensity for hallucination. The experiments utilized a unique, contamination-free synthetic corpus called the "Book of Veyra" and were evaluated across five different LLM models.

## Key Findings

*   **Instruction Adherence Degradation:** Instruction following degrades significantly as the number of simultaneous instructions increases. Perfect response rates drop to zero when the instruction count reaches 80, regardless of model, format, or placement.
*   **Format and Placement Effects:** While instruction placement (system prompt vs. user turn) can have effects as large as formatting at high instruction counts, the direction of this effect is model-specific. No consistent advantage was found for markdown formatting, with one model favoring plain text.
*   **Context Length and Recall:** LLMs maintain high recall accuracy up to 64-128k tokens. Beyond this threshold, recall degrades sharply in a format-dependent manner.
*   **Hallucination vs. Refusal:** The study found no instances of fabrication (hallucination of absent facts) and negligible sycophancy. Instead, at context ceilings, models are more likely to outright refuse to answer.
*   **Format Overhead:** The choice of format incurs token overhead, which can influence the practical preferability of a given format, especially when accuracy differences are marginal.

## Methodology

*   **Corpus:** "Book of Veyra" – a synthetic dataset with 8,780 uniquely named entities, deterministically regenerable.
*   **Experiments:** Two controlled experiments were conducted:
    *   Experiment 1: Tested instruction count (10-160) against four formats and two placement strategies.
    *   Experiment 2: Tested context length (2k-512k tokens) against the same four formats.
*   **Evaluation:** Assessed instruction adherence, recall accuracy, false-premise sycophancy, and absent-fact fabrication.
*   **Tools:** VeyraBench harness, corpus generator, and raw results are publicly released.

## Implications for Human-AI Interaction

Understanding how prompt design affects LLM behavior is crucial for developing reliable and trustworthy AI systems. The findings highlight the importance of careful prompt engineering to maximize instruction adherence and information accuracy, especially in applications where these qualities are paramount. The tendency for models to refuse rather than fabricate incorrect information is a significant insight for managing user expectations and designing appropriate error handling.

## Sources

*   [Prompt Design at Scale: How Format, Instruction Count, and Context Length Shape Instruction Adherence and Hallucination in Large Language Models](http://arxiv.org/abs/2607.19257v1)

## Last updated

2026-07-22

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[measurement-tools]]
*   [[chatbots]]