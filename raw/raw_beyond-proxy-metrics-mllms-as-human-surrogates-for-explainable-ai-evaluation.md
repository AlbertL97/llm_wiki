# Beyond Proxy Metrics: MLLMs as Human Surrogates for Explainable AI Evaluation

**Authors:** Not specified in the provided text.
**Date:** 2026-11-12 (based on the URL format and instructions).

## Abstract

Explainable AI (XAI) has expanded into a broad and impactful research area, but the fundamental question of how best to evaluate explanation techniques has proven frustratingly elusive. Methodologies typically revolve around either proxy metrics which tell us little about the utility of an explanation, or human evaluation which---while generally considered the gold standard---is expensive, difficult to scale, and challenging to reproduce. In this paper, we investigate if Multimodal Large Language Models (MLLMs) can act as surrogate human participants to automate the evaluation of XAI. To do this, we first propose a ``purpose-grounded'' evaluation framework with metrics applicable to both MLLMs and human users alike. Then, we offer some conceptual insights as to why and when we can trust these models to automate this process. Lastly, we conduct extensive empirical testing across five purpose-grounded areas such as model improvement and fourteen popular MLLMs. Results indicate that all models trend positively, but OpenAI and Qwen models generally show higher alignment compared to other variants, which would be the recommended choices in practice. We expect our insights not to replace user testing, but rather to help XAI researchers complement their current evaluation methodologies and move the field away from heavy reliance on proxy metrics for measuring explanation utility.

## Key Findings

*   **Problem:** Evaluating Explainable AI (XAI) is challenging due to the limitations of proxy metrics (lack of utility insight) and human evaluation (costly, difficult to scale, hard to reproduce).
*   **Proposed Solution:** Investigate the use of Multimodal Large Language Models (MLLMs) as human surrogates for XAI evaluation.
*   **Methodology:**
    *   Propose a "purpose-grounded" evaluation framework with metrics suitable for both MLLMs and humans.
    *   Provide conceptual insights into the trustworthiness and conditions for using MLLMs as surrogates.
    *   Conduct empirical testing on five purpose-grounded areas and fourteen MLLMs.
*   **Results:**
    *   All tested MLLMs showed positive trends in alignment.
    *   OpenAI and Qwen models demonstrated higher alignment compared to other variants.
    *   These models are recommended for practical use as XAI evaluators.
*   **Implications:** The findings aim to help XAI researchers complement existing user testing, rather than replace it, by providing a more scalable method to assess explanation utility.

## Discussion

The paper addresses a critical bottleneck in XAI research: reliable and scalable evaluation. By exploring MLLMs as surrogates, the authors offer a novel approach that could significantly accelerate the development and deployment of effective XAI systems. The "purpose-grounded" framework is a key contribution, aiming to bridge the gap between MLLM and human evaluation. The practical recommendations for specific MLLM models provide immediate value to researchers.