# Source Summary: A Layered Security Framework Against Prompt Injection in RAG-Based Chatbots

## Main Findings

This paper proposes a novel three-layer security framework to combat prompt injection vulnerabilities in Retrieval-Augmented Generation (RAG) chatbots. Prompt injection, identified as a critical threat by OWASP, poses risks through direct and indirect attacks, particularly when malicious content is embedded in retrieved documents. The framework consists of:

*   **Layer 1:** Input screening using pattern matching and semantic anomaly detection.
*   **Layer 2:** Provenance-based instruction hierarchy during context assembly to prevent policy overrides.
*   **Layer 3:** Output auditing via a policy engine and semantic drift detection.

Evaluated on multiple LLMs, this layered approach drastically reduces the Attack Success Rate (ASR) from 71.4% to 11.3% with minimal latency and false positives, offering a robust and adaptive solution for securing RAG systems.

## Sources

*   [A Layered Security Framework Against Prompt Injection in RAG-Based Chatbots](http://arxiv.org/abs/2606.19660v1)

## Last updated

2026-06-21

## Related pages

*   [[chatbots]]
*   [[human-ai-interaction]]
*   [[trust]]