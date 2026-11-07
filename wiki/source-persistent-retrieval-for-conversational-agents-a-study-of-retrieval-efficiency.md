# Persistent Retrieval for Conversational Agents: A Study of Retrieval Efficiency

This paper introduces and evaluates a persistent retrieval subagent designed to enhance the efficiency of conversational agents. The proposed architecture maintains retrieval history across conversational turns, leading to significant improvements in token usage, API costs, and response times when compared to traditional skill-based or non-persistent retrieval methods. By providing raw evidence directly to the main agent for evaluation, this approach aims to optimize the interaction dynamics between the agent's core logic and its information retrieval capabilities.

## Key Findings

*   **Improved Efficiency:** The persistent retrieval subagent demonstrates substantial reductions in token consumption and API costs.
*   **Faster Responses:** A notable decrease in average response times was observed, particularly for follow-up questions.
*   **Architectural Innovation:** The study proposes a shift from subagents synthesizing responses to them managing retrieval state and supplying direct evidence.
*   **Contextual Evaluation:** The effectiveness of different retrieval designs was assessed across independent, shared, and dependent conversational turns.

## Sources

*   [Persistent Retrieval for Conversational Agents: A Study of Retrieval Efficiency](http://arxiv.org/abs/2611.07899v1)

## Last updated

2026-11-07

## Related pages

*   [[chatbots]]
*   [[metacognitive-agent-architectures]]
*   [[human-ai-interaction]]