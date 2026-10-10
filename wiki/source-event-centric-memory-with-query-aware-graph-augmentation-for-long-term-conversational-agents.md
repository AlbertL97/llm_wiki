# Source Summary: Event-Centric Memory with Query-Aware Graph Augmentation for Long-Term Conversational Agents

## Authors

* Zhiting Hu
* Chang Liu
* Weizhu Chen
* Hongfei Li
* Liangchen Luo
* Xutai Zhang
* Jinhui Xu
* Zhibo Chen

## Date

2026-10-10

## Summary

This paper introduces QGMem, a novel memory framework for conversational agents designed to enhance their long-term memory capabilities. Inspired by human memory, QGMem organizes past interactions into event-indexed units and consolidates them into dynamic memory traces. When a query is received, a query-aware graph is used to form a compact working memory, which improves the agent's ability to retrieve relevant information, perform multi-hop reasoning, resolve conflicts, and generate answers. The framework aims to create more persistent and personalized conversational AI.

## Key Findings

*   **Event-Centric Organization:** Long dialogue histories are converted into event-indexed atomic memory units, preserving individual experiences.
*   **Dynamic Memory Traces:** Related memory units are consolidated into dynamic traces that retain state trajectories and current states.
*   **Query-Aware Graph as Working Memory:** A graph structure models query-relevant events as working memory, exposing relational dependencies and supporting conflict-aware reasoning.
*   **Hybrid Memory Retrieval and Reranking:** A multi-stage retrieval process gathers candidate memories and reranks them using query-awareness to activate the most relevant units.
*   **Improved Reasoning and Evidence Utilization:** The graph-based working memory is encoded and provided to the LLM, enhancing its ability to utilize evidence for answer generation.
*   **Performance Gains:** Experiments across six benchmarks demonstrate consistent improvements in retrieval, multi-hop evidence composition, conflict resolution, and ultra-long dialogue reasoning.
*   **Efficiency:** The framework achieves these gains with compact contexts and moderate inference costs.

## Sources

*   [Event-Centric Memory with Query-Aware Graph Augmentation for Long-Term Conversational Agents](http://arxiv.org/abs/2610.11920v1) (Raw File: `event-centric-memory-with-query-aware-graph-augmentation-for-long-term-conversational-agents.md`)

## Last updated

2026-10-10

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[metacognitive-agent-architectures]]
*   [[agentic-knowledgeable-self-awareness]]