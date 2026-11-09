# Compaction, decay and reinforcement in a two-tier conversational memory: a paired evaluation against retrieval-augmented generation

## Summary
This paper introduces and evaluates a novel conversational memory system that employs a **compaction** strategy, where each turn is compressed into atomic facts, in contrast to the traditional **retrieval-augmented generation (RAG)** method which keeps the full transcript for searching. The study found that the compaction method significantly outperformed RAG in accuracy (71.4% vs. 64.6%) for certain types of questions, particularly those requiring specific values, and did so with fewer prompt tokens. However, the performance gap narrowed on adversarial examples and when answers relied heavily on verbatim source wording, indicating that compaction is more effective for factual recall than for capturing nuances of phrasing.

## Key Findings

*   **Methodology:** A paired evaluation was conducted on the LoCoMo dataset, comparing a compaction-based memory system against a RAG system.
*   **Compaction Advantage:** The compaction method showed a statistically significant lead in accuracy over RAG for comparable work reports (6.8 point lead, p = 5.5e-08), using 34% fewer prompt tokens.
*   **Limitations of Compaction:** The lead of compaction decreased on an adversarial set and when reference answers required more source wording. Compaction is better suited for factual recall (e.g., values) than for capturing exact phrasing.
*   **Underlying Mechanism:** Compaction prioritizes retaining the core assertion of a fact, discarding its original wording, which explains its strengths and weaknesses.
*   **Additional Results:** The paper also reports four negative results along with their power calculations.

## Sources

*   [Compaction, decay and reinforcement in a two-tier conversational memory: a paired evaluation against retrieval-augmented generation](http://arxiv.org/abs/2611.09807v1)

## Last updated
2026-11-09

## Related pages

*   [[chatbots]]
*   [[metacognitive-agent-architectures]]
*   [[human-ai-interaction]]