# Retrieval-Grounded Multilingual LLM Assistance for Island Smallholder Farmers

**Authors:** Unknown (as per the provided arXiv URL, authors are not explicitly listed in the prompt)
**Date:** 2026-06-25 (based on the prompt's instruction for 'Last updated')
**URL:** http://arxiv.org/abs/2606.25647v1

## Summary

Smallholder farming communities in remote, depopulating areas often lack access to crucial agricultural advice, and their local knowledge, frequently expressed in regional dialects, is underrepresented in global datasets used to train Large Language Models (LLMs). Consequently, general-purpose chatbots offer fluent but unreliable answers, lacking grounding in authoritative local data that farmers can trust.

This paper presents Falco eleonorae, a conversational AI assistant integrated into a bilingual (Greek-primary, English-secondary) e-market platform for farmers and cooperatives in a specific island region. It functions as a Backend-for-Frontend (BFF) proxy, interacting with a geospatially-aware agronomic agent. Answer generation and tool selection are delegated to a managed OpenAI GPT-5-family model service, while a vision-capable model directly handles image analysis of uploaded field photographs, ensuring only text is passed to the agent. Voice input is processed by a managed EU-based speech-to-text service.

Crucially, grounding is achieved not through a self-hosted vector database but via tool-augmented retrieval. A Model Context Protocol (MCP) tool queries a curated, read-only, bilingual data interface. This interface exposes information on local crops, seasonal calendars, traditional practices, a dialect glossary, products, agritourism experiences, cooperatives, and training content. Each piece of data is wrapped in a geospatial Well-Known Text envelope, anchoring the agent to the specific area of interest.

The paper details the assistant's multilingual capabilities, voice and image modalities, its progressive web application design for low-bandwidth field use and accessibility, and its security and data-protection measures.

The authors argue that for small, resource-constrained rural deployments, a managed, grounded multilingual assistant is more attainable and trustworthy than a self-hosted model.

## Key Findings and Contributions

*   **Problem Addressed:** Lack of accessible, trustworthy agricultural advice for remote smallholder farmers due to data limitations in LLMs and language barriers.
*   **Proposed Solution:** Falco eleonorae, a retrieval-grounded, multilingual AI assistant.
*   **Architecture:** Thin BFF proxy delegating to upstream LLM services (GPT-5 family) and vision models, with a geospatially-aware agronomic agent.
*   **Grounding Mechanism:** Tool-augmented retrieval from a curated, bilingual, geospatial dataset, rather than a vector database.
*   **Data Sources:** Local crops, seasonal calendar, traditional practices, dialect glossary, products, agritourism, cooperatives, training content.
*   **Modalities:** Multilingual (Greek/English), voice input (speech-to-text), image input (field photograph analysis).
*   **User Experience:** Progressive web application, designed for low-bandwidth field use and accessibility.
*   **Trust Aspect:** Emphasis on grounding in local, authoritative data to build farmer trust.
*   **Deployment Argument:** Managed, grounded assistants are more feasible and trustworthy for resource-constrained rural areas than self-hosted models.

## Sources

*   Retrieval-Grounded Multilingual LLM Assistance for Island Smallholder Farmers. http://arxiv.org/abs/2606.25647v1

## Last updated

2026-06-25

## Related pages

*   [[human-ai-interaction]]
*   [[trust]]
*   [[chatbots]]
*   [[human-robot-interaction]]
*   [[explainability]]
*   [[mind-perception]]