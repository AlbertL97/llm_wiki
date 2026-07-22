# Prompt Design at Scale: How Format, Instruction Count, and Context Length Shape Instruction Adherence and Hallucination in Large Language Models

**Authors:** [Not specified in provided text, assumed to be the authors of the arXiv paper]
**Date:** 2026-07-22 (based on requested update date)

**Abstract:**
Practitioners make three prompt-design decisions with almost no controlled evidence behind them: how to format instructions and context (markdown, plain text, prose, or tabular), how many simultaneous instructions a system prompt can carry before compliance degrades, and how much context a model can hold before recall and honesty degrade. We report two controlled experiments crossing all three factors on one held, contamination-free synthetic corpus (the "Book of Veyra," 8,780 uniquely-named entities, deterministically regenerable from a fixed seed), evaluated across five models.

**Experiment 1: Instruction Count and Format**

*   **Objective:** Measure instruction-following decay as rule count N grows from 10 to 160, crossed with four formats (markdown, plain text, prose, tabular) and system-prompt vs. user-turn placement.
*   **Key Findings:**
    *   Perfect-response rate collapses to zero by N=80 for every model, format, and placement.
    *   Placement (system-prompt vs. user-turn) produces effects at least as large as format at N=160 in most models, but the direction is model-specific.
    *   No model shows a reliable markdown advantage; one 35B model favors plain text instead.

**Experiment 2: Context Length and Format**

*   **Objective:** Measure recall accuracy, false-premise sycophancy, and absent-fact fabrication across a 2k-to-512k-token context ladder in the same four formats.
*   **Key Findings:**
    *   Recall stays near ceiling through 64-128k tokens, then degrades sharply and format-dependently.
    *   One model's accuracy spread reaches 48 points at 128k tokens.
    *   Fabrication never occurs (0/5,760 probes).
    *   Sycophancy stays negligible (<=8.3%).
    *   What rises sharply near each model's context ceiling is outright refusal to answer (0% to 79-90%), distinct from sycophancy or fabrication.
    *   Neither pre-registered format ordering holds, and token overhead (+22% to +37% over plain text) further changes which format is preferable where accuracy spread is genuine.

**Dataset and Tools:**
*   A contamination-free synthetic corpus: the "Book of Veyra" (8,780 uniquely-named entities).
*   VeyraBench: Full harness, corpus generator, and raw results are released.

**Implications:**
This research provides crucial empirical evidence for designing effective prompts for LLMs, impacting how users interact with AI systems and the reliability of information provided by them. Understanding these limitations is vital for developing more robust and trustworthy AI applications, especially in contexts where high adherence and accuracy are critical.