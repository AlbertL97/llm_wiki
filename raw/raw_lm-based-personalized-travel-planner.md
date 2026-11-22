Authors: Nima Shakla, Rianne Schouten, Yoram K.A. Aarts, Diederik M.J. van de Kamp, Maarten J. de Jong, Maarten W. Maarten
Date: 2026-11-19

Summary:
This research addresses the limitations of single-agent LLMs in complex travel planning tasks that require multi-step reasoning, constraint adherence, and modular execution. The authors introduce a hierarchical multi-agent framework designed to overcome these challenges. The framework features a supervising chatbot agent that orchestrates specialized agents responsible for tasks such as schedule validation, user query formulation, real-time data retrieval, and constraint-aware itinerary generation.

Key Features of the Framework:
*   **Hierarchical Multi-Agent System:** A top-level supervising agent manages specialized subordinate agents.
*   **Specialized Agents:** Dedicated agents for specific planning sub-tasks.
*   **LLM Integration:** Leverages LLM reasoning capabilities.
*   **External API Integration:** Connects to external data sources for real-time information.
*   **Iterative Refinement:** Incorporates mechanisms for improving plans through feedback loops.
*   **Deterministic Scoring Framework:** Utilizes a multi-dimensional scoring system to evaluate and refine plans.

Evaluation and Results:
The proposed framework was evaluated on the TravelPlanner benchmark. The results show substantial improvements over the ReAct baseline:
*   **Budget Constraint Planning:** 10% improvement.
*   **Wider Constraints Set-Based Planning:** 25% improvement.
*   **Personalized Planning Results:** 45% improvement.

These improvements highlight the effectiveness of the multi-agent approach in delivering adaptable, efficient, and highly personalized travel planning solutions.

Code Availability: https://github.com/nimashaklaa/TravelPlanner_Research