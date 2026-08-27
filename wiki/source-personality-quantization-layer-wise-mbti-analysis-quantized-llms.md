# When Personality Meets Quantization: A Layer-wise MBTI Analysis of Quantized LLMs

## Overview

This paper explores the personality of Large Language Models (LLMs), specifically focusing on how it is affected by quantization, a technique used to reduce model size and memory footprint. The research utilizes the Myers-Briggs Type Indicator (MBTI) framework to assess LLM personality, moving beyond previous studies that only analyzed full-precision models or final outputs. The study investigates the layer-wise emergence of personality in quantized LLMs (4-bit and 2-bit precisions) and examines the impact of decoding strategies on personality consistency.

## Key Findings

*   **Layer-Dependent Personality:** LLM personality is a dynamic process that emerges across different layers of the model and is influenced by quantization, prompting, and decoding methods.
*   **Dominant Personality Type:** The ENFJ personality type is consistently observed across different LLM families and precision levels.
*   **Impact of Quantization:** While 4-bit quantization generally maintains the broad personality structure, 2-bit quantization significantly affects prompt consistency and agreement across different precision levels.
*   **Personality Emergence in Upper Layers:** Personality traits become more defined in the later layers of the model, with earlier layers exhibiting more ambiguity.
*   **Decoding and Personality Drift:** The decoding process during inference can alter an LLM's personality. However, using personality-aligned conditioning can enhance the robustness of these personality traits.

## Significance

This research provides crucial insights into the behavioral reliability of quantized LLMs, especially for applications requiring specific personality traits in chatbots. Understanding the internal dynamics and inference strategies is vital for developing trustworthy and engaging AI companions.

## Sources

*   When Personality Meets Quantization: A Layer-wise MBTI Analysis of Quantized LLMs (arXiv:2608.25977v1)

## Last updated

2026-08-27

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[chatbots]]
*   [[explainability]]
*   [[measurement-tools]]
*   [[anthropomorphism]]