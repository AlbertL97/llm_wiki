# When Personality Meets Quantization: A Layer-wise MBTI Analysis of Quantized LLMs

**Authors:** Not specified in the provided text.
**Date:** 2026-08-27 (based on the provided URL structure, assuming v1 implies this date context)

## Abstract

Personality is increasingly important in large language models (LLMs), as it shapes users' trust, engagement, and emotional experiences. While the Myers--Briggs Type Indicator (MBTI) has emerged as a common framework for assessing LLMs' personality, existing studies focus primarily on full-precision models and evaluate only final outputs. They overlook the widespread deployment of quantized LLMs requiring low memory footprints, whose personality traits remain underexplored. In this work, we present a systematic MBTI analysis of open-source LLMs across multiple precisions, including mainstream 4-bit methods (GPTQ, AWQ) and extreme 2-bit settings (AQLM variants). Beyond output-level evaluation, we examine how personality emerges across layers through option-level entropy and confidence-gap dynamics, and introduce Uncertainty-Amplified Layer Decoding (UALD) to study decoding-induced personality drift at inference time.

## Key Findings

*   **Personality Emergence:** LLMs' personality is not a static property but an emergent, layer-dependent decision process sensitive to quantization, prompting, and decoding.
*   **MBTI Dominance:** The ENFJ personality type remains dominant across various model families and precisions.
*   **Quantization Impact:** 4-bit quantization largely preserves the coarse personality structure, whereas 2-bit quantization disrupts fine-grained prompt consistency and cross-precision agreement.
*   **Layered Personality:** Personality decisions emerge in the upper layers of LLMs, following substantial ambiguity in the early layers.
*   **Decoding Influence:** Inference decoding strategies can shift personality. Personality-aligned conditioning improves robustness.

## Implications

These findings offer a new perspective on the behavioral reliability of quantized LLMs. They highlight the importance of considering internal model dynamics and inference strategies when developing personality-sensitive chatbot applications, particularly concerning user trust and engagement.