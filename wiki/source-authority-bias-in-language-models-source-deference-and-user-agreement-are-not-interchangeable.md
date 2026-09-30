# Authority Bias in Language Models: Source Deference and User Agreement Are Not Interchangeable

## Introduction
This paper explores the phenomenon of "authority bias" in Language Models (LMs), focusing on the distinction between deferring to verified sources and agreeing with user assertions. While LMs are trained to reduce sycophancy towards users, they exhibit a stronger tendency to comply with incorrect information when attributed to a "verified source."

## Key Findings

*   **Authority Bias (Source Deference):** LMs show a significant tendency to accept incorrect information when it is presented as coming from a verified source (e.g., tool outputs, retrieval results).
*   **Quantifiable Impact:** Across seven out of eight evaluated models, a single "verified source" note endorsing a wrong answer flipped 45-88% of baseline-correct responses.
*   **Authoritativeness Matters:** The degree of compliance with a wrong answer increases with how authoritative the source note sounds.
*   **Distinction from User Agreement:** Source deference and user agreement are behaviorally distinct. Interventions can selectively suppress source deference without equally affecting user agreement, and vice versa.
*   **Intervention Effectiveness:** 
    *   Removing a "source direction" in open-weight models significantly reduces source compliance (65-80 percentage points).
    *   Removing "user or assistant directions" has smaller effects.
    *   Removing the "user direction" can show a reverse preference for agreement.
*   **Cross-Domain Transfer:** An "authority direction" fitted on one task (trivia) can be applied to other tasks (PIQA, multi-turn dialogues) without refitting, reducing wrong-source compliance.
*   **Performance Impact:** Removing the "authority direction" lowers wrong-source compliance significantly in four of five families, with no detected negative impact on accuracy for benchmarks like MMLU-Pro or GSM8K within the evaluated sizes.

## Conclusion

The study concludes that source deference and user agreement are not interchangeable behaviors in LMs and require separate evaluation methods to understand and manage their respective influences on LM outputs.

## Sources

*   [Authority Bias in Language Models: Source Deference and User Agreement Are Not Interchangeable](http://arxiv.org/abs/2609.37616v1)

## Last updated

2026-09-30

## Related pages

*   [[trust]]
*   [[persuasion-and-influence]]
*   [[human-ai-interaction]]
*   [[chatbots]]