# Toward Trustworthy Large Language Model Agents in Healthcare

**Authors:** Hadi Hasan, Anya Sharma, David Lee

**Last updated:** 2026-07-07

## Introduction

Healthcare appointment scheduling is a significant bottleneck due to manual processes, fragmented systems, and high administrative overhead. This leads to constrained provider availability and reduced patient access to care. This paper introduces CareConnect, a conversational agent designed to automate healthcare logistics while prioritizing safety.

## System Design and Functionality

CareConnect leverages several key technologies:

*   **Large Language Models (LLMs):** Forms the core of the conversational capabilities.
*   **Function Calling:** Enables the LLM to interact with external tools and systems.
*   **Retrieval-Augmented Generation (RAG):** Enhances the LLM's knowledge base with relevant information.
*   **Deterministic Safety Guardrails:** Implements layered safety mechanisms to prevent errors and ensure safe operation.

The system orchestrates eight domain-specific tools to support various tasks, including:

*   Appointment booking
*   Appointment modification
*   Appointment cancellation
*   Facility information retrieval

Strict scope constraints are enforced to prohibit the agent from providing medical advice or diagnoses.

## Safety Mechanisms

Safety is a paramount concern. CareConnect incorporates:

*   **Strict Scope Enforcement:** Prevents the agent from venturing into medical advice.
*   **Deterministic Short-Circuit Mechanisms:** Designed to detect emergency situations and refuse medical intent, ensuring critical safety protocols are met.

## Evaluation and Results

CareConnect was evaluated on a comprehensive benchmark comprising 680 task-oriented scenarios, covering:

*   End-to-end workflows
*   Multi-turn interactions
*   Edge cases

Key performance indicators include:

*   **Task Completion Rate:** 91.8%
*   **Median Per-Request Latency:** 2.2 seconds
*   **Safety Compliance (Safety-Critical Subset):** 96.0%
*   **Average Operational Cost Per Appointment:** $0.0324, indicating significant cost reduction compared to manual scheduling.

## Conclusion

The findings demonstrate that meticulously scoped and rigorously safeguarded LLM-based agents, such as CareConnect, can reliably automate complex healthcare operational workflows. The system achieves high safety guarantees and substantial cost efficiency, paving the way for wider adoption of AI in critical healthcare logistics.

## Sources

*   Hadi Hasan, Anya Sharma, David Lee. (2026-07-04). Toward Trustworthy Large Language Model Agents in Healthcare. arXiv preprint arXiv:2607.05055v1. [http://arxiv.org/abs/2607.05055v1](http://arxiv.org/abs/2607.05055v1)

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[chatbots]]
*   [[medical-ai]]
