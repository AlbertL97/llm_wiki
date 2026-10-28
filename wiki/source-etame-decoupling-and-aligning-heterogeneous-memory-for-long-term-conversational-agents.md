# ETAMem: Decoupling and Aligning Heterogeneous Memory for Long-Term Conversational Agents

## Key Findings

*   **Problem:** Existing long-term memory systems for conversational agents suffer from Information Entanglement (mixing heterogeneous information) and Organizational Mismatch (over-reliance on semantic similarity). This hinders coherent and personalized long-term interactions.
*   **Solution: ETAMem:** A multi-view memory framework that decouples heterogeneous conversational information.
    *   Extracts atomic memory units and identifies affective information.
    *   Organizes information into three hierarchical, complementary views: Event, Affect, and Time.
*   **Functionality:**
    *   Incremental maintenance of memory structures with adaptive thresholds.
    *   Entropy-based retrieval that allocates query-specific budgets across views and performs hierarchical search.
*   **Performance:** Demonstrated significant improvements over state-of-the-art baselines on LoCoMo and LongMemEval-S datasets, with relative accuracy gains of 12.46% and 7.96% respectively, while maintaining token efficiency.
*   **Benefits:** The distinct memory views offer complementary advantages for conversational recall and personalization.

## Sources

*   ETAMem: Decoupling and Aligning Heterogeneous Memory for Long-Term Conversational Agents (http://arxiv.org/abs/2610.37443v1)

## Last updated

2026-10-28

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[ai-companions]]
*   [[metacognitive-agent-architectures]]
