# hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising

## Findings

*   **Problem:** University academic advising chatbots often provide incorrect or irrelevant information because they do not account for individual student profiles (e.g., department, admission cohort, degree program). Standard profile-blind retrievers surface plausible but inapplicable evidence.
*   **Solution:** The paper introduces **proFILL**, a method to transform a rule-based advising chatbot (hoBIT) into a profile-aware Retrieval-Augmented Generation (RAG) system.
*   **Mechanism:** Instead of requiring a complete student profile upfront, proFILL progressively acquires only the necessary profile attributes for each query. This process is guided by the query's intent and the initially retrieved evidence.
*   **Profile-Aware Indexing:** The system uses these acquired attributes to condition retrieval over a specialized profile-aware index, ensuring more contextually appropriate results.
*   **Evaluation:** Extensive experiments and a human preference study were conducted.
*   **Results:** proFILL significantly outperforms diverse RAG baselines. Target users preferred the proFILL system, demonstrating its practical utility.
*   **Deployment:** The system remains effective when used with open-weight models, facilitating cost-effective on-premise deployment.

## Sources

*   [hoBIT: A Profile-Aware Retrieval-Augmented Chatbot for University Academic Advising](http://arxiv.org/abs/2608.26604v1)

## Last updated

2026-08-29

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[explainability]]
*   [[trust]]