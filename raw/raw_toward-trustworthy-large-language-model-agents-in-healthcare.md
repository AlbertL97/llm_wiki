# Toward Trustworthy Large Language Model Agents in Healthcare

**Authors:** Hadi Hasan, Anya Sharma, David Lee
**Date:** 2026-07-04 (v1)

## Abstract

Healthcare appointment scheduling is a significant operational challenge due to manual processes, fragmented systems, and high administrative costs, leading to limited provider availability and reduced patient access. This paper presents CareConnect, a conversational agent designed for healthcare logistics automation that prioritizes safety. CareConnect utilizes large language model (LLM) function calling, retrieval-augmented generation (RAG), and layered deterministic safety guardrails. The system integrates eight domain-specific tools to manage appointment booking, modifications, cancellations, and facility information retrieval, while strictly adhering to scope limitations that prohibit medical advice or diagnoses. Safety-critical scenarios are managed through deterministic short-circuit mechanisms for emergency detection and refusal of medical intent. The system was evaluated on a benchmark of 680 task-oriented scenarios, covering end-to-end workflows, multi-turn interactions, and edge cases. Experimental results show a 91.8% task completion rate, a median latency of 2.2 seconds per request, and 96.0% safety compliance on safety-critical evaluations. Furthermore, CareConnect achieved an average operational cost of $0.0324 per appointment, demonstrating substantial cost savings compared to manual scheduling. These findings suggest that carefully scoped and rigorously safeguarded LLM-based agents can reliably automate complex healthcare operational workflows while ensuring safety and cost-effectiveness.

## Key Findings

*   **CareConnect System:** A safety-first conversational agent for healthcare logistics automation.
*   **Technologies Used:** LLM function calling, Retrieval-Augmented Generation (RAG), deterministic safety guardrails.
*   **Functionality:** Automates appointment booking, modification, cancellation, and facility information retrieval.
*   **Safety Features:** Strict scope constraints against medical advice/diagnosis, deterministic short-circuit mechanisms for emergencies.
*   **Performance Metrics:**
    *   91.8% task completion rate.
    *   2.2 seconds median per-request latency.
    *   96.0% safety compliance on safety-critical evaluations.
    *   $0.0324 average operational cost per appointment (significant cost reduction).
*   **Conclusion:** LLM agents, when carefully designed and safeguarded, can reliably automate complex healthcare operations, ensuring safety and cost efficiency.

## Public Availability

*   Source code and system implementation are publicly available at [https://github.com/Hadi-Hsn/CareConnect](https://github.com/Hadi-Hsn/CareConnect).
