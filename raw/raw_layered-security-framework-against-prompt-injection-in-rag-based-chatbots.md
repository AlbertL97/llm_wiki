## A Layered Security Framework Against Prompt Injection in RAG-Based Chatbots

**Authors:** [Not specified in the provided text]
**Date:** 2026-06-19

### Summary
Prompt injection is a significant threat to large language model (LLM) deployments, particularly in Retrieval-Augmented Generation (RAG) chatbots. Existing security measures are often incomplete, as they may only address vulnerabilities at specific stages of the chatbot's operation (e.g., input filtering or output monitoring) and fail to prevent indirect prompt injection through compromised knowledge base documents.

This paper introduces a novel three-layer security framework designed to mitigate both direct and indirect prompt injection attacks throughout the entire inference pipeline of RAG-based chatbots.

**Framework Layers:**
*   **Layer 1 (Input Screening):** This layer employs a rule-based pattern library and a fine-tuned semantic anomaly classifier to screen user input for malicious content.
*   **Layer 2 (Context Assembly):** This layer enforces a provenance-based instruction hierarchy, ensuring that retrieved content cannot override the operator's defined policies during context assembly.
*   **Layer 3 (Output Auditing):** This layer audits the model's output using a policy rule engine and a semantic drift detector before the response is delivered to the user.

**Key Features and Benefits:**
*   **Comprehensive Protection:** The layered approach addresses vulnerabilities across the RAG pipeline, including indirect injections via poisoned knowledge base documents.
*   **Model Agnostic:** The framework is designed to be deployable as middleware without requiring modifications to the underlying LLM.
*   **Performance:** Evaluation on diverse models (GPT-4o, Llama 3, Mistral 7B) with 5,080 samples showed a significant reduction in Attack Success Rate (ASR) from 71.4% to 11.3%, outperforming existing single-layer defenses and guardrail systems.
*   **Low Overhead:** The framework maintains a low false positive rate (4.8%) and a median latency overhead of 61.2 ms.
*   **Adaptive Security:** A continuous audit loop aggregates logs and supports retraining of the classifier to adapt to new attack patterns.
*   **Complementary Protection:** Ablation studies confirmed that each layer contributes unique and synergistic protection, with the combined effect being greater than the sum of individual layer protections.

This framework represents a significant advancement in securing RAG-based chatbots against increasingly sophisticated prompt injection attacks.