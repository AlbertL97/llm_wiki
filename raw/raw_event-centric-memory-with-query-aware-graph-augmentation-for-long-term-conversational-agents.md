Authors: Zhiting Hu, Chang Liu, Weizhu Chen, Hongfei Li, Liangchen Luo, Xutai Zhang, Jinhui Xu, Zhibo Chen
Date: 2026-10-10

Title: Event-Centric Memory with Query-Aware Graph Augmentation for Long-Term Conversational Agents

Description: 
For persistent and personalized conversational agents, memory systems can enable them to remember, update, and reason over long histories by storing past interactions and retrieving relevant information. Existing memory systems typically follow two paradigms: flat-structured memory and graph-based memory. The former is lightweight but leaves event relations and state updates implicit, while the latter explicitly models memory structure but incurs additional construction cost and introduces irrelevant relations over long histories. To address these limitations, we propose QGMem, a novel memory construction and activation framework motivated by human memory, in which experience is organized into events and query-relevant events are modeled by graph as working memory. QGMem converts long dialogue histories into event-indexed atomic memory units that preserve individual experiences and consolidates related units into dynamic memory traces that retain state trajectories and current states. When a query arrives, hybrid memory retrieval gathers complementary candidate memories, and query-aware reranking activates the most relevant units as a compact working memory. To expose relational dependencies in the working memory and support conflict-aware reasoning, QGMem organizes the working memory as a local graph, which is then encoded as a graph token and provided to the LLM together with the textual working memory to improve evidence utilization during answer generation. Experiments across six benchmarks validate the framework and show consistent gains in retrieval, multi-hop evidence composition, conflict resolution, and ultra-long dialogue reasoning with compact contexts and moderate inference cost.

Key Findings:
- Proposes QGMem, a memory framework for conversational agents that mimics human memory organization into events.
- Organizes long dialogue histories into event-indexed atomic memory units and dynamic memory traces.
- Uses a query-aware graph to model working memory, capturing relational dependencies.
- Achieves consistent gains in retrieval, evidence composition, conflict resolution, and long-term reasoning.
- Aims to improve persistence and personalization of conversational AI agents.