# EvoLink-Bench: A Benchmark for Evaluating Self-Evolving Agents in Long-Horizon Interdependent Task Streams

## Overview

This paper introduces **EvoLink-Bench**, a novel benchmark designed to evaluate the self-evolving capabilities of large language model (LLM) agents operating in dynamic environments over extended periods and across interdependent tasks. As AI agents move beyond simple chatbots to autonomous systems, their ability to learn from past interactions and adapt future performance is critical. EvoLink-Bench addresses the limitations of existing benchmarks by focusing on long-horizon, interdependent task streams, enabling a more realistic assessment of agent evolution.

## Benchmark Design

EvoLink-Bench covers diverse workflows such as daily office tasks, multi-turn dialogues, and research processes, all characterized by persistent workspaces and task dependencies. The benchmark is structured into two levels:

*   **Level 1 (L1):** Focuses on the acquisition and revision of language-expressible knowledge.
*   **Level 2 (L2):** Assesses the development of task-level execution capabilities based on feedback.

The evaluation methodology also distinguishes between within-task recovery, persistent-state updates, and the crucial aspect of experience reuse in subsequent tasks.

## Key Findings

Experiments were conducted on five agent frameworks across various configurations and persistence conditions, yielding significant insights:

*   **Framework Performance:** No single agent framework demonstrated consistent superiority across both knowledge-level (L1) and capability-level (L2) evaluations, suggesting that current architectures may not universally support all forms of agent evolution.
*   **Limited Recovery:** Task retries, a common recovery strategy, only managed to salvage a small portion of failed tasks, indicating the need for more robust error handling and learning mechanisms.
*   **State Persistence:** Simply maintaining persistent states across tasks did not guarantee improved performance on later tasks. The efficacy depends on how this persistent information is utilized.
*   **Divergent Evolution:** The mechanisms for evolving knowledge (L1) appear to differ from those for evolving task capabilities (L2), implying distinct learning requirements for each.
*   **Domain Specificity:** Improvements and the effectiveness of evolutionary processes were not uniform across different domains and task streams, highlighting challenges in achieving generalizable agent adaptability.

## Implications

EvoLink-Bench provides a valuable tool for advancing research into self-evolving AI agents. The findings highlight the complexity of developing agents that can effectively learn, adapt, and generalize across long-horizon, interdependent tasks. The research points towards the necessity of developing more sophisticated learning architectures and mechanisms to address the distinct challenges of knowledge and capability evolution.

## Sources

*   EvoLink-Bench: A Benchmark for Evaluating Self-Evolving Agents in Long-Horizon Interdependent Task Streams (2026-11-21)

## Last updated

2026-11-27

## Related pages

*   [[human-ai-interaction]]
*   [[measurement-tools]]
*   [[metacognitive-agent-architectures]]