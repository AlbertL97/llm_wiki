# ETAMem: Decoupling and Aligning Heterogeneous Memory for Long-Term Conversational Agents

**Authors:** Not specified in the provided abstract.
**Date:** 2026-10-28 (Based on URL v1 timestamp)

## Summary

This paper addresses the challenges of Information Entanglement and Organizational Mismatch in long-term memory systems for Large Language Models (LLMs) used in conversational agents. The proposed ETAMem framework decouples heterogeneous conversational information into atomic memory units, specifically identifying affective information. It then organizes these units into three complementary hierarchical views: Event, Affect, and Time. This multi-view memory structure allows for better alignment of memory representations and organization with the distinct characteristics of different types of information. ETAMem employs incremental maintenance with adaptive calibration and uses entropy-based retrieval to allocate query-specific budgets across views, performing hierarchical searches within each. Experiments on LoCoMo and LongMemEval-S datasets show ETAMem outperforming state-of-the-art baselines in accuracy improvements (12.46% and 7.96% respectively) while maintaining competitive token efficiency. The analysis further highlights the complementary benefits of the distinct memory views.