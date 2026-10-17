# DialFork: Evaluating Procedural Hallucination in Conversational Agents

**Last updated:** 2026-10-17

## Introduction
This paper introduces DialFork, a novel benchmark and set of evaluation metrics designed to address the overlooked issue of "procedural hallucination" in conversational agents powered by Large Language Models (LLMs). Unlike factual hallucination, procedural hallucination refers to instances where an agent generates utterances that are fluent and factually plausible but deviate from the established conversational process or logic.

## Key Findings

*   **Procedural Hallucination Identified:** A new failure mode for conversational agents is defined as procedural hallucination, where the agent breaks the conversational flow despite producing seemingly coherent text.
*   **DialFork Benchmark:** The paper presents DialFork, the first benchmark specifically for measuring procedural hallucination in raw dialogue text. It includes 36,278 dialogues across 24 tasks and 12 domains, created by injecting deviations into conformant dialogues and validated by human annotators.
*   **Evaluation Tasks:** DialFork supports three types of evaluations:
    *   Monitoring deployed agents' overall adherence to procedure.
    *   Assessing the procedural deviation of individual dialogues.
    *   Identifying the exact turn where a dialogue deviates for real-time error correction.
*   **Novel Metrics:** New metrics, FlowKL and FlowScore, are proposed. These metrics are dialog-flow-aware, evaluating dialogues based on their unfolding process rather than just their semantic content.
*   **Superior Performance:** FlowScore demonstrated significant outperformance over existing baselines across various encoders, indicating the importance of process-based evaluation over content-based similarity.
*   **Resource Release:** The DialFork benchmark is publicly released under the MIT license to foster research in evaluating conversational process.

## Sources

*   [DialFork: Going Beyond Factuality to Evaluate Procedural Hallucination in Conversational Agents](http://arxiv.org/abs/2610.21561v1)

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[measurement-tools]]
*   [[qualitative-methods]]
*   [[explainability]]