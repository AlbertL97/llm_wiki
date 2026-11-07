# Persistent Retrieval for Conversational Agents: A Study of Retrieval Efficiency

**Authors:** [Not specified in the provided text]
**Date:** [Not specified in the provided text]

## Summary

This study investigates different designs for information retrieval within conversational agents, focusing on the efficiency and effectiveness of maintaining retrieval history. The authors compare three approaches:

1.  **Skill-based retrieval in the main agent:** The primary agent handles retrieval directly.
2.  **Non-persistent retrieval subagent:** A subagent retrieves information but does not maintain history across turns, requiring re-retrieval for follow-up questions.
3.  **Persistent retrieval subagent (Proposed):** This subagent maintains retrieval history across turns and provides retrieved evidence directly to the main agent. It also allows for requesting corrections.

## Key Findings

*   **Efficiency Gains:** The proposed persistent retrieval subagent significantly reduces recorded agent-model tokens (43.3% fewer) and estimated API costs (45.0% lower) compared to skill-based retrieval.
*   **Response Time Improvement:** The persistent subagent reduces average response time by 9.1% compared to skill-based retrieval and by a substantial 15.6 seconds per question compared to non-persistent retrieval.
*   **Trade-offs:** While more efficient in terms of time and cost, the persistent subagent uses 65.1% more tokens and incurs 29.1% higher estimated API cost than non-persistent retrieval.
*   **Architectural Shift:** The core contribution is a shift from subagents producing synthesized responses to maintaining retrieval state and supplying raw evidence for the main agent's evaluation and answer generation.

## Evaluation Settings

The designs were evaluated on enterprise questions in various contexts:

*   Independently posed questions.
*   Questions within shared conversations.
*   Dependent follow-up questions.
*   Across five multi-turn settings.