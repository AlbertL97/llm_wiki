# Conversational Recommendation over Live E-Commerce Catalogues with Self-Refreshing Retrieval

This paper introduces a novel approach to conversational recommender systems (CRS) specifically designed to handle the dynamic nature of live e-commerce catalogues. Current CRS typically operate on static item collections, which is a significant limitation given the continuous updates in product availability, pricing, and stock. The proposed system features a "self-refreshing retriever" that efficiently ingests, enriches, and synchronizes product feed data into a vector index. By using per-item hashes, it can identify and process only the changes (new, modified, or deleted items) rather than requiring a full catalogue rebuild, leading to greater efficiency.

The system's architecture includes a dialogue layer managed by a controller. This layer intelligently utilizes Large Language Models (LLMs) for specific tasks such as intent classification and preference elicitation, while delegating core functions like item retrieval, reranking, and diversity selection to dedicated, optimized processes. The effectiveness of this system is demonstrated through a WhatsApp shopping assistant, where users receive recommendations that reflect the most recent catalogue updates after the next successful synchronization.

## Key Findings:

*   **Dynamic Catalogue Handling:** Effectively addresses the challenge of continuously changing e-commerce product catalogues in conversational recommender systems.
*   **Efficient Indexing:** Employs a "self-refreshing retriever" that processes product feed deltas (new, changed, deleted items) for efficient updates to a vector index.
*   **Optimized LLM Usage:** Integrates an LLM strategically within a controller-based dialogue layer, using it primarily for intent classification and preference elicitation to improve performance and reduce computational overhead.
*   **Dedicated Functional Components:** Leverages dedicated functions for retrieval, reranking, and diversity selection, separating these tasks from LLM processing.
*   **Real-time Recommendations:** Enables recommendations that are closely synchronized with live catalogue changes, demonstrated via a WhatsApp shopping assistant.

## Sources:

*   Raw file: `conversational-recommendation-over-live-e-commerce-catalogues-with-self-refreshing-retrieval.md`

## Last updated:

2026-08-29

## Related pages:

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[explainability]]
*   [[persuasion-and-influence]]