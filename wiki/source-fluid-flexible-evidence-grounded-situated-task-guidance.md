# FLUID: Flexible, Evidence-Grounded Situated Task Guidance

## Introduction

This paper addresses the limitations of current task guidance systems and benchmarks, which often fail to account for the inherent flexibility required in real-time guidance. Unlike rigid systems that treat synthesized dialogues as fixed targets, this work introduces FLUID (Flexible, Evidence-Grounded Situated Task Guidance), a novel framework designed to model, evaluate, and enable more adaptive and natural multimodal task guidance. The framework emphasizes grounding interventions in evidence, necessity, and timing flexibility.

## Key Findings and Contributions

*   **Framework Development:** The core contribution is the FLUID framework, which allows for flexible interaction in task guidance scenarios. This includes considering multiple appropriate responses and timings, and understanding when silence is the best intervention.
*   **Data Utilization:** Naturally occurring human-human guidance data from the WTaG and HoloAssist datasets were used to ground the framework's understanding of flexible interventions.
*   **Evaluation Metrics:** FLUID utilizes its representation of evidence, necessity, and timing flexibility to evaluate guidance, moving beyond simple reference matching.
*   **Agent Performance:** An agent built using the FLUID framework achieved superior performance across several metrics, including response correctness, intervention precision, timely guidance, and response latency, when compared to other evaluated systems.
*   **Improved Human-AI Interaction:** The research aims to foster more natural and adaptive human-AI interactions by enabling situated task guidance systems to be more flexible and responsive to user needs and context.
*   **Areas for Improvement:** While FLUID shows strong performance, the paper acknowledges that further work is needed, particularly in minimizing speech overlap between the agent and the user.

## Sources

*   [FLUID: Flexible, Evidence-Grounded Situated Task Guidance](raw/fluid-flexible-evidence-grounded-situated-task-guidance.md)

## Last updated

2026-11-20

## Related pages

*   [[human-ai-interaction]]
*   [[human-robot-interaction]]
*   [[chatbots]]
*   [[measurement-tools]]