# TokWatt: an open, boundary-annotated database of AI inference energy, from chat answers to agents

## Authors

*   Araouf Bhuiyan
*   Jonathan Stines
*   Joshua P. Smith
*   R. Stuart Geiger

## Date

*   2026-10-24

## Summary

This paper introduces TokWatt, a novel open database designed to standardize and clarify the energy consumption of Artificial Intelligence (AI) inference tasks. Recognizing the growing concern over AI's environmental impact and the lack of comparable data, TokWatt compiles 134 energy estimates from 13 distinct sources, covering a wide array of AI applications including chatbots, reasoning agents, image and video generation, and coding assistants. The database meticulously records measurement boundaries, methods, and functional units, enabling a reproducible procedure to scale estimates to a common boundary. This harmonization reveals a vast range in energy requirements, from fractions of a Watt-hour for simple chat responses to hundreds of Watt-hours for complex tasks like video generation or agent delegation. The paper also provides a straightforward method to estimate the grid load associated with widespread personal AI usage.

## Key Findings

*   **Energy Consumption Variability:** Published figures for AI inference energy are highly inconsistent, differing by up to two orders of magnitude due to variations in what is measured and how.
*   **TokWatt Database:** An open database containing 134 energy estimates for 20 AI tasks, drawn from 2023-2026 research.
*   **Standardization:** Each entry details measurement boundaries, units, and methods, allowing for harmonization to a common server-plus-facility standard.
*   **Task-Specific Energy Use:** Reference values highlight significant differences in energy demands across tasks:
    *   Short chat answer: ~0.34 Wh
    *   Reasoning answer: ~4.7 Wh
    *   Short video clip generation: ~124 Wh
    *   Coding agent task: ~150 Wh
*   **Consistency of Chatbots:** Multiple estimates for default production chat systems show agreement within a factor of 1.8.
*   **Grid Load Estimation:** A direct relationship is proposed to link individual AI energy use to overall grid power draw.
*   **Open Access:** The database, code, and a calculator are publicly released to promote transparency and further research.

## Sources

*   [TokWatt: an open, boundary-annotated database of AI inference energy, from chat answers to agents](https://arxiv.org/abs/2610.39846v1)

## Last updated

*   2026-10-31

## Related pages

*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[measurement-tools]]
*   [[ai-companions]]