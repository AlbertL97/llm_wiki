# Source Summary: A Conversational Agentic Interface to Physics-Based Household Digital Twins for Residential Energy Decision Support

## Overview

This paper presents a novel conversational agentic framework designed to make complex physics-based household energy simulations more accessible. By integrating a Household Digital Twin (HDT) with a large language model (LLM) agentic layer, the system allows users to interact with detailed energy models using natural language, thereby lowering the technical barrier for decision support. The framework is intended for various stakeholders, including homeowners, consultants, and energy market actors, to facilitate informed choices regarding residential energy efficiency and resource management.

## Key Findings

*   **Problem:** Existing tools for residential energy decision support are often costly, lack specificity, or require specialized expertise, limiting their widespread adoption.
*   **Solution:** A conversational agentic interface built upon a physics-based Household Digital Twin (HDT) and a two-tier LLM architecture. This allows users to issue commands in natural language, which are then translated into structured simulation inputs.
*   **Architecture Components:** The system includes a GridLAB-D based HDT exposed via microservices, an LLM agentic layer for natural language processing, a domain-specific knowledge base, and robust mechanisms for intent routing, post-processing, and execution policies to ensure reliability.
*   **Performance:** Evaluation on a dataset of 45 diverse prompts showed high reliability, with 100% schema conformance, 96.1% field-level F1 accuracy, 90.4% value accuracy, and a 95.6% end-to-end simulation success rate.
*   **Impact:** The findings indicate that such conversational interfaces can substantially reduce the usability barrier for sophisticated energy simulation tools, enabling better decision-making in residential energy management.

## Sources

*   [A Conversational Agentic Interface to Physics-Based Household Digital Twins for Residential Energy Decision Support](http://arxiv.org/abs/2606.31744v1)

## Last updated

2026-07-01

## Related pages

*   [[human-ai-interaction]]
*   [[chatbots]]
*   [[explainability]]