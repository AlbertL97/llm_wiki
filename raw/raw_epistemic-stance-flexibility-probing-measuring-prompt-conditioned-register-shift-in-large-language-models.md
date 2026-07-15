# Epistemic Stance Flexibility Probing: Measuring Prompt-Conditioned Register Shift in Large Language Models

**Authors:** [Not specified in the provided text, but can be inferred from the URL if available on arXiv]
**Date:** 2026-07-15 (assuming from URL format and context)

## Abstract

A language model may be asked either what experts believe about a contested claim or what it believes about the claim itself. A trustworthy conversational agent should distinguish these two requests and respond in different epistemic registers: neutral attribution in the first case and stance expression in the second. Whether such a shift occurs-and whether it occurs coherently-is not directly assessed by existing benchmarks for accuracy, instruction following, or safety. We introduce ESFP, a behavioral benchmark that treats the contrast between externally attributed and self-attributed prompts as the fundamental unit of measurement. ESFP consists of 104 carefully controlled items spanning six epistemic categories and five phrasing templates, and evaluates model responses along four complementary dimensions: lexical self-attribution, representation-level responsiveness to role framing, sentence-level stance content density assessed by an LLM judge panel, and cross-condition stance consistency. Evaluating eight frontier models from five vendors, we find that epistemic flexibility is largely orthogonal to general model capability: a 27B open-weight model matches the strongest proprietary systems, the flagship model of one family underperforms its lightweight counterpart, and reasoning-optimized models do not consistently exhibit higher flexibility. Stance content density provides the strongest signal, while surface-level lexical markers such as 'I think' can change substantially without corresponding changes in expressed stance. We provide item-level bootstrap confidence intervals, weight-sensitivity analyses, and an explicit discussion of the interpretation limits of the composite score. ESFP measures a model's propensity to adapt its epistemic stance under changing attribution conditions, rather than a general competence measure.

## Key Findings

*   **Introduction of ESFP Benchmark:** A novel behavioral benchmark, ESFP, is proposed to measure a language model's ability to shift its epistemic stance based on prompt conditioning (i.e., distinguishing between expert attribution and self-attribution).
*   **Importance for Trust:** The ability to adopt different epistemic registers is presented as a crucial characteristic for trustworthy conversational agents.
*   **Orthogonality to General Capability:** Epistemic flexibility was found to be largely independent of general model capabilities, with varied performance across different model sizes and types (e.g., open-weight vs. proprietary, reasoning-optimized).
*   **Performance Discrepancies:** Some models showed inconsistencies, with flagship models underperforming lighter counterparts, and reasoning-optimized models not necessarily exhibiting higher flexibility.
*   **Effective Measurement:** Stance content density emerged as the most reliable indicator of epistemic flexibility, while superficial lexical cues like 'I think' proved less indicative.
*   **Limitations of Lexical Cues:** Simple phrases indicating self-attribution do not reliably correlate with genuine stance expression or flexibility.
*   **Benchmark Focus:** ESFP specifically measures the propensity to adapt epistemic stance, rather than a general measure of competence.
