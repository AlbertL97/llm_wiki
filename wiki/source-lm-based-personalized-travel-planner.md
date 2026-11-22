# LM-based Personalized Travel Planner

**Last updated:** 2026-11-22

This paper introduces a novel hierarchical multi-agent framework designed to enhance Large Language Model (LLM)-based personalized travel planning. The proposed system addresses limitations in single-agent LLM approaches, such as difficulties with complex multi-step reasoning, constraint adherence, and modular execution.

## Key Findings & Contributions

*   **Framework Design:** A supervising chatbot agent coordinates specialized agents for tasks including schedule validation, user query formulation, real-time data retrieval, and constraint-aware itinerary generation.
*   **Enhanced Capabilities:** The framework integrates LLM reasoning with external APIs and iterative refinement mechanisms.
*   **Scoring Mechanism:** A deterministic, multi-dimensional scoring framework is employed for plan evaluation and improvement.
*   **Performance Improvements:** Evaluations on the TravelPlanner benchmark demonstrated significant gains over the ReAct baseline:
    *   10% improvement in Budget Constraint planning.
    *   25% improvement in wider constraints set-based planning.
    *   45% improvement in personalized planning results.
*   **Adaptability and Personalization:** The approach ensures adaptability, efficiency, and superior personalization in travel planning.

## Sources

*   [LM-based Personalized Travel Planner](raw/lm-based-personalized-travel-planner.md)

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[metacognitive-agent-architectures]]