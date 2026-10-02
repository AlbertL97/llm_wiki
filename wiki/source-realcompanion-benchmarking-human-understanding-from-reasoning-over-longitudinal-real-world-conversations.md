# RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations

**Last updated:** 2026-10-02

## Introduction

This paper presents "RealCompanion," a system and benchmark designed to evaluate an AI companion's capability to understand human users through longitudinal, real-world conversations. The core challenge lies in an AI's ability to remember past interactions, infer user characteristics, and utilize contextual information effectively over extended periods. Due to the private nature of such data, the authors have created a synthetic benchmark simulating real conversations.

## Benchmark Details

*   **Dataset:** Comprises 10 real-world conversational relationships.
*   **Scale:** Up to 120 days of interaction with over 27,218 messages.
*   **Components:** Includes conversation logs, derived user profiles, personas, chat ground truth, and question sets, all meticulously linked to specific conversational messages.
*   **Evaluation:** Each label within the benchmark is accompanied by a reasoning trace, allowing for stage-by-stage verification against the conversation.

## Key Findings

*   **Recency Bias:** The past is rarely needed, and when it is, the relevant information is typically found in recent messages. A recency window successfully identifies the required message for 95.9% of probes, with only 2.2% requiring deeper memory recall.
*   **Memory Need Detection:** Existing AI models struggle to accurately detect when memory recall is necessary. Authoring questions over the same histories can inadvertently leak cues, and explicitly labeling messages as memories artificially inflates their usage by 10-14 percentage points.
*   **Persona Reconstruction Efficiency:** Three agent systems demonstrated comparable performance (F1 scores) in reconstructing user personas, but with a 31-fold difference in computational cost, highlighting trade-offs between performance and efficiency.

## Conclusion

The RealCompanion benchmark provides a valuable resource for advancing research in AI understanding of human conversation over time. The findings suggest that while long-term memory is conceptually important, its practical application in current AI companions needs refinement, particularly in predicting the necessity of recall and in optimizing the cost-performance of persona modeling.

## Sources

*   [RealCompanion: Benchmarking Human Understanding from Reasoning over Longitudinal Real-World Conversations](http://arxiv.org/abs/2610.01780v1)

## Related pages

*   [[ai-companions]]
*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[measurement-tools]]
*   [[explainability]]
*   [[trust]]