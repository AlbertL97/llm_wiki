# A Conversational Agentic Interface to Physics-Based Household Digital Twins for Residential Energy Decision Support

**Authors:** Not specified in the provided text
**Date:** 2026-06-24 (v1)
**URL:** http://arxiv.org/abs/2606.31744v1

## Summary

The paper addresses the challenge of making sophisticated physics-based household energy simulations accessible to a broader range of users, including homeowners, tenants, consultants, municipal planners, retailers, and aggregators. Current methods for residential energy decision support are often limited by cost, lack of specificity, or the need for specialized expertise.

To overcome these limitations, the authors propose a conversational agentic framework. This framework integrates a Household Digital Twin (HDT), built on GridLAB-D and exposed via microservices, with a two-tier large language model (LLM) agentic layer. This LLM layer translates natural language user requests into structured simulation payloads, effectively bridging the gap between user intent and technical simulation requirements.

The system incorporates several features to enhance reliability, including:

*   **Intent Routing:** Directing user queries to the appropriate simulation components.
*   **Domain-Specific Knowledge Base:** Providing contextual information for more accurate translations and simulations.
*   **Deterministic Post-processing:** Ensuring consistent and reliable interpretation of simulation outputs.
*   **Tool-Governed Execution Policies:** Managing the execution of simulations to maintain integrity.

The framework was evaluated using a dataset of 45 prompts of varying complexity, covering different households, seasons, and override scenarios. The results demonstrate high performance metrics, including 100% schema conformance, 96.1% field-level F1 score, 90.4% value accuracy, and a 95.6% end-to-end simulation success rate. These findings suggest that conversational agentic interfaces can significantly improve the usability of detailed energy simulation tools while maintaining the necessary reliability for effective decision support in residential energy management.