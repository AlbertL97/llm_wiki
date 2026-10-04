# MemFit: Efficient Long-Term Agentic Memory

**Authors:** Not specified in the provided text.
**Date:** Not specified in the provided text, but the arXiv version is v1 from 2026-10-04.

## Description:

Long-term memory systems for large language models (LLMs) are crucial for extending the reasoning capabilities of AI agents across various applications. However, current systems often rely on LLM agents to manage memory, leading to expensive and inefficient write operations. This paper proposes MemFit, a novel long-term memory system designed for conversational agents that significantly reduces the cost and latency associated with memory operations.

MemFit distinguishes itself from existing systems in two key ways:

1.  **LLM-Free Insertion:** Instead of relying on LLM calls for memory construction or employing lossy compression techniques, MemFit stores each conversational turn verbatim in an append-only store. This allows for near-instantaneous, LLM-free insertion. Turns are indexed using segment summaries rather than being replaced, preserving detailed information.
2.  **LLM-Free Retrieval:** MemFit employs a multi-path retrieval strategy that operates without LLM calls. This strategy combines lexical and semantic signals with cross-encoder reranking, and it is designed to work over caption-augmented episodes in both textual and multimodal contexts.

## Empirical Results:

Empirical evaluations were conducted on three widely adopted benchmarks: LoCoMo, MemGallery, and LongMemEval-S. The results demonstrate that MemFit achieves state-of-the-art performance on these benchmarks. Crucially, it also achieves several-fold reductions in memory construction time and cost compared to existing methods. This makes MemFit a scalable and efficient solution for developing persistent agentic memory capabilities.